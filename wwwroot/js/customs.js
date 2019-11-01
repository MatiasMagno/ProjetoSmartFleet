
if (jQuery.fn.dataTable) {
    $.extend(true, jQuery.fn.dataTable.defaults, {
        dom:
            "<'row m-n p-n'<'col-xs-6 m-n p-n'l><'col-xs-6 m-n p-n'f>r>" +
            "<'scroll-x't>" +
            "<'row m-n p-n'<'col-xs-6 m-n p-n'i><'col-xs-6 m-n p-n'p>>",
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
}

if ($.fn.datepicker) {
    $.extend(true, $.fn.datepicker.defaults, {
        format: "dd/mm/yyyy",
        language: "pt-BR",
        todayHighlight: true
    });
}

// Exibe/esconde o menu lateral.
function FullScreenToggle() {
    if ($('#nav.bg-white.aside-md.hidden-print').is(":visible")) {
        $('#fs-toggle').addClass('fa-compress').removeClass('fa-expand');
        $('#nav.bg-white.aside-md.hidden-print').hide();
    }
    else {
        $('#fs-toggle').addClass('fa-expand').removeClass('fa-compress');
        $('#nav.bg-white.aside-md.hidden-print').show();
    }
}

function convertData(inputFormat) {
    if (inputFormat != null) {
        var today = new Date(inputFormat.match(/\d+/)[0] * 1);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0! 
        var yyyy = today.getFullYear();

        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }

        today = dd + '/' + mm + '/' + yyyy;

        return today;
    }
    else {
        return "-";
    }
}

function convertToJSONDate(dt) {
    var newDate = new Date(dt).getTime();
    return '/Date(' + newDate + ')/';
}

function inverterDataBR(dt) {
    var temp = dt.split("/");
    return new Date(temp[1] + "/" + temp[0] + "/" + temp[2]);
}

function RegisterLoad() {

    $(".btn").on("click", function (e) {
        var elem = $(this).attr('data-loading');
        if ((elem == null))
            LoadScreen($(e).attr('href'));
    });

    $(".menu").on("click", function (e) {
        LoadScreen($(e).attr('href'));
    });

    $(".form").submit(function () {
        var erros = $('.field-validation-error');
        if (erros.length > 0) {
            CloseLoad();
            return false;
        } else {
            return true;
        }
    });
}
function printPage(url, obj, beforeFnc, afterFnc) {
    if ($('#FramPrint').length > 0) {
        $('#FramPrint').remove();
    }
    $('body').append('<iframe id="FramPrint" class="hide"></iframe>');
    window.frames["FramPrint"].src = "about:blank"
    var newWin = isIE() ? window.frames["FramPrint"] : window.frames["FramPrint"].contentWindow;
    $.post(url, (typeof (obj) != "undefined" ? obj : null), function (htmlReturn) {
        if (typeof (beforeFnc) == "function") { beforeFnc(obj, htmlReturn); }
        //else { app.callMsg(beforeFnc + " não é uma função") }
        newWin.document.write(htmlReturn);
        newWin.focus();
        setTimeout(function () {
            if (isIE()) {
                newWin.document.execCommand('print', false, null);
            } else {
                newWin.print();
            }
            CloseLoad();
            if (typeof (afterFnc) == "function") { afterFnc(obj, htmlReturn); }
            //else { app.callMsg(afterFnc + " não é uma função") }
        }, 2000);
    });

}
function printHTML(html) {
    if ($('#FramPrint').length > 0) {
        $('#FramPrint').remove();
    }
    $('body').append('<iframe id="FramPrint" class="hide"></iframe>');
    window.frames["FramPrint"].src = "about:blank"
    var newWin = isIE() ? window.frames["FramPrint"] : window.frames["FramPrint"].contentWindow;

    newWin.document.write(html);
    newWin.focus();
    setTimeout(function () {
        if (isIE()) {
            newWin.document.execCommand('print', false, null);
        } else {
            newWin.print();
        }

        CloseLoad();

    }, 2000);
}
function LocalLoad(objId, text) {
    var html = '<div class="text-center">'
    html += '       <div class="block m-b">'
    html += '           <i class="fa fa-spinner fa-2x fa-spin"></i>'
    html += '       </div>'
    html += '       <h3>' + text + '</h3>'
    html += '   </div>';
    $('#' + objId).html(html);
}

$(document).ready(function () {
    BuildCustomUploadControll();
    RegisterLoad();
    MaxLengthTextArea();
    $.ajaxSetup({ cache: false });

    //Impede a modal ser fechada quando clicar fora do modal-content
    $(".modal").attr("data-keyboard", false);
    $(".modal").attr("data-backdrop", "static");

    $(".btnPesquisar").click(function (evt) {
        var dt = $(".datatable[data-crud]").attr("id");
        if (dt != null) {
            // Verifica se o Datatable já foi carregado
            if ($("#" + dt + " tr").length > 0) {
                $("#" + dt).dataTable().fnDraw();
            } else {
                dtMain.create(dt);
            }
        }
    });

    $(".datatable[data-btnSubmit]").each(function () {
        var datatable = $(this);
        var idDT = datatable.attr('id');
        var idButton = datatable.attr('data-btnSubmit');
        $("#" + idButton).on('click', function () {
            // Verifica se o Datatable já foi carregado
            if ($("#" + idDT + " tr").length > 0) {
                $("#" + idDT).dataTable().fnDraw();
            } else {
                dtMain.create(idDT);
            }
        });
    });

    //Verifica se já houve alguma pesquisa anterior
    var dt = $(".datatable[data-crud]").attr("id");
    if (dt != null) {
        if (dtMain.searchExist(dt)) {
            LoadScreen();
            dtMain.create(dt);
        }
    }

    if (app.typeahead) {
        app.typeahead();
    }
    // if (app.perfilAcesso) {
    //     app.perfilAcesso();
    // }
    //########################################
    //############   wizard Tab   ############
    //########################################
    //Funcionalidades
    // <li data-hide-controll> esconde os controles de navegação no rodapé 
    // <li data-function="MyFunction"> Executa fução ao sair da aba
    //      A função dever retrorna bool para que a proxima aba seja apresentada
    //      ex: MyFunction(obj){ return true; }
    // <a data-toggle="tab"> habilita navegação ao selecionar a aba
    // <div data-progress> exibe uma barra de progresso até completar o preenchimento do wizard

    var suspendFn = false;
    $('.nav.nav-tabs li a').on('shown.bs.tab', function (e) {
        //content attribute
        var element = $(e.target).parent();
        var preventElement = $(e.relatedTarget).parent();
        var Index = $('.nav.nav-tabs li').index(element);
        var preventIndex = $('.nav.nav-tabs li').index(element);
        //custom fuction
        var keyExecAcion = true;
        if (!suspendFn && $(preventElement).attr('data-function') != null) {
            keyExecAcion = window[$(preventElement).attr('data-function')](preventElement, element)
        }
        suspendFn = false;

        //show controll
        if ($(element).attr('data-hide-controll') != null) {
            $('.controll-wizard').hide();
        } else {
            $('.controll-wizard').show();
        }
        if (keyExecAcion) {
            var PrevTab = $(e.target).parent().prev(); // newly activated tab
            var NextTab = $(e.target).parent().next(); // newly activated tab
            if (NextTab.length > 0 && PrevTab.length > 0) {
                $('.button-previous').removeClass('hide');
                $('.button-next').removeClass('hide');
            }
            else if (NextTab.length == 0) {
                $('.button-previous').removeClass('hide');
                $('.button-next').addClass('hide');
            }
            else if (PrevTab.length == 0) {
                $('.button-previous').addClass('hide');
                $('.button-next').removeClass('hide');
            }
        } else {
            activeEvent($(e.relatedTarget).parent());// previous active tab
            suspendFn = true;
        }
    })

    function calcPercentage() {
        var el = $('.nav.nav-tabs li.active');
        var tabs = $(el).parent().children();
        var posicao = ($(tabs).index(el) + 1);
        return percentage = ((posicao / tabs.length) * 100);
    }
    var ProgressBar = $('.panel-body div[data-progress]').length > 0;
    if (ProgressBar) {
        var percentage = calcPercentage();
        var template = '<div class="progress-bar bg-success" style="width: ' + percentage + '%"></div>';
        $('.panel-body div[data-progress]').addClass('progress progress-xs m-t-md');
        $('.panel-body div[data-progress]').html(template);
    }

    $('.button-next').on('click', function () {
        var li = $('.nav.nav-tabs li.active').next();
        activeEvent(li);
        updateProgress();
    });
    $('.button-previous').on('click', function () {
        var li = $('.nav.nav-tabs li.active').prev();
        activeEvent(li);
        updateProgress();
    });
    function activeEvent(el) {
        if (el.length > 0) {
            el.find('a').tab('show');
        }
    }
    function updateProgress() {
        if (ProgressBar) {
            var percentage = calcPercentage();
            $('.progress-bar.bg-success').width(percentage + '%');
        }
    }

    // $(".cpf").mask("000.000.000-00", { placeholder: "___.___.___-__" });
    // $(".cnpj").mask("00.000.000/0000-00", { placeholder: "__.___.___/____-__" });
    // $(".numero-processo").mask("00000.000000/0000-00", { placeholder: "_____.______/____-__" });

    $(".data-valid").on("blur", function () {
        var dt = $(this).val();

        if (dt != null && dt != "") {
            var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            var Val_date = dt
            if (Val_date.match(dateformat)) {
                var seperator1 = Val_date.split('/');
                var seperator2 = Val_date.split('-');

                if (seperator1.length > 1) {
                    var splitdate = Val_date.split('/');
                }
                else if (seperator2.length > 1) {
                    var splitdate = Val_date.split('-');
                }
                var dd = parseInt(splitdate[0]);
                var mm = parseInt(splitdate[1]);
                var yy = parseInt(splitdate[2]);
                var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (mm == 1 || mm > 2) {
                    if (dd > ListofDays[mm - 1]) {
                        app.callMsg("O período informado é invalido", "Erro");
                        return false;
                    }
                }
                if (mm == 2) {
                    var lyear = false;
                    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                        lyear = true;
                    }
                    if ((lyear == false) && (dd >= 29)) {
                        app.callMsg("O período informado é invalido", "Erro");
                        return false;
                    }
                    if ((lyear == true) && (dd > 29)) {
                        app.callMsg("O período informado é invalido", "Erro");
                        return false;
                    }
                }
            }
            else {
                app.callMsg("O período informado é invalido", "Erro");
                return false;
            }
        }
    });
});

