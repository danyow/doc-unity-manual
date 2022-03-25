"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9261],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),c=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),h=n,v=p["".concat(d,".").concat(h)]||p[h]||u[h]||s;return t?a.createElement(v,o(o({ref:r},l),{},{components:t})):a.createElement(v,o({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22631:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=t(87462),n=t(63366),s=(t(67294),t(3905)),o=["components"],i={id:"shader-variant-collections",title:"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",slug:"/shader-variants-and-keywords/shader-variant-collections"},d="\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",c={unversionedId:"graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-collections",id:"graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-collections",title:"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",description:"A shader variant collection is effectively a list of shader variants. Use shader variant collections to prewarm shader variants, or to ensure that shader variants that are required at runtime but not referenced in a scene are not excluded (\u201cstripped\u201d) from your build.",source:"@site/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-collections.md",sourceDirName:"graphics/shaders/shaders-overview/shader-variants-and-keywords",slug:"/shader-variants-and-keywords/shader-variant-collections",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-variant-collections",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-variant-collections.md",tags:[],version:"current",frontMatter:{id:"shader-variant-collections",title:"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",slug:"/shader-variants-and-keywords/shader-variant-collections"},sidebar:"tutorialSidebar",previous:{title:"Shader keywords",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords"},next:{title:"Shader variant stripping",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-variant-stripping"}},l={},u=[{value:"\u521b\u5efa\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90",id:"\u521b\u5efa\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90",level:2},{value:"\u67e5\u770b\u548c\u7f16\u8f91\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",id:"\u67e5\u770b\u548c\u7f16\u8f91\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",level:2},{value:"\u9884\u70ed\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",id:"\u9884\u70ed\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408",level:2}],p={toc:u};function h(e){var r=e.components,t=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408"},"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408"),(0,s.kt)("p",null,"A shader variant collection is effectively a list of ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-variants"},"shader variants"),". Use shader variant collections to ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shaders-overview/shader-loading"},"prewarm shader variants"),", or to ensure that shader variants that are required at runtime but not referenced in a scene are not excluded (\u201cstripped\u201d) from your build."),(0,s.kt)("h2",{id:"\u521b\u5efa\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90"},"\u521b\u5efa\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90"),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5728 Create Asset \u83dc\u5355\u4e2d\uff0c\u9009\u62e9  ",(0,s.kt)("strong",{parentName:"li"},"Shader"),"  ",">","  ",(0,s.kt)("strong",{parentName:"li"},"Shader Variant Collection")," \u3002"),(0,s.kt)("li",{parentName:"ul"},"Unity \u7f16\u8f91\u5668\u53ef\u4ee5\u8ddf\u8e2a\u5e94\u7528\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u54ea\u4e9b\u7740\u8272\u5668\u53d8\u4f53\uff0c\u5e76\u81ea\u52a8\u521b\u5efa\u5305\u542b\u4e00\u4e2a\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90\u6765\u5305\u542b\u8fd9\u4e9b\u7740\u8272\u5668\u53d8\u4f53\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/comp-manager-group/class-graphics-settings#shader-loading"},"Graphics \u8bbe\u7f6e\uff1a\u7740\u8272\u5668\u52a0\u8f7d"),"\u3002")),(0,s.kt)("h2",{id:"\u67e5\u770b\u548c\u7f16\u8f91\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408"},"\u67e5\u770b\u548c\u7f16\u8f91\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ShaderVariantCollection.png",alt:"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u68c0\u89c6\u9762\u677f (Inspector)"})),(0,s.kt)("p",null,"\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u68c0\u89c6\u9762\u677f (Inspector)"),(0,s.kt)("p",null,"\u5728 Unity \u9879\u76ee\u4e2d\u9009\u62e9\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90\u65f6\uff0c\u53ef\u4ee5\u5728 Inspector \u4e2d\u5bf9\u5176\u8fdb\u884c\u67e5\u770b\u548c\u7f16\u8f91\u3002"),(0,s.kt)("p",null,"Use the controls to build a list of ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.PassType.html"},"Pass types")," and ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords"},"shader keyword")," combinations to load in advance."),(0,s.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ShaderVariantCollection.html"},"ShaderVariantCollection")," API \u6765\u914d\u7f6e\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u8d44\u6e90\u3002"),(0,s.kt)("h2",{id:"\u9884\u70ed\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408"},"\u9884\u70ed\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408"),(0,s.kt)("p",null,"\u4e3a\u907f\u514d\u5728\u6027\u80fd\u5f00\u9500\u5927\u65f6\u51fa\u73b0\u660e\u663e\u7684\u505c\u987f\uff0cUnity \u53ef\u4ee5\u8981\u6c42\u56fe\u5f62\u9a71\u52a8\u7a0b\u5e8f\u5728\u9996\u6b21\u9700\u8981\u7740\u8272\u5668\u53d8\u4f53\u4e4b\u524d\u521b\u5efa\u5b83\u4eec\u7684 GPU \u8868\u793a\u5f62\u5f0f\u3002\u8fd9\u79f0\u4e3a ",(0,s.kt)("strong",{parentName:"p"},"\u9884\u70ed")," \u3002\u6709\u5173\u5728\u7740\u8272\u5668\u53d8\u4f53\u96c6\u5408\u4e2d\u9884\u70ed\u7740\u8272\u5668\u53d8\u4f53\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shaders-overview/shader-loading#%E9%A2%84%E7%83%AD%E7%9D%80%E8%89%B2%E5%99%A8%E5%8F%98%E4%BD%93"},"\u7740\u8272\u5668\u52a0\u8f7d\uff1a\u9884\u70ed\u7740\u8272\u5668\u53d8\u4f53"),"\u3002"))}h.isMDXComponent=!0}}]);