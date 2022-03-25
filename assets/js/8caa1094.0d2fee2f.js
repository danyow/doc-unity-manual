"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21848],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),b=a,g=s["".concat(p,".").concat(b)]||s[b]||d[b]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"webgl-develop",title:"Developing for WebGL",slug:"/webgl-develop"},p="Developing for WebGL",u={unversionedId:"platform-specific/webgl/webgl-develop/webgl-develop",id:"platform-specific/webgl/webgl-develop/webgl-develop",title:"Developing for WebGL",description:"This section provides information required to develop apps that are suitable for WebGL. It includes information that you might want to consider before you begin to develop on WebGL.",source:"@site/docs/platform-specific/webgl/webgl-develop/webgl-develop.md",sourceDirName:"platform-specific/webgl/webgl-develop",slug:"/webgl-develop",permalink:"/doc-unity-manual/docs/webgl-develop",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/webgl/webgl-develop/webgl-develop.md",tags:[],version:"current",frontMatter:{id:"webgl-develop",title:"Developing for WebGL",slug:"/webgl-develop"},sidebar:"tutorialSidebar",previous:{title:"WebGL templates",permalink:"/doc-unity-manual/docs/webgl-building-distribution/webgl-templates"},next:{title:"Cache behavior in WebGL",permalink:"/doc-unity-manual/docs/webgl-develop/webgl-caching"}},c={},d=[],s={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developing-for-webgl"},"Developing for WebGL"),(0,o.kt)("p",null,"This section provides information required to develop apps that are suitable for WebGL. It includes information that you might want to consider before you begin to develop on WebGL."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/webgl-dev.png",alt:"A 3D Room Designer\u2019s frontend built-in native HTML and JavaScript communicates with the Unity WebGL Player through external Javascript calls"})),(0,o.kt)("p",null,"A 3D Room Designer\u2019s frontend built-in native HTML and JavaScript communicates with the Unity WebGL Player through external Javascript calls"),(0,o.kt)("p",null,"This section covers the following WebGL topics:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-memory"},"WebGL Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"How memory is managed in WebGL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-interactingwithbrowserscripting"},"WebGL: interacting with browser scripting")),(0,o.kt)("td",{parentName:"tr",align:null},"The different methods used for browser scripting in WebGL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-performance"},"WebGL performance considerations")),(0,o.kt)("td",{parentName:"tr",align:null},"WebGL performance considerations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-debugging"},"Debugging and troubleshooting WebGL builds")),(0,o.kt)("td",{parentName:"tr",align:null},"Debugging and troubleshooting WebGL builds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-cursorfullscreen"},"Cursor locking and full-screen mode in WebGL")),(0,o.kt)("td",{parentName:"tr",align:null},"Cursor locking and full-screen mode support in WebGL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-input"},"WebGL Input")),(0,o.kt)("td",{parentName:"tr",align:null},"Lists the input types supported in WebGL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-develop/webgl-networking"},"WebGL Networking")),(0,o.kt)("td",{parentName:"tr",align:null},"How to use networking in WebGL.")))))}b.isMDXComponent=!0}}]);