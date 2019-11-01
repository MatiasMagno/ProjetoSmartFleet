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
    public class ExameService : BaseService
    {
        public ExameService()
        {        
        }

        public Exame GetById(int id) 
        {
             var item = DbConnection.Exame
             .Where(x => x.IdeExame == id)
             .Include(x => x.Colaborador)
             .Include(x => x.Laboratorio)
             .Include(x => x.UFCRMMedico)
             .FirstOrDefault();
            
            return new Exame() 
            {
                Colaborador = new Colaborador().UpdateValues(item.Colaborador),
                Laboratorio = new PessoaJuridica().UpdateValues(item.Laboratorio),
                UFCRMMedico = new UnidadeFederacao().UpdateValues(item.UFCRMMedico)
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Exame> GetAll(Exame item) 
        {
            //Filtros
            var temIdeColaborador = item.IdeColaborador > 0;
            var temIdeLaboratorio = item.IdeLaboratorio > 0;
            var temNomMedico = !string.IsNullOrEmpty(item.NomMedico);
            var temNumCRMMedico = !string.IsNullOrEmpty(item.NumCRMMedico);
            var temDatExameInicial = item.DatExameInicial.HasValue;
            var temDatExameFinal = item.DatExameFinal.HasValue;

            var items = DbConnection.Exame
            .Where(x => (temIdeColaborador? x.IdeColaborador == item.IdeColaborador: true) &&
                        (temIdeLaboratorio? x.IdeLaboratorio == item.IdeLaboratorio: true) &&
                        (temNomMedico? x.NomMedico.Contains(item.NomMedico): true) &&
                        (temNumCRMMedico? x.NumCRMMedico == item.NumCRMMedico: true) &&
                        (temDatExameInicial? x.DatExame >= item.DatExameInicial: true) &&
                        (temDatExameFinal? x.DatExame <= item.DatExameFinal: true)
                  )
             .Include(x => x.Colaborador)
             .Include(x => x.Laboratorio)
             .Include(x => x.UFCRMMedico);

            return items;
        }

        public IEnumerable<Exame> GetAll(Expression<System.Func<Entities.Exame, bool>> where)
        {
            var items = DbConnection.Exame
            .Where(where)
             .Include(x => x.Colaborador)
             .Include(x => x.Laboratorio)
             .Include(x => x.UFCRMMedico)            
            .Select(x => new Exame() 
            {
                Colaborador = new Colaborador().UpdateValues(x.Colaborador),
                Laboratorio = new PessoaJuridica().UpdateValues(x.Laboratorio),
                UFCRMMedico = new UnidadeFederacao().UpdateValues(x.UFCRMMedico)
            }.UpdateValues(x))
            .ToList();

            return items;
        } 

        public IEnumerable<Exame> GetAllByPage(Exame item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Exame() {
                    Colaborador = new Colaborador().UpdateValues(x.Colaborador),
                    Laboratorio = new PessoaJuridica().UpdateValues(x.Laboratorio),
                    UFCRMMedico = new UnidadeFederacao().UpdateValues(x.UFCRMMedico)
                }.UpdateValues(x));
            
            return ret;
        }

        public void Verify(Exame item) 
        {       

        }
        public void Save(Exame item) 
        {
            Verify(item);

            if (item.IdeExame > 0) {
                var itemUpd = DbConnection.Exame
                .Where(x => x.IdeExame == item.IdeExame)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                DbConnection.Exame.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Exame();
                itemNew.UpdateValues(item);
                DbConnection.Exame.Add(itemNew);
            }
            DbConnection.SaveChanges();
        }
        public void Delete(int id) 
        {
            var item = DbConnection.Exame
            .Where(x => x.IdeExame == id)
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