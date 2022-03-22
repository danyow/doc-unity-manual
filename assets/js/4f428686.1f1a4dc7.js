"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44054],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=n.createContext({}),u=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(f.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,f=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,v=p["".concat(f,".").concat(m)]||p[m]||o[m]||c;return r?n.createElement(v,s(s({ref:t},l),{},{components:r})):n.createElement(v,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=p;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<c;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},21209:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return o}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),s=["components"],i={id:"class-VisualEffect",title:"Visual Effect",slug:"/vfxgraph/class-visual-effect"},f="Visual Effect",u={unversionedId:"graphics/visual-effects/particle-systems/vfxgraph/class-VisualEffect",id:"graphics/visual-effects/particle-systems/vfxgraph/class-VisualEffect",title:"Visual Effect",description:"Visual Effect \u7ec4\u4ef6\u5305\u542b\u57fa\u672c\u63a7\u4ef6\uff0c\u7528\u4e8e\u914d\u7f6e\u573a\u666f\u4e2d\u7684\u89c6\u89c9\u6548\u679c\u5b9e\u4f8b\u3002",source:"@site/docs/graphics/visual-effects/particle-systems/vfxgraph/class-visual-effect.md",sourceDirName:"graphics/visual-effects/particle-systems/vfxgraph",slug:"/vfxgraph/class-visual-effect",permalink:"/docs/vfxgraph/class-visual-effect",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/particle-systems/vfxgraph/class-visual-effect.md",tags:[],version:"current",frontMatter:{id:"class-VisualEffect",title:"Visual Effect",slug:"/vfxgraph/class-visual-effect"},sidebar:"tutorialSidebar",previous:{title:"Operator Subgraph",permalink:"/docs/vfxgraph/class-visual-effect-subgraph-operator"},next:{title:"Property Binder",permalink:"/docs/vfxgraph/script-vfxproperty-binder"}},l={},o=[],p={toc:o};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"visual-effect"},"Visual Effect"),(0,c.kt)("p",null,"Visual Effect \u7ec4\u4ef6\u5305\u542b\u57fa\u672c\u63a7\u4ef6\uff0c\u7528\u4e8e\u914d\u7f6e\u573a\u666f\u4e2d\u7684\u89c6\u89c9\u6548\u679c\u5b9e\u4f8b\u3002"),(0,c.kt)("p",null,"\u4ec5\u5f53\u5b89\u88c5\u4e86 Visual Effect Graph \u5305\u65f6\uff0c\u6b64\u7ec4\u4ef6\u624d\u6709\u6548\u3002\u6709\u5173\u5982\u4f55\u5b89\u88c5 Visual Effect Graph \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/docs/upm-ui-actions/upm-ui-install"},"\u5305\u6587\u6863"),"\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u5982\u4f55\u4f7f\u7528 Visual Effect \u7ec4\u4ef6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Visual Effect Graph ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.visualeffectgraph@latest/index.html?subfolder=/manual/VisualEffectComponent.html"},"\u5305\u6587\u6863"),"\u3002"))}m.isMDXComponent=!0}}]);