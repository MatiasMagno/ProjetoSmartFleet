#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "40e46470202e4784c5577c38320e9c14df34351f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Colaborador_Incluir), @"mvc.1.0.view", @"/Views/Colaborador/Incluir.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Colaborador/Incluir.cshtml", typeof(AspNetCore.Views_Colaborador_Incluir))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "D:\Matias\Projetos\SmartFleet\Views\_ViewImports.cshtml"
using SmartFleet;

#line default
#line hidden
#line 2 "D:\Matias\Projetos\SmartFleet\Views\_ViewImports.cshtml"
using SmartFleet.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"40e46470202e4784c5577c38320e9c14df34351f", @"/Views/Colaborador/Incluir.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Colaborador_Incluir : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SmartFleet.Domain.ViewModel.Colaborador>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-control"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeTipoColaborador"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeTipoColaborador", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("onchange", new global::Microsoft.AspNetCore.Html.HtmlString("colaborador.onChangeColaborador(this)"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdcCategoriaCNH"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdcCategoriaCNH", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeUnidadeFederacaoCNH"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeUnidadeFederacaoCNH", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
  
    ViewBag.Title = "Incluir Colaborador";
    ViewBag.Current = " Cadastro / <a href='/Colaborador/Pesquisar'>Colaborador</a> / Incluir";

#line default
#line hidden
            BeginContext(197, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 7 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
 using (Html.BeginForm("Incluir", "Colaborador", FormMethod.Post, new { @class = "form", @role = "form" }))
{

#line default
#line hidden
            BeginContext(311, 222, true);
            WriteLiteral("    <section class=\"panel panel-default\">\r\n        <article class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(534, 79, false);
#line 14 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NomColaborador, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(613, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(640, 71, false);
#line 15 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NomColaborador, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(711, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(738, 48, false);
#line 16 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NomColaborador));

#line default
#line hidden
            EndContext();
            BeginContext(786, 164, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(951, 84, false);
#line 21 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeTipoColaborador , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(1035, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(1061, 460, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "40e46470202e4784c5577c38320e9c14df34351f8911", async() => {
                BeginContext(1421, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(1451, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "40e46470202e4784c5577c38320e9c14df34351f9325", async() => {
                    BeginContext(1468, 9, true);
                    WriteLiteral("Selecione");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1486, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Name = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
#line 26 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeTipoColaborador);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 27 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.TipoColaborador;

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-items", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1521, 27, true);
            WriteLiteral(" \r\n                        ");
            EndContext();
            BeginContext(1549, 52, false);
#line 30 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeTipoColaborador));

#line default
#line hidden
            EndContext();
            BeginContext(1601, 231, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(1833, 78, false);
#line 37 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumMatricula , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(1911, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(1938, 69, false);
#line 38 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumMatricula, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(2007, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2034, 46, false);
#line 39 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NumMatricula));

#line default
#line hidden
            EndContext();
            BeginContext(2080, 181, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                 \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(2262, 71, false);
#line 44 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumCPF, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(2333, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2360, 67, false);
#line 45 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumCPF, new { @class = "form-control cpf" }));

#line default
#line hidden
            EndContext();
            BeginContext(2427, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2454, 40, false);
#line 46 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NumCPF));

#line default
#line hidden
            EndContext();
            BeginContext(2494, 195, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        ");
            EndContext();
            BeginContext(2690, 69, false);
#line 51 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DatNascimento, new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(2759, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2786, 627, false);
#line 52 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.DatNascimento, null, new
                        {
                            @class = "form-control datePick",
                            @data_language = "pt-BR",
                            @data_mask = "99/99/9999",
                            @Placeholder = "__/__/____",
                            @data_date_format = "dd/mm/yyyy",
                            @data_data_min_view_mode = "days",
                            @data_date_start_view = "month",
                            @data_date_start_date = String.Format("{0:dd/mm/yyyy}", DateTime.MinValue)
                        }));

#line default
#line hidden
            EndContext();
            BeginContext(3413, 303, true);
            WriteLiteral(@"
                        <span class=""form-control-feedback datepicker-click"" style=""cursor:pointer""><i class=""fa fa-calendar""></i></span>
                    </div>
                </div>
                <div class=""col-md-3"">
                    <div class=""form-group"">
                        ");
            EndContext();
            BeginContext(3717, 73, false);
#line 68 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdcSexo , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(3790, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(3817, 354, false);
#line 69 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.DropDownListFor(x => x.IdcSexo, new SelectList(ViewBag.Sexo, "Value", "Text"), "Selecione",  new 
                        { 
                            @class = "form-control", 
                            @data_val = "true", 
                            @data_val_required = "Campo é de preenchimento obrigatório." 
                        }));

#line default
#line hidden
            EndContext();
            BeginContext(4171, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4198, 41, false);
#line 75 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdcSexo));

#line default
#line hidden
            EndContext();
            BeginContext(4239, 220, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>  \r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(4460, 63, false);
#line 83 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NomMae , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(4523, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4550, 63, false);
#line 84 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NomMae, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(4613, 181, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                \r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(4795, 63, false);
#line 89 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NomPai , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(4858, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4885, 63, false);
#line 90 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NomPai, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(4948, 218, true);
            WriteLiteral("\r\n                    </div>\r\n                </div> \r\n            </div>\r\n            <div class=\"row\"> \r\n                 <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(5167, 76, false);
#line 97 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumCelular , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(5243, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(5270, 117, false);
#line 98 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumCelular, new { @class = "form-control phone-cell-mask", @placeholder = "(__) _____-____" }));

#line default
#line hidden
            EndContext();
            BeginContext(5387, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(5414, 44, false);
#line 99 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NumCelular));

#line default
#line hidden
            EndContext();
            BeginContext(5458, 171, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>      \r\n                 <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(5630, 68, false);
#line 104 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumTelefone , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(5698, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(5725, 117, false);
#line 105 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumTelefone, new { @class = "form-control phone-home-mask", @placeholder = "(__) ____-____" }));

#line default
#line hidden
            EndContext();
            BeginContext(5842, 181, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                \r\n                 <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(6024, 74, false);
#line 110 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DscEmail , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(6098, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6125, 65, false);
#line 111 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.DscEmail, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(6190, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6217, 42, false);
#line 112 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.DscEmail));

#line default
#line hidden
            EndContext();
            BeginContext(6259, 232, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                 \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(6492, 72, false);
#line 119 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdcCategoriaCNH , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(6564, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6590, 366, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "40e46470202e4784c5577c38320e9c14df34351f25883", async() => {
                BeginContext(6856, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(6886, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "40e46470202e4784c5577c38320e9c14df34351f26298", async() => {
                    BeginContext(6903, 9, true);
                    WriteLiteral("Selecione");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(6921, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Name = (string)__tagHelperAttribute_6.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_6);
#line 123 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdcCategoriaCNH);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 124 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.CategoriaCNH;

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-items", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(6956, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6983, 49, false);
#line 127 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdcCategoriaCNH));

#line default
#line hidden
            EndContext();
            BeginContext(7032, 166, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(7199, 63, false);
#line 132 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumCNH , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(7262, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(7289, 63, false);
#line 133 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumCNH, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(7352, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(7379, 40, false);
#line 134 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NumCNH));

#line default
#line hidden
            EndContext();
            BeginContext(7419, 178, true);
            WriteLiteral("\r\n                    </div>\r\n                </div> \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        ");
            EndContext();
            BeginContext(7598, 70, false);
#line 139 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DatValidadeCNH, new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(7668, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(7695, 628, false);
#line 140 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.DatValidadeCNH, null, new
                        {
                            @class = "form-control datePick",
                            @data_language = "pt-BR",
                            @data_mask = "99/99/9999",
                            @Placeholder = "__/__/____",
                            @data_date_format = "dd/mm/yyyy",
                            @data_data_min_view_mode = "days",
                            @data_date_start_view = "month",
                            @data_date_start_date = String.Format("{0:dd/mm/yyyy}", DateTime.MinValue)
                        }));

#line default
#line hidden
            EndContext();
            BeginContext(8323, 165, true);
            WriteLiteral("\r\n                        <span class=\"form-control-feedback datepicker-click\" style=\"cursor:pointer\"><i class=\"fa fa-calendar\"></i></span>\r\n                        ");
            EndContext();
            BeginContext(8489, 48, false);
#line 152 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.DatValidadeCNH));

#line default
#line hidden
            EndContext();
            BeginContext(8537, 166, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(8704, 79, false);
#line 157 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeUnidadeFederacaoCNH , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(8783, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(8809, 391, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "40e46470202e4784c5577c38320e9c14df34351f34212", async() => {
                BeginContext(9100, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(9130, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "40e46470202e4784c5577c38320e9c14df34351f34627", async() => {
                    BeginContext(9147, 9, true);
                    WriteLiteral("Selecione");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(9165, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Name = (string)__tagHelperAttribute_8.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_8);
#line 161 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeUnidadeFederacaoCNH);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 162 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.UnidadeFederacao;

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-items", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(9200, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(9227, 56, false);
#line 165 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeUnidadeFederacaoCNH));

#line default
#line hidden
            EndContext();
            BeginContext(9283, 294, true);
            WriteLiteral(@"
                    </div>
                </div>  
            </div>          
        </article>
         <footer class=""panel-footer"">
            <button type=""button"" class=""btn btn-primary submitForm"" data-loading=""false""><i class=""fa fa-save""></i> Salvar</button>
            <a");
            EndContext();
            BeginWriteAttribute("href", " href=", 9577, "", 9622, 1);
#line 172 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
WriteAttributeValue("", 9583, Url.Action("Pesquisar", "Colaborador"), 9583, 39, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(9622, 103, true);
            WriteLiteral(" class=\"btn btn-default\"><i class=\"fa fa-close\"></i> Cancelar</a>\r\n        </footer> \r\n    </section>\r\n");
            EndContext();
#line 175 "D:\Matias\Projetos\SmartFleet\Views\Colaborador\Incluir.cshtml"
}

#line default
#line hidden
            BeginContext(9728, 6, true);
            WriteLiteral("\r\n\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SmartFleet.Domain.ViewModel.Colaborador> Html { get; private set; }
    }
}
#pragma warning restore 1591