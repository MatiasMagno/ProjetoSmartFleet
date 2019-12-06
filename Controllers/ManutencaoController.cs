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
    public class ManutencaoController : GenericController
    {
        private readonly VeiculoService veiculoService;
        private readonly ManutencaoService manutencaoService;
        private readonly TransporteService transporteService;
        private readonly ColaboradorService colaboradorService;

        public ManutencaoController(IConfiguration configuration)
        {
            veiculoService = new VeiculoService();
            colaboradorService = new ColaboradorService();
            manutencaoService = new ManutencaoService(configuration);
            transporteService = new TransporteService(configuration);
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Manutencao>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Manutencao item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = manutencaoService.GetAllByPage(item, parm);

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                        IdeManutencao = x.IdeManutencao,
                        IdcTipoManutencao = x.IdcTipoManutencao == "C"? "Corretiva": "Preventiva",
                        DthEntrada = x.DthEntrada.ToString("dd/MM/yyyy HH:mm"),
                        DthSaida = x.DthSaida.HasValue? x.DthSaida.Value.ToString("dd/MM/yyyy HH:mm"): string.Empty,
                        Veiculo = new {
                            IdeVeiculo = x.Veiculo.IdeVeiculo,
                            DscMarcaModelo = x.Veiculo.DscMarcaModelo
                        },
                        Colaborador = new {
                            IdeColaborador = x.Colaborador.IdeColaborador,
                            NomColaborador = x.Colaborador.NomColaborador                            
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
            CarregarViewBag(new Manutencao());
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Manutencao item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    manutencaoService.Save(item);
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
            var item = manutencaoService.GetById(id);
            CarregarViewBag(item);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Manutencao item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    manutencaoService.Save(item);
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
                manutencaoService.Delete(id);
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
                var msg = manutencaoService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }

        public JsonResult BuscarProduto(string text)
        {
            try
            {
                var items = manutencaoService.BuscarProduto(text);
                return Json(items);
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
        public JsonResult BuscarMecanico(int ideMecanico)
        {
            try
            {
                var item = colaboradorService.GetById(ideMecanico);
                return Json(new { ok = true, item = item });
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }        

        private void CarregarViewBag() 
        {

            #region Veículo

            var veiculo = veiculoService
            .GetAll(x => x.IdeVeiculo > 0)
            .ToList();

            ViewBag.Veiculo = veiculo
                .Select( x => new SelectListItem() 
                { 
                    Value = x.IdeVeiculo.ToString(), 
                    Text = string.Format("{0} - {1}", x.DscMarcaModelo, x.NumPlaca) 
                })
                .OrderBy(x => x.Text)
                .ToList();

            #endregion

            #region Mecânico

            var mecanico = colaboradorService
            .GetAll(x => x.IdeTipoColaborador == Enums.TipoColaborador.Mecanico.GetHashCode())
            .ToList();

            ViewBag.mecanico = mecanico
            .Select( x => new SelectListItem() 
            { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
            .OrderBy(x => x.Text)
            .ToList();                 

            #endregion

            var tipoManutencao = Dominio.BuscarTipoManutencao();

            ViewBag.TipoManutencao = tipoManutencao
                .Select( x => new SelectListItem() 
                { Value = x.Key, Text = x.Value } )
                .OrderBy(x => x.Text)
                .ToList();

        }

        private void CarregarViewBag(Manutencao item) 
        {   
            var idcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);

            var veiculoEmUso = transporteService
            .GetAll(x => (!x.DthChegada.HasValue))
            .ToList();

            // Se for inclusão, o veículo não pode esta em uso
            var veiculoEmViagem = veiculoEmUso.Select(x => x.IdeVeiculo).ToList();

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

            #region Mecânico

            var mecanico = colaboradorService
            .GetAll(x => ((x.IdcSituacao == idcSituacao) &&
                          (x.IdeTipoColaborador == Enums.TipoColaborador.Mecanico.GetHashCode())) ||
                          (x.IdeColaborador == item.IdeColaborador)
                    )
            .ToList();

            ViewBag.mecanico = mecanico
            .Select( x => new SelectListItem() 
            { Value = x.IdeColaborador.ToString(), Text = x.NomColaborador } )
            .OrderBy(x => x.Text)
            .ToList();                 

            #endregion

            var tipoManutencao = Dominio.BuscarTipoManutencao();

            ViewBag.TipoManutencao = tipoManutencao
                .Select( x => new SelectListItem() 
                { Value = x.Key, Text = x.Value } )
                .OrderBy(x => x.Text)
                .ToList();

        }

    }
}
