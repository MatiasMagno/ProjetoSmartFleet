
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;
using SmartFleet.Domain.ViewModel;

namespace SmartFleet.Controllers
{
    /// <summary>
    /// Objeto destinado a guardar na Session os parâmetros da última pesquisar realizada
    /// </summary>
    public class ParamPesq
    {
        public object entity { get; set; }
        public string sColumns { get; set; }
        public int iDisplayStart { get; set; }
        public string iSortCol_0 { get; set; }
        public string sSortDir_0 { get; set; }

        /// <summary>
        /// Retorna o nome da propriedade que foi acionado na ordenação
        /// </summary>
        /// <returns></returns>
        public string GetOrderByText()
        {
            string[] items = sColumns.Split(';');
            return items[Convert.ToInt32(iSortCol_0)];
        }
    }

    public class GenericController : Controller
    {
        //private string sessionName;
        private string sessionNameParam;
        private string sessionNameEntity;

        public GenericController()
        {
            string _controller = this.GetType().Name.Replace("Controller", "");
            sessionNameParam = string.Format("{0}{1}{2}", _controller, new ParamPesq().GetType().Name, "Parm");
            sessionNameEntity = string.Format("{0}{1}{2}", _controller, new ParamPesq().GetType().Name, "Entity");
        }

        protected void SalvarMensagem(Mensagem msg)
        {
            var jsonStr = "'descricao':'{0}','tipo':'{1}'";
            var jsonMsg = "{" + string.Format(jsonStr,msg.Descricao, msg.Tipo.ToString()) + "}";
            TempData["MensagemRetorno"] = jsonMsg;
        }

        protected void SalvarPesquisa(object item, DatatableParm parm)
        {
            LimparPesquisa();
            var paramPesq = new ParamPesq()
            {
                sColumns = parm.sColumns,
                iSortCol_0 = parm.iSortCol_0,
                sSortDir_0 = parm.sSortDir_0,
                iDisplayStart = parm.iDisplayStart
            };
            HttpContext.Session.SetObjectAsJson(sessionNameParam, paramPesq);
            HttpContext.Session.SetObjectAsJson(sessionNameEntity, item);
        }

        protected ParamPesq BuscarPesquisa<T>()
        {
            var paramPesq = HttpContext.Session.GetObjectFromJson<ParamPesq>(sessionNameParam);
            var paramEntity = HttpContext.Session.GetObjectFromJson<T>(sessionNameEntity);

            if (paramPesq != null) {
                paramPesq.entity = paramEntity;
                return paramPesq;
            }
            return null;
        }

        public JsonResult BuscarPaginacao()
        {
            var obj = BuscarPesquisa<object>();
            if (obj != null)
            {
                obj.entity = null;
                return Json(new { ok = true, item = obj });
            }
            return Json(new { ok = false });
        }

        public void LimparPesquisa()
        {
            HttpContext.Session.Remove(sessionNameParam);
            HttpContext.Session.Remove(sessionNameEntity);
        }

        protected void LimparPaginacao()
        {
            var obj = BuscarPesquisa<object>();
            if (obj != null)
            {
                LimparPesquisa();
                var paramPesq = new ParamPesq()
                {
                    iSortCol_0 = "0",
                    sSortDir_0 = "asc",
                    iDisplayStart = -1
                };
                HttpContext.Session.SetObjectAsJson(sessionNameParam, paramPesq);
            }
        }

        protected Tipo ConvertExceptionType(CoreExceptionType type) {
            switch ((int)type)
            {
                case 1:
                    return Tipo.Alerta;
                case 2:
                    return Tipo.Confirmacao;
                case 3:
                    return Tipo.Sucesso;
                case 4:
                    return Tipo.Informacao;
                default:
                    return Tipo.Alerta;
            }       
        }

        /// <summary>
        /// Reinicializa a paginação do Datatable
        /// </summary>
        // protected void InicializarPaginacao()
        // {
        //     var item = BuscarPesquisa<object>();
        //     if (item != null)
        //         item.iDisplayStart = 0;
        // }

