using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class PessoaJuridica
    {
        public int IdePessoaJuridica { get; set; }

        [Display(Name = "UF")]        
        public int? IdeUFEndereco { get; set; }

        [StringLength(18)]
        [Display(Name = "CNPJ")]
        [Required(ErrorMessage = Descricoes.MSG006)]        
        public string NumCNPJ { get; set; }

        [StringLength(60)]
        [Display(Name = "Nome Fantasia")]
        public string NomFantasia { get; set; }

        [StringLength(100)]
        [Display(Name = "Razão Social")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NomRazaoSocial { get; set; }

        [StringLength(20)]
        [Display(Name = "Inscrição Estadual")]
        public string NumInscricaoEstadual { get; set; }

        [StringLength(60)]
        [Display(Name = "Endereço de E-mail")]
        [EmailAddress(ErrorMessage = Descricoes.MSG021)]
        public string DscEmail { get; set; }

        [StringLength(15)]
        [Display(Name = "Telefone Comercial")]
        public string NumTelefone { get; set; }

        [StringLength(100)]
        [Display(Name = "Logradouro")]
        public string DscLogradouro { get; set; }

        [StringLength(6)]
        [Display(Name = "Número")]
        public string NumLogradouro { get; set; }

        [StringLength(60)]
        [Display(Name = "Bairro")]
        public string NomBairro { get; set; }

        [StringLength(60)]
        [Display(Name = "Cidade")]
        public string NomCidade { get; set; }

        [StringLength(10)]
        [Display(Name = "CEP")]
        public string NumCEP { get; set; }

        public virtual UnidadeFederacao UFEndereco { get; set; }


        public DateTime DthSolicitacao { get; set; }
    }
}