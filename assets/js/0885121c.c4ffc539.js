"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41253],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||p;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<p;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35507:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=n(87462),i=n(63366),p=(n(67294),n(3905)),a=["components"],l={id:"universal-render-pipeline",title:"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf",slug:"/render-pipelines/universal-render-pipeline"},o="\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf",c={unversionedId:"graphics/render-pipelines/universal-render-pipeline",id:"graphics/render-pipelines/universal-render-pipeline",title:"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf",description:"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (Universal Render Pipeline, URP) \u662f\u7531 Unity \u5236\u4f5c\u7684\u9884\u6784\u5efa\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf (Scriptable Render Pipeline)\u3002URP \u63d0\u4f9b\u4e86\u5bf9\u7f8e\u672f\u5e08\u53cb\u597d\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u53ef\u8ba9\u60a8\u5728\u79fb\u52a8\u5e73\u53f0\u3001\u9ad8\u7aef\u6e38\u620f\u4e3b\u673a\u548c PC \u7b49\u5404\u79cd\u5e73\u53f0\u4e0a\u5feb\u901f\u8f7b\u677e\u5730\u521b\u5efa\u4f18\u5316\u7684\u56fe\u5f62\u3002",source:"@site/docs/graphics/render-pipelines/universal-render-pipeline.md",sourceDirName:"graphics/render-pipelines",slug:"/render-pipelines/universal-render-pipeline",permalink:"/docs/render-pipelines/universal-render-pipeline",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/render-pipelines/universal-render-pipeline.md",tags:[],version:"current",frontMatter:{id:"universal-render-pipeline",title:"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf",slug:"/render-pipelines/universal-render-pipeline"},sidebar:"tutorialSidebar",previous:{title:"How to get, set, and configure the active render pipeline",permalink:"/docs/render-pipelines/srp-setting-render-pipeline-asset"},next:{title:"\u7740\u8272\u5668",permalink:"/docs/shaders"}},s={},u=[],d={toc:u};function f(e){var r=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf"},"\u4f7f\u7528\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf"),(0,p.kt)("p",null,"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (Universal Render Pipeline, URP) \u662f\u7531 Unity \u5236\u4f5c\u7684\u9884\u6784\u5efa",(0,p.kt)("a",{parentName:"p",href:"/docs/scriptable-render-pipeline"},"\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf (Scriptable Render Pipeline)"),"\u3002URP \u63d0\u4f9b\u4e86\u5bf9\u7f8e\u672f\u5e08\u53cb\u597d\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u53ef\u8ba9\u60a8\u5728\u79fb\u52a8\u5e73\u53f0\u3001\u9ad8\u7aef\u6e38\u620f\u4e3b\u673a\u548c PC \u7b49\u5404\u79cd\u5e73\u53f0\u4e0a\u5feb\u901f\u8f7b\u677e\u5730\u521b\u5efa\u4f18\u5316\u7684\u56fe\u5f62\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/urp-example.png",alt:"urp-example.png"})),(0,p.kt)("p",null,"\u65e9\u671f\u7248\u672c\u7684 URP \u79f0\u4e3a\u8f7b\u91cf\u7ea7\u6e32\u67d3\u7ba1\u7ebf (LWRP)\u3002URP \u66ff\u6362\u4e86 LWRP\u3002"),(0,p.kt)("p",null,"\u6709\u5173\u5982\u4f55\u4f7f\u7528 URP \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest"},"URP \u6587\u6863\u5fae\u578b\u7f51\u7ad9")))}f.isMDXComponent=!0}}]);