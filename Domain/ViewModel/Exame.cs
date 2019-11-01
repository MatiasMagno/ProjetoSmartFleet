using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Exame
    {
        public int IdeExame { get; set; }

        [Display(Name = "Laboratório")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public int IdeLaboratorio { get; set; }

        [Display(Name = "UF do CRM do Médico")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public int IdeUFCRMMedico { get; set; }

        [Display(Name = "Motorista")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public int IdeColaborador { get; set; }

        [StringLength(15)]
        [Display(Name = "Código do Exame Toxicológico")]
        [Required(ErrorMessage = Descricoes.MSG006)]       
        public string CodExame { get; set; }

        [StringLength(80)]
        [Display(Name = "Nome do Médico Revisor")]
        [Required(ErrorMessage = Descricoes.MSG006)]       
        public string NomMedico { get; set; }

        [StringLength(15)]
        [Display(Name = "CRM do Médico Revisor")]
        [Required(ErrorMessage = Descricoes.MSG006)]       
        public string NumCRMMedico { get; set; }

        [Display(Name = "Data do Exame")]
        [Required(ErrorMessage = Descricoes.MSG006)]       
        public DateTime DatExame { get; set; }
        
        [StringLength(500)]
        [Display(Name = "Observação")]
        public string DscObservacao { get; set; }

        public virtual PessoaJuridica Laboratorio { get; set; }
        public virtual UnidadeFederacao UFCRMMedico { get; set; }
        public virtual Colaborador Colaborador { get; set; }

        [Display(Name = "Data do Exame Inicial")]
        public DateTime? DatExameInicial { get; set; }

        [Display(Name = "Data do Exame Final")]
        public DateTime? DatExameFinal { get; set; }        

    }
}