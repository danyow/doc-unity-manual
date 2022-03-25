"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1962],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58909:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"class-CapsuleCollider2D",title:"2D \u80f6\u56ca\u78b0\u649e\u4f53 (Capsule Collider 2D)",slug:"/collider2d/class-capsule-collider2d"},s="2D \u80f6\u56ca\u78b0\u649e\u4f53 (Capsule Collider 2D)",p={unversionedId:"unity2d/physics2dreference/collider2d/class-CapsuleCollider2D",id:"unity2d/physics2dreference/collider2d/class-CapsuleCollider2D",title:"2D \u80f6\u56ca\u78b0\u649e\u4f53 (Capsule Collider 2D)",description:"The  Capsule Collider 2D  is a Collider that interacts with the 2D physics system. The capsule shape has no vertex corners and has a continuous round circumference. This shape allows the Capsule Collider 2D to not get easily caught in the corners of other Colliders. The capsule shape is considered solid and not hollow, which means any other Collider 2Ds that are inside the Capsule Collider 2D are considered to be in contact with the Collider and are forced out of it over time.",source:"@site/docs/unity2d/physics2dreference/collider2d/class-capsule-collider2d.md",sourceDirName:"unity2d/physics2dreference/collider2d",slug:"/collider2d/class-capsule-collider2d",permalink:"/doc-unity-manual/docs/collider2d/class-capsule-collider2d",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/physics2dreference/collider2d/class-capsule-collider2d.md",tags:[],version:"current",frontMatter:{id:"class-CapsuleCollider2D",title:"2D \u80f6\u56ca\u78b0\u649e\u4f53 (Capsule Collider 2D)",slug:"/collider2d/class-capsule-collider2d"},sidebar:"tutorialSidebar",previous:{title:"Box Collider 2D",permalink:"/doc-unity-manual/docs/collider2d/class-box-collider2d"},next:{title:"Circle Collider 2D",permalink:"/doc-unity-manual/docs/collider2d/class-circle-collider2d"}},c={},d=[{value:"\u80f6\u56ca\u4f53\u914d\u7f6e\u793a\u4f8b",id:"\u80f6\u56ca\u4f53\u914d\u7f6e\u793a\u4f8b",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2d-\u80f6\u56ca\u78b0\u649e\u4f53-capsule-collider-2d"},"2D \u80f6\u56ca\u78b0\u649e\u4f53 (Capsule Collider 2D)"),(0,l.kt)("p",null,"The  ",(0,l.kt)("strong",{parentName:"p"},"Capsule Collider 2D"),"  is a Collider that interacts with the 2D physics system. The capsule shape has no vertex corners and has a continuous round circumference. This shape allows the Capsule Collider 2D to not get easily caught in the corners of other Colliders. The capsule shape is considered solid and not hollow, which means any other Collider 2Ds that are inside the Capsule Collider 2D are considered to be in contact with the Collider and are forced out of it over time."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CapsuleCollider2D.png",alt:"CapsuleCollider2D.png"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Material")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u5c5e\u6027\u6765\u5b9a\u4e49 2D \u80f6\u56ca\u78b0\u649e\u4f53\u4f7f\u7528\u7684\u7269\u7406\u6750\u8d28\u3002\u6b64\u6750\u8d28\u5c06\u8986\u76d6\u6240\u6709 2D \u521a\u4f53\u6216\u5168\u5c40\u7269\u7406\u78b0\u649e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Is Trigger")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u6b64\u6846\u53ef\u6307\u5b9a 2D \u80f6\u56ca\u78b0\u649e\u4f53\u5c06\u89e6\u53d1\u4e8b\u4ef6\u3002\u5982\u679c\u9009\u4e2d\u6b64\u6846\uff0c\u7269\u7406\u5f15\u64ce\u4f1a\u5ffd\u7565\u6b64\u78b0\u649e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Used by Effector")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u6b64\u6846\u53ef\u6307\u5b9a\u9644\u52a0\u7684\u6548\u5e94\u5668\u5c06\u4f7f\u7528\u6b64 2D \u80f6\u56ca\u78b0\u649e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Offset")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u5c5e\u6027\u6765\u8bbe\u7f6e 2D \u80f6\u56ca\u78b0\u649e\u4f53\u51e0\u4f55\u5f62\u72b6\u7684\u5c40\u90e8\u504f\u79fb\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u5c5e\u6027\u6765\u5b9a\u4e49\u76d2\u4f53\u5927\u5c0f\u3002\u6b64\u76d2\u4f53\u53ef\u6307\u5b9a 2D \u80f6\u56ca\u78b0\u649e\u4f53\u5c06\u586b\u5145\u7684\u533a\u57df\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Direction")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u6b64\u5c5e\u6027\u8bbe\u7f6e\u4e3a Vertical \u6216 Horizontal\u3002\u6b64\u5c5e\u6027\u63a7\u5236\u56f4\u7ed5\u80f6\u56ca\u4f53\u7684\u65b9\u5411\uff1a\u5177\u4f53\u800c\u8a00\uff0c\u5b83\u5b9a\u4e49\u4e86\u534a\u5706\u5f62\u7aef\u76d6\u7684\u5b9a\u4f4d\u3002")))),(0,l.kt)("p",null,"The settings that define the Capsule Collider 2D are  ",(0,l.kt)("strong",{parentName:"p"},"Size"),"  and  ",(0,l.kt)("strong",{parentName:"p"},"Direction")," . Both the Size and Direction properties refer to  ",(0,l.kt)("strong",{parentName:"p"},"X"),"  and  ",(0,l.kt)("strong",{parentName:"p"},"Y"),"  (horizontal and vertical, respectively) in the local space of the Capsule Collider 2D, and not in world-space."),(0,l.kt)("p",null,"A typical way to set up the Capsule Collider 2D is to set the  ",(0,l.kt)("strong",{parentName:"p"},"Size"),"  to match the  ",(0,l.kt)("strong",{parentName:"p"},"Direction")," . For example, if the Capsule Collider 2D\u2019s  ",(0,l.kt)("strong",{parentName:"p"},"Direction"),"  is  ",(0,l.kt)("strong",{parentName:"p"},"Vertical")," , the  ",(0,l.kt)("strong",{parentName:"p"},"Size"),"  of  ",(0,l.kt)("strong",{parentName:"p"},"X"),"  is 0.5 and the  ",(0,l.kt)("strong",{parentName:"p"},"Size"),"  of  ",(0,l.kt)("strong",{parentName:"p"},"Y"),"  is 1, this makes the vertical direction capsule taller, rather than wider."),(0,l.kt)("p",null,"In the example below, the  ",(0,l.kt)("strong",{parentName:"p"},"X"),"  and  ",(0,l.kt)("strong",{parentName:"p"},"Y"),"  are represented by the yellow lines."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CapsuleCollider2D-Example1.png",alt:"An example of a Capsule Collider 2D set so the Size matches Direction"})),(0,l.kt)("p",null,"An example of a Capsule Collider 2D set so the  ",(0,l.kt)("strong",{parentName:"p"},"Size"),"  matches  ",(0,l.kt)("strong",{parentName:"p"},"Direction")," "),(0,l.kt)("h2",{id:"\u80f6\u56ca\u4f53\u914d\u7f6e\u793a\u4f8b"},"\u80f6\u56ca\u4f53\u914d\u7f6e\u793a\u4f8b"),(0,l.kt)("p",null,"\u53ef\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6765\u66f4\u6539 2D \u80f6\u56ca\u78b0\u649e\u4f53\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\u3002"),(0,l.kt)("p",null,"Note that when the  ",(0,l.kt)("strong",{parentName:"p"},"X"),"  and  ",(0,l.kt)("strong",{parentName:"p"},"Y"),"  of the  ",(0,l.kt)("strong",{parentName:"p"},"Size"),"  property are the same, the Capsule Collider 2D always approximates to a circle."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CapsuleCollider2D-Example2.png",alt:"2D \u80f6\u56ca\u78b0\u649e\u4f53\u914d\u7f6e\u7684\u793a\u4f8b"})),(0,l.kt)("p",null,"2D \u80f6\u56ca\u78b0\u649e\u4f53\u914d\u7f6e\u7684\u793a\u4f8b"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Note:"),"  A known issue in the 2D physics system is that when a GameObject moves across multiple Colliders, one or several of the Colliders may register a collision between the Colliders. This may occur even when the Colliders are perfectly aligned. This collision can cause the Collider to slow down or stop."),(0,l.kt)("p",null,"While constructing a surface with the Capsule Collider 2D can help reduce this problem, it is recommeneded to use a single Collider rather than multiple Colliders for a surface, such as the ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/collider2d/class-edge-collider2d"},"Edge Collider 2D"),"."))}m.isMDXComponent=!0}}]);