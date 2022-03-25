"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3875],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return t?n.createElement(h,s(s({ref:r},d),{},{components:t})):n.createElement(h,s({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40711:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={id:"shader-preprocessor-directives",title:"Preprocessor directives in HLSL",slug:"/shader-preprocessor-directives"},c="Preprocessor directives in HLSL",p={unversionedId:"graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives",id:"graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives",title:"Preprocessor directives in HLSL",description:"Internally, shader compilation has multiple stages. The first stage is  preprocessing , where a program called the preprocessor prepares the code for compilation.  Preprocessor directives  are instructions for the preprocessor.",source:"@site/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives.md",sourceDirName:"graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives",slug:"/shader-preprocessor-directives",permalink:"/doc-unity-manual/docs/shader-preprocessor-directives",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-shader-programs/shader-preprocessor-directives/shader-preprocessor-directives.md",tags:[],version:"current",frontMatter:{id:"shader-preprocessor-directives",title:"Preprocessor directives in HLSL",slug:"/shader-preprocessor-directives"},sidebar:"tutorialSidebar",previous:{title:"Unity \u4e2d\u7684 HLSL",permalink:"/doc-unity-manual/docs/sl-shader-programs"},next:{title:"include and include_with_pragmas directives in HLSL",permalink:"/doc-unity-manual/docs/shader-preprocessor-directives/shader-include-directives"}},d={},l=[],u={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preprocessor-directives-in-hlsl"},"Preprocessor directives in HLSL"),(0,i.kt)("p",null,"Internally, ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-compilation"},"shader compilation")," has multiple stages. The first stage is  ",(0,i.kt)("strong",{parentName:"p"},"preprocessing")," , where a program called the preprocessor prepares the code for compilation.  ",(0,i.kt)("strong",{parentName:"p"},"Preprocessor directives"),"  are instructions for the preprocessor."),(0,i.kt)("p",null,"This section of the manual contains information on Unity-specific ways of working with HLSL preprocessor directives, and HLSL preprocessor directives that are unique to Unity. It does not contain exhaustive documentation on all the preprocessor directives that HLSL supports, or general information on working with preprocessor directives in HLSL. For that information, see the HLSL documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-preprocessor"},"Preprocessor directives (HLSL)"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-preprocessor-directives/shader-include-directives"},"include and include","_","with","_","pragmas directives in HLSL")),(0,i.kt)("td",{parentName:"tr",align:null},"Working with ",(0,i.kt)("inlineCode",{parentName:"td"},"#include")," and the Unity-specific ",(0,i.kt)("inlineCode",{parentName:"td"},"#include_with_pragmas")," directives in HLSL in Unity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-pragma-directives"},"pragma directives in HLSL")),(0,i.kt)("td",{parentName:"tr",align:null},"Working with ",(0,i.kt)("inlineCode",{parentName:"td"},"#pragma")," directives in HLSL in Unity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-shader-compile-targets"},"Targeting shader models and GPU features in HLSL")),(0,i.kt)("td",{parentName:"tr",align:null},"Using ",(0,i.kt)("inlineCode",{parentName:"td"},"#pragma")," directives to indicate that your shader requires certain GPU features.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-shader-compilation-apis"},"Targeting graphics APIs and platforms in HLSL")),(0,i.kt)("td",{parentName:"tr",align:null},"Using ",(0,i.kt)("inlineCode",{parentName:"td"},"#pragma")," directives to target specific graphics API and platforms.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shader-preprocessor-directives/sl-multiple-program-variants"},"Declaring and using shader keywords in HLSL")),(0,i.kt)("td",{parentName:"tr",align:null},"Using ",(0,i.kt)("inlineCode",{parentName:"td"},"#pragma")," directives to declare shader keywords and ",(0,i.kt)("inlineCode",{parentName:"td"},"#if")," directives to indicate that code depends on the state of shader keywords.")))))}m.isMDXComponent=!0}}]);