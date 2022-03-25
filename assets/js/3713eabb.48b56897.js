"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28225],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37582:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"com.unity.purchasing",title:"In App Purchasing",slug:"/pack-safe/com-unity-purchasing"},s="In App Purchasing",u={unversionedId:"packages-list/pack-safe/com.unity.purchasing",id:"packages-list/pack-safe/com.unity.purchasing",title:"In App Purchasing",description:"com.unity.purchasing iconRel.png",source:"@site/docs/packages-list/pack-safe/com-unity-purchasing.md",sourceDirName:"packages-list/pack-safe",slug:"/pack-safe/com-unity-purchasing",permalink:"/doc-unity-manual/docs/pack-safe/com-unity-purchasing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages-list/pack-safe/com-unity-purchasing.md",tags:[],version:"current",frontMatter:{id:"com.unity.purchasing",title:"In App Purchasing",slug:"/pack-safe/com-unity-purchasing"},sidebar:"tutorialSidebar",previous:{title:"Unity Distribution Portal",permalink:"/doc-unity-manual/docs/pack-safe/com-unity-purchasing-udp"},next:{title:"Recorder",permalink:"/doc-unity-manual/docs/pack-safe/com-unity-recorder"}},c={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u7248\u672c\u4fe1\u606f",id:"\u7248\u672c\u4fe1\u606f",level:2},{value:"Released for Unity",id:"released-for-unity",level:3},{value:"\u4e0e Unity \u517c\u5bb9",id:"\u4e0e-unity-\u517c\u5bb9",level:3},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"in-app-purchasing"},"In App Purchasing"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2022.1/Documentation/Manual/UnityIAP.html"},"com.unity.purchasing")," ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/iconRel.png",alt:"iconRel.png"})),(0,i.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"IMPORTANT UPGRADE NOTES:",(0,i.kt)("br",null),(0,i.kt)("br",null),"If updating from Unity IAP (com.unity.purchasing + the Asset Store plugin) versions 2.x to version 3.x, complete the following actions in order to resolve compilation errors:",(0,i.kt)("br",null)," 1. Move IAPProductCatalog.json and BillingMode.json",(0,i.kt)("br",null)," FROM: Assets/Plugins/UnityPurchasing/Resources/",(0,i.kt)("br",null)," TO: Assets/Resources/.",(0,i.kt)("br",null)," 2. Move AppleTangle.cs and GooglePlayTangle.cs",(0,i.kt)("br",null)," FROM: Assets/Plugins/UnityPurchasing/generated",(0,i.kt)("br",null)," TO: Assets/Scripts/UnityPurchasing/generated.",(0,i.kt)("br",null)," 3. Remove all remaining Asset Store plugin folders and files in Assets/Plugins/UnityPurchasing from your project.",(0,i.kt)("br",null),(0,i.kt)("br",null),"PACKAGE DESCRIPTION:",(0,i.kt)("br",null),(0,i.kt)("br",null),"With Unity IAP, setting up in-app purchases for your game across multiple app stores has never been easier.",(0,i.kt)("br",null),(0,i.kt)("br",null),"This package provides:",(0,i.kt)("br",null),(0,i.kt)("br",null)," \u2022 One common API to access all stores for free so you can fully understand and optimize your in-game economy",(0,i.kt)("br",null)," \u2022 Automatic coupling with Unity Analytics to enable monitoring and decision-making based on trends in your revenue and purchase data across multiple platforms",(0,i.kt)("br",null)," \u2022 Support for iOS, Mac, tvOS, Google Play, Windows, and Amazon app stores(","*",").",(0,i.kt)("br",null)," \u2022 Support to work with the Unity Distribution Portal to synchronize catalogs and transactions with other app stores",(0,i.kt)("br",null)," \u2022 Client-side receipt validation for Apple App Store and Google Play",(0,i.kt)("br",null),(0,i.kt)("br",null),"After installing this package, open the Services Window to enable In-App Purchasing to use these features."),(0,i.kt)("h2",{id:"\u7248\u672c\u4fe1\u606f"},"\u7248\u672c\u4fe1\u606f"),(0,i.kt)("h3",{id:"released-for-unity"},"Released for Unity"),(0,i.kt)("p",null,"Package version 4.1.2 is released for Unity Editor version 2022.1."),(0,i.kt)("h3",{id:"\u4e0e-unity-\u517c\u5bb9"},"\u4e0e Unity \u517c\u5bb9"),(0,i.kt)("p",null,"These package versions are available in Unity version 2022.1:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u6587\u6863\u4f4d\u7f6e\uff1a")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u72b6\u6001")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u53ef\u7528\u7248\u672c\uff1a")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/2022.1/Documentation/Manual/UnityIAP.html"},"com.unity.purchasing@4.1")),(0,i.kt)("td",{parentName:"tr",align:null},"released"),(0,i.kt)("td",{parentName:"tr",align:null},"4.1.2")))),(0,i.kt)("h2",{id:"\u5173\u952e\u5b57"},"\u5173\u952e\u5b57"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list/pack-keys"},"purchasing")," , ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list/pack-keys"},"iap")," , ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list/pack-keys"},"unity")))}m.isMDXComponent=!0}}]);