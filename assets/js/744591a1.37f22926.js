"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99396],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"Plugins",title:"Plug-ins",slug:"/plugins"},u="Plug-ins",s={unversionedId:"scripting-section/plugins/Plugins",id:"scripting-section/plugins/Plugins",title:"Plug-ins",description:"In Unity, you normally use  scripts  to create functionality, but you can also include code created outside Unity in the form of a  plug-in . You can use two different kinds of plug-in in Unity:",source:"@site/docs/scripting-section/plugins/plugins.md",sourceDirName:"scripting-section/plugins",slug:"/plugins",permalink:"/doc-unity-manual/docs/plugins",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/plugins/plugins.md",tags:[],version:"current",frontMatter:{id:"Plugins",title:"Plug-ins",slug:"/plugins"},sidebar:"tutorialSidebar",previous:{title:"C# \u4f5c\u4e1a\u7cfb\u7edf\u63d0\u793a\u548c\u6545\u969c\u6392\u9664",permalink:"/doc-unity-manual/docs/job-system/job-system-troubleshooting"},next:{title:"Low-level native plug-in interface",permalink:"/doc-unity-manual/docs/native-plugin-interface"}},c={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plug-ins"},"Plug-ins"),(0,a.kt)("p",null,"In Unity, you normally use  ",(0,a.kt)("strong",{parentName:"p"},"scripts"),"  to create functionality, but you can also include code created outside Unity in the form of a  ",(0,a.kt)("strong",{parentName:"p"},"plug-in")," . You can use two different kinds of plug-in in Unity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Managed plug-ins")," : ",(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/overview-of-dot-net-in-unity/dotnet-profile-support"},"managed .NET assemblies")," you can create with tools like Visual Studio. They only contain .NET code, which means they can\u2019t access any features that the .NET libraries do not support. For more information, see ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/standard/managed-code"},"Microsoft\u2019s documentation of managed code"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native plug-ins")," : platform-specific native code libraries. They can access features like operating system calls and third-party code libraries that would otherwise be unavailable to Unity.")),(0,a.kt)("p",null,"Managed code is accessible to the standard .NET tools that Unity uses to compile scripts. The only difference between managed plug-in code and Unity script code is that the plug-ins are compiled outside of Unity and so Unity might not be able to access the source. When using native plug-ins, Unity\u2019s tools can\u2019t access third-party code libraries in the same way that they can access the managed libraries. For example, if you forget to add a managed plug-in file to the project, you will get standard compiler error messages. Whereas, if you forget to add a native plug-in file to the project, you will only see an error report when you try to run the project."),(0,a.kt)("p",null,"The following pages explain how to create and use plug-ins in your Unity Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/plugins/plugin-inspector"},"Import and configure plug-ins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/plugins/using-dll"},"\u6258\u7ba1\u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/plugins/native-plugins"},"Native plug-ins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/plugins/plugins-for-desktop"},"\u6784\u5efa\u9002\u7528\u4e8e\u684c\u9762\u5e73\u53f0\u7684\u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/native-plugin-interface"},"\u4f4e\u7ea7\u539f\u751f\u63d2\u4ef6\u63a5\u53e3"))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2018\u201303\u201319 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,a.kt)("li",{parentName:"ul"},"\u4ece 2018.1 \u5f00\u59cb\uff0cMonoDevelop \u7531 Visual Studio \u53d6\u4ee3")))}f.isMDXComponent=!0}}]);