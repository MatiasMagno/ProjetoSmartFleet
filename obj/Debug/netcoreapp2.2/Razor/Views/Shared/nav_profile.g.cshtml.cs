#pragma checksum "D:\Matias\Projetos\SmartFleet\Views\Shared\nav_profile.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "eff3042c16909f05a86ca2783a7e47af3bff3d8c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_nav_profile), @"mvc.1.0.view", @"/Views/Shared/nav_profile.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/nav_profile.cshtml", typeof(AspNetCore.Views_Shared_nav_profile))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"eff3042c16909f05a86ca2783a7e47af3bff3d8c", @"/Views/Shared/nav_profile.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4feb109688fb002ea6b7daaadc9fc6054384da92", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_nav_profile : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "D:\Matias\Projetos\SmartFleet\Views\Shared\nav_profile.cshtml"
  
    Layout = null;

#line default
#line hidden
            BeginContext(27, 184, true);
            WriteLiteral("<div class=\"clearfix wrapper dk nav-user hidden-xs\">\r\n    <div class=\"dropdown\">\r\n        <figure class=\"thumb avatar pull-left m-r\">\r\n            <img src=\"/images/profile/avatar.png\"");
            EndContext();
            BeginWriteAttribute("alt", " alt=\"", 211, "\"", 237, 1);
#line 7 "D:\Matias\Projetos\SmartFleet\Views\Shared\nav_profile.cshtml"
WriteAttributeValue("", 217, ViewBag.NomeUsuario, 217, 20, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(238, 189, true);
            WriteLiteral(" class=\"dker\">\r\n            <i class=\"on md b-black\"></i>\r\n        </figure>\r\n        <span class=\"hidden-nav-xs clear\">\r\n            <span class=\"m-b-xs text-black\">\r\n                <!-- ");
            EndContext();
            BeginContext(468, 110, true);
            WriteLiteral(" -->\r\n                <strong>Matias Magno Rodrigues Silveira</strong>\r\n            </span>\r\n            <!-- ");
            EndContext();
            BeginContext(646, 41, true);
            WriteLiteral(" -->\r\n        </span>\r\n    </div>\r\n</div>");
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
