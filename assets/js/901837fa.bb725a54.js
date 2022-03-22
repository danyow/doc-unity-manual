"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57631],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"class-PolygonCollider2D",title:"2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53 (Polygon Collider 2D)",slug:"/collider2d/class-polygon-collider2d"},d="2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53 (Polygon Collider 2D)",s={unversionedId:"unity2d/physics2dreference/collider2d/class-PolygonCollider2D",id:"unity2d/physics2dreference/collider2d/class-PolygonCollider2D",title:"2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53 (Polygon Collider 2D)",description:"The  Polygon Collider 2D  component is a Collider that interacts with the 2D physics system. The Collider\u2019s shape is defined by a freeform edge made of line segments, that you can adjust to fit the shape of the Sprite or any other shape. Note that this Collider\u2019s edge must completely enclose an area to function.",source:"@site/docs/unity2d/physics2dreference/collider2d/class-polygon-collider2d.md",sourceDirName:"unity2d/physics2dreference/collider2d",slug:"/collider2d/class-polygon-collider2d",permalink:"/docs/collider2d/class-polygon-collider2d",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/physics2dreference/collider2d/class-polygon-collider2d.md",tags:[],version:"current",frontMatter:{id:"class-PolygonCollider2D",title:"2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53 (Polygon Collider 2D)",slug:"/collider2d/class-polygon-collider2d"},sidebar:"tutorialSidebar",previous:{title:"2D \u8fb9\u754c\u78b0\u649e\u4f53 (Edge Collider 2D)",permalink:"/docs/collider2d/class-edge-collider2d"},next:{title:"2D \u6548\u5e94\u5668",permalink:"/docs/effectors2d"}},c={},p=[{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2d-\u591a\u8fb9\u5f62\u78b0\u649e\u4f53-polygon-collider-2d"},"2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53 (Polygon Collider 2D)"),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"Polygon Collider 2D"),"  component is a Collider that interacts with the 2D physics system. The Collider\u2019s shape is defined by a freeform edge made of line segments, that you can adjust to fit the shape of the Sprite or any other shape. Note that this Collider\u2019s edge must completely enclose an area to function."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PolygonCollider2DInspector.png",alt:"PolygonCollider2DInspector.png"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Material")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u7269\u7406\u6750\u8d28\uff0c\u53ef\u7528\u4e8e\u786e\u5b9a\u78b0\u649e\u7684\u5c5e\u6027\uff08\u4f8b\u5982\u6469\u64e6\u548c\u5f39\u6027\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Is Trigger")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b\u6b64\u78b0\u649e\u4f53\u4f5c\u4e3a\u89e6\u53d1\u5668\u8fd0\u884c\uff0c\u8bf7\u52fe\u9009\u6b64\u6846\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Used by Effector")),(0,a.kt)("td",{parentName:"tr",align:null},"\u9644\u52a0\u7684\u6548\u5e94\u5668\u662f\u5426\u4f7f\u7528\u8be5\u78b0\u649e\u4f53\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Used by Composite")),(0,a.kt)("td",{parentName:"tr",align:null},"Tick this checkbox if you want this Collider to be used by an attached ",(0,a.kt)("a",{parentName:"td",href:"/docs/collider2d/class-composite-collider2d"},"Composite Collider 2D"),". ",(0,a.kt)("br",null),(0,a.kt)("br",null),"When you enable  ",(0,a.kt)("strong",{parentName:"td"},"Used by Composite")," , other properties disappear from the Polygon Collider 2D component, because they are now controlled by the attached Composite Collider 2D. The properties that disappear from the Box Collider 2D are  ",(0,a.kt)("strong",{parentName:"td"},"Material")," ,  ",(0,a.kt)("strong",{parentName:"td"},"Is Trigger")," ,  ",(0,a.kt)("strong",{parentName:"td"},"Used By Effector")," , and  ",(0,a.kt)("strong",{parentName:"td"},"Edge Radius")," .")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Used by Collider")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b 2D \u76d2\u578b\u78b0\u649e\u4f53\u7531\u9644\u52a0\u7684 ",(0,a.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/CompositeCollider2D.html"},"2D \u590d\u5408\u78b0\u649e\u4f53"),"\u7ec4\u4ef6\u4f7f\u7528\uff0c\u8bf7\u9009\u4e2d\u6b64\u6846\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Auto Tiling")),(0,a.kt)("td",{parentName:"tr",align:null},"Tick this checkbox if you have set the  ",(0,a.kt)("strong",{parentName:"td"},"Draw Mode"),"  of the Sprite Renderer component to  ",(0,a.kt)("strong",{parentName:"td"},"Tiled")," . This enables automatic updates to the shape of the Collider 2D, meaning that the shape is automatically readjusted when the Sprite\u2019s dimensions change. If you don\u2019t enable  ",(0,a.kt)("strong",{parentName:"td"},"Auto Tiling")," , the Collider 2D stays the same shape and size, even when the Sprite\u2019s dimensions change.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Offset")),(0,a.kt)("td",{parentName:"tr",align:null},"\u78b0\u649e\u4f53\u51e0\u4f55\u5f62\u72b6\u7684\u5c40\u90e8\u504f\u79fb\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Points")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6709\u5173\u751f\u6210\u78b0\u649e\u4f53\u7684\u590d\u6742\u6027\u7684\u4e0d\u53ef\u7f16\u8f91\u4fe1\u606f\u3002")))),(0,a.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("p",null,"\u5141\u8bb8\u624b\u52a8\u7f16\u8f91\u8be5\u78b0\u649e\u4f53\uff0c\u4f46\u8ba9 Unity \u81ea\u52a8\u786e\u5b9a\u5f62\u72b6\u901a\u5e38\u66f4\u65b9\u4fbf\u3002\u82e5\u8981\u8fdb\u884c\u6b64\u64cd\u4f5c\uff0c\u53ef\u5c06\u7cbe\u7075\u8d44\u6e90\u4ece Project \u89c6\u56fe\u62d6\u5230 Inspector \u4e2d\u7684 2D \u591a\u8fb9\u5f62\u78b0\u649e\u4f53\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"You can edit the polygon\u2019s shape by pressing the  ",(0,a.kt)("strong",{parentName:"p"},"Edit Collider"),"  button in the Inspector. You can exit Collider edit mode by pressing the  ",(0,a.kt)("strong",{parentName:"p"},"Edit Collider"),"  button again. While in edit mode, you can move an existing vertex by dragging when the mouse is over that vertex. If you shift-drag while the mouse is over an edge, a new vertex will be created at the mouse location. You can remove a vertex by holding down the ctrl/cmd key while clicking on it."),(0,a.kt)("p",null,"Note that you can hide the outline of the 2D move Gizmo while editing the Collider by selecting the fold-out arrow on the Sprite Renderer component in the Inspector to collapse it."))}m.isMDXComponent=!0}}]);