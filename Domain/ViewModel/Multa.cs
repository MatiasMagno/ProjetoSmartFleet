using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Multa
    {
        public int IdeMulta { get; set; }

        [Display(Name = "Veículo")]        
        [Required(ErrorMessage = Descricoes.MSG006)]        
        public int IdeVeiculo { get; set; }

        [StringLength(10)]
        [Display(Name = "Auto de Infração")]
        [Required(ErrorMessage = Descricoes.MSG006)]        
        public string NumAutoInfracao { get; set; }

        [StringLength(150)]
        [Display(Name = "Descrição da Infração")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public string DscInfracao { get; set; }

        [StringLength(250)]
        [Display(Name = "Local da Infração")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public string DscLocalInfracao { get; set; }

        [Display(Name = "Data da Infração")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public DateTime DatInfracao { get; set; }

        [Display(Name = "Data de Vencimento")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public DateTime DatVencimento { get; set; }

        [Display(Name = "Valor da Autuação")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public decimal VlrAutuacao { get; set; }

        [Display(Name = "Valor de Desconto")]
        public Nullable<decimal> VlrDesconto { get; set; }

        [Display(Name = "Número de Pontos na CNH")]
        public Nullable<int> NumPontuacao { get; set; }

        [Display(Name = "Data da Infração Inicial")]
        public DateTime? DatInfracaoInicial { get; set; }

        [Display(Name = "Data da Infração Final")]
        public DateTime? DatInfracaoFinal { get; set; }

        [Display(Name = "Data de Vencimento Inicial")]
        public DateTime? DatVencimentoInicial { get; set; }

        [Display(Name = "Data de Vencimento Final")]
        public DateTime? DatVencimentoFinal { get; set; }

        public virtual Veiculo Veiculo { get; set; }   

    }
}