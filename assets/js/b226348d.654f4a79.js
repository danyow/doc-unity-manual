"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57279],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||l;return a?r.createElement(h,i(i({ref:e},m),{},{components:a})):r.createElement(h,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38647:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"PartSysRendererModule",title:"Renderer \u6a21\u5757",slug:"/particle-system-modules/part-sys-renderer-module"},s="Renderer \u6a21\u5757",d={unversionedId:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/PartSysRendererModule",id:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/PartSysRendererModule",title:"Renderer \u6a21\u5757",description:"Renderer \u6a21\u5757\u7684\u8bbe\u7f6e\u51b3\u5b9a\u4e86\u7c92\u5b50\u7684\u56fe\u50cf\u6216\u7f51\u683c\u5982\u4f55\u88ab\u5176\u4ed6\u7c92\u5b50\u53d8\u6362\u3001\u7740\u8272\u548c\u8fc7\u5ea6\u7ed8\u5236\u3002",source:"@site/docs/graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/part-sys-renderer-module.md",sourceDirName:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules",slug:"/particle-system-modules/part-sys-renderer-module",permalink:"/docs/particle-system-modules/part-sys-renderer-module",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/part-sys-renderer-module.md",tags:[],version:"current",frontMatter:{id:"PartSysRendererModule",title:"Renderer \u6a21\u5757",slug:"/particle-system-modules/part-sys-renderer-module"},sidebar:"tutorialSidebar",previous:{title:"Noise \u6a21\u5757",permalink:"/docs/particle-system-modules/part-sys-noise-module"},next:{title:"Rotation by Speed module",permalink:"/docs/particle-system-modules/part-sys-rot-by-speed-module"}},m={},p=[{value:"Using the Renderer module",id:"using-the-renderer-module",level:2},{value:"API",id:"api",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"Details",id:"details",level:2},{value:"Render Mode",id:"render-mode",level:3},{value:"Billboard render modes",id:"billboard-render-modes",level:4},{value:"Mesh Distribution: Non-uniform Random",id:"mesh-distribution-non-uniform-random",level:3}],c={toc:p};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"renderer-\u6a21\u5757"},"Renderer \u6a21\u5757"),(0,l.kt)("p",null,"Renderer \u6a21\u5757\u7684\u8bbe\u7f6e\u51b3\u5b9a\u4e86\u7c92\u5b50\u7684\u56fe\u50cf\u6216",(0,l.kt)("a",{parentName:"p",href:"/docs/mesh/class-mesh"},"\u7f51\u683c"),"\u5982\u4f55\u88ab\u5176\u4ed6\u7c92\u5b50\u53d8\u6362\u3001\u7740\u8272\u548c\u8fc7\u5ea6\u7ed8\u5236\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/renderer-module-view.png",alt:"The Renderer module view"})),(0,l.kt)("p",null,"The Renderer module view"),(0,l.kt)("h2",{id:"using-the-renderer-module"},"Using the Renderer module"),(0,l.kt)("p",null,"This module is part of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/part-sys-reference/class-particle-system"},"Particle System")," component. When you create a new Particle System GameObject, or add a Particle System component to an existing GameObject, Unity adds the Renderer module to the Particle System. Unity enables this module by default."),(0,l.kt)("p",null,"To create a new Particle System, go to  ",(0,l.kt)("strong",{parentName:"p"},"GameObject"),"  ",">","  ",(0,l.kt)("strong",{parentName:"p"},"Effects"),"  and click on the  ",(0,l.kt)("strong",{parentName:"p"},"Particle System"),"  option. Unity then creates a new Particle System GameObject and selects it in the Hierarchy window. In the Inspector window, the Particle System component contains all settings and modules related to the Particle System. Select the Renderer module to display options for this module."),(0,l.kt)("h3",{id:"api"},"API"),(0,l.kt)("p",null,"Because this module is part of the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ParticleSystem.html"},"Particle System")," component, you access it through the ParticleSystem class. For more information on how to access this class and change values at runtime, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ParticleSystemRenderer.html"},"Renderer")," module."),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,"For some properties in this section, you can use different modes to set their value. For information on the modes you can use, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/built-in-particle-system/part-sys-usage#%E9%9A%8F%E6%97%B6%E9%97%B4%E6%8E%A8%E7%A7%BB%E8%80%8C%E5%8F%98%E5%8C%96%E7%9A%84%E5%B1%9E%E6%80%A7"},"Varying properties over time"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Render Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"How Unity produces the rendered image from the graphic image (or Mesh). For more information, see ",(0,l.kt)("a",{parentName:"td",href:"#render-mode"},"Render Mode")," and ",(0,l.kt)("a",{parentName:"td",href:"#billboard-render-modes"},"Billboard render modes"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Billboard")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity renders the particles as billboards and they face the direction you specify in  ",(0,l.kt)("strong",{parentName:"td"},"Render Alignment")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Stretched Billboard")),(0,l.kt)("td",{parentName:"tr",align:null},"The particles face the  ",(0,l.kt)("strong",{parentName:"td"},"Camera"),"  with various possible scaling options applied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Camera Scale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Velocity Scale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Length Scale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Freeform Stretching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Rotate With Stretch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Horizontal Billboard")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u5e73\u9762\u4e0e XZ\u201c\u5730\u677f\u201d\u5e73\u9762\u5e73\u884c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Vertical Billboard")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u5728\u4e16\u754c Y \u8f74\u4e0a\u76f4\u7acb\uff0c\u4f46\u8f6c\u5411\u9762\u5411\u6444\u50cf\u673a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Mesh")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity renders the particle from a 3D Mesh instead of a Billboard. For more information on the specific settings for the Mesh Render mode, see the ",(0,l.kt)("a",{parentName:"td",href:"#details"},"Details")," section below.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Mesh Distribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"-> Uniform Random")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"-> Non-uniform Random")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Mesh Weightings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Unity doesn\u2019t render any particles. This can be useful alongside the ",(0,l.kt)("a",{parentName:"td",href:"/docs/particle-system-modules/part-sys-trails-module"},"Trails")," module, if you want to only render the trails and hide any default particle rendering.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Normal Direction")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies how to calculate lighting for the billboard. A value of 0 means Unity calculates lighting as though the billboard was a sphere. This results in the billboard looking more like a sphere. A value of 1 means Unity calculates lighting for the billboard as a flat quad.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This property is only available when using one of the Billboard rendering modes:  ",(0,l.kt)("strong",{parentName:"td"},"Billboard")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Stretched Billboard")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Horizontal Billboard"),"  or  ",(0,l.kt)("strong",{parentName:"td"},"Vertical Billboard")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Material")),(0,l.kt)("td",{parentName:"tr",align:null},"The material Unity uses to render the particles.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Trail Material")),(0,l.kt)("td",{parentName:"tr",align:null},"The material Unity uses to render particle trails.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This option is only available when the  ",(0,l.kt)("strong",{parentName:"td"},"Trails"),"  module is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sort Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"The order in which Unity draws and overlays particles with a Particle System.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> \u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"When this setting is enabled, Unity doesn\u2019t sort particles.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> By Distance"),(0,l.kt)("td",{parentName:"tr",align:null},"Sorts particles in the system based on distance to the active Camera. Unity renders particles closer to the Camera on top of those that are further away. The order of particles doesn\u2019t change when you rotate the camera with the setting.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Oldest in Front"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity renders particles that have existed the longest at the front of the Particle System.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Youngest in Front"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity renders particles that have existed for the shortest time at the front of the Particle System.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> By Depth"),(0,l.kt)("td",{parentName:"tr",align:null},"Unity renders particles based on their distance from the camera\u2019s near plane. The order of particles can change when you rotate the camera with this setting.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sorting Fudge")),(0,l.kt)("td",{parentName:"tr",align:null},"The bias of the Particle System sort ordering. Lower values increase the relative chance that Unity draws Particle Systems over other transparent GameObjects, including other Particle Systems. This setting only affects Particle Systems as a whole that appear in the scene - it does not perform sorting on individual particles within a system.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Min Particle Size")),(0,l.kt)("td",{parentName:"tr",align:null},"The smallest particle size (regardless of other settings), expressed as a fraction of viewport size.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This property is only available when using one of the Billboard rendering modes:  ",(0,l.kt)("strong",{parentName:"td"},"Billboard")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Stretched Billboard")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Horizontal Billboard"),"  or  ",(0,l.kt)("strong",{parentName:"td"},"Vertical Billboard")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Particle Size")),(0,l.kt)("td",{parentName:"tr",align:null},"The largest particle size (regardless of other settings), expressed as a fraction of viewport size. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"This property is only available when using one of the Billboard rendering modes:  ",(0,l.kt)("strong",{parentName:"td"},"Billboard")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Stretched Billboard")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Horizontal Billboard"),"  or  ",(0,l.kt)("strong",{parentName:"td"},"Vertical Billboard")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Render Alignment")),(0,l.kt)("td",{parentName:"tr",align:null},"This property determines the direction that particle billboards face.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> View"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u9762\u5411\u6444\u50cf\u673a\u5e73\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> World"),(0,l.kt)("td",{parentName:"tr",align:null},"Particles align with the world axes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Local"),(0,l.kt)("td",{parentName:"tr",align:null},"Particles align to the  ",(0,l.kt)("strong",{parentName:"td"},"Transform component"),"  of their GameObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Facing"),(0,l.kt)("td",{parentName:"tr",align:null},"Particles face the direct position defined by the Transform component in the GameObject of the active Camera.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Velocity"),(0,l.kt)("td",{parentName:"tr",align:null},"Particles face in the same direction as their velocity vector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Enable Mesh GPU Instancing")),(0,l.kt)("td",{parentName:"tr",align:null},"This property is only available when using the Mesh render mode.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This property controls whether Unity renders the Particle System using GPU Instancing. This requires the use of a compatible shader. For more information, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/built-in-particle-system/part-sys-instancing"},"Particle Mesh GPU Instancing"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Flip")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u6307\u5b9a\u8f74\u4e0a\u955c\u50cf\u4e00\u5b9a\u6bd4\u4f8b\u7684\u7c92\u5b50\u3002\u8f83\u9ad8\u7684\u503c\u4f1a\u7ffb\u8f6c\u66f4\u591a\u7684\u7c92\u5b50\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Allow Roll")),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether camera-facing particles can rotate around the Z-axis of the camera. Disabling this can be particularly useful for VR applications, where HMD (Head-Mounted Display) roll can cause undesirable particle rotation for Particle Systems.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Pivot")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u65cb\u8f6c\u7c92\u5b50\u7684\u4e2d\u5fc3\u8f74\u5fc3\u70b9\u3002\u6b64\u503c\u662f\u7c92\u5b50\u5927\u5c0f\u7684\u4e58\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Visualize Pivot")),(0,l.kt)("td",{parentName:"tr",align:null},"Preview the particle pivot points in the  ",(0,l.kt)("strong",{parentName:"td"},"Scene"),"  View.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Masking")),(0,l.kt)("td",{parentName:"tr",align:null},"Set how the particles rendered by the Particle System behave when they interact with a  ",(0,l.kt)("strong",{parentName:"td"},"Sprite Mask")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> No Masking"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u7cfb\u7edf\u4e0d\u4e0e\u573a\u666f\u4e2d\u7684\u4efb\u4f55\u7cbe\u7075\u906e\u7f69\u4ea4\u4e92\u3002\u8fd9\u662f\u9ed8\u8ba4\u9009\u9879\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Visible Inside Mask"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u5728\u7531\u7cbe\u7075\u906e\u7f69\u8986\u76d6\u7684\u5730\u65b9\u662f\u53ef\u89c1\u7684\uff0c\u800c\u5728\u906e\u7f69\u5916\u90e8\u4e0d\u53ef\u89c1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Visible Outside Mask"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u5728\u7cbe\u7075\u906e\u7f69\u5916\u90e8\u662f\u53ef\u89c1\u7684\uff0c\u800c\u5728\u906e\u7f69\u5185\u90e8\u4e0d\u53ef\u89c1\u3002\u7cbe\u7075\u906e\u7f69\u4f1a\u9690\u85cf\u5176\u8986\u76d6\u7684\u7c92\u5b50\u90e8\u5206\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Apply Active Color Space")),(0,l.kt)("td",{parentName:"tr",align:null},"When rendering in Linear Color Space, the system converts particle colors from Gamma Space before it uploads them to the GPU.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Custom Vertex Streams")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure which particle properties are available in the Vertex Shader of your Material. For more information, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/built-in-particle-system/part-sys-vertex-streams"},"Particle System vertex streams and Standard Shader support"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Cast Shadows")),(0,l.kt)("td",{parentName:"tr",align:null},"If this property is enabled, the Particle System creates shadows when a shadow-casting Light shines on it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> On"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables shadows for this Particle System.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Off"),(0,l.kt)("td",{parentName:"tr",align:null},"Disables shadows for this Particle System.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Two-Sided"),(0,l.kt)("td",{parentName:"tr",align:null},"Select  ",(0,l.kt)("strong",{parentName:"td"},"Two Sided"),"  to allow shadows to be cast from either side of the Mesh. Backface culling is not taken into account when this property is enabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Shadows Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Select  ",(0,l.kt)("strong",{parentName:"td"},"Shadows Only"),"  to make it so that the shadows are visible, but the Mesh itself is not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shadow Bias")),(0,l.kt)("td",{parentName:"tr",align:null},"Move the shadows along the direction of the light. This removes shadowing artifacts caused by approximating volumes with billboards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Motion Vectors")),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to use motion vectors to track the per-pixel, screen-space motion of this Particle System\u2019s Transform component from one frame to the next.",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Note:"),"  Not all platforms support motion vectors. See ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/SystemInfo-supportsMotionVectors.html"},"SystemInfo.supportsMotionVectors")," for more information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Camera Motion Only"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u4f7f\u7528\u6444\u50cf\u673a\u79fb\u52a8\u6765\u8ddf\u8e2a\u8fd0\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Per Object Motion"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u7279\u5b9a\u901a\u9053\u6765\u8ddf\u8e2a\u6b64\u6e32\u67d3\u5668\u7684\u8fd0\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> Force No Motion"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8ddf\u8e2a\u8fd0\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Receive Shadows")),(0,l.kt)("td",{parentName:"tr",align:null},"Dictates whether particles in this system can receive shadows from other sources. Only opaque materials can receive shadows.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sorting Layer ID")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Renderer\u2019s sorting layer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Order in Layer")),(0,l.kt)("td",{parentName:"tr",align:null},"This Renderer\u2019s order within a sorting layer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Light Probes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u63a2\u9488\u7684\u5149\u7167\u63d2\u503c\u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Reflection Probes")),(0,l.kt)("td",{parentName:"tr",align:null},"If enabled, and if reflection probes are present in the Scene, Unity assigns a reflection texture from the nearest reflection probe to this GameObject and sets the texture as a built-in Shader uniform variable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Anchor Override")),(0,l.kt)("td",{parentName:"tr",align:null},"A Transform that determines the interpolation position when you use the ",(0,l.kt)("a",{parentName:"td",href:"/docs/light-probes"},"Light Probe")," or ",(0,l.kt)("a",{parentName:"td",href:"/docs/reflection-probes"},"Reflection Probe")," systems.")))),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("h3",{id:"render-mode"},"Render Mode"),(0,l.kt)("p",null,"Use  ",(0,l.kt)("strong",{parentName:"p"},"Render Mode"),"  to choose between several 2D Billboard graphic modes and a Mesh mode. 3D Meshes give particles extra authenticity when they represent solid GameObjects, such as rocks, and can also improve the sense of volume for clouds, fireballs and liquids. Meshes must be read/write enabled to work in the Particle System\u2019s  ",(0,l.kt)("strong",{parentName:"p"},"Mesh"),"  Render Mode. When you assign meshes to a Particle System (using the  ",(0,l.kt)("strong",{parentName:"p"},"Meshes"),"  list in the Inspector window), Unity automatically enables the read/write enabled setting for those meshes."),(0,l.kt)("h4",{id:"billboard-render-modes"},"Billboard render modes"),(0,l.kt)("p",null,"When you use 2D billboard graphics, the different render modes can produce a variety of results that make them suitable for specific uses:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Billboard mode is useful for particles that represent volumes that look similar from any direction (such as clouds)."),(0,l.kt)("li",{parentName:"ul"},"Horizontal Billboard mode is useful when the particles cover the ground (such as target indicators and magic spell effects) or when they are flat objects that fly or float parallel to the ground."),(0,l.kt)("li",{parentName:"ul"},"Vertical Billboard mode keeps each particle upright and perpendicular to the XZ plane, but allows it to rotate around its y-axis. This can be helpful when you are using an orthographic Camera and want particle sizes to stay consistent."),(0,l.kt)("li",{parentName:"ul"},"Stretched Billboard mode accentuates the apparent speed of particles in a similar way to the \u201cstretch and squash\u201d techniques used by traditional animators. Note that in Stretched Billboard mode, particles are aligned to face the Camera and also aligned to their velocity. This alignment occurs regardless of the Velocity Scale value - even if Velocity Scale is set to 0, particles in this mode still align to the velocity.")),(0,l.kt)("p",null,"When you use Billboard render modes, you can use the Normal Direction to create spherical shading on the flat rectangular billboards. This can help create the illusion of 3D particles if you use a Material that applies lighting to your particles."),(0,l.kt)("h3",{id:"mesh-distribution-non-uniform-random"},"Mesh Distribution: Non-uniform Random"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/mesh-render-mode.png",alt:"The Renderer module Inspector window, with a Mesh Weightings input highlighted"})),(0,l.kt)("p",null,"The Renderer module Inspector window, with a  ",(0,l.kt)("strong",{parentName:"p"},"Mesh Weightings"),"  input highlighted"),(0,l.kt)("p",null,"When  ",(0,l.kt)("strong",{parentName:"p"},"Mesh Distribution"),"  is set to  ",(0,l.kt)("strong",{parentName:"p"},"Non-uniform Random")," , you can customize how often Unity randomly assigns specific meshes to particles. To do this, you use the  ",(0,l.kt)("strong",{parentName:"p"},"Meshes"),"  list and the  ",(0,l.kt)("strong",{parentName:"p"},"Mesh Weighting"),"  field."),(0,l.kt)("p",null,"In the  ",(0,l.kt)("strong",{parentName:"p"},"Meshes"),"  list, the field on the left contains the mesh you want the Particle System to use, and the field on the right (highlighted in the image above) contains the Mesh Weighting for that mesh. Use the Mesh Weighting field for each mesh to control how often Unity assigns that mesh to a particle, relative to every other mesh. This is set to 1 by default, which results in the likelihood that Unity assigns a mesh being equal."),(0,l.kt)("p",null,"To add a mesh to the Meshes list, select the Add (+) icon. To remove a mesh from the Meshes list, select the mesh, then select the Remove (-) icon."),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018\u201310\u201316 \u9875\u9762\u5df2\u53d1\u5e03"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Unity 2018.1 \u4e2d\u6dfb\u52a0\u4e86 GPU \u5b9e\u4f8b\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.3/Documentation/Manual/30_search.html?q=newin20183"},"2018.3")," \u7248\u4e2d\u4e3a Renderer \u6a21\u5757\u6dfb\u52a0\u4e86\u65b0\u7684\u7c92\u5b50\u7cfb\u7edf\u9009\u9879 NewIn20183")))}u.isMDXComponent=!0}}]);