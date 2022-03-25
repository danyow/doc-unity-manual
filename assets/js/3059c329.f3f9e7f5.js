"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31816],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return O}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),O=r,f=d["".concat(u,".").concat(O)]||d[O]||s[O]||a;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9710:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return O},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var l=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"LevelOfDetail",title:"\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD)",slug:"/level-of-detail"},u="\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD)",c={unversionedId:"graphics/mesh/level-of-detail/LevelOfDetail",id:"graphics/mesh/level-of-detail/LevelOfDetail",title:"\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD)",description:"\u672c\u9875\u5305\u542b\u6709\u5173\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD) \u7684\u4fe1\u606f\u3002\u6709\u5173\u7740\u8272\u5668 LOD \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 SubShader LOD \u503c\u3002",source:"@site/docs/graphics/mesh/level-of-detail/level-of-detail.md",sourceDirName:"graphics/mesh/level-of-detail",slug:"/level-of-detail",permalink:"/doc-unity-manual/docs/level-of-detail",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/mesh/level-of-detail/level-of-detail.md",tags:[],version:"current",frontMatter:{id:"LevelOfDetail",title:"\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD)",slug:"/level-of-detail"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Mesh \u7c7b",permalink:"/doc-unity-manual/docs/generating-mesh-geometry-procedurally/usingthe-mesh-class"},next:{title:"LOD \u7ec4",permalink:"/doc-unity-manual/docs/level-of-detail/class-lodgroup"}},p={},s=[{value:"LOD \u7ea7\u522b",id:"lod-\u7ea7\u522b",level:2},{value:"\u5728 Unity \u4e2d\u8bbe\u7f6e LOD",id:"\u5728-unity-\u4e2d\u8bbe\u7f6e-lod",level:2},{value:"\u914d\u7f6e LOD \u7ea7\u522b",id:"\u914d\u7f6e-lod-\u7ea7\u522b",level:2},{value:"\u9879\u76ee\u7ea7\u522b\u7684 LOD \u8bbe\u7f6e",id:"\u9879\u76ee\u7ea7\u522b\u7684-lod-\u8bbe\u7f6e",level:2}],d={toc:s};function O(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b-lod"},"\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD)"),(0,a.kt)("p",null,"\u672c\u9875\u5305\u542b\u6709\u5173\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD) \u7684\u4fe1\u606f\u3002\u6709\u5173\u7740\u8272\u5668 LOD \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-sub-shader/sl-shader-lod"},"SubShader LOD \u503c"),"\u3002"),(0,a.kt)("p",null,"\u7ec6\u8282\u7ea7\u522b (LOD) \u662f\u4e00\u79cd\u51cf\u5c11 Unity \u6e32\u67d3\u8fdc\u8ddd\u79bb\u7f51\u683c\u6240\u9700\u7684 GPU \u64cd\u4f5c\u6570\u91cf\u7684\u6280\u672f\u3002"),(0,a.kt)("p",null,"\u5f53\u573a\u666f\u4e2d\u7684\u67d0\u4e2a\u6e38\u620f\u5bf9\u8c61\u8ddd\u79bb\u6444\u50cf\u673a\u5f88\u8fdc\u65f6\uff0c\u4e0e\u8ddd\u79bb\u6444\u50cf\u673a\u5f88\u8fd1\u7684\u6e38\u620f\u5bf9\u8c61\u76f8\u6bd4\uff0c\u53ef\u4ee5\u770b\u5230\u7684\u7ec6\u8282\u5c06\u4f1a\u51cf\u5c11\u3002\u4f46\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cUnity \u4f1a\u4f7f\u7528\u76f8\u540c\u6570\u91cf\u7684\u4e09\u89d2\u5f62\u6765\u6e32\u67d3\u4e24\u4e2a\u8fdc\u8fd1\u4e0d\u540c\u8ddd\u79bb\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u8fd9\u53ef\u80fd\u4f1a\u6d6a\u8d39 GPU \u8fd0\u7b97\u8d44\u6e90\uff0c\u4ece\u800c\u5f71\u54cd\u573a\u666f\u4e2d\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,"LOD \u6280\u672f\u5141\u8bb8 Unity \u6839\u636e\u4e0e\u6444\u50cf\u673a\u7684\u8ddd\u79bb\u6765\u76f8\u5e94\u51cf\u5c11\u4e3a\u6e38\u620f\u5bf9\u8c61\u6e32\u67d3\u7684\u4e09\u89d2\u5f62\u6570\u91cf\u3002\u8981\u4f7f\u7528\u6b64\u6280\u672f\uff0c\u6e38\u620f\u5bf9\u8c61\u5fc5\u987b\u5177\u6709\u5927\u91cf\u7f51\u683c\uff0c\u8fd9\u4e9b\u7f51\u683c\u7684\u51e0\u4f55\u4f53\u7684\u7ec6\u8282\u7ea7\u522b\u9010\u6e10\u964d\u4f4e\u3002\u8fd9\u4e9b\u7f51\u683c\u79f0\u4e3a LOD \u7ea7\u522b\u3002\u6e38\u620f\u5bf9\u8c61\u79bb\u6444\u50cf\u673a\u8d8a\u8fdc\uff0cUnity \u6e32\u67d3\u7684 LOD \u7ec6\u8282\u7ea7\u522b\u8d8a\u4f4e\u3002\u6b64\u6280\u672f\u51cf\u8f7b\u4e86\u8fd9\u4e9b\u8fdc\u5904\u6e38\u620f\u5bf9\u8c61\u7ed9\u786c\u4ef6\u5e26\u6765\u7684\u8d1f\u62c5\uff0c\u56e0\u6b64\u53ef\u4ee5\u63d0\u9ad8\u6e32\u67d3\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u5982\u4f55\u5728 Unity \u4e2d\u4f7f\u7528 LOD\uff0c\u5fc5\u987b\u9996\u5148\u4e86\u89e3\u4ec0\u4e48\u662f LOD \u7ea7\u522b\u4ee5\u53ca\u5b83\u4eec\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"),(0,a.kt)("h2",{id:"lod-\u7ea7\u522b"},"LOD \u7ea7\u522b"),(0,a.kt)("p",null,"LOD \u7ea7\u522b\u662f\u4e00\u4e2a\u7f51\u683c\uff0c\u7528\u4e8e\u5b9a\u4e49 Unity \u4e3a\u6e38\u620f\u5bf9\u8c61\u7684\u51e0\u4f55\u4f53\u6e32\u67d3\u7684\u7ec6\u8282\u7ea7\u522b\u3002\u5f53\u6e38\u620f\u5bf9\u8c61\u4f7f\u7528 LOD \u65f6\uff0cUnity \u5c06\u6839\u636e\u6e38\u620f\u5bf9\u8c61\u4e0e\u6444\u50cf\u673a\u7684\u8ddd\u79bb\u6765\u663e\u793a\u8be5\u6e38\u620f\u5bf9\u8c61\u7684\u76f8\u5e94 LOD \u7ea7\u522b\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2a LOD \u7ea7\u522b\u90fd\u5b58\u5728\u4e8e\u5355\u72ec\u7684\u6e38\u620f\u5bf9\u8c61\u4e2d\uff0c\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u663e\u793a\u8be5 LOD \u7ea7\u522b\u7684 Mesh Renderer \u7ec4\u4ef6\u3002\u5bf9\u4e8e\u6700\u4f4e\u7ea7\u522b\u7684\u7ec6\u8282\uff0c\u53ef\u4ee5\u4f7f\u7528\u516c\u544a\u724c\u8d44\u6e90 (Billboard Asset)\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b Unity \u5c06\u663e\u793a\u516c\u544a\u724c\u8d44\u6e90\u800c\u4e0d\u662f 3D \u7f51\u683c\u3002Unity \u6839\u636e\u9700\u8981\u663e\u793a\u548c\u9690\u85cf\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\u3002LOD \u7ea7\u522b\u5fc5\u987b\u662f\u76f8\u5173\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u5b50\u6e38\u620f\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86 LOD \u7ea7\u522b\u5982\u4f55\u6839\u636e\u4e0e\u6444\u50cf\u673a\u7684\u8ddd\u79bb\u800c\u53d8\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LOD0Image.png",alt:"\u5904\u4e8e LOD 0 \u65f6\uff0c\u6444\u50cf\u673a\u663e\u793a\u5305\u542b\u5927\u91cf\u5c0f\u4e09\u89d2\u5f62\u7684\u7f51\u683c\u3002\u5904\u4e8e LOD 1 \u65f6\uff0c\u6444\u50cf\u673a\u663e\u793a\u7684\u7f51\u683c\u4e2d\u4e09\u89d2\u5f62\u7684\u6570\u91cf\u5927\u5e45\u51cf\u5c11\uff0c\u800c\u4e14\u4e09\u89d2\u5f62\u7684\u5927\u5c0f\u5927\u5e45\u589e\u5927\u3002"})),(0,a.kt)("p",null,"\u5904\u4e8e LOD 0 \u65f6\uff0c\u6444\u50cf\u673a\u663e\u793a\u5305\u542b\u5927\u91cf\u5c0f\u4e09\u89d2\u5f62\u7684\u7f51\u683c\u3002\u5904\u4e8e LOD 1 \u65f6\uff0c\u6444\u50cf\u673a\u663e\u793a\u7684\u7f51\u683c\u4e2d\u4e09\u89d2\u5f62\u7684\u6570\u91cf\u5927\u5e45\u51cf\u5c11\uff0c\u800c\u4e14\u4e09\u89d2\u5f62\u7684\u5927\u5c0f\u5927\u5e45\u589e\u5927\u3002"),(0,a.kt)("h2",{id:"\u5728-unity-\u4e2d\u8bbe\u7f6e-lod"},"\u5728 Unity \u4e2d\u8bbe\u7f6e LOD"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 LOD\uff0c\u5fc5\u987b\u6709\u4e00\u4e2a\u5305\u542b ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/level-of-detail/class-lodgroup"},"LOD Group")," \u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\u3002LOD Group \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u76f8\u5e94\u63a7\u4ef6\u6765\u5b9a\u4e49 LOD \u5728\u6b64\u6e38\u620f\u5bf9\u8c61\u4e0a\u7684\u884c\u4e3a\u65b9\u5f0f\uff0c\u5e76\u4f1a\u5f15\u7528 Unity \u4e3a\u6bcf\u4e2a LOD \u7ea7\u522b\u663e\u793a\u6216\u9690\u85cf\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/level-of-detail/class-lodgroup"},"LOD \u7ec4 (LOD Group)")," \u4ee5\u4e86\u89e3\u6709\u5173\u8be5\u7ec4\u4ef6\u4e2d\u7684\u5c5e\u6027\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u6cd5\u5728 Unity \u4e2d\u8bbe\u7f6e LOD\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u5916\u90e8 3D \u5efa\u6a21\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e LOD \u7ea7\u522b\uff0c\u7136\u540e Unity \u53ef\u4ee5\u81ea\u52a8\u4e3a\u60a8\u521b\u5efa\u548c\u914d\u7f6e\u6240\u9700\u7684\u6e38\u620f\u5bf9\u8c61\u548c\u7ec4\u4ef6\u3002\u6709\u5173\u6b63\u786e\u914d\u7f6e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/level-of-detail/importing-lod-meshes"},"\u5bfc\u5165 LOD \u7f51\u683c"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u5e26\u6709 LOD Group \u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u5e76\u624b\u52a8\u914d\u7f6e LOD \u7ea7\u522b\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e-lod-\u7ea7\u522b"},"\u914d\u7f6e LOD \u7ea7\u522b"),(0,a.kt)("p",null,"\u8981\u624b\u52a8\u914d\u7f6e Unity \u663e\u793a\u6bcf\u4e2a LOD \u7ea7\u522b\u65f6\u4f9d\u636e\u7684\u6444\u50cf\u673a\u8ddd\u79bb\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/level-of-detail/class-lodgroup#lod-%E7%BB%84%E9%80%89%E6%8B%A9%E6%9D%A1"},"LOD Group \u7ec4\u4ef6\u7684\u9009\u62e9\u680f"),"\u3002"),(0,a.kt)("p",null,"LOD Group \u7ec4\u4ef6\u6700\u591a\u63a5\u53d7\u516b\u4e2a LOD \u7ea7\u522b\u3002 ",(0,a.kt)("strong",{parentName:"p"},"LOD 0"),"  \u6700\u63a5\u8fd1\u6444\u50cf\u673a\uff0c\u56e0\u6b64\u662f\u7ec6\u8282\u7ea7\u522b\u6700\u9ad8\u7684 LOD \u7ea7\u522b\u3002"),(0,a.kt)("h2",{id:"\u9879\u76ee\u7ea7\u522b\u7684-lod-\u8bbe\u7f6e"},"\u9879\u76ee\u7ea7\u522b\u7684 LOD \u8bbe\u7f6e"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-quality-settings"},"Quality settings")," \u7a97\u53e3\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u5f71\u54cd\u9879\u76ee\u4e2d\u6240\u6709\u6e38\u620f\u5bf9\u8c61\u7684 LOD \u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u6709\u4e24\u4e2a LOD \u8bbe\u7f6e\u53ef\u4f9b\u914d\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum LOD Level")," \uff1a\u4ece\u6784\u5efa\u4e2d\u6392\u9664\u9ad8\u4e8e\u6307\u5b9a LOD \u7ea7\u522b\u7684\u7f51\u683c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LOD Bias")," \uff1a\u51b3\u5b9a\u4e86\u5904\u4e8e\u9608\u503c\u8ddd\u79bb\u65f6\u9009\u7528\u66f4\u9ad8\u8fd8\u662f\u66f4\u4f4e\u7684 LOD \u7ea7\u522b\u3002")))}O.isMDXComponent=!0}}]);