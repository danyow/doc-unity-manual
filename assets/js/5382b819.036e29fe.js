"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4373],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65821:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"LODForBakedGI",title:"\u5149\u7167\u8d34\u56fe\u548c LOD",slug:"/lightmappers/lodfor-baked-gi"},p="\u5149\u7167\u8d34\u56fe\u548c LOD",c={unversionedId:"graphics/lighting-overview/lightmappers/LODForBakedGI",id:"graphics/lighting-overview/lightmappers/LODForBakedGI",title:"\u5149\u7167\u8d34\u56fe\u548c LOD",description:"\u672c\u9875\u9762\u63d0\u4f9b\u5173\u4e8e\u5982\u4f55\u5c06\u5149\u7167\u70d8\u7119\u5230\u91c7\u7528 Unity LOD\uff08\u7ec6\u8282\u7ea7\u522b\uff09\u7cfb\u7edf\u7684\u6a21\u578b\u4e0a\u7684\u76f8\u5173\u5efa\u8bae\u3002",source:"@site/docs/graphics/lighting-overview/lightmappers/lodfor-baked-gi.md",sourceDirName:"graphics/lighting-overview/lightmappers",slug:"/lightmappers/lodfor-baked-gi",permalink:"/doc-unity-manual/docs/lightmappers/lodfor-baked-gi",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lightmappers/lodfor-baked-gi.md",tags:[],version:"current",frontMatter:{id:"LODForBakedGI",title:"\u5149\u7167\u8d34\u56fe\u548c LOD",slug:"/lightmappers/lodfor-baked-gi"},sidebar:"tutorialSidebar",previous:{title:"\u5149\u7167\u8d34\u56fe\uff1a\u6280\u672f\u4fe1\u606f",permalink:"/doc-unity-manual/docs/lightmappers/lightmaps-technical-information"},next:{title:"Lightmapping and shaders",permalink:"/doc-unity-manual/docs/lightmappers/meta-pass"}},s={},u=[],d={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5149\u7167\u8d34\u56fe\u548c-lod"},"\u5149\u7167\u8d34\u56fe\u548c LOD"),(0,a.kt)("p",null,"\u672c\u9875\u9762\u63d0\u4f9b\u5173\u4e8e\u5982\u4f55\u5c06\u5149\u7167\u70d8\u7119\u5230\u91c7\u7528 Unity ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/level-of-detail"},"LOD\uff08\u7ec6\u8282\u7ea7\u522b\uff09"),"\u7cfb\u7edf\u7684\u6a21\u578b\u4e0a\u7684\u76f8\u5173\u5efa\u8bae\u3002"),(0,a.kt)("p",null,"When you use the Progressive Lightmapper, there is no need to place Light Probes around an LOD Group to generate baked indirect lighting."),(0,a.kt)("p",null,"Enlighten Baked Global Illumination can only compute direct lighting for lower LODs, and the LOD system must rely on ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/light-probes"},"Light Probes")," to sample indirect lighting."),(0,a.kt)("p",null,"If you do not place Light Probes, your lower LOD models may appear visually incorrect because they only receive direct light."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LODForBakedGI-1.png",alt:"The LOD 1 and LOD 2 models here are lit incorrectly because light probes have not been placed around the model in the scene. They only show direct lighting."})),(0,a.kt)("p",null,"The LOD 1 and LOD 2 models here are lit incorrectly because light probes have not been placed around the model in the scene. They only show direct lighting."),(0,a.kt)("p",null,"\u8981\u6b63\u786e\u8bbe\u7f6e\u70d8\u7119\u5149\u7167\u7684 LOD \u6a21\u578b\uff0c\u5e94\u5c06 LOD \u6e38\u620f\u5bf9\u8c61\u6807\u8bb0\u4e3a  ",(0,a.kt)("strong",{parentName:"p"},"Contribute GI")," \u3002\u4e3a\u6b64\uff0c\u8bf7\u9009\u62e9\u6e38\u620f\u5bf9\u8c61\uff0c\u7136\u540e\u5728 Inspector \u7a97\u53e3\u9876\u90e8\u9009\u62e9  ",(0,a.kt)("strong",{parentName:"p"},"Static"),"  \u590d\u9009\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u83dc\u5355\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LODForBakedGI-2.png",alt:"\u672c\u793a\u4f8b\u4e2d\u5047\u5b9a LOD \u4e3a\u8be5\u6e38\u620f\u5bf9\u8c61\u7684\u5b50\u9879"})),(0,a.kt)("p",null,"\u672c\u793a\u4f8b\u4e2d\u5047\u5b9a LOD \u4e3a\u8be5\u6e38\u620f\u5bf9\u8c61\u7684\u5b50\u9879"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/light-probes"},"\u5149\u7167\u63a2\u9488\u7ec4\u4ef6"),"\u5c06\u5149\u7167\u63a2\u9488\u7f6e\u4e8e LOD \u6e38\u620f\u5bf9\u8c61\u5468\u56f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LODForBakedGI-3.png",alt:"Light probes placed around an LOD model."})),(0,a.kt)("p",null,"Light probes placed around an LOD model."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u53ea\u6709\u7ec6\u8282\u7ea7\u522b\u6700\u9ad8\u7684\u6a21\u578b\u4f1a\u5f71\u54cd\u5468\u56f4\u51e0\u4f55\u4f53\u7684\u5149\u7167\uff08\u6bd4\u5982\uff0c\u5468\u56f4\u5efa\u7b51\u7684\u9634\u5f71\u6216\u8005\u53cd\u5c04\u5149\uff09\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5e94\u8be5\u4e0d\u662f\u95ee\u9898\uff0c\u56e0\u4e3a\u8f83\u4f4e\u7ec6\u8282\u7ea7\u522b\u7684\u6a21\u578b\u4e0e\u6700\u9ad8\u7ec6\u8282\u7ea7\u522b\u7684\u6a21\u578b\u5e94\u8be5\u662f\u9ad8\u5ea6\u76f8\u4f3c\u7684\u3002"))}g.isMDXComponent=!0}}]);