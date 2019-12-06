using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Veiculo
    {
        public int IdeVeiculo { get; set; }

        [StringLength(7)]
        [Display(Name = "Placa")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumPlaca { get; set; }

        [StringLength(17)]
        [Display(Name = "CHASSI")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumChassi { get; set; }

        [StringLength(50)]
        [Display(Name = "Espécie Tipo")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string DscTipo { get; set; }

        [StringLength(50)]
        [Display(Name = "Marca / Modelo")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string DscMarcaModelo { get; set; }

        [StringLength(4)]
        [Display(Name = "Ano Fabricação")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumAnoFab { get; set; }

        [StringLength(4)]
        [Display(Name = "Modelo Fabricação")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string NumAnoMod { get; set; }
        
        [StringLength(15)]
        [Display(Name = "Cor Predominante")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string DscCorPredominante { get; set; }

        [StringLength(15)]
        [Display(Name = "Código RENAVAM")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string CodRenavam { get; set; }

        //[StringLength(6)]
        [Display(Name = "Quilometragem Inicial")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public int NumKMInicial { get; set; }

        public string IdcEtanol { get; set; }
        public string IdcGasolina { get; set; }
        public string IdcEletrico { get; set; }
        public string IdcGNV { get; set; }
        public string IdcDiesel { get; set; }
        public string IdcBiodiesel { get; set; }

        [Display(Name = "Situação do Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]
        public string IdcSituacao { get; set; } 

        public virtual List<Multa> Multa { get; set; }
        public virtual List<Seguro> Seguro { get; set; }
        public virtual List<Manutencao> Manutencao { get; set; }
        public virtual List<Transporte> Transporte { get; set; }
        public virtual List<Abastecimento> Abastecimento { get; set; }

    }
}