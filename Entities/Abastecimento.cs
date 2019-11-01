using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Abastecimento
    {
        public int IdeAbastecimento { get; set; }
        public int IdeVeiculo { get; set; }
        public int IdeTipoCombustivel { get; set; }
        public int IdePessoaJuridica { get; set; }
        public DateTime DatAbastecimento { get; set; }
        // public int NumKMAtual { get; set; }
        public decimal QtdAbastecimento { get; set; }
        public decimal VlrAbastecimento { get; set; }

        public virtual PessoaJuridica PessoaJuridica { get; set; }
        public virtual TipoCombustivel TipoCombustivel { get; set; }
        public virtual Veiculo Veiculo { get; set; }
    }
}