function addButon(row, data, index) {
    var idTarget = $("[data-targetidhidden]").attr('data-targetidhidden');
    var textTarget = $("[data-targetinputhidden]").attr('data-targetinputhidden');
    var colTarget = $('td', row).length - 1;
    $('td', row).eq(colTarget).html('<button id="idBtnSelecionar" type="button" class="btn btn-primary" data-loading="false" onclick="selecionar(\'' + idTarget + '\',\'' + textTarget + '\',\'' + data.IdeInstituicao + '\',\'' + data.NomRazaoSocial + '\')"><li class="fa fa-check"></li> Selecionar</button>')

}
function selecionar(id, text, v1, v2) {
    $('#' + id).val(v1);
    $('#' + text).val(v2);
    $('#Modalinstituicao').modal('hide');

    //Esconde a combo de unidade organizacional caso seja diferente da instituição 
    if (v1 != 1) {
        $("#idUorg").hide(500);
    } else {
        $("#idUorg").show(500);
    }

    if ($('#UnDDL')) {
        if (v1 != "1") {
            $('#UnDDL').hide(500);
        } else {
            $('#UnDDL').show(500);
        }
    }
    CloseLoad();
}

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function LoadScreen(_url) {
    $('.loading').attr('class', 'loading active');
    if (_url) {
        $(window).load(_url);
    }

}
function CloseLoad() {
    $(".loading.active").attr("class", "loading");
}
function ShowLoad() {
    $('.loading').attr('class', 'loading active');
}
function MaxLengthTextArea() {
    $("textarea[maxlength]").keypress(function (event) {
        var key = event.which;
        //todas as teclas incluindo enter
        if (key >= 32 || key == 13) {
            var maxLength = $(this).attr("maxlength");
            var length = this.value.length;
            if (length >= maxLength) {
                event.preventDefault();
            }
        }
    });

    $("textarea[maxlength]").bind('keyup', function (event) {

        var maxLength = $(this).attr("maxlength");
        var length = this.value.length;
        if (length > maxLength) {
            $(this).val($(this).val().substring(0, maxLength));
            //setcursor(idEl,1000000,1000000);  
        }
    });
}

/**
 * Configuração do objeto Datatable (attributos)
 *   data-paging-type - Indica o tipo de paginação do datatable, valor defaut "full_numbers". Exemplos: (simple, simple_numbers, full e full_numbers)
 *   data-display-length - Indica a quantidade de linhas que serão apresentados no datatable, valor default igual = 15
 *   data-column-disabled - Indica o número da coluna que será desabilitado a orderação dos dados (1 ou 2,3)
 *   data-column-sort - Indica o número da coluna que irá ordenar o grid inicialmente (default = 0)
 *   data-ordering - Indica se o grid será ordenado ou não (default = true)
 */
