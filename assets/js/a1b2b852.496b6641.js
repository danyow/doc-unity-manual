"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11381],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),a=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=a(r),f=o,y=p["".concat(d,".").concat(f)]||p[f]||s[f]||u;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var a=2;a<u;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93339:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s}});var n=r(87462),o=r(63366),u=(r(67294),r(3905)),i=["components"],c={id:"UnityCloudBuildXcodeFrameworks",title:"Xcode framework",slug:"/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks"},d="Xcode framework",a={unversionedId:"unity-services/unity-cloud-build/unity-cloud-build-advanced-options/UnityCloudBuildXcodeFrameworks",id:"unity-services/unity-cloud-build/unity-cloud-build-advanced-options/UnityCloudBuildXcodeFrameworks",title:"Xcode framework",description:"If your  iOS  Project requires additional Xcode frameworks, use the PBXProject API to add those frameworks to the Xcode Project files created by Cloud Build.",source:"@site/docs/unity-services/unity-cloud-build/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks.md",sourceDirName:"unity-services/unity-cloud-build/unity-cloud-build-advanced-options",slug:"/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks",permalink:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-cloud-build/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks.md",tags:[],version:"current",frontMatter:{id:"UnityCloudBuildXcodeFrameworks",title:"Xcode framework",slug:"/unity-cloud-build-advanced-options/unity-cloud-build-xcode-frameworks"},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u51fa\u524d\u548c\u5bfc\u51fa\u540e\u65b9\u6cd5",permalink:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-pre-and-post-export-methods"},next:{title:"\u7f16\u8bd1\u6e05\u5355",permalink:"/doc-unity-manual/docs/unity-cloud-build-manifest"}},l={},s=[],p={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"xcode-framework"},"Xcode framework"),(0,u.kt)("p",null,"If your  ",(0,u.kt)("strong",{parentName:"p"},"iOS"),"  Project requires additional Xcode frameworks, use the ",(0,u.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/iOS.Xcode.PBXProject.html"},"PBXProject")," API to add those frameworks to the Xcode Project files created by Cloud Build."),(0,u.kt)("p",null,"\u53ef\u901a\u8fc7\u4e24\u79cd\u65b9\u6cd5\u8c03\u7528\u6b64 API \u6765\u64cd\u4f5c Xcode \u9879\u76ee\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5185\u7f6e\u7684 Unity ",(0,u.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Callbacks.PostProcessBuildAttribute.html"},"PostProcessBuildAttribute"),"\uff08\u5728 Unity Cloud Build \u5bfc\u51fa\u540e\u65b9\u6cd5\u8fd0\u884c\u4e4b\u524d\u6267\u884c\u5b83\uff09\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,u.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/unity-cloud-build-advanced-options/unity-cloud-build-pre-and-post-export-methods"},"Unity Cloud Build \u5bfc\u51fa\u540e\u65b9\u6cd5"),"\u3002")))}f.isMDXComponent=!0}}]);