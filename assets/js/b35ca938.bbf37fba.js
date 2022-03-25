"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61473],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,g=u["".concat(i,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(g,o(o({ref:e},m),{},{components:a})):n.createElement(g,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72498:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],p={id:"class-Physics2DManager",title:"Physics 2D",slug:"/comp-manager-group/class-physics2dmanager"},i="Physics 2D",d={unversionedId:"unity-overview/editor-features/comp-manager-group/class-Physics2DManager",id:"unity-overview/editor-features/comp-manager-group/class-Physics2DManager",title:"Physics 2D",description:"\u901a\u8fc7\u4ee5\u4e0b\u5c5e\u6027\u5e94\u7528  Physics 2D  \u7684\u5168\u5c40\u8bbe\u7f6e\u3002\u5982\u679c\u8981\u7ba1\u7406 3D \u7269\u7406\u7684\u5168\u5c40\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u9605 Physics Manager \u8bbe\u7f6e\u3002",source:"@site/docs/unity-overview/editor-features/comp-manager-group/class-physics2dmanager.md",sourceDirName:"unity-overview/editor-features/comp-manager-group",slug:"/comp-manager-group/class-physics2dmanager",permalink:"/doc-unity-manual/docs/comp-manager-group/class-physics2dmanager",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/editor-features/comp-manager-group/class-physics2dmanager.md",tags:[],version:"current",frontMatter:{id:"class-Physics2DManager",title:"Physics 2D",slug:"/comp-manager-group/class-physics2dmanager"},sidebar:"tutorialSidebar",previous:{title:"\u7269\u7406 (Physics)",permalink:"/doc-unity-manual/docs/comp-manager-group/class-physics-manager"},next:{title:"Player",permalink:"/doc-unity-manual/docs/class-player-settings"}},m={},s=[{value:"Job Options",id:"job-options",level:2},{value:"Gizmos",id:"gizmos",level:2}],u={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"physics-2d"},"Physics 2D"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u5c5e\u6027\u5e94\u7528  ",(0,l.kt)("strong",{parentName:"p"},"Physics 2D"),"  \u7684\u5168\u5c40\u8bbe\u7f6e\u3002\u5982\u679c\u8981\u7ba1\u7406 3D \u7269\u7406\u7684\u5168\u5c40\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-physics-manager"},"Physics Manager")," \u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Physics2D_properties.png",alt:"Physics 2D Inspector \u8bbe\u7f6e"})),(0,l.kt)("p",null,"Physics 2D Inspector \u8bbe\u7f6e"),(0,l.kt)("p",null,"Physics 2D \u8bbe\u7f6e\u5b9a\u4e49\u4e86\u7269\u7406\u6a21\u62df\u7cbe\u5ea6\u7684\u9650\u5236\u3002\u66f4\u51c6\u786e\u7684\u6a21\u62df\u9700\u8981\u66f4\u591a\u7684\u5904\u7406\u5f00\u9500\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u53ef\u7528\u4e8e\u5728\u7cbe\u5ea6\u548c\u6700\u9002\u5408\u9879\u76ee\u7684\u6027\u80fd\u4e4b\u95f4\u8fdb\u884c\u6743\u8861\u8c03\u6574\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics-section"},"\u7269\u7406\u7cfb\u7edf"),"\u9875\u9762\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Gravity")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5e94\u7528\u4e8e\u6240\u6709 ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/physics2dreference/class-rigidbody2d"},"2D \u521a\u4f53"),"\u6e38\u620f\u5bf9\u8c61\u7684\u91cd\u529b\u5927\u5c0f\u3002\u901a\u5e38\uff0c\u4ec5\u4e3a y \u8f74\u7684\u8d1f\u65b9\u5411\u8bbe\u7f6e\u91cd\u529b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default Material")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6ca1\u6709\u4e3a\u5355\u72ec 2D \u78b0\u649e\u4f53\u5206\u914d\u6750\u8d28\u7684\u60c5\u51b5\u4e0b\u9700\u8981\u4f7f\u7528\u7684 ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/physics2dreference/class-physics-material2d"},"2D \u7269\u7406\u6750\u8d28"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Velocity Iterations")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7269\u7406\u5f15\u64ce\u4e3a\u5904\u7406\u901f\u5ea6\u5f71\u54cd\u800c\u8fdb\u884c\u7684\u8fed\u4ee3\u6b21\u6570\u3002\u6570\u5b57\u8d8a\u5927\uff0c\u7269\u7406\u8ba1\u7b97\u8d8a\u51c6\u786e\uff0c\u4f46\u4ee3\u4ef7\u662f CPU \u65f6\u95f4\u589e\u52a0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Position Iterations")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7269\u7406\u5f15\u64ce\u4e3a\u5904\u7406\u4f4d\u7f6e\u53d8\u5316\u800c\u8fdb\u884c\u7684\u8fed\u4ee3\u6b21\u6570\u3002\u6570\u5b57\u8d8a\u5927\uff0c\u7269\u7406\u8ba1\u7b97\u8d8a\u51c6\u786e\uff0c\u4f46\u4ee3\u4ef7\u662f CPU \u65f6\u95f4\u589e\u52a0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Velocity Threshold")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5f39\u6027\u78b0\u649e\u7684\u9608\u503c\u3002Unity \u5c06\u76f8\u5bf9\u901f\u5ea6\u4f4e\u4e8e\u6b64\u503c\u7684\u78b0\u649e\u89c6\u4e3a\u975e\u5f39\u6027\u78b0\u649e\uff08\u5373\uff0c\u78b0\u649e\u7684\u6e38\u620f\u5bf9\u8c61\u4e0d\u4f1a\u76f8\u4e92\u53cd\u5f39\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Linear Correction")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u89e3\u7b97\u7ea6\u675f\u65f6\u4f7f\u7528\u7684\u6700\u5927\u7ebf\u6027\u4f4d\u7f6e\u6821\u6b63\uff08\u8303\u56f4\u4ece 0.0001 \u5230 1000000\uff09\u3002\u8fd9\u6709\u52a9\u4e8e\u9632\u6b62\u8fc7\u51b2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Angular Correction")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u89e3\u7b97\u7ea6\u675f\u65f6\u4f7f\u7528\u7684\u6700\u5927\u89d2\u5ea6\u6821\u6b63\uff08\u8303\u56f4\u4ece 0.0001 \u5230 1000000\uff09\u3002\u8fd9\u6709\u52a9\u4e8e\u9632\u6b62\u8fc7\u51b2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Translation Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4efb\u4f55\u7269\u7406\u66f4\u65b0\u671f\u95f4 2D \u521a\u4f53\u6e38\u620f\u5bf9\u8c61\u7684\u6700\u5927\u7ebf\u6027\u901f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Rotation Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4efb\u4f55\u7269\u7406\u66f4\u65b0\u671f\u95f4 2D \u521a\u4f53\u6e38\u620f\u5bf9\u8c61\u7684\u6700\u5927\u65cb\u8f6c\u901f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Baumgarte Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7528\u4e8e\u786e\u5b9a Unity \u89e3\u7b97\u78b0\u649e\u91cd\u53e0\u901f\u5ea6\u7684\u7f29\u653e\u56e0\u5b50\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Baumgarte Time of Impact Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7528\u4e8e\u786e\u5b9a Unity \u89e3\u7b97\u649e\u51fb\u65f6\u95f4\u91cd\u53e0\u901f\u5ea6\u7684\u7f29\u653e\u56e0\u5b50\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Time to Sleep")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 2D \u521a\u4f53\u505c\u6b62\u79fb\u52a8\u4e4b\u540e\u800c\u8fdb\u5165\u7761\u7720\u72b6\u6001\u4e4b\u524d\u5fc5\u987b\u7ecf\u8fc7\u7684\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Linear Sleep Tolerance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7ebf\u6027\u901f\u5ea6\uff0c\u5728\u4f4e\u4e8e\u8be5\u901f\u5ea6\u65f6\uff0c2D \u521a\u4f53\u5728\u7ecf\u8fc7  ",(0,l.kt)("strong",{parentName:"td"},"Time to Sleep"),"  \u8fc7\u540e\u8fdb\u5165\u7761\u7720\u72b6\u6001\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Angular Sleep Tolerance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u65cb\u8f6c\u901f\u5ea6\uff0c\u5728\u4f4e\u4e8e\u8be5\u901f\u5ea6\u65f6\uff0c2D \u521a\u4f53\u5728\u7ecf\u8fc7  ",(0,l.kt)("strong",{parentName:"td"},"Time to Sleep"),"  \u8fc7\u540e\u8fdb\u5165\u7761\u7720\u72b6\u6001\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default Contact Offset")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u78b0\u649e\u4f53\u7684\u63a5\u8fd1\u8ddd\u79bb\u503c\u8bbe\u7f6e\u4e3a\u76f8\u63a5\u89e6\uff0c\u5373\u4f7f\u5b83\u4eec\u5b9e\u9645\u4e0a\u6ca1\u6709\u63a5\u89e6\u3002\u8ddd\u79bb\u5c0f\u4e8e\u5176 contactOffset \u503c\u4e4b\u548c\u7684\u78b0\u649e\u4f53\u5c06\u4ea7\u751f\u63a5\u89e6\u3002\u8fd9\u6837\uff0c\u5373\u4f7f\u5bf9\u8c61\u7a0d\u5fae\u5206\u5f00\uff0c\u4e5f\u5141\u8bb8\u78b0\u649e\u68c0\u6d4b\u7cfb\u7edf\u9884\u6d4b\u6027\u5730\u5f3a\u5236\u6267\u884c\u63a5\u89e6\u7ea6\u675f\u3002 ",(0,l.kt)("strong",{parentName:"td"},"\u8b66\u544a\uff1a")," \u5c06\u6b64\u503c\u964d\u4f4e\u592a\u591a\u53ef\u80fd\u4f1a\u524a\u5f31 Unity \u8ba1\u7b97\u8fde\u7eed\u591a\u8fb9\u5f62\u78b0\u649e\u7684\u80fd\u529b\u3002\u76f8\u53cd\uff0c\u6b64\u503c\u589e\u5927\u8fc7\u591a\u53ef\u80fd\u4f1a\u9020\u6210\u9876\u70b9\u78b0\u649e\u7455\u75b5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Fixed Update"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u5c5e\u6027\u5c06\u4f7f Unity \u5728\u8c03\u7528 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.FixedUpdate.html"},"MonoBehaviour.FixedUpdate")," \u540e\u7acb\u5373\u6267\u884c\u7269\u7406\u6a21\u62df\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Update"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u5c5e\u6027\u5c06\u4f7f Unity \u5728\u8c03\u7528 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html"},"MonoBehaviour.Update")," \u540e\u7acb\u5373\u6267\u884c\u7269\u7406\u6a21\u62df\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Script"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u5c5e\u6027\u5c06\u901a\u8fc7",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/ScriptReference/Physics2D.Simulate.html"},"\u811a\u672c"),"\u624b\u52a8\u6267\u884c\u7269\u7406\u6a21\u62df\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Queries Hit Triggers")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b\u8ba9\u6807\u8bb0\u4e3a ",(0,l.kt)("strong",{parentName:"td"},"\u89e6\u53d1\u5668")," \u7684 2D \u78b0\u649e\u4f53\u5728\u4efb\u4f55\u7269\u7406\u67e5\u8be2\uff08\u5982\u7ebf\u6027\u6295\u5c04\u6216\u5c04\u7ebf\u6295\u5c04\uff09\u4e0e\u5b83\u4eec\u76f8\u4ea4\u65f6\u8fd4\u56de\u547d\u4e2d\uff0c\u8bf7\u542f\u7528\u6b64\u9009\u9879\u3002\u9ed8\u8ba4\u5df2\u542f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Queries Start In Colliders")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5e0c\u671b\u4f7f 2D \u78b0\u649e\u4f53\u4e2d\u542f\u52a8\u7684\u7269\u7406\u67e5\u8be2\u68c0\u6d4b\u662f\u5728\u54ea\u4e2a\u78b0\u649e\u4f53\u4e2d\u5f00\u59cb\u7684\uff0c\u8bf7\u542f\u7528\u6b64\u9009\u9879\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Callbacks On Disable")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u5728\u7981\u7528\u5177\u6709\u63a5\u89e6\u70b9\u7684\u78b0\u649e\u4f53\u65f6\u751f\u6210\u78b0\u649e\u56de\u8c03\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Reuse Collision Callbacks")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u8bbe\u7f6e\u5c06\u4f7f\u7269\u7406\u5f15\u64ce\u5bf9\u6240\u6709\u78b0\u649e\u56de\u8c03\u91cd\u7528\u5355\u4e2a Collision2D \u5b9e\u4f8b\u3002\u5982\u679c\u5c06\u5176\u7981\u7528\uff0c\u5219\u7269\u7406\u5f15\u64ce\u4f1a\u4e3a\u6bcf\u4e2a\u78b0\u649e\u56de\u8c03\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Collision2D \u5b9e\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auto Sync Transforms")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u81ea\u52a8\u5c06\u53d8\u6362\u66f4\u6539\u4e0e\u7269\u7406\u7cfb\u7edf\u540c\u6b65\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Job Options (Experimental)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u53c2\u9605\u4e0b\u9762\u7684 ",(0,l.kt)("a",{parentName:"td",href:"#job-options"},"Job Options")," \u90e8\u5206\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Gizmos")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u53c2\u9605\u4e0b\u9762\u7684 ",(0,l.kt)("a",{parentName:"td",href:"#gizmos"},"Gizmos")," \u90e8\u5206\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Layer Collision Matrix")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/layers/layer-based-collision"},"\u57fa\u4e8e\u5c42\u7684\u78b0\u649e"),"\u68c0\u6d4b\u7cfb\u7edf\u7684\u884c\u4e3a\u65b9\u5f0f\u3002\u9009\u62e9\u78b0\u649e\u77e9\u9635\u4e2d\u7684\u54ea\u4e9b\u5c42\u4e0e\u5176\u4ed6\u5c42\u4ea4\u4e92\uff08\u52fe\u9009\u76f8\u5e94\u5c42\u5373\u53ef\uff09\u3002")))),(0,l.kt)("h2",{id:"job-options"},"Job Options"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Job Options"),"  \u90e8\u5206\u4e2d\u7684\u8bbe\u7f6e\u5141\u8bb8\u60a8\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/job-system"},"C# \u4f5c\u4e1a\u7cfb\u7edf"),"\u6765\u914d\u7f6e\u591a\u7ebf\u7a0b\u7269\u7406\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Physics2DManager-Jobs.png",alt:"Job Options \u90e8\u5206"})),(0,l.kt)("p",null,"Job Options \u90e8\u5206"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Multithreading")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u4f1a\u4f7f\u7528\u4f5c\u4e1a\u7cfb\u7edf\u6267\u884c\u6a21\u62df\u6b65\u9aa4\uff0c\u5e76\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\u4e2d\u7684\u5176\u4f59\u90e8\u5206\u63a7\u5236\u5982\u4f55\u5b9e\u73b0\u8be5\u529f\u80fd\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Consistency Sorting")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4fdd\u6301\u4e00\u81f4\u7684\u5904\u7406\u987a\u5e8f\u5bf9\u4e8e\u6a21\u62df\u5341\u5206\u91cd\u8981\uff0c\u8bf7\u542f\u7528\u6b64\u9009\u9879\u3002",(0,l.kt)("br",null),"\u5728\u591a\u4e2a CPU \u7ebf\u7a0b\u4e2d\u6267\u884c\u6a21\u62df\u6b65\u9aa4\u4f1a\u751f\u6210\u5355\u72ec\u7684\u6570\u636e\u6279\u6b21\u3002\u5904\u7406\u8fd9\u4e9b\u5355\u72ec\u7684\u6279\u6b21\u4f1a\u964d\u4f4e\u5904\u7406\u987a\u5e8f\u7684\u786e\u5b9a\u6027\uff0c\u4e0d\u8fc7\u4f1a\u751f\u6210\u66f4\u5feb\u7684\u7ed3\u679c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Interpolation Poses Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8fdb\u884c\u63d2\u503c\u7684\u6700\u5c0f ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/physics2dreference/class-rigidbody2d"},"2D \u521a\u4f53"),"\u5bf9\u8c61\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New Contacts Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u67e5\u627e\u7684\u6700\u5c0f\u65b0\u63a5\u89e6\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collide Contacts Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u78b0\u649e\u7684\u6700\u5c0f\u63a5\u89e6\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Clear Flags Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u6e05\u9664\u7684\u6700\u5c0f\u6807\u5fd7\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Clear Body Forces Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u6e05\u9664\u7684\u6700\u5c0f\u5b9e\u4f53\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sync Discrete Fixtures Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u7684\u79bb\u6563\u5b64\u5c9b\u89e3\u7b97\u8fc7\u7a0b\u4e2d\uff0c\u8981\u5728\u7c97\u7b5b\u9636\u6bb5\u4e2d\u540c\u6b65\u7684\u6700\u5c0f\u706f\u5177\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sync Continuous Fixtures Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u7684\u8fde\u7eed\u5b64\u5c9b\u89e3\u7b97\u8fc7\u7a0b\u4e2d\uff0c\u8981\u5728\u7c97\u7b5b\u9636\u6bb5\u4e2d\u540c\u6b65\u7684\u6700\u5c0f\u706f\u5177\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Find Nearest Contacts Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u67e5\u627e\u7684\u6700\u5c0f\u6700\u8fd1\u63a5\u89e6\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Update Trigger Contacts Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u66f4\u65b0\u7684\u6700\u5c0f\u89e6\u53d1\u5668\u63a5\u89e6\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Island Solver Cost Threshold")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u79bb\u6563\u5b64\u5c9b\u89e3\u7b97\u8fc7\u7a0b\u4e2d\u67d0\u4e2a\u5b64\u5c9b\u4e2d\u6240\u6709\u5b9e\u4f53\u3001\u63a5\u89e6\u548c\u5173\u8282\u7684\u6700\u5c0f\u9608\u503c\u6210\u672c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Island Solver Body Cost Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u79bb\u6563\u5b64\u5c9b\u89e3\u7b97\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u5b9e\u4f53\u7684\u6210\u672c\u89c4\u6a21\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Island Solver Contact Cost Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u79bb\u6563\u5b64\u5c9b\u89e3\u7b97\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u63a5\u89e6\u7684\u6210\u672c\u89c4\u6a21\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Island Solver Joint Cost Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u79bb\u6563\u5b64\u5c9b\u89e3\u7b97\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u5173\u8282\u7684\u6210\u672c\u89c4\u6a21\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Island Solver Bodies Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6267\u884c\u5b64\u5c9b\u89e3\u7b97\u65f6\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u89e3\u7b97\u7684\u6700\u5c0f\u5b9e\u4f53\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Island Solver Contacts Per Job")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5728\u6267\u884c\u5b64\u5c9b\u89e3\u7b97\u65f6\u5728\u6bcf\u4e2a\u6a21\u62df\u4f5c\u4e1a\u4e2d\u8981\u89e3\u7b97\u7684\u6700\u5c0f\u63a5\u89e6\u6570\u3002")))),(0,l.kt)("h2",{id:"gizmos"},"Gizmos"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Physics2DManager-Gizmos.png",alt:"Job Options \u90e8\u5206"})),(0,l.kt)("p",null,"Job Options \u90e8\u5206"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Always Show Colliders")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u663e\u793a\u78b0\u649e\u4f53\u8f85\u52a9\u56fe\u6807\uff08\u5373\u4f7f\u672a\u9009\u62e9\u8f85\u52a9\u56fe\u6807\u4e5f\u663e\u793a\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Show Collider Sleep")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u663e\u793a\u6bcf\u4e2a\u78b0\u649e\u4f53\u7684\u7761\u7720\u72b6\u6001\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collider Awake Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u989c\u8272\u4ee5\u6307\u793a\u78b0\u649e\u4f53\uff08\u5b9e\u4f53\uff09\u5904\u4e8e\u5524\u9192\u72b6\u6001\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collider Asleep Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u989c\u8272\u4ee5\u6307\u793a\u78b0\u649e\u4f53\uff08\u5b9e\u4f53\uff09\u5904\u4e8e\u7761\u7720\u72b6\u6001\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Show Collider Contacts")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u663e\u793a\u6bcf\u4e2a\u8f85\u52a9\u56fe\u6807\u7684\u5f53\u524d\u63a5\u89e6\u70b9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Contact Arrow Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u78b0\u649e\u4f53\u8f85\u52a9\u56fe\u6807\u4e0a\u663e\u793a\u7684\u63a5\u89e6\u7bad\u5934\u7684\u5927\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collider Contact Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8f85\u52a9\u56fe\u6807\u989c\u8272\u4ee5\u6307\u793a\u78b0\u649e\u4f53\u63a5\u89e6\u70b9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Show Collider AABB")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u663e\u793a\u78b0\u649e\u4f53\u7684\u5305\u56f4\u76d2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collider AABB Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u78b0\u649e\u4f53\u5305\u56f4\u76d2\u7684\u8f85\u52a9\u56fe\u6807\u989c\u8272\u3002")))),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018\u201310\u201302 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8bbe\u7f6e (Unified Settings) \u66f4\u65b0")))}k.isMDXComponent=!0}}]);