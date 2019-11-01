using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartFleet.Domain.Infraestrutura.Messages
{
    public class Mensagem
    {
        public string Descricao { get; set; }
        public Tipo Tipo { get; set; }

        public Mensagem(string descricao, Tipo tipo)
        {
            Descricao = descricao;
            Tipo = tipo;
        }

        public Mensagem()
        {

        }

    }
}
