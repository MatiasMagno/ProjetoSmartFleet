using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Net.Mail;
using System.Configuration;
using System.Net;
using Microsoft.Extensions.Configuration;

namespace SmartFleet.Domain.Infraestrutura.Utility
{
    public class Dominio
    {
        public static Dictionary<string, string> BuscarSimNao()
        {
            Dictionary<string, string> items = new Dictionary<string, string>();
            items.Add("S", "Sim");
            items.Add("N", "Não");
            return items;
        }
        public static Dictionary<string, string> BuscarSituacao()
        {
            Dictionary<string, string> items = new Dictionary<string, string>();
            items.Add("A", "Ativo");
            items.Add("I", "Inativo");
            return items;
        }

        public static Dictionary<string, string> BuscarTipoManutencao()
        {
            Dictionary<string, string> items = new Dictionary<string, string>();
            items.Add("C", "Corretiva");
            items.Add("P", "Preventiva");
            return items;
        }
        
    }

}