function applyDataTable(selector) {
    $(selector ? selector : ".datatable-client").each(function () {

        var tab = $(this);
        var columnDefs = [];
        var columnDisabled = $(tab).attr("data-column-disabled");
        if (columnDisabled != null) {
            for (var i = 0; i < columnDisabled.split(',').length; i++) {
                columnDefs.push(
                    { orderable: false, targets: parseInt(columnDisabled.split(',')[i]) }
                )
            }
        }

        var order = [[0, "asc"]]
        var columnSort = $(tab).attr("data-column-sort");
        if (columnSort != undefined) {
            order = [[parseInt(columnSort), "asc"]]
        }

        var ordering = $(tab).attr("data-ordering");
        ordering = ((ordering == "false") ? false : true);

        var pagingType = "full_numbers";
        if ($(tab).attr("data-paging-type") != null) {
            pagingType = $(tab).attr("data-paging-type");
        }

        var displayLength = 15;
        if ($(tab).attr("data-display-length") != null) {
            displayLength = parseInt($(tab).attr("data-display-length"));
        }

        $(tab).dataTable({
            "language": {
                "url": "/js/vendor/datatables/datatables.portuguese.txt"
            },
            "pagingType": pagingType,
            "bLengthChange": false,
            "iDisplayLength": displayLength,
            "bFilter": false,
            "destroy": true,
            "order": order,
            "ordering": ordering,
            "fnDrawCallback": function (oSettings) {
                // Ajustes no layout do rodapé do datatable 
                $(".dataTables_info").parent().removeClass("col-xs-6").addClass("col-xs-5");
                $(".dataTables_paginate").parent().removeClass("col-xs-6").addClass("col-xs-7");
            },
            "columnDefs": columnDefs
        });
    });
}

