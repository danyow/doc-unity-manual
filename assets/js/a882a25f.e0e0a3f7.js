"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3561],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),m=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=m(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||l[f]||i;return n?r.createElement(d,o(o({ref:e},u),{},{components:n})):r.createElement(d,o({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98882:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"AnimationStateMachines",title:"\u52a8\u753b\u72b6\u6001\u673a",slug:"/animation-state-machines"},s="\u52a8\u753b\u72b6\u6001\u673a",m={unversionedId:"animation-section/animator-controllers/animation-state-machines/AnimationStateMachines",id:"animation-section/animator-controllers/animation-state-machines/AnimationStateMachines",title:"\u52a8\u753b\u72b6\u6001\u673a",description:"\u89d2\u8272\u6216\u5176\u4ed6\u52a8\u753b\u6e38\u620f\u5bf9\u8c61\u901a\u5e38\u5177\u6709\u82e5\u5e72\u4e0d\u540c\u7684\u52a8\u753b\uff0c\u8fd9\u4e9b\u52a8\u753b\u5bf9\u5e94\u4e8e\u8be5\u89d2\u8272\u6216\u5bf9\u8c61\u53ef\u5728\u6e38\u620f\u4e2d\u6267\u884c\u7684\u4e0d\u540c\u52a8\u4f5c\u3002\u4f8b\u5982\uff0c\u89d2\u8272\u53ef\u4ee5\u5728\u7a7a\u95f2\u65f6\u8f7b\u5fae\u547c\u5438\u6216\u6447\u6446\uff0c\u5728\u5f97\u5230\u6307\u4ee4\u65f6\u884c\u8d70\uff0c\u4ee5\u53ca\u4ece\u5e73\u53f0\u4e0a\u8dcc\u843d\u65f6\u6050\u614c\u5730\u62ac\u8d77\u624b\u81c2\u3002\u4e00\u6247\u95e8\u53ef\u80fd\u5177\u6709\u6253\u5f00\u3001\u5173\u95ed\u3001\u5361\u4f4f\u548c\u649e\u5f00\u52a8\u4f5c\u7684\u52a8\u753b\u3002Mecanim \u4f7f\u7528\u7c7b\u4f3c\u4e8e\u6d41\u7a0b\u56fe\u7684\u53ef\u89c6\u5316\u5e03\u5c40\u7cfb\u7edf\u6765\u8868\u793a \u72b6\u6001\u673a \uff0c\u4ece\u800c\u63a7\u5236\u9700\u8981\u5728\u89d2\u8272\u6216\u5bf9\u8c61\u4e0a\u4f7f\u7528\u7684\u52a8\u753b\u526a\u8f91\u5e76\u5bf9\u8fd9\u4e9b\u52a8\u753b\u526a\u8f91\u6392\u5e8f\u3002\u672c\u90e8\u5206\u5c06\u63d0\u4f9b\u6709\u5173 Mecanim \u72b6\u6001\u673a\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u72b6\u6001\u673a\u3002",source:"@site/docs/animation-section/animator-controllers/animation-state-machines/animation-state-machines.md",sourceDirName:"animation-section/animator-controllers/animation-state-machines",slug:"/animation-state-machines",permalink:"/doc-unity-manual/docs/animation-state-machines",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-section/animator-controllers/animation-state-machines/animation-state-machines.md",tags:[],version:"current",frontMatter:{id:"AnimationStateMachines",title:"\u52a8\u753b\u72b6\u6001\u673a",slug:"/animation-state-machines"},sidebar:"tutorialSidebar",previous:{title:"Animator Controllers",permalink:"/doc-unity-manual/docs/animator-controllers"},next:{title:"\u52a8\u753b\u5c42",permalink:"/doc-unity-manual/docs/animation-state-machines/animation-layers"}},u={},l=[],p={toc:l};function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u52a8\u753b\u72b6\u6001\u673a"},"\u52a8\u753b\u72b6\u6001\u673a"),(0,i.kt)("p",null,"\u89d2\u8272\u6216\u5176\u4ed6\u52a8\u753b\u6e38\u620f\u5bf9\u8c61\u901a\u5e38\u5177\u6709\u82e5\u5e72\u4e0d\u540c\u7684\u52a8\u753b\uff0c\u8fd9\u4e9b\u52a8\u753b\u5bf9\u5e94\u4e8e\u8be5\u89d2\u8272\u6216\u5bf9\u8c61\u53ef\u5728\u6e38\u620f\u4e2d\u6267\u884c\u7684\u4e0d\u540c\u52a8\u4f5c\u3002\u4f8b\u5982\uff0c\u89d2\u8272\u53ef\u4ee5\u5728\u7a7a\u95f2\u65f6\u8f7b\u5fae\u547c\u5438\u6216\u6447\u6446\uff0c\u5728\u5f97\u5230\u6307\u4ee4\u65f6\u884c\u8d70\uff0c\u4ee5\u53ca\u4ece\u5e73\u53f0\u4e0a\u8dcc\u843d\u65f6\u6050\u614c\u5730\u62ac\u8d77\u624b\u81c2\u3002\u4e00\u6247\u95e8\u53ef\u80fd\u5177\u6709\u6253\u5f00\u3001\u5173\u95ed\u3001\u5361\u4f4f\u548c\u649e\u5f00\u52a8\u4f5c\u7684\u52a8\u753b\u3002Mecanim \u4f7f\u7528\u7c7b\u4f3c\u4e8e\u6d41\u7a0b\u56fe\u7684\u53ef\u89c6\u5316\u5e03\u5c40\u7cfb\u7edf\u6765\u8868\u793a ",(0,i.kt)("strong",{parentName:"p"},"\u72b6\u6001\u673a")," \uff0c\u4ece\u800c\u63a7\u5236\u9700\u8981\u5728\u89d2\u8272\u6216\u5bf9\u8c61\u4e0a\u4f7f\u7528\u7684\u52a8\u753b\u526a\u8f91\u5e76\u5bf9\u8fd9\u4e9b\u52a8\u753b\u526a\u8f91\u6392\u5e8f\u3002\u672c\u90e8\u5206\u5c06\u63d0\u4f9b\u6709\u5173 Mecanim \u72b6\u6001\u673a\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u72b6\u6001\u673a\u3002"))}f.isMDXComponent=!0}}]);