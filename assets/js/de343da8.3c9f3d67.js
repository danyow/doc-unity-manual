"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31671],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52202:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"dotnetProfileSupport",title:".NET \u914d\u7f6e\u6587\u4ef6\u652f\u6301",slug:"/overview-of-dot-net-in-unity/dotnet-profile-support"},p=".NET \u914d\u7f6e\u6587\u4ef6\u652f\u6301",s={unversionedId:"scripting-section/unity-architecture/overview-of-dot-net-in-unity/dotnetProfileSupport",id:"scripting-section/unity-architecture/overview-of-dot-net-in-unity/dotnetProfileSupport",title:".NET \u914d\u7f6e\u6587\u4ef6\u652f\u6301",description:"Unity supports two .NET profiles",source:"@site/docs/scripting-section/unity-architecture/overview-of-dot-net-in-unity/dotnet-profile-support.md",sourceDirName:"scripting-section/unity-architecture/overview-of-dot-net-in-unity",slug:"/overview-of-dot-net-in-unity/dotnet-profile-support",permalink:"/doc-unity-manual/docs/overview-of-dot-net-in-unity/dotnet-profile-support",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/overview-of-dot-net-in-unity/dotnet-profile-support.md",tags:[],version:"current",frontMatter:{id:"dotnetProfileSupport",title:".NET \u914d\u7f6e\u6587\u4ef6\u652f\u6301",slug:"/overview-of-dot-net-in-unity/dotnet-profile-support"},sidebar:"tutorialSidebar",previous:{title:"\u7a33\u5b9a\u811a\u672c\u8fd0\u884c\u65f6\uff1a\u5df2\u77e5\u9650\u5236",permalink:"/doc-unity-manual/docs/overview-of-dot-net-in-unity/dotnet-profile-limitations"},next:{title:"\u811a\u672c\u7f16\u8bd1",permalink:"/doc-unity-manual/docs/script-compilation"}},u={},d=[{value:"\u8de8\u5e73\u53f0\u517c\u5bb9\u6027",id:"\u8de8\u5e73\u53f0\u517c\u5bb9\u6027",level:2},{value:"Managed plug-ins",id:"managed-plug-ins",level:2},{value:"\u4f20\u8f93\u5c42\u5b89\u5168\u6027 (TLS) 1.2",id:"\u4f20\u8f93\u5c42\u5b89\u5168\u6027-tls-12",level:2}],c={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net-\u914d\u7f6e\u6587\u4ef6\u652f\u6301"},".NET \u914d\u7f6e\u6587\u4ef6\u652f\u6301"),(0,o.kt)("p",null,"Unity supports two .NET profiles:  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  and  ",(0,o.kt)("strong",{parentName:"p"},".NET Framework")," . Each profile provides a different set of APIs so that C# code can interact with .NET class libraries. The  ",(0,o.kt)("strong",{parentName:"p"},"Api Compatibility Level"),"  property has two settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".NET Standard: .NET Standard 2.1, as published by the .NET Foundation."),(0,o.kt)("li",{parentName:"ul"},".NET Framework 4.8, as published by Microsoft, plus additional APIs in .NET Standard 2.1.")),(0,o.kt)("p",null,"By default, the  ",(0,o.kt)("strong",{parentName:"p"},"Api compatibility Level"),"  is set to  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard")," . To change the .NET profile, go to  ",(0,o.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Player"),"  ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Other settings")," . Under the Configuration heading, set  ",(0,o.kt)("strong",{parentName:"p"},"Api Compatibility Level"),"  to the desired setting."),(0,o.kt)("h2",{id:"\u8de8\u5e73\u53f0\u517c\u5bb9\u6027"},"\u8de8\u5e73\u53f0\u517c\u5bb9\u6027"),(0,o.kt)("p",null,"If you need broad cross-platform compatibility, then set the  ",(0,o.kt)("strong",{parentName:"p"},"Api Compatibility Level"),"  to  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard")," . Where possible, Unity supports the APIs in the  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  profile on all platforms. Although some platforms don\u2019t fully support the  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  profile, the  ",(0,o.kt)("strong",{parentName:"p"},".NET Framework"),"  profile is less suitable for cross-platform compatibility. The  ",(0,o.kt)("strong",{parentName:"p"},".NET Framework"),"  profile includes all APIs in the  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  profile and additional APIs, some of which might work on few or no platforms."),(0,o.kt)("h2",{id:"managed-plug-ins"},"Managed plug-ins"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/plugins/using-dll"},"Managed plug-ins")," are .NET assemblies that are managed outside of Unity and compiled into dynamically linked libraries (DLLs). You can use managed plug-ins in Unity with either the  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  profile or the  ",(0,o.kt)("strong",{parentName:"p"},".NET Framework"),"  profile. The .NET profile of your Unity project determines the level of support for managed plug-ins that are compiled for different versions of .NET. The following table indicates the configurations that Unity supports:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Managed plug-in compilation target"),(0,o.kt)("th",{parentName:"tr",align:null},"API Compatibility Level:"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},".NET Standard 2.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},".NET 4.x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"---"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},".NET Standard (any version)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u53d7\u652f\u6301")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},".NET Framework (any version)")),(0,o.kt)("td",{parentName:"tr",align:null},"Limited support")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},".NET Core (any version)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53d7\u652f\u6301")))),(0,o.kt)("p",null,"Support for managed plug-ins compiled for .NET Framework is limited when you use the  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  profile in Unity. Any .NET Framework APIs that are also present in .NET Standard are supported. However, the .NET Framework API contains types and methods that are not available in the  ",(0,o.kt)("strong",{parentName:"p"},".NET Standard"),"  profile."),(0,o.kt)("h2",{id:"\u4f20\u8f93\u5c42\u5b89\u5168\u6027-tls-12"},"\u4f20\u8f93\u5c42\u5b89\u5168\u6027 (TLS) 1.2"),(0,o.kt)("p",null,"The UnityWebRequest API and all .NET Framework Web APIs fully support TLS 1.2 on all platforms except WebGL. WebGL uses the security settings from the browser the application runs in and the web server instead. The platform-specific local certificate store automatically verifies TLS certificates if available. If access to the certificate store isn\u2019t possible, Unity uses an embedded root certificate store."),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2018\u201303\u201315 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,o.kt)("li",{parentName:"ul"},"\u5728 ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.1/Documentation/Manual/30_search.html?q=newin20181"},"2018.1")," \u7248\u4e2d\u6dfb\u52a0\u4e86 .NET \u914d\u7f6e\u6587\u4ef6\u652f\u6301 NewIn20181")))}m.isMDXComponent=!0}}]);