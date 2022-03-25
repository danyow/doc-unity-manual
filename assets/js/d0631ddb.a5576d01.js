"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"com.unity.collections",title:"Collections",slug:"/pack-safe/com-unity-collections"},l="Collections",s={unversionedId:"packages-list/pack-safe/com.unity.collections",id:"packages-list/pack-safe/com.unity.collections",title:"Collections",description:"com.unity.collections iconRel.png",source:"@site/docs/packages-list/pack-safe/com-unity-collections.md",sourceDirName:"packages-list/pack-safe",slug:"/pack-safe/com-unity-collections",permalink:"/doc-unity-manual/docs/pack-safe/com-unity-collections",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages-list/pack-safe/com-unity-collections.md",tags:[],version:"current",frontMatter:{id:"com.unity.collections",title:"Collections",slug:"/pack-safe/com-unity-collections"},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u63a7\u5236",permalink:"/doc-unity-manual/docs/pack-safe/com-unity-collab-proxy"},next:{title:"WebGL Publisher",permalink:"/doc-unity-manual/docs/pack-safe/com-unity-connect-share"}},u={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u7248\u672c\u4fe1\u606f",id:"\u7248\u672c\u4fe1\u606f",level:2},{value:"Released for Unity",id:"released-for-unity",level:3},{value:"\u4e0e Unity \u517c\u5bb9",id:"\u4e0e-unity-\u517c\u5bb9",level:3},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collections"},"Collections"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.collections@1.1/manual/index.html"},"com.unity.collections")," ",(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/iconRel.png",alt:"iconRel.png"})),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"A C# collections library providing data structures that can be used in jobs, and optimized by Burst compiler."),(0,o.kt)("h2",{id:"\u7248\u672c\u4fe1\u606f"},"\u7248\u672c\u4fe1\u606f"),(0,o.kt)("h3",{id:"released-for-unity"},"Released for Unity"),(0,o.kt)("p",null,"Package version 1.1.0 is released for Unity Editor version 2022.1."),(0,o.kt)("h3",{id:"\u4e0e-unity-\u517c\u5bb9"},"\u4e0e Unity \u517c\u5bb9"),(0,o.kt)("p",null,"These package versions are available in Unity version 2022.1:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u6587\u6863\u4f4d\u7f6e\uff1a")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u72b6\u6001")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u53ef\u7528\u7248\u672c\uff1a")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"com.unity.collections@1.1")),(0,o.kt)("td",{parentName:"tr",align:null},"released"),(0,o.kt)("td",{parentName:"tr",align:null},"1.1.0")))),(0,o.kt)("h2",{id:"\u5173\u952e\u5b57"},"\u5173\u952e\u5b57"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list/pack-keys"},"dots")," , ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list/pack-keys"},"collections")," , ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages-list/pack-keys"},"unity")))}d.isMDXComponent=!0}}]);