using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Domain.ViewModel
{
    public class Manutencao
    {
        public int IdeManutencao { get; set; }

        [Display(Name = "Veículo")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public int IdeVeiculo { get; set; }

        [Display(Name = "Mecânico Responsável")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public int IdeColaborador { get; set; }

        [Display(Name = "Tipo de Manutenção")]
        [Required(ErrorMessage = Descricoes.MSG006)]         
        public string IdcTipoManutencao { get; set; }

        [Display(Name = "Quilometragem Atual")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public int NumKMAtual { get; set; }

        [Display(Name = "Rodízio de Penu")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public string IdcRodizioPneu { get; set; }

        [Display(Name = "Troca de Pneu")]
        [Required(ErrorMessage = Descricoes.MSG006)]  
        public string IdcTrocaPneu { get; set; }

        [Display(Name = "Troca de Óleo")]
        [Required(ErrorMessage = Descricoes.MSG006)] 
        public string IdcTrocaOleo { get; set; }

        [Display(Name = "Entrada na Manutenção")]
        [Required(ErrorMessage = Descricoes.MSG006)] 
        public DateTime DthEntrada { get; set; }

        [Display(Name = "Saída da Manutenção")]
        public DateTime? DthSaida { get; set; }

        [StringLength(2000)]
        [Display(Name = "Descrição da Manutenção do Veículo")]
        public string DscManutencao { get; set; }

        public virtual Colaborador Colaborador { get; set; }
        public virtual Veiculo Veiculo { get; set; }
        public virtual List<ManutencaoProduto> ManutencaoProduto { get; set; }

        #region campos auxiliares

        [Display(Name = "Nome do Produto")]
        public string NomProduto { get; set; }

        [Display(Name = "Placa")]
        public string NumPlaca { get; set; }

        [Display(Name = "Matrícula")]
        public string NumMatriculaMecanico { get; set; }        
         
        #endregion
    }
}