"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58366],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),a=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=a(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,c=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=a(t),d=l,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var a=2;a<c;a++)i[a]=t[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13217:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var r=t(87462),l=t(63366),c=(t(67294),t(3905)),i=["components"],o={id:"OcclusionCulling",title:"\u906e\u6321\u5254\u9664",slug:"/occlusion-culling"},u="\u906e\u6321\u5254\u9664",a={unversionedId:"graphics/cameras-overview/occlusion-culling/OcclusionCulling",id:"graphics/cameras-overview/occlusion-culling/OcclusionCulling",title:"\u906e\u6321\u5254\u9664",description:"\u201c\u906e\u6321\u5254\u9664\u201d\u8fc7\u7a0b\u53ef\u9632\u6b62 Unity \u4e3a\u90a3\u4e9b\u88ab\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u5b8c\u5168\u6321\u4f4f\uff08\u906e\u6321\uff09\u7684\u6e38\u620f\u5bf9\u8c61\u6267\u884c\u6e32\u67d3\u8ba1\u7b97\u3002",source:"@site/docs/graphics/cameras-overview/occlusion-culling/occlusion-culling.md",sourceDirName:"graphics/cameras-overview/occlusion-culling",slug:"/occlusion-culling",permalink:"/doc-unity-manual/docs/occlusion-culling",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/cameras-overview/occlusion-culling/occlusion-culling.md",tags:[],version:"current",frontMatter:{id:"OcclusionCulling",title:"\u906e\u6321\u5254\u9664",slug:"/occlusion-culling"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u591a\u4e2a\u6444\u50cf\u673a",permalink:"/doc-unity-manual/docs/cameras-overview/multiple-cameras"},next:{title:"\u906e\u6321\u533a\u57df",permalink:"/doc-unity-manual/docs/occlusion-culling/class-occlusion-area"}},s={},p=[{value:"\u4f55\u65f6\u4f7f\u7528\u906e\u6321\u5254\u9664",id:"\u4f55\u65f6\u4f7f\u7528\u906e\u6321\u5254\u9664",level:2},{value:"\u906e\u6321\u5254\u9664\u7684\u5de5\u4f5c\u539f\u7406",id:"\u906e\u6321\u5254\u9664\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u906e\u6321\u5254\u9664"},"\u906e\u6321\u5254\u9664"),(0,c.kt)("p",null,"\u201c\u906e\u6321\u5254\u9664\u201d\u8fc7\u7a0b\u53ef\u9632\u6b62 Unity \u4e3a\u90a3\u4e9b\u88ab\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u5b8c\u5168\u6321\u4f4f\uff08\u906e\u6321\uff09\u7684\u6e38\u620f\u5bf9\u8c61\u6267\u884c\u6e32\u67d3\u8ba1\u7b97\u3002"),(0,c.kt)("p",null,"\u6444\u50cf\u673a\u5728\u6bcf\u4e00\u5e27\u4e2d\u6267\u884c\u5254\u9664\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u4f1a\u68c0\u67e5\u573a\u666f\u4e2d\u7684\u6e32\u67d3\u5668\uff0c\u5e76\u6392\u9664\uff08\u5254\u9664\uff09\u90a3\u4e9b\u4e0d\u9700\u8981\u7ed8\u5236\u7684\u6e32\u67d3\u5668\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6444\u50cf\u673a\u6267\u884c",(0,c.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/camera-tricks/understanding-frustum"},"\u89c6\u9525\u4f53\u5254\u9664"),"\uff0c\u8fd9\u4e00\u8fc7\u7a0b\u5c06\u6392\u9664\u6240\u6709\u4e0d\u5728\u6444\u50cf\u673a\u89c6\u9525\u4f53\u8303\u56f4\u5185\u7684\u6e32\u67d3\u5668\u3002\u4f46\u662f\uff0c\u89c6\u9525\u4f53\u5254\u9664\u4e0d\u4f1a\u68c0\u67e5\u6e32\u67d3\u5668\u662f\u5426\u88ab\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u906e\u6321\uff0c\u56e0\u6b64 Unity \u4ecd\u4f1a\u6d6a\u8d39 CPU \u548c GPU \u65f6\u95f4\u8fdb\u884c\u5728\u6700\u7ec8\u5e27\u4e2d\u4e0d\u53ef\u89c1\u7684\u6e32\u67d3\u5668\u7684\u6e32\u67d3\u64cd\u4f5c\u3002\u906e\u6321\u5254\u9664\u5c06\u963b\u6b62 Unity \u6267\u884c\u8fd9\u4e9b\u5f92\u52b3\u7684\u64cd\u4f5c\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/OcclusionFrustumCulling.jpg",alt:"\u5e38\u89c4\u89c6\u9525\u4f53\u5254\u9664\u5c06\u4f1a\u6e32\u67d3\u6444\u50cf\u673a\u89c6\u91ce\u5185\u7684\u6240\u6709\u6e32\u67d3\u5668\u3002"})),(0,c.kt)("p",null,"\u5e38\u89c4\u89c6\u9525\u4f53\u5254\u9664\u5c06\u4f1a\u6e32\u67d3\u6444\u50cf\u673a\u89c6\u91ce\u5185\u7684\u6240\u6709\u6e32\u67d3\u5668\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/OcclusionFullCulling.jpg",alt:"\u906e\u6321\u5254\u9664\u5c06\u4f1a\u5220\u9664\u88ab\u66f4\u8fd1\u7684\u6e32\u67d3\u5668\u5b8c\u5168\u906e\u6321\u7684\u6e32\u67d3\u5668\u3002"})),(0,c.kt)("p",null,"\u906e\u6321\u5254\u9664\u5c06\u4f1a\u5220\u9664\u88ab\u66f4\u8fd1\u7684\u6e32\u67d3\u5668\u5b8c\u5168\u906e\u6321\u7684\u6e32\u67d3\u5668\u3002"),(0,c.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528\u906e\u6321\u5254\u9664"},"\u4f55\u65f6\u4f7f\u7528\u906e\u6321\u5254\u9664"),(0,c.kt)("p",null,"\u8981\u786e\u5b9a\u906e\u6321\u5254\u9664\u662f\u5426\u6709\u53ef\u80fd\u6539\u5584\u9879\u76ee\u7684\u8fd0\u884c\u65f6\u6027\u80fd\uff0c\u8bf7\u8003\u8651\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u9632\u6b62\u65e0\u610f\u4e49\u7684\u6e32\u67d3\u64cd\u4f5c\u53ef\u4ee5\u8282\u7701 CPU \u548c GPU \u65f6\u95f4\u3002Unity \u7684\u5185\u7f6e\u906e\u6321\u5254\u9664\u5728 CPU \u4e0a\u6267\u884c\u8fd0\u884c\u65f6\u8ba1\u7b97\uff0c\u8fd9\u53ef\u80fd\u4f1a\u62b5\u6d88\u5176\u8282\u7701\u7684 CPU \u65f6\u95f4\u3002\u56e0\u6b64\uff0c\u5f53\u9879\u76ee\u56e0\u8fc7\u5ea6\u7ed8\u5236\u800c\u5177\u6709 GPU \u5bc6\u96c6\u578b\u7279\u5f81\u65f6\uff0c\u906e\u6321\u5254\u9664\u6700\u6709\u53ef\u80fd\u63d0\u9ad8\u6027\u80fd\u3002"),(0,c.kt)("li",{parentName:"ul"},"Unity \u5728\u8fd0\u884c\u65f6\u5c06\u906e\u6321\u5254\u9664\u6570\u636e\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u3002\u5fc5\u987b\u786e\u4fdd\u6709\u8db3\u591f\u7684\u5185\u5b58\u6765\u52a0\u8f7d\u6b64\u6570\u636e\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5f53\u573a\u666f\u4e2d\u4e00\u4e9b\u754c\u9650\u660e\u786e\u7684\u5c0f\u533a\u57df\u88ab\u5b9e\u4f53\u6e38\u620f\u5bf9\u8c61\u5f7c\u6b64\u9694\u5f00\u65f6\uff0c\u906e\u6321\u5254\u9664\u7684\u6548\u679c\u6700\u597d\u3002\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\u662f\u901a\u8fc7\u8d70\u5eca\u8fde\u63a5\u7684\u623f\u95f4\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u906e\u6321\u5254\u9664\u6765\u906e\u6321\u52a8\u6001\u6e38\u620f\u5bf9\u8c61\uff0c\u4f46\u52a8\u6001\u6e38\u620f\u5bf9\u8c61\u4e0d\u80fd\u906e\u6321\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u3002\u5982\u679c\u9879\u76ee\u4f1a\u5728\u8fd0\u884c\u65f6\u751f\u6210\u573a\u666f\u51e0\u4f55\u4f53\uff0c\u5219 Unity \u7684\u5185\u7f6e\u906e\u6321\u5254\u9664\u4e0d\u9002\u7528\u4e8e\u8be5\u9879\u76ee\u3002")),(0,c.kt)("h2",{id:"\u906e\u6321\u5254\u9664\u7684\u5de5\u4f5c\u539f\u7406"},"\u906e\u6321\u5254\u9664\u7684\u5de5\u4f5c\u539f\u7406"),(0,c.kt)("p",null,"\u906e\u6321\u5254\u9664\u4f1a\u5728 Unity Editor \u4e2d\u751f\u6210\u6709\u5173\u573a\u666f\u7684\u6570\u636e\uff0c\u7136\u540e\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u8be5\u6570\u636e\u6765\u786e\u5b9a\u6444\u50cf\u673a\u53ef\u4ee5\u770b\u5230\u7684\u5185\u5bb9\u3002\u8fd9\u79cd\u751f\u6210\u6570\u636e\u7684\u8fc7\u7a0b\u79f0\u4e3a\u70d8\u7119\u3002"),(0,c.kt)("p",null,"\u5728\u5bf9\u906e\u6321\u5254\u9664\u6570\u636e\u8fdb\u884c\u70d8\u7119\u65f6\uff0cUnity \u5c06\u573a\u666f\u5212\u5206\u4e3a\u591a\u4e2a\u5355\u5143\uff0c\u5e76\u751f\u6210\u63cf\u8ff0\u5355\u5143\u5185\u51e0\u4f55\u4f53\u4ee5\u53ca\u76f8\u90bb\u5355\u5143\u4e4b\u95f4\u53ef\u89c1\u6027\u7684\u6570\u636e\u3002\u7136\u540e\uff0cUnity \u5c3d\u53ef\u80fd\u5408\u5e76\u5355\u5143\uff0c\u4ee5\u51cf\u5c0f\u751f\u6210\u7684\u6570\u636e\u7684\u5927\u5c0f\u3002\u8981\u914d\u7f6e\u70d8\u7119\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u5728 ",(0,c.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/occlusion-culling/occlusion-culling-window"},"Occlusion Culling \u7a97\u53e3"),"\u4e2d\u66f4\u6539\u53c2\u6570\uff0c\u5e76\u5728\u573a\u666f\u4e2d\u4f7f\u7528",(0,c.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/occlusion-culling/class-occlusion-area"},"\u906e\u6321\u533a\u57df"),"\u3002"),(0,c.kt)("p",null,"\u5728\u8fd0\u884c\u65f6\uff0cUnity \u4f1a\u5c06\u8fd9\u4e9b\u70d8\u7119\u7684\u6570\u636e\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5e76\u4e14\u5bf9\u4e8e\u6bcf\u4e2a\u542f\u7528\u4e86 Occlusion Culling \u5c5e\u6027\u7684\u6444\u50cf\u673a\uff0c\u5c06\u4f1a\u5bf9\u6570\u636e\u6267\u884c\u67e5\u8be2\u4ee5\u786e\u5b9a\u8be5\u6444\u50cf\u673a\u53ef\u4ee5\u770b\u5230\u7684\u5185\u5bb9\u3002\u8bf7\u6ce8\u610f\uff0c\u542f\u7528\u906e\u6321\u5254\u9664\u540e\uff0c\u6444\u50cf\u673a\u5c06\u6267\u884c\u89c6\u9525\u4f53\u5254\u9664\u548c\u906e\u6321\u5254\u9664\u3002"),(0,c.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,c.kt)("p",null,"Unity \u4f7f\u7528 Umbra \u5e93\u6765\u6267\u884c\u906e\u6321\u5254\u9664\u3002\u6709\u5173\u8be6\u7ec6\u4ecb\u7ecd Umbra \u7684\u6587\u7ae0\u7684\u94fe\u63a5\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/occlusion-culling/occlusion-culling-additional-resources"},"\u201c\u5176\u4ed6\u8d44\u6e90\u201d\u9875\u9762"),"\u3002"))}d.isMDXComponent=!0}}]);