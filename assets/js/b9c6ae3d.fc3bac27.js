"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17005],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,m=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},99404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var i=n(87462),r=n(63366),l=(n(67294),n(3905)),a=["components"],o={id:"UNetEncryptionPlugins",title:"Multiplayer \u52a0\u5bc6\u63d2\u4ef6",slug:"/unet/unet-encryption-plugins"},p="Multiplayer \u52a0\u5bc6\u63d2\u4ef6",u={unversionedId:"unet/UNetEncryptionPlugins",id:"unet/UNetEncryptionPlugins",title:"Multiplayer \u52a0\u5bc6\u63d2\u4ef6",description:"|  |",source:"@site/docs/unet/unet-encryption-plugins.md",sourceDirName:"unet",slug:"/unet/unet-encryption-plugins",permalink:"/doc-unity-manual/docs/unet/unet-encryption-plugins",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-encryption-plugins.md",tags:[],version:"current",frontMatter:{id:"UNetEncryptionPlugins",title:"Multiplayer \u52a0\u5bc6\u63d2\u4ef6",slug:"/unet/unet-encryption-plugins"},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u8bd5\u4fe1\u606f",permalink:"/doc-unity-manual/docs/unet/unet-debugging"},next:{title:"\u8bbe\u7f6e\u591a\u4eba\u6e38\u620f\u9879\u76ee",permalink:"/doc-unity-manual/docs/unet/unet-getting-started"}},d={},c=[{value:"<strong>\u5982\u4f55\u4f7f\u7528\u52a0\u5bc6\u63d2\u4ef6</strong>",id:"\u5982\u4f55\u4f7f\u7528\u52a0\u5bc6\u63d2\u4ef6",level:2},{value:"<strong>\u5fc5\u9700\u51fd\u6570</strong>",id:"\u5fc5\u9700\u51fd\u6570",level:2},{value:"\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6",id:"\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u5bf9\u6570\u636e\u8fdb\u884c\u89e3\u5bc6",id:"\u5bf9\u6570\u636e\u8fdb\u884c\u89e3\u5bc6",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"SafeMaxPacketSize",id:"safemaxpacketsize",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:4},{value:"ConnectionIdAssigned",id:"connectionidassigned",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"multiplayer-\u52a0\u5bc6\u63d2\u4ef6"},"Multiplayer \u52a0\u5bc6\u63d2\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,l.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,l.kt)("p",null,"Unity Multiplayer \u53ef\u4ee5\u4f7f\u7528\u52a0\u5bc6\u63d2\u4ef6\uff0c\u4ee5\u4fbf\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u7684\u6240\u6709\u6570\u636e\u5148\u901a\u8fc7\u52a0\u5bc6\u63d2\u4ef6\uff0c\u7136\u540e\u518d\u8fdb\u884c\u53d1\u9001\u3002\u8fd9\u6837\u53ef\u4ee5\u9632\u6b62\u901a\u8fc7\u6570\u636e\u5305\u64cd\u7eb5\u548c\u653b\u51fb\u4e13\u7528\u6e38\u620f\u670d\u52a1\u5668\u7684\u65b9\u5f0f\u8fdb\u884c\u6e38\u620f\u4f5c\u5f0a\u3002"),(0,l.kt)("p",null,"Unity Multiplayer \u6ca1\u6709\u5185\u7f6e\u7684\u52a0\u5bc6\u63d2\u4ef6\uff0c\u56e0\u6b64\u60a8\u5fc5\u987b\u63d0\u4f9b\u81ea\u5df1\u7684\u63d2\u4ef6\u6765\u5b9e\u73b0\u52a0\u5bc6\u7b97\u6cd5\u5e76\u5b9e\u73b0\u4e0b\u6587\u8fdb\u4e00\u6b65\u5217\u51fa\u7684\u5fc5\u9700\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86 Unity Multiplayer \u5982\u4f55\u4f7f\u7528\u60a8\u7684\u52a0\u5bc6\u63d2\u4ef6\uff08\u5982\u679c\u60a8\u63d0\u4f9b\u4e86\u8be5\u63d2\u4ef6\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UNetMultiplayerEncryption.svg",alt:"\u5c06\u52a0\u5bc6\u63d2\u4ef6\u4e0e Unity Multiplayer \u914d\u5408\u4f7f\u7528\u65f6\u7684\u6570\u636e\u6d41"})),(0,l.kt)("p",null,"\u5c06\u52a0\u5bc6\u63d2\u4ef6\u4e0e Unity Multiplayer \u914d\u5408\u4f7f\u7528\u65f6\u7684\u6570\u636e\u6d41"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u52a0\u5bc6\u63d2\u4ef6"},(0,l.kt)("strong",{parentName:"h2"},"\u5982\u4f55\u4f7f\u7528\u52a0\u5bc6\u63d2\u4ef6")),(0,l.kt)("p",null,"\u4e3a\u4e86\u6307\u793a\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u52a0\u5bc6\u63d2\u4ef6\uff0c\u5fc5\u987b\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"UnityEngine.Networking.NetworkTransport.LoadEncryptionLibrary(path)"),"\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," \u662f\u6240\u7f16\u8bd1\u63d2\u4ef6\u7684\u8def\u5f84\u3002\u5728 Windows \u4e2d\uff0c\u6b64\u8def\u5f84\u4e00\u822c\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'string.Format("{0}/Plugins/UnetEncryption.dll", Application.dataPath)'),"\u3002"),(0,l.kt)("p",null,"\u8c03\u7528\u6b64\u51fd\u6570\u65f6\uff0cUnity \u4f1a\u68c0\u67e5\u8be5\u6587\u4ef6\u662f\u5426\u5b58\u5728\u4ee5\u53ca\u5b83\u662f\u5426\u5b9e\u73b0\u4e86\u6240\u6709\u5fc5\u9700\u529f\u80fd\uff08\u5728\u4e0b\u6587\u5217\u51fa\uff09\u3002\u8fd9\u4e9b\u662f Unity Multiplayer \u7cfb\u7edf\u672c\u8eab\u5c06\u8c03\u7528\u7684\u51fd\u6570\u3002\u5982\u679c\u60a8\u521b\u5efa\u81ea\u5df1\u7684\u52a0\u5bc6\u63d2\u4ef6\uff0c\u53ef\u80fd\u9700\u8981\u6dfb\u52a0\u4ece C# \u4ee3\u7801\u8c03\u7528\u7684\u66f4\u591a\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u9700\u8981\u5c06\u7b97\u6cd5\u521d\u59cb\u5316\u6216\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u5bc6\u94a5\u503c\u3002\u53ef\u4ee5\u6309\u7167\u901a\u5e38\u7684\u65b9\u5f0f\u5bf9\u53ef\u4ece C# \u8c03\u7528\u7684",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/plugins/native-plugins"},"\u539f\u751f\u63d2\u4ef6"),"\u6267\u884c\u6b64\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u6e38\u620f\u7684\u6784\u5efa\u7248\u672c\u4e2d\uff0c\u63d2\u4ef6\u7684\u4f4d\u7f6e\u4e0d\u4e00\u5b9a\u4e0e Assets \u6587\u4ef6\u5939\u4e2d\u7684\u4f4d\u7f6e\u76f8\u540c\uff0c\u5e76\u4e14\u8be5\u4f4d\u7f6e\u5728\u76ee\u6807\u5e73\u53f0\u4e4b\u95f4\u53ef\u80fd\u4e0d\u540c\u3002\u60a8\u53ef\u80fd\u9700\u8981\u7f16\u5199\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u7684\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u5e76\u6839\u636e\u68c0\u6d4b\u7ed3\u679c\u9009\u62e9\u6b63\u786e\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u53ef\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/UnetEncryptionExample"},"Unity GitHub")," \u83b7\u5f97\u793a\u4f8b\u52a0\u5bc6\u63d2\u4ef6\u548c\u793a\u4f8b Unity \u9879\u76ee\u3002\u63d0\u4f9b\u8fd9\u4e9b\u793a\u4f8b\u662f\u4e3a\u4e86\u5c55\u793a\u5982\u4f55\u5b9e\u73b0\u60a8\u81ea\u5df1\u7684\u63d2\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u5fc5\u9700\u51fd\u6570"},(0,l.kt)("strong",{parentName:"h2"},"\u5fc5\u9700\u51fd\u6570")),(0,l.kt)("p",null,"\u60a8\u521b\u5efa\u6216\u4f7f\u7528\u7684\u4efb\u4f55\u52a0\u5bc6\u63d2\u4ef6\u90fd\u5fc5\u987b\u63d0\u4f9b\u4ee5\u4e0b\u51fd\u6570\u3002\u5982\u679c Unity \u672a\u5b9a\u4e49\u8fd9\u4e9b\u51fd\u6570\uff0c\u5b83\u5c06\u65e0\u6cd5\u52a0\u8f7d\u63d2\u4ef6\u3002\u8fd9\u4e9b\u662f Unity \u8fd0\u884c\u65f6\u672c\u8eab\u5c06\u8c03\u7528\u7684\u51fd\u6570\u3002\u63d2\u4ef6\u901a\u5e38\u4f1a\u63d0\u4f9b","_","\u989d\u5916","_","\u51fd\u6570\uff0c\u4ee5\u4fbf\u4ece\u7528\u6237\u7684 C# \u4ee3\u7801\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\u6765\u5b9e\u73b0\u591a\u79cd\u76ee\u7684\uff0c\u6bd4\u5982\u6ce8\u518c\u5bc6\u94a5\u3002"),(0,l.kt)("h3",{id:"\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6"},"\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"int UNetEncryptionLib_Encrypt(\n    void * payload,\n    int payload_len,\n    void * dest,\n    int & dest_len,\n    int connection_id,\n    bool isConnect);\n")),(0,l.kt)("p",null,"\u6b64\u51fd\u6570\u6267\u884c\u52a0\u5bc6\u4efb\u52a1\u3002\u6bcf\u5f53\u901a\u8fc7\u7f51\u7edc\u53d1\u9001\u6570\u636e\u5305\u65f6\uff0cUnity \u7684\u7f51\u7edc\u529f\u80fd\u90fd\u5c06\u8c03\u7528\u6b64\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"payload \u662f\u8981\u52a0\u5bc6\u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"payload","_","len \u662f ",(0,l.kt)("em",{parentName:"li"},"payload")," \u7f13\u51b2\u533a\u7684\u957f\u5ea6\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"dest \u662f\u63d2\u4ef6\u5e94\u5c06\u52a0\u5bc6\u6570\u636e\u5199\u5165\u5230\u7684\u7f13\u51b2\u533a\u3002"),(0,l.kt)("li",{parentName:"ul"},"dest","_","len \u662f dest \u7f13\u51b2\u533a\u7684\u5bb9\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002\u63d2\u4ef6\u5fc5\u987b\u5c06\u6b64\u503c\u66ff\u6362\u4e3a","_","\u5b9e\u9645\u5199\u5165","_"," dest \u7684\u5b57\u8282\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"connection","_","id \u662f\u8be5\u8fde\u63a5\u7684\u672c\u5730\u6807\u8bc6\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u6570\u636e\u5305\u662f\u8fde\u63a5\u8bf7\u6c42\uff0c\u5219 isConnect \u4e3a true\u3002\u5982\u679c\u6b64\u53c2\u6570\u4e3a true\uff0c\u5fc5\u987b\u63d0\u524d\uff08\u901a\u8fc7\u6e38\u620f\u4ee3\u7801\uff09\u544a\u77e5\u63d2\u4ef6\u8981\u4f7f\u7528\u54ea\u4e2a\u5bc6\u94a5\u3002\u5982\u679c\u6b64\u53c2\u6570\u4e3a false\uff0c\u63d2\u4ef6\u5e94\u8be5\u5df2\u7ecf\u5177\u6709\u4ece\u8be5\u503c\u5230\u8981\u4f7f\u7528\u7684\u5bc6\u94a5\u4e4b\u95f4\u7684\u6620\u5c04\u3002\u8bf7\u53c2\u9605\u793a\u4f8b\u63d2\u4ef6\u4ee5\u4e86\u89e3\u5b9e\u73b0\u65b9\u5f0f\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"\u6210\u529f\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Encrypt")," \u5fc5\u987b\u8fd4\u56de\u96f6\u3002\u5982\u679c\u8fd4\u56de\u4efb\u4f55\u5176\u4ed6\u503c\uff0c\u8fd0\u884c\u65f6\u5c06\u4e22\u5f03\u6570\u636e\u5305\u800c\u4e0d\u53d1\u9001\u3002"),(0,l.kt)("h3",{id:"\u5bf9\u6570\u636e\u8fdb\u884c\u89e3\u5bc6"},"\u5bf9\u6570\u636e\u8fdb\u884c\u89e3\u5bc6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"int UNetEncryptionLib_Decrypt(\n    void * payload,\n    int payload_len,\n    void * dest,\n    int & dest_len,\n    int & key_id);\n")),(0,l.kt)("p",null,"\u6b64\u51fd\u6570\u6267\u884c\u89e3\u5bc6\u4efb\u52a1\u3002\u6bcf\u5f53\u4ece\u7f51\u7edc\u63a5\u6536\u6570\u636e\u5305\u65f6\uff0cUnity \u7684\u7f51\u7edc\u529f\u80fd\u90fd\u5c06\u8c03\u7528\u6b64\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payload")," \u662f\u63a5\u6536\u7684\u6570\u636e\u5305\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payload_len")," \u662f payload \u7f13\u51b2\u533a\u7684\u957f\u5ea6\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dest")," \u662f\u63d2\u4ef6\u5e94\u5c06\u89e3\u5bc6\u6570\u636e\u5199\u5165\u5230\u7684\u7f13\u51b2\u533a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dest_len")," \u662f dest \u7f13\u51b2\u533a\u7684\u5bb9\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002\u63d2\u4ef6\u5fc5\u987b\u5c06\u6b64\u503c\u66ff\u6362\u4e3a","_","\u5b9e\u9645\u5199\u5165","_"," dest \u7684\u5b57\u8282\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key_id")," \u662f\u4e00\u4e2a\u6574\u6570\u6807\u8bc6\u7b26\u3002\u63d2\u4ef6\u5e94\u7f16\u5199\u4e00\u4e2a\u503c\u6765\u552f\u4e00\u6807\u8bc6\u6240\u4f7f\u7528\u7684\u89e3\u5bc6\u5bc6\u94a5\u3002\u5728\u670d\u52a1\u5668\u4e0a\uff0c\u5982\u679c\u63a5\u53d7\u65b0\u8fde\u63a5\uff0c\u5219\u5c06\u8be5\u503c\u4f20\u56de\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"ConnectionIdAssigned"),"\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"\u6210\u529f\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Decrypt")," \u5fc5\u987b\u8fd4\u56de\u96f6\u3002\u5982\u679c\u8fd4\u56de\u4efb\u4f55\u5176\u4ed6\u503c\uff0c\u5c06\u4e22\u5f03\u6570\u636e\u5305\u800c\u4e0d\u505a\u8fdb\u4e00\u6b65\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"safemaxpacketsize"},"SafeMaxPacketSize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"unsigned short UNetEncryptionLib_SafeMaxPacketSize(\n    unsigned short mtu);\n")),(0,l.kt)("p",null,"\u5e94\u8be5\u4ece\u6e38\u620f\u8c03\u7528\u6b64\u51fd\u6570\u4ee5\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"ConnectionConfig.PacketSize"),"\uff08\u4e5f\u79f0\u4e3a","_","\u6700\u5927\u4f20\u8f93\u5355\u5143","_","\uff0c\u5373 MTU\uff09\uff0c\u7136\u540e\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"NetworkTransport.AddHost"),"\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u7684\u6e38\u620f\u53ef\u80fd\u901a\u5e38\u4f7f\u7528 1000 \u5b57\u8282\u7684 MTU\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"ConnectionConfig.PacketSize")," \u8bbe\u7f6e\u4e3a 1000 \u5b57\u8282\uff0c\u7136\u540e\u5c06\u5176\u4f20\u9012\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"NetworkTransport.AddHost"),"\uff08\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"HostConfig.DefaultConfig"),"\uff09\uff0c\u5219 NetworkTransport \u5c42\u4f1a\u901a\u8fc7\u5355\u4e2a\u6570\u636e\u5305\u53d1\u9001\u4e0d\u8d85\u8fc7 1000 \u5b57\u8282\u7684\u660e\u6587\u3002"),(0,l.kt)("p",null,"\u52a0\u5bc6\u63d2\u4ef6\u901a\u5e38\u4f1a\u7531\u4e8e\u653e\u7f6e\u5728\u6709\u6548\u8d1f\u8f7d\u4e4b\u524d\u7684\u6807\u5934\u4fe1\u606f\u4ee5\u53ca\u5c06\u6709\u6548\u8d1f\u8f7d\u820d\u5165\u4e3a\u52a0\u5bc6\u5757\u5927\u5c0f\u800c\u589e\u52a0\u4e00\u4e9b\u5f00\u9500\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u8981\u53d1\u9001 18 \u5b57\u8282\u7684\u660e\u6587\uff0c\u5e76\u4e14\u63d2\u4ef6\u9700\u8981\u6dfb\u52a0 49 \u5b57\u8282\u7684\u6807\u5934\u5e76\u4f7f\u7528 AES \u6765\u52a0\u5bc6\u5757\u5927\u5c0f\u4e3a 16 \u5b57\u8282\u7684\u6570\u636e\uff0c\u5219\u8be5\u7b97\u6cd5\u5c06\u4ea7\u751f\u4e00\u4e2a 81 \u5b57\u8282\u7684\u6570\u636e\u5305\uff0818 \u5b57\u8282\u7684\u660e\u6587\u5b57\u8282\u5c06\u820d\u5165\u4e3a 32 \u5b57\u8282\u7684\u5bc6\u6587\uff0c\u7136\u540e\u518d\u6dfb\u52a0 49 \u5b57\u8282\u7684\u6807\u5934\uff09\u3002"),(0,l.kt)("p",null,"Unity \u4f1a\u8c03\u7528\u6b64\u51fd\u6570\u6765\u786e\u4fdd\u5373\u5c06\u53d1\u9001\u7684\u6570\u636e\u5305\u4e0d\u4f1a\u8d85\u51fa\u5141\u8bb8\u7684\u53d1\u9001\u9650\u5236\uff08\u9700\u8981\u8003\u8651\u7f51\u7edc MTU \u548c\u52a0\u5bc6\u7b97\u6cd5\u7684\u5bc6\u6587\u6269\u5c55\u548c\u586b\u5145\uff09\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mtu")," \u662f\u6700\u5927\u4f20\u8f93\u5355\u5143\u3002\u8fd9\u662f\u60a8\u5e0c\u671b\u63d2\u4ef6\u751f\u6210\u7684\u6700\u5927\u6570\u636e\u5305\u5927\u5c0f\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4f7f\u63d2\u4ef6\u751f\u6210\u4e0d\u5927\u4e8e MTU \u7684\u6570\u636e\u5305\uff0c\u5e94\u8be5\u5411\u5355\u6b21 Encrypt \u8c03\u7528\u63d0\u4f9b\u7684\u6700\u5927\u660e\u6587\u91cf\u3002"),(0,l.kt)("p",null,"\u5fc5\u987b\u5728\u8fde\u63a5\u914d\u7f6e\u4e2d\u8bbe\u7f6e\u6700\u5927\u6570\u636e\u5305\u5927\u5c0f\uff0c\u4ece\u800c\u544a\u8bc9 Unity Multiplayer \u62c6\u5206\u6570\u636e\uff0c\u4f7f\u6570\u636e\u7b26\u5408\u60a8\u7684\u52a0\u5bc6\u8981\u6c42\u3002\u5982\u679c\u60a8\u53d1\u73b0\u81ea\u5df1\u7684\u67d0\u4e9b\u6d88\u606f\u65e0\u6cd5\u901a\u8fc7\u7f51\u7edc\u6210\u529f\u4f20\u8f93\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u8fd9\u4e9b\u6d88\u606f\u8d85\u51fa\u6700\u5927\u6570\u636e\u5305\u5927\u5c0f\u800c\u88ab\u4e22\u5f03\u3002"),(0,l.kt)("h3",{id:"connectionidassigned"},"ConnectionIdAssigned"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"void UNetEncryptionLib_ConnectionIdAssigned(\n    int key_id,\n    unsigned short connection_id);\n")),(0,l.kt)("p",null,"\u5df2\u63a5\u53d7\u65b0\u8fde\u63a5\u5e76\u5411\u5176\u5206\u914d ID \u540e\u5c06\u5728\u670d\u52a1\u5668\u4e0a\u8c03\u7528\u6b64\u51fd\u6570\u3002"),(0,l.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key_id")," \u662f\u7531\u8be5\u6570\u636e\u5305\u5bf9\u5e94\u7684\u5148\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"Decrypt")," \u8c03\u7528\u5199\u5165\u7684\u5bc6\u94a5\u6807\u8bc6\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"connection_id")," \u662f\u4ece\u73b0\u5728\u5f00\u59cb\u5c06\u4f7f\u7528\u7684\u8fde\u63a5 ID\u3002\u5177\u4f53\u800c\u8a00\uff0c\u5728\u5c06\u6570\u636e\u5305\u53d1\u9001\u56de\u5ba2\u6237\u7aef\u65f6\uff0c\u4f5c\u4e3a\u540e\u7eed ",(0,l.kt)("inlineCode",{parentName:"li"},"Encrypt")," \u8c03\u7528\u7684\u53c2\u6570\u3002")))}k.isMDXComponent=!0}}]);