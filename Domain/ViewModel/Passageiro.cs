using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Passageiro
    {
        public int IdePassageiro { get; set; }
        public int IdeTransporte { get; set; }
        public int IdeColaborador { get; set; }

        public virtual Colaborador Colaborador { get; set; }
        public virtual Transporte Transporte { get; set; }
    }
}