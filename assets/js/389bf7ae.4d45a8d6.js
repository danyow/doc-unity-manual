"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85626],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=u(n),s=a,m=g["".concat(l,".").concat(s)]||g[s]||d[s]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},26736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"lighting-precomputed-data",title:"\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e",slug:"/lighting-precomputed-data"},l="\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e",u={unversionedId:"graphics/lighting-overview/lighting-precomputed-data/lighting-precomputed-data",id:"graphics/lighting-overview/lighting-precomputed-data/lighting-precomputed-data",title:"\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e",description:"Precomputed lighting data and baked lighting are not the same.",source:"@site/docs/graphics/lighting-overview/lighting-precomputed-data/lighting-precomputed-data.md",sourceDirName:"graphics/lighting-overview/lighting-precomputed-data",slug:"/lighting-precomputed-data",permalink:"/doc-unity-manual/docs/lighting-precomputed-data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lighting-precomputed-data/lighting-precomputed-data.md",tags:[],version:"current",frontMatter:{id:"lighting-precomputed-data",title:"\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e",slug:"/lighting-precomputed-data"},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u5149\u6750\u8d28",permalink:"/doc-unity-manual/docs/lighting-light-sources/lighting-emissive-materials"},next:{title:"GI \u7f13\u5b58",permalink:"/doc-unity-manual/docs/lighting-precomputed-data/gicache"}},p={},d=[],g={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e"},"\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e"),(0,i.kt)("p",null,"Precomputed lighting data and baked lighting are not the same."),(0,i.kt)("p",null,"Baked lighting data is static. For example, the appearance of a GameObject can change as it moves around a Light Probe (if that GameObject has Contribute Global Illumination enabled). However, the data in the Light Probe itself does not change. Unity can store baked lighting data in lightmaps, Light Probes, and Reflection Probes."),(0,i.kt)("p",null,"Enlighten Realtime Global Illumination does not rely on baked lighting. Instead, it uses precomputed visibility data to speed up the process of determining how a light moving in real-time affects the surfaces that its rays can reach."),(0,i.kt)("p",null,"\u672c\u8282\u5305\u542b\u4ee5\u4e0b\u4e3b\u9898\u7684\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/lighting-precomputed-data/using-precomputed-lighting"},"\u751f\u6210\u5149\u7167\u6570\u636e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/lighting-precomputed-data/lightmap-snapshot"},"\u5149\u7167\u6570\u636e\u8d44\u6e90")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/lighting-precomputed-data/gicache"},"GI \u7f13\u5b58"))))}s.isMDXComponent=!0}}]);