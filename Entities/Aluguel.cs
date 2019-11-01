using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Aluguel
    {
        public int IdeAluguel { get; set; }
        public int IdePessoaJuridica { get; set; }
        public string DscVeiculo { get; set; }
        public DateTime DthSolicitacao { get; set; }
        public DateTime? DthDevolucao { get; set; }
        public string NumNotaFiscal { get; set; }
        public decimal? VrlNotaFiscal { get; set; }
        public string DscObservacao { get; set; }

        public virtual PessoaJuridica PessoaJuridica { get; set; }
    }
}
