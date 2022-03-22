"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70514],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76940:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"deep-learning-super-sampling",title:"Deep learning super sampling",slug:"/cameras-overview/deep-learning-super-sampling"},p="Deep learning super sampling",s={unversionedId:"graphics/cameras-overview/deep-learning-super-sampling",id:"graphics/cameras-overview/deep-learning-super-sampling",title:"Deep learning super sampling",description:"NVIDIA Deep Learning Super Sampling (DLSS) is a rendering technology that uses artificial intelligence to increase graphics performance and quality. You can use it to:",source:"@site/docs/graphics/cameras-overview/deep-learning-super-sampling.md",sourceDirName:"graphics/cameras-overview",slug:"/cameras-overview/deep-learning-super-sampling",permalink:"/docs/cameras-overview/deep-learning-super-sampling",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/cameras-overview/deep-learning-super-sampling.md",tags:[],version:"current",frontMatter:{id:"deep-learning-super-sampling",title:"Deep learning super sampling",slug:"/cameras-overview/deep-learning-super-sampling"},sidebar:"tutorialSidebar",previous:{title:"CullingGroup API",permalink:"/docs/cameras-overview/culling-group-api"},next:{title:"\u52a8\u6001\u5206\u8fa8\u7387",permalink:"/docs/dynamic-resolution"}},u={},c=[{value:"Requirements and compatibility",id:"requirements-and-compatibility",level:2},{value:"Render pipeline compatibility",id:"render-pipeline-compatibility",level:3},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:3},{value:"Using DLSS",id:"using-dlss",level:2},{value:"Quality modes",id:"quality-modes",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deep-learning-super-sampling"},"Deep learning super sampling"),(0,i.kt)("p",null,"NVIDIA Deep Learning Super Sampling (DLSS) is a rendering technology that uses artificial intelligence to increase graphics performance and quality. You can use it to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run real-time ray traced worlds at high frame rates and resolutions."),(0,i.kt)("li",{parentName:"ul"},"Provide a performance and quality boost for rasterized graphics. This is particularly useful for virtual reality applications to help them run at higher frame rates. This helps to remove disorientation, nausea, and other negative effects that occur at lower frame rates.")),(0,i.kt)("p",null,"For more information about DLSS, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/dlss"},"NVIDIA documentation"),"."),(0,i.kt)("h2",{id:"requirements-and-compatibility"},"Requirements and compatibility"),(0,i.kt)("p",null,"This section includes information about the hardware requirements and render pipeline compatibility of DLSS."),(0,i.kt)("p",null,"For information about hardware and driver requirements, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/nvidia-dlss-access-program"},"NVIDIA documentation"),"."),(0,i.kt)("h3",{id:"render-pipeline-compatibility"},"Render pipeline compatibility"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u529f\u80fd")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Scriptable Render Pipeline (SRP)")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"DLSS")),(0,i.kt)("td",{parentName:"tr",align:null},"No (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"No (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"No (1)")))),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The low-level DLSS framework code is in core Unity, but HDRP is the only render pipeline that uses it to implement DLSS. For more information, see the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/NVIDIA.GraphicsDevice.CreateGraphicsDevice.html"},"API documentation"),".")),(0,i.kt)("h3",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,i.kt)("p",null,"Unity supports DLSS on the following platforms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DirectX 11 on Windows 64 bit"),(0,i.kt)("li",{parentName:"ul"},"DirectX 12 on Windows 64 bit"),(0,i.kt)("li",{parentName:"ul"},"Vulkan on Windows 64 bit.")),(0,i.kt)("p",null,"Unity does not support DLSS for  ",(0,i.kt)("strong",{parentName:"p"},"Metal")," ,  ",(0,i.kt)("strong",{parentName:"p"},"Linux")," ,  ",(0,i.kt)("strong",{parentName:"p"},"Windows"),"  using  ",(0,i.kt)("strong",{parentName:"p"},"x86"),"  architecture (Win32), or any other platform. To build your project for  ",(0,i.kt)("strong",{parentName:"p"},"Windows")," , use  ",(0,i.kt)("strong",{parentName:"p"},"x86","_","64"),"  architecture (Win64)."),(0,i.kt)("p",null,"For information about the hardware requirements of DLSS, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/nvidia-dlss-access-program"},"NVIDIA\u2019S DLSS requirements"),"."),(0,i.kt)("h2",{id:"using-dlss"},"Using DLSS"),(0,i.kt)("p",null,"For information on how to use DLSS in HDRP, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest?subfolder=/manual/deep-learning-super-sampling-in-hdrp.html"},"Deep learning super sampling in HDRP"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/dlss-off.png",alt:"dlss-off.png"})),(0,i.kt)("p",null,">"," The ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.unity3d.com/2019/08/19/now-available-the-spaceship-demo-project-using-vfx-graph-and-high-definition-render-pipeline/"},"Spaceship Demo Project")," rendered with a screen percentage of 50 without DLSS. The image is blurry, especially around the spark visual effect."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/dlss-on.png",alt:"dlss-on.png"})),(0,i.kt)("p",null,">"," The Spaceship Demo Project rendered with a screen percentage of 50, but using DLSS. This image is less blurry than the previous image, especially around the spark visual effect."),(0,i.kt)("h3",{id:"quality-modes"},"Quality modes"),(0,i.kt)("p",null,"The available quality modes are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto")," : Selects the best DLSS mode for the current output resolution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balance")," : Balances performance with image quality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quality")," : Emphasizes image quality over performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance")," : Emphasizes performance and image quality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ultra Performance")," : Produces the highest performance and the lowest image quality.")))}d.isMDXComponent=!0}}]);