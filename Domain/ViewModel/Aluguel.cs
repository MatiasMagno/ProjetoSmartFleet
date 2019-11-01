using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Aluguel
    {
        public int IdeAluguel { get; set; }

        [Display(Name = "Locadora de Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public int IdePessoaJuridica { get; set; }

        [StringLength(150)]
        [Display(Name = "Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string DscVeiculo { get; set; }

        [Display(Name = "Data da Solicitação")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public DateTime DthSolicitacao { get; set; }

        [Display(Name = "Número da Nota Fiscal")]
        public string NumNotaFiscal { get; set; }
        
        [Display(Name = "Valor da Nota Fiscal")]
        public decimal? VrlNotaFiscal { get; set; }

        [Display(Name = "Data da Devolução")]
        public DateTime? DthDevolucao { get; set; }

        [Display(Name = "Observação")]
        public string DscObservacao { get; set; }
        public virtual PessoaJuridica PessoaJuridica { get; set; }

         #region Campos auxiliares

        [Display(Name = "Data da Solicitação Início")]
        public DateTime? DthSolicitacaoInicio { get; set; }

        [Display(Name = "Data da Solicitação Fim")]
        public DateTime? DthSolicitacaoFim { get; set; }

        #endregion

    }
}