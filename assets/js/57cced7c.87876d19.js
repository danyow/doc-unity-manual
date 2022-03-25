"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62335],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),s=["components"],o={id:"graphics-tiers",title:"Graphics tiers",slug:"/built-in-render-pipeline/graphics-tiers"},l="Graphics tiers",p={unversionedId:"graphics/render-pipelines/built-in-render-pipeline/graphics-tiers",id:"graphics/render-pipelines/built-in-render-pipeline/graphics-tiers",title:"Graphics tiers",description:"In the Built-in Render Pipeline, you can use  graphics tiers  to apply different graphics settings when your application runs on hardware with different capabilities. You can use Unity\u2019s built-in  tier settings  to configure common settings, or you can define custom behaviors in your own shader code or C# code.",source:"@site/docs/graphics/render-pipelines/built-in-render-pipeline/graphics-tiers.md",sourceDirName:"graphics/render-pipelines/built-in-render-pipeline",slug:"/built-in-render-pipeline/graphics-tiers",permalink:"/doc-unity-manual/docs/built-in-render-pipeline/graphics-tiers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/render-pipelines/built-in-render-pipeline/graphics-tiers.md",tags:[],version:"current",frontMatter:{id:"graphics-tiers",title:"Graphics tiers",slug:"/built-in-render-pipeline/graphics-tiers"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 CommandBuffer \u6765\u6269\u5c55\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf",permalink:"/doc-unity-manual/docs/built-in-render-pipeline/graphics-command-buffers"},next:{title:"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u7684\u786c\u4ef6\u8981\u6c42",permalink:"/doc-unity-manual/docs/built-in-render-pipeline/render-tech-hardware-requirements"}},d={},c=[{value:"Graphics tiers overview",id:"graphics-tiers-overview",level:2},{value:"Using graphics tiers with C# scripts",id:"using-graphics-tiers-with-c-scripts",level:2},{value:"Tier settings",id:"tier-settings",level:2},{value:"\u56fe\u5f62\u5c42\u548c\u7740\u8272\u5668\u53d8\u4f53",id:"\u56fe\u5f62\u5c42\u548c\u7740\u8272\u5668\u53d8\u4f53",level:2}],u={toc:c};function h(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graphics-tiers"},"Graphics tiers"),(0,a.kt)("p",null,"In the Built-in Render Pipeline, you can use  ",(0,a.kt)("strong",{parentName:"p"},"graphics tiers"),"  to apply different graphics settings when your application runs on hardware with different capabilities. You can use Unity\u2019s built-in  ",(0,a.kt)("strong",{parentName:"p"},"tier settings"),"  to configure common settings, or you can define custom behaviors in your own shader code or C# code."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"  This feature is only supported in the Built-in Render Pipeline. In other render pipelines, Unity still examines the hardware on startup and stores its value in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.activeTier.html"},"Graphics.activeTier"),"; however, the value of this field has no effect, and Unity does not perform any other operations relating to graphics tiers."),(0,a.kt)("h2",{id:"graphics-tiers-overview"},"Graphics tiers overview"),(0,a.kt)("p",null,"When Unity first loads your application, it examines the hardware and graphics API and determines which graphics tier the current environment corresponds to."),(0,a.kt)("p",null,"The graphics tiers are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Value")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Hardware")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Corresponding ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsTier.html"},"GraphicsTier")," enum value")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Corresponding ",(0,a.kt)("a",{parentName:"strong",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords"},"shader keyword"))))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Android: devices that only support OpenGL ES 2",(0,a.kt)("br",null),"iOS: iPhones before iPhone 5S (not including 5S, but including 5C), iPods up to and including 5th generation, iPads up to 4th generation, iPad mini first generation",(0,a.kt)("br",null),"Desktop: DirectX 9",(0,a.kt)("br",null),"XR: HoloLens"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsTier.Tier1.html"},"Tier1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UNITY_HARDWARE_TIER1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Android: devices that support OpenGL ES 3, devices that support Vulkan",(0,a.kt)("br",null),"iOS: iPhones starting from iPhone 5S, iPad Air, iPad mini 2nd generation, iPod 6th generation, AppleTV",(0,a.kt)("br",null),"WebGL: all devices"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsTier.Tier2.html"},"Tier2")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UNITY_HARDWARE_TIER2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Desktop: OpenGL, Metal, Vulkan, DirectX 11+"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsTier.Tier3.html"},"Tier3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UNITY_HARDWARE_TIER3"))))),(0,a.kt)("h2",{id:"using-graphics-tiers-with-c-scripts"},"Using graphics tiers with C# scripts"),(0,a.kt)("p",null,"Unity stores the value of the current graphics tier in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.activeTier.html"},"Graphics.activeTier"),", represented by a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GraphicsTier.html"},"GraphicsTier")," enum. To add custom behavior based on the current graphics tier, you can test against this value."),(0,a.kt)("p",null,"To override the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"Graphics.activeTier"),", set it directly. Note that you must do this before Unity loads any shaders that vary based on graphics tier. A good place to set this value is in a pre-loading scene, before you load your main scene."),(0,a.kt)("h2",{id:"tier-settings"},"Tier settings"),(0,a.kt)("p",null,"In the Unity Editor, you can configure  ",(0,a.kt)("strong",{parentName:"p"},"tier settings")," . Tier settings allow you to enable or disable graphics features for each tier."),(0,a.kt)("p",null,"Tier settings work by changing ",(0,a.kt)("inlineCode",{parentName:"p"},"#define")," preprocessor directives in Unity\u2019s internal shader code. These changes automatically affect prebuilt shaders for the Built-in Render Pipeline (such as the ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"Standard Shader"),"), and the internal shader library code for ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders"},"Surface Shaders"),". You can also add code to your own hand-coded shaders that changes their behavior based on tier settings. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"#%E5%9B%BE%E5%BD%A2%E5%B1%82%E5%92%8C%E7%9D%80%E8%89%B2%E5%99%A8%E5%8F%98%E4%BD%93"},"Graphics tiers and shader variants"),"."),(0,a.kt)("p",null,"The default tier settings are suitable for most use cases. You should only change them if you are experiencing performance issues, or if you want to enable features on lower-end devices that are not enabled by default."),(0,a.kt)("p",null,"You can configure different tier settings for each graphics tier of a given build target. You can change tier settings in the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/comp-manager-group/class-graphics-settings"},"Graphics Settings")," window, in the  ",(0,a.kt)("strong",{parentName:"li"},"Tier Settings"),"  section."),(0,a.kt)("li",{parentName:"ul"},"Use these APIs in an Editor script:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.EditorGraphicsSettings.html"},"EditorGraphicsSettings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.TierSettings.html"},"TierSettings"))))),(0,a.kt)("p",null,"You can test tier settings in the Editor. To do this, navigate to  ",(0,a.kt)("strong",{parentName:"p"},"Edit ",">"," Graphics Tier"),"  and choose the tier that you want the Unity Editor to use."),(0,a.kt)("h2",{id:"\u56fe\u5f62\u5c42\u548c\u7740\u8272\u5668\u53d8\u4f53"},"\u56fe\u5f62\u5c42\u548c\u7740\u8272\u5668\u53d8\u4f53"),(0,a.kt)("p",null,"In the Built-in Render Pipeline, Unity can generate ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-variants"},"shader variants")," that correspond to graphics tiers."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"  These tier shader variants work differently to regular shader variants. At runtime, when Unity loads a Shader object into CPU memory, it only loads the variants for the active tier; it does not load the variants for other tiers. This helps to reduce the runtime impact of tier variants."),(0,a.kt)("p",null,"To generate tier shader variants, Unity adds this set of ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords"},"shader keywords")," to all graphics shaders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"UNITY_HARDWARE_TIER1\nUNITY_HARDWARE_TIER2\nUNITY_HARDWARE_TIER3\n")),(0,a.kt)("p",null,"You can use these keywords in your HLSL code to write conditional behavior for lower or higher-end hardware, the same way that you would for any shader keywords. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#if UNITY_HARDWARE_TIER1\n// Put code for tier 1 devices here\n#else\n// Put code for other devices here\n#endif\n")),(0,a.kt)("p",null,"For more information on working with shader keywords in HLSL code, see ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-multiple-program-variants"},"Declaring and using shader keywords in HLSL"),"."),(0,a.kt)("p",null,"Unity automatically generates tier shader variants based on the tier settings for the current build target, like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If all settings for all tiers are identical, Unity does not generate any tier shader variants."),(0,a.kt)("li",{parentName:"ul"},"If any of the settings for different tiers differ in any way, Unity generates all tier shader variants.")),(0,a.kt)("p",null,"After generating all tier shader variants, Unity identifies and ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-variants#deduplication-of-shader-variants"},"deduplicates")," identical tier shader variants. This means that if the settings for two tiers are identical (for example, if tier 1 is different but tier 2 and tier 3 are identical to one another), then these variants do not add to the file size of your application, and the way that Unity loads tier variants means that they do not affect loading times or runtime memory usage. However, this still results in redundant compilation work."),(0,a.kt)("p",null,"If you want to use different settings for different tiers, but you also know that this will result in redundant work - for example, if you know that your application will only ever run on tier 1 and tier 2 devices - you can use a script to strip unneeded tier variants from compilation, the same as for any other variants. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-variant-stripping"},"Shader variant stripping"),"."),(0,a.kt)("p",null,"In addition to the automatic behavior, you can also force Unity to generate tier shader variants on a per-shader basis. This is useful if you use these constants in your HLSL code and you want to be certain that Unity will compile the required variants, regardless of whether the tier settings for the current build differ from each other"),(0,a.kt)("p",null,"To manually force Unity to generate tier shader variants for a given shader, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma hardware_tier_variants")," preprocessor directive in your HLSL code, and specify the graphics APIs for which you want to generate per-tier variants:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# pragma hardware_tier_variants gles3\n")),(0,a.kt)("p",null,"For a list of valid graphics API names that you can use with this directive, see ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-shader-compilation-apis"},"Targeting graphics APIs"),". For general information on ",(0,a.kt)("inlineCode",{parentName:"p"},"#pragma")," directives, see ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-pragma-directives"},"pragma directives"),"."))}h.isMDXComponent=!0}}]);