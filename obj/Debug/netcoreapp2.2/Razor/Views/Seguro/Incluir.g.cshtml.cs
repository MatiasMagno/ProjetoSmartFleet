#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "166f56d2a12ab458dac247a943c493de190b8a90"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Seguro_Incluir), @"mvc.1.0.view", @"/Views/Seguro/Incluir.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Seguro/Incluir.cshtml", typeof(AspNetCore.Views_Seguro_Incluir))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"166f56d2a12ab458dac247a943c493de190b8a90", @"/Views/Seguro/Incluir.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Seguro_Incluir : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SmartFleet.Domain.ViewModel.Seguro>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-control"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeVeiculo"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeVeiculo", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("IdeSeguradora"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "IdeSeguradora", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 2 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
  
    ViewBag.Title = "Incluir Seguro";
    ViewBag.Current = " Cadastro / <a href='/Seguro/Pesquisar'>Seguro</a> / Incluir";

#line default
#line hidden
            BeginContext(177, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 7 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
 using (Html.BeginForm("Incluir", "Seguro", FormMethod.Post, new { @class = "form", @role = "form" }))
{

#line default
#line hidden
            BeginContext(286, 239, true);
            WriteLiteral("    <section class=\"panel panel-default\">\r\n        <article class=\"panel-body\">\r\n            <div class=\"row\">                 \r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(526, 75, false);
#line 14 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeVeiculo, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(601, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(627, 346, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "166f56d2a12ab458dac247a943c493de190b8a906424", async() => {
                BeginContext(873, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(903, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "166f56d2a12ab458dac247a943c493de190b8a906836", async() => {
                    BeginContext(920, 9, true);
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
                BeginContext(938, 26, true);
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
#line 18 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeVeiculo);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 19 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.Veiculo;

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
            BeginContext(973, 27, true);
            WriteLiteral(" \r\n                        ");
            EndContext();
            BeginContext(1001, 44, false);
#line 22 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeVeiculo));

#line default
#line hidden
            EndContext();
            BeginContext(1045, 164, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(1210, 78, false);
#line 27 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.IdeSeguradora, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(1288, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(1314, 358, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("select", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "166f56d2a12ab458dac247a943c493de190b8a9011310", async() => {
                BeginContext(1572, 30, true);
                WriteLiteral("\r\n                            ");
                EndContext();
                BeginContext(1602, 35, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "166f56d2a12ab458dac247a943c493de190b8a9011725", async() => {
                    BeginContext(1619, 9, true);
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
                BeginContext(1637, 26, true);
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
#line 31 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For = ModelExpressionProvider.CreateModelExpression(ViewData, __model => __model.IdeSeguradora);

#line default
#line hidden
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-for", __Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.For, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#line 32 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_SelectTagHelper.Items = ViewBag.Seguradora;

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
            BeginContext(1672, 27, true);
            WriteLiteral(" \r\n                        ");
            EndContext();
            BeginContext(1700, 47, false);
#line 35 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.IdeSeguradora));

#line default
#line hidden
            EndContext();
            BeginContext(1747, 256, true);
            WriteLiteral(@"
                    </div>
                </div>                             
            </div>            
            <div class=""row"">
                <div class=""col-md-3"">
                    <div class=""form-group"">
                        ");
            EndContext();
            BeginContext(2004, 76, false);
#line 42 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.NumApolice , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(2080, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2107, 67, false);
#line 43 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.NumApolice, new { @class = "form-control" }));

#line default
#line hidden
            EndContext();
            BeginContext(2174, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2201, 44, false);
#line 44 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.NumApolice));

#line default
#line hidden
            EndContext();
            BeginContext(2245, 177, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        ");
            EndContext();
            BeginContext(2423, 82, false);
#line 49 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DatVigenciaInicio, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(2505, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(2532, 631, false);
#line 50 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.DatVigenciaInicio, null, new
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
            BeginContext(3163, 165, true);
            WriteLiteral("\r\n                        <span class=\"form-control-feedback datepicker-click\" style=\"cursor:pointer\"><i class=\"fa fa-calendar\"></i></span>\r\n                        ");
            EndContext();
            BeginContext(3329, 51, false);
#line 62 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.DatVigenciaInicio));

#line default
#line hidden
            EndContext();
            BeginContext(3380, 195, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                  \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        ");
            EndContext();
            BeginContext(3576, 79, false);
#line 67 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DatVigenciaFim, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(3655, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(3682, 628, false);
#line 68 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.TextBoxFor(m => m.DatVigenciaFim, null, new
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
            BeginContext(4310, 165, true);
            WriteLiteral("\r\n                        <span class=\"form-control-feedback datepicker-click\" style=\"cursor:pointer\"><i class=\"fa fa-calendar\"></i></span>\r\n                        ");
            EndContext();
            BeginContext(4476, 48, false);
#line 80 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.DatVigenciaFim));

#line default
#line hidden
            EndContext();
            BeginContext(4524, 178, true);
            WriteLiteral("\r\n                    </div>\r\n                </div> \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        ");
            EndContext();
            BeginContext(4703, 79, false);
#line 85 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.DatContratacao, new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(4782, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(4809, 628, false);
#line 86 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.TextBoxFor(m => m.DatContratacao, null, new
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
            BeginContext(5437, 165, true);
            WriteLiteral("\r\n                        <span class=\"form-control-feedback datepicker-click\" style=\"cursor:pointer\"><i class=\"fa fa-calendar\"></i></span>\r\n                        ");
            EndContext();
            BeginContext(5603, 48, false);
#line 98 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.DatContratacao));

#line default
#line hidden
            EndContext();
            BeginContext(5651, 239, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>                       \r\n            </div>\r\n            <div class=\"row\">\r\n                 <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(5891, 75, false);
#line 105 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.VlrSeguro , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(5966, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(5993, 90, false);
#line 106 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.VlrSeguro, new { @class = "form-control money2", @maxlength="16" }));

#line default
#line hidden
            EndContext();
            BeginContext(6083, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6110, 43, false);
#line 107 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.VlrSeguro));

#line default
#line hidden
            EndContext();
            BeginContext(6153, 165, true);
            WriteLiteral("\r\n                    </div>\r\n                </div>\r\n                 <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
            EndContext();
            BeginContext(6319, 77, false);
#line 112 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.LabelFor(x => x.VlrFranquia , new { @class = "control-label required" }));

#line default
#line hidden
            EndContext();
            BeginContext(6396, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6423, 92, false);
#line 113 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.TextBoxFor(x => x.VlrFranquia, new { @class = "form-control money2", @maxlength="16" }));

#line default
#line hidden
            EndContext();
            BeginContext(6515, 26, true);
            WriteLiteral("\r\n                        ");
            EndContext();
            BeginContext(6542, 45, false);
#line 114 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
                   Write(Html.ValidationMessageFor(x => x.VlrFranquia));

#line default
#line hidden
            EndContext();
            BeginContext(6587, 339, true);
            WriteLiteral(@"
                    </div>
                </div>                                                
            </div>         
        </article>
         <footer class=""panel-footer"">
            <button type=""button"" class=""btn btn-primary submitForm"" data-loading=""false""><i class=""fa fa-save""></i> Salvar</button>
            <a");
            EndContext();
            BeginWriteAttribute("href", " href=", 6926, "", 6966, 1);
#line 121 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
WriteAttributeValue("", 6932, Url.Action("Pesquisar", "Seguro"), 6932, 34, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(6966, 103, true);
            WriteLiteral(" class=\"btn btn-default\"><i class=\"fa fa-close\"></i> Cancelar</a>\r\n        </footer> \r\n    </section>\r\n");
            EndContext();
#line 124 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Incluir.cshtml"
}

#line default
#line hidden
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SmartFleet.Domain.ViewModel.Seguro> Html { get; private set; }
    }
}
#pragma warning restore 1591
