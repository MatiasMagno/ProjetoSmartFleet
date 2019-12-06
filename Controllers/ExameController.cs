using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using SmartFleet.Controllers;
using SmartFleet.Service;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Controllers
{
    public class ExameController : GenericController
    {
        private readonly ExameService exameService;
        private readonly ColaboradorService colaboradorService;
        private readonly PessoaJuridicaService pessoaJuridicaService;

        public ExameController()
        {
            exameService = new ExameService();
            colaboradorService = new ColaboradorService();
            pessoaJuridicaService = new PessoaJuridicaService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag(new Exame());
            ParamPesq pesq = BuscarPesquisa<Exame>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Exame item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = exameService.GetAllByPage(item, parm);

                return Json(new
                {
                    ok = true,
                    sEcho = parm.sEcho,
                    iTotalRecords = items.Count(),
                    iTotalDisplayRecords = parm.totalRecords,
                    aaData = items.Select(x => new
                    {
                        IdeExame = x.IdeExame,
                        Colaborador = new {
                        NomColaborador = x.Colaborador.NomColaborador
                        },
                        Laboratorio = new {
                        NomRazaoSocial = x.Laboratorio.NomRazaoSocial
                        },
                        DatExame = x.DatExame.ToString("dd/MM/yyyy"),
                        NomMedico = x.NomMedico,
                        NumCRMMedico = x.NumCRMMedico
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
            CarregarViewBag(new Exame());
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Exame item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    exameService.Save(item);
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
            var item = exameService.GetById(id);
            CarregarViewBag(item);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Exame item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    exameService.Save(item);
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
                exameService.Delete(id);
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
                var msg = exameService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        private void CarregarViewBag(Exame item) 
        {            
            // Recupera todos os seguros cadastrados
            var laboratorio = pessoaJuridicaService
            .GetAll(x => x.IdePessoaJuridica > 0)
            .ToList();

            ViewBag.Laboratorio = laboratorio
                .Select( x => new SelectListItem() 
                { Value = x.IdePessoaJuridica.ToString(), Text = x.NomRazaoSocial } )
                .OrderBy(x => x.Text)
                .ToList();

            var idcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);
            var colaborador = colaboradorService
            .GetAll(x => ((x.IdcSituacao == idcSituacao) && (x.IdeTipoColaborador == Enums.TipoColaborador.Motorista.GetHashCode())) ||
                         (x.IdeColaborador == item.IdeColaborador)
                    )
            .ToList();

            ViewBag.Colaborador = colaborador
                .Select( x => new SelectListItem() 
                { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
                .OrderBy(x => x.Text)
                .ToList();                

            var UFCRMMedico = exameService
            .BuscarUnidadeFederacao()
            .ToList();

            ViewBag.UFCRMMedico = UFCRMMedico
                .Select( x => new SelectListItem() 
                { Value = x.IdeUnidadeFederacao.ToString(), Text = string.Format("{0} - {1}", x.SigUnidadeFederacao, x.NomUnidadeFederacao) } )
                .OrderBy(x => x.Text)
                .ToList();

        }        

    }
}
