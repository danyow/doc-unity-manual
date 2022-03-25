"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34158],{3905:function(t,n,e){e.d(n,{Zo:function(){return m},kt:function(){return d}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=a.createContext({}),l=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=l(t.components);return a.createElement(c.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),p=l(e),d=r,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return e?a.createElement(f,i(i({ref:n},m),{},{components:e})):a.createElement(f,i({ref:n},m))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var l=2;l<o;l++)i[l]=e[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},7073:function(t,n,e){e.r(n),e.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var a=e(87462),r=e(63366),o=(e(67294),e(3905)),i=["components"],u={id:"UNetActionsAndCommunication",title:"\u64cd\u4f5c\u548c\u901a\u4fe1",slug:"/unet-actions-and-communication"},c="\u64cd\u4f5c\u548c\u901a\u4fe1",l={unversionedId:"unet/unet-using-hlapi/unet-actions-and-communication/UNetActionsAndCommunication",id:"unet/unet-using-hlapi/unet-actions-and-communication/UNetActionsAndCommunication",title:"\u64cd\u4f5c\u548c\u901a\u4fe1",description:"|  |",source:"@site/docs/unet/unet-using-hlapi/unet-actions-and-communication/unet-actions-and-communication.md",sourceDirName:"unet/unet-using-hlapi/unet-actions-and-communication",slug:"/unet-actions-and-communication",permalink:"/doc-unity-manual/docs/unet-actions-and-communication",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unet-actions-and-communication/unet-actions-and-communication.md",tags:[],version:"current",frontMatter:{id:"UNetActionsAndCommunication",title:"\u64cd\u4f5c\u548c\u901a\u4fe1",slug:"/unet-actions-and-communication"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u4e8e\u79fb\u52a8\u8bbe\u5907\u7684\u8054\u7f51\u63d0\u793a",permalink:"/doc-unity-manual/docs/unet-using-hlapi/mobile-networking"},next:{title:"NetworkBehaviour \u56de\u8c03",permalink:"/doc-unity-manual/docs/unet-actions-and-communication/network-behaviour-callbacks"}},m={},s=[{value:"\u8fdc\u7a0b\u64cd\u4f5c",id:"\u8fdc\u7a0b\u64cd\u4f5c",level:2},{value:"\u7f51\u7edc\u56de\u8c03",id:"\u7f51\u7edc\u56de\u8c03",level:2},{value:"\u7f51\u7edc\u6d88\u606f",id:"\u7f51\u7edc\u6d88\u606f",level:2}],p={toc:s};function d(t){var n=t.components,e=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u64cd\u4f5c\u548c\u901a\u4fe1"},"\u64cd\u4f5c\u548c\u901a\u4fe1"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,o.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,o.kt)("p",null,"\u5236\u4f5c\u591a\u4eba\u6e38\u620f\u65f6\uff0c\u9664\u4e86",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet-game-objects"},"\u540c\u6b65\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u7684\u5c5e\u6027"),"\u4e4b\u5916\uff0c\u53ef\u80fd\u8fd8\u9700\u8981\u53d1\u9001\u3001\u63a5\u6536\u548c\u54cd\u5e94\u5176\u4ed6\u4fe1\u606f\uff0c\u5982\u6bd4\u8d5b\u5f00\u59cb\u65f6\u95f4\u3001\u73a9\u5bb6\u52a0\u5165\u6216\u79bb\u5f00\u6bd4\u8d5b\u7684\u65f6\u95f4\u6216\u7279\u5b9a\u4e8e\u6e38\u620f\u7c7b\u578b\u7684\u5176\u4ed6\u4fe1\u606f\uff08\u4f8b\u5982\u5411\u6240\u6709\u73a9\u5bb6\u901a\u77e5\u5728\u201c\u593a\u65d7\u201d\u98ce\u683c\u6e38\u620f\u4e2d\u593a\u5f97\u65d7\u5e1c\uff09\u3002"),(0,o.kt)("p",null,"\u5728 Unity \u7f51\u7edc\u9ad8\u7ea7 API \u4e2d\uff0c\u4e3b\u8981\u53ef\u901a\u8fc7\u4e09\u79cd\u65b9\u5f0f\u4f20\u8f93\u6b64\u7c7b\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u8fdc\u7a0b\u64cd\u4f5c"},"\u8fdc\u7a0b\u64cd\u4f5c"),(0,o.kt)("p",null,"\u8fdc\u7a0b\u64cd\u4f5c\u5141\u8bb8\u901a\u8fc7\u7f51\u7edc\u8c03\u7528\u811a\u672c\u4e2d\u7684\u65b9\u6cd5\u3002\u53ef\u8ba9\u670d\u52a1\u5668\u5728\u6240\u6709\u5ba2\u6237\u7aef\u6216\u7279\u5b9a\u5355\u4e2a\u5ba2\u6237\u7aef\u4e0a\u8c03\u7528\u65b9\u6cd5\u3002\u8fd8\u53ef\u8ba9\u5ba2\u6237\u7aef\u5728\u670d\u52a1\u5668\u4e0a\u8c03\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u4f7f\u7528\u8fdc\u7a0b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u65b9\u6cd5\uff0c\u5176\u5177\u4f53\u65b9\u5f0f\u4e0e\u5728\u672c\u5730\uff08\u975e\u591a\u4eba\u73a9\u5bb6\uff09\u9879\u76ee\u4e2d\u8c03\u7528\u65b9\u6cd5\u7684\u65b9\u5f0f\u975e\u5e38\u7c7b\u4f3c\u3002"),(0,o.kt)("h2",{id:"\u7f51\u7edc\u56de\u8c03"},"\u7f51\u7edc\u56de\u8c03"),(0,o.kt)("p",null,"\u7f51\u7edc\u56de\u8c03\u5141\u8bb8\u6302\u63a5\u5230\u5728\u6e38\u620f\u8fc7\u7a0b\u4e2d\u53d1\u751f\u7684\u5185\u7f6e Unity \u4e8b\u4ef6\uff0c\u4f8b\u5982\u73a9\u5bb6\u52a0\u5165\u6216\u79bb\u5f00\u65f6\uff0c\u521b\u5efa\u6216\u9500\u6bc1\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u6216\u52a0\u8f7d\u65b0\u573a\u666f\u65f6\u3002\u53ef\u4ee5\u5b9e\u73b0\u4e24\u79cd\u7c7b\u578b\u7684\u7f51\u7edc\u56de\u8c03\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/unet-actions-and-communication/network-manager-callbacks"},"Network Manager \u56de\u8c03"),"\uff0c\u9002\u7528\u4e8e\u4e0e Network Manager \u81ea\u8eab\u6709\u5173\u7684\u56de\u8c03\uff08\u6bd4\u5982\uff0c\u5ba2\u6237\u7aef\u8fde\u63a5\u6216\u65ad\u5f00\u8fde\u63a5\u65f6\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/unet-actions-and-communication/network-behaviour-callbacks"},"Network Behaviour \u56de\u8c03"),"\uff0c\u9002\u7528\u4e8e\u4e0e\u5355\u4e2a\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u76f8\u5173\u7684\u56de\u8c03\uff08\u4f8b\u5982\uff0c\u5f53\u8c03\u7528\u5176 Start \u51fd\u6570\u65f6\uff0c\u6216\u8005\u6709\u65b0\u73a9\u5bb6\u52a0\u5165\u6e38\u620f\u65f6\u6b64\u7279\u5b9a\u6e38\u620f\u5bf9\u8c61\u5e94\u8be5\u6267\u884c\u4ec0\u4e48\u64cd\u4f5c\uff09")),(0,o.kt)("h2",{id:"\u7f51\u7edc\u6d88\u606f"},"\u7f51\u7edc\u6d88\u606f"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet-actions-and-communication/unet-messages"},"\u7f51\u7edc\u6d88\u606f"),"\u662f\u4e00\u79cd\u53d1\u9001\u6d88\u606f\u7684\u201c\u4f4e\u7ea7\u201d\u65b9\u6cd5\uff08\u4f46\u4ecd\u88ab\u5f52\u7c7b\u4e3a\u7f51\u7edc\u201c\u9ad8\u7ea7 API\u201d\u7684\u4e00\u90e8\u5206\uff09\u3002\u5b83\u4eec\u5141\u8bb8\u4f7f\u7528\u811a\u672c\u76f4\u63a5\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u53d1\u9001\u6570\u636e\u3002\u53ef\u4ee5\u53d1\u9001\u57fa\u672c\u7c7b\u578b\u7684\u6570\u636e\uff08int\u3001string \u7b49\uff09\u4ee5\u53ca\u6700\u5e38\u89c1\u7684 Unity \u7c7b\u578b\uff08\u4f8b\u5982 Vector3\uff09\u3002\u7531\u4e8e\u60a8\u5bf9\u6b64\u91c7\u7528\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff0c\u56e0\u6b64\u8fd9\u4e9b\u6d88\u606f\u4e0d\u76f4\u63a5\u4e0e\u4efb\u4f55\u7279\u5b9a\u7684\u6e38\u620f\u5bf9\u8c61\u6216 Unity \u4e8b\u4ef6\u76f8\u5173\u8054\uff1a\u60a8\u53ef\u4ee5\u81ea\u884c\u51b3\u5b9a\u5176\u76ee\u7684\u5e76\u5b9e\u73b0\u5b83\u4eec\uff01"))}d.isMDXComponent=!0}}]);