"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90536],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(g,l(l({ref:t},p),{},{components:n})):i.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],r={id:"UsingDLL",title:"Managed plug-ins",slug:"/plugins/using-dll"},s="Managed plug-ins",u={unversionedId:"scripting-section/plugins/UsingDLL",id:"scripting-section/plugins/UsingDLL",title:"Managed plug-ins",description:"Managed plug-ins are .NET assemblies you create and compile outside of Unity, into a dynamically linked library (DLL) with tools such as Visual Studio.",source:"@site/docs/scripting-section/plugins/using-dll.md",sourceDirName:"scripting-section/plugins",slug:"/plugins/using-dll",permalink:"/doc-unity-manual/docs/plugins/using-dll",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/plugins/using-dll.md",tags:[],version:"current",frontMatter:{id:"UsingDLL",title:"Managed plug-ins",slug:"/plugins/using-dll"},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u9002\u7528\u4e8e\u684c\u9762\u5e73\u53f0\u7684\u63d2\u4ef6",permalink:"/doc-unity-manual/docs/plugins/plugins-for-desktop"},next:{title:"\u811a\u672c\u6982\u5ff5",permalink:"/doc-unity-manual/docs/scripting-concepts"}},p={},c=[{value:"Creating a managed plug-in",id:"creating-a-managed-plug-in",level:2},{value:"Using a managed plug-in",id:"using-a-managed-plug-in",level:2},{value:"Create a DLL with Visual Studio",id:"create-a-dll-with-visual-studio",level:2},{value:"Setting up the Project",id:"setting-up-the-project",level:3},{value:"Coding the DLL",id:"coding-the-dll",level:3},{value:"Debugging a DLL in Unity",id:"debugging-a-dll-in-unity",level:2},{value:"Compiling unsafe C# code",id:"compiling-unsafe-c-code",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managed-plug-ins"},"Managed plug-ins"),(0,o.kt)("p",null,"Managed plug-ins are ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/overview-of-dot-net-in-unity/dotnet-profile-support"},".NET assemblies")," you create and compile outside of Unity, into a dynamically linked library (DLL) with tools such as Visual Studio."),(0,o.kt)("p",null,"This is a different process from standard C# scripts, which Unity stores as source files in the Assets folder in your Unity project. Unity compiles standard C# scripts whenever they change, whereas DLLs are pre-compiled and don\u2019t change. You can add a compiled .dll file to your project and attach the classes it contains to  ",(0,o.kt)("strong",{parentName:"p"},"GameObjects"),"  in the same way as standard scripts."),(0,o.kt)("p",null,"For more information about managed code in C#, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/managed-code"},"Microsoft\u2019s What is managed code? documentation"),"."),(0,o.kt)("p",null,"Managed plug-ins contain only .NET code, which means they can\u2019t access any features that the .NET libraries don\u2019t support. However, managed code is accessible to the standard .NET tools that Unity uses to compile scripts."),(0,o.kt)("p",null,"When you work with DLLs in Unity, you must complete more steps than when you work with scripts. However, there are situations where you might find it helpful to create and add a .dll file to your Unity project instead, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to use compilers in your code that Unity doesn\u2019t support."),(0,o.kt)("li",{parentName:"ul"},"You want to add third-party .NET code in a .dll file."),(0,o.kt)("li",{parentName:"ul"},"You want to supply code to Unity without the source.")),(0,o.kt)("p",null,"This page explains a general method you can use to create managed plug-ins, as well as how you can create managed plug-ins and set up a debug session using Visual Studio."),(0,o.kt)("h2",{id:"creating-a-managed-plug-in"},"Creating a managed plug-in"),(0,o.kt)("p",null,"To create a managed plug-in, you need to create a DLL. To do this, you need a suitable compiler, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2019"},"MsBuild")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/core/sdk"},".NET SDK"))),(0,o.kt)("p",null,"Not all compilers that produce .NET code are compatible with Unity, so you should test the compiler with some available code before doing significant work with it. The method you use to create a DLL depends on if the DLL contains Unity API code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the DLL contains Unity API code, you need to make Unity\u2019s own DLLs available to the compiler before compiling:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"To find the Unity DLLs:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Windows, go to: ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\Unity\\Hub\\Editor\\&lt;version-number&gt;\\Editor\\Data\\Managed\\UnityEngine")),(0,o.kt)("li",{parentName:"ul"},"On macOS:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Find the ",(0,o.kt)("inlineCode",{parentName:"li"},"Unity.app")," file on your computer. The path to the Unity DLLs on macOS is: ",(0,o.kt)("inlineCode",{parentName:"li"},"/Applications/Unity/Hub/Editor/&lt;version-number&gt;/Unity.app/Contents/Managed/UnityEngine")),(0,o.kt)("li",{parentName:"ol"},"Right click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Unity.app")),(0,o.kt)("li",{parentName:"ol"},"Select  ",(0,o.kt)("strong",{parentName:"li"},"Show Package Contents")," ."))))),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"UnityEngine")," folder contains the .dll files for a number of modules. Reference them to make them available to your script. Some namespaces also require a reference to a compiled library from a Unity project (for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"UnityEngine.UI"),"). Locate this in the project folder\u2019s directory: ",(0,o.kt)("inlineCode",{parentName:"li"},"~\\Library\\ScriptAssemblies")))),(0,o.kt)("li",{parentName:"ul"},"If the DLL does not contain Unity API code, or if you\u2019ve already made the Unity DLLs available, follow your compiler\u2019s documentation to compile a .dll file.The exact options you use to compile the DLL depend on the compiler you use. As an example, the command line for the Roslyn compiler, ",(0,o.kt)("inlineCode",{parentName:"li"},"csc"),", might look like this on macOS:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"csc /r:/Applications/Unity/Hub/Editor/&lt;version-number&gt;/Unity.app/Contents/Managed/UnityEngine.dll /target:library /out:MyManagedAssembly.dll /recurse:*.cs")),(0,o.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"/r")," option to specify a path to a library to include in the build, in this case, the ",(0,o.kt)("inlineCode",{parentName:"li"},"UnityEngine")," library."),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"/target")," option to specify the type of build you require; \u201clibrary\u201d signifies a DLL build."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"/out")," to specify the name of the library, which in this case is \u201cMyManagedAssembly.dll\u201d."),(0,o.kt)("li",{parentName:"ul"},"Add the name of the source files to be included. Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"/recurse"),' method to add all the files ending in ".cs\u2019\u2019 in your current working directory and any subfolders. The resulting .dll file appears in the same folder as the source files.')),(0,o.kt)("h2",{id:"using-a-managed-plug-in"},"Using a managed plug-in"),(0,o.kt)("p",null,"After you\u2019ve compiled the DLL, you can drag the .dll file into the Unity project like any other asset. You can then:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Expand the managed plug-in to view the separate classes inside the library."),(0,o.kt)("li",{parentName:"ul"},"Drag classes that derive from MonoBehaviour onto Game Objects."),(0,o.kt)("li",{parentName:"ul"},"Use non-MonoBehaviour classes directly from other scripts.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/managed-plugin.png",alt:"An expanded DLL with the classes visible"})),(0,o.kt)("p",null,"An expanded DLL with the classes visible"),(0,o.kt)("h2",{id:"create-a-dll-with-visual-studio"},"Create a DLL with Visual Studio"),(0,o.kt)("p",null,"This section explains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to build and integrate a simple DLL example with Visual Studio"),(0,o.kt)("li",{parentName:"ul"},"How to prepare a debugging session for the DLL in Unity.")),(0,o.kt)("h3",{id:"setting-up-the-project"},"Setting up the Project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Visual Studio and create a new project."),(0,o.kt)("li",{parentName:"ol"},"Select  ",(0,o.kt)("strong",{parentName:"li"},"File"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"New"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Project"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Visual C#"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},".Net Standard"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Class Library (.NET Standard)")," ."),(0,o.kt)("li",{parentName:"ol"},"Add the following information to the new library:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name")," : The namespace (for this example, use ",(0,o.kt)("inlineCode",{parentName:"li"},"DLLTest")," as the name)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Location")," : The parent folder of the project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Solution name")," : The folder of the project."))),(0,o.kt)("li",{parentName:"ol"},"Make the Unity DLLs available to your script. In Visual Studio, open the contextual menu for  ",(0,o.kt)("strong",{parentName:"li"},"References"),"  in the Solution Explorer and select  ",(0,o.kt)("strong",{parentName:"li"},"Add Reference"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Browse"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Select File")," ."),(0,o.kt)("li",{parentName:"ol"},"Select the required .dll file, located in the UnityEngine folder.")),(0,o.kt)("h3",{id:"coding-the-dll"},"Coding the DLL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For this example, rename the default class to ",(0,o.kt)("inlineCode",{parentName:"li"},"MyUtilities")," in the Solution browser."),(0,o.kt)("li",{parentName:"ol"},"Replace its code with the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"using System;   \nusing UnityEngine;\n\nnamespace DLLTest {\n\n    public class MyUtilities {\n    \n        public int c;\n\n        public void AddValues(int a, int b) {\n            c = a + b;  \n        }\n    \n        public static int GenerateRandom(int min, int max) {\n            System.Random rand = new System.Random();\n            return rand.Next(min, max);\n        }\n    }\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build the project to generate the DLL file along with its debug symbols.")),(0,o.kt)("h2",{id:"debugging-a-dll-in-unity"},"Debugging a DLL in Unity"),(0,o.kt)("p",null,"To set up a debugging session for a DLL in Unity:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new project in Unity and copy your built .dll file (for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"&lt;project folder&gt;/bin/Debug/DLLTest.dll"),") into the Assets folder."),(0,o.kt)("li",{parentName:"ol"},"Create a C# script called Test in the Assets folder."),(0,o.kt)("li",{parentName:"ol"},"Replace its contents with a script that creates a new instance of the class you created in your DLL, uses its functions and displays the output in the  ",(0,o.kt)("strong",{parentName:"li"},"Console"),"  window. For example, to create a test script for the DLL from the section above, copy the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing System.Collections;\nusing DLLTest;\n\npublic class Test : MonoBehaviour {\n\n     void Start () {\n        MyUtilities utils = new MyUtilities();\n        utils.AddValues(2, 3);\n        print("2 + 3 = " + utils.c);\n     }\n    \n     void Update () {\n        print(MyUtilities.GenerateRandom(0, 100));\n     }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Attach this script to a GameObject in the Scene and click Play.")),(0,o.kt)("p",null,"Unity displays the output of the code from the DLL in the Console window"),(0,o.kt)("h2",{id:"compiling-unsafe-c-code"},"Compiling unsafe C# code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe"},"Unsafe C# code")," is code that is able to access memory directly. It is not enabled by default because the compiler can\u2019t verify that it won\u2019t introduce security risks."),(0,o.kt)("p",null,"You might want to use unsafe code to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access memory using pointers."),(0,o.kt)("li",{parentName:"ul"},"Allocate raw memory."),(0,o.kt)("li",{parentName:"ul"},"Call methods using pointers.")),(0,o.kt)("p",null,"To enable support for compiling unsafe C# code go to  ",(0,o.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Player"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Other Settings"),"  and enable  ",(0,o.kt)("strong",{parentName:"p"},"Allow Unsafe Code")," ."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code"},"Microsoft\u2019s documentation of unsafe code"),"."))}m.isMDXComponent=!0}}]);