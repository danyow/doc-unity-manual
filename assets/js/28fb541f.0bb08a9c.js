"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55778],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17630:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"class-NetworkServerSimple",title:"NetworkServerSimple",slug:"/unet-classes-reference/class-network-server-simple"},i="NetworkServerSimple",c={unversionedId:"unet/unet-classes-reference/class-NetworkServerSimple",id:"unet/unet-classes-reference/class-NetworkServerSimple",title:"NetworkServerSimple",description:"|  |",source:"@site/docs/unet/unet-classes-reference/class-network-server-simple.md",sourceDirName:"unet/unet-classes-reference",slug:"/unet-classes-reference/class-network-server-simple",permalink:"/docs/unet-classes-reference/class-network-server-simple",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-classes-reference/class-network-server-simple.md",tags:[],version:"current",frontMatter:{id:"class-NetworkServerSimple",title:"NetworkServerSimple",slug:"/unet-classes-reference/class-network-server-simple"},sidebar:"tutorialSidebar",previous:{title:"NetworkConnection",permalink:"/docs/unet-classes-reference/class-network-connection"},next:{title:"NetworkServer",permalink:"/docs/unet-classes-reference/class-network-server"}},p={},u=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networkserversimple"},"NetworkServerSimple"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,o.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,o.kt)("p",null,"NetworkServerSimple \u662f\u4e00\u4e2a\u9ad8\u7ea7 API (HLAPI) \u7c7b\uff0c\u53ef\u7ba1\u7406\u6765\u81ea\u591a\u4e2a\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u3002NetworkServer \u7c7b\u8d1f\u8d23\u5904\u7406\u6e38\u620f\u7c7b\u578b\u5185\u5bb9\uff08\u6bd4\u5982\u751f\u6210\u3001\u672c\u5730\u5ba2\u6237\u7aef\u548c\u73a9\u5bb6\u7ba1\u7406\u5668\uff09\u800c\u4e14\u6709\u4e00\u4e2a\u9759\u6001\u63a5\u53e3\uff0c\u800c NetworkServerSimple \u7c7b\u662f\u4e00\u4e2a\u7eaf\u7f51\u7edc\u670d\u52a1\u5668\uff0c\u65e0\u4efb\u4f55\u6e38\u620f\u76f8\u5173\u529f\u80fd\u3002NetworkServerSimple \u4e5f\u6ca1\u6709\u4efb\u4f55\u9759\u6001\u63a5\u53e3\u6216\u5355\u4f8b\uff0c\u6240\u4ee5\u5728\u540c\u4e00\u65f6\u95f4\u5185\uff0c\u5728\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u53ef\u5b58\u5728\u591a\u4e2a\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"NetworkServer \u7c7b\u5728\u5185\u90e8\u4f7f\u7528 NetworkServerSimple \u7684\u5b9e\u4f8b\u6765\u8fdb\u884c\u8fde\u63a5\u7ba1\u7406\u3002"),(0,o.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"connections")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0e\u8fdc\u7a0b\u5ba2\u6237\u7aef\u7684\u6d3b\u52a8\u8fde\u63a5\u7684\u96c6\u5408\u3002\u8fd9\u662f\u4e00\u4e2a\u7a00\u758f\u6570\u7ec4\uff0c\u5176\u4e2d\u7684 NetworkConnect \u5bf9\u8c61\u4f4d\u4e8e\u5176 connectionId \u7684\u7d22\u5f15\u4f4d\u7f6e\u3002\u5bf9\u4e8e\u6700\u8fd1\u5173\u95ed\u7684\u8fde\u63a5\uff0c\u6b64\u6570\u7ec4\u4e2d\u53ef\u80fd\u5b58\u5728 null \u503c\u3002\u4f4d\u4e8e\u7d22\u5f15\u96f6\u7684\u8fde\u63a5\u53ef\u80fd\u662f\u6765\u81ea\u672c\u5730\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"handlers")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5df2\u6ce8\u518c\u6d88\u606f\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\u7684\u96c6\u5408\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"networkConnectionClass")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u4e3a\u65b0\u8fde\u63a5\u521b\u5efa\u7684 NetworkConnection \u5bf9\u8c61\u7684\u7c7b\u578b\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"hostTopology")),(0,o.kt)("td",{parentName:"tr",align:null},"\u6b64\u670d\u52a1\u5668\u7528\u6765\u914d\u7f6e\u4f20\u8f93\u5c42\u7684\u4e3b\u673a\u62d3\u6251\u5bf9\u8c61\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"listenPort")),(0,o.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u6267\u884c\u76d1\u542c\u7684\u7f51\u7edc\u7aef\u53e3\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"serverHostId")),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0e\u6b64\u670d\u52a1\u5668\u5b9e\u4f8b\u76f8\u5173\u8054\u7684\u4f20\u8f93\u5c42 hostId\u3002")))))}d.isMDXComponent=!0}}]);