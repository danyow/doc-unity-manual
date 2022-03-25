"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97566],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),h=a,f=m["".concat(o,".").concat(h)]||m[h]||p[h]||s;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,c=new Array(s);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<s;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48929:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),c=["components"],l={id:"UsingtheMeshClass",title:"\u4f7f\u7528 Mesh \u7c7b",slug:"/generating-mesh-geometry-procedurally/usingthe-mesh-class"},o="\u4f7f\u7528 Mesh \u7c7b",i={unversionedId:"graphics/mesh/generating-mesh-geometry-procedurally/UsingtheMeshClass",id:"graphics/mesh/generating-mesh-geometry-procedurally/UsingtheMeshClass",title:"\u4f7f\u7528 Mesh \u7c7b",description:"Mesh \u7c7b\u662f\u5bf9\u8c61\u7f51\u683c\u51e0\u4f55\u4f53\u7684\u57fa\u672c\u811a\u672c\u63a5\u53e3\u3002\u8be5\u7c7b\u4f7f\u7528\u6570\u7ec4\u6765\u8868\u793a\u4e09\u89d2\u5f62\u3001\u9876\u70b9\u4f4d\u7f6e\u3001\u6cd5\u7ebf\u548c\u7eb9\u7406\u5750\u6807\uff0c\u8fd8\u63d0\u4f9b\u4e86\u8bb8\u591a\u5176\u4ed6\u6709\u7528\u7684\u5c5e\u6027\u548c\u51fd\u6570\u6765\u8f85\u52a9\u7f51\u683c\u7684\u751f\u6210\u3002",source:"@site/docs/graphics/mesh/generating-mesh-geometry-procedurally/usingthe-mesh-class.md",sourceDirName:"graphics/mesh/generating-mesh-geometry-procedurally",slug:"/generating-mesh-geometry-procedurally/usingthe-mesh-class",permalink:"/doc-unity-manual/docs/generating-mesh-geometry-procedurally/usingthe-mesh-class",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/mesh/generating-mesh-geometry-procedurally/usingthe-mesh-class.md",tags:[],version:"current",frontMatter:{id:"UsingtheMeshClass",title:"\u4f7f\u7528 Mesh \u7c7b",slug:"/generating-mesh-geometry-procedurally/usingthe-mesh-class"},sidebar:"tutorialSidebar",previous:{title:"Example creating a quad",permalink:"/doc-unity-manual/docs/generating-mesh-geometry-procedurally/example-creatinga-billboard-plane"},next:{title:"\u7f51\u683c\u7684\u7ec6\u8282\u7ea7\u522b (LOD)",permalink:"/doc-unity-manual/docs/level-of-detail"}},u={},p=[{value:"\u8bbf\u95ee\u5bf9\u8c61\u7684\u7f51\u683c",id:"\u8bbf\u95ee\u5bf9\u8c61\u7684\u7f51\u683c",level:2},{value:"\u6dfb\u52a0\u7f51\u683c\u6570\u636e",id:"\u6dfb\u52a0\u7f51\u683c\u6570\u636e",level:2},{value:"\u9ad8\u7ea7\u7f51\u683c API",id:"\u9ad8\u7ea7\u7f51\u683c-api",level:3},{value:"\u53e6\u8bf7\u53c2\u9605",id:"\u53e6\u8bf7\u53c2\u9605",level:2}],m={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u4f7f\u7528-mesh-\u7c7b"},"\u4f7f\u7528 Mesh \u7c7b"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.html"},"Mesh")," \u7c7b\u662f\u5bf9\u8c61\u7f51\u683c\u51e0\u4f55\u4f53\u7684\u57fa\u672c\u811a\u672c\u63a5\u53e3\u3002\u8be5\u7c7b\u4f7f\u7528\u6570\u7ec4\u6765\u8868\u793a\u4e09\u89d2\u5f62\u3001\u9876\u70b9\u4f4d\u7f6e\u3001\u6cd5\u7ebf\u548c\u7eb9\u7406\u5750\u6807\uff0c\u8fd8\u63d0\u4f9b\u4e86\u8bb8\u591a\u5176\u4ed6\u6709\u7528\u7684\u5c5e\u6027\u548c\u51fd\u6570\u6765\u8f85\u52a9\u7f51\u683c\u7684\u751f\u6210\u3002"),(0,s.kt)("h2",{id:"\u8bbf\u95ee\u5bf9\u8c61\u7684\u7f51\u683c"},"\u8bbf\u95ee\u5bf9\u8c61\u7684\u7f51\u683c"),(0,s.kt)("p",null,"\u901a\u5e38\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-filter"},"\u7f51\u683c\u8fc7\u6ee4\u5668 (Mesh Filter)")," \u7ec4\u4ef6\u5c06\u7f51\u683c\u6570\u636e\u9644\u52a0\u5230\u5bf9\u8c61\uff08\u8be5\u5bf9\u8c61\u8fd8\u9700\u8981 ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"MeshRenderer")," \u4ee5\u4f7f\u51e0\u4f55\u4f53\u53ef\u89c1\uff09\u3002\u4f7f\u7528\u719f\u6089\u7684 GetComponent \u51fd\u6570\u8bbf\u95ee\u6b64\u7ec4\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"using UnityEngine;\npublic class ExampleScript : MonoBehaviour\n{\n    MeshFilter mf;\n    void Start()\n    {\n        //\u5982\u679c\u6b64 gameObject \u5177\u6709 MeshFilter\uff0c\u5219 mf \u5c06\u5f15\u7528\u8be5\u7ec4\u4ef6\n        mf = GetComponent&lt;MeshFilter&gt;();    \n    }\n}\n")),(0,s.kt)("h2",{id:"\u6dfb\u52a0\u7f51\u683c\u6570\u636e"},"\u6dfb\u52a0\u7f51\u683c\u6570\u636e"),(0,s.kt)("p",null,"Mesh \u5bf9\u8c61\u5177\u6709\u9876\u70b9\u53ca\u5176\u5173\u8054\u6570\u636e\uff08\u6cd5\u7ebf\u548c UV \u5750\u6807\uff09\u7684\u5c5e\u6027\u4ee5\u53ca\u4e09\u89d2\u5f62\u6570\u636e\u7684\u5c5e\u6027\u3002\u9876\u70b9\u53ef\u6309\u4efb\u4f55\u987a\u5e8f\u63d0\u4f9b\uff0c\u4f46\u662f\u6cd5\u7ebf\u548c UV \u7684\u6570\u7ec4\u5fc5\u987b\u7ecf\u8fc7\u6392\u5e8f\uff0c\u4f7f\u7d22\u5f15\u5168\u90e8\u5bf9\u5e94\u4e8e\u9876\u70b9\uff08\u5373\uff0c\u6cd5\u7ebf\u6570\u7ec4\u7684\u5143\u7d20 0 \u63d0\u4f9b\u9876\u70b9 0 \u7684\u6cd5\u7ebf\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff09\u3002\u9876\u70b9\u4e3a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Vector3.html"},"Vector3"),"\uff0c\u8868\u793a\u5bf9\u8c61\u5c40\u90e8\u7a7a\u95f4\u4e2d\u7684\u70b9\u3002\u6cd5\u7ebf\u4e3a\u7ecf\u8fc7\u6807\u51c6\u5316\u7684 Vector3\uff0c\u8868\u793a\u65b9\u5411\uff0c\u540c\u6837\u4f4d\u4e8e\u5c40\u90e8\u5750\u6807\u4e2d\u3002UV \u6307\u5b9a\u4e3a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Vector2.html"},"Vector2"),"\uff0c\u4f46\u7531\u4e8e Vector2 \u7c7b\u578b\u6ca1\u6709\u540d\u4e3a U \u548c V \u7684\u5b57\u6bb5\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u8111\u6d77\u4e2d\u5c06\u5b83\u4eec\u5206\u522b\u8f6c\u6362\u4e3a X \u548c Y\u3002"),(0,s.kt)("p",null,"\u4e09\u89d2\u5f62\u6307\u5b9a\u4e3a\u6574\u6570\u4e09\u5143\u7ec4\uff0c\u4f5c\u4e3a\u9876\u70b9\u6570\u7ec4\u7684\u7d22\u5f15\u3002\u8be5\u6570\u7ec4\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6574\u6570\u7d22\u5f15\u5217\u8868\uff0c\u5e76\u4e0d\u4f1a\u4f7f\u7528\u7279\u6b8a\u7684\u7c7b\u6765\u8868\u793a\u4e09\u89d2\u5f62\u3002\u5b83\u4eec\u9488\u5bf9\u6bcf\u4e2a\u4e09\u89d2\u5f62\u4ee5\u4e09\u4e2a\u4e3a\u4e00\u7ec4\uff0c\u56e0\u6b64\u524d\u4e09\u4e2a\u5143\u7d20\u5b9a\u4e49\u7b2c\u4e00\u4e2a\u4e09\u89d2\u5f62\uff0c\u63a5\u4e0b\u6765\u7684\u4e09\u4e2a\u5b9a\u4e49\u7b2c\u4e8c\u4e2a\u4e09\u89d2\u5f62\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002\u4e09\u89d2\u5f62\u7684\u4e00\u4e2a\u91cd\u8981\u7ec6\u8282\u662f\u89d2\u9876\u70b9\u7684\u6392\u5e8f\u95ee\u9898\u3002\u5b83\u4eec\u7684\u6392\u5217\u5e94\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a\u5f53\u5411\u4e0b\u89c2\u770b\u4e09\u89d2\u5f62\u7684\u53ef\u89c1\u5916\u8868\u9762\u65f6\uff0c\u89d2\u5e94\u987a\u65f6\u9488\u8f6c\u52a8\uff0c\u4f46\u4ece\u54ea\u4e2a\u89d2\u5f00\u59cb\u5e76\u4e0d\u91cd\u8981\u3002"),(0,s.kt)("h3",{id:"\u9ad8\u7ea7\u7f51\u683c-api"},"\u9ad8\u7ea7\u7f51\u683c API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.html"},"Mesh")," \u7c7b\u8fd8\u5177\u6709\u66f4\u4f4e\u7ea7\u522b\u7684\u9ad8\u7ea7 API\uff0c\u4f7f\u60a8\u53ef\u4ee5 \u4f7f\u7528\u539f\u59cb\u7f51\u683c\u9876\u70b9\u548c\u7d22\u5f15\u7f13\u51b2\u533a\u6570\u636e\u3002\u5728\u9700\u8981\u6700\u9ad8\u6027\u80fd\u6216\u6700\u4f4e\u5185\u5b58\u5206\u914d\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5f88\u6709\u7528\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetIndexBufferParams.html"},"Mesh.SetIndexBufferParams")," \u548c ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetIndexBufferData.html"},"Mesh.SetIndexBufferData"),"\uff0c\u7528\u4e8e\u8bbe\u7f6e\u7d22\u5f15\u7f13\u51b2\u533a\u7684\u5927\u5c0f\u548c\u683c\u5f0f\u4ee5\u53ca\u66f4\u65b0\u5176\u4e2d\u7684\u6570\u636e\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetVertexBufferParams.html"},"Mesh.SetVertexBufferParams")," \u548c ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetVertexBufferData.html"},"Mesh.SetVertexBufferData"),"\uff0c\u7528\u4e8e\u8bbe\u7f6e\u9876\u70b9\u7f13\u51b2\u533a\u7684\u5927\u5c0f\u548c\u683c\u5f0f\u4ee5\u53ca\u66f4\u65b0\u5176\u4e2d\u7684\u6570\u636e\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetSubMesh.html"},"Mesh.SetSubMesh"),"\uff0c\u7528\u4e8e\u8bbe\u7f6e\u7d22\u5f15\u7f13\u51b2\u533a\u62d3\u6251\u548c\u8303\u56f4\u3002")),(0,s.kt)("h2",{id:"\u53e6\u8bf7\u53c2\u9605"},"\u53e6\u8bf7\u53c2\u9605"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/mesh/anatomyofa-mesh"},"\u7f51\u683c\u5256\u6790"),"\u9875\u9762\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.html"},"Mesh")," \u811a\u672c\u7c7b\u53c2\u8003\u3002")),(0,s.kt)("hr",null),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"2019\u201308\u201314 \u9875\u9762\u5df2\u4fee\u8ba2")))}h.isMDXComponent=!0}}]);