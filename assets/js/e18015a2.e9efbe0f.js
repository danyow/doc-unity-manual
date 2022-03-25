"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47001],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=o.createContext({}),l=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),p=l(n),m=i,y=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?o.createElement(y,a(a({ref:e},s),{},{components:n})):o.createElement(y,a({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:i,a[1]=d;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12976:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],d={id:"UnityCloudBuildAdvancedOptions",title:"\u9ad8\u7ea7\u9009\u9879",slug:"/unity-cloud-build-advanced-options"},u="\u9ad8\u7ea7\u9009\u9879",l={unversionedId:"unity-services/unity-cloud-build/unity-cloud-build-advanced-options/UnityCloudBuildAdvancedOptions",id:"unity-services/unity-cloud-build/unity-cloud-build-advanced-options/UnityCloudBuildAdvancedOptions",title:"\u9ad8\u7ea7\u9009\u9879",description:"When you\u2019ve configured your project in Unity Cloud Build, you can set up advanced build options for each of your build targets.",source:"@site/docs/unity-services/unity-cloud-build/unity-cloud-build-advanced-options/unity-cloud-build-advanced-options.md",sourceDirName:"unity-services/unity-cloud-build/unity-cloud-build-advanced-options",slug:"/unity-cloud-build-advanced-options",permalink:"/doc-unity-manual/docs/unity-cloud-build-advanced-options",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-cloud-build/unity-cloud-build-advanced-options/unity-cloud-build-advanced-options.md",tags:[],version:"current",frontMatter:{id:"UnityCloudBuildAdvancedOptions",title:"\u9ad8\u7ea7\u9009\u9879",slug:"/unity-cloud-build-advanced-options"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Unity Cloud Build \u4e2d\u4f7f\u7528\u53ef\u5bfb\u5740\u8d44\u6e90",permalink:"/doc-unity-manual/docs/unity-cloud-build/unity-cloud-build-addressables"},next:{title:"\u81ea\u5b9a\u4e49\u811a\u672c",permalink:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-custom-scripting-define-directives"}},s={},c=[{value:"Advanced options per build target",id:"advanced-options-per-build-target",level:2},{value:"Using Xcode frameworks",id:"using-xcode-frameworks",level:2}],p={toc:c};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,r.kt)("p",null,"When you\u2019ve configured your project in Unity Cloud Build, you can set up advanced build options for each of your build targets."),(0,r.kt)("p",null,"These options accommodate the more complex build processing options supported in the Unity Editor."),(0,r.kt)("p",null,"To access your build target\u2019s advanced options, go to the ",(0,r.kt)("a",{parentName:"p",href:"http://developer.cloud.unity3d.com"},"Unity Developer website"),". Select your project, enter the  ",(0,r.kt)("strong",{parentName:"p"},"Unity Cloud Build"),"  section for the project, then select the  ",(0,r.kt)("strong",{parentName:"p"},"Config"),"  tab, shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UnityCloudBuildAdvancedOptions-Config.png",alt:"Config tab"})),(0,r.kt)("p",null,"Config tab"),(0,r.kt)("p",null,"Click  ",(0,r.kt)("strong",{parentName:"p"},"Advanced Options")," ."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UnityCloudBuildAdvancedOptions-AdvancedOptions.png",alt:"UnityCloudBuildAdvancedOptions-AdvancedOptions.png"})),(0,r.kt)("p",null,"When you click the  ",(0,r.kt)("strong",{parentName:"p"},"Advanced Options"),"  drop-down, the build target\u2019s advanced options are displayed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UnityCloudBuildAdvancedOptions-AdvancedOptionsExpanded.png",alt:"UnityCloudBuildAdvancedOptions-AdvancedOptionsExpanded.png"})),(0,r.kt)("p",null,"Click  ",(0,r.kt)("strong",{parentName:"p"},"Edit Advanced Options"),"  to bring up a screen to configure these options."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UnityCloudBuildAdvancedOptions-AdvancedOptionsEdit.png",alt:"Edit Advanced Options \u5c4f\u5e55"})),(0,r.kt)("p",null,"Edit Advanced Options \u5c4f\u5e55"),(0,r.kt)("h2",{id:"advanced-options-per-build-target"},"Advanced options per build target"),(0,r.kt)("p",null,"All advanced options are set per build target. This means that, for example, when you click the  ",(0,r.kt)("strong",{parentName:"p"},"Advanced Options"),"  link for an iOS target, those options are only for that iOS target. When you click  ",(0,r.kt)("strong",{parentName:"p"},"Advanced Options"),"  for an Android target, those options are only for that Android target. This lets you use different pre- and post-methods per platform, per build target."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UnityCloudBuildAdvancedOptions-PerTarget.png",alt:"UnityCloudBuildAdvancedOptions-PerTarget.png"})),(0,r.kt)("p",null,"The table below describes the Advanced Options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Development Builds")),(0,r.kt)("td",{parentName:"tr",align:null},"A development build includes debug symbols and enables the  ",(0,r.kt)("strong",{parentName:"td"},"Profiler")," . For more information, see ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-development-builds"},"Development builds"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Pre-Export Method")),(0,r.kt)("td",{parentName:"tr",align:null},"Manipulate Project files before the Project is built. Examples include copying variables from an external file into the Project, processing Assets, or working with  ",(0,r.kt)("strong",{parentName:"td"},"plug-ins"),"  that require special treatment. For more information, see ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-pre-and-post-export-methods"},"Pre- and post-export methods"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Pre-Build Script")),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud Build will run this script  ",(0,r.kt)("strong",{parentName:"td"},"before"),"  the Unity build process starts. You can use this script for custom pre/post processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Post-Build Script")),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud Build will run this script  ",(0,r.kt)("strong",{parentName:"td"},"after"),"  the Unity build process is completed. You can use this script for custom pre/post processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Custom Defines")),(0,r.kt)("td",{parentName:"tr",align:null},"Unity includes a feature called  ",(0,r.kt)("strong",{parentName:"td"},"Platform Dependent Compilation")," . This consists of preprocessor directives that let you partition your  ",(0,r.kt)("strong",{parentName:"td"},"scripts"),"  to compile and execute a section of code exclusively for one of the supported platforms. You can also specify your own #define directives for each build target. For more information, see ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-custom-scripting-define-directives"},"Custom scripting #define directives"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Scene List")),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to configure a build target to build a set of  ",(0,r.kt)("strong",{parentName:"td"},"Scenes"),"  that\u2019s different to what is set up in the project\u2019s  ",(0,r.kt)("strong",{parentName:"td"},"Build Settings"),"  menu in the Unity Editor. For more information, see ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-including-specific-scenes"},"Including specific Scenes"),".")))),(0,r.kt)("h2",{id:"using-xcode-frameworks"},"Using Xcode frameworks"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u53d1\u5e03\u5230 iOS\uff0c\u5219\u5728 Unity \u7f16\u8bd1\u8fc7\u7a0b\u5b8c\u6210\u540e\u4f46\u5728 Xcode \u7f16\u8bd1\u8fc7\u7a0b\u5f00\u59cb\u4e4b\u524d\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u7eb3\u5165\u5404\u79cd\u6846\u67b6\u3002"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks"},"Xcode frameworks")," for more information."))}m.isMDXComponent=!0}}]);