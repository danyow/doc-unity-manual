"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3522],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(r),g=a,N=k["".concat(o,".").concat(g)]||k[g]||m[g]||l;return r?n.createElement(N,i(i({ref:e},u),{},{components:r})):n.createElement(N,i({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},85354:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],p={id:"ProfilerGPU",title:"GPU Usage Profiler \u6a21\u5757",slug:"/profiler-window/profiler-gpu"},o="GPU Usage Profiler \u6a21\u5757",d={unversionedId:"unity-overview/analysis/profiler/profiler-window/ProfilerGPU",id:"unity-overview/analysis/profiler/profiler-window/ProfilerGPU",title:"GPU Usage Profiler \u6a21\u5757",description:"GPU Usage Profiler \u6a21\u5757\u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u7684 GPU \u65f6\u95f4\u4f7f\u7528\u60c5\u51b5\u3002\u53ea\u80fd\u5728\u8fd0\u884c\u6a21\u5f0f (Playmode) \u4e0b\u4f7f\u7528 GPU Profiler \u6216\u8005\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u6784\u5efa\u3002\u4e0d\u80fd\u7528\u4e8e\u5bf9 Editor \u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002",source:"@site/docs/unity-overview/analysis/profiler/profiler-window/profiler-gpu.md",sourceDirName:"unity-overview/analysis/profiler/profiler-window",slug:"/profiler-window/profiler-gpu",permalink:"/doc-unity-manual/docs/profiler-window/profiler-gpu",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/profiler/profiler-window/profiler-gpu.md",tags:[],version:"current",frontMatter:{id:"ProfilerGPU",title:"GPU Usage Profiler \u6a21\u5757",slug:"/profiler-window/profiler-gpu"},sidebar:"tutorialSidebar",previous:{title:"Global Illumination Profiler \u6a21\u5757",permalink:"/doc-unity-manual/docs/profiler-window/profiler-gi"},next:{title:"Memory Profiler \u6a21\u5757",permalink:"/doc-unity-manual/docs/profiler-window/profiler-memory"}},u={},m=[{value:"GPU \u6027\u80fd\u5206\u6790\u652f\u6301",id:"gpu-\u6027\u80fd\u5206\u6790\u652f\u6301",level:2},{value:"\u56fe\u8868\u7c7b\u522b",id:"\u56fe\u8868\u7c7b\u522b",level:2},{value:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",level:2}],k={toc:m};function g(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gpu-usage-profiler-\u6a21\u5757"},"GPU Usage Profiler \u6a21\u5757"),(0,l.kt)("p",null,"GPU Usage Profiler \u6a21\u5757\u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u7684 GPU \u65f6\u95f4\u4f7f\u7528\u60c5\u51b5\u3002\u53ea\u80fd\u5728\u8fd0\u884c\u6a21\u5f0f (Playmode) \u4e0b\u4f7f\u7528 GPU Profiler \u6216\u8005\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u6784\u5efa\u3002\u4e0d\u80fd\u7528\u4e8e\u5bf9 Editor \u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gpu-profiler-module.png",alt:"Profiler \u7a97\u53e3\u4e2d\u7684 GPU Usage Profiler"})),(0,l.kt)("p",null,"Profiler \u7a97\u53e3\u4e2d\u7684 GPU Usage Profiler"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5982\u679c\u5728  ",(0,l.kt)("strong",{parentName:"p"},"Player Settings"),"  \u4e2d\u542f\u7528\u4e86  ",(0,l.kt)("strong",{parentName:"p"},"Graphics Jobs")," \uff0c\u5219\u4e0d\u652f\u6301 GPU \u6027\u80fd\u5206\u6790\u3002\u8bf7\u53c2\u9605\u6709\u5173",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-player-settings"},"\u72ec\u7acb\u5e73\u53f0 Player \u8bbe\u7f6e"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\u6b64\u5916\uff0c\u5728 macOS \u4e0a\uff0c\u53ea\u80fd\u5728 Mavericks 10.9 \u6216\u66f4\u9ad8\u7248\u672c\u4e0a\u5bf9 GPU \u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002"),(0,l.kt)("h2",{id:"gpu-\u6027\u80fd\u5206\u6790\u652f\u6301"},"GPU \u6027\u80fd\u5206\u6790\u652f\u6301"),(0,l.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 GPU Usage Profiler \u6a21\u5757\u652f\u6301\u7684\u5e73\u53f0\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5e73\u53f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u56fe\u5f62 API")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u72b6\u6001")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Windows")),(0,l.kt)("td",{parentName:"tr",align:null},"DirectX 11\u3001DirectX 12\u3001OpenGL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Vulkan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"macOS")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u3002 ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f\uff1a")," Apple \u5df2\u5e9f\u5f03\u5bf9 OpenGL \u7684\u652f\u6301\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Metal"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u3002\u6539\u7528 XCode \u7684 GPU \u5e27\u8c03\u8bd5\u5668 UI\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Linux")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL Core"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Vulkan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"PlayStation 4")),(0,l.kt)("td",{parentName:"tr",align:null},"libgnm"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u652f\u6301\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u5f00\u5173")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch API"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"WebGL")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709 WebGL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Android")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8fd0\u884c NVIDIA \u6216 Intel GPU \u7684\u8bbe\u5907\u4e0a\u53d7\u652f\u6301\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Vulkan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"iOS\u3001tvOS")),(0,l.kt)("td",{parentName:"tr",align:null},"Metal"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u3002\u6539\u7528 XCode \u7684 GPU \u5e27\u8c03\u8bd5\u5668 UI\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Tizen")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u3002")))),(0,l.kt)("p",null,"\u5728 Windows \u4e0a\uff0c\u4ec5\u5f53\u91c7\u7528 Direct3D 9 \u548c Direct3D 11 API \u65f6\uff0cUnity \u624d\u652f\u6301 Editor \u4e2d\u7684 Playmode \u6027\u80fd\u5206\u6790\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4fbf\u4e8e\u5feb\u901f\u5206\u6790\uff0c\u56e0\u4e3a\u610f\u5473\u7740\u4e0d\u9700\u8981\u6784\u5efa\u64ad\u653e\u5668\uff1b\u4f46\u662f\uff0c\u6027\u80fd\u5206\u6790\u5668\u53d7\u8fd0\u884c Unity Editor \u7684\u5f00\u9500\u6240\u5f71\u54cd\uff0c\u53ef\u80fd\u4f1a\u4f7f\u6027\u80fd\u5206\u6790\u7ed3\u679c\u4e0d\u591f\u51c6\u786e\u3002"),(0,l.kt)("h2",{id:"\u56fe\u8868\u7c7b\u522b"},"\u56fe\u8868\u7c7b\u522b"),(0,l.kt)("p",null,"GPU Usage Profiler \u6a21\u5757\u7684\u56fe\u8868\u6709\u51e0\u4e2a\u4e0d\u540c\u7684\u7c7b\u522b\uff0c\u53ef\u7528\u4e8e\u8c03\u67e5 GPU \u7684\u65f6\u95f4\u4f7f\u7528\u60c5\u51b5\u3002\u8981\u66f4\u6539\u56fe\u8868\u4e2d\u7c7b\u522b\u7684\u987a\u5e8f\uff0c\u53ef\u4ee5\u5728\u56fe\u8868\u7684\u56fe\u4f8b\u4e2d\u62d6\u653e\u8fd9\u4e9b\u7c7b\u522b\u3002\u8fd8\u53ef\u4ee5\u5355\u51fb\u67d0\u4e2a\u7c7b\u522b\u7684\u6709\u8272\u56fe\u4f8b\u4ee5\u5207\u6362\u662f\u5426\u663e\u793a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u56fe\u8868\u7c7b\u522b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Opaque")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u6e32\u67d3\u4e0d\u900f\u660e\u5bf9\u8c61\u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Transparent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u6e32\u67d3\u900f\u660e\u5bf9\u8c61\u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shadows/Depth")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u6e32\u67d3\u9634\u5f71\u8d34\u56fe\u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Deferred PrePass")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u5ef6\u8fdf\u6e32\u67d3\u7ba1\u7ebf\u6e32\u67d3\u6df1\u5ea6\u7f13\u51b2\u533a\u9884\u901a\u9053 (pre pass) \u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Deferred Lighting")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u5ef6\u8fdf\u6e32\u67d3\u7ba1\u7ebf\u5904\u7406\u5149\u7167\u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"PostProcess")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u5904\u7406\u540e\u671f\u5904\u7406\u6548\u679c\u7684\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Other")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u53ef\u7f16\u7a0b\u6e32\u67d3\u7ba1\u7ebf\u7b49\u5176\u4ed6\u4e8b\u52a1\u7684\u6e32\u67d3\u65f6\u95f4\u3002")))),(0,l.kt)("h2",{id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"},"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"),(0,l.kt)("p",null,"\u9009\u62e9 GPU Usage \u6a21\u5757\u65f6\uff0c\u4e0b\u9762\u7684\u8be6\u7ec6\u4fe1\u606f\u9762\u677f\u5c06\u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u5728\u9009\u5b9a\u5e27\u5185\u82b1\u8d39\u7684\u65f6\u95f4\u7684\u7ec6\u5206\u4fe1\u606f\u3002\u53ef\u4ee5\u5c06\u65f6\u95f4\u6570\u636e\u663e\u793a\u4e3a\u5c42\u7ea7\u8868\u3002\u8981\u66f4\u6539\u8868\u89c6\u56fe\uff0c\u8bf7\u4f7f\u7528\u8be6\u7ec6\u4fe1\u606f\u9762\u677f\u4e2d\u7684\u5de6\u4e0a\u65b9\u4e0b\u62c9\u9009\u5355\uff08\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a Hierarchy\uff09\u3002\u53ef\u7528\u89c6\u56fe\u6709\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u89c6\u56fe")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hierarchy")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6309\u65f6\u95f4\u6570\u636e\u7684\u5185\u90e8\u5c42\u7ea7\u7ed3\u6784\u5bf9\u8fd9\u4e9b\u6570\u636e\u5206\u7ec4\u3002\u6b64\u9009\u9879\u4ee5\u964d\u5e8f\u5217\u8868\u683c\u5f0f\u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u8c03\u7528\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u6309\u82b1\u8d39\u7684\u65f6\u95f4\u6392\u5e8f\u3002\u8fd8\u53ef\u4ee5\u6309 GPU \u65f6\u95f4\u603b\u91cf\u6216\u8c03\u7528\u6b21\u6570\u5bf9\u8fd9\u4e9b\u4fe1\u606f\u8fdb\u884c\u6392\u5e8f\u3002\u8981\u66f4\u6539\u7528\u4e8e\u5bf9\u8868\u8fdb\u884c\u6392\u5e8f\u7684\u5217\uff0c\u8bf7\u5355\u51fb\u8be5\u8868\u5217\u7684\u6807\u9898\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Raw Hierarchy")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7c7b\u4f3c\u4e8e\u53d1\u751f\u8ba1\u65f6\u7684\u8c03\u7528\u6808\u7684\u5c42\u7ea7\u7ed3\u6784\u663e\u793a\u65f6\u95f4\u6570\u636e\u3002Unity \u5728\u6b64\u6a21\u5f0f\u4e2d\u5355\u72ec\u5217\u51fa\u6bcf\u4e2a\u8c03\u7528\u6808\uff0c\u800c\u4e0d\u662f\u50cf\u5728 Hierarchy \u89c6\u56fe\u4e2d\u4e00\u6837\u5c06\u5b83\u4eec\u5408\u5e76\u3002")))),(0,l.kt)("p",null,"\u9009\u62e9 GPU Usage Profiler \u6a21\u5757\u540e\uff0c\u6b64\u6027\u80fd\u5206\u6790\u5668\u7684\u5e95\u90e8\u9762\u677f\u5c06\u663e\u793a\u9009\u5b9a\u5e27\u7684\u5c42\u7ea7\u65f6\u95f4\u6570\u636e\u3002\u4ece\u5c42\u7ea7\u89c6\u56fe\u4e2d\u9009\u62e9\u4e00\u9879\u5373\u53ef\u5728\u53f3\u4fa7\u9762\u677f\u4e2d\u67e5\u770b\u8d21\u732e\u7684\u7ec6\u5206\u60c5\u51b5\u3002\u8bf7\u53c2\u9605\u6709\u5173 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler-window"},"Profiler \u7a97\u53e3"),"\u7684\u6587\u6863\u4ee5\u8fdb\u4e00\u6b65\u4e86\u89e3 Profiler \u7a97\u53e3\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u8868\u89c6\u56fe\u5305\u542b\u4ee5\u4e0b\u5217\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5217")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Total")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u7279\u5b9a\u51fd\u6570\u4e0a\u82b1\u8d39\u7684\u603b\u65f6\u95f4\uff08\u4ee5\u767e\u5206\u6bd4\u8868\u793a\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DrawCalls")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u5e27\u4e2d\u8c03\u7528\u6b64\u51fd\u6570\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"GPU ms")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u7279\u5b9a\u51fd\u6570\u4e0a\u82b1\u8d39\u7684\u603b\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")))))}g.isMDXComponent=!0}}]);