"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70240],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=i(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,o(o({ref:e},s),{},{components:r})):n.createElement(k,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4486:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],p={id:"class-CharacterController",title:"\u89d2\u8272\u63a7\u5236\u5668",slug:"/physics3dreference/class-character-controller"},c="\u89d2\u8272\u63a7\u5236\u5668",i={unversionedId:"physics-section/physics3dreference/class-CharacterController",id:"physics-section/physics3dreference/class-CharacterController",title:"\u89d2\u8272\u63a7\u5236\u5668",description:"\u89d2\u8272\u63a7\u5236\u5668 (Character Controller)  \u4e3b\u8981\u7528\u4e8e\u7b2c\u4e09\u4eba\u79f0\u73a9\u5bb6\u63a7\u5236\u6216\u8005\u662f\u4e0d\u4f7f\u7528 \u521a\u4f53 \u7269\u7406\u7ec4\u4ef6\u7684\u7b2c\u4e00\u4eba\u79f0\u73a9\u5bb6\u63a7\u5236\u3002",source:"@site/docs/physics-section/physics3dreference/class-character-controller.md",sourceDirName:"physics-section/physics3dreference",slug:"/physics3dreference/class-character-controller",permalink:"/doc-unity-manual/docs/physics3dreference/class-character-controller",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/physics-section/physics3dreference/class-character-controller.md",tags:[],version:"current",frontMatter:{id:"class-CharacterController",title:"\u89d2\u8272\u63a7\u5236\u5668",slug:"/physics3dreference/class-character-controller"},sidebar:"tutorialSidebar",previous:{title:"\u80f6\u56ca\u78b0\u649e\u4f53",permalink:"/doc-unity-manual/docs/physics3dreference/class-capsule-collider"},next:{title:"\u89d2\u8272\u5173\u8282",permalink:"/doc-unity-manual/docs/physics3dreference/class-character-joint"}},s={},u=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u5fae\u8c03\u89d2\u8272",id:"\u5fae\u8c03\u89d2\u8272",level:3},{value:"\u4e0d\u8981\u88ab\u5361\u4f4f",id:"\u4e0d\u8981\u88ab\u5361\u4f4f",level:3},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2}],d={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u89d2\u8272\u63a7\u5236\u5668"},"\u89d2\u8272\u63a7\u5236\u5668"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u89d2\u8272\u63a7\u5236\u5668 (Character Controller)"),"  \u4e3b\u8981\u7528\u4e8e\u7b2c\u4e09\u4eba\u79f0\u73a9\u5bb6\u63a7\u5236\u6216\u8005\u662f\u4e0d\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u521a\u4f53")," \u7269\u7406\u7ec4\u4ef6\u7684\u7b2c\u4e00\u4eba\u79f0\u73a9\u5bb6\u63a7\u5236\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Inspector-CharacterController.png",alt:"Inspector-CharacterController.png"})),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Slope Limit")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u78b0\u649e\u4f53\u9650\u5236\u4e3a\u722c\u5761\u7684\u659c\u7387\u4e0d\u8d85\u8fc7\u6307\u793a\u503c\uff08\u4ee5\u5ea6\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Step Offset")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5f53\u89d2\u8272\u6bd4\u6307\u793a\u503c\u66f4\u63a5\u8fd1\u5730\u9762\u65f6\uff0c\u89d2\u8272\u624d\u4f1a\u5347\u9ad8\u4e00\u4e2a\u53f0\u9636\u3002\u8be5\u503c\u4e0d\u5e94\u8be5\u5927\u4e8e\u89d2\u8272\u63a7\u5236\u5668\u7684\u9ad8\u5ea6\uff0c\u5426\u5219\u4f1a\u4ea7\u751f\u9519\u8bef\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Skin width")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e24\u4e2a\u78b0\u649e\u4f53\u53ef\u4ee5\u7a7f\u900f\u5f7c\u6b64\u4e14\u7a7f\u900f\u6df1\u5ea6\u6700\u591a\u4e3a\u76ae\u80a4\u5bbd\u5ea6 (Skin Width)\u3002\u8f83\u5927\u7684\u76ae\u80a4\u5bbd\u5ea6\u53ef\u51cf\u5c11\u6296\u52a8\u3002\u8f83\u5c0f\u7684\u76ae\u80a4\u5bbd\u5ea6\u53ef\u80fd\u5bfc\u81f4\u89d2\u8272\u5361\u4f4f\u3002\u5408\u7406\u8bbe\u7f6e\u662f\u5c06\u6b64\u503c\u8bbe\u4e3a\u534a\u5f84\u7684 10%\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Min Move Distance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u89d2\u8272\u8bd5\u56fe\u79fb\u52a8\u5230\u6307\u793a\u503c\u4ee5\u4e0b\uff0c\u6839\u672c\u79fb\u52a8\u4e0d\u4e86\u3002\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u7528\u6765\u51cf\u5c11\u6296\u52a8\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6b64\u503c\u5e94\u4fdd\u7559\u4e3a 0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Center")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8bbe\u7f6e\u5c06\u4f7f\u80f6\u56ca\u78b0\u649e\u4f53\u5728\u4e16\u754c\u7a7a\u95f4\u4e2d\u504f\u79fb\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5f71\u54cd\u89d2\u8272\u7684\u67a2\u8f6c\u65b9\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Radius")),(0,l.kt)("td",{parentName:"tr",align:null},"\u80f6\u56ca\u78b0\u649e\u4f53\u7684\u534a\u5f84\u957f\u5ea6\u3002\u6b64\u503c\u672c\u8d28\u4e0a\u662f\u78b0\u649e\u4f53\u7684\u5bbd\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Height")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89d2\u8272\u7684 ",(0,l.kt)("strong",{parentName:"td"},"\u80f6\u56ca\u78b0\u649e\u4f53")," \u9ad8\u5ea6\u3002\u66f4\u6539\u6b64\u8bbe\u7f6e\u5c06\u5728\u6b63\u65b9\u5411\u548c\u8d1f\u65b9\u5411\u6cbf Y \u8f74\u7f29\u653e\u78b0\u649e\u4f53\u3002")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CharacterControllerWindow.jpg",alt:"Character Controller"})),(0,l.kt)("p",null,"Character Controller"),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,l.kt)("p",null,"\u4f20\u7edf\u672b\u65e5\u98ce\u683c\u7684\u7b2c\u4e00\u4eba\u79f0\u63a7\u5236\u5728\u73b0\u5b9e\u4e2d\u5e76\u4e0d\u771f\u5b9e\u3002\u8be5\u89d2\u8272\u6bcf\u5c0f\u65f6\u80fd\u8dd1 90 \u82f1\u91cc\uff0c\u53ef\u4ee5\u7acb\u5373\u505c\u6b62\u5e76\u6025\u8f6c\u5f2f\u3002\u56e0\u4e3a\u8be5\u89d2\u8272\u975e\u5e38\u4e0d\u771f\u5b9e\uff0c\u6240\u4ee5\u4f7f\u7528\u521a\u4f53\u548c\u7269\u7406\u7ec4\u4ef6\u6765\u521b\u9020\u8fd9\u79cd\u884c\u4e3a\u6709\u70b9\u4e0d\u5207\u5b9e\u9645\uff0c\u5e76\u4f1a\u8ba9\u73a9\u5bb6\u4ea7\u751f\u9519\u89c9\u3002\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528\u4e13\u95e8\u7684\u89d2\u8272\u63a7\u5236\u5668\u3002\u89d2\u8272\u63a7\u5236\u5668\u53ea\u662f\u4e00\u4e2a\u80f6\u56ca\u5f62\u72b6\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u78b0\u649e\u4f53")," \uff0c\u53ef\u4ee5\u901a\u8fc7\u811a\u672c\u6765\u547d\u4ee4\u8fd9\u4e2a\u78b0\u649e\u4f53\u5411\u67d0\u4e2a\u65b9\u5411\u79fb\u52a8\u3002\u7136\u540e\uff0c\u63a7\u5236\u5668\u5c06\u6267\u884c\u8fd0\u52a8\uff0c\u4f46\u4f1a\u53d7\u5230\u78b0\u649e\u7684\u7ea6\u675f\u3002\u63a7\u5236\u5668\u5c06\u6cbf\u7740\u5899\u58c1\u6ed1\u52a8\uff0c\u8d70\u4e0a\u697c\u68af\uff08\u5982\u679c\u4f4e\u4e8e  ",(0,l.kt)("strong",{parentName:"p"},"Step Offset"),"  \u503c\uff09\uff0c\u5e76\u8d70\u4e0a  ",(0,l.kt)("strong",{parentName:"p"},"Slope Limit"),"  \u8bbe\u7f6e\u8303\u56f4\u5185\u7684\u659c\u5761\u3002"),(0,l.kt)("p",null,"\u63a7\u5236\u5668\u672c\u8eab\u4e0d\u4f1a\u5bf9\u529b\u4f5c\u51fa\u53cd\u5e94\uff0c\u4e5f\u4e0d\u4f1a\u81ea\u52a8\u63a8\u5f00\u521a\u4f53\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u901a\u8fc7\u89d2\u8272\u63a7\u5236\u5668\u6765\u63a8\u52a8\u521a\u4f53\u6216\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7f16\u5199\u811a\u672c\u901a\u8fc7  ",(0,l.kt)("strong",{parentName:"p"},"OnControllerColliderHit()"),"  \u51fd\u6570\u5bf9\u4e0e\u63a7\u5236\u5668\u78b0\u649e\u7684\u4efb\u4f55\u5bf9\u8c61\u65bd\u529b\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u5e0c\u671b\u73a9\u5bb6\u89d2\u8272\u53d7\u5230\u7269\u7406\u7ec4\u4ef6\u7684\u5f71\u54cd\uff0c\u90a3\u4e48\u53ef\u80fd\u66f4\u9002\u5408\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics3dreference/class-rigidbody"},"\u521a\u4f53"),"\uff0c\u800c\u4e0d\u662f\u89d2\u8272\u63a7\u5236\u5668\u3002"),(0,l.kt)("h3",{id:"\u5fae\u8c03\u89d2\u8272"},"\u5fae\u8c03\u89d2\u8272"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4fee\u6539  ",(0,l.kt)("strong",{parentName:"p"},"Height"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Radius"),"  \u5c5e\u6027\u6765\u9002\u5e94\u89d2\u8272\u7684\u7f51\u683c\u3002\u5bf9\u4e8e\u4eba\u5f62\u89d2\u8272\uff0c\u5efa\u8bae\u59cb\u7ec8\u4f7f\u7528 2 \u7c73\u5de6\u53f3\u7684\u503c\u3002\u5982\u679c\u8f74\u5fc3\u70b9\u5e76\u975e\u521a\u597d\u5728\u89d2\u8272\u7684\u4e2d\u5fc3\uff0c\u8fd8\u53ef\u4ee5\u4fee\u6539\u80f6\u56ca\u4f53\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Center"),"  \u5c5e\u6027\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Step Offset"),"  \u5c5e\u6027\u4e5f\u53ef\u80fd\u6709\u5f71\u54cd\uff0c\u5bf9\u4e8e\u8eab\u9ad8 2 \u7c73\u7684\u4eba\uff0c\u8bf7\u786e\u4fdd\u6b64\u503c\u5728 0.1 \u5230 0.4 \u4e4b\u95f4\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Slope Limit"),"  \u4e0d\u5e94\u592a\u5c0f\u3002\u901a\u5e38\uff0c\u4f7f\u7528 90 \u5ea6\u7684\u503c\u6548\u679c\u6700\u4f73\u3002\u7531\u4e8e\u80f6\u56ca\u4f53\u5f62\u72b6\u7684\u539f\u56e0\uff0c\u89d2\u8272\u63a7\u5236\u5668\u5c06\u65e0\u6cd5\u722c\u5899\u3002"),(0,l.kt)("h3",{id:"\u4e0d\u8981\u88ab\u5361\u4f4f"},"\u4e0d\u8981\u88ab\u5361\u4f4f"),(0,l.kt)("p",null,"\u8981\u6b63\u786e\u8c03\u6574\u89d2\u8272\u63a7\u5236\u5668\uff0c ",(0,l.kt)("strong",{parentName:"p"},"Skin Width"),"  \u5c5e\u6027\u662f\u6700\u91cd\u8981\u7684\u5c5e\u6027\u4e4b\u4e00\u3002 \u5982\u679c\u89d2\u8272\u88ab\u5361\u4f4f\uff0c\u90a3\u4e48\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Skin Width"),"  \u8bbe\u7f6e\u8fc7\u5c0f\u3002 ",(0,l.kt)("strong",{parentName:"p"},"Skin Width"),"  \u5141\u8bb8\u5bf9\u8c61\u8f7b\u5fae\u7a7f\u900f\u63a7\u5236\u5668\uff0c\u4f46\u53ef\u6d88\u9664\u6296\u52a8\u5e76\u9632\u6b62\u88ab\u5361\u4f4f\u3002"),(0,l.kt)("p",null,"\u6700\u597d\u662f\u8ba9  ",(0,l.kt)("strong",{parentName:"p"},"Skin Width"),"  \u7684\u503c\u81f3\u5c11\u5927\u4e8e 0.01 \u5e76\u4e14\u6bd4  ",(0,l.kt)("strong",{parentName:"p"},"Radius"),"  \u7684\u503c\u5927 10%\u3002"),(0,l.kt)("p",null,"\u5efa\u8bae\u5c06  ",(0,l.kt)("strong",{parentName:"p"},"Min Move Distance"),"  \u4fdd\u6301\u4e3a 0\u3002"),(0,l.kt)("p",null,"\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/CharacterController.html"},"\u6b64\u5904"),"\u7684\u89d2\u8272\u63a7\u5236\u5668\u811a\u672c\u53c2\u8003"),(0,l.kt)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u89d2\u8272\u7ecf\u5e38\u88ab\u5361\u4f4f\uff0c\u8bf7\u5c1d\u8bd5\u8c03\u6574  ",(0,l.kt)("strong",{parentName:"li"},"Skin Width")," \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u81ea\u5df1\u7f16\u5199\u811a\u672c\uff0c\u5219\u89d2\u8272\u63a7\u5236\u5668\u53ef\u80fd\u4f1a\u5f71\u54cd\u4f7f\u7528\u7269\u7406\u7ec4\u4ef6\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u65e0\u6cd5\u901a\u8fc7\u7269\u7406\u7ec4\u4ef6\u6765\u5f71\u54cd\u89d2\u8272\u63a7\u5236\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u5728 Inspector \u4e2d\u66f4\u6539\u89d2\u8272\u63a7\u5236\u5668\u5c5e\u6027\u5c06\u5728\u573a\u666f\u4e2d\u91cd\u65b0\u521b\u5efa\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u4efb\u4f55\u73b0\u6709\u7684\u89e6\u53d1\u5668\u89e6\u70b9\u90fd\u5c06\u4e22\u5931\uff0c\u5e76\u4e14\u5728\u518d\u6b21\u79fb\u52a8\u63a7\u5236\u5668\u4e4b\u524d\uff0c\u4e0d\u4f1a\u6536\u5230\u4efb\u4f55 OnTriggerEntered \u6d88\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u7684\u89d2\u8272\u63a7\u5236\u5668\u80f6\u56ca\u4f53\uff08\u6bd4\u5982\u5c04\u7ebf\u6295\u5c04\uff09\u53ef\u80fd\u4f1a\u7565\u6709\u7f29\u5c0f\u3002\u56e0\u6b64\uff0c\u5728\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u5373\u4f7f\u67e5\u8be2\u4f3c\u4e4e\u547d\u4e2d\u4e86\u89d2\u8272\u63a7\u5236\u5668\u7684\u8f85\u52a9\u56fe\u6807\uff0c\u4f46\u5b9e\u9645\u53ef\u80fd\u672a\u547d\u4e2d\u3002")))}m.isMDXComponent=!0}}]);