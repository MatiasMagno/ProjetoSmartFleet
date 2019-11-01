using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class ManutencaoProduto
    {
        public int IdeManutencaoProduto { get; set; }
        public int IdeManutencao { get; set; }
        public int IdeProduto { get; set; }

        public virtual Manutencao Manutencao { get; set; }
        public virtual Produto Produto { get; set; }
    }
}