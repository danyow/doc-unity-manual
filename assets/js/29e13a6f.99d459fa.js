"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29733],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={id:"roslyn-analyzers",title:"Roslyn analyzers and source generators",slug:"/scripting-setting-up/roslyn-analyzers"},i="Roslyn analyzers and source generators",p={unversionedId:"scripting-section/scripting-setting-up/roslyn-analyzers",id:"scripting-section/scripting-setting-up/roslyn-analyzers",title:"Roslyn analyzers and source generators",description:"Use Roslyn analyzers, source generators and ruleset files in Unity projects to inspect your code for style, quality, and other issues.",source:"@site/docs/scripting-section/scripting-setting-up/roslyn-analyzers.md",sourceDirName:"scripting-section/scripting-setting-up",slug:"/scripting-setting-up/roslyn-analyzers",permalink:"/doc-unity-manual/docs/scripting-setting-up/roslyn-analyzers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/scripting-setting-up/roslyn-analyzers.md",tags:[],version:"current",frontMatter:{id:"roslyn-analyzers",title:"Roslyn analyzers and source generators",slug:"/scripting-setting-up/roslyn-analyzers"},sidebar:"tutorialSidebar",previous:{title:"Debug C# code in Unity",permalink:"/doc-unity-manual/docs/scripting-setting-up/managed-code-debugging"},next:{title:"\u96c6\u6210\u5f00\u53d1\u73af\u5883 (IDE) \u652f\u6301",permalink:"/doc-unity-manual/docs/scripting-setting-up/scripting-tools-ides"}},u={},c=[{value:"Source generators",id:"source-generators",level:2},{value:"Analyzer scope",id:"analyzer-scope",level:2},{value:"Report analyzer diagnostics",id:"report-analyzer-diagnostics",level:2},{value:"Installing an existing Roslyn analyzer or source generator",id:"installing-an-existing-roslyn-analyzer-or-source-generator",level:2},{value:"\u89c4\u5219\u96c6\u6587\u4ef6",id:"\u89c4\u5219\u96c6\u6587\u4ef6",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b\uff1a\u5728 Unity \u4e2d\u6d4b\u8bd5\u89c4\u5219\u96c6\u6587\u4ef6",id:"\u5de5\u4f5c\u6d41\u7a0b\u5728-unity-\u4e2d\u6d4b\u8bd5\u89c4\u5219\u96c6\u6587\u4ef6",level:3},{value:"\u6b65\u9aa4 1\uff1a\u8bbe\u7f6e\u89c4\u5219\u96c6\u6587\u4ef6",id:"\u6b65\u9aa4-1\u8bbe\u7f6e\u89c4\u5219\u96c6\u6587\u4ef6",level:4},{value:"\u7b2c 2 \u6b65\uff1a\u91cd\u65b0\u52a0\u8f7d\u9879\u76ee",id:"\u7b2c-2-\u6b65\u91cd\u65b0\u52a0\u8f7d\u9879\u76ee",level:4},{value:"\u7b2c 3 \u6b65\uff1a\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89c4\u5219\u96c6",id:"\u7b2c-3-\u6b65\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89c4\u5219\u96c6",level:4},{value:"\u66f4\u591a\u5206\u6790\u5668",id:"\u66f4\u591a\u5206\u6790\u5668",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roslyn-analyzers-and-source-generators"},"Roslyn analyzers and source generators"),(0,a.kt)("p",null,"Use Roslyn analyzers, source generators and ruleset files in Unity projects to inspect your code for style, quality, and other issues."),(0,a.kt)("p",null,"You can use existing analyzer libraries to inspect your code, and write your own analyzers to promote the best practices or conventions within your organization. This page explains how to use Roslyn analyzers and source generators in an empty Unity Project."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note")," : Roslyn analyzers are only compatible with the IDEs that Unity publically supports, which are Visual Studio and JetBrains Rider."),(0,a.kt)("p",null,"For more information about how to write and use Roslyn analyzers, see Microsoft\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/code-quality/use-roslyn-analyzers?view=vs-2019"},"Analyzer Configuration")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/extensibility/getting-started-with-roslyn-analyzers?view=vs-2019"},"Get started with Roslyn analyzers")," documentation."),(0,a.kt)("h2",{id:"source-generators"},"Source generators"),(0,a.kt)("p",null,"You can use source generators as an additional step in your script compilation process. You can use source generators to add new code while you compile your existing code. Like analyzers, you can use existing source generators or create your own."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note")," : Unity only supports version 6.0.0-preview of the \u2018System.Text.Json\u2019 namespace. If you want to use this namespace in your application, ensure you use version 6.0.0-preview. For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Text.Json"),", see Microsoft\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.json?view=net-6.0"},"System.Text.Json Namespace documentation"),"."),(0,a.kt)("p",null,"To set up a source generator using Visual Studio:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Visual Studio, create a .NET standard library project that targets .NET Standard 2.0."),(0,a.kt)("li",{parentName:"ol"},"Install the Microsoft.CodeAnalysis NuGet package. Your source generator must use ",(0,a.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Microsoft.CodeAnalysis.CSharp/3.8.0"},"Microsoft.CodeAnalysis 3.8")," to work with Unity."),(0,a.kt)("li",{parentName:"ol"},"In your Visual Studio project, create a new C# file and add the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using Microsoft.CodeAnalysis;\nusing Microsoft.CodeAnalysis.Text;\nusing System.Text;\n\nnamespace ExampleSourceGenerator\n{\n    [Generator]\n    public class ExampleSourceGenerator : ISourceGenerator\n    {\n        public void Execute(GeneratorExecutionContext context)\n        {\n            System.Console.WriteLine(System.DateTime.Now.ToString());\n\n            var sourceBuilder = new StringBuilder(\n            @"\n            using System;\n            namespace ExampleSourceGenerated\n            {\n                public static class ExampleSourceGenerated\n                {\n                    public static string GetTestText() \n                    {\n                        return ""This is from source generator ");\n\n            sourceBuilder.Append(System.DateTime.Now.ToString());\n\n            sourceBuilder.Append(\n                @""";\n                    }\n    }\n}\n");\n\n            context.AddSource("exampleSourceGenerator", SourceText.From(sourceBuilder.ToString(), Encoding.UTF8));\n        }\n\n        public void Initialize(GeneratorInitializationContext context) { }\n    }\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Build your source generator for release. Tod do this, go to  ",(0,a.kt)("strong",{parentName:"li"},"Build"),"  and select the  ",(0,a.kt)("strong",{parentName:"li"},"Batch Build"),"  option."),(0,a.kt)("li",{parentName:"ol"},"In your source generator\u2019s project folder, find the bin/Release/netstandard2.0/ExampleSourceGenerator.dll file."),(0,a.kt)("li",{parentName:"ol"},"Copy this file into your Unity project, inside the Assets folder."),(0,a.kt)("li",{parentName:"ol"},"Inside the Asset Browser, click on the .dll file to open the Plugin Inspector window."),(0,a.kt)("li",{parentName:"ol"},"Go to  ",(0,a.kt)("strong",{parentName:"li"},"Select platforms"),"  for plugin and disable  ",(0,a.kt)("strong",{parentName:"li"},"Any Platform")," ."),(0,a.kt)("li",{parentName:"ol"},"Go to  ",(0,a.kt)("strong",{parentName:"li"},"Include Platforms"),"  and disable  ",(0,a.kt)("strong",{parentName:"li"},"Editor"),"  and  ",(0,a.kt)("strong",{parentName:"li"},"Standalone")," ."),(0,a.kt)("li",{parentName:"ol"},"Go to  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  and open the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  sub-menu."),(0,a.kt)("li",{parentName:"ol"},"Create and assign a new label called  ",(0,a.kt)("strong",{parentName:"li"},"RoslynAnalyzer")," . To do this, enter \u201c ",(0,a.kt)("strong",{parentName:"li"},"RoslynAnalyzer")," \u201d into the text input window in the Asset Labels sub-menu. This label must match exactly and is case sensitive. After you create the label for the first analyzer, The label appears in the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  sub-menu. You can click on the name of the label in the menu to assign it to other analyzers."),(0,a.kt)("li",{parentName:"ol"},"To test the source generator is working, create a new C# script in the editor with the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using UnityEngine;\n\npublic class HelloFromSourceGenerator : MonoBehaviour\n{\n    static string GetStringFromSourceGenerator()\n    {\n        return ExampleSourceGenerated.ExampleSourceGenerated.GetTestText();\n    }\n\n    // Start is called before the first frame update\n    void Start()\n    {\n        var output = "Test";\n        output = GetStringFromSourceGenerator();\n        Debug.Log(output);\n    }\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add this script to a GameObject in the scene and enter Play mode. You should see a message from the source generator in the Console window, including the time stamp.")),(0,a.kt)("p",null,"For more information about source generators, see Microsoft\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview"},"Source Generators documentation"),"."),(0,a.kt)("h2",{id:"analyzer-scope"},"Analyzer scope"),(0,a.kt)("p",null,"You can limit the scope of analyzers in your project by using assembly definitions, so that they only analyze certain portions of your code."),(0,a.kt)("p",null,"Unity applies analyzers to all assemblies in your project\u2019s Assets folder, or in any subfolder whose parent folder doesn\u2019t contain an ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/script-compilation-assembly-definition-files"},"assembly definition file"),". If an analyzer is in a folder that contains an assembly definition, or a subfolder of such a folder, the analyzer only applies to the assembly generated from that assembly definition, and to any other assembly that references it."),(0,a.kt)("p",null,"This means, for example, that a ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list"},"package")," can supply analyzers that only analyze code related to the package, which can help package users to use the package API correctly."),(0,a.kt)("h2",{id:"report-analyzer-diagnostics"},"Report analyzer diagnostics"),(0,a.kt)("p",null,"To view information such as the total execution time of your analyzers and source generators or the relative execution times of each analyzer or source generator, go to  ",(0,a.kt)("strong",{parentName:"p"},"Preferences"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Diagnostic Switches"),"  and enable  ",(0,a.kt)("strong",{parentName:"p"},"EnableDomainReloadTimings")," . When enabled, the information is displayed in the console window."),(0,a.kt)("h2",{id:"installing-an-existing-roslyn-analyzer-or-source-generator"},"Installing an existing Roslyn analyzer or source generator"),(0,a.kt)("p",null,"Unity doesn\u2019t support the installation of Roslyn Analyzers or source generators through NuGet directly. The below example uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/ErrorProne.NET.CoreAnalyzers/"},"ErrorProne.NET.CoreAnalyzers")," library to demonstrate how to install Roslyn Analyzers and source generators from NuGet:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the library as a .zip file with the  ",(0,a.kt)("strong",{parentName:"li"},"Download package"),"  button."),(0,a.kt)("li",{parentName:"ol"},"Extract the contents of the .zip file."),(0,a.kt)("li",{parentName:"ol"},"Inside the extracted folder, locate the .dll files that contain the analyzers. In this example, navigate to  ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"errorprone.net.coreanalyzers&lt;version-number&gt;\\analyzers\\dotnet\\cd"))," . The required files should be in this folder, named ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorProne.NET.Core.dll"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorProne.Net.CoreAnalyzers.dll"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"RuntimeContracts.dll"),"."),(0,a.kt)("li",{parentName:"ol"},"Move these files into the Assets folder, or any folder nested inside of the Assets folder, in your Unity project. To do this, either go to  ",(0,a.kt)("strong",{parentName:"li"},"Assets"),"  ",">","  ",(0,a.kt)("strong",{parentName:"li"},"Import new asset"),"  and select the .dll for each of the three files, or copy them into your project\u2019s Assets folder through your device\u2019s file browser."),(0,a.kt)("li",{parentName:"ol"},"Click on the .dll file inside the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Browser"),"  inside Unity to open the  ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/doc-unity-manual/docs/plugins/plugin-inspector"},"Plugin Inspector")),"  window."),(0,a.kt)("li",{parentName:"ol"},"Inside the Plugin Inspector window:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under the  ",(0,a.kt)("strong",{parentName:"li"},"Select platforms for plugin"),"  heading, disable  ",(0,a.kt)("strong",{parentName:"li"},"Any Platform")," ."),(0,a.kt)("li",{parentName:"ul"},"Under the  ",(0,a.kt)("strong",{parentName:"li"},"Include Platforms"),"  heading, disable  ",(0,a.kt)("strong",{parentName:"li"},"Editor"),"  and  ",(0,a.kt)("strong",{parentName:"li"},"Standalone")," ."))),(0,a.kt)("li",{parentName:"ol"},"Under the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  heading in the Plugin Inspector window, click on the blue label icon to open the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  sub-menu."),(0,a.kt)("li",{parentName:"ol"},"Create and assign a new label called RoslynAnalyzer. To do this, type \u201cRoslynAnalyzer\u201d into the text input window in the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  sub-menu and press  ",(0,a.kt)("strong",{parentName:"li"},"Return")," . This label must exactly match the example and is case sensitive. After you create the label for the first analyzer, it appears on the list of available labels in the  ",(0,a.kt)("strong",{parentName:"li"},"Asset Labels"),"  sub-menu. You can click on the name of the label in the menu to assign it to other analyzers.")),(0,a.kt)("p",null,"Unity recognizes the RoslynAnalyzer label and treats assets with this label as Roslyn Analyzers or source generators. When you assign the label to an analyzer, Unity recompiles scripts within the scope of the analyzer and analyzes the code in those scripts according to the rules in the analyzer. Any scripts that are within the same assembly definition as an analyzer are in that analyzer\u2019s scope. For analyzers in the root level of the Assets folder, Unity considers all files in the project to be in scope. For more information about scope, see ",(0,a.kt)("a",{parentName:"p",href:"#analyzer-scope"},"Analyzer scope")," above."),(0,a.kt)("p",null,"To test that your analyzers work correctly, follow the example below. If you have installed the analyzers correctly, the ErrorProne.NET analyzer raises warnings when it analyzes the code in the example."),(0,a.kt)("p",null,"Create a new script file named ",(0,a.kt)("inlineCode",{parentName:"p"},"RethrowError.cs"),". Copy the following code into this script and save the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"using System;\nusing UnityEngine;\n\npublic class RethrowError : MonoBehaviour\n{\n    void Update()\n    {\n        try\n        {\n            DoSomethingInteresting();\n        }\n        catch (Exception e)\n        {\n            Debug.Log(e.Message);\n            throw e;\n        }\n    }\n\n    private void DoSomethingInteresting()\n    {\n        throw new System.NotImplementedException();\n    }\n}\n")),(0,a.kt)("p",null,"When you save the file, Unity recompiles the script and runs any applicable analyzers on the script\u2019s code. When the ErrorProne.NET analyzer is correctly installed, it raises the following warnings in the Console window about the above code:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\RethrowError.cs(14,23): warning EPC12: Suspicious exception handling: only e.Message is observed in exception block.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\RethrowError.cs(15,19): warning ERP021: Incorrect exception propagation. Use throw; instead.")),(0,a.kt)("h2",{id:"\u89c4\u5219\u96c6\u6587\u4ef6"},"\u89c4\u5219\u96c6\u6587\u4ef6"),(0,a.kt)("p",null,"To define your own rules on how to handle the various warnings and errors that the analyzers in your project raise, you can create a ruleset file. For more information on how to create a custom ruleset, see Microsoft\u2019s Visual Studio documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/code-quality/how-to-create-a-custom-rule-set?view=vs-2019"},"how to create a custom rule set"),"."),(0,a.kt)("p",null,"In the Assets root folder, place a ruleset file named Default.ruleset. The rules you define in Default.ruleset apply to all predefined assemblies (for example ",(0,a.kt)("inlineCode",{parentName:"p"},"Assembly-CSharp.dll"),"), and all assemblies that are built using .asmdef files."),(0,a.kt)("p",null,"To override the rules in Default.ruleset for a predefined assembly, create a .ruleset file in the root folder with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"[PredefinedAssemblyName].ruleset"),". For example, the rules in ",(0,a.kt)("inlineCode",{parentName:"p"},"Assembly-CSharp.ruleset")," apply to the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"Assembly-CSharp.dll"),". Only these .ruleset files are allowed inside the root folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default.ruleset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Assembly-CSharp.ruleset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Assembly-CSharp-firstpass.ruleset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Assembly-CSharp-Editor.ruleset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Assembly-CSharp-Editor-firstpass.ruleset"))),(0,a.kt)("h3",{id:"\u5de5\u4f5c\u6d41\u7a0b\u5728-unity-\u4e2d\u6d4b\u8bd5\u89c4\u5219\u96c6\u6587\u4ef6"},"\u5de5\u4f5c\u6d41\u7a0b\uff1a\u5728 Unity \u4e2d\u6d4b\u8bd5\u89c4\u5219\u96c6\u6587\u4ef6"),(0,a.kt)("p",null,"\u8981\u5728 Unity \u4e2d\u6d4b\u8bd5\u89c4\u5219\u96c6\u6587\u4ef6\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("h4",{id:"\u6b65\u9aa4-1\u8bbe\u7f6e\u89c4\u5219\u96c6\u6587\u4ef6"},"\u6b65\u9aa4 1\uff1a\u8bbe\u7f6e\u89c4\u5219\u96c6\u6587\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a subfolder named \u201cSubfolder\u201d inside your project\u2019s Assets folder."),(0,a.kt)("li",{parentName:"ol"},"Inside  ",(0,a.kt)("strong",{parentName:"li"},"Subfolder")," :",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Create a new .asmdef file."),(0,a.kt)("li",{parentName:"ol"},"Save a duplicate copy of ",(0,a.kt)("inlineCode",{parentName:"li"},"RethrowError.cs"),"."))),(0,a.kt)("li",{parentName:"ol"},"Create a Default.ruleset file inside  ",(0,a.kt)("strong",{parentName:"li"},"Assets"),"  with the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'&lt;?xml version="1.0" encoding="utf-8"?&gt;\n&lt;RuleSet Name="New Rule Set" Description=" " ToolsVersion="10.0"&gt;\n  &lt;Rules AnalyzerId="ErrorProne.NET.CodeAnalyzers" RuleNamespace="ErrorProne.NET.CodeAnalyzers"&gt;\n    &lt;Rule Id="ERP021" Action="Error" /&gt;\n  &lt;Rule Id="EPC12" Action="None" /&gt;\n  &lt;/Rules&gt;\n&lt;/RuleSet&gt;\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Default.ruleset")," \u6587\u4ef6\u5b9a\u4e49\u4e86\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Suppress EPC12, the warning about suspicious exception handling."),(0,a.kt)("li",{parentName:"ul"},"Elevate ERP021, the warning about incorrect exception propagation, to an error.")),(0,a.kt)("h4",{id:"\u7b2c-2-\u6b65\u91cd\u65b0\u52a0\u8f7d\u9879\u76ee"},"\u7b2c 2 \u6b65\uff1a\u91cd\u65b0\u52a0\u8f7d\u9879\u76ee"),(0,a.kt)("p",null,"After you add the ruleset files to your project, reimport any script that lives in an assembly where the rules should apply. This forces Unity to recompile the assembly using the new ruleset files. After recompilation, you should see two messages in the Console window:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\Subfolder\\RethrowError.cs(15,19): error ERP021: Incorrect exception propagation. Use throw; instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\RethrowError.cs(15,19): error ERP021: Incorrect exception propagation. Use throw; instead.")),(0,a.kt)("p",null,"Notice that Unity applies the rules defined in Default.ruleset to both ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/RethrowError.cs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/Subfolder/RethrowError.cs"),"."),(0,a.kt)("h4",{id:"\u7b2c-3-\u6b65\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89c4\u5219\u96c6"},"\u7b2c 3 \u6b65\uff1a\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89c4\u5219\u96c6"),(0,a.kt)("p",null,"In Assets/Subfolder, create a .ruleset file, and give it any name you like (in this ",(0,a.kt)("inlineCode",{parentName:"p"},"exampleHello.ruleset"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'&lt;?xml version="1.0" encoding="utf-8"?&gt;\n&lt;RuleSet Name="New Rule Set" Description=" " ToolsVersion="10.0"&gt;\n  &lt;Rules AnalyzerId="ErrorProne.NET.CodeAnalyzers" RuleNamespace="ErrorProne.NET.CodeAnalyzers"&gt;\n    &lt;Rule Id="ERP021" Action="Info" /&gt;\n    &lt;Rule Id="EPC12" Action="Info" /&gt;\n  &lt;/Rules&gt;\n&lt;/RuleSet&gt;\n')),(0,a.kt)("p",null,"This new ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello.ruleset")," file tells Unity to print both EPC12 and ERP021 to the Console, without treating them as warnings or errors."),(0,a.kt)("p",null,"Unity \u518d\u6b21\u7f16\u8bd1\u9879\u76ee\u540e\uff0c\u60a8\u4f1a\u5728 Console \u7a97\u53e3\u4e2d\u770b\u5230\u4ee5\u4e0b\u6d88\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\Subfolder\\RethrowError.cs(14,23): info EPC12: Suspicious exception handling: only e.Message is observed in exception block.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\Subfolder\\RethrowError.cs(15,19): info ERP021: Incorrect exception propagation. Use throw; instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\RethrowError.cs(15,19): error ERP021: Incorrect exception propagation. Use throw; instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Default.ruleset")," \u4e2d\u7684\u89c4\u5219\u4ecd\u7136\u5e94\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\RethrowError.cs"),"\uff0c\u4f46\u5b83\u4eec\u4e0d\u518d\u5e94\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets\\Subfolder\\RethrowError.cs"),"\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello.ruleset")," \u4e2d\u7684\u89c4\u5219\u5c06\u5176\u8986\u76d6\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u6240\u6709\u5141\u8bb8\u7684\u89c4\u5219\u96c6\u64cd\u4f5c\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Visual Studio \u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/code-quality/working-in-the-code-analysis-rule-set-editor?view=vs-2019"},"\u4f7f\u7528\u4ee3\u7801\u5206\u6790\u89c4\u5219\u96c6\u7f16\u8f91\u5668"),"\u3002"),(0,a.kt)("h2",{id:"\u66f4\u591a\u5206\u6790\u5668"},"\u66f4\u591a\u5206\u6790\u5668"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u6307\u5411\u5176\u4ed6\u6d41\u884c Roslyn \u5206\u6790\u5668\u5e93\u7684 Github \u5b58\u50a8\u5e93\u7684\u94fe\u63a5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Cybermaxs/awesome-analyzers"},"awesome-analyzers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dotnet/roslyn-analyzers"},"dotnet/roslyn-analyzers"))))}m.isMDXComponent=!0}}]);