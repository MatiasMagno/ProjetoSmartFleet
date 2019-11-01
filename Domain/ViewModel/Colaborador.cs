using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Colaborador
    {
        public int IdeColaborador { get; set; }

        [Display(Name = "Tipo do Colaborador")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public int IdeTipoColaborador { get; set; }

        [StringLength(10)]
        [Display(Name = "Matrícula")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumMatricula { get; set; }

        [StringLength(80)]
        [Display(Name = "Nome do Colaborador")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NomColaborador { get; set; }

        [StringLength(1)]
        [Display(Name = "Sexo")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string IdcSexo { get; set; }

        [Display(Name = "CPF")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumCPF { get; set; }

        [StringLength(80)]
        [Display(Name = "Nome da Mãe")]
        public string NomMae { get; set; }

        [StringLength(80)]
        [Display(Name = "Nome do Pai")]
        public string NomPai { get; set; }
        
        [Display(Name = "Data de Nacimento")]
        public DateTime? DatNascimento { get; set; }
        
        [Display(Name = "Telefone Residêncial")]
        public string NumTelefone { get; set; }

        [Display(Name = "Telefone Celular")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumCelular { get; set; }
        
        [StringLength(60)]
        [Display(Name = "E-mail")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        [EmailAddress(ErrorMessage = Descricoes.MSG021)]
        public string DscEmail { get; set; }

        [StringLength(15)]
        [Display(Name = "Número da CNH")]
        public string NumCNH { get; set; }
        
        [Display(Name = "Categoria da CNH")]
        public string IdcCategoriaCNH { get; set; }

        [Display(Name = "Validade da CNH")]
        public DateTime? DatValidadeCNH { get; set; }

        [Display(Name = "UF da CNH")]
        public int? IdeUnidadeFederacaoCNH { get; set; }

        [Display(Name = "Situação do Colaborador")]
        public string IdcSituacao { get; set; }

        public virtual TipoColaborador TipoColaborador { get; set; }
    }
}