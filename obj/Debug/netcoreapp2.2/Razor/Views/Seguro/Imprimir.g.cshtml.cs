#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "6319b47b74d21b3106cb2cd3697a5a30d5515118"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Seguro_Imprimir), @"mvc.1.0.view", @"/Views/Seguro/Imprimir.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Seguro/Imprimir.cshtml", typeof(AspNetCore.Views_Seguro_Imprimir))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"6319b47b74d21b3106cb2cd3697a5a30d5515118", @"/Views/Seguro/Imprimir.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Seguro_Imprimir : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<SmartFleet.Domain.ViewModel.Seguro>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("formRelatorio"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form hide"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("role", new global::Microsoft.AspNetCore.Html.HtmlString("form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
  
    Layout = "~/Views/Shared/_RelatorioHTML.cshtml";

#line default
#line hidden
            BeginContext(111, 19, true);
            WriteLiteral("<!doctype html>\r\n\r\n");
            EndContext();
            BeginContext(130, 17, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6319b47b74d21b3106cb2cd3697a5a30d55151184815", async() => {
                BeginContext(136, 4, true);
                WriteLiteral("\r\n\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(147, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(151, 3371, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6319b47b74d21b3106cb2cd3697a5a30d55151186005", async() => {
                BeginContext(157, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(163, 3350, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "6319b47b74d21b3106cb2cd3697a5a30d55151186392", async() => {
                    BeginContext(218, 248, true);
                    WriteLiteral("\r\n        <section class=\"panel panel-default\">\r\n            <article class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            ");
                    EndContext();
                    BeginContext(467, 63, false);
#line 18 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                       Write(Html.Label("Veiculo: ", null, new { @class = "control-label" }));

#line default
#line hidden
                    EndContext();
                    BeginContext(530, 36, true);
                    WriteLiteral("\r\n                            <span>");
                    EndContext();
                    BeginContext(567, 22, false);
#line 19 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                             Write(ViewBag.DscMarcaModelo);

#line default
#line hidden
                    EndContext();
                    BeginContext(589, 193, true);
                    WriteLiteral("</span>\r\n                        </div>\r\n                    </div>  \r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            ");
                    EndContext();
                    BeginContext(783, 66, false);
#line 24 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                       Write(Html.Label("Seguradora: ", null, new { @class = "control-label" }));

#line default
#line hidden
                    EndContext();
                    BeginContext(849, 36, true);
                    WriteLiteral("\r\n                            <span>");
                    EndContext();
                    BeginContext(886, 22, false);
#line 25 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                             Write(ViewBag.NomRazaoSocial);

#line default
#line hidden
                    EndContext();
                    BeginContext(908, 280, true);
                    WriteLiteral(@"</span>
                        </div>
                    </div>                 
                </div>
                <div class=""row"">
                    <div class=""col-md-3"">
                        <div class=""form-group has-feedback"">
                            ");
                    EndContext();
                    BeginContext(1189, 74, false);
#line 32 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                       Write(Html.Label("Início da Vigência: ", null, new { @class = "control-label" }));

#line default
#line hidden
                    EndContext();
                    BeginContext(1263, 37, true);
                    WriteLiteral(" \r\n                            <span>");
                    EndContext();
                    BeginContext(1301, 25, false);
#line 33 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                             Write(ViewBag.DatVigenciaInicio);

#line default
#line hidden
                    EndContext();
                    BeginContext(1326, 205, true);
                    WriteLiteral("</span>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group has-feedback\">\r\n                            ");
                    EndContext();
                    BeginContext(1532, 71, false);
#line 38 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                       Write(Html.Label("Fim da Vigência: ", null, new { @class = "control-label" }));

#line default
#line hidden
                    EndContext();
                    BeginContext(1603, 36, true);
                    WriteLiteral("\r\n                            <span>");
                    EndContext();
                    BeginContext(1640, 22, false);
#line 39 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                             Write(ViewBag.DatVigenciaFim);

#line default
#line hidden
                    EndContext();
                    BeginContext(1662, 835, true);
                    WriteLiteral(@"</span>
                        </div>
                    </div> 
                </div>
                <br>
                <div class=""panel panel-default hide datatable table-responsive"">
                    <table class=""table table-striped b-t b-light table-bordered table-hover datatable"">
                        <thead>
                            <th>Veículo</th>
                            <th>Seguradora</th>
                            <th>Número da Apólice</th>
                            <th>Data de Contratação</th>
                            <th>Início da Vigência</th>
                            <th>Fim da Vigência</th>
                            <th>Valor do Seguro</th>
                            <th>Valor da Franquia</th>
                        </thead>
                        <tbody>
");
                    EndContext();
#line 57 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                             foreach (var item in Model)
                            {

#line default
#line hidden
                    BeginContext(2586, 76, true);
                    WriteLiteral("                               <tr>\r\n                                   <td>");
                    EndContext();
                    BeginContext(2663, 27, false);
#line 60 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.Veiculo.DscMarcaModelo);

#line default
#line hidden
                    EndContext();
                    BeginContext(2690, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(2737, 30, false);
#line 61 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.Seguradora.NomRazaoSocial);

#line default
#line hidden
                    EndContext();
                    BeginContext(2767, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(2814, 15, false);
#line 62 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.NumApolice);

#line default
#line hidden
                    EndContext();
                    BeginContext(2829, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(2876, 42, false);
#line 63 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.DatContratacao.ToString("dd/MM/yyyy"));

#line default
#line hidden
                    EndContext();
                    BeginContext(2918, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(2965, 51, false);
#line 64 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.DatVigenciaInicio.Value.ToString("dd/MM/yyyy"));

#line default
#line hidden
                    EndContext();
                    BeginContext(3016, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(3063, 48, false);
#line 65 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.DatVigenciaFim.Value.ToString("dd/MM/yyyy"));

#line default
#line hidden
                    EndContext();
                    BeginContext(3111, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(3158, 28, false);
#line 66 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.VlrSeguro.ToString("C"));

#line default
#line hidden
                    EndContext();
                    BeginContext(3186, 46, true);
                    WriteLiteral("</td>\r\n                                   <td>");
                    EndContext();
                    BeginContext(3233, 30, false);
#line 67 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                                  Write(item.VlrFranquia.ToString("C"));

#line default
#line hidden
                    EndContext();
                    BeginContext(3263, 76, true);
                    WriteLiteral("</td>                               \r\n                               </tr>\r\n");
                    EndContext();
#line 69 "D:\Matias\Projetos\SmartFleet\Views\Seguro\Imprimir.cshtml"
                            }

#line default
#line hidden
                    BeginContext(3370, 136, true);
                    WriteLiteral("                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </article>\r\n        </section>\r\n    ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(3513, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3522, 2, true);
            WriteLiteral("\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<SmartFleet.Domain.ViewModel.Seguro>> Html { get; private set; }
    }
}
#pragma warning restore 1591
