using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SmartFleet.Controllers;
using SmartFleet.Service;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;
using Microsoft.AspNetCore.Http;

namespace SmartFleet.Controllers
{
    public class AluguelController : GenericController
    {
        private readonly AluguelService aluguelService;
        private readonly PessoaJuridicaService pessoaJuridicaService;
        public AluguelController()
        {
            aluguelService = new AluguelService();
            pessoaJuridicaService = new PessoaJuridicaService();
        }
         public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Aluguel>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Aluguel item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = aluguelService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                         IdeAluguel = x.IdeAluguel,
                         DscVeiculo = x.DscVeiculo,
                         DthSolicitacao = x.DthSolicitacao.ToString("dd/MM/yyyy HH:mm"),
                         DthDevolucao = x.DthDevolucao.HasValue? x.DthDevolucao.Value.ToString("dd/MM/yyyy HH:mm"): string.Empty,
                         PessoaJuridica = new {
                             IdePessoaJuridica = x.PessoaJuridica.IdePessoaJuridica,
                             NomRazaoSocial = x.PessoaJuridica.NomRazaoSocial
                         }
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
            CarregarViewBag();
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Aluguel item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    aluguelService.Save(item);
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
            var item = aluguelService.GetById(id);
            CarregarViewBag();
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Aluguel item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    aluguelService.Save(item);
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
                aluguelService.Delete(id);
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
                var msg = aluguelService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        private void CarregarViewBag() 
        {            
            var locadora = pessoaJuridicaService
            .GetAll(x => x.IdePessoaJuridica > 0)
            .ToList();

            ViewBag.locadora = locadora
                .Select( x => new SelectListItem() 
                { Value = x.IdePessoaJuridica.ToString(), Text = x.NomRazaoSocial } )
                .OrderBy(x => x.Text)
                .ToList();

        } 

    }
}
