/*

main.js - Arquivo de configuração e inicialização do sistema

***  ATENÇÃO  ***
-------------------------------------------------------------------------------
EDIÇÕES NESTE ARQUIVO DEVEM SER REALIZADAS COM CUIDADO.

ESTE ARQUIVO FAZ PARTE DA ARQUITETURA DOS SISTEMAS E DEVE SER ALTERADO APENAS
PARA IMPLEMENTAÇÕES A NÍVEL DE ARQUITETURA. PARA CUSTOMIZAÇÕES GERAIS EM 
TODOS OS SISTEMAS, DEVE-SE EDITAR O ARQUIVO "customs.js". PARA CUSTOMIZAÇÕES
DE UM SISTEMA ESPECÍFICO, DEVE-SE EDITAR UM ARQUIVO DE SCRIPT DO PRÓPRIO
SISTEMA.
-------------------------------------------------------------------------------

 */
(function ($, undefined) {
    "use strict";

    //Usando div como conteúdo para Popover
    $('.popper').popover({
        container: 'body',
        html: true,
        content: function () {
            return $(this).next('.popper-content').html();
        }
    });

    var page = {
            init: function () {
                function loading(activate) {
                    if (activate)
                        $(".loading").addClass("active");
                    else
                        $(".loading").removeClass("active");
                }

                function contrast(activate) {
                    if (activate) {
                        $("body").addClass("contrast");
                        $("#prettify").attr("href", "styles/vendor/google-code-prettify/tomorrow-night.css");
                    } else {
                        $("body").removeClass("contrast"),
                        $("#prettify").attr("href", "styles/vendor/google-code-prettify/github.css")
                    }
                }

                $(".nav-main").each(
                    function() {
                        $(this).find(".active").parents("li").addClass("active");
                    }
                );

                $.rvFontsize({
                    targetSection: ":root",
                    store: true,
                    controllers: {
                        appendTo: "#rvfs-controllers",
                        showResetButton: true,
                        template: '<li><a href="#" class="rvfs-decrease" data-toggle="tooltip" data-placement="bottom" title="Diminuir Letra"><i class="fa fa-font"></i>-</a></li><li><a href="#" class="rvfs-reset" data-toggle="tooltip" data-placement="bottom" title="Tamanho Padrão"><i class="fa fa-font"></i></a></li><li><a href="#" class="rvfs-increase" data-toggle="tooltip" data-placement="bottom" title="Aumentar Letra"><i class="fa fa-font"></i>+</a></li><li><a href="#" class="active-contrast" data-toggle="tooltip" data-placement="bottom" title="Contraste"><i class="fa fa-adjust"></i></a></li>'
                    }
                });

                $('[data-toggle="fullscreen"]').on("click", function(e) {
                    attachEvent().preventDefault();

                    if (screenfull.enabled)
                        screenfull.request();
                });

                $(".active-loading").on("click", function(e) {
                    e.preventDefault();
                    loading($(".loading").hasClass("active") ? false : true);
                });

                $(".active-contrast").on("click", function(e) {
                    e.preventDefault();

                    if ($("body").hasClass("contrast")) {
                        contrast(false);
                        $.removeCookie("contrast");
                    } else {
                        contrast(true);
                        $.cookie("contrast", 1);
                    }
                });

                contrast($.cookie("contrast") ? !0 : !1)
            }
        },

        footer = {
            init: function () {
                $(".footer-bottom").each(function() {
                    var $this = $(this),
                        windowHeight = $(window).outerHeight(),
                        barraBrasilHeight = $("#barra-brasil").outerHeight(),
                        contentHeight = $(".entry-content").outerHeight(),
                        totalHeight = barraBrasilHeight + contentHeight + $this.outerHeight();

                    if (windowHeight >= totalHeight)
                        $this.addClass("footer-fixed");
                    else
                        $this.removeClass("footer-fixed");
                });
            }
        },

        bootstrap = {
            init: function () {
                $('[data-toggle="tooltip"]').tooltip();
                $('[data-toggle="popover"]').popover();

                $(document).on("click", ".popover-title .close", function(e) {
                    var c = $(e.target).closest(".popover").prev();

                    if (c)
                        c.popover("hide");
                });

                $(".carousel").carousel();
            }
        },

        form = {
            init: function () {
                $(".form-datepicker").each(function() {
                    var $this = $(this);

                    $this.datepicker({
                        language: $this.data("language"),
                        format: $this.data("date-format")
                    });
                });

                $(".form-slider").each(function() {
                    $(this).slider();
                });

                $(".form-chosen-select").each(function() {
                    var $this = $(this);
                    $this.chosen();

                    var $control = $this.closest(".chosen-control");

                    $control.on("click", ".select", function (e) {
                        e.preventDefault();

                        $this.find("option").attr("selected", "selected");
                        $this.find("option").prop("selected", true);
                        $this.trigger("chosen:updated");
                    });

                    $control.on("click", ".deselect", function (e) {
                        e.preventDefault();

                        $this.find("option").attr("selected", "");
                        $this.find("option").prop("selected", false);
                        $this.trigger("chosen:updated");
                    });
                });

                $(".form-markdown").each(function() {
                    var editor = new EpicEditor({
                        container: $(this).attr("id"),
                        basePath: "",
                        theme: {
                            base: "styles/vendor/epiceditor/epiceditor.css",
                            preview: "styles/vendor/epiceditor/bartik.css",
                            editor: "styles/vendor/epiceditor/epic-light.css"
                        }
                    });

                    editor.load();
                });

                $(".date").mask("00/00/0000", {
                    placeholder: "__/__/____"
                });

                $(".time").mask("00:00:00", {
                    placeholder: "__:__:__"
                });

                $(".date_time").mask("00/00/0000 00:00:00", {
                    placeholder: "__/__/____ __:__:__"
                });

                $(".zipcode").mask("00.000-000", {
                    placeholder: "__.___-___"
                });

                $(".phone").mask("0000-0000", {
                    placeholder: "____-____"
                });

                $(".phone_with_ddd").mask("(00) 0000-0000", {
                    placeholder: "(__) ____-____"
                });

                var a = function (a) {
                    return a.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ? "(00) 00000-0000" : "(00) 0000-0000"
                };

                $(".celphones").mask(a, {
                    placeholder: "(__) ____-____"
                });

                $(".phone_international").mask("+099 (099) ZZZ", {
                    placeholder: "+__ (__) ____-____",
                    maxlength: false,
                    translation: {
                        Z: {
                            pattern: /\d|-/,
                            recursive: true
                        }
                    }
                });

                $(".cpf").mask("000.000.000-00", {
                    placeholder: "___.___.___-__",
                    reverse: true
                });

                $(".money").mask("000.000.000.000.000,00", {
                    placeholder: "0,00",
                    reverse: true
                });

                $(".money2").mask("#.##0,00", {
                    placeholder: "0,00",
                    reverse: true,
                    maxlength: false
                });

                $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
                    placeholder: "___.___.___.___",
                    translation: {
                        Z: {
                            pattern: /[0-9]/,
                            optional: true
                        }
                    }
                });

                $(".ip_address2").mask("099.099.099.099", {
                    placeholder: "___.___.___.___"
                });

                $(".percent").mask("##0,00%", {
                    placeholder: "0,00%",
                    reverse: true
                });

                $(".plate").mask("SSS-0000", {
                    placeholder: "___-____"
                });

                $(".clear-if-not-match").mask("00/00/0000", {
                    clearIfNotMatch: true
                });

                $(".pis").mask("000.00000.00-0", {
                    placeholder: "___._____.__-_"
                });

                $(".cnpj").mask("00.000.000/0000-00", {
                    placeholder: "___.___.___/____-__"
                });

                $(".dropfile").each(function() {
                    var $this = $(this);

                    if ("undefined" == typeof window.FileReader) {
                        $("small", this).html("File API & FileReader API not supported").addClass("text-danger");
                    } else {
                        this.ondragover = function() {
                            return $this.addClass("hover"), false;
                        };

                        this.ondragend = function() {
                            return $this.removeClass("hover"), false;
                        };

                        this.ondrop = function(e) {
                            e.preventDefault();
                            $this.removeClass("hover").html("");

                            var c = attachEvent().dataTransfer.files[0],
                                d = new FileReader;

                            d.onload = function(e) {
                                $this.append($("<img>").attr("src", e.target.result));
                            }
                            
                            d.readAsDataURL(c);

                            return false;
                        };
                    }
                });

                $("[data-parsley-validate]").each(function () {
                    var $this = $(this);

                    $this.parsley();
                    $this.find(".tab-content");

                    $.listen("parsley:field:success", function(e) {
                        var tabId = $(e.$element).closest(".tab-pane").attr("id"),
                            tabAnchors = $this.find('a[href$="#' + tabId + '"]');

                        tabAnchors.removeClass("tab-error");
                    });

                    $.listen("parsley:field:error", function(e) {
                        var tabId = $(e.$element).closest(".tab-pane").attr("id"),
                            tabAnchors = $this.find('a[href$="#' + tabId + '"]');

                        tabAnchors.addClass("tab-error");
                    });
                });

                $(".form-summernote").each(function() {
                    $(this).summernote({
                        height: 250,
                        lang: "pt-BR"
                    });
                });
            }
        },

        list = {
            init: function () {
                $(".nestable").each(function() {
                    $(this).nestable({
                        group: $(this).data("group")
                    });
                });

                $(".nestable-menu").each(function() {
                    var a = false,
                        target = $(this).data("target");

                    $(this).on("click", function(e) {
                        e.preventDefault();

                        if (a) {
                            a = false;
                            $(target).nestable("expandAll");
                        } else {
                            a = true;
                            $(target).nestable("collapseAll");
                        }
                    });
                });

                $(".sortable").each(function() {
                    $(this).sortable();
                });
            }
        },

        table = {
            init: function () {
                $(".checkall").on("click", function() {
                    $(this).closest("table").find(":checkbox").prop("checked", this.checked);
                });

                $(".checkrow").on("click", function() {
                    $(this).closest("tr").find(":checkbox").prop("checked", this.checked);
                });

                $(".checkcol").on("click", function() {
                    $(this).closest("table").find("." + $(this).data("check")).prop("checked", this.checked);
                });
            }
        },

        widget = {
            init: function () {
                $(".portlet").each(function() {
                    var $this = $(this);
                    $this.sortable({
                        connectWith: ".portlet",
                        iframeFix: !1,
                        items: $this.data("items"),
                        opacity: $this.data("opacity"),
                        helper: "original",
                        revert: true,
                        forceHelperSize: true,
                        placeholder: "sortable-box-placeholder round-all",
                        forcePlaceholderSize: true,
                        tolerance: "pointer"
                    });
                });

                $(".calendar").each(function() {
                    var $data = $(this);

                    $.ajax($data.data("url"), {
                        dataType: "json",
                        success: function(data) {
                            $data.calendar({
                                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                                days: ["D", "S", "T", "Q", "Q", "S", "S"],
                                events: data,
                                popover_options: {
                                    placement: "top",
                                    html: true
                                }
                            })
                        },
                        error: function(a, b, c) {
                            console.log(c);
                        }
                    });
                });
            }
        },

        menu = {
            init: function () {
                $('[data-ride="collapse"] a').on("click", function(e) {
                    var $target = $(e.target);

                    if(!$target.is("a"))
                        $target = $target.closest("a");

                    var $parentsActive = $target.parent().siblings(".active");

                    $parentsActive.toggleClass("active").find("> ul:visible").slideUp(200);

                    if($target.parent().hasClass("active"))
                        $target.next().slideUp(200);
                    else
                        $target.next().slideDown(200);

                    $target.parent().toggleClass("active");

                    if($target.next().is("ul"))
                        e.preventDefault();

                    setTimeout(function() {
                        $(document).trigger("updateNav");
                    }, 300);
                });

                $.fn.dropdown.Constructor.prototype.change = function(e) {
                    e.preventDefault();

                    var $target = $(e.target),
                        $input = $target.find("input"),
                        checked = $input.is(":checked"),
                        $menu = $target.closest(".dropdown-menu"),
                        $label = $menu.parent().find(".dropdown-label");

                    if (!$target.is("a"))
                        $target = $target.closest("a");

                    if (!$input.is(":disabled")) {
                        if (!checked)
                            if ("radio" === $input.attr("type"))
                                $menu.find("li").removeClass("active");

                        $target.parent().removeClass("active");

                        if (!checked)
                            $target.parent().addClass("active");

                        $input.prop("checked", !$input.prop("checked"));

                        var checkeds = $menu.find("li > a > input:checked");
                        if (checkeds.length) {
                            var strBuilder = [];

                            checkeds.each(function () {
                                var text = $.trim($(this).parent().text());
                                if (text)
                                    strBuilder.push(text);
                            });

                            if (strBuilder.length < 4)
                                strBuilder = strBuilder.join(", ");
                            else
                                strBuilder = strBuilder.length + " selected";

                            $label.html(strBuilder);
                        } else {
                            $label.html($label.data("placeholder"));
                        }
                    }

                }, $(".dropdown-select > li > a").on("click.dropdown-menu", $.fn.dropdown.Constructor.prototype.change);
            }
        },

        general = {
            init: function () {
                $("[data-toggle-class]").on("click", function(a) {
                    a.preventDefault();

                    var b,
                        c,
                        d,
                        e,
                        f = $(a.target);

                    if (!f.data("toggle-class"))
                        f = f.closest("[data-toggle-class]");

                    b = f.data("toggle-class");
                    c = f.data("target") || f.attr("href");

                    if (b)
                        d = b.split(",");

                    if (c)
                        e = c.split(",");

                    if (d && d.length)
                        $.each(e, function(a) {
                            if (-1 !== d[a].indexOf("*")) {
                                var b = new RegExp("\\s" + d[a].replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");

                                $(f).each(function(a, c) {
                                    for (var d = " " + c.className + " "; b.test(d);)
                                        d = d.replace(b, " ");

                                    c.className = $.trim(d);
                                });
                            }

                            if ("#" !== e[a])
                                $(e[a]).toggleClass(d[a]);
                            else
                                f.toggleClass(d[a]);
                        });

                    f.toggleClass("active");
                });

                $(".panel-toggle").on("click", function(e) {
                    e.preventDefault();
                    var c = $(e.target),
                        b = c.closest(".panel");
                       

                    if (!c.is("a"))
                        c = c.closest("a");

                    b.find(".panel-body").toggleClass("collapse");
                    c.toggleClass("active");
                });
            }
        },

        chart = {
            init: function () {
                $(".easypiechart").each(function () {
                    var $this = $(this),
                        data = $this.data(),
                        c = $this.find(".step"),
                        d = parseInt($(data.target, 10).text(), 10),
                        e = 0;

                    if (data.barColor) {
                        data.barColor = function(a) {
                            a /= 100;

                            return "rgb(" + Math.round(200 * a) + ", 200, " + Math.round(200 * (1 - a)) + ")";
                        }
                    }

                    data.onStep = function(a, f, g) {
                        e = g, c.text(parseInt(g, 10)), data.target && $(data.target).text(parseInt(g, 10) + d);
                    };

                    data.onStop = function() {
                        d = parseInt($(data.target).text(), 10);

                        if(data.update)
                            setTimeout(function () {
                                $this.data("easyPieChart").update(100 - e);
                            }, data.update);
                    };

                    $this.easyPieChart(data);
                });

                var sr,
                    sparkline = function($re) {
                        $(".sparkline").each(function() {
                            var $this = $(this),
                                data = $this.data();

                            if (!$re || data.resize) {
                                if ("pie" === data.type && data.sliceColors)
                                    data.sliceColors = eval(data.sliceColors);

                                if ("bar" === data.type && data.stackedBarColor)
                                    data.stackedBarColor = eval(data.stackedBarColor);

                                data.valueSpots = {
                                    "0:": data.spotColor
                                }

                                $this.sparkline("html", data);
                            }
                        });
                    };

                $(window).resize(function() {
                    clearTimeout(sr);

                    sr = setTimeout(function () {
                        sparkline(true);
                    }, 500);
                });

                sparkline(false);
            }
        },

        mobile = {
            init: function () {
                $(".no-touch .slim-scroll").each(function() {
                    var timeout,
                        $this = $(this),
                        data = $this.data();

                    $this.slimScroll(data), $(window).resize(function () {
                        clearTimeout(timeout);

                        timeout = setTimeout(function () {
                            $this.slimScroll(data);
                        }, 500);

                    }), $(document).on("updateNav", function() {
                        $this.slimScroll(data);
                    });
                });
            }
        },

        browser = {
            init: function () {
                $(".ie11 .vbox").each(function() {
                    $(this).height($(this).parent().height());
                });
            }
        },

        ie = {
            init: function () { }
        },

        onReady = {
            init: function () {
                page.init();
                footer.init();
                bootstrap.init();
                form.init();
                table.init();
                list.init();
                widget.init();
                menu.init();
                general.init();
                chart.init();
                mobile.init();
                browser.init();
                ie.init();
            }
        },

        onLoad = {
            init: function () { }
        },

        onResize = {
            init: function () {
                footer.init();
            }
        },

        onScroll = {
            init: function () { }
        }
    ;

    $(document).ready(onReady.init);
    $(window).load(onLoad.init);
    $(window).resize(onResize.init);
    $(window).scroll(onScroll.init);

})(jQuery);