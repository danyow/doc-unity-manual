"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58593],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),y=a,b=c["".concat(l,".").concat(y)]||c[y]||d[y]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={id:"UnityWebRequest-CreatingUploadHandlers",title:"\u521b\u5efa UploadHandler",slug:"/unity-web-request-llapi/unity-web-request-creating-upload-handlers"},l="\u521b\u5efa UploadHandler",p={unversionedId:"unet/unity-web-request/unity-web-request-llapi/UnityWebRequest-CreatingUploadHandlers",id:"unet/unity-web-request/unity-web-request-llapi/UnityWebRequest-CreatingUploadHandlers",title:"\u521b\u5efa UploadHandler",description:"|  |",source:"@site/docs/unet/unity-web-request/unity-web-request-llapi/unity-web-request-creating-upload-handlers.md",sourceDirName:"unet/unity-web-request/unity-web-request-llapi",slug:"/unity-web-request-llapi/unity-web-request-creating-upload-handlers",permalink:"/doc-unity-manual/docs/unity-web-request-llapi/unity-web-request-creating-upload-handlers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unity-web-request/unity-web-request-llapi/unity-web-request-creating-upload-handlers.md",tags:[],version:"current",frontMatter:{id:"UnityWebRequest-CreatingUploadHandlers",title:"\u521b\u5efa UploadHandler",slug:"/unity-web-request-llapi/unity-web-request-creating-upload-handlers"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa UnityWebRequest",permalink:"/doc-unity-manual/docs/unity-web-request-llapi/unity-web-request-creating-unity-web-requests"},next:{title:"Unity User Manual 2022.1 (beta)",permalink:"/doc-unity-manual/docs/unity-manual"}},s={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521b\u5efa-uploadhandler"},"\u521b\u5efa UploadHandler"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Important")," : UNet is a deprecated solution, and a new Multiplayer and Networking Solution (Netcode for GameObjects) is under development. For more information and next steps see the information on the ",(0,i.kt)("a",{parentName:"td",href:"https://docs-multiplayer.unity3d.com/"},"Unity Netcode for GameObjects website"),".")))),(0,i.kt)("p",null,"\u76ee\u524d\uff0c\u4ec5\u4e00\u79cd\u7c7b\u578b\u7684\u4e0a\u4f20\u5904\u7406\u7a0b\u5e8f\u53ef\u7528\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"UploadHandlerRaw"),"\u3002\u6b64\u7c7b\u5728\u6784\u5efa\u65f6\u63a5\u53d7\u6570\u636e\u7f13\u51b2\u533a\u3002\u6b64\u7f13\u51b2\u533a\u5728\u5185\u90e8\u590d\u5236\u5230\u672c\u673a\u4ee3\u7801\u5185\u5b58\u4e2d\uff0c\u7136\u540e\u5f53\u8fdc\u7a0b\u670d\u52a1\u5668\u51c6\u5907\u597d\u63a5\u53d7\u4e3b\u4f53\u6570\u636e\u65f6\uff0c\u6b64\u7f13\u51b2\u533a\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityWebRequest")," \u7cfb\u7edf\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4e0a\u4f20\u5904\u7406\u7a0b\u5e8f\u8fd8\u63a5\u53d7\u201cContent Type\u201d\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5728 UnityWebRequest \u81ea\u8eab\u4e2d\u6ca1\u6709\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u6807\u5934\uff0c\u5219\u6b64\u5b57\u7b26\u4e32\u7528\u4e8e UnityWebRequest \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u6807\u5934\u503c\u3002\u5982\u679c\u5728 UnityWebRequest \u5bf9\u8c61\u4e0a\u624b\u52a8\u8bbe\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u6807\u5934\uff0c\u5219\u5c06\u5ffd\u7565\u4e0a\u4f20\u5904\u7406\u7a0b\u5e8f\u5bf9\u8c61\u4e0a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u5728 UnityWebRequest \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadHandler")," \u4e0a\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\uff0c\u5219\u7cfb\u7edf\u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"application/octet-stream"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UnityWebRequest")," \u5177\u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"disposeUploadHandlerOnDispose")," \u5c5e\u6027\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a true\u3002\u5982\u679c\u6b64\u5c5e\u6027\u4e3a true\uff0c\u5219\u5728\u5904\u7406 UnityWebRequest \u5bf9\u8c61\u65f6\u8fd8\u5c06\u5728\u9644\u52a0\u7684\u4e0a\u4f20\u5904\u7406\u7a0b\u5e8f\u4e0a\u8c03\u7528 Dispose()\uff0c\u81f4\u4f7f\u4e0b\u8f7d\u5904\u7406\u7a0b\u5e8f\u65e0\u7528\u3002\u5982\u679c\u4fdd\u6301\u5bf9\u4e0a\u4f20\u5904\u7406\u7a0b\u5e8f\u7684\u5f15\u7528\u65f6\u95f4\u957f\u5ea6\u8d85\u8fc7\u5bf9 UnityWebRequest \u7684\u5f15\u7528\u65f6\u95f4\u957f\u5ea6\uff0c\u5e94\u5c06 disposeUploadHandlerOnDispose \u8bbe\u7f6e\u4e3a false\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'byte[] payload = new byte[1024];\n// ... \u4f7f\u7528\u6570\u636e\u586b\u5145\u6709\u6548\u8d1f\u8f7d ...\n\nUnityWebRequest wr = new UnityWebRequest("https://www.mysite.com/data-upload");\nUploadHandler uploader = new UploadHandlerRaw(payload);\n\n// \u53d1\u9001\u6807\u5934\uff1a"Content-Type: custom/content-type";\nuploader.contentType = "custom/content-type";\n\nwr.uploadHandler = uploader;\n')))}y.isMDXComponent=!0}}]);