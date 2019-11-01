using SmartFleet.Domain;
using SmartFleet.Entities;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Collections.Generic;
using SmartFleet.Domain.Infraestrutura.Utility;

namespace SmartFleet.Service
{
    public class BaseService
    {
        private readonly DBSmartFleet dbSmartFleet;
        public BaseService()
        {
            dbSmartFleet = new DBSmartFleet();
        }
        protected DBSmartFleet DbConnection { 
            get { return dbSmartFleet; } 
        }

        public IEnumerable<Domain.ViewModel.UnidadeFederacao> BuscarUnidadeFederacao(Expression<System.Func<Entities.UnidadeFederacao, bool>> where) 
        {
            var items = DbConnection.UnidadeFederacao
            .Where(where)
            .ToList()
            .Select(x => new Domain.ViewModel.UnidadeFederacao().UpdateValues(x))
            .ToList();

            return items;            
        }

        public void EnviarEmail(string from, string recepient, string cc, string bcc, string subject, string body)
        {
            //new Email().Enviar(from, recepient, cc, bcc, subject, body);
        }

    }
}