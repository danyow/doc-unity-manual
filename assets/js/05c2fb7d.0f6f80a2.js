"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10349],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=s(n),m=i,d=y["".concat(c,".").concat(m)]||y[m]||l[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],u={id:"UnityIAPIStoreHandlingPurchases",title:"\u5904\u7406\u8d2d\u4e70",slug:"/unity-iapimplementing-astore/unity-iapistore-handling-purchases"},c="\u5904\u7406\u8d2d\u4e70",s={unversionedId:"unity-services/unity-iap/unity-iapimplementing-astore/UnityIAPIStoreHandlingPurchases",id:"unity-services/unity-iap/unity-iapimplementing-astore/UnityIAPIStoreHandlingPurchases",title:"\u5904\u7406\u8d2d\u4e70",description:"\u7528\u6237\u8fdb\u884c\u8d2d\u4e70\u65f6\uff0c\u5c06\u8c03\u7528\u5e94\u7528\u5546\u5e97\u7684 Purchase \u65b9\u6cd5\u3002\u5e94\u7528\u5546\u5e97\u5e94\u8be5\u5f15\u5bfc\u7528\u6237\u5b8c\u6210\u7ed3\u5e10\u6d41\u7a0b\u5e76\u8c03\u7528 IStoreCallback \u7684 OnPurchaseSucceeded \u6216 OnPurchaseFailed \u65b9\u6cd5\u3002",source:"@site/docs/unity-services/unity-iap/unity-iapimplementing-astore/unity-iapistore-handling-purchases.md",sourceDirName:"unity-services/unity-iap/unity-iapimplementing-astore",slug:"/unity-iapimplementing-astore/unity-iapistore-handling-purchases",permalink:"/doc-unity-manual/docs/unity-iapimplementing-astore/unity-iapistore-handling-purchases",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-iap/unity-iapimplementing-astore/unity-iapistore-handling-purchases.md",tags:[],version:"current",frontMatter:{id:"UnityIAPIStoreHandlingPurchases",title:"\u5904\u7406\u8d2d\u4e70",slug:"/unity-iapimplementing-astore/unity-iapistore-handling-purchases"},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u73b0\u5e94\u7528\u5546\u5e97",permalink:"/doc-unity-manual/docs/unity-iapimplementing-astore"},next:{title:"\u521d\u59cb\u5316",permalink:"/doc-unity-manual/docs/unity-iapimplementing-astore/unity-iapistore-initialization"}},p={},l=[{value:"\u5b8c\u6210\u4ea4\u6613",id:"\u5b8c\u6210\u4ea4\u6613",level:2}],y={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5904\u7406\u8d2d\u4e70"},"\u5904\u7406\u8d2d\u4e70"),(0,a.kt)("p",null,"\u7528\u6237\u8fdb\u884c\u8d2d\u4e70\u65f6\uff0c\u5c06\u8c03\u7528\u5e94\u7528\u5546\u5e97\u7684 Purchase \u65b9\u6cd5\u3002\u5e94\u7528\u5546\u5e97\u5e94\u8be5\u5f15\u5bfc\u7528\u6237\u5b8c\u6210\u7ed3\u5e10\u6d41\u7a0b\u5e76\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IStoreCallback")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPurchaseSucceeded")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPurchaseFailed")," \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u5546\u5e97\u5e94\u63d0\u4f9b\u6536\u636e\u548c\u552f\u4e00\u7684\u4ea4\u6613 ID\uff1b\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u5c1a\u672a\u901a\u8fc7\u63d0\u4f9b\u7684\u4ea4\u6613 ID \u6765\u5904\u7406\u8d2d\u4e70\uff0cUnity IAP \u5c06\u8c03\u7528\u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessPurchase")," \u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u5b8c\u6210\u4ea4\u6613"},"\u5b8c\u6210\u4ea4\u6613"),(0,a.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u786e\u8ba4\u4ea4\u6613\u5df2\u5904\u7406\u65f6\uff0c\u6216\u8005\u5982\u679c\u5df2\u7ecf\u5904\u7406\u4ea4\u6613\uff0cUnity IAP \u5c06\u8c03\u7528\u5e94\u7528\u5546\u5e97\u7684 FinishTransaction \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u5546\u5e97\u5e94\u5728\u8d2d\u4e70\u540e\u4f7f\u7528 FinishTransaction \u6765\u6267\u884c\u4efb\u4f55\u5185\u52a1\u5904\u7406 (housekeeping)\uff0c\u4f8b\u5982\u5173\u95ed\u4ea4\u6613\u6216\u4f7f\u7528\u53ef\u6d88\u8017\u5546\u54c1\u3002"))}m.isMDXComponent=!0}}]);