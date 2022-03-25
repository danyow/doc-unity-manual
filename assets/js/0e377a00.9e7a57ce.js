"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62219],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3067:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"Shaders",title:"\u7740\u8272\u5668",slug:"/shaders"},u="\u7740\u8272\u5668",s={unversionedId:"graphics/shaders/Shaders",id:"graphics/shaders/Shaders",title:"\u7740\u8272\u5668",description:"\u672c\u8282\u5305\u542b\u5728 Unity \u4e2d\u4f7f\u7528\u7740\u8272\u5668\u7684\u4fe1\u606f\u3002",source:"@site/docs/graphics/shaders/shaders.md",sourceDirName:"graphics/shaders",slug:"/shaders",permalink:"/doc-unity-manual/docs/shaders",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shaders.md",tags:[],version:"current",frontMatter:{id:"Shaders",title:"\u7740\u8272\u5668",slug:"/shaders"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf",permalink:"/doc-unity-manual/docs/render-pipelines/universal-render-pipeline"},next:{title:"\u5185\u7f6e\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/shader-built-in"}},p={},c=[{value:"\u66f4\u591a\u8d44\u6e90",id:"\u66f4\u591a\u8d44\u6e90",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7740\u8272\u5668"},"\u7740\u8272\u5668"),(0,i.kt)("p",null,"\u672c\u8282\u5305\u542b\u5728 Unity \u4e2d\u4f7f\u7528\u7740\u8272\u5668\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/shaders-example.png",alt:"\u4f7f\u7528 Unity \u7684 Shader Graph \u5de5\u5177\u521b\u5efa\u7684\u7740\u8272\u5668\u3002 "})),(0,i.kt)("p",null,"\u4f7f\u7528 Unity \u7684 Shader Graph \u5de5\u5177\u521b\u5efa\u7684\u7740\u8272\u5668\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders-overview"},"\u7740\u8272\u5668\u6838\u5fc3\u6982\u5ff5")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7406\u89e3\u548c\u5728 Unity \u4e2d\u4f7f\u7528\u7740\u8272\u5668\u7684\u57fa\u7840\u77e5\u8bc6\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-built-in"},"\u5185\u7f6e\u7740\u8272\u5668")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u4f55\u4f7f\u7528 Unity \u9644\u5e26\u7684\u9884\u6784\u5efa\u7740\u8272\u5668\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders/shader-graph"},"\u4f7f\u7528 Shader Graph")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u4f55\u4f7f\u7528 Shader Graph\uff0c\u8fd9\u662f\u4e00\u4e2a\u65e0\u9700\u7f16\u5199\u4ee3\u7801\u5c31\u80fd\u521b\u5efa\u7740\u8272\u5668\u7684\u5de5\u5177\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-writing"},"\u7f16\u5199\u7740\u8272\u5668")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u4f55\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\u521b\u5efa\u7740\u8272\u5668\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-performance-debugging"},"\u7740\u8272\u5668\u6027\u80fd\u548c\u6027\u80fd\u5206\u6790")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u4f55\u5728\u8fd0\u884c\u65f6\u8c03\u8bd5\u548c\u5206\u6790\u7740\u8272\u5668\u7684\u6027\u80fd\u3002")))),(0,i.kt)("h2",{id:"\u66f4\u591a\u8d44\u6e90"},"\u66f4\u591a\u8d44\u6e90"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.unity3d.com/tag/shader/"},"\u5e26\u6709 \u201cshader\u201d \u6807\u7b7e\u7684 Unity \u535a\u5ba2\u6587\u7ae0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.unity.com/tutorials/?k=%5B%22lang%3Aen%22%2C%22tag%3A5d351f0c7fbf7d006af48184%22%5D&ob=recency"},"\u6709\u5173\u6750\u8d28\u548c\u7740\u8272\u5668\u7684 Unity Learn \u6559\u7a0b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forum.unity.com/forums/shaders.16/"},"Unity \u7740\u8272\u5668\u8bba\u575b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forum.unity.com/forums/shader-graph.346/"},"Unity Shader Graph \u8bba\u575b"))))}m.isMDXComponent=!0}}]);