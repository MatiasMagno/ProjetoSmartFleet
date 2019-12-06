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
    public class AbastecimentoService : BaseService
    {
        public AbastecimentoService()
        {        
        }

        public Abastecimento GetById(int id) 
        {
            var item = DbConnection.Abastecimento
            .Where(x => x.IdeAbastecimento == id)
            .Include(x => x.Veiculo)
            .Include(x => x.PessoaJuridica)
            .Include(x => x.TipoCombustivel)
            .FirstOrDefault();
            
            return new Abastecimento() 
            {
                Veiculo = new Veiculo().UpdateValues(item.Veiculo),
                PessoaJuridica = new PessoaJuridica().UpdateValues(item.PessoaJuridica),
                TipoCombustivel = new TipoCombustivel().UpdateValues(item.TipoCombustivel)
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Abastecimento> GetAll(Abastecimento item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temIdePessoaJuridica = item.IdePessoaJuridica > 0;
            var temDatAbastecimentoFim = item.DatAbastecimentoFim.HasValue;
            var temDatAbastecimentoInicio = item.DatAbastecimentoInicio.HasValue;


            var items = DbConnection.Abastecimento
            .Where(x => (temIdeVeiculo? x.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temIdePessoaJuridica? x.IdePessoaJuridica == item.IdePessoaJuridica: true) &&
                        (temDatAbastecimentoInicio? x.DatAbastecimento >= item.DatAbastecimentoInicio: true) &&
                        (temDatAbastecimentoFim? x.DatAbastecimento <= item.DatAbastecimentoFim: true)                        
                  )
            .Include(x => x.Veiculo)
            .Include(x => x.PessoaJuridica)
            .Include(x => x.TipoCombustivel);

            return items;
        }

        public IEnumerable<Abastecimento> GetAll(Expression<System.Func<Entities.Abastecimento, bool>> where)
        {
            var items = DbConnection.Abastecimento
            .Where(where)
            .Include(x => x.Veiculo)
            .Include(x => x.PessoaJuridica)
            .Include(x => x.TipoCombustivel)           
            .Select(x => new Abastecimento() 
            {
                Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                PessoaJuridica = new PessoaJuridica().UpdateValues(x.PessoaJuridica),
                TipoCombustivel = new TipoCombustivel().UpdateValues(x.TipoCombustivel)
            }.UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Abastecimento> GetAllByPage(Abastecimento item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Abastecimento() {
                    Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                    PessoaJuridica = new PessoaJuridica().UpdateValues(x.PessoaJuridica),
                    TipoCombustivel = new TipoCombustivel().UpdateValues(x.TipoCombustivel)
                }.UpdateValues(x));
            
            return ret;
        }

        public void Verify(Abastecimento item) 
        {       

        }
        public void Save(Abastecimento item) 
        {
            Verify(item);

            if (item.IdeAbastecimento > 0) {
                var itemUpd = DbConnection.Abastecimento
                .Where(x => x.IdeAbastecimento == item.IdeAbastecimento)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Abastecimento.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Abastecimento();
                itemNew.UpdateValues(item);
                DbConnection.Abastecimento.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Abastecimento
            .Where(x => x.IdeAbastecimento == id)
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

        public IEnumerable<Abastecimento> GetRelatorio(Abastecimento item) 
        {
            var items = GetAll(item)
                .Select(x => new Abastecimento() 
                {
                    Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                    PessoaJuridica = new PessoaJuridica().UpdateValues(x.PessoaJuridica),
                    TipoCombustivel = new TipoCombustivel().UpdateValues(x.TipoCombustivel)
                }.UpdateValues(x));
            
            return items;
        }
    }
}