"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59574],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,u(u({ref:e},c),{},{components:n})):r.createElement(k,u({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,u=new Array(i);u[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,u[1]=o;for(var p=2;p<i;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61850:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],o={id:"UNetConcepts",title:"\u7f51\u7edc HLAPI \u7cfb\u7edf\u6982\u5ff5",slug:"/unet-using-hlapi/unet-concepts"},l="\u7f51\u7edc HLAPI \u7cfb\u7edf\u6982\u5ff5",p={unversionedId:"unet/unet-using-hlapi/UNetConcepts",id:"unet/unet-using-hlapi/UNetConcepts",title:"\u7f51\u7edc HLAPI \u7cfb\u7edf\u6982\u5ff5",description:"|  |",source:"@site/docs/unet/unet-using-hlapi/unet-concepts.md",sourceDirName:"unet/unet-using-hlapi",slug:"/unet-using-hlapi/unet-concepts",permalink:"/docs/unet-using-hlapi/unet-concepts",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unet-concepts.md",tags:[],version:"current",frontMatter:{id:"UNetConcepts",title:"\u7f51\u7edc HLAPI \u7cfb\u7edf\u6982\u5ff5",slug:"/unet-using-hlapi/unet-concepts"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u6d88\u606f",permalink:"/docs/unet-actions-and-communication/unet-messages"},next:{title:"\u5904\u7406\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668",permalink:"/docs/unet-dealing-with-clients-servers"}},c={},s=[{value:"\u670d\u52a1\u5668\u548c\u4e3b\u673a",id:"\u670d\u52a1\u5668\u548c\u4e3b\u673a",level:2},{value:"\u5b9e\u4f8b\u5316\u548c\u751f\u6210",id:"\u5b9e\u4f8b\u5316\u548c\u751f\u6210",level:2},{value:"\u73a9\u5bb6\u548c\u672c\u5730\u73a9\u5bb6",id:"\u73a9\u5bb6\u548c\u672c\u5730\u73a9\u5bb6",level:2},{value:"\u6388\u6743",id:"\u6388\u6743",level:2}],m={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7f51\u7edc-hlapi-\u7cfb\u7edf\u6982\u5ff5"},"\u7f51\u7edc HLAPI \u7cfb\u7edf\u6982\u5ff5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u6ce8\u610f")," \uff1a\u5df2\u5f03\u7528 UNet\uff0c\u672a\u6765\u4f1a\u5c06\u5176\u4ece Unity \u4e2d\u5220\u9664\u3002\u4e00\u4e2a\u65b0\u7cfb\u7edf\u6b63\u5728\u5f00\u53d1\u4e2d\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\u548c\u540e\u7eed\u6b65\u9aa4\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"td",href:"https://blogs.unity3d.com/2020/12/03/accelerating-unitys-new-gameobjects-multiplayer-networking-framework/"},"\u535a\u5ba2\u6587\u7ae0"),"\u3002")))),(0,i.kt)("h2",{id:"\u670d\u52a1\u5668\u548c\u4e3b\u673a"},"\u670d\u52a1\u5668\u548c\u4e3b\u673a"),(0,i.kt)("p",null,"\u5728 Unity \u7684\u9ad8\u7ea7 API (HLAPI) \u7cfb\u7edf\u4e2d\uff0c\u591a\u4eba\u6e38\u620f\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u670d\u52a1\u5668\uff1a")," \u670d\u52a1\u5668\u662f\u6240\u6709\u5176\u4ed6\u73a9\u5bb6\u5728\u60f3\u8981\u4e00\u8d77\u73a9\u6e38\u620f\u65f6\u8fde\u63a5\u7684\u6e38\u620f\u5b9e\u4f8b\u3002\u670d\u52a1\u5668\u901a\u5e38\u7ba1\u7406\u6e38\u620f\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u4f8b\u5982\u4fdd\u5b58\u5206\u6570\u5e76\u5c06\u8be5\u6570\u636e\u4f20\u9001\u56de\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef\uff1a")," \u5ba2\u6237\u7aef\u662f\u901a\u5e38\u4ece\u4e0d\u540c\u8ba1\u7b97\u673a\u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u6e38\u620f\u5b9e\u4f8b\u3002\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u7f51\u7edc\u6216\u4e92\u8054\u7f51\u8fdb\u884c\u8fde\u63a5\u3002")),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef")," \u662f\u8fde\u63a5\u5230 ",(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668")," \u7684\u6e38\u620f\u5b9e\u4f8b\uff0c\u56e0\u6b64\u6e38\u620f\u73a9\u5bb6\u53ef\u4ee5\u4e0e\u5728\u81ea\u5df1\u5ba2\u6237\u7aef\u4e0a\u8fde\u63a5\u7684\u5176\u4ed6\u73a9\u5bb6\u4e00\u8d77\u73a9\u6e38\u620f\u3002"),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u53ef\u4ee5\u662f\u201c\u4e13\u7528\u670d\u52a1\u5668\u201d\uff0c\u4e5f\u53ef\u4ee5\u662f\u201c\u4e3b\u673a\u670d\u52a1\u5668\u201d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e13\u7528\u670d\u52a1\u5668")," \uff1a\u8fd9\u662f\u5b8c\u5168\u4e3a\u4e86\u4f5c\u4e3a\u670d\u52a1\u5668\u800c\u8fd0\u884c\u7684\u6e38\u620f\u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u673a\u670d\u52a1\u5668")," \uff1a\u5f53\u6ca1\u6709\u4e13\u7528\u670d\u52a1\u5668\u65f6\uff0c\u5176\u4e2d\u4e00\u4e2a\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u626e\u6f14\u670d\u52a1\u5668\u7684\u89d2\u8272\u3002\u8be5\u5ba2\u6237\u7aef\u662f\u201c\u4e3b\u673a\u670d\u52a1\u5668\u201d\u3002\u4e3b\u673a\u670d\u52a1\u5668\u521b\u5efa\u6e38\u620f\u7684\u5355\u4e2a\u5b9e\u4f8b\uff08\u79f0\u4e3a\u4e3b\u673a\uff09\uff0c\u6b64\u5b9e\u4f8b\u5c06\u540c\u65f6\u5145\u5f53\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u3002")),(0,i.kt)("p",null,"\u4e0b\u56fe\u8868\u793a\u4e86\u591a\u4eba\u6e38\u620f\u4e2d\u7684\u4e09\u540d\u73a9\u5bb6\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0c\u4e00\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u5145\u5f53\u4e3b\u673a\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5ba2\u6237\u7aef\u672c\u8eab\u4e3a\u201c\u672c\u5730\u5ba2\u6237\u7aef\u201d\u3002\u672c\u5730\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u4e3b\u673a\u670d\u52a1\u5668\uff0c\u4e8c\u8005\u90fd\u5728\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u3002\u53e6\u5916\u4e24\u4e2a\u73a9\u5bb6\u662f\u8fdc\u7a0b\u5ba2\u6237\u7aef\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u4f4d\u4e8e\u4e0d\u540c\u7684\u8ba1\u7b97\u673a\u4e0a\uff0c\u4f46\u5747\u8fde\u63a5\u5230\u4e3b\u673a\u670d\u52a1\u5668\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NetworkHost.png",alt:"\u6b64\u56fe\u663e\u793a\u4e86\u8fde\u63a5\u5230\u4e3b\u673a\u7684\u4e24\u4e2a\u8fdc\u7a0b\u5ba2\u6237\u7aef\u3002"})),(0,i.kt)("p",null,"\u6b64\u56fe\u663e\u793a\u4e86\u8fde\u63a5\u5230\u4e3b\u673a\u7684\u4e24\u4e2a\u8fdc\u7a0b\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u4e3b\u673a")," \u662f\u6e38\u620f\u7684\u5355\u4e2a\u5b9e\u4f8b\uff0c\u540c\u65f6\u5145\u5f53 ",(0,i.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef")," \u3002\u4e3b\u673a\u4f7f\u7528\u7279\u6b8a\u7c7b\u578b\u7684\u5185\u90e8\u5ba2\u6237\u7aef\u8fdb\u884c\u672c\u5730\u5ba2\u6237\u7aef\u901a\u4fe1\uff0c\u800c\u5176\u4ed6\u5ba2\u6237\u7aef\u5219\u662f\u8fdc\u7a0b\u5ba2\u6237\u7aef\u3002\u672c\u5730\u5ba2\u6237\u7aef\u901a\u8fc7\u76f4\u63a5\u51fd\u6570\u8c03\u7528\u548c\u6d88\u606f\u961f\u5217\u7684\u5f62\u5f0f\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u901a\u4fe1\uff0c\u56e0\u4e3a\u5b83\u5728\u540c\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u3002\u672c\u5730\u5ba2\u6237\u7aef\u5b9e\u9645\u4e0a\u4e0e\u670d\u52a1\u5668\u5171\u4eab\u573a\u666f\u3002\u8fdc\u7a0b\u5ba2\u6237\u7aef\u901a\u8fc7\u5e38\u89c4\u7f51\u7edc\u8fde\u63a5\u4e0e\u670d\u52a1\u5668\u901a\u4fe1\u3002\u5982\u679c\u4f7f\u7528 Unity \u7684 HLAPI\uff0c\u8fd9\u4e00\u5207\u90fd\u5c06\u81ea\u52a8\u5904\u7406\u3002"),(0,i.kt)("p",null,"Multiplayer \u7cfb\u7edf\u7684\u76ee\u6807\u4e4b\u4e00\u662f\u4f7f\u672c\u5730\u5ba2\u6237\u7aef\u548c\u8fdc\u7a0b\u5ba2\u6237\u7aef\u7684\u4ee3\u7801\u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u5728\u5f00\u53d1\u6e38\u620f\u65f6\u5927\u591a\u6570\u65f6\u95f4\u53ea\u9700\u8981\u8003\u8651\u4e00\u79cd\u7c7b\u578b\u7684\u5ba2\u6237\u7aef\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cUnity \u4f1a\u81ea\u52a8\u5904\u7406\u8fd9\u79cd\u5dee\u5f02\uff0c\u56e0\u6b64\u60a8\u57fa\u672c\u4e0d\u9700\u8981\u8003\u8651\u5728\u672c\u5730\u5ba2\u6237\u7aef\u6216\u8fdc\u7a0b\u5ba2\u6237\u7aef\u4e0a\u8fd0\u884c\u7684\u4ee3\u7801\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u5316\u548c\u751f\u6210"},"\u5b9e\u4f8b\u5316\u548c\u751f\u6210"),(0,i.kt)("p",null,"\u5728 Unity \u4e2d\u5f00\u53d1\u5355\u4eba\u6e38\u620f\u65f6\uff0c\u901a\u5e38\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"GameObject.Instantiate")," \u65b9\u6cd5\u5728\u8fd0\u884c\u65f6\u521b\u5efa\u65b0\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u4f46\u662f\uff0c\u5bf9\u4e8e Multiplayer \u7cfb\u7edf\uff0c\u670d\u52a1\u5668\u672c\u8eab\u5fc5\u987b\u201c\u751f\u6210\u201d\u6e38\u620f\u5bf9\u8c61\uff0c\u4f7f\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\u5728\u8054\u7f51\u6e38\u620f\u4e2d\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002\u670d\u52a1\u5668\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u4f1a\u89e6\u53d1\u5728\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u4e0a\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u7684\u884c\u4e3a\u3002\u751f\u6210\u7cfb\u7edf\u8d1f\u8d23\u7ba1\u7406\u6e38\u620f\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\uff0c\u5e76\u6839\u636e\u6e38\u620f\u5bf9\u8c61\u7684\u8bbe\u7f6e\u540c\u6b65\u6e38\u620f\u5bf9\u8c61\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u8054\u7f51\u5b9e\u4f8b\u5316\u548c\u751f\u6210\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5173\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-spawning"},"\u751f\u6210\u6e38\u620f\u5bf9\u8c61"),"\u7684\u6587\u6863\u3002"),(0,i.kt)("h2",{id:"\u73a9\u5bb6\u548c\u672c\u5730\u73a9\u5bb6"},"\u73a9\u5bb6\u548c\u672c\u5730\u73a9\u5bb6"),(0,i.kt)("p",null,"Unity \u7684\u591a\u73a9\u5bb6 HLAPI \u7cfb\u7edf\u5bf9\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u7684\u5904\u7406\u65b9\u5f0f\u4e0d\u540c\u4e8e\u5bf9\u975e\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u7684\u5904\u7406\u65b9\u5f0f\u3002\u5f53\u65b0\u73a9\u5bb6\u52a0\u5165\u6e38\u620f\u65f6\uff08\u5f53\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u65f6\uff09\uff0c\u8be5\u73a9\u5bb6\u7684\u6e38\u620f\u5bf9\u8c61\u6210\u4e3a\u8be5\u73a9\u5bb6\u5ba2\u6237\u7aef\u4e0a\u7684\u201c\u672c\u5730\u73a9\u5bb6\u201d\u6e38\u620f\u5bf9\u8c61\uff0c\u5e76\u4e14 Unity \u5c06\u73a9\u5bb6\u7684\u8fde\u63a5\u4e0e\u73a9\u5bb6\u7684\u6e38\u620f\u5bf9\u8c61\u76f8\u5173\u8054\u3002Unity \u4e3a\u6bcf\u4e2a\u6e38\u620f\u73a9\u5bb6\u5173\u8054\u4e00\u4e2a\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\uff0c\u5e76\u5c06",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-actions-and-communication/unet-actions"},"\u7f51\u7edc\u547d\u4ee4"),"\u8def\u7531\u5230\u8fd9\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u3002\u4e00\u4e2a\u73a9\u5bb6\u4e0d\u80fd\u5728\u53e6\u4e00\u4e2a\u73a9\u5bb6\u7684\u6e38\u620f\u5bf9\u8c61\u4e0a\u8c03\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-actions-and-communication/unet-actions"},"\u547d\u4ee4"),"\uff0c\u53ea\u80fd\u5728\u81ea\u5df1\u7684\u6e38\u620f\u5bf9\u8c61\u4e0a\u8c03\u7528\u547d\u4ee4\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5173\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-players"},"\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61"),"\u7684\u6587\u6863\u3002"),(0,i.kt)("h2",{id:"\u6388\u6743"},"\u6388\u6743"),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u90fd\u53ef\u4ee5\u7ba1\u7406\u6e38\u620f\u5bf9\u8c61\u7684\u884c\u4e3a\u3002\u201c\u6388\u6743\u201d\u7684\u6982\u5ff5\u662f\u6307\u5982\u4f55\u4ee5\u53ca\u5728\u4f55\u5904\u7ba1\u7406\u6e38\u620f\u5bf9\u8c61\u3002Unity \u7684 HLAPI \u5728\u9ed8\u8ba4\u72b6\u6001\u4e0b\u57fa\u4e8e\u201c\u670d\u52a1\u5668\u6388\u6743\u201d\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7684\u670d\u52a1\u5668\uff08\u4e3b\u673a\uff09\u5bf9\u6240\u6709\u4e0d\u4ee3\u8868\u73a9\u5bb6\u7684\u6e38\u620f\u5bf9\u8c61\u5177\u6709\u6388\u6743\u3002\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u662f\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u88ab\u89c6\u4e3a\u5177\u6709\u201c\u672c\u5730\u6388\u6743\u201d\u3002\u6709\u65f6\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528\u4e0d\u540c\u7684\u6388\u6743\u7cfb\u7edf\u6784\u5efa\u6e38\u620f\uff1b\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-authority"},"\u7f51\u7edc\u6388\u6743"),"\u3002"))}d.isMDXComponent=!0}}]);