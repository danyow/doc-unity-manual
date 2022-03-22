"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60321],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),h=a,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92350:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"batch-renderer-group",title:"BatchRendererGroup",slug:"/batch-renderer-group"},p="BatchRendererGroup",s={unversionedId:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group",id:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group",title:"BatchRendererGroup",description:"BatchRendererGroup (BRG) is an API for high-performance custom rendering in projects that use a Scriptable Render Pipeline (SRP) and the SRP Batcher.",source:"@site/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group.md",sourceDirName:"graphics/graphics-performance-profiling/batch-renderer-group",slug:"/batch-renderer-group",permalink:"/docs/batch-renderer-group",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group.md",tags:[],version:"current",frontMatter:{id:"batch-renderer-group",title:"BatchRendererGroup",slug:"/batch-renderer-group"},sidebar:"tutorialSidebar",previous:{title:"Graphics performance and profiling",permalink:"/docs/graphics-performance-profiling"},next:{title:"Creating a renderer with BatchRendererGroup",permalink:"/docs/batch-renderer-group-creating-a-renderer"}},u={},l=[],d={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"batchrenderergroup"},"BatchRendererGroup"),(0,o.kt)("p",null,"BatchRendererGroup (BRG) is an API for high-performance custom rendering in projects that use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/scriptable-render-pipeline"},"Scriptable Render Pipeline")," (SRP) and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/optimizing-draw-calls/srpbatcher"},"SRP Batcher"),"."),(0,o.kt)("p",null,"BRG is the perfect tool to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Render DOTS ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.entities@latest"},"Entities"),". For example, Unity\u2019s ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.rendering.hybrid@latest"},"Hybrid Renderer")," uses BRG to do this."),(0,o.kt)("li",{parentName:"ul"},"Render a large number of environment objects where using individual GameObjects would be too resource-intensive. For example, procedurally-placed plants or rocks."),(0,o.kt)("li",{parentName:"ul"},"Render custom terrain patches. You can use different meshes or materials to display different levels of detail.")),(0,o.kt)("p",null,"The following table lists and describes the topics in this section of the documentation."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Topic")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/batch-renderer-group/batch-renderer-group-how"},"How BatchRendererGroup works")),(0,o.kt)("td",{parentName:"tr",align:null},"Explains how BRG renders to the screen and introduces BRG-specific concepts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/batch-renderer-group/batch-renderer-group-getting-started"},"Getting started with BatchRendererGroup")),(0,o.kt)("td",{parentName:"tr",align:null},"Describes the requirements and compatibility of BRG and explains how to set up your project to support BRG.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/batch-renderer-group-creating-a-renderer"},"Creating a renderer with BatchRendererGroup")),(0,o.kt)("td",{parentName:"tr",align:null},"A section that explains how to use BRG to create a simple custom renderer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/batch-renderer-group/dots-instancing-shaders"},"DOTS Instancing shaders")),(0,o.kt)("td",{parentName:"tr",align:null},"Describes the new data-oriented way shaders can load instance data.")))))}h.isMDXComponent=!0}}]);