using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class PessoaJuridica
    {
        public PessoaJuridica()
        {
            Abastecimento = new HashSet<Abastecimento>();
            Aluguel = new HashSet<Aluguel>();
            Exame = new HashSet<Exame>();
            Seguro = new HashSet<Seguro>();
        }

        public int IdePessoaJuridica { get; set; }
        public int? IdeUFEndereco { get; set; }
        public string NomRazaoSocial { get; set; }
        public string NomFantasia { get; set; }
        public string NumCNPJ { get; set; }
        public string NumInscricaoEstadual { get; set; }
        public string DscEmail { get; set; }
        public string NumTelefone { get; set; }
        public string DscLogradouro { get; set; }
        public string NumLogradouro { get; set; }
        public string NomBairro { get; set; }
        public string NomCidade { get; set; }
        public string NumCEP { get; set; }

        public virtual UnidadeFederacao UFEndereco { get; set; }
        public virtual ICollection<Abastecimento> Abastecimento { get; set; }
        public virtual ICollection<Aluguel> Aluguel { get; set; }
        public virtual ICollection<Exame> Exame { get; set; }
        public virtual ICollection<Seguro> Seguro { get; set; }
    }
}
