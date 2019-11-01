using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class ManutencaoProduto
    {
        public int IdeManutencaoProduto { get; set; }
        public int IdeManutencao { get; set; }
        public int IdeProduto { get; set; }

        public virtual Manutencao Manutencao { get; set; }
        public virtual Produto Produto { get; set; }
    }
}
