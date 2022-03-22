"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79210],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return r?o.createElement(h,l(l({ref:t},c),{},{components:r})):o.createElement(h,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8278:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"class-CompositeCollider2D",title:"2D \u590d\u5408\u78b0\u649e\u4f53 (Composite Collider 2D)",slug:"/collider2d/class-composite-collider2d"},s="2D \u590d\u5408\u78b0\u649e\u4f53 (Composite Collider 2D)",d={unversionedId:"unity2d/physics2dreference/collider2d/class-CompositeCollider2D",id:"unity2d/physics2dreference/collider2d/class-CompositeCollider2D",title:"2D \u590d\u5408\u78b0\u649e\u4f53 (Composite Collider 2D)",description:"The Composite Collider 2D component is a Collider that interacts with the 2D physics system. Unlike most colliders, it does not define an inherent shape. Instead, it merges the shapes of any Box Collider 2D or Polygon Collider 2D that you set it up to use. The Composite Collider 2D uses the vertices (geometry) from any of these Colliders, and merges them together into new geometry controlled by the Composite Collider 2D itself.",source:"@site/docs/unity2d/physics2dreference/collider2d/class-composite-collider2d.md",sourceDirName:"unity2d/physics2dreference/collider2d",slug:"/collider2d/class-composite-collider2d",permalink:"/docs/collider2d/class-composite-collider2d",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/physics2dreference/collider2d/class-composite-collider2d.md",tags:[],version:"current",frontMatter:{id:"class-CompositeCollider2D",title:"2D \u590d\u5408\u78b0\u649e\u4f53 (Composite Collider 2D)",slug:"/collider2d/class-composite-collider2d"},sidebar:"tutorialSidebar",previous:{title:"Circle Collider 2D",permalink:"/docs/collider2d/class-circle-collider2d"},next:{title:"Custom Collider 2D",permalink:"/docs/collider2d/class-custom-collider2d"}},c={},p=[],m={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2d-\u590d\u5408\u78b0\u649e\u4f53-composite-collider-2d"},"2D \u590d\u5408\u78b0\u649e\u4f53 (Composite Collider 2D)"),(0,a.kt)("p",null,"The Composite Collider 2D ",(0,a.kt)("a",{parentName:"p",href:"/docs/game-objects/using-components"},"component")," is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/physics-overview/colliders-overview"},"Collider")," that interacts with the 2D physics system. Unlike most colliders, it does not define an inherent shape. Instead, it merges the shapes of any ",(0,a.kt)("a",{parentName:"p",href:"/docs/collider2d/class-box-collider2d"},"Box Collider 2D")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/collider2d/class-polygon-collider2d"},"Polygon Collider 2D")," that you set it up to use. The Composite Collider 2D uses the vertices (geometry) from any of these Colliders, and merges them together into new geometry controlled by the Composite Collider 2D itself."),(0,a.kt)("p",null,"Both the Box Collider 2D and Polygon Collider 2D components have a  ",(0,a.kt)("strong",{parentName:"p"},"Used By Composite"),"  checkbox. Select this checkbox to attach them to the Composite Collider 2D. These Colliders must also be attached to the same ",(0,a.kt)("a",{parentName:"p",href:"/docs/physics2dreference/class-rigidbody2d"},"Rigidbody 2D")," as the Composite Collider 2D. When you enable  ",(0,a.kt)("strong",{parentName:"p"},"Used by Composite")," , other properties disappear from that component, as they are now controlled by the attached Composite Collider 2D."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/CompositeCollider2D.html"},"CompositeCollider2D")," API documentation for more information about scripting with the Composite Collider 2D."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/class-CompositeCollider2D.png",alt:"class-CompositeCollider2D.png"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Density")),(0,a.kt)("td",{parentName:"tr",align:null},"Change the density to change the mass calculations of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/game-objects"},"GameObject\u2019s")," associated Rigidbody 2D. If you set the value to 0, its associated Rigidbody 2D ignores the Collider 2D for all mass calculations, including centre of mass calculations. Note that this option is only available if you have enabled  ",(0,a.kt)("strong",{parentName:"td"},"Use Auto Mass"),"  in the associated Rigidbody 2D component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Material")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd ",(0,a.kt)("a",{parentName:"td",href:"/docs/physics2dreference/class-physics-material2d"},"2D \u7269\u7406\u6750\u8d28"),"\uff0c\u53ef\u7528\u4e8e\u786e\u5b9a\u78b0\u649e\u7684\u5c5e\u6027\uff08\u4f8b\u5982\u6469\u64e6\u548c\u5f39\u6027\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Is Trigger")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b 2D \u590d\u5408\u78b0\u649e\u4f53\u4f5c\u4e3a\u89e6\u53d1\u5668\u8fd0\u884c\uff0c\u8bf7\u9009\u4e2d\u6b64\u6846\uff08\u8bf7\u53c2\u9605\u5173\u4e8e",(0,a.kt)("a",{parentName:"td",href:"/docs/physics-overview/colliders-overview"},"\u78b0\u649e\u4f53"),"\u7684\u6982\u8ff0\u6587\u6863\u4ee5\u4e86\u89e3\u6709\u5173\u89e6\u53d1\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Used by Effector")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b 2D \u590d\u5408\u78b0\u649e\u4f53\u7531\u9644\u52a0\u7684 ",(0,a.kt)("a",{parentName:"td",href:"/docs/effectors2d"},"2D \u6548\u5e94\u5668"),"\u7ec4\u4ef6\u4f7f\u7528\uff0c\u8bf7\u9009\u4e2d\u6b64\u6846\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Offset")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e 2D \u78b0\u649e\u4f53\u51e0\u4f55\u5f62\u72b6\u7684\u5c40\u90e8\u504f\u79fb\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Geometry Type")),(0,a.kt)("td",{parentName:"tr",align:null},"When merging Colliders, the vertices from the selected Colliders are composed into one of two different geometry types. Use this drop-down to set the geometry type to either  ",(0,a.kt)("strong",{parentName:"td"},"Outlines"),"  or  ",(0,a.kt)("strong",{parentName:"td"},"Polygons")," .")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Outlines"),(0,a.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u5177\u6709\u7a7a\u5fc3\u8f6e\u5ed3\u7684 2D \u78b0\u649e\u4f53\uff0c\u4e0e ",(0,a.kt)("a",{parentName:"td",href:"/docs/collider2d/class-edge-collider2d"},"2D \u8fb9\u754c\u78b0\u649e\u4f53 (Edge Collider 2D)")," \u751f\u6210\u7684\u7ed3\u679c\u4e00\u6837\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Polygons"),(0,a.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u5177\u6709\u5b9e\u5fc3\u591a\u8fb9\u5f62\u7684 2D \u78b0\u649e\u4f53\uff0c\u4e0e ",(0,a.kt)("a",{parentName:"td",href:"/docs/collider2d/class-polygon-collider2d"},"2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53 (Polygon Collider 2D)")," \u751f\u6210\u7684\u7ed3\u679c\u4e00\u6837\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Generation Type")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u7528\u4e8e\u63a7\u5236\u5728\u66f4\u6539 2D \u590d\u5408\u78b0\u649e\u4f53\u65f6\u6216\u8005\u66f4\u6539\u5176\u4efb\u4f55\u6210\u5458\u78b0\u649e\u4f53\u65f6\u4f55\u65f6\u751f\u6210\u51e0\u4f55\u4f53\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Synchronous"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9 2D \u590d\u5408\u78b0\u649e\u4f53\u6216\u5176\u4f7f\u7528\u7684\u4efb\u4f55\u78b0\u649e\u4f53\u8fdb\u884c\u66f4\u6539\u65f6\uff0cUnity \u7acb\u5373\u751f\u6210\u65b0\u51e0\u4f55\u4f53\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Manual"),(0,a.kt)("td",{parentName:"tr",align:null},"New geometry generation happens only when you request it. To request generation, either call the ",(0,a.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/CompositeCollider2D.GenerateGeometry.html"},"CompositeCollider2D.GenerateGeometry")," script API, or click the  ",(0,a.kt)("strong",{parentName:"td"},"Regenerate Geometry"),"  button that appears under the selection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Vertex Distance")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4ece\u590d\u5408\u78b0\u649e\u4f53\u6536\u96c6\u7684\u4efb\u4f55\u9876\u70b9\u5141\u8bb8\u7684\u6700\u5c0f\u95f4\u8ddd\u503c\u3002\u6bd4\u6b64\u9650\u503c\u66f4\u8fd1\u7684\u4efb\u4f55\u9876\u70b9\u90fd\u5c06\u88ab\u5220\u9664\u3002\u6b64\u8bbe\u7f6e\u53ef\u7528\u4e8e\u63a7\u5236\u9876\u70b9\u5408\u6210\u7684\u6709\u6548\u5206\u8fa8\u7387\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Edge Radius")),(0,a.kt)("td",{parentName:"tr",align:null},"Controls a radius around edges, so that vertices are circular. This results in a larger Collider 2D with rounded convex corners. The default value for this setting is 0 (no radius). This only works when the  ",(0,a.kt)("strong",{parentName:"td"},"Geometry Type"),"  is set to  ",(0,a.kt)("strong",{parentName:"td"},"Outlines")," .")))))}u.isMDXComponent=!0}}]);