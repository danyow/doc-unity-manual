"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14794],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),o=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(k,l(l({ref:t},s),{},{components:n})):i.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81623:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],p={id:"UIE-Events-Dispatching",title:"Dispatching events",slug:"/uie-events/uie-events-dispatching"},u="Dispatching events",o={unversionedId:"uitoolkits/uielements/uie-events/UIE-Events-Dispatching",id:"uitoolkits/uielements/uie-events/UIE-Events-Dispatching",title:"Dispatching events",description:"UI \u5de5\u5177\u5305\u4e8b\u4ef6\u7cfb\u7edf\u76d1\u542c\u6765\u81ea\u64cd\u4f5c\u7cfb\u7edf\u6216\u811a\u672c\u7684\u4e8b\u4ef6\uff0c\u5e76\u4f7f\u7528 EventDispatcher \u5c06\u8fd9\u4e9b\u4e8b\u4ef6\u5206\u53d1\u5230\u89c6\u89c9\u5143\u7d20\u3002\u4e8b\u4ef6\u5206\u53d1\u7a0b\u5e8f\u4e3a\u53d1\u9001\u7684\u6bcf\u4e2a\u4e8b\u4ef6\u786e\u5b9a\u76f8\u5e94\u5206\u53d1\u7b56\u7565\u3002\u4e00\u65e6\u786e\u5b9a\u540e\uff0c\u5206\u53d1\u7a0b\u5e8f\u5c31\u4f1a\u6267\u884c\u8be5\u7b56\u7565\u3002",source:"@site/docs/uitoolkits/uielements/uie-events/uie-events-dispatching.md",sourceDirName:"uitoolkits/uielements/uie-events",slug:"/uie-events/uie-events-dispatching",permalink:"/doc-unity-manual/docs/uie-events/uie-events-dispatching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-events/uie-events-dispatching.md",tags:[],version:"current",frontMatter:{id:"UIE-Events-Dispatching",title:"Dispatching events",slug:"/uie-events/uie-events-dispatching"},sidebar:"tutorialSidebar",previous:{title:"Event system",permalink:"/doc-unity-manual/docs/uie-events"},next:{title:"\u5904\u7406\u4e8b\u4ef6",permalink:"/doc-unity-manual/docs/uie-events/uie-events-handling"}},s={},c=[{value:"\u4e8b\u4ef6\u7c7b\u578b\u7684\u5206\u53d1\u884c\u4e3a",id:"\u4e8b\u4ef6\u7c7b\u578b\u7684\u5206\u53d1\u884c\u4e3a",level:2},{value:"\u4e8b\u4ef6\u4f20\u64ad",id:"\u4e8b\u4ef6\u4f20\u64ad",level:2},{value:"\u4e8b\u4ef6\u76ee\u6807",id:"\u4e8b\u4ef6\u76ee\u6807",level:2},{value:"\u62fe\u53d6\u6a21\u5f0f\u548c\u81ea\u5b9a\u4e49\u5f62\u72b6",id:"\u62fe\u53d6\u6a21\u5f0f\u548c\u81ea\u5b9a\u4e49\u5f62\u72b6",level:3},{value:"\u6355\u83b7\u9f20\u6807",id:"\u6355\u83b7\u9f20\u6807",level:3},{value:"\u7126\u70b9\u73af\u548c Tab \u987a\u5e8f",id:"\u7126\u70b9\u73af\u548c-tab-\u987a\u5e8f",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dispatching-events"},"Dispatching events"),(0,r.kt)("p",null,"UI \u5de5\u5177\u5305\u4e8b\u4ef6\u7cfb\u7edf\u76d1\u542c\u6765\u81ea\u64cd\u4f5c\u7cfb\u7edf\u6216\u811a\u672c\u7684\u4e8b\u4ef6\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.EventDispatcher.html"},"EventDispatcher")," \u5c06\u8fd9\u4e9b\u4e8b\u4ef6\u5206\u53d1\u5230\u89c6\u89c9\u5143\u7d20\u3002\u4e8b\u4ef6\u5206\u53d1\u7a0b\u5e8f\u4e3a\u53d1\u9001\u7684\u6bcf\u4e2a\u4e8b\u4ef6\u786e\u5b9a\u76f8\u5e94\u5206\u53d1\u7b56\u7565\u3002\u4e00\u65e6\u786e\u5b9a\u540e\uff0c\u5206\u53d1\u7a0b\u5e8f\u5c31\u4f1a\u6267\u884c\u8be5\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u89c6\u89c9\u5143\u7d20\u5b9e\u73b0\u4e86\u51e0\u4e2a\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u989d\u5916\u4e8b\u4ef6\u7684\u521b\u5efa\u548c\u6267\u884c\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseMoveEvent")," \u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u989d\u5916\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseEnterEvent")," \u548c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseLeaveEvent"),"\u3002\u8fd9\u4e9b\u4e8b\u4ef6\u8fdb\u5165\u961f\u5217\u5e76\u5728\u5f53\u524d\u4e8b\u4ef6\u4e4b\u540e\u5904\u7406\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"MouseMoveEvent")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseEnterEvent")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseLeaveEvent")," \u4e8b\u4ef6\u4e4b\u524d\u5b8c\u6210\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u7c7b\u578b\u7684\u5206\u53d1\u884c\u4e3a"},"\u4e8b\u4ef6\u7c7b\u578b\u7684\u5206\u53d1\u884c\u4e3a"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4e8b\u4ef6\u7c7b\u578b\u90fd\u6709\u81ea\u5df1\u7684\u5206\u53d1\u884c\u4e3a\u3002\u6bcf\u79cd\u4e8b\u4ef6\u7c7b\u578b\u7684\u884c\u4e3a\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6d93\u6ef4")," \uff1a\u5728\u6d93\u6ef4\u9636\u6bb5\u53d1\u9001\u5230\u5143\u7d20\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5192\u6ce1")," \uff1a\u5728\u5192\u6ce1\u9636\u6bb5\u53d1\u9001\u5230\u5143\u7d20\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u53d6\u6d88")," \uff1a\u6b64\u7c7b\u4e8b\u4ef6\u53ef\u4ee5\u53d6\u6d88\u3001\u505c\u6b62\u6216\u963b\u6b62\u9ed8\u8ba4\u64cd\u4f5c\u7684\u6267\u884c\u3002")),(0,r.kt)("p",null,"\u6709\u5173\u6bcf\u79cd\u4e8b\u4ef6\u7c7b\u578b\u7684\u5206\u53d1\u884c\u4e3a\u7684\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uie-events-reference"},"\u4e8b\u4ef6\u53c2\u8003\u9875\u9762")," \u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u4f20\u64ad"},"\u4e8b\u4ef6\u4f20\u64ad"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u5206\u53d1\u7a0b\u5e8f\u9009\u62e9\u4e8b\u4ef6\u76ee\u6807\u540e\uff0c\u4f1a\u8ba1\u7b97\u4e8b\u4ef6\u7684\u4f20\u64ad\u8def\u5f84\u3002\u4f20\u64ad\u8def\u5f84\u662f\u63a5\u6536\u4e8b\u4ef6\u7684\u89c6\u89c9\u5143\u7d20\u7684\u6709\u5e8f\u5217\u8868\u3002\u4f20\u64ad\u8def\u5f84\u6309\u4ee5\u4e0b\u987a\u5e8f\u53d1\u751f\uff1a"),(0,r.kt)("p",null,"1.\u8def\u5f84\u4ece\u89c6\u89c9\u5143\u7d20\u6811\u7684\u6839\u90e8\u5f00\u59cb\uff0c\u5e76\u671d\u7740\u76ee\u6807\u4e0b\u964d\u3002\u6b64\u9636\u6bb5\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u6d93\u6ef4 (trickle-down) \u9636\u6bb5")," \u3002 2.\u4e8b\u4ef6\u76ee\u6807\u63a5\u6536\u4e8b\u4ef6\u3002 3.\u7136\u540e\u4e8b\u4ef6\u6cbf\u7740\u6811\u4e0a\u5347\u5230\u6839\u3002\u6b64\u9636\u6bb5\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u5192\u6ce1 (bubble-up) \u9636\u6bb5"),"  \u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIElementsEvents.png",alt:"\u4f20\u64ad\u8def\u5f84"})),(0,r.kt)("p",null,"\u4f20\u64ad\u8def\u5f84"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u4e8b\u4ef6\u7c7b\u578b\u5c06\u6cbf\u7740\u4f20\u64ad\u8def\u5f84\u53d1\u9001\u5230\u6240\u6709\u5143\u7d20\u3002\u67d0\u4e9b\u4e8b\u4ef6\u7c7b\u578b\u8df3\u8fc7\u5192\u6ce1\u9636\u6bb5\uff0c\u67d0\u4e9b\u4e8b\u4ef6\u7c7b\u578b\u4ec5\u53d1\u9001\u5230\u4e8b\u4ef6\u76ee\u6807\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5143\u7d20\u88ab\u9690\u85cf\u6216\u7981\u7528\uff0c\u5b83\u5c06\u4e0d\u4f1a\u63a5\u6536\u4e8b\u4ef6\u3002\u4e8b\u4ef6\u4ecd\u4f1a\u4f20\u64ad\u5230\u88ab\u9690\u85cf\u6216\u7981\u7528\u7684\u5143\u7d20\u7684\u7956\u5148\u548c\u540e\u4ee3\u3002"),(0,r.kt)("p",null,"\u5728\u4e8b\u4ef6\u6cbf\u7740\u4f20\u64ad\u8def\u5f84\u884c\u8fdb\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Event.currentTarget")," \u66f4\u65b0\u4e3a\u5f53\u524d\u6b63\u5728\u5904\u7406\u8be5\u4e8b\u4ef6\u7684\u5143\u7d20\u3002\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u6709\u4e24\u4e2a\u5c5e\u6027\u8bb0\u5f55\u4e86\u5206\u53d1\u884c\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Event.currentTarget")," \u662f\u6ce8\u518c\u56de\u8c03\u7684\u89c6\u89c9\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Event.target")," \u662f\u53d1\u751f\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u4f8b\u5982\u9f20\u6807\u6b63\u4e0b\u65b9\u7684\u5143\u7d20\u3002")),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u76ee\u6807"},"\u4e8b\u4ef6\u76ee\u6807"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u7684\u76ee\u6807\u53d6\u51b3\u4e8e\u4e8b\u4ef6\u7c7b\u578b\u3002\u5bf9\u4e8e\u9f20\u6807\u4e8b\u4ef6\uff0c\u76ee\u6807\u6700\u5e38\u89c1\u7684\u662f\u76f4\u63a5\u4f4d\u4e8e\u9f20\u6807\u4e0b\u65b9\u6700\u4e0a\u5c42\u7684\u53ef\u9009\u62e9\u5143\u7d20\u3002\u5bf9\u4e8e\u952e\u76d8\u4e8b\u4ef6\uff0c\u76ee\u6807\u662f\u5f53\u524d\u83b7\u5f97\u7126\u70b9\u7684\u5143\u7d20\u3002"),(0,r.kt)("p",null,"UI \u5de5\u5177\u5305\u4e8b\u4ef6\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u5c5e\u6027\uff0c\u5305\u542b\u5bf9\u53d1\u751f\u4e8b\u4ef6\u7684\u5143\u7d20\u7684\u5f15\u7528\u3002\u5bf9\u4e8e\u5927\u591a\u6570\u6e90\u81ea\u64cd\u4f5c\u7cfb\u7edf\u7684\u4e8b\u4ef6\uff0c\u5206\u53d1\u8fc7\u7a0b\u4f1a\u81ea\u52a8\u627e\u5230\u4e8b\u4ef6\u76ee\u6807\u3002"),(0,r.kt)("p",null,"\u76ee\u6807\u5143\u7d20\u5b58\u50a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBase.target")," \u4e2d\u5e76\u4e14\u5728\u5206\u53d1\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u6539\u53d8\u3002\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.currentTarget")," \u4f1a\u66f4\u65b0\u4e3a\u5f53\u524d\u6b63\u5728\u5904\u7406\u8be5\u4e8b\u4ef6\u7684\u89c6\u89c9\u5143\u7d20\u3002"),(0,r.kt)("h3",{id:"\u62fe\u53d6\u6a21\u5f0f\u548c\u81ea\u5b9a\u4e49\u5f62\u72b6"},"\u62fe\u53d6\u6a21\u5f0f\u548c\u81ea\u5b9a\u4e49\u5f62\u72b6"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u9f20\u6807\u4e8b\u4ef6\u4f7f\u7528\u62fe\u53d6\u6a21\u5f0f\u6765\u786e\u5b9a\u5176\u76ee\u6807\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"VisualElement")," \u7c7b\u6709\u4e00\u4e2a\u652f\u6301\u4ee5\u4e0b\u503c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pickingMode")," \u5c5e\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PickingMode.Position"),"\uff08\u9ed8\u8ba4\u503c\uff09\uff1a\u6839\u636e\u4f4d\u7f6e\u77e9\u5f62\u6267\u884c\u62fe\u53d6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PickingMode.Ignore"),"\uff1a\u963b\u6b62\u56e0\u9f20\u6807\u4e8b\u4ef6\u800c\u62fe\u53d6\u3002")),(0,r.kt)("p",null,"\u53ef\u4ee5\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"VisualElement.ContainsPoint()")," \u65b9\u6cd5\u6765\u6267\u884c\u81ea\u5b9a\u4e49\u7684\u4ea4\u96c6\u903b\u8f91\u3002"),(0,r.kt)("h3",{id:"\u6355\u83b7\u9f20\u6807"},"\u6355\u83b7\u9f20\u6807"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseDownEvent")," \u4e4b\u540e\uff0c\u67d0\u4e9b\u5143\u7d20\u5fc5\u987b\u6355\u83b7\u6307\u9488\u4f4d\u7f6e\uff0c\u4ee5\u786e\u4fdd\u80fd\u63a5\u6536\u6240\u6709\u540e\u7eed\u7684\u9f20\u6807\u4e8b\u4ef6\uff0c\u5373\u4f7f\u5149\u6807\u4e0d\u518d\u60ac\u505c\u5728\u8be5\u5143\u7d20\u4e0a\u3002\u4f8b\u5982\uff0c\u5728\u5355\u51fb\u6309\u94ae\u3001\u6ed1\u52a8\u6761\u6216\u6eda\u52a8\u6761\u65f6\u5c31\u5c5e\u4e8e\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"\u8981\u6355\u83b7\u9f20\u6807\uff0c\u8bf7\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"element.CaptureMouse()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseCaptureController.CaptureMouse()"),"\u3002"),(0,r.kt)("p",null,"\u8981\u91ca\u653e\u9f20\u6807\uff0c\u8bf7\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseCaptureController.ReleaseMouse()"),"\u3002\u5982\u679c\u5728\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"CaptureMouse()")," \u65f6\u5df2\u7ecf\u6709\u53e6\u4e00\u4e2a\u5143\u7d20\u6b63\u5728\u6355\u83b7\u9f20\u6807\uff0c\u8be5\u5143\u7d20\u5c06\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseCaptureOutEvent")," \u5e76\u5931\u53bb\u6b64\u6355\u83b7\u3002"),(0,r.kt)("p",null,"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4efb\u4f55\u65f6\u5019\u90fd\u53ea\u80fd\u6709\u4e00\u4e2a\u5143\u7d20\u5177\u6709\u6355\u83b7\u3002\u5f53\u5143\u7d20\u5177\u6709\u6355\u83b7\u65f6\uff0c\u8be5\u5143\u7d20\u4fbf\u662f\u9664\u9f20\u6807\u6eda\u8f6e\u4e8b\u4ef6\u4e4b\u5916\u7684\u6240\u6709\u540e\u7eed\u9f20\u6807\u4e8b\u4ef6\u7684\u76ee\u6807\u3002\u8fd9\u4ec5\u9002\u7528\u4e8e\u5c1a\u672a\u8bbe\u7f6e\u76ee\u6807\u5e76\u4f9d\u8d56\u5206\u53d1\u8fc7\u7a0b\u6765\u786e\u5b9a\u76ee\u6807\u7684\u9f20\u6807\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uie-events-reference/uie-capture-events"},"\u6355\u83b7\u4e8b\u4ef6"),"\u3002"),(0,r.kt)("h3",{id:"\u7126\u70b9\u73af\u548c-tab-\u987a\u5e8f"},"\u7126\u70b9\u73af\u548c Tab \u987a\u5e8f"),(0,r.kt)("p",null,"\u6bcf\u4e2a UI \u5de5\u5177\u5305\u9762\u677f\u90fd\u6709\u4e00\u4e2a\u7126\u70b9\u73af\uff0c\u7528\u4e8e\u5b9a\u4e49\u5143\u7d20\u7684\u7126\u70b9\u987a\u5e8f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u89c6\u89c9\u5143\u7d20\u6811\u6267\u884c\u6df1\u5ea6\u4f18\u5148\u641c\u7d22 (DFS) \u786e\u5b9a\u5143\u7d20\u7684\u7126\u70b9\u987a\u5e8f\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u6240\u793a\u7684\u6811\u7684\u7126\u70b9\u987a\u5e8f\u5c06\u662f F\u3001B\u3001A\u3001D\u3001C\u3001E\u3001G\u3001I\u3001H\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/focus-order.png",alt:"\u7126\u70b9\u987a\u5e8f"})),(0,r.kt)("p",null,"\u7126\u70b9\u987a\u5e8f"),(0,r.kt)("p",null,"\u6709\u4e9b\u4e8b\u4ef6\u4f7f\u7528\u7126\u70b9\u987a\u5e8f\u6765\u786e\u5b9a\u54ea\u4e2a\u5143\u7d20\u83b7\u5f97\u7126\u70b9\u3002\u4f8b\u5982\uff0c\u952e\u76d8\u4e8b\u4ef6\u7684\u76ee\u6807\u662f\u5f53\u524d\u83b7\u5f97\u7126\u70b9\u7684\u5143\u7d20\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"focusable")," \u5c5e\u6027\u53ef\u63a7\u5236\u5143\u7d20\u7684\u53ef\u805a\u7126\u6027\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"VisualElements")," \u65e0\u6cd5\u805a\u7126\uff0c\u4f46\u662f\u67d0\u4e9b\u5b50\u7c7b\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"TextField"),"\uff09\u9ed8\u8ba4\u53ef\u805a\u7126\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex")," \u5c5e\u6027\u53ef\u6309\u5982\u4e0b\u65b9\u5f0f\u63a7\u5236\u7126\u70b9\u987a\u5e8f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex")," \u9ed8\u8ba4\u503c\u4e3a 0\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"tabIndex")," \u4e3a\u8d1f\uff0c\u5219\u65e0\u6cd5\u7528 Tab \u952e\u5bfc\u822a\u5230\u8be5\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"tabIndex")," \u4e3a\u96f6\uff0c\u8be5\u5143\u7d20\u4fdd\u6301\u9ed8\u8ba4\u7684 Tab \u987a\u5e8f\uff08\u901a\u8fc7\u7126\u70b9\u73af\u7b97\u6cd5\u786e\u5b9a\u7684\u987a\u5e8f\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"tabIndex")," \u4e3a\u6b63\uff0c\u8be5\u5143\u7d20\u5c06\u7f6e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"tabIndex")," \u4e3a\u96f6 (",(0,r.kt)("inlineCode",{parentName:"li"},"tabIndex = 0"),") \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"tabIndex")," \u66f4\u5c0f\u7684\u5176\u4ed6\u5143\u7d20\u4e4b\u524d\u3002")))}m.isMDXComponent=!0}}]);