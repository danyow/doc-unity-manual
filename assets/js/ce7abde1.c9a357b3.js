"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90673],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"com.unity.profiling.core",title:"Unity Profiling Core API",slug:"/pack-safe/com-unity-profiling-core"},c="Unity Profiling Core API",p={unversionedId:"packages-list/pack-safe/com.unity.profiling.core",id:"packages-list/pack-safe/com.unity.profiling.core",title:"Unity Profiling Core API",description:"com.unity.profiling.core iconRel.png",source:"@site/docs/packages-list/pack-safe/com-unity-profiling-core.md",sourceDirName:"packages-list/pack-safe",slug:"/pack-safe/com-unity-profiling-core",permalink:"/docs/pack-safe/com-unity-profiling-core",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages-list/pack-safe/com-unity-profiling-core.md",tags:[],version:"current",frontMatter:{id:"com.unity.profiling.core",title:"Unity Profiling Core API",slug:"/pack-safe/com-unity-profiling-core"},sidebar:"tutorialSidebar",previous:{title:"ProBuilder",permalink:"/docs/pack-safe/com-unity-probuilder"},next:{title:"System Metrics Mali",permalink:"/docs/pack-safe/com-unity-profiling-systemmetrics-mali"}},u={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u7248\u672c\u4fe1\u606f",id:"\u7248\u672c\u4fe1\u606f",level:2},{value:"Released for Unity",id:"released-for-unity",level:3},{value:"\u4e0e Unity \u517c\u5bb9",id:"\u4e0e-unity-\u517c\u5bb9",level:3},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unity-profiling-core-api"},"Unity Profiling Core API"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@1.0/manual/index.html"},"com.unity.profiling.core")," ",(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/iconRel.png",alt:"iconRel.png"})),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"The Unity Profiling Core package provides an API for code instrumentation markup, and for profiling statistic collection."),(0,a.kt)("h2",{id:"\u7248\u672c\u4fe1\u606f"},"\u7248\u672c\u4fe1\u606f"),(0,a.kt)("h3",{id:"released-for-unity"},"Released for Unity"),(0,a.kt)("p",null,"Package version 1.0.0 is released for Unity Editor version 2022.1."),(0,a.kt)("h3",{id:"\u4e0e-unity-\u517c\u5bb9"},"\u4e0e Unity \u517c\u5bb9"),(0,a.kt)("p",null,"These package versions are available in Unity version 2022.1:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u6587\u6863\u4f4d\u7f6e\uff1a")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u72b6\u6001")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u53ef\u7528\u7248\u672c\uff1a")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"com.unity.profiling.core@1.0")),(0,a.kt)("td",{parentName:"tr",align:null},"released"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,a.kt)("h2",{id:"\u5173\u952e\u5b57"},"\u5173\u952e\u5b57"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/packages-list/pack-keys"},"profiler")," , ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages-list/pack-keys"},"profiling")," , ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages-list/pack-keys"},"api")))}m.isMDXComponent=!0}}]);