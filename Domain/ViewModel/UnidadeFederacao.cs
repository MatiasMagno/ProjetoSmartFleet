using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class UnidadeFederacao
    {
        public int IdeUnidadeFederacao { get; set; }
        public string SigUnidadeFederacao { get; set; }
        public string NomUnidadeFederacao { get; set; }
    }
}