"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33476],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=s(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43399:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],u={id:"udp-getting-started",title:"\u5f00\u59cb\u4f7f\u7528 UDP",slug:"/udp/udp-getting-started"},l="\u5f00\u59cb\u4f7f\u7528 UDP",s={unversionedId:"unity-services/udp/udp-getting-started",id:"unity-services/udp/udp-getting-started",title:"\u5f00\u59cb\u4f7f\u7528 UDP",description:"UDP \u5b9e\u73b0",source:"@site/docs/unity-services/udp/udp-getting-started.md",sourceDirName:"unity-services/udp",slug:"/udp/udp-getting-started",permalink:"/doc-unity-manual/docs/udp/udp-getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/udp/udp-getting-started.md",tags:[],version:"current",frontMatter:{id:"udp-getting-started",title:"\u5f00\u59cb\u4f7f\u7528 UDP",slug:"/udp/udp-getting-started"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 UDP \u5206\u53d1\u6e38\u620f",permalink:"/doc-unity-manual/docs/udp/udp-distribution"},next:{title:"Implementing IAP products",permalink:"/doc-unity-manual/docs/udp/udp-implementing-iap"}},p={},c=[{value:"UDP \u5b9e\u73b0",id:"udp-\u5b9e\u73b0",level:2},{value:"\u4f7f\u7528 UDP \u5305",id:"\u4f7f\u7528-udp-\u5305",level:3},{value:"\u4f7f\u7528 UDP \u5305\u548c Unity IAP",id:"\u4f7f\u7528-udp-\u5305\u548c-unity-iap",level:3},{value:"\u4f7f\u7528 Unity IAP",id:"\u4f7f\u7528-unity-iap",level:3},{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:2},{value:"Accessing the UDP console",id:"accessing-the-udp-console",level:2}],d={toc:c};function y(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f00\u59cb\u4f7f\u7528-udp"},"\u5f00\u59cb\u4f7f\u7528 UDP"),(0,a.kt)("h2",{id:"udp-\u5b9e\u73b0"},"UDP \u5b9e\u73b0"),(0,a.kt)("p",null,"Unity \u5efa\u8bae\u5728\u6e38\u620f\u5f00\u53d1\u5468\u671f\u4e2d\u5b9e\u73b0 UDP\uff0c\u76f4\u5230\u6e38\u620f\u5f00\u53d1\u5468\u671f\u7ed3\u675f\uff08\u4f8b\u5982\uff0c\u5f53\u4f60\u5df2\u51b3\u5b9a\u53ef\u8d2d\u4e70\u7684\u6e38\u620f\u5e94\u7528\u5185\u5546\u54c1\u65f6\uff09\u3002\u8fd9\u6837\u5c31\u66f4\u5bb9\u6613\u5728\u65e7\u7248\u6e38\u620f\u4e2d\u5b9e\u73b0 UDP\uff0c\u4ece\u800c\u4f7f\u8fd9\u4e9b\u6e38\u620f\u5728\u65b0\u7684\u5e94\u7528\u5546\u5e97\u4e2d\u7115\u53d1\u51fa\u65b0\u7248\u672c\u7684\u751f\u673a\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u5728\u6e38\u620f\u4e2d\u5b9e\u73b0 UDP\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u4f7f\u7528 UDP \u5305"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 UDP \u5305\u548c Unity IAP \u5305\uff08Unity IAP \u5305\u7248\u672c 2.0.0+\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u4f7f\u7528 Unity IAP\uff08Unity IAP \u5305\u7248\u672c 1.22.0\u20131.23.5\uff09")),(0,a.kt)("p",null,"\u4f60\u9009\u62e9\u7684\u5b9e\u73b0\u65b9\u5f0f\u4e0d\u4f1a\u5f71\u54cd UDP \u63a7\u5236\u53f0\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-udp-\u5305"},"\u4f7f\u7528 UDP \u5305"),(0,a.kt)("p",null,"\u6b64\u5b9e\u73b0\u7c7b\u4f3c\u4e8e Google Play \u5e94\u7528\u5185\u8ba1\u8d39 (In-App Billing) \u5b9e\u73b0\u3002\u5982\u679c\u4f60\u4e4b\u524d\u5df2\u7ecf\u4e3a Google Play \u914d\u7f6e\u4e86\u4f60\u7684\u6e38\u620f\uff0c\u5219 Unity \u5efa\u8bae\u4f7f\u7528 UDP \u5305\u3002"),(0,a.kt)("p",null,"\u53ef\u4ece Unity Package Manager \u6216 Unity Asset Store \u4e2d\u83b7\u53d6 UDP \u5305\u3002"),(0,a.kt)("p",null,"For standalone UDP package installations, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.purchasing.udp@latest/index.html?subfolder=/manual/getting-started.html"},"Installing the UDP package"),"."),(0,a.kt)("h3",{id:"\u4f7f\u7528-udp-\u5305\u548c-unity-iap"},"\u4f7f\u7528 UDP \u5305\u548c Unity IAP"),(0,a.kt)("p",null,"The Unity IAP package version 2.0.0 and above does not contain the UDP DLL. This requires the UDP package version 2.0.0 and above. From these versions on, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.purchasing.udp@latest/index.html?subfolder=/manual/getting-started.html"},"install the UDP package")," and install the Unity IAP package from the Asset Store."),(0,a.kt)("h3",{id:"\u4f7f\u7528-unity-iap"},"\u4f7f\u7528 Unity IAP"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u6e38\u620f\u5df2\u7ecf\u4f7f\u7528 Unity IAP\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 Unity IAP \u5305\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1aUnity \u5efa\u8bae\u5c06 UDP \u5305\u4e0e Unity IAP \u5305\u7248\u672c 2.0.0+\uff08\u53ef\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/add-ons/services/billing/unity-iap-68207"},"Asset Store")," \u4e2d\u83b7\u53d6\uff09\u642d\u914d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"UDP is included in Unity IAP from version 1.22.0 - 1.23.5. If you use the Unity IAP package (1.22.0 - 1.23.5) do not install the UDP package separately. To check which Unity IAP version is installed, go to  ",(0,a.kt)("strong",{parentName:"p"},"Services"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Unity IAP"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"IAP Updates")," . Follow the general implementation guidance of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/UnityIAP.html"},"Unity IAP\u2019s documentation")," before you ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/udp-service-interoperability#%E4%BD%BF%E7%94%A8-unity-iap-%E5%AE%9E%E7%8E%B0%E7%94%A8%E4%BA%8E-udp-%E7%9A%84-iap-%E5%95%86%E5%93%81"},"implement your IAP items with Unity IAP"),"."),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 Unity IAP \u5305\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7801\u6216\u65e0\u4ee3\u7801\u5b9e\u73b0\u65b9\u6cd5\u5728\u6e38\u620f\u4e2d\u5b9e\u73b0 IAP \u5546\u54c1\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u4e0e UDP \u96c6\u6210\uff0c\u8bf7\u4f7f\u7528\u4ee3\u7801\u5b9e\u73b0 IAP\u3002"),(0,a.kt)("h2",{id:"\u7cfb\u7edf\u8981\u6c42"},"\u7cfb\u7edf\u8981\u6c42"),(0,a.kt)("p",null,"Unity 5.6.1 \u6216\u66f4\u9ad8\u7248\u672c\u652f\u6301 UDP\u3002Unity \u5efa\u8bae\u4f7f\u7528 2018.4 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u4ece\u4ee5\u4e0b\u5305\u7248\u672c\u53ca\u66f4\u9ad8\u7248\u672c\u5f00\u59cb\uff0c\u53ef\u5c06 UDP \u5305\u548c Unity IAP \u5305\u4e00\u8d77\u4f7f\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UDP - 2.0.0"),(0,a.kt)("li",{parentName:"ul"},"Unity IAP - 2.0.0\uff08Asset Store \u7248\u672c\uff09")),(0,a.kt)("h2",{id:"accessing-the-udp-console"},"Accessing the UDP console"),(0,a.kt)("p",null,"To access the UDP console, go to the ",(0,a.kt)("a",{parentName:"p",href:"https://distribute.dashboard.unity.com"},"Unity Dashboard")," and select Distribution Portal."),(0,a.kt)("p",null,"To access the UDP console from the Unity Editor, select  ",(0,a.kt)("strong",{parentName:"p"},"Services"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Unity Distribution Portal"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Configure")," . In the Unity Distribution Portal settings, select  ",(0,a.kt)("strong",{parentName:"p"},"Go to UDP console")," ."))}y.isMDXComponent=!0}}]);