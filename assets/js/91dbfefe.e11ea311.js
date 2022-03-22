"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90786],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),y=o(n),m=r,d=y["".concat(s,".").concat(m)]||y[m]||p[m]||l;return n?a.createElement(d,i(i({ref:e},c),{},{components:n})):a.createElement(d,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=y;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11189:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={id:"UnityAnalyticsEventLimits",title:"Analytics \u4e8b\u4ef6\u9650\u5236",slug:"/unity-analytics-events/unity-analytics-event-limits"},s="Analytics \u4e8b\u4ef6\u9650\u5236",o={unversionedId:"unity-services/unity-analytics/unity-analytics-events/UnityAnalyticsEventLimits",id:"unity-services/unity-analytics/unity-analytics-events/UnityAnalyticsEventLimits",title:"Analytics \u4e8b\u4ef6\u9650\u5236",description:"\u4e3a\u4e86\u7ef4\u6301\u9ad8\u6548\u4e14\u54cd\u5e94\u8fc5\u901f\u7684\u670d\u52a1\uff0cAnalytics \u4f1a\u5bf9\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u5b9a\u5b9e\u4f8b\u53ef\u53d1\u9001\u7684\u6807\u51c6\u548c\u81ea\u5b9a\u4e49\u4e8b\u4ef6 (Standard and Custom Events) \u6570\u91cf\u65bd\u52a0\u9650\u5236\u3002\u8fd9\u4e9b\u9650\u5236\u5305\u62ec\uff1a",source:"@site/docs/unity-services/unity-analytics/unity-analytics-events/unity-analytics-event-limits.md",sourceDirName:"unity-services/unity-analytics/unity-analytics-events",slug:"/unity-analytics-events/unity-analytics-event-limits",permalink:"/docs/unity-analytics-events/unity-analytics-event-limits",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-analytics/unity-analytics-events/unity-analytics-event-limits.md",tags:[],version:"current",frontMatter:{id:"UnityAnalyticsEventLimits",title:"Analytics \u4e8b\u4ef6\u9650\u5236",slug:"/unity-analytics-events/unity-analytics-event-limits"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u811a\u672c",permalink:"/docs/unity-analytics-custom-events/unity-analytics-custom-event-scripting"},next:{title:"Analytics \u4e8b\u4ef6\u53c2\u6570",permalink:"/docs/unity-analytics-events/unity-analytics-event-parameters"}},c={},p=[{value:"\u5355\u4e8b\u4ef6\u6570\u636e\u9650\u5236",id:"\u5355\u4e8b\u4ef6\u6570\u636e\u9650\u5236",level:2}],y={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"analytics-\u4e8b\u4ef6\u9650\u5236"},"Analytics \u4e8b\u4ef6\u9650\u5236"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7ef4\u6301\u9ad8\u6548\u4e14\u54cd\u5e94\u8fc5\u901f\u7684\u670d\u52a1\uff0cAnalytics \u4f1a\u5bf9\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u5b9a\u5b9e\u4f8b\u53ef\u53d1\u9001\u7684\u6807\u51c6\u548c\u81ea\u5b9a\u4e49\u4e8b\u4ef6 (Standard and Custom Events) \u6570\u91cf\u65bd\u52a0\u9650\u5236\u3002\u8fd9\u4e9b\u9650\u5236\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u5c0f\u65f6 100 \u4e2a\u4e8b\u4ef6\uff08\u6bcf\u4e2a\u6e38\u620f\u5b9e\u4f8b\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e8b\u4ef6 10 \u4e2a\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5355\u4e2a\u4e8b\u4ef6\u4e2d\u53d1\u9001 500 \u4e2a\u5b57\u8282\u6216\u5b57\u7b26\u7684\u6570\u636e\uff0c\u5305\u62ec\u53c2\u6570\u540d\u79f0\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u548c\u53c2\u6570\u503c\u7684\u5b57\u8282\u5927\u5c0f\u6216\u5b57\u7b26\u4e32\u957f\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u79f0 100 \u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"Analytics Dashboard \u4ec5\u663e\u793a\u7ed9\u5b9a\u65e5\u671f\u7684 5,000 \u4e2a\u6700\u5e38\u89c1\u7684\u4e8b\u4ef6\u3001\u53c2\u6570\u3001\u53c2\u6570\u503c\u7ec4\u5408\uff08\u5bf9\u4e8e\u53ef\u5206\u7c7b\u7684\u53c2\u6570\u503c\uff09\u3002")),(0,l.kt)("p",null,"All of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/unity-analytics-events"},"AnalyticsEvent")," functions that send events, return a value from the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Analytics.AnalyticsResult.html"},"AnalyticsResult")," enumeration. If an application exceeds one of the limits, the ",(0,l.kt)("inlineCode",{parentName:"p"},"AnalyticsResult")," value identifies the specific error encountered:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"AnalyticsResult"))),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u8d85\u51fa\u7684\u9650\u5236")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AnalyticsResult.TooManyRequests")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u5c0f\u65f6 100 \u4e2a\u4e8b\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AnalyticsResult.TooManyItems")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u4e8b\u4ef6 10 \u4e2a\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AnalyticsResult.SizeLimitReached")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e 500 \u5b57\u8282\u6216\u4e8b\u4ef6\u540d\u79f0 100 \u4e2a\u5b57\u7b26")))),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u6bcf\u4e2a\u5b9e\u4f8b 100 \u4e2a\u4e8b\u4ef6\u7684\u9650\u5236\u662f\u9002\u5408\u5927\u591a\u6570 Unity Analytics \u7528\u6237\u7684\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u60a8\u7684\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u66f4\u9ad8\u7684\u4e8b\u4ef6\u9650\u5236\uff0c\u8bf7\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://analytics.cloud.unity3d.com/support/"},"Analytics \u652f\u6301\u56e2\u961f"),"\u8054\u7cfb\u4ee5\u5236\u5b9a\u51fa\u7b26\u5408\u60a8\u8981\u6c42\u7684\u9650\u5236\u3002"),(0,l.kt)("h2",{id:"\u5355\u4e8b\u4ef6\u6570\u636e\u9650\u5236"},"\u5355\u4e8b\u4ef6\u6570\u636e\u9650\u5236"),(0,l.kt)("p",null,"\u5728\u5355\u4e2a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6216\u6807\u51c6\u4e8b\u4ef6\u4e2d\uff0c\u6700\u591a\u53ef\u4ee5\u53d1\u9001 500 \u4e2a\u5b57\u7b26\u6216\u5b57\u8282\u7684\u6570\u636e\u3002\u6b64\u9650\u5236\u8ba1\u7b97\u4e86\u6240\u6709\u53c2\u6570\u540d\u79f0\u7684\u7ec4\u5408\u5b57\u7b26\u4e32\u957f\u5ea6\u4ee5\u53ca\u53c2\u6570\u503c\u7684\u4ee5\u4e0b\u5927\u5c0f\uff08\u53d6\u51b3\u4e8e\u6570\u636e\u7c7b\u578b\uff09\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"C# \u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte\u3001ubyte"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short\u3001ushort"),(0,l.kt)("td",{parentName:"tr",align:null},"4\uff08\u8f6c\u6362\u4e3a int\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int\u3001uint"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long\u3001ulong"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"8\uff08\u8f6c\u6362\u4e3a double\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"8\uff08\u8f6c\u6362\u4e3a double\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u957f\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"ToString()")," \u540e\u7684\u5b57\u7b26\u4e32\u957f\u5ea6")))),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4e8b\u4ef6\u4f7f\u7528 67 \u4e2a\u5b57\u8282/\u5b57\u7b26\u7684\u6570\u636e\u957f\u5ea6\u9650\u5236\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    Dictionary&lt;string, object&gt; data = new Dictionary&lt;string, object&gt;();\n        data.Add("int_param", 32); // 9 \u4e2a\u5b57\u7b26 + 4 \u4e2a\u5b57\u8282\n        data.Add("bool_param", true); // 10 \u4e2a\u5b57\u7b26 + 1 \u4e2a\u5b57\u8282\n        data.Add("float_param", 3.3f); // 11 \u4e2a\u5b57\u7b26 + 8 \u4e2a\u5b57\u8282\n        data.Add("string_param", "String value"); // 12 \u4e2a\u5b57\u7b26 + 12 \u4e2a\u5b57\u7b26\n        AnalyticsResult result = AnalyticsEvent.Custom("custom_event", data);\n')),(0,l.kt)("p",null,"\u5f53\u60a8\u53d1\u9001\u5b9a\u4e49\u81ea\u8eab\u5fc5\u9700\u53c2\u6570\u6216\u53ef\u9009\u53c2\u6570\u7684\u6807\u51c6\u4e8b\u4ef6\u65f6\uff0c\u5fc5\u9700\u53c2\u6570\u7684\u540d\u79f0\u548c\u503c\u7684\u957f\u5ea6\u4ee5\u53ca\u6240\u6709\u53ef\u9009\u53c2\u6570\u7684\u957f\u5ea6\u90fd\u5305\u542b\u5728 500 \u5b57\u8282\u9650\u5236\u4e2d\uff0c\u8fd8\u5305\u62ec\u6240\u6709\u81ea\u5b9a\u4e49\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u672c\u8eab\u7684\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 100 \u4e2a\u5b57\u7b26\uff0c\u4f46\u6b64\u957f\u5ea6\u4e0d\u8ba1\u5165\u4e8b\u4ef6\u6570\u636e\u7684 500 \u5b57\u8282\u9650\u5236\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018/10/14 \u6dfb\u52a0\u9875\u9762")))}m.isMDXComponent=!0}}]);