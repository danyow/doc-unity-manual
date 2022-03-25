"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42381],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=m(n),h=o,d=l["".concat(p,".").concat(h)]||l[h]||u[h]||a;return n?r.createElement(d,s(s({ref:t},i),{},{components:n})):r.createElement(d,s({ref:t},i))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},82922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={id:"comp-MeshGroup",title:"Mesh components",slug:"/comp-mesh-group"},p="Mesh components",m={unversionedId:"graphics/mesh/comp-mesh-group/comp-MeshGroup",id:"graphics/mesh/comp-mesh-group/comp-MeshGroup",title:"Mesh components",description:"This section contains information on components for working with meshes.",source:"@site/docs/graphics/mesh/comp-mesh-group/comp-mesh-group.md",sourceDirName:"graphics/mesh/comp-mesh-group",slug:"/comp-mesh-group",permalink:"/doc-unity-manual/docs/comp-mesh-group",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/mesh/comp-mesh-group/comp-mesh-group.md",tags:[],version:"current",frontMatter:{id:"comp-MeshGroup",title:"Mesh components",slug:"/comp-mesh-group"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u683c\u8d44\u6e90",permalink:"/doc-unity-manual/docs/mesh/class-mesh"},next:{title:"Mesh Filter \u7ec4\u4ef6",permalink:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-filter"}},i={},u=[],l={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mesh-components"},"Mesh components"),(0,a.kt)("p",null,"This section contains information on components for working with meshes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9875\u9762")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"Mesh Renderer component")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about the Mesh Renderer component, which renders regular meshes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/comp-mesh-group/class-skinned-mesh-renderer"},"Skinned Mesh Renderer component")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about the Skinned Mesh Renderer component, which renders deformable meshes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-filter"},"Mesh Filter component")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about the Mesh Filter component, which provides a reference to a mesh asset.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/comp-mesh-group/class-text-mesh"},"Text Mesh component (legacy)")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about the legacy Text Mesh component, which generates meshes to display strings of text.")))))}h.isMDXComponent=!0}}]);