using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Service
{
    public class VeiculoService : BaseService
    {
        public VeiculoService()
        {        
        }

        public Veiculo GetById(int id) 
        {
            var item = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo == id)
            .Include(x => x.Seguro).ThenInclude(s => s.Veiculo)
            .Include(x => x.Seguro).ThenInclude(s => s.Seguradora)    
            .Include(x => x.Manutencao)         
            .FirstOrDefault();

            var ret = new Veiculo() 
            {
                Seguro = item.Seguro.Select(s => new Seguro() 
                {
                    Veiculo = new Veiculo().UpdateValues(s.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(s.Seguradora)
                }.UpdateValues(s)).ToList(),
                Manutencao = item.Manutencao.Select(m => new Manutencao().UpdateValues(m)).ToList()
            }.UpdateValues(item);

             return ret;
        }
         
        private IEnumerable<Entities.Veiculo> GetAll(Veiculo item) 
        {
            //Filtros
            var temNumPlaca = !string.IsNullOrEmpty(item.NumPlaca);
            var temNumAnoFab = !string.IsNullOrEmpty(item.NumAnoFab);
            var temIdcSituacao = !string.IsNullOrEmpty(item.IdcSituacao);
            var temDscMarcaModelo = !string.IsNullOrEmpty(item.DscMarcaModelo);

            var items = DbConnection.Veiculo
            .Where(x => (temNumPlaca? x.NumPlaca == item.NumPlaca: true) &&
                        (temNumAnoFab? x.NumAnoFab == item.NumAnoFab: true) && 
                        (temIdcSituacao? x.IdcSituacao == item.IdcSituacao: true) &&
                        (temDscMarcaModelo? x.DscMarcaModelo.Contains(item.DscMarcaModelo): true)
                  );

            return items;
        }

        public IEnumerable<Veiculo> GetAll(Expression<System.Func<Entities.Veiculo, bool>> where)
        {
            var items = DbConnection.Veiculo
            .Where(where)
            .Include(x => x.Seguro).ThenInclude(s => s.Veiculo)
            .Include(x => x.Seguro).ThenInclude(s => s.Seguradora)
            .Include(x => x.Manutencao)
            .ToList()
            .Select(x => new Veiculo() 
            {
                Seguro = x.Seguro.Select(s => new Seguro() 
                {
                    Veiculo = new Veiculo().UpdateValues(s.Veiculo),
                    Seguradora = new PessoaJuridica().UpdateValues(s.Seguradora)
                }.UpdateValues(s)).ToList(),
                Manutencao = x.Manutencao.Select(m => new Manutencao().UpdateValues(m)).ToList()
            }.UpdateValues(x));          

            return items;
        } 

        public IEnumerable<Veiculo> GetAllByPage(Veiculo item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);
            var ret = list.Select(x => new Veiculo().UpdateValues(x));
            return ret;
        }

        public void Verify(Veiculo item) 
        {    
            var veiculo = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo == item.IdeVeiculo)
            .Include(x => x.Seguro).ThenInclude(s => s.Sinistro)
            .FirstOrDefault();

            if (veiculo != null)
            {
                var seguro = veiculo.Seguro.Where(x => x.DatVigenciaFim >= DateTime.Now.Date).FirstOrDefault();
                if (seguro != null) 
                {
                    var sinistro = seguro.Sinistro.Where(x => x.IdcTipoSinistro == Convert.ToString((Char)Enums.TipoSinistro.Total)).FirstOrDefault();
                    if ((sinistro != null) && (item.IdcSituacao == Convert.ToString((Char)Enums.Situacao.Ativo)))
                    {
                        throw new CoreException(Descricoes.MSG027, CoreExceptionType.Alert);
                    }
                }
            }

            var idcSelecionado = Convert.ToString((Char)Enums.Selecionado.Sim);
            var idcNaoSelecionado = (item.IdcGasolina != idcSelecionado && item.IdcEtanol != idcSelecionado &&
                                     item.IdcDiesel != idcSelecionado && item.IdcBiodiesel != idcSelecionado &&
                                     item.IdcEletrico != idcSelecionado && item.IdcGNV != idcSelecionado);

            if (idcNaoSelecionado) 
                throw new CoreException(Descricoes.MSG031, CoreExceptionType.Alert);

            veiculo = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo != item.IdeVeiculo && 
                        x.CodRenavam == item.CodRenavam)
            .FirstOrDefault();

            if (veiculo != null) {
                throw new CoreException(Descricoes.MSG028, CoreExceptionType.Alert);
            }

            veiculo = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo != item.IdeVeiculo && 
                        x.NumPlaca == item.NumPlaca)
            .FirstOrDefault();

            if (veiculo != null) {
                throw new CoreException(Descricoes.MSG029, CoreExceptionType.Alert);
            }

            veiculo = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo != item.IdeVeiculo && 
                        x.NumChassi == item.NumChassi)
            .FirstOrDefault();

            if (veiculo != null) {
                throw new CoreException(Descricoes.MSG030, CoreExceptionType.Alert);
            }
            
               
        }
        
        public void Save(Veiculo item) 
        {
            Verify(item);

            if (item.IdeVeiculo > 0) {
                var itemUpd = DbConnection.Veiculo
                .Where(x => x.IdeVeiculo == item.IdeVeiculo)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Veiculo.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Veiculo();
                itemNew.UpdateValues(item);
                itemNew.IdcSituacao = "A";
                DbConnection.Veiculo.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }

        public void Delete(int id) {
            var item = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo == id)
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

            var item = DbConnection.Veiculo
            .Where(x => x.IdeVeiculo == id)
            .Include(x => x.Abastecimento)
            .Include(x => x.Multa)
            .Include(x => x.Seguro)
            .Include(x => x.Transporte)
            .FirstOrDefault();

            if ((item.Abastecimento.Count() > 0) || (item.Multa.Count() > 0) ||
                (item.Seguro.Count() > 0) || (item.Transporte.Count() > 0)) 
            { 
                msg = new Mensagem(Descricoes.MSG005, Tipo.Alerta);
            }

            return msg;           
        }

        public IEnumerable<TipoCombustivel> BuscarTipoCombustivel() 
        {
            var items = DbConnection.TipoCombustivel
            .ToList()
            .Select(x => new TipoCombustivel().UpdateValues(x))
            .ToList();

            return items;
        }
    }
}