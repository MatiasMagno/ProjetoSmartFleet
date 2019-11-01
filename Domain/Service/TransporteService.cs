using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;
using System.Text;

namespace SmartFleet.Service
{
    public class TransporteService : BaseService
    {
        private readonly IConfiguration _configuration;
        private readonly VeiculoService _veiculoService;
        private readonly ColaboradorService _colaboradorService;

        public TransporteService(IConfiguration configuration)
        {
            _configuration = configuration;
            _veiculoService = new VeiculoService();        
            _colaboradorService = new ColaboradorService();
        }

        public Transporte GetById(int id) {
             var item = DbConnection.Transporte
             .Where(x => x.IdeTransporte == id)
             .Include(x => x.Solicitante)
             .Include(x => x.Motorista)
             .Include(x => x.Veiculo)
             .Include(x => x.Passageiro).ThenInclude(p => p.Colaborador)
             .FirstOrDefault();

            var ret = new Transporte()
            {
                Veiculo = new Veiculo().UpdateValues(item.Veiculo),
                Motorista = new Colaborador().UpdateValues(item.Motorista),
                Solicitante = new Colaborador().UpdateValues(item.Solicitante),
                Passageiro = item.Passageiro.Select(x => new Passageiro()
                {
                    Colaborador = new Colaborador().UpdateValues(x.Colaborador)
                }.UpdateValues(x)).ToList()
            } .UpdateValues(item);

             return ret;
        }
         
        private IEnumerable<Entities.Transporte> GetAll(Transporte item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temIdeMotorista = item.IdeMotorista > 0;
            var temIdeSolicitante = item.IdeSolicitante > 0;
            var temDthSolicitacaoFim = item.DthSolicitacaoFim.HasValue;
            var temDthSolicitacaoInicio = item.DthSolicitacaoInicio.HasValue;

            var items = DbConnection.Transporte
             .Include(x => x.Solicitante)
             .Include(x => x.Motorista)
             .Include(x => x.Veiculo)
             .Include(x => x.Passageiro)            
            .Where(x => (temIdeVeiculo? x.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temIdeMotorista? x.IdeMotorista == item.IdeMotorista: true) &&
                        (temIdeSolicitante? x.IdeSolicitante == item.IdeSolicitante: true) &&
                        (temDthSolicitacaoInicio? x.DthSolicitacao >= item.DthSolicitacaoInicio: true) &&
                        (temDthSolicitacaoFim? x.DthSolicitacao <= item.DthSolicitacaoFim: true)
                  );

            return items;
        }

        public IEnumerable<Transporte> GetAll(Expression<System.Func<Entities.Transporte, bool>> where)
        {
            var items = DbConnection.Transporte
            .Where(where)
            .Include(x => x.Solicitante)
            .Include(x => x.Motorista)
            .Include(x => x.Veiculo)
            .Include(x => x.Passageiro)
            .ToList()
            .Select(x => new Transporte() 
            {
                Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                Motorista = new Colaborador().UpdateValues(x.Motorista),
                Solicitante = new Colaborador().UpdateValues(x.Solicitante),
                Passageiro = x.Passageiro.Select(p => new Passageiro().UpdateValues(p)).ToList()
            }.UpdateValues(x));          

            return items;
        } 

        public IEnumerable<Transporte> GetAllByPage(Transporte item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);
            var ret = list.Select(x => new Transporte() 
            {
                Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                Motorista = new Colaborador().UpdateValues(x.Motorista),
                Solicitante = new Colaborador().UpdateValues(x.Solicitante),
                Passageiro = x.Passageiro.Select(p => new Passageiro().UpdateValues(p)).ToList()
            }.UpdateValues(x));
            return ret;
        }

        public void Verify(Transporte item) 
        {    
            // O agendamento não pode ser superior a 4 horas
            var dataReferencia = DateTime.Now.AddHours(4);

            if (item.DthSolicitacao > dataReferencia) {
                throw new CoreException(Descricoes.MSG034, CoreExceptionType.Alert);
            }
         
        }
        
