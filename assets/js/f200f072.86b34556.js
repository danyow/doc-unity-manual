"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79225],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||k[s]||i;return n?l.createElement(m,r(r({ref:t},c),{},{components:n})):l.createElement(m,r({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var l=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],u={id:"UIE-Events-Handling",title:"\u5904\u7406\u4e8b\u4ef6",slug:"/uie-events/uie-events-handling"},o="\u5904\u7406\u4e8b\u4ef6",p={unversionedId:"uitoolkits/uielements/uie-events/UIE-Events-Handling",id:"uitoolkits/uielements/uie-events/UIE-Events-Handling",title:"\u5904\u7406\u4e8b\u4ef6",description:"\u4e8b\u4ef6\u5904\u7406\u987a\u5e8f",source:"@site/docs/uitoolkits/uielements/uie-events/uie-events-handling.md",sourceDirName:"uitoolkits/uielements/uie-events",slug:"/uie-events/uie-events-handling",permalink:"/docs/uie-events/uie-events-handling",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-events/uie-events-handling.md",tags:[],version:"current",frontMatter:{id:"UIE-Events-Handling",title:"\u5904\u7406\u4e8b\u4ef6",slug:"/uie-events/uie-events-handling"},sidebar:"tutorialSidebar",previous:{title:"Dispatching events",permalink:"/docs/uie-events/uie-events-dispatching"},next:{title:"\u4e8b\u4ef6\u53c2\u8003",permalink:"/docs/uie-events-reference"}},c={},k=[{value:"\u4e8b\u4ef6\u5904\u7406\u987a\u5e8f",id:"\u4e8b\u4ef6\u5904\u7406\u987a\u5e8f",level:2},{value:"\u5bf9\u4e8b\u4ef6\u56de\u8c03\u8fdb\u884c\u6ce8\u518c",id:"\u5bf9\u4e8b\u4ef6\u56de\u8c03\u8fdb\u884c\u6ce8\u518c",level:2},{value:"\u4e3a\u4e8b\u4ef6\u56de\u8c03\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6570\u636e",id:"\u4e3a\u4e8b\u4ef6\u56de\u8c03\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6570\u636e",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u63a7\u4ef6\u54cd\u5e94\u4e8b\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u63a7\u4ef6\u54cd\u5e94\u4e8b\u4ef6",level:2},{value:"\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c",id:"\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c",level:3},{value:"\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u6700\u4f73\u5b9e\u8df5",id:"\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5b9e\u65bd\u884c\u4e3a",id:"\u5b9e\u65bd\u884c\u4e3a",level:3},{value:"\u7c7b\u7684\u9ed8\u8ba4\u64cd\u4f5c",id:"\u7c7b\u7684\u9ed8\u8ba4\u64cd\u4f5c",level:3},{value:"\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u5e76\u53d6\u6d88\u9ed8\u8ba4\u64cd\u4f5c",id:"\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u5e76\u53d6\u6d88\u9ed8\u8ba4\u64cd\u4f5c",level:3},{value:"<code>StopImmediatePropagation()</code>",id:"stopimmediatepropagation",level:4},{value:"<code>StopPropagation()</code>",id:"stoppropagation",level:4},{value:"<code>PreventDefaultAction()</code>",id:"preventdefaultaction",level:4}],d={toc:k};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5904\u7406\u4e8b\u4ef6"},"\u5904\u7406\u4e8b\u4ef6"),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u5904\u7406\u987a\u5e8f"},"\u4e8b\u4ef6\u5904\u7406\u987a\u5e8f"),(0,i.kt)("p",null,"UI \u5de5\u5177\u5305\u4e2d\u7684\u4e8b\u4ef6\u7c7b\u4f3c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"},"HTML \u4e8b\u4ef6")," \u3002\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u5c06\u6cbf\u7740\u89c6\u89c9\u5143\u7d20\u6811\u4e2d\u7684\u4f20\u64ad\u8def\u5f84\u53d1\u9001\u4e8b\u4ef6\u3002\u4e8b\u4ef6\u4e0d\u4ec5\u53d1\u9001\u5230\u76ee\u6807\u89c6\u89c9\u5143\u7d20\uff0c\u800c\u4e14\u53d1\u9001\u5230\u4f20\u64ad\u8def\u5f84\u4e2d\u7684\u6240\u6709\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"1.\u5728\u4ece\u6839\u5143\u7d20\u5f80\u4e0b\u5230\u4e8b\u4ef6\u76ee\u6807\u7236\u7ea7\u7684\u5143\u7d20\u4e0a\u6267\u884c\u4e8b\u4ef6\u56de\u8c03\u3002\u8fd9\u662f\u5206\u53d1\u8fc7\u7a0b\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u6d93\u6ef4\u9636\u6bb5")," \u3002 2.\u5728\u4e8b\u4ef6\u76ee\u6807\u4e0a\u6267\u884c\u4e8b\u4ef6\u56de\u8c03\u3002\u8fd9\u662f\u5206\u53d1\u8fc7\u7a0b\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u76ee\u6807\u9636\u6bb5")," \u3002 3.\u5728\u4e8b\u4ef6\u76ee\u6807\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActionAtTarget()"),"\u3002 4.\u4ece\u4e8b\u4ef6\u76ee\u6807\u7236\u7ea7\u5f80\u4e0a\u5230\u76f4\u5230\u6839\u90e8\u7684\u5143\u7d20\u4e0a\u6267\u884c\u4e8b\u4ef6\u56de\u8c03\u3002\u8fd9\u662f\u5206\u53d1\u8fc7\u7a0b\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u5192\u6ce1\u9636\u6bb5")," \u3002 5.\u5728\u4e8b\u4ef6\u76ee\u6807\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultAction()"),"\u3002"),(0,i.kt)("p",null,"\u5728\u6cbf\u7740\u4f20\u64ad\u8def\u5f84\u53d1\u9001\u4e8b\u4ef6\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Event.currentTarget")," \u5c5e\u6027\u66f4\u65b0\u4e3a\u5f53\u524d\u6b63\u5728\u5904\u7406\u4e8b\u4ef6\u7684\u5143\u7d20\u3002\u5728\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Event.currentTarget")," \u662f\u56de\u8c03\u6ce8\u518c\u7684\u89c6\u89c9\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Event.target")," \u662f\u539f\u59cb\u4e8b\u4ef6\u53d1\u751f\u7684\u89c6\u89c9\u5143\u7d20\u3002")),(0,i.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs/uie-events/uie-events-dispatching"},"\u5206\u53d1\u4e8b\u4ef6"),"\u3002"),(0,i.kt)("h2",{id:"\u5bf9\u4e8b\u4ef6\u56de\u8c03\u8fdb\u884c\u6ce8\u518c"},"\u5bf9\u4e8b\u4ef6\u56de\u8c03\u8fdb\u884c\u6ce8\u518c"),(0,i.kt)("p",null,"\u901a\u8fc7\u6ce8\u518c\u4e8b\u4ef6\u56de\u8c03\uff0c\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u73b0\u6709\u7c7b\u7684\u5355\u4e2a\u5b9e\u4f8b\u7684\u884c\u4e3a\uff0c\u4f8b\u5982\u5bf9\u9f20\u6807\u5355\u51fb\u6587\u672c\u6807\u7b7e\u505a\u51fa\u53cd\u5e94\u3002"),(0,i.kt)("p",null,"\u4f20\u64ad\u8def\u5f84\u4e0a\u7684\u6bcf\u4e2a\u5143\u7d20\uff08\u76ee\u6807\u9664\u5916\uff09\u5bf9\u4e00\u4e2a\u4e8b\u4ef6\u53ef\u4ee5\u63a5\u6536\u4e24\u6b21\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u6d93\u6ef4\u9636\u6bb5\u4e00\u6b21\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5192\u6ce1\u9636\u6bb5\u4e00\u6b21\u3002")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6ce8\u518c\u7684\u56de\u8c03\u4f1a\u5728\u76ee\u6807\u9636\u6bb5\u548c\u5192\u6ce1\u9636\u6bb5\u6267\u884c\u3002\u6b64\u9ed8\u8ba4\u884c\u4e3a\u53ef\u786e\u4fdd\u7236\u5143\u7d20\u5728\u5176\u5b50\u5143\u7d20\u4e4b\u540e\u505a\u51fa\u53cd\u5e94\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u7236\u5143\u7d20\u5728\u5176\u5b50\u5143\u7d20\u4e4b\u524d\u505a\u51fa\u53cd\u5e94\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"TrickleDown.TrickleDown")," \u9009\u9879\u6ce8\u518c\u56de\u8c03\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u4e3a\u6d93\u6ef4\u9636\u6bb5\u6ce8\u518c\u56de\u8c03\nmyElement.RegisterCallback&lt;MouseDownEvent&gt;(MyCallback, TrickleDown.TrickleDown);\n")),(0,i.kt)("p",null,"\u6b64\u4ee3\u7801\u5c06\u901a\u77e5\u5206\u53d1\u7a0b\u5e8f\u5728\u76ee\u6807\u9636\u6bb5\u548c\u6d93\u6ef4\u9636\u6bb5\u6267\u884c\u56de\u8c03\u3002"),(0,i.kt)("p",null,"\u8981\u5c06\u81ea\u5b9a\u4e49\u884c\u4e3a\u6dfb\u52a0\u5230\u7279\u5b9a\u7684\u89c6\u89c9\u5143\u7d20\uff0c\u60a8\u5fc5\u987b\u5728\u8be5\u5143\u7d20\u4e0a\u6ce8\u518c\u4e8b\u4ef6\u56de\u8c03\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4ee3\u7801\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseDownEvent")," \u6ce8\u518c\u4e00\u4e2a\u56de\u8c03\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u5bf9\u9f20\u6807\u6309\u4e0b\u4e8b\u4ef6\u6ce8\u518c\u56de\u8c03\nmyElement.RegisterCallback&lt;MouseDownEvent&gt;(MyCallback);\n")),(0,i.kt)("p",null,"\u56de\u8c03\u7b7e\u540d\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void MyCallback(MouseDownEvent evt) { /* ...*/ }\n")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u6ce8\u518c\u591a\u4e2a\u56de\u8c03\u3002\u540c\u4e00\u4e8b\u4ef6\u7684\u540c\u4e00\u56de\u8c03\u51fd\u6570\u5728\u4f20\u64ad\u9636\u6bb5\u53ea\u80fd\u6ce8\u518c\u4e00\u6b21\u3002\u8981\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"VisualElement")," \u4e2d\u79fb\u9664\u56de\u8c03\uff0c\u5219\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"myElement.UnregisterCallback()")," \u65b9\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u4e8b\u4ef6\u56de\u8c03\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6570\u636e"},"\u4e3a\u4e8b\u4ef6\u56de\u8c03\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6570\u636e"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u6570\u636e\u968f\u540c\u56de\u8c03\u4e00\u8d77\u53d1\u9001\u5230\u4e8b\u4ef6\u3002\u8981\u9644\u52a0\u81ea\u5b9a\u4e49\u6570\u636e\uff0c\u60a8\u5fc5\u987b\u901a\u8fc7\u6269\u5c55\u8be5\u8c03\u7528\u7684\u65b9\u5f0f\u6765\u6ce8\u518c\u56de\u8c03\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseDownEvent")," \u6ce8\u518c\u4e00\u4e2a\u56de\u8c03\u5e76\u5c06\u81ea\u5b9a\u4e49\u6570\u636e\u53d1\u9001\u5230\u56de\u8c03\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//\u5c06\u7528\u6237\u6570\u636e\u4e00\u8d77\u53d1\u9001\u5230\u56de\u8c03\nmyElement.RegisterCallback&lt;MouseDownEvent, MyType&gt;(MyCallbackWithData, myData);\n")),(0,i.kt)("p",null,"\u56de\u8c03\u51fd\u6570\u5e94\u8fd4\u56de\u6b64\u7b7e\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void MyCallbackWithData(MouseDownEvent evt, MyType data) { /* ...*/ }\n")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u63a7\u4ef6\u54cd\u5e94\u4e8b\u4ef6"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u63a7\u4ef6\u54cd\u5e94\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u8981\u5b9e\u73b0\u81ea\u5b9a\u4e49\u63a7\u4ef6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u54cd\u5e94 UI \u5de5\u5177\u5305\u4e8b\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u4e8b\u4ef6\u56de\u8c03\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c\u3002")),(0,i.kt)("p",null,"\u60a8\u9009\u62e9\u5982\u4f55\u54cd\u5e94\u4e8b\u4ef6\u53d6\u51b3\u4e8e\u60c5\u51b5\u3002"),(0,i.kt)("p",null,"\u56de\u8c03\u548c\u9ed8\u8ba4\u64cd\u4f5c\u4e4b\u95f4\u7684\u533a\u522b\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56de\u8c03\u5fc5\u987b\u5728\u7c7b\u7684\u5b9e\u4f8b\u4e0a\u6ce8\u518c\u3002\u9ed8\u8ba4\u64cd\u4f5c\u4f5c\u4e3a\u7c7b\u4e0a\u7684\u865a\u62df\u51fd\u6570\u8fd0\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u56de\u8c03\u5728\u4f20\u64ad\u8def\u5f84\u4e0a\u7684\u6240\u6709\u89c6\u89c9\u5143\u7d20\u90fd\u4f1a\u6267\u884c\u3002\u9ed8\u8ba4\u64cd\u4f5c\u4ec5\u5bf9\u4e8b\u4ef6\u76ee\u6807\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u56de\u8c03\u53ef\u80fd\u4f1a\u6267\u884c\u989d\u5916\u7684\u68c0\u67e5\uff0c\u4ee5\u786e\u5b9a\u5b83\u4eec\u662f\u5426\u5e94\u8be5\u5bf9\u4e8b\u4ef6\u505a\u51fa\u53cd\u5e94\u3002\u4f8b\u5982\uff0c\u5904\u7406\u9f20\u6807\u5355\u51fb\u7684\u56de\u8c03\u53ef\u80fd\u4f1a\u68c0\u67e5\u5143\u7d20\u662f\u5426\u662f\u4e8b\u4ef6\u7684\u76ee\u6807\u3002\u9ed8\u8ba4\u64cd\u4f5c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u64cd\u4f5c\u5728\u6027\u80fd\u4e0a\u7565\u6709\u4f18\u52bf\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u4f20\u64ad\u9636\u6bb5\u4e0d\u9700\u8981\u5728\u56de\u8c03\u6ce8\u518c\u8868\u4e2d\u67e5\u627e\u3002")),(0,i.kt)("h3",{id:"\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c"},"\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u64cd\u4f5c\u9002\u7528\u4e8e\u8be5\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u3002\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c\u7684\u7c7b\u4e5f\u53ef\u4ee5\u5728\u8be5\u7c7b\u7684\u5b9e\u4f8b\u4e0a\u6ce8\u518c\u56de\u8c03\u3002"),(0,i.kt)("p",null,"\u5f53\u4e00\u4e2a\u7c7b\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c\u65f6\uff0c\u5b83\u5fc5\u987b\u6d3e\u751f\u4e00\u4e2a\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"VisualElement")," \u7684\u5b50\u7c7b\u5e76\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActionAtTarget()")," \u548c/\u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultAction()")," \u65b9\u6cd5\uff0c\u6216\u4e24\u8005\u90fd\u5b9e\u73b0\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u64cd\u4f5c\u662f\u89c6\u89c9\u5143\u7d20\u5b50\u7c7b\u7684\u6bcf\u4e2a\u5b9e\u4f8b\u5728\u63a5\u6536\u4e8b\u4ef6\u65f6\u6267\u884c\u7684\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActionAtTarget()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultAction()")," \u6765\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u64cd\u4f5c\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"override void ExecuteDefaultActionAtTarget(EventBase evt)\n{\n    // \u8c03\u7528\u57fa\u51fd\u6570\u3002\n    base.ExecuteDefaultActionAtTarget(evt);\n\n    if (evt.GetEventTypeId() == MouseDownEvent.TypeId())\n    {\n        // ...\n    }\n    else if (evt.GetEventTypeId() == MouseUpEvent.TypeId())\n    {\n        // ...\n    }\n    //\u66f4\u591a\u4e8b\u4ef6\u7c7b\u578b\n}\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultAction()")," \u4e2d\u5b9e\u73b0\u60a8\u7684\u9ed8\u8ba4\u64cd\u4f5c\uff0c\u60a8\u53ef\u4ee5\u505c\u6b62\u6216\u963b\u6b62\u4e00\u4e2a\u9ed8\u8ba4\u64cd\u4f5c\u7684\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u5728\u7236\u7ea7\u56de\u8c03\u4e4b\u524d\u6267\u884c\u76ee\u6807\u9ed8\u8ba4\u64cd\u4f5c\uff0c\u8bf7\u5728 ","`","ExecuteDefaultActionAtTarget() \u4e2d\u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5e94\u8be5\u5c06\u9ed8\u8ba4\u64cd\u4f5c\u89c6\u4e3a\u4e00\u4e2a\u5143\u7d20\u7c7b\u578b\u5728\u63a5\u6536\u4e8b\u4ef6\u65f6\u5e94\u8be5\u5177\u6709\u7684\u884c\u4e3a\u3002\u4f8b\u5982\uff0c\u590d\u9009\u6846\u5e94\u901a\u8fc7\u5207\u6362\u5176\u72b6\u6001\u6765\u54cd\u5e94\u5355\u51fb\u4e8b\u4ef6\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6\u9ed8\u8ba4\u64cd\u4f5c\u865a\u62df\u51fd\u6570\uff08\u800c\u4e0d\u662f\u5728\u6240\u6709\u590d\u9009\u6846\u4e0a\u6ce8\u518c\u56de\u8c03\uff09\u6765\u5b9e\u73b0\u6b64\u884c\u4e3a\u3002"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u6700\u4f73\u5b9e\u8df5"},"\u81ea\u5b9a\u4e49\u63a7\u4ef6\u7684\u6700\u4f73\u5b9e\u8df5"),(0,i.kt)("h3",{id:"\u5b9e\u65bd\u884c\u4e3a"},"\u5b9e\u65bd\u884c\u4e3a"),(0,i.kt)("p",null,"\u60a8\u5e94\u8be5\u901a\u8fc7\u5177\u6709\u9ed8\u8ba4\u64cd\u4f5c\u7684\u5143\u7d20\u6765\u5b9e\u73b0\u884c\u4e3a\u3002\u60a8\u53ef\u4ee5\u5728\u9644\u52a0\u5230\u5b9e\u4f8b\u7684\u56de\u8c03\u4e2d\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"PreventDefault()")," \u53d6\u6d88\u9ed8\u8ba4\u5143\u7d20\u884c\u4e3a\u3002"),(0,i.kt)("p",null,"\u5c06\u884c\u4e3a\u5b9e\u73b0\u4e3a\u9ed8\u8ba4\u64cd\u4f5c\u7684\u5176\u4ed6\u597d\u5904\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u64cd\u4f5c\u4e0d\u9700\u8981\u5728\u56de\u8c03\u6ce8\u518c\u8868\u4e2d\u67e5\u627e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u56de\u8c03\u7684\u5b9e\u4f8b\u4e0d\u8fdb\u5165\u4f20\u64ad\u8fc7\u7a0b\u3002")),(0,i.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u66f4\u5927\u7075\u6d3b\u6027\uff0c\u53ef\u5728\u4e8b\u4ef6\u5206\u53d1\u8fc7\u7a0b\u4e2d\u7684\u4ee5\u4e0b\u4e24\u4e2a\u65f6\u523b\u6267\u884c\u4e8b\u4ef6\u76ee\u6807\u7684\u9ed8\u8ba4\u64cd\u4f5c\uff1a"),(0,i.kt)("p",null,"1.\u5728\u6d93\u6ef4\u4e0e\u5192\u6ce1\u4f20\u64ad\u9636\u6bb5\u4e4b\u95f4\uff0c\u5728\u521a\u6267\u884c\u76ee\u6807\u56de\u8c03\u4e4b\u540e\uff0c\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActionsAtTarget()"),"\u3002 2.\u5728\u4e8b\u4ef6\u5206\u53d1\u8fc7\u7a0b\u7ed3\u675f\u65f6\uff0c\u8986\u76d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActions()"),"\u3002"),(0,i.kt)("h3",{id:"\u7c7b\u7684\u9ed8\u8ba4\u64cd\u4f5c"},"\u7c7b\u7684\u9ed8\u8ba4\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5982\u6709\u53ef\u80fd\uff0c\u5c3d\u91cf\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActions()")," \u4e2d\u5b9e\u73b0\u7c7b\u7684\u9ed8\u8ba4\u64cd\u4f5c\u3002\u8fd9\u5141\u8bb8\u66f4\u591a\u9009\u9879\u6765\u8986\u76d6\u7c7b\u3002\u60a8\u53ef\u4ee5\u5728\u4e8b\u4ef6\u4f20\u64ad\u8fc7\u7a0b\u7684\u6d93\u6ef4\u9636\u6bb5\u6216\u5192\u6ce1\u9636\u6bb5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"PreventDefault()")," \u6765\u8986\u76d6\u7c7b\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4e8b\u4ef6\u4e0d\u5e94\u4f20\u64ad\u5230\u7236\u5143\u7d20\uff0c\u5219\u5fc5\u987b\u5728\u9ed8\u8ba4\u64cd\u4f5c\u671f\u95f4\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u3002\u4f8b\u5982\uff0c\u6587\u672c\u5b57\u6bb5\u63a5\u6536\u4fee\u6539\u5176\u503c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyDownEvent"),"\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," \u952e\u5220\u9664\u5185\u5bb9\u3002\u6b64\u4e8b\u4ef6\u4e0d\u5f97\u4f20\u64ad\u5230\u7236\u89c6\u89c9\u5143\u7d20\u3002\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteDefaultActionsAtTarget()")," \u5b9e\u73b0\u9ed8\u8ba4\u64cd\u4f5c\u5e76\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"StopPropagation()")," \u4ee5\u786e\u4fdd\u5728\u5192\u6ce1\u9636\u6bb5\u4e0d\u5904\u7406\u8be5\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"\u4ec5\u5bf9\u4e8b\u4ef6\u76ee\u6807\u6267\u884c\u9ed8\u8ba4\u64cd\u4f5c\u3002\u8981\u4f7f\u7c7b\u5bf9\u9488\u5bf9\u5176\u5b50\u5143\u7d20\u6216\u7236\u5143\u7d20\u7684\u4e8b\u4ef6\u505a\u51fa\u53cd\u5e94\uff0c\u60a8\u5fc5\u987b\u6ce8\u518c\u56de\u8c03\u4ee5\u5728\u6d93\u6d41\u6216\u5192\u6ce1\u4f20\u64ad\u9636\u6bb5\u63a5\u6536\u4e8b\u4ef6\u3002\u907f\u514d\u5728\u7c7b\u4e2d\u6ce8\u518c\u56de\u8c03\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("h3",{id:"\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u5e76\u53d6\u6d88\u9ed8\u8ba4\u64cd\u4f5c"},"\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u5e76\u53d6\u6d88\u9ed8\u8ba4\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5728\u56de\u8c03\u6216\u9ed8\u8ba4\u64cd\u4f5c\u4e2d\u5904\u7406\u4e8b\u4ef6\u65f6\uff0c\u60a8\u53ef\u4ee5\u505c\u6b62\u8fdb\u4e00\u6b65\u7684\u4e8b\u4ef6\u4f20\u64ad\u548c\u9ed8\u8ba4\u64cd\u4f5c\u7684\u6267\u884c\u3002\u4f8b\u5982\uff0c\u7236\u9762\u677f\u53ef\u901a\u8fc7\u5728\u6d93\u6d41\u9636\u6bb5\u505c\u6b62\u4f20\u64ad\u6765\u963b\u6b62\u5176\u5b50\u9762\u677f\u63a5\u6536\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"\u60a8\u4e0d\u80fd\u963b\u6b62\u4e8b\u4ef6\u7c7b\u81ea\u8eab\u5185\u90e8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBase.PreDispatch()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBase.PostDispatch()")," \u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u5f71\u54cd\u4e8b\u4ef6\u4f20\u64ad\u548c\u9ed8\u8ba4\u64cd\u4f5c\uff1a"),(0,i.kt)("h4",{id:"stopimmediatepropagation"},(0,i.kt)("inlineCode",{parentName:"h4"},"StopImmediatePropagation()")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7acb\u5373\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u8fc7\u7a0b\uff0c\u56e0\u6b64\u4e0d\u4f1a\u4e3a\u8be5\u4e8b\u4ef6\u6267\u884c\u5176\u4ed6\u56de\u8c03\u3002\u4f46\u662f\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultActionAtTarget()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultAction()")," \u9ed8\u8ba4\u64cd\u4f5c\u4ecd\u7136\u6267\u884c\u3002")),(0,i.kt)("h4",{id:"stoppropagation"},(0,i.kt)("inlineCode",{parentName:"h4"},"StopPropagation()")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5f53\u524d\u5143\u7d20\u7684\u4e0a\u6b21\u56de\u8c03\u540e\u505c\u6b62\u4e8b\u4ef6\u4f20\u64ad\u8fc7\u7a0b\u3002\u8fd9\u5c06\u786e\u4fdd\u5f53\u524d\u5143\u7d20\u7684\u6240\u6709\u56de\u8c03\u90fd\u5f97\u5230\u6267\u884c\uff0c\u4f46\u662f\u5176\u4ed6\u5143\u7d20\u4e0d\u4f1a\u518d\u5bf9\u4e8b\u4ef6\u505a\u51fa\u53cd\u5e94\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultActionAtTarget()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultAction()")," \u9ed8\u8ba4\u64cd\u4f5c\u4ecd\u7136\u6267\u884c\u3002")),(0,i.kt)("h4",{id:"preventdefaultaction"},(0,i.kt)("inlineCode",{parentName:"h4"},"PreventDefaultAction()")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9632\u6b62\u4e8b\u4ef6\u4f20\u64ad\u8fc7\u7a0b\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultActionAtTarget()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultAction()")," \u9ed8\u8ba4\u64cd\u4f5c\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"PreventDefaultAction()")," \u4e0d\u4f1a\u963b\u6b62\u5176\u4ed6\u56de\u8c03\u7684\u6267\u884c\uff0c\u5e76\u4e14\u5728\u5192\u6ce1\u9636\u6bb5\u8c03\u7528\u65f6\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteDefaultActionAtTarget()")," \u65e0\u6548\u3002")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2018\u201311\u201302 \u9875\u9762\u5df2\u4fee\u8ba2")))}s.isMDXComponent=!0}}]);