"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11400],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),h=a,g=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19740:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"SL-SurfaceShaderLighting",title:"\u8868\u9762\u7740\u8272\u5668\u4e2d\u7684\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b",slug:"/sl-surface-shaders/sl-surface-shader-lighting"},u="\u8868\u9762\u7740\u8272\u5668\u4e2d\u7684\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b",o={unversionedId:"graphics/shaders/shader-writing/sl-surface-shaders/SL-SurfaceShaderLighting",id:"graphics/shaders/shader-writing/sl-surface-shaders/SL-SurfaceShaderLighting",title:"\u8868\u9762\u7740\u8272\u5668\u4e2d\u7684\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b",description:"\u5728\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\uff0c\u5f53\u7f16\u5199\u8868\u9762\u7740\u8272\u5668\u65f6\uff0c\u5c06\u63cf\u8ff0\u8868\u9762\u7684\u5c5e\u6027\uff08\u5982\u53cd\u7167\u7387\u989c\u8272\u548c\u6cd5\u7ebf\uff09\uff0c\u800c\u7531 \u5149\u7167\u6a21\u578b \u8ba1\u7b97\u5149\u7167\u4ea4\u4e92\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shader-lighting.md",sourceDirName:"graphics/shaders/shader-writing/sl-surface-shaders",slug:"/sl-surface-shaders/sl-surface-shader-lighting",permalink:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-lighting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shader-lighting.md",tags:[],version:"current",frontMatter:{id:"SL-SurfaceShaderLighting",title:"\u8868\u9762\u7740\u8272\u5668\u4e2d\u7684\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b",slug:"/sl-surface-shaders/sl-surface-shader-lighting"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u9762\u7740\u8272\u5668\u5149\u7167\u793a\u4f8b",permalink:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-lighting-examples"},next:{title:"\u652f\u6301 DX11/OpenGL Core \u66f2\u9762\u7ec6\u5206\u7684\u8868\u9762\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-tessellation"}},p={},c=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u58f0\u660e\u5149\u7167\u6a21\u578b",id:"\u58f0\u660e\u5149\u7167\u6a21\u578b",level:2},{value:"\u81ea\u5b9a\u4e49 GI",id:"\u81ea\u5b9a\u4e49-gi",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8868\u9762\u7740\u8272\u5668\u4e2d\u7684\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b"},"\u8868\u9762\u7740\u8272\u5668\u4e2d\u7684\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b"),(0,i.kt)("p",null,"\u5728\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\uff0c\u5f53\u7f16\u5199",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders"},"\u8868\u9762\u7740\u8272\u5668"),"\u65f6\uff0c\u5c06\u63cf\u8ff0\u8868\u9762\u7684\u5c5e\u6027\uff08\u5982\u53cd\u7167\u7387\u989c\u8272\u548c\u6cd5\u7ebf\uff09\uff0c\u800c\u7531 ",(0,i.kt)("strong",{parentName:"p"},"\u5149\u7167\u6a21\u578b")," \u8ba1\u7b97\u5149\u7167\u4ea4\u4e92\u3002"),(0,i.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u8868\u9762\u7740\u8272\u5668")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u6709\u5173\u5728 URP \u4e2d\u521b\u5efa Shader \u5bf9\u8c61\u7684\u7b80\u5316\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders/shader-graph"},"Shader Graph"),"\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u6709\u5173\u5728 HDRP \u4e2d\u521b\u5efa Shader \u5bf9\u8c61\u7684\u7b80\u5316\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders/shader-graph"},"Shader Graph"),"\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u6709\u4e24\u4e2a\u5185\u7f6e\u5149\u7167\u6a21\u578b\uff0c\u5206\u522b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Lambert")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"BlinnPhong"),"\uff0c\u524d\u8005\u7528\u4e8e\u6f2b\u5c04\u5149\u7167\uff0c\u540e\u8005\u7528\u4e8e\u955c\u9762\u53cd\u5c04\u5149\u7167\u3002Unity \u4e2d\u7684 ",(0,i.kt)("em",{parentName:"p"},"Lighting.cginc")," \u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49\u8fd9\u4e9b\u6a21\u578b\uff08Windows\uff1a",(0,i.kt)("em",{parentName:"p"},"<","unity \u5b89\u88c5\u8def\u5f84",">","/Data/CGIncludes/Lighting.cginc","_","\uff1bmacOS\uff1a"),"/Applications/Unity/Unity.app/Contents/CGIncludes/Lighting.cginc","_","\uff09\u3002"),(0,i.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b\u3002\u4e3a\u6b64\uff0c\u53ef\u4f7f\u7528\u8868\u9762\u7740\u8272\u5668\u3002\u5149\u7167\u6a21\u578b\u5b9e\u9645\u4e0a\u5c31\u662f\u82e5\u5e72\u7b26\u5408\u67d0\u4e9b\u60ef\u4f8b\u7684 Cg/HLSL \u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"\u58f0\u660e\u5149\u7167\u6a21\u578b"},"\u58f0\u660e\u5149\u7167\u6a21\u578b"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5149\u7167\u6a21\u578b\u4e2d\u5305\u542b\u591a\u4e2a\u540d\u79f0\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lighting")," \u5f00\u5934\u7684\u5e38\u89c4\u51fd\u6570\u3002\u60a8\u53ef\u4ee5\u5728\u7740\u8272\u5668\u6587\u4ef6\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u58f0\u660e\u8fd9\u4e9b\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4e2d\u4e00\u4e2a\u5305\u542b\u7684\u6587\u4ef6\u4e2d\u58f0\u660e\u3002\u8fd9\u4e9b\u51fd\u6570\u662f\uff1a"),(0,i.kt)("p",null,"1.",(0,i.kt)("inlineCode",{parentName:"p"},"half4 Lighting&lt;Name&gt; (SurfaceOutput s, UnityGI gi);")," \u5728","_","\u4e0d\u4f9d\u8d56\u4e8e","_","\u89c6\u56fe\u65b9\u5411\u7684\u5149\u7167\u6a21\u578b\u7684\u524d\u5411\u6e32\u67d3\u8def\u5f84\u4e2d\u4f7f\u7528\u6b64\u51fd\u6570\u3002"),(0,i.kt)("p",null,"1.",(0,i.kt)("inlineCode",{parentName:"p"},"half4 Lighting&lt;Name&gt; (SurfaceOutput s, half3 viewDir, UnityGI gi);")," \u5728","_","\u4f9d\u8d56\u4e8e","_","\u89c6\u56fe\u65b9\u5411\u7684\u5149\u7167\u6a21\u578b\u7684\u524d\u5411\u6e32\u67d3\u8def\u5f84\u4e2d\u4f7f\u7528\u6b64\u51fd\u6570\u3002"),(0,i.kt)("p",null,"1.",(0,i.kt)("inlineCode",{parentName:"p"},"half4 Lighting&lt;Name&gt;_Deferred (SurfaceOutput s, UnityGI gi, out half4 outDiffuseOcclusion, out half4 outSpecSmoothness, out half4 outNormal);")," \u5728\u5ef6\u8fdf\u5149\u7167\u8def\u5f84\u4e2d\u4f7f\u7528\u6b64\u51fd\u6570\u3002"),(0,i.kt)("p",null,"1.",(0,i.kt)("inlineCode",{parentName:"p"},"half4 Lighting&lt;Name&gt;_PrePass (SurfaceOutput s, half4 light);")," \u5728\u5149\u7167\u9884\u901a\u9053\uff08\u65e7\u7248\u5ef6\u8fdf\uff09\u5149\u7167\u8def\u5f84\u4e2d\u4f7f\u7528\u6b64\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u60a8\u65e0\u9700\u58f0\u660e\u6240\u6709\u51fd\u6570\u3002\u5149\u7167\u6a21\u578b\u4e0d\u4e00\u5b9a\u4f1a\u4f7f\u7528\u89c6\u56fe\u65b9\u5411\u3002\u540c\u6837\uff0c\u5982\u679c\u4ec5\u5728\u524d\u5411\u6e32\u67d3\u4e2d\u4f7f\u7528\u5149\u7167\u6a21\u578b\uff0c\u8bf7\u52ff\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"_Deferred")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"_Prepass")," \u51fd\u6570\u3002\u8fd9\u786e\u4fdd\u4e86\u4f7f\u7528\u89c6\u56fe\u65b9\u5411\u7684\u7740\u8272\u5668\u4ec5\u7f16\u8bd1\u5230\u524d\u5411\u6e32\u67d3\u3002"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49-gi"},"\u81ea\u5b9a\u4e49 GI"),(0,i.kt)("p",null,"\u58f0\u660e\u4ee5\u4e0b\u51fd\u6570\u53ef\u81ea\u5b9a\u4e49\u5149\u7167\u8d34\u56fe\u6570\u636e\u548c\u63a2\u9488\u7684\u89e3\u7801\uff1a"),(0,i.kt)("p",null,"1.",(0,i.kt)("inlineCode",{parentName:"p"},"half4 Lighting&lt;Name&gt;_GI (SurfaceOutput s, UnityGIInput data, inout UnityGI gi);")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8981\u5bf9 Unity \u6807\u51c6\u5149\u7167\u8d34\u56fe\u548c SH \u63a2\u9488\u8fdb\u884c\u89e3\u7801\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"DecodeLightmap")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"ShadeSHPerPixel"),"\uff1b\u8fd9\u4e9b\u51fd\u6570\u4f4d\u4e8e Unity \u5185\u90e8 ",(0,i.kt)("em",{parentName:"p"},"UnityGlobalIllumination.cginc")," \u6587\u4ef6\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityGI_Base")," \u5185\uff08Windows\uff1a",(0,i.kt)("em",{parentName:"p"},"<","unity \u5b89\u88c5\u8def\u5f84",">","/Data/CGIncludes/UnityGlobalIllumination.cginc","_","\uff1bmacOS\uff1a"),"/Applications/Unity/Unity.app/Contents/CGIncludes/UnityGlobalIllumination.cginc**\uff09\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u8bf7\u53c2\u9605\u6709\u5173",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-lighting-examples"},"\u8868\u9762\u7740\u8272\u5668\u5149\u7167\u793a\u4f8b"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"))}h.isMDXComponent=!0}}]);