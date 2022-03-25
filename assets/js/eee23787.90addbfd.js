"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91370],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=m(n),c=a,g=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88506:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"xr-template-ar",title:"Unity AR project template",slug:"/xr/xr-template-ar"},p="Unity AR project template",m={unversionedId:"xr/xr-template-ar",id:"xr/xr-template-ar",title:"Unity AR project template",description:"Unity\u2019s AR project template provides a starting point for augmented reality development in Unity. The template pre-installs the right packages needed for AR development, and the Scene hierarchy is pre-configured for AR.",source:"@site/docs/xr/xr-template-ar.md",sourceDirName:"xr",slug:"/xr/xr-template-ar",permalink:"/doc-unity-manual/docs/xr/xr-template-ar",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xr/xr-template-ar.md",tags:[],version:"current",frontMatter:{id:"xr-template-ar",title:"Unity AR project template",slug:"/xr/xr-template-ar"},sidebar:"tutorialSidebar",previous:{title:"UnitySubsystemsManifest.json",permalink:"/doc-unity-manual/docs/\u63d0\u4f9b\u7a0b\u5e8f\u8bbe\u7f6e/xrsdk-unity-subsystems-manifest-json"},next:{title:"Unity VR project template",permalink:"/doc-unity-manual/docs/xr/xr-template-vr"}},u={},s=[{value:"Using the AR project template",id:"using-the-ar-project-template",level:2},{value:"Supported build targets",id:"supported-build-targets",level:3},{value:"Rendering and quality settings",id:"rendering-and-quality-settings",level:3},{value:"Removing the example Assets",id:"removing-the-example-assets",level:2}],d={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"unity-ar-project-template"},"Unity AR project template"),(0,l.kt)("p",null,"Unity\u2019s AR project template provides a starting point for augmented reality development in Unity. The template pre-installs the right packages needed for AR development, and the Scene hierarchy is pre-configured for AR."),(0,l.kt)("p",null,"Unity directly supports the following AR platforms:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/ar/develop/unity"},"ARCore")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/augmented-reality/"},"ARKit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/mrtk-porting-guide"},"HoloLens")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.magicleap.com/en-us/learn/guides/get-started-developing-in-unity"},"Magic Leap"))),(0,l.kt)("p",null,"For more information on how to start developing apps for these platforms in Unity, refer to their documentation in the list above."),(0,l.kt)("p",null,"This project template uses AR Foundation, Unity\u2019s framework for multiplatform AR development. For more information on how to get started with AR Foundation and add AR features to your Project, refer to the:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@2.1/manual/index.html"},"AR Foundation documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Unity-Technologies/arfoundation-samples"},"AR Foundation samples")," GitHub repository")),(0,l.kt)("h2",{id:"using-the-ar-project-template"},"Using the AR project template"),(0,l.kt)("p",null,"To use the AR project template, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://unity.com/releases/2019-lts"},"Unity 2019 LTS")," and make sure you add the right build targets for each platform you plan to deploy to. See the  ",(0,l.kt)("strong",{parentName:"li"},"Supported build targets"),"  table on this page for more information."),(0,l.kt)("li",{parentName:"ol"},"From the Unity Hub, click the dropdown next to  ",(0,l.kt)("strong",{parentName:"li"},"New"),"  and create a new project in Unity 2019.4 LTS."),(0,l.kt)("li",{parentName:"ol"},"Select the AR template and name your Project."),(0,l.kt)("li",{parentName:"ol"},"Click  ",(0,l.kt)("strong",{parentName:"li"},"Create")," ."),(0,l.kt)("li",{parentName:"ol"},"After your Project has been created, from Unity\u2019s main menu, go to  ",(0,l.kt)("strong",{parentName:"li"},"Edit ",">"," Project Settings ",">"," XR Plug-in Management")," , and select the platforms you plan to deploy to."),(0,l.kt)("li",{parentName:"ol"},"Make sure rendering and quality settings are optimized for your target platform. See the  ",(0,l.kt)("strong",{parentName:"li"},"Rendering and quality settings"),"  table on this page."),(0,l.kt)("li",{parentName:"ol"},"For information on how to add AR features to your Project, see the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@2.1/manual/index.html"},"AR Foundation package documentation"),".")),(0,l.kt)("h3",{id:"supported-build-targets"},"Supported build targets"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8bbe\u5907")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Player type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63d2\u4ef6\u63d0\u4f9b\u5546")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARCore \u8bbe\u5907"),(0,l.kt)("td",{parentName:"tr",align:null},"Android"),(0,l.kt)("td",{parentName:"tr",align:null},"ARCore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARKit \u8bbe\u5907"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS"),(0,l.kt)("td",{parentName:"tr",align:null},"ARKit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HoloLens"),(0,l.kt)("td",{parentName:"tr",align:null},"UWP"),(0,l.kt)("td",{parentName:"tr",align:null},"Windows Mixed Reality")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Magic Leap One"),(0,l.kt)("td",{parentName:"tr",align:null},"Lumin"),(0,l.kt)("td",{parentName:"tr",align:null},"Magic Leap")))),(0,l.kt)("h3",{id:"rendering-and-quality-settings"},"Rendering and quality settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5e73\u53f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u56fe\u5f62 API")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7acb\u4f53\u6e32\u67d3\u6a21\u5f0f")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARCore \u8bbe\u5907"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL ES 3.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARKit \u8bbe\u5907"),(0,l.kt)("td",{parentName:"tr",align:null},"Metal"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HoloLens"),(0,l.kt)("td",{parentName:"tr",align:null},"DX11"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u901a\u9053\u5b9e\u4f8b\u5316")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Magic Leap One"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenGL ES 3.2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u901a\u9053\u5b9e\u4f8b\u5316")))),(0,l.kt)("h2",{id:"removing-the-example-assets"},"Removing the example Assets"),(0,l.kt)("p",null,"If you want to completely remove the example Assets from your Project, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Project window, open the ",(0,l.kt)("inlineCode",{parentName:"li"},"Assets")," folder."),(0,l.kt)("li",{parentName:"ol"},"Right-click the ",(0,l.kt)("inlineCode",{parentName:"li"},"ExampleAssets")," folder."),(0,l.kt)("li",{parentName:"ol"},"Click  ",(0,l.kt)("strong",{parentName:"li"},"Delete")," ."),(0,l.kt)("li",{parentName:"ol"},"In the pop-up that appears, click  ",(0,l.kt)("strong",{parentName:"li"},"Delete")," ."),(0,l.kt)("li",{parentName:"ol"},"Make sure to remove the disconnected script from the ",(0,l.kt)("inlineCode",{parentName:"li"},"ARSessionOrigin")," GameObject.")))}c.isMDXComponent=!0}}]);