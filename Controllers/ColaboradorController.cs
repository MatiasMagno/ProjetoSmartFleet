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
using System.Text.RegularExpressions;

namespace SmartFleet.Controllers
{
    public class ColaboradorController : GenericController
    {
        private readonly ColaboradorService colaboradorService;

        public ColaboradorController()
        {
            colaboradorService = new ColaboradorService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Colaborador>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Colaborador item)
        {
            try
            {   
                item.NumCPF = item.NumCPF.OnlyNumbers();
                SalvarPesquisa(item, parm);
                var items = colaboradorService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                         IdeColaborador = x.IdeColaborador,
                         NumMatricula = x.NumMatricula,
                         NumCPF = Utils.FormataCPF(x.NumCPF),
                         NomColaborador = x.NomColaborador,
                         DatNacimento = x.DatNascimento.HasValue? x.DatNascimento.Value.ToString("dd/MM/yyyy"): string.Empty,
                         DscTipoColaborador = x.TipoColaborador.DscTipoColaborador
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
        public JsonResult Incluir(Colaborador item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);

                item.NumCPF = item.NumCPF.OnlyNumbers();
                item.NumCelular = item.NumCelular.OnlyNumbers();
                item.NumTelefone = item.NumTelefone.OnlyNumbers();

                if (ModelState.IsValid) 
                {
                    colaboradorService.Save(item);
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
            var item = colaboradorService.GetById(id);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Colaborador item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);

                item.NumCPF = item.NumCPF.OnlyNumbers();
                item.NumCelular = item.NumCelular.OnlyNumbers();
                item.NumTelefone = item.NumTelefone.OnlyNumbers();

                if (ModelState.IsValid) 
                {
                    colaboradorService.Save(item);
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
                colaboradorService.Delete(id);
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
                var msg = colaboradorService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        private void CarregarViewBag() 
        {
            var colaborador = colaboradorService.BuscarTipoColaborador();

            ViewBag.TipoColaborador = colaborador
                .Select( x => new SelectListItem() 
                { Value = x.IdeTipoColaborador.ToString(), Text = x.DscTipoColaborador } )
                .OrderBy(x => x.Text)
                .ToList();

            var UF = colaboradorService
            .BuscarUnidadeFederacao(x => x.IdeUnidadeFederacao > 0)
            .ToList();

            ViewBag.UnidadeFederacao = UF
                .Select( x => new SelectListItem() 
                { Value = x.IdeUnidadeFederacao.ToString(), Text = string.Format("{0} - {1}", x.SigUnidadeFederacao, x.NomUnidadeFederacao) } )
                .OrderBy(x => x.Text)
                .ToList();

            ViewBag.CategoriaCNH = colaboradorService.BuscarCategoriaCNH()
                .Select( x => new SelectListItem() 
                { Value = x.Value, Text = x.Text } )
                .OrderBy(x => x.Text)
                .ToList();

            ViewBag.Sexo = colaboradorService.BuscarSexo()
                .Select( x => new SelectListItem()
                { Value = x.Value, Text = x.Text } )
                .OrderBy(x => x.Text)
                .ToList();

            ViewBag.Situacao = Dominio.BuscarSituacao()
                .Select( x => new SelectListItem()
                { Value = x.Key, Text = x.Value } )
                .OrderBy(x => x.Text)
                .ToList();

        }
    }
}
