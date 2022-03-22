"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43575],{3905:function(t,e,n){n.d(e,{Zo:function(){return N},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},N=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,N=i(t,["components","mdxType","originalType","parentName"]),k=m(n),u=r,s=k["".concat(d,".").concat(u)]||k[u]||o[u]||l;return n?a.createElement(s,p(p({ref:e},N),{},{components:n})):a.createElement(s,p({ref:e},N))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},56487:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return o}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],i={id:"SL-BuiltinMacros",title:"\u5185\u7f6e\u5b8f",slug:"/sl-shader-programs/sl-builtin-macros"},d="\u5185\u7f6e\u5b8f",m={unversionedId:"graphics/shaders/shader-writing/sl-shader-programs/SL-BuiltinMacros",id:"graphics/shaders/shader-writing/sl-shader-programs/SL-BuiltinMacros",title:"\u5185\u7f6e\u5b8f",description:"Unity \u5728\u7f16\u8bd1\u7740\u8272\u5668\u7a0b\u5e8f\u65f6\u4f1a\u5b9a\u4e49\u51e0\u4e2a\u9884\u5904\u7406\u5668\u5b8f\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-builtin-macros.md",sourceDirName:"graphics/shaders/shader-writing/sl-shader-programs",slug:"/sl-shader-programs/sl-builtin-macros",permalink:"/docs/sl-shader-programs/sl-builtin-macros",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-shader-programs/sl-builtin-macros.md",tags:[],version:"current",frontMatter:{id:"SL-BuiltinMacros",title:"\u5185\u7f6e\u5b8f",slug:"/sl-shader-programs/sl-builtin-macros"},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e\u7740\u8272\u5668 include \u6587\u4ef6",permalink:"/docs/sl-shader-programs/sl-builtin-includes"},next:{title:"\u7740\u8272\u5668\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6",permalink:"/docs/sl-shader-programs/sl-data-types-and-precision"}},N={},o=[{value:"\u76ee\u6807\u5e73\u53f0",id:"\u76ee\u6807\u5e73\u53f0",level:2},{value:"\u7740\u8272\u5668\u76ee\u6807\u6a21\u578b",id:"\u7740\u8272\u5668\u76ee\u6807\u6a21\u578b",level:2},{value:"Unity \u7248\u672c",id:"unity-\u7248\u672c",level:2},{value:"\u7f16\u8bd1\u7684\u7740\u8272\u5668\u9636\u6bb5",id:"\u7f16\u8bd1\u7684\u7740\u8272\u5668\u9636\u6bb5",level:2},{value:"\u5e73\u53f0\u5dee\u5f02 helper",id:"\u5e73\u53f0\u5dee\u5f02-helper",level:2},{value:"\u9634\u5f71\u8d34\u56fe\u5b8f",id:"\u9634\u5f71\u8d34\u56fe\u5b8f",level:2},{value:"\u5e38\u91cf\u7f13\u51b2\u533a\u5b8f",id:"\u5e38\u91cf\u7f13\u51b2\u533a\u5b8f",level:2},{value:"\u7eb9\u7406/\u91c7\u6837\u5668\u58f0\u660e\u5b8f",id:"\u7eb9\u7406\u91c7\u6837\u5668\u58f0\u660e\u5b8f",level:2},{value:"\u8868\u9762\u7740\u8272\u5668\u901a\u9053\u6307\u793a\u7b26",id:"\u8868\u9762\u7740\u8272\u5668\u901a\u9053\u6307\u793a\u7b26",level:2},{value:"\u7981\u7528\u81ea\u52a8\u5347\u7ea7",id:"\u7981\u7528\u81ea\u52a8\u5347\u7ea7",level:2},{value:"\u6df1\u5ea6\u7eb9\u7406 helper \u5b8f",id:"\u6df1\u5ea6\u7eb9\u7406-helper-\u5b8f",level:2}],k={toc:o};function u(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5185\u7f6e\u5b8f"},"\u5185\u7f6e\u5b8f"),(0,l.kt)("p",null,"Unity \u5728\u7f16\u8bd1",(0,l.kt)("a",{parentName:"p",href:"/docs/sl-shader-programs"},"\u7740\u8272\u5668\u7a0b\u5e8f"),"\u65f6\u4f1a\u5b9a\u4e49\u51e0\u4e2a\u9884\u5904\u7406\u5668\u5b8f\u3002"),(0,l.kt)("h2",{id:"\u76ee\u6807\u5e73\u53f0"},"\u76ee\u6807\u5e73\u53f0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b8f\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u76ee\u6807\u5e73\u53f0\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_D3D11")),(0,l.kt)("td",{parentName:"tr",align:null},"Direct3D 11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_GLCORE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u684c\u9762\u7aef OpenGL\u201c\u6838\u5fc3\u201d(GL 3/4)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_GLES")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL ES 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_GLES3")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL ES 3.0/3.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_METAL")),(0,l.kt)("td",{parentName:"tr",align:null},"iOS/Mac Metal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_VULKAN")),(0,l.kt)("td",{parentName:"tr",align:null},"Vulkan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SHADER_API_D3D11_9X")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9002\u7528\u4e8e\u901a\u7528 Windows \u5e73\u53f0\u7684 Direct3D 11\u201c\u529f\u80fd\u7ea7\u522b 9.x\u201d\u76ee\u6807")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_API_MOBILE")," \u662f\u9488\u5bf9\u6240\u6709\u5e38\u89c4\u79fb\u52a8\u5e73\u53f0\uff08GLES\u3001GLES3\u3001METAL\uff09\u5b9a\u4e49\u7684\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u5f53\u76ee\u6807\u7740\u8272\u8bed\u8a00\u4e3a GLSL \u65f6\uff0c\u8fd8\u4f1a\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_TARGET_GLSL"),"\uff08\u5bf9\u4e8e OpenGL/GLES \u5e73\u53f0\u6765\u8bf4\u59cb\u7ec8\u4f1a\u5b9a\u4e49\uff09\u3002"),(0,l.kt)("h2",{id:"\u7740\u8272\u5668\u76ee\u6807\u6a21\u578b"},"\u7740\u8272\u5668\u76ee\u6807\u6a21\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_TARGET")," \u88ab\u5b9a\u4e49\u4e3a\u4e0e\u7740\u8272\u5668\u76ee\u6807\u7f16\u8bd1\u6a21\u578b\u5339\u914d\u7684\u6570\u503c\uff08\u5373\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"p"},"#pragma target")," \u6307\u4ee4\uff09\u3002\u4f8b\u5982\uff0c\u5f53\u7f16\u8bd1\u5230\u7740\u8272\u5668\u6a21\u578b 3.0 \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_TARGET")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"30"),"\u3002\u60a8\u53ef\u4ee5\u5728\u7740\u8272\u5668\u4ee3\u7801\u4e2d\u4f7f\u7528\u6b64\u5b8f\u6765\u8fdb\u884c\u6761\u4ef6\u68c0\u67e5\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# if SHADER_TARGET &lt; 30\n    // \u4f4e\u4e8e\u7740\u8272\u5668\u6a21\u578b 3.0\uff1a\n    // \u7740\u8272\u5668\u529f\u80fd\u975e\u5e38\u6709\u9650\uff0c\u6267\u884c\u8fd1\u4f3c\u64cd\u4f5c\n# else\n    // \u4e0d\u9519\u7684\u529f\u80fd\uff0c\u6267\u884c\u66f4\u9ad8\u7ea7\u7684\u4efb\u52a1\n# endif\n")),(0,l.kt)("h2",{id:"unity-\u7248\u672c"},"Unity \u7248\u672c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNITY_VERSION")," \u5305\u542b Unity \u7248\u672c\u7684\u6570\u503c\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e Unity 5.0.1\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"UNITY_VERSION")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"501"),"\u3002\u5982\u679c\u60a8\u9700\u8981\u7f16\u5199\u4f7f\u7528\u4e0d\u540c\u7740\u8272\u5668\u5185\u7f6e\u529f\u80fd\u7684\u7740\u8272\u5668\uff0c\u5219\u53ef\u4ee5\u5c06\u5176\u7528\u4e8e\u7248\u672c\u6bd4\u8f83\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"#if UNITY_VERSION &gt;= 500")," \u9884\u5904\u7406\u5668\u68c0\u67e5\u4ec5\u5728\u7248\u672c\u4e3a 5.0.0 \u6216\u66f4\u9ad8\u65f6\u53ef\u4ee5\u901a\u8fc7\u3002"),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u7684\u7740\u8272\u5668\u9636\u6bb5"},"\u7f16\u8bd1\u7684\u7740\u8272\u5668\u9636\u6bb5"),(0,l.kt)("p",null,"\u7f16\u8bd1\u6bcf\u4e2a\u7740\u8272\u5668\u9636\u6bb5\u65f6\u4f1a\u5b9a\u4e49\u9884\u5904\u7406\u5668\u5b8f ",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_STAGE_VERTEX"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_STAGE_FRAGMENT"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_STAGE_DOMAIN"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_STAGE_HULL"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_STAGE_GEOMETRY")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHADER_STAGE_COMPUTE"),"\u3002\u901a\u5e38\uff0c\u5728\u50cf\u7d20\u7740\u8272\u5668\u548c\u8ba1\u7b97\u7740\u8272\u5668\u4e4b\u95f4\u5171\u4eab\u7740\u8272\u5668\u4ee3\u7801\u65f6\uff0c\u8fd9\u4e9b\u5b8f\u975e\u5e38\u6709\u7528\uff0c\u53ef\u4ee5\u89e3\u51b3\u67d0\u4e9b\u5de5\u4f5c\u5fc5\u987b\u4ee5\u7565\u6709\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u5b8c\u6210\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"\u5e73\u53f0\u5dee\u5f02-helper"},"\u5e73\u53f0\u5dee\u5f02 helper"),(0,l.kt)("p",null,"\u4e0d\u9f13\u52b1\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u5e73\u53f0\u5b8f\uff0c\u56e0\u4e3a\u5b83\u4eec\u5e76\u975e\u59cb\u7ec8\u6709\u52a9\u4e8e\u4ee3\u7801\u7684\u672a\u6765\u9a8c\u8bc1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6b63\u5728\u7f16\u5199\u4e00\u4e2a\u68c0\u67e5 D3D11 \u7684\u7740\u8272\u5668\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u786e\u4fdd\u5728\u5c06\u6765\u5c06\u8fd9\u9879\u68c0\u67e5\u6269\u5c55\u4e3a\u5305\u542b Vulkan\u3002\u5e94\u6539\u7528 Unity \u5b9a\u4e49\u7684\u51e0\u4e2a helper \u5b8f\uff08\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/docs/sl-shader-programs/sl-builtin-includes"},(0,l.kt)("inlineCode",{parentName:"a"},"HLSLSupport.cginc"))," \u4e2d\uff09\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b8f\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7528\u9014\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_BRANCH")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u6761\u4ef6\u8bed\u53e5\u4e4b\u524d\u6dfb\u52a0\u6b64\u5b8f\uff0c\u544a\u77e5\u7f16\u8bd1\u5668\u5e94\u5c06\u5176\u7f16\u8bd1\u4e3a\u5b9e\u9645\u5206\u652f\u3002\u5728 HLSL \u5e73\u53f0\u4e0a\u6269\u5c55\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"[branch]"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_FLATTEN")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u6761\u4ef6\u8bed\u53e5\u4e4b\u524d\u6dfb\u52a0\u6b64\u5b8f\uff0c\u544a\u77e5\u7f16\u8bd1\u5668\u5e94\u8be5\u5c06\u5176\u5c55\u5e73\u4ee5\u907f\u514d\u5b9e\u9645\u7684\u5206\u652f\u6307\u4ee4\u3002\u5728 HLSL \u5e73\u53f0\u4e0a\u6269\u5c55\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"[flatten]"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_NO_SCREENSPACE_SHADOWS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4e0d\u4f7f\u7528\u7ea7\u8054\u5c4f\u5e55\u7a7a\u95f4\u9634\u5f71\u8d34\u56fe\u7684\u5e73\u53f0\uff08\u79fb\u52a8\u5e73\u53f0\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_NO_LINEAR_COLORSPACE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4e0d\u652f\u6301\u7ebf\u6027\u989c\u8272\u7a7a\u95f4\u7684\u5e73\u53f0\uff08\u79fb\u52a8\u5e73\u53f0\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_NO_RGBM")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4e0d\u4f7f\u7528\u5149\u7167\u8d34\u56fe RGBM \u538b\u7f29\u7684\u5e73\u53f0\uff08\u79fb\u52a8\u5e73\u53f0\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_NO_DXT5nm")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4e0d\u4f7f\u7528 DXT5nm \u6cd5\u7ebf\u8d34\u56fe\u538b\u7f29\u7684\u5e73\u53f0\uff08\u79fb\u52a8\u5e73\u53f0\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_FRAMEBUFFER_FETCH_AVAILABLE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u53ef\u4f7f\u7528\u201c\u5e27\u7f13\u51b2\u989c\u8272\u63d0\u53d6\u201d\u529f\u80fd\u7684\u5e73\u53f0\uff08\u901a\u5e38\u4e3a iOS \u5e73\u53f0 - OpenGL ES 2.0\u30013.0 \u548c Metal\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_USE_RGBA_FOR_POINT_SHADOWS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u70b9\u5149\u6e90\u9634\u5f71\u8d34\u56fe\u4f7f\u7528\u5177\u6709\u7f16\u7801\u6df1\u5ea6\u7684 RGBA \u7eb9\u7406\u7684\u5e73\u53f0\uff08\u5176\u4ed6\u5e73\u53f0\u4f7f\u7528\u5355\u901a\u9053\u6d6e\u70b9\u7eb9\u7406\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_ATTEN_CHANNEL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5149\u6e90\u8870\u51cf\u7eb9\u7406\u7684\u54ea\u4e2a\u901a\u9053\u5305\u542b\u6570\u636e\uff1b\u7528\u4e8e\u6bcf\u50cf\u7d20\u5149\u7167\u4ee3\u7801\u3002\u5b9a\u4e49\u4e3a\u201cr\u201d\u6216\u201ca\u201d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_HALF_TEXEL_OFFSET")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5c06\u7eb9\u7406\u50cf\u7d20\u6620\u5c04\u5230\u50cf\u7d20\u65f6\u9700\u8981\u8fdb\u884c\u534a\u7eb9\u7d20\u504f\u79fb\u8c03\u6574\u7684\u5e73\u53f0\uff08\u4f8b\u5982 Direct3D 9\uff09\u4e0a\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_UV_STARTS_AT_TOP")),(0,l.kt)("td",{parentName:"tr",align:null},"\u59cb\u7ec8\u5b9a\u4e49\u503c\u4e3a 1 \u6216 0\u3002\u503c\u4e3a 1 \u8868\u793a\u5728\u5e73\u53f0\u4e0a\u7684\u7eb9\u7406\u4e4b\u4e0a\u7684\u7eb9\u7406 V \u5750\u6807\u4e3a 0\u3002Direct3D \u7c7b\u5e73\u53f0\u4f7f\u7528\u503c 1\uff1bOpenGL \u7c7b\u5e73\u53f0\u4f7f\u7528\u503c 0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_MIGHT_NOT_HAVE_DEPTH_Texture")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e73\u53f0\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u5c06\u6df1\u5ea6\u6e32\u67d3\u5230\u7eb9\u7406\u4e2d\u6765\u6a21\u62df\u9634\u5f71\u8d34\u56fe\u6216\u6df1\u5ea6\u7eb9\u7406\uff0c\u5219\u5b9a\u4e49\u6b64\u5b8f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PROJ_COORD(a)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed9\u5b9a\u4e00\u4e2a 4 \u5206\u91cf\u77e2\u91cf\uff0c\u6b64\u5b8f\u8fd4\u56de\u4e00\u4e2a\u9002\u5408\u6295\u5f71\u7eb9\u7406\u8bfb\u53d6\u7684\u7eb9\u7406\u5750\u6807\u3002\u5728\u5927\u591a\u6570\u5e73\u53f0\u4e0a\uff0c\u5b83\u76f4\u63a5\u8fd4\u56de\u7ed9\u5b9a\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_NEAR_CLIP_VALUE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e3a\u8fd1\u88c1\u526a\u9762\u7684\u503c\u3002Direct3D \u7c7b\u5e73\u53f0\u4f7f\u7528 0.0\uff0c\u800c OpenGL \u7c7b\u5e73\u53f0\u4f7f\u7528 \u20131.0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_VPOS_TYPE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u50cf\u7d20\u4f4d\u7f6e\u8f93\u5165 (VPOS) \u6240\u9700\u7684\u6570\u636e\u7c7b\u578b\uff1aD3D9 \u4e0a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"float2"),"\uff0c\u5176\u4ed6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"float4"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_CAN_COMPILE_TESSELLATION")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u7740\u8272\u5668\u7f16\u8bd1\u5668\u201c\u7406\u89e3\u201d\u66f2\u9762\u7ec6\u5206\u7740\u8272\u5668 HLSL \u8bed\u6cd5\u65f6\u5b9a\u4e49\uff08\u5f53\u524d\u4ec5\u9650 D3D11\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_INITIALIZE_OUTPUT(type,name)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u7ed9\u5b9a","_","\u7c7b\u578b","_","\u7684\u53d8\u91cf","_","\u540d\u79f0","_","\u521d\u59cb\u5316\u4e3a\u96f6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_COMPILER_HLSL"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_COMPILER_HLSL2GLSL"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_COMPILER_CG")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u793a\u6b63\u5728\u4f7f\u7528\u54ea\u4e2a\u7740\u8272\u5668\u7f16\u8bd1\u5668\u6765\u7f16\u8bd1\u7740\u8272\u5668\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6709\u5173",(0,l.kt)("a",{parentName:"td",href:"/docs/shader-compilation"},"\u7740\u8272\u5668\u7f16\u8bd1"),"\u7684\u6587\u6863\u3002\u5982\u679c\u9047\u5230\u7f16\u8bd1\u5668\u4e4b\u95f4\u6709\u975e\u5e38\u5177\u4f53\u7684\u7740\u8272\u5668\u8bed\u6cd5\u5904\u7406\u5dee\u5f02\uff0c\u5e76\u5e0c\u671b\u4e3a\u6bcf\u4e2a\u7f16\u8bd1\u5668\u7f16\u5199\u4e0d\u540c\u7684\u4ee3\u7801\uff0c\u8bf7\u4f7f\u7528\u6b64\u5b8f\u3002")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNITY_REVERSED_Z")," - \u5728\u4f7f\u7528\u53cd\u8f6c Z \u7f13\u51b2\u533a\u7684\u5e73\u53f0\u4e0a\u5b9a\u4e49\u3002\u5b58\u50a8\u7684 Z \u503c\u7684\u8303\u56f4\u662f 1 \u5230 0\uff0c\u800c\u4e0d\u662f 0 \u5230 1\u3002")),(0,l.kt)("h2",{id:"\u9634\u5f71\u8d34\u56fe\u5b8f"},"\u9634\u5f71\u8d34\u56fe\u5b8f"),(0,l.kt)("p",null,"\u6839\u636e\u5e73\u53f0\u7684\u4e0d\u540c\uff0c\u58f0\u660e\u548c\u91c7\u6837\u9634\u5f71\u8d34\u56fe\u53ef\u80fd\u4f1a\u6709\u5f88\u5927\u5dee\u5f02\u3002Unity \u6709\u51e0\u4e2a\u5b8f\u53ef\u5e2e\u52a9\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b8f\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7528\u9014\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_DECLARE_SHADOWMAP(tex)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u4e00\u4e2a\u540d\u4e3a\u201ctex\u201d\u7684\u9634\u5f71\u8d34\u56fe\u7eb9\u7406\u53d8\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_SAMPLE_SHADOW(tex,uv)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u7ed9\u5b9a\u7684\u201cuv\u201d\u5750\u6807\u5904\u91c7\u6837\u9634\u5f71\u8d34\u56fe\u7eb9\u7406\u201ctex\u201d\uff08XY \u5206\u91cf\u662f\u7eb9\u7406\u4f4d\u7f6e\uff0cZ \u5206\u91cf\u662f\u8981\u6bd4\u8f83\u7684\u6df1\u5ea6\uff09\u3002\u8fd4\u56de\u5355\u4e2a\u6d6e\u70b9\u503c\uff0c\u9634\u5f71\u9879\u7684\u8303\u56f4\u5728 0 \u5230 1 \u4e4b\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_SAMPLE_SHADOW_PROJ(tex,uv)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e\u4e0a\u9762\u7c7b\u4f3c\uff0c\u4f46\u662f\u4f1a\u8bfb\u53d6\u6295\u5f71\u9634\u5f71\u8d34\u56fe\u3002\u201cuv\u201d\u662f\u4e00\u4e2a float4\uff0c\u6240\u6709\u5176\u4ed6\u5206\u91cf\u9664\u4ee5 .w \u6765\u6267\u884c\u67e5\u627e\u3002")))),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5e76\u975e\u6240\u6709\u663e\u5361\u90fd\u652f\u6301\u9634\u5f71\u8d34\u56fe\u3002\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SystemInfo.SupportsRenderTextureFormat.html"},"SystemInfo.SupportsRenderTextureFormat")," \u68c0\u67e5\u662f\u5426\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"\u5e38\u91cf\u7f13\u51b2\u533a\u5b8f"},"\u5e38\u91cf\u7f13\u51b2\u533a\u5b8f"),(0,l.kt)("p",null,"Direct3D 11 \u5c06\u6240\u6709\u7740\u8272\u5668\u53d8\u91cf\u5206\u7ec4\u4e3a\u201c\u5e38\u91cf\u7f13\u51b2\u533a\u201d\u3002Unity \u7684\u5927\u591a\u6570\u5185\u7f6e\u53d8\u91cf\u5df2\u7ecf\u5206\u7ec4\uff0c\u4f46\u5bf9\u4e8e\u60a8\u81ea\u5df1\u7684\u7740\u8272\u5668\u4e2d\u7684\u53d8\u91cf\uff0c\u66f4\u52a0\u7406\u60f3\u7684\u505a\u6cd5\u662f\uff0c\u6839\u636e\u9884\u671f\u7684\u66f4\u65b0\u9891\u7387\u5c06\u5b83\u4eec\u653e\u5165\u5355\u72ec\u7684\u5e38\u91cf\u7f13\u51b2\u533a\u3002"),(0,l.kt)("p",null,"\u5bf9\u6b64\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"CBUFFER_START(name)")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CBUFFER_END")," \u5b8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CBUFFER_START(MyRarelyUpdatedVariables)\n    float4 _SomeGlobalValue;\nCBUFFER_END\n")),(0,l.kt)("h2",{id:"\u7eb9\u7406\u91c7\u6837\u5668\u58f0\u660e\u5b8f"},"\u7eb9\u7406/\u91c7\u6837\u5668\u58f0\u660e\u5b8f"),(0,l.kt)("p",null,"\u901a\u5e38\uff0c\u5728\u7740\u8272\u5668\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"texture2D")," \u6765\u58f0\u660e\u7eb9\u7406\u548c\u91c7\u6837\u5668\u5bf9\u3002 \u4f46\u662f\u5728\u67d0\u4e9b\u5e73\u53f0\uff08\u4f8b\u5982 DX11\uff09\u4e0a\uff0c\u7eb9\u7406\u548c\u91c7\u6837\u5668\u662f\u5355\u72ec\u7684\u5bf9\u8c61\uff0c \u5e76\u4e14\u53ef\u80fd\u7684\u91c7\u6837\u5668\u6700\u5927\u6570\u91cf\u975e\u5e38\u6709\u9650\u3002Unity \u6709\u4e00\u4e9b\u5b8f\u6765\u58f0\u660e \u6ca1\u6709\u91c7\u6837\u5668\u7684\u7eb9\u7406\uff0c\u5e76\u4f7f\u7528\u53e6\u4e00\u4e2a\u7eb9\u7406\u4e2d\u7684\u91c7\u6837\u5668\u5bf9\u7eb9\u7406\u8fdb\u884c\u91c7\u6837\u3002 \u5982\u679c\u60a8\u9047\u5230\u91c7\u6837\u5668\u9650\u5236\uff0c\u5e76\u4e14\u77e5\u9053\u51e0\u4e2a\u7eb9\u7406\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5171\u4eab\u540c\u4e00\u4e2a\u91c7\u6837\u5668 \uff08\u91c7\u6837\u5668\u5b9a\u4e49\u7eb9\u7406\u8fc7\u6ee4\u548c\u5305\u88f9\u6a21\u5f0f\uff09\uff0c\u8bf7\u4f7f\u7528\u8fd9\u4e9b\u5b8f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b8f\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7528\u9014\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_DECLARE_TEX2D(name)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u7eb9\u7406\u548c\u91c7\u6837\u5668\u5bf9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_DECLARE_TEX2D_NOSAMPLER(name)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u4e0d\u542b\u91c7\u6837\u5668\u7684\u7eb9\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_DECLARE_TEX2DARRAY(name)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u7eb9\u7406\u6570\u7ec4\u91c7\u6837\u5668\u53d8\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_SAMPLE_TEX2D(name,uv)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7ed9\u5b9a\u7684\u7eb9\u7406\u5750\u6807\u4ece\u7eb9\u7406\u548c\u91c7\u6837\u5668\u5bf9\u4e2d\u91c7\u6837\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_SAMPLE_TEX2D_SAMPLER( name,samplername,uv)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u53e6\u4e00\u4e2a\u7eb9\u7406\u4e2d\u7684\u91c7\u6837\u5668 (samplername)\uff0c\u4ece\u7eb9\u7406 (name) \u4e2d\u91c7\u6837\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_SAMPLE_TEX2DARRAY(name,uv)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u5177\u6709 float3 UV \u7684\u7eb9\u7406\u6570\u7ec4\u4e2d\u91c7\u6837\uff1b\u5750\u6807\u7684 z \u5206\u91cf\u662f\u6570\u7ec4\u5143\u7d20\u7d22\u5f15\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_SAMPLE_TEX2DARRAY_LOD(name,uv,lod)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u5177\u6709\u663e\u5f0f Mipmap \u7ea7\u522b\u7684\u7eb9\u7406\u6570\u7ec4\u4e2d\u91c7\u6837\u3002")))),(0,l.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/docs/sl-shader-programs/sl-sampler-states"},"\u91c7\u6837\u5668\u72b6\u6001"),"\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u8868\u9762\u7740\u8272\u5668\u901a\u9053\u6307\u793a\u7b26"},"\u8868\u9762\u7740\u8272\u5668\u901a\u9053\u6307\u793a\u7b26"),(0,l.kt)("p",null,"\u7f16\u8bd1",(0,l.kt)("a",{parentName:"p",href:"/docs/sl-surface-shaders"},"\u8868\u9762\u7740\u8272\u5668"),"\u65f6\uff0c\u8868\u9762\u7740\u8272\u5668\u4f1a\u4e3a\u5404\u79cd\u901a\u9053\u751f\u6210\u5927\u91cf\u4ee3\u7801\u4ee5\u4ea7\u751f\u5149\u7167\u3002\u7f16\u8bd1\u6bcf\u4e2a\u901a\u9053\u65f6\uff0c\u5c06\u5b9a\u4e49\u4ee5\u4e0b\u5b8f\u4e4b\u4e00\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b8f\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7528\u9014\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PASS_FORWARDBASE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u5411\u6e32\u67d3\u57fa\u7840\u901a\u9053\uff08\u4e3b\u65b9\u5411\u5149\u3001\u5149\u7167\u8d34\u56fe\u548c SH\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PASS_FORWARDADD")),(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u5411\u6e32\u67d3\u9644\u52a0\u901a\u9053\uff08\u6bcf\u4e2a\u901a\u9053\u4e00\u4e2a\u5149\u6e90\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PASS_DEFERRED")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u7740\u8272\u901a\u9053\uff08\u6e32\u67d3 G \u7f13\u51b2\u533a\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PASS_SHADOWCASTER")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9634\u5f71\u6295\u5c04\u7269\u548c\u6df1\u5ea6\u7eb9\u7406\u6e32\u67d3\u901a\u9053\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PASS_PREPASSBASE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e7\u7248\u5ef6\u8fdf\u5149\u7167\u57fa\u7840\u901a\u9053\uff08\u6e32\u67d3\u6cd5\u7ebf\u548c\u955c\u9762\u53cd\u5c04\u6307\u6570\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UNITY_PASS_PREPASSFINAL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e7\u7248\u5ef6\u8fdf\u5149\u7167\u6700\u7ec8\u901a\u9053\uff08\u5e94\u7528\u5149\u7167\u548c\u7eb9\u7406\uff09\u3002")))),(0,l.kt)("h2",{id:"\u7981\u7528\u81ea\u52a8\u5347\u7ea7"},"\u7981\u7528\u81ea\u52a8\u5347\u7ea7"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNITY_SHADER_NO_UPGRADE")," \u5141\u8bb8\u60a8\u7981\u6b62 Unity \u81ea\u52a8\u5347\u7ea7\u6216\u4fee\u6539\u7740\u8272\u5668\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u6df1\u5ea6\u7eb9\u7406-helper-\u5b8f"},"\u6df1\u5ea6\u7eb9\u7406 helper \u5b8f"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6df1\u5ea6\u7eb9\u7406\u7528\u4e8e\u6e32\u67d3\u8ddd\u79bb\u6444\u50cf\u673a\u7684\u6df1\u5ea6\u3002\u5728\u6b64\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/sl-shader-programs/sl-builtin-includes"},"UnityCG.cginc include \u6587\u4ef6"),"\u5305\u542b\u7684\u4e00\u4e9b\u5b8f\u53ef\u4ee5\u5904\u7406\u4e0a\u8ff0\u590d\u6742\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"UNITY","_","TRANSFER","_","DEPTH(o)")," \uff1a\u8ba1\u7b97\u9876\u70b9\u7684\u773c\u775b\u7a7a\u95f4\u6df1\u5ea6\u5e76\u5c06\u5176\u5728  ",(0,l.kt)("strong",{parentName:"p"},"o"),"  \u4e2d\u8f93\u51fa\uff08\u5fc5\u987b\u662f float2\uff09\u3002\u5f53\u6e32\u67d3\u5230\u6df1\u5ea6\u7eb9\u7406\u65f6\uff0c\u5728\u9876\u70b9\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6b64\u5b8f\u3002\u5728\u5177\u6709\u672c\u673a\u6df1\u5ea6\u7eb9\u7406\u7684\u5e73\u53f0\u4e0a\uff0c\u6b64\u5b8f\u5b8c\u5168\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\uff0c\u56e0\u4e3a Z \u7f13\u51b2\u533a\u503c\u662f\u9690\u5f0f\u6e32\u67d3\u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"UNITY","_","OUTPUT","_","DEPTH(i)")," \uff1a\u4ece  ",(0,l.kt)("strong",{parentName:"p"},"i"),"  \u8fd4\u56de\u773c\u775b\u7a7a\u95f4\u6df1\u5ea6\uff08\u5fc5\u987b\u4e3a float2\uff09\u3002\u5f53\u6e32\u67d3\u5230\u6df1\u5ea6\u7eb9\u7406\u65f6\uff0c\u5728\u7247\u5143\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6b64\u5b8f\u3002\u5728\u5177\u6709\u672c\u673a\u6df1\u5ea6\u7eb9\u7406\u7684\u5e73\u53f0\u4e0a\uff0c\u6b64\u5b8f\u59cb\u7ec8\u8fd4\u56de\u96f6\uff0c\u56e0\u4e3a Z \u7f13\u51b2\u533a\u503c\u662f\u9690\u5f0f\u6e32\u67d3\u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"COMPUTE","_","EYEDEPTH(i)")," \uff1a\u8ba1\u7b97\u9876\u70b9\u7684\u773c\u775b\u7a7a\u95f4\u6df1\u5ea6\u5e76\u5c06\u5176\u5728  ",(0,l.kt)("strong",{parentName:"p"},"o"),"  \u4e2d\u8f93\u51fa\u3002\u5f53 ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d")," \u6e32\u67d3\u5230\u6df1\u5ea6\u7eb9\u7406\u65f6\uff0c\u5728\u9876\u70b9\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6b64\u5b8f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"DECODE","_","EYEDEPTH(i)/LinearEyeDepth(i)")," \uff1a\u901a\u8fc7\u6df1\u5ea6\u7eb9\u7406  ",(0,l.kt)("strong",{parentName:"p"},"i"),"  \u7ed9\u51fa\u9ad8\u7cbe\u5ea6\u503c\u65f6\uff0c\u8fd4\u56de\u76f8\u5e94\u7684\u773c\u775b\u7a7a\u95f4\u6df1\u5ea6\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Linear01Depth(i)")," \uff1a\u901a\u8fc7\u6df1\u5ea6\u7eb9\u7406  ",(0,l.kt)("strong",{parentName:"p"},"i"),"  \u7ed9\u51fa\u9ad8\u7cbe\u5ea6\u503c\u65f6\uff0c\u8fd4\u56de\u76f8\u5e94\u7684\u7ebf\u6027\u6df1\u5ea6\uff0c\u8303\u56f4\u5728 0 \u5230 1 \u4e4b\u95f4\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"  On DX11/12 and Metal, the Z buffer range is 1\u20130 and UNITY","_","REVERSED","_","Z is defined. On other platforms, the range is 0\u20131."))),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u7740\u8272\u5668\u5c06\u6e32\u67d3\u5176\u6e38\u620f\u5bf9\u8c61\u7684\u6df1\u5ea6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Render Depth" {\n    SubShader {\n        Tags { "RenderType"="Opaque" }\n        Pass {\n            CGPROGRAM\n\n            #pragma vertex vert\n            #pragma fragment frag\n            #include "UnityCG.cginc"\n\n            struct v2f {\n                float4 pos : SV_POSITION;\n                float2 depth : TEXCOORD0;\n            };\n\n            v2f vert (appdata_base v) {\n                v2f o;\n                o.pos = UnityObjectToClipPos(v.vertex);\n                UNITY_TRANSFER_DEPTH(o.depth);\n                return o;\n            }\n\n            half4 frag(v2f i) : SV_Target {\n                UNITY_OUTPUT_DEPTH(i.depth);\n            }\n            ENDCG\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);