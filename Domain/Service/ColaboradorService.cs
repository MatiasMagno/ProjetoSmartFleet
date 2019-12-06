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
    public class ColaboradorService : BaseService
    {
        public ColaboradorService()
        {        
        }

        public Colaborador GetById(int id) 
        {
             var item = DbConnection.Colaborador
             .Where(x => x.IdeColaborador == id)
             .Include(x => x.TipoColaborador)
             .FirstOrDefault();

            var ret = new Colaborador() 
            {
                TipoColaborador = new TipoColaborador().UpdateValues(item.TipoColaborador)
            }.UpdateValues(item);
             return ret;
        }
         
        private IEnumerable<Entities.Colaborador> GetAll(Colaborador item) 
        {
            //Filtros
            var temNumCPF = !string.IsNullOrEmpty(item.NumCPF);
            var temNumMatricula = !string.IsNullOrEmpty(item.NumMatricula);
            var temNomColaborador = !string.IsNullOrEmpty(item.NomColaborador);
            var temTipoColaborador = item.IdeTipoColaborador > 0;

            var items = DbConnection.Colaborador
            .Where(x => (temNumCPF? x.NumCPF == item.NumCPF: true) &&
                        (temNumMatricula? x.NumMatricula == item.NumMatricula: true) && 
                        (temNomColaborador? x.NomColaborador.Contains(item.NomColaborador): true) &&
                        (temTipoColaborador? x.IdeTipoColaborador == item.IdeTipoColaborador: true)
                  )
            .Include(x => x.TipoColaborador);

            return items;
        }

        public IEnumerable<Colaborador> GetAll(Expression<System.Func<Entities.Colaborador, bool>> where)
        {
            var items = DbConnection.Colaborador
            .Where(where)
            .Include(x => x.TipoColaborador)
            .ToList()
            .Select(x => new Colaborador() 
            {
                TipoColaborador = new TipoColaborador().UpdateValues(x.TipoColaborador)
            }.UpdateValues(x));

            return items;
        } 

        public IEnumerable<Colaborador> GetAllByPage(Colaborador item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);
            var ret = list.Select(x => new Colaborador() 
            {
                TipoColaborador = new TipoColaborador().UpdateValues(x.TipoColaborador)
            }.UpdateValues(x));
            return ret;
        }

        public void Verify(Colaborador item) 
        {    
            if (!CPF.Validar(item.NumCPF)) 
            {
                var msg = string.Format(Descricoes.MSG022, "CPF");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            if (item.IdeTipoColaborador == Enums.TipoColaborador.Motorista.GetHashCode()) 
            {
                if ((!item.DatValidadeCNH.HasValue) ||
                   (string.IsNullOrEmpty(item.NumCNH)) ||
                   (!item.IdeUnidadeFederacaoCNH.HasValue) ||
                   (string.IsNullOrEmpty(item.IdcCategoriaCNH))) 
                {
                    throw new CoreException(Descricoes.MSG006,CoreExceptionType.Alert);
                }
            }

            var colaborador = DbConnection.Colaborador
            .Where(x => x.NumMatricula == item.NumMatricula &&
                        x.IdeColaborador != item.IdeColaborador)
            .FirstOrDefault();

            if (colaborador != null) {
                throw new CoreException(Descricoes.MSG037, CoreExceptionType.Alert);
            }

            colaborador = DbConnection.Colaborador
            .Where(x => x.NumCPF == item.NumCPF &&
                        x.IdeColaborador != item.IdeColaborador)
            .FirstOrDefault();

            if (colaborador != null) {
                throw new CoreException(Descricoes.MSG038, CoreExceptionType.Alert);
            }

        }
        
        public void Save(Colaborador item) 
        {
            Verify(item);

            if (item.IdeColaborador > 0) 
            {
                var itemUpd = DbConnection.Colaborador
                .Where(x => x.IdeColaborador == item.IdeColaborador)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Colaborador.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } 
            else 
            {
                var itemNew = new Entities.Colaborador();
                itemNew.UpdateValues(item);
                itemNew.IdcSituacao = Convert.ToString((Char)Enums.Situacao.Ativo);
                DbConnection.Colaborador.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }

        public void Delete(int id) 
        {
            var item = DbConnection.Colaborador
            .Where(x => x.IdeColaborador == id)
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

            var item = DbConnection.Colaborador
            .Where(x => x.IdeColaborador == id)
            .Include(x => x.Exame)
            .Include(x => x.Passageiro)
            .Include(x => x.Motorista)
            .Include(x => x.Solicitante)
            .FirstOrDefault();

            if ((item.Exame.Count() > 0) || (item.Passageiro.Count() > 0) ||
                (item.Motorista.Count() > 0) || (item.Solicitante.Count() > 0)) 
            { 
                msg = new Mensagem(Descricoes.MSG005, Tipo.Alerta);
            }

            return msg;          
        }

        public IEnumerable<TipoColaborador> BuscarTipoColaborador() 
        {
            var items = DbConnection.TipoColaborador
            .ToList()
            .Select(x => new TipoColaborador().UpdateValues(x))
            .ToList();

            return items;
        }

        public IEnumerable<SelectListItem> BuscarCategoriaCNH() 
        {
            var items = new List<SelectListItem>();
            items.Add(new SelectListItem() { Value="A", Text="A" });
            items.Add(new SelectListItem() { Value="B", Text="B" });
            items.Add(new SelectListItem() { Value="C", Text="C" });
            items.Add(new SelectListItem() { Value="D", Text="D" });
            items.Add(new SelectListItem() { Value="E", Text="E" });
            return items;
        }

        public IEnumerable<SelectListItem> BuscarSexo() 
        {
            var items = new List<SelectListItem>();
            items.Add(new SelectListItem() { Value="F", Text="Feminino" });
            items.Add(new SelectListItem() { Value="M", Text="Masculino" });
            return items;
        }

    }
}