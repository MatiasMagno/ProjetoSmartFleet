using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Veiculo
    {
        public Veiculo()
        {
            Abastecimento = new HashSet<Abastecimento>();
            Manutencao = new HashSet<Manutencao>();
            Multa = new HashSet<Multa>();
            Seguro = new HashSet<Seguro>();
            Transporte = new HashSet<Transporte>();
        }

        public int IdeVeiculo { get; set; }
        public string NumPlaca { get; set; }
        public string NumChassi { get; set; }
        public string DscTipo { get; set; }
        public string DscMarcaModelo { get; set; }
        public string NumAnoFab { get; set; }
        public string NumAnoMod { get; set; }
        public string DscCorPredominante { get; set; }
        public string CodRenavam { get; set; }
        public int NumKMInicial { get; set; }
        public string IdcEtanol { get; set; }
        public string IdcGasolina { get; set; }
        public string IdcEletrico { get; set; }
        public string IdcGNV { get; set; }
        public string IdcDiesel { get; set; }
        public string IdcBiodiesel { get; set; }
        public string IdcSituacao { get; set; }

        public virtual ICollection<Abastecimento> Abastecimento { get; set; }
        public virtual ICollection<Manutencao> Manutencao { get; set; }
        public virtual ICollection<Multa> Multa { get; set; }
        public virtual ICollection<Seguro> Seguro { get; set; }
        public virtual ICollection<Transporte> Transporte { get; set; }
    }
}
