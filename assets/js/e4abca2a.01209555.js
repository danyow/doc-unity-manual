"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31778],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19579:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"OptimizingGraphicsPerformance",title:"Graphics performance fundamentals",slug:"/graphics-performance-profiling/optimizing-graphics-performance"},c="Graphics performance fundamentals",l={unversionedId:"graphics/graphics-performance-profiling/OptimizingGraphicsPerformance",id:"graphics/graphics-performance-profiling/OptimizingGraphicsPerformance",title:"Graphics performance fundamentals",description:"This page contains some simple guidelines for optimzing rendering performance in your application.",source:"@site/docs/graphics/graphics-performance-profiling/optimizing-graphics-performance.md",sourceDirName:"graphics/graphics-performance-profiling",slug:"/graphics-performance-profiling/optimizing-graphics-performance",permalink:"/docs/graphics-performance-profiling/optimizing-graphics-performance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/graphics-performance-profiling/optimizing-graphics-performance.md",tags:[],version:"current",frontMatter:{id:"OptimizingGraphicsPerformance",title:"Graphics performance fundamentals",slug:"/graphics-performance-profiling/optimizing-graphics-performance"},sidebar:"tutorialSidebar",previous:{title:"Scriptable Render Pipeline Batcher",permalink:"/docs/optimizing-draw-calls/srpbatcher"},next:{title:"The Rendering Statistics window",permalink:"/docs/graphics-performance-profiling/rendering-statistics"}},p={},m=[{value:"Before you begin: locate and understand the problem",id:"before-you-begin-locate-and-understand-the-problem",level:2},{value:"Reducing the CPU cost of rendering",id:"reducing-the-cpu-cost-of-rendering",level:2},{value:"Reducing the GPU cost of rendering",id:"reducing-the-gpu-cost-of-rendering",level:2},{value:"Reducing the frequency of rendering",id:"reducing-the-frequency-of-rendering",level:2}],u={toc:m};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphics-performance-fundamentals"},"Graphics performance fundamentals"),(0,i.kt)("p",null,"This page contains some simple guidelines for optimzing rendering performance in your application."),(0,i.kt)("h2",{id:"before-you-begin-locate-and-understand-the-problem"},"Before you begin: locate and understand the problem"),(0,i.kt)("p",null,"Before you make any changes, you must profile your application to identify the cause of the problem. If you attempt to solve a performance problem before you understand its cause, you might waste your time or make the problem worse. Additionally, rendering-related performance problems can occur on the CPU or the GPU. Strategies for fixing these problems are quite different, so it\u2019s important to understand where your problem is before taking any action."),(0,i.kt)("p",null,"The following article on the Unity Learn site is a comprehensive introduction to graphics performance, and contains information on identifying and fixing problems: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/fixing-performance-problems#5c7f8528edbc2a002053b596"},"Fixing performance problems: Optimizing graphics rendering in Unity games"),". If you are not yet familiar with this subject, read the article before following any of the advice on this page."),(0,i.kt)("h2",{id:"reducing-the-cpu-cost-of-rendering"},"Reducing the CPU cost of rendering"),(0,i.kt)("p",null,"Usually, the greatest contributor to CPU rendering time is the cost of sending rendering commands to the GPU. Rendering commands include draw calls (commands to draw geometry), and commands to change the settings on the GPU before drawing the geometry. If this is the case, consider these options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can reduce the number of objects that Unity renders.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Consider reducing the overall number of objects in the scene: for example, use a ",(0,i.kt)("a",{parentName:"li",href:"/docs/skyboxes"},"skybox")," to create the effect of distant geometry."),(0,i.kt)("li",{parentName:"ul"},"Perform more rigorous culling, so that Unity draws fewer objects. Consider using ",(0,i.kt)("a",{parentName:"li",href:"/docs/occlusion-culling"},"occlusion culling")," to prevent Unity from drawing objects that are hidden behind other objects, reducing the far clip plane of a ",(0,i.kt)("a",{parentName:"li",href:"/docs/cameras-overview/class-camera"},"Camera")," so that more distant objects fall outside its frustum, or, for a more fine-grained approach, putting objects into ",(0,i.kt)("a",{parentName:"li",href:"/docs/layers"},"separate layers")," and setting up per-layer cull distances with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Camera-layerCullDistances.html"},"Camera.layerCullDistances"),"."))),(0,i.kt)("li",{parentName:"ul"},"You can reduce the number of times that Unity renders each object.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"/docs/lightmappers"},"lightmapping")," to \u201cbake\u201d (pre-compute) lighting and shadows where appropriate. This increases build time, runtime memory usage and storage space, but can improve runtime performance."),(0,i.kt)("li",{parentName:"ul"},"If your application uses Forward rendering, reduce the number of per-pixel real-time lights that affect objects. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/rendering-paths/render-tech-forward-rendering"},"Forward rendering path"),"."),(0,i.kt)("li",{parentName:"ul"},"Real-time shadows can be very resource-intensive, so use them sparingly and efficiently. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/shadows/shadow-performance"},"Shadow troubleshooting: Shadow performance"),"."),(0,i.kt)("li",{parentName:"ul"},"If your application uses Reflection Probes, ensure that you optimize their usage. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/reflection-probes/ref-probe-performance"},"Reflection Probe performance")))),(0,i.kt)("li",{parentName:"ul"},"You can reduce the amount of work that Unity must do to prepare and send rendering commands, usually by sending them to the GPU in more efficient \u201cbatches\u201d. There are a few different ways to achieve this: for more information, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/optimizing-draw-calls"},"Optimizing draw calls"),".")),(0,i.kt)("p",null,"Many of these approaches will also reduce the work required on the GPU; for example, reducing the overall number of objects that Unity renders in a frame will result in a reduced workload for both the CPU and the GPU."),(0,i.kt)("h2",{id:"reducing-the-gpu-cost-of-rendering"},"Reducing the GPU cost of rendering"),(0,i.kt)("p",null,"There are three main reasons why the GPU might fail to complete its work in time to render a frame."),(0,i.kt)("p",null,"If an application is limited by fill rate, the GPU is trying to draw more pixels per frame than it can handle. If this is the case, consider these options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identify and reduce overdraw in your application. The most common contributors to overdraw are overlapping transparent elements, such as UI, particles and sprites. In the Unity Editor, use the ",(0,i.kt)("a",{parentName:"li",href:"/docs/using-the-scene-view/view-modes"},"Overdraw Draw mode")," to identify areas where this is a problem."),(0,i.kt)("li",{parentName:"ul"},"Reduce the execution cost of fragment shaders. For information about shader performance, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/shader-performance-debugging/sl-shader-performance"},"Shader Performance")," page."),(0,i.kt)("li",{parentName:"ul"},"If you\u2019re using Unity\u2019s built-in shaders, pick ones from the  ",(0,i.kt)("strong",{parentName:"li"},"Mobile"),"  or  ",(0,i.kt)("strong",{parentName:"li"},"Unlit"),"  categories. They work on non-mobile platforms as well, but are simplified and approximated versions of the more complex shaders."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/dynamic-resolution"},"Dynamic Resolution")," is a Unity feature that allows you to dynamically scale individual render targets.")),(0,i.kt)("p",null,"If an application is limited by memory bandwidth, the GPU is trying to read and write more data to its dedicated memory than it can handle in a frame. This usually means that that there are too many or textures, or that textures are too large. If this is the case, consider these options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/docs/class-texture-importer"},"mipmaps")," for textures whose distance from the camera varies at runtime (for example, most textures used in a 3D scene). This increases memory usage and storage space for these textures, but can improve runtime GPU performance."),(0,i.kt)("li",{parentName:"ul"},"Use suitable ",(0,i.kt)("a",{parentName:"li",href:"/docs/class-texture-importer"},"compression formats")," to decrease the size of your textures in memory. This can result in faster load times, a smaller memory footprint, and improved GPU rendering performance. Compressed textures only use a fraction of the memory bandwidth needed for uncompressed textures.")),(0,i.kt)("p",null,"If an appliction is limited by vertex processing, this means that the GPU is trying to process more vertices than it can handle in a frame. If this is the case, consider these options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduce the execution cost of vertex shaders. For information about shader performance, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/shader-performance-debugging/sl-shader-performance"},"Shader Performance")," page."),(0,i.kt)("li",{parentName:"ul"},"Optimize your geometry: don\u2019t use any more triangles than necessary, and try to keep the number of UV mapping seams and hard edges (doubled-up vertices) as low as possible. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/creating-dccassets/modeling-optimized-characters"},"Creating models for optimal performance"),"."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"/docs/level-of-detail"},"Level Of Detail")," system.")),(0,i.kt)("h2",{id:"reducing-the-frequency-of-rendering"},"Reducing the frequency of rendering"),(0,i.kt)("p",null,"Sometimes, it might benefit your application to reduce the rendering frame rate. This doesn\u2019t reduce the CPU or GPU cost of rendering a single frame, but it reduces the frequency with which Unity does so without affecting the frequency of other operations (such as script execution)."),(0,i.kt)("p",null,"You can reduce the rendering frame rate for parts of your application, or for the whole application. Reducing the rendering frame rate to prevents unnecessary power usage, prolongs battery life, and prevent device temperature from rising to a point where the CPU frequency may be throttled. This is particularly useful on handheld devices."),(0,i.kt)("p",null,"If profiling reveals that rendering consumes a significant proportion of the resources for your application, consider which parts of your application might benefit from this. Common use cases include menus or pause screens, turn based games where the game is awaiting input, and applications where the content is mostly static, such as automotive UI."),(0,i.kt)("p",null,"To prevent input lag, you can temporarily increasse the rendering frame rate for the duration of the input so that it still feels responsive."),(0,i.kt)("p",null,"To adjust the rendering frame rate, use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.OnDemandRendering.html"},"OnDemandRendering")," API. The API works particularly well with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.mobile.adaptiveperformance@latest"},"Adaptive Performance package"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a"),"VR \u5e94\u7528\u7a0b\u5e8f\u4e0d\u652f\u6301\u6309\u9700\u6e32\u67d3 (On Demand Rendering)\u3002\u5982\u679c\u4e0d\u6e32\u67d3\u6bcf\u4e00\u5e27\uff0c\u5219\u4f1a\u5bfc\u81f4\u89c6\u89c9\u6548\u679c\u4e0e\u5934\u90e8\u79fb\u52a8\u4e0d\u540c\u6b65\uff0c\u5e76\u53ef\u80fd\u589e\u52a0\u6655\u52a8\u75c7\u7684\u98ce\u9669\u3002"))}d.isMDXComponent=!0}}]);