var app = {

    resetValidation: function (el) {
        //Removes validation from input-fields
        $((el ? el : '') + '.input-validation-error').addClass('input-validation-valid');
        $((el ? el : '') + '.input-validation-error').removeClass('input-validation-error');
        //Removes validation message after input-fields
        $((el ? el : '') + '.field-validation-error').addClass('field-validation-valid');
        $((el ? el : '') + '.field-validation-error').removeClass('field-validation-error');
        //Removes validation summary 
        $((el ? el : '') + '.validation-summary-errors').addClass('validation-summary-valid');
        $((el ? el : '') + '.validation-summary-errors').removeClass('validation-summary-errors');

    },

    playCapcha: function () {
        var cap = $("#imgCaptchaLogin").attr('src').split('=')[1];
        cap = decodeURI(cap);
        $.post('/Account/getCap', { capcha: cap }, function (data) {
            $('.playCap').html('');
            for (var i = 0; i < data.cap.length; i++) {
                $('.playCap').append('<audio class="captchaAudio" id="' + data.cap[i] + '" src="/Content/audio/' + data.cap[i] + '.mp3"></audio>')
            }
            app.ListenerCaptcha(0);
        });
    },
    ListenerCaptcha: function (nunCap) {
        var cap = $('.captchaAudio')[nunCap];
        if (cap != null) {
            setTimeout(function () {
                cap.play();
                app.ListenerCaptcha(nunCap + 1);
            }, 1200)
        }

    },

    //*****************************************************
    //*** Funcionalidades do componente *******************
    //*****************************************************
    //data-value:
    //Obrigatorio, utilizado para encontrar a propriedade que contem o texo a ser apresentado no autoComplete

    //data-url-typeahead:
    //Opcional 
    //data-url:
    //Obrigatorio: url via get onde os dados deverão ser pesqusados

    //data-function: 
    //Opcional: função a ser executada no momento da seleção do registro desejado

    typeahead: function (seletor) {
        $(seletor ? seletor : ".typeahead").each(function () {
            var element = $(this),
                selected = null,
                hint = parseBool(element.attr("data-typeahead-hint") || false),

                //true:
                //Define se o campo aceita valores diferentes do autocomplete
                //false:
                //Impede que o valor digitado seja diferente do autocomplete
                any = parseBool(element.attr("data-typeahead-any") || true);

            element.typeahead({
                hint: hint,
                minLength: 3,
                highlight: true
            }, {
                source: function (request, response) {
                    $.get(element.attr("data-url"), { text: element.val() },
                    function (data) {
                        response($.map(data, function (item) {
                            return {
                                value: item[element.attr("data-value")],
                                data: item
                            };
                        }));
                        element.next().next().addClass('tt-dropdown-menu');
                    });
                }
            }).on("typeahead:selected", function (obj, item) {
                selected = item.data;

                var fn;

                try {
                    fn = Object.resolve(null, element.attr("data-typeahead-change") || element.attr("data-function")); // data-function é legado
                } catch (e) { }

                if ('function' == typeof fn) {
                    fn(item.data, element);
                }
            })

            element.change(function () {
                if (!any) {
                    element.typeahead('val', '');
                }

                var fn;

                try {
                    fn = Object.resolve(null, element.attr("data-typeahead-change"));
                } catch (e) { }

                if ('function' == typeof fn) {
                    fn(undefined, element);
                }
            });

            if (hint)
                element.addClass('no-border-tt')
        });
    },

    destroyTypeahead: function (seletor) {
        $(seletor ? seletor : ".typeahead").each(function () {
            var element = $(this);

            element.typeahead('destroy');
            element.removeClass('no-border-tt')
        });
    },

    callMsg: function (msg, type, fnc, arrayParam) {
        switch (type) {
            case "Alerta":
                toastr["warning"](msg, "");
                break;
            case "Sucesso":
                toastr["success"](msg, "");
                break;
            case "Confirmacao":
                bootbox.confirm(
                    {
                        title: 'Confirmação',
                        message: msg,
                        buttons: {
                            'cancel': {
                                label: 'Não'
                            },
                            'confirm': {
                                label: 'Sim'
                            }
                        },
                        callback: function (result) {
                            if (fnc !== null && result) {
                                if (arrayParam !== undefined) {
                                    if (arrayParam.split) {
                                        var paramArr = arrayParam.split(',');
                                        window[fnc].apply(this, paramArr);
                                    } else {
                                        window[fnc](arrayParam);
                                    }
                                } else {
                                    window[fnc]();
                                }
                            }
                        }
                    }
                   );
                break;
            case "Erro":
                toastr["error"](msg, "");
                break;
            case "Error":
                toastr["error"](msg, "");
                break;
            case "Informacao":
                toastr["info"](msg, "");
                break;
            default: toastr["warning"](msg, ""); break;

        }
    },

    StringToDate: function (str) {
        if (str) {
            var parts = str.split('/');
            var mydate = new Date(parseInt(parts[2]), (parseInt(parts[1]) - 1), parseInt(parts[0]));
            return mydate;
        } else {
            return str;
        }
    },
    convertDateJsonToString: function (value) {
        if ((value != null) && (value != "") && (value.indexOf("/Date") != -1)) {
            return moment(new Date().setTime(value.replace(/[^0-9]/g, ""))).format("DD/MM/YYYY");
        } else {
            return value;
        }
    },
    convertDatetimeJsonToString: function (value) {
        if ((value != null) && (value != "") && (value.indexOf("/Date") != -1)) {
            return moment(new Date().setTime(value.replace(/[^0-9]/g, ""))).format("DD/MM/YYYY HH:mm:ss.SSS");
        } else {
            return value;
        }
    },
    isXml: function (data) {
        var isObject = ((data instanceof Object) || (data instanceof Array));
        if (!isObject) {
            if (data.indexOf("<!DOCTYPE html>") == -1) {
                var dataNew = $.parseJSON(data);
                isObject = ((dataNew instanceof Object) || (dataNew instanceof Array));
            } else {
                isObject = false;
            }
        }
        return !isObject;
    },
    ajaxTransfer: function (url, type, data, dataType, contentType, callback) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            dataType: dataType,
            contentType: contentType != undefined ? contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            success: function (data) {
                if (!app.isXml(data)) {
                    if (callback) {
                        callback(data);
                    }
                } else {
                    $("html").html(data);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                CloseLoad();
                if (!app.isXml(XMLHttpRequest.responseText)) {
                    var msg = "Status: " + textStatus + "<br /><br />" + "Error: " + errorThrown;
                    app.callMsg(msg, "Erro");
                } else {
                    $("html").html(XMLHttpRequest.responseText);
                }
            }
        });
    },

    verificarExclusao: function(controller, id, datatableId) {
        $.ajax({
            url: "/" + controller +  "/VerificarExclusao/" + id,
            success: function (data) {
                if ((data.ok != null) && (data.ok)) {
                    app.callMsg(data.msg, null, app.excluir, controller + "," + id.toString() + "," + datatableId);
                } else {
                    app.callMsg(data.msg);
                }
            }
        });
    },

    excluir: function(controller, id, datatableId) {
        LoadScreen();
        $.ajax({
            type: "POST",
            url: "/" + controller +  "/Excluir/" + id,
            success: function (data) {
                if ((data.ok != null) && (data.ok)) {
                    $("#" + datatableId).dataTable().fnDraw();
                    app.callMsg(data.msg);
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

};


/**
 * Configuração do objeto Datatable (attributos)
 *   data-object-id = Id que identifica cada linha do Datatable (PK da tabela)
 *   data-controller = Nome do controle utilizado para buscar os dados
 *   data-columns-data = Propriedades do entity que serão apresentados no grid 
 *   data-columns-title = Titulos das colunas que serão apresentados no grid
 *   data-function-delete = Nome da função que será invocada no click do botão deletar, esta função recebe como parametro: (id)
 *   data-function-action = Nome da função que será invocada no momento da criação dos botões do crud, esta função recebe como parametro: (data, html)
 *   data-form-id = Nome do formulário utilizado na pesquisa
 *   data-crud = (true/false) - Indica se o Datatable será utilizado como crud. Se true, os botões (Alterar, Excluir, Visualizar) serão apresentado no grid
 *   data-function-callback - Nome da função que será invocada no momento em que os dados é retornado da controller, esta função recebe como paramentro: (data)
 *   data-function-column = Nome da função que será invocada no momento da criação das colunas de títulos do datatable, esta função recebe como parametro: (data)
 *   data-function-row = Nome da função que será invocada no momento da criação de cada linha do datatable, esta função recebe como parametro: (row, data, index)
 *      exemplo:  $('td', row).eq(5).addClass('highlight');
 *   data-columns-detail= (true/false) - Adiciona na primeira coluna do datatable um botão, que será utilizado para mostrar mais informações em cada linha; 
 *   data-paging-type - Indica o tipo de paginação do datatable, valor defaut "full_numbers". Exemplos: (simple, simple_numbers, full e full_numbers)
 *   data-display-length - Indica a quantidade de linhas que serão apresentados no grid (default igual = 15)
 *   data-default-sort-direction = Indica a posição de ordenação da grid, por padrão será asc e a outra opção será desc
 *   data-column-sort = Indica qual coluna será ordenada por padrão. Caso não informe, a primeira coluna será ordenada.
 *   data-column-checkall-first = Indica se existe uma coluna Check na primeira coluna
 */
var dtMain = {

    /**
     * Efetua a criação do Datatable
     */
    create: function (datatableId) {
        var config = dtMain.configure(datatableId);
        dtMain.load(config);
    },

    searchExist: function (datatableId) {
        var ret = false;
        var controller = $("#" + datatableId).attr("data-controller");
        var action = $("#" + datatableId).attr("data-action");
        var ControllerBuscarPaginacao = "/" + ((controller.split("/").length > 1) ? controller.split("/")[1] + "/BuscarPaginacao" : controller + "/BuscarPaginacao");
        var ControllerPerquisar = (controller.split("/").length > 1) ? controller : "/" + controller + "/Pesquisar";

        if (controller != null) {
            $.ajax({
                //type: "POST",
                url: ControllerBuscarPaginacao,
                success: function (data) {
                    ret = ((data != undefined) && (data.ok) && (data.item != undefined) && (data.item.iDisplayStart != -1));
                },
                async: false
            });
        }
        return ret;
    },

    configure: function (datatableId) {

        var tab = $("#" + datatableId);
        $(tab).attr("cellspacing", "0");
        $(tab).attr("width", "100%");

        var grid = {
            datatable: $(tab).attr("id"),
            formId: $(tab).attr("data-form-id"),
            objectId: $(tab).attr("data-object-id"),
            controller: $(tab).attr("data-controller"),
            columnsData: $(tab).attr("data-columns-data"),
            columnsTitle: $(tab).attr("data-columns-title"),
            columnsClass: $(tab).attr("data-columns-class") || '',
            sortDirection: $(tab).attr("data-default-sort-direction") || 'asc',
            dataColumnSort: $(tab).attr("data-column-sort") || "0",
            functionDelete: $(tab).attr("data-function-delete"),
            functionAction: $(tab).attr("data-function-action"),
            functionColumn: $(tab).attr("data-function-column"),
            functionCallback: $(tab).attr("data-function-callback"),
            functionRow: $(tab).attr("data-function-row"),
            columnsDetail: $(tab).attr("data-columns-detail"),
            pagingType: $(tab).attr("data-paging-type"),
            displayLength: $(tab).attr("data-display-length"),
            crud: ($(tab).attr("data-crud") != null ? $(tab).attr("data-crud") : "false"),
            columnCheckallFirst: $(tab).attr("data-column-checkall-first")
        };

        var direction = grid.sortDirection;
        var columnSort = grid.dataColumnSort;
        var columns = [];
        var columnDefs = [];
        var aaSorting = [parseInt(columnSort), direction];
        var columnsData = grid.columnsData.split(",");
        var columnsTitle = grid.columnsTitle.split(",");
        var columnsClass = grid.columnsClass.split(",");

        /* Adiciona a coluna que será utilizada para informações customizadas em cada linha do datatable */
        if ((grid.columnsDetail != null) && (grid.columnsDetail == "true")) {
            columns.push({
                title: "",
                data: null,
                orderable: false,
                defaultContent: "",
                className: "details-datatable"
            });
            aaSorting[0] = 1;
        }

        /* Adiciona na primeira coluna um Checkbox não ordenável */
        if (grid.columnCheckallFirst != null && grid.columnCheckallFirst != "") {
            columns.push({
                title: '<label class="checkbox m-n i-checks"><input type="checkbox" class="checkall" id="' + grid.columnCheckallFirst + '"><i></i></label>',
                data: null,
                orderable: false,
                defaultContent: "",
            });
            aaSorting[0] = 1;
        }
        columnsData.forEach(function (value, index) {
            columns.push({
                data: $.trim(value),
                title: $.trim(columnsTitle[index])
            });
        });

        /* função Callback para customizar as colunas do datatable */
        if (grid.functionColumn != null) {
            var data = {
                columns: columns,
                aaSorting: aaSorting
            }
            data = window[grid.functionColumn](data);
            columns = data.columns;
            aaSorting = data.aaSorting;
        }

        // Configura a coluna responsável pelo crud 
        if (grid.crud == "true") {
            columns.push({
                data: null,
                title: "Ações",
                width: 10,
                orderable: false
            });

            columnDefs.push({
                targets: (columns.length - 1),
                render: function (data, type, row) {

                    var id = row[grid.objectId];
                    var funcDelete = "app.verificarExclusao('" + grid.controller + "'," + id + ",'" + datatableId + "')";
                    var functionDelete = (grid.functionDelete == null ? funcDelete  : grid.functionDelete + "(" + id + ");");
                    var html = '<a href="/' + grid.controller + '/Alterar/' + id + '" class="btn btn-sm btn-default ' + grid.controller.toLowerCase() + '-alterar" title="Alterar"><i class="fa fa-pencil"></i></a>&nbsp;' +
                            //    '<a href="/' + grid.controller + '/Visualizar/' + id + '" class="btn btn-sm btn-default ' + grid.controller.toLowerCase() + '-visualizar" title="Visualizar"><i class="fa fa-eye"></i></a>&nbsp;' +
                               '<a href="#" class="btn btn-sm btn-danger ' + grid.controller.toLowerCase() + '-excluir" data-loading="false" onclick="' + functionDelete + '" title="Excluir"><i class="fa fa-trash-o"></i></a>&nbsp;';

                    if (grid.functionAction != null) {
                        html = window[grid.functionAction](data, html);
                    }

                    // /** Início do bloco 
                    //  * Central de controle das permissão do usuário
                    //  * (Habilita e desabilita os botões do CRUD) e customizações realizadas
                    // **********************************************************************************************/

                    // $("#" + grid.formId).append('<div id="crudAcoes" class="hide" >' + html + '</div>');
                    // $("#crudAcoes a").addClass("disabled");

                    // $.each(acoesPermitidas, function (index, value) {
                    //     var acao = value.substr(1).toLowerCase().replace("/", "-");
                    //     $("#crudAcoes a." + acao).removeClass("disabled");
                    // });

                    // $("#crudAcoes a.disabled").attr("data-loading", "false");
                    // $("#crudAcoes a.disabled").removeAttr("onclick");
                    // $("#crudAcoes a.disabled").removeAttr("href");

                    // html = $("#crudAcoes").html();
                    // $("#crudAcoes").remove();

                    // /** Fim do bloco 
                    // **********************************************************************************************/

                    return html;
                }
            })
        }

        columns.forEach(function (column, index) {
            if (columnsClass[index])
                column.className = (column.className || '') + ' ' + columnsClass[index];
        });

        grid.columns = columns;
        grid.aaSorting = aaSorting;
        grid.columnDefs = columnDefs;
        return grid;
    },

    /**
     * Efetua o carregamento do Datatable
     */
    load: function (config) {

        var iDisplayStart = 0;
        var aaSorting = config.aaSorting;
        //var ControllerBuscarPaginacao = "/" + ((config.controller.split("/").length > 1) ? config.controller.split("/")[1] + "/BuscarPaginacao" : config.controller + "/BuscarPaginacao");
        var ControllerPerquisar = (config.controller.split("/").length > 1) ? config.controller : "/" + config.controller + "/Pesquisar"

        // $.ajax({
        //     url: ControllerBuscarPaginacao,
        //     async: false,
        //     success: function (data) {
        //         if ((data != undefined) && (data.ok) && (data.item != undefined) && (data.item.iDisplayStart != -1)) {
        //             aaSorting = [data.iSortCol_0, data.sSortDir_0];
        //             iDisplayStart = data.iDisplayStart;
        //         };
        //     }
        // });

        var pagingType = "full_numbers";
        var width = $(window).width();
        if (width < 1280)
            pagingType = "simple_numbers";

        if (config.pagingType != null) {
            pagingType = config.pagingType;
        }

        var displayLength = 15;
        if (config.displayLength != null) {
            displayLength = parseInt(config.displayLength);
        }

        var table = $("#" + config.datatable).dataTable({
            "bServerSide": true,
            "sAjaxSource": ControllerPerquisar,
            "bProcessing": true,
            "bRetrieve": true,
            "bFilter": false,
            "sServerMethod": "POST",
            "iDisplayLength": displayLength,
            "bLengthChange": false,
            "pagingType": pagingType,
            "iDisplayStart": iDisplayStart,
            "aaSorting": [aaSorting],
            "language": {
                "url": "/js/vendor/datatables/datatables.portuguese.txt"
            },
            "fnServerParams": function (aoData) {

                var columns = "";
                var dts = $.grep(this.dataTableSettings, function (item, index) {
                    if (item.sTableId == config.datatable) {
                        return item;
                    }
                });

                dts.forEach(function (obj) {
                    obj.aoColumns.forEach(function (item) {
                        if (item.data != null) {
                            if (columns != "")
                                columns += ";"
                            columns += item.data;
                        }
                    })
                });

                // Adiciona os nomes das colunas ao objeto aoData
                aoData.push({ "name": "sColumns", "value": columns });

                if ($("#" + config.formId).serialize() != "") {

                    // Serializa o formulário de pesquisa
                    var form = $("#" + config.formId).serialize().split("&");
                    form.forEach(function (data) {
                        var list = data.split("=");
                        var fieldName = list[0];

                        var obj = null;
                        if (fieldName.split(".").length > 1) {
                            var fiedId = fieldName.split(".")[fieldName.split(".").length - 1];
                            obj = $("#" + config.formId + " [id=" + fiedId + "]");
                        } else {
                            obj = $("#" + config.formId + " [name=" + fieldName + "]");
                        }

                        var fieldValue = $(obj).val();

                        if ($(obj).prop("type") == "radio") {
                            fieldValue = list[1]
                        }

                        aoData.push({ "name": fieldName, "value": fieldValue });
                    });
                }
            },
            "fnDrawCallback": function (oSettings) {
                if (oSettings.aoData.length == 0) {
                    if (oSettings.json.oMsg != null) {
                        if ((oSettings.json.oMsg.msg.descricao != null) && (oSettings.json.oMsg.msg.descricao != "")) {
                            app.callMsg(oSettings.json.oMsg.msg);
                        }
                    } else {
                        app.callMsg("Nenhum registro encontrado.", "Alerta", null, null);
                    }
                } else {
                    $("div.datatable").addClass("show");
                }

                /* função Callback que repassa um objeto vindo do controller  */
                if (config.functionCallback != null) {
                    if (oSettings.json.oItem != null) {
                        window[config.functionCallback](oSettings.json.oItem);
                    }
                }

                // Ajustes no layout do rodapé do datatable 
                $(".dataTables_info").parent().removeClass("col-xs-6").addClass("col-xs-5");
                $(".dataTables_paginate").parent().removeClass("col-xs-6").addClass("col-xs-7");

                RegisterLoad();
                CloseLoad();
            },
            "createdRow": function (row, data, index) {

                // Verifica se o datatable é um CRUD 
                if (config.crud) {
                    var colTarget = $('td', row).length - 1;
                    $('td', row).eq(colTarget).addClass("text-left text-nowrap");
                }

                /* função Callback para customizar as linhas do datatable */
                if (config.functionRow != null) {
                    window[config.functionRow](row, data, index);
                }
            },
            "columns": config.columns,
            "columnDefs": config.columnDefs
        });
    }
};


function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) {      // If Internet Explorer, return version number
        console.log(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        return true;
    }
    else {            // If another browser, return 0
        console.log('otherbrowser');

        return false;
    }
}
///Componente de upload de arquivos mvc .net
///para acessar os arquivos que foram carregados via este controle pelo arquivo utilize:
///*** HttpContext.Cache["CustomUpFiles"] ***
///Para utilizar o controle de upload utilize a seguinte tag respeitando os atributos (parametros) abaixo descritos :
///EX:
///     <div class="CustomUpload"
///     data-multiple="2"
///     data-controller="Home"
///     data-extension-allow="txt,pdf,jpg,png"
///     data-maxfile-size="1"
///     data-function="myfnc"
///     data-function-valid="myfncValid"
///     ></div>
///### parametros ####
///data-multiple="2"    # Não obrigatorio # informa quantos arquivos podem ser enviados ao servidor; Caso não imforme, somente um arquivo pode ser selecionado 
///data-controller="Home" # Obrigatorio # Nome do controler mvc que possui a view que este componetne esta sendo adiocnado
///data-extension-allow="txt,pdf,jpg,png" # Não Obrigatorio # Iforma as extensões permitidas, caso não informado todos os arquivos seram permitidos
///data-maxfile-size="1" # Não Obrigatorio # informa o tamanho maximo em megas que o arquivo enviado pode possuir, Caso não informado o tamanho maximo é 1
///data-function="myfnc" #adciona função ao clicar no botao de salvar arquivos
///data-function-valid="myfncValid" # executa função antes de enviar para o servidor
///data-button="fa-save,Salvar"
///### O campo descrição que se pedia antigamente tournou-se obsoleto, mas não gera impacto para a as aplicações que estiverem fazendo uso.
function BuildCustomUploadControll() {
    var ControlsUpload = $('.CustomUpload');
    if (ControlsUpload.length > 0) {
        for (var upIndex = 0; upIndex < ControlsUpload.length; upIndex++) {
            var DataButton = ControlsUpload.attr('data-button');
            var icon = DataButton != null ? DataButton.split(',')[0] : 'fa-save';
            var nameButton = DataButton != null ? DataButton.split(',')[1] : 'Salvar';
            var template =
                    '<form enctype="multipart/form-data" id="formUpload_' + upIndex + '">'
                    + '<section class="panel panel-default">'
                    + '    <article class="panel-body">'
                    + '<span class="btn btn-lg btn-primary btn-file btn-primary slnFiles col-md-12" data-loading="false"><i class="fa fa-folder-open"></i> '

                    + (isIE() ? 'Selecione...' : 'Arraste e solte arquivos aqui<br> ou selecione...')

                    + '   <input type="file" id="inputUplad_' + upIndex + '" name="CollectionFiles"></span>'
                    + '<div class="line line-dashed b-b line-lg pull-in has-feedback"></div>'
                    + '<table class="table-responsive table files" id="tableUplaod_' + upIndex + '">'
                    + '<thead>'
                    + '<tr><th class="col-md-2">Arquivo</th><th colspan="2">Progresso</th></tr>'
                    + '</thead>'
                    + '<tbody></tbody>'
                    + '</table>'
                    + '</article>'
                    + '<footer class="panel-footer">'

                    + '<button type="button"  onclick="btnCustomFileUpload(this)" class="btn btn-primary processing disabled btnFileUploadPost"  data-loading="false"><i class="fa ' + icon + '"></i> ' + nameButton + '</button>'
                    + '</footer>'
                    + '</section>'
                    + '</form>';

            var customUpload = $(ControlsUpload[upIndex]);
            if (customUpload.attr('data-controller')) {

                customUpload.html(template);

                var fileImput = $(customUpload).find('input:file');


                fileImput.on('change', function () {

                    var customUpload_ = $(this).parents('.CustomUpload');

                    //Reconhece parametros de configuração
                    //upload de multiplos arquivos
                    var totalFIlesAllow = 1;
                    if (customUpload_.attr('data-multiple') != null && parseInt(customUpload_.attr('data-multiple')) != NaN) {
                        fileImput.attr('multiple', '');
                        totalFIlesAllow = parseInt(customUpload_.attr('data-multiple'));

                    }
                    //extençoes permitidas
                    var customExtensions = "*";
                    if (customUpload_.attr('data-extension-allow') != null) {
                        customExtensions = customUpload_.attr('data-extension-allow');
                    }
                    //tamanho total do arquivo em megas
                    var maxFileSize = 1;
                    if (customUpload_.attr('data-maxFile-Size') != null && parseInt(customUpload_.attr('data-maxFile-Size')) != NaN) {
                        maxFileSize = parseInt(customUpload_.attr('data-maxFile-Size'));
                    }

                    var controller = customUpload_.attr('data-controller');


                    var numberPattern = /\d+/g;
                    var index = $(this).attr('id').match(numberPattern)
                    var tableLines = $('#tableUplaod_' + index + ' tr').length;
                    //armazena arquivos para enviar ao servidor
                    //var data = $('#formUpload_' + index).serializeArray();
                    var data = new FormData();
                    var exFielsSend = "";
                    var checaArquivoSuperior = false;

                    for (var i = 0; i < $(this).get(0).files.length; i++) {
                        data.append("file" + i, $(this).get(0).files[i]);
                        data.append("multiple" + i, totalFIlesAllow);
                        data.append("extensionAllow" + i, customExtensions);
                        data.append("maxFileSize" + i, maxFileSize);
                        if ($(this).get(0).files[i].size >= maxFileSize * 1024 * 1024) {
                            checaArquivoSuperior = true;
                        }
                    }

                    // Verifica se o upload permite arquivos simultâneos, se não permitir, ele irá ocultar o botão de envio.
                    // Essa verificação corrige o problema de ao enviar arquivos muito grandes poder enviar outro.
                    var totalFIlesAllow = 1;
                    if (customUpload.attr('data-multiple') != null && parseInt(customUpload.attr('data-multiple')) != NaN) {
                        totalFIlesAllow = parseInt(customUpload.attr('data-multiple'));
                    }
                    if (tableLines >= totalFIlesAllow) {
                        $('.slnFiles').addClass("hide");
                    } else {
                        $('.slnFiles').removeClass("hide");
                    }

                    // Antes do post verifica se não o arquivo não está atingindo o limite máximo permitido.
                    if (!checaArquivoSuperior) {
                        $.ajax({
                            type: "POST",
                            url: '/' + controller + '/GetCustomFileUpload',
                            contentType: false,
                            processData: false,
                            data: data,
                            success: function (result) {
                                if (result.erro) {
                                    app.callMsg(result.msg, "Erro");
                                    if (result.files != null) {
                                        GetProgress(index, result.files);
                                        enalbleControl();
                                    } else {
                                        // Se o arquivo não for um dos permitidos ele deverá re-exibir o botão de upload.
                                        $('.slnFiles').removeClass("hide");
                                    }
                                } else {
                                    GetProgress(index, result.files);
                                    enalbleControl();
                                }

                                function enalbleControl() {
                                    if (tableLines >= totalFIlesAllow) {
                                        $('.slnFiles').addClass("hide");
                                    } else {
                                        $('.slnFiles').removeClass("hide");
                                    }
                                }
                                // Remove arquivos já enviados.
                                $('#inputUplad_' + index).val('');
                            },
                            error: function (xhr, status, p3, p4) {
                                var err = "Error " + " " + status + " " + p3 + " " + p4;
                                if (xhr.responseText && xhr.responseText[0] == "{")
                                    err = JSON.parse(xhr.responseText).Message;


                                $('.slnFiles').removeClass("hide");
                                app.callMsg("Erro Crítico: O arquivo que você está tentando enviar é superior ao tamanho máximo permitido em nossos servidores.", "Erro");
                            },

                        });
                    } else {
                        app.callMsg("O tamanho do(s) arquivo(s) não pode(m) ser superior(es) à " + maxFileSize + "Mb.", "Erro");
                        $('.slnFiles').removeClass("hide");
                    }
                });

            } else {
                app.callMsg("Configuração do controller não definida", "Erro");
            }
        }
    }
}
function btnCustomFileUpload(objBtn) {
    var CompletAction = true;
    var customUpload = $(objBtn).parent().parent().parent().parent();
    var controller = $(customUpload).attr('data-controller');
    //verifica se existe data-function a ser executada
    if ($(customUpload).attr('data-function-valid') != null) {
        CompletAction = window[$($(customUpload)).attr('data-function-valid')]()
    }
    if (CompletAction) {
        var form = $(customUpload).find('form').serialize()
        $.post('/' + controller + '/GetFullInformationStreamFile', form, function (data) {
            if (data.sucess) {
                if ($(customUpload).attr('data-function') != null) {
                    window[$(customUpload).attr('data-function')](data)
                }

                $(customUpload).html('');
                BuildCustomUploadControll();
                app.callMsg(data.msg, "Sucesso");
            } else {
                app.callMsg(data.msg, "Alerta");
            }

        });
    }
}
function GetProgress(index, result) {
    var customUploadTable = $('#tableUplaod_' + index + ' tbody');

    for (var i = 0; i < result.length; i++) {
        if ($('#' + result[i].index).length == 0) {
            var htmlRowTemplate =
                "<tr id='" + result[i].index + "'>"
                //index
                + "<td>"
                    + '<div class="form-group has-feedback">'
                   + ' <p class="font-bold">' + result[i].fileName + '</p>'
                    + ' </div>'
                    + '<div class="form-group has-feedback">'
                    + '      <input class="form-control" name="NomeCustomFile" type="hidden" value="' + result[i].fileName + '">'
                    + '      <input class="form-control" name="IdCustomFile" type="hidden" value="' + result[i].index + '">'
                    + ' </div>'

                + "</td>"

                // Campo de descrição do arquivo
                // Removido a partir da core.web versão 1.6.6

                //barra de progresso mais nome do arquivo
                + "<td>"
                + '<div class="form-group">'
                + ' <div class="col-sm-10">'
                + '     <div class="progress">'
                + '         <div class="bar bar-success progress-bar progress-bar-success ' + result[i].index + '" style="width: 0%;"></div>'
                + '     </div>'
                + ' </div>'
                + ' <div class="col-sm-2 progress_' + result[i].index + '"><p class="form-control-static"></p></div>'
                + '</div>'
                //excluir arquivo
                + "</td>"
                + "<td>"
                    + "<a href='#' class='btn btn-sm btn-danger ' data-loading='false' onclick='RemoveFile(\"" + index + "\",\"" + result[i].index + "\");' title='Excluir'><i class='fa fa-trash-o'></i></a>"
                + "</td>"
                + "</tr>";
            $(customUploadTable).append(htmlRowTemplate);
            setTimeout(getData(index, result[i].index), 0);
        }
    }
    function getData(index, id) {
        var customUpload = $($('.CustomUpload')[index]);
        var progress = customUpload.find('.' + id);
        var progressNumber = customUpload.find('.progress_' + id + ' p');
        var controller = customUpload.attr('data-controller');
        if (progress && controller && id) {
            $.post('/' + controller + '/GetProgressResult/' + id, null, function (data) {
                if (!data.processFail) {
                    if (data.progressSize < data.totalSize) {
                        var x = (data.progressSize / data.totalSize) * 100;
                        $(progress).attr('style', 'width:' + (x | 0) + '%')
                        $(progressNumber).html((x | 0) + '%')
                        customUpload.find('.processing').addClass("disabled");
                        getData(index, data.index);
                    } else if (data.progressSize == data.totalSize) {
                        $(progress).attr('style', 'width:100%')
                        $(progressNumber).html('100%')
                        customUpload.find('.processing').removeClass("disabled");
                    }
                } else {
                    app.callMsg(data.fileName, "Erro");
                    customUpload.find('.processing').removeClass("disabled");
                }
            });
        } else {
            app.callMsg("Falha ao processar o arquivo, Tente novamente", "Erro");
            $('.processing').removeClass("disabled");
            $('.slnFiles').removeClass("disabled");
            $('.slnFiles').val('');

        }
    }

};
function RemoveFile(index, id) {
    var customUpload = $($('.CustomUpload')[index]);
    var controller = customUpload.attr('data-controller');

    var totalFIlesAllow = 1;
    if (customUpload.attr('data-multiple') != null && parseInt(customUpload.attr('data-multiple')) != NaN) {
        totalFIlesAllow = parseInt(customUpload.attr('data-multiple'));
    }

    $('.processing').removeClass("disabled");
    $.post('/' + controller + '/DeleteCustomPostFile/' + id, null, function (data) {
        $('#' + id).remove();
        var tableLines = customUpload.find(' .files tbody tr').length;
        if (tableLines == 0) {
            customUpload.find('.btnFileUploadPost').addClass('disabled');
        }
        if (tableLines >= totalFIlesAllow) {
            $('.slnFiles').addClass("hide");
        } else {
            $('.slnFiles').removeClass("hide");
        }
    });
}

// Verifica se o valor digitado em um component input é um número
// Exemplo: $("#codPessoa").keypress(onlyNumber);
function onlyNumber(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }

    return true;
}

$('.onlyNumber').keypress(onlyNumber);
function applayOnlyNumber() {
    $('.onlyNumber').keypress(onlyNumber);
}

function range(e) {
    if ($(e.target).attr('data-min') && $(e.target).attr('data-max')) {
        var val = $(e.target).val() == "" ? 0 : $(e.target).val();
        var min = parseInt($(e.target).attr('data-min'));
        var max = parseInt($(e.target).attr('data-max'));
        if (val > max) {
            $(e.target).val(max)
        } else if (val < min) {
            $(e.target).val(min)
        }
    }
}
$('.range').blur(range);
function ApplayRange() {
    $('.range').blur(range);
}

function SetDatePik() {
    $(".datePick").datepicker();
};

SetDatePik();

function SetMask() {
    $('.mask').each(function () {
        var mk = $(this).attr('data-mask');
        $(this).mask(mk);
    });

    $('.maskReal').each(function () {
        var mk = $(this).attr('data-mask');
        $(this).mask(mk, { placeholder: "0,00", reverse: !0 });
    });
}

$(function () {
    SetMask();
});

function onlyNumberComma(e) {
    var arr = [44, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    if (e.which != 8 && e.which != 0 && (arr.indexOf(e.which) == -1)) {
        return false;
    }
    return true;
}

//#######################
//Mask money
//#######################
/*
FormatMaskReal(334343.67) // 334.343,67
FormatMaskReal(767678678) // 7.676.786,78
*/
function FormatMaskReal(decimalVal) {
    return formatReal(getMoney(decimalVal.toFixed(2).toString()));
}
function formatReal(int) {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 9) {
        tmp = tmp.replace(/([0-9]{3})([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
    }
    else
        if (tmp.length > 6) {
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

    return tmp;
}
function getMoney(str) {
    return parseInt(str.replace(/[\D]+/g, ''));
}

//###################################################
//      FIM    controle de validação do sicnet
//###################################################

//#######################
//Mask percent
//#######################
/*
FormatMaskPercent(3.9498488) // 03,9498488
FormatMaskPercent(0.3949988) // 00,3949988
*/
function FormatMaskPercent(decimalVal) {
    return formatPercent(decimalVal);
}
function formatPercent(int) {
    var tmp = int + '';

    if (int < 10) {
        tmp = "0" + int;
    }
    if (int == 100) {
        tmp = 100 + ".00";
    }

    return tmp.replace('.', ',');
}

function setCheckAll() 
{
    $(".checkall").on("click", function () {
        $(this).closest("table").find(":checkbox").prop("checked", this.checked)
    }),
    $(".checkrow").on("click", function () {
        $(this).closest("tr").find(":checkbox").prop("checked", this.checked)
    })
    , $(".checkcol").on("click", function () {
        $(this).closest("table").find("." + $(this).data("check")).prop("checked", this.checked)
    });
}

datepickerFormatToGlobalize = function (format) 
{
    return format.replace(/(dd|d|DD|D|mm|m|MM|M|yyyy|yy)/g, function (m) {
        switch (m) {
            case 'D':
                return '\\ddd';
            case 'DD':
                return '\\dddd';
            case 'm':
                return '\\M';
            case 'mm':
                return '\\MM';
            case 'M':
                return '\\MMM';
            case 'MM':
                return '\\MMMM';
            default:
                return '\\' + m;
        }
    })
};

formatCnpj = function (cnpj) {
    if (!(typeof cnpj === "string"))
        return cnpj;

    var ret = cnpj.replace(/\D/g, '');

    if (ret.length != 14)
        return cnpj;

    return ret.slice(0, 2)
        + "." + ret.slice(2, 5)
        + "." + ret.slice(5, 8)
        + "/" + ret.slice(8, 12)
        + "-" + ret.slice(12, 14);
};

formatCpf = function (cpf) {
    if (!(typeof cpf === "string"))
        return cpf;

    var ret = cpf.replace(/\D/g, '');

    if (ret.length != 11)
        return cpf;

    return ret.slice(0, 3)
        + "." + ret.slice(3, 6)
        + "." + ret.slice(6, 9)
        + "-" + ret.slice(9, 11);
};

(function (root, window, document, undefined) {

    function redirectEvent(e) {
        var $el = $(this),
        dst = $el.attr('data-events-redirect-destiny'),
        dstSelector = $el.attr('data-events-redirect-selector'),
        $elDst = $el;

        if (!dst.trim())
            return;

        if (typeof dstSelector == "string" && dstSelector.trim()) {
            $elDst = $(dstSelector);
            if ($elDst.length == 0)
                return;
        }

        $elDst.trigger(dst, e);
        e.preventDefault();
    }

    root.applyRedirectEvents = function () {
        var $elements = $('[data-events-redirect][data-events-redirect-destiny]');

        $elements.each(function (i, el) {
            var $el = $(el),
                src = $el.attr('data-events-redirect').split(/\s+/).filter(function (x) { return !!x });

            if (src.length == 0)
                return;

            src.forEach(function (s) {
                $el.off(s, redirectEvent);
                $el.on(s, redirectEvent);
            });
        });
    }

    root.applyRedirectEvents();

})(this.window, this.window, this.document);