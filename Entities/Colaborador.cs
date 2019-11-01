using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Colaborador
    {
        public Colaborador()
        {
            Exame = new HashSet<Exame>();
            Manutencao = new HashSet<Manutencao>();
            Passageiro = new HashSet<Passageiro>();
            Motorista = new HashSet<Transporte>();
            Solicitante = new HashSet<Transporte>();
        }

        public int IdeColaborador { get; set; }
        public int IdeTipoColaborador { get; set; }
        public int? IdeUnidadeFederacaoCNH { get; set; }
        public string NumMatricula { get; set; }
        public string NomColaborador { get; set; }
        public string NumCPF { get; set; }
        public string NomMae { get; set; }
        public string NomPai { get; set; }
        public DateTime? DatNascimento { get; set; }
        public string IdcSexo { get; set; }
        public string NumCelular { get; set; }
        public string NumTelefone { get; set; }
        public string DscEmail { get; set; }
        public string NumCNH { get; set; }
        public string IdcCategoriaCNH { get; set; }
        public DateTime? DatValidadeCNH { get; set; }
        public string IdcSituacao { get; set; }

        public virtual TipoColaborador TipoColaborador { get; set; }
        public virtual UnidadeFederacao UnidadeFederacaoCNH { get; set; }
        public virtual ICollection<Exame> Exame { get; set; }
        public virtual ICollection<Manutencao> Manutencao { get; set; }
        public virtual ICollection<Passageiro> Passageiro { get; set; }
        public virtual ICollection<Transporte> Motorista { get; set; }
        public virtual ICollection<Transporte> Solicitante { get; set; }
    }
}
