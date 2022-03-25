"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52615],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),l=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return i.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),y=l(n),m=r,f=y["".concat(c,".").concat(m)]||y[m]||s[m]||a;return n?i.createElement(f,o(o({ref:e},p),{},{components:n})):i.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=y;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},41035:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],u={id:"UnityIAPIStoreInitialization",title:"\u521d\u59cb\u5316",slug:"/unity-iapimplementing-astore/unity-iapistore-initialization"},c="\u521d\u59cb\u5316",l={unversionedId:"unity-services/unity-iap/unity-iapimplementing-astore/UnityIAPIStoreInitialization",id:"unity-services/unity-iap/unity-iapimplementing-astore/UnityIAPIStoreInitialization",title:"\u521d\u59cb\u5316",description:"Unity IAP \u4f7f\u7528 IStoreCallback\uff08\u5e94\u7528\u5546\u5e97\u7528\u6765\u4e0e Unity IAP \u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\uff09\u6765\u8c03\u7528\u5e94\u7528\u5546\u5e97\u7684 Initialize \u65b9\u6cd5\u3002",source:"@site/docs/unity-services/unity-iap/unity-iapimplementing-astore/unity-iapistore-initialization.md",sourceDirName:"unity-services/unity-iap/unity-iapimplementing-astore",slug:"/unity-iapimplementing-astore/unity-iapistore-initialization",permalink:"/doc-unity-manual/docs/unity-iapimplementing-astore/unity-iapistore-initialization",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-iap/unity-iapimplementing-astore/unity-iapistore-initialization.md",tags:[],version:"current",frontMatter:{id:"UnityIAPIStoreInitialization",title:"\u521d\u59cb\u5316",slug:"/unity-iapimplementing-astore/unity-iapistore-initialization"},sidebar:"tutorialSidebar",previous:{title:"\u5904\u7406\u8d2d\u4e70",permalink:"/doc-unity-manual/docs/unity-iapimplementing-astore/unity-iapistore-handling-purchases"},next:{title:"\u68c0\u7d22\u5546\u54c1",permalink:"/doc-unity-manual/docs/unity-iapimplementing-astore/unity-iapistore-retrieving-products"}},p={},s=[],y={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"Unity IAP \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IStoreCallback"),"\uff08\u5e94\u7528\u5546\u5e97\u7528\u6765\u4e0e Unity IAP \u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\uff09\u6765\u8c03\u7528\u5e94\u7528\u5546\u5e97\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Initialize")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void Initialize(IStoreCallback callback) {\n    // \u4fdd\u6301\u5bf9\u56de\u8c03\u7684\u5f15\u7528\u4ee5\u4fbf\u4e0e Unity IAP \u901a\u4fe1\u3002\n    this.callback = callback;\n}\n")))}m.isMDXComponent=!0}}]);