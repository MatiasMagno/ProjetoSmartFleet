using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class TipoColaborador
    {
        public int IdeTipoColaborador { get; set; }
        public string DscTipoColaborador { get; set; }
    }
}