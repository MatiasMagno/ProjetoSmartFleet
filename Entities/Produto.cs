using System;
using System.Collections.Generic;

namespace SmartFleet.Entities
{
    public partial class Produto
    {
        public Produto()
        {
            ManutencaoProduto = new HashSet<ManutencaoProduto>();
        }

        public int IdeProduto { get; set; }
        public string CodProduto { get; set; }
        public string NomProduto { get; set; }

        public virtual ICollection<ManutencaoProduto> ManutencaoProduto { get; set; }
    }
}
