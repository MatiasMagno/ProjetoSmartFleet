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
    public class ProdutoService : BaseService
    {
        public ProdutoService()
        {        
        }

        public Produto GetById(int id) 
        {
             var item = DbConnection.Produto
             .Where(x => x.IdeProduto == id)
             .Include(x => x.ManutencaoProduto)
             .FirstOrDefault();
            
            return new Produto().UpdateValues(item);
        }
         
        private IEnumerable<Entities.Produto> GetAll(Produto item) 
        {
            //Filtros
            var temCodProduto = !string.IsNullOrEmpty(item.CodProduto);
            var temNomProduto = !string.IsNullOrEmpty(item.NomProduto);

            var items = DbConnection.Produto
            .Where(x => (temCodProduto? x.CodProduto == item.CodProduto: true) &&
                        (temNomProduto? x.NomProduto.Contains(item.NomProduto): true));

            return items;
        }

        public IEnumerable<Produto> GetAll(Expression<System.Func<Entities.Produto, bool>> where)
        {
            var items = DbConnection.Produto
            .Where(where)
            .Select(x => new Produto().UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Produto> GetAllByPage(Produto item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Produto().UpdateValues(x));
            
            return ret;
        }

        public void Verify(Produto item) 
        {       

        }
        public void Save(Produto item) 
        {
            Verify(item);

            if (item.IdeProduto > 0) 
            {
                var itemUpd = DbConnection.Produto
                .Where(x => x.IdeProduto == item.IdeProduto)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Produto.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else 
            {
                var itemNew = new Entities.Produto();
                itemNew.UpdateValues(item);
                DbConnection.Produto.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Produto
            .Where(x => x.IdeProduto == id)
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

            var item = DbConnection.Produto
            .Where(x => x.IdeProduto == id)
            .Include(x => x.ManutencaoProduto)
            .FirstOrDefault();

            if (item.ManutencaoProduto.Count() > 0) 
            { 
                msg = new Mensagem(Descricoes.MSG005, Tipo.Alerta);
            }

            return msg;       
        }
    }
}