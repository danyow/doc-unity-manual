"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79128],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77357:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"webgl-performance",title:"WebGL performance considerations",slug:"/webgl-develop/webgl-performance"},c="WebGL performance considerations",s={unversionedId:"platform-specific/webgl/webgl-develop/webgl-performance",id:"platform-specific/webgl/webgl-develop/webgl-performance",title:"WebGL performance considerations",description:"In general, the WebGL performance is close to native apps on the GPU, because the WebGL graphics API uses your GPU for hardware-accelerated rendering. The only exception is the slight overhead for translating WebGL API calls and shaders to your OS graphics API (typically DirectX on Windows, OpenGL on Mac, and Linux).",source:"@site/docs/platform-specific/webgl/webgl-develop/webgl-performance.md",sourceDirName:"platform-specific/webgl/webgl-develop",slug:"/webgl-develop/webgl-performance",permalink:"/doc-unity-manual/docs/webgl-develop/webgl-performance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/webgl/webgl-develop/webgl-performance.md",tags:[],version:"current",frontMatter:{id:"webgl-performance",title:"WebGL performance considerations",slug:"/webgl-develop/webgl-performance"},sidebar:"tutorialSidebar",previous:{title:"WebGL \u7f51\u7edc",permalink:"/doc-unity-manual/docs/webgl-develop/webgl-networking"},next:{title:"Getting started with WebGL development",permalink:"/doc-unity-manual/docs/webgl-gettingstarted"}},p={},u=[{value:"WebGL-specific settings which affect performance",id:"webgl-specific-settings-which-affect-performance",level:2},{value:"Profiling WebGL",id:"profiling-webgl",level:2},{value:"WebGL content in background tabs",id:"webgl-content-in-background-tabs",level:2},{value:"\u9650\u5236 WebGL \u6027\u80fd",id:"\u9650\u5236-webgl-\u6027\u80fd",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webgl-performance-considerations"},"WebGL performance considerations"),(0,a.kt)("p",null,"In general, the WebGL performance is close to native apps on the GPU, because the WebGL graphics API uses your GPU for hardware-accelerated rendering. The only exception is the slight overhead for translating WebGL API calls and shaders to your OS graphics API (typically DirectX on Windows, OpenGL on Mac, and Linux)."),(0,a.kt)("p",null,"On the CPU, Emscripten translates your code into WebAssembly, the performance of which depends on the web browser you\u2019re using. For more information, see the Unity blog post ",(0,a.kt)("a",{parentName:"p",href:"https://blogs.unity3d.com/2018/09/17/webassembly-load-times-and-performance/"},"WebAssembly Load Times and Performance"),"."),(0,a.kt)("p",null,"Following are the additional considerations that you must be aware of: ","*"," The JavaScript language does not support multi-threading or SIMD. ","*"," Any code that benefits from these features are likely to be slower than other code. ","*"," You cannot write threading or SIMD code in WebGL in your scripts, but as some engine parts are multi-threaded or SIMD optimized, they offer low performance on WebGL. For example, WebGL Skinning is both multi-threaded and SIMD-optimized."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Tip:"),"  To see how Unity distributes work to different threads on non-WebGL platforms, see the new timeline ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler"},"Profiler")," in Unity."),(0,a.kt)("h2",{id:"webgl-specific-settings-which-affect-performance"},"WebGL-specific settings which affect performance"),(0,a.kt)("p",null,"For best performance, set the optimization level to  ",(0,a.kt)("strong",{parentName:"p"},"Faster"),"  in the Build Player window, and set  ",(0,a.kt)("strong",{parentName:"p"},"Exception support"),"  to  ",(0,a.kt)("strong",{parentName:"p"},"None"),"  in the  ",(0,a.kt)("strong",{parentName:"p"},"Player"),"  settings for WebGL by expanding  ",(0,a.kt)("strong",{parentName:"p"},"Other Settings ",">"," Stack Trace")," ."),(0,a.kt)("h2",{id:"profiling-webgl"},"Profiling WebGL"),(0,a.kt)("p",null,"WebGL supports the Unity profiler. See the ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler"},"Profiler")," documentation to learn how to set it up."),(0,a.kt)("h2",{id:"webgl-content-in-background-tabs"},"WebGL content in background tabs"),(0,a.kt)("p",null,"\u5982\u679c\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/webgl-gettingstarted/class-player-settings-web-gl"},"WebGL \u5e73\u53f0\u7684 Player \u8bbe\u7f6e"),"\u4e2d\u542f\u7528\u4e86  ",(0,a.kt)("strong",{parentName:"p"},"Run in background")," \uff0c\u6216\u8005\u5982\u679c\u542f\u7528\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-runInBackground.html"},"Application.runInBackground"),"\uff0c\u60a8\u7684\u5185\u5bb9\u5c06\u5728\u753b\u5e03\u6216\u6d4f\u89c8\u5668\u7a97\u53e3\u5931\u53bb\u7126\u70b9\u65f6\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u67d0\u4e9b\u6d4f\u89c8\u5668\u53ef\u80fd\u4f1a\u9650\u5236\u5728\u540e\u53f0\u6807\u7b7e\u9875\u4e2d\u8fd0\u884c\u7684\u5185\u5bb9\u3002\u5982\u679c\u5305\u542b\u8be5\u5185\u5bb9\u7684\u6807\u7b7e\u9875\u4e0d\u53ef\u89c1\uff0c\u5728\u5927\u591a\u6570\u6d4f\u89c8\u5668\u4e2d\uff0c\u60a8\u7684\u5185\u5bb9\u6bcf\u79d2\u624d\u4f1a\u66f4\u65b0\u4e00\u6b21\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u5c06\u5bfc\u81f4 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Time-time.html"},"Time.time")," \u6bd4\u5e73\u5e38\u91c7\u7528\u9ed8\u8ba4\u8bbe\u7f6e\u65f6\u66f4\u6162\uff0c\u56e0\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Time-maximumDeltaTime.html"},"Time.maximumDeltaTime")," \u7684\u9ed8\u8ba4\u503c\u5c0f\u4e8e\u4e00\u79d2\u3002"),(0,a.kt)("h2",{id:"\u9650\u5236-webgl-\u6027\u80fd"},"\u9650\u5236 WebGL \u6027\u80fd"),(0,a.kt)("p",null,"You might want to run your WebGL content at a lower frame rate in some situations to reduce CPU usage. For example, on other platforms, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-targetFrameRate.html"},"Application.targetFrameRate")," API to do so."),(0,a.kt)("p",null,"When you don\u2019t want to throttle performance, set this API to the default value of \u20131, rather than to a high value. This allows the browser to adjust the frame rate for the smoothest animation in the browser\u2019s render loop, and might produce better results than Unity trying to do its own main loop timing to match a target frame rate."),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2019\u201306\u201310 \u9875\u9762\u5df2\u4fee\u8ba2")))}d.isMDXComponent=!0}}]);