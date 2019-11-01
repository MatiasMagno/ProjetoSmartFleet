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
    public class MultaService : BaseService
    {
        public MultaService()
        {        
        }

        public Multa GetById(int id) 
        {
             var item = DbConnection.Multa
             .Where(x => x.IdeMulta == id)
             .Include(x => x.Veiculo)
             .FirstOrDefault();
            
            return new Multa()
            {
                Veiculo = new Veiculo().UpdateValues(item.Veiculo)
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Multa> GetAll(Multa item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temNumAutoInfracao = !string.IsNullOrEmpty(item.NumAutoInfracao);
            var temDatInfracaoInicial = item.DatInfracaoInicial.HasValue;
            var temDatInfracaoFinal = item.DatInfracaoFinal.HasValue;
            var temDatVencimentoInicial = item.DatVencimentoInicial.HasValue;
            var temDatVencimentoFinal = item.DatVencimentoFinal.HasValue;

            var items = DbConnection.Multa
            .Where(x => (temIdeVeiculo? x.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temNumAutoInfracao? x.NumAutoInfracao == item.NumAutoInfracao: true) &&
                        (temDatInfracaoInicial? x.DatInfracao >= item.DatInfracaoInicial: true) &&
                        (temDatInfracaoFinal? x.DatInfracao <= item.DatInfracaoFinal: true) &&
                        (temDatVencimentoInicial? x.DatVencimento >= item.DatVencimentoInicial: true) &&
                        (temDatVencimentoFinal? x.DatVencimento <= item.DatVencimentoFinal: true)
                  )
            .Include(x => x.Veiculo);

            return items;
        }

        public IEnumerable<Multa> GetAll(Expression<System.Func<Entities.Multa, bool>> where)
        {
            var items = DbConnection.Multa
            .Where(where)
            .Select(x => new Multa().UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Multa> GetAllByPage(Multa item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Multa() {
                Veiculo = new Veiculo().UpdateValues(x.Veiculo)
            }.UpdateValues(x));
            
            return ret;
        }

        public void Verify(Multa item) 
        {       
            if (item.DatInfracao >= item.DatVencimento) 
            {
                var msg = string.Format(Descricoes.MSG033, "Data da Infração", "Data de Vencimento");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }
        }
        public void Save(Multa item) 
        {
            Verify(item);

            if (item.IdeMulta > 0) {
                var itemUpd = DbConnection.Multa
                .Where(x => x.IdeMulta == item.IdeMulta)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Multa.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Multa();
                itemNew.UpdateValues(item);
                DbConnection.Multa.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Multa
            .Where(x => x.IdeMulta == id)
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
    }
}