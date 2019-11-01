using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class UnidadeFederacao
    {
        public UnidadeFederacao()
        {
            Colaborador = new HashSet<Colaborador>();
            Exame = new HashSet<Exame>();
            PessoaJuridica = new HashSet<PessoaJuridica>();
        }

        public int IdeUnidadeFederacao { get; set; }
        public string SigUnidadeFederacao { get; set; }
        public string NomUnidadeFederacao { get; set; }

        public virtual ICollection<Colaborador> Colaborador { get; set; }
        public virtual ICollection<Exame> Exame { get; set; }
        public virtual ICollection<PessoaJuridica> PessoaJuridica { get; set; }
    }
}
