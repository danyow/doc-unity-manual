"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23044],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,v=m["".concat(s,".").concat(f)]||m[f]||p[f]||u;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),u=(n(67294),n(3905)),o=["components"],a={id:"UIE-Events",title:"Event system",slug:"/uie-events"},s="Event system",c={unversionedId:"uitoolkits/uielements/uie-events/UIE-Events",id:"uitoolkits/uielements/uie-events/UIE-Events",title:"Event system",description:"UI \u5de5\u5177\u5305\u63d0\u4f9b\u5c06\u7528\u6237\u64cd\u4f5c\u6216\u901a\u77e5\u4f20\u8fbe\u7ed9\u89c6\u89c9\u5143\u7d20\u7684\u4e8b\u4ef6\u3002UI \u5de5\u5177\u5305\u4e8b\u4ef6\u7cfb\u7edf\u4e0e HTML \u4e8b\u4ef6\u7684\u672f\u8bed\u548c\u4e8b\u4ef6\u547d\u540d\u65b9\u5f0f\u76f8\u540c\u3002\u4e0b\u9762\u662f\u4e8b\u4ef6\u7cfb\u7edf\u7684\u6838\u5fc3\u6982\u5ff5\uff1a",source:"@site/docs/uitoolkits/uielements/uie-events/uie-events.md",sourceDirName:"uitoolkits/uielements/uie-events",slug:"/uie-events",permalink:"/doc-unity-manual/docs/uie-events",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-events/uie-events.md",tags:[],version:"current",frontMatter:{id:"UIE-Events",title:"Event system",slug:"/uie-events"},sidebar:"tutorialSidebar",previous:{title:"\u63a7\u4ef6\u53c2\u8003",permalink:"/doc-unity-manual/docs/uie-controls/uie-controls-reference"},next:{title:"Dispatching events",permalink:"/doc-unity-manual/docs/uie-events/uie-events-dispatching"}},l={},p=[{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"event-system"},"Event system"),(0,u.kt)("p",null,"UI \u5de5\u5177\u5305\u63d0\u4f9b\u5c06\u7528\u6237\u64cd\u4f5c\u6216\u901a\u77e5\u4f20\u8fbe\u7ed9\u89c6\u89c9\u5143\u7d20\u7684\u4e8b\u4ef6\u3002UI \u5de5\u5177\u5305\u4e8b\u4ef6\u7cfb\u7edf\u4e0e HTML \u4e8b\u4ef6\u7684\u672f\u8bed\u548c\u4e8b\u4ef6\u547d\u540d\u65b9\u5f0f\u76f8\u540c\u3002\u4e0b\u9762\u662f\u4e8b\u4ef6\u7cfb\u7edf\u7684\u6838\u5fc3\u6982\u5ff5\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-events/uie-events-dispatching"},"\u5206\u53d1\u4e8b\u4ef6")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-events/uie-events-synthesizing"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-events/uie-events-handling"},"\u5904\u7406\u4e8b\u4ef6"))),(0,u.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,u.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u9002\u5408\u57fa\u4e8e ",(0,u.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.EventBase.html"},"EventBase")," \u7c7b\u7684\u5c42\u7ea7\u89c6\u56fe\u3002\u6bcf\u4e2a\u4e8b\u4ef6\u7c7b\u578b\u90fd\u5b9e\u73b0\u4e00\u4e2a\u63a5\u53e3\uff1b\u8be5\u63a5\u53e3\u5b9a\u4e49\u540c\u4e00\u7cfb\u5217\u7684\u6240\u6709\u4e8b\u4ef6\u7684\u5171\u540c\u7279\u5f81\u3002"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uie-events-reference"},"\u4e8b\u4ef6\u53c2\u8003"),"\u9875\u9762\u63d0\u4f9b\u4e86\u6709\u5173\u6bcf\u4e2a\u4e8b\u4ef6\u7cfb\u5217\u7684\u884c\u4e3a\u548c\u7279\u5f81\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,u.kt)("hr",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"2018\u201311\u201302 \u9875\u9762\u5df2\u4fee\u8ba2")))}f.isMDXComponent=!0}}]);