using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartFleet.Domain.Infraestrutura.Messages
{
    public enum Tipo { 
        Erro,
        Alerta,
        Confirmacao,
        Sucesso,
        Informacao
    }

}
