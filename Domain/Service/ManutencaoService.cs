using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Linq.Expressions;
using SmartFleet.Domain.ViewModel;
using SmartFleet.Domain.Infraestrutura.Utility;
using SmartFleet.Domain.Infraestrutura.Messages;

namespace SmartFleet.Service
{
    public class ManutencaoService : BaseService
    {
        private readonly IConfiguration _configuration;
        private readonly ProdutoService _produtoService;
        private readonly VeiculoService _veiculoService;
        public ManutencaoService(IConfiguration configuration)
        {        
            _configuration = configuration;
            _produtoService = new ProdutoService();
            _veiculoService = new VeiculoService();
        }

        public Manutencao GetById(int id) 
        {
             var item = DbConnection.Manutencao
             .Where(x => x.IdeManutencao == id)
             .Include(x => x.Colaborador)
             .Include(x => x.Veiculo)
             .Include(x => x.ManutencaoProduto).ThenInclude(p => p.Produto)
             .FirstOrDefault();
            
            return new Manutencao() 
            {
                Colaborador = new Colaborador().UpdateValues(item.Colaborador),
                Veiculo = new Veiculo().UpdateValues(item.Veiculo),
                ManutencaoProduto = item.ManutencaoProduto
                .Select(mp => new ManutencaoProduto() 
                {
                    Produto = new Produto().UpdateValues(mp.Produto)   
                }.UpdateValues(mp)).ToList()
            }.UpdateValues(item);
        }
         
        private IEnumerable<Entities.Manutencao> GetAll(Manutencao item) 
        {
            //Filtros
            var temIdeVeiculo = item.IdeVeiculo > 0;
            var temIdeColaborador = item.IdeColaborador > 0;
            var temIdcTipoManutencao = !string.IsNullOrEmpty(item.IdcTipoManutencao);

            var items = DbConnection.Manutencao
            .Where(x => (temIdeVeiculo? x.IdeVeiculo == item.IdeVeiculo: true) &&
                        (temIdeColaborador? x.IdeColaborador == item.IdeColaborador: true) &&
                        (temIdcTipoManutencao? x.IdcTipoManutencao == item.IdcTipoManutencao: true))
             .Include(x => x.Colaborador)
             .Include(x => x.Veiculo)
             .Include(x => x.ManutencaoProduto).ThenInclude(p => p.Produto);

            return items;
        }

        public IEnumerable<Manutencao> GetAll(Expression<System.Func<Entities.Manutencao, bool>> where)
        {
            var items = DbConnection.Manutencao
            .Where(where)
            .Include(x => x.Colaborador)
            .Include(x => x.Veiculo)
            .Include(x => x.ManutencaoProduto).ThenInclude(p => p.Produto)
            .Select(x => new Manutencao()
            {
                Colaborador = new Colaborador().UpdateValues(x.Colaborador),
                Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                ManutencaoProduto = x.ManutencaoProduto.Select(mp => new ManutencaoProduto() 
                {
                    Produto = new Produto().UpdateValues(mp.Produto)   
                }.UpdateValues(mp)).ToList()
            }.UpdateValues(x))
            .ToList();



            return items;
        } 

        public IEnumerable<Manutencao> GetAllByPage(Manutencao item, DatatableParm parm)
        {
            var items = GetAll(item);
            parm.totalRecords = items.Count();
            var list = items.OrderPaging(parm.GetOrderByText(), parm.sSortDir_0, parm.iDisplayStart, parm.iDisplayLength);

            var ret = list.ToList()
                .Select(x => new Manutencao()
                {
                    Colaborador = new Colaborador().UpdateValues(x.Colaborador),
                    Veiculo = new Veiculo().UpdateValues(x.Veiculo),
                    ManutencaoProduto = x.ManutencaoProduto
                    .Select(mp => new ManutencaoProduto() 
                    {
                        Produto = new Produto().UpdateValues(mp.Produto)   
                    }.UpdateValues(mp)).ToList()
                }.UpdateValues(x))
                .ToList();                
            
            return ret;
        }

        public void Verify(Manutencao item) 
        {       
            var msg = string.Format(Descricoes.MSG024, "Saída da Manutenção");
            if (item.DthSaida > DateTime.Now) {
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

            msg = string.Format(Descricoes.MSG035, "Entrada na Manutenção", "Saída da Manutenção");
            if (item.DthSaida < item.DthEntrada) {
                throw new CoreException(msg, CoreExceptionType.Alert);
            }

        }
        public void Save(Manutencao item) 
        {
            Verify(item);

            var emailEnviado = false;

            if (item.IdeManutencao > 0) 
            {
                var itemUpd = DbConnection.Manutencao
                .Where(x => x.IdeManutencao == item.IdeManutencao)
                .Include(x => x.ManutencaoProduto)
                .FirstOrDefault();

                emailEnviado = itemUpd.DthSaida.HasValue;
                itemUpd.UpdateValues(item);

                foreach(var obj in itemUpd.ManutencaoProduto) 
                {
                    DbConnection.Attach(obj);
                    DbConnection.Remove(obj);
                }

                if (item.ManutencaoProduto != null) {
                    itemUpd.ManutencaoProduto = item.ManutencaoProduto.Select(x => new Entities.ManutencaoProduto().UpdateValues(x)).ToList();
                }

                DbConnection.Manutencao.Attach(itemUpd);
                DbConnection.Entry(itemUpd).State = EntityState.Modified;
            } else 
            {
                var itemNew = new Entities.Manutencao();
                itemNew.UpdateValues(item);
                itemNew.DthEntrada = Convert.ToDateTime(DateTime.Now.ToString("dd/MM/yyyy HH:mm"));
                DbConnection.Manutencao.Add(itemNew);
            }
            DbConnection.SaveChanges();

            // O e-mail será enviado ao Setor de Transporte, quando a manutenção do veículo for concluída.
            if ((!emailEnviado) && (item.DthSaida.HasValue)) {
                EnviarEmail(item);
            }

        }
        public void Delete(int id) 
        {
            var item = DbConnection.Manutencao
            .Where(x => x.IdeManutencao == id)
            .FirstOrDefault();

            if (item != null) 
            {
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

        public IEnumerable<Produto> BuscarProduto(string text, int take = 10) 
        {
            var items = _produtoService
            .GetAll(x => x.NomProduto.ToLower().Contains(text.ToLower()))
            .OrderBy(x => x.NomProduto)
            .Take(take)
            .Select(x => new Produto().UpdateValues(x))
            .ToList();

            return items;
        }

        private void EnviarEmail(Manutencao item) 
        {

            var emailDestinatario = _configuration.GetSection("SetorTransporte:Email").Value;

            var veiculo = _veiculoService
            .GetAll(x => x.IdeVeiculo == item.IdeVeiculo)
            .FirstOrDefault();

            var email = new Email(_configuration);

            var subject = "SmartFleet - Sistema de Gestão de Frotas";

            StringBuilder body = new StringBuilder();

            body.Append("Ao setor de transporte,");
            body.Append("<br /><br />");

            body.Append(string.Format("Gostaria de informar que foi concluída a munutenção no veículo <b>{0}</b> com placa <b>{1}</b>.", veiculo.DscMarcaModelo, veiculo.NumPlaca));
            body.Append("<br />");

            body.Append("O mesmo se encontra a disposição para ser retirado.");
            body.Append("<br /><br />");

            body.Append("Atenciosamente,");
            body.Append("<br />");

            body.Append("Setor de Manutenção");

            email.Enviar(null, emailDestinatario, null, null, subject, body.ToString());            
        }        

    }
}