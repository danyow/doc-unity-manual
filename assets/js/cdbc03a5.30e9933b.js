"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90841],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=i(n),m=a,d=k["".concat(p,".").concat(m)]||k[m]||s[m]||l;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77517:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],u={id:"UNetGettingStarted",title:"\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee",slug:"/unet/unet-getting-started"},p="\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee",i={unversionedId:"unet/UNetGettingStarted",id:"unet/UNetGettingStarted",title:"\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee",description:"|  |",source:"@site/docs/unet/unet-getting-started.md",sourceDirName:"unet",slug:"/unet/unet-getting-started",permalink:"/doc-unity-manual/docs/unet/unet-getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-getting-started.md",tags:[],version:"current",frontMatter:{id:"UNetGettingStarted",title:"\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee",slug:"/unet/unet-getting-started"},sidebar:"tutorialSidebar",previous:{title:"Multiplayer \u52a0\u5bc6\u63d2\u4ef6",permalink:"/doc-unity-manual/docs/unet/unet-encryption-plugins"},next:{title:"\u4f7f\u7528 Network Manager HUD",permalink:"/doc-unity-manual/docs/unet/unet-manager-hud"}},c={},s=[{value:"Network Manager",id:"network-manager",level:2},{value:"\u4f9b\u73a9\u5bb6\u67e5\u627e\u548c\u52a0\u5165\u6e38\u620f\u7684\u7528\u6237\u754c\u9762",id:"\u4f9b\u73a9\u5bb6\u67e5\u627e\u548c\u52a0\u5165\u6e38\u620f\u7684\u7528\u6237\u754c\u9762",level:2},{value:"\u8054\u7f51\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61",id:"\u8054\u7f51\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61",level:2},{value:"\u591a\u4eba\u6e38\u620f\u611f\u77e5\u811a\u672c",id:"\u591a\u4eba\u6e38\u620f\u611f\u77e5\u811a\u672c",level:2}],k={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee"},"\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,l.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,l.kt)("p",null,"\u672c\u9875\u9762\u6982\u8981\u4ecb\u7ecd\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee\u65f6\u6240\u9700\u7684\u6700\u57fa\u672c\u548c\u6700\u5e38\u89c1\u7684\u4e8b\u9879\u3002\u5728\u9879\u76ee\u7684\u9700\u6c42\u65b9\u9762\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Network Manager")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7528\u6237\u754c\u9762")," \uff08\u4f9b\u73a9\u5bb6\u67e5\u627e\u548c\u52a0\u5165\u6e38\u620f\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8054\u7f51 ",(0,l.kt)("strong",{parentName:"li"},"\u73a9\u5bb6\u9884\u5236\u4ef6")," \uff08\u4f9b\u73a9\u5bb6\u63a7\u5236\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709 ",(0,l.kt)("strong",{parentName:"li"},"\u591a\u4eba\u6e38\u620f\u611f\u77e5\u529f\u80fd")," \u7684\u811a\u672c\u548c\u6e38\u620f\u5bf9\u8c61")),(0,l.kt)("p",null,"\u6839\u636e\u5177\u4f53\u60c5\u51b5\uff0c\u6b64\u5217\u8868\u53ef\u80fd\u4f1a\u6709\u6240\u53d8\u5316\uff1b\u4f8b\u5982\uff0c\u5728\u591a\u4eba\u56fd\u9645\u8c61\u68cb\u6e38\u620f\u6216\u5b9e\u65f6\u6218\u7565 (RTS) \u6e38\u620f\u4e2d\uff0c\u4e0d\u9700\u8981\u53ef\u89c1\u7684\u6e38\u620f\u5bf9\u8c61\u6765\u8868\u793a\u73a9\u5bb6\u3002\u4f46\u662f\uff0c\u53ef\u80fd\u4ecd\u7136\u9700\u8981\u4e00\u4e2a\u4e0d\u53ef\u89c1\u7684\u7a7a\u6e38\u620f\u5bf9\u8c61\u6765\u8868\u793a\u73a9\u5bb6\uff0c\u5e76\u9644\u52a0\u4e00\u4e2a\u4e0e\u73a9\u5bb6\u64cd\u4f5c\u76f8\u5173\u7684\u811a\u672c\u3002"),(0,l.kt)("p",null,"\u672c\u4ecb\u7ecd\u9875\u9762\u5305\u542b\u4e0a\u9762\u5217\u51fa\u7684\u6bcf\u4e00\u9879\u7684\u7b80\u8981\u8bf4\u660e\u3002\u4f46\u662f\uff0c\u6bcf\u4e2a\u90e8\u5206\u90fd\u94fe\u63a5\u5230\u66f4\u8be6\u7ec6\u7684\u6587\u6863\uff0c\u60a8\u9700\u8981\u7ee7\u7eed\u9605\u8bfb\u4ee5\u5b8c\u5168\u7406\u89e3\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u5728\u6784\u5efa\u6e38\u620f\u65f6\uff0c\u8fd8\u9700\u8981\u4e86\u89e3\u4e00\u4e9b\u91cd\u8981\u6982\u5ff5\u5e76\u505a\u51fa\u76f8\u5e94\u9009\u62e9\u3002\u8fd9\u4e9b\u6982\u5ff5\u5927\u4f53\u4e0a\u53ef\u6982\u62ec\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5ba2\u6237\u7aef")," \u3001 ",(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1\u5668")," \u548c ",(0,l.kt)("strong",{parentName:"li"},"\u4e3b\u673a")," \u4e4b\u95f4\u7684\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6e38\u620f\u5bf9\u8c61\u548c\u64cd\u4f5c\u7684 ",(0,l.kt)("strong",{parentName:"li"},"\u6388\u6743")," \u6982\u5ff5")),(0,l.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173\u8fd9\u4e9b\u6982\u5ff5\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet-using-hlapi/unet-concepts"},"\u7f51\u7edc\u7cfb\u7edf\u6982\u5ff5"),"\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"network-manager"},"Network Manager"),(0,l.kt)("p",null,"Network Manager \u8d1f\u8d23\u7ba1\u7406\u591a\u4eba\u6e38\u620f\u7684\u7f51\u7edc\u65b9\u9762\u3002\u540c\u4e00\u65f6\u95f4\u5e94\u5728\u573a\u666f\u4e2d\u6fc0\u6d3b\u4e00\u4e2a\uff08\u4e14\u4ec5\u4e00\u4e2a\uff09Network Manager\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NetworkManagerInspector.png",alt:"Network Manager \u7ec4\u4ef6"})),(0,l.kt)("p",null,"Network Manager \u7ec4\u4ef6"),(0,l.kt)("p",null,"Unity \u7684\u5185\u7f6e Network Manager \u7ec4\u4ef6\u5c06\u7528\u4e8e\u7ba1\u7406\u591a\u4eba\u6e38\u620f\u7684\u6240\u6709\u529f\u80fd\u6574\u5408\u5230\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u3002\u5982\u679c\u60a8\u6709\u4e00\u4e9b\u81ea\u5b9a\u4e49\u8981\u6c42\uff0c\u800c\u6b64\u7ec4\u4ef6\u672a\u6db5\u76d6\u8fd9\u4e9b\u8981\u6c42\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u811a\u672c\u7f16\u5199\u81ea\u5df1\u7684 Network Manager \u6765\u4ee3\u66ff\u6b64\u7ec4\u4ef6\u3002\u5982\u679c\u521a\u5f00\u59cb\u4e86\u89e3\u591a\u4eba\u6e38\u620f\uff0c\u5e94\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet/unet-manager"},"Network Manager")," \u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u4f9b\u73a9\u5bb6\u67e5\u627e\u548c\u52a0\u5165\u6e38\u620f\u7684\u7528\u6237\u754c\u9762"},"\u4f9b\u73a9\u5bb6\u67e5\u627e\u548c\u52a0\u5165\u6e38\u620f\u7684\u7528\u6237\u754c\u9762"),(0,l.kt)("p",null,"\u51e0\u4e4e\u6bcf\u4e2a\u591a\u4eba\u6e38\u620f\u90fd\u4e3a\u73a9\u5bb6\u63d0\u4f9b\u4e86\u53d1\u73b0\u3001\u521b\u5efa\u548c\u52a0\u5165\u5355\u4e2a\u6e38\u620f\u201c\u5b9e\u4f8b\u201d\uff08\u4e5f\u79f0\u4e3a\u201c\u6bd4\u8d5b\u201d\uff09\u7684\u65b9\u6cd5\u3002\u6e38\u620f\u7684\u8fd9\u4e00\u90e8\u5206\u901a\u5e38\u79f0\u4e3a\u201c\u5927\u5385\u201d\uff0c\u6709\u65f6\u8fd8\u6709\u804a\u5929\u7b49\u989d\u5916\u529f\u80fd\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NetworkLobbyExample.jpg",alt:"\u5178\u578b\u7684\u591a\u4eba\u6e38\u620f\u5927\u5385\uff0c\u5141\u8bb8\u73a9\u5bb6\u67e5\u627e\u3001\u521b\u5efa\u548c\u52a0\u5165\u6e38\u620f\uff0c\u6765\u81ea\u4e8e Asset Store \u4e2d\u63d0\u4f9b\u7684 TANKS \u7f51\u7edc\u6f14\u793a\u3002"})),(0,l.kt)("p",null,"\u5178\u578b\u7684\u591a\u4eba\u6e38\u620f\u5927\u5385\uff0c\u5141\u8bb8\u73a9\u5bb6\u67e5\u627e\u3001\u521b\u5efa\u548c\u52a0\u5165\u6e38\u620f\uff0c\u6765\u81ea\u4e8e Asset Store \u4e2d\u63d0\u4f9b\u7684 TANKS \u7f51\u7edc\u6f14\u793a\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u79cd\u754c\u9762\uff0cUnity \u6709\u4e00\u4e2a\u6781\u5176\u57fa\u672c\u7684\u5185\u7f6e\u7248\u672c\uff0c\u79f0\u4e3a NetworkManagerHUD\u3002\u6b64\u754c\u9762\u5728\u521b\u5efa\u6e38\u620f\u7684\u65e9\u671f\u9636\u6bb5\u975e\u5e38\u6709\u7528\uff0c\u56e0\u4e3a\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u6bd4\u8d5b\u5e76\u6d4b\u8bd5\u6e38\u620f\uff0c\u800c\u65e0\u9700\u5b9e\u73b0\u81ea\u5df1\u7684 UI\u3002\u4f46\u662f\uff0c\u6b64\u754c\u9762\u5728\u529f\u80fd\u548c\u89c6\u89c9\u8bbe\u8ba1\u65b9\u9762\u90fd\u975e\u5e38\u7b80\u5355\uff0c\u56e0\u6b64\u5728\u5b8c\u6210\u9879\u76ee\u4e4b\u524d\uff0c\u5e94\u8be5\u7528\u81ea\u5df1\u7684 UI \u8fdb\u884c\u66ff\u6362\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NetworkManagerHUD-MatchMakerMode.png",alt:"Unity \u7684\u5185\u7f6e Network Manager HUD\uff08MatchMaker \u6a21\u5f0f\uff09\u3002"})),(0,l.kt)("p",null,"Unity \u7684\u5185\u7f6e Network Manager HUD\uff08MatchMaker \u6a21\u5f0f\uff09\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet/unet-manager-hud"},"Network Manager HUD")," \u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u8054\u7f51\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61"},"\u8054\u7f51\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u591a\u4eba\u6e38\u620f\u90fd\u5177\u6709\u73a9\u5bb6\u53ef\u4ee5\u63a7\u5236\u7684\u67d0\u79cd\u5bf9\u8c61\uff0c\u5982\u89d2\u8272\u3001\u6c7d\u8f66\u6216\u5176\u4ed6\u5bf9\u8c61\u3002\u4e00\u4e9b\u591a\u4eba\u6e38\u620f\u4e0d\u5177\u6709\u5355\u4e2a\u53ef\u89c1\u7684\u201c\u73a9\u5bb6\u5bf9\u8c61\u201d\uff0c\u800c\u662f\u5141\u8bb8\u73a9\u5bb6\u63a7\u5236\u8bb8\u591a\u5355\u5143\u6216\u7269\u54c1\uff0c\u4f8b\u5982\u5728\u56fd\u9645\u8c61\u68cb\u6216\u5b9e\u65f6\u6218\u7565\u6e38\u620f\u4e2d\u5c31\u662f\u5982\u6b64\u3002\u5176\u4ed6\u4e00\u4e9b\u6e38\u620f\u751a\u81f3\u6839\u672c\u6ca1\u6709\u7279\u5b9a\u7684\u5bf9\u8c61\uff0c\u6bd4\u5982\u5171\u4eab\u753b\u5e03\u7684\u7ed8\u753b\u6e38\u620f\u3002\u4f46\u662f\uff0c\u5728\u6240\u6709\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("em",{parentName:"p"},"\u6982\u5ff5\u4e0a"),"\u4ee3\u8868\u6e38\u620f\u73a9\u5bb6\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u5e94\u5c06\u6b64\u6e38\u620f\u5bf9\u8c61\u4f5c\u4e3a",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/prefabs"},"\u9884\u5236\u4ef6"),"\uff0c\u5e76\u5c06\u6240\u6709\u811a\u672c\u9644\u52a0\u5230\u6b64\u9884\u5236\u4ef6\u4e0a\uff0c\u4ece\u800c\u63a7\u5236\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u53ef\u4ee5\u6267\u884c\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528 Unity Network Manager \u7ec4\u4ef6\uff08\u8bf7\u53c2\u9605\u4e0a\u9762\u7684 ",(0,l.kt)("em",{parentName:"p"},"Network Manager"),"\uff09\uff0c\u8bf7\u5c06\u8be5\u9884\u5236\u4ef6\u5206\u914d\u7ed9  ",(0,l.kt)("strong",{parentName:"p"},"Player Prefab"),"  \u5b57\u6bb5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NetworkManagerWithPlayerPrefab.png",alt:"\u5728 Network Manager \u7684 Player Prefab \u5b57\u6bb5\u4e2d\u5206\u914d\u4e86Player Car\u9884\u5236\u4ef6\u3002"})),(0,l.kt)("p",null,"\u5728 Network Manager \u7684 Player Prefab \u5b57\u6bb5\u4e2d\u5206\u914d\u4e86\u201cPlayer Car\u201d\u9884\u5236\u4ef6\u3002"),(0,l.kt)("p",null,"\u5f53\u6e38\u620f\u8fd0\u884c\u65f6\uff0cNetwork Manager \u4f1a\u4e3a\u8fde\u63a5\u5230\u6bd4\u8d5b\u7684\u6bcf\u4e2a\u73a9\u5bb6\u521b\u5efa\u73a9\u5bb6\u9884\u5236\u4ef6\u7684\u526f\u672c\uff08\u201c\u5b9e\u4f8b\u201d\uff09\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff08\u5bf9\u4e8e\u521a\u63a5\u89e6\u591a\u4eba\u6e38\u620f\u7f16\u7a0b\u7684\u4eba\u6765\u8bf4\uff0c\u8fd9\u4e5f\u662f\u4ee4\u4eba\u56f0\u60d1\u7684\u5730\u65b9\uff09\uff0c\u9700\u8981\u786e\u4fdd\u73a9\u5bb6\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e0a\u7684\u811a\u672c\u201c\u77e5\u9053\u201d\u63a7\u5236\u8be5\u5b9e\u4f8b\u7684\u73a9\u5bb6\u662f\u5728\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u673a")," \u8ba1\u7b97\u673a\uff08\u7ba1\u7406\u6e38\u620f\u7684\u8ba1\u7b97\u673a\uff09\u8fd8\u662f\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef")," \u8ba1\u7b97\u673a\uff08\u4e0e\u7ba1\u7406\u6e38\u620f\u7684\u8ba1\u7b97\u673a\u4e0d\u540c\u7684\u8ba1\u7b97\u673a\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u4e24\u79cd\u60c5\u51b5\u4f1a\u540c\u65f6\u53d1\u751f\u3002"),(0,l.kt)("h2",{id:"\u591a\u4eba\u6e38\u620f\u611f\u77e5\u811a\u672c"},"\u591a\u4eba\u6e38\u620f\u611f\u77e5\u811a\u672c"),(0,l.kt)("p",null,"\u4e3a\u591a\u4eba\u6e38\u620f\u7f16\u5199\u811a\u672c\u4e0d\u540c\u4e8e\u4e3a\u5355\u4eba\u6e38\u620f\u7f16\u5199\u811a\u672c\u3002\u539f\u56e0\u5728\u4e8e\uff0c\u5728\u4e3a\u591a\u4eba\u6e38\u620f\u7f16\u5199\u811a\u672c\u65f6\uff0c\u9700\u8981\u8003\u8651\u811a\u672c\u8fd0\u884c\u7684\u4e0d\u540c\u4e0a\u4e0b\u6587\u3002\u8981\u4e86\u89e3\u6b64\u5904\u8ba8\u8bba\u7684\u7f51\u7edc\u6982\u5ff5\uff0c\u8bf7\u53c2\u9605\u6709\u5173",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet-using-hlapi/unet-concepts"},"\u7f51\u7edc\u7cfb\u7edf\u6982\u5ff5"),"\u7684\u6587\u6863\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u653e\u7f6e\u5728\u73a9\u5bb6\u9884\u5236\u4ef6\u4e0a\u7684\u811a\u672c\u5e94\u5141\u8bb8\u8be5\u73a9\u5bb6\u5b9e\u4f8b\u7684\u201c\u6240\u6709\u8005\u201d\u63a7\u5236\u8be5\u5b9e\u4f8b\uff0c\u4f46\u4e0d\u5e94\u5141\u8bb8\u5176\u4ed6\u4eba\u5bf9\u5176\u8fdb\u884c\u63a7\u5236\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u8003\u8651\u670d\u52a1\u5668\u6216\u5ba2\u6237\u7aef\u662f\u5426\u5177\u6709\u5bf9\u811a\u672c\u529f\u80fd\u7684\u6388\u6743\u3002\u6709\u65f6\uff0c\u53ef\u80fd\u5e0c\u671b\u811a\u672c\u540c\u65f6\u5728\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e0a\u8fd0\u884c\u3002\u800c\u5176\u4ed6\u65f6\u5019\uff0c\u53ef\u80fd\u53ea\u5e0c\u671b\u811a\u672c\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\uff0c\u5e76\u53ea\u5e0c\u671b\u5ba2\u6237\u7aef\u590d\u5236\u6e38\u620f\u5bf9\u8c61\u7684\u79fb\u52a8\u65b9\u5f0f\uff08\u4f8b\u5982\uff0c\u5728\u73a9\u5bb6\u62fe\u53d6\u53ef\u6536\u96c6\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u6e38\u620f\u4e2d\uff0c\u8be5\u811a\u672c\u5e94\u4ec5\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\uff0c\u8fd9\u6837\u670d\u52a1\u5668\u5c31\u80fd\u638c\u63a7\u6536\u96c6\u7684\u6e38\u620f\u5bf9\u8c61\u6570\u91cf\uff09\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u811a\u672c\u7684\u529f\u80fd\uff0c\u9700\u8981\u786e\u5b9a\u811a\u672c\u7684\u54ea\u4e9b\u90e8\u5206\u5e94\u5728\u54ea\u4e9b\u60c5\u51b5\u4e0b\u6fc0\u6d3b\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\uff0c\u6bcf\u4e2a\u4eba\u901a\u5e38\u90fd\u80fd\u4e3b\u52a8\u63a7\u5236\u81ea\u5df1\u7684\u73a9\u5bb6\u5b9e\u4f8b\u3002\u8fd9\u610f\u5473\u7740\u6bcf\u4e2a\u5ba2\u6237\u7aef\u90fd\u5bf9\u81ea\u5df1\u7684\u73a9\u5bb6\u5177\u6709\u672c\u5730\u6388\u6743\uff0c\u5e76\u4e14\u670d\u52a1\u5668\u63a5\u53d7\u5ba2\u6237\u7aef\u544a\u77e5\u7684\u8be5\u73a9\u5bb6\u6b63\u5728\u6267\u884c\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u975e\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\uff0c\u670d\u52a1\u5668\u901a\u5e38\u5bf9\u53d1\u751f\u7684\u64cd\u4f5c\uff08\u4f8b\u5982\u662f\u5426\u5df2\u6536\u96c6\u7269\u54c1\uff09\u5177\u6709\u63a7\u5236\u6743\uff0c\u5e76\u4e14\u6240\u6709\u5ba2\u6237\u7aef\u90fd\u63a5\u53d7\u670d\u52a1\u5668\u544a\u77e5\u7684\u8be5\u6e38\u620f\u5bf9\u8c61\u53d1\u751f\u7684\u64cd\u4f5c\u3002"))}m.isMDXComponent=!0}}]);