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
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SmartFleet.Controllers
{
    public class MultaController : GenericController
    {
        private readonly MultaService multaService;
        private readonly VeiculoService veiculoService;

        public MultaController()
        {
            multaService = new MultaService();
            veiculoService = new VeiculoService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Multa>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Multa item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = multaService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                         IdeMulta = x.IdeMulta,
                         NumAutoInfracao = x.NumAutoInfracao,
                         DatVencimento = x.DatVencimento.ToString("dd/MM/yyyy"),
                         DatInfracao = x.DatInfracao .ToString("dd/MM/yyyy"),
                         VlrAutuacao = x.VlrAutuacao.ToString("C"),
                         VlrDesconto = x.VlrDesconto.HasValue? x.VlrDesconto.Value.ToString("C"): string.Empty,
                         NumPlaca = x.Veiculo.NumPlaca,
                         DscMarcaModelo = x.Veiculo.DscMarcaModelo,
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
        public JsonResult Incluir(Multa item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    multaService.Save(item);
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
            var item = multaService.GetById(id);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Multa item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    multaService.Save(item);
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
                multaService.Delete(id);
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
                var msg = multaService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        public ActionResult Baixar(int id)
        {
            var item = multaService.GetById(id);
            ViewBag.DscMarcaModelo = item.Veiculo.DscMarcaModelo;
            return View(item);
        }

        private void CarregarViewBag() 
        {            
            var veiculo = veiculoService
            .GetAll(x => x.IdeVeiculo > 0);

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { Value = x.IdeVeiculo.ToString(), Text = string.Format("{0} - {1}", x.DscMarcaModelo, x.NumPlaca) } )
                .OrderBy(x => x.Text)
                .ToList();

        }

    }
}
