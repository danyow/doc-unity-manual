"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8155],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=s(n),d=r,c=g["".concat(o,".").concat(d)]||g[d]||u[d]||i;return n?a.createElement(c,l(l({ref:e},m),{},{components:n})):a.createElement(c,l({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85776:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={id:"Lightmaps-TechnicalInformation",title:"\u5149\u7167\u8d34\u56fe\uff1a\u6280\u672f\u4fe1\u606f",slug:"/lightmappers/lightmaps-technical-information"},o="\u5149\u7167\u8d34\u56fe\uff1a\u6280\u672f\u4fe1\u606f",s={unversionedId:"graphics/lighting-overview/lightmappers/Lightmaps-TechnicalInformation",id:"graphics/lighting-overview/lightmappers/Lightmaps-TechnicalInformation",title:"\u5149\u7167\u8d34\u56fe\uff1a\u6280\u672f\u4fe1\u606f",description:"Unity \u53ef\u5b58\u50a8\u91c7\u7528\u4e0d\u540c\u538b\u7f29\u548c\u7f16\u7801\u65b9\u6848\u7684\u5149\u7167\u8d34\u56fe\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u76ee\u6807\u5e73\u53f0\u4ee5\u53ca Lighting \u7a97\u53e3\u4e2d\u7684\u538b\u7f29\u8bbe\u7f6e\u3002",source:"@site/docs/graphics/lighting-overview/lightmappers/lightmaps-technical-information.md",sourceDirName:"graphics/lighting-overview/lightmappers",slug:"/lightmappers/lightmaps-technical-information",permalink:"/docs/lightmappers/lightmaps-technical-information",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lightmappers/lightmaps-technical-information.md",tags:[],version:"current",frontMatter:{id:"Lightmaps-TechnicalInformation",title:"\u5149\u7167\u8d34\u56fe\uff1a\u6280\u672f\u4fe1\u606f",slug:"/lightmappers/lightmaps-technical-information"},sidebar:"tutorialSidebar",previous:{title:"\u5149\u7167\u8d34\u56fe\uff1a\u5165\u95e8",permalink:"/docs/lightmappers/lightmapping"},next:{title:"\u5149\u7167\u8d34\u56fe\u548c LOD",permalink:"/docs/lightmappers/lodfor-baked-gi"}},m={},u=[{value:"\u7f16\u7801\u65b9\u6848",id:"\u7f16\u7801\u65b9\u6848",level:2},{value:"HDR lightmap support",id:"hdr-lightmap-support",level:2},{value:"Advantages of High Quality (BC6H) lightmaps",id:"advantages-of-high-quality-bc6h-lightmaps",level:2},{value:"\u9884\u8ba1\u7b97\u5b9e\u65f6\u5168\u5c40\u5149\u7167 (GI)",id:"\u9884\u8ba1\u7b97\u5b9e\u65f6\u5168\u5c40\u5149\u7167-gi",level:2}],g={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5149\u7167\u8d34\u56fe\u6280\u672f\u4fe1\u606f"},"\u5149\u7167\u8d34\u56fe\uff1a\u6280\u672f\u4fe1\u606f"),(0,i.kt)("p",null,"Unity \u53ef\u5b58\u50a8\u91c7\u7528\u4e0d\u540c\u538b\u7f29\u548c\u7f16\u7801\u65b9\u6848\u7684\u5149\u7167\u8d34\u56fe\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u76ee\u6807\u5e73\u53f0\u4ee5\u53ca Lighting \u7a97\u53e3\u4e2d\u7684\u538b\u7f29\u8bbe\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u7f16\u7801\u65b9\u6848"},"\u7f16\u7801\u65b9\u6848"),(0,i.kt)("p",null,"Unity \u9879\u76ee\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u6280\u672f\u5728\u5fc5\u8981\u65f6\u5c06\u70d8\u7119\u5149\u6e90\u5f3a\u5ea6\u8303\u56f4\u7f16\u7801\u4e3a\u4f4e\u52a8\u6001\u8303\u56f4\u7eb9\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RGBM \u7f16\u7801")," \u3002RGBM \u7f16\u7801\u5c06\u989c\u8272\u5b58\u50a8\u5728  ",(0,i.kt)("strong",{parentName:"li"},"RGB"),"  \u901a\u9053\u4e2d\uff0c\u5c06\u4e58\u6570 ( ",(0,i.kt)("strong",{parentName:"li"},"M")," ) \u5b58\u50a8\u5728 Alpha \u901a\u9053\u4e2d\u3002\u5728\u7ebf\u6027\u7a7a\u95f4\u4e2d\uff0cRGBM \u5149\u7167\u8d34\u56fe\u7684\u8303\u56f4\u662f 0 \u5230 34.49(52.2)\uff0c\u800c\u5728\u4f3d\u9a6c\u7a7a\u95f4\u4e2d\uff0c\u8303\u56f4\u662f 0 \u5230 5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u53cc\u4f4e\u52a8\u6001\u8303\u56f4 (dLDR) \u7f16\u7801")," \u3002\u53ea\u9700\u76f4\u63a5\u5c06 ","[","0, 2","]"," \u8303\u56f4\u6620\u5c04\u5230 ","[","0, 1","]","\uff0c\u5373\u53ef\u5728\u79fb\u52a8\u5e73\u53f0\u4e0a\u4f7f\u7528 dLDR \u7f16\u7801\u3002\u503c\u9ad8\u4e8e 2 \u7684\u70d8\u7119\u5149\u6e90\u5f3a\u5ea6\u5c06\u88ab\u94b3\u5236\u3002\u7f16\u7801\u503c\u7684\u8ba1\u7b97\u65b9\u6cd5\u662f\uff1a\u5149\u7167\u8d34\u56fe\u7eb9\u7406\u7684\u503c\u4e58\u4ee5 2\uff08\u5982\u679c\u4f7f\u7528\u4f3d\u9a6c\u7a7a\u95f4\uff09\uff0c\u6216\u4e58\u4ee5 4.59482(22.2)\uff08\u5982\u679c\u4f7f\u7528\u7ebf\u6027\u7a7a\u95f4\uff09\u3002\u67d0\u4e9b\u5e73\u53f0\u5c06\u5149\u7167\u8d34\u56fe\u5b58\u50a8\u4e3a dLDR\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728\u4f7f\u7528 RGBM \u65f6\uff0c\u8fd9\u4e9b\u5e73\u53f0\u7684\u786c\u4ef6\u538b\u7f29\u4f1a\u4ea7\u751f\u5916\u89c2\u4e0d\u4f73\u7684\u7455\u75b5\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528\u7ebf\u6027\u989c\u8272\u7a7a\u95f4\u65f6\uff0c\u5149\u7167\u8d34\u56fe\u7eb9\u7406\u5c06\u6807\u8bb0\u4e3a sRGB\uff0c\u7740\u8272\u5668\u4f7f\u7528\u7684\u6700\u7ec8\u503c\uff08\u91c7\u6837\u548c\u89e3\u7801\u540e\uff09\u5c06\u4f4d\u4e8e\u7ebf\u6027\u989c\u8272\u7a7a\u95f4\u4e2d\u3002\u4f7f\u7528\u4f3d\u9a6c\u989c\u8272\u7a7a\u95f4\u65f6\uff0c\u6700\u7ec8\u503c\u5c06\u5728\u4f3d\u9a6c\u989c\u8272\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u4f7f\u7528\u7f16\u7801\u65f6\uff0c\u5b58\u50a8\u5728\u5149\u7167\u8d34\u56fe\uff08GPU \u7eb9\u7406\u5185\u5b58\uff09\u4e2d\u7684\u503c\u59cb\u7ec8\u4f4d\u4e8e\u4f3d\u9a6c\u989c\u8272\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"UnityCG.cginc")," \u7740\u8272\u5668 include \u6587\u4ef6\u4e2d\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Decode Lightmap"),"  \u7740\u8272\u5668\u51fd\u6570\u8d1f\u8d23\u5728\u4ece\u7740\u8272\u5668\u4e2d\u7684\u5149\u7167\u8d34\u56fe\u7eb9\u7406\u8bfb\u53d6\u503c\u4e4b\u540e\u89e3\u7801\u5149\u7167\u8d34\u56fe\u503c\u3002"),(0,i.kt)("h2",{id:"hdr-lightmap-support"},"HDR lightmap support"),(0,i.kt)("p",null,"You can use HDR lightmaps on Windows, Mac, Linux, iOS, tvOS, and Android. To control the encoding/compression of the lightmaps for these platforms, go to  ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Player"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Other Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Lightmap Encoding")," ."),(0,i.kt)("p",null,"Choosing  ",(0,i.kt)("strong",{parentName:"p"},"High Quality"),"  will enable HDR lightmap support, whereas  ",(0,i.kt)("strong",{parentName:"p"},"Normal Quality"),"  will switch to using  ",(0,i.kt)("strong",{parentName:"p"},"RGBM"),"  encoding.  ",(0,i.kt)("strong",{parentName:"p"},"Low Quality"),"  will switch to  ",(0,i.kt)("strong",{parentName:"p"},"dLDR"),"  encoding on mobile platforms, on other platforms it\u2019s equivalent to  ",(0,i.kt)("strong",{parentName:"p"},"Normal Quality")," ."),(0,i.kt)("p",null,"\u5728\u684c\u9762\u5e73\u53f0\u548c\u6e38\u620f\u4e3b\u673a\u5e73\u53f0\u4e0a\uff0cLighting \u7a97\u53e3\u4e2d\u542f\u7528\u4e86\u5149\u7167\u8d34\u56fe  ",(0,i.kt)("strong",{parentName:"p"},"Compression"),"  \u65f6\uff0c\u5c06\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"p"},"BC6H"),"  \u538b\u7f29\u683c\u5f0f\u6765\u538b\u7f29\u5149\u7167\u8d34\u56fe\u3002\u5bf9\u4e8e\u79fb\u52a8\u5e73\u53f0\uff0cUnity \u6839\u636e\u4e0b\u8868\u9009\u62e9 HDR \u683c\u5f0f\u3002"),(0,i.kt)("h2",{id:"advantages-of-high-quality-bc6h-lightmaps"},"Advantages of High Quality (BC6H) lightmaps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HDR \u5149\u7167\u8d34\u56fe\u4e0d\u4f7f\u7528\u4efb\u4f55\u7f16\u7801\u65b9\u6848\u6765\u7f16\u7801\u5149\u7167\u8d34\u56fe\u503c\uff0c\u56e0\u6b64\u652f\u6301\u7684\u8303\u56f4\u4ec5\u53d7\u5230 16 \u4f4d\u6d6e\u70b9\u7eb9\u7406\u683c\u5f0f\u7684\u9650\u5236\uff08\u8303\u56f4\u4ece 0 \u5230 65504\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"BC6H \u683c\u5f0f\u8d28\u91cf\u4f18\u4e8e DXT5 + RGBM \u683c\u5f0f\u7f16\u7801\uff0c\u5e76\u4e14\u4e0d\u4f1a\u4ea7\u751f RGBM \u7f16\u7801\u6240\u5177\u6709\u7684\u4efb\u4f55\u8272\u5e26\u7455\u75b5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u5bf9 HDR \u5149\u7167\u8d34\u56fe\u8fdb\u884c\u91c7\u6837\u7684\u7740\u8272\u5668\u662f\u4e00\u4e9b\u8f83\u77ed\u7684 ALU \u6307\u4ee4\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u5bf9\u91c7\u6837\u503c\u8fdb\u884c\u89e3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"BC6H \u683c\u5f0f\u4e0e DXT5 \u5177\u6709\u76f8\u540c\u7684 GPU \u5185\u5b58\u8981\u6c42\u3002")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u5217\u51fa\u4e86\u6bcf\u4e2a\u76ee\u6807\u5e73\u53f0\u7684\u7f16\u7801\u65b9\u6848\u53ca\u5176\u7eb9\u7406\u538b\u7f29\u683c\u5f0f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u76ee\u6807\u5e73\u53f0")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u7f16\u7801")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u538b\u7f29 - \u5927\u5c0f\uff08\u6bcf\u50cf\u7d20\u4f4d\u6570\uff09")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u5e73\u53f0\uff08PC\u3001Mac \u548c Linux\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},"RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"DXT5 / BC6H - 8 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WebGL 1.0 / 2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"RGBM"),(0,i.kt)("td",{parentName:"tr",align:null},"DXT5 - 8 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iOS ASTC (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"dLDR / RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"ASTC - 3.56 bpp / ASTC - 3.56 bpp / RGB9E5 - 32 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iOS PVRTC"),(0,i.kt)("td",{parentName:"tr",align:null},"dLDR / RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"PVRTC RGB - 4 bpp / ETC2 RGBA - 8 bpp / RGB9E5 - 32 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tvOS"),(0,i.kt)("td",{parentName:"tr",align:null},"dLDR / RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"ASTC - 3.56 bpp / ASTC - 3.56 bpp / RGB9E5 - 32 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Android ASTC (2)"),(0,i.kt)("td",{parentName:"tr",align:null},"dLDR / RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"ASTC - 3.56 bpp / ASTC - 3.56 bpp / ASTC HDR - 3.56 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Android ETC2"),(0,i.kt)("td",{parentName:"tr",align:null},"dLDR / RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"ETC2 RGB - 4 bpp / ETC2 RGBA - 8 bpp / ASTC HDR - 3.56 bpp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Android ETC"),(0,i.kt)("td",{parentName:"tr",align:null},"dLDR / RGBM / HDR"),(0,i.kt)("td",{parentName:"tr",align:null},"ETC1 RGB - 4 bpp / ETC2 RGBA - 8 bpp / ASTC HDR - 3.56 bpp")))),(0,i.kt)("p",null,"[","1","]"," The texture compression format used for lightmaps on  ",(0,i.kt)("strong",{parentName:"p"},"iOS"),"  depends on the ",(0,i.kt)("em",{parentName:"p"},"Texture compression format")," setting in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/iphone"},"Player Settings"),"."),(0,i.kt)("p",null,"[","2","]"," The texture compression format used for lightmaps on  ",(0,i.kt)("strong",{parentName:"p"},"Android"),"  depends on ",(0,i.kt)("a",{parentName:"p",href:"/docs/android-getting-started/class-player-settings-android#%E6%B8%B2%E6%9F%93"},"Player Settings")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/android-building-and-delivering/android-build-settings"},"Build Settings"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/android-introducing/android-requirements-and-compatibility"},"Texture compression settings")," for more details on how these settings interact."),(0,i.kt)("h2",{id:"\u9884\u8ba1\u7b97\u5b9e\u65f6\u5168\u5c40\u5149\u7167-gi"},"\u9884\u8ba1\u7b97\u5b9e\u65f6\u5168\u5c40\u5149\u7167 (GI)"),(0,i.kt)("p",null,"The inputs to the GI system have a different range and encoding to the output. Surface albedo is 8-bit unsigned integer RGB in gamma space and emission is 16-bit floating point RGB in linear space. For advice on providing custom inputs using a meta pass, see documentation on ",(0,i.kt)("a",{parentName:"p",href:"/docs/lightmappers/meta-pass"},"Lightmapping and shaders"),"."),(0,i.kt)("p",null,"\u8f90\u7167\u5ea6\u8f93\u51fa\u7eb9\u7406\u5c06\u4ee5 RGB9E5 \u5171\u4eab\u6307\u6570\u6d6e\u70b9\u683c\u5f0f\uff08\u5982\u679c\u56fe\u5f62\u786c\u4ef6\u652f\u6301\u6b64\u683c\u5f0f\uff09\u5b58\u50a8\uff0c\u6216\u8005\u4ee5\u8303\u56f4\u5728 5 \u4ee5\u5185\u7684 RGBM \u4f5c\u4e3a\u540e\u5907\u683c\u5f0f\u3002RGB9E5 \u5149\u7167\u8d34\u56fe\u7684\u8303\u56f4\u662f ","[","0, 65408","]","\u3002\u6709\u5173 RGB9E5 \u683c\u5f0f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_texture_shared_exponent.txt"},"Khronos.org\uff1aEXT","_","texture","_","shared","_","exponent"),"\u3002"),(0,i.kt)("p",null,"\u53e6\u8bf7\u53c2\u9605\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/texture-compression-formats/class-texture-importer-override"},"\u7eb9\u7406\u5bfc\u5165\u5668\u8986\u76d6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/class-texture-importer"},"Texture Types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/lighting-overview/lighting-window"},"\u5168\u5c40\u5149\u7167"))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2019\u201304\u201326 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,i.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2017.2/Documentation/Manual/30_search.html?q=newin20172"},"2017.2")," \u4e2d\u6dfb\u52a0\u4e86\u70d8\u7119\u5149\u7167\u8d34\u56fe NewIn20172"),(0,i.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2017.3/Documentation/Manual/30_search.html?q=newin20173"},"2017.3")," \u4e2d\u6dfb\u52a0\u4e86 HDR \u5149\u7167\u8d34\u56fe\u652f\u6301 NewIn20173"),(0,i.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.1/Documentation/Manual/30_search.html?q=newin20191"},"2019.1")," \u4e2d\u6dfb\u52a0\u4e86\u9002\u7528\u4e8e\u79fb\u52a8\u5e73\u53f0\u7684\u5149\u7167\u8d34\u56fe\u7f16\u7801\u8bbe\u7f6e NewIn20191"),(0,i.kt)("li",{parentName:"ul"},"Update lightmap texture compression formats for Android and iOS")))}d.isMDXComponent=!0}}]);