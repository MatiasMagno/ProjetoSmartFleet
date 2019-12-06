using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Manutencao
    {
        public Manutencao()
        {
            ManutencaoProduto = new HashSet<ManutencaoProduto>();
        }

        public int IdeManutencao { get; set; }
        public int IdeVeiculo { get; set; }
        public int IdeColaborador { get; set; }
        public int NumKMAtual { get; set; }
        public string IdcTipoManutencao { get; set; }
        public string IdcRodizioPneu { get; set; }
        public string IdcTrocaPneu { get; set; }
        public string IdcTrocaOleo { get; set; }
        public DateTime DthEntrada { get; set; }
        public DateTime? DthSaida { get; set; }
        public string DscManutencao { get; set; }

        public virtual Colaborador Colaborador { get; set; }
        public virtual Veiculo Veiculo { get; set; }
        public virtual ICollection<ManutencaoProduto> ManutencaoProduto { get; set; }
    }
}
