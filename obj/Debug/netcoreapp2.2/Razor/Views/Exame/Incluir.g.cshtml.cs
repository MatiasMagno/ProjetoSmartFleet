#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "74c4643321bbe364b79868f858a8b6cdaa9767ba"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Exame_Incluir), @"mvc.1.0.view", @"/Views/Exame/Incluir.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Exame/Incluir.cshtml", typeof(AspNetCore.Views_Exame_Incluir))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"74c4643321bbe364b79868f858a8b6cdaa9767ba", @"/Views/Exame/Incluir.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Exame_Incluir : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SmartFleet.Domain.ViewModel.Exame>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-control"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeColaborador"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeColaborador", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeLaboratorio"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeLaboratorio", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeUFCRMMedico"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeUFCRMMedico", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 2 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
  
    ViewBag.Title = "Incluir Exame Médico";
    ViewBag.Current = " Cadastro / <a href='/Exame/Pesquisar'>Exame</a> / Incluir";

#line default
#line hidden
            BeginContext(180, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 7 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
 using (Html.BeginForm("Incluir", "Exame", FormMethod.Post, new { @class = "form", @role = "form" }))
{

#line default
#line hidden
            BeginContext(288, 222, true);
            WriteLiteral("    <section class=\"panel panel-default\">\r\n        <article class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(511, 79, false);
#line 14 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeColaborador, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(590, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(616, 362, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "74c4643321bbe364b79868f858a8b6cdaa9767ba7067", async() => {
                BeginContext(878, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(908, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "74c4643321bbe364b79868f858a8b6cdaa9767ba7479", async() => {
                    BeginContext(925, 9, true);
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
                BeginContext(943, 26, true);
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
#line 18 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeColaborador);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 19 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.Colaborador;

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
            BeginContext(978, 27, true);
            WriteLiteral(" \r\n                        ");
            EndContext();
            BeginContext(1006, 48, false);
#line 22 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeColaborador));

#line default
#line hidden
            EndContext();
            BeginContext(1054, 226, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>           \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(1281, 79, false);
#line 29 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeLaboratorio, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(1360, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(1386, 362, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "74c4643321bbe364b79868f858a8b6cdaa9767ba12030", async() => {
                BeginContext(1648, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(1678, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "74c4643321bbe364b79868f858a8b6cdaa9767ba12445", async() => {
                    BeginContext(1695, 9, true);
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
                BeginContext(1713, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Name = (string)__tagHelperAttribute_5.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
#line 33 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeLaboratorio);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 34 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.Laboratorio;

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
            BeginContext(1748, 27, true);
            WriteLiteral(" \r\n                        ");
            EndContext();
            BeginContext(1776, 48, false);
#line 37 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeLaboratorio));

#line default
#line hidden
            EndContext();
            BeginContext(1824, 195, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        ");
            EndContext();
            BeginContext(2020, 73, false);
#line 42 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DatExame, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(2093, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2120, 622, false);
#line 43 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.DatExame, null, new
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
            BeginContext(2742, 165, true);
            WriteLiteral("\r\n                        <span class=\"form-control-feedback datepicker-click\" style=\"cursor:pointer\"><i class=\"fa fa-calendar\"></i></span>\r\n                        ");
            EndContext();
            BeginContext(2908, 42, false);
#line 55 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.DatExame));

#line default
#line hidden
            EndContext();
            BeginContext(2950, 164, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(3115, 74, false);
#line 60 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.CodExame , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(3189, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(3216, 65, false);
#line 61 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.CodExame, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(3281, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(3308, 42, false);
#line 62 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.CodExame));

#line default
#line hidden
            EndContext();
            BeginContext(3350, 247, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                                \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(3598, 74, false);
#line 69 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NomMedico, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(3672, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(3699, 66, false);
#line 70 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NomMedico, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(3765, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(3792, 43, false);
#line 71 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NomMedico));

#line default
#line hidden
            EndContext();
            BeginContext(3835, 182, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(4018, 77, false);
#line 76 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumCRMMedico, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(4095, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4122, 69, false);
#line 77 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumCRMMedico, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(4191, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4218, 46, false);
#line 78 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NumCRMMedico));

#line default
#line hidden
            EndContext();
            BeginContext(4264, 182, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(4447, 80, false);
#line 83 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeUFCRMMedico , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(4527, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4553, 362, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "74c4643321bbe364b79868f858a8b6cdaa9767ba23083", async() => {
                BeginContext(4815, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(4845, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "74c4643321bbe364b79868f858a8b6cdaa9767ba23498", async() => {
                    BeginContext(4862, 9, true);
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
                BeginContext(4880, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Name = (string)__tagHelperAttribute_7.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_7);
#line 87 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeUFCRMMedico);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 88 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.UFCRMMedico;

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
            BeginContext(4915, 27, true);
            WriteLiteral(" \r\n                        ");
            EndContext();
            BeginContext(4943, 48, false);
#line 91 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeUFCRMMedico));

#line default
#line hidden
            EndContext();
            BeginContext(4991, 236, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                   \r\n            </div>\r\n            <div class=\"row\">\r\n                 <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(5228, 70, false);
#line 98 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DscObservacao , new { @class = "control-label" }));

#line default
#line hidden
            EndContext();
            BeginContext(5298, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(5325, 82, false);
#line 99 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
                   Write(Html.TextAreaFor(x => x.DscObservacao, new { @class = "form-control", @rows = 3 }));

#line default
#line hidden
            EndContext();
            BeginContext(5407, 298, true);
            WriteLiteral(@"
                    </div>
                </div>                
            </div>
        </article>
         <footer class=""panel-footer"">
            <button type=""button"" class=""btn btn-primary submitForm"" data-loading=""false""><i class=""fa fa-save""></i> Salvar</button>
            <a");
            EndContext();
            BeginWriteAttribute("href", " href=", 5705, "", 5744, 1);
#line 106 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
WriteAttributeValue("", 5711, Url.Action("Pesquisar", "Exame"), 5711, 33, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(5744, 103, true);
            WriteLiteral(" class=\"btn btn-default\"><i class=\"fa fa-close\"></i> Cancelar</a>\r\n        </footer> \r\n    </section>\r\n");
            EndContext();
#line 109 "D:\Matias\Projetos\SmartFleet\Views\Exame\Incluir.cshtml"
}

#line default
#line hidden
            BeginContext(5850, 6, true);
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SmartFleet.Domain.ViewModel.Exame> Html { get; private set; }
    }
}
#pragma warning restore 1591
