"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71895],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80698:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"class-DistanceJoint2D",title:"2D \u8ddd\u79bb\u5173\u8282 (Distance Joint 2D)",slug:"/joints2d/class-distance-joint2d"},s="2D \u8ddd\u79bb\u5173\u8282 (Distance Joint 2D)",c={unversionedId:"unity2d/physics2dreference/joints2d/class-DistanceJoint2D",id:"unity2d/physics2dreference/joints2d/class-DistanceJoint2D",title:"2D \u8ddd\u79bb\u5173\u8282 (Distance Joint 2D)",description:"2D \u8ddd\u79bb\u5173\u8282 \u662f\u4e00\u79cd 2D \u5173\u8282\uff0c\u5b83\u8fde\u63a5\u7531 2D \u521a\u4f53 \u7269\u7406\u7ec4\u4ef6\u63a7\u5236\u7684\u4e24\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u4f7f\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u4fdd\u6301\u4e00\u5b9a\u8ddd\u79bb\u3002",source:"@site/docs/unity2d/physics2dreference/joints2d/class-distance-joint2d.md",sourceDirName:"unity2d/physics2dreference/joints2d",slug:"/joints2d/class-distance-joint2d",permalink:"/doc-unity-manual/docs/joints2d/class-distance-joint2d",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/physics2dreference/joints2d/class-distance-joint2d.md",tags:[],version:"current",frontMatter:{id:"class-DistanceJoint2D",title:"2D \u8ddd\u79bb\u5173\u8282 (Distance Joint 2D)",slug:"/joints2d/class-distance-joint2d"},sidebar:"tutorialSidebar",previous:{title:"2D \u5173\u8282",permalink:"/doc-unity-manual/docs/joints2d"},next:{title:"2D \u56fa\u5b9a\u5173\u8282 (Fixed Joint 2D)",permalink:"/doc-unity-manual/docs/joints2d/class-fixed-joint2d"}},p={},d=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],u={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2d-\u8ddd\u79bb\u5173\u8282-distance-joint-2d"},"2D \u8ddd\u79bb\u5173\u8282 (Distance Joint 2D)"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"2D \u8ddd\u79bb\u5173\u8282")," \u662f\u4e00\u79cd 2D \u5173\u8282\uff0c\u5b83\u8fde\u63a5\u7531 ",(0,i.kt)("strong",{parentName:"p"},"2D \u521a\u4f53")," \u7269\u7406\u7ec4\u4ef6\u63a7\u5236\u7684\u4e24\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u4f7f\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u4fdd\u6301\u4e00\u5b9a\u8ddd\u79bb\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/DistanceJoint2DInspector.png",alt:"DistanceJoint2DInspector.png"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Enable Collision")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u6b64\u6846\u53ef\u5141\u8bb8\u4e24\u4e2a\u8fde\u63a5\u7684\u6e38\u620f\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u78b0\u649e\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Connected Rigid Body")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u5b57\u6bb5\u6765\u6307\u5b9a\u8be5 2D \u8ddd\u79bb\u5173\u8282\u8fde\u63a5\u5230\u7684\u53e6\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u3002\u5982\u679c\u5c06\u6b64\u5b57\u6bb5\u4fdd\u7559\u4e3a  ",(0,i.kt)("strong",{parentName:"td"},"None (Rigidbody 2D)")," \uff0c2D \u8ddd\u79bb\u5173\u8282\u7684\u53e6\u4e00\u7aef\u5c06\u56fa\u5b9a\u5230\u7a7a\u95f4\u4e2d\u7531  ",(0,i.kt)("strong",{parentName:"td"},"Connected Anchor"),"  \u8bbe\u7f6e\u6240\u5b9a\u4e49\u7684\u70b9\u3002\u9009\u62e9\u5b57\u6bb5\u53f3\u4fa7\u7684\u5706\u5708\u53ef\u67e5\u770b\u8981\u8fde\u63a5\u5230\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u5217\u8868\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Auto Configure Connected Anchor")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9009\u4e2d\u6b64\u6846\u53ef\u4e3a\u8be5 2D \u8ddd\u79bb\u5173\u8282\u8fde\u63a5\u5230\u7684\u53e6\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u81ea\u52a8\u8bbe\u7f6e\u951a\u70b9\u4f4d\u7f6e\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u5219\u65e0\u9700\u586b\u5199  ",(0,i.kt)("strong",{parentName:"td"},"Connected Anchor"),"  \u5b57\u6bb5\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Anchor")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49 2D \u8ddd\u79bb\u5173\u8282\u7684\u7aef\u70b9\u8fde\u63a5\u5230\u6b64\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\uff08\u4ee5  ",(0,i.kt)("strong",{parentName:"td"},"2D \u521a\u4f53")," \u4e0a\u7684 x\u3001y \u5750\u6807\u8868\u793a\uff09\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Distance")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a 2D \u8ddd\u79bb\u5173\u8282\u5728\u4e24\u4e2a\u6e38\u620f\u5bf9\u8c61\u4e4b\u95f4\u4fdd\u6301\u7684\u8ddd\u79bb\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Max Distance Only")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u5219 2D \u8ddd\u79bb\u5173\u8282\u4ec5\u5f3a\u5236\u6267\u884c\u6700\u5927\u8ddd\u79bb\uff0c\u56e0\u6b64\u8fde\u63a5\u7684\u6e38\u620f\u5bf9\u8c61\u4ecd\u7136\u53ef\u4ee5\u5f7c\u6b64\u9760\u8fd1\uff0c\u4f46\u4e0d\u80fd\u8d85\u51fa  ",(0,i.kt)("strong",{parentName:"td"},"Distance"),"  \u5b57\u6bb5\u5b9a\u4e49\u7684\u8ddd\u79bb\u3002\u5982\u679c\u672a\u542f\u7528\uff0c\u5219\u6e38\u620f\u5bf9\u8c61\u4e4b\u95f4\u7684\u8ddd\u79bb\u4e3a\u56fa\u5b9a\u8ddd\u79bb\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Break Force")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7834\u574f\u5e76\u8fdb\u800c\u5220\u9664 2D \u8ddd\u79bb\u5173\u8282\u6240\u9700\u7684\u4f5c\u7528\u529b\u6c34\u5e73\u3002 ",(0,i.kt)("strong",{parentName:"td"},"Infinity"),"  \u8868\u793a\u5173\u8282\u7262\u4e0d\u53ef\u7834\u3002")))),(0,i.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,i.kt)("p",null,"\u6b64 2D \u5173\u8282\u7684\u76ee\u7684\u662f\u4fdd\u6301\u4e24\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002\u8fd9\u4e24\u4e2a\u70b9\u53ef\u4ee5\u662f\u4e24\u4e2a 2D \u521a\u4f53\u7ec4\u4ef6\uff0c\u6216\u4e00\u4e2a 2D \u521a\u4f53\u7ec4\u4ef6\u548c\u4e16\u754c\u4e2d\u7684\u4e00\u4e2a\u56fa\u5b9a\u4f4d\u7f6e\u3002 \u8981\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"2D \u521a\u4f53")," \u7ec4\u4ef6\u8fde\u63a5\u5230\u4e16\u754c\u4e2d\u7684\u56fa\u5b9a\u4f4d\u7f6e\uff0c\u8bf7\u5c06 ",(0,i.kt)("strong",{parentName:"p"},"Connected Rigidbody"),"  \u5b57\u6bb5\u8bbe\u7f6e\u4e3a None\u3002"),(0,i.kt)("p",null,"\u6b64 2D \u5173\u8282\u4e0d\u65bd\u52a0\u626d\u77e9\u548c\u65cb\u8f6c\u3002\u4f46\u4f1a\u5bf9\u4e24\u4e2a\u8fde\u63a5\u70b9\u65bd\u52a0\u7ebf\u6027\u529b\uff0c\u4f7f\u7528\u975e\u5e38\u521a\u6027\u7684\u6a21\u62df\u5f39\u7c27\u6765\u4fdd\u6301\u8ddd\u79bb\u3002\u8be5\u5f39\u7c27\u4e0d\u53ef\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u6b64 2D \u5173\u8282\u5177\u6709\u53ef\u9009\u7684\u7ea6\u675f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ea6\u675f A\uff1a\u5728\u4e24\u4e2a\u521a\u4f53\u4e0a\u7684\u4e24\u4e2a\u951a\u70b9\u4e4b\u95f4\u7ef4\u6301\u56fa\u5b9a\u8ddd\u79bb\uff08\u53d6\u6d88\u9009\u4e2d  ",(0,i.kt)("strong",{parentName:"li"},"Max Distance Only"),"  \u65f6\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7ea6\u675f B\uff1a\u5728\u4e24\u4e2a\u521a\u4f53\u4e0a\u7684\u4e24\u4e2a\u951a\u70b9\u4e4b\u95f4\u4ec5\u7ef4\u6301\u6700\u5927\u8ddd\u79bb\uff08\u9009\u4e2d  ",(0,i.kt)("strong",{parentName:"li"},"Max Distance Only"),"  \u65f6\uff09\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528\u6b64 2D \u5173\u8282\u6784\u5efa\u7684\u7269\u7406\u5bf9\u8c61\u5c31\u597d\u50cf\u662f\u901a\u8fc7\u53ef\u65cb\u8f6c\u7684\u521a\u6027\u8fde\u63a5\u65b9\u5f0f\u76f8\u8fde\u4e00\u6837\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u7ea6\u675f A\uff08\u53d6\u6d88\u9009\u4e2d  ",(0,i.kt)("strong",{parentName:"li"},"Max Distance Only")," \uff09\u6765\u521b\u5efa\u56fa\u5b9a\u957f\u5ea6\u7684\u8fde\u63a5\uff0c\u4f8b\u5982\u81ea\u884c\u8f66\u4e0a\u7684\u4e24\u4e2a\u8f66\u8f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u7ea6\u675f B\uff08\u9009\u4e2d  ",(0,i.kt)("strong",{parentName:"li"},"Max Distance Only")," \uff09\u6765\u521b\u5efa\u53d7\u9650\u957f\u5ea6\u7684\u8fde\u63a5\uff0c\u4f8b\u5982\u5411\u7740\u548c\u8fdc\u79bb\u624b\u79fb\u52a8\u7684\u6e9c\u6e9c\u7403\u3002")),(0,i.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/joints2d"},"2D \u5173\u8282"),"\u4e2d\u7684",(0,i.kt)("em",{parentName:"p"},"\u8be6\u60c5\u548c\u63d0\u793a"),"\u4ee5\u4e86\u89e3\u6240\u6709 2D \u5173\u8282\u7684\u6709\u7528\u80cc\u666f\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);