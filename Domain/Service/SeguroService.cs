using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Service
{
    public class SeguroService : BaseService
    {
        public SeguroService()
        {        
        }

        public Seguro GetById(int id) 
        {
             var item = DbConnection.Seguro
             .Where(x => x.IdeSeguro == id)
             .Include(x => x.Veiculo)
             .Include(x => x.Seguradora)
             .FirstOrDefault();
            
            return new Seguro()
            {
                Veiculo = new Veiculo().UpdateValues(item.Veiculo),
                Seguradora = new PessoaJuridica().UpdateValues(item.Seguradora)
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Seguro> GetAll(Seguro item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temIdeSeguradora = item.IdeSeguradora > 0;
            var temDatVigenciaInicio = item.DatVigenciaInicio.HasValue;
            var temDatVigenciaFim = item.DatVigenciaFim.HasValue;
            var temNumApolice = !string.IsNullOrEmpty(item.NumApolice);
            var temIdcSim = item.IdcSim == "S";
            var temIdcNao = item.IdcNao == "S";

            var items = DbConnection.Seguro
            .Where(x => (temIdeVeiculo? x.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temIdeSeguradora? x.IdeSeguradora == item.IdeSeguradora: true) &&
                        (temDatVigenciaInicio? x.DatVigenciaInicio >= item.DatVigenciaInicio: true) &&
                        (temDatVigenciaFim? x.DatVigenciaFim <= item.DatVigenciaFim: true) &&
                        (temNumApolice? x.NumApolice == item.NumApolice: true) &&
                        (temIdcSim? x.DatVigenciaFim >= DateTime.Now.Date: true) &&
                        (temIdcNao? x.DatVigenciaFim < DateTime.Now.Date: true))
            .Include(x => x.Veiculo)
            .Include(x => x.Seguradora);

            return items;
        }

        public IEnumerable<Seguro> GetAll(Expression<System.Func<Entities.Seguro, bool>> where)
        {
            var items = DbConnection.Seguro
            .Where(where)
            .Select(x => new Seguro() 
            {
                Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                Seguradora = new PessoaJuridica().UpdateValues(x.Seguradora)
            }.UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Seguro> GetAllByPage(Seguro item, DatatableParm parm)
        {
            parm.sColumns = parm.sColumns.Replace("veiculo.dscMarcaModelo","Veiculo.DscMarcaModelo");
            parm.sColumns = parm.sColumns.Replace("seguradora.nomRazaoSocial","Seguradora.NomRazaoSocial");

            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Seguro() 
                {
                    Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(x.Seguradora)
                }.UpdateValues(x));
            
            return ret;
        }

        public void Verify(Seguro item) 
        {       
            if (item.DatVigenciaInicio >= item.DatVigenciaFim) 
            {
                var msg = string.Format(Descricoes.MSG033, "Início da Vigência", "Fim da Vigência");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            if (item.DatContratacao > item.DatVigenciaInicio) 
            {
                var msg = string.Format(Descricoes.MSG033, "Data de Contratação", "Início da Vigência");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }
            
        }
        public void Save(Seguro item) 
        {
            Verify(item);

            if (item.IdeSeguro > 0) 
            {
                var itemUpd = DbConnection.Seguro
                .Where(x => x.IdeSeguro == item.IdeSeguro)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Seguro.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else 
            {
                var itemNew = new Entities.Seguro();
                itemNew.UpdateValues(item);
                DbConnection.Seguro.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Seguro
            .Where(x => x.IdeSeguro == id)
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

            var item = DbConnection.Seguro
            .Where(x => x.IdeSeguro == id)
            .Include(x => x.Sinistro)
            .FirstOrDefault();

            if (item.Sinistro.Count() > 0) 
            { 
                msg = new Mensagem(Descricoes.MSG005, Tipo.Alerta);
            }

            return msg;       
        }

        public IEnumerable<Seguro> GetRelatorio(Seguro item) 
        {
            var items = GetAll(item)
                .Select(x => new Seguro() 
                {
                    Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(x.Seguradora)
                }.UpdateValues(x));
            
            return items;
        }
    }
}