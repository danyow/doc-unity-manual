"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50606],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=o,g=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3645:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"webgl-intro",title:"Introduction to WebGL",slug:"/webgl-intro"},c="Introduction to WebGL",u={unversionedId:"platform-specific/webgl/webgl-intro/webgl-intro",id:"platform-specific/webgl/webgl-intro/webgl-intro",title:"Introduction to WebGL",description:"The WebGL option in the Unity Editor allows you to publish content as JavaScript programs which use HTML5/JavaScript, WebAssembly, WebGL rendering API, and other web standards to run Unity content in a web browser.",source:"@site/docs/platform-specific/webgl/webgl-intro/webgl-intro.md",sourceDirName:"platform-specific/webgl/webgl-intro",slug:"/webgl-intro",permalink:"/docs/webgl-intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/webgl/webgl-intro/webgl-intro.md",tags:[],version:"current",frontMatter:{id:"webgl-intro",title:"Introduction to WebGL",slug:"/webgl-intro"},sidebar:"tutorialSidebar",previous:{title:"Texture Compression in WebGL",permalink:"/docs/webgl-gettingstarted/webgl-texture-format"},next:{title:"Audio in WebGL",permalink:"/docs/webgl-intro/webgl-audio"}},s={},p=[],b={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-webgl"},"Introduction to WebGL"),(0,a.kt)("p",null,"The WebGL option in the Unity Editor allows you to publish content as JavaScript programs which use HTML5/JavaScript, WebAssembly, WebGL rendering API, and other web standards to run Unity content in a web browser."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/webgl-land.png",alt:"DragonCrashers running on WebGL"})),(0,a.kt)("p",null,"DragonCrashers running on WebGL"),(0,a.kt)("p",null,"This section covers the following WebGL topics:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/webgl-intro/webgl-browsercompatibility"},"WebGL Browser Compatibility")),(0,a.kt)("td",{parentName:"tr",align:null},"A list of the supported browsers for WebGL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/webgl-intro/webgl-graphics"},"WebGL Graphics")),(0,a.kt)("td",{parentName:"tr",align:null},"How to use the WebGL Graphics API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/webgl-intro/webgl-audio"},"Using Audio in WebGL")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about audio capabilities in WebGL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/webgl-intro/webgl-embeddedresources"},"Embedded Resources on WebGL")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about embedded resources in WebGL.")))))}d.isMDXComponent=!0}}]);