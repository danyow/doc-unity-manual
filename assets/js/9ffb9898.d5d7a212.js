"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41282],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=m(a),h=r,d=g["".concat(l,".").concat(h)]||g[h]||u[h]||i;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},44510:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"TextureStreaming",title:"The Mipmap Streaming system",slug:"/texture-mipmaps/texture-streaming"},l="The Mipmap Streaming system",m={unversionedId:"graphics/textures/texture-mipmaps/TextureStreaming",id:"graphics/textures/texture-mipmaps/TextureStreaming",title:"The Mipmap Streaming system",description:"The Mipmap Streaming system gives you control over how Unity loads mipmaps.",source:"@site/docs/graphics/textures/texture-mipmaps/texture-streaming.md",sourceDirName:"graphics/textures/texture-mipmaps",slug:"/texture-mipmaps/texture-streaming",permalink:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/textures/texture-mipmaps/texture-streaming.md",tags:[],version:"current",frontMatter:{id:"TextureStreaming",title:"The Mipmap Streaming system",slug:"/texture-mipmaps/texture-streaming"},sidebar:"tutorialSidebar",previous:{title:"The Mipmap Streaming system API",permalink:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming-api"},next:{title:"Visual effects",permalink:"/doc-unity-manual/docs/visual-effects"}},p={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u51c6\u5907\u5f00\u59cb",id:"\u51c6\u5907\u5f00\u59cb",level:2},{value:"Enabling Mipmap Streaming",id:"enabling-mipmap-streaming",level:3},{value:"Making textures work with the Mipmap Streaming system",id:"making-textures-work-with-the-mipmap-streaming-system",level:3},{value:"Streaming Lightmaps",id:"streaming-lightmaps",level:3},{value:"Configuring Mipmap Streaming",id:"configuring-mipmap-streaming",level:2},{value:"Setting the memory budget",id:"setting-the-memory-budget",level:3},{value:"Configuring Cameras",id:"configuring-cameras",level:3},{value:"Configuring Play Mode behavior",id:"configuring-play-mode-behavior",level:3},{value:"\u8c03\u8bd5 Mipmap \u4e32\u6d41",id:"\u8c03\u8bd5-mipmap-\u4e32\u6d41",level:2},{value:"How Unity calculates the required mip level",id:"how-unity-calculates-the-required-mip-level",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2}],g={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-mipmap-streaming-system"},"The Mipmap Streaming system"),(0,i.kt)("p",null,"The Mipmap Streaming system gives you control over how Unity loads ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps"},"mipmaps"),"."),(0,i.kt)("p",null,"\u672c\u9875\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%A6%82%E8%BF%B0"},"\u6982\u8ff0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%87%86%E5%A4%87%E5%BC%80%E5%A7%8B"},"Getting started"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabling-mipmap-streaming"},"Enabling Mipmap Streaming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#making-textures-work-with-the-mipmap-streaming-system"},"Making textures work with the Mipmap Streaming system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#streaming-lightmaps"},"Making lightmaps work with the Mipmap Streaming system")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-mipmap-streaming"},"Configuring Mipmap Streaming"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-the-memory-budget"},"Setting the memory budget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-cameras"},"Configuring Cameras")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-play-mode-behavior"},"Configuring Play Mode behavior")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E8%B0%83%E8%AF%95-mipmap-%E4%B8%B2%E6%B5%81"},"\u8c03\u8bd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-unity-calculates-the-required-mip-level"},"How Unity calculates the required mip level")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E9%99%90%E5%88%B6"},"Limitations"))),(0,i.kt)("p",null,"For information about using the API to extend the functionality of this system, see ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming-api"},"Mipmap Streaming system API"),"."),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"This system forces Unity to only load the mip levels needed to render the current Camera position, instead of loading all of them by default. It trades a small amount of CPU resources to save a potentially large amount of GPU memory."),(0,i.kt)("p",null,"You can set a total memory limit for all textures in an application, and the system automatically reduces mip levels to stay within this budget."),(0,i.kt)("p",null,"In Unity\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/essentials/tutorial-projects/viking-village-29140"},"Viking Village")," demo project, the Mipmap Streaming system saves 25\u201330% of texture memory, depending on Camera location."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TextureStreaming_image_0.png",alt:"TextureStreaming_image_0.png"})),(0,i.kt)("h2",{id:"\u51c6\u5907\u5f00\u59cb"},"\u51c6\u5907\u5f00\u59cb"),(0,i.kt)("h3",{id:"enabling-mipmap-streaming"},"Enabling Mipmap Streaming"),(0,i.kt)("p",null,"To enable Mipmap Streaming, go to Unity\u2019s Quality Settings ( ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Quality")," ) and enable the  ",(0,i.kt)("strong",{parentName:"p"},"Texture Streaming"),"  checkbox."),(0,i.kt)("p",null,"When you enable this setting, the Quality settings window reveals the settings specific to the Mipmap Streaming system. For details on each setting, see documentation on ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-quality-settings"},"Quality Settings"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TextureStreaming_image_1.png",alt:"TextureStreaming_image_1.png"})),(0,i.kt)("p",null,"By default, this enables Mipmap Streaming for all Cameras in your project."),(0,i.kt)("h3",{id:"making-textures-work-with-the-mipmap-streaming-system"},"Making textures work with the Mipmap Streaming system"),(0,i.kt)("p",null,"Now you can set up Mipmap Streaming on individual textures. Select a texture asset, navigate to the Inspector window and view the Texture Import settings. Open the  ",(0,i.kt)("strong",{parentName:"p"},"Advanced"),"  settings, and enable the  ",(0,i.kt)("strong",{parentName:"p"},"Streaming Mip Maps"),"  checkbox."),(0,i.kt)("p",null,"If you\u2019re developing for Android, you also need to open the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/build-settings"},"Build Settings")," and set the  ",(0,i.kt)("strong",{parentName:"p"},"Compression Method"),"  to  ",(0,i.kt)("strong",{parentName:"p"},"LZ4"),"  or  ",(0,i.kt)("strong",{parentName:"p"},"LZ4HC")," . Unity requires one of these compression methods for ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/mesh/loading-textureand-mesh-data"},"asynchronous Texture loading"),", which the Mipmap Streaming system relies upon."),(0,i.kt)("p",null,"Unity loads mips at the highest resolution possible while observing the memory budget. You can configure the priority of a texture with the  ",(0,i.kt)("strong",{parentName:"p"},"Mip Map Priority"),"  setting in the Texture Import Settings."),(0,i.kt)("p",null,"Unity uses this setting to determine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Which textures to prioritize when assigning resources."),(0,i.kt)("li",{parentName:"ul"},"As a mip bias value when choosing a mip level that fits in the memory budget. For example, with a priority of 2, the mipmap streaming system tries to use a mipmap two mip levels higher than Textures with a priority of 0.")),(0,i.kt)("p",null,"Positive numbers give higher priority. Valid values range from \u2013128 to 127."),(0,i.kt)("h3",{id:"streaming-lightmaps"},"Streaming Lightmaps"),(0,i.kt)("p",null,"You can use the Mipmap Streaming system to stream mip levels for lightmaps."),(0,i.kt)("p",null,"You can edit the Mip Map Streaming settings of the lightmap assets in the same way that you can any other texture, but they reset to their default values when Unity regenerates the lightmaps. To solve this, you can tell Unity to apply these values when it generates the lightmaps. The ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-player-settings"},"Player Settings")," ( ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Player")," ) provide two controls to set streaming and priority for generated lightmaps:  ",(0,i.kt)("strong",{parentName:"p"},"Lightmap Streaming Enabled"),"  and  ",(0,i.kt)("strong",{parentName:"p"},"Streaming Priority")," ."),(0,i.kt)("p",null,"Enabling Mip Map Streaming and configuring priority work in the same way for lightmaps as for ",(0,i.kt)("a",{parentName:"p",href:"#making-textures-work-with-the-mipmap-streaming-system"},"regular textures"),"."),(0,i.kt)("h2",{id:"configuring-mipmap-streaming"},"Configuring Mipmap Streaming"),(0,i.kt)("p",null,"You can configure default settings in the Unity Editor, and then use the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming-api"},"Mipmap Streaming API")," to override these settings if required."),(0,i.kt)("h3",{id:"setting-the-memory-budget"},"Setting the memory budget"),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"Memory Budget"),"  property determines the maximum amount of memory Unity uses for textures. If your memory budget is too small, Unity lowers the resolution of textures in your scene. This can cause textures to pop or load slowly. However, the memory budget should be as small as possible to allow memory for other resources."),(0,i.kt)("p",null,"Set the memory budget in the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-quality-settings"},"Quality Settings")," window, with the  ",(0,i.kt)("strong",{parentName:"p"},"Texture Streaming"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Memory Budget"),"  property."),(0,i.kt)("p",null,"When the memory budget is full, Unity discards mipmaps it\u2019s not using, to make room for those it needs to use. You can control how many unused mipmaps it discards with the  ",(0,i.kt)("strong",{parentName:"p"},"Max Level Reduction")," ."),(0,i.kt)("p",null,"This value is also the mipmap level that the Mipmap Streaming system initially loads at startup. For example, when this is set to 2, Unity skips the two highest mipmaps on first load."),(0,i.kt)("p",null,"Set this value in the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-quality-settings"},"Quality Settings")," window, with the  ",(0,i.kt)("strong",{parentName:"p"},"Texture Streaming"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Max Level Reduction"),"  property."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  Unity prioritises the  ",(0,i.kt)("strong",{parentName:"p"},"Max Level Reduction"),"  value over the memory budget. It never discards more mipmaps than the  ",(0,i.kt)("strong",{parentName:"p"},"Max Level Reduction"),"  value, even if this causes the textures memory to exceed the budget."),(0,i.kt)("p",null,"The memory budget includes textures that do not use Mipmap Streaming. For example, if your budget is 100MB and you have 90MB of textures that don\u2019t use Mipmap Streaming, Unity tries to fit all the streaming mipmaps in the remaining 10MB. If it can\u2019t, it loads them at a lower resolution. Unity always loads textures that don\u2019t use Mipmap Streaming at full resolution, even if that exceeds the budget."),(0,i.kt)("p",null,"\u8981\u786e\u5b9a\u60a8\u7684\u5185\u5b58\u9884\u7b97\u7684\u5408\u7406\u6570\u91cf\uff1a"),(0,i.kt)("p",null,"1.\u5728\u9879\u76ee\u8fd0\u884c\u65f6\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Texture-desiredTextureMemory.html"},"Texture.desiredTextureMemory")," \u503c\u3002 2.\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Memory Budget"),"  \u503c\u8bbe\u7f6e\u4e3a\u7565\u9ad8\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Texture-desiredTextureMemory.html"},"Texture.desiredTextureMemory")," \u7684\u503c\u3002"),(0,i.kt)("p",null,"\u8fd9\u786e\u4fdd\u6709\u8db3\u591f\u7684\u7eb9\u7406\u5185\u5b58\u53ef\u7528\u4e8e\u573a\u666f\u4e2d\u8d44\u6e90\u6700\u5bc6\u96c6\u7684\u533a\u57df\uff0c\u5e76\u9632\u6b62\u7eb9\u7406\u4e0b\u964d\u5230\u8f83\u4f4e\u7684\u5206\u8fa8\u7387\u3002\u5982\u679c\u60a8\u6709\u989d\u5916\u7684\u53ef\u7528\u5185\u5b58\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u66f4\u5927\u7684\u5185\u5b58\u9884\u7b97\uff0c\u4ee5\u4fbf Unity \u53ef\u4ee5\u5c06\u573a\u666f\u4e2d\u4e0d\u53ef\u89c1\u7684\u7eb9\u7406\u6570\u636e\u4fdd\u7559\u5728\u4e32\u6d41\u7f13\u5b58\u4e2d\u3002"),(0,i.kt)("h3",{id:"configuring-cameras"},"Configuring Cameras"),(0,i.kt)("p",null,"By default, when you enable the Mipmap Streaming system, Unity enables it for all cameras. You can disable this setting if you like."),(0,i.kt)("p",null,"Control whether Unity enables mipmap Streaming for all Cameras in the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-quality-settings"},"Quality Settings")," window, with the  ",(0,i.kt)("strong",{parentName:"p"},"Texture Streaming"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Add All Cameras"),"  property."),(0,i.kt)("p",null,"If you want to exclude a specific Camera, add a ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/class-streaming-controller"},"Streaming Controller")," component to that Camera and then disable it."),(0,i.kt)("p",null,"If you disable  ",(0,i.kt)("strong",{parentName:"p"},"Add All Cameras")," , then you must enable mipmap Streaming per-Camera. To do this, add a ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/class-streaming-controller"},"Streaming Controller")," component to the same GameObject as the Camera component."),(0,i.kt)("p",null,"This component also allows you to adjust the mip bias setting per-Camera."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StreamingController.png",alt:"Streaming Controller \u7ec4\u4ef6"})),(0,i.kt)("p",null,"Streaming Controller \u7ec4\u4ef6"),(0,i.kt)("h3",{id:"configuring-play-mode-behavior"},"Configuring Play Mode behavior"),(0,i.kt)("p",null,"Mipmap Streaming is enabled in Play Mode by default."),(0,i.kt)("p",null,"Control whether Unity enables Mipmap Streaming in Play Mode in the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-editor-manager"},"Editor Settings")," window, with the  ",(0,i.kt)("strong",{parentName:"p"},"Streaming Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Enable Texture Streaming in Play Mode"),"  property."),(0,i.kt)("p",null,"When Mipmap Streaming is enabled in Play mode, but not enabled in Edit mode (or the other way around), toggling in and out of Play mode takes slightly longer. This prevents Unity from unloading and reloading mipmap data, and should speed up the Play Mode workflow."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StreamingSettings2019-1.png",alt:"Edit > Project Settings > Editor > Streaming Settings"})),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Project Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Editor"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Streaming Settings")," "),(0,i.kt)("h2",{id:"\u8c03\u8bd5-mipmap-\u4e32\u6d41"},"\u8c03\u8bd5 Mipmap \u4e32\u6d41"),(0,i.kt)("p",null,"Unity \u5177\u6709\u5185\u7f6e\u7684 Mipmap \u4e32\u6d41\u8c03\u8bd5\u89c6\u56fe\u6a21\u5f0f\u3002\u8981\u8bbf\u95ee\u6b64\u6a21\u5f0f\uff0c\u8bf7\u5355\u51fb ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-scene-view/view-modes"},"Scene \u89c6\u56fe\u63a7\u5236\u4e0b\u62c9\u9009\u5355"),"\uff0c\u7136\u540e\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Texture Streaming")," \u3002\u6839\u636e\u6e38\u620f\u5bf9\u8c61\u5728 Mipmap \u4e32\u6d41\u7cfb\u7edf\u4e2d\u7684\u72b6\u6001\uff0c\u6b64\u89c6\u56fe\u6a21\u5f0f\u5c06\u5176\u663e\u793a\u4e3a\u4ee5\u4e0b\u989c\u8272\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7eff\u8272")," \u8868\u793a\u7531\u4e8e Mipmap \u4e32\u6d41\u7cfb\u7edf\u800c\u964d\u4f4e\u4e86 Mipmap \u7684\u7eb9\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7ea2\u8272")," \u8868\u793a\u7531\u4e8e Mipmap \u4e32\u6d41\u7cfb\u7edf\u6ca1\u6709\u8db3\u591f\u8d44\u6e90\u6765\u52a0\u8f7d\u5168\u90e8 Mipmap \u800c\u51cf\u5c11\u4e86 Mipmap \u7684\u7eb9\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u84dd\u8272")," \u8868\u793a\u672a\u8bbe\u7f6e\u4e3a\u4e32\u6d41\u7684\u7eb9\u7406\uff0c\u6216\u8005\u5728\u6ca1\u6709\u6e32\u67d3\u5668\u8ba1\u7b97 Mip \u7ea7\u522b\u7684\u60c5\u51b5\u4e0b\u7684\u7eb9\u7406\u3002")),(0,i.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming-api#debugging-and-profiling"},"\u8c03\u8bd5 API")," \u7f16\u5199\u60a8\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u8c03\u8bd5\u5de5\u5177\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Important"),"  : When the main texture is set using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Material-mainTexture.html"},"MainTexture")," attribute, it is not visible in the game view when you use the texture streaming ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/texture-mipmaps/texture-streaming-api"},"debugging view mode")," or a custom debug tool."),(0,i.kt)("h2",{id:"how-unity-calculates-the-required-mip-level"},"How Unity calculates the required mip level"),(0,i.kt)("p",null,"For textures that use Mipmap Streaming, Unity calculates the correct mip level using one of the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you assign the texture to a material that is used by a Unity Renderer componennt, Unity calculates the mip level automatically."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, you must request mip levels manually using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Texture2D-requestedMipmapLevel.html"},"Texture2D.requestedMipmapLevel"),".")),(0,i.kt)("p",null,"If you don\u2019t do this, Unity can\u2019t calculate the correct mip level, and it loads the texture using low-quality mips. These can appear blurry."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  The following systems don\u2019t use standard Renderer components. This means you must manually set the requested mips for these systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decal projector textures."),(0,i.kt)("li",{parentName:"ul"},"Reflection probe textures: Lower resolution mips are a lookup table for roughness. Therefore, if Unity uses a lower mipmap level, it renders materials using the wrong roughness."),(0,i.kt)("li",{parentName:"ul"},"Shaders that use UV texture coordinates in a channel other than ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv.html"},"Mesh.uv")," (also called UV0), or change texture coordinates in the shader. The only exceptions are changes to scale and translation (see below).")),(0,i.kt)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unity does not support Mipmap Streaming on Terrain textures. This is because Terrain Textures need to be available at full resolution at all times to allow Unity to tile and blend the textures."),(0,i.kt)("li",{parentName:"ul"},"When a Renderer component is active, its mesh requires valid UV distribution metrics to calculate the desired mip level. Unity calculates distribution metrics automatically as part of the mesh importing process.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you create a mesh from code, Unity does not calculate distribution metrics automatically and therefore it loads the wrong mip levels. To manually trigger the UV distribution metric calculation use ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.RecalculateUVDistributionMetrics.html"},"Mesh.RecalculateUVDistributionMetrics"),"."),(0,i.kt)("li",{parentName:"ul"},"When Unity renders a streamed Texture directly with an API (such as ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.DrawMeshNow.html"},"Graphics.DrawMeshNow")," the system has no renderer bounds or other information to calculate the mip level. This means you need to set the Texture mip level manually or disable Mipmap Streaming on this Texture. See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Texture2D-requestedMipmapLevel.html"},"Texture2D.requestedMipmapLevel")," for more details on how to manually set which mip level Unity loads."),(0,i.kt)("li",{parentName:"ul"},"When Unity calculates the miplevel for a texture it looks for the scale and translation of that texture in a ",(0,i.kt)("inlineCode",{parentName:"li"},"_ST")," value with the same name as the texture flagged in your shader. For example, if you reference your textures are in the shader using ",(0,i.kt)("inlineCode",{parentName:"li"},"_MainTex"),", Unity will look for ",(0,i.kt)("inlineCode",{parentName:"li"},"_MainTex_ST"),".")))}h.isMDXComponent=!0}}]);