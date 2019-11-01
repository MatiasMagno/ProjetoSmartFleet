using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Passageiro
    {
        public int IdePassageiro { get; set; }
        public int IdeTransporte { get; set; }
        public int IdeColaborador { get; set; }

        public virtual Colaborador Colaborador { get; set; }
        public virtual Transporte Transporte { get; set; }
    }
}
