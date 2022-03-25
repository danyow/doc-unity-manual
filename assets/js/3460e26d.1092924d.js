"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10769],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||p;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],l={id:"VideoPanoramic",title:"\u5168\u666f\u89c6\u9891",slug:"/class-video-player/video-panoramic"},i="\u5168\u666f\u89c6\u9891",s={unversionedId:"video-player/class-video-player/VideoPanoramic",id:"video-player/class-video-player/VideoPanoramic",title:"\u5168\u666f\u89c6\u9891",description:"Unity \u7684\u5168\u666f\u89c6\u9891\u529f\u80fd\u53ef\u4ee5\u8ba9\u60a8\uff1a",source:"@site/docs/video-player/class-video-player/video-panoramic.md",sourceDirName:"video-player/class-video-player",slug:"/class-video-player/video-panoramic",permalink:"/doc-unity-manual/docs/class-video-player/video-panoramic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/video-player/class-video-player/video-panoramic.md",tags:[],version:"current",frontMatter:{id:"VideoPanoramic",title:"\u5168\u666f\u89c6\u9891",slug:"/class-video-player/video-panoramic"},sidebar:"tutorialSidebar",previous:{title:"\u89c6\u9891\u526a\u8f91",permalink:"/doc-unity-manual/docs/class-video-player/class-video-clip"},next:{title:"\u4ece MovieTexture \u8fc1\u79fb\u5230 VideoPlayer",permalink:"/doc-unity-manual/docs/class-video-player/video-player-migrating-from-movie-texture"}},u={},c=[{value:"1.\u89c6\u9891\u64ad\u653e\u5668\u8bbe\u7f6e",id:"1\u89c6\u9891\u64ad\u653e\u5668\u8bbe\u7f6e",level:2},{value:"2.\u521b\u5efa\u5929\u7a7a\u76d2\u6750\u8d28",id:"2\u521b\u5efa\u5929\u7a7a\u76d2\u6750\u8d28",level:2},{value:"3.\u5c06\u5168\u666f\u89c6\u9891\u6e32\u67d3\u5230\u5929\u7a7a\u76d2",id:"3\u5c06\u5168\u666f\u89c6\u9891\u6e32\u67d3\u5230\u5929\u7a7a\u76d2",level:2},{value:"3D \u5168\u666f\u89c6\u9891",id:"3d-\u5168\u666f\u89c6\u9891",level:2},{value:"\u7acb\u65b9\u4f53\u8d34\u56fe\u89c6\u9891\u7684\u5907\u7528\u6e32\u67d3\u7eb9\u7406\u7c7b\u578b",id:"\u7acb\u65b9\u4f53\u8d34\u56fe\u89c6\u9891\u7684\u5907\u7528\u6e32\u67d3\u7eb9\u7406\u7c7b\u578b",level:2},{value:"\u89c6\u9891\u5c3a\u5bf8\u548c\u8f6c\u7801",id:"\u89c6\u9891\u5c3a\u5bf8\u548c\u8f6c\u7801",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u5168\u666f\u89c6\u9891"},"\u5168\u666f\u89c6\u9891"),(0,p.kt)("p",null,"Unity \u7684\u5168\u666f\u89c6\u9891\u529f\u80fd\u53ef\u4ee5\u8ba9\u60a8\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u8f7b\u677e\u6dfb\u52a0 360 \u5ea6\u771f\u5b9e\u89c6\u9891\u955c\u5934\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6dfb\u52a0\u9884\u6e32\u67d3\u7684\u80cc\u666f\u89c6\u9891\u800c\u4e0d\u662f\u771f\u5b9e\u7684\u51e0\u4f55\u4f53\uff0c\u964d\u4f4e VR \u4e2d\u7684\u573a\u666f\u590d\u6742\u5ea6\u3002")),(0,p.kt)("p",null,"Unity \u652f\u6301",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Equirectangular_projection"},"\u7b49\u8ddd\u5706\u67f1\u6295\u5f71 (equirectangular)")," \u5e03\u5c40\uff08\u7ecf\u5ea6\u548c\u7eac\u5ea6\uff09\u6216",(0,p.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2017.2/Documentation/Manual/class-Cubemap.html"},"\u7acb\u65b9\u4f53\u8d34\u56fe"),"\u5e03\u5c40\uff086 \u5e27\uff09\u7684 180 \u5ea6\u548c 360 \u5ea6\u89c6\u9891\u3002"),(0,p.kt)("p",null,"\u7b49\u8ddd\u5706\u67f1\u6295\u5f71 2D \u89c6\u9891\u7684\u5bbd\u9ad8\u6bd4\u5e94\u6070\u597d\u4e3a 2:1\uff08360 \u5ea6\u5185\u5bb9\uff09\u6216 1:1\uff08180 \u5ea6\u5185\u5bb9\uff09\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Equirectangular2D.jpg",alt:"\u7b49\u8ddd\u5706\u67f1\u6295\u5f71 2D \u89c6\u9891"})),(0,p.kt)("p",null,"\u7b49\u8ddd\u5706\u67f1\u6295\u5f71 2D \u89c6\u9891"),(0,p.kt)("p",null,"\u7acb\u65b9\u4f53\u8d34\u56fe 2D \u89c6\u9891\u7684\u5bbd\u9ad8\u6bd4\u4e3a 1:6\u30013:4\u30014:3 \u6216 6:1\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5de5\u4f5c\u9762\u5e03\u5c40\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Cubemap2D.jpg",alt:"\u7acb\u65b9\u4f53\u8d34\u56fe 2D \u89c6\u9891"})),(0,p.kt)("p",null,"\u7acb\u65b9\u4f53\u8d34\u56fe 2D \u89c6\u9891"),(0,p.kt)("p",null,"\u8981\u91c7\u7528 Unity Editor \u4e2d\u7684\u5168\u666f\u89c6\u9891\u529f\u80fd\uff0c\u5fc5\u987b\u4f7f\u7528\u5168\u666f\u89c6\u9891\u526a\u8f91\u6216\u4e86\u89e3\u5176\u521b\u4f5c\u65b9\u6cd5\u3002"),(0,p.kt)("p",null,"\u672c\u9875\u9762\u4ecb\u7ecd\u5728 Editor \u4e2d\u663e\u793a\u5168\u666f\u89c6\u9891\u7684\u4ee5\u4e0b\u5fc5\u8981\u6b65\u9aa4\uff1a"),(0,p.kt)("p",null,"1.\u8bbe\u7f6e",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-video-player"},"\u89c6\u9891\u64ad\u653e\u5668 (Video Player)")," \u4ee5\u5411",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/textures/class-render-texture"},"\u6e32\u67d3\u7eb9\u7406"),"\u64ad\u653e\u89c6\u9891\u6e90\u3002"),(0,p.kt)("p",null,"2.\u8bbe\u7f6e\u63a5\u6536\u6e32\u67d3\u7eb9\u7406\u7684",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sky/class-skybox"},"\u5929\u7a7a\u76d2 (Skybox)")," \u6750\u8d28\u3002"),(0,p.kt)("p",null,"3.\u8bbe\u7f6e\u573a\u666f\u4ee5\u4f7f\u7528\u5929\u7a7a\u76d2\u6750\u8d28\u3002"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u8fd9\u662f\u8d44\u6e90\u5bc6\u96c6\u578b\u529f\u80fd\u3002\u4e3a\u4e86\u83b7\u5f97\u6700\u597d\u7684\u89c6\u89c9\u6548\u679c\uff0c\u5e94\u91c7\u7528\u5206\u8fa8\u7387\u5c3d\u53ef\u80fd\u6700\u9ad8\u7684\u5168\u666f\u89c6\u9891\uff08\u4e00\u822c\u4e3a 4K \u6216 8K\uff09\u3002\u5927\u578b\u89c6\u9891\u9700\u8981\u66f4\u591a\u7684\u8ba1\u7b97\u80fd\u529b\u548c\u8d44\u6e90\u8fdb\u884c\u89e3\u7801\u3002\u5927\u90e8\u5206\u7cfb\u7edf\u5bf9\u4e8e\u6700\u5927\u89c6\u9891\u89e3\u7801\u5206\u8fa8\u7387\u6709\u5177\u4f53\u9650\u5236\uff08\u6bd4\u5982\uff0c\u8bb8\u591a\u79fb\u52a8\u8bbe\u5907\u9650\u5236\u4e3a HD \u6216 2K\uff0c\u800c\u8f83\u65e9\u7684\u53f0\u5f0f\u673a\u53ef\u80fd\u9650\u5236\u4e3a 2K \u6216 4K\uff09\u3002"),(0,p.kt)("h2",{id:"1\u89c6\u9891\u64ad\u653e\u5668\u8bbe\u7f6e"},"1.\u89c6\u9891\u64ad\u653e\u5668\u8bbe\u7f6e"),(0,p.kt)("p",null,"\u5c06\u89c6\u9891\u4f5c\u4e3a",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/importing-assets"},"\u8d44\u6e90"),"\u5bfc\u5165 Unity\u3002\u8981\u521b\u5efa\u89c6\u9891\u64ad\u653e\u5668\uff0c\u5c06\u89c6\u9891\u8d44\u6e90\u4ece Project \u89c6\u56fe\u4e2d\u62d6\u5165 Unity Hierarchy \u89c6\u56fe\u7684\u7a7a\u767d\u533a\u57df\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u6837\u4f1a\u8bbe\u7f6e\u7ec4\u4ef6\u4ee5\u64ad\u653e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u5168\u5c4f\u89c6\u9891\u3002\u6309  ",(0,p.kt)("strong",{parentName:"p"},"Play"),"  \u5373\u53ef\u67e5\u770b\u6b64\u89c6\u9891\u3002"),(0,p.kt)("p",null,"\u5e94\u6539\u53d8\u6b64\u884c\u4e3a\u4ee5\u4f7f\u5176\u6e32\u67d3\u5230\u6e32\u67d3\u7eb9\u7406\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u51c6\u786e\u63a7\u5236\u663e\u793a\u7ed3\u679c\u3002\u4e3a\u6b64\uff0c\u8bf7\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Render Texture")," \u3002"),(0,p.kt)("p",null,"\u8bbe\u7f6e\u6e32\u67d3\u7eb9\u7406\u7684  ",(0,p.kt)("strong",{parentName:"p"},"Size"),"  \u4ee5\u51c6\u786e\u5339\u914d\u89c6\u9891\u3002\u8981\u68c0\u67e5\u89c6\u9891\u7684\u5c3a\u5bf8\uff0c\u8bf7\u5728 Assets \u6587\u4ef6\u5939\u4e2d\u9009\u62e9\u8be5\u89c6\u9891\uff0c\u7136\u540e\u67e5\u770b Inspector \u7a97\u53e3\u3002\u6eda\u52a8\u5230 Unity \u7684\u89c6\u9891\u9884\u89c8\u90e8\u5206\uff0c\u5728\u9884\u89c8\u7a97\u53e3\u4e2d\u9009\u62e9\u89c6\u9891\u7684\u540d\u79f0\uff0c\u7136\u540e\u5c06\u5176\u66f4\u6539\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Source Info")," \u3002"),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c06\u6e32\u67d3\u7eb9\u7406\u7684  ",(0,p.kt)("strong",{parentName:"p"},"Depth Buffer"),"  \u9009\u9879\u8bbe\u7f6e\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"No depth buffer")," \u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/DepthBuffer.jpg",alt:"\u6e32\u67d3\u7eb9\u7406\u8bbe\u7f6e\u4e3a No depth buffer"})),(0,p.kt)("p",null,"\u6e32\u67d3\u7eb9\u7406\u8bbe\u7f6e\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"No depth buffer")," "),(0,p.kt)("p",null,"\u73b0\u5728\uff0c\u6253\u5f00 ",(0,p.kt)("strong",{parentName:"p"},"\u89c6\u9891\u64ad\u653e\u5668")," \u7684 Inspector \u7a97\u53e3\uff0c\u5e76\u5c06  ",(0,p.kt)("strong",{parentName:"p"},"Render Mode"),"  \u5207\u6362\u5230  ",(0,p.kt)("strong",{parentName:"p"},"Render Texture")," \u3002\u5c06\u65b0\u7684\u6e32\u67d3\u7eb9\u7406\u4ece Asset \u89c6\u56fe\u62d6\u5230  ",(0,p.kt)("strong",{parentName:"p"},"Target Texture"),"  \u5b57\u6bb5\u3002"),(0,p.kt)("p",null,"\u8fdb\u5165\u64ad\u653e\u6a21\u5f0f\u4ee5\u786e\u8ba4\u4e00\u5207\u6b63\u5e38\u65e0\u8bef\u3002"),(0,p.kt)("p",null,"\u89c6\u9891\u4e0d\u4f1a\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Game"),"  \u7a97\u53e3\u4e2d\u6e32\u67d3\uff0c\u4f46\u53ef\u9009\u62e9\u6e32\u67d3\u7eb9\u7406\u8d44\u6e90 (Render Texture Asset)\uff0c\u7136\u540e\u786e\u8ba4\u5176\u5185\u5bb9\u4f1a\u968f\u6bcf\u4e00\u4e2a\u89c6\u9891\u5e27\u66f4\u65b0\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/RenderTextureAsset.jpg",alt:"RenderTextureAsset.jpg"})),(0,p.kt)("h2",{id:"2\u521b\u5efa\u5929\u7a7a\u76d2\u6750\u8d28"},"2.\u521b\u5efa\u5929\u7a7a\u76d2\u6750\u8d28"),(0,p.kt)("p",null,"\u60a8\u9700\u8981\u5c06\u9ed8\u8ba4\u5929\u7a7a\u76d2\u66ff\u6362\u4e3a\u89c6\u9891\u5185\u5bb9\uff0c\u4ece\u800c\u5c06\u5168\u666f\u89c6\u9891\u6e32\u67d3\u4e3a\u573a\u666f\u7684\u80cc\u666f\u3002"),(0,p.kt)("p",null,"\u4e3a\u6b64\uff0c\u8bf7\u521b\u5efa\u65b0\u7684\u6750\u8d28 ( ",(0,p.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Material")," )\u3002\u5728\u65b0\u6750\u8d28\u7684 Inspector \u4e2d\u5c06\u6750\u8d28\u7684 Shader \u8bbe\u7f6e\u4e3a Skybox/Panoramic\uff08\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Shader"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Skybox"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Panoramic")," \uff09\u3002"),(0,p.kt)("p",null,"\u5c06\u6e32\u67d3\u7eb9\u7406\u4ece Asset \u89c6\u56fe\u62d6\u5230\u65b0\u6750\u8d28\u7684 Inspector \u4e2d\u7684 Texture \u5b57\u6bb5\u3002"),(0,p.kt)("p",null,"\u5fc5\u987b\u6b63\u786e\u8bc6\u522b\u89c6\u9891\u4e2d\u7684\u5185\u5bb9\u7c7b\u578b\uff08\u7acb\u65b9\u4f53\u8d34\u56fe\u8fd8\u662f\u7b49\u8ddd\u5706\u67f1\u6295\u5f71\uff09\u624d\u80fd\u6b63\u786e\u64ad\u653e\u5168\u666f\u89c6\u9891\u3002\u5bf9\u4e8e\u7acb\u65b9\u4f53\u8d34\u56fe\u5185\u5bb9\uff08\u6bd4\u5982\u9759\u6001\u5929\u7a7a\u76d2\u7eb9\u7406\u4e2d\u5e38\u89c1\u7684\u4ea4\u53c9\u548c\u6761\u72b6\u5e03\u5c40\uff09\uff0c\u8bf7\u5c06  ",(0,p.kt)("strong",{parentName:"p"},"Mapping"),"  \u8bbe\u7f6e\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"6 Frames Layout")," \u3002"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u7b49\u8ddd\u5706\u67f1\u6295\u5f71\u5185\u5bb9\uff0c\u8bf7\u5c06  ",(0,p.kt)("strong",{parentName:"p"},"Mapping"),"  \u8bbe\u7f6e\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Latitude Longitude Layout")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,p.kt)("strong",{parentName:"p"},"360 degree"),"  \u6216  ",(0,p.kt)("strong",{parentName:"p"},"180 degree"),"  \u5b50\u9009\u9879\u3002\u5982\u679c\u89c6\u9891\u8986\u76d6\u6574\u4e2a 360 \u5ea6\u89c6\u56fe\uff0c\u8bf7\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"360 degree"),"  \u9009\u9879\u3002\u5982\u679c\u89c6\u9891\u53ea\u662f\u6b63\u9762 180 \u5ea6\u89c6\u56fe\uff0c\u8bf7\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"180 degree")," \u3002"),(0,p.kt)("p",null,"\u67e5\u770b\u6750\u8d28\u68c0\u89c6\u9762\u677f (Inspector) \u5e95\u90e8\u7684  ",(0,p.kt)("strong",{parentName:"p"},"Preview")," \u3002\u6267\u884c\u5e73\u79fb\u64cd\u4f5c\uff0c\u786e\u8ba4\u5185\u5bb9\u770b\u8d77\u6765\u6b63\u786e\u65e0\u8bef\u3002"),(0,p.kt)("h2",{id:"3\u5c06\u5168\u666f\u89c6\u9891\u6e32\u67d3\u5230\u5929\u7a7a\u76d2"},"3.\u5c06\u5168\u666f\u89c6\u9891\u6e32\u67d3\u5230\u5929\u7a7a\u76d2"),(0,p.kt)("p",null,"\u6700\u7ec8\uff0c\u5fc5\u987b\u5c06\u65b0\u7684\u5929\u7a7a\u76d2\u6750\u8d28\u4e0e\u573a\u666f\u5173\u8054\u3002"),(0,p.kt)("p",null,"1.\u6253\u5f00 Lighting \u7a97\u53e3\uff08\u83dc\u5355\uff1a ",(0,p.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"General"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Lighting")," \uff09\u3002"),(0,p.kt)("p",null,"2.\u5c06\u65b0\u7684\u5929\u7a7a\u76d2\u6750\u8d28\u8d44\u6e90\u62d6\u653e\u5230  ",(0,p.kt)("strong",{parentName:"p"},"Environment"),"  \u4e0b\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,p.kt)("p",null,"3.\u6309 Play \u5c06\u89c6\u9891\u663e\u793a\u4e3a\u5929\u7a7a\u76d2\u4e0a\u7684\u573a\u666f\u80cc\u666f\u3002"),(0,p.kt)("p",null,"4.\u66f4\u6539\u573a\u666f\u6444\u50cf\u673a\u65b9\u5411\u4ee5\u663e\u793a\u5929\u7a7a\u76d2\u7684\u53e6\u4e00\u4e2a\u4e0d\u540c\u90e8\u5206\uff08\u56e0\u6b64\u4e5f\u662f\u5168\u666f\u89c6\u9891\u7684\u53e6\u4e00\u4e2a\u4e0d\u540c\u90e8\u5206\uff09\u3002"),(0,p.kt)("h2",{id:"3d-\u5168\u666f\u89c6\u9891"},"3D \u5168\u666f\u89c6\u9891"),(0,p.kt)("p",null,"\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Player"),"  \u8bbe\u7f6e\u4e2d\u5f00\u542f Virtual Reality Support\uff08\u83dc\u5355\uff1a ",(0,p.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Project Settings")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,p.kt)("strong",{parentName:"p"},"Player"),"  \u7c7b\u522b\uff0c\u5e76\u6253\u5f00  ",(0,p.kt)("strong",{parentName:"p"},"XR Settings"),"  \u9762\u677f\uff09\uff0c\u7279\u522b\u662f\u6e90\u89c6\u9891\u6709\u7acb\u4f53\u58f0\u5185\u5bb9\u7684\u60c5\u51b5\u4e0b\u3002\u6b64\u8bbe\u7f6e\u5c06\u53e6\u5916\u89e3\u9501\u5929\u7a7a\u76d2/\u5168\u666f\u6750\u8d28 (Skybox/Panoramic Material) \u4e2d\u7684  ",(0,p.kt)("strong",{parentName:"p"},"3D Layout"),"  \u9009\u9879\u30023D Layout \u6709\u4e09\u4e2a\u9009\u9879\uff1a ",(0,p.kt)("strong",{parentName:"p"},"Side by Side")," \u3001 ",(0,p.kt)("strong",{parentName:"p"},"Over"),"   ",(0,p.kt)("strong",{parentName:"p"},"Under"),"  \u548c  ",(0,p.kt)("strong",{parentName:"p"},"None")," \uff08\u9ed8\u8ba4\u503c\uff09\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u89c6\u9891\u5de6\u4fa7\u5305\u542b\u5de6\u773c\u5185\u5bb9\uff0c\u53f3\u4fa7\u5305\u542b\u53f3\u773c\u5185\u5bb9\uff0c\u5e94\u91c7\u7528  ",(0,p.kt)("strong",{parentName:"p"},"Side by Side"),"  \u8bbe\u7f6e\u3002\u5982\u679c\u5de6\u53f3\u4fa7\u5185\u5bb9\u5728\u89c6\u9891\u4e2d\u4e0a\u4e0b\u5206\u5e03\uff0c\u5e94\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Over Under")," \u3002Unity \u4f1a\u68c0\u6d4b\u5f53\u524d\u6b63\u5728\u6e32\u67d3\u7684\u773c\u775b\uff0c\u5e76\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/SinglePassStereoRendering.html"},"\u5355 Pass \u7acb\u4f53\u6e32\u67d3"),"\u5c06\u6b64\u4fe1\u606f\u53d1\u9001\u7ed9\u5929\u7a7a\u76d2/\u5168\u666f\u7740\u8272\u5668\u3002\u8be5\u7740\u8272\u5668\u5305\u542b\u6839\u636e\u6b64\u4fe1\u606f\u9009\u62e9\u89c6\u9891\u7684\u903b\u8f91\uff1b\u5f53 Unity \u5728 VR \u4e2d\u6e32\u67d3\u6bcf\u53ea\u773c\u775b\u7684\u5185\u5bb9\u65f6\uff0c\u5373\u53ef\u9009\u62e9\u6b63\u786e\u7684\u4e00\u534a\u89c6\u9891\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/3dPanoramicVideo.jpg",alt:"3D \u5168\u666f\u89c6\u9891"})),(0,p.kt)("p",null,"3D \u5168\u666f\u89c6\u9891"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u975e 360 \u5ea6 3D \u89c6\u9891\uff08\u6b64\u60c5\u51b5\u4e0b\u4e0d\u5e94\u4f7f\u7528\u5929\u7a7a\u76d2\u6750\u8d28\uff09\uff0c\u4f7f\u7528\u6444\u50cf\u673a ",(0,p.kt)("strong",{parentName:"p"},"\u8fd1/\u8fdc")," \u5e73\u9762\u6e32\u67d3\u6a21\u5f0f\u65f6\uff0c\u89c6\u9891\u64ad\u653e\u5668\u7ec4\u4ef6\u4e2d\u63d0\u4f9b\u540c\u6837\u7684  ",(0,p.kt)("strong",{parentName:"p"},"3D Layout")," \u3002"),(0,p.kt)("h2",{id:"\u7acb\u65b9\u4f53\u8d34\u56fe\u89c6\u9891\u7684\u5907\u7528\u6e32\u67d3\u7eb9\u7406\u7c7b\u578b"},"\u7acb\u65b9\u4f53\u8d34\u56fe\u89c6\u9891\u7684\u5907\u7528\u6e32\u67d3\u7eb9\u7406\u7c7b\u578b"),(0,p.kt)("p",null,"\u5904\u7406\u7acb\u65b9\u4f53\u8d34\u56fe\u89c6\u9891\u65f6\uff0c\u53ef\u5c06\u89c6\u9891\u64ad\u653e\u5668\u76f4\u63a5\u6e32\u67d3\u4e3a\u6e32\u67d3\u7eb9\u7406\u7acb\u65b9\u4f53 (Render Texture Cube)\uff0c\u800c\u4e0d\u662f\u5c06\u89c6\u9891\u64ad\u653e\u5668\u6e32\u67d3\u5230 2D \u6e32\u67d3\u7eb9\u7406\u5e76\u4fdd\u7559\u7cbe\u786e\u7684\u7acb\u65b9\u4f53\u8d34\u56fe\u5e03\u5c40\u3002"),(0,p.kt)("p",null,"\u4e3a\u5b9e\u73b0\u6b64\u76ee\u7684\uff0c\u8bf7\u5c06\u6e32\u67d3\u7eb9\u7406\u8d44\u6e90\u7684  ",(0,p.kt)("strong",{parentName:"p"},"Dimension"),"  \u4ece  ",(0,p.kt)("strong",{parentName:"p"},"2D"),"  \u66f4\u6539\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Cube")," \uff0c\u5e76\u5c06\u6e32\u67d3\u7eb9\u7406\u7684 ",(0,p.kt)("strong",{parentName:"p"},"Size"),"  \u6070\u597d\u8bbe\u7f6e\u4e3a\u6e90\u89c6\u9891\u5355\u4e2a\u9762\u7684\u5c3a\u5bf8\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6709\u5c3a\u5bf8\u4e3a 4096 x 3072 \u7684 4 x 3 \u6c34\u5e73\u4ea4\u53c9\u7acb\u65b9\u4f53\u8d34\u56fe\u5e03\u5c40\u89c6\u9891\uff0c\u5e94\u5c06\u6e32\u67d3\u7eb9\u7406\u7684  ",(0,p.kt)("strong",{parentName:"p"},"Size"),"  \u8bbe\u7f6e\u4e3a 1024 x 1024\uff084096 / 4 \u548c 3072 / 3\uff09\u3002"),(0,p.kt)("p",null,"\u6e32\u67d3\u5230\u7acb\u65b9\u4f53\u76ee\u6807\u7eb9\u7406 (Cube Target Texture) \u65f6\uff0c\u89c6\u9891\u64ad\u653e\u5668\u5047\u5b9a\u6e90\u89c6\u9891\u5728\u4ea4\u53c9\u6216\u6761\u72b6\u5e03\u5c40\uff08\u4f7f\u7528\u89c6\u9891\u5bbd\u9ad8\u6bd4\u8fdb\u884c\u786e\u5b9a\uff09\u4e2d\u5305\u542b\u7acb\u65b9\u4f53\u8d34\u56fe\u3002\u89c6\u9891\u64ad\u653e\u5668\u968f\u540e\u7528\u6b63\u786e\u7684\u7acb\u65b9\u4f53\u9762\u586b\u5145\u6e32\u67d3\u7eb9\u7406\u7684\u9762\u3002"),(0,p.kt)("p",null,"\u91c7\u7528\u751f\u6210\u7684\u6e32\u67d3\u7eb9\u7406\u7acb\u65b9\u4f53\u4f5c\u4e3a\u5929\u7a7a\u76d2\u3002\u4e3a\u6b64\uff0c\u8bf7\u521b\u5efa\u6750\u8d28\uff0c\u5e76\u5206\u914d  ",(0,p.kt)("strong",{parentName:"p"},"Skybox/Cubemap"),"  \u4f5c\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Shader"),"  ( ",(0,p.kt)("strong",{parentName:"p"},"Shader"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Skybox"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Cubemap")," )\uff0c\u800c\u4e0d\u662f\u4ee5\u4e0a\u6240\u8ff0\u7684\u5929\u7a7a\u76d2/\u5168\u666f\u6750\u8d28\u3002"),(0,p.kt)("h2",{id:"\u89c6\u9891\u5c3a\u5bf8\u548c\u8f6c\u7801"},"\u89c6\u9891\u5c3a\u5bf8\u548c\u8f6c\u7801"),(0,p.kt)("p",null,"\u6dfb\u52a0 3D \u5185\u5bb9\u8981\u6c42\u89c6\u9891\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u589e\u52a0\u4e00\u500d\uff08\u5bf9\u5e94\u4e8e  ",(0,p.kt)("strong",{parentName:"p"},"Side-by-Side"),"  \u6216  ",(0,p.kt)("strong",{parentName:"p"},"Over-Under"),"  \u5e03\u5c40\uff09\u3002"),(0,p.kt)("p",null,"\u5207\u8bb0\uff0c\u8bb8\u591a\u53f0\u5f0f\u673a\u786c\u4ef6\u89c6\u9891\u89e3\u7801\u5668\u6700\u9ad8\u652f\u6301 4K \u5206\u8fa8\u7387\uff0c\u800c\u79fb\u52a8\u7aef\u786c\u4ef6\u89c6\u9891\u89e3\u7801\u5668\u6700\u9ad8\u652f\u6301 2K \u6216\u66f4\u4f4e\uff0c\u56e0\u6b64\u9650\u5236\u4e86\u5728\u8fd9\u4e9b\u5e73\u53f0\u4e0a\u5b9e\u65f6\u64ad\u653e\u7684\u5206\u8fa8\u7387\u3002"),(0,p.kt)("p",null,"\u53ef\u91c7\u7528\u89c6\u9891\u8f6c\u7801\u6765\u751f\u6210\u66f4\u4f4e\u5206\u8fa8\u7387\u7248\u672c\u7684\u5168\u666f\u89c6\u9891\uff0c\u4f46\u662f\u9700\u8981\u91c7\u53d6\u9884\u9632\u63aa\u65bd\uff0c\u907f\u514d\u5de6\u4fa7\u548c\u53f3\u4fa7 3D \u5185\u5bb9\u4e4b\u95f4\u6216\u8005\u7acb\u65b9\u4f53\u8d34\u56fe\u9762\u548c\u76f8\u90bb\u9ed1\u8272\u533a\u57df\u4e4b\u95f4\u7684\u8fb9\u7f18\u51fa\u73b0\u6e17\u8272\u3002 \u603b\u4e4b\uff0c\u5e94\u4ee5\u4e8c\u6b21\u5e42\u5c3a\u5bf8\u521b\u5efa\u89c6\u9891\uff0c\u5e76\u8f6c\u7801\u4e3a\u5176\u4ed6\u4e8c\u6b21\u5e42\u5c3a\u5bf8\uff0c\u4ece\u800c\u51cf\u5c11\u89c6\u89c9\u7455\u75b5\u3002"),(0,p.kt)("hr",null),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"2017\u201310\u201325 \u9875\u9762\u5df2\u53d1\u5e03"),(0,p.kt)("li",{parentName:"ul"},"\u5728 ",(0,p.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2017.3/Documentation/Manual/30_search.html?q=newin20173"},"2017.3")," \u7248\u4e2d\u6dfb\u52a0\u4e86 2D \u548c 3D \u5168\u666f\u89c6\u9891\u652f\u6301 NewIn20173")))}k.isMDXComponent=!0}}]);