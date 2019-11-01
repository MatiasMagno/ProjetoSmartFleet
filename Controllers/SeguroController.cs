using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartFleet.Controllers;
using SmartFleet.Service;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SmartFleet.Controllers
{
    public class SeguroController : GenericController
    {
        private readonly SeguroService seguroService;
        private readonly VeiculoService veiculoService;
        private readonly PessoaJuridicaService pessoaJuridicaService;

        public SeguroController()
        {
            seguroService = new SeguroService();
            veiculoService = new VeiculoService();
            pessoaJuridicaService = new PessoaJuridicaService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Seguro>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Seguro item)
        {
            try
            {         
                parm.sColumns = parm.sColumns.Replace("veiculo.dscMarcaModelo","Veiculo.DscMarcaModelo");
                parm.sColumns = parm.sColumns.Replace("seguradora.nomRazaoSocial","Seguradora.NomRazaoSocial");

                SalvarPesquisa(item, parm);
                var items = seguroService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                         IdeSeguro = x.IdeSeguro,
                         Veiculo = new { DscMarcaModelo = x.Veiculo.DscMarcaModelo },
                         Seguradora = new { NomRazaoSocial = x.Seguradora.NomRazaoSocial },
                         NumApolice = x.NumApolice,
                         DatVigenciaInicio = x.DatVigenciaInicio.Value.ToString("dd/MM/yyyy"),
                         DatVigenciaFim = x.DatVigenciaFim.Value.ToString("dd/MM/yyyy"),
                         VlrFranquia = x.VlrFranquia.ToString("C")
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
            CarregarViewBag(new Seguro());
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Seguro item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    seguroService.Save(item);
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
            var item = seguroService.GetById(id);
            CarregarViewBag(item);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Seguro item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    seguroService.Save(item);
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
                seguroService.Delete(id);
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
                var msg = seguroService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }
     
        private void CarregarViewBag() 
        {            
            var veiculo = veiculoService
            .GetAll(x => x.IdeVeiculo > 0); 

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { 
                    Value = x.IdeVeiculo.ToString(), 
                    Text = string.Format("{0} - {1}", x.DscMarcaModelo, x.NumPlaca) 
                })
                .OrderBy(x => x.Text)
                .ToList();

            var seguradora = pessoaJuridicaService
            .GetAll(x => x.IdePessoaJuridica > 0);

            ViewBag.Seguradora = seguradora
                .Select( x => new SelectListItem() 
                { 
                    Value = x.IdePessoaJuridica.ToString(), 
                    Text = x.NomRazaoSocial 
                })
                .OrderBy(x => x.Text)
                .ToList();

        }        

        private void CarregarViewBag(Seguro item) 
        {            
            var idcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);
            var veiculo = veiculoService
            .GetAll(x => x.IdcSituacao == idcSituacao || 
                         x.IdeVeiculo == item.IdeVeiculo); 

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { 
                    Value = x.IdeVeiculo.ToString(), 
                    Text = string.Format("{0} - {1}", x.DscMarcaModelo, x.NumPlaca) 
                })
                .OrderBy(x => x.Text)
                .ToList();

            var seguradora = pessoaJuridicaService
            .GetAll(x => x.IdePessoaJuridica > 0);

            ViewBag.Seguradora = seguradora
                .Select( x => new SelectListItem() 
                { 
                    Value = x.IdePessoaJuridica.ToString(), 
                    Text = x.NomRazaoSocial 
                })
                .OrderBy(x => x.Text)
                .ToList();

        }  


    }
}
