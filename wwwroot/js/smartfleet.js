$(document).ready(function() 
{
    smartfleet.registerLoad();

    $(".datepicker-click").on("click", function (event) {
        $(this).parent().find("input").focus();
    });

    $(".checkbox-idc").change(function (evt) 
    {
        var chave = $(this).attr("chave");
        if (chave != undefined) 
        {
            var checked = ($(this).prop("checked") == true);
            var value = checked? "S": "N";
            $("#" + chave).val(value);
        }
    });
       
    $(".submitForm").on("click", function (e) {
        smartfleet.submitForm(this);
    });    

});

var smartfleet = {

    registerLoad: function() 
    {
        $(".btn-reset-form").on("click", function (e) {
            var form = $(this).parents("form:first");
            $(form).clearForm();
        });

        $(".textarea-not-enter").keyup(function (event) {
            var imput = $(event.currentTarget);
            var text = $(imput).val().replace(/[\r\n]+/g, " ");

            if ((event.keyCode != undefined && event.keyCode != 32) && (event.which != undefined && event.which != 32)) {
                $(imput).val(text.trimRight());
            }
        });

        $(".textarea-not-enter").keypress(function (event) {
            var imput = $(event.currentTarget);
            if ((event.keyCode != undefined && event.keyCode == 13) || (event.which != undefined && event.which == 13)) {
                return false;
            }
            return true;
        });

        $(".only-number").keypress(onlyNumber);

        $(".phone-cell-mask").mask("(00) 00000-0000");
    
        $(".phone-home-mask").mask("(00) 0000-0000")
        $(".cpf-mask").mask("000.000.000-00", {reverse: true});    

        $(".abastecimento").mask("000,000", {
            reverse: true
        });

        $(".datetime-picker").datetimepicker({
            language:  "pt-BR",
            format: "dd/mm/yyyy hh:ii",
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        });
        $(".datetime-picker").mask("99/99/9999 99:99");
        $(".datetime-picker").attr("placeholder", "__/__/____ __:__");
        $(".datetime-picker").datetimepicker("update");

    },

    formatMaskReal: function(num) 
    {
        return (
          num
            .toFixed(2) // always two decimal digits
            .replace('.', ',') // replace decimal point character with,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        );
    },

    addRequired: function(input) {
        var form = $(input).parents("form");
        var objInputLabel = $(form).find("label[for='" + $(input).attr("id") + "']");
        $(objInputLabel).addClass("required");

        $(input).rules("add", {
            required: true,
            messages: {
                required: "Campo é de preenchimento obrigatório."
            }
        });        
    },

    removeRequired: function(input) 
    {
        var form = $(input).parents("form");
        var objInputLabel = $(form).find("label[for='" + $(input).attr("id") + "']");
        $(objInputLabel).removeClass("required");
        this.clearRequired(input);
        
        $(input).rules("remove", "required");          
    },

    clearRequired: function(input) 
    {
        var form = $(input).parents("form");
        var objInputSpan = $(form).find("span[data-valmsg-for='" + $(input).attr("id") + "']");
        $(input).removeClass("input-validation-error").addClass("valid");
        $(objInputSpan).removeClass("field-validation-error").addClass("field-validation-valid")
    },

    submitForm: function(e) 
    {
        var form = $(e).closest("form");
        var url = $(form).attr("action");
        var controller = smartfleet.getController(url);
        var urlPesquisar = "/" + controller + "/Pesquisar";

        var valid = $(form).valid();
        if (valid) 
        {
            LoadScreen();
            var item = $(form).serializeObject();
            $.ajax({
                url: url,
                data: item,
                type: "POST",
                success: function (data) {
                    if (data.ok) 
                    {
                        document.location.href = urlPesquisar;
                        app.callMsg(data.msg);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    getController: function(url) 
    {
        var lst = url.split("/");
        var ret = $(lst).filter(function( index, value ) {
            return value != "";
        }); 
        return ret[0];
    }

};

// Função para limpar os compontes de formulários
$.fn.clearForm = function() 
{
    return this.each(function() {
        var type = this.type;
        var tag = this.tagName.toLowerCase();
        if (tag == "form")
            return $(":input", this).clearForm();
        if (type == "text" || type == "password" || tag == "textarea")
            $(this).val("");
        else if (type == "checkbox" || type == "radio")
            this.checked = false;
        else if (tag == "select")
            this.selectedIndex = 0;
    });
};

var sinistro = {

    onchangeVeiculo: function(e) 
    {
        LoadScreen();
        var form = $(e).closest("form");    
        var id = $(e).val();
        var ideSinistro = $(form).find("#IdeSinistro").val();
        if (id == ""){
            sinistro.limpar();
        } else {
            $.ajax({
                type: "POST",
                url: "/Sinistro/BuscarSeguro",
                data: { IdeSeguro: id, IdeSinistro: ideSinistro },
                success: function (data) {
                    if (data.ok) 
                    {
                        $("#IdeSeguro").val(data.seguro.ideSeguro);
                        $("#NumPlaca").val(data.seguro.numPlaca);
                        $("#CodRenavam").val(data.seguro.codRenavam);
                        $("#NumApolice").val(data.seguro.numApolice);
                        $("#VlrFranquia").val(smartfleet.formatMaskReal(data.seguro.vlrFranquia));
                        $("#DatVigenciaInicio").val(data.seguro.datVigenciaInicio);
                        $("#DatVigenciaFim").val(data.seguro.datVigenciaFim);
                        $("#NomSeguradora").val(data.seguro.nomSeguradora);
                        $("#NumCNPJ").val(data.seguro.numCNPJ);
                        $("#NumTelefone").val(data.seguro.numTelefone);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    limpar: function() 
    {
        $("#IdeSeguro").val("");
        $("#NumPlaca").val("");
        $("#CodRenavam").val("");
        $("#NumApolice").val("");
        $("#VlrFranquia").val("");
        $("#DatVigenciaInicio").val("");
        $("#DatVigenciaFim").val("");
        $("#NomSeguradora").val("");
        $("#NumCNPJ").val("");
        $("#NumTelefone").val("");
        CloseLoad();
    }

};

var transporte = {

    onchangeSolicitante: function(e) 
    {
        LoadScreen();
        var id = $(e).val();
        if (id == ""){
            this.limparSolicitante();
        } else {
            $.ajax({
                type: "POST",
                data: { ideSolicitante: id },
                url: "/Transporte/BuscarSolicitante",
                success: function (data) {
                    if (data.ok) 
                    {
                        $("#NumMatriculaSolicitante").val(data.item.numMatricula);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    limparSolicitante: function() 
    {
        CloseLoad();
        $("#NumMatriculaSolicitante").val("");
    },

    onchangeVeiculo: function(e) 
    {
        LoadScreen();
        var id = $(e).val();
        if (id == ""){
            this.limparVeiculo();
        } else {
            $.ajax({
                type: "POST",
                data: { ideVeiculo: id },
                url: "/Transporte/BuscarVeiculo",
                success: function (data) {
                    if (data.ok) 
                    {
                        $("#NumPlaca").val(data.item.numPlaca);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    limparVeiculo: function() 
    {
        CloseLoad();
        $("#NumPlaca").val("");
    },

    onchangeMotorista: function(e) 
    {
        LoadScreen();
        var id = $(e).val();
        if (id == ""){
            this.limparMotorista();
        } else {
            $.ajax({
                type: "POST",
                data: { ideMotorista: id },
                url: "/Transporte/BuscarMotorista",
                success: function (data) {
                    if (data.ok) 
                    {
                        $("#NumMatriculaMotorista").val(data.item.numMatricula);
                        $("#NumCelularMotorista").val(data.item.numCelular);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    limparMotorista: function() 
    {
        CloseLoad();
        $("#NumMatriculaMotorista").val("");
        $("#NumCelularMotorista").val("");
    },

    selecionarPassageiro: function(data) 
    {
        passageiro(data);    
    },

    adicionarPassageiro: function() 
    {
        if (passageiro() != undefined) 
        {
            $("#NomPassageiro").val("");
            passageiros.push(passageiro());
            passageiro = ko.observable(null);
        }
    },

    excluirPassageiro: function(data) 
    {
        passageiros.remove(data);
    },

    salvar: function (e) 
    {
        var form = $(e).closest("form");
        var url = $(form).attr("action");
        var controller = smartfleet.getController(url);
        var urlPesquisar = "/" + controller + "/Pesquisar";

        var valid = $(form).valid();
        if (valid) 
        {
            LoadScreen();
            var item = $(form).serializeObject();
            item.passageiro = [];

            $.each(passageiros(), function(index, value) {
                var obj = {
                    IdeTransporte: value.ideTransporte != undefined? value.ideTransporte: 0,
                    IdeColaborador: value.ideColaborador
                };
                item.passageiro.push(obj);
            });

            $.ajax({
                url: url,
                data: item,
                type: "POST",
                success: function (data) {
                    if (data.ok) 
                    {
                        document.location.href = urlPesquisar;
                        app.callMsg(data.msg);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    salvarViagem: function (e) 
    {
        var form = $(e).closest("form");
        var url = $(form).attr("url");
        var controller = smartfleet.getController(url);
        var urlPesquisar = "/" + controller + "/Pesquisar";

        smartfleet.addRequired($("#DthPartida"));
        smartfleet.addRequired($("#NumKMInicio"));

        var valid = $(form).valid();
        if (valid) 
        {
            LoadScreen();
            var item = $(form).serializeObject();           

            $.ajax({
                url: url,
                data: item,
                type: "POST",
                success: function (data) {
                    if (data.ok) 
                    {
                        document.location.href = urlPesquisar;
                        app.callMsg(data.msg);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    }
}

var colaborador = {
    
    onChangeColaborador: function(e) 
    {
        LoadScreen();
        var numCNH = $("#NumCNH");
        var datValidadeCNH = $("#DatValidadeCNH");
        var idcCategoriaCNH = $("#IdcCategoriaCNH");
        var ideUnidadeFederacaoCNH = $("#IdeUnidadeFederacaoCNH");
 
        var id = $(e).val();
        if (id == 5) {
            smartfleet.addRequired(idcCategoriaCNH);
            smartfleet.addRequired(numCNH);
            smartfleet.addRequired(datValidadeCNH);
            smartfleet.addRequired(ideUnidadeFederacaoCNH);
        } else {
            smartfleet.removeRequired(idcCategoriaCNH);
            smartfleet.removeRequired(numCNH)
            smartfleet.removeRequired(datValidadeCNH)
            smartfleet.removeRequired(ideUnidadeFederacaoCNH)
        }
        CloseLoad();
    }
}

var abastecimento = {

    onTipoCombustivel: function(e) 
    {
        var label = $("label[for='QtdAbastecimento']");
        $(label).text("Qtde de Litros");
        
        var id = $(e).val();
        if (id == 5) {
            $(label).text("Qtde Quilowatt-Hora (kWh)");
        }
    }
}

var manutencao = {

    onchangeVeiculo: function(e) 
    {
        LoadScreen();
        var id = $(e).val();
        if (id == ""){
            this.limparVeiculo();
        } else {
            $.ajax({
                type: "POST",
                data: { ideVeiculo: id },
                url: "/Manutencao/BuscarVeiculo",
                success: function (data) {
                    if (data.ok) 
                    {
                        $("#NumPlaca").val(data.item.numPlaca);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    limparVeiculo: function() 
    {
        CloseLoad();
        $("#NumPlaca").val("");
    },

    onchangeMecanico: function(e) 
    {
        LoadScreen();
        var id = $(e).val();
        if (id == ""){
            this.limparMecanico();
        } else {
            $.ajax({
                type: "POST",
                data: { ideMecanico: id },
                url: "/Manutencao/BuscarMecanico",
                success: function (data) {
                    if (data.ok) 
                    {
                        $("#NumMatriculaMecanico").val(data.item.numMatricula);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    },

    limparMecanico: function() 
    {
        CloseLoad();
        $("#NumMatriculaMecanico").val("");
    },

    selecionarProduto: function(data) 
    {
        produto(data);    
    },

    adicionarProduto: function() 
    {
        if (produto() != undefined) 
        {
            $("#NomProduto").val("");

            var ret = ko.utils.arrayFirst(produtos(), function(item) {
                return produto().ideProduto == item.ideProduto;
            });
            
            if (ret == undefined) {
                produtos.push(produto());
            }

            produto = ko.observable(null);
        }
    },

    excluirProduto: function(data) 
    {
        produtos.remove(data);
    },

    salvar: function (e) 
    {
        var form = $(e).closest("form");
        var url = $(form).attr("action");
        var controller = smartfleet.getController(url);
        var urlPesquisar = "/" + controller + "/Pesquisar";

        var valid = $(form).valid();
        if (valid) 
        {
            LoadScreen();
            var item = $(form).serializeObject();
            item.manutencaoProduto = [];

            $.each(produtos(), function(index, value) {
                var obj = {
                    IdeManutencao: value.ideManutencao != undefined? value.ideManutencao: 0,
                    IdeProduto: value.ideProduto
                };
                item.manutencaoProduto.push(obj);
            });

            $.ajax({
                url: url,
                data: item,
                type: "POST",
                success: function (data) {
                    if (data.ok) 
                    {
                        document.location.href = urlPesquisar;
                        app.callMsg(data.msg);
                        CloseLoad();
                    } else {
                        CloseLoad();
                        app.callMsg(data.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    CloseLoad();
                    var msg = "Status: " + textStatus + "<br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                }
            });
        }
    }

}

function viewModel() 
{
    passageiro = ko.observable();
    passageiros = ko.observableArray([]);
    produto = ko.observable();
    produtos = ko.observableArray([]);
}

ko.applyBindings(viewModel());