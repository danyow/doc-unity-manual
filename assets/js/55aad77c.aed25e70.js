"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35259],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),h=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=h(n),c=i,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var h=2;h<r;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68702:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],l={id:"LightingGiUvs",title:"Lightmap UVs introduction",slug:"/lighting-gi-uvs/lighting-gi-uvs"},o="Lightmap UVs introduction",h={unversionedId:"graphics/lighting-overview/lightmappers/lighting-gi-uvs/LightingGiUvs",id:"graphics/lighting-overview/lightmappers/lighting-gi-uvs/LightingGiUvs",title:"Lightmap UVs introduction",description:"Both the Realtime Global Illumination system and the Baked Global Illumination system use lightmaps, and therefore need lightmap UVs.",source:"@site/docs/graphics/lighting-overview/lightmappers/lighting-gi-uvs/lighting-gi-uvs.md",sourceDirName:"graphics/lighting-overview/lightmappers/lighting-gi-uvs",slug:"/lighting-gi-uvs/lighting-gi-uvs",permalink:"/doc-unity-manual/docs/lighting-gi-uvs/lighting-gi-uvs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lightmappers/lighting-gi-uvs/lighting-gi-uvs.md",tags:[],version:"current",frontMatter:{id:"LightingGiUvs",title:"Lightmap UVs introduction",slug:"/lighting-gi-uvs/lighting-gi-uvs"},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u5149\u906e\u6321",permalink:"/doc-unity-manual/docs/lightmappers/lighting-baked-ambient-occlusion"},next:{title:"\u751f\u6210\u5149\u7167\u8d34\u56fe UV",permalink:"/doc-unity-manual/docs/lighting-gi-uvs/lighting-gi-uvs-generating-lightmapping-uvs"}},p={},u=[{value:"Baked lightmap UVs",id:"baked-lightmap-uvs",level:2},{value:"Real-time lightmap UVs",id:"real-time-lightmap-uvs",level:2},{value:"How Unity calculates real-time lightmap UVs",id:"how-unity-calculates-real-time-lightmap-uvs",level:3},{value:"Packing",id:"packing",level:4},{value:"Merging",id:"merging",level:4}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lightmap-uvs-introduction"},"Lightmap UVs introduction"),(0,r.kt)("p",null,"Both the Realtime Global Illumination system and the Baked Global Illumination system use lightmaps, and therefore need lightmap UVs."),(0,r.kt)("p",null,"Unity uses separate sets of lightmap UVs for the Realtime Global Illumination system and the Baked Global Illumination system. There are two reasons for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is no direct correspondence in the grouping of instances between real-time and baked lightmaps; instances that are in the same real-time lightmap may be in two different baked lightmaps, and vice versa."),(0,r.kt)("li",{parentName:"ul"},"Meshes that appear at different scales share lightmap UVs in baked lightmaps, but do not share UVs in real-time lightmaps.")),(0,r.kt)("h2",{id:"baked-lightmap-uvs"},"Baked lightmap UVs"),(0,r.kt)("p",null,"Baked lightmap UVs are per-mesh: all instances of the same mesh share the same baked lightmap UVs. Unity can calculate the UVs for baked lightmaps when you import a model, or you can provide your own data."),(0,r.kt)("p",null,"Unity stores baked lightmap UVs in its mesh in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv2.html"},"Mesh.uv2")," channel. This channel maps to the TEXCOORD1 shader semantic, and is commonly called \u201cUV1\u201d."),(0,r.kt)("p",null,"If Baked Global Illumination is enabled and a given MeshRenderer receives its global illumination from lightmaps, Unity uses the data in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv2.html"},"Mesh.uv2")," channel to correctly map the baked lightmaps to the mesh."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  If you want to use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv2.html"},"Mesh.uv2")," for another purpose in a given mesh, you must ensure that all MeshRenderer components that use the mesh receive global illumination from Light Probes rather than lightmaps. Change this with the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"Mesh Renderer component Inspector"),", or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MeshRenderer.receiveGI.html"},"MeshRenderer.receiveGI")," API."),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lighting-gi-uvs/lighting-gi-uvs-generating-lightmapping-uvs"},"Generating lightmap UVs"),"."),(0,r.kt)("h2",{id:"real-time-lightmap-uvs"},"Real-time lightmap UVs"),(0,r.kt)("p",null,"Real-time lightmap UVs are per-Mesh Renderer: all instances of the same mesh share the same input data, but different instances of Mesh Renderers can use different real-time lightmap UVs at runtime. Unity calculates the UVs for the Realtime Global Illumination system during the precompute stage. This calculation takes per-mesh UVs as its input, and uses that data to create per-Mesh Renderer UVs. Unity can generate the input per-mesh UVs when you import a model, or you can provide your own data."),(0,r.kt)("p",null,"This works as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unity can use data in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv3.html"},"Mesh.uv3")," channel as input for the real-time lightmap UV calculations. ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh.uv3")," maps to the TEXCOORD2 shader semantic, and is commonly called \u201cUV2\u201d.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there is no data in ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh.uv3")," but there is data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv2.html"},"Mesh.uv2")," , Unity falls back to using the data in ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh.uv2")," as input for the real-time lightmap UV calculations. ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh.uv2")," is used for baked lightmap UVs. It is common to use the baked lightmap UVs as input data for the real-time lightmap UVs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The results of the calculations are stored per-MeshRenderer, in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MeshRenderer.enlightenVertexStream.html"},"MeshRenderer.enlightenVertexStream"),". If Realtime Global Illumination is enabled and a given MeshRenderer component contributes to global illumination and receives its global illumination from lightmaps, Unity automatically passes the data in ",(0,r.kt)("inlineCode",{parentName:"p"},"MeshRenderer.enlightenVertexStream")," to TEXCOORD2 in shaders, instead of the data in Mesh.uv3."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:"),"  If you want to use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv3.html"},"Mesh.uv3")," for another purpose in a mesh that uses Realtime Global Illumination, you must ensure that all MeshRenderer components that use the mesh receive global illumination from Light Probes rather than lightmaps. Change this with the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"Mesh Renderer component Inspector"),", or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MeshRenderer.receiveGI.html"},"MeshRenderer.receiveGI")," API."))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lighting-gi-uvs/lighting-gi-uvs-generating-lightmapping-uvs"},"Generating lightmap UVs"),"."),(0,r.kt)("h3",{id:"how-unity-calculates-real-time-lightmap-uvs"},"How Unity calculates real-time lightmap UVs"),(0,r.kt)("p",null,"This is what happens when Unity takes the per-mesh input UVs and processes them into per-Mesh Renderer output UVs."),(0,r.kt)("h4",{id:"packing"},"Packing"),(0,r.kt)("p",null,"Unity repacks real-time lightmap UVs to ensure that each chart\u2019s boundary falls on a texel center in all directions, and then adds a half-texel of padding around each chart\u2019s boundary. This ensures that all charts have a full texel of space between them."),(0,r.kt)("p",null,"This is because the resolution of real-time lightmaps is intentionally low, to make it feasible to update them in real-time. The low resolution doesn\u2019t affect the graphical quality because these lightmaps only store low-frequency indirect lighting, but it can lead to bleeding when charts share texels. Repacking ensures that charts never share texels. It avoids this problem, and also allows Unity to efficiently pack charts next to each other."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LightingGiUvs-2.png",alt:"LightingGiUvs-2.png"})),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  This packing technique means that the calculated UVs are dependent on the scale and lightmap resolution of the instance, which is why real-time lightmap UVs are per-Mesh Renderer; however, Unity automatically optimizes this where possible and Mesh Renderers that use the same mesh with the same scale and lightmap resolution share the same UVs."),(0,r.kt)("h4",{id:"merging"},"Merging"),(0,r.kt)("p",null,"Optionally, you can instruct Unity to merge UV charts where possible during this process. This reduces the size of the lightmaps, and can improve runtime memory usage and performance."),(0,r.kt)("p",null,"You can enable this optimization on any GameObject with a Mesh Renderer component. In the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"Mesh Renderer Inspector"),", navigate to the  ",(0,r.kt)("strong",{parentName:"p"},"Lightmapping"),"  section and  ",(0,r.kt)("strong",{parentName:"p"},"Optimize Realtime UVs")," ."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  This feature sometimes makes mistakes about discontinuities in the original UV mapping. For example, an intentionally sharp edge may be misinterpreted as a continuous surface. If this happens, disable this feature."))}c.isMDXComponent=!0}}]);