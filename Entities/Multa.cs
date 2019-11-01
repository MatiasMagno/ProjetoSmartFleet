using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Multa
    {
        public int IdeMulta { get; set; }
        public int IdeVeiculo { get; set; }
        public string NumAutoInfracao { get; set; }
        public string DscInfracao { get; set; }
        public string DscLocalInfracao { get; set; }
        public DateTime DatInfracao { get; set; }
        public DateTime DatVencimento { get; set; }
        public decimal VlrAutuacao { get; set; }
        public decimal VlrDesconto { get; set; }
        public int NumPontuacao { get; set; }

        public virtual Veiculo Veiculo { get; set; }
    }
}
