"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14954],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,u(u({ref:t},l),{},{components:n})):r.createElement(d,u({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],i={id:"UNetGameObjects",title:"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61",slug:"/unet-game-objects"},c="\u8054\u7f51\u6e38\u620f\u5bf9\u8c61",s={unversionedId:"unet/unet-using-hlapi/unet-game-objects/UNetGameObjects",id:"unet/unet-using-hlapi/unet-game-objects/UNetGameObjects",title:"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61",description:"|  |",source:"@site/docs/unet/unet-using-hlapi/unet-game-objects/unet-game-objects.md",sourceDirName:"unet/unet-using-hlapi/unet-game-objects",slug:"/unet-game-objects",permalink:"/docs/unet-game-objects",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unet-game-objects/unet-game-objects.md",tags:[],version:"current",frontMatter:{id:"UNetGameObjects",title:"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61",slug:"/unet-game-objects"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u4eba\u6e38\u620f\u5927\u5385",permalink:"/docs/unet-dealing-with-clients-servers/unet-lobby"},next:{title:"\u7f51\u7edc\u6388\u6743",permalink:"/docs/unet-game-objects/unet-authority"}},l={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61"},"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,o.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,o.kt)("p",null,"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u662f\u7531 Unity \u7f51\u7edc\u7cfb\u7edf\u63a7\u5236\u548c\u540c\u6b65\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u901a\u8fc7\u4f7f\u7528\u540c\u6b65\u7684\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\uff0c\u53ef\u4e3a\u6b63\u5728\u73a9\u6e38\u620f\u7684\u6240\u6709\u73a9\u5bb6\u521b\u5efa\u4e00\u79cd\u5171\u4eab\u4f53\u9a8c\u3002\u5c3d\u7ba1\u73a9\u5bb6\u53ef\u80fd\u5904\u4e8e\u6e38\u620f\u4e2d\u7684\u4e0d\u540c\u89c6\u89d2\uff0c\u4f46\u4ed6\u4eec\u5c06\u770b\u5230\u548c\u542c\u5230\u76f8\u540c\u7684\u4e8b\u4ef6\u548c\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"Unity \u4e2d\u7684\u591a\u4eba\u6e38\u620f\u6240\u6784\u5efa\u7684\u573a\u666f\u901a\u5e38\u4f1a\u6df7\u5408\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u548c\u5e38\u89c4\uff08\u975e\u8054\u7f51\uff09\u6e38\u620f\u5bf9\u8c61\u3002\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u8868\u793a\u6e38\u620f\u5bf9\u8c61\u5728\u6e38\u620f\u8fc7\u7a0b\u4e2d\u7684\u79fb\u52a8\u6216\u53d8\u5316\u4fe1\u606f\u9700\u8981\u5728\u8be5\u6e38\u620f\u7684\u6240\u6709\u73a9\u5bb6\u4e4b\u95f4\u540c\u6b65\u3002\u975e\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u8868\u793a\u5728\u6e38\u620f\u8fc7\u7a0b\u4e2d\u5b8c\u5168\u4e0d\u4f1a\u79fb\u52a8\u6216\u53d8\u5316\u7684\u6e38\u620f\u5bf9\u8c61\uff08\u4f8b\u5982\u5ca9\u77f3\u6216\u6805\u680f\u4e4b\u7c7b\u7684\u9759\u6001\u969c\u788d\u7269\uff09\uff0c\u6216\u8005\u6e38\u620f\u5bf9\u8c61\u7684\u79fb\u52a8\u6216\u53d8\u5316\u4e0d\u9700\u8981\u5728\u73a9\u5bb6\u4e4b\u95f4\u540c\u6b65\uff08\u4f8b\u5982\uff0c\u8f7b\u8f7b\u6447\u66f3\u7684\u6811\u6728\u6216\u5728\u6e38\u620f\u80cc\u666f\u4e2d\u63a0\u8fc7\u7684\u4e91\u5f69\uff09\u3002"),(0,o.kt)("p",null,"\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u9644\u52a0\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/docs/unet-reference/class-network-identity"},"Network Identity")," \u7ec4\u4ef6\u3002\u4f46\u662f\uff0c\u4ec5\u5305\u542b Network Identity \u7ec4\u4ef6\u4e0d\u8db3\u4ee5\u8ba9\u6e38\u620f\u5bf9\u8c61\u5728\u591a\u4eba\u6e38\u620f\u4e2d\u6b63\u5e38\u8fd0\u884c\u3002Network Identity \u7ec4\u4ef6\u662f\u540c\u6b65\u7684\u8d77\u70b9\uff0c\u5141\u8bb8 Network Manager \u540c\u6b65\u6e38\u620f\u5bf9\u8c61\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-spawning"},"\u521b\u5efa\u548c\u9500\u6bc1"),"\uff0c\u4f46\u9664\u6b64\u4e4b\u5916\uff0c\u4e0d\u4f1a\u6307\u5b9a\u6e38\u620f\u5bf9\u8c61\u7684",(0,o.kt)("em",{parentName:"p"},"\u54ea\u4e9b\u5c5e\u6027"),"\u5e94\u8be5\u540c\u6b65\u3002"),(0,o.kt)("p",null,"\u5728\u6bcf\u4e2a\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u4e0a\u5e94\u8be5\u5177\u4f53\u540c\u6b65\u54ea\u4e9b\u5185\u5bb9\u53d6\u51b3\u4e8e\u6240\u5236\u4f5c\u7684\u6e38\u620f\u7c7b\u578b\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u7528\u9014\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u9700\u8981\u540c\u6b65\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u6e38\u620f\u5bf9\u8c61\uff08\u5982\u73a9\u5bb6\u548c\u975e\u73a9\u5bb6\u89d2\u8272\uff09\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u4f4d\u7f6e")," \u548c ",(0,o.kt)("strong",{parentName:"li"},"\u65cb\u8f6c")," \u3002"),(0,o.kt)("li",{parentName:"ul"},"\u52a8\u753b\u6e38\u620f\u5bf9\u8c61\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u52a8\u753b\u72b6\u6001")," "),(0,o.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u503c")," \uff0c\u4f8b\u5982\u5728\u5f53\u524d\u4e00\u8f6e\u6e38\u620f\u4e2d\u5269\u4f59\u591a\u5c11\u65f6\u95f4\uff0c\u6216\u8005\u73a9\u5bb6\u62e5\u6709\u591a\u5c11\u80fd\u91cf\u3002")),(0,o.kt)("p",null,"\u6709\u4e9b\u5c5e\u6027\u53ef\u7531 Unity \u81ea\u52a8\u540c\u6b65\u3002\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u7684\u540c\u6b65\u521b\u5efa\u548c\u9500\u6bc1\uff08\u79f0\u4e3a",(0,o.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-spawning"},"\u751f\u6210"),"\uff09\u7531 NetworkManager \u7ba1\u7406\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/unet-reference/class-network-transform"},"Network Transform")," \u7ec4\u4ef6\u6765\u540c\u6b65\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u548c\u65cb\u8f6c\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/unet-reference/class-network-animator"},"Network Animator")," \u7ec4\u4ef6\u6765\u540c\u6b65\u6e38\u620f\u5bf9\u8c61\u7684\u52a8\u753b\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u540c\u6b65\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u7684\u5176\u4ed6\u5c5e\u6027\uff0c\u9700\u8981\u4f7f\u7528\u811a\u672c\u3002\u6709\u5173\u6b64\u65b9\u9762\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-state-sync"},"\u72b6\u6001\u540c\u6b65"),"\u3002"))}f.isMDXComponent=!0}}]);