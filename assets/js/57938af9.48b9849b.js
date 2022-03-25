"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55481],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19723:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"UNetReaderWriter",title:"NetworkReader \u548c NetworkWriter \u5e8f\u5217\u5316\u7a0b\u5e8f",slug:"/unet-using-transport/unet-reader-writer"},u="NetworkReader \u548c NetworkWriter \u5e8f\u5217\u5316\u7a0b\u5e8f",l={unversionedId:"unet/unet-using-hlapi/unet-using-transport/UNetReaderWriter",id:"unet/unet-using-hlapi/unet-using-transport/UNetReaderWriter",title:"NetworkReader \u548c NetworkWriter \u5e8f\u5217\u5316\u7a0b\u5e8f",description:"|  |",source:"@site/docs/unet/unet-using-hlapi/unet-using-transport/unet-reader-writer.md",sourceDirName:"unet/unet-using-hlapi/unet-using-transport",slug:"/unet-using-transport/unet-reader-writer",permalink:"/doc-unity-manual/docs/unet-using-transport/unet-reader-writer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unet-using-transport/unet-reader-writer.md",tags:[],version:"current",frontMatter:{id:"UNetReaderWriter",title:"NetworkReader \u548c NetworkWriter \u5e8f\u5217\u5316\u7a0b\u5e8f",slug:"/unet-using-transport/unet-reader-writer"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u4f20\u8f93\u5c42 API",permalink:"/doc-unity-manual/docs/unet-using-transport"},next:{title:"\u8bbe\u7f6e Unity Multiplayer",permalink:"/doc-unity-manual/docs/unity-multiplayer-setting-up"}},p={},c=[{value:"\u5c06 NetworkReader \u548c NetworkWriter \u7c7b\u4e0e NetworkServerSimple \u548c NetworkClient \u7c7b\u7ed3\u5408\u4f7f\u7528",id:"\u5c06-networkreader-\u548c-networkwriter-\u7c7b\u4e0e-networkserversimple-\u548c-networkclient-\u7c7b\u7ed3\u5408\u4f7f\u7528",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networkreader-\u548c-networkwriter-\u5e8f\u5217\u5316\u7a0b\u5e8f"},"NetworkReader \u548c NetworkWriter \u5e8f\u5217\u5316\u7a0b\u5e8f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,a.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkReader.html"},"NetworkReader")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkWriter.html"},"NetworkWriter")," \u7c7b\u53ef\u5c06\u6570\u636e\u5199\u5165\u5230\u5b57\u8282\u6d41\u3002"),(0,a.kt)("p",null,"\u591a\u73a9\u5bb6",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unet-using-hlapi"},"\u9ad8\u7ea7 API")," \u662f\u7528\u8fd9\u4e9b\u7c7b\u6784\u5efa\u7684\uff0c\u5e76\u5e7f\u6cdb\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u3002\u4f46\u662f\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u4f20\u8f93\u529f\u80fd\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u3002\u8fd9\u4e9b\u7c7b\u5177\u6709\u7528\u4e8e\u5927\u91cf Unity \u7c7b\u578b\u7684\u7279\u5b9a\u5e8f\u5217\u5316\u51fd\u6570\uff08\u6709\u5173\u7c7b\u578b\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.NetworkWriter.Write.html"},"NetworkWriter.Write"),"\uff09\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u7c7b\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u5199\u5165\u5668\u5b9e\u4f8b\uff0c\u5e76\u5c06\u5355\u72ec\u53d8\u91cf\u5199\u5165\u5230\u5176\u4e2d\u3002\u8fd9\u4e9b\u53d8\u91cf\u5728\u5185\u90e8\u5e8f\u5217\u5316\u4e3a\u5b57\u8282\u6570\u7ec4\uff0c\u5e76\u53ef\u901a\u8fc7\u7f51\u7edc\u6765\u53d1\u9001\u8be5\u6570\u7ec4\u3002\u5728\u63a5\u6536\u7aef\uff0c\u5b57\u8282\u6570\u7ec4\u7684\u8bfb\u53d6\u5668\u5b9e\u4f8b\u6309\u7167\u5b8c\u5168\u76f8\u540c\u7684\u5199\u5165\u987a\u5e8f\u5bf9\u53d8\u91cf\u8fdb\u884c\u56de\u8bfb\u3002"),(0,a.kt)("p",null,"\u8fd9\u53ef\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Networking.MessageBase.html"},"MessageBase")," \u7c7b\u7ed3\u5408\u4f7f\u7528\u6765\u751f\u6210\u5305\u542b\u5e8f\u5217\u5316\u7f51\u7edc\u6d88\u606f\u7684\u5b57\u8282\u6570\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SendMessage(short msgType, MessageBase msg, int channelId)\n{\n    // \u5c06\u6d88\u606f\u5199\u5165\u672c\u5730\u7f13\u51b2\u533a\n    NetworkWriter writer = new NetworkWriter();\n    writer.StartMessage(msgType);\n    msg.Serialize(writer);\n    writer.FinishMessage();\n\n    myClient.SendWriter(writer, channelId);\n}\n")),(0,a.kt)("p",null,"\u6b64\u6d88\u606f\u7ecf\u8fc7\u6b63\u786e\u7684\u683c\u5f0f\u8bbe\u7f6e\uff0c\u4ece\u800c\u53ef\u4e3a\u5176\u8c03\u7528\u6d88\u606f\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"\u5c06-networkreader-\u548c-networkwriter-\u7c7b\u4e0e-networkserversimple-\u548c-networkclient-\u7c7b\u7ed3\u5408\u4f7f\u7528"},"\u5c06 NetworkReader \u548c NetworkWriter \u7c7b\u4e0e NetworkServerSimple \u548c NetworkClient \u7c7b\u7ed3\u5408\u4f7f\u7528"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u662f\u5f88\u4f4e\u7ea7\u7684\u6f14\u793a\uff0c\u4f7f\u7528\u4e86\u9ad8\u7ea7 API \u4e2d\u7684\u6700\u4f4e\u7ea7\u7c7b\u6765\u8bbe\u7f6e\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u7528\u4e8e\u5c06\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing UnityEngine.Networking;\npublic class Serializer : MonoBehaviour {\n    NetworkServerSimple m_Server;\n    NetworkClient m_Client;\n    const short k_MyMessage = 100;\n\n    // \u4f7f\u7528\u8fd9\u6837\u7684\u670d\u52a1\u5668\u5b9e\u4f8b\u65f6\uff0c\u5fc5\u987b\u624b\u52a8\u5c06\u5176\u9001\u5165\n    void Update() {\n        if (m_Server != null)\n            m_Server.Update();\n    }\n\n    void StartServer() {\n        m_Server = new NetworkServerSimple();\n        m_Server.RegisterHandler(k_MyMessage, OnMyMessage);\n        if (m_Server.Listen(5555))\n            Debug.Log("Started listening on 5555");\n    }\n\n    void StartClient() {\n        m_Client = new NetworkClient();\n        m_Client.RegisterHandler(MsgType.Connect, OnClientConnected);\n        m_Client.Connect("127.0.0.1", 5555);\n    }\n\n    void OnClientConnected(NetworkMessage netmsg) {\n        Debug.Log("Client connected to server");\n        SendMessage();\n    }\n}\n')),(0,a.kt)("p",null,"\u4ee3\u7801\u7684\u4e0b\u4e00\u90e8\u5206\u4f7f\u7528\u7f51\u7edc\u8bfb\u53d6\u5668\u548c\u7f51\u7edc\u5199\u5165\u5668\u6765\u53d1\u9001\u6d88\u606f\uff0c\u4f46\u4f1a\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u4e2d\u5185\u7f6e\u7684\u6d88\u606f\u5904\u7406\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'void SendMessage() {\n    NetworkWriter writer = new NetworkWriter();\n    writer.StartMessage(k_MyMessage);\n    writer.Write(42);\n    writer.Write("What is the answer");\n    writer.FinishMessage();\n    m_Client.SendWriter(writer, 0);\n}\n\nvoid OnMyMessage(NetworkMessage netmsg) {\n    Debug.Log("Got message, size=" + netmsg.reader.Length);\n    var someValue = netmsg.reader.ReadInt32();\n    var someString = netmsg.reader.ReadString();\n    Debug.Log("Message value=" + someValue + " Message string=\'" + someString + "\'");\n}\n')),(0,a.kt)("p",null,"\u4e3a\u6d88\u606f\u5904\u7406\u7a0b\u5e8f\u8bbe\u7f6e\u6d88\u606f\u65f6\uff0c\u5e94\u59cb\u7ec8\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkWriter.StartMessage()"),"\uff08\u5305\u62ec\u6d88\u606f\u7c7b\u578b ID\uff09\u548c NetworkWriter.FinishMessage() \u8c03\u7528\u3002\u5982\u679c\u4e0d\u4f7f\u7528\u5b57\u8282\u6570\u7ec4\uff0c\u53ef\u8df3\u8fc7\u8be5\u6b65\u9aa4\u3002"))}m.isMDXComponent=!0}}]);