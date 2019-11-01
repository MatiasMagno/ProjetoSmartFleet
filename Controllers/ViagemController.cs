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

namespace SmartFleet.Controllers
{
    public class ViagemController : GenericController
    {
        private readonly VeiculoService veiculoService;
        public ViagemController()
        {
            veiculoService = new VeiculoService();
        }

        public ActionResult Pesquisar()
        {
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
                         DscMarcaModelo = x.DscMarcaModelo
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
        public ActionResult Incluir(Veiculo item)
        {
            try {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);

                if (ModelState.IsValid)
                {
                    veiculoService.Save(item);
                    SalvarMensagem(msg);
                    return RedirectToAction("Pesquisar");               
                }
                return View(item);
            } 
            catch (Exception ex) 
            {
                SalvarCoreException(ex);
                return View(item);                
            }
        }

        public ActionResult Alterar(int id)
        {
            var item = veiculoService.GetById(id);
            return View(item);
        }

        [HttpPost]
        public ActionResult Alterar(Veiculo item)
        {
            try {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid)
                {
                    veiculoService.Save(item);
                    SalvarMensagem(msg);
                    return RedirectToAction("Pesquisar");
                }
                return View(item);
            } 
            catch (Exception ex) 
            {
                SalvarCoreException(ex);
                return View(item); 
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

    }
}
