"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63438],{3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},k=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,d=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return t?r.createElement(d,o(o({ref:n},k),{},{components:t})):r.createElement(d,o({ref:n},k))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33484:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"UNetSpawning",title:"\u751f\u6210\u6e38\u620f\u5bf9\u8c61",slug:"/unet-game-objects/unet-spawning"},p="\u751f\u6210\u6e38\u620f\u5bf9\u8c61",u={unversionedId:"unet/unet-using-hlapi/unet-game-objects/UNetSpawning",id:"unet/unet-using-hlapi/unet-game-objects/UNetSpawning",title:"\u751f\u6210\u6e38\u620f\u5bf9\u8c61",description:"|  |",source:"@site/docs/unet/unet-using-hlapi/unet-game-objects/unet-spawning.md",sourceDirName:"unet/unet-using-hlapi/unet-game-objects",slug:"/unet-game-objects/unet-spawning",permalink:"/docs/unet-game-objects/unet-spawning",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unet-game-objects/unet-spawning.md",tags:[],version:"current",frontMatter:{id:"UNetSpawning",title:"\u751f\u6210\u6e38\u620f\u5bf9\u8c61",slug:"/unet-game-objects/unet-spawning"},sidebar:"tutorialSidebar",previous:{title:"\u573a\u666f\u6e38\u620f\u5bf9\u8c61",permalink:"/docs/unet-game-objects/unet-scene-objects"},next:{title:"\u9ad8\u7ea7\u72b6\u6001\u540c\u6b65",permalink:"/docs/unet-game-objects/unet-state-sync-advanced"}},k={},s=[{value:"\u5728\u4e0d\u4f7f\u7528 Network Manager \u7684\u60c5\u51b5\u4e0b\u751f\u6210",id:"\u5728\u4e0d\u4f7f\u7528-network-manager-\u7684\u60c5\u51b5\u4e0b\u751f\u6210",level:2},{value:"\u793a\u4f8b\uff1aMyNetworkManager",id:"\u793a\u4f8bmynetworkmanager",level:3},{value:"\u7ea6\u675f",id:"\u7ea6\u675f",level:3},{value:"\u6e38\u620f\u5bf9\u8c61\u521b\u5efa\u6d41\u7a0b",id:"\u6e38\u620f\u5bf9\u8c61\u521b\u5efa\u6d41\u7a0b",level:2},{value:"\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61",id:"\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61",level:3},{value:"\u4f7f\u7528\u5ba2\u6237\u7aef\u6388\u6743\u751f\u6210\u6e38\u620f\u5bf9\u8c61",id:"\u4f7f\u7528\u5ba2\u6237\u7aef\u6388\u6743\u751f\u6210\u6e38\u620f\u5bf9\u8c61",level:2}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u751f\u6210\u6e38\u620f\u5bf9\u8c61"},"\u751f\u6210\u6e38\u620f\u5bf9\u8c61"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,i.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,i.kt)("p",null,"\u5728 Unity \u4e2d\uff0c\u901a\u5e38\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Instantiate()")," \u6765\u201c\u751f\u6210\u201d\uff08\u5373\u521b\u5efa\uff09\u65b0\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u4f46\u662f\uff0c\u5728\u591a\u73a9\u5bb6\u9ad8\u7ea7 API \u4e2d\uff0c\u201c\u751f\u6210\u201d\u4e00\u8bcd\u5177\u6709\u66f4\u5177\u4f53\u7684\u542b\u4e49\u3002\u5728 HLAPI \u7684\u670d\u52a1\u5668\u6388\u6743\u6a21\u578b\u4e2d\uff0c\u5728\u670d\u52a1\u5668\u4e0a\u201c\u751f\u6210\u201d\u6e38\u620f\u5bf9\u8c61\u610f\u5473\u7740\u6e38\u620f\u5bf9\u8c61\u662f\u5728\u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u4e0a\u521b\u5efa\u7684\uff0c\u5e76\u7531\u751f\u6210\u7cfb\u7edf\u8fdb\u884c\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u6b64\u7cfb\u7edf\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u540e\uff0c\u53ea\u8981\u6e38\u620f\u5bf9\u8c61\u5728\u670d\u52a1\u5668\u4e0a\u53d1\u751f\u66f4\u6539\uff0c\u5c31\u4f1a\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u72b6\u6001\u66f4\u65b0\u3002\u5f53 Unity \u9500\u6bc1\u670d\u52a1\u5668\u4e0a\u7684\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u4e5f\u4f1a\u5728\u5ba2\u6237\u7aef\u4e0a\u9500\u6bc1\u6b64\u6e38\u620f\u5bf9\u8c61\u3002\u670d\u52a1\u5668\u4f1a\u7ba1\u7406\u751f\u6210\u7684\u6e38\u620f\u5bf9\u8c61\u4ee5\u53ca\u6240\u6709\u5176\u4ed6\u8054\u7f51\u6e38\u620f\u5bf9\u8c61\uff0c\u56e0\u6b64\u5982\u679c\u5176\u4ed6\u5ba2\u6237\u7aef\u7a0d\u540e\u52a0\u5165\u6e38\u620f\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5728\u8be5\u5ba2\u6237\u7aef\u4e0a\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u3002\u8fd9\u4e9b\u751f\u6210\u7684\u6e38\u620f\u5bf9\u8c61\u5177\u6709\u4e00\u4e2a\u540d\u4e3a\u201cnetId\u201d\u7684\u552f\u4e00\u7f51\u7edc\u5b9e\u4f8b ID\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u6b64 ID \u5728\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e0a\u90fd\u662f\u76f8\u540c\u7684\u3002\u552f\u4e00\u7f51\u7edc\u5b9e\u4f8b ID \u7528\u4e8e\u901a\u8fc7\u7f51\u7edc\u5c06\u8bbe\u7f6e\u7684\u6d88\u606f\u8def\u7531\u5230\u6e38\u620f\u5bf9\u8c61\uff0c\u5e76\u7528\u4e8e\u8bc6\u522b\u6e38\u620f\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5f53\u670d\u52a1\u5668\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-reference/class-network-identity"},"Network Identity"),"  ",(0,i.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6")," \u751f\u6210\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u5728\u5ba2\u6237\u7aef\u4e0a\u751f\u6210\u7684\u6e38\u620f\u5bf9\u8c61\u5177\u6709\u76f8\u540c\u7684\u201c\u72b6\u6001\u201d\u3002\u8fd9\u610f\u5473\u7740\uff0c\u8be5\u6e38\u620f\u5bf9\u8c61\u4e0e\u670d\u52a1\u5668\u4e0a\u7684\u6e38\u620f\u5bf9\u8c61\u76f8\u540c\uff1b\u5177\u6709\u76f8\u540c\u7684\u53d8\u6362\u3001\u8fd0\u52a8\u72b6\u6001\u548c\uff08\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkTransform.html"},"NetworkTransform")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-state-sync"},"SyncVar"),"\uff09\u540c\u6b65\u53d8\u91cf\u3002\u56e0\u6b64\uff0c\u5f53 Unity \u521b\u5efa\u5ba2\u6237\u7aef\u6e38\u620f\u5bf9\u8c61\u65f6\uff0c\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002\u8fd9\u6837\u53ef\u907f\u514d\u5404\u79cd\u95ee\u9898\uff0c\u6bd4\u5982\u6e38\u620f\u5bf9\u8c61\u5728\u9519\u8bef\u7684\u521d\u59cb\u4f4d\u7f6e\u751f\u6210\uff0c\u7136\u540e\u5728\u72b6\u6001\u66f4\u65b0\u5230\u8fbe\u65f6\u91cd\u65b0\u51fa\u73b0\u5728\u6b63\u786e\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"Network Manager \u53ea\u80fd\u4ece\u5df2\u6ce8\u518c\u7684\u9884\u5236\u4ef6\u751f\u6210\u548c\u540c\u6b65\u6e38\u620f\u5bf9\u8c61\uff0c\u56e0\u6b64\u5fc5\u987b\u5411 Network Manager \u6ce8\u518c\u5e0c\u671b\u80fd\u591f\u5728\u6e38\u620f\u4e2d\u751f\u6210\u7684\u7279\u5b9a\u6e38\u620f\u5bf9\u8c61\u9884\u5236\u4ef6\u3002Network Manager \u4ec5\u63a5\u53d7\u9644\u52a0\u4e86 Network Identity \u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\u9884\u5236\u4ef6\uff0c\u56e0\u6b64\u5728\u5c1d\u8bd5\u5411 Network Manager \u6ce8\u518c\u9884\u5236\u4ef6\u4e4b\u524d\uff0c\u5fc5\u987b\u786e\u4fdd\u5c06 Network Identity \u7ec4\u4ef6\u6dfb\u52a0\u5230\u8be5\u9884\u5236\u4ef6\u3002"),(0,i.kt)("p",null,"\u8981\u5728 Editor \u4e2d\u5411 Network Manager \u6ce8\u518c\u9884\u5236\u4ef6\uff0c\u8bf7\u9009\u62e9 Network Manager \u6e38\u620f\u5bf9\u8c61\uff0c\u7136\u540e\u5728 Inspector \u4e2d\uff0c\u5bfc\u822a\u5230 Network Manager \u7ec4\u4ef6\u3002\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Spawn Info"),"  \u65c1\u8fb9\u7684\u4e09\u89d2\u5f62\u4ee5\u6253\u5f00\u8bbe\u7f6e\uff0c\u7136\u540e\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Registered Spawnable Prefabs"),"  \u4e0b\u5355\u51fb\u52a0\u53f7 ( ",(0,i.kt)("strong",{parentName:"p"},"+")," ) \u6309\u94ae\u3002\u5c06\u9884\u5236\u4ef6\u62d6\u653e\u5230\u7a7a\u5b57\u6bb5\u4e2d\u5373\u53ef\u5c06\u9884\u5236\u4ef6\u5206\u914d\u7ed9\u5217\u8868\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UNetManagerSpawnInfo.png",alt:"\u5c55\u5f00\u4e86 Spawn Info* \u7684 Network Manager Inspector\uff0c\u663e\u793a Registered Spawnable Prefabs \u4e0b\u9762\u6709\u4e09\u4e2a\u5df2\u5206\u914d\u7684\u9884\u5236\u4ef6"})),(0,i.kt)("p",null,"\u5c55\u5f00\u4e86 ",(0,i.kt)("em",{parentName:"p"},"Spawn Info"),"*"," \u7684 Network Manager Inspector\uff0c\u663e\u793a ",(0,i.kt)("em",{parentName:"p"},"Registered Spawnable Prefabs")," \u4e0b\u9762\u6709\u4e09\u4e2a\u5df2\u5206\u914d\u7684\u9884\u5236\u4ef6"),(0,i.kt)("h2",{id:"\u5728\u4e0d\u4f7f\u7528-network-manager-\u7684\u60c5\u51b5\u4e0b\u751f\u6210"},"\u5728\u4e0d\u4f7f\u7528 Network Manager \u7684\u60c5\u51b5\u4e0b\u751f\u6210"),(0,i.kt)("p",null,"\u66f4\u9ad8\u7ea7\u7684\u7528\u6237\u53ef\u80fd\u5e0c\u671b\u6ce8\u518c\u9884\u5236\u4ef6\u5e76\u5728\u4e0d\u4f7f\u7528 NetworkManager \u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u8981\u5728\u4e0d\u4f7f\u7528 Network Manager \u7684\u60c5\u51b5\u4e0b\u751f\u6210\u6e38\u620f\u5bf9\u8c61\uff0c\u53ef\u901a\u8fc7\u811a\u672c\u81ea\u884c\u5904\u7406\u9884\u5236\u4ef6\u6ce8\u518c\u3002\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.ClientScene.RegisterPrefab.html"},"ClientScene.RegisterPrefab")," \u65b9\u6cd5\u53ef\u5c06\u9884\u5236\u4ef6\u6ce8\u518c\u5230 Network Manager\u3002"),(0,i.kt)("h3",{id:"\u793a\u4f8bmynetworkmanager"},"\u793a\u4f8b\uff1aMyNetworkManager"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nusing UnityEngine;\nusing UnityEngine.Networking;\n\npublic class MyNetworkManager : MonoBehaviour \n{\n    public GameObject treePrefab;\n    NetworkClient myClient;\n\n    // \u521b\u5efa\u5ba2\u6237\u7aef\u5e76\u8fde\u63a5\u5230\u670d\u52a1\u5668\u7aef\u53e3\n    public void ClientConnect() {\n        ClientScene.RegisterPrefab(treePrefab);\n        myClient = new NetworkClient();\n        myClient.RegisterHandler(MsgType.Connect, OnClientConnect);\n        myClient.Connect("127.0.0.1", 4444);\n    }\n\n    void OnClientConnect(NetworkMessage msg) {\n        Debug.Log("Connected to server: " + msg.conn);\n    }\n}\n')),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7a7a\u6e38\u620f\u5bf9\u8c61\u4f5c\u4e3a Network Manager\uff0c\u7136\u540e\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"MyNetworkManager")," \u811a\u672c\uff08\u4e0a\u9762\u7684\u811a\u672c\uff09\u5e76\u5c06\u5176\u9644\u52a0\u5230\u8be5\u6e38\u620f\u5bf9\u8c61\u3002\u521b\u5efa\u4e00\u4e2a\u5df2\u9644\u52a0 Network Identity \u7ec4\u4ef6\u7684\u9884\u5236\u4ef6\uff0c\u7136\u540e\u5c06\u5176\u62d6\u5230 Inspector \u4e2d MyNetworkManager \u7ec4\u4ef6\u7684  ",(0,i.kt)("strong",{parentName:"p"},"treePrefab"),"  \u5b57\u6bb5\u4e0a\u3002\u8fd9\u6837\u786e\u4fdd\u4e86\u5728\u670d\u52a1\u5668\u751f\u6210\u6811\u6e38\u620f\u5bf9\u8c61\u7684\u540c\u65f6\u8fd8\u5728\u5ba2\u6237\u7aef\u4e0a\u521b\u5efa\u76f8\u540c\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u6ce8\u518c\u9884\u5236\u4ef6\u53ef\u786e\u4fdd\u8d44\u6e90\u968f\u573a\u666f\u4e00\u8d77\u52a0\u8f7d\uff0c\u56e0\u6b64\u521b\u5efa\u8d44\u6e90\u4e0d\u4f1a\u6709\u5361\u987f\u6216\u52a0\u8f7d\u65f6\u95f4\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u8981\u4f7f\u811a\u672c\u6b63\u5e38\u5de5\u4f5c\uff0c\u8fd8\u9700\u8981\u4e3a\u670d\u52a1\u5668\u6dfb\u52a0\u4ee3\u7801\u3002\u8bf7\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230  ",(0,i.kt)("strong",{parentName:"p"},"MyNetworkManager"),"  \u811a\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public void ServerListen() {\n    NetworkServer.RegisterHandler(MsgType.Connect, OnServerConnect);\n    NetworkServer.RegisterHandler(MsgType.Ready, OnClientReady);\n    if (NetworkServer.Listen(4444))\n        Debug.Log("Server started listening on port 4444");\n}\n\n// \u5f53\u5ba2\u6237\u7aef\u51c6\u5907\u597d\u751f\u6210\u4e00\u4e9b\u6811\u65f6\nvoid OnClientReady(NetworkMessage msg) {\n    Debug.Log("Client is ready to start: " + msg.conn);\n    NetworkServer.SetClientReady(msg.conn);\n    SpawnTrees();\n}\n\nvoid SpawnTrees() {\n    int x = 0;\n    for (int i = 0; i &lt; 5; ++i) {\n        var treeGo = Instantiate(treePrefab, new Vector3(x++, 0, 0), Quaternion.identity);\n        NetworkServer.Spawn(treeGo);\n    }\n}\n\nvoid OnServerConnect(NetworkMessage msg) {\n    Debug.Log("New client connected: " + msg.conn);\n}\n\n')),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u4e0d\u9700\u8981\u8fdb\u884c\u4efb\u4f55\u6ce8\u518c\uff0c\u56e0\u4e3a\u5b83\u77e5\u9053\u6b63\u5728\u751f\u6210\u4ec0\u4e48\u6e38\u620f\u5bf9\u8c61\uff08\u5e76\u5728\u751f\u6210\u6d88\u606f\u4e2d\u53d1\u9001\u8d44\u6e90 ID\uff09\u3002\u5ba2\u6237\u7aef\u9700\u8981\u80fd\u591f\u67e5\u627e\u6e38\u620f\u5bf9\u8c61\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u5ba2\u6237\u7aef\u4e0a\u6ce8\u518c\u6e38\u620f\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5728\u7f16\u5199\u81ea\u5df1\u7684 Network Manager \u65f6\uff0c\u52a1\u5fc5\u5728\u670d\u52a1\u5668\u4e0a\u8c03\u7528\u751f\u6210\u547d\u4ee4\u4e4b\u524d\u8ba9\u5ba2\u6237\u7aef\u51c6\u5907\u597d\u63a5\u6536\u72b6\u6001\u66f4\u65b0\uff0c\u5426\u5219\u4e0d\u4f1a\u53d1\u9001\u72b6\u6001\u66f4\u65b0\u3002\u5982\u679c\u4f7f\u7528\u7684\u662f Unity \u7684\u5185\u7f6e Network Manager \u7ec4\u4ef6\uff0c\u5219\u4f1a\u81ea\u52a8\u6267\u884c\u6b64\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u66f4\u9ad8\u7ea7\u7684\u7528\u9014\uff0c\u4f8b\u5982\u5bf9\u8c61\u6c60\u6216\u52a8\u6001\u521b\u5efa\u7684\u8d44\u6e90\uff0c\u53ef\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.ClientScene.RegisterSpawnHandler.html"},"ClientScene.RegisterSpawnHandler")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5141\u8bb8\u6ce8\u518c\u56de\u8c03\u51fd\u6570\u4ee5\u5b9e\u73b0\u5ba2\u6237\u7aef\u751f\u6210\u3002\u5982\u9700\u67e5\u770b\u8fd9\u65b9\u9762\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs/unet-game-objects/unet-custom-spawning"},"\u81ea\u5b9a\u4e49\u751f\u6210\u51fd\u6570"),"\u6587\u6863\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u5177\u6709\u7c7b\u4f3c\u4e8e\u540c\u6b65\u53d8\u91cf\u7684\u7f51\u7edc\u72b6\u6001\uff0c\u90a3\u4e48\u8be5\u72b6\u6001\u4e0e\u751f\u6210\u6d88\u606f\u540c\u6b65\u3002\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u6b64\u811a\u672c\u9644\u52a0\u5230\u6811\u9884\u5236\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing UnityEngine.Networking;\nclass Tree : NetworkBehaviour {\n    [SyncVar]\n    public int numLeaves;\n    public override void OnStartClient() {\n        Debug.Log("Tree spawned with leaf count " + numLeaves);\n    }\n}\n')),(0,i.kt)("p",null,"\u9644\u52a0\u6b64\u811a\u672c\u540e\uff0c\u53ef\u66f4\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"numLeaves")," \u53d8\u91cf\u5e76\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"SpawnTrees")," \u51fd\u6570\u6765\u67e5\u770b\u5176\u662f\u5426\u51c6\u786e\u53cd\u6620\u5728\u5ba2\u6237\u7aef\u4e0a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'void SpawnTrees() {\n    int x = 0;\n    for (int i = 0; i &lt; 5; ++i) {\n        var treeGo = Instantiate(treePrefab, new Vector3(x++, 0, 0), Quaternion.identity);\n        var tree = treeGo.GetComponent&lt;Tree&gt;();\n        tree.numLeaves = Random.Range(10,200);\n        Debug.Log("Spawning leaf with leaf count " + tree.numLeaves);\n        NetworkServer.Spawn(treeGo);\n    }\n}\n')),(0,i.kt)("p",null,"\u8bf7\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Tree")," \u811a\u672c\u9644\u52a0\u5230\u5148\u524d\u521b\u5efa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"treePrefab")," \u811a\u672c\u6765\u67e5\u770b\u5b9e\u9645\u6548\u679c\u3002"),(0,i.kt)("h3",{id:"\u7ea6\u675f"},"\u7ea6\u675f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NetworkIdentity \u5fc5\u987b\u4f4d\u4e8e\u53ef\u751f\u6210\u7684\u9884\u5236\u4ef6\u7684\u6839\u6e38\u620f\u5bf9\u8c61\u4e0a\u3002\u5426\u5219\uff0cNetwork Manager \u65e0\u6cd5\u6ce8\u518c\u9884\u5236\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"NetworkBehaviour \u811a\u672c\u5fc5\u987b\u4e0e NetworkIdentity \u4f4d\u4e8e\u540c\u4e00\u6e38\u620f\u5bf9\u8c61\u4e0a\uff0c\u800c\u4e0d\u662f\u5728\u5b50\u6e38\u620f\u5bf9\u8c61\u4e0a")),(0,i.kt)("h2",{id:"\u6e38\u620f\u5bf9\u8c61\u521b\u5efa\u6d41\u7a0b"},"\u6e38\u620f\u5bf9\u8c61\u521b\u5efa\u6d41\u7a0b"),(0,i.kt)("p",null,"\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u65f6\u53d1\u751f\u7684\u5185\u90e8\u64cd\u4f5c\u7684\u5b9e\u9645\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u5177\u6709 Network Identity \u7ec4\u4ef6\u7684\u9884\u5236\u4ef6\u6ce8\u518c\u4e3a\u201c\u53ef\u751f\u6210\u201d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ece\u670d\u52a1\u5668\u4e0a\u7684\u9884\u5236\u4ef6\u5b9e\u4f8b\u5316\u6e38\u620f\u5bf9\u8c61\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6e38\u620f\u4ee3\u7801\u5728\u5b9e\u4f8b\u4e0a\u8bbe\u7f6e\u521d\u59cb\u503c\uff08\u8bf7\u6ce8\u610f\uff0c\u6b64\u5904\u65bd\u52a0\u7684 3D \u7269\u7406\u4f5c\u7528\u529b\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5b9e\u4f8b\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkServer.Spawn()"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5728 ",(0,i.kt)("a",{parentName:"li",href:"/docs/unet-classes-reference/class-network-behaviour"},"Network Behaviour")," \u7ec4\u4ef6\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"OnSerialize()")," \u6765\u6536\u96c6\u670d\u52a1\u5668\u4e0a\u7684\u5b9e\u4f8b\u4e0a\u7684 SyncVar \u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgType.ObjectSpawn")," \u7c7b\u578b\u7684\u7f51\u7edc\u6d88\u606f\u53d1\u9001\u5230\u5df2\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\uff0c\u5176\u4e2d\u5305\u62ec SyncVar \u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e0a\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"OnStartServer()"),"\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"isServer")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u63a5\u6536 ",(0,i.kt)("inlineCode",{parentName:"li"},"ObjectSpawn")," \u6d88\u606f\u5e76\u4ece\u5df2\u6ce8\u518c\u7684\u9884\u5236\u4ef6\u521b\u5efa\u65b0\u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5728 Network Behaviour \u7ec4\u4ef6\u4e0a\u8c03\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkBehaviour.OnDeserialize.html"},"OnDeserialize()")," \u5c06 SyncVar \u6570\u636e\u5e94\u7528\u4e8e\u5ba2\u6237\u7aef\u4e0a\u7684\u65b0\u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6bcf\u4e2a\u5ba2\u6237\u7aef\u4e0a\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"OnStartClient()"),"\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"isClient")," \u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"\u968f\u7740\u6e38\u620f\u8fdb\u7a0b\u4e0d\u65ad\u63a8\u8fdb\uff0c\u5bf9 SyncVar \u503c\u7684\u66f4\u6539\u4f1a\u81ea\u52a8\u540c\u6b65\u5230\u5ba2\u6237\u7aef\u3002\u6b64\u8fc7\u7a0b\u4e00\u76f4\u6301\u7eed\u5230\u6e38\u620f\u7ed3\u675f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e0a\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkServer.Destroy()"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgType.ObjectDestroy")," \u7c7b\u578b\u7684\u7f51\u7edc\u6d88\u606f\u53d1\u9001\u5230\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5ba2\u6237\u7aef\u4e0a\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"OnNetworkDestroy()"),"\uff0c\u7136\u540e\u9500\u6bc1\u8be5\u5b9e\u4f8b\u3002")),(0,i.kt)("h3",{id:"\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61"},"\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61"),(0,i.kt)("p",null,"HLAPI \u4e2d\u7684\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u4e0e\u975e\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u7684\u5de5\u4f5c\u65b9\u5f0f\u7565\u6709\u4e0d\u540c\u3002\u4f7f\u7528 Network Manager \u751f\u6210\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkIdentity")," \u7684\u9884\u5236\u4ef6\u6ce8\u518c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerPrefab")),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"AddPlayer()"),"\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgType.AddPlayer")," \u7c7b\u578b\u7684\u7f51\u7edc\u6d88\u606f\u53d1\u9001\u5230\u670d\u52a1\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u63a5\u6536\u6d88\u606f\u5e76\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkManager.OnServerAddPlayer()")),(0,i.kt)("li",{parentName:"ul"},"\u4ece\u670d\u52a1\u5668\u4e0a\u7684 PlayerPrefab \u5b9e\u4f8b\u5316\u6e38\u620f\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e0a\u901a\u8fc7\u65b0\u73a9\u5bb6\u5b9e\u4f8b\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkManager.AddPlayerForConnection()")),(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210\u73a9\u5bb6\u5b9e\u4f8b - \u4e0d\u5fc5\u4e3a\u73a9\u5bb6\u5b9e\u4f8b\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkServer.Spawn()"),"\u3002\u4e0e\u666e\u901a\u751f\u6210\u4e00\u6837\uff0c\u751f\u6210\u6d88\u606f\u5c06\u53d1\u9001\u5230\u6240\u6709\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgType.Owner")," \u7c7b\u578b\u7684\u7f51\u7edc\u6d88\u606f\u53d1\u9001\u5230\u6dfb\u52a0\u4e86\u73a9\u5bb6\u7684\u5ba2\u6237\u7aef\uff08\u4ec5\u9650\u8be5\u5ba2\u6237\u7aef\uff01\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u59cb\u5ba2\u6237\u7aef\u63a5\u6536\u7f51\u7edc\u6d88\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u539f\u59cb\u5ba2\u6237\u7aef\u4e0a\u7684\u73a9\u5bb6\u5b9e\u4f8b\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"OnStartLocalPlayer()"),"\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"isLocalPlayer")," \u8bbe\u7f6e\u4e3a true")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartClient()")," \u4e4b\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartLocalPlayer()"),"\uff0c\u56e0\u4e3a\u53ea\u6709\u5728\u751f\u6210\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u540e\u6240\u6709\u6743\u6d88\u606f\u4ece\u670d\u52a1\u5668\u5230\u8fbe\u65f6\u624d\u4f1a\u53d1\u751f\u6b64\u884c\u4e3a\uff0c\u56e0\u6b64\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartClient()")," \u4e2d\u672a\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"isLocalPlayer"),"\u3002"),(0,i.kt)("p",null,"\u7531\u4e8e\u4ec5\u4f1a\u4e3a\u5ba2\u6237\u7aef\u7684\u672c\u5730\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartLocalPlayer"),"\uff0c\u56e0\u6b64\u5bf9\u4e8e\u4ec5\u5e94\u5f53\u5bf9\u672c\u5730\u73a9\u5bb6\u5b8c\u6210\u7684\u521d\u59cb\u5316\uff0c\u6700\u597d\u662f\u5728\u8fd9\u91cc\u6267\u884c\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u5305\u62ec\u542f\u7528\u8f93\u5165\u5904\u7406\uff0c\u5e76\u4e3a\u73a9\u5bb6\u6e38\u620f\u5bf9\u8c61\u542f\u7528\u6444\u50cf\u673a\u8ffd\u8ff9\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u5ba2\u6237\u7aef\u6388\u6743\u751f\u6210\u6e38\u620f\u5bf9\u8c61"},"\u4f7f\u7528\u5ba2\u6237\u7aef\u6388\u6743\u751f\u6210\u6e38\u620f\u5bf9\u8c61"),(0,i.kt)("p",null,"\u8981\u751f\u6210\u6e38\u620f\u5bf9\u8c61\u5e76\u5c06\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\u7684\u6388\u6743\u5206\u914d\u7ed9\u7279\u5b9a\u5ba2\u6237\u7aef\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkServer.SpawnWithClientAuthority.html"},"NetworkServer.SpawnWithClientAuthority"),"\uff0c\u5b83\u4f1a\u5c06\u8981\u83b7\u5f97\u6388\u6743\u7684\u5ba2\u6237\u7aef\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkConnection")," \u4f5c\u4e3a\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\uff0c\u5177\u6709\u6388\u6743\u7684\u5ba2\u6237\u7aef\u4e0a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"hasAuthority")," \u5c5e\u6027\u4e3a true\uff0c\u5e76\u5728\u5177\u6709\u6388\u6743\u7684\u5ba2\u6237\u7aef\u4e0a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartAuthority()"),"\u3002\u8be5\u5ba2\u6237\u7aef\u53ef\u4e3a\u8be5\u6e38\u620f\u5bf9\u8c61\u53d1\u51fa\u547d\u4ee4\u3002\u5728\u5176\u4ed6\u5ba2\u6237\u7aef\u4e0a\uff08\u4ee5\u53ca\u4e3b\u673a\u4e0a\uff09\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"hasAuthority")," \u4e3a false\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u5ba2\u6237\u7aef\u6388\u6743\u751f\u6210\u7684\u5bf9\u8c61\u5fc5\u987b\u5728\u5176 ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkIdentity")," \u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalPlayerAuthority"),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u53ef\u4fee\u6539\u4e0a\u9762\u7684\u6811\u751f\u6210\u793a\u4f8b\uff0c\u4ece\u800c\u8ba9\u6811\u5177\u6709\u5982\u4e0b\u6240\u793a\u7684\u5ba2\u6237\u7aef\u6388\u6743\uff08\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u73b0\u5728\u9700\u8981\u4e3a\u8be5\u62e5\u6709\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u4f20\u5165\u4e00\u4e2a NetworkConnection \u6e38\u620f\u5bf9\u8c61\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'void SpawnTrees(NetworkConnection conn) {\n    int x = 0;\n    for (int i = 0; i &lt; 5; ++i)\n    {\n        var treeGo = Instantiate(treePrefab, new Vector3(x++, 0, 0), Quaternion.identity);\n        var tree = treeGo.GetComponent&lt;Tree&gt;();\n        tree.numLeaves = Random.Range(10,200);\n        Debug.Log("Spawning leaf with leaf count " + tree.numLeaves);\n        NetworkServer.SpawnWithClientAuthority(treeGo, conn);\n    }\n}\n')),(0,i.kt)("p",null,"\u53ef\u4fee\u6539\u6811\u811a\u672c\u4ee5\u5c06\u547d\u4ee4\u53d1\u9001\u5230\u670d\u52a1\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public override void OnStartAuthority() {\n    CmdMessageFromTree("Tree with " + numLeaves + " reporting in");\n}\n\n[Command]\nvoid CmdMessageFromTree(string msg) {\n    Debug.Log("Client sent a tree message: " + msg);\n}\n')),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4e0d\u80fd\u53ea\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"CmdMessageFromTree")," \u8c03\u7528\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnStartClient")," \u4e2d\uff0c\u56e0\u4e3a\u6b64\u65f6\u5c1a\u672a\u8bbe\u7f6e\u6388\u6743\uff0c\u56e0\u6b64\u8c03\u7528\u5c06\u5931\u8d25\u3002"))}m.isMDXComponent=!0}}]);