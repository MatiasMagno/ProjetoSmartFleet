using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Sinistro
    {
        public int IdeSinistro { get; set; }

        [Display(Name = "Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public int IdeVeiculo { get; set; }
      
        public int IdeSeguro { get; set; }

        [Display(Name = "Tipo de Sinistro")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public string IdcTipoSinistro { get; set; }

        [Display(Name = "Data da Ocorrência")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public DateTime DatOcorrencia { get; set; }

        [StringLength(500)]
        [Display(Name = "Observação")]
        public string DscObservacao { get; set; }

        public virtual Seguro Seguro { get; set; }

        #region Campos auxiliares

        [Display(Name = "Placa")]
        public string NumPlaca { get; set; }

        [Display(Name = "Código RENAVAM")]
        public string CodRenavam { get; set; }
        
        [Display(Name = "Número da Apólice")]
        public string NumApolice { get; set; }
        
        [Display(Name = "Valor da Franquia")]
        public decimal VlrFranquia { get; set; }
        
        [Display(Name = "Início da Vigência")]
        public DateTime DatVigenciaInicio { get; set; }
        
        [Display(Name = "Fim da Vigência")]
        public DateTime DatVigenciaFim { get; set; }
        
        [Display(Name = "Seguradora")]
        public string NomSeguradora { get; set; }
        
        [Display(Name = "CNPJ")]
        public string NumCNPJ { get; set; }
        
        [Display(Name = "Telefone Comercial")]
        public string NumTelefone { get; set; }

        [Display(Name = "Início da Ocorrência")]
        public DateTime? DatOcorrenciaInicio { get; set; }

        [Display(Name = "Fim da Ocorrência")]
        public DateTime? DatOcorrenciaFim { get; set; }

        [Display(Name = "Seguradora")]
        public int IdeSeguradora { get; set; }

        #endregion

    }
}