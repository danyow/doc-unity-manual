"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93808],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return m}});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),d=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),f=d(r),m=n,p=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return r?l.createElement(p,i(i({ref:t},o),{},{components:r})):l.createElement(p,i({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var d=2;d<a;d++)i[d]=r[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79241:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var l=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],u={id:"shader-SelfIllumVertexLit",title:"\u81ea\u53d1\u5149\u9876\u70b9\u5149\u7167 (Self-Illuminated Vertex-Lit)",slug:"/shader-self-illum-family/shader-self-illum-vertex-lit"},s="\u81ea\u53d1\u5149\u9876\u70b9\u5149\u7167 (Self-Illuminated Vertex-Lit)",d={unversionedId:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-self-illum-family/shader-SelfIllumVertexLit",id:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-self-illum-family/shader-SelfIllumVertexLit",title:"\u81ea\u53d1\u5149\u9876\u70b9\u5149\u7167 (Self-Illuminated Vertex-Lit)",description:"\u6ce8\u610f\uff1a Unity 5 \u5f15\u5165\u4e86\u6807\u51c6\u7740\u8272\u5668\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002",source:"@site/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-self-illum-family/shader-self-illum-vertex-lit.md",sourceDirName:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-self-illum-family",slug:"/shader-self-illum-family/shader-self-illum-vertex-lit",permalink:"/doc-unity-manual/docs/shader-self-illum-family/shader-self-illum-vertex-lit",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-self-illum-family/shader-self-illum-vertex-lit.md",tags:[],version:"current",frontMatter:{id:"shader-SelfIllumVertexLit",title:"\u81ea\u53d1\u5149\u9876\u70b9\u5149\u7167 (Self-Illuminated Vertex-Lit)",slug:"/shader-self-illum-family/shader-self-illum-vertex-lit"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u53d1\u5149\u955c\u9762\u53cd\u5c04 (Self-Illuminated Specular)",permalink:"/doc-unity-manual/docs/shader-self-illum-family/shader-self-illum-specular"},next:{title:"\u900f\u660e\u9542\u7a7a\u7740\u8272\u5668\u7cfb\u5217",permalink:"/doc-unity-manual/docs/shader-transparent-cutout-family"}},o={},c=[{value:"\u81ea\u53d1\u5149 (Self-Illuminated) \u5c5e\u6027",id:"\u81ea\u53d1\u5149-self-illuminated-\u5c5e\u6027",level:2},{value:"\u9876\u70b9\u5149\u7167 (Vertex-Lit) \u5c5e\u6027",id:"\u9876\u70b9\u5149\u7167-vertex-lit-\u5c5e\u6027",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}],f={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u81ea\u53d1\u5149\u9876\u70b9\u5149\u7167-self-illuminated-vertex-lit"},"\u81ea\u53d1\u5149\u9876\u70b9\u5149\u7167 (Self-Illuminated Vertex-Lit)"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Shader-IllumVertex.jpg",alt:"Shader-IllumVertex.jpg"})),(0,a.kt)("h2",{id:"\u81ea\u53d1\u5149-self-illuminated-\u5c5e\u6027"},"\u81ea\u53d1\u5149 (Self-Illuminated) \u5c5e\u6027"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,a.kt)("p",null,"\u6b64\u7740\u8272\u5668\u53ef\u4ee5\u5b9a\u4e49\u5bf9\u8c61\u7684\u660e\u4eae\u548c\u9ed1\u6697\u90e8\u5206\u3002\u8f85\u52a9\u7eb9\u7406\u7684 Alpha \u901a\u9053\u5c06\u5b9a\u4e49\u5bf9\u8c61\u4e0a\u5373\u4f7f\u6ca1\u6709\u5149\u7167\u5c04\u4e5f\u4f1a\u81ea\u5df1\u201c\u53d1\u5149\u201d\u7684\u533a\u57df\u3002\u5728 Alpha \u901a\u9053\u4e2d\uff0c\u9ed1\u8272\u8868\u793a\u96f6\u5149\uff0c\u767d\u8272\u8868\u793a\u5bf9\u8c61\u53d1\u51fa\u5168\u5149\u3002\u4efb\u4f55\u573a\u666f\u5149\u6e90\u90fd\u4f1a\u5728\u7740\u8272\u5668\u5149\u7167\u4e4b\u4e0a\u589e\u52a0\u4eae\u5ea6\u3002\u56e0\u6b64\uff0c\u5373\u4f7f\u5bf9\u8c61\u672c\u8eab\u4e0d\u53d1\u5149\uff0c\u4ecd\u7136\u4f1a\u88ab\u573a\u666f\u4e2d\u7684\u5149\u6e90\u7167\u4eae\u3002"),(0,a.kt)("h2",{id:"\u9876\u70b9\u5149\u7167-vertex-lit-\u5c5e\u6027"},"\u9876\u70b9\u5149\u7167 (Vertex-Lit) \u5c5e\u6027"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,a.kt)("p",null,"\u6b64 ",(0,a.kt)("strong",{parentName:"p"},"\u9876\u70b9\u5149\u7167")," \u7740\u8272\u5668\u662f\u6700\u7b80\u5355\u7684\u7740\u8272\u5668\u4e4b\u4e00\u3002\u7167\u5c04\u5728\u5176\u4e0a\u7684\u6240\u6709\u5149\u6e90\u5728\u5355\u4e2a\u901a\u9053\u4e2d\u6e32\u67d3\uff0c\u5e76\u4ec5\u5728\u9876\u70b9\u5904\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6b64\u7740\u8272\u5668\u4e3a\u9876\u70b9\u5149\u7167\uff0c\u6240\u4ee5\u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u57fa\u4e8e\u50cf\u7d20\u7684\u6e32\u67d3\u6548\u679c\uff0c\u4f8b\u5982\u5149\u7167\u526a\u5f71\u3001\u6cd5\u7ebf\u8d34\u56fe\u6216\u9634\u5f71\u3002\u6b64\u7740\u8272\u5668\u5bf9\u6a21\u578b\u7684\u7ec6\u5206\u4e5f\u66f4\u52a0\u654f\u611f\u3002\u5982\u679c\u4f7f\u7528\u6b64\u7740\u8272\u5668\u4f7f\u70b9\u5149\u6e90\u975e\u5e38\u9760\u8fd1\u7acb\u65b9\u4f53\uff0c\u5219\u4ec5\u5728\u89d2\u70b9\u5904\u8ba1\u7b97\u5149\u7167\u3002\u50cf\u7d20\u5149\u7167\u7740\u8272\u5668\u5728\u521b\u5efa\u6f02\u4eae\u7684\u5706\u5f62\u9ad8\u5149\u65f6\u66f4\u52a0\u6709\u6548\uff0c\u4e0e\u7ec6\u5206\u65e0\u5173\u3002\u5982\u679c\u8fd9\u662f\u60a8\u60f3\u8981\u7684\u6548\u679c\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u50cf\u7d20\u5149\u7167\u7740\u8272\u5668\u6216\u589e\u52a0\u5bf9\u8c61\u7684\u7ec6\u5206\u3002"),(0,a.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u6b64\u7740\u8272\u5668\u7684\u6e32\u67d3\u6210\u672c\u4f4e\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/built-in-shader-guide/shader-performance"},"\u7740\u8272\u5668\u6027\u80fd\u9875\u9762"),"\u3002"))}m.isMDXComponent=!0}}]);