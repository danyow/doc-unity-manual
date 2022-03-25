"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87299],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),o=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=o(e.components);return a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(t),f=n,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||c;return t?a.createElement(h,s(s({ref:r},u),{},{components:t})):a.createElement(h,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<c;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48827:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=t(87462),n=t(63366),c=(t(67294),t(3905)),s=["components"],i={id:"SL-Reference",title:"ShaderLab",slug:"/sl-reference"},l="ShaderLab",o={unversionedId:"graphics/shaders/shader-writing/sl-reference/SL-Reference",id:"graphics/shaders/shader-writing/sl-reference/SL-Reference",title:"ShaderLab",description:"ShaderLab \u662f\u4e00\u79cd\u5728\u7740\u8272\u5668\u6e90\u6587\u4ef6\u4e2d\u4f7f\u7528\u7684\u58f0\u660e\u6027\u8bed\u8a00\u3002\u5b83\u4f7f\u7528\u5d4c\u5957\u5927\u62ec\u53f7\u8bed\u6cd5\u6765\u63cf\u8ff0 Shader \u5bf9\u8c61\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/sl-reference.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference",slug:"/sl-reference",permalink:"/doc-unity-manual/docs/sl-reference",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/sl-reference.md",tags:[],version:"current",frontMatter:{id:"SL-Reference",title:"ShaderLab",slug:"/sl-reference"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u4e0d\u540c\u7684\u56fe\u5f62 API \u7f16\u5199\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/shader-writing/sl-platform-differences"},next:{title:"ShaderLab\uff1a\u6dfb\u52a0\u7740\u8272\u5668\u7a0b\u5e8f",permalink:"/doc-unity-manual/docs/sl-reference/shader-shaderlab-code-blocks"}},u={},d=[],p={toc:d};function f(e){var r=e.components,t=(0,n.Z)(e,s);return(0,c.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"shaderlab"},"ShaderLab"),(0,c.kt)("p",null,"ShaderLab \u662f\u4e00\u79cd\u5728\u7740\u8272\u5668\u6e90\u6587\u4ef6\u4e2d\u4f7f\u7528\u7684\u58f0\u660e\u6027\u8bed\u8a00\u3002\u5b83\u4f7f\u7528\u5d4c\u5957\u5927\u62ec\u53f7\u8bed\u6cd5\u6765\u63cf\u8ff0 Shader \u5bf9\u8c61\u3002"),(0,c.kt)("p",null,"\u5728 ShaderLab \u4e2d\u53ef\u4ee5\u5b9a\u4e49\u5f88\u591a\u5185\u5bb9\uff0c\u4f46\u6700\u5e38\u89c1\u7684\u662f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 Shader \u5bf9\u8c61\u7684\u6574\u4f53\u7ed3\u6784\u3002\u53c2\u9605 ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-shader"},"ShaderLab\uff1a\u521b\u5efa\u7740\u8272\u5668"),"\u3001",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-sub-shader"},"ShaderLab\uff1a\u521b\u5efa\u5b50\u7740\u8272\u5668"),"\u548c ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-pass"},"ShaderLab\uff1a\u521b\u5efa\u901a\u9053"),"\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee3\u7801\u5757\u6dfb\u52a0\u7528 HLSL \u7f16\u5199\u7684\u7740\u8272\u5668\u7a0b\u5e8f\u3002\u53c2\u9605 ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-reference/shader-shaderlab-code-blocks"},"ShaderLab\uff1a\u6dfb\u52a0\u7740\u8272\u5668\u7a0b\u5e8f"),"\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5728\u6267\u884c\u7740\u8272\u5668\u7a0b\u5e8f\u6216\u6267\u884c\u6d89\u53ca\u53e6\u4e00\u4e2a\u901a\u9053\u7684\u64cd\u4f5c\u4e4b\u524d\uff0c\u4f7f\u7528\u547d\u4ee4\u8bbe\u7f6e GPU \u7684\u6e32\u67d3\u72b6\u6001\u3002\u53c2\u9605 ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/shader-shaderlab-commands"},"ShaderLab\uff1a\u547d\u4ee4"),"\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u4ece\u7740\u8272\u5668\u4ee3\u7801\u4e2d\u516c\u5f00\u5c5e\u6027\uff0c\u4ee5\u4fbf\u5728 Material Inspector \u4e2d\u7f16\u8f91\u5b83\u4eec\u5e76\u5c06\u5176\u4fdd\u5b58\u4e3a\u6750\u8d28\u8d44\u6e90\u7684\u4e00\u90e8\u5206\u3002\u53c2\u9605 ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-shader/sl-properties"},"ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027"),"\u3002"),(0,c.kt)("li",{parentName:"ul"},"Specifying package requirements for SubShaders and Passes. This enables Unity to run certain SubShaders and Passes only when particular packages are installed in the Unity project. See ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-reference/sl-package-requirements"},"ShaderLab: specifying package requirements"),"."),(0,c.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5f53 Unity \u65e0\u6cd5\u5728\u5f53\u524d\u786c\u4ef6\u4e0a\u4f7f\u7528 Shader \u5bf9\u8c61\u8fd0\u884c\u4efb\u4f55 SubShader \u65f6\u7684\u56de\u9000\u884c\u4e3a\u3002\u53c2\u9605 ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-shader/sl-fallback"},"ShaderLab\uff1a\u5206\u914d\u56de\u9000"),"\u3002")))}f.isMDXComponent=!0}}]);