using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartFleet.Domain.Infraestrutura.Messages
{
    public static class Descricoes
    {
        public const string MSG001 = "Registro salvo com sucesso.";
        public const string MSG002 = "Deseja realmente excluir este registro?";
        public const string MSG003 = "Registro excluído com sucesso.";
        public const string MSG004 = "O registro não pode ser excluído.";
        public const string MSG005 = "Este registro não pôde ser excluído por ter associações com outro(s) registro(s)!";
        public const string MSG006 = "Campo é de preenchimento obrigatório.";
        public const string MSG007 = "Já existe um registro cadastrado com este(a) {0}.";
        public const string MSG008 = "Operação realizada com sucesso.";
        public const string MSG009 = "Nenhum registro encontrado.";
        public const string MSG012 = "Favor Preencher todos os campos obrigatórios";
        public const string MSG016 = "Não existem registros selecionados. Por favor, selecione pelo menos um registro.";
        public const string MSG017 = "Informações alteradas com sucesso.";
        public const string MSG020 = "Ocorreu um erro durante a comunicação com o banco de dados. Detalhes: {0}";
        public const string MSG021 = "Endereço de email inválido.";
        public const string MSG022 = "Campo {0} é inválido.";
        public const string MSG023 = "A Data de Ocorrência está fora do período de vigência desse seguro.";
        public const string MSG024 = "Campo {0} não pode ser maior que a data atual.";
        public const string MSG025 = "Existe erro de validação na página.";
        public const string MSG026 = "Campo {0} é de preenchimento obrigatório.";
        public const string MSG027 = "Este veículo não pode ser ativado, pois existe um sinistro total vinculado ao mesmo.";
        public const string MSG028 = "Já existe um veículo cadastrado com esse código de Renavan.";
        public const string MSG029 = "Já existe um veículo cadastrado com esse número de Placa.";
        public const string MSG030 = "Já existe um veículo cadastrado com esse número de CHASSI.";
        public const string MSG031 = "É necessário informar pelo menos um Tipo de Combustível.";
        public const string MSG032 = "Campo {0} não pode ser menor ou igual a {1}.";
        public const string MSG033 = "O campo {0} não pode ser maior ou igual ao campo {1}.";
        public const string MSG034 = "O campo Data do Agendamento da viagem não pode ser superior a 4 horas.";

        public const string MSG099 = "Ocorreu um erro inesperado, favor verificar.";
    }
}
