using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Seguro
    {
        public int IdeSeguro { get; set; }

        [Display(Name = "Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public int IdeVeiculo { get; set; }

        [Display(Name = "Seguradora")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public int IdeSeguradora { get; set; }

        [StringLength(30)]
        [Display(Name = "Número da Apólice")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public string NumApolice { get; set; }

        [Display(Name = "Início da Vigência")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public DateTime? DatVigenciaInicio { get; set; }

        [Display(Name = "Fim da Vigência")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public DateTime? DatVigenciaFim { get; set; }

        [Display(Name = "Data de Contratação")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public DateTime DatContratacao { get; set; }

        [Display(Name = "Valor do Seguro")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public decimal VlrSeguro { get; set; }

        [Display(Name = "Valor da Franquia")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public decimal VlrFranquia { get; set; }

        public virtual Veiculo Veiculo { get; set; }
        public virtual PessoaJuridica Seguradora { get; set; }

    }
}