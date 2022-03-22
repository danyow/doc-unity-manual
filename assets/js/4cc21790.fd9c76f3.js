"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95627],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),o=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=o(a),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(d,i(i({ref:e},c),{},{components:a})):n.createElement(d,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26132:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"PhysicalCameras",title:"\u4f7f\u7528\u7269\u7406\u6444\u50cf\u673a (Physical Camera)",slug:"/cameras-overview/physical-cameras"},s="\u4f7f\u7528\u7269\u7406\u6444\u50cf\u673a (Physical Camera)",o={unversionedId:"graphics/cameras-overview/PhysicalCameras",id:"graphics/cameras-overview/PhysicalCameras",title:"\u4f7f\u7528\u7269\u7406\u6444\u50cf\u673a (Physical Camera)",description:"\u6444\u50cf\u673a\u7ec4\u4ef6\u7684 Physical Camera \u5c5e\u6027\u5728 Unity \u6444\u50cf\u673a\u4e0a\u6a21\u62df\u771f\u5b9e\u6444\u50cf\u673a\u683c\u5f0f\u3002\u8fd9\u53ef\u7528\u4e8e\u4ece\u540c\u6837\u6a21\u62df\u771f\u5b9e\u6444\u50cf\u673a\u7684 3D \u5efa\u6a21\u5e94\u7528\u7a0b\u5e8f\u5bfc\u5165\u6444\u50cf\u673a\u4fe1\u606f\u3002",source:"@site/docs/graphics/cameras-overview/physical-cameras.md",sourceDirName:"graphics/cameras-overview",slug:"/cameras-overview/physical-cameras",permalink:"/docs/cameras-overview/physical-cameras",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/cameras-overview/physical-cameras.md",tags:[],version:"current",frontMatter:{id:"PhysicalCameras",title:"\u4f7f\u7528\u7269\u7406\u6444\u50cf\u673a (Physical Camera)",slug:"/cameras-overview/physical-cameras"},sidebar:"tutorialSidebar",previous:{title:"Occlusion Culling \u7a97\u53e3",permalink:"/docs/occlusion-culling/occlusion-culling-window"},next:{title:"\u6444\u50cf\u673a\u548c\u6df1\u5ea6\u7eb9\u7406",permalink:"/docs/cameras-overview/sl-camera-depth-texture"}},c={},m=[{value:"Lens Shift",id:"lens-shift",level:2},{value:"\u955c\u5934\u79fb\u4f4d (Lens Shift) \u548c\u89c6\u9525\u4f53\u503e\u659c",id:"\u955c\u5934\u79fb\u4f4d-lens-shift-\u548c\u89c6\u9525\u4f53\u503e\u659c",level:3},{value:"Gate Fit",id:"gate-fit",level:2},{value:"Gate Fit \u6a21\u5f0f",id:"gate-fit-\u6a21\u5f0f",level:3},{value:"Vertical",id:"vertical",level:3},{value:"Horizontal",id:"horizontal",level:3},{value:"None",id:"none",level:3},{value:"Fill \u548c Overscan",id:"fill-\u548c-overscan",level:3}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f7f\u7528\u7269\u7406\u6444\u50cf\u673a-physical-camera"},"\u4f7f\u7528\u7269\u7406\u6444\u50cf\u673a (Physical Camera)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/cameras-overview/class-camera"},"\u6444\u50cf\u673a\u7ec4\u4ef6"),"\u7684 Physical Camera \u5c5e\u6027\u5728 Unity \u6444\u50cf\u673a\u4e0a\u6a21\u62df\u771f\u5b9e\u6444\u50cf\u673a\u683c\u5f0f\u3002\u8fd9\u53ef\u7528\u4e8e\u4ece\u540c\u6837\u6a21\u62df\u771f\u5b9e\u6444\u50cf\u673a\u7684 3D \u5efa\u6a21\u5e94\u7528\u7a0b\u5e8f\u5bfc\u5165\u6444\u50cf\u673a\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/InspectorCameraPhysCam.png",alt:"InspectorCameraPhysCam.png"})),(0,l.kt)("p",null,"Unity \u63d0\u4f9b\u7684\u8bbe\u7f6e\u4e0e\u5927\u591a\u6570 3D \u5efa\u6a21\u5e94\u7528\u7a0b\u5e8f\u7684\u7269\u7406\u6444\u50cf\u673a\u8bbe\u7f6e\u76f8\u540c\u3002\u63a7\u5236\u6444\u50cf\u673a\u89c6\u91ce\u7684\u4e24\u4e2a\u4e3b\u8981\u5c5e\u6027\u662f  ",(0,l.kt)("strong",{parentName:"p"},"Focal Length"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Sensor Size")," \u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Focal Length\uff1a")," \u4f20\u611f\u5668\u548c\u6444\u50cf\u673a\u955c\u5934\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u5373\u7126\u8ddd\u3002\u6b64\u5c5e\u6027\u51b3\u5b9a\u4e86\u5782\u76f4\u89c6\u91ce\u3002Unity \u6444\u50cf\u673a\u5904\u4e8e Physical Camera \u6a21\u5f0f\u65f6\uff0c\u6539\u53d8 Focal Length \u4e5f\u4f1a\u76f8\u5e94\u6539\u53d8\u89c6\u91ce\u3002\u7126\u8ddd\u8d8a\u5c0f\uff0c\u89c6\u91ce\u8d8a\u5927\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PhysCamAttributes.png",alt:"\u6444\u50cf\u673a\u7126\u8ddd\u3001\u89c6\u91ce\u548c\u4f20\u611f\u5668\u5c3a\u5bf8\u4e4b\u95f4\u7684\u5173\u7cfb"})),(0,l.kt)("p",{parentName:"li"},"\u6444\u50cf\u673a\u7126\u8ddd\u3001\u89c6\u91ce\u548c\u4f20\u611f\u5668\u5c3a\u5bf8\u4e4b\u95f4\u7684\u5173\u7cfb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Sensor Size\uff1a")," \u6355\u6349\u56fe\u50cf\u7684\u4f20\u611f\u5668\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff0c\u8868\u793a\u4f20\u611f\u5668\u5927\u5c0f\u3002\u8fd9\u4e9b\u6570\u503c\u51b3\u5b9a\u4e86\u7269\u7406\u6444\u50cf\u673a\u7684\u5bbd\u9ad8\u6bd4\u3002\u53ef\u4ece\u5bf9\u5e94\u4e8e\u771f\u5b9e\u6444\u50cf\u673a\u683c\u5f0f\u7684\u51e0\u4e2a\u9884\u8bbe\u4f20\u611f\u5668\u5927\u5c0f\u4e2d\u8fdb\u884c\u9009\u62e9\uff0c\u6216\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5927\u5c0f\u3002\u4f20\u611f\u5668\u5bbd\u9ad8\u6bd4\u4e0e\u6e32\u67d3\u7684\u5bbd\u9ad8\u6bd4\uff08\u5728 Game \u89c6\u56fe\u4e2d\u8bbe\u7f6e\uff09\u4e0d\u540c\u65f6\uff0c\u53ef\u4ee5\u63a7\u5236 Unity \u5982\u4f55\u5c06\u6444\u50cf\u673a\u56fe\u50cf\u4e0e\u6e32\u67d3\u7684\u56fe\u50cf\u5339\u914d\uff08\u8bf7\u53c2\u9605\u4e0b\u6587\u4e2d\u5173\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"#gate-fit"},"Gate Fit")," \u7684\u4fe1\u606f\uff09\u3002"))),(0,l.kt)("h2",{id:"lens-shift"},"Lens Shift"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Lens Shift"),"  \u4ece\u4f20\u611f\u5668\u6c34\u5e73\u548c\u5782\u76f4\u504f\u79fb\u6444\u50cf\u673a\u7684\u955c\u5934\u3002\u8fd9\u6837\u4e00\u6765\u4fbf\u53ef\u4ee5\u6539\u53d8\u7126\u70b9\u4e2d\u5fc3\uff0c\u5e76\u5728\u6e32\u67d3\u7684\u5e27\u4e2d\u91cd\u65b0\u5b9a\u4f4d\u62cd\u6444\u5bf9\u8c61\uff0c\u786e\u4fdd\u5f88\u5c11\u6216\u5b8c\u5168\u6ca1\u6709\u5931\u771f\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u5728\u5efa\u7b51\u6444\u5f71\u4e2d\u5f88\u5e38\u89c1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8981\u62cd\u6444\u4e00\u5ea7\u9ad8\u697c\uff0c\u53ef\u4ee5\u65cb\u8f6c\u6444\u50cf\u673a\u3002\u4f46\u8fd9\u4f1a\u4f7f\u56fe\u50cf\u5931\u771f\uff0c\u5bfc\u81f4\u5e73\u884c\u7ebf\u770b\u8d77\u6765\u53d1\u751f\u4f1a\u805a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LensShift_VRot.png",alt:"\u5411\u4e0a\u65cb\u8f6c\u6444\u50cf\u673a\u6765\u62cd\u6444\u697c\u9876\u65f6\u4f1a\u8ba9\u5782\u76f4\u7ebf\u4f1a\u805a"})),(0,l.kt)("p",null,"\u5411\u4e0a\u65cb\u8f6c\u6444\u50cf\u673a\u6765\u62cd\u6444\u697c\u9876\u65f6\u4f1a\u8ba9\u5782\u76f4\u7ebf\u4f1a\u805a"),(0,l.kt)("p",null,"\u5982\u679c\u628a\u955c\u5934\u4e0a\u79fb\uff0c\u800c\u4e0d\u662f\u65cb\u8f6c\u6444\u50cf\u673a\uff0c\u5c31\u53ef\u4ee5\u6539\u53d8\u6784\u56fe\u4ee5\u5305\u542b\u697c\u9876\uff0c\u4f46\u5e73\u884c\u7ebf\u4fdd\u6301\u76f4\u7ebf\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LensShift_VShift.png",alt:"\u6cbf Y \u8f74\u79fb\u52a8\u955c\u5934\u4f1a\u79fb\u52a8\u7126\u70b9\u4e2d\u5fc3\uff0c\u4f46\u80fd\u4f7f\u5782\u7ebf\u4fdd\u6301\u76f4\u7ebf"})),(0,l.kt)("p",null,"\u6cbf Y \u8f74\u79fb\u52a8\u955c\u5934\u4f1a\u79fb\u52a8\u7126\u70b9\u4e2d\u5fc3\uff0c\u4f46\u80fd\u4f7f\u5782\u7ebf\u4fdd\u6301\u76f4\u7ebf"),(0,l.kt)("p",null,"\u540c\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528\u6c34\u5e73\u955c\u5934\u4f4d\u79fb\u65b9\u6cd5\u6765\u62cd\u6444\u5bbd\u5927\u7684\u5bf9\u8c61\uff0c\u907f\u514d\u7531\u4e8e\u65cb\u8f6c\u6444\u50cf\u673a\u800c\u53ef\u80fd\u4ea7\u751f\u7684\u5931\u771f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LensShift_HRot.png",alt:"LensShift_HRot.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LensShift_HShift.png",alt:"\u65cb\u8f6c\u6444\u50cf\u673a\uff08\u4e0a\u56fe\uff09\u6765\u6846\u5b9a\u5927\u697c\u4f1a\u4f7f\u6c34\u5e73\u7ebf\u4f1a\u805a\u3002\u800c\u6c34\u5e73\u79fb\u52a8\u955c\u5934\uff08\u4e0b\u56fe\uff09\u4f1a\u91cd\u65b0\u6846\u5b9a\u56fe\u50cf\uff0c\u4f46\u4f7f\u6c34\u5e73\u7ebf\u4fdd\u6301\u76f4\u7ebf\u3002"})),(0,l.kt)("p",null,"\u65cb\u8f6c\u6444\u50cf\u673a\uff08\u4e0a\u56fe\uff09\u6765\u6846\u5b9a\u5927\u697c\u4f1a\u4f7f\u6c34\u5e73\u7ebf\u4f1a\u805a\u3002\u800c\u6c34\u5e73\u79fb\u52a8\u955c\u5934\uff08\u4e0b\u56fe\uff09\u4f1a\u91cd\u65b0\u6846\u5b9a\u56fe\u50cf\uff0c\u4f46\u4f7f\u6c34\u5e73\u7ebf\u4fdd\u6301\u76f4\u7ebf\u3002"),(0,l.kt)("h3",{id:"\u955c\u5934\u79fb\u4f4d-lens-shift-\u548c\u89c6\u9525\u4f53\u503e\u659c"},"\u955c\u5934\u79fb\u4f4d (Lens Shift) \u548c\u89c6\u9525\u4f53\u503e\u659c"),(0,l.kt)("p",null,"\u955c\u5934\u79fb\u4f4d\u7684\u4e00\u4e2a\u526f\u4f5c\u7528\u662f\u4f1a\u4f7f\u6444\u50cf\u673a\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/camera-tricks/understanding-frustum"},"\u89c6\u9525\u4f53"),"\u503e\u659c\u3002\u8fd9\u610f\u5473\u7740\u6444\u50cf\u673a\u7684\u4e2d\u5fc3\u7ebf\u4e0e\u5176\u89c6\u9525\u4f53\u4e4b\u95f4\u7684\u89d2\u5ea6\u5728\u4e00\u4fa7\u8981\u5c0f\u4e8e\u53e6\u4e00\u4fa7\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ObliqueFrustum_LensShift.png",alt:"\u4e0a\u56fe\u663e\u793a\u4e86 Y \u8f74\u955c\u5934\u79fb\u4f4d\u4e4b\u524d\uff08\u5de6\uff09\u548c\u4e4b\u540e\uff08\u53f3\uff09\u7684\u6444\u50cf\u673a\u89c6\u9525\u4f53\u3002\u5411\u4e0a\u79fb\u52a8\u955c\u5934\u4f1a\u4f7f\u89c6\u9525\u4f53\u503e\u659c\u3002"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u663e\u793a\u4e86 Y \u8f74\u955c\u5934\u79fb\u4f4d\u4e4b\u524d\uff08\u5de6\uff09\u548c\u4e4b\u540e\uff08\u53f3\uff09\u7684\u6444\u50cf\u673a\u89c6\u9525\u4f53\u3002\u5411\u4e0a\u79fb\u52a8\u955c\u5934\u4f1a\u4f7f\u89c6\u9525\u4f53\u503e\u659c\u3002"),(0,l.kt)("p",null,"\u6b64\u529f\u80fd\u53ef\u7528\u4e8e\u6839\u636e\u89c6\u89d2\u6765\u521b\u9020\u89c6\u89c9\u6548\u679c\u3002\u4f8b\u5982\uff0c\u5728\u8d5b\u8f66\u6e38\u620f\u4e2d\uff0c\u53ef\u80fd\u5e0c\u671b\u5c06\u89c6\u89d2\u4fdd\u6301\u5728\u63a5\u8fd1\u5730\u9762\u7684\u8f83\u4f4e\u4f4d\u7f6e\u3002\u955c\u5934\u79fb\u4f4d\u662f\u4e00\u79cd\u4e0d\u7528\u811a\u672c\u5373\u53ef\u5b9e\u73b0\u89c6\u9525\u4f53\u503e\u659c\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5173\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/docs/camera-tricks/oblique-frustum"},"\u4f7f\u7528\u659c\u89c6\u9525\u4f53"),"\u7684\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"gate-fit"},"Gate Fit"),(0,l.kt)("p",null,"Camera \u7ec4\u4ef6\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u5c5e\u6027\u51b3\u5b9a\u4e86 Game \u89c6\u56fe\u548c\u7269\u7406\u6444\u50cf\u673a\u4f20\u611f\u5668\u5177\u6709\u4e0d\u540c\u5bbd\u9ad8\u6bd4\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u5728  ",(0,l.kt)("strong",{parentName:"p"},"Physical Camera"),"  \u6a21\u5f0f\u4e2d\uff0c\u4e00\u4e2a\u6444\u50cf\u673a\u6709\u4e24\u4e2a\u201c\u95e8\u201d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e  ",(0,l.kt)("strong",{parentName:"li"},"Aspect"),"  \u4e0b\u62c9\u83dc\u5355\u4e2d\u8bbe\u7f6e\u7684\u5206\u8fa8\u7387\u5728 Game \u89c6\u56fe\u4e2d\u6e32\u67d3\u7684\u533a\u57df\u88ab\u79f0\u4e3a\u201c\u5206\u8fa8\u7387\u95e8\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6444\u50cf\u673a\u5b9e\u9645\u770b\u5230\u7684\u533a\u57df\uff08\u7531  ",(0,l.kt)("strong",{parentName:"li"},"Sensor Size"),"  \u5c5e\u6027\u5b9a\u4e49\uff09\u88ab\u79f0\u4e3a\u201c\u80f6\u7247\u95e8\u201d\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitGates.png",alt:"\u5206\u8fa8\u7387\u95e8\u4e0e\u80f6\u7247\u95e8\u5177\u6709\u4e0d\u540c\u5bbd\u9ad8\u6bd4\u7684\u793a\u4f8b"})),(0,l.kt)("p",null,"\u5206\u8fa8\u7387\u95e8\u4e0e\u80f6\u7247\u95e8\u5177\u6709\u4e0d\u540c\u5bbd\u9ad8\u6bd4\u7684\u793a\u4f8b"),(0,l.kt)("p",null,"\u4e24\u4e2a\u95e8\u5177\u6709\u4e0d\u540c\u5bbd\u9ad8\u6bd4\u65f6\uff0cUnity \u8ba9\u5206\u8fa8\u7387\u95e8\u201c\u9002\u5e94\u201d\u80f6\u7247\u95e8\u3002\u6709\u51e0\u79cd\u9002\u5e94\u6a21\u5f0f\uff0c\u4f46\u662f\u8fd9\u4e9b\u6a21\u5f0f\u90fd\u4f1a\u4ea7\u751f\u4ee5\u4e0b\u4e09\u79cd\u7ed3\u679c\u4e4b\u4e00\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u88c1\u526a (Cropping)\uff1a")," \u9002\u5e94\u540e\uff0c\u80f6\u7247\u95e8\u8d85\u8fc7\u5206\u8fa8\u7387\u95e8\u65f6\uff0cGame \u89c6\u56fe\u5728\u6ee1\u8db3\u5bbd\u9ad8\u6bd4\u7684\u60c5\u51b5\u4e0b\u6e32\u67d3\u5c3d\u53ef\u80fd\u591a\u7684\u6444\u50cf\u673a\u56fe\u50cf\u9762\u79ef\uff0c\u5e76\u88c1\u6389\u5176\u4f59\u90e8\u5206\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8fc7\u626b\u63cf (Overscanning)\uff1a")," \u9002\u5e94\u540e\uff0c\u80f6\u7247\u95e8\u8d85\u8fc7\u5206\u8fa8\u7387\u95e8\u65f6\uff0cGame \u89c6\u56fe\u4ecd\u7136\u5bf9\u6444\u50cf\u673a\u89c6\u91ce\u4e4b\u5916\u7684\u573a\u666f\u90e8\u5206\u8fdb\u884c\u6e32\u67d3\u8ba1\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u62c9\u4f38 (Stretching)\uff1a")," Game \u89c6\u56fe\u6e32\u67d3\u5b8c\u6574\u7684\u6444\u50cf\u673a\u56fe\u50cf\uff0c\u5c06\u5176\u6c34\u5e73\u6216\u5782\u76f4\u62c9\u4f38\u4ee5\u9002\u5e94\u5bbd\u9ad8\u6bd4\u3002")),(0,l.kt)("p",null,"\u8981\u5728 Scene \u89c6\u56fe\u4e2d\u67e5\u770b\u8fd9\u4e9b\u95e8\uff0c\u5e76\u67e5\u770b\u5b83\u4eec\u5982\u4f55\u76f8\u4e92\u9002\u5e94\uff0c\u8bf7\u9009\u62e9\u6444\u50cf\u673a\u5e76\u67e5\u770b\u5176\u89c6\u9525\u4f53\u3002\u5206\u8fa8\u7387\u95e8\u662f\u6444\u50cf\u673a\u8fdc\u88c1\u526a\u9762\u3002\u80f6\u7247\u95e8\u662f\u4f4d\u4e8e\u89c6\u9525\u4f53\u5e95\u90e8\u7684\u7b2c\u4e8c\u4e2a\u77e9\u5f62\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitUI.png",alt:"\u5728\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u4f4d\u4e8e\u6444\u50cf\u673a\u89c6\u9525\u4f53\u5e95\u90e8\u7684\u5916\u77e9\u5f62 (A) \u662f\u5206\u8fa8\u7387\u95e8\u3002\u5185\u77e9\u5f62 (B) \u662f\u80f6\u7247\u95e8"})),(0,l.kt)("p",null,"\u5728\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u4f4d\u4e8e\u6444\u50cf\u673a\u89c6\u9525\u4f53\u5e95\u90e8\u7684\u5916\u77e9\u5f62 (A) \u662f\u5206\u8fa8\u7387\u95e8\u3002\u5185\u77e9\u5f62 (B) \u662f\u80f6\u7247\u95e8"),(0,l.kt)("h3",{id:"gate-fit-\u6a21\u5f0f"},"Gate Fit \u6a21\u5f0f"),(0,l.kt)("p",null,"\u9009\u62e9\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u6a21\u5f0f\u51b3\u5b9a\u4e86 Unity \u5982\u4f55\u8c03\u6574\u5206\u8fa8\u7387\u95e8\u7684\u5927\u5c0f\uff08\u56e0\u800c\u8c03\u6574\u6444\u50cf\u673a\u7684\u89c6\u9525\u4f53\uff09\u3002\u80f6\u7247\u95e8\u59cb\u7ec8\u4fdd\u6301\u76f8\u540c\u5927\u5c0f\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u90e8\u5206\u63d0\u4f9b\u4e86\u5173\u4e8e\u6bcf\u79cd Gate Fit \u6a21\u5f0f\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"vertical"},"Vertical"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Vertical"),"  \u65f6\uff0cUnity \u8ba9\u5206\u8fa8\u7387\u95e8\u9002\u5e94\u80f6\u7247\u95e8\u7684\u9ad8\u5ea6\uff08Y \u8f74\uff09\u3002\u5bf9\u4f20\u611f\u5668\u5bbd\u5ea6 ( ",(0,l.kt)("strong",{parentName:"p"},"Sensor Size ",">"," X")," ) \u8fdb\u884c\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4e0d\u4f1a\u5f71\u54cd\u6e32\u67d3\u7684\u56fe\u50cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f20\u611f\u5668\u5bbd\u9ad8\u6bd4\u5927\u4e8e Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff0cUnity \u4f1a\u5728\u4e24\u4fa7\u88c1\u526a\u6e32\u67d3\u7684\u56fe\u50cf\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitV_600x900_16mm.png",alt:"Gate Fit \u8bbe\u7f6e\u4e3a Vertical\uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 0.66:1 (600 x 900 px)\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u88c1\u526a\u56fe\u50cf\u7684\u4f4d\u7f6e\u3002"})),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Vertical")," \uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 0.66:1 (600 x 900 px)\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u88c1\u526a\u56fe\u50cf\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f20\u611f\u5668\u5bbd\u9ad8\u6bd4\u5c0f\u4e8e Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff0cUnity \u4f1a\u5728\u4e24\u4fa7\u5bf9\u6e32\u67d3\u7684\u56fe\u50cf\u8fdb\u884c\u8fc7\u626b\u63cf\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitV_16-9_16mm.png",alt:"Gate Fit \u8bbe\u7f6e\u4e3a Vertical\uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 16:9\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7eff\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u5bf9\u56fe\u50cf\u8fdb\u884c\u8fc7\u626b\u63cf\u7684\u4f4d\u7f6e\u3002"})),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Vertical")," \uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 16:9\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7eff\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u5bf9\u56fe\u50cf\u8fdb\u884c\u8fc7\u626b\u63cf\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"horizontal"},"Horizontal"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Horizontal"),"  \u65f6\uff0cUnity \u8ba9\u5206\u8fa8\u7387\u95e8\u9002\u5e94\u80f6\u7247\u95e8\u7684\u5bbd\u5ea6\uff08X \u8f74\uff09\u3002\u5bf9\u4f20\u611f\u5668\u9ad8\u5ea6 (Sensor Size ",">"," Y) \u8fdb\u884c\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4e0d\u4f1a\u5f71\u54cd\u6e32\u67d3\u7684\u56fe\u50cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f20\u611f\u5668\u5bbd\u9ad8\u6bd4\u5927\u4e8e Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff0cUnity \u4f1a\u5728\u9876\u90e8\u548c\u5e95\u90e8\u5bf9\u6e32\u67d3\u7684\u56fe\u50cf\u8fdb\u884c\u8fc7\u626b\u63cf\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitH_600x900_16mm.png",alt:"Gate Fit \u8bbe\u7f6e\u4e3a Horizontal\uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 0.66:1 (600 x 900 px)\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7eff\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u5bf9\u56fe\u50cf\u8fdb\u884c\u8fc7\u626b\u63cf\u7684\u4f4d\u7f6e\u3002"})),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Horizontal")," \uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 0.66:1 (600 x 900 px)\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7eff\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u5bf9\u56fe\u50cf\u8fdb\u884c\u8fc7\u626b\u63cf\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f20\u611f\u5668\u5bbd\u9ad8\u6bd4\u5c0f\u4e8e Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff0c\u5219\u4f1a\u5728\u9876\u90e8\u548c\u5e95\u90e8\u88c1\u526a\u6e32\u67d3\u7684\u56fe\u50cf\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitH_16-9_16mm.png",alt:"Gate Fit \u8bbe\u7f6e\u4e3a Horizontal\uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 16:9\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u88c1\u526a\u56fe\u50cf\u7684\u4f4d\u7f6e\u3002"})),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Horizontal")," \uff1a\u5206\u8fa8\u7387\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 16:9\u3002\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16mm)\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a Unity \u5728 Game \u89c6\u56fe\u4e2d\u88c1\u526a\u56fe\u50cf\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"none"},"None"),(0,l.kt)("p",null,"Gate Fit \u8bbe\u7f6e\u4e3a None \u65f6\uff0cUnity \u8ba9\u5206\u8fa8\u7387\u95e8\u9002\u5e94\u80f6\u7247\u95e8\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff08X \u8f74\u548c Y \u8f74\uff09\u3002Unity \u4f1a\u62c9\u4f38\u6e32\u67d3\u7684\u56fe\u50cf\u4ee5\u9002\u5e94 Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GateFitF_16mm.png",alt:"\u65e0 Gate Fit\u3002\u6444\u50cf\u673a\u4f7f\u7528\u7684\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16 mm)\uff0c\u5e76\u6c34\u5e73\u62c9\u4f38\u56fe\u50cf\u4ee5\u9002\u5e94 16:9 \u7684 Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff08\u5de6\uff09\uff0c\u5782\u76f4\u62c9\u4f38\u56fe\u50cf\u4ee5\u9002\u5e94 0.66:1 \u7684 Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff08\u53f3\uff09"})),(0,l.kt)("p",null,"\u65e0 Gate Fit\u3002\u6444\u50cf\u673a\u4f7f\u7528\u7684\u80f6\u7247\u95e8\u5bbd\u9ad8\u6bd4\u4e3a 1.37:1 (16 mm)\uff0c\u5e76\u6c34\u5e73\u62c9\u4f38\u56fe\u50cf\u4ee5\u9002\u5e94 16:9 \u7684 Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff08\u5de6\uff09\uff0c\u5782\u76f4\u62c9\u4f38\u56fe\u50cf\u4ee5\u9002\u5e94 0.66:1 \u7684 Game \u89c6\u56fe\u5bbd\u9ad8\u6bd4\uff08\u53f3\uff09"),(0,l.kt)("h3",{id:"fill-\u548c-overscan"},"Fill \u548c Overscan"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Gate Fit"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Fill"),"  \u6216  ",(0,l.kt)("strong",{parentName:"p"},"Overscan"),"  \u65f6\uff0cUnity \u6839\u636e\u5206\u8fa8\u7387\u95e8\u548c\u80f6\u7247\u95e8\u7684\u5bbd\u9ad8\u6bd4\uff0c\u81ea\u52a8\u8fdb\u884c\u5782\u76f4\u6216\u6c34\u5e73\u9002\u5e94\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Fill"),"  \u8ba9\u5206\u8fa8\u7387\u95e8\u9002\u5e94\u80f6\u7247\u95e8\u7684\u8f83\u5c0f\u8f74\uff0c\u5e76\u88c1\u526a\u6444\u50cf\u673a\u56fe\u50cf\u7684\u5176\u4f59\u90e8\u5206\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Overscan"),"  \u8ba9\u5206\u8fa8\u7387\u95e8\u9002\u5e94\u80f6\u7247\u95e8\u7684\u8f83\u5927\u8f74\uff0c\u5e76\u5bf9\u6444\u50cf\u673a\u56fe\u50cf\u8fb9\u754c\u4ee5\u5916\u7684\u533a\u57df\u8fdb\u884c\u8fc7\u626b\u63cf\u3002")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018\u201310\u201305 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.2/Documentation/Manual/30_search.html?q=newin20182"},"2018.2")," \u7248\u4e2d\u6dfb\u52a0\u4e86 Physical Camera \u9009\u9879 NewIn20182"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Unity 2018.3 \u4e2d\u6dfb\u52a0\u4e86 Gate Fit \u9009\u9879")))}k.isMDXComponent=!0}}]);