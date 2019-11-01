using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartFleet.Domain.Infraestrutura
{
    public class Enums
    {
        public enum Situacao
        {
            Ativo = 'A',
            Inativo = 'I'
        }

        public enum TipoColaborador
        {
            Administrativo = 1,
            Atendente = 2,
            Financeiro = 3,
            Mecanico = 4,
            Motorista = 5
        }

        public enum TipoSinistro 
        {
            Parcial = 'P',
            Total = 'T'
        }

        public enum Selecionado 
        {
            Sim = 'S',
            Nao = 'N'
        }

        public enum TipoManutencao 
        {
            Corretiva = 'C',
            Preventiva = 'P'
        }

    }
}
