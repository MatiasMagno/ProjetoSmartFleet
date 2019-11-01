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
    public class SinistroController : GenericController
    {
        private readonly SinistroService sinistroService;
        private readonly SeguroService seguroService;

        public SinistroController()
        {
            sinistroService = new SinistroService();
            seguroService = new SeguroService();
        }

        public ActionResult Pesquisar()
        {
            CarregarViewBag();
            ParamPesq pesq = BuscarPesquisa<Sinistro>();
            if (pesq != null)
            {
                var item = pesq.entity;
                return View(item);
            }
            return View();
        }

        [HttpPost]
        public JsonResult Pesquisar(DatatableParm parm, Sinistro item)
        {
            try
            {         
                SalvarPesquisa(item, parm);
                var items = sinistroService.GetAllByPage(item, parm);
                var tipoSinistro = sinistroService.BuscarTipoSinistro();

                 return Json(new
                 {
                     ok = true,
                     sEcho = parm.sEcho,
                     iTotalRecords = items.Count(),
                     iTotalDisplayRecords = parm.totalRecords,
                     aaData = items.Select(x => new
                     {
                        IdeSinistro = x.IdeSinistro,
                        IdcTipoSinistro = tipoSinistro.Where(ts => ts.Value == x.IdcTipoSinistro).FirstOrDefault().Text,
                        DatOcorrencia = x.DatOcorrencia.ToString("dd/MM/yyyy"),
                        Seguro = new { 
                            IdeSeguro = x.Seguro.IdeSeguro,
                            NumApolice = x.Seguro.NumApolice,
                            Veiculo = new { 
                                IdeVeiculo = x.Seguro.Veiculo.IdeVeiculo,
                                DscMarcaModelo = x.Seguro.Veiculo.DscMarcaModelo 
                            },                        
                            Seguradora = new {
                                IdeSeguradora = x.Seguro.Seguradora.IdePessoaJuridica, 
                                NomRazaoSocial = x.Seguro.Seguradora.NomRazaoSocial 
                            }
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
            CarregarViewBag(0, 0, "A");
            return View();
        }

        [HttpPost]
        public JsonResult Incluir(Sinistro item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    sinistroService.Save(item);
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
            CarregarViewBag(id, 0, "A");
            var item = sinistroService.GetById(id);
            return View(item);
        }

        [HttpPost]
        public JsonResult Alterar(Sinistro item)
        {
            try
            {
                var msg = new Mensagem(Descricoes.MSG001, Tipo.Sucesso);
                if (ModelState.IsValid) 
                {
                    sinistroService.Save(item);
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
                sinistroService.Delete(id);
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
                var msg = sinistroService.DeleteVerify(id);
                return Json(CreateMessageJson(msg));
            }
            catch (Exception ex)
            {
                return Json(CreateMessageJson(ex));
            }
        }
        
        private void CarregarViewBag(int ideSinistro = 0, int ideSeguro = 0, string idcSituacao = "") 
        {            
            // Recupera todos os seguros cadastrados
            var seguro = sinistroService.BuscarSeguro(ideSinistro, ideSeguro, idcSituacao );

            ViewBag.Veiculo = seguro
                .Select( x => new SelectListItem() 
                { Value = x.Veiculo.IdeVeiculo.ToString(), Text = x.Veiculo.DscMarcaModelo } )
                .OrderBy(x => x.Text)
                .ToList();

            ViewBag.Seguradora = seguro
                .Select( x => new SelectListItem() 
                { Value = x.Seguradora.IdePessoaJuridica.ToString(), Text = x.Seguradora.NomRazaoSocial } )
                .OrderBy(x => x.Text)
                .ToList();

            ViewBag.Seguro = seguro
                .Select( x => new SelectListItem() 
                { Value = x.IdeSeguro.ToString(), Text =x.Veiculo.DscMarcaModelo } )
                .OrderBy(x => x.Text)
                .ToList();                

            ViewBag.TipoSinistro = sinistroService.BuscarTipoSinistro()
                .Select( x => new SelectListItem()
                { Value = x.Value, Text = x.Text } )
                .OrderBy(x => x.Text)
                .ToList();

        }

        public JsonResult BuscarSeguro(int ideSinistro, int ideSeguro) 
        {
            try 
            {
                var idcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);

                var item = sinistroService
                .BuscarSeguro(ideSinistro, ideSeguro,  idcSituacao)
                .FirstOrDefault();

                return Json(new 
                { 
                    ok = true, 
                    seguro = new {
                        IdeSeguro = item.IdeSeguro,
                        NumPlaca = item.Veiculo.NumPlaca,
                        CodRenavam = item.Veiculo.CodRenavam,
                        NumApolice = item.NumApolice,
                        VlrFranquia = item.VlrFranquia,
                        DatVigenciaInicio = item.DatVigenciaInicio.HasValue? item.DatVigenciaInicio.Value.ToString("dd/MM/yyyy"): string.Empty,
                        DatVigenciaFim = item.DatVigenciaFim.HasValue? item.DatVigenciaFim.Value.ToString("dd/MM/yyyy"): string.Empty,
                        NomSeguradora = item.Seguradora.NomRazaoSocial,
                        NumCNPJ = Utils.FormataCNPJ(item.Seguradora.NumCNPJ),
                        NumTelefone = Utils.FormataTelefone(item.Seguradora.NumTelefone)
                    } 
                });
            } 
            catch (Exception ex) 
            {
                return Json(CreateMessageJson(ex));
            }
        }

    }
}