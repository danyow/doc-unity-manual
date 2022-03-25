"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87817],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),l=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),y=l(n),m=a,d=y["".concat(o,".").concat(m)]||y[m]||p[m]||c;return n?r.createElement(d,i(i({ref:e},s),{},{components:n})):r.createElement(d,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,i=new Array(c);i[0]=y;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},42801:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),i=["components"],u={id:"UNetStateSync",title:"\u72b6\u6001\u540c\u6b65",slug:"/unet-game-objects/unet-state-sync"},o="\u72b6\u6001\u540c\u6b65",l={unversionedId:"unet/unet-using-hlapi/unet-game-objects/UNetStateSync",id:"unet/unet-using-hlapi/unet-game-objects/UNetStateSync",title:"\u72b6\u6001\u540c\u6b65",description:"|  |",source:"@site/docs/unet/unet-using-hlapi/unet-game-objects/unet-state-sync.md",sourceDirName:"unet/unet-using-hlapi/unet-game-objects",slug:"/unet-game-objects/unet-state-sync",permalink:"/doc-unity-manual/docs/unet-game-objects/unet-state-sync",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unet-game-objects/unet-state-sync.md",tags:[],version:"current",frontMatter:{id:"UNetStateSync",title:"\u72b6\u6001\u540c\u6b65",slug:"/unet-game-objects/unet-state-sync"},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u72b6\u6001\u540c\u6b65",permalink:"/doc-unity-manual/docs/unet-game-objects/unet-state-sync-advanced"},next:{title:"\u7f51\u7edc\u53ef\u89c1\u6027",permalink:"/doc-unity-manual/docs/unet-game-objects/unet-visibility"}},s={},p=[{value:"SyncVar",id:"syncvar",level:2},{value:"SyncList",id:"synclist",level:2}],y={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,c.kt)("wrapper",(0,r.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u72b6\u6001\u540c\u6b65"},"\u72b6\u6001\u540c\u6b65"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null}))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,c.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,c.kt)("p",null,"\u72b6\u6001\u540c\u6b65\u662f\u6307\u5bf9\u503c\uff08\u4f8b\u5982\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\u4e0a\u7684\u811a\u672c\u5305\u542b\u7684\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5b57\u7b26\u4e32\u548c\u5e03\u5c14\u503c\uff09\u8fdb\u884c\u540c\u6b65\u3002"),(0,c.kt)("p",null,"\u72b6\u6001\u540c\u6b65\u7684\u65b9\u5411\u662f\u4ece\u670d\u52a1\u5668\u5230\u8fdc\u7a0b\u5ba2\u6237\u7aef\u3002",(0,c.kt)("em",{parentName:"p"},"\u672c\u5730"),"\u5ba2\u6237\u7aef\u6ca1\u6709\u5e8f\u5217\u5316\u7684\u6570\u636e\u3002\u672c\u5730\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5171\u4eab\u573a\u666f\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u6b64\u6570\u636e\u3002\u4f46\u662f\uff0c\u5728\u672c\u5730\u5ba2\u6237\u7aef\u4e0a\u4f1a\u8c03\u7528 SyncVar \u6302\u94a9\u3002"),(0,c.kt)("p",null,"\u6570\u636e\u4e0d\u4f1a\u4ee5\u76f8\u53cd\u65b9\u5411\uff08\u8fdc\u7a0b\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\uff09\u540c\u6b65\u3002\u82e5\u8981\u8fdb\u884c\u6b64\u65b9\u5411\u7684\u540c\u6b65\uff0c\u9700\u8981\u4f7f\u7528",(0,c.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet-actions-and-communication/unet-actions"},"\u547d\u4ee4"),"\u3002"),(0,c.kt)("h2",{id:"syncvar"},"SyncVar"),(0,c.kt)("p",null,"SyncVar \u662f\u4ece NetworkBehaviour \u7ee7\u627f\u7684\u811a\u672c\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53d8\u91cf\u4ece\u670d\u52a1\u5668\u540c\u6b65\u5230\u5ba2\u6237\u7aef\u3002\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u6216\u8005\u65b0\u73a9\u5bb6\u52a0\u5165\u6b63\u5728\u8fdb\u884c\u7684\u6e38\u620f\u65f6\uff0c\u4f1a\u5411\u5176\u53d1\u9001\u5176\u53ef\u89c1\u7684\u8054\u7f51\u5bf9\u8c61\u4e0a\u6240\u6709 SyncVar \u7684\u6700\u65b0\u72b6\u6001\u3002\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"[SyncVar]")," \u81ea\u5b9a\u4e49\u5c5e\u6027\u53ef\u6307\u5b9a\u811a\u672c\u4e2d\u8981\u540c\u6b65\u7684\u53d8\u91cf\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,c.kt)("p",null,"class Player : NetworkBehaviour {"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"[SyncVar]\nint health;\n\npublic void TakeDamage(int amount)\n{\n    if (!isServer)\n        return;\n\n    health -= amount;\n}\n")),(0,c.kt)("p",null,"}"),(0,c.kt)("p",null,"\u5728\u8c03\u7528 OnStartClient() \u4e4b\u524d\uff0cSyncVar \u7684\u72b6\u6001\u5c06\u5e94\u7528\u4e8e\u5ba2\u6237\u7aef\u4e0a\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u56e0\u6b64 OnStartClient() \u5185\u7684\u5bf9\u8c61\u72b6\u6001\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002"),(0,c.kt)("p",null,"SyncVar \u53ef\u4ee5\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u4f8b\u5982\u6574\u6570\u3001\u5b57\u7b26\u4e32\u548c\u6d6e\u70b9\u6570\u3002\u5b83\u4eec\u4e5f\u53ef\u4ee5\u662f Unity \u7c7b\u578b\uff0c\u4f8b\u5982 Vector3 \u548c\u7528\u6237\u5b9a\u4e49\u7684\u7ed3\u6784\uff0c\u4f46 SyncVar \u7ed3\u6784\u7684\u66f4\u65b0\u5c06\u4f5c\u4e3a\u6574\u4f53\u66f4\u65b0\u8fdb\u884c\u53d1\u9001\uff0c\u800c\u4e0d\u662f\u5728\u7ed3\u6784\u4e2d\u7684\u5b57\u6bb5\u53d1\u751f\u66f4\u6539\u7684\u60c5\u51b5\u4e0b\u53d1\u9001\u589e\u91cf\u66f4\u6539\u3002\u4e00\u4e2a NetworkBehaviour \u811a\u672c\u6700\u591a\u53ef\u5305\u542b 32 \u4e2a SyncVar\uff0c\u5305\u62ec SyncList\uff08\u8bf7\u53c2\u9605\u4e0b\u4e00\u90e8\u5206\uff09\u3002"),(0,c.kt)("p",null,"\u5f53 SyncVar \u7684\u503c\u66f4\u6539\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u81ea\u52a8\u53d1\u9001 SyncVar \u66f4\u65b0\uff0c\u56e0\u6b64\u60a8\u65e0\u9700\u8ddf\u8e2a\u5b83\u4eec\u4f55\u65f6\u66f4\u6539\u6216\u81ea\u5df1\u53d1\u9001\u6709\u5173\u66f4\u6539\u7684\u4fe1\u606f\u3002"),(0,c.kt)("h2",{id:"synclist"},"SyncList"),(0,c.kt)("p",null,"SyncVar \u5305\u542b\u503c\uff0c\u800c SyncList \u5305\u542b\u503c\u5217\u8868\u3002SyncList \u5185\u5bb9\u4e0e SyncVar \u72b6\u6001\u4e00\u8d77\u5305\u542b\u5728\u521d\u59cb\u72b6\u6001\u66f4\u65b0\u4e2d\u3002\u7531\u4e8e SyncList \u662f\u4e00\u4e2a\u540c\u6b65\u5176\u81ea\u8eab\u5185\u5bb9\u7684\u7c7b\uff0c\u56e0\u6b64 SyncList \u4e0d\u9700\u8981 SyncVar \u5c5e\u6027\u3002\u4ee5\u4e0b\u7c7b\u578b\u7684 SyncList \u53ef\u7528\u4e8e\u57fa\u672c\u7c7b\u578b\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"SyncListString"),(0,c.kt)("li",{parentName:"ul"},"SyncListFloat"),(0,c.kt)("li",{parentName:"ul"},"SyncListInt"),(0,c.kt)("li",{parentName:"ul"},"SyncListUInt"),(0,c.kt)("li",{parentName:"ul"},"SyncListBool")),(0,c.kt)("p",null,"\u6b64\u5916\u8fd8\u6709 SyncListStruct \u53ef\u7528\u4e8e\u540c\u6b65\u60a8\u81ea\u5df1\u7684\u7ed3\u6784\u7c7b\u578b\u7684\u5217\u8868\u3002\u4f7f\u7528 SyncListStruct \u65f6\uff0c\u9009\u62e9\u4f7f\u7528\u7684\u7ed3\u6784\u7c7b\u578b\u53ef\u4ee5\u5305\u542b\u57fa\u672c\u7c7b\u578b\u3001\u6570\u7ec4\u548c\u5e38\u89c1 Unity \u7c7b\u578b\u7684\u6210\u5458\u3002\u8fd9\u4e9b\u7ed3\u6784\u4e0d\u80fd\u5305\u542b\u590d\u6742\u7c7b\u6216\u901a\u7528\u5bb9\u5668\uff0c\u5e76\u4e14\u53ea\u5e8f\u5217\u5316\u5176\u4e2d\u7684\u516c\u5171\u53d8\u91cf\u3002"),(0,c.kt)("p",null,"SyncList \u6709\u4e00\u4e2a\u540d\u4e3a\u201c\u56de\u8c03\u201d(Callback) \u7684 SyncListChanged \u59d4\u6258\uff0c\u53ef\u5728\u5217\u8868\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\u901a\u77e5\u5ba2\u6237\u7aef\u3002\u5e94\u4f7f\u7528\u6240\u53d1\u751f\u7684\u64cd\u4f5c\u7c7b\u578b\u4ee5\u53ca\u8be5\u64cd\u4f5c\u7684\u76ee\u6807\u9879\u7684\u7d22\u5f15\u6765\u8c03\u7528\u6b64\u59d4\u6258\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'\npublic class MyScript : NetworkBehaviour\n{\n    public struct Buf\n    {\n        public int id;\n        public string name;\n        public float timer;\n    };\n            \n    public class TestBufs : SyncListStruct&lt;Buf&gt; {}\n    TestBufs m_bufs = new TestBufs();\n    \n    void BufChanged(Operation op, int itemIndex)\n    {\n        Debug.Log("buf changed:" + op);\n    }\n    \n    void Start()\n    {\n        m_bufs.Callback = BufChanged;\n    }\n}\n')))}m.isMDXComponent=!0}}]);