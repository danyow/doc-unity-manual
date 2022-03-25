"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32543],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||y[m]||r;return n?i.createElement(g,s(s({ref:e},l),{},{components:n})):i.createElement(g,s({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65170:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return y}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],o={id:"UnityAnalyticsRemoteSettingsNetRequests",title:"Remote Settings \u7f51\u7edc\u8bf7\u6c42",slug:"/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests"},u="Remote Settings \u7f51\u7edc\u8bf7\u6c42",c={unversionedId:"unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/UnityAnalyticsRemoteSettingsNetRequests",id:"unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/UnityAnalyticsRemoteSettingsNetRequests",title:"Remote Settings \u7f51\u7edc\u8bf7\u6c42",description:"*Note : Unity Remote Config is now available as a preview package. Remote Config is an improved offering that allows you to change the behavior and appearance of your game without requiring a new binary. You can remotely enable or disable features, change the specifics of your game to target specific audiences, or run special events by scheduling new content releases.*",source:"@site/docs/unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests.md",sourceDirName:"unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using",slug:"/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests",permalink:"/doc-unity-manual/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests.md",tags:[],version:"current",frontMatter:{id:"UnityAnalyticsRemoteSettingsNetRequests",title:"Remote Settings \u7f51\u7edc\u8bf7\u6c42",slug:"/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Unity Editor \u4e2d\u7ba1\u7406 Remote Settings",permalink:"/doc-unity-manual/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-managing"},next:{title:"Remote Settings \u811a\u672c",permalink:"/doc-unity-manual/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting"}},l={},y=[],p={toc:y};function m(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-settings-\u7f51\u7edc\u8bf7\u6c42"},"Remote Settings \u7f51\u7edc\u8bf7\u6c42"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"*Note")," : ",(0,r.kt)("a",{parentName:"p",href:"https://unity.com/remote-config"},"Unity Remote Config")," is now available as a preview package. Remote Config is an improved offering that allows you to change the behavior and appearance of your game without requiring a new binary. You can remotely enable or disable features, change the specifics of your game to target specific audiences, or run special events by scheduling new content releases.*"),(0,r.kt)("p",null,"\u5728 Unity Analytics Dashboard \u4e2d",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-analytics-remote-settings/unity-analytics-remote-settings-creating"},"\u521b\u5efa Remote Settings \u952e/\u503c\u5bf9"),"\u65f6\uff0cUnity Analytics \u670d\u52a1\u4f1a\u5c06\u8be5\u8bbe\u7f6e\u5b58\u50a8\u5728\u60a8\u4e3a\u9879\u76ee\u6307\u5b9a\u7684  ",(0,r.kt)("strong",{parentName:"p"},"Configuration")," \uff08 ",(0,r.kt)("strong",{parentName:"p"},"Release"),"  \u6216  ",(0,r.kt)("strong",{parentName:"p"},"Development")," \uff09\u4e2d\u3002\u6bcf\u5f53\u73a9\u5bb6\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u7684\u65b0\u4f1a\u8bdd\u65f6\uff0cUnity \u90fd\u4f1a\u63d0\u51fa\u7f51\u7edc\u8bf7\u6c42\u4ee5\u4ece Analytics \u670d\u52a1\u83b7\u53d6\u6700\u65b0\u914d\u7f6e\u3002\u5728\u73a9\u5bb6\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u6216\u8005\u8fd4\u56de\u5230\u5df2\u8fdb\u5165\u540e\u53f0\u81f3\u5c11 30 \u5206\u949f\u7684\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0cUnity \u4f1a\u8ba4\u4e3a\u542f\u52a8\u4e86\u65b0\u4f1a\u8bdd\u3002\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u5e38\u89c4\u975e\u5f00\u53d1\u7248\u65f6\uff0cUnity \u4f1a\u8bf7\u6c42 ",(0,r.kt)("strong",{parentName:"p"},"Release"),"  \u914d\u7f6e\uff0c\u800c\u5728\u8fd0\u884c\u5f00\u53d1\u7248\u65f6\u8bf7\u6c42  ",(0,r.kt)("strong",{parentName:"p"},"Development"),"  \u914d\u7f6e\u3002Unity Editor \u4e2d\u7684 Play \u6a21\u5f0f\u88ab\u89c6\u4e3a\u5f00\u53d1\u7248\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4e3a\u4e86\u8ba9 Unity \u8bf7\u6c42  ",(0,r.kt)("strong",{parentName:"p"},"Development"),"  \u914d\u7f6e\uff0c\u5fc5\u987b\u4f7f\u7528 Unity 5.6.0p4+\u30015.6.1p1+\u30012017.1+ \u6216 Unity 5.5.3p4+ \u6765\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/build-settings"},"Build Settings \u7a97\u53e3"),"\u4e2d\u52fe\u9009  ",(0,r.kt)("strong",{parentName:"p"},"Development Build"),"  \u590d\u9009\u6846\u3002\u5982\u679c\u4f7f\u7528\u8f83\u4f4e\u7248\u672c\u7684 Unity \u6765\u6784\u5efa\u6e38\u620f\uff0c\u5219 Unity \u59cb\u7ec8\u8bf7\u6c42  ",(0,r.kt)("strong",{parentName:"p"},"Release"),"  \u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6709\u5173 Remote Settings \u914d\u7f6e\u7684\u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\u65f6\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/RemoteSettings.html"},"RemoteSettings")," \u5bf9\u8c61\u4f1a\u5c06\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Updated")," \u4e8b\u4ef6\u5206\u53d1\u7ed9\u4efb\u4f55\u5df2\u6ce8\u518c\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5305\u62ec\u7531 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-component"},"Remote Settings \u7ec4\u4ef6"),"\u6ce8\u518c\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8ba1\u7b97\u673a\u6216\u8bbe\u5907\u6ca1\u6709\u4e92\u8054\u7f51\u8fde\u63a5\u800c\u65e0\u6cd5\u4e0e Analytics \u670d\u52a1\u901a\u4fe1\uff0cUnity \u5c06\u4f7f\u7528\u81ea\u5df1\u4e0a\u6b21\u6536\u5230\u5e76\u4fdd\u5b58\u7684\u914d\u7f6e\u3002\u5728\u4f7f\u7528\u4fdd\u5b58\u7684\u914d\u7f6e\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u5bf9\u8c61\u4ecd\u7136\u4f1a\u5206\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Updated")," \u4e8b\u4ef6\u3002\u4f46\u662f\uff0c\u5982\u679c Unity \u5c1a\u672a\u4fdd\u5b58\u4efb\u4f55\u8bbe\u7f6e\uff08\u4f8b\u5982\u73a9\u5bb6\u7b2c\u4e00\u6b21\u8fd0\u884c\u6e38\u620f\u65f6\u6ca1\u6709\u7f51\u7edc\u8fde\u63a5\uff09\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u5bf9\u8c61\u4e0d\u4f1a\u5206\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Updated")," \u4e8b\u4ef6\uff0c\u56e0\u6b64\u4e0d\u4f1a\u66f4\u65b0\u6e38\u620f\u53d8\u91cf\u3002\u901a\u8fc7\u7f51\u7edc\u8bf7\u6c42 Remote Settings \u914d\u7f6e\u662f\u4e00\u4e2a\u5f02\u6b65\u8fc7\u7a0b\uff0c\u5728\u521d\u59cb\u573a\u666f\u5b8c\u6210\u52a0\u8f7d\u4e4b\u524d\u53ef\u80fd\u65e0\u6cd5\u5b8c\u6210\uff0c\u6216\u8005\u6839\u672c\u65e0\u6cd5\u5b8c\u6210\uff0c\u56e0\u6b64\u60a8\u5e94\u8be5\u59cb\u7ec8\u5c06\u6e38\u620f\u53d8\u91cf\u521d\u59cb\u5316\u4e3a\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity \u4e0b\u8f7d Remote Settings \u914d\u7f6e\u65f6\u4f7f\u7528\u7684 Web \u670d\u52a1\u662f\u53ea\u8bfb\u7684\uff0c\u4f46\u672a\u53d7\u4fdd\u62a4\u3002\u8fd9\u610f\u5473\u7740\u914d\u7f6e\u53ef\u80fd\u88ab\u7b2c\u4e09\u65b9\u8bfb\u53d6\u3002\u60a8\u4e0d\u5e94\u5c06\u654f\u611f\u6216\u673a\u5bc6\u4fe1\u606f\u653e\u5165 Remote Settings\u3002\u540c\u6837\uff0c\u4fdd\u5b58\u7684\u8bbe\u7f6e\u6587\u4ef6\u53ef\u80fd\u7531\u7ec8\u7aef\u7528\u6237\u8bfb\u53d6\u548c\u4fee\u6539\uff08\u5c3d\u7ba1\u5728\u4e0b\u6b21\u542f\u52a8\u5177\u6709\u53ef\u7528\u4e92\u8054\u7f51\u8fde\u63a5\u7684\u4f1a\u8bdd\u65f6\u4f1a\u8986\u76d6\u4efb\u4f55\u4fee\u6539\uff09\u3002"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2017\u201305\u201330 \u9875\u9762\u5df2\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},"\u622a\u81f3 2017\u201305\u201330\uff0c\u670d\u52a1\u4e0e Unity 5.5 \u4e4b\u540e\u7684\u7248\u672c\u517c\u5bb9\uff0c\u4f46\u662f\u7248\u672c\u517c\u5bb9\u6027\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"2017.1 \u4e2d\u7684\u65b0\u529f\u80fd")))}m.isMDXComponent=!0}}]);