        public void Save(Transporte item) 
        {
            Verify(item);

            if (item.IdeTransporte > 0) 
            {
                var itemUpd = DbConnection.Transporte
                .Where(x => x.IdeTransporte == item.IdeTransporte)
                .Include(x => x.Passageiro)
                .FirstOrDefault();

                itemUpd.UpdateValues(item);

                foreach(var obj in itemUpd.Passageiro) 
                {
                    DbConnection.Attach(obj);
                    DbConnection.Remove(obj);
                }

                if (item.Passageiro != null) {
                    itemUpd.Passageiro = item.Passageiro.Select(x => new Entities.Passageiro().UpdateValues(x)).ToList();
                }

                DbConnection.Transporte.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else {
                var itemNew = new Entities.Transporte();
                itemNew.UpdateValues(item);
                itemNew.DthInclusao = DateTime.Now;

                if (item.Passageiro != null)
                    itemNew.Passageiro = item.Passageiro.Select(x => new Entities.Passageiro().UpdateValues(x)).ToList();

                DbConnection.Transporte.Add(itemNew);
            }

            DbConnection.SaveChanges();

            // O e-mail será enviado ao Motorista somente se a viagem não tiver sido iniciada
            if (!item.DthPartida.HasValue) {
                EnviarEmail(item);
            }
        }

        private void VerifyViagem(Transporte item) 
        {
            if ((item.DthChegada.HasValue) && (!item.NumKMFim.HasValue)) 
            {
                var msg = string.Format(Descricoes.MSG026, "Quilometragem Final");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }
            if ((!item.DthChegada.HasValue) && (item.NumKMFim.HasValue)) 
            {
                var msg = string.Format(Descricoes.MSG026, "Fim da Viagem");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            if ((item.DthChegada.HasValue) && (item.DthChegada <= item.DthPartida))
            {
                var msg = string.Format(Descricoes.MSG032, "Fim da Viagem","Início da Viagem");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            if ((item.NumKMFim.HasValue) && (item.NumKMFim <= item.NumKMInicio))
            {
                var msg = string.Format(Descricoes.MSG032, "Quilometragem Final","Quilometragem Inicial");
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

        }

        public void SaveViagem(Transporte item) 
        {
            VerifyViagem(item);

            var itemUpd = DbConnection.Transporte
            .Where(x => x.IdeTransporte == item.IdeTransporte)
            .FirstOrDefault();

            itemUpd.DthPartida = item.DthPartida;
            itemUpd.DthChegada = item.DthChegada;
            itemUpd.NumKMInicio = item.NumKMInicio;
            itemUpd.NumKMFim = item.NumKMFim;

            DbConnection.Transporte.Attach(itemUpd);
            DbConnection.Entry(itemUpd).State = EntityState.Modified;
            DbConnection.SaveChanges();
        }

        public void Delete(int id) 
        {
            var item = DbConnection.Transporte
            .Where(x => x.IdeTransporte == id)
            .Include(x => x.Passageiro)
            .FirstOrDefault();

            if (item != null) 
            {
                foreach(var obj in item.Passageiro) 
                {
                    DbConnection.Attach(obj);
                    DbConnection.Remove(obj);
                }
                DbConnection.Attach(item);
                DbConnection.Remove(item);
                DbConnection.SaveChanges();               
            }
        }

        public Mensagem DeleteVerify(int id) 
        {
            var msg = new Mensagem(Descricoes.MSG002, Tipo.Confirmacao);

            return msg;            
        }

        public IEnumerable<Colaborador> BuscarPassageiro(string text, int take = 10) 
        {
            var situacaoAtivo = Convert.ToString((Char)Enums.Situacao.Ativo);

            var items = _colaboradorService
            .GetAll(x =>  (x.IdcSituacao == situacaoAtivo) &&
                          (x.NomColaborador.ToLower().Contains(text.ToLower()))
                    )
            .OrderBy(x => x.NomColaborador)
            .Take(take)
            .Select(x => new Colaborador().UpdateValues(x))
            .ToList();

            return items;
        }

        private void EnviarEmail(Transporte item) 
        {
            item.Motorista = _colaboradorService
            .GetAll(x => x.IdeColaborador == item.IdeMotorista)
            .FirstOrDefault();

            item.Veiculo = _veiculoService
            .GetAll(x => x.IdeVeiculo == item.IdeVeiculo)
            .FirstOrDefault();

            var email = new Email(_configuration);

            var subject = "SmartFleet - Sistema de Gestão de Frotas";
            var motorista = item.Motorista.NomColaborador.Split(" ").FirstOrDefault();

            StringBuilder body = new StringBuilder();

            body.Append(string.Format("Prezado <b>{0}</b>,", motorista));
            body.Append("<br /><br />");

            body.Append(string.Format("Foi marcado uma viagem no dia <b>{0}</b> as <b>{1}</b>.", item.DthSolicitacao.ToString("dd/MM/yyyy"), item.DthSolicitacao.ToString("HH:mm")));
            body.Append("<br />");

            body.Append(string.Format("Você utilizará o veículo <b>{0}</b> com placa <b>{1}</b>.", item.Veiculo.DscMarcaModelo, item.Veiculo.NumPlaca));
            body.Append("<br />");

            body.Append(string.Format("A viagem está com saída do endereço <b>{0}</b> com destino <b>{1}</b>.", item.DscLocalOrigem, item.DscLocalDestino));
            body.Append("<br /><br />");

            body.Append("Atenciosamente,");
            body.Append("<br />");

            body.Append("Equipe do SmartFleet");

            email.Enviar(null, item.Motorista.DscEmail, null, null, subject, body.ToString());            
        }

    }
}