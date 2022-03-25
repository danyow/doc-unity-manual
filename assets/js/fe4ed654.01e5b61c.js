"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9593],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return s}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(t),s=a,h=g["".concat(d,".").concat(s)]||g[s]||l[s]||o;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},64367:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"batch-renderer-group-creating-a-renderer",title:"Creating a renderer with BatchRendererGroup",slug:"/batch-renderer-group-creating-a-renderer"},d="Creating a renderer with BatchRendererGroup",p={unversionedId:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-a-renderer",id:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-a-renderer",title:"Creating a renderer with BatchRendererGroup",description:"This section of the documentation explains how to use BatchRendererGroup (BRG) to create a renderer.",source:"@site/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-a-renderer.md",sourceDirName:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer",slug:"/batch-renderer-group-creating-a-renderer",permalink:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-a-renderer.md",tags:[],version:"current",frontMatter:{id:"batch-renderer-group-creating-a-renderer",title:"Creating a renderer with BatchRendererGroup",slug:"/batch-renderer-group-creating-a-renderer"},sidebar:"tutorialSidebar",previous:{title:"BatchRendererGroup",permalink:"/doc-unity-manual/docs/batch-renderer-group"},next:{title:"Creating batches",permalink:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches"}},u={},l=[],g={toc:l};function s(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-renderer-with-batchrenderergroup"},"Creating a renderer with BatchRendererGroup"),(0,o.kt)("p",null,"This section of the documentation explains how to use BatchRendererGroup (BRG) to create a renderer."),(0,o.kt)("p",null,"The following table lists and describes the topics in this section of the documentation."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Topic")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing"},"Initializing a BachRendererGroup object")),(0,o.kt)("td",{parentName:"tr",align:null},"Explains how to initialize a BatchRendererGroup object with a minimal OnPerformCulling callback.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-registering-meshes-and-materials"},"Registering meshes and materials")),(0,o.kt)("td",{parentName:"tr",align:null},"Explains how to register meshes and materials so you can use them in a renderer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches"},"Creating batches")),(0,o.kt)("td",{parentName:"tr",align:null},"Explains how to create batches of instance data that describe what to render.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-draw-commands"},"Creating draw commands")),(0,o.kt)("td",{parentName:"tr",align:null},"Explains how to create draw commands and complete your simple renderer.")))))}s.isMDXComponent=!0}}]);