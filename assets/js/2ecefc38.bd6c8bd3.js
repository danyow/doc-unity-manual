"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51016],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=o(r),f=i,m=y["".concat(l,".").concat(f)]||y[f]||p[f]||u;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=r.length,a=new Array(u);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var o=2;o<u;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},97733:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return p}});var n=r(87462),i=r(63366),u=(r(67294),r(3905)),a=["components"],c={id:"UnityMultiplayerService",title:"Multiplayer \u670d\u52a1",slug:"/unity-services/unity-multiplayer-service"},l="Multiplayer \u670d\u52a1",o={unversionedId:"unity-services/UnityMultiplayerService",id:"unity-services/UnityMultiplayerService",title:"Multiplayer \u670d\u52a1",description:"MultiplayerServicesIntro.jpg",source:"@site/docs/unity-services/unity-multiplayer-service.md",sourceDirName:"unity-services",slug:"/unity-services/unity-multiplayer-service",permalink:"/doc-unity-manual/docs/unity-services/unity-multiplayer-service",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-multiplayer-service.md",tags:[],version:"current",frontMatter:{id:"UnityMultiplayerService",title:"Multiplayer \u670d\u52a1",slug:"/unity-services/unity-multiplayer-service"},sidebar:"tutorialSidebar",previous:{title:"Unity Integrations",permalink:"/doc-unity-manual/docs/unity-services/unity-integrations"},next:{title:"2D",permalink:"/doc-unity-manual/docs/unity2d"}},s={},p=[],y={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"multiplayer-\u670d\u52a1"},"Multiplayer \u670d\u52a1"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MultiplayerServicesIntro.jpg",alt:"MultiplayerServicesIntro.jpg"})),(0,u.kt)("p",null,"\u5728 Unity \u4e2d\u521b\u5efa\u5b9e\u65f6\u7f51\u7edc\u6e38\u620f\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\u4f7f\u7528 Multiplayer \u670d\u52a1\u3002\u5b83\u5b9e\u73b0\u65b9\u5f0f\u5feb\u6377\uff0c\u800c\u4e14\u652f\u6301\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u3002Unity \u63d0\u4f9b\u7684\u670d\u52a1\u5668\u548c\u914d\u5bf9\u670d\u52a1\u786e\u4fdd\u60a8\u7684\u73a9\u5bb6\u53ef\u4ee5\u8f7b\u677e\u627e\u5230\u5bf9\u65b9\u5e76\u4e00\u8d77\u73a9\u6e38\u620f\u3002"),(0,u.kt)("p",null,"\u8981\u8be6\u7ec6\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Unity Multiplayer \u670d\u52a1\uff0c\u8bf7\u53c2\u9605 ",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-multiplayer-setting-up"},"Multiplayer \u6587\u6863\u7684 Services \u90e8\u5206"),"\u3002"))}f.isMDXComponent=!0}}]);