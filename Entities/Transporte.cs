using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Transporte
    {
        public Transporte()
        {
            Passageiro = new HashSet<Passageiro>();
        }

        public int IdeTransporte { get; set; }
        public int IdeVeiculo { get; set; }
        public int IdeMotorista { get; set; }
        public int IdeSolicitante { get; set; }
        public string DscLocalOrigem { get; set; }
        public string DscLocalDestino { get; set; }
        public DateTime DthSolicitacao { get; set; }
        public DateTime? DthChegada { get; set; }
        public int? NumKMInicio { get; set; }
        public int? NumKMFim { get; set; }
        public string DscObservacao { get; set; }
        public DateTime DthInclusao { get; set; }
        public DateTime? DthPartida { get; set; }

        public virtual Colaborador Motorista { get; set; }
        public virtual Colaborador Solicitante { get; set; }
        public virtual Veiculo Veiculo { get; set; }
        public virtual ICollection<Passageiro> Passageiro { get; set; }
    }
}
