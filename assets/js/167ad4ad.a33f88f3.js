"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75633],{3905:function(t,n,e){e.d(n,{Zo:function(){return y},kt:function(){return d}});var a=e(67294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var u=a.createContext({}),s=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):c(c({},n),t)),e},y=function(t){var n=s(t.components);return a.createElement(u.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,y=l(t,["components","mdxType","originalType","parentName"]),p=s(e),d=i,g=p["".concat(u,".").concat(d)]||p[d]||o[d]||r;return e?a.createElement(g,c(c({ref:n},y),{},{components:e})):a.createElement(g,c({ref:n},y))}));function d(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var r=e.length,c=new Array(r);c[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,c[1]=l;for(var s=2;s<r;s++)c[s]=e[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},53116:function(t,n,e){e.r(n),e.d(n,{assets:function(){return y},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o}});var a=e(87462),i=e(63366),r=(e(67294),e(3905)),c=["components"],l={id:"UnityAnalyticsUpgradeFromSDK",title:"\u5c06 Unity Analytics 4.x-5.1 (SDK) \u5347\u7ea7\u5230 5.2 \u4ee5\u4e0a\u7248\u672c",slug:"/unity-analytics-upgrading/unity-analytics-upgrade-from-sdk"},u="\u5c06 Unity Analytics 4.x\u20135.1 (SDK) \u5347\u7ea7\u5230 5.2 \u4ee5\u4e0a\u7248\u672c",s={unversionedId:"unity-services/unity-analytics/unity-analytics-upgrading/UnityAnalyticsUpgradeFromSDK",id:"unity-services/unity-analytics/unity-analytics-upgrading/UnityAnalyticsUpgradeFromSDK",title:"\u5c06 Unity Analytics 4.x-5.1 (SDK) \u5347\u7ea7\u5230 5.2 \u4ee5\u4e0a\u7248\u672c",description:"\u8be5\u8fc7\u7a0b\u5206\u4e3a\u4e09\u4e2a\u4e00\u822c\u6b65\u9aa4\uff1a",source:"@site/docs/unity-services/unity-analytics/unity-analytics-upgrading/unity-analytics-upgrade-from-sdk.md",sourceDirName:"unity-services/unity-analytics/unity-analytics-upgrading",slug:"/unity-analytics-upgrading/unity-analytics-upgrade-from-sdk",permalink:"/doc-unity-manual/docs/unity-analytics-upgrading/unity-analytics-upgrade-from-sdk",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-analytics/unity-analytics-upgrading/unity-analytics-upgrade-from-sdk.md",tags:[],version:"current",frontMatter:{id:"UnityAnalyticsUpgradeFromSDK",title:"\u5c06 Unity Analytics 4.x-5.1 (SDK) \u5347\u7ea7\u5230 5.2 \u4ee5\u4e0a\u7248\u672c",slug:"/unity-analytics-upgrading/unity-analytics-upgrade-from-sdk"},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee ID \u4e0d\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u5982\u4f55\u5e94\u5bf9",permalink:"/doc-unity-manual/docs/unity-analytics-upgrading/unity-analytics-mismatched-project-id"},next:{title:"\u5c06 Unity Analytics 5.1 \u5347\u7ea7\u5230 5.2 \u4ee5\u4e0a\u7248\u672c",permalink:"/doc-unity-manual/docs/unity-analytics-upgrading/unity-analytics-upgrade-from51"}},y={},o=[{value:"1.\u5220\u9664\u73b0\u6709\u7684 Unity Analytics SDK",id:"1\u5220\u9664\u73b0\u6709\u7684-unity-analytics-sdk",level:2},{value:"2.\u91cd\u65b0\u96c6\u6210 Unity Analytics",id:"2\u91cd\u65b0\u96c6\u6210-unity-analytics",level:2},{value:"3.\u66f4\u65b0\u9ad8\u7ea7\u96c6\u6210 (Advanced Integration) \u4e8b\u4ef6",id:"3\u66f4\u65b0\u9ad8\u7ea7\u96c6\u6210-advanced-integration-\u4e8b\u4ef6",level:2}],p={toc:o};function d(t){var n=t.components,e=(0,i.Z)(t,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5c06-unity-analytics-4x51-sdk-\u5347\u7ea7\u5230-52-\u4ee5\u4e0a\u7248\u672c"},"\u5c06 Unity Analytics 4.x\u20135.1 (SDK) \u5347\u7ea7\u5230 5.2 \u4ee5\u4e0a\u7248\u672c"),(0,r.kt)("p",null,"\u8be5\u8fc7\u7a0b\u5206\u4e3a\u4e09\u4e2a\u4e00\u822c\u6b65\u9aa4\uff1a"),(0,r.kt)("p",null,"1.\u5220\u9664\u73b0\u6709\u7684 Unity Analytics SDK \u7ec4\u4ef6 2.\u91cd\u65b0\u96c6\u6210 Unity Analytics 3.\u66f4\u65b0\u9ad8\u7ea7\u96c6\u6210 (Advanced Integration) \u4e8b\u4ef6"),(0,r.kt)("h2",{id:"1\u5220\u9664\u73b0\u6709\u7684-unity-analytics-sdk"},"1.\u5220\u9664\u73b0\u6709\u7684 Unity Analytics SDK"),(0,r.kt)("p",null,"Unity Editor 5.2 \u4ee5\u4e0a\u7248\u672c\u5185\u7f6e\u4e86 Unity Analytics\u3002\u5efa\u8bae\u5220\u9664\u73b0\u6709\u7684 Unity Analytics SDK \u7ec4\u4ef6\u4ee5\u786e\u4fdd\u4e0d\u53d1\u751f\u51b2\u7a81\u5e76\u6709\u52a9\u4e8e\u7ef4\u62a4\u66f4\u5e72\u51c0\u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"\u5728 Project \u6587\u4ef6\u5939\u4e2d\u627e\u5230\u73b0\u6709\u7684 Unity Analytics SDK \u7ec4\u4ef6\u3002\u5b83\u4eec\u6700\u6709\u53ef\u80fd\u4fdd\u5b58\u5728 Assets ",">"," Plugins\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u52a1\u5fc5\u4ec5\u9009\u62e9\u7279\u5b9a\u4e8e Analytics \u7684\u8d44\u6e90\u3002")," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnalyticsUpgradeDeleteSDK.gif",alt:"AnalyticsUpgradeDeleteSDK.gif"})),(0,r.kt)("p",null,"\u5220\u9664\u6240\u6709\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnalyticsUpgradeDeleteComponents.png",alt:"AnalyticsUpgradeDeleteComponents.png"})),(0,r.kt)("p",null,"\u5982\u679c\u5173\u95ed\u540e\u91cd\u65b0\u6253\u5f00\u9879\u76ee\uff0c\u7136\u540e\u770b\u4e0d\u5230\u4ee5\u4e0b\u6d88\u606f\u63d0\u793a\uff0c\u5373\u53ef\u786e\u8ba4\u5df2\u6210\u529f\u5220\u9664 Unity Analytics SDK\u3002\u5982\u679c\u4ecd\u7136\u770b\u5230\u8be5\u63d0\u793a\uff0c\u8bf7\u786e\u8ba4\u662f\u5426\u5df2\u5220\u9664\u6240\u6709\u7684 Unity Analytics SDK \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnalyticsUpgradeConfirmationSDKRemoved.jpg",alt:"AnalyticsUpgradeConfirmationSDKRemoved.jpg"})),(0,r.kt)("h2",{id:"2\u91cd\u65b0\u96c6\u6210-unity-analytics"},"2.\u91cd\u65b0\u96c6\u6210 Unity Analytics"),(0,r.kt)("p",null,"\u9075\u5faa",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-analytics/unity-analytics-overview"},"\u8bbe\u7f6e Analytics")," \u4e2d\u7684\u8bf4\u660e\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u201c\u5728\u6e38\u620f\u4e2d\u9a8c\u8bc1\u201d\u6b65\u9aa4\u4e2d\u68c0\u67e5 SDK \u7248\u672c\u5e76\u786e\u8ba4 Validator \u4e2d\u663e\u793a\u4e86\u6b63\u786e\u7684 Editor \u7248\u672c\uff08\u5373\uff1au5.2 \u6216 u5.3\uff09\uff0c\u5373\u53ef\u786e\u5b9a\u6210\u529f\u5b8c\u6210\u4e86\u5347\u7ea7\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnalyticsValidate52.png",alt:"AnalyticsValidate52.png"})),(0,r.kt)("h2",{id:"3\u66f4\u65b0\u9ad8\u7ea7\u96c6\u6210-advanced-integration-\u4e8b\u4ef6"},"3.\u66f4\u65b0\u9ad8\u7ea7\u96c6\u6210 (Advanced Integration) \u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u4ee5\u524d\u6267\u884c\u8fc7\u4efb\u4f55\u73b0\u6709\u7684\u9ad8\u7ea7\u96c6\u6210 (Advanced Integration)\uff0c\u8fd8\u9700\u8981\u66f4\u65b0\u547d\u540d\u7a7a\u95f4\u548c\u8c03\u7528\u624d\u80fd\u4f7f\u7528 5.2 \u4ee5\u4e0a\u7248\u672c\u7684\u8bed\u6cd5\u3002\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-analytics-advanced-sdk"},"5.2 \u4ee5\u4e0a\u7248\u672c\u7684\u9ad8\u7ea7\u96c6\u6210 (Advanced Integration) \u8bf4\u660e"),"\u8fdb\u884c\u66f4\u65b0\u3002"))}d.isMDXComponent=!0}}]);