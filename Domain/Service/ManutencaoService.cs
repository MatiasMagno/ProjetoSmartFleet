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
    public class ManutencaoService : BaseService
    {
        private readonly ProdutoService _produtoService;
        public ManutencaoService()
        {        
            _produtoService = new ProdutoService();
        }

        public Manutencao GetById(int id) 
        {
             var item = DbConnection.Manutencao
             .Where(x => x.IdeManutencao == id)
             .Include(x => x.Colaborador)
             .Include(x => x.Veiculo)
             .Include(x => x.ManutencaoProduto)
             .FirstOrDefault();
            
            return new Manutencao() 
            {
                Colaborador = new Colaborador().UpdateValues(item.Colaborador),
                Veiculo = new Veiculo().UpdateValues(item.Veiculo),
                ManutencaoProduto = item.ManutencaoProduto
                .Select(mp => new ManutencaoProduto() 
                {
                    Produto = new Produto().UpdateValues(mp.Produto)   
                }.UpdateValues(mp)).ToList()
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Manutencao> GetAll(Manutencao item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temIdeColaborador = item.IdeColaborador > 0;
            var temIdcTipoManutencao = !string.IsNullOrEmpty(item.IdcTipoManutencao);

            var items = DbConnection.Manutencao
            .Where(x => (temIdeVeiculo? x.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temIdeColaborador? x.IdeColaborador == item.IdeColaborador: true) &&
                        (temIdcTipoManutencao? x.IdcTipoManutencao == item.IdcTipoManutencao: true))
             .Include(x => x.Colaborador)
             .Include(x => x.Veiculo)
             .Include(x => x.ManutencaoProduto);

            return items;
        }

        public IEnumerable<Manutencao> GetAll(Expression<System.Func<Entities.Manutencao, bool>> where)
        {
            var items = DbConnection.Manutencao
            .Where(where)
            .Select(x => new Manutencao()
            {
                Colaborador = new Colaborador().UpdateValues(x.Colaborador),
                Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                ManutencaoProduto = x.ManutencaoProduto.Select(mp => new ManutencaoProduto() 
                {
                    Produto = new Produto().UpdateValues(mp.Produto)   
                }.UpdateValues(mp)).ToList()
            }.UpdateValues(x))
            .ToList();



            return items;
        } 

        public IEnumerable<Manutencao> GetAllByPage(Manutencao item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Manutencao()
                {
                    Colaborador = new Colaborador().UpdateValues(x.Colaborador),
                    Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                    ManutencaoProduto = x.ManutencaoProduto
                    .Select(mp => new ManutencaoProduto() 
                    {
                        Produto = new Produto().UpdateValues(mp.Produto)   
                    }.UpdateValues(mp)).ToList()
                }.UpdateValues(x))
                .ToList();                
            
            return ret;
        }

        public void Verify(Manutencao item) 
        {       

        }
        public void Save(Manutencao item) 
        {
            Verify(item);

            if (item.IdeManutencao > 0) 
            {
                var itemUpd = DbConnection.Manutencao
                .Where(x => x.IdeManutencao == item.IdeManutencao)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                foreach(var obj in itemUpd.ManutencaoProduto) 
                {
                    DbConnection.Attach(obj);
                    DbConnection.Remove(obj);
                }

                if (item.ManutencaoProduto != null) {
                    itemUpd.ManutencaoProduto = item.ManutencaoProduto.Select(x => new Entities.ManutencaoProduto().UpdateValues(x)).ToList();
                }

                DbConnection.Manutencao.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else 
            {
                var itemNew = new Entities.Manutencao();
                itemNew.UpdateValues(item);
                itemNew.DthEntrada = DateTime.Now;
                DbConnection.Manutencao.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Manutencao
            .Where(x => x.IdeManutencao == id)
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

        public IEnumerable<Produto> BuscarProduto(string text, int take = 10) 
        {
            var items = _produtoService
            .GetAll(x => x.IdeProduto > 0)
            .OrderBy(x => x.NomProduto)
            .Take(take)
            .Select(x => new Produto().UpdateValues(x))
            .ToList();

            return items;
        }

    }
}