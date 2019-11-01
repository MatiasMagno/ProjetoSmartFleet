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
using Microsoft.Extensions.Configuration;

namespace SmartFleet.Controllers
{
    public class TransporteController : GenericController
    {
        private readonly VeiculoService veiculoService;
        private readonly TransporteService transporteService;
        private readonly ColaboradorService colaboradorService;

        public TransporteController(IConfiguration configuration)
        {
            veiculoService = new VeiculoService();
            transporteService = new TransporteService(configuration);
            colaboradorService = new ColaboradorService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Transporte>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Transporte item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = transporteService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                        IdeTransporte = x.IdeTransporte,
                        DthSolicitacao = x.DthSolicitacao.ToString("dd/MM/yyyy HH:mm"),
                        dscStatus = BusacarStatus(x),
                        Solicitante = new {
                            IdeColaborador = x.Solicitante.IdeColaborador,
                            NomColaborador = x.Solicitante.NomColaborador
                        },
                        Veiculo = new {
                            IdeVeiculo = x.Veiculo.IdeVeiculo,
                            DscMarcaModelo = x.Veiculo.DscMarcaModelo
                        },
                        Motorista = new {
                            IdeColaborador = x.Motorista.IdeColaborador,
                            NomColaborador = x.Motorista.NomColaborador                            
                        }
                     })
                 });
            }
            catch (Exception ex)
            {
                return Json(CreateMessageDatatable(ex));
            }
        }

        private string BusacarStatus(Transporte item) 
        {
            var status = "Aguardando Início da Viagem";
            
            if (item.DthPartida.HasValue)
                status = "Viagem Iniciada";

            if (item.DthChegada.HasValue)
                status = "Viagem Finalizada";

            return status;
        }
        public ActionResult Incluir()
        {
            CarregarViewBag(new Transporte() { IdeTransporte = 0 });
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Transporte item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    transporteService.Save(item);
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
            var item = transporteService.GetById(id);
            CarregarViewBag(item);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Transporte item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    transporteService.Save(item);
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
                var msg = new Mensagem(Descricoes.MSG003, Tipo.Sucesso);
                transporteService.Delete(id);
                return Json(CreateMessageJson(msg));
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
                var msg = transporteService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        [HttpPost]
        public JsonResult BuscarSolicitante(int ideSolicitante)
        {
            try
            {
                var item = colaboradorService.GetById(ideSolicitante);
                return Json(new { ok = true, item = item });
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        [HttpPost]
        public JsonResult BuscarVeiculo(int ideVeiculo)
        {
            try
            {
                var item = veiculoService.GetById(ideVeiculo);
                return Json(new { ok = true, item = item });
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        [HttpPost]
        public JsonResult BuscarMotorista(int ideMotorista)
        {
            try
            {
                var item = colaboradorService.GetById(ideMotorista);
                item.NumCelular = Utils.FormataTelefone(item.NumCelular);
                return Json(new { ok = true, item = item });
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }
        public JsonResult BuscarPassageiro(string text)
        {
            try
            {
                var items = transporteService.BuscarPassageiro(text);
                foreach(var item in items) {
                    item.NumCelular = Utils.FormataTelefone(item.NumCelular);
                }
                return Json(items);
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }
        
        public ActionResult Viagem(int id) 
        {
            var item = transporteService.GetById(id);
            item.Motorista.NumCelular = Utils.FormataTelefone(item.Motorista.NumCelular);
            return View(item);
        }

        [HttpPost]
        public JsonResult Viagem(Transporte item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                transporteService.SaveViagem(item);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex) 
            {
                return Json(CreateMessageJson(ex));                
            }
        }        

        private void CarregarViewBag() 
        {   
            #region Solicitante

            var solicitante = colaboradorService
            .GetAll(x => x.IdeColaborador > 0)
            .ToList();

            ViewBag.Solicitante = solicitante
            .Select( x => new SelectListItem() 
            { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
            .OrderBy(x => x.Text)
            .ToList(); 

            #endregion

            #region Veiculo

            var veiculo = veiculoService
            .GetAll(x => x.IdeVeiculo > 0)
            .ToList();

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { Value = x.IdeVeiculo.ToString(), Text = x.DscMarcaModelo } )
                .OrderBy(x => x.Text)
                .ToList();
                
            #endregion

            #region Motorista

            var motorista = colaboradorService
            .GetAll(x => (x.IdeTipoColaborador == Enums.TipoColaborador.Motorista.GetHashCode()))
            .ToList();

            ViewBag.Motorista = motorista
            .Select( x => new SelectListItem() 
            { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
            .OrderBy(x => x.Text)
            .ToList();                 

            #endregion
        }

        private void CarregarViewBag(Transporte item) 
        {   
            var idcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);

            #region Solicitante

            var solicitante = colaboradorService
            .GetAll(x => (x.IdcSituacao == idcSituacao) ||
                         (x.IdeColaborador == item.IdeSolicitante))
            .ToList();

            ViewBag.Solicitante = solicitante
            .Select( x => new SelectListItem() 
            { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
            .OrderBy(x => x.Text)
            .ToList(); 

            #endregion

            var veiculoEmUso = transporteService
            .GetAll(x => (!x.DthChegada.HasValue))
            .ToList();

            // Se for inclusão, o veículo não pode esta em uso
            var veiculoEmViagem = veiculoEmUso.Select(x => x.IdeVeiculo).ToList();

            // Se for inclusão, o motorisata não pode esta em viagem
            var motoristaEmViagem = veiculoEmUso.Select(x => x.IdeMotorista).ToList();

            #region Veiculo

            var veiculo = veiculoService
            .GetAll(x => ((x.IdcSituacao == idcSituacao) && 
                          (x.Manutencao.Where(m => m.DthSaida == null).FirstOrDefault() == null) &&
                          (!veiculoEmViagem.Contains(x.IdeVeiculo)) ||
                          (x.IdeVeiculo == item.IdeVeiculo))
                   )
            .ToList();

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { Value = x.IdeVeiculo.ToString(), Text = x.DscMarcaModelo } )
                .OrderBy(x => x.Text)
                .ToList();
                
            #endregion

            #region Motorista

            var motorista = colaboradorService
            .GetAll(x => ((x.IdcSituacao == idcSituacao) &&
                          (x.IdeTipoColaborador == Enums.TipoColaborador.Motorista.GetHashCode()) &&
                          (!motoristaEmViagem.Contains(x.IdeColaborador))) ||
                          (x.IdeColaborador == item.IdeMotorista)
                    )
            .ToList();

            ViewBag.Motorista = motorista
            .Select( x => new SelectListItem() 
            { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
            .OrderBy(x => x.Text)
            .ToList();                 

            #endregion
        }

    }
}
