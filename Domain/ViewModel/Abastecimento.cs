using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Abastecimento
    {
        public int IdeAbastecimento { get; set; }

        [Display(Name = "Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public int IdeVeiculo { get; set; }

        [Display(Name = "Tipo de Combustível")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public int IdeTipoCombustivel { get; set; }

        [Display(Name = "Posto de Abastecimento")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public int IdePessoaJuridica { get; set; }

        [Display(Name = "Data de Abastecimento")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public DateTime DatAbastecimento { get; set; }

        //quilowatt-hora (kWh)
        [Display(Name = "Qtde de Litros")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public decimal QtdAbastecimento { get; set; }

        [Display(Name = "Valor Total")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public decimal VlrAbastecimento { get; set; }

        public virtual PessoaJuridica PessoaJuridica { get; set; }
        public virtual TipoCombustivel TipoCombustivel { get; set; }
        public virtual Veiculo Veiculo { get; set; }

         #region Campos auxiliares

        [Display(Name = "Data de Abastecimento Início")]
        public DateTime? DatAbastecimentoInicio { get; set; }

        [Display(Name = "Data de Abastecimento Fim")]
        public DateTime? DatAbastecimentoFim { get; set; }

        #endregion

    }
}