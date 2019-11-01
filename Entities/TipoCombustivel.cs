using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class TipoCombustivel
    {
        public TipoCombustivel()
        {
            Abastecimento = new HashSet<Abastecimento>();
        }

        public int IdeTipoCombustivel { get; set; }
        public string DscTipoCombustivel { get; set; }

        public virtual ICollection<Abastecimento> Abastecimento { get; set; }
    }
}
