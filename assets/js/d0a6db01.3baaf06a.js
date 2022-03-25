"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24445],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:e},o),{},{components:n})):a.createElement(k,i({ref:e},o))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10874:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"UnityAnalyticsStandardEvents",title:"\u6807\u51c6\u4e8b\u4ef6",slug:"/unity-analytics-events/unity-analytics-standard-events"},s="\u6807\u51c6\u4e8b\u4ef6",u={unversionedId:"unity-services/unity-analytics/unity-analytics-events/UnityAnalyticsStandardEvents",id:"unity-services/unity-analytics/unity-analytics-events/UnityAnalyticsStandardEvents",title:"\u6807\u51c6\u4e8b\u4ef6",description:"\u4f7f\u7528\u6807\u51c6\u4e8b\u4ef6\u53ef\u4ee5\u5728\u4e94\u4e2a\u4e3b\u8981\u65b9\u9762\u8ddf\u8e2a\u7528\u6237\u4f53\u9a8c\u548c\u73a9\u5bb6\u884c\u4e3a\uff1a",source:"@site/docs/unity-services/unity-analytics/unity-analytics-events/unity-analytics-standard-events.md",sourceDirName:"unity-services/unity-analytics/unity-analytics-events",slug:"/unity-analytics-events/unity-analytics-standard-events",permalink:"/doc-unity-manual/docs/unity-analytics-events/unity-analytics-standard-events",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-analytics/unity-analytics-events/unity-analytics-standard-events.md",tags:[],version:"current",frontMatter:{id:"UnityAnalyticsStandardEvents",title:"\u6807\u51c6\u4e8b\u4ef6",slug:"/unity-analytics-events/unity-analytics-standard-events"},sidebar:"tutorialSidebar",previous:{title:"Analytics \u4e8b\u4ef6\u53c2\u6570",permalink:"/doc-unity-manual/docs/unity-analytics-events/unity-analytics-event-parameters"},next:{title:"\u6f0f\u6597\u56fe",permalink:"/doc-unity-manual/docs/unity-analytics/unity-analytics-funnels"}},o={},c=[{value:"\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6",id:"\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6",level:2},{value:"\u8fdb\u5ea6\u4e8b\u4ef6",id:"\u8fdb\u5ea6\u4e8b\u4ef6",level:2},{value:"\u5165\u95e8\u4e8b\u4ef6",id:"\u5165\u95e8\u4e8b\u4ef6",level:2},{value:"\u53c2\u4e0e\u4e8b\u4ef6",id:"\u53c2\u4e0e\u4e8b\u4ef6",level:2},{value:"\u53d8\u73b0\u4e8b\u4ef6",id:"\u53d8\u73b0\u4e8b\u4ef6",level:2},{value:"\u811a\u672c\u6807\u51c6\u4e8b\u4ef6",id:"\u811a\u672c\u6807\u51c6\u4e8b\u4ef6",level:2}],m={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6807\u51c6\u4e8b\u4ef6"},"\u6807\u51c6\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528\u6807\u51c6\u4e8b\u4ef6\u53ef\u4ee5\u5728\u4e94\u4e2a\u4e3b\u8981\u65b9\u9762\u8ddf\u8e2a\u7528\u6237\u4f53\u9a8c\u548c\u73a9\u5bb6\u884c\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f"),"  (Application)\uff1a\u8ddf\u8e2a\u5e94\u7528\u7a0b\u5e8f\u7528\u6237\u754c\u9762\u4e2d\u57fa\u672c\u5143\u7d20\u7684\u4f7f\u7528\u60c5\u51b5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8fdb\u5ea6"),"  (Progression)\uff1a\u8ddf\u8e2a\u73a9\u5bb6\u5728\u5e94\u7528\u7a0b\u5e8f\u6216\u6e38\u620f\u4e2d\u7684\u8fdb\u5ea6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5165\u95e8"),"  (Onboarding)\uff1a\u8ddf\u8e2a\u73a9\u5bb6\u4e0e\u5e94\u7528\u7a0b\u5e8f\u6216\u6e38\u620f\u6700\u65e9\u8fdb\u884c\u7684\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53c2\u4e0e\u5ea6"),"  (Engagement)\uff1a\u8ddf\u8e2a\u4e0e\u793e\u4ea4\u5206\u4eab\u3001\u6210\u5c31\u76f8\u5173\u7684\u91cd\u8981\u6d3b\u52a8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53d8\u73b0"),"  (Monetization)\uff1a\u8ddf\u8e2a\u4e0e\u6536\u5165\u76f8\u5173\u7684\u4e8b\u4ef6\u4ee5\u53ca\u6e38\u620f\u5185\u7684\u7ecf\u6d4e\u60c5\u51b5")),(0,l.kt)("p",null,"\u6807\u51c6\u4e8b\u4ef6\u5217\u8868\u6db5\u76d6\u53ef\u7528\u4e8e\u8ddf\u8e2a\u6e38\u620f\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u7cfb\u5217\u5185\u5bb9\u3002\u4f8b\u5982\uff0c\u5927\u591a\u6570\u6e38\u620f\u90fd\u6709\u73a9\u5bb6\u8fdb\u5ea6\u7684\u6982\u5ff5\uff0c\u5176\u4e2d\u53ef\u80fd\u5305\u62ec\u5b8c\u6210\u7684\u731c\u8c1c\u3001\u53c2\u4e0e\u8fc7\u7684\u6bd4\u8d5b\u3001\u83b7\u5f97\u7684 RPG \u7c7b\u7ecf\u9a8c\u6216\u5176\u4ed6\u4e00\u4e9b\u6982\u5ff5\u3002\u901a\u8fc7\u8ddf\u8e2a\u6807\u51c6\u8fdb\u5ea6\u4e8b\u4ef6\uff0c\u53ef\u66f4\u597d\u5730\u4e86\u89e3\u73a9\u5bb6\u505c\u6b62\u8fdb\u5ea6\u7684\u4f4d\u7f6e\u4ee5\u53ca\u6700\u7ec8\u505c\u6b62\u73a9\u6e38\u620f\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u6807\u51c6\u4e8b\u4ef6\u90fd\u4f1a\u5b9a\u4e49\u5fc5\u9700\u53c2\u6570\u548c\u53ef\u9009\u53c2\u6570\u3002\u8fd9\u4e9b\u53c2\u6570\u53ef\u5728\u53d1\u9001 Analytics \u4e8b\u4ef6\u65f6\u63d0\u4f9b\u6709\u5173\u6e38\u620f\u72b6\u6001\u7684\u5176\u4ed6\u4fe1\u606f\u3002\u60a8\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\u8bbe\u7f6e\u5173\u4e8e\u4e8b\u4ef6\u7684\u53c2\u6570\u53ef\u8ba9\u60a8\u8fc7\u6ee4\u4e8b\u4ef6\u53d1\u751f\u65f6\u6536\u96c6\u7684\u6570\u636e\u3002\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-analytics-dashboard"},"Analytics Dashboard")," \u4e0a\u53ef\u4ee5\u67e5\u770b\u6807\u51c6\u4e8b\u4ef6\u548c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u5305\u62ec Data Explorer\u3001Funnel Analyzer \u548c Segment Builder\u3002"),(0,l.kt)("p",null,"Unity Analytics \u5c06\u5b83\u63a5\u6536\u7684\u6807\u51c6\u4e8b\u4ef6\u548c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u6570\u91cf\u9650\u5236\u4e3a\u6bcf\u4e2a\u7528\u6237\u6bcf\u5c0f\u65f6 100 \u4e2a\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u73a9\u6e38\u620f\u7684\u5355\u4e2a\u7528\u6237\u8bbe\u6cd5\u5728\u4e00\u5c0f\u65f6\u5185\u89e6\u53d1\u8d85\u8fc7 100 \u4e2a\u6807\u51c6\u4e8b\u4ef6\u6216\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0cAnalytics \u5c31\u4f1a\u4e22\u5f03\u591a\u4f59\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6"},"\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6\u8ddf\u8e2a\u73a9\u5bb6\u5728\u6e38\u620f\u672c\u8eab\u4e4b\u5916\u4e0e\u5e94\u7528\u7a0b\u5e8f\u7684\u4ea4\u4e92\uff08\u4f8b\u5982\uff0c\u5728\u83dc\u5355\u4e2d\u6216\u8005\u5173\u5361\u4e4b\u524d\u6216\u4e4b\u540e\u7684\u8fc7\u573a\u52a8\u753b\u5c4f\u5e55\u4e2d\u8fdb\u884c\u7684\u4ea4\u4e92\uff09\u3002\u901a\u8fc7\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u4e8b\u4ef6\u53ef\u4ee5\u67e5\u770b\u73a9\u5bb6\u662f\u5426\u6309\u7167\u9884\u671f\u7ecf\u5e38\u4f7f\u7528\u7528\u6237\u754c\u9762\u7684\u57fa\u672c\u90e8\u5206\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u76ee\u7684")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"screen","_","visit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728 UI \u4e2d\u6253\u5f00\u4e00\u4e2a\u754c\u9762\uff0c\u6bd4\u5982\u9ad8\u5206\u6216\u8bbe\u7f6e\u754c\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cutscene","_","start"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5f00\u59cb\u89c2\u770b\u8fc7\u573a\u52a8\u753b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cutscene","_","skip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u8df3\u8fc7\u8fc7\u573a\u52a8\u753b\u3002")))),(0,l.kt)("h2",{id:"\u8fdb\u5ea6\u4e8b\u4ef6"},"\u8fdb\u5ea6\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u8fdb\u5ea6\u4e8b\u4ef6\u8ddf\u8e2a\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u7684\u8fdb\u5ea6\u3002\u5206\u6790\u6807\u51c6\u8fdb\u5ea6\u4e8b\u4ef6\u53ef\u4ee5\u76d1\u63a7\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u7684\u8fdb\u5ea6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u76ee\u7684")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game","_","start"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5f00\u59cb\u65b0\u6e38\u620f\uff08\u5bf9\u4e8e\u5177\u6709\u660e\u663e\u5f00\u5934\u548c\u7ed3\u5c3e\u7684\u6e38\u620f\u5f88\u6709\u7528\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game","_","over"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u7ed3\u675f\u6e38\u620f\uff08\u5bf9\u4e8e\u5177\u6709\u660e\u663e\u5f00\u5934\u548c\u7ed3\u5c3e\u7684\u6e38\u620f\u5f88\u6709\u7528\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level","_","start"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5f00\u59cb\u73a9\u67d0\u4e2a\u5173\u5361\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level","_","complete"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u6210\u529f\u5b8c\u6210\u4e00\u4e2a\u5173\u5361\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level","_","fail"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u67d0\u4e2a\u5173\u5361\u5931\u8d25\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level","_","quit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u9000\u51fa\u67d0\u4e2a\u5173\u5361\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level","_","skip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u8df3\u8fc7\u67d0\u4e2a\u5173\u5361\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level","_","up"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u7b49\u7ea7\u6216 RPG \u98ce\u683c\u7ecf\u9a8c\u7ea7\u522b\u63d0\u9ad8\u3002")))),(0,l.kt)("h2",{id:"\u5165\u95e8\u4e8b\u4ef6"},"\u5165\u95e8\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u5165\u95e8\u4e8b\u4ef6\u8ddf\u8e2a\u9996\u6b21\u7528\u6237\u4f53\u9a8c (FTUE)\u3002\u5206\u6790\u6807\u51c6\u5165\u95e8\u4e8b\u4ef6\u53ef\u4ee5\u76d1\u63a7\u6559\u7a0b\u7684\u6709\u6548\u6027\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u76ee\u7684")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"first","_","interaction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u7b2c\u4e00\u6b21\u6253\u5f00\u6e38\u620f\u540e\u5b8c\u6210\u4efb\u4e00\u4ea4\u4e92\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tutorial","_","start"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u542f\u52a8\u6559\u7a0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tutorial","_","step"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u901a\u8fc7\u6559\u7a0b\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u6b65\u9aa4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tutorial","_","complete"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5b8c\u6210\u6559\u7a0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tutorial","_","skip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u8df3\u8fc7\u6559\u7a0b\u3002")))),(0,l.kt)("h2",{id:"\u53c2\u4e0e\u4e8b\u4ef6"},"\u53c2\u4e0e\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u53c2\u4e0e\u4e8b\u4ef6\u6709\u52a9\u4e8e\u4e86\u89e3\u73a9\u5bb6\u662f\u5426\u53c2\u4e0e\u6e38\u620f\uff0c\u4ee5\u53ca\u4ed6\u4eec\u662f\u5426\u6267\u884c\u4e0e\u7528\u6237\u7559\u5b58\u548c\u6e38\u620f\u4f20\u64ad\u9ad8\u5ea6\u76f8\u5173\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u76ee\u7684")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"push","_","notification","_","enable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u542f\u7528\u63a8\u9001\u901a\u77e5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"push","_","notification","_","click"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u54cd\u5e94\u63a8\u9001\u7684\u6d88\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chat","_","msg","_","sent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u53d1\u9001\u804a\u5929\u6d88\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"achievement","_","unlocked"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5b8c\u6210\u4e00\u9879\u6210\u5c31\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"achievement","_","step"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u8fc8\u5411\u76ee\u6807\u6210\u5c31\u7684\u8fc7\u7a0b\u4e2d\u5b8c\u6210\u4e00\u4e2a\u91cd\u8981\u6b65\u9aa4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user","_","signup"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u8fde\u63a5\u5230\u793e\u4ea4\u7f51\u7edc\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"social","_","share"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u901a\u8fc7\u793e\u4ea4\u7f51\u7edc\u5206\u4eab\u9080\u8bf7\u6216\u793c\u7269\u7b49\u5185\u5bb9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"social","_","accept"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u63a5\u53d7\u901a\u8fc7\u793e\u4ea4\u7f51\u7edc\u5206\u4eab\u7684\u5185\u5bb9\u3002")))),(0,l.kt)("h2",{id:"\u53d8\u73b0\u4e8b\u4ef6"},"\u53d8\u73b0\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u53d8\u73b0\u4e8b\u4ef6\u8ddf\u8e2a\u6536\u5165\u548c\u6e38\u620f\u7ecf\u6d4e\u4ee5\u5e2e\u52a9\u60a8\u5e73\u8861\u8d44\u6e90\u5e76\u6539\u5584\u6536\u5165\u6765\u6e90\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u76ee\u7684")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store","_","opened"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u6253\u5f00\u5546\u5e97\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store","_","item","_","click"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u5546\u5e97\u4e2d\u9009\u62e9\u4e00\u4ef6\u5546\u54c1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iap","_","transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u82b1\u8d39\u771f\u5b9e\u8d27\u5e01\u8fdb\u884c\u5e94\u7528\u5185\u8d2d (IAP)\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item","_","acquired"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u83b7\u5f97\u8d44\u6e90\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item","_","spent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u6d88\u8017\u4e00\u4ef6\u7269\u54c1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ad","_","offer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u6709\u673a\u4f1a\u89c2\u770b\u5e7f\u544a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ad","_","start"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5f00\u59cb\u89c2\u770b\u5e7f\u544a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ad","_","complete"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u770b\u5b8c\u5e7f\u544a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ad","_","skip"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5728\u770b\u5b8c\u4e4b\u524d\u8df3\u8fc7\u5e7f\u544a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"post","_","ad","_","action"),(0,l.kt)("td",{parentName:"tr",align:null},"\u73a9\u5bb6\u5b8c\u6210\u5e7f\u544a\u63d0\u793a\u7684\u64cd\u4f5c\u3002")))),(0,l.kt)("h2",{id:"\u811a\u672c\u6807\u51c6\u4e8b\u4ef6"},"\u811a\u672c\u6807\u51c6\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u8981\u4ece\u811a\u672c\u5206\u53d1\u6807\u51c6\u4e8b\u4ef6\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u547d\u540d\u7a7a\u95f4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"using UnityEngine.Analytics;\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u4f7f\u7528 Unity Asset Store \u7684 Standard Events SDK \u65f6\uff0c\u8bf7\u6539\u7528\u547d\u540d\u7a7a\u95f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"UnityEngine.Analytics.Experimental"),"\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Analytics.AnalyticsEvent.html"},"AnalyticsEvent")," \u7c7b\u6765\u5206\u53d1\u6807\u51c6\u4e8b\u4ef6\u3002\u6bcf\u4e2a\u6807\u51c6\u4e8b\u4ef6\u90fd\u6709\u76f8\u5e94\u7684\u9759\u6001\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u8981\u53d1\u9001 game","_","start \u4e8b\u4ef6\uff0c\u8bf7\u8c03\u7528\u4ee5\u4e0b\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AnalyticsEvent.GameStart();\n")),(0,l.kt)("p",null,"\u8bb8\u591a\u6807\u51c6\u4e8b\u4ef6\u90fd\u6709\u5fc5\u9700\u53c2\u6570\uff0c\u6709\u4e00\u4e9b\u4e8b\u4ef6\u5177\u6709\u53ef\u9009\u53c2\u6570\u3002\u60a8\u8fd8\u53ef\u4ee5\u5728\u5b57\u5178\u4e2d\u6dfb\u52a0\u81ea\u5df1\u7684\u9644\u52a0\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60f3\u8981\u8ddf\u8e2a\u73a9\u5bb6\u4f7f\u7528 ScreenVisit \u4e8b\u4ef6\u8bbf\u95ee\u4e86\u54ea\u4e9b\u5c4f\u5e55\uff0c\u4f46\u4e5f\u60f3\u8ddf\u8e2a\u4ed6\u4eec\u4ece\u54ea\u4e2a\u5c4f\u5e55\u8fdb\u884c\u8bbf\u95ee\uff0c\u5219\u53ef\u4ee5\u5728\u5b57\u5178\u5bf9\u8c61\u4e2d\u4f20\u9012\u8be5\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'public static void ReportScreenVisit(string screenName, string currentScreenName)\n{\n    AnalyticsEvent.ScreenVisit(screenName, new Dictionary&lt;string, object&gt;\n    {\n        { "from_screen", currentScreenName }\n    });\n}\n')),(0,l.kt)("p",null,"\u5fc5\u9700\u53c2\u6570\u3001\u53ef\u9009\u53c2\u6570\uff08\u4ec5\u7edf\u8ba1\u60a8\u4f7f\u7528\u7684\u53c2\u6570\uff09\u548c\u9644\u52a0\u53c2\u6570\u7684\u603b\u6570\u4e0d\u5f97\u8d85\u8fc7\u5341\u4e2a\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u4e00\u4e2a\u4e8b\u4ef6\u51fd\u6570\u6709 2 \u4e2a\u5fc5\u9700\u53c2\u6570\uff0c\u5e76\u4e14\u60a8\u8bbe\u7f6e\u4e86 2 \u4e2a\u53ef\u9009\u53c2\u6570\u4e2d\u7684 1 \u4e2a\uff0c\u5219\u8fd8\u53ef\u4ee5\u5c06\u5305\u542b\u6700\u591a 7 \u4e2a\u9644\u52a0\u952e/\u503c\u5bf9\u7684\u5b57\u5178\u4f20\u9012\u7ed9\u8be5\u51fd\u6570\u3002\u5982\u679c\u5728\u540c\u4e00\u4e8b\u4ef6\u4e2d\u540c\u65f6\u8bbe\u7f6e\u4e86 2 \u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5219\u8be5\u5b57\u5178\u53ea\u80fd\u5305\u542b\u6700\u591a 6 \u4e2a\u952e/\u503c\u5bf9\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6807\u51c6\u4e8b\u4ef6\u4ee3\u7801\u793a\u4f8b")," "),(0,l.kt)("p",null,"\u4ee5\u4e0b\u7c7b\u63d0\u4f9b\u7684\u793a\u4f8b\u4f7f\u7528\u6807\u51c6 MonoBehaviour \u4e8b\u4ef6\u51fd\u6570\u6765\u5206\u53d1\u4e0e\u5f00\u59cb\u548c\u7ed3\u675f\u5173\u5361\u76f8\u5173\u7684\u6807\u51c6\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.Start.html"},"Awake")," \u51fd\u6570\u5206\u53d1 level","_","start \u4e8b\u4ef6\u3002\u672c\u793a\u4f8b\u540c\u65f6\u63d0\u4f9b\u5173\u5361\u540d\u79f0\u548c\u5173\u5361\u7d22\u5f15\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u662f\u5fc5\u9700\u53c2\u6570\u3002\u672c\u793a\u4f8b\u8fd8\u4f7f\u7528\u6765\u81ea ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SceneManagement.Scene.html"},"Scene")," \u5bf9\u8c61\u7684\u540d\u79f0\u548c\u7d22\u5f15\uff0c\u4f46\u662f\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnDestroy.html"},"OnDestroy")," \u51fd\u6570\u4f1a\u57fa\u4e8e\u5f53\u524d\u5173\u5361\u72b6\u6001\u503c\u6765\u5206\u53d1\u4e00\u4e2alevel","_","complete\u3001level","_","fail\u3001level","_","skip\u6216level","_","quit\u4e8b\u4ef6\uff08\u5728\u4e00\u4e2a\u771f\u5b9e\u6e38\u620f\u4e2d\uff0c\u8fd9\u4e2a\u503c\u5c06\u4f1a\u5728\u5f53\u524d\u5173\u5361\u7684\u5176\u4ed6\u4ee3\u7801\u4e2d\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\u91cc\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"SetLevelPlayState()")," \u51fd\u6570\u6765\u8bbe\u7f6e\uff09\u3002\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528\u4e00\u4e2a\u53eb\u201ccustomParams\u201d\u7684\u5b57\u5178\u5411\u8fd9\u4e9b\u4e8b\u4ef6\u91cc\u6dfb\u52a0\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'using System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.SceneManagement;\nusing UnityEngine.Analytics;\n\npublic class LevelEventManager : MonoBehaviour {\n    public enum LevelPlayState {InProgress, Won, Lost, Skip, Quit}\n\n    private Scene thisScene;\n    private LevelPlayState state = LevelPlayState.InProgress;\n    private int score = 0;\n    private float secondsElapsed = 0;\n    private int deaths = 0;\n\n    void Awake () {\n        thisScene = SceneManager.GetActiveScene();\n        AnalyticsEvent.LevelStart(thisScene.name, \n                                      thisScene.buildIndex);\n    }\n\n    public void SetLevelPlayState(LevelPlayState newState){\n        this.state = newState;\n    }\n\n    public void IncreaseScore(int points){\n        score += points;\n    }\n\n    public void IncrementDeaths(){\n        deaths++;\n    }\n\n    void Update(){\n        secondsElapsed += Time.deltaTime;\n    }\n\n    void OnDestroy(){\n        Dictionary&lt;string, object&gt; customParams = new Dictionary&lt;string, object&gt;();\n        customParams.Add("seconds_played", secondsElapsed);\n        customParams.Add("points", score);\n        customParams.Add("deaths", deaths);\n\n        switch(this.state){\n        case LevelPlayState.Won:\n            AnalyticsEvent.LevelComplete(thisScene.name,\n                                             thisScene.buildIndex, \n                                             customParams);\n            break;\n        case LevelPlayState.Lost:\n            AnalyticsEvent.LevelFail(thisScene.name,\n                                         thisScene.buildIndex, \n                                         customParams);\n            break;\n        case LevelPlayState.Skip:\n            AnalyticsEvent.LevelSkip(thisScene.name,\n                                         thisScene.buildIndex, \n                                         customParams);\n            break;\n        case LevelPlayState.InProgress:\n        case LevelPlayState.Quit:\n        default:\n            AnalyticsEvent.LevelQuit(thisScene.name,\n                                         thisScene.buildIndex, \n                                         customParams);\n            break;\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u672c\u793a\u4f8b\u4ec5\u4f7f\u7528\u4e00\u6b21 ",(0,l.kt)("inlineCode",{parentName:"p"},"OnDestroy()")," \u4e2d\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u5b57\u5178\u3002\u4f46\u662f\uff0c\u5728\u5206\u53d1\u9891\u7e41\u4f7f\u7528\u8fd9\u79cd\u5b57\u5178\u7684\u4e8b\u4ef6\u65f6\uff0c\u5e94\u521b\u5efa\u8be5\u5b57\u5178\u7684\u5355\u4e2a\u5b9e\u4f8b\u5e76\u91cd\u590d\u4f7f\u7528\u5b83\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u521b\u5efa\u4e00\u4e2a\u65b0\u5b57\u5178\u3002\u91cd\u590d\u4f7f\u7528\u5b57\u5178\u5bf9\u8c61\u53ef\u51cf\u5c11\u672a\u6765\u5fc5\u987b\u8fdb\u884c\u5783\u573e\u56de\u6536\u7684\u5185\u5b58\u5206\u914d\u3002\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-analytics-events/unity-analytics-event-parameters"},"Analytics \u4e8b\u4ef6\u53c2\u6570"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018\u201303\u201302 \u9875\u9762\u5df2\u53d1\u5e03"),(0,l.kt)("li",{parentName:"ul"},"\u622a\u81f3 2018\u201303\u201302\uff0c\u670d\u52a1\u4e0e Unity 5.2 \u4e4b\u540e\u7684\u7248\u672c\u517c\u5bb9\uff0c\u4f46\u662f\u7248\u672c\u517c\u5bb9\u6027\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"5.2 \u4e2d\u7684\u65b0\u529f\u80fd")))}d.isMDXComponent=!0}}]);