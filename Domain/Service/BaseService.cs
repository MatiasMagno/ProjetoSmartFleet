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

        public IEnumerable<Domain.ViewModel.UnidadeFederacao> BuscarUnidadeFederacao() 
        {
            var items = DbConnection.UnidadeFederacao
            .ToList()
            .Select(x => new Domain.ViewModel.UnidadeFederacao().UpdateValues(x))
            .ToList();

            return items;            
        }

    }
}