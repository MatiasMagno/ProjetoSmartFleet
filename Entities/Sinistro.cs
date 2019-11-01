using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Sinistro
    {
        public int IdeSinistro { get; set; }
        public int IdeSeguro { get; set; }
        public string IdcTipoSinistro { get; set; }
        public DateTime DatOcorrencia { get; set; }
        public string DscObservacao { get; set; }

        public virtual Seguro Seguro { get; set; }
    }
}
