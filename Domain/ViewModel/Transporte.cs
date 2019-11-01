using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Transporte
    {
        public int IdeTransporte { get; set; }

        [Display(Name = "Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public int IdeVeiculo { get; set; }

        [Display(Name = "Motorista")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public int IdeMotorista { get; set; }

        [Display(Name = "Solicitante")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public int IdeSolicitante { get; set; }

        [StringLength(250)]
        [Display(Name = "Local de Origem")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public string DscLocalOrigem { get; set; }

        [StringLength(250)]
        [Display(Name = "Local de Destino")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public string DscLocalDestino { get; set; }

        [Display(Name = "Data do Agendamento")]
        [Required(ErrorMessage = Descricoes.MSG006)]            
        public DateTime DthSolicitacao { get; set; }

        [Display(Name = "Início da Viagem")]        
        public DateTime? DthPartida { get; set; }

        [Display(Name = "Fim da Viagem")]        
        public DateTime? DthChegada { get; set; }

        [Display(Name = "Quilometragem Inicial")]          
        public int? NumKMInicio { get; set; }
        
        [Display(Name = "Quilometragem Final")]     
        public int? NumKMFim { get; set; }

        [StringLength(1000)]
        [Display(Name = "Observação")]
        public string DscObservacao { get; set; }

        public DateTime DthInclusao { get; set; }

        public virtual Colaborador Solicitante { get; set; }
        public virtual Colaborador Motorista { get; set; }
        public virtual Veiculo Veiculo { get; set; }
        public virtual ICollection<Passageiro> Passageiro { get; set; }

        #region Campos auxiliares

        public int IdePassageiro { get; set; }

        [StringLength(60)]
        [Display(Name = "Passageiro")]
        public string NomPassageiro { get; set; }

        [Display(Name = "Matrícula")]
        public string NumMatriculaSolicitante { get; set; }

        [Display(Name = "Matrícula")]
        public string NumMatriculaMotorista { get; set; }  

        [Display(Name = "Telefone Celular")]
        public string NumCelularMotorista { get; set; } 

        [Display(Name = "Placa")]
        public string NumPlaca { get; set; }

        [Display(Name = "Data do Agendamento Início")]
        public DateTime? DthSolicitacaoInicio { get; set; }             

        [Display(Name = "Data do Agendamento Fim")]
        public DateTime? DthSolicitacaoFim { get; set; }             

        #endregion
    }
}