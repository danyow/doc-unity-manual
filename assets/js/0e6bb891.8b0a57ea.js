"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14263],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(r),g=a,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return r?n.createElement(d,i(i({ref:e},m),{},{components:r})):n.createElement(d,i({ref:e},m))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71116:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"class-StreamingController",title:"Streaming Controller component",slug:"/texture-mipmaps/class-streaming-controller"},s="Streaming Controller component",p={unversionedId:"graphics/textures/texture-mipmaps/class-StreamingController",id:"graphics/textures/texture-mipmaps/class-StreamingController",title:"Streaming Controller component",description:"The Streaming Controller component is part of the Mipmap Streaming system.",source:"@site/docs/graphics/textures/texture-mipmaps/class-streaming-controller.md",sourceDirName:"graphics/textures/texture-mipmaps",slug:"/texture-mipmaps/class-streaming-controller",permalink:"/doc-unity-manual/docs/texture-mipmaps/class-streaming-controller",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/textures/texture-mipmaps/class-streaming-controller.md",tags:[],version:"current",frontMatter:{id:"class-StreamingController",title:"Streaming Controller component",slug:"/texture-mipmaps/class-streaming-controller"},sidebar:"tutorialSidebar",previous:{title:"Mipmaps",permalink:"/doc-unity-manual/docs/texture-mipmaps"},next:{title:"Mipmaps introduction",permalink:"/doc-unity-manual/docs/texture-mipmaps/texture-mipmaps-introduction"}},m={},c=[],u={toc:c};function g(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"streaming-controller-component"},"Streaming Controller component"),(0,o.kt)("p",null,"The Streaming Controller component is part of the ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming"},"Mipmap Streaming")," system."),(0,o.kt)("p",null,"Use the  ",(0,o.kt)("strong",{parentName:"p"},"Streaming Controller"),"  component to enable Mipmap Streaming for a Camera in your scene when the the  ",(0,o.kt)("strong",{parentName:"p"},"Add All Cameras"),"  setting in Quality settings ( ",(0,o.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Quality")," ) is disabled. You can also use it to change the mip bias setting per-Camera."),(0,o.kt)("p",null,"This component takes the location and Camera settings (such as  ",(0,o.kt)("strong",{parentName:"p"},"Field of View")," ) directly from the Camera component."),(0,o.kt)("p",null,"If the Camera is disabled, Unity does not calculate Mipmap Streaming for it, unless the Streaming Controller is enabled and in the preloading state. When the Streaming Controller and associated Camera are enabled, or if the Streaming Controller is in a preloading state, then Unity calculates Mipmap Streaming for this Camera. If the Streaming Controller is disabled, then Unity does not calculate Mipmap Streaming for this Camera."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StreamingController.png",alt:"Mipmap Streaming Controller \u7ec4\u4ef6"})),(0,o.kt)("p",null,"Mipmap Streaming Controller \u7ec4\u4ef6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Mip Map Bias")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this setting to force Unity to load a smaller or larger mipmap level than the one that the Mipmap Streaming system has automatically chosen. Enter a value in this field to set the offset that Unity applies to this mipmap level. Unity adds this offset to all the mipmaps assigned to Textures that are in the Camera\u2019s view. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"For example, if Unity loads a texture at mip 1 and the  ",(0,o.kt)("strong",{parentName:"td"},"Mip Map Bias"),"  is set to 1, this means it will load mip 2 instead.",(0,o.kt)("br",null),(0,o.kt)("br",null),"To control this setting using the API, use ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/StreamingController-streamingMipmapBias.html"},"StreamingController.streamingMipmapBias"),".")))))}g.isMDXComponent=!0}}]);