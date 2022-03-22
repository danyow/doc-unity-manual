"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12856],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),p=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(r),k=a,g=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18939:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"ProfilerRendering",title:"Rendering Profiler \u6a21\u5757",slug:"/profiler-window/profiler-rendering"},d="Rendering Profiler \u6a21\u5757",p={unversionedId:"unity-overview/analysis/profiler/profiler-window/ProfilerRendering",id:"unity-overview/analysis/profiler/profiler-window/ProfilerRendering",title:"Rendering Profiler \u6a21\u5757",description:"Rendering Profiler \u663e\u793a\u6709\u5173 CPU \u548c GPU \u4e3a\u6e32\u67d3\u573a\u666f\u5b8c\u6210\u7684\u5de5\u4f5c\u7684\u6e32\u67d3\u7edf\u8ba1\u4fe1\u606f\u548c\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u6765\u8861\u91cf\u573a\u666f\u4e0d\u540c\u533a\u57df\u7684\u8d44\u6e90\u5f3a\u5ea6\uff0c\u8fd9\u5bf9\u4f18\u5316\u5f88\u6709\u7528\u3002",source:"@site/docs/unity-overview/analysis/profiler/profiler-window/profiler-rendering.md",sourceDirName:"unity-overview/analysis/profiler/profiler-window",slug:"/profiler-window/profiler-rendering",permalink:"/docs/profiler-window/profiler-rendering",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/profiler/profiler-window/profiler-rendering.md",tags:[],version:"current",frontMatter:{id:"ProfilerRendering",title:"Rendering Profiler \u6a21\u5757",slug:"/profiler-window/profiler-rendering"},sidebar:"tutorialSidebar",previous:{title:"Physics Profiler \u6a21\u5757",permalink:"/docs/profiler-window/profiler-physics"},next:{title:"UI \u548c UI Details Profiler",permalink:"/docs/profiler-window/profiler-ui"}},u={},s=[{value:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",level:2},{value:"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027",id:"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027",level:2}],m={toc:s};function k(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rendering-profiler-\u6a21\u5757"},"Rendering Profiler \u6a21\u5757"),(0,l.kt)("p",null,"Rendering Profiler \u663e\u793a\u6709\u5173 CPU \u548c GPU \u4e3a\u6e32\u67d3\u573a\u666f\u5b8c\u6210\u7684\u5de5\u4f5c\u7684\u6e32\u67d3\u7edf\u8ba1\u4fe1\u606f\u548c\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u6765\u8861\u91cf\u573a\u666f\u4e0d\u540c\u533a\u57df\u7684\u8d44\u6e90\u5f3a\u5ea6\uff0c\u8fd9\u5bf9\u4f18\u5316\u5f88\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u8be5\u56fe\u8868\u663e\u793a\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6e32\u67d3\u7684\u6279\u6b21 (Batches)\u3001SetPass \u8c03\u7528 (SetPass Calls)\u3001\u4e09\u89d2\u5f62 (Triangles) \u548c\u9876\u70b9 (Vertices) \u7684\u6570\u91cf\u3002\u4e0b\u65b9\u7684\u9762\u677f\u5c06\u663e\u793a\u66f4\u591a\u6e32\u67d3\u7edf\u8ba1\u4fe1\u606f\uff0c\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u4e0e GameView ",(0,l.kt)("a",{parentName:"p",href:"#rendering-statistics"},"Rendering Statistics")," \u7a97\u53e3\u4e2d\u663e\u793a\u7684\u7edf\u8ba1\u4fe1\u606f\u4e00\u81f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/RenderProfiler.png",alt:"Rendering Profiler \u6a21\u5757"}),"\u3002"),(0,l.kt)("p",null,"Rendering Profiler \u6a21\u5757\u7684\u56fe\u8868\u5206\u4e3a\u56db\u4e2a\u7c7b\u522b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u56fe\u8868")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Batches Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u5904\u7406\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E9%9D%99%E6%80%81%E6%89%B9%E5%A4%84%E7%90%86"},"\u6279\u6b21"),"\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"SetPass Calls Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u4e2d\u5207\u6362\u7528\u4e8e\u6e32\u67d3\u6e38\u620f\u5bf9\u8c61\u7684\u7740\u8272\u5668\u901a\u9053\u7684\u6b21\u6570\u3002\u4e00\u4e2a\u7740\u8272\u5668\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u7740\u8272\u5668\u901a\u9053\uff0c\u6bcf\u4e2a\u901a\u9053\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u6e32\u67d3\u573a\u666f\u4e2d\u7684\u6e38\u620f\u5bf9\u8c61\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Triangles Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u5904\u7406\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E4%B8%89%E8%A7%92%E5%BD%A2"},"\u4e09\u89d2\u5f62"),"\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Vertices Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u5904\u7406\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E9%A1%B6%E7%82%B9"},"\u9876\u70b9"),"\u6570\u3002")))),(0,l.kt)("h2",{id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"},"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"),(0,l.kt)("p",null,"\u5f53\u60a8\u5355\u51fb Rendering Profiler \u6a21\u5757\u65f6\uff0c\u7a97\u53e3\u4e0b\u534a\u90e8\u5206\u7684\u8be6\u7ec6\u4fe1\u606f\u7a97\u683c\u4f1a\u663e\u793a\u8be6\u7ec6\u7684\u6e32\u67d3\u7edf\u8ba1\u4fe1\u606f\u3002\u8fd9\u4e9b\u7edf\u8ba1\u6570\u636e\u7c7b\u4f3c\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"#rendering-statistics"},"Rendering Statistics")," \u7a97\u53e3\u4e2d\u663e\u793a\u7684\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u5728\u8be6\u7ec6\u4fe1\u606f\u7a97\u683c\u7684\u5de6\u4e0a\u89d2\uff0c\u9009\u62e9 Open Frame Debugger \u4ee5\u6253\u5f00",(0,l.kt)("a",{parentName:"p",href:"/docs/graphics-performance-profiling/frame-debugger"},"\u5e27\u8c03\u8bd5\u5668"),"\uff0c\u5b83\u4e3a\u60a8\u63d0\u4f9b\u6709\u5173\u6e32\u67d3\u5e27\u7684\u5404\u4e2a\u7ed8\u5236\u8c03\u7528\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u4e5f\u53ef\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerRecorder.html"},"ProfilerRecorder API")," \u53ca ",(0,l.kt)("a",{parentName:"p",href:"/docs/profiler-creating-custom-modules/profiler-module-editor"},"Profiler Module Editor")," \u83b7\u5f97\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u81ea\u5b9a\u4e49\u6027\u80fd\u5206\u6790\u5668\u6a21\u5757\u4e2d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7edf\u8ba1\u4fe1\u606f")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5728\u53d1\u884c\u7248\u64ad\u653e\u5668\u4e2d\u53ef\u8bbf\u95ee")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"SetPass Calls Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u4e2d\u5207\u6362\u7528\u4e8e\u6e32\u67d3\u6e38\u620f\u5bf9\u8c61\u7684\u7740\u8272\u5668\u901a\u9053\u7684\u6b21\u6570\u3002\u4e00\u4e2a\u7740\u8272\u5668\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u7740\u8272\u5668\u901a\u9053\uff0c\u6bcf\u4e2a\u901a\u9053\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u6e32\u67d3\u573a\u666f\u4e2d\u7684\u6e38\u620f\u5bf9\u8c61\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Draw Calls Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u53d1\u51fa\u7684\u7ed8\u5236\u8c03\u7528\u603b\u6570\u3002Unity \u5728\u5c06\u6e38\u620f\u5bf9\u8c61\u6e32\u67d3\u5230\u5c4f\u5e55\u65f6\u53d1\u51fa\u7ed8\u5236\u8c03\u7528\u3002\u8fd9\u4e2a\u6570\u5b57\u5305\u62ec\u975e\u6279\u91cf\u7ed8\u5236\u8c03\u7528\u4ee5\u53ca\u52a8\u6001\u548c\u9759\u6001\u6279\u91cf\u7ed8\u5236\u8c03\u7528\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Total Batches Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u5904\u7406\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E9%9D%99%E6%80%81%E6%89%B9%E5%A4%84%E7%90%86"},"\u6279\u6b21"),"\u603b\u6570\u3002\u8fd9\u4e2a\u6570\u5b57\u5305\u62ec\u9759\u6001\u548c\u52a8\u6001\u6279\u6b21\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Triangles Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u5904\u7406\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E4%B8%89%E8%A7%92%E5%BD%A2"},"\u4e09\u89d2\u5f62"),"\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Vertices Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u5e27\u671f\u95f4\u5904\u7406\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E9%A1%B6%E7%82%B9"},"\u9876\u70b9"),"\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"(Dynamic Batching)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u90e8\u5206\u5305\u542b\u6709\u5173",(0,l.kt)("a",{parentName:"td",href:"#%E9%9D%99%E6%80%81%E6%89%B9%E5%A4%84%E7%90%86"},"\u52a8\u6001\u6279\u5904\u7406"),"\u7684\u7edf\u8ba1\u6570\u636e\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic Batched Draw Calls Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5408\u5e76\u4e3a\u52a8\u6001\u6279\u6b21\u7684\u7ed8\u5236\u8c03\u7528\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic Batches Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u5e27\u671f\u95f4\u5904\u7406\u7684\u52a8\u6001\u6279\u6b21\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic Batched Triangles Count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6279\u6b21\u4e2d\u5305\u542b\u7684\u6e38\u620f\u5bf9\u8c61\u4e2d\u7684\u4e09\u89d2\u5f62\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic Batched Vertices Count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6279\u6b21\u4e2d\u5305\u542b\u7684\u6e38\u620f\u5bf9\u8c61\u4e2d\u7684\u9876\u70b9\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic Batching Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u521b\u5efa\u52a8\u6001\u6279\u5904\u7406\u7ed3\u6784\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"(Static Batching)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u90e8\u5206\u5305\u542b\u6709\u5173",(0,l.kt)("a",{parentName:"td",href:"#%E9%9D%99%E6%80%81%E6%89%B9%E5%A4%84%E7%90%86"},"\u9759\u6001\u6279\u5904\u7406"),"\u7684\u7edf\u8ba1\u6570\u636e\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Static Batched Draw Calls Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5408\u5e76\u4e3a\u9759\u6001\u6279\u6b21\u7684\u7ed8\u5236\u8c03\u7528\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Static Batches Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u5904\u7406\u7684\u9759\u6001\u6279\u6b21\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Static Batched Triangles Count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u6279\u6b21\u4e2d\u5305\u542b\u7684\u6e38\u620f\u5bf9\u8c61\u4e2d\u7684\u4e09\u89d2\u5f62\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Static Batched Vertices Count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u6279\u6b21\u4e2d\u5305\u542b\u7684\u6e38\u620f\u5bf9\u8c61\u4e2d\u7684\u9876\u70b9\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"(Instancing)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u90e8\u5206\u5305\u542b\u6709\u5173 ",(0,l.kt)("a",{parentName:"td",href:"#%E5%AE%9E%E4%BE%8B%E5%8C%96"},"GPU \u5b9e\u4f8b\u5316"),"\u7684\u7edf\u8ba1\u6570\u636e\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instanced Batched Draw Calls Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5408\u5e76\u4e3a\u5b9e\u4f8b\u5316\u6279\u6b21\u7684\u7ed8\u5236\u8c03\u7528\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instanced Batches Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u4e00\u5e27\u5185\u6e32\u67d3",(0,l.kt)("a",{parentName:"td",href:"#%E5%AE%9E%E4%BE%8B%E5%8C%96"},"\u5b9e\u4f8b\u5316"),"\u6e38\u620f\u5bf9\u8c61\u7684\u5904\u7406\u6279\u6b21\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instanced Batched Triangles Count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u5316\u6e38\u620f\u5bf9\u8c61\u4e2d\u7684\u4e09\u89d2\u5f62\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Instanced Batched Vertices Count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u5316\u6e38\u620f\u5bf9\u8c61\u4e2d\u7684\u9876\u70b9\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Used Textures Count",(0,l.kt)("br",null),(0,l.kt)("br",null),"Used Textures Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u5e27\u671f\u95f4\u4f7f\u7528\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E7%BA%B9%E7%90%86"},"\u7eb9\u7406"),"\u6570\u4ee5\u53ca\u7eb9\u7406\u4f7f\u7528\u7684\u5185\u5b58\u91cf\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Render Textures Count",(0,l.kt)("br",null),(0,l.kt)("br",null),"Render Textures Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u5e27\u671f\u95f4\u4f7f\u7528\u7684 ",(0,l.kt)("a",{parentName:"td",href:"#render-textures"},"RenderTextures")," \u6570\u4ee5\u53ca RenderTextures \u4f7f\u7528\u7684\u5185\u5b58\u91cf\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Render Textures Changes Count")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity \u5728\u5e27\u671f\u95f4\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a RenderTextures \u8bbe\u7f6e\u4e3a\u6e32\u67d3\u76ee\u6807\u7684\u6b21\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Used Buffers Count",(0,l.kt)("br",null),(0,l.kt)("br",null),"Used Buffers Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u4f7f\u7528\u7684 GPU \u7f13\u51b2\u533a\u548c\u5185\u5b58\u7684\u603b\u6570\u3002\u8fd9\u5305\u62ec\u9876\u70b9\u3001\u7d22\u5f15\u548c\u8ba1\u7b97\u7f13\u51b2\u533a\u4ee5\u53ca\u6e32\u67d3\u6240\u9700\u7684\u6240\u6709\u5185\u90e8\u7f13\u51b2\u533a\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Vertex Buffer Upload In Frame Count",(0,l.kt)("br",null),(0,l.kt)("br",null),"Vertex Buffer Upload In Frame Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU \u5728\u5e27\u4e2d\u4e0a\u4f20\u5230 GPU \u7684\u51e0\u4f55\u4f53\u6570\u91cf\u3002\u8fd9\u4ee3\u8868\u9876\u70b9/\u6cd5\u7ebf/ texcoord \u6570\u636e\u3002GPU \u4e0a\u53ef\u80fd\u5df2\u7ecf\u6709\u4e00\u4e9b\u51e0\u4f55\u4f53\u3002\u6b64\u7edf\u8ba1\u4fe1\u606f\u4ec5\u5305\u62ec Unity \u5728\u5e27\u4e2d\u4f20\u8f93\u7684\u51e0\u4f55\u4f53\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Index Buffer Upload In Frame Count",(0,l.kt)("br",null),(0,l.kt)("br",null),"Index Buffer Upload In Frame Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU \u5728\u5e27\u4e2d\u4e0a\u4f20\u5230 GPU \u7684\u51e0\u4f55\u4f53\u6570\u91cf\u3002\u8fd9\u8868\u793a\u4e09\u89d2\u5f62\u7d22\u5f15\u6570\u636e\u3002GPU \u4e0a\u53ef\u80fd\u5df2\u7ecf\u6709\u4e00\u4e9b\u51e0\u4f55\u4f53\u3002\u6b64\u7edf\u8ba1\u4fe1\u606f\u4ec5\u5305\u62ec Unity \u5728\u5e27\u4e2d\u4f20\u8f93\u7684\u51e0\u4f55\u4f53\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shadow Casters Count")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4e00\u5e27\u4e2d\u6295\u5c04\u9634\u5f71\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u6570\u91cf\u3002\u5982\u679c\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u6295\u5c04\u591a\u4e2a\u9634\u5f71\uff08\u56e0\u4e3a\u591a\u4e2a\u5149\u6e90\u7167\u4eae\u5b83\uff09\uff0c\u8be5\u5bf9\u8c61\u6295\u5c04\u7684\u6bcf\u4e2a\u9634\u5f71\u90fd\u6709\u4e00\u4e2a\u6761\u76ee\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,l.kt)("h2",{id:"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027"},"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027"),(0,l.kt)("p",null,"Rendering \u6a21\u5757\u7684 Profiler \u8ba1\u6570\u5668\u4e5f\u53ef\u5728\u64ad\u653e\u5668\u4e2d\u4f7f\u7528\u3002\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerRecorder.html"},"ProfilerRecorder API")," \u8bbf\u95ee\u64ad\u653e\u5668\u4e2d\u7684 Render Profiler \u6a21\u5757\u4fe1\u606f\u3002\u53d1\u884c\u7248\u64ad\u653e\u5668\u4e2d\u8fd8\u63d0\u4f9b\u4e86\u9ad8\u7ea7\u8ba1\u6570\u5668\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5305\u542b\u4e00\u4e2a\u7b80\u5355\u7684\u811a\u672c\uff0c\u8be5\u811a\u672c\u6536\u96c6\u201cSetPass Calls Count\u201d\u3001\u201cDraw Calls Count\u201d \u548c \u201cVertices Count\u201d\u6307\u6807\u5e76\u5c06\u5176\u663e\u793a\u4e3a TextArea\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Text;\nusing Unity.Profiling;\nusing UnityEngine;\n \npublic class RenderStatsScript : MonoBehaviour\n{\n    string statsText;\n    ProfilerRecorder setPassCallsRecorder;\n    ProfilerRecorder drawCallsRecorder;\n    ProfilerRecorder verticesRecorder;\n\n    void OnEnable()\n    {\n        setPassCallsRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Render, "SetPass Calls Count");\n        drawCallsRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Render, "Draw Calls Count");\n        verticesRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Render, "Vertices Count");\n    }\n \n    void OnDisable()\n    {\n        setPassCallsRecorder.Dispose();\n        drawCallsRecorder.Dispose();\n        verticesRecorder.Dispose();\n    }\n\n    void Update()\n    {\n        var sb = new StringBuilder(500);\n        if (setPassCallsRecorder.Valid)\n            sb.AppendLine($"SetPass Calls: {setPassCallsRecorder.LastValue}");\n        if (drawCallsRecorder.Valid)\n            sb.AppendLine($"Draw Calls: {drawCallsRecorder.LastValue}");\n        if (verticesRecorder.Valid)\n            sb.AppendLine($"Vertices: {verticesRecorder.LastValue}");\n        statsText = sb.ToString();\n    }\n \n    void OnGUI()\n    {\n        GUI.TextArea(new Rect(10, 30, 250, 50), statsText);\n    }\n}\n')),(0,l.kt)("p",null,"Rendering Profiler \u6a21\u5757\u4fe1\u606f\u5c5e\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerCategory.Render.html"},"ProfilerCategory.Render")," \u6027\u80fd\u5206\u6790\u5668\u7c7b\u522b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5728\u81ea\u5b9a\u4e49\u6a21\u5757\u4e2d\u7a81\u51fa\u663e\u793a\u9009\u5b9a\u7684\u6e32\u67d3\u8ba1\u6570\u5668\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/profiler-creating-custom-modules/profiler-module-editor"},"Module Editor")," \u914d\u7f6e\u56fe\u8868\u53ca\u8be6\u7ec6\u89c6\u56fe\u3002"))}k.isMDXComponent=!0}}]);