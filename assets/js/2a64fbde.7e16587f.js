"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21535],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,b=d["".concat(l,".").concat(y)]||d[y]||c[y]||i;return n?r.createElement(b,u(u({ref:t},p),{},{components:n})):r.createElement(b,u({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],o={id:"UnityWebRequest-UploadingRawData",title:"\u5c06\u539f\u59cb\u6570\u636e\u4e0a\u4f20\u5230 HTTP \u670d\u52a1\u5668 (PUT)",slug:"/unity-web-request-hlapi/unity-web-request-uploading-raw-data"},l="\u5c06\u539f\u59cb\u6570\u636e\u4e0a\u4f20\u5230 HTTP \u670d\u52a1\u5668 (PUT)",s={unversionedId:"unet/unity-web-request/unity-web-request-hlapi/UnityWebRequest-UploadingRawData",id:"unet/unity-web-request/unity-web-request-hlapi/UnityWebRequest-UploadingRawData",title:"\u5c06\u539f\u59cb\u6570\u636e\u4e0a\u4f20\u5230 HTTP \u670d\u52a1\u5668 (PUT)",description:"|  |",source:"@site/docs/unet/unity-web-request/unity-web-request-hlapi/unity-web-request-uploading-raw-data.md",sourceDirName:"unet/unity-web-request/unity-web-request-hlapi",slug:"/unity-web-request-hlapi/unity-web-request-uploading-raw-data",permalink:"/doc-unity-manual/docs/unity-web-request-hlapi/unity-web-request-uploading-raw-data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unity-web-request/unity-web-request-hlapi/unity-web-request-uploading-raw-data.md",tags:[],version:"current",frontMatter:{id:"UnityWebRequest-UploadingRawData",title:"\u5c06\u539f\u59cb\u6570\u636e\u4e0a\u4f20\u5230 HTTP \u670d\u52a1\u5668 (PUT)",slug:"/unity-web-request-hlapi/unity-web-request-uploading-raw-data"},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u8868\u5355\u53d1\u9001\u5230 HTTP \u670d\u52a1\u5668 (POST)",permalink:"/doc-unity-manual/docs/unity-web-request-hlapi/unity-web-request-sending-form"},next:{title:"\u9ad8\u7ea7\u64cd\u4f5c\uff1a\u4f7f\u7528 LLAPI",permalink:"/doc-unity-manual/docs/unity-web-request-llapi"}},p={},c=[{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5c06\u539f\u59cb\u6570\u636e\u4e0a\u4f20\u5230-http-\u670d\u52a1\u5668-put"},"\u5c06\u539f\u59cb\u6570\u636e\u4e0a\u4f20\u5230 HTTP \u670d\u52a1\u5668 (PUT)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,i.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,i.kt)("p",null,"\u4e00\u4e9b\u73b0\u4ee3 Web \u5e94\u7528\u7a0b\u5e8f\u66f4\u559c\u6b22\u901a\u8fc7 HTTP PUT \u52a8\u8bcd\u4e0a\u4f20\u6587\u4ef6\u3002\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0cUnity \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityWebRequest.PUT")," \u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u6b64\u51fd\u6570\u91c7\u7528\u4e24\u4e2a\u53c2\u6570\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9a\u8bf7\u6c42\u7684\u76ee\u6807 URL\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5b57\u7b26\u4e32\u6216\u5b57\u8282\u6570\u7ec4\uff0c\u7528\u4e8e\u6307\u5b9a\u8981\u53d1\u9001\u5230\u670d\u52a1\u5668\u7684\u6709\u6548\u8d1f\u8f7d\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u51fd\u6570\u7b7e\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WebRequest.Put(string url, string data);\nWebRequest.Put(string url, byte[] data);\n")),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6b64\u51fd\u6570\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"UnityWebRequest")," \u5e76\u5c06\u5185\u5bb9\u7c7b\u578b\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"application/octet-stream"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6b64\u51fd\u6570\u5c06\u6807\u51c6 ",(0,i.kt)("inlineCode",{parentName:"li"},"DownloadHandlerBuffer")," \u9644\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"UnityWebRequest"),"\u3002\u4e0e POST \u51fd\u6570\u4e00\u6837\uff0c\u6b64\u51fd\u6570\u53ef\u7528\u4e8e\u4ece\u5e94\u7528\u7a0b\u5e8f\u8fd4\u56de\u7ed3\u679c\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6b64\u51fd\u6570\u5c06\u8f93\u5165\u7684\u4e0a\u4f20\u6570\u636e\u5b58\u50a8\u5728\u6807\u51c6 ",(0,i.kt)("inlineCode",{parentName:"li"},"UploadHandlerRaw")," \u5bf9\u8c61\u4e2d\uff0c\u7136\u540e\u5c06\u6b64\u5bf9\u8c61\u9644\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"UnityWebRequest"),"\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"byte[]")," \u51fd\u6570\uff0c\u5219\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"UnityWebRequest.PUT")," \u8c03\u7528\u4e4b\u540e\u5bf9\u5b57\u8282\u6570\u7ec4\u6267\u884c\u7684\u66f4\u6539\u4e0d\u4f1a\u53cd\u6620\u5728\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u6570\u636e\u4e2d\u3002")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing UnityEngine.Networking;\nusing System.Collections;\n \npublic class MyBehavior : MonoBehaviour {\n    void Start() {\n        StartCoroutine(Upload());\n    }\n \n    IEnumerator Upload() {\n        byte[] myData = System.Text.Encoding.UTF8.GetBytes("This is some test data");\n        UnityWebRequest www = UnityWebRequest.Put("https://www.my-server.com/upload", myData);\n        yield return www.SendWebRequest();\n \n        if (www.result != UnityWebRequest.Result.Success) {\n            Debug.Log(www.error);\n        }\n        else {\n            Debug.Log("Upload complete!");\n        }\n    }\n}\n')))}y.isMDXComponent=!0}}]);