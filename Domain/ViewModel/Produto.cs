using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Produto
    {
        public int IdeProduto { get; set; }

        [StringLength(15)]
        [Display(Name = "Código do Produto")]
        [Required(ErrorMessage = Descricoes.MSG006)]           
        public string CodProduto { get; set; }

        [StringLength(150)]
        [Display(Name = "Nome do Produto")]
        [Required(ErrorMessage = Descricoes.MSG006)]           
        public string NomProduto { get; set; }

        public virtual List<ManutencaoProduto> ManutencaoProduto { get; set; }
    }
}