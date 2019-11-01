using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class TipoCombustivel
    {
        public int IdeTipoCombustivel { get; set; }
        public string DscTipoCombustivel { get; set; }

        public virtual ICollection<Abastecimento> Abastecimento { get; set; }
    }
}