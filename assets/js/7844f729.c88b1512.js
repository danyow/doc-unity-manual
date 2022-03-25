"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74372],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||c;return n?a.createElement(y,s(s({ref:t},o),{},{components:n})):a.createElement(y,s({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<c;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8776:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),c=(n(67294),n(3905)),s=["components"],i={id:"AsyncReadManagerMetrics",title:"\u8d44\u6e90\u52a0\u8f7d\u6307\u6807",slug:"/analysis/async-read-manager-metrics"},l="\u8d44\u6e90\u52a0\u8f7d\u6307\u6807",p={unversionedId:"unity-overview/analysis/AsyncReadManagerMetrics",id:"unity-overview/analysis/AsyncReadManagerMetrics",title:"\u8d44\u6e90\u52a0\u8f7d\u6307\u6807",description:"AsyncReadManagerMetrics \u7c7b\u7528\u4e8e\u76d1\u63a7\u8fd0\u884c\u65f6\u8d44\u6e90\u52a0\u8f7d\u548c\u6587\u4ef6\u8bfb\u53d6\u6027\u80fd\u3002\u8be5\u7c7b\u8bb0\u5f55\u4e86\u6709\u5173\u7531 AsyncReadManager \u7ba1\u7406\u7684\u6240\u6709\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\u7684\u6570\u636e\u3002",source:"@site/docs/unity-overview/analysis/async-read-manager-metrics.md",sourceDirName:"unity-overview/analysis",slug:"/analysis/async-read-manager-metrics",permalink:"/doc-unity-manual/docs/analysis/async-read-manager-metrics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/async-read-manager-metrics.md",tags:[],version:"current",frontMatter:{id:"AsyncReadManagerMetrics",title:"\u8d44\u6e90\u52a0\u8f7d\u6307\u6807",slug:"/analysis/async-read-manager-metrics"},sidebar:"tutorialSidebar",previous:{title:"\u5206\u6790",permalink:"/doc-unity-manual/docs/analysis"},next:{title:"\u4e86\u89e3 Unity \u4e2d\u7684\u4f18\u5316",permalink:"/doc-unity-manual/docs/best-practice-understanding-performance-in-unity"}},o={},m=[{value:"\u542f\u7528\u6307\u6807\u6536\u96c6",id:"\u542f\u7528\u6307\u6807\u6536\u96c6",level:2},{value:"\u83b7\u53d6\u6307\u6807\u6570\u636e",id:"\u83b7\u53d6\u6307\u6807\u6570\u636e",level:2},{value:"\u83b7\u53d6\u6c47\u603b\u6570\u636e",id:"\u83b7\u53d6\u6c47\u603b\u6570\u636e",level:2},{value:"\u6c47\u603b\u8fc7\u6ee4\u5668",id:"\u6c47\u603b\u8fc7\u6ee4\u5668",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,c.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u8d44\u6e90\u52a0\u8f7d\u6307\u6807"},"\u8d44\u6e90\u52a0\u8f7d\u6307\u6807"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html"},"AsyncReadManagerMetrics")," \u7c7b\u7528\u4e8e\u76d1\u63a7\u8fd0\u884c\u65f6\u8d44\u6e90\u52a0\u8f7d\u548c\u6587\u4ef6\u8bfb\u53d6\u6027\u80fd\u3002\u8be5\u7c7b\u8bb0\u5f55\u4e86\u6709\u5173\u7531 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManager.html"},"AsyncReadManager")," \u7ba1\u7406\u7684\u6240\u6709\u6587\u4ef6\u8bfb\u53d6\u64cd\u4f5c\u7684\u6570\u636e\u3002"),(0,c.kt)("p",null,"Unity \u5f15\u64ce\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManager.html"},"AsyncReadManager")," \u5728\u8fd0\u884c\u65f6\u8bfb\u53d6\u5927\u591a\u6570\u6587\u4ef6\u3002\u4f7f\u7528 AsyncReadManager \u52a0\u8f7d\u7684\u6587\u4ef6\u5305\u62ec AssetBundles\u3001Addressables \u548c Resources\u3002\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManager.Read.html"},"AsyncReadManager.Read")," \u4ece\u811a\u672c\u52a0\u8f7d\u6587\u4ef6\u3002"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html"},"AsyncReadManagerMetrics")," \u7c7b\u5141\u8bb8\u60a8\u542f\u7528\u6307\u6807\u6536\u96c6\u5e76\u68c0\u7d22\u8bb0\u5f55\u7684\u6307\u6807\u6570\u636e\u3002\u60a8\u8fd8\u53ef\u4ee5\u8fc7\u6ee4\u548c\u6c47\u603b\u8bb0\u5f55\u7684\u6570\u636e\u4ee5\u5e2e\u52a9\u60a8\u8fdb\u884c\u5206\u6790\u3002\u8be5\u6307\u6807\u4fe1\u606f\u53ef\u5e2e\u52a9\u60a8\u8bc6\u522b\u6d89\u53ca\u8d44\u6e90\u52a0\u8f7d\u7684\u95ee\u9898\u533a\u57df\uff0c\u5e76\u8861\u91cf\u60a8\u7684\u66f4\u6539\u5bf9\u8d44\u6e90\u52a0\u8f7d\u6027\u80fd\u7684\u5f71\u54cd\u3002"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html"},"AsyncReadManagerMetrics")," \u7c7b",(0,c.kt)("em",{parentName:"p"},"\u4ec5"),"\u5728\u5f00\u53d1\u7248\u4e2d\u63d0\u4f9b\u3002\u60a8\u5fc5\u987b\u5c06\u4efb\u4f55\u5bf9 AsyncReadManagerMetrics API \u7684\u8c03\u7528\u4fdd\u62a4\u5728\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"ENABLE_PROFILER")," \u7b26\u53f7\u7684 #if \u9884\u5904\u7406\u5668\u6307\u4ee4\u5185\u3002",(0,c.kt)("inlineCode",{parentName:"p"},"ENABLE_PROFILER")," \u7b26\u53f7\u4ec5\u9488\u5bf9\u5f00\u53d1\u7248\u5b9a\u4e49\uff0c\u8fd9\u53ef\u4f7f\u60a8\u7684\u811a\u672c\u5728\u6307\u6807\u4e0d\u53ef\u7528\u7684\u7248\u672c\u4e2d\u7f16\u8bd1\u3002\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"UNITY_2020_2_OR_NEWER")," \u7b26\u53f7\u4ece\u65e9\u671f\u7248\u672c\u7684 Unity \u4e2d\u53bb\u9664\u6307\u6807\u4ee3\u7801\u3002\u4f8b\u5982\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER\n    AsyncReadManagerMetrics.StartCollectingMetrics();\n# endif\n")),(0,c.kt)("h2",{id:"\u542f\u7528\u6307\u6807\u6536\u96c6"},"\u542f\u7528\u6307\u6807\u6536\u96c6"),(0,c.kt)("p",null,"\u60a8\u5fc5\u987b\u542f\u7528\u6307\u6807\u6536\u96c6\u624d\u80fd\u5f00\u59cb\u8bb0\u5f55\u6570\u636e\u3002\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u542f\u7528\u6307\u6807\u6536\u96c6\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"\u8c03\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.StartCollectingMetrics.html"},"AsyncReadManagerMetrics.StartCollectingMetrics")," ","*","\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u4f20\u9012\u547d\u4ee4\u884c\u53c2\u6570  ",(0,c.kt)("strong",{parentName:"p"},"-","enable-file-read-metrics")," "),(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"  \u542f\u52a8 Unity \u7f16\u8f91\u5668\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012  ",(0,c.kt)("strong",{parentName:"p"},"-","enable-file-read-metrics"),"  \u5728\u8fdb\u5165\u8fd0\u884c\u6a21\u5f0f\u65f6\u542f\u7528\u6536\u96c6\u3002\u4f46\u662f\uff0c\u7f16\u8f91\u5668\u672c\u8eab\u4f1a\u52a0\u8f7d\u67d0\u4e9b\u7c7b\u522b\u7684\u8d44\u6e90\uff08\u5982\u7eb9\u7406\uff09\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5728\u60a8\u8fdb\u5165\u8fd0\u884c\u6a21\u5f0f\u65f6\u91cd\u65b0\u52a0\u8f7d\u5b83\u4eec\u3002\u8981\u5168\u9762\u4e86\u89e3\u6587\u4ef6 IO \u6307\u6807\uff0c\u60a8\u5fc5\u987b\u4ece\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u7248\u4e2d\u6536\u96c6\u6570\u636e\u3002"))),(0,c.kt)("h2",{id:"\u83b7\u53d6\u6307\u6807\u6570\u636e"},"\u83b7\u53d6\u6307\u6807\u6570\u636e"),(0,c.kt)("p",null,"\u901a\u8fc7\u8c03\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html"},"GetMetrics")," \u68c0\u7d22\u7531 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html"},"AsyncReadManagerMetrics")," \u7c7b\u6536\u96c6\u7684\u6307\u6807\u3002\u5411\u6b64\u51fd\u6570\u4f20\u9012 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags.html"},"AsyncReadManagerMetrics.Flags")," \u6307\u5b9a\u662f\u5426\u5728\u68c0\u7d22\u540e\u6e05\u9664\u6307\u6807\u3002\u6e05\u9664\u6307\u6807\u4f1a\u5c06\u6240\u6709\u5df2\u5b8c\u6210\uff08\u5305\u62ec\u53d6\u6d88\u548c\u5931\u8d25\uff09\u7684\u8bfb\u53d6\u4ece\u5b58\u50a8\u7684\u6307\u6807\u4e2d\u5220\u9664\u3002\u6e05\u9664\u4e0d\u4f1a\u5f71\u54cd\u4efb\u4f55\u6392\u961f\u4e2d\u6216\u8fdb\u884c\u4e2d\u7684\u64cd\u4f5c\uff1b\u60a8\u53ef\u4ee5\u4e4b\u540e\u901a\u8fc7\u518d\u6b21\u8c03\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html"},"GetMetrics")," \u83b7\u53d6\u672a\u5b8c\u6210\u64cd\u4f5c\u7684\u6307\u6807\u3002\u901a\u8fc7\u5b9a\u671f\u6e05\u9664\u6307\u6807\uff0c\u60a8\u53ef\u4ee5\u907f\u514d\u91cd\u590d\u8bfb\u53d6\u76f8\u540c\u7684\u6570\u636e\uff0c\u8fd8\u53ef\u4ee5\u51cf\u5c11\u7cfb\u7edf\u7684\u6570\u636e\u5f00\u9500\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER\n    AsyncReadManagerRequestMetric[] metrics \n        = AsyncReadManagerMetrics.GetMetrics(AsyncReadManagerMetrics.Flags.ClearOnRead);\n# endif\n\n")),(0,c.kt)("p",null,"\u6307\u6807\u6570\u636e\u4f1a\u5c3d\u53ef\u80fd\u5305\u62ec\u6709\u5173\u8bfb\u53d6\u64cd\u4f5c\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\uff1a\u8bf7\u6c42\u8be5\u8bfb\u53d6\u64cd\u4f5c\u7684 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html"},"AssetLoadingSubsystem"),"\u3001",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.AssetName.html"},"AssetName")," \u4ee5\u53ca ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.AssetTypeId.html"},"AssetTypeID"),"\u3002\u5f53 AsyncReadManager \u65e0\u6743\u8bbf\u95ee\u6b64\u4fe1\u606f\u65f6\uff0c\u8fd9\u4e9b\u6307\u6807\u5b57\u6bb5\u7684\u503c\u5206\u522b\u4e3a\uff1a",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.Other.html"},"Other"),"\u3001\u7a7a\u503c\u548c 0\u3002"),(0,c.kt)("p",null," ",(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u76ee\u524d\u5df2\u77e5\u652f\u6301\u7684\u8d44\u6e90 TypeID \u5982\u4e0b\u8868\u6240\u793a\u3002\u5bf9\u4e8e\u53ef\u80fd\u51fa\u73b0\u7684\u5176\u4ed6 TypeID\uff0c\u8bf7\u53c2\u9605 ",(0,c.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/text-scene-format/class-idreference"},"YAML \u7c7b ID \u53c2\u8003"),"\u3002"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"TypeID"),(0,c.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u540d"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"28"),(0,c.kt)("td",{parentName:"tr",align:null},"Texture2D")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"117"),(0,c.kt)("td",{parentName:"tr",align:null},"Texture3D")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"89"),(0,c.kt)("td",{parentName:"tr",align:null},"CubeMap")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"43"),(0,c.kt)("td",{parentName:"tr",align:null},"Mesh")))),(0,c.kt)("h2",{id:"\u83b7\u53d6\u6c47\u603b\u6570\u636e"},"\u83b7\u53d6\u6c47\u603b\u6570\u636e"),(0,c.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u83b7\u53d6 AsyncReadManager \u6307\u6807\u7684\u6c47\u603b\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetCurrentSummaryMetrics.html"},"GetCurrentSummaryMetrics")," \u2013 \u8fd4\u56de\u81ea\u4e0a\u6b21\u6e05\u9664\u6307\u6807\u5b58\u50a8\u4ee5\u6765\u6536\u96c6\u7684\u6240\u6709\u6307\u6807\u7684\u6c47\u603b\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetSummaryOfMetrics.html"},"GetSummaryOfMetrics")," \u2013 \u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6307\u6807\u6c47\u603b\u7684 ",(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html"},"AsyncReadManagerRequestMetric")," \u6570\u7ec4\uff0c\u8be5\u6570\u7ec4\u53ef\u901a\u8fc7\u8c03\u7528 ",(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html"},"GetMetrics")," \u83b7\u5f97\u3002")),(0,c.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER\n    AsyncReadManagerSummaryMetrics summaryOfMetrics \n        = AsyncReadManagerMetrics.GetCurrentSummaryMetrics(AsyncReadManagerMetrics.Flags.ClearOnRead);\n# endif\n")),(0,c.kt)("p",null,"\u6216\u8005\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER\n    AsyncReadManagerRequestMetric[] metrics \n        = AsyncReadManagerMetrics.GetMetrics(AsyncReadManagerMetrics.Flags.ClearOnRead);\n    AsyncReadManagerSummaryMetrics summaryOfMetrics \n        = AsyncReadManagerMetrics.GetSummaryOfMetrics(metrics);\n# endif\n")),(0,c.kt)("p",null,"\u6307\u6807\u7684\u6c47\u603b\u6570\u636e\u5305\u62ec\u4ee5\u4e0b\u7edf\u8ba1\u4fe1\u606f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5e73\u5747\u5e26\u5bbd"),(0,c.kt)("li",{parentName:"ul"},"\u5e73\u5747\u8bfb\u53d6\u5927\u5c0f"),(0,c.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u65f6\u95f4\u6700\u957f\u7684\u8d44\u6e90\u7c7b\u578b"),(0,c.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u6570"),(0,c.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u6570"),(0,c.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u7684\u603b\u5b57\u8282\u6570")),(0,c.kt)("p",null,"\uff08\u8bf7\u53c2\u9605 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics.html"},"AsyncReadManagerSummaryMetrics")," \u83b7\u53d6\u5b8c\u6574\u5217\u8868\u3002\uff09"),(0,c.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6c47\u603b\u7edf\u8ba1\u4fe1\u606f\u5305\u62ec\u6240\u6709\u8bfb\u53d6\u64cd\u4f5c\uff0c\u5176\u4e2d\u5305\u542b\u6392\u961f\u4e2d\u6216\u8fdb\u884c\u4e2d\u7684\u8bfb\u53d6\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fc7\u6ee4\u5668\u5c06\u6c47\u603b\u9650\u5236\u4e3a\u60a8\u7279\u522b\u611f\u5174\u8da3\u7684\u90a3\u4e9b\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fc7\u6ee4\u5668\u5c06\u6c47\u603b\u7edf\u8ba1\u6570\u636e\u9650\u5236\u4e3a\u5df2\u5b8c\u6210\u7684\u7eb9\u7406\u8d44\u6e90\u8bfb\u53d6\u64cd\u4f5c\u3002"),(0,c.kt)("p",null," ",(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"  \u8ba1\u7b97\u6c47\u603b\u7edf\u8ba1\u786e\u5b9e\u9700\u8981\u5904\u7406\u8d44\u6e90\u3002\u4e3a\u4e86\u9632\u6b62\u8fd9\u4e9b\u8ba1\u7b97\u6539\u53d8\u60a8\u6b63\u5728\u8bb0\u5f55\u7684\u6d4b\u91cf\u503c\uff0c\u60a8\u53ef\u4ee5\u5148\u6536\u96c6\u6307\u6807\uff0c\u7136\u540e\u5728\u60a8\u5206\u6790\u7684\u64cd\u4f5c\u5b8c\u6210\u540e\u624d\u83b7\u53d6\u6c47\u603b\u3002"),(0,c.kt)("h3",{id:"\u6c47\u603b\u8fc7\u6ee4\u5668"},"\u6c47\u603b\u8fc7\u6ee4\u5668"),(0,c.kt)("p",null,"\u901a\u8fc7\u4e0b\u5217\u65b9\u5f0f\u4e4b\u4e00\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html"},"AsyncReadManagerMetricsFilters")," \u53ef\u6307\u5b9a\u8981\u6c47\u603b\u7684\u6570\u636e\u7c7b\u578b\u3002\u4efb\u4f55\u4e0e\u8fc7\u6ee4\u5668\u4e0d\u5339\u914d\u7684\u6307\u6807\u90fd\u5c06\u4ece\u6c47\u603b\u4e2d\u6392\u9664\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7c7b\u522b\u8fdb\u884c\u8fc7\u6ee4\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7c7b\u578b\uff08\u6309 ",(0,c.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/text-scene-format/class-idreference"},"YAML ID"),"\uff09 ","*"," ",(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.ProcessingState.html"},"\u5904\u7406\u72b6\u6001"),"\uff08\u8bfb\u53d6\u64cd\u4f5c\u662f\u5426\u6392\u961f\u3001\u8bfb\u53d6\u3001\u5b8c\u6210\u7b49\uff09"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.FileReadType.html"},"\u8bfb\u53d6\u7c7b\u578b"),"\uff08\u5f02\u6b65\u6216\u540c\u6b65\uff09"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.Priority.html"},"\u4f18\u5148\u7ea7"),"\uff08\u9ad8\u6216\u4f4e\uff09"),(0,c.kt)("li",{parentName:"ul"},"\u5b50\u7cfb\u7edf (",(0,c.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html"},"AssetLoadingSubsystem"),")")),(0,c.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e3a\u540c\u4e00\u4e2a\u8fc7\u6ee4\u5668\u8bbe\u7f6e\u591a\u4e2a\u7c7b\u522b\u3002\u8bfb\u53d6\u64cd\u4f5c\u5fc5\u987b\u5339\u914d\u6240\u6709\u7c7b\u522b\u624d\u80fd\u4f7f\u5176\u6307\u6807\u5305\u542b\u5728\u6c47\u603b\u4e2d\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u8fc7\u6ee4\u5668\u6307\u5b9a ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.ProcessingState.html"},"ProcessingState")," \u548c ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html"},"Subsystem")," \u503c\uff0c\u4ec5\u6c47\u603b\u7531\u6307\u5b9a\u5b50\u7cfb\u7edf\u542f\u52a8\u3001\u5904\u4e8e\u6307\u5b9a\u5904\u7406\u72b6\u6001\u4e2d\u7684\u64cd\u4f5c\u3002"),(0,c.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u7c7b\u522b\u6307\u5b9a\u591a\u4e2a\u503c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bfb\u53d6\u64cd\u4f5c\u53ef\u4ee5\u5339\u914d\u4e3a\u8be5\u7c7b\u522b\u6307\u5b9a\u7684\u4efb\u4f55\u503c\uff0c\u4f7f\u5176\u6307\u6807\u5305\u542b\u5728\u6c47\u603b\u4e2d\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4e3a ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html"},"Subsystem")," \u7c7b\u522b\u6307\u5b9a ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.Mesh.html"},"Mesh")," \u548c ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.Texture.html"},"Texture"),"\uff0c\u6c47\u603b\u7f51\u683c\u548c\u7eb9\u7406\u8d44\u6e90\u7684\u64cd\u4f5c\u3002"))}d.isMDXComponent=!0}}]);