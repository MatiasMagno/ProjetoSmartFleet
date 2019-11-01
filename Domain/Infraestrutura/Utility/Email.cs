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
    public class Config
    {
        public string Host { get; set; }
        public string Port { get; set; }
        public bool EnableSsl { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EmailDefault { get; set; }
    }

    public class Email
    {
        IConfiguration _configuration;

        public Email(IConfiguration configuration) 
        {
            _configuration = configuration;
        }

        /// <summary>
        /// Classe Envia Email - Variáveis
        /// </summary>
        /// <param name="from">Remetente</param>
        /// <param name="recepient">Destinatário</param>
        /// <param name="cc">Com Cópia</param>
        /// <param name="bcc">Com Cópia Oculta</param>
        /// <param name="subject">Assunto</param>
        /// <param name="body">Corpo da Mensagem</param>
        public void Enviar(string from, string recepient, string cc, string bcc, string subject, string body)
        {
            var config = GetAppSettings();

            if (String.IsNullOrEmpty(from))
                from = config.EmailDefault;

            MailMessage message = new MailMessage();
            message.To.Add(recepient);

            if (!String.IsNullOrEmpty(cc))
                message.CC.Add(new MailAddress(cc));

            if (!String.IsNullOrEmpty(bcc))
                message.Bcc.Add(new MailAddress(bcc));

            message.Body = body;
            message.Subject = subject;
            message.IsBodyHtml = true;
            message.From = new MailAddress(from);

            SmtpClient smtp = new SmtpClient();
            smtp.Host = config.Host;
            smtp.EnableSsl = config.EnableSsl;
            smtp.UseDefaultCredentials = false;
            smtp.Port = Convert.ToInt32(config.Port);
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential(config.UserName, config.Password);
            smtp.SendMailAsync(message);
        }

        private Config GetAppSettings() 
        {
            return new Config()
            {
                Host = _configuration.GetSection("Email:Host").Value,
                Port = _configuration.GetSection("Email:Port").Value,
                UserName = _configuration.GetSection("Email:UserName").Value,
                Password = _configuration.GetSection("Email:Password").Value,
                EmailDefault = _configuration.GetSection("Email:EmailDefault").Value,
                EnableSsl = Convert.ToBoolean(_configuration.GetSection("Email:EnableSsl").Value)
            };
        }
    }
}
