"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18595],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},C=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),C=l(n),m=o,d=C["".concat(p,".").concat(m)]||C[m]||u[m]||i;return n?r.createElement(d,c(c({ref:e},s),{},{components:n})):r.createElement(d,c({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,c=new Array(i);c[0]=C;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}C.displayName="MDXCreateElement"},12961:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={id:"ContinuousCollisionDetection",title:"\u8fde\u7eed\u78b0\u649e\u68c0\u6d4b (CCD)",slug:"/physics-overview/continuous-collision-detection"},p="\u8fde\u7eed\u78b0\u649e\u68c0\u6d4b (CCD)",l={unversionedId:"physics-section/physics-overview/ContinuousCollisionDetection",id:"physics-section/physics-overview/ContinuousCollisionDetection",title:"\u8fde\u7eed\u78b0\u649e\u68c0\u6d4b (CCD)",description:"CCD \u786e\u4fdd\u5feb\u901f\u79fb\u52a8\u7684\u7269\u4f53\u4e0e\u5bf9\u8c61\u78b0\u649e\uff0c\u800c\u4e0d\u4f1a\u7a7f\u8fc7\u8fd9\u4e9b\u5bf9\u8c61\u3002Unity \u63d0\u4f9b\u4ee5\u4e0b CCD \u65b9\u6cd5\uff1a",source:"@site/docs/physics-section/physics-overview/continuous-collision-detection.md",sourceDirName:"physics-section/physics-overview",slug:"/physics-overview/continuous-collision-detection",permalink:"/docs/physics-overview/continuous-collision-detection",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/physics-section/physics-overview/continuous-collision-detection.md",tags:[],version:"current",frontMatter:{id:"ContinuousCollisionDetection",title:"\u8fde\u7eed\u78b0\u649e\u68c0\u6d4b (CCD)",slug:"/physics-overview/continuous-collision-detection"},sidebar:"tutorialSidebar",previous:{title:"\u78b0\u649e\u4f53",permalink:"/docs/physics-overview/colliders-overview"},next:{title:"\u5173\u8282",permalink:"/docs/physics-overview/joints"}},s={},u=[{value:"\u57fa\u4e8e\u626b\u63a0\u7684 CCD",id:"\u57fa\u4e8e\u626b\u63a0\u7684-ccd",level:2},{value:"\u63a8\u65ad\u6027 CCD",id:"\u63a8\u65ad\u6027-ccd",level:2}],C={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},C,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8fde\u7eed\u78b0\u649e\u68c0\u6d4b-ccd"},"\u8fde\u7eed\u78b0\u649e\u68c0\u6d4b (CCD)"),(0,i.kt)("p",null,"CCD \u786e\u4fdd\u5feb\u901f\u79fb\u52a8\u7684\u7269\u4f53\u4e0e\u5bf9\u8c61\u78b0\u649e\uff0c\u800c\u4e0d\u4f1a\u7a7f\u8fc7\u8fd9\u4e9b\u5bf9\u8c61\u3002Unity \u63d0\u4f9b\u4ee5\u4e0b CCD \u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E4%BA%8E%E6%89%AB%E6%8E%A0%E7%9A%84-ccd"},"\u57fa\u4e8e\u626b\u63a0\u7684 CCD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%8E%A8%E6%96%AD%E6%80%A7-ccd"},"\u63a8\u65ad\u6027 CCD"))),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u57fa\u4e8e\u626b\u63a0\u7684 CCD\uff0c\u8bf7\u5728 Inspector \u7a97\u53e3\u4e2d\u9009\u62e9\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"/docs/physics3dreference/class-rigidbody"},"\u521a\u4f53 (RigidBody)"),"\uff0c\u5e76\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Collision Detection"),"  \u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Continuous"),"  \u6216  ",(0,i.kt)("strong",{parentName:"p"},"Continuous Dynamic")," \u3002\u8981\u4f7f\u7528\u63a8\u65ad\u6027 CCD\uff0c\u8bf7\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Collision Detection"),"  \u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Continuous Speculative")," \u3002"),(0,i.kt)("h2",{id:"\u57fa\u4e8e\u626b\u63a0\u7684-ccd"},"\u57fa\u4e8e\u626b\u63a0\u7684 CCD"),(0,i.kt)("p",null,"\u57fa\u4e8e\u626b\u63a0\u7684 CCD \u91c7\u7528\u649e\u51fb\u65f6\u95f4 (TOI) \u7b97\u6cd5\uff0c\u901a\u8fc7\u626b\u63a0\u5bf9\u8c61\u7684\u524d\u5411\u8f68\u8ff9\u6765\u8ba1\u7b97\u5bf9\u8c61\u7684\u6f5c\u5728\u78b0\u649e\uff08\u91c7\u7528\u5bf9\u8c61\u7684\u5f53\u524d\u901f\u5ea6\uff09\u3002\u5982\u679c\u6cbf\u5bf9\u8c61\u79fb\u52a8\u65b9\u5411\u6709\u63a5\u89e6\uff0c\u8be5\u7b97\u6cd5\u4f1a\u8ba1\u7b97\u649e\u51fb\u65f6\u95f4\u5e76\u79fb\u52a8\u5bf9\u8c61\u76f4\u81f3\u8fbe\u5230\u8be5\u65f6\u95f4\u3002\u8be5\u7b97\u6cd5\u53ef\u4ece\u8be5\u65f6\u95f4\u5f00\u59cb\u6267\u884c\u5b50\u6b65\u9aa4\uff0c\u5373\u8ba1\u7b97 TOI \u4e4b\u540e\u7684\u901f\u5ea6\uff0c\u7136\u540e\u91cd\u65b0\u626b\u63a0\uff0c\u4ee3\u4ef7\u662f\u9700\u8981\u7ecf\u5386\u66f4\u591a\u7684 CPU \u5468\u671f\u3002"),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u56e0\u4e3a\u6b64\u65b9\u6cd5\u4f9d\u8d56\u4e8e\u7ebf\u6027\u626b\u63a0\uff0c\u6240\u4ee5\u4f1a\u5ffd\u7565\u7269\u4f53\u7684\u89d2\u8fd0\u52a8\uff0c\u8fd9\u5728\u5bf9\u8c61\u8fc5\u901f\u65cb\u8f6c\u65f6\u4f1a\u5f15\u8d77\u7a7f\u96a7\u6548\u5e94\u3002\u4f8b\u5982\uff0c\u5f39\u7403\u673a\u4e0a\u7684\u5f39\u7403\u6746\u56fa\u5b9a\u5728\u4e00\u7aef\uff0c\u56f4\u7ed5\u4e00\u4e2a\u56fa\u5b9a\u70b9\u65cb\u8f6c\u3002\u5f39\u7403\u6746\u53ea\u505a\u89d2\u8fd0\u52a8\uff0c\u4e0d\u505a\u7ebf\u6027\u8fd0\u52a8\u3002\u56e0\u6b64\uff0c\u5f88\u5bb9\u6613\u6253\u4e0d\u4e2d\u5f39\u7403\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpeculativeCCD1.gif",alt:"\u5df2\u542f\u7528 Continuous Dynamic \u5c5e\u6027\u7684\u7ec6\u6746\u6e38\u620f\u5bf9\u8c61\u3002\u7ed5\u8f74\u5fc3\u70b9\u5feb\u901f\u65cb\u8f6c\u65f6\uff0c\u6b64\u6746\u4e0d\u4f1a\u4e0e\u7403\u4f53\u63a5\u89e6\u3002"})),(0,i.kt)("p",null,"\u5df2\u542f\u7528 Continuous Dynamic \u5c5e\u6027\u7684\u7ec6\u6746\u6e38\u620f\u5bf9\u8c61\u3002\u7ed5\u8f74\u5fc3\u70b9\u5feb\u901f\u65cb\u8f6c\u65f6\uff0c\u6b64\u6746\u4e0d\u4f1a\u4e0e\u7403\u4f53\u63a5\u89e6\u3002"),(0,i.kt)("p",null,"\u6b64\u65b9\u6cd5\u7684\u53e6\u4e00\u4e2a\u95ee\u9898\u662f\u6027\u80fd\u95ee\u9898\u3002\u5982\u679c\u9644\u8fd1\u6709\u5927\u91cf\u542f\u7528 CCD \u7684\u9ad8\u901f\u5bf9\u8c61\uff0cCCD \u7684\u5f00\u9500\u5c06\u7531\u4e8e\u8fdb\u884c\u989d\u5916\u7684\u626b\u63a0\u800c\u5f88\u5feb\u589e\u52a0\uff0c\u56e0\u6b64\u7269\u7406\u5f15\u64ce\u4e0d\u5f97\u4e0d\u6267\u884c\u66f4\u591a\u7684 CCD \u5b50\u6b65\u9aa4\u3002"),(0,i.kt)("h2",{id:"\u63a8\u65ad\u6027-ccd"},"\u63a8\u65ad\u6027 CCD"),(0,i.kt)("p",null,"\u63a8\u65ad\u6027 CCD \u7684\u5de5\u4f5c\u539f\u7406\u662f\u57fa\u4e8e\u5bf9\u8c61\u7684\u7ebf\u6027\u8fd0\u52a8\u548c\u89d2\u8fd0\u52a8\u589e\u5927\u4e00\u4e2a\u5bf9\u8c61\u7684\u7c97\u7b5b\u9636\u6bb5\u8f74\u5bf9\u9f50\u6700\u5c0f\u5305\u56f4\u76d2 (AABB)\u3002\u8be5\u7b97\u6cd5\u662f\u4e00\u79cd\u63a8\u6d4b\u6027\u7684\u7b97\u6cd5\uff0c\u56e0\u4e3a\u4f1a\u9009\u53d6\u4e0b\u4e00\u7269\u7406\u6b65\u9aa4\u4e2d\u7684\u6240\u6709\u6f5c\u5728\u89e6\u70b9\u3002\u7136\u540e\u5c06\u6240\u6709\u89e6\u70b9\u9001\u5165\u89e3\u7b97\u5668\uff0c\u56e0\u6b64\u53ef\u786e\u4fdd\u6ee1\u8db3\u6240\u6709\u7684\u89e6\u70b9\u7ea6\u675f\uff0c\u4f7f\u5bf9\u8c61\u4e0d\u4f1a\u7a7f\u8fc7\u4efb\u4f55\u78b0\u649e\u3002"),(0,i.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"t0"),"  \u5f00\u59cb\u79fb\u52a8\u7684\u7403\u4f53\u5982\u4f55\u83b7\u5f97\u9884\u671f\u7684  ",(0,i.kt)("strong",{parentName:"p"},"t1"),"  \u4f4d\u7f6e\uff08\u5982\u679c\u5176\u8def\u5f84\u4e2d\u6ca1\u6709\u5899\uff09\u3002\u901a\u8fc7\u4f7f\u7528\u76ee\u6807\u59ff\u52bf\u5c06 AABB \u6269\u5927\uff0c\u63a8\u6d4b\u6027\u7b97\u6cd5\u9009\u53d6\u4e0e  ",(0,i.kt)("strong",{parentName:"p"},"n1"),"  \u548c  ",(0,i.kt)("strong",{parentName:"p"},"n2"),"  \u6cd5\u7ebf\u4e4b\u95f4\u7684\u4e24\u4e2a\u89e6\u70b9\u3002\u7136\u540e\uff0c\u8be5\u7b97\u6cd5\u544a\u8bc9\u89e3\u7b97\u5668\u9075\u5faa\u8fd9\u4e9b\u89e6\u70b9\uff0c\u4f7f\u7403\u4f53\u4e0d\u4f1a\u7a7f\u8fc7\u5899\u58c1\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpeculativeCCD2.png",alt:"SpeculativeCCD2.png"})),(0,i.kt)("p",null,"\u57fa\u4e8e\u5f53\u524d\u901f\u5ea6\u5e76\u6269\u5927\u7684 AABB \u6709\u52a9\u4e8e\u68c0\u6d4b\u6cbf\u8fd0\u52a8\u8f68\u8ff9\u7684\u6240\u6709\u6f5c\u5728\u89e6\u70b9\uff0c\u4f7f\u89e3\u7b97\u5668\u80fd\u591f\u9632\u6b62\u5bf9\u8c61\u7a7f\u8fc7\u53bb\u3002"),(0,i.kt)("p",null,"\u63a8\u6d4b\u6027 CCD \u7684\u6210\u672c\u901a\u5e38\u4f4e\u4e8e\u57fa\u4e8e\u626b\u63a0\u7684\u65b9\u6cd5\uff0c\u56e0\u4e3a\u53ea\u5728\u78b0\u649e\u68c0\u6d4b\u9636\u6bb5\uff08\u800c\u4e0d\u5728\u6c42\u89e3\u548c\u79ef\u5206\u9636\u6bb5\uff09\u8ba1\u7b97\u89e6\u70b9\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u63a8\u6d4b\u6027 CCD \u6839\u636e\u5bf9\u8c61\u7684\u7ebf\u6027\u8fd0\u52a8\u548c\u89d2\u8fd0\u52a8\u6765\u6269\u5c55\u7c97\u7b5b\u9636\u6bb5 AABB\uff0c\u56e0\u6b64\u80fd\u53d1\u73b0\u57fa\u4e8e\u626b\u63a0\u7684 CCD \u53ef\u80fd\u9057\u6f0f\u7684\u89e6\u70b9\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpeculativeCCD3.gif",alt:"\u5df2\u542f\u7528\u63a8\u6d4b\u6027 CCD \u7684\u7ec6\u6746\u6e38\u620f\u5bf9\u8c61\u3002\u7ed5\u8f74\u5fc3\u70b9\u5feb\u901f\u65cb\u8f6c\u65f6\uff0c\u6b64\u6746\u4e0e\u7403\u4f53\u63a5\u89e6\u5e76\u53d1\u751f\u78b0\u649e\u3002"})),(0,i.kt)("p",null,"\u5df2\u542f\u7528\u63a8\u6d4b\u6027 CCD \u7684\u7ec6\u6746\u6e38\u620f\u5bf9\u8c61\u3002\u7ed5\u8f74\u5fc3\u70b9\u5feb\u901f\u65cb\u8f6c\u65f6\uff0c\u6b64\u6746\u4e0e\u7403\u4f53\u63a5\u89e6\u5e76\u53d1\u751f\u78b0\u649e\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u63a8\u6d4b\u6027 CCD \u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e7d\u7075\u78b0\u649e\uff1b\u5728\u8fd9\u79cd\u78b0\u649e\u4e2d\uff0c\u5bf9\u8c61\u7684\u8fd0\u52a8\u53d7\u5230\u63a8\u6d4b\u6027\u89e6\u70b9\u7684\u5f71\u54cd\uff0c\u800c\u8fd9\u662f\u4e0d\u5e94\u53d1\u751f\u7684\u3002\u8fd9\u662f\u56e0\u4e3a\u63a8\u6d4b\u6027 CCD \u6839\u636e\u6700\u8fd1\u70b9\u7b97\u6cd5\u6536\u96c6\u6240\u6709\u6f5c\u5728\u89e6\u70b9\uff0c\u6240\u4ee5\u89e6\u70b9\u6cd5\u7ebf\u4e0d\u592a\u51c6\u786e\u3002\u8fd9\u901a\u5e38\u4f1a\u4f7f\u9ad8\u901f\u5bf9\u8c61\u6cbf\u7740\u7ec6\u5206\u7684\u78b0\u649e\u7279\u5f81\u6ed1\u52a8\u5e76\u8df3\u8d77\u6765\uff0c\u4f46\u4e0d\u5e94\u8be5\u8fd9\u6837\u3002\u4f8b\u5982\uff0c\u4e0b\u56fe\u4e2d\uff0c\u7403\u4f53\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"t0"),"  \u5f00\u59cb\u5411\u53f3\u6c34\u5e73\u79fb\u52a8\uff0c\u79ef\u5206\u540e\u7684\u9884\u6d4b\u4f4d\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"t1")," \u3002\u6269\u5927\u540e\u7684 AABB \u4e0e\u6846\u5f62  ",(0,i.kt)("strong",{parentName:"p"},"b0"),"  \u548c  ",(0,i.kt)("strong",{parentName:"p"},"b1"),"  \u91cd\u53e0\uff0c\u800c CCD \u5728  ",(0,i.kt)("strong",{parentName:"p"},"c0"),"  \u548c  ",(0,i.kt)("strong",{parentName:"p"},"c1"),"  \u4ea7\u751f\u4e24\u4e2a\u63a8\u6d4b\u6027\u89e6\u70b9\u3002\u7531\u4e8e\u63a8\u6d4b\u6027 CCD \u4f7f\u7528\u6700\u8fd1\u70b9\u7b97\u6cd5\u6765\u751f\u6210\u89e6\u70b9\uff0c ",(0,i.kt)("strong",{parentName:"p"},"c0"),"  \u5177\u6709\u975e\u5e38\u503e\u659c\u7684\u6cd5\u7ebf\uff0c\u56e0\u6b64\u89e3\u7b97\u5668\u4f1a\u5c06\u5176\u89c6\u4f5c\u659c\u5761\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpeculativeCCD4.png",alt:"\u89e3\u7b97\u5668\u8ba4\u4e3a c0 \u5904\u7684\u89e6\u70b9\u662f\u659c\u5761\uff0c\u56e0\u4e3a\u6700\u8fd1\u70b9\u7b97\u6cd5\u751f\u6210\u4e86\u4e0d\u51c6\u786e\u7684\u89e6\u70b9\u6cd5\u7ebf"})),(0,i.kt)("p",null,"\u89e3\u7b97\u5668\u8ba4\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"c0"),"  \u5904\u7684\u89e6\u70b9\u662f\u659c\u5761\uff0c\u56e0\u4e3a\u6700\u8fd1\u70b9\u7b97\u6cd5\u751f\u6210\u4e86\u4e0d\u51c6\u786e\u7684\u89e6\u70b9\u6cd5\u7ebf"),(0,i.kt)("p",null,"\u8fd9\u79cd\u975e\u5e38\u503e\u659c\u7684\u6cd5\u7ebf\u5bfc\u81f4  ",(0,i.kt)("strong",{parentName:"p"},"t1"),"  \u5728\u79ef\u5206\u540e\u5411\u4e0a\u8df3\u52a8\uff0c\u800c\u4e0d\u662f\u7b14\u76f4\u5411\u524d\u79fb\u52a8\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpeculativeCCD5.gif",alt:"\u5728 c0 \u5904\u4ea7\u751f\u7684\u5e7d\u7075\u78b0\u649e\u5bfc\u81f4\u7403\u4f53\u9519\u8bef\u5730\u5411\u4e0a\u8df3\u8dc3\uff0c\u800c\u4e0d\u662f\u7b14\u76f4\u5411\u524d\u79fb\u52a8"})),(0,i.kt)("p",null,"\u5728 c0 \u5904\u4ea7\u751f\u7684\u5e7d\u7075\u78b0\u649e\u5bfc\u81f4\u7403\u4f53\u9519\u8bef\u5730\u5411\u4e0a\u8df3\u8dc3\uff0c\u800c\u4e0d\u662f\u7b14\u76f4\u5411\u524d\u79fb\u52a8"),(0,i.kt)("p",null,"\u63a8\u6d4b\u6027 CCD \u8fd8\u53ef\u80fd\u5bfc\u81f4\u53d1\u751f\u7a7f\u96a7\uff0c\u56e0\u4e3a\u53ea\u4f1a\u5728\u78b0\u649e\u68c0\u6d4b\u9636\u6bb5\u8ba1\u7b97\u63a8\u6d4b\u6027\u89e6\u70b9\u3002\u5728\u89e6\u70b9\u6c42\u89e3\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u4ece\u89e3\u7b97\u5668\u83b7\u5f97\u592a\u591a\u80fd\u91cf\uff0c\u5728\u79ef\u5206\u540e\uff0c\u5176\u6700\u7ec8\u4f4d\u7f6e\u53ef\u80fd\u5728\u521d\u59cb\u6269\u5927\u7684 AABB \u4e4b\u5916\u3002\u5982\u679c\u5728\u7d27\u90bb AABB \u7684\u5916\u90e8\u53d1\u751f\u78b0\u649e\uff0c\u5bf9\u8c61\u4f1a\u4ece\u53f3\u8fb9\u7a7f\u51fa\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u56fe\u663e\u793a\u4e86\u7403\u4f53\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"t0"),"  \u5411\u5de6\u79fb\u52a8\uff0c\u800c\u7403\u6746\u987a\u65f6\u9488\u65cb\u8f6c\u3002\u5982\u679c\u7403\u4f53\u4ece\u649e\u51fb\u4e2d\u83b7\u5f97\u592a\u591a\u80fd\u91cf\uff0c\u6700\u7ec8\u53ef\u80fd\u79bb\u5f00\u6269\u5927\u7684 AABB\uff08\u7ea2\u70b9\u77e9\u5f62\uff09\uff0c\u843d\u5728  ",(0,i.kt)("strong",{parentName:"p"},"t1"),"  \u5904\u3002\u5982\u679c\u5728\u7d27\u90bb AABB \u7684\u5916\u90e8\u53d1\u751f\u78b0\u649e\uff08\u5982\u4e0b\u9762\u7684\u84dd\u8272\u6846\u6240\u793a\uff09\uff0c\u7403\u4f53\u6700\u7ec8\u53ef\u80fd\u4f1a\u4ece\u53f3\u8fb9\u7a7f\u51fa\u3002\u8fd9\u662f\u56e0\u4e3a\u89e3\u7b97\u5668\u53ea\u8ba1\u7b97\u6269\u5927\u7684 AABB \u7684\u5185\u90e8\u89e6\u70b9\uff0c\u5728\u6c42\u89e3\u548c\u79ef\u5206\u9636\u6bb5\u4e0d\u4f1a\u6267\u884c\u78b0\u649e\u68c0\u6d4b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpeculativeCCD6.png",alt:"\u5177\u6709\u6269\u5927\u7684 AABB \u7684\u7403\u4f53\u4f7f\u7528\u63a8\u6d4b\u6027 CCD\uff0c\u6b64\u7b97\u6cd5\u4ec5\u5728\u78b0\u649e\u68c0\u6d4b\u9636\u6bb5\u8ba1\u7b97\u89e6\u70b9\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u53d1\u751f\u7a7f\u8fc7\u4e8b\u4ef6"})),(0,i.kt)("p",null,"\u5177\u6709\u6269\u5927\u7684 AABB \u7684\u7403\u4f53\u4f7f\u7528\u63a8\u6d4b\u6027 CCD\uff0c\u6b64\u7b97\u6cd5\u4ec5\u5728\u78b0\u649e\u68c0\u6d4b\u9636\u6bb5\u8ba1\u7b97\u89e6\u70b9\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u53d1\u751f\u7a7f\u8fc7\u4e8b\u4ef6"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2018\u201310\u201312 \u9875\u9762\u5df2\u53d1\u5e03"),(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.3/Documentation/Manual/30_search.html?q=newin20183"},"2018.3")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u63a8\u6d4b\u6027\u78b0\u649e\u68c0\u6d4b NewIn20183")))}m.isMDXComponent=!0}}]);