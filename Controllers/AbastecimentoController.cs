using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SmartFleet.Controllers;
using SmartFleet.Service;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Controllers
{
    public class AbastecimentoController : GenericController
    {
        private readonly VeiculoService veiculoService;
        private readonly AbastecimentoService abastecimentoService;
        private readonly PessoaJuridicaService pessoaJuridicaService;
        
        public AbastecimentoController()
        {
            veiculoService = new VeiculoService();
            abastecimentoService = new AbastecimentoService();
            pessoaJuridicaService = new PessoaJuridicaService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Abastecimento>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Abastecimento item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = abastecimentoService.GetAllByPage(item, parm);

                return Json(new
                {
                    ok = true,
                    sEcho = parm.sEcho,
                    iTotalRecords = items.Count(),
                    iTotalDisplayRecords = parm.totalRecords,
                    aaData = items.Select(x => new
                    {
                        IdeAbastecimento = x.IdeAbastecimento,
                        DatAbastecimento = x.DatAbastecimento.ToString("dd/MM/yyyy"),
                        VlrAbastecimento = x.VlrAbastecimento.ToString("C"),
                        Veiculo = new { DscMarcaModelo = x.Veiculo.DscMarcaModelo },
                        PessoaJuridica = new { NomRazaoSocial = x.PessoaJuridica.NomRazaoSocial }                      
                    })
                });
            }
            catch (Exception ex)
            {
                return Json(CreateMessageDatatable(ex));
            }
        }

        public ActionResult Incluir()
        {
            CarregarViewBag(new Abastecimento());
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Abastecimento item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    abastecimentoService.Save(item);
                    return Json(CreateMessageJson(msg));
                } 
                msg = new Mensagem(Descricoes.MSG025, Tipo.Alerta);
                return Json(CreateMessageJson(msg));                
            }
            catch (Exception ex) 
            {
                return Json(CreateMessageJson(ex));                
            }
        }

        public ActionResult Alterar(int id)
        {
            var item = abastecimentoService.GetById(id);
            CarregarViewBag(item);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Abastecimento item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    abastecimentoService.Save(item);
                    return Json(CreateMessageJson(msg));
                } 
                msg = new Mensagem(Descricoes.MSG025, Tipo.Alerta);
                return Json(CreateMessageJson(msg));                
            }
            catch (Exception ex) 
            {
                return Json(CreateMessageJson(ex));                
            } 
        }

        [HttpPost]
        public JsonResult Excluir(int id)
        {
            try
            {
                var msg = CreateMessageJson(new Mensagem(Descricoes.MSG003, Tipo.Sucesso));
                abastecimentoService.Delete(id);
                return Json(msg);
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }
        public JsonResult VerificarExclusao(int id)
        {
            try
            {
                var msg = abastecimentoService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }
        private void CarregarViewBag() 
        {            
            var postoAbastecimento = pessoaJuridicaService
            .GetAll(x => x.IdePessoaJuridica > 0)
            .ToList();

            ViewBag.PostoAbastecimento = postoAbastecimento
                .Select( x => new SelectListItem() 
                { Value = x.IdePessoaJuridica.ToString(), Text = x.NomRazaoSocial } )
                .OrderBy(x => x.Text)
                .ToList();

            var veiculo = veiculoService
            .GetAll(x => x.IdeVeiculo > 0)
            .ToList();

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { Value = x.IdeVeiculo.ToString(), Text = string.Format("{0} - {1}", x.DscMarcaModelo, x.NumPlaca) } )
                .OrderBy(x => x.Text)
                .ToList();

        } 
        private void CarregarViewBag(Abastecimento item) 
        {            
            var idcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);

            var postoAbastecimento = pessoaJuridicaService
            .GetAll(x => x.IdePessoaJuridica > 0)
            .ToList();

            ViewBag.PostoAbastecimento = postoAbastecimento
                .Select( x => new SelectListItem() 
                { Value = x.IdePessoaJuridica.ToString(), Text = x.NomRazaoSocial } )
                .OrderBy(x => x.Text)
                .ToList();

            var veiculo = veiculoService
            .GetAll(x => (x.IdcSituacao == idcSituacao) ||
                         (x.IdeVeiculo == item.IdeVeiculo)
                   )
            .ToList();

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { Value = x.IdeVeiculo.ToString(), Text = string.Format("{0} - {1}", x.DscMarcaModelo, x.NumPlaca) } )
                .OrderBy(x => x.Text)
                .ToList();

            var tipoCombustivel = veiculoService.BuscarTipoCombustivel();

            ViewBag.TipoCombustivel = tipoCombustivel
                .Select( x => new SelectListItem() 
                { Value = x.IdeTipoCombustivel.ToString(), Text = x.DscTipoCombustivel } )
                .OrderBy(x => x.Text)
                .ToList();

        }
    }
}
