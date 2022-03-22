"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45540],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||l;return n?r.createElement(d,i(i({ref:e},s),{},{components:n})):r.createElement(d,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54224:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"physics-articulations",title:"\u7269\u7406\u63a5\u5408",slug:"/physics-overview/physics-articulations"},o="\u7269\u7406\u63a5\u5408",u={unversionedId:"physics-section/physics-overview/physics-articulations",id:"physics-section/physics-overview/physics-articulations",title:"\u7269\u7406\u63a5\u5408",description:"\u4e00\u4e2a\u7269\u7406\u63a5\u5408\u662f\u4e00\u7ec4\u4ee5\u903b\u8f91\u6811\u7684\u5f62\u5f0f\u7ec4\u7ec7\u800c\u6210\u7684\u63a5\u5408\u4f53\uff0c\u5176\u4e2d\u6bcf\u4e2a\u7236\u5b50\u5173\u7cfb\u90fd\u53cd\u6620\u4e86\u76f8\u4e92\u7ea6\u675f\u7684\u76f8\u5bf9\u8fd0\u52a8\u3002",source:"@site/docs/physics-section/physics-overview/physics-articulations.md",sourceDirName:"physics-section/physics-overview",slug:"/physics-overview/physics-articulations",permalink:"/docs/physics-overview/physics-articulations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/physics-section/physics-overview/physics-articulations.md",tags:[],version:"current",frontMatter:{id:"physics-articulations",title:"\u7269\u7406\u63a5\u5408",slug:"/physics-overview/physics-articulations"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u8282",permalink:"/docs/physics-overview/joints"},next:{title:"\u7269\u7406\u8c03\u8bd5\u53ef\u89c6\u5316",permalink:"/docs/physics-overview/physics-debug-visualization"}},s={},c=[{value:"\u63a5\u5408\u8bbe\u7f6e\u5bf9\u6bd4\u5e38\u89c4\u5173\u8282",id:"\u63a5\u5408\u8bbe\u7f6e\u5bf9\u6bd4\u5e38\u89c4\u5173\u8282",level:2},{value:"\u5728 Unity \u4e2d\u6784\u5efa\u63a5\u5408",id:"\u5728-unity-\u4e2d\u6784\u5efa\u63a5\u5408",level:2},{value:"\u63a5\u5408\u5173\u8282\u7c7b\u578b\u548c\u81ea\u7531\u5ea6",id:"\u63a5\u5408\u5173\u8282\u7c7b\u578b\u548c\u81ea\u7531\u5ea6",level:2},{value:"\u7269\u7406\u63a5\u5408\u6f14\u793a",id:"\u7269\u7406\u63a5\u5408\u6f14\u793a",level:2}],k={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7269\u7406\u63a5\u5408"},"\u7269\u7406\u63a5\u5408"),(0,l.kt)("p",null,"\u4e00\u4e2a\u7269\u7406\u63a5\u5408\u662f\u4e00\u7ec4\u4ee5\u903b\u8f91\u6811\u7684\u5f62\u5f0f\u7ec4\u7ec7\u800c\u6210\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/physics3dreference/class-articulation-body"},"\u63a5\u5408\u4f53"),"\uff0c\u5176\u4e2d\u6bcf\u4e2a\u7236\u5b50\u5173\u7cfb\u90fd\u53cd\u6620\u4e86\u76f8\u4e92\u7ea6\u675f\u7684\u76f8\u5bf9\u8fd0\u52a8\u3002"),(0,l.kt)("p",null,"\u7269\u7406\u63a5\u5408\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u6d89\u53ca\u5173\u8282\u7684\u975e\u6e38\u620f\u5de5\u4e1a\u5e94\u7528\u63d0\u4f9b\u903c\u771f\u7684\u7269\u7406\u884c\u4e3a\u3002\u76f8\u6bd4",(0,l.kt)("a",{parentName:"p",href:"/docs/physics-overview/joints"},"\u5e38\u89c4\u5173\u8282"),"\uff0c\u7269\u7406\u63a5\u5408\u5728\u6a21\u62df\u673a\u68b0\u81c2\u548c\u8fd0\u52a8\u94fe\u7b49\u65b9\u9762\u8981\u4fbf\u6377\u5f88\u591a\u3002"),(0,l.kt)("h2",{id:"\u63a5\u5408\u8bbe\u7f6e\u5bf9\u6bd4\u5e38\u89c4\u5173\u8282"},"\u63a5\u5408\u8bbe\u7f6e\u5bf9\u6bd4\u5e38\u89c4\u5173\u8282"),(0,l.kt)("p",null,"\u5728\u7528\u4e00\u4e2a\u5173\u8282\u8fde\u63a5\u4e24\u4e2a\u7269\u7406\u4f53\u7684\u6700\u57fa\u672c\u573a\u666f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u63a5\u5408\u6216\u4f7f\u7528\u5e38\u89c4\u5173\u8282\uff0c\u5982\u4e0b\u8868\u6240\u8ff0\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"th"},"\u63a5\u5408\u8bbe\u7f6e")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u4f7f\u7528\u5e38\u89c4\u5173\u8282\u8bbe\u7f6e")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c42\u7ea7\u89c6\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2022 \u6e38\u620f\u5bf9\u8c61 + \u63a5\u5408\u4f53",(0,l.kt)("br",null),"\xa0\xa0\xa0\u2022 \u6e38\u620f\u5bf9\u8c61 + \u63a5\u5408\u4f53"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2022 \u6e38\u620f\u5bf9\u8c61 + \u521a\u4f53",(0,l.kt)("br",null),"\u2022 \u6e38\u620f\u5bf9\u8c61 + \u521a\u4f53 + \u5173\u8282")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u7cfb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e38\u620f\u5bf9\u8c61\u5177\u6709\u5c42\u7ea7\u5173\u7cfb\uff08\u7236\u5b50\uff09\u3002",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f\uff1a")," \u7269\u7406\u5f15\u64ce\u4f7f\u7528 Unity \u53d8\u6362\u5c42\u7ea7\u89c6\u56fe\u6765\u8868\u8fbe\u7236\u5b50\u5173\u7cfb\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e38\u620f\u5bf9\u8c61\u4e0d\u4e00\u5b9a\u5177\u6709\u5c42\u7ea7\u5173\u7cfb\u3002",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f\uff1a")," \u5728\u66f4\u9ad8\u7ea7\u7684\u573a\u666f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u81ea\u7531\u6a21\u62df\u8fd0\u52a8\u73af\u8def\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u7406\u4f53"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e24\u4e2a\u6e38\u620f\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u63a5\u5408\u4f53\u7ec4\u4ef6\uff0c\u5b83\u5b9a\u4e49\u4e86\u7269\u7406\u4f53\u5c5e\u6027\uff08\u7b49\u7b49\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e24\u4e2a\u6e38\u620f\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u521a\u4f53\u7ec4\u4ef6\uff0c\u5b83\u5b9a\u4e49\u4e86\u7269\u7406\u4f53\u5c5e\u6027\uff08\u7b49\u7b49\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Joint"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u6e38\u620f\u5bf9\u8c61\u7684\u63a5\u5408\u4f53\u5305\u542b\u5173\u8282\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u9009\u62e9\u5173\u8282\u7c7b\u578b\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u4e2d\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u4e5f\u6709\u4e00\u4e2a\u5173\u8282\u7ec4\u4ef6\u3002\u5173\u8282\u5c5e\u6027\u53d6\u51b3\u4e8e\u60a8\u6dfb\u52a0\u7684\u5173\u8282\u7ec4\u4ef6\u7684\u7c7b\u578b\u3002")))),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u4e24\u79cd\u60c5\u51b5\u4e0b\u7684\u603b\u4f53\u7ed3\u679c\u884c\u4e3a\u5e76\u4e0d\u76f8\u540c\uff0c\u5c24\u5176\u662f\u5982\u679c\u60a8\u5c06\u6b64\u539f\u5219\u6269\u5c55\u5230\u591a\u4e2a\u7269\u7406\u4f53\u548c\u5173\u8282\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5c1d\u8bd5\u4f7f\u7528\u5e38\u89c4\u5173\u8282\u5bf9\u8fd0\u52a8\u94fe\u8fdb\u884c\u5efa\u6a21\uff0c\u4f8b\u5982\u5728\u5e03\u5a03\u5a03\u3001\u673a\u68b0\u81c2\u6216\u5177\u6709\u591a\u4e2a\u5e76\u884c\u94f0\u94fe\u7684\u673a\u6784\u4e2d\uff0c\u7269\u7406\u5f15\u64ce\u53ef\u80fd\u4f1a\u9047\u5230\u65e0\u6cd5\u6c42\u89e3\u7684\u60c5\u51b5\u5e76\u9057\u7559\u4e00\u4e9b\u65e0\u6cd5\u6ee1\u8db3\u7684\u7ea6\u675f\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5361\u987f\u548c\u4e0d\u5207\u5b9e\u9645\u7684\u8fd0\u52a8\u3002\u8fd9\u4e9b\u5173\u8282\u4e0d\u4ec5\u770b\u8d77\u6765\u5f88\u602a\u5f02\uff0c\u800c\u4e14\u4e5f\u4e0d\u53ef\u80fd\u5c06\u5b83\u4eec\u7528\u4e8e\u6a21\u62df\u771f\u5b9e\u8bbe\u5907\uff0c\u4ece\u800c\u963b\u788d\u5bf9\u5de5\u4e1a\u8bbe\u8ba1\u8fdb\u884c\u5efa\u6a21\u6216\u539f\u578b\u6784\u5efa\u3002"),(0,l.kt)("h2",{id:"\u5728-unity-\u4e2d\u6784\u5efa\u63a5\u5408"},"\u5728 Unity \u4e2d\u6784\u5efa\u63a5\u5408"),(0,l.kt)("p",null,"\u8981\u5728 Unity \u4e2d\u6784\u5efa\u7269\u7406\u63a5\u5408\uff0c\u60a8\u5fc5\u987b\u5411\u6784\u6210\u63a5\u5408\u7684\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u63a5\u5408\u4f53\u7ec4\u4ef6\u3002\u6bcf\u4e2a\u63a5\u5408\u4f53\u7ec4\u4ef6\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u96c6\u4e2d\u5728\u4e00\u4e2a\u4f4d\u7f6e\u8fdb\u884c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u7269\u7406\u4f53\u5c5e\u6027\u3002\u57fa\u672c\u4e0a\uff0c\u5b83\u7684\u8d28\u91cf\u53ca\u5176\u5bf9\u7269\u7406\u73af\u5883\u7684\u54cd\u5e94\u65b9\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6e38\u620f\u5bf9\u8c61\u94fe\u63a5\u5230\u5176\u7236\u6e38\u620f\u5bf9\u8c61\u7684\u5173\u8282\u7684\u7c7b\u578b\u548c\u5c5e\u6027\uff08\u63a5\u5408\u7684\u6839\u9664\u5916\uff09\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u663e\u793a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u7269\u7406\u63a5\u5408\uff0c\u6d89\u53ca 3 \u4e2a\u7269\u7406\u4f53\u548c 2 \u4e2a\u5173\u8282\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/physics-articulation-concept.png",alt:"physics-articulation-concept.png"})),(0,l.kt)("p",null,"\u8981\u5728 Unity \u4e2d\u6784\u5efa\u8fd9\u6837\u7684\u63a5\u5408\uff1a"),(0,l.kt)("p",null,"1.\u521b\u5efa 3 \u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u7ebf\u6027\u5c42\u7ea7\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"2.\u5206\u522b\u4e3a\u8fd9 3 \u4e2a\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u63a5\u5408\u4f53\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"3.\u914d\u7f6e\u6bcf\u4e2a\u63a5\u5408\u4f53\u7ec4\u4ef6\uff08\u6839\u636e\u4e0a\u56fe\uff09\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"GameObject"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63a5\u5408\u4f53\u7ec4\u4ef6\u914d\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A\uff08\u6839\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u60a8\u53ea\u80fd\u4e3a\u6e38\u620f\u5bf9\u8c61 A \u5b9a\u4e49\u7269\u7406\u4f53\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"\u60a8\u53ef\u4ee5\u5b9a\u4e49\uff1a",(0,l.kt)("br",null),"\u2022 \u6e38\u620f\u5bf9\u8c61 B \u7684\u7269\u7406\u4f53\u5c5e\u6027\u3002",(0,l.kt)("br",null),"\u2022 \u4e0e\u6e38\u620f\u5bf9\u8c61 A \u8fde\u63a5\u7684\u5173\u8282\u7684\u7c7b\u578b\u548c\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"\u60a8\u53ef\u4ee5\u5b9a\u4e49\uff1a",(0,l.kt)("br",null),"\u2022 \u6e38\u620f\u5bf9\u8c61 C \u7684\u7269\u7406\u4f53\u5c5e\u6027\u3002",(0,l.kt)("br",null),"\u2022 \u4e0e\u6e38\u620f\u5bf9\u8c61 B \u8fde\u63a5\u7684\u5173\u8282\u7684\u7c7b\u578b\u548c\u5c5e\u6027\u3002")))),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u6839\u636e\u5b9a\u4e49\uff0c\u4e00\u4e2a\u63a5\u5408\u53ea\u80fd\u6709\u4e00\u4e2a\u6839\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u6709\u8fd0\u52a8\u73af\u8def\u3002\u5982\u679c\u60a8\u9700\u8981\u8fd0\u52a8\u73af\u8def\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/docs/physics-overview/joints"},"\u5e38\u89c4\u5173\u8282"),"\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u5c40\u9650\u6027\uff1a")," \u5982\u679c\u60a8\u60f3\u6784\u5efa\u975e\u5e38\u957f\u7684\u63a5\u5408\u94fe\uff0c\u4ecd\u9700\u6ce8\u610f Unity \u652f\u6301\u7684\u6700\u5927\u5c42\u7ea7\u6df1\u5ea6\u4e3a 64 \u4e2a\u6e38\u620f\u5bf9\u8c61\u3002"),(0,l.kt)("h2",{id:"\u63a5\u5408\u5173\u8282\u7c7b\u578b\u548c\u81ea\u7531\u5ea6"},"\u63a5\u5408\u5173\u8282\u7c7b\u578b\u548c\u81ea\u7531\u5ea6"),(0,l.kt)("p",null,"\u901a\u8fc7\u63a5\u5408\u4f53\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u548c\u914d\u7f6e\u56db\u79cd\u7c7b\u578b\u7684\u63a5\u5408\u5173\u8282\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u56fa\u5b9a\u5173\u8282")," \uff1a\u5728\u7269\u7406\u4f53\u4e4b\u95f4\u8bbe\u7f6e\u521a\u6027\u3001\u7262\u4e0d\u53ef\u7834\u548c\u4e0d\u53ef\u62c9\u4f38\u7684\u94fe\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u68f1\u5f62\u5173\u8282")," \uff1a\u963b\u6b62\u9664\u4e86\u6cbf\u7279\u5b9a\u8f74\u6ed1\u52a8\u4e4b\u5916\u7684\u6240\u6709\u8fd0\u52a8\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u65cb\u8f6c\u5173\u8282")," \uff1a\u5141\u8bb8\u7ed5\u7279\u5b9a\u8f74\u65cb\u8f6c\uff08\u5982\u94f0\u94fe\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7403\u5f62\u5173\u8282")," \uff1a\u89e3\u5256\u5b66\u5173\u8282\uff0c\u5141\u8bb8\u4e24\u4e2a\u6446\u52a8\u548c\u4e00\u4e2a\u626d\u8f6c\u3002")),(0,l.kt)("p",null,"\u63a5\u5408\u4e2d\u6240\u6709\u9501\u5b9a\u7684\u81ea\u7531\u5ea6\u5728\u8bbe\u8ba1\u4e0a\u90fd\u662f\u7262\u4e0d\u53ef\u7834\u548c\u4e0d\u53ef\u62c9\u4f38\u7684\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u7269\u7406\u5f15\u64ce\u4f7f\u7528\u964d\u7ef4\u5750\u6807\u7a7a\u95f4\uff0c\u7269\u7406\u4f53\u53ea\u6709\u5173\u4e8e\u672a\u9501\u5b9a\u8fd0\u52a8\u8f74\u7684\u5750\u6807\u3002"),(0,l.kt)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u5bf9\u4e8e\u5e38\u89c4\u8fed\u4ee3\u5173\u8282\uff0c\u7269\u7406\u5f15\u64ce\u91c7\u7528\u6700\u5927\u5750\u6807\u7a7a\u95f4\uff0c\u53ea\u6709\u5f53\u6c42\u89e3\u5668\u80fd\u591f\u5728\u4e00\u7ec4\u8fed\u4ee3\u540e\u6536\u655b\uff0c\u624d\u80fd\u4fdd\u8bc1\u6ee1\u8db3\u7ea6\u675f\u3002"),(0,l.kt)("h2",{id:"\u7269\u7406\u63a5\u5408\u6f14\u793a"},"\u7269\u7406\u63a5\u5408\u6f14\u793a"),(0,l.kt)("p",null,"\u67e5\u770b Unity \u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/articulations-robot-demo"},"\u673a\u5668\u4eba\u6f14\u793a\u9879\u76ee"),"\u8bd5\u9a8c\u5e26\u6709\u63a5\u5408\u5173\u8282\u7684\u4e32\u8054\u673a\u68b0\u81c2\u3002"))}m.isMDXComponent=!0}}]);