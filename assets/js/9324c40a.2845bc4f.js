"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76681],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return c}});var a=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,o=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),k=p(r),c=i,N=k["".concat(o,".").concat(c)]||k[c]||s[c]||n;return r?a.createElement(N,l(l({ref:e},u),{},{components:r})):a.createElement(N,l({ref:e},u))}));function c(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,l=new Array(n);l[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:i,l[1]=m;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},91088:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s}});var a=r(87462),i=r(63366),n=(r(67294),r(3905)),l=["components"],m={id:"svt-requirements-compatibility",title:"Streaming Virtual Texturing \u8981\u6c42\u548c\u517c\u5bb9\u6027",slug:"/svt-streaming-virtual-texturing/svt-requirements-compatibility"},o="Streaming Virtual Texturing \u8981\u6c42\u548c\u517c\u5bb9\u6027",p={unversionedId:"graphics/textures/svt-streaming-virtual-texturing/svt-requirements-compatibility",id:"graphics/textures/svt-streaming-virtual-texturing/svt-requirements-compatibility",title:"Streaming Virtual Texturing \u8981\u6c42\u548c\u517c\u5bb9\u6027",description:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301",source:"@site/docs/graphics/textures/svt-streaming-virtual-texturing/svt-requirements-compatibility.md",sourceDirName:"graphics/textures/svt-streaming-virtual-texturing",slug:"/svt-streaming-virtual-texturing/svt-requirements-compatibility",permalink:"/doc-unity-manual/docs/svt-streaming-virtual-texturing/svt-requirements-compatibility",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/textures/svt-streaming-virtual-texturing/svt-requirements-compatibility.md",tags:[],version:"current",frontMatter:{id:"svt-requirements-compatibility",title:"Streaming Virtual Texturing \u8981\u6c42\u548c\u517c\u5bb9\u6027",slug:"/svt-streaming-virtual-texturing/svt-requirements-compatibility"},sidebar:"tutorialSidebar",previous:{title:'\u5c06\u7eb9\u7406\u6807\u8bb0\u4e3a"\u4ec5\u865a\u62df\u7eb9\u7406"',permalink:"/doc-unity-manual/docs/svt-streaming-virtual-texturing/svt-marking-textures"},next:{title:"\u5728 Shader Graph \u4e2d\u4f7f\u7528 Streaming Virtual Texturing",permalink:"/doc-unity-manual/docs/svt-streaming-virtual-texturing/svt-use-in-shader-graph"}},u={},s=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301",id:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301",level:2},{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:2},{value:"GPU \u8981\u6c42",id:"gpu-\u8981\u6c42",level:3},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:3},{value:"\u652f\u6301\u7684\u56fe\u5f62 API",id:"\u652f\u6301\u7684\u56fe\u5f62-api",level:3},{value:"\u7eb9\u7406\u517c\u5bb9\u6027",id:"\u7eb9\u7406\u517c\u5bb9\u6027",level:2},{value:"Unity \u529f\u80fd\u517c\u5bb9\u6027",id:"unity-\u529f\u80fd\u517c\u5bb9\u6027",level:2}],k={toc:s};function c(t){var e=t.components,r=(0,i.Z)(t,l);return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"streaming-virtual-texturing-\u8981\u6c42\u548c\u517c\u5bb9\u6027"},"Streaming Virtual Texturing \u8981\u6c42\u548c\u517c\u5bb9\u6027"),(0,n.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301"},"\u6e32\u67d3\u7ba1\u7ebf\u652f\u6301"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest/"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")," \u4e2d\uff0c\u53ef\u4ee5\u5728\u60a8\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.shadergraph@latest"},"Shader Graph")," \u521b\u5efa\u7684\u7740\u8272\u5668\u4e2d\u4f7f\u7528 Streaming Virtual Texturing (SVT)\u3002"),(0,n.kt)("h2",{id:"\u7cfb\u7edf\u8981\u6c42"},"\u7cfb\u7edf\u8981\u6c42"),(0,n.kt)("h3",{id:"gpu-\u8981\u6c42"},"GPU \u8981\u6c42"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GPU \u8ba1\u7b97"),(0,n.kt)("li",{parentName:"ul"},"Texture2DArrays"),(0,n.kt)("li",{parentName:"ul"},"AsyncReadBack")),(0,n.kt)("h3",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows"),(0,n.kt)("li",{parentName:"ul"},"Mac"),(0,n.kt)("li",{parentName:"ul"},"Linux")),(0,n.kt)("h3",{id:"\u652f\u6301\u7684\u56fe\u5f62-api"},"\u652f\u6301\u7684\u56fe\u5f62 API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DirectX 11"),(0,n.kt)("li",{parentName:"ul"},"DirectX 12"),(0,n.kt)("li",{parentName:"ul"},"Metal"),(0,n.kt)("li",{parentName:"ul"},"Vulkan")),(0,n.kt)("h2",{id:"\u7eb9\u7406\u517c\u5bb9\u6027"},"\u7eb9\u7406\u517c\u5bb9\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u5efa\u7acb\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Texture2D.html"},"Texture2D")," \u4e0a\u3002SVT \u7eb9\u7406\u901a\u8fc7\u76f8\u540c\u7684\u5bfc\u5165\u5668\uff0c\u8fd9\u9650\u5236\u4e86\u6700\u5927\u7eb9\u7406\u5927\u5c0f\u3002SVT \u4e0d\u652f\u6301\u5927\u4e8e 16K x 16K \u7684\u7eb9\u7406\u3002\u5b83\u4e5f\u4e0d\u652f\u6301 UDIM \u7eb9\u7406\u6216\u5c06\u5e73\u94fa\u56fe\u50cf\u6587\u4ef6\u5408\u5e76\u4e3a\u4e00\u4e2a\u5927\u7eb9\u7406\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u4e0d\u652f\u6301\u6240\u6709\u7eb9\u7406\u56fe\u5f62\u683c\u5f0f\u3002\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGBA_DXT1_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGBA_DXT1_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGBA_DXT3_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGBA_DXT3_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR_BC4_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRG_BC5_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGB_BC6H_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGB_BC6H_UFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGBA_BC7_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatRGBA_BC7_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8G8_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8G8_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8G8B8_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8G8B8_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8G8B8A8_SRGB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR8G8B8A8_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR16_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR16_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR16G16_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR16G16_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR16G16B16A16_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR16G16B16A16_UNorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR32_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR32G32_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatR32G32B32A32_SFloat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GraphicsFormat::kFormatA2B10G10R10_UNormPack32")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u4e0d\u652f\u6301\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u5305\u88f9\u6a21\u5f0f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u8f74\u94b3\u5236\uff08\u4f8b\u5982\uff0c\u6c34\u5e73\u91cd\u590d\u540c\u65f6\u5782\u76f4\u94b3\u5236\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u8fa8\u7387\u4e0d\u662f 2 \u7684\u5e42\u7684\u7eb9\u7406\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u4e2d\u7684\u7eb9\u7406\u6ca1\u6709\u5c0f\u4e8e\u5e73\u94fa\u5927\u5c0f\uff08128 x 128 \u50cf\u7d20\uff09\u7684 Mipmap\u3002SVT \u5c06\u91c7\u6837\u94b3\u5236\u5230\u6b64 mip\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728\u8fdc\u5904\u770b\u5230\u67d0\u4e9b\u5185\u5bb9\u7684\u952f\u9f7f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u4ec5\u5728\u64ad\u653e\u5668\u4e2d\u652f\u6301\u4e09\u7ebf\u6027\u8fc7\u6ee4\uff0c\u5728\u7f16\u8f91\u5668\u4e2d\u4e0d\u652f\u6301\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u4ec5\u652f\u6301\u5728\u64ad\u653e\u5668\u4e2d\u4ece\u78c1\u76d8\u7684\u4e32\u6d41\uff0c\u800c\u5728\u7f16\u8f91\u5668\u4e2d\u4e0d\u652f\u6301\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6700\u5927\u5404\u5411\u5f02\u6027\u8fc7\u6ee4\u7ea7\u522b\u4e3a 8\u3002\u8fd9\u662f\u56e0\u4e3a\u6bcf\u4e2a\u74e6\u7247\u90fd\u6709\u4e00\u4e2a 8 \u50cf\u7d20\u7684\u8fb9\u6846\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u5728\u64ad\u653e\u5668\u4e2d\u52a8\u6001\u8bbe\u7f6e\u5c5e\u4e8e\u5806\u6808\u4e00\u90e8\u5206\u7684\u7eb9\u7406\u3002\u5728\u64ad\u653e\u5668\u4e2d\uff0c\u4e0d\u80fd\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Material.SetTexture")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"Renderer.SetPropertyBlock")," \u6765\u4fee\u6539\u7eb9\u7406\u5806\u6808\u3002"))),(0,n.kt)("h2",{id:"unity-\u529f\u80fd\u517c\u5bb9\u6027"},"Unity \u529f\u80fd\u517c\u5bb9\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SVT \u4e0d\u652f\u6301\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AssetBundles\uff0c\u5305\u62ec Addressables \u548c Live Link\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7f16\u7a0b\u6784\u5efa\u7ba1\u7ebf (SBP) \u548c\u5b50\u573a\u666f\u3002"),(0,n.kt)("li",{parentName:"ul"},"Crunch \u538b\u7f29\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5806\u53e0\u5c42\u7684\u7eb5\u6a2a\u6bd4\u5fc5\u987b\u5339\u914d\u3002"))))}c.isMDXComponent=!0}}]);