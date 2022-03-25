"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7764],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function c(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60526:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id:"PluginInspector",title:"Import and configure plug-ins",slug:"/plugins/plugin-inspector"},s="Import and configure plug-ins",p={unversionedId:"scripting-section/plugins/PluginInspector",id:"scripting-section/plugins/PluginInspector",title:"Import and configure plug-ins",description:"If you have a managed plug-in or a native plug-in, you can import it into Unity, then configure it. Within the Editor, a plug-in is treated as an asset, similar to a script, and you can configure it in an Inspector window.",source:"@site/docs/scripting-section/plugins/plugin-inspector.md",sourceDirName:"scripting-section/plugins",slug:"/plugins/plugin-inspector",permalink:"/doc-unity-manual/docs/plugins/plugin-inspector",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/plugins/plugin-inspector.md",tags:[],version:"current",frontMatter:{id:"PluginInspector",title:"Import and configure plug-ins",slug:"/plugins/plugin-inspector"},sidebar:"tutorialSidebar",previous:{title:"Native plug-ins",permalink:"/doc-unity-manual/docs/plugins/native-plugins"},next:{title:"\u6784\u5efa\u9002\u7528\u4e8e\u684c\u9762\u5e73\u53f0\u7684\u63d2\u4ef6",permalink:"/doc-unity-manual/docs/plugins/plugins-for-desktop"}},u={},d=[{value:"Import a plug-in",id:"import-a-plug-in",level:2},{value:"Supported plug-in file and folder types",id:"supported-plug-in-file-and-folder-types",level:3},{value:"Plug-in default settings",id:"plug-in-default-settings",level:3},{value:"Change plug-in settings",id:"change-plug-in-settings",level:2},{value:"Common plug-in settings",id:"common-plug-in-settings",level:2},{value:"Managed plug-in settings",id:"managed-plug-in-settings",level:3},{value:"General - Auto Reference",id:"general---auto-reference",level:3},{value:"General - Validate References",id:"general---validate-references",level:3},{value:"Define Constraints",id:"define-constraints",level:3},{value:"Plugin load settings - Load on startup",id:"plugin-load-settings---load-on-startup",level:2}],m={toc:d};function c(t){var e=t.components,n=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-and-configure-plug-ins"},"Import and configure plug-ins"),(0,r.kt)("p",null,"If you have a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/plugins/using-dll"},"managed plug-in")," or a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/plugins/native-plugins"},"native plug-in"),", you can import it into Unity, then configure it. Within the Editor, a plug-in is treated as an asset, similar to a script, and you can configure it in an Inspector window."),(0,r.kt)("p",null,"You can use the plug-in configurations to specify where a plug-in runs; which platforms and which platform configurations, as well as under which conditions"),(0,r.kt)("h2",{id:"import-a-plug-in"},"Import a plug-in"),(0,r.kt)("p",null,"The simplest way to import a plug-in to your project is to click and drag the plug-in to the Assets folder or one of its subfolders. Unity recognizes specific file and folder types as plug-ins. It can also apply default settings that match the plug-in\u2019s intended platform."),(0,r.kt)("h3",{id:"supported-plug-in-file-and-folder-types"},"Supported plug-in file and folder types"),(0,r.kt)("p",null,"Unity treats files with the following extensions as a plug-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a"),(0,r.kt)("li",{parentName:"ul"},".aar"),(0,r.kt)("li",{parentName:"ul"},".bc"),(0,r.kt)("li",{parentName:"ul"},".c"),(0,r.kt)("li",{parentName:"ul"},".cc"),(0,r.kt)("li",{parentName:"ul"},".cpp"),(0,r.kt)("li",{parentName:"ul"},".dll"),(0,r.kt)("li",{parentName:"ul"},".def"),(0,r.kt)("li",{parentName:"ul"},".dylib"),(0,r.kt)("li",{parentName:"ul"},".h"),(0,r.kt)("li",{parentName:"ul"},".jar"),(0,r.kt)("li",{parentName:"ul"},".jslib"),(0,r.kt)("li",{parentName:"ul"},".jspre"),(0,r.kt)("li",{parentName:"ul"},".m"),(0,r.kt)("li",{parentName:"ul"},".mm"),(0,r.kt)("li",{parentName:"ul"},".prx"),(0,r.kt)("li",{parentName:"ul"},".rpl"),(0,r.kt)("li",{parentName:"ul"},".so"),(0,r.kt)("li",{parentName:"ul"},".sprx"),(0,r.kt)("li",{parentName:"ul"},".suprx"),(0,r.kt)("li",{parentName:"ul"},".swift"),(0,r.kt)("li",{parentName:"ul"},".winmd"),(0,r.kt)("li",{parentName:"ul"},".xex"),(0,r.kt)("li",{parentName:"ul"},".xib")),(0,r.kt)("p",null,"Unity also treats certain folders as bundled plug-ins. Unity doesn\u2019t look for additional plug-in files within these folders, so everything within the folder is considered a single plug-in. Unity treats folders with the following extensions as a bundled plug-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".androidlib"),(0,r.kt)("li",{parentName:"ul"},".bundle"),(0,r.kt)("li",{parentName:"ul"},".framework"),(0,r.kt)("li",{parentName:"ul"},".plugin")),(0,r.kt)("h3",{id:"plug-in-default-settings"},"Plug-in default settings"),(0,r.kt)("p",null,"Unity automatically applies platform-specific default settings to the plug-in if the plug-in\u2019s path within the Assets folder matches a platform-specific pattern. If the path doesn\u2019t match any pattern, Unity applies the Editor platform default settings to the plug-in."),(0,r.kt)("p",null,"The following table shows the path patterns Unity recognizes. Portions of the path that appear in brackets are optional. When the path includes double dots, it can include more folders."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Folder path patterns")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u8bbe\u7f6e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Assets/../Editor/(x86"),"  or  ",(0,r.kt)("strong",{parentName:"td"},"x86","_","64 or x64)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Platform")," : Editor only",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"CPU"),"  (optional): Based on the subfolder, if present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Assets/../Plugins/(x86","_","64"),"  or  ",(0,r.kt)("strong",{parentName:"td"},"x86 or x64)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Platform")," : Windows, Linux and macOS",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"CPU"),"  (optional): Based on the subfolder, if present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Assets/Plugins/iOS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Platform")," : iOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Assets/Plugins/WSA/(SDK80"),"  or  ",(0,r.kt)("strong",{parentName:"td"},"SDK81"),"  or  ",(0,r.kt)("strong",{parentName:"td"},"PhoneSDK81)/(x86"),"  or  ",(0,r.kt)("strong",{parentName:"td"},"ARM)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Platform")," : Universal Windows Platform",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SDK"),"  (optional): Based on the subfolder, if present. For compatibility reasons, SDK81 is Win81, PhoneSDK81 is WindowsPhone81.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"CPU"),"  (optional): Based on the subfolder, if present",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note")," : You can use the keyword  ",(0,r.kt)("strong",{parentName:"td"},"Metro"),"  instead of  ",(0,r.kt)("strong",{parentName:"td"},"WSA")," .")))),(0,r.kt)("h2",{id:"change-plug-in-settings"},"Change plug-in settings"),(0,r.kt)("p",null,"In Unity, plug-ins are either  ",(0,r.kt)("strong",{parentName:"p"},"managed"),"  or  ",(0,r.kt)("strong",{parentName:"p"},"native")," . The following table shows which settings are relevant for each type of plug-in:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bbe\u7f6e")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Managed")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Native")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Select platforms for plugin")),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Platform settings")),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Asset Labels")),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Asset Bundles")),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"General")),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Define Constraints")),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Plugin load settings")),(0,r.kt)("td",{parentName:"tr",align:null},"-> x"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"To view and change plug-in settings in the  ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," , select the plug-in file in the  ",(0,r.kt)("strong",{parentName:"p"},"Project"),"  window."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PlugInsCombined.png",alt:"Settings for a managed plug-in (left) and a native plug-in (right)."})),(0,r.kt)("p",null,"Settings for a managed plug-in (left) and a native plug-in (right)."),(0,r.kt)("h2",{id:"common-plug-in-settings"},"Common plug-in settings"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Select platform for plugin"),"  and  ",(0,r.kt)("strong",{parentName:"p"},"Platform settings"),"  specify in which builds Unity includes the plug-in."),(0,r.kt)("p",null,"The following table describes the common settings."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bbe\u7f6e")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Options")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u6ce8\u610f\u4e8b\u9879")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Select platforms for plugin")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022  ",(0,r.kt)("strong",{parentName:"td"},"Editor")," : For play mode and for any scripts that run at edit time.",(0,r.kt)("br",null),"\u2022  ",(0,r.kt)("strong",{parentName:"td"},"Standalone")," : Windows, Linux and macOS.",(0,r.kt)("br",null),"\u2022 Any platform included in your Unity installation, such as Android, iOS and WebGL."),(0,r.kt)("td",{parentName:"tr",align:null},"To allow the plug-in to work with platforms that aren\u2019t included in Unity yet, check  ",(0,r.kt)("strong",{parentName:"td"},"Any Platform")," . You can exclude individual platforms if you do not support them.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When you import a plug-in, Unity loads it into memory. A native plug-in cannot be unloaded; it remains loaded in a Unity session even after you change its settings. To unload the plug-in, you must restart Unity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Platform settings")),(0,r.kt)("td",{parentName:"tr",align:null},"For each platform you\u2019ve selected, you can specify additional conditions, such as CPU architecture and dependencies. Unity shows only settings that apply to your platforms and, where possible, to your specific plug-in type on that platform. For example, a native plug-in file with a .dll extension can run only on Windows, so Unity shows only Windows settings."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Editor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 CPU architecture",(0,r.kt)("br",null),"\u2022 OS"),(0,r.kt)("td",{parentName:"tr",align:null},"Most managed plug-ins are compatible with any CPU and OS.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Most native plug-ins are only compatible with a single OS and, depending on how they were compiled, might be compatible with only a single CPU architecture.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows, Linux and macOS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 CPU architecture",(0,r.kt)("br",null),"\u2022 OS"),(0,r.kt)("td",{parentName:"tr",align:null},"Managed libraries are typically compatible with any OS and CPU architecture, unless they access specific system APIs.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Native libraries are only compatible with a single OS, but can be compatible with the 32-bit, the 64-bit, or both CPU architectures.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Universal Windows Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/windowsstore-il2cpp/windowsstore-plugins-il2cpp"},"Universal Windows Platform: Plugins on IL2CPP Scripting Backend"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU architecture"),(0,r.kt)("td",{parentName:"tr",align:null},"The CPU architecture must match the architecture that the library was compiled for. Unity does not validate your settings.",(0,r.kt)("br",null),(0,r.kt)("br",null),"See also: ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/plugins-for-android/android-aarplugins"},"AAR plug-ins and Android Libraries"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS and tvOS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2022 Framework dependencies",(0,r.kt)("br",null),"\u2022 Add to Embedded Binaries",(0,r.kt)("br",null),"\u2022 Compile flags"),(0,r.kt)("td",{parentName:"tr",align:null},"When you select  ",(0,r.kt)("strong",{parentName:"td"},"Add to Embedded Binaries"),"  option, Unity sets the Xcode project options to copy the plug-in file into the final application package. Do this for:",(0,r.kt)("br",null),"\u2022 Dynamically loaded libraries.",(0,r.kt)("br",null),"\u2022 Bundles and frameworks containing dynamically loaded libraries.",(0,r.kt)("br",null),"\u2022 Any assets and resources that need to be loaded at run time.",(0,r.kt)("br",null),(0,r.kt)("br",null),"In the  ",(0,r.kt)("strong",{parentName:"td"},"Compile Flags"),"  field, set the compile flags for plug-in source code files that Unity must compile as part of the build.")))),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Tip")," : For information on the other common settings, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/asset-bundles-intro"},"Asset Bundles")," and ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-editor/searching"},"Searching in the Editor"),"."),(0,r.kt)("h3",{id:"managed-plug-in-settings"},"Managed plug-in settings"),(0,r.kt)("p",null,"Managed plug-ins can be third-party libraries or user-compiled assemblies that you want to include in the project."),(0,r.kt)("h3",{id:"general---auto-reference"},"General - Auto Reference"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Auto Reference"),"  setting controls how assembly definitions in the project reference a plug-in file. When you enable Auto Reference, all predefined assemblies and assembly definitions automatically reference the plug-in file."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Auto Reference"),"  is enabled by default."),(0,r.kt)("p",null,"To limit the scope in which a plug-in can be referenced, disable Auto Reference. You then need to explicitly declare all references to that plug-in. You might want to do this if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to prevent scripts from mistakenly using the plug-in."),(0,r.kt)("li",{parentName:"ul"},"You are iterating on the plug-in and want to reduce compilation time. If you explicitly declare a plug-in, Unity recompiles only the dependent assemblies, not your entire project."),(0,r.kt)("li",{parentName:"ul"},"You want to prevent plug-ins used in an ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/asset-store-packages"},"Asset Store package")," from conflicting with other code in a project into which the package is imported.")),(0,r.kt)("p",null,"When you disable  ",(0,r.kt)("strong",{parentName:"p"},"Auto Reference"),"  Unity cannot reference a plug-in from the predefined assemblies it creates for your project. These predefined assemblies contain all the scripts in your project that you have not assigned to another assembly using an assembly definition file. To reference classes, functions, or other resources from a plug-in that has the  ",(0,r.kt)("strong",{parentName:"p"},"Auto Reference"),"  property disabled, the referencing code must be in an assembly created with an assembly definition file. For example, if a set of scripts in your project uses a plug-in, you must create an assembly definition file for those scripts, and add an explicit reference to the plug-in in the definition file."),(0,r.kt)("p",null,"More than one assembly can use the plug-in, but all assemblies must explicitly declare the dependency. To learn more about assembly definitions in Unity, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/script-compilation-assembly-definition-files"},"Assembly definitions"),"."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note")," : The  ",(0,r.kt)("strong",{parentName:"p"},"Auto Reference"),"  option has no effect on whether a file is included in the build. To control Build Settings for plug-ins use ",(0,r.kt)("a",{parentName:"p",href:"#platform-settings"},"Platform settings"),"."),(0,r.kt)("h3",{id:"general---validate-references"},"General - Validate References"),(0,r.kt)("p",null,"Unity can check that your plug-in\u2019s references are available in the project. If you don\u2019t perform this validation, users can encounter runtime errors when the application tries to use a missing reference."),(0,r.kt)("p",null,"Enable the  ",(0,r.kt)("strong",{parentName:"p"},"Validate References"),"  option to check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whether the plug-in\u2019s references exist. For example, if your plug-in references the plug-in Newtonsoft.Json.dll, and Unity cannot find Newtonsoft.Json.dll, Unity displays an error."),(0,r.kt)("li",{parentName:"ul"},"Whether strong named references will be able to load. This is important because strong named references need to match the version. For example, if you compile a plug-in with a reference to \u201cb.dll\u201d version 2.0.0, that version must be in the project.")),(0,r.kt)("p",null,"If you don\u2019t want to check strong named references, but still want to check that references exist:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the  ",(0,r.kt)("strong",{parentName:"li"},"Plugin"),"  inspector, enable  ",(0,r.kt)("strong",{parentName:"li"},"Validate References")," ."),(0,r.kt)("li",{parentName:"ol"},"In  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Player"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Other Settings"),"  ",">"," disable  ",(0,r.kt)("strong",{parentName:"li"},"Assembly Version Validation")," .")),(0,r.kt)("h3",{id:"define-constraints"},"Define Constraints"),(0,r.kt)("p",null,"You can specify conditions under which Unity loads the plug-in to memory and references it. These conditions are symbols that must be satisfied, which means either defined or undefined."),(0,r.kt)("p",null,"Constraints work like the #if preprocessor directive in C#, but on the assembly level instead of the script level. You can learn more about constraints in ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/script-compilation-assembly-definition-files/class-assembly-definition-importer"},"Assembly Definition properties"),"."),(0,r.kt)("p",null,"You can use any of Unity\u2019s built-in define symbols, or add symbols in  ",(0,r.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Player"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Other Settings"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Script Compilation"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Scripting Define Symbols")," . The symbols you add are platform-specific, so you need to define them for each relevant platform. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/platform-dependent-compilation"},"Platform dependent compilation")," for more information, including a list of the built-in symbols."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Tip")," : To specify that a symbol must be undefined, prefix it with a negating ! (exclamation mark) symbol."),(0,r.kt)("p",null,"In the following example, we want Unity to load and reference the plug-in only on non-IL2CPP scripting runtimes for Unity 2018.3 or newer. We define two constraints, and both must be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_IL2CPP")," is not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNITY_2018_3_OR_NEWER")," is defined")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Define_Constraints.png",alt:"Define Constraints for a specific runtime and Unity version"})),(0,r.kt)("p",null,"Define Constraints for a specific runtime and Unity version"),(0,r.kt)("h2",{id:"plugin-load-settings---load-on-startup"},"Plugin load settings - Load on startup"),(0,r.kt)("p",null,"You can start executing native code that is independent of graphics initialization, scripts, asset loading, scenes, and so on. This is different to the default way a player loads a native plug-in, which is to wait until the first call to one of the plug-in\u2019s functions, usually performed by a script."),(0,r.kt)("p",null,"To load plug-ins before the application executes any scripts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"UnityPluginLoad")," in the plug-in. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/native-plugin-interface"},"Low-level native plug-in interface"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Editor, select  ",(0,r.kt)("strong",{parentName:"p"},"Plugin load settings"),"  ",">","  ",(0,r.kt)("strong",{parentName:"p"},"Load on startup")," ."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tip")," : For an example of a C# script calling plug-in functions, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/plugins/native-plugins"},"Manual: Native plug-ins"),"."))))}c.isMDXComponent=!0}}]);