"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48276],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(g,c(c({ref:e},u),{},{components:n})):r.createElement(g,c({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15778:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],o={id:"scripting-backends",title:"\u811a\u672c\u540e\u7aef",slug:"/scripting-backends"},p="\u811a\u672c\u540e\u7aef",s={unversionedId:"scripting-section/unity-architecture/scripting-backends/scripting-backends",id:"scripting-section/unity-architecture/scripting-backends/scripting-backends",title:"\u811a\u672c\u540e\u7aef",description:"unity-hero-image-burst.jpg",source:"@site/docs/scripting-section/unity-architecture/scripting-backends/scripting-backends.md",sourceDirName:"scripting-section/unity-architecture/scripting-backends",slug:"/scripting-backends",permalink:"/docs/scripting-backends",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/scripting-backends/scripting-backends.md",tags:[],version:"current",frontMatter:{id:"scripting-backends",title:"\u811a\u672c\u540e\u7aef",slug:"/scripting-backends"},sidebar:"tutorialSidebar",previous:{title:"\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef",permalink:"/docs/script-serialization/script-serialization-errors"},next:{title:"IL2CPP Overview",permalink:"/docs/il2cpp"}},u={},l=[],d={toc:l};function m(t){var e=t.components,n=(0,a.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u811a\u672c\u540e\u7aef"},"\u811a\u672c\u540e\u7aef"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/unity-hero-image-burst.jpg",alt:"unity-hero-image-burst.jpg"})),(0,i.kt)("p",null,"Unity \u5177\u6709\u4e24\u4e2a\u811a\u672c\u540e\u7aef  ",(0,i.kt)("strong",{parentName:"p"},"Mono"),"  \u548c  ",(0,i.kt)("strong",{parentName:"p"},"IL2CPP"),"  (Intermediate Language To C++)\uff0c\u5b83\u4eec\u5404\u81ea\u4f7f\u7528\u4e0d\u540c\u7684\u7f16\u8bd1\u6280\u672f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mono \u4f7f\u7528\u5373\u65f6 (JIT) \u7f16\u8bd1\uff0c\u5728\u8fd0\u884c\u65f6\u6309\u9700\u7f16\u8bd1\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"IL2CPP \u4f7f\u7528\u63d0\u524d (AOT) \u7f16\u8bd1\uff0c\u5728\u8fd0\u884c\u4e4b\u524d\u7f16\u8bd1\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,i.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u6709\u5173\u8fd9\u4e9b\u540e\u7aef\u7684\u66f4\u591a\u4fe1\u606f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/scripting-backends/mono"},"Mono overview")),(0,i.kt)("td",{parentName:"tr",align:null},"Information about the Mono scripting back end.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/il2cpp"},"IL2CPP overview")),(0,i.kt)("td",{parentName:"tr",align:null},"Information about the IL2CPP scripting back end.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/scripting-backends/scripting-restrictions"},"\u811a\u672c\u9650\u5236")),(0,i.kt)("td",{parentName:"tr",align:null},"\u672c\u8282\u4ecb\u7ecd\u6709\u5173\u5e94\u7528\u7a0b\u5e8f\u7684\u6bcf\u4e00\u79cd\u76ee\u6807\u5e73\u53f0\u6240\u9002\u7528\u7684\u811a\u672c\u9650\u5236\u7684\u4fe1\u606f\uff0c\u4ee5\u652f\u6301\u8de8\u5e73\u53f0\u4ee3\u7801\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/scripting-backends/managed-code-stripping"},"\u6258\u7ba1\u4ee3\u7801\u5265\u79bb")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6709\u5173\u6258\u7ba1\u4ee3\u7801\u5265\u79bb\u7684\u4fe1\u606f\uff0c\u6258\u7ba1\u4ee3\u7801\u5265\u79bb\u662f\u4ece\u7248\u672c\u4e2d\u5220\u9664\u672a\u4f7f\u7528\u7684\u4ee3\u7801\u3002\u8fd9\u6709\u52a9\u4e8e\u51cf\u5c11\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u7ec8\u7248\u672c\u5927\u5c0f\u3002")))))}m.isMDXComponent=!0}}]);