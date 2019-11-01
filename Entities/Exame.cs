using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Exame
    {
        public int IdeExame { get; set; }
        public int IdeLaboratorio { get; set; }
        public int IdeUFCRMMedico { get; set; }
        public int IdeColaborador { get; set; }
        public string CodExame { get; set; }
        public string NomMedico { get; set; }
        public string NumCRMMedico { get; set; }
        public DateTime DatExame { get; set; }
        public string DscObservacao { get; set; }

        public virtual Colaborador Colaborador { get; set; }
        public virtual PessoaJuridica Laboratorio { get; set; }
        public virtual UnidadeFederacao UFCRMMedico { get; set; }
    }
}
