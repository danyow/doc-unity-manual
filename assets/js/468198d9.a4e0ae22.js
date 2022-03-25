"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22378],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93450:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"performance-profiling-tools",title:"Profiling tools",slug:"/performance-profiling-tools"},p="Profiling tools",s={unversionedId:"unity-overview/analysis/performance-profiling-tools/performance-profiling-tools",id:"unity-overview/analysis/performance-profiling-tools/performance-profiling-tools",title:"Profiling tools",description:"Profiling your application is the best way to measure its performance. You can use a variety of profiling tools to understand where there might be any issues with elements of your application including memory usage, CPU performance, GPU performance, and your custom scripts.",source:"@site/docs/unity-overview/analysis/performance-profiling-tools/performance-profiling-tools.md",sourceDirName:"unity-overview/analysis/performance-profiling-tools",slug:"/performance-profiling-tools",permalink:"/doc-unity-manual/docs/performance-profiling-tools",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/performance-profiling-tools/performance-profiling-tools.md",tags:[],version:"current",frontMatter:{id:"performance-profiling-tools",title:"Profiling tools",slug:"/performance-profiling-tools"},sidebar:"tutorialSidebar",previous:{title:"Managed memory",permalink:"/doc-unity-manual/docs/performance-memory-overview/performance-managed-memory"},next:{title:"Analyzing profiler traces",permalink:"/doc-unity-manual/docs/performance-profiling-tools/performance-profiler-traces"}},c={},m=[{value:"Unity\u2019s profiling tools",id:"unitys-profiling-tools",level:2},{value:"Third party profiling tools",id:"third-party-profiling-tools",level:3}],u={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"profiling-tools"},"Profiling tools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Profiling_(computer_programming)"},"Profiling")," your application is the best way to measure its performance. You can use a variety of profiling tools to understand where there might be any issues with elements of your application including memory usage, CPU performance, GPU performance, and your custom scripts."),(0,a.kt)("h2",{id:"unitys-profiling-tools"},"Unity\u2019s profiling tools"),(0,a.kt)("p",null,"Unity has several profiling tools that you can use to measure the performance of your application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/profiler"},"Unity Profiler"),": Measure the performance of the Unity Editor, your application in Play mode, or connect to a device running your application in development mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@latest"},"Profiling Core package"),": Provides APIs that you can use to add contextual information to Unity Profiler captures"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest"},"Memory Profiler"),": A tool that provides in-depth memory performance analysis"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.performance.profile-analyzer@latest"},"Profile Analyzer"),": Compare two profiling datasets together to analyze how your changes affect your application\u2019s performance.")),(0,a.kt)("h3",{id:"third-party-profiling-tools"},"Third party profiling tools"),(0,a.kt)("p",null,"Alongside the Unity Profiler, you should use platform-specific profilers to ensure that your application runs as expected. The following list provides some examples of available profiling tools. You can also use Unity\u2019s ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler/low-level-native-plugin-profiler"},"low level native plug-in Profiler API")," to export profiling data to third-party profiling tools."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Android:")," "),(0,a.kt)("li",{parentName:"ul"},"General Android GPU profiling: Google\u2019s ",(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/agi"},"Android GPU Inspector"),", if you have a device that supports it."),(0,a.kt)("li",{parentName:"ul"},"Arm CPU: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.arm.com/tools-and-software/embedded/arm-development-studio/components/streamline-performance-analyzer"},"Streamline")," from Arm Mobile Studio."),(0,a.kt)("li",{parentName:"ul"},"Arm Mali GPU: Use the tools from ",(0,a.kt)("a",{parentName:"li",href:"https://developer.arm.com/solutions/hpc/hpc-software/categories/profiling-tools"},"Arm Mobile Studio")," for GPU and system profiling."),(0,a.kt)("li",{parentName:"ul"},"Imagination PowerVR GPU: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.imaginationtech.com/pvrtune/"},"PVRTune")," for GPU profiling."),(0,a.kt)("li",{parentName:"ul"},"Qualcomm chips: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.qualcomm.com/software/snapdragon-profiler"},"Snapdragon Profiler")," for GPU and system profiling. For GPU profiling on older Qualcomm GPUs, use the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.qualcomm.com/software/adreno-gpu-profiler"},"Adreno Profiler"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"macOS and iOS")," :"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PC:")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.amd.com/amd-uprof/"},"AMD uProf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.intel.com/content/www/us/en/developer/tools/graphics-performance-analyzers/overview.html"},"Intel GPA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/nsight-graphics"},"NVIDIA Nsight Graphics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/pix/download/"},"PIX on Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://superluminal.eu/"},"Superluminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html"},"VTune")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-hardware/test/wpt/"},"Windows Performance Analysis Toolkit"))),(0,a.kt)("p",null,"These tools have the most utility on platforms that can use ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/il2cpp"},"IL2CPP")," to produce a C++ version of the project. These native-code versions provide transparent call stacks and high-resolution method timings that are unavailable when running under Mono."))}f.isMDXComponent=!0}}]);