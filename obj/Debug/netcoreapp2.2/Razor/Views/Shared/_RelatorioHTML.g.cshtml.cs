#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a71b4fdc8728d51ace0f8554d3a280fd6bc705c7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__RelatorioHTML), @"mvc.1.0.view", @"/Views/Shared/_RelatorioHTML.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/_RelatorioHTML.cshtml", typeof(AspNetCore.Views_Shared__RelatorioHTML))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a71b4fdc8728d51ace0f8554d3a280fd6bc705c7", @"/Views/Shared/_RelatorioHTML.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__RelatorioHTML : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
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
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 27, true);
            WriteLiteral("<!DOCTYPE html>\r\n\r\n<html>\r\n");
            EndContext();
            BeginContext(27, 2803, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "a71b4fdc8728d51ace0f8554d3a280fd6bc705c73350", async() => {
                BeginContext(33, 72, true);
                WriteLiteral("\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <title>");
                EndContext();
                BeginContext(106, 14, false);
#line 6 "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml"
      Write(ViewBag.Titulo);

#line default
#line hidden
                EndContext();
                BeginContext(120, 1902, true);
                WriteLiteral(@"</title>

    <style type=""text/css"">

        body {
            margin: 0px;
            font-family: ""Open Sans"",""Helvetica Neue"",Helvetica,Arial,sans-serif;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        td {
            border: 1px solid #545454;
            padding: 2px;
            text-align: left;
            font-size: 16px;
        }

        th {
            border: 1px solid #545454;
            padding: 5px;
            text-align: left;
            background-color: #b5b5b5;
            font-size: 16px;
        }

        .Corpo {
            padding-left: 10px;
            padding-right: 10px;
            font-size: 12px;
            /*width: 1024px;*/
            left: 50%;
            margin: auto;
        }

        p {
            text-align: justify;
        }

        .semBorda {
            border: none;
        }

        .btn {
            display: inline-block;
            p");
                WriteLiteral(@"adding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
        }

        .btn-primary {
            color: #fff;
            background-color: #337ab7;
            border-color: #2e6da4;
        }

        footer {
            margin: 20px 0;
            font-size: 14px;
        }

        ");
                EndContext();
                BeginContext(2023, 800, true);
                WriteLiteral(@"@media print {
            .no-print {
                display: none !important;
            }

            /***** Faz com que a quebra de linha fique correta *****/
            thead {
                display: table-row-group;
            }

            tfoot {
                display: table-row-group;
            }

            tr {
                page-break-inside: avoid;
            }
            /*******************************************************/
            th {
                border: 1px solid black;
                padding: 5px;
                text-align: left;
                background-color: #a8a8a8;
                background-color: #a8a8a8 !important;
                -webkit-print-color-adjust: exact;
            }
        }

    </style>
");
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
            BeginContext(2830, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(2832, 1014, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "a71b4fdc8728d51ace0f8554d3a280fd6bc705c77799", async() => {
                BeginContext(2838, 596, true);
                WriteLiteral(@"
    <header class=""no-print"" style=""height: 45px; width: 100%; background-color: #5f5f5f; margin-bottom: 20px;"">
        <button class=""btn btn-primary print-default"" style=""float: right; margin: 5px 20px 5px 5px;"" data-loading=""false"" onclick=""window.print();"">Imprimir</button>
    </header>

    <div class=""Corpo"">
        <table>
            <tbody>
                <tr>
                    <td class=""semBorda"" style=""width:12%"">
                        <img src=""/images/Smartfleet.png"">
                    </td>
                    <td class=""semBorda"" style=""width: 88%"">
");
                EndContext();
#line 128 "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml"
                         if (ViewBag.Titulo != null) { 

#line default
#line hidden
                BeginContext(3491, 35, true);
                WriteLiteral("                            <h2><b>");
                EndContext();
                BeginContext(3527, 14, false);
#line 129 "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml"
                              Write(ViewBag.Titulo);

#line default
#line hidden
                EndContext();
                BeginContext(3541, 11, true);
                WriteLiteral("</b></h2>\r\n");
                EndContext();
#line 130 "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml"
                        }

#line default
#line hidden
                BeginContext(3579, 100, true);
                WriteLiteral("                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        ");
                EndContext();
                BeginContext(3680, 12, false);
#line 136 "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml"
   Write(RenderBody());

#line default
#line hidden
                EndContext();
                BeginContext(3692, 34, true);
                WriteLiteral("\r\n\r\n        <footer>\r\n            ");
                EndContext();
                BeginContext(3728, 77, false);
#line 139 "D:\Matias\Projetos\SmartFleet\Views\Shared\_RelatorioHTML.cshtml"
        Write(string.Format("{0} {1}", "Data: ", DateTime.Now.ToString("dd/MM/yyyy hh:mm")));

#line default
#line hidden
                EndContext();
                BeginContext(3806, 33, true);
                WriteLiteral("\r\n        </footer>\r\n    </div>\r\n");
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
            BeginContext(3846, 11, true);
            WriteLiteral("\r\n</html>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