        #region CreateMessageJson

        public object CreateMessageJson(Tipo tipo)
        {
            return new
            {
                ok = (tipo == Tipo.Sucesso || tipo == Tipo.Confirmacao),
            };
        }

        protected object CreateMessageJson(string mensagem, Tipo tipo)
        {

            return CreateMessageJson(new Mensagem(mensagem, tipo));
        }

        protected object CreateMessageJson(string[] mensagens, Tipo tipo)
        {
            return CreateMessageJson(mensagens.Select(x => new Mensagem(x, tipo)));
        }

        protected static object CreateMessageJson(Mensagem msg)
        {
            return new
            {
                ok = (msg.Tipo == Tipo.Sucesso || msg.Tipo == Tipo.Confirmacao),
                msg = new
                {
                    //todo: mudar descricao
                    descricao = msg.Descricao,
                    tipo = msg.Tipo.ToString()
                }
            };
        }

        protected object CreateMessageJson(Mensagem msg, object item)
        {
            return new
            {
                ok = (msg.Tipo == Tipo.Sucesso || msg.Tipo == Tipo.Confirmacao),
                msg = new
                {
                    descricao = msg.Descricao,
                    tipo = msg.Tipo.ToString()
                },
                item = item
            };
        }

        protected object CreateMessageJson(IEnumerable<Mensagem> msgs)
        {
            if (msgs.Count() == 0)
                throw new ArgumentException();

            if (!(
                    msgs.All(
                        x => x.Tipo == Tipo.Sucesso
                            || x.Tipo == Tipo.Confirmacao
                    )
                    ||
                    msgs.All(
                        x => x.Tipo != Tipo.Sucesso
                            && x.Tipo != Tipo.Confirmacao
                    )
                ))
                throw new InvalidProgramException();

            var firstMsgTipo = msgs.First().Tipo;

            return new
            {
                ok = (firstMsgTipo == Tipo.Sucesso || firstMsgTipo == Tipo.Confirmacao),
                msg = msgs.Select(x => new
                {
                    //todo: mudar descricao
                    descricao = x.Descricao,
                    tipo = x.Tipo.ToString()
                })
            };
        }

        public static Tipo ConvertTypeMessage(CoreExceptionType type)
        {
            switch (type)
            {
                case CoreExceptionType.Error: return Tipo.Erro;
                case CoreExceptionType.Alert: return Tipo.Alerta;
                case CoreExceptionType.Information: return Tipo.Alerta;
                default: return Tipo.Erro;
            }
        }        

        public static object CreateMessageJson(Exception ex)
        {
            var msgErro = ex.Message;
            if (ex.InnerException != null)
            {
                if ((ex.InnerException.Message != null) && (ex.InnerException.Message != ex.Message))
                    msgErro = msgErro + " " + ex.InnerException.Message;
                if ((ex.InnerException.InnerException != null) && (ex.InnerException.InnerException.Message != null))
                    msgErro = msgErro + " " + ex.InnerException.InnerException.Message;
            }

            var msg = new Mensagem(msgErro, Tipo.Erro);

            if (ex is CoreException)
                msg = new Mensagem(((CoreException)ex).CustomMessage, ConvertTypeMessage((ex as CoreException).Type));

            return CreateMessageJson(msg);
        }

        public static object CreateMessageDatatable(Exception ex) 
        {
            var obj = new 
            {
                ok = true,
                sEcho = 0,
                oMsg = CreateMessageJson(ex),
                iTotalRecords = 0,
                iTotalDisplayRecords = 0,
                aaData = new {}
            };
            return obj;
        }

        #endregion

        protected void SalvarCoreException(Exception ex) {
            if (ex is CoreException) 
            {
                var core = (ex as CoreException);
                SalvarMensagem(new Mensagem(core.CustomMessage, ConvertExceptionType(core.Type)));
            } else {
                throw ex;
            }        
        }
 
    }
}
