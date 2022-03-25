"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39998],{3905:function(t,n,e){e.d(n,{Zo:function(){return l},kt:function(){return d}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=a.createContext({}),u=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):c(c({},n),t)),e},l=function(t){var n=u(t.components);return a.createElement(o.Provider,{value:n},t.children)},y={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(e),d=r,m=p["".concat(o,".").concat(d)]||p[d]||y[d]||i;return e?a.createElement(m,c(c({ref:n},l),{},{components:e})):a.createElement(m,c({ref:n},l))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,c=new Array(i);c[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var u=2;u<i;u++)c[u]=e[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},75486:function(t,n,e){e.r(n),e.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return y}});var a=e(87462),r=e(63366),i=(e(67294),e(3905)),c=["components"],s={id:"UnityAnalyticsAttachSDK",title:"\u9644\u52a0\u6e38\u620f\u811a\u672c",slug:"/unity-analytics-basic-sdk/unity-analytics-attach-sdk"},o="\u9644\u52a0\u6e38\u620f\u811a\u672c",u={unversionedId:"legacy-topics/unity-analytics-sdk/unity-analytics-basic-sdk/UnityAnalyticsAttachSDK",id:"legacy-topics/unity-analytics-sdk/unity-analytics-basic-sdk/UnityAnalyticsAttachSDK",title:"\u9644\u52a0\u6e38\u620f\u811a\u672c",description:"UnityAnalyticsIntegration  \u811a\u672c\u53ef\u4ee5\u9644\u52a0\u5230\u6e38\u620f\u4e2d\u4efb\u4f55\u573a\u666f\u7684\u4efb\u4f55\u6e38\u620f\u5bf9\u8c61\u4ee5\u4fbf\u521d\u59cb\u5316 Unity Analytics SDK\u3002\u5efa\u8bae\u5c06\u811a\u672c\u9644\u52a0\u5230\u6e38\u620f\u7684\u7b2c\u4e00\u4e2a \u573a\u666f \u4e2d\u7684 \u6e38\u620f\u5bf9\u8c61 \uff0c\u4ece\u800c\u786e\u4fdd\u5f00\u59cb\u6355\u83b7\u5c3d\u53ef\u80fd\u591a\u7684\u7528\u6237\u53c2\u4e0e\u5ea6\u6570\u636e\u3002",source:"@site/docs/legacy-topics/unity-analytics-sdk/unity-analytics-basic-sdk/unity-analytics-attach-sdk.md",sourceDirName:"legacy-topics/unity-analytics-sdk/unity-analytics-basic-sdk",slug:"/unity-analytics-basic-sdk/unity-analytics-attach-sdk",permalink:"/doc-unity-manual/docs/unity-analytics-basic-sdk/unity-analytics-attach-sdk",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/legacy-topics/unity-analytics-sdk/unity-analytics-basic-sdk/unity-analytics-attach-sdk.md",tags:[],version:"current",frontMatter:{id:"UnityAnalyticsAttachSDK",title:"\u9644\u52a0\u6e38\u620f\u811a\u672c",slug:"/unity-analytics-basic-sdk/unity-analytics-attach-sdk"},sidebar:"tutorialSidebar",previous:{title:"Basic Integration (SDK)",permalink:"/doc-unity-manual/docs/unity-analytics-basic-sdk"},next:{title:"\u521b\u5efa\u6e38\u620f\u811a\u672c",permalink:"/doc-unity-manual/docs/unity-analytics-basic-sdk/unity-analytics-create-sdk"}},l={},y=[],p={toc:y};function d(t){var n=t.components,e=(0,r.Z)(t,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9644\u52a0\u6e38\u620f\u811a\u672c"},"\u9644\u52a0\u6e38\u620f\u811a\u672c"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"UnityAnalyticsIntegration"),"  \u811a\u672c\u53ef\u4ee5\u9644\u52a0\u5230\u6e38\u620f\u4e2d\u4efb\u4f55",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/creating-scenes"},"\u573a\u666f"),"\u7684\u4efb\u4f55",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/game-objects"},"\u6e38\u620f\u5bf9\u8c61"),"\u4ee5\u4fbf\u521d\u59cb\u5316 Unity Analytics SDK\u3002\u5efa\u8bae\u5c06\u811a\u672c\u9644\u52a0\u5230\u6e38\u620f\u7684\u7b2c\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"\u573a\u666f")," \u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u6e38\u620f\u5bf9\u8c61")," \uff0c\u4ece\u800c\u786e\u4fdd\u5f00\u59cb\u6355\u83b7\u5c3d\u53ef\u80fd\u591a\u7684\u7528\u6237\u53c2\u4e0e\u5ea6\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u811a\u672c\u9644\u52a0\u5230  ",(0,i.kt)("strong",{parentName:"p"},"MainCamera")," \u3002 \u9996\u5148\u5728 Editor \u5de6\u4fa7\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  \u9009\u9879\u5361\u4e2d\u627e\u5230\u5e76\u9009\u62e9 \u201cMain Camera\u201d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnalyticsBasicAttachGameScript.gif",alt:"AnalyticsBasicAttachGameScript.gif"})),(0,i.kt)("p",null,"\u4ece Projects \u9009\u9879\u5361\u4e2d\u5c06\u811a\u672c\u62d6\u653e\u5230 Main Camera  ",(0,i.kt)("strong",{parentName:"p"},"\u6e38\u620f\u5bf9\u8c61")," \u4e0a\u3002\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Inspector"),"  \u7a97\u53e3\u4e2d\u9009\u62e9 Main Camera \u540e\uff0c\u5e94\u8be5\u4f1a\u53d1\u73b0\u5df2\u5c06\u8be5\u811a\u672c\u4f5c\u4e3a\u7ec4\u4ef6\u5206\u914d\u7ed9 Main Camera\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5c06\u811a\u672c\u6dfb\u52a0\u5230 ",(0,i.kt)("strong",{parentName:"p"},"\u6e38\u620f\u5bf9\u8c61")," \u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  \u4e2d\u9009\u62e9\u8be5 ",(0,i.kt)("strong",{parentName:"p"},"\u6e38\u620f\u5bf9\u8c61")," \uff0c\u7136\u540e\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Inspector"),"  \u4e2d\u5c06\u6240\u9700\u7684\u811a\u672c\u7ec4\u4ef6\u6dfb\u52a0\u5230\u8be5\u6e38\u620f\u5bf9\u8c61\u3002"))}d.isMDXComponent=!0}}]);