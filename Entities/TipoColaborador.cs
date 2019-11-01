using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class TipoColaborador
    {
        public TipoColaborador()
        {
            Colaborador = new HashSet<Colaborador>();
        }

        public int IdeTipoColaborador { get; set; }
        public string DscTipoColaborador { get; set; }

        public virtual ICollection<Colaborador> Colaborador { get; set; }
    }
}
