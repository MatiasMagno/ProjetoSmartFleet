using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc.Rendering;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Service
{
    public class PessoaJuridicaService : BaseService
    {
        public PessoaJuridicaService()
        {        
        }

        public PessoaJuridica GetById(int id) 
        {
             var item = DbConnection.PessoaJuridica
             .Where(x => x.IdePessoaJuridica == id)
             .Include(x => x.UFEndereco)
             .FirstOrDefault();

            var ret = new PessoaJuridica() 
            {
                UFEndereco = item.UFEndereco != null ? new UnidadeFederacao().UpdateValues(item.UFEndereco): null
            }.UpdateValues(item);
             return ret;
        }
         
        private IEnumerable<Entities.PessoaJuridica> GetAll(PessoaJuridica item) 
        {
            //Filtros
            var temNumCNPJ = !string.IsNullOrEmpty(item.NumCNPJ);
            var temNomFantasia = !string.IsNullOrEmpty(item.NomFantasia);
            var temNomRazaoSocial = !string.IsNullOrEmpty(item.NomRazaoSocial);

            var items = DbConnection.PessoaJuridica
            .Where(x => (temNumCNPJ? x.NumCNPJ == item.NumCNPJ: true) &&
                        (temNomFantasia? x.NomFantasia.Contains(item.NomFantasia): true) &&
                        (temNomRazaoSocial? x.NomRazaoSocial.Contains(item.NomRazaoSocial): true)
                  )
            .Include(x => x.UFEndereco);

            return items;
        }

        public IEnumerable<PessoaJuridica> GetAll(Expression<System.Func<Entities.PessoaJuridica, bool>> where)
        {
            var items = DbConnection.PessoaJuridica
            .Where(where)
            .ToList()
            .Select(x => new PessoaJuridica() 
            {
                UFEndereco = x.UFEndereco != null ? new UnidadeFederacao().UpdateValues(x.UFEndereco): null
            }.UpdateValues(x));

            return items;
        } 

        public IEnumerable<PessoaJuridica> GetAllByPage(PessoaJuridica item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);
            var ret = list.Select(x => new PessoaJuridica() 
            {
                UFEndereco = x.UFEndereco != null ? new UnidadeFederacao().UpdateValues(x.UFEndereco): null
            }.UpdateValues(x));
            return ret;
        }

        public void Verify(PessoaJuridica item) 
        {    
            if (!CNPJ.Validar(item.NumCNPJ)) 
            {
                var msg = string.Format(Descricoes.MSG022, "CNPJ");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            var pj = DbConnection.PessoaJuridica
            .Where(x => x.NumCNPJ == item.NumCNPJ &&
                        x.IdePessoaJuridica != item.IdePessoaJuridica)
            .FirstOrDefault();

            if (pj != null) {
                throw new CoreException(Descricoes.MSG036, CoreExceptionType.Alert);
            }

        }
        
        public void Save(PessoaJuridica item) 
        {
            Verify(item);

            if (item.IdePessoaJuridica > 0) 
            {
                var itemUpd = DbConnection.PessoaJuridica
                .Where(x => x.IdePessoaJuridica == item.IdePessoaJuridica)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.PessoaJuridica.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } 
            else 
            {
                var itemNew = new Entities.PessoaJuridica();
                itemNew.UpdateValues(item);
                DbConnection.PessoaJuridica.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }

        public void Delete(int id) 
        {
            var item = DbConnection.PessoaJuridica
            .Where(x => x.IdePessoaJuridica == id)
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

            var item = DbConnection.PessoaJuridica
            .Where(x => x.IdePessoaJuridica == id)
            .Include(x => x.Abastecimento)
            .Include(x => x.Aluguel)
            .Include(x => x.Exame)
            .Include(x => x.Seguro)
            .FirstOrDefault();

            if ((item.Abastecimento.Count() > 0) || (item.Aluguel.Count() > 0) ||
                (item.Exame.Count() > 0) || (item.Seguro.Count() > 0)) 
            { 
                msg = new Mensagem(Descricoes.MSG005, Tipo.Alerta);
            }

            return msg;           
        }

    }
}