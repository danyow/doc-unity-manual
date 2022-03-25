"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64508],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=s(n),p=l,h=g["".concat(u,".").concat(p)]||g[p]||c[p]||r;return n?i.createElement(h,a(a({ref:t},m),{},{components:n})):i.createElement(h,a({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44151:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var i=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],o={id:"LODRealtimeGI",title:"LOD and Enlighten Realtime Global Illumination",slug:"/realtime-gi-using-enlighten/lodrealtime-gi"},u="LOD and Enlighten Realtime Global Illumination",s={unversionedId:"graphics/lighting-overview/realtime-gi-using-enlighten/LODRealtimeGI",id:"graphics/lighting-overview/realtime-gi-using-enlighten/LODRealtimeGI",title:"LOD and Enlighten Realtime Global Illumination",description:"Objects with  Receive Global Illumination  set to  Lightmaps  have a lighting solution with lightmaps for baked direct and indirect lighting, and lightmaps for Enlighten Realtime Global Illumination. For more information about  Receive Global Illumination , see the Mesh Renderer settings and the script reference for ReceiveGI.",source:"@site/docs/graphics/lighting-overview/realtime-gi-using-enlighten/lodrealtime-gi.md",sourceDirName:"graphics/lighting-overview/realtime-gi-using-enlighten",slug:"/realtime-gi-using-enlighten/lodrealtime-gi",permalink:"/doc-unity-manual/docs/realtime-gi-using-enlighten/lodrealtime-gi",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/realtime-gi-using-enlighten/lodrealtime-gi.md",tags:[],version:"current",frontMatter:{id:"LODRealtimeGI",title:"LOD and Enlighten Realtime Global Illumination",slug:"/realtime-gi-using-enlighten/lodrealtime-gi"},sidebar:"tutorialSidebar",previous:{title:"Realtime Global Illumination using Enlighten",permalink:"/doc-unity-manual/docs/realtime-gi-using-enlighten"},next:{title:"\u53cd\u5c04\u63a2\u9488",permalink:"/doc-unity-manual/docs/reflection-probes"}},m={},c=[],g={toc:c};function p(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lod-and-enlighten-realtime-global-illumination"},"LOD and Enlighten Realtime Global Illumination"),(0,r.kt)("p",null,"Objects with  ",(0,r.kt)("strong",{parentName:"p"},"Receive Global Illumination"),"  set to  ",(0,r.kt)("strong",{parentName:"p"},"Lightmaps"),"  have a lighting solution with lightmaps for baked direct and ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lightmappers/lightmapping-directional"},"indirect lighting"),", and lightmaps for Enlighten Realtime Global Illumination. For more information about  ",(0,r.kt)("strong",{parentName:"p"},"Receive Global Illumination")," , see the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"Mesh Renderer settings")," and the script reference for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ReceiveGI.html"},"ReceiveGI"),"."),(0,r.kt)("p",null,"When you use Unity\u2019s LOD system in a Scene where you have enabled Baked Global Illumination and Enlighten Realtime Global Illumination, the system lights the most detailed model out of the LOD Group as if it has the  ",(0,r.kt)("strong",{parentName:"p"},"Contribute Global Illumination"),'  setting enabled and isn\u2019t part of the LOD group."'),(0,r.kt)("p",null,"Enlighten Baked Global Illumination can only compute direct lighting for lower LODs and the LOD system must rely on ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/light-probes"},"Light Probes")," to sample indirect lighting."),(0,r.kt)("p",null,"To enable the Editor to produce lightmaps with Enlighten Baked Global Illumination or Enlighten Realtime Global Illumination, select the GameObject you want to affect, view its Renderer component in the Inspector window, and ensure that  ",(0,r.kt)("strong",{parentName:"p"},"Contribute Global Illumination"),"  is enabled."),(0,r.kt)("p",null,"For lower LODs in a LOD Group, you can only combine baked lightmaps with Enlighten Realtime Global Illumination from ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/light-probes"},"Light Probes")," or ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/light-probes/class-light-probe-proxy-volume"},"Light Probe Proxy Volumes"),", which you must place around the LOD Group."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LODRealtimeGI.gif",alt:"An animation showing how real-time ambient color affects the Enlighten Realtime Global Illumination used by lower LODs"})),(0,r.kt)("p",null,"An animation showing how real-time ambient color affects the Enlighten Realtime Global Illumination used by lower LODs"))}p.isMDXComponent=!0}}]);