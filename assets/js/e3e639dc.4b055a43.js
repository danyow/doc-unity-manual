"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66448],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=m(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return n?r.createElement(d,l(l({ref:e},c),{},{components:n})):r.createElement(d,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6508:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"ExecutionOrder",title:"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f",slug:"/scripting-concepts/execution-order"},p="\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f",m={unversionedId:"scripting-section/scripting-concepts/ExecutionOrder",id:"scripting-section/scripting-concepts/ExecutionOrder",title:"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f",description:"\u8fd0\u884c Unity \u811a\u672c\u4f1a\u6309\u9884\u5b9a\u987a\u5e8f\u6267\u884c\u5927\u91cf\u4e8b\u4ef6\u51fd\u6570\u3002\u672c\u9875\u9762\u5c06\u4ecb\u7ecd\u8fd9\u4e9b\u4e8b\u4ef6\u51fd\u6570\uff0c\u5e76\u8bf4\u660e\u5b83\u4eec\u7684\u6267\u884c\u987a\u5e8f\u3002",source:"@site/docs/scripting-section/scripting-concepts/execution-order.md",sourceDirName:"scripting-section/scripting-concepts",slug:"/scripting-concepts/execution-order",permalink:"/doc-unity-manual/docs/scripting-concepts/execution-order",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/scripting-concepts/execution-order.md",tags:[],version:"current",frontMatter:{id:"ExecutionOrder",title:"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f",slug:"/scripting-concepts/execution-order"},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u51fd\u6570",permalink:"/doc-unity-manual/docs/scripting-concepts/event-functions"},next:{title:"\u5728\u8fd0\u884c\u65f6\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6",permalink:"/doc-unity-manual/docs/scripting-concepts/instantiating-prefabs"}},c={},s=[{value:"\u811a\u672c\u751f\u547d\u5468\u671f\u6982\u8ff0",id:"\u811a\u672c\u751f\u547d\u5468\u671f\u6982\u8ff0",level:2},{value:"\u811a\u672c\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe",id:"\u811a\u672c\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe",level:3},{value:"\u52a0\u8f7d\u7b2c\u4e00\u4e2a\u573a\u666f",id:"\u52a0\u8f7d\u7b2c\u4e00\u4e2a\u573a\u666f",level:2},{value:"Editor",id:"editor",level:2},{value:"\u5728\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d",id:"\u5728\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d",level:2},{value:"\u5e27\u4e4b\u95f4",id:"\u5e27\u4e4b\u95f4",level:2},{value:"\u66f4\u65b0\u987a\u5e8f",id:"\u66f4\u65b0\u987a\u5e8f",level:2},{value:"\u52a8\u753b\u66f4\u65b0\u5faa\u73af",id:"\u52a8\u753b\u66f4\u65b0\u5faa\u73af",level:2},{value:"\u6709\u7528\u7684\u6027\u80fd\u5206\u6790\u6807\u8bb0",id:"\u6709\u7528\u7684\u6027\u80fd\u5206\u6790\u6807\u8bb0",level:3},{value:"Rendering",id:"rendering",level:2},{value:"\u534f\u7a0b",id:"\u534f\u7a0b",level:2},{value:"\u9500\u6bc1\u5bf9\u8c61\u65f6",id:"\u9500\u6bc1\u5bf9\u8c61\u65f6",level:2},{value:"\u9000\u51fa\u65f6",id:"\u9000\u51fa\u65f6",level:2}],u={toc:s};function k(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f"},"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f"),(0,i.kt)("p",null,"\u8fd0\u884c Unity \u811a\u672c\u4f1a\u6309\u9884\u5b9a\u987a\u5e8f\u6267\u884c\u5927\u91cf\u4e8b\u4ef6\u51fd\u6570\u3002\u672c\u9875\u9762\u5c06\u4ecb\u7ecd\u8fd9\u4e9b\u4e8b\u4ef6\u51fd\u6570\uff0c\u5e76\u8bf4\u660e\u5b83\u4eec\u7684\u6267\u884c\u987a\u5e8f\u3002"),(0,i.kt)("h2",{id:"\u811a\u672c\u751f\u547d\u5468\u671f\u6982\u8ff0"},"\u811a\u672c\u751f\u547d\u5468\u671f\u6982\u8ff0"),(0,i.kt)("p",null,"\u4e0b\u56fe\u6982\u62ec\u4e86 Unity \u5982\u4f55\u5728\u811a\u672c\u7684\u751f\u547d\u5468\u671f\u5185\u5bf9\u4e8b\u4ef6\u51fd\u6570\u8fdb\u884c\u6392\u5e8f\u4ee5\u53ca\u91cd\u590d\u6267\u884c\u8fd9\u4e9b\u4e8b\u4ef6\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5404\u79cd\u4e8b\u4ef6\u51fd\u6570\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%8A%A0%E8%BD%BD%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%9C%BA%E6%99%AF"},"\u52a0\u8f7d\u7b2c\u4e00\u4e2a\u573a\u666f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#editor"},"Editor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%9C%A8%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%B8%A7%E6%9B%B4%E6%96%B0%E4%B9%8B%E5%89%8D"},"\u5728\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%B8%A7%E4%B9%8B%E9%97%B4"},"\u5e27\u4e4b\u95f4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%9B%B4%E6%96%B0%E9%A1%BA%E5%BA%8F"},"\u66f4\u65b0\u987a\u5e8f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%8A%A8%E7%94%BB%E6%9B%B4%E6%96%B0%E5%BE%AA%E7%8E%AF"},"\u52a8\u753b\u66f4\u65b0\u5faa\u73af")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rendering"},"\u6e32\u67d3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%8D%8F%E7%A8%8B"},"\u534f\u7a0b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E9%94%80%E6%AF%81%E5%AF%B9%E8%B1%A1%E6%97%B6"},"\u9500\u6bc1\u5bf9\u8c61\u65f6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E9%80%80%E5%87%BA%E6%97%B6"},"\u9000\u51fa\u65f6"))),(0,i.kt)("h3",{id:"\u811a\u672c\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe"},"\u811a\u672c\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/monobehaviour_flowchart.svg",alt:"monobehaviour_flowchart.svg"})),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u6709\u4e9b\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 SVG \u56fe\u50cf\u6587\u4ef6\u3002\u5982\u679c\u4ee5\u4e0a\u56fe\u50cf\u672a\u6b63\u786e\u663e\u793a\uff08\u4f8b\u5982\uff0c\u5982\u679c\u770b\u4e0d\u5230\u4efb\u4f55\u6587\u5b57\uff09\uff0c\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u6d4f\u89c8\u5668\uff0c\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Google Chrome")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/"},"Mozilla Firefox"),"\u3002"),(0,i.kt)("h2",{id:"\u52a0\u8f7d\u7b2c\u4e00\u4e2a\u573a\u666f"},"\u52a0\u8f7d\u7b2c\u4e00\u4e2a\u573a\u666f"),(0,i.kt)("p",null,"\u573a\u666f\u5f00\u59cb\u65f6\u5c06\u8c03\u7528\u4ee5\u4e0b\u51fd\u6570\uff08\u4e3a\u573a\u666f\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u8c03\u7528\u4e00\u6b21\uff09\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Awake\uff1a")," \u59cb\u7ec8\u5728\u4efb\u4f55 Start \u51fd\u6570\u4e4b\u524d\u5e76\u5728\u5b9e\u4f8b\u5316\u9884\u5236\u4ef6\u4e4b\u540e\u8c03\u7528\u6b64\u51fd\u6570\u3002\uff08\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u5728\u542f\u52a8\u671f\u95f4\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\uff0c\u5219\u5728\u6fc0\u6d3b\u4e4b\u540e\u624d\u4f1a\u8c03\u7528 Awake\u3002\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnEnable\uff1a")," \uff08\u4ec5\u5728\u5bf9\u8c61\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u65f6\u8c03\u7528\uff09\u5728\u542f\u7528\u5bf9\u8c61\u540e\u7acb\u5373\u8c03\u7528\u6b64\u51fd\u6570\u3002\u5728\u521b\u5efa MonoBehaviour \u5b9e\u4f8b\u65f6\uff08\u4f8b\u5982\u52a0\u8f7d\u5173\u5361\u6216\u5b9e\u4f8b\u5316\u5177\u6709\u811a\u672c\u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\u65f6\uff09\u4f1a\u6267\u884c\u6b64\u8c03\u7528\u3002")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e\u6dfb\u52a0\u5230\u573a\u666f\u4e2d\u7684\u5bf9\u8c61\uff0c\u5728\u4e3a\u4efb\u4f55\u5bf9\u8c61\u8c03\u7528 Start \u548c Update \u7b49\u51fd\u6570\u4e4b\u524d\uff0c\u4f1a\u4e3a","_","\u6240\u6709","_"," \u811a\u672c\u8c03\u7528 Awake \u548c OnEnable \u51fd\u6570\u3002\u5f53\u7136\uff0c\u5728\u6e38\u620f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\uff0c\u4e0d\u80fd\u5f3a\u5236\u6267\u884c\u6b64\u8c03\u7528\u3002"),(0,i.kt)("h2",{id:"editor"},"Editor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reset\uff1a")," \u8c03\u7528 Reset \u53ef\u4ee5\u5728\u811a\u672c\u9996\u6b21\u9644\u52a0\u5230\u5bf9\u8c61\u65f6\u4ee5\u53ca\u4f7f\u7528 ",(0,i.kt)("em",{parentName:"li"},"Reset")," \u547d\u4ee4\u65f6\u521d\u59cb\u5316\u811a\u672c\u7684\u5c5e\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnValidate\uff1a")," \u6bcf\u5f53\u8bbe\u7f6e\u811a\u672c\u7684\u5c5e\u6027\u65f6\u90fd\u4f1a\u8c03\u7528 OnValidate\uff0c\u5305\u62ec\u53cd\u5e8f\u5217\u5316\u5bf9\u8c61\u65f6\uff0c\u8fd9\u53ef\u80fd\u53d1\u751f\u5728\u4e0d\u540c\u7684\u65f6\u95f4\uff0c\u4f8b\u5982\u5728\u7f16\u8f91\u5668\u4e2d\u6253\u5f00\u573a\u666f\u65f6\u548c\u57df\u91cd\u65b0\u52a0\u8f7d\u540e\u3002")),(0,i.kt)("h2",{id:"\u5728\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d"},"\u5728\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start\uff1a")," \u4ec5\u5f53\u542f\u7528\u811a\u672c\u5b9e\u4f8b\u540e\uff0c\u624d\u4f1a\u5728\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d\u8c03\u7528 Start\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u573a\u666f\u8d44\u6e90\u4e2d\u7684\u5bf9\u8c61\uff0c\u5728\u4e3a\u4efb\u4f55\u811a\u672c\u8c03\u7528 Update \u7b49\u51fd\u6570\u4e4b\u524d\uff0c\u5c06\u5728\u6240\u6709\u811a\u672c\u4e0a\u8c03\u7528 Start \u51fd\u6570\u3002\u5f53\u7136\uff0c\u5728\u6e38\u620f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\uff0c\u4e0d\u80fd\u5f3a\u5236\u6267\u884c\u6b64\u8c03\u7528\u3002"),(0,i.kt)("h2",{id:"\u5e27\u4e4b\u95f4"},"\u5e27\u4e4b\u95f4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnApplicationPause\uff1a")," \u5728\u5e27\u7684\u7ed3\u5c3e\u5904\u8c03\u7528\u6b64\u51fd\u6570\uff08\u5728\u6b63\u5e38\u5e27\u66f4\u65b0\u4e4b\u95f4\u6709\u6548\u68c0\u6d4b\u5230\u6682\u505c\uff09\u3002\u5728\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"OnApplicationPause"),"  \u4e4b\u540e\uff0c\u5c06\u53d1\u51fa\u4e00\u4e2a\u989d\u5916\u5e27\uff0c\u4ece\u800c\u5141\u8bb8\u6e38\u620f\u663e\u793a\u56fe\u5f62\u6765\u6307\u793a\u6682\u505c\u72b6\u6001\u3002")),(0,i.kt)("h2",{id:"\u66f4\u65b0\u987a\u5e8f"},"\u66f4\u65b0\u987a\u5e8f"),(0,i.kt)("p",null,"\u8ddf\u8e2a\u6e38\u620f\u903b\u8f91\u548c\u4ea4\u4e92\u3001\u52a8\u753b\u3001\u6444\u50cf\u673a\u4f4d\u7f6e\u7b49\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u4e0d\u540c\u4e8b\u4ef6\u3002\u5e38\u89c1\u65b9\u6848\u662f\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Update"),"  \u51fd\u6570\u4e2d\u6267\u884c\u5927\u591a\u6570\u4efb\u52a1\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u51fd\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FixedUpdate\uff1a")," \u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"FixedUpdate"),"  \u7684\u9891\u5ea6\u5e38\u5e38\u8d85\u8fc7  ",(0,i.kt)("strong",{parentName:"li"},"Update")," \u3002\u5982\u679c\u5e27\u7387\u5f88\u4f4e\uff0c\u53ef\u4ee5\u6bcf\u5e27\u8c03\u7528\u8be5\u51fd\u6570\u591a\u6b21\uff1b\u5982\u679c\u5e27\u7387\u5f88\u9ad8\uff0c\u53ef\u80fd\u5728\u5e27\u4e4b\u95f4\u5b8c\u5168\u4e0d\u8c03\u7528\u8be5\u51fd\u6570\u3002\u5728  ",(0,i.kt)("strong",{parentName:"li"},"FixedUpdate"),"  \u4e4b\u540e\u5c06\u7acb\u5373\u8fdb\u884c\u6240\u6709\u7269\u7406\u8ba1\u7b97\u548c\u66f4\u65b0\u3002\u5728  ",(0,i.kt)("strong",{parentName:"li"},"FixedUpdate"),"  \u5185\u5e94\u7528\u8fd0\u52a8\u8ba1\u7b97\u65f6\uff0c\u65e0\u9700\u5c06\u503c\u4e58\u4ee5  ",(0,i.kt)("strong",{parentName:"li"},"Time.deltaTime")," \u3002\u8fd9\u662f\u56e0\u4e3a  ",(0,i.kt)("strong",{parentName:"li"},"FixedUpdate"),"  \u7684\u8c03\u7528\u57fa\u4e8e\u53ef\u9760\u7684\u8ba1\u65f6\u5668\uff08\u72ec\u7acb\u4e8e\u5e27\u7387\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update\uff1a")," \u6bcf\u5e27\u8c03\u7528\u4e00\u6b21  ",(0,i.kt)("strong",{parentName:"li"},"Update")," \u3002\u8fd9\u662f\u7528\u4e8e\u5e27\u66f4\u65b0\u7684\u4e3b\u8981\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LateUpdate\uff1a")," \u6bcf\u5e27\u8c03\u7528\u4e00\u6b21  ",(0,i.kt)("strong",{parentName:"li"},"LateUpdate")," \uff08\u5728 ",(0,i.kt)("strong",{parentName:"li"},"Update"),"  \u5b8c\u6210\u540e\uff09\u3002 ",(0,i.kt)("strong",{parentName:"li"},"LateUpdate"),"  \u5f00\u59cb\u65f6\uff0c\u5728  ",(0,i.kt)("strong",{parentName:"li"},"Update"),"  \u4e2d\u6267\u884c\u7684\u6240\u6709\u8ba1\u7b97\u4fbf\u5df2\u5b8c\u6210\u3002 ",(0,i.kt)("strong",{parentName:"li"},"LateUpdate"),"  \u7684\u5e38\u89c1\u7528\u9014\u662f\u8ddf\u968f\u7b2c\u4e09\u4eba\u79f0\u6444\u50cf\u673a\u3002\u5982\u679c\u5728  ",(0,i.kt)("strong",{parentName:"li"},"Update"),"  \u5185\u8ba9\u89d2\u8272\u79fb\u52a8\u548c\u8f6c\u5411\uff0c\u53ef\u4ee5\u5728  ",(0,i.kt)("strong",{parentName:"li"},"LateUpdate"),"  \u4e2d\u6267\u884c\u6240\u6709\u6444\u50cf\u673a\u79fb\u52a8\u548c\u65cb\u8f6c\u8ba1\u7b97\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u89d2\u8272\u5728\u6444\u50cf\u673a\u8ddf\u8e2a\u5176\u4f4d\u7f6e\u4e4b\u524d\u5df2\u5b8c\u5168\u79fb\u52a8\u3002")),(0,i.kt)("p",null,"\u901a\u5e38\uff0c\u4e0d\u5e94\u4f9d\u8d56\u4e3a\u4e0d\u540c\u7684\u6e38\u620f\u5bf9\u8c61\u8c03\u7528\u76f8\u540c\u4e8b\u4ef6\u51fd\u6570\u7684\u987a\u5e8f - \u9664\u975e\u987a\u5e8f\u660e\u786e\u8bb0\u5f55\u6216\u53ef\u8bbe\u7f6e\u3002\uff08\u5982\u679c\u9700\u8981\u5bf9\u64ad\u653e\u5668\u5faa\u73af\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/LowLevel.PlayerLoop.html"},"PlayerLoop API"),"\u3002\uff09"),(0,i.kt)("p",null,"\u4e0d\u80fd\u6307\u5b9a\u4e3a\u540c\u4e00 MonoBehaviour \u5b50\u7c7b\u7684\u4e0d\u540c\u5b9e\u4f8b\u8c03\u7528\u4e8b\u4ef6\u51fd\u6570\u7684\u987a\u5e8f\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a MonoBehaviour \u7684  ",(0,i.kt)("strong",{parentName:"p"},"Update"),"  \u51fd\u6570\u53ef\u80fd\u4f1a\u5728\u53e6\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\uff08\u5305\u62ec\u5176\u7236\u7ea7\u6216\u5b50\u7ea7\u6e38\u620f\u5bf9\u8c61\uff09\u4e0a\u7684\u76f8\u540c MonoBehaviour \u7684  ",(0,i.kt)("strong",{parentName:"p"},"Update"),"  \u51fd\u6570\u4e4b\u524d\u6216\u4e4b\u540e\u8c03\u7528\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a MonoBehaviour \u5b50\u7c7b\u7684\u4e8b\u4ef6\u51fd\u6570\u5e94\u5728\u4e0d\u540c\u5b50\u7c7b\u7684\u4e8b\u4ef6\u51fd\u6570\u4e4b\u524d\u8c03\u7528\uff08\u4f7f\u7528 Project Settings \u7a97\u53e3\u7684 Script Execution Order \u9762\u677f\uff09\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6709\u4e24\u4e2a\u811a\u672c\uff0cEngineBehaviour \u548c SteeringBehaviour\uff0c\u53ef\u4ee5\u8bbe\u7f6e Script Execution Order\uff0c\u8fd9\u6837 EngineBehaviours \u59cb\u7ec8\u5728 SteeringBehaviours \u4e4b\u524d\u66f4\u65b0\u3002"),(0,i.kt)("h2",{id:"\u52a8\u753b\u66f4\u65b0\u5faa\u73af"},"\u52a8\u753b\u66f4\u65b0\u5faa\u73af"),(0,i.kt)("p",null,"Unity \u8bc4\u4f30\u52a8\u753b\u7cfb\u7edf\u65f6\uff0c\u5c06\u8c03\u7528\u4ee5\u4e0b\u51fd\u6570\u548c ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler"},"Profiler")," \u6807\u8bb0\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnStateMachineEnter\uff1a")," \u5728 ",(0,i.kt)("strong",{parentName:"li"},"\u72b6\u6001\u673a\u66f4\u65b0 (State Machine Update)"),"  \u6b65\u9aa4\u4e2d\uff0c\u5f53\u63a7\u5236\u5668\u7684\u72b6\u6001\u673a\u8fdb\u884c\u6d41\u7ecf Entry \u72b6\u6001\u7684\u8f6c\u6362\u65f6\uff0c\u5c06\u5728\u7b2c\u4e00\u4e2a\u66f4\u65b0\u5e27\u4e0a\u8c03\u7528\u6b64\u56de\u8c03\u3002\u5728\u8f6c\u6362\u5230  ",(0,i.kt)("strong",{parentName:"li"},"StateMachine"),"  \u5b50\u72b6\u6001\u65f6\u4e0d\u4f1a\u8c03\u7528\u6b64\u56de\u8c03\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u4ec5\u5f53\u52a8\u753b\u56fe\u4e2d\u5b58\u5728\u63a7\u5236\u5668\u7ec4\u4ef6\uff08\u4f8b\u5982\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorController")," "),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AnimatorOverrideController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorOverrideController")," ")," \u6216 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorControllerPlayable.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorControllerPlayable")," "),"\uff09\u65f6\u624d\u4f1a\u53d1\u751f\u6b64\u56de\u8c03\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"  ",(0,i.kt)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a")," \u5c06\u6b64\u56de\u8c03\u6dfb\u52a0\u5230 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/StateMachineBehaviour.html"}," ",(0,i.kt)("strong",{parentName:"a"},"StateMachineBehaviour")," ")," \u7ec4\u4ef6\u4f1a\u7981\u7528\u591a\u7ebf\u7a0b\u7684\u72b6\u6001\u673a\u8bc4\u4f30\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnStateMachineExit\uff1a")," \u5728 ",(0,i.kt)("strong",{parentName:"li"},"\u72b6\u6001\u673a\u66f4\u65b0 (State Machine Update)"),"  \u6b65\u9aa4\u4e2d\uff0c\u5f53\u63a7\u5236\u5668\u7684\u72b6\u6001\u673a\u8fdb\u884c\u6d41\u7ecf Exit \u72b6\u6001\u7684\u8f6c\u6362\u65f6\uff0c\u5c06\u5728\u6700\u540e\u4e00\u4e2a\u66f4\u65b0\u5e27\u4e0a\u8c03\u7528\u6b64\u56de\u8c03\u3002\u5728\u8f6c\u6362\u5230  ",(0,i.kt)("strong",{parentName:"li"},"StateMachine"),"  \u5b50\u72b6\u6001\u65f6\u4e0d\u4f1a\u8c03\u7528\u6b64\u56de\u8c03\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u4ec5\u5f53\u52a8\u753b\u56fe\u4e2d\u5b58\u5728\u63a7\u5236\u5668\u7ec4\u4ef6\uff08\u4f8b\u5982\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorController")," "),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AnimatorOverrideController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorOverrideController")," ")," \u6216 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorControllerPlayable.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorControllerPlayable")," "),"\uff09\u65f6\u624d\u4f1a\u53d1\u751f\u6b64\u56de\u8c03\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a")," \u5c06\u6b64\u56de\u8c03\u6dfb\u52a0\u5230 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/StateMachineBehaviour.html"}," ",(0,i.kt)("strong",{parentName:"a"},"StateMachineBehaviour")," ")," \u7ec4\u4ef6\u4f1a\u7981\u7528\u591a\u7ebf\u7a0b\u7684\u72b6\u6001\u673a\u8bc4\u4f30\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u89e6\u53d1\u52a8\u753b\u4e8b\u4ef6 (Fire Animation Events)\uff1a")," \u8c03\u7528\u5728\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4\u548c\u5f53\u524d\u66f4\u65b0\u65f6\u95f4\u4e4b\u95f4\u91c7\u6837\u7684\u6240\u6709\u526a\u8f91\u4e2d\u7684\u6240\u6709\u52a8\u753b\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StateMachineBehaviour (OnStateEnter/OnStateUpdate/OnStateExit)\uff1a")," \u4e00\u4e2a\u5c42\u6700\u591a\u53ef\u4ee5\u6709 3 \u4e2a\u6d3b\u52a8\u72b6\u6001\uff1a\u5f53\u524d\u72b6\u6001\u3001\u4e2d\u65ad\u72b6\u6001\u548c\u4e0b\u4e00\u4e2a\u72b6\u6001\u3002\u4f7f\u7528\u4e00\u4e2a\u5b9a\u4e49  ",(0,i.kt)("strong",{parentName:"li"},"OnStateEnter")," \u3001 ",(0,i.kt)("strong",{parentName:"li"},"OnStateUpdate"),"  \u6216  ",(0,i.kt)("strong",{parentName:"li"},"OnStateExit"),"  \u56de\u8c03\u7684 StateMachineBehaviour \u7ec4\u4ef6\u4e3a\u6bcf\u4e2a\u6d3b\u52a8\u72b6\u6001\u8c03\u7528\u6b64\u51fd\u6570\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u4f9d\u6b21\u9488\u5bf9\u5f53\u524d\u72b6\u6001\u3001\u4e2d\u65ad\u72b6\u6001\u548c\u4e0b\u4e00\u4e2a\u72b6\u6001\u8c03\u7528\u6b64\u51fd\u6570\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u4ec5\u5f53\u52a8\u753b\u56fe\u4e2d\u5b58\u5728\u63a7\u5236\u5668\u7ec4\u4ef6\uff08\u4f8b\u5982\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorController")," "),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AnimatorOverrideController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorOverrideController")," ")," \u6216 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorControllerPlayable.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorControllerPlayable")," "),"\uff09\u65f6\u624d\u4f1a\u6267\u884c\u6b64\u6b65\u9aa4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnAnimatorMove\uff1a")," \u5728\u6bcf\u4e2a\u66f4\u65b0\u5e27\u4e2d\u4e3a\u6bcf\u4e2a Animator \u7ec4\u4ef6\u8c03\u7528\u4e00\u6b21\u6b64\u51fd\u6570\u6765\u4fee\u6539\u6839\u8fd0\u52a8 (Root Motion)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StateMachineBehaviour(OnStateMove)\uff1a")," \u4f7f\u7528\u5b9a\u4e49\u6b64\u56de\u8c03\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/StateMachineBehaviour.html"}," ",(0,i.kt)("strong",{parentName:"a"},"StateMachineBehaviour")," ")," \u5728\u6bcf\u4e2a\u6d3b\u52a8\u72b6\u6001\u4e2d\u8c03\u7528\u6b64\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnAnimatorIK\uff1a")," \u8bbe\u7f6e\u52a8\u753b IK\u3002\u4e3a\u6bcf\u4e2a\u542f\u7528  ",(0,i.kt)("strong",{parentName:"li"},"IK pass"),"  \u7684 Animator Controller \u5c42\u8fdb\u884c\u4e00\u6b21\u6b64\u8c03\u7528\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u4ec5\u5f53\u4f7f\u7528\u4eba\u5f62\u9aa8\u67b6\u65f6\u624d\u4f1a\u6267\u884c\u6b64\u4e8b\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StateMachineBehaviour(OnStateIK)\uff1a")," \u4f7f\u7528\u5728\u542f\u7528  ",(0,i.kt)("strong",{parentName:"li"},"IK pass"),"  \u7684\u5c42\u4e0a\u5b9a\u4e49\u6b64\u56de\u8c03\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/StateMachineBehaviour.html"}," ",(0,i.kt)("strong",{parentName:"a"},"StateMachineBehaviour")," ")," \u7ec4\u4ef6\u5728\u6bcf\u4e2a\u6d3b\u52a8\u72b6\u6001\u4e2d\u8c03\u7528\u6b64\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WriteProperties\uff1a")," \u4ece\u4e3b\u7ebf\u7a0b\u5c06\u6240\u6709\u5176\u4ed6\u52a8\u753b\u5c5e\u6027\u5199\u5165\u573a\u666f\u3002")),(0,i.kt)("h3",{id:"\u6709\u7528\u7684\u6027\u80fd\u5206\u6790\u6807\u8bb0"},"\u6709\u7528\u7684\u6027\u80fd\u5206\u6790\u6807\u8bb0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#%E8%84%9A%E6%9C%AC%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%B5%81%E7%A8%8B%E5%9B%BE"},"\u811a\u672c\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe"),"\u4e2d\u663e\u793a\u7684\u67d0\u4e9b\u52a8\u753b\u51fd\u6570\u4e0d\u662f\u53ef\u4ee5\u8c03\u7528\u7684\u4e8b\u4ef6\u51fd\u6570\uff1b\u5b83\u4eec\u662f Unity \u5904\u7406\u52a8\u753b\u65f6\u8c03\u7528\u7684\u5185\u90e8\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u5177\u6709 Profiler \u6807\u8bb0\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler"},"Profiler")," \u67e5\u770b Unity \u5728\u5e27\u4e2d\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\u7684\u65f6\u95f4\u3002\u77e5\u9053 Unity \u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\u7684\u65f6\u95f4\u6709\u52a9\u4e8e\u51c6\u786e\u4e86\u89e3\u6240\u8c03\u7528\u7684\u4e8b\u4ef6\u51fd\u6570\u7684\u5177\u4f53\u6267\u884c\u65f6\u95f4\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5047\u8bbe\u5728  ",(0,i.kt)("strong",{parentName:"p"},"FireAnimationEvents"),"  \u56de\u8c03\u4e2d\u8c03\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animator.Play.html"},"Animator.Play"),"\u3002\u5982\u679c\u77e5\u9053\u53ea\u6709\u5728\u6267\u884c ",(0,i.kt)("strong",{parentName:"p"},"\u72b6\u6001\u673a\u66f4\u65b0 (State Machine Update)"),"  \u548c ",(0,i.kt)("strong",{parentName:"p"},"\u6d41\u7a0b\u56fe (Process Graph)"),"  \u51fd\u6570\u540e\u624d\u4f1a\u89e6\u53d1  ",(0,i.kt)("strong",{parentName:"p"},"FireAnimationEvents"),"  \u56de\u8c03\uff0c\u5c31\u53ef\u4ee5\u9884\u671f\u52a8\u753b\u526a\u8f91\u4f1a\u5728\u4e0b\u4e00\u5e27\u64ad\u653e\uff0c\u800c\u4e0d\u662f\u9a6c\u4e0a\u64ad\u653e\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u72b6\u6001\u673a\u66f4\u65b0 (State Machine Update)\uff1a")," \u5728\u6267\u884c\u5e8f\u5217\u7684\u6b64\u6b65\u9aa4\u4e2d\u8bc4\u4f30\u6240\u6709\u72b6\u6001\u673a\u3002\u4ec5\u5f53\u52a8\u753b\u56fe\u4e2d\u5b58\u5728\u63a7\u5236\u5668\u7ec4\u4ef6\uff08\u4f8b\u5982\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorController")," "),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AnimatorOverrideController.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorOverrideController")," ")," \u6216 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Animations.AnimatorControllerPlayable.html"}," ",(0,i.kt)("strong",{parentName:"a"},"AnimatorControllerPlayable")," "),"\uff09\u65f6\u624d\u4f1a\u53d1\u751f\u6b64\u56de\u8c03\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a")," \u72b6\u6001\u673a\u8bc4\u4f30\u901a\u5e38\u662f\u591a\u7ebf\u7a0b\u7684\uff0c\u4f46\u6dfb\u52a0\u67d0\u4e9b\u56de\u8c03\uff08\u4f8b\u5982\uff0c ",(0,i.kt)("strong",{parentName:"li"},"OnStateMachineEnter"),"  \u548c  ",(0,i.kt)("strong",{parentName:"li"},"OnStateMachineExit")," \uff09\u4f1a\u7981\u7528\u591a\u7ebf\u7a0b\u3002\u8bf7\u53c2\u6570\u4e0a\u6587\u7684",(0,i.kt)("a",{parentName:"li",href:"#%E5%8A%A8%E7%94%BB%E6%9B%B4%E6%96%B0%E5%BE%AA%E7%8E%AF"},"\u52a8\u753b\u66f4\u65b0\u5faa\u73af"),"\u4ee5\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ProcessGraph\uff1a")," \u8bc4\u4f30\u6240\u6709\u52a8\u753b\u56fe\u3002\u6b64\u8fc7\u7a0b\u5305\u62ec\u5bf9\u9700\u8981\u8bc4\u4f30\u7684\u6240\u6709\u52a8\u753b\u526a\u8f91\u8fdb\u884c\u91c7\u6837\u4ee5\u53ca\u8ba1\u7b97\u6839\u8fd0\u52a8 (Root Motion)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ProcessAnimation\uff1a")," \u6df7\u5408\u52a8\u753b\u56fe\u7684\u7ed3\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WriteTransforms\uff1a")," \u5c06\u6240\u6709\u52a8\u753b\u53d8\u6362\u4ece\u5de5\u4f5c\u7ebf\u7a0b\u5199\u5165\u573a\u666f\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u5982\u679c\u4e00\u4e2a\u4eba\u5f62\u9aa8\u67b6\u7684\u591a\u4e2a\u5c42\u542f\u7528\u4e86  ",(0,i.kt)("strong",{parentName:"li"},"IK pass")," \uff0c\u5219\u8be5\u4eba\u5f62\u9aa8\u67b6\u53ef\u4ee5\u6709\u591a\u4e2a  ",(0,i.kt)("strong",{parentName:"li"},"WriteTransforms"),"  \u901a\u9053\uff08\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"#%E8%84%9A%E6%9C%AC%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%B5%81%E7%A8%8B%E5%9B%BE"},"\u811a\u672c\u751f\u547d\u5468\u671f\u6d41\u7a0b\u56fe"),"\uff09\u3002")),(0,i.kt)("h2",{id:"rendering"},"Rendering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnPreCull\uff1a")," \u5728\u6444\u50cf\u673a\u5254\u9664\u573a\u666f\u4e4b\u524d\u8c03\u7528\u3002\u5254\u9664\u64cd\u4f5c\u5c06\u786e\u5b9a\u6444\u50cf\u673a\u53ef\u4ee5\u770b\u5230\u54ea\u4e9b\u5bf9\u8c61\u3002\u6b63\u597d\u5728\u8fdb\u884c\u5254\u9664\u4e4b\u524d\u8c03\u7528 OnPreCull\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnBecameVisible/OnBecameInvisible\uff1a")," \u5bf9\u8c61\u53d8\u4e3a\u5bf9\u4efb\u4f55\u6444\u50cf\u673a\u53ef\u89c1/\u4e0d\u53ef\u89c1\u65f6\u8c03\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnWillRenderObject\uff1a")," \u5982\u679c\u5bf9\u8c61\u53ef\u89c1\uff0c\u5219\u4e3a\u6bcf\u4e2a\u6444\u50cf\u673a\u8c03\u7528 ",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u6b21")," \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnPreRender\uff1a")," \u5728\u6444\u50cf\u673a\u5f00\u59cb\u6e32\u67d3\u573a\u666f\u4e4b\u524d\u8c03\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnRenderObject\uff1a")," \u6240\u6709\u5e38\u89c4\u573a\u666f\u6e32\u67d3\u5b8c\u6210\u4e4b\u540e\u8c03\u7528\u3002\u6b64\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GL.html"},"GL")," \u7c7b\u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.DrawMeshNow.html"},"Graphics.DrawMeshNow")," \u6765\u7ed8\u5236\u81ea\u5b9a\u4e49\u51e0\u4f55\u5f62\u72b6\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnPostRender\uff1a")," \u5728\u6444\u50cf\u673a\u5b8c\u6210\u573a\u666f\u6e32\u67d3\u540e\u8c03\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnRenderImage\uff1a")," \u5728\u573a\u666f\u6e32\u67d3\u5b8c\u6210\u540e\u8c03\u7528\u4ee5\u5141\u8bb8\u5bf9\u56fe\u50cf\u8fdb\u884c\u540e\u5904\u7406\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/visual-effects/post-processing-overview"},"\u540e\u671f\u5904\u7406\u6548\u679c"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnGUI\uff1a")," \u6bcf\u5e27\u8c03\u7528\u591a\u6b21\u4ee5\u54cd\u5e94 GUI \u4e8b\u4ef6\u3002\u9996\u5148\u5904\u7406\u5e03\u5c40\u548c\u91cd\u65b0\u7ed8\u5236\u4e8b\u4ef6\uff0c\u7136\u540e\u4e3a\u6bcf\u4e2a\u8f93\u5165\u4e8b\u4ef6\u5904\u7406\u5e03\u5c40\u548c\u952e\u76d8/\u9f20\u6807\u4e8b\u4ef6\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OnDrawGizmos"),"  \u7528\u4e8e\u5728\u573a\u666f\u89c6\u56fe\u4e2d\u7ed8\u5236\u8f85\u52a9\u56fe\u6807\u4ee5\u5b9e\u73b0\u53ef\u89c6\u5316\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"  These callbacks only work with the Built-in Render Pipeline."))),(0,i.kt)("h2",{id:"\u534f\u7a0b"},"\u534f\u7a0b"),(0,i.kt)("p",null,"Update \u51fd\u6570\u8fd4\u56de\u540e\u5c06\u8fd0\u884c\u6b63\u5e38\u534f\u7a0b\u66f4\u65b0\u3002\u534f\u7a0b\u662f\u4e00\u4e2a\u53ef\u6682\u505c\u6267\u884c (yield) \u76f4\u5230\u7ed9\u5b9a\u7684 YieldInstruction \u8fbe\u5230\u5b8c\u6210\u72b6\u6001\u7684\u51fd\u6570\u3002 \u534f\u7a0b\u7684\u4e0d\u540c\u7528\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yield"),"  \u5728\u4e0b\u4e00\u5e27\u4e0a\u8c03\u7528\u6240\u6709 Update \u51fd\u6570\u540e\uff0c\u534f\u7a0b\u5c06\u7ee7\u7eed\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yield WaitForSeconds"),"  \u5728\u4e3a\u5e27\u8c03\u7528\u6240\u6709 Update \u51fd\u6570\u540e\uff0c\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u5ef6\u8fdf\u540e\u7ee7\u7eed\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yield WaitForFixedUpdate"),"  \u5728\u6240\u6709\u811a\u672c\u4e0a\u8c03\u7528\u6240\u6709 FixedUpdate \u540e\u7ee7\u7eed\u3002\u5982\u679c\u534f\u540c\u7a0b\u5e8f\u5728 FixedUpdate \u4e4b\u524d\u751f\u6210\uff0c\u90a3\u4e48\u5b83\u4f1a\u5728\u5f53\u524d\u5e27\u7684 FixedUpdate \u4e4b\u540e\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yield WWW"),"  \u5728 WWW \u4e0b\u8f7d\u5b8c\u6210\u540e\u7ee7\u7eed\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yield StartCoroutine"),"  \u5c06\u534f\u7a0b\u94fe\u63a5\u8d77\u6765\uff0c\u5e76\u4f1a\u7b49\u5f85 MyFunc \u534f\u7a0b\u5148\u5b8c\u6210\u3002")),(0,i.kt)("h2",{id:"\u9500\u6bc1\u5bf9\u8c61\u65f6"},"\u9500\u6bc1\u5bf9\u8c61\u65f6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnDestroy\uff1a")," \u5bf9\u8c61\u5b58\u5728\u7684\u6700\u540e\u4e00\u5e27\u5b8c\u6210\u6240\u6709\u5e27\u66f4\u65b0\u4e4b\u540e\uff0c\u8c03\u7528\u6b64\u51fd\u6570\uff08\u53ef\u80fd\u5e94 Object.Destroy \u8981\u6c42\u6216\u5728\u573a\u666f\u5173\u95ed\u65f6\u9500\u6bc1\u8be5\u5bf9\u8c61\uff09\u3002")),(0,i.kt)("h2",{id:"\u9000\u51fa\u65f6"},"\u9000\u51fa\u65f6"),(0,i.kt)("p",null,"\u5728\u573a\u666f\u4e2d\u7684\u6240\u6709\u6d3b\u52a8\u5bf9\u8c61\u4e0a\u8c03\u7528\u4ee5\u4e0b\u51fd\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnApplicationQuit\uff1a")," \u5728\u9000\u51fa\u5e94\u7528\u7a0b\u5e8f\u4e4b\u524d\u5728\u6240\u6709\u6e38\u620f\u5bf9\u8c61\u4e0a\u8c03\u7528\u6b64\u51fd\u6570\u3002\u5728\u7f16\u8f91\u5668\u4e2d\uff0c\u7528\u6237\u505c\u6b62\u64ad\u653e\u6a21\u5f0f\u65f6\uff0c\u8c03\u7528\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OnDisable\uff1a")," \u884c\u4e3a\u88ab\u7981\u7528\u6216\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u65f6\uff0c\u8c03\u7528\u6b64\u51fd\u6570\u3002")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2019\u201303\u201318 \u9875\u9762\u5df2\u4fee\u8ba2")))}k.isMDXComponent=!0}}]);