"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78732],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),g=a,b=c["".concat(u,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(b,l(l({ref:e},d),{},{components:n})):r.createElement(b,l({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92941:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"webgl-gettingstarted",title:"Getting started with WebGL development",slug:"/webgl-gettingstarted"},u="Getting started with WebGL development",s={unversionedId:"platform-specific/webgl/webgl-gettingstarted/webgl-gettingstarted",id:"platform-specific/webgl/webgl-gettingstarted/webgl-gettingstarted",title:"Getting started with WebGL development",description:"This page describes what you need to do before building a WebGL app. To build a WebGL application, you must first install the Unity Hub and then add the WebGL Build Support module.",source:"@site/docs/platform-specific/webgl/webgl-gettingstarted/webgl-gettingstarted.md",sourceDirName:"platform-specific/webgl/webgl-gettingstarted",slug:"/webgl-gettingstarted",permalink:"/doc-unity-manual/docs/webgl-gettingstarted",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/webgl/webgl-gettingstarted/webgl-gettingstarted.md",tags:[],version:"current",frontMatter:{id:"webgl-gettingstarted",title:"Getting started with WebGL development",slug:"/webgl-gettingstarted"},sidebar:"tutorialSidebar",previous:{title:"WebGL performance considerations",permalink:"/doc-unity-manual/docs/webgl-develop/webgl-performance"},next:{title:"WebGL Player \u8bbe\u7f6e",permalink:"/doc-unity-manual/docs/webgl-gettingstarted/class-player-settings-web-gl"}},d={},p=[],c={toc:p};function g(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-webgl-development"},"Getting started with WebGL development"),(0,i.kt)("p",null,"This page describes what you need to do before building a WebGL app. To build a WebGL application, you must first install the Unity Hub and then add the WebGL Build Support module."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/hub/manual/InstallHub.html"},"Install the Unity Hub")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides instructions on how to install the Unity Hub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/hub/manual/AddModules.html"},"Add modules to the Unity Editor")),(0,i.kt)("td",{parentName:"tr",align:null},"To install the WebGL Build Support module, learn how to add modules via the Hub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/webgl-gettingstarted/class-player-settings-web-gl"},"WebGL Player Settings")),(0,i.kt)("td",{parentName:"tr",align:null},"Learn how to set up Player Settings for WebGL.")))))}g.isMDXComponent=!0}}]);