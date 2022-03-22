"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48070],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return h}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,g=d["".concat(u,".").concat(h)]||d[h]||s[h]||a;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function h(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5429:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"batch-renderer-group-initializing",title:"Initializing a BatchRendererGroup object",slug:"/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing"},u="Initializing a BatchRendererGroup object",l={unversionedId:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing",id:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing",title:"Initializing a BatchRendererGroup object",description:"The first step to render using BRG is to create an instance of BatchRendererGroup and initialize it with an implementation of OnPerformCulling.",source:"@site/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing.md",sourceDirName:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer",slug:"/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing",permalink:"/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing.md",tags:[],version:"current",frontMatter:{id:"batch-renderer-group-initializing",title:"Initializing a BatchRendererGroup object",slug:"/batch-renderer-group-creating-a-renderer/batch-renderer-group-initializing"},sidebar:"tutorialSidebar",previous:{title:"Creating draw commands",permalink:"/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-draw-commands"},next:{title:"Registering meshes and materials",permalink:"/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-registering-meshes-and-materials"}},p={},s=[],d={toc:s};function h(e){var r=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initializing-a-batchrenderergroup-object"},"Initializing a BatchRendererGroup object"),(0,a.kt)("p",null,"The first step to render using BRG is to create an instance of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.html"},"BatchRendererGroup")," and initialize it with an implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.OnPerformCulling.html"},"OnPerformCulling"),"."),(0,a.kt)("p",null,"The OnPerformCulling callback is the main entry point of BRG and Unity calls it whenever it culls visible objects. For information on the parameters it receives, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.OnPerformCulling.html"},"OnPerformCulling"),". Typically, there are two tasks that the OnPerformCulling callback needs to perform:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visibility culling to determine which of its instances are visible based on the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchCullingContext.html"},"BatchCullingContext")," parameter."),(0,a.kt)("li",{parentName:"ul"},"Output the actual draw commands to render those instances. To do this you write to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchCullingOutput.html"},"BatchCullingOutput")," parameter.")),(0,a.kt)("p",null,"In simple implementations, you can do these tasks directly in the OnPerformCulling callback, but for high-performance implementations, it\u2019s best practice to do most of this work in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.burst@latest"},"Burst")," jobs. The OnPerformCulling callback should return a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Jobs.JobHandle.html"},"JobHandle")," that completes after the jobs write the output into the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchCullingOutput.html"},"BatchCullingOutput")," parameter. If your implementation doesn\u2019t use jobs, you can return an empty JobHandle."),(0,a.kt)("p",null,"See the following code sample for an example of how to create a BatchRendererGroup object and initialize it with the most minimum OnPerformCulling callback that compiles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"using System;\nusing Unity.Collections;\nusing Unity.Collections.LowLevel.Unsafe;\nusing Unity.Jobs;\nusing UnityEngine;\nusing UnityEngine.Rendering;\npublic class SimpleBRGExample : MonoBehaviour\n{\n    private BatchRendererGroup m_BRG;\n\n    private void Start()\n    {\n        m_BRG = new BatchRendererGroup(this.OnPerformCulling, IntPtr.Zero);\n    }\n\n    private void OnDisable()\n    {\n        m_BRG.Dispose();\n    }\n\n    public unsafe JobHandle OnPerformCulling(\n        BatchRendererGroup rendererGroup,\n        BatchCullingContext cullingContext,\n        BatchCullingOutput cullingOutput,\n        IntPtr userContext)\n    {\n        // This simple example doesn't use jobs, so it can just return an empty JobHandle.\n        // Performance sensitive applications should use Burst jobs to implement\n        // culling and draw command output. In this case, this function would return a\n        // handle here that completes when those jobs have finished.\n        return new JobHandle();\n    }\n}\n")),(0,a.kt)("p",null,"Before you use OnPerformCulling to create draw commands, you need to provide your BatchRendererGroup object any meshes you want it to draw, and any materials you want it to use. For more information, see the next topic, ",(0,a.kt)("a",{parentName:"p",href:"/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-registering-meshes-and-materials"},"Registering meshes and materials"),"."))}h.isMDXComponent=!0}}]);