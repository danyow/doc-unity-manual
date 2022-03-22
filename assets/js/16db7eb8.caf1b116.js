"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22283],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"UIE-Drag-Events",title:"\u62d6\u653e\u4e8b\u4ef6",slug:"/uie-events-reference/uie-drag-events"},o="\u62d6\u653e\u4e8b\u4ef6",d={unversionedId:"uitoolkits/uielements/uie-events/uie-events-reference/UIE-Drag-Events",id:"uitoolkits/uielements/uie-events/uie-events-reference/UIE-Drag-Events",title:"\u62d6\u653e\u4e8b\u4ef6",description:"\u5728\u89c6\u89c9\u5143\u7d20\u5177\u6709\u62d6\u653e\u884c\u4e3a\u7684\u64cd\u4f5c\u671f\u95f4\u53d1\u9001\u62d6\u52a8\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u53ea\u80fd\u5728\u7f16\u8f91\u5668\u4e2d\u4f7f\u7528\u3002",source:"@site/docs/uitoolkits/uielements/uie-events/uie-events-reference/uie-drag-events.md",sourceDirName:"uitoolkits/uielements/uie-events/uie-events-reference",slug:"/uie-events-reference/uie-drag-events",permalink:"/docs/uie-events-reference/uie-drag-events",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-events/uie-events-reference/uie-drag-events.md",tags:[],version:"current",frontMatter:{id:"UIE-Drag-Events",title:"\u62d6\u653e\u4e8b\u4ef6",slug:"/uie-events-reference/uie-drag-events"},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4\u4e8b\u4ef6",permalink:"/docs/uie-events-reference/uie-command-events"},next:{title:"\u7126\u70b9\u4e8b\u4ef6",permalink:"/docs/uie-events-reference/uie-focus-events"}},u={},m=[{value:"\u4f7f\u89c6\u89c9\u5143\u7d20\u53ef\u62d6\u52a8",id:"\u4f7f\u89c6\u89c9\u5143\u7d20\u53ef\u62d6\u52a8",level:2},{value:"\u4e8b\u4ef6\u5217\u8868",id:"\u4e8b\u4ef6\u5217\u8868",level:2},{value:"DragExitedEvent",id:"dragexitedevent",level:3},{value:"DragUpdatedEvent",id:"dragupdatedevent",level:3},{value:"DragPerformEvent",id:"dragperformevent",level:3},{value:"DragEnterEvent",id:"dragenterevent",level:3},{value:"DragLeaveEvent",id:"dragleaveevent",level:3}],c={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u62d6\u653e\u4e8b\u4ef6"},"\u62d6\u653e\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u5728\u89c6\u89c9\u5143\u7d20\u5177\u6709\u62d6\u653e\u884c\u4e3a\u7684\u64cd\u4f5c\u671f\u95f4\u53d1\u9001\u62d6\u52a8\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u53ea\u80fd\u5728\u7f16\u8f91\u5668\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u8981\u5b9e\u73b0\u62d6\u653e\u529f\u80fd\uff0c\u9700\u8981\u786e\u4fdd\u89c6\u89c9\u5143\u7d20\u4f1a\u6ce8\u518c\u7279\u5b9a\u4e8b\u4ef6\u7684\u56de\u8c03\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u62d6\u52a8\u64cd\u4f5c\u7684\u89c6\u89c9\u5143\u7d20\u5206\u4e3a\u4e24\u4e2a\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u62d6\u52a8\u89c6\u89c9\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u653e\u7f6e\u89c6\u89c9\u5143\u7d20")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u53ef\u62d6\u52a8\u89c6\u89c9\u5143\u7d20\uff0c\u5c06\u5176\u62d6\u52a8\u5230\u4e00\u4e2a\u53ef\u653e\u7f6e\u89c6\u89c9\u5143\u7d20\uff0c\u7136\u540e\u91ca\u653e\u8be5\u5143\u7d20\u4ee5\u5c06\u5176\u653e\u7f6e\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u62d6\u653e\u4e8b\u4ef6\u7684\u57fa\u7c7b\u90fd\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragAndDropEventBase_1.html"},"DragAndDropEventBase"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4e8b\u4ef6")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u6d93\u6ef4")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5192\u6ce1")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53ef\u53d6\u6d88")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragExitedEvent.html"},"DragExitedEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u62d6\u653e\u8fc7\u7a0b\u7ed3\u675f\u65f6\u53d1\u9001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragUpdatedEvent.html"},"DragUpdatedEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u62d6\u52a8\u7684\u5143\u7d20\u79fb\u5230\u653e\u7f6e\u76ee\u6807\u4e0a\u65b9\u65f6\u53d1\u9001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragPerformEvent.html"},"DragPerformEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u62d6\u52a8\u7684\u5143\u7d20\u653e\u7f6e\u5230\u76ee\u6807\u4e0a\u65b9\u65f6\u53d1\u9001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragEnterEvent.html"},"DragEnterEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u62d6\u52a8\u7684\u5143\u7d20\u8fdb\u5165\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"VisualElement")," \u65f6\u53d1\u9001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragLeaveEvent.html"},"DragLeaveEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u62d6\u52a8\u7684\u5143\u7d20\u79bb\u5f00\u4e86\u5f53\u524d\u653e\u7f6e\u76ee\u6807\u65f6\u53d1\u9001\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u4f7f\u89c6\u89c9\u5143\u7d20\u53ef\u62d6\u52a8"},"\u4f7f\u89c6\u89c9\u5143\u7d20\u53ef\u62d6\u52a8"),(0,l.kt)("p",null,"\u8981\u4f7f\u89c6\u89c9\u5143\u7d20\u53ef\u62d6\u52a8\uff0c\u5fc5\u987b\u6ce8\u518c\u4ee5\u4e0b\u4e09\u79cd\u4e8b\u4ef6\u7c7b\u578b\u7684\u56de\u8c03\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.PointerDownEvent.html"},"PointerDownEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.PointerUpEvent.html"},"PointerUpEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.PointerMoveEvent.html"},"PointerMoveEvent"))),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u62d6\u52a8\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"1.\u5c06\u5176\u72b6\u6001\u8bbe\u7f6e\u4e3a\u201c\u6b63\u5728\u88ab\u62d6\u52a8\u201d\u3002 2.\u5c06\u76f8\u5e94\u6570\u636e\u6dfb\u52a0\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/DragAndDrop.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragAndDrop")),"\u3002 3.\u8c03\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/DragAndDrop.StartDrag.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragAndDrop.StartDrag()")),"\u3002 4.\u4e3a\u62d6\u52a8\u64cd\u4f5c\u63d0\u4f9b\u89c6\u89c9\u63d0\u793a\u3002\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u5728\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragPerformEvent")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragExitedEvent")," \u65f6\u5e94\u8be5\u5220\u9664\u6b64\u53cd\u9988\u3002"),(0,l.kt)("h2",{id:"\u4e8b\u4ef6\u5217\u8868"},"\u4e8b\u4ef6\u5217\u8868"),(0,l.kt)("h3",{id:"dragexitedevent"},"DragExitedEvent"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u5728\u89c6\u89c9\u5143\u7d20\u4e4b\u4e0a\u62d6\u52a8\u4efb\u4f55\u53ef\u62d6\u52a8\u7684\u5bf9\u8c61\u7136\u540e\u677e\u5f00\u9f20\u6807\u6307\u9488\u65f6\uff0c\u5c06\u53d1\u9001 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragExitedEvent.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragExitedEvent")),"\u3002\u5f53\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragExitedEvent")," \u65f6\uff0c\u5b83\u9700\u8981\u5220\u9664\u6240\u6709\u62d6\u653e\u64cd\u4f5c\u53cd\u9988\u3002"),(0,l.kt)("h3",{id:"dragupdatedevent"},"DragUpdatedEvent"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u79fb\u52a8\u53ef\u62d6\u52a8\u7684\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u6307\u9488\u79fb\u5230\u89c6\u89c9\u5143\u7d20\u4e4b\u4e0a\uff0c\u5219\u4f1a\u53d1\u9001 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragUpdatedEvent.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragUpdatedEvent")),"\u3002"),(0,l.kt)("p",null,"\u5f53\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragUpdatedEvent")," \u65f6\uff0c\u5b83\u9700\u8981\u66f4\u65b0\u653e\u7f6e\u53cd\u9988\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06\u62d6\u52a8\u5bf9\u8c61\u7684\u201c\u865a\u5f71\u201d\u79fb\u5230\u9f20\u6807\u6307\u9488\u4e0b\u6765\u8fbe\u5230\u6b64\u76ee\u7684\u3002"),(0,l.kt)("p",null,"\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u8fd8\u5e94\u8be5\u68c0\u67e5 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/DragAndDrop.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragAndDrop"))," \u5c5e\u6027\uff0c\u5e76\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"DragAndDrop.visualMode")," \u6765\u6307\u793a\u653e\u7f6e\u64cd\u4f5c\u7684\u6548\u679c\u3002\u4f8b\u5982\uff0c\u653e\u7f6e\u64cd\u4f5c\u53ef\u4ee5\u521b\u5efa\u65b0\u5bf9\u8c61\u3001\u79fb\u52a8\u73b0\u6709\u5bf9\u8c61\u6216\u62d2\u7edd\u653e\u7f6e\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"dragperformevent"},"DragPerformEvent"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u62d6\u52a8\u4efb\u4f55\u53ef\u62d6\u52a8\u7684\u5bf9\u8c61\u5e76\u5728\u89c6\u89c9\u5143\u7d20\u4e4b\u4e0a\u677e\u5f00\u9f20\u6807\u6307\u9488\u65f6\uff0c\u5c06\u53d1\u9001 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragPerformEvent.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragPerformEvent")),"\u3002\u4ec5\u5728\u89c6\u89c9\u5143\u7d20\u5c06 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/DragAndDrop-visualMode.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragAndDrop.visualMode"))," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"DragAndDropVisualMode.None")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragAndDropVisualMode.Rejected")," \u4ee5\u5916\u7684\u9009\u9879\u6765\u6307\u793a\u5b83\u53ef\u4ee5\u63a5\u53d7\u62d6\u52a8\u5bf9\u8c61\u65f6\uff0c\u624d\u4f1a\u53d1\u751f\u6b64\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u5f53\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragPerformEvent")," \u65f6\uff0c\u5b83\u9700\u8981\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragAndDrop.objectReferences"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"DragAndDrop.paths")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragAndDrop.GetGenericData()")," \u4e2d\u5b58\u50a8\u7684\u62d6\u52a8\u5bf9\u8c61\u6267\u884c\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5b83\u53ef\u80fd\u4f1a\u5728\u7528\u6237\u653e\u7f6e\u5bf9\u8c61\u7684\u4f4d\u7f6e\u6dfb\u52a0\u65b0\u7684\u89c6\u89c9\u5143\u7d20\u3002"),(0,l.kt)("h3",{id:"dragenterevent"},"DragEnterEvent"),(0,l.kt)("p",null,"\u5728\u62d6\u52a8\u64cd\u4f5c\u4e2d\uff0c\u5f53\u6307\u9488\u8fdb\u5165\u89c6\u89c9\u5143\u7d20\uff0c\u5219\u4f1a\u53d1\u9001 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragEnterEvent.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragEnterEvent")),"\u3002"),(0,l.kt)("p",null,"\u5f53\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragEnterEvent")," \u65f6\uff0c\u5b83\u9700\u8981\u63d0\u4f9b\u53cd\u9988\uff0c\u8ba9\u7528\u6237\u77e5\u9053\u5b83\u6216\u5176\u5b50\u9879\u4e4b\u4e00\u662f\u6f5c\u5728\u653e\u7f6e\u64cd\u4f5c\u7684\u76ee\u6807\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5c06 ",(0,l.kt)("a",{parentName:"p",href:"/docs/uie-uss"},"USS")," \u7c7b\u6dfb\u52a0\u5230\u76ee\u6807\u5143\u7d20\u5e76\u5728\u9f20\u6807\u6307\u9488\u4e0b\u663e\u793a\u62d6\u52a8\u5bf9\u8c61\u7684\u201c\u865a\u5f71\u201d\u3002"),(0,l.kt)("h3",{id:"dragleaveevent"},"DragLeaveEvent"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u79fb\u52a8\u53ef\u62d6\u52a8\u7684\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u6307\u9488\u79bb\u5f00\u89c6\u89c9\u5143\u7d20\uff0c\u5219\u4f1a\u53d1\u9001 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DragLeaveEvent.html"},(0,l.kt)("inlineCode",{parentName:"a"},"DragLeaveEvent")),"\u3002"),(0,l.kt)("p",null,"\u5f53\u653e\u7f6e\u533a\u57df\u89c6\u89c9\u5143\u7d20\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragLeaveEvent")," \u65f6\uff0c\u5b83\u9700\u8981\u505c\u6b62\u63d0\u4f9b\u653e\u7f6e\u53cd\u9988\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5728\u76ee\u6807\u5143\u7d20\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"DragEnterEvent")," \u65f6\u5220\u9664\u6240\u6dfb\u52a0\u7684 USS \u7c7b\u5e76\u4e0d\u518d\u663e\u793a\u62d6\u52a8\u5bf9\u8c61\u7684\u201c\u865a\u5f71\u201d\u3002"))}s.isMDXComponent=!0}}]);