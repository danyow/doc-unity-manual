"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64246],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9956:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"importing-lod-meshes",title:"\u5bfc\u5165 LOD \u7f51\u683c",slug:"/level-of-detail/importing-lod-meshes"},s="\u5bfc\u5165 LOD \u7f51\u683c",c={unversionedId:"graphics/mesh/level-of-detail/importing-lod-meshes",id:"graphics/mesh/level-of-detail/importing-lod-meshes",title:"\u5bfc\u5165 LOD \u7f51\u683c",description:"\u53ef\u4ee5\u5728\u5916\u90e8 3D \u5e94\u7528\u7a0b\u5e8f\u4e2d\u521b\u5efa\u5177\u6709\u4e0d\u540c\u7ec6\u8282\u7ea7\u522b\u7684\u7f51\u683c\u4ee5\u4fbf\u7528\u4e8e Unity \u7684 LOD \u7cfb\u7edf\u3002\u5982\u679c\u6b63\u786e\u547d\u540d\u4e86\u8fd9\u4e9b\u7f51\u683c\uff0c\u5219 Unity \u5728\u5bfc\u5165\u6a21\u578b\u65f6\u4f1a\u81ea\u52a8\u4e3a\u8fd9\u4e9b\u7f51\u683c\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u5e76\u914d\u7f6e LOD Group \u7ec4\u4ef6\u3002",source:"@site/docs/graphics/mesh/level-of-detail/importing-lod-meshes.md",sourceDirName:"graphics/mesh/level-of-detail",slug:"/level-of-detail/importing-lod-meshes",permalink:"/doc-unity-manual/docs/level-of-detail/importing-lod-meshes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/mesh/level-of-detail/importing-lod-meshes.md",tags:[],version:"current",frontMatter:{id:"importing-lod-meshes",title:"\u5bfc\u5165 LOD \u7f51\u683c",slug:"/level-of-detail/importing-lod-meshes"},sidebar:"tutorialSidebar",previous:{title:"LOD \u7ec4",permalink:"/doc-unity-manual/docs/level-of-detail/class-lodgroup"},next:{title:"\u52a0\u8f7d\u7eb9\u7406\u548c\u7f51\u683c\u6570\u636e",permalink:"/doc-unity-manual/docs/mesh/loading-textureand-mesh-data"}},u={},p=[{value:"\u5176\u4ed6\u4fe1\u606f",id:"\u5176\u4ed6\u4fe1\u606f",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5bfc\u5165-lod-\u7f51\u683c"},"\u5bfc\u5165 LOD \u7f51\u683c"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u5916\u90e8 3D \u5e94\u7528\u7a0b\u5e8f\u4e2d\u521b\u5efa\u5177\u6709\u4e0d\u540c\u7ec6\u8282\u7ea7\u522b\u7684\u7f51\u683c\u4ee5\u4fbf\u7528\u4e8e Unity \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/LevelOfDetail.html"},"LOD \u7cfb\u7edf"),"\u3002\u5982\u679c\u6b63\u786e\u547d\u540d\u4e86\u8fd9\u4e9b\u7f51\u683c\uff0c\u5219 Unity \u5728\u5bfc\u5165\u6a21\u578b\u65f6\u4f1a\u81ea\u52a8\u4e3a\u8fd9\u4e9b\u7f51\u683c\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u5e76\u914d\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/class-LODGroup.html"},"LOD Group")," \u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u8981\u5c06\u5177\u6709 LOD \u7ea7\u522b\u7684\u6a21\u578b\u5bfc\u5165 Unity\uff0c\u5fc5\u987b\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("p",null,"1.\u5728\u5916\u90e8 3D \u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6309\u7167\u5e94\u7528\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u521b\u5efa\u6240\u9700\u6570\u91cf\u7684 LOD \u7f51\u683c\u3002"),(0,a.kt)("p",null,"1.\u6839\u636e\u4ee5\u4e0b\u547d\u540d\u7ea6\u5b9a\u6765\u547d\u540d\u7f51\u683c\uff1a ","*"," ExampleMeshName","_","LOD0 \u8868\u793a\u7b2c\u4e00\u4e2a LOD \u7ea7\u522b\uff08\u5373\u7ec6\u8282\u5316\u7a0b\u5ea6\u6700\u9ad8\u7684\u7248\u672c\uff09 ","*"," ExampleMeshName","_","LOD1 ","*"," ExampleMeshName","_","LOD2"),(0,a.kt)("p",null,"1.\u5c06\u6a21\u578b\u5bfc\u51fa\u4e3a FBX \u6587\u4ef6\u3002\u6216\u8005\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662f Maya\uff0c\u8bf7\u5c06\u7f51\u683c\u7ec4\u76f4\u63a5\u5bfc\u51fa\u5230 Unity \u4e2d\uff1b\u4e3a\u6b64\uff0c\u8bf7\u9009\u62e9  ",(0,a.kt)("strong",{parentName:"p"},"File ",">"," Send to Unity ",">"," Selection")," \u3002"),(0,a.kt)("p",null,"1.\u5c06 FBX \u5bfc\u5165 Unity\u3002Unity \u4f1a\u8bc6\u522b\u5206\u7ec4\u7684\u7f51\u683c\u548c\u547d\u540d\u7ea6\u5b9a\uff0c\u5e76\u4f7f\u7528\u9002\u5f53\u7684\u8bbe\u7f6e\u6765\u81ea\u52a8\u521b\u5efa ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/class-LODGroup.html"},"LOD Group")," \u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5176\u4ed6\u4fe1\u606f"},"\u5176\u4ed6\u4fe1\u606f"),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173\u5bfc\u5165\u6a21\u578b\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ImportingModelFiles.html"},"\u5bfc\u5165\u6a21\u578b"),"\u3002"),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173\u5728 Maya \u4e2d\u521b\u5efa\u548c\u5bfc\u51fa LOD \u7f51\u683c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9075\u5faa Unity \u6559\u7a0b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/creating-lods-in-maya-for-unity#5d01e0c0edbc2a0020864f79"},"\u5728 Maya \u4e2d\u521b\u5efa LOD (Creating LODs in Maya)"),"\u3002"))}d.isMDXComponent=!0}}]);