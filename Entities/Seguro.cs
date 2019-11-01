using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Seguro
    {
        public Seguro()
        {
            Sinistro = new HashSet<Sinistro>();
        }

        public int IdeSeguro { get; set; }
        public int IdeVeiculo { get; set; }
        public int IdeSeguradora { get; set; }
        public string NumApolice { get; set; }
        public DateTime DatVigenciaInicio { get; set; }
        public DateTime DatVigenciaFim { get; set; }
        public DateTime DatContratacao { get; set; }
        public decimal VlrSeguro { get; set; }
        public decimal VlrFranquia { get; set; }

        public virtual PessoaJuridica Seguradora { get; set; }
        public virtual Veiculo Veiculo { get; set; }
        public virtual ICollection<Sinistro> Sinistro { get; set; }
    }
}
