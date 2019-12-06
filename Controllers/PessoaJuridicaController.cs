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
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SmartFleet.Controllers
{
    public class PessoaJuridicaController : GenericController
    {
        private readonly PessoaJuridicaService pessoaJuridicaService;

        public PessoaJuridicaController()
        {
            pessoaJuridicaService = new PessoaJuridicaService();
        }

        public ActionResult Pesquisar()
        {
            ParamPesq pesq = BuscarPesquisa<PessoaJuridica>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, PessoaJuridica item)
        {
            try
            {         
                item.NumCNPJ = item.NumCNPJ.OnlyNumbers();
                SalvarPesquisa(item, parm);
                var items = pessoaJuridicaService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                         IdePessoaJuridica = x.IdePessoaJuridica,
                         NomRazaoSocial = x.NomRazaoSocial,
                         NomFantasia = x.NomFantasia,
                         NumCNPJ = Utils.FormataCNPJ(x.NumCNPJ)
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
        public JsonResult Incluir(PessoaJuridica item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);

                item.NumCEP = item.NumCEP.OnlyNumbers();
                item.NumCNPJ = item.NumCNPJ.OnlyNumbers();
                item.NumTelefone = item.NumTelefone.OnlyNumbers();

                if (ModelState.IsValid) 
                {
                    pessoaJuridicaService.Save(item);
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
            CarregarViewBag();
            var item = pessoaJuridicaService.GetById(id);
            return View(item);
        }

        [HttpPost]
        public ActionResult Alterar(PessoaJuridica item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);

                item.NumCEP = item.NumCEP.OnlyNumbers();
                item.NumCNPJ = item.NumCNPJ.OnlyNumbers();
                item.NumTelefone = item.NumTelefone.OnlyNumbers();

                if (ModelState.IsValid) 
                {
                    pessoaJuridicaService.Save(item);
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
                pessoaJuridicaService.Delete(id);
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
                var msg = pessoaJuridicaService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        private void CarregarViewBag() 
        {
            var UF =  pessoaJuridicaService
            .BuscarUnidadeFederacao()
            .ToList();

            ViewBag.UnidadeFederacao = UF
                .Select( x => new SelectListItem() 
                { Value = x.IdeUnidadeFederacao.ToString(), Text = string.Format("{0} - {1}", x.SigUnidadeFederacao, x.NomUnidadeFederacao) } )
                .OrderBy(x => x.Text)
                .ToList();

        }        

    }
}
