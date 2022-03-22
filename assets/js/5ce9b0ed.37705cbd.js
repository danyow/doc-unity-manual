"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21471],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),h=a,m=l["".concat(o,".").concat(h)]||l[h]||f[h]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=l;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},35997:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),i=["components"],s={id:"VFXGraph",title:"Visual Effect Graph",slug:"/vfxgraph"},o=void 0,p={unversionedId:"graphics/visual-effects/particle-systems/vfxgraph/VFXGraph",id:"graphics/visual-effects/particle-systems/vfxgraph/VFXGraph",title:"Visual Effect Graph",description:"Visual Effect Graph",source:"@site/docs/graphics/visual-effects/particle-systems/vfxgraph/vfxgraph.md",sourceDirName:"graphics/visual-effects/particle-systems/vfxgraph",slug:"/vfxgraph",permalink:"/docs/vfxgraph",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/particle-systems/vfxgraph/vfxgraph.md",tags:[],version:"current",frontMatter:{id:"VFXGraph",title:"Visual Effect Graph",slug:"/vfxgraph"},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u7c92\u5b50\u7cfb\u7edf\u89e3\u51b3\u65b9\u6848",permalink:"/docs/particle-systems/choosing-your-particle-system"},next:{title:"Project Settings - VFX",permalink:"/docs/vfxgraph/class-vfxmanager"}},u={},f=[{value:"Visual Effect Graph",id:"visual-effect-graph",level:2}],l={toc:f};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"visual-effect-graph"},"Visual Effect Graph"),(0,c.kt)("p",null,"Visual Effect Graph \u662f\u4e00\u4e2a\u53ef\u7528\u4e8e\u4e3a Unity \u9879\u76ee\u521b\u5efa\u5927\u89c4\u6a21\u89c6\u89c9\u6548\u679c\u7684\u5305\u3002Visual Effect Graph \u5229\u7528 GPU \u6a21\u62df\u7c92\u5b50\u884c\u4e3a\uff0c\u53ef\u6a21\u62df\u7684\u7c92\u5b50\u6570\u91cf\u8fdc\u8fdc\u8d85\u8fc7\u5185\u7f6e\u7c92\u5b50\u7cfb\u7edf\u3002\u5982\u679c\u8981\u521b\u5efa\u5305\u542b\u5927\u91cf\u7c92\u5b50\u7684\u89c6\u89c9\u6548\u679c\u5e76\u4e14\u9700\u8981\u9ad8\u5ea6\u53ef\u81ea\u5b9a\u4e49\u7684\u884c\u4e3a\uff0c\u8bf7\u4f7f\u7528 Visual Effect Graph \u800c\u4e0d\u662f\u5185\u7f6e\u7c92\u5b50\u7cfb\u7edf\u3002\u6709\u5173\u5b89\u88c5\u548c\u4f7f\u7528 Visual Effect Graph \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.visualeffectgraph@latest/index.html?subfolder=/manual/GettingStarted.html"},"\u5165\u95e8\u6307\u5357"),"\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ParticleSystems-Reactor.png",alt:"\u4f7f\u7528 Visual Effect Graph \u5236\u4f5c\u7279\u6548\u7684\u793a\u4f8b\u3002"})),(0,c.kt)("p",null,"\u4f7f\u7528 Visual Effect Graph \u5236\u4f5c\u7279\u6548\u7684\u793a\u4f8b\u3002"))}h.isMDXComponent=!0}}]);