using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc.Rendering;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Service
{
    public class SinistroService : BaseService
    {
        private readonly SeguroService seguroService;
        private readonly VeiculoService veiculoService;

        public SinistroService()
        {        
            seguroService = new SeguroService();
            veiculoService = new VeiculoService();
        }

        public Sinistro GetById(int id) 
        {
            var item = DbConnection.Sinistro
            .Where(x => x.IdeSinistro == id)
            .Include(x => x.Seguro).ThenInclude(x => x.Veiculo)
            .Include(x => x.Seguro).ThenInclude(x => x.Seguradora)
            .FirstOrDefault();
            
            return new Sinistro()
            {
                Seguro = new Seguro() 
                {
                    Veiculo = new Veiculo().UpdateValues(item.Seguro.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(item.Seguro.Seguradora)
                }.UpdateValues(item.Seguro)
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Sinistro> GetAll(Sinistro item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temIdeSeguradora = item.IdeSeguradora > 0;
            var temIdcTipoSinistro = !string.IsNullOrEmpty(item.IdcTipoSinistro);
            var temDatOcorrenciaInicio = item.DatOcorrenciaInicio.HasValue;
            var temDatOcorrenciaFim = item.DatOcorrenciaFim.HasValue;

            var items = DbConnection.Sinistro
            .Where(x => (temIdeVeiculo? x.Seguro.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temIdeSeguradora? x.Seguro.IdeSeguradora == item.IdeSeguradora: true) &&
                        (temIdcTipoSinistro? x.IdcTipoSinistro == item.IdcTipoSinistro: true) &&
                        (temDatOcorrenciaInicio? x.DatOcorrencia >= item.DatOcorrenciaInicio: true) &&
                        (temDatOcorrenciaFim? x.DatOcorrencia <= item.DatOcorrenciaFim: true)
                  )
            .Include(x => x.Seguro).ThenInclude(x => x.Veiculo)
            .Include(x => x.Seguro).ThenInclude(x => x.Seguradora);

            return items;
        }

        public IEnumerable<Sinistro> GetAll(Expression<System.Func<Entities.Sinistro, bool>> where)
        {
            var items = DbConnection.Sinistro
            .Where(where)
            .Select(x => new Sinistro() 
            {
                Seguro = new Seguro() 
                {
                    Veiculo = new Veiculo().UpdateValues(x.Seguro.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(x.Seguro.Seguradora)
                }.UpdateValues(x.Seguro)
            }.UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Sinistro> GetAllByPage(Sinistro item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Sinistro() 
                {
                    Seguro = new Seguro() 
                    {
                        Veiculo = new Veiculo().UpdateValues(x.Seguro.Veiculo),
                        Seguradora = new PessoaJuridica().UpdateValues(x.Seguro.Seguradora)
                    }.UpdateValues(x.Seguro)
                }.UpdateValues(x));
            
            return ret;
        }

        public void Verify(Sinistro item) 
        {       
            var msg = string.Format(Descricoes.MSG024, "Data da Ocorrência");
            if (item.DatOcorrencia > DateTime.Now.Date) {
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            // Verifica se o seguro esta com validade na data de ocorrencia do sinistro 
            var seguro = seguroService.GetById(item.IdeSeguro);
            var seguroValido = (seguro.DatVigenciaInicio <= item.DatOcorrencia && seguro.DatVigenciaFim >= item.DatOcorrencia);
            if (!seguroValido) {
                throw new CoreException(Descricoes.MSG023, CoreExceptionType.Alert);
            }

        }
        public void Save(Sinistro item) 
        {
            Verify(item);

            if (item.IdeSinistro > 0) 
            {
                var itemUpd = DbConnection.Sinistro
                .Include(x => x.Seguro).ThenInclude(x => x.Veiculo)
                .Where(x => x.IdeSinistro == item.IdeSinistro)

                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                // Se o veículo esta com um seguro vigente, o mesmo será inativado
                if (itemUpd.Seguro.DatVigenciaFim >= DateTime.Now.Date) {
                    itemUpd.Seguro.Veiculo.IdcSituacao = Convert.ToString((Char)Enums.Situacao.Inativo);
                }

                DbConnection.Sinistro.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Sinistro();
                itemNew.UpdateValues(item);

                itemNew.Seguro = DbConnection.Seguro
                .Where(x => x.IdeSeguro == item.IdeSeguro)
                .Include(x => x.Veiculo)
                .FirstOrDefault();

                // Inativa o veículo que esta vinculado ao seguro
                itemNew.Seguro.Veiculo.IdcSituacao = Convert.ToString((Char)Enums.Situacao.Inativo);

                DbConnection.Sinistro.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Sinistro
            .Where(x => x.IdeSinistro == id)
            .FirstOrDefault();

            if (item != null) {
                DbConnection.Attach(item);
                DbConnection.Remove(item);
                DbConnection.SaveChanges();               
            }
        }

        public Mensagem DeleteVerify(int id) 
        {
             var msg = new Mensagem(Descricoes.MSG002, Tipo.Confirmacao);
            return msg;           
        }

        public IEnumerable<SelectListItem> BuscarTipoSinistro() 
        {
            var items = new List<SelectListItem>();
            items.Add(new SelectListItem() { Value="P", Text="Parcial" });
            items.Add(new SelectListItem() { Value="T", Text="Total" });
            return items;
        }  

        public IEnumerable<Seguro> BuscarSeguro(int ideSinistro = 0, int ideSeguro = 0, string idcSituacao = "") 
        {
            var temIdeSeguro = ideSeguro > 0;
            //var temSinistro = ideSinistro > 0;
            var temIdcSituacao = !string.IsNullOrEmpty(idcSituacao);

            var items = veiculoService
            .GetAll(x => ((temIdcSituacao? x.IdcSituacao == idcSituacao: true) && 
                         (temIdeSeguro? x.Seguro.Where(s => s.IdeSeguro == ideSeguro).FirstOrDefault() != null: true) &&
                         (x.Seguro.FirstOrDefault() != null))

                   ).ToList();

            if (ideSinistro > 0) 
            {
                var sinistro = GetById(ideSinistro);
                var ideVeiculo = sinistro.Seguro.Veiculo.IdeVeiculo;
                if (items.Where(x => x.IdeVeiculo == ideVeiculo).FirstOrDefault() == null) 
                {
                    var veiculo = veiculoService.GetById(ideVeiculo);
                    items.Add(veiculo);
                }
            }

            var lstSeguro = new List<Seguro>();
            foreach (var item in items)
            {
                var seguro = item.Seguro
                .OrderByDescending(x => x.DatContratacao)
                .FirstOrDefault();

                lstSeguro.Add(new Seguro() {
                    DatVigenciaInicio = seguro.DatVigenciaInicio,
                    DatVigenciaFim = seguro.DatVigenciaFim,
                    Veiculo = new Veiculo().UpdateValues(seguro.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(seguro.Seguradora)
                }.UpdateValues(seguro));
            }
            return lstSeguro;
        }        
    }
}