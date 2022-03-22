"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6051],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44546:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"SL-GLSLShaderPrograms",title:"Unity \u4e2d\u7684 GLSL",slug:"/shader-writing/sl-glslshader-programs"},s="Unity \u4e2d\u7684 GLSL",p={unversionedId:"graphics/shaders/shader-writing/SL-GLSLShaderPrograms",id:"graphics/shaders/shader-writing/SL-GLSLShaderPrograms",title:"Unity \u4e2d\u7684 GLSL",description:"\u9664\u4e86\u7f16\u5199 HLSL \u7740\u8272\u5668\u7a0b\u5e8f\uff0c\u8fd8\u53ef\u4ee5\u5728 Unity \u4e2d\u7f16\u5199\u539f\u59cb OpenGL \u7740\u8272\u8bed\u8a00 (GLSL) \u7740\u8272\u5668\u7a0b\u5e8f\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-glslshader-programs.md",sourceDirName:"graphics/shaders/shader-writing",slug:"/shader-writing/sl-glslshader-programs",permalink:"/docs/shader-writing/sl-glslshader-programs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-glslshader-programs.md",tags:[],version:"current",frontMatter:{id:"SL-GLSLShaderPrograms",title:"Unity \u4e2d\u7684 GLSL",slug:"/shader-writing/sl-glslshader-programs"},sidebar:"tutorialSidebar",previous:{title:"\u7740\u8272\u5668\u793a\u4f8b",permalink:"/docs/shader-writing/shader-writing-vertex-fragment"},next:{title:"\u4e3a\u4e0d\u540c\u7684\u56fe\u5f62 API \u7f16\u5199\u7740\u8272\u5668",permalink:"/docs/shader-writing/sl-platform-differences"}},u={},c=[{value:"GLSL \u4ee3\u7801\u7247\u6bb5",id:"glsl-\u4ee3\u7801\u7247\u6bb5",level:2},{value:"\u5916\u90e8 OES \u7eb9\u7406",id:"\u5916\u90e8-oes-\u7eb9\u7406",level:3}],d={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unity-\u4e2d\u7684-glsl"},"Unity \u4e2d\u7684 GLSL"),(0,i.kt)("p",null,"\u9664\u4e86\u7f16\u5199 ",(0,i.kt)("a",{parentName:"p",href:"/docs/sl-shader-programs"},"HLSL \u7740\u8272\u5668\u7a0b\u5e8f"),"\uff0c\u8fd8\u53ef\u4ee5\u5728 Unity \u4e2d\u7f16\u5199\u539f\u59cb OpenGL \u7740\u8272\u8bed\u8a00 (GLSL) \u7740\u8272\u5668\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u5e38\u89c4\u5de5\u4f5c\u6d41\u7a0b\u4e2d\uff0c\u4e0d\u5efa\u8bae\u6216\u4e0d\u9700\u8981\u8fd9\u6837\u505a\uff1bUnity \u4f1a\u5728\u9700\u8981\u65f6\u5c06\u60a8\u7684 HLSL \u4ea4\u53c9\u7f16\u8bd1\u4e3a\u4f18\u5316\u7684 GLSL\u3002\u4ec5\u5efa\u8bae\u5c06\u539f\u59cb GLSL \u7528\u4e8e\u6d4b\u8bd5\u6216\u652f\u6301\u4f7f\u7528 GLSL \u7684\u5e73\u53f0\u4e0a\u7684\u9879\u76ee\u3002"),(0,i.kt)("h2",{id:"glsl-\u4ee3\u7801\u7247\u6bb5"},"GLSL \u4ee3\u7801\u7247\u6bb5"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"GLSLPROGRAM")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDGLSL")," \u5173\u952e\u5b57\u4e4b\u95f4\u7f16\u5199 GLSL \u7a0b\u5e8f\u4ee3\u7801\u7247\u6bb5\u3002"),(0,i.kt)("p",null,"\u5728 GLSL \u4e2d\uff0c\u6240\u6709\u7740\u8272\u5668\u51fd\u6570\u5165\u53e3\u70b9\u90fd\u5fc5\u987b\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"main()"),"\u3002Unity \u52a0\u8f7d GLSL \u7740\u8272\u5668\u65f6\uff0c\u4f1a\u4e3a\u9876\u70b9\u7a0b\u5e8f\u52a0\u8f7d\u4e00\u6b21\u6e90\u4ee3\u7801\uff08\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"VERTEX")," \u9884\u5904\u7406\u5668\u5b9a\u4e49\uff09\uff0c\u7136\u540e\u4e3a\u7247\u5143\u7a0b\u5e8f\u518d\u52a0\u8f7d\u4e00\u6b21\uff08\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"FRAGMENT")," \u9884\u5904\u7406\u5668\u5b9a\u4e49\uff09\u3002\u6240\u4ee5\uff0c\u5728 GLSL \u4ee3\u7801\u7247\u6bb5\u4e2d\u5c06\u9876\u70b9\u7a0b\u5e8f\u548c\u7247\u5143\u7a0b\u5e8f\u90e8\u5206\u5206\u5f00\u7684\u65b9\u6cd5\u662f\u5728\u5b83\u4eec\u5468\u56f4\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"#ifdef VERTEX ..#endif")," \u548c #ifdef FRAGMENT ..#endif","`","\u3002\u6bcf\u4e2a GLSL \u4ee3\u7801\u7247\u6bb5\u5fc5\u987b\u540c\u65f6\u5305\u542b\u9876\u70b9\u7a0b\u5e8f\u548c\u7247\u5143\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"\u6807\u51c6 include \u6587\u4ef6\u4e0e Cg/HLSL \u7740\u8272\u5668\u7684 include \u6587\u4ef6\u5339\u914d\uff1b\u53ea\u662f\u5b83\u4eec\u7684\u6269\u5c55\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},".glslinc"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UnityCG.glslinc\n")),(0,i.kt)("p",null,"\u9876\u70b9\u7740\u8272\u5668\u8f93\u5165\u6765\u81ea\u9884\u5b9a\u4e49\u7684 GLSL \u53d8\u91cf\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"gl_Vertex"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"gl_MultiTexCoord0")," \u7b49\u7b49\uff09\u6216\u8005\u662f\u7528\u6237\u5b9a\u4e49\u7684\u5c5e\u6027\u3002\u901a\u5e38\uff0c\u53ea\u6709\u5207\u7ebf\u77e2\u91cf\u624d\u9700\u8981\u7528\u6237\u5b9a\u4e49\u7684\u5c5e\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"attribute vec4 Tangent;\n")),(0,i.kt)("p",null,"\u4ece\u9876\u70b9\u7a0b\u5e8f\u5230\u7247\u5143\u7a0b\u5e8f\u7684\u6570\u636e\u662f\u901a\u8fc7 ",(0,i.kt)("em",{parentName:"p"},"varying")," \u53d8\u91cf\u4f20\u9012\u7684\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"varying vec3 lightDir; // \u9876\u70b9\u7740\u8272\u5668\u8d1f\u8d23\u8ba1\u7b97\uff0c\u7531\u7247\u5143\u7740\u8272\u5668\u4f7f\u7528\n")),(0,i.kt)("h3",{id:"\u5916\u90e8-oes-\u7eb9\u7406"},"\u5916\u90e8 OES \u7eb9\u7406"),(0,i.kt)("p",null,"Unity \u5728\u7740\u8272\u5668\u7f16\u8bd1\u671f\u95f4\u4f1a\u8fdb\u884c\u67d0\u4e9b\u9884\u5904\u7406\uff1b\u4f8b\u5982\uff0c\u6839\u636e\u56fe\u5f62 API\uff08GlES3 \u6216 GLCore\uff09\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"texture2D/texture2DProj")," \u51fd\u6570\u53ef\u80fd\u4f1a\u66ff\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"texture/textureProj"),"\u3002\u4e00\u4e9b\u6269\u5c55\u4e0d\u652f\u6301\u65b0\u7ea6\u5b9a\uff0c\u6700\u660e\u663e\u7684\u5c31\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://www.khronos.org/registry/gles/extensions/OES/OES_EGL_image_external.txt"},(0,i.kt)("inlineCode",{parentName:"a"},"GL_OES_EGL_image_external")),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u5728 GLSL \u7740\u8272\u5668\u4e2d\u91c7\u6837\u5916\u90e8\u7eb9\u7406\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"textureExternal/textureProjExternal")," \u8c03\u7528\uff0c\u800c\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"texture2D/texture2DProj"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gl_FragData[0] = textureExternal(_MainTex, uv);\n")))}g.isMDXComponent=!0}}]);