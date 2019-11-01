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
    public class AluguelService : BaseService
    {
        public AluguelService()
        {        
        }

        public Aluguel GetById(int id) 
        {
            var item = DbConnection.Aluguel
            .Where(x => x.IdeAluguel == id)
            .Include(x => x.PessoaJuridica)
            .FirstOrDefault();
            
            return new Aluguel() 
            {
                PessoaJuridica = new PessoaJuridica().UpdateValues(item.PessoaJuridica)
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Aluguel> GetAll(Aluguel item) 
        {
            //Filtros
            var temIdePessoaJuridica = item.IdePessoaJuridica > 0;
            var temDscVeiculo = !string.IsNullOrEmpty(item.DscVeiculo);
            var temDthSolicitacaoInicio = item.DthSolicitacaoInicio.HasValue;
            var temDthSolicitacaoFim = item.DthSolicitacaoFim.HasValue;           

            var items = DbConnection.Aluguel
            .Where(x => (temIdePessoaJuridica? x.IdePessoaJuridica == item.IdePessoaJuridica: true) &&
                        (temDscVeiculo? x.DscVeiculo.Contains(item.DscVeiculo): true) &&
                        (temDthSolicitacaoInicio? x.DthSolicitacao >= item.DthSolicitacaoInicio: true) &&
                        (temDthSolicitacaoFim? x.DthSolicitacao <= item.DthSolicitacaoFim: true)                       
                  )
            .Include(x => x.PessoaJuridica);

            return items;
        }

        public IEnumerable<Aluguel> GetAll(Expression<System.Func<Entities.Aluguel, bool>> where)
        {
            var items = DbConnection.Aluguel
            .Where(where)
            .Include(x => x.PessoaJuridica)
            .Select(x => new Aluguel() 
            {
                PessoaJuridica = new PessoaJuridica().UpdateValues(x.PessoaJuridica)
            }.UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Aluguel> GetAllByPage(Aluguel item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Aluguel() {
                    PessoaJuridica = new PessoaJuridica().UpdateValues(x.PessoaJuridica)
                }.UpdateValues(x));
            
            return ret;
        }

        public void Verify(Aluguel item) 
        {       
            if (item.DthSolicitacao >= item.DthDevolucao) 
            {
                var msg = string.Format(Descricoes.MSG033, "Data da Solicitação", "Data da Devolução");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }
        }
        public void Save(Aluguel item) 
        {
            Verify(item);

            if (item.IdeAluguel > 0) {
                var itemUpd = DbConnection.Aluguel
                .Where(x => x.IdeAluguel == item.IdeAluguel)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Aluguel.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Aluguel();
                itemNew.UpdateValues(item);
                DbConnection.Aluguel.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Aluguel
            .Where(x => x.IdeAluguel == id)
            .FirstOrDefault();

            if (item != null) 
            {
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