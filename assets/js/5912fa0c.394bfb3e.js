"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12900],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,f=u["".concat(p,".").concat(h)]||u[h]||s[h]||o;return r?n.createElement(f,l(l({ref:t},g),{},{components:r})):n.createElement(f,l({ref:t},g))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85183:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],a={id:"LightingExplorer",title:"Light Explorer \u7a97\u53e3",slug:"/lighting-explorer"},p="Light Explorer \u7a97\u53e3",c={unversionedId:"graphics/lighting-overview/lighting-explorer/LightingExplorer",id:"graphics/lighting-overview/lighting-explorer/LightingExplorer",title:"Light Explorer \u7a97\u53e3",description:"\u5728 Light Explorer \u7a97\u53e3\u4e2d\u53ef\u9009\u62e9\u548c\u7f16\u8f91\u5149\u6e90\u3002\u8981\u4ece\u83dc\u5355\u4e2d\u6253\u5f00 Light Explorer \u7a97\u53e3\uff0c\u8bf7\u5bfc\u822a\u81f3  Window  &gt;  Rendering  &gt;  Light Explorer \u3002",source:"@site/docs/graphics/lighting-overview/lighting-explorer/lighting-explorer.md",sourceDirName:"graphics/lighting-overview/lighting-explorer",slug:"/lighting-explorer",permalink:"/doc-unity-manual/docs/lighting-explorer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lighting-explorer/lighting-explorer.md",tags:[],version:"current",frontMatter:{id:"LightingExplorer",title:"Light Explorer \u7a97\u53e3",slug:"/lighting-explorer"},sidebar:"tutorialSidebar",previous:{title:"\u5149\u7167\u63a2\u9488\uff1a\u6280\u672f\u4fe1\u606f",permalink:"/doc-unity-manual/docs/light-probes/light-probes-technical-information"},next:{title:"Light Explorer \u6269\u5c55",permalink:"/doc-unity-manual/docs/lighting-explorer/light-explorer-extension"}},g={},s=[],u={toc:s};function h(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"light-explorer-\u7a97\u53e3"},"Light Explorer \u7a97\u53e3"),(0,o.kt)("p",null,"\u5728 Light Explorer \u7a97\u53e3\u4e2d\u53ef\u9009\u62e9\u548c\u7f16\u8f91\u5149\u6e90\u3002\u8981\u4ece\u83dc\u5355\u4e2d\u6253\u5f00 Light Explorer \u7a97\u53e3\uff0c\u8bf7\u5bfc\u822a\u81f3  ",(0,o.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Rendering"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Light Explorer")," \u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2d-light-explorer.png",alt:"2d-light-explorer.png"})),(0,o.kt)("p",null,"Use the four tabs at the top of the panel to view settings for the ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-light"},"Lights"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/Lights-2D-intro.html"},"2D Lights"),", ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/reflection-probes/class-reflection-probe"},"Reflection Probes"),", ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/light-probes"},"Light Probes"),", and Static Emissives in the current Scene. The editable parameters are the most commonly-used fields for each component type."),(0,o.kt)("p",null,"\u4f7f\u7528\u641c\u7d22\u5b57\u6bb5\u53ef\u5728\u6bcf\u4e2a\u8868\u4e2d\u7b5b\u9009\u540d\u79f0\u3002\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u8981\u5904\u7406\u7684\u5149\u6e90\uff0c\u7136\u540e\u52fe\u9009  ",(0,o.kt)("strong",{parentName:"p"},"Lock Selection"),"  \u590d\u9009\u6846\u3002\u5373\u4f7f\u5728\u573a\u666f\u4e2d\u9009\u62e9\u4e86\u4e0d\u540c\u7684\u5149\u6e90\uff0c\u4e5f\u53ea\u6709\u52fe\u9009\u590d\u9009\u6846\u65f6\u9009\u62e9\u7684\u5149\u6e90\u624d\u4f1a\u4fdd\u7559\u5728\u5149\u6e90\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u3002"))}h.isMDXComponent=!0}}]);