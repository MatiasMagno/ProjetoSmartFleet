#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "bcbee59ff26ce0730d44b8d104939404ade7bff8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Produto_Pesquisar), @"mvc.1.0.view", @"/Views/Produto/Pesquisar.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Produto/Pesquisar.cshtml", typeof(AspNetCore.Views_Produto_Pesquisar))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"bcbee59ff26ce0730d44b8d104939404ade7bff8", @"/Views/Produto/Pesquisar.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Produto_Pesquisar : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SmartFleet.Domain.ViewModel.Produto>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("formPesquisar"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("role", new global::Microsoft.AspNetCore.Html.HtmlString("form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("form-result"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml"
  
    ViewBag.Title = "Pesquisar Produto";
    Layout = "~/Views/Shared/_Layout.cshtml";
    ViewBag.Current = " Cadastro / Produto / Pesquisar";

#line default
#line hidden
            BeginContext(199, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(201, 1353, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "bcbee59ff26ce0730d44b8d104939404ade7bff84964", async() => {
                BeginContext(251, 225, true);
                WriteLiteral("\r\n    <section class=\"panel panel-default\">\r\n        <article class=\"panel-body\">\r\n            <div class=\"row\">\r\n                 <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        ");
                EndContext();
                BeginContext(477, 66, false);
#line 14 "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml"
                   Write(Html.LabelFor(x => x.CodProduto, new { @class = "control-label" }));

#line default
#line hidden
                EndContext();
                BeginContext(543, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
                BeginContext(570, 67, false);
#line 15 "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml"
                   Write(Html.TextBoxFor(x => x.CodProduto, new { @class = "form-control" }));

#line default
#line hidden
                EndContext();
                BeginContext(637, 179, true);
                WriteLiteral("\r\n                    </div>\r\n                </div>               \r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        ");
                EndContext();
                BeginContext(817, 66, false);
#line 20 "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml"
                   Write(Html.LabelFor(x => x.NomProduto, new { @class = "control-label" }));

#line default
#line hidden
                EndContext();
                BeginContext(883, 26, true);
                WriteLiteral("\r\n                        ");
                EndContext();
                BeginContext(910, 66, false);
#line 21 "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml"
                   Write(Html.TextBoxFor(x => x.NomProduto, new { @class = "form-control"}));

#line default
#line hidden
                EndContext();
                BeginContext(976, 425, true);
                WriteLiteral(@"
                    </div>
                </div>                  
            </div>
        </article>
        <footer class=""panel-footer"">
            <button type=""button"" class=""btn btn-primary btnPesquisar""><i class=""fa fa-search""></i> Pesquisar</button>
            <button type=""button"" class=""btn btn-default btn-reset-form"" data-loading=""false""><i class=""fa fa-eraser""></i> Limpar</button>
            <a");
                EndContext();
                BeginWriteAttribute("href", " href=", 1401, "", 1440, 1);
#line 29 "D:\Matias\Projetos\SmartFleet\Views\Produto\Pesquisar.cshtml"
WriteAttributeValue("", 1407, Url.Action("Incluir", "Produto"), 1407, 33, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(1440, 107, true);
                WriteLiteral(" class=\"btn btn-default\"><i class=\"fa fa-plus-circle\"></i> Incluir</a>\r\n        </footer>\r\n    </section>\r\n");
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
            BeginContext(1554, 32, true);
            WriteLiteral("\r\n\r\n<!--Datatable Pesquisar-->\r\n");
            EndContext();
            BeginContext(1586, 632, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "bcbee59ff26ce0730d44b8d104939404ade7bff89722", async() => {
                BeginContext(1634, 577, true);
                WriteLiteral(@"
    <div class=""panel panel-default hide datatable table-responsive"">
        <table id=""gridResultado""
               class=""table table-striped b-t b-light table-bordered table-hover datatable""
               data-crud=""true""
               data-form-id=""formPesquisar""
               data-object-id=""ideProduto""
               data-controller=""Produto""
               data-function-column=""onColumnGrid""
               data-columns-data=""codProduto,nomProduto""
               data-columns-title=""Código do Produto,Nome do Produto"">
        </table>
    </div>
");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
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
            BeginContext(2218, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            DefineSection("customsJs", async() => {
                BeginContext(2242, 295, true);
                WriteLiteral(@"
    <script type=""text/javascript"">
    
        var validator = $( ""#formPesquisar"" ).validate();
        validator.resetForm();

        function onColumnGrid(data) 
        {
            data.columns[0].width = ""25%"";
            return data;            
        }
    </script>
");
                EndContext();
            }
            );
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SmartFleet.Domain.ViewModel.Produto> Html { get; private set; }
    }
}
#pragma warning restore 1591