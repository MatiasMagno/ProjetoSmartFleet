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
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Http;

namespace SmartFleet.Controllers
{
    public class VeiculoController : GenericController
    {
        private readonly VeiculoService veiculoService;
        public VeiculoController()
        {
            veiculoService = new VeiculoService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Veiculo>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Veiculo item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = veiculoService.GetAllByPage(item, parm);
                var situacao = Dominio.BuscarSituacao();

                return Json(new
                {
                    ok = true,
                    sEcho = parm.sEcho,
                    iTotalRecords = items.Count(),
                    iTotalDisplayRecords = parm.totalRecords,
                    aaData = items.Select(x => new
                    {
                        IdeVeiculo = x.IdeVeiculo,
                        CodRenavam = x.CodRenavam,
                        NumPlaca = x.NumPlaca,
                        NumAnoFab = x.NumAnoFab,
                        DscMarcaModelo = x.DscMarcaModelo,
                        IdcSituacao = situacao.Where(s => s.Key == x.IdcSituacao).FirstOrDefault().Value 
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
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Veiculo item)
        {
            try 
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid)
                {
                    veiculoService.Save(item);
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
            var item = veiculoService.GetById(id);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Veiculo item)
        {
            try 
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid)
                {
                    veiculoService.Save(item);
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
                veiculoService.Delete(id);
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
                var msg = veiculoService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        private void CarregarViewBag() 
        {
            var items = Dominio.BuscarSituacao();

            ViewBag.SituacaoVeiculo = items
                .Select( x => new SelectListItem() 
                { Value = x.Key, Text = x.Value } )
                .OrderBy(x => x.Text)
                .ToList();

        }
    }
}
