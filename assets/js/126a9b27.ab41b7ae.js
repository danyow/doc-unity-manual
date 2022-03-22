"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82915],{3905:function(t,e,i){i.d(e,{Zo:function(){return c},kt:function(){return u}});var n=i(67294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=p(i),u=o,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return i?n.createElement(y,s(s({ref:e},c),{},{components:i})):n.createElement(y,s({ref:e},c))}));function u(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=i.length,s=new Array(r);s[0]=d;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:o,s[1]=a;for(var p=2;p<r;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3124:function(t,e,i){i.r(e),i.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var n=i(87462),o=i(63366),r=(i(67294),i(3905)),s=["components"],a={id:"CustomScriptingSymbols",title:"Custom scripting symbols",slug:"/platform-dependent-compilation/custom-scripting-symbols"},l="Custom scripting symbols",p={unversionedId:"scripting-section/unity-architecture/script-compilation/platform-dependent-compilation/CustomScriptingSymbols",id:"scripting-section/unity-architecture/script-compilation/platform-dependent-compilation/CustomScriptingSymbols",title:"Custom scripting symbols",description:"C# directives  allow you to selectively include or exclude code from compilation, based on whether certain  scripting symbols  are defined or not defined.",source:"@site/docs/scripting-section/unity-architecture/script-compilation/platform-dependent-compilation/custom-scripting-symbols.md",sourceDirName:"scripting-section/unity-architecture/script-compilation/platform-dependent-compilation",slug:"/platform-dependent-compilation/custom-scripting-symbols",permalink:"/docs/platform-dependent-compilation/custom-scripting-symbols",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/script-compilation/platform-dependent-compilation/custom-scripting-symbols.md",tags:[],version:"current",frontMatter:{id:"CustomScriptingSymbols",title:"Custom scripting symbols",slug:"/platform-dependent-compilation/custom-scripting-symbols"},sidebar:"tutorialSidebar",previous:{title:"Conditional Compilation",permalink:"/docs/platform-dependent-compilation"},next:{title:"\u7a0b\u5e8f\u96c6\u5b9a\u4e49",permalink:"/docs/script-compilation-assembly-definition-files"}},c={},m=[{value:"Setting scripting symbols via the Editor",id:"setting-scripting-symbols-via-the-editor",level:2},{value:"Defining scripting symbols via script",id:"defining-scripting-symbols-via-script",level:2},{value:"Setting scripting symbols for Editor script compilation",id:"setting-scripting-symbols-for-editor-script-compilation",level:3},{value:"Setting scripting symbols in batch mode",id:"setting-scripting-symbols-in-batch-mode",level:3},{value:"Setting scripting symbols via an asset file",id:"setting-scripting-symbols-via-an-asset-file",level:2}],d={toc:m};function u(t){var e=t.components,i=(0,o.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-scripting-symbols"},"Custom scripting symbols"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"C# directives"),"  allow you to ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-dependent-compilation"},"selectively include or exclude code from compilation"),", based on whether certain  ",(0,r.kt)("strong",{parentName:"p"},"scripting symbols"),"  are ",(0,r.kt)("em",{parentName:"p"},"defined")," or ",(0,r.kt)("em",{parentName:"p"},"not defined"),"."),(0,r.kt)("p",null,"In addition to the built-in scripting symbols (relating to ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-dependent-compilation#platform-scripting-symbols"},"Platform"),", the ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-dependent-compilation#editor-version-scripting-symbols"},"Editor Version"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-dependent-compilation#other-scripting-symbols"},"other")," miscellaneous system environment scenarios), you can specify your own custom scripting symbols, either using the Editor UI, via scripting, or via an asset file."),(0,r.kt)("h2",{id:"setting-scripting-symbols-via-the-editor"},"Setting scripting symbols via the Editor"),(0,r.kt)("p",null,"To set or remove define directives via the Editor, go to  ",(0,r.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Player")," . Then in the  ",(0,r.kt)("strong",{parentName:"p"},"Other Settings"),"  panel, scroll down to  ",(0,r.kt)("strong",{parentName:"p"},"Script Compilation")," ."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ScriptDefines.png",alt:"The Scripting Define Symbols settings in the Project Settings window. This example shows two custom symbols defined in the list."})),(0,r.kt)("p",null,"The Scripting Define Symbols settings in the Project Settings window. This example shows two custom symbols defined in the list."),(0,r.kt)("p",null,"You can add and remove your own custom scripting symbols to the  ",(0,r.kt)("strong",{parentName:"p"},"Scripting Define Symbols"),"  list by using the  ",(0,r.kt)("strong",{parentName:"p"},"+"),"  and  ",(0,r.kt)("strong",{parentName:"p"},"-"),"  buttons, and typing the name of your new symbols into the fields. When you select  ",(0,r.kt)("strong",{parentName:"p"},"Apply")," , your new scripting symbols are applied, and Unity recompiles the scripts in your project using these new symbols."),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Copy Defines"),"  button copies the current set of custom scripting symbols from the list into your clipboard as a string of semicolon-separated values."),(0,r.kt)("h2",{id:"defining-scripting-symbols-via-script"},"Defining scripting symbols via script"),(0,r.kt)("p",null,"You can use the following API to define scripting symbols:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/PlayerSettings.SetScriptingDefineSymbolsForGroup.html"},"PlayerSettings.SetScriptingDefineSymbolsForGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Build.Player.ScriptCompilationSettings-extraScriptingDefines.html"},"BuildPlayerOptions.extraScriptingDefines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Build.Player.ScriptCompilationSettings-extraScriptingDefines.html"},"Build.Player.ScriptCompilationSettings-extraScriptingDefines"))),(0,r.kt)("h3",{id:"setting-scripting-symbols-for-editor-script-compilation"},"Setting scripting symbols for Editor script compilation"),(0,r.kt)("p",null,"If you need to define scripting symbols via scripts in the Editor so that your Editor scripts are affected by the change, you must use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/PlayerSettings.SetScriptingDefineSymbolsForGroup.html"},"PlayerSettings.SetScriptingDefineSymbolsForGroup"),". However, there are some important details to note about how this operates."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Important:"),"  this method does not take immediate effect. Calling this method from script does not immediately apply and recompile your scripts. For your directives to take effect based on a change in scripting symbols, you must allow control to be returned to the Editor, where it then asynchronously reloads the scripts and recompiles them based on your new symbols and the directives which act on them."),(0,r.kt)("p",null,"So, for example, if you use this method in an Editor script, then immediately call ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildPipeline.BuildPlayer")," on the following line in the same script, at that point Unity is still running your Editor scripts with the old set of scripting symbols, because they have not yet been recompiled with the new symbols. This means if you have Editor scripts which run as part of your BuildPlayer execution, they run with the old scripting symbols and your player might not build as you expected."),(0,r.kt)("h3",{id:"setting-scripting-symbols-in-batch-mode"},"Setting scripting symbols in batch mode"),(0,r.kt)("p",null,"The asynchronous nature of Unity\u2019s compilation mentioned above is also important to understand if you are writing Editor scripts which will run in batch mode in the Unity Editor on a continuous integration (CI) server. This is because when the Editor runs in batch mode, it runs \u201c",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Headless_software"},"headless"),"\u201d, so there is no  ",(0,r.kt)("strong",{parentName:"p"},"editor loop"),"  which would cause it to recompile with the new scripting symbols. Because of this, you should not use Editor scripts to set scripting symbols within a batch mode CI server because the scripts will not be recompiled, so they will not be applied."),(0,r.kt)("p",null,"Instead, if you need specific symbols to be defined in an Editor running in batch mode, you must ensure the editor is launched with the correct symbols defined from the start. You can do this by specifying the symbols using a csc.rsp asset file instead of using editor scripts, as described below."),(0,r.kt)("h2",{id:"setting-scripting-symbols-via-an-asset-file"},"Setting scripting symbols via an asset file"),(0,r.kt)("p",null,"You can set custom scripting symbols via a text asset in your project. To do this you must add a text file that defines the custom scripting symbols named ",(0,r.kt)("inlineCode",{parentName:"p"},"csc.rsp")," in the root of your project\u2019s  ",(0,r.kt)("strong",{parentName:"p"},"Assets"),"  folder. This special file is read by Unity at startup and applied before any code is compiled."),(0,r.kt)("p",null,"As an example, if you include the single line -define:UNITY","_","DEBUG in your  ",(0,r.kt)("strong",{parentName:"p"},"csc.rsp"),"  file, the symbol UNITY","_","DEBUG is included as a globally defined scripting symbol for C# scripts, except for Editor scripts."),(0,r.kt)("p",null,"Every time you make changes to  ",(0,r.kt)("strong",{parentName:"p"},".rsp"),"  files, you need to recompile in order for them to be effective. You can do this by updating or reimporting a single script file."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  If you want to modify only global scripting symbols, add them to the  ",(0,r.kt)("strong",{parentName:"p"},"Scripting Define Symbols"),"  in the Editor via the Player Settings window (as described above), because this covers all the compilers. If you choose the  ",(0,r.kt)("strong",{parentName:"p"},".rsp"),"  files instead, you need to provide one file for every compiler Unity uses."))}u.isMDXComponent=!0}}]);