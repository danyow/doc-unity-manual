"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91995],{3905:function(t,a,n){n.d(a,{Zo:function(){return u},kt:function(){return s}});var e=n(67294);function r(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function o(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function i(t,a){if(null==t)return{};var n,e,r=function(t,a){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||(r[n]=t[n]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=e.createContext({}),p=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):o(o({},a),t)),n},u=function(t){var a=p(t.components);return e.createElement(m.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},c=e.forwardRef((function(t,a){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,k=c["".concat(m,".").concat(s)]||c[s]||d[s]||l;return n?e.createElement(k,o(o({ref:a},u),{},{components:n})):e.createElement(k,o({ref:a},u))}));function s(t,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return e.createElement.apply(null,o)}return e.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67042:function(t,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var e=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"class-Animator",title:"Animator \u7ec4\u4ef6",slug:"/comp-animation-group/class-animator"},m="Animator \u7ec4\u4ef6",p={unversionedId:"animation-section/comp-animation-group/class-Animator",id:"animation-section/comp-animation-group/class-Animator",title:"Animator \u7ec4\u4ef6",description:"\u4f7f\u7528 Animator \u7ec4\u4ef6\u53ef\u4ee5\u5c06\u52a8\u753b\u5206\u914d\u7ed9\u573a\u666f\u4e2d\u7684\u6e38\u620f\u5bf9\u8c61\u3002Animator \u7ec4\u4ef6\u9700\u8981\u5f15\u7528 Animator Controller\uff0c\u540e\u8005\u5b9a\u4e49\u8981\u4f7f\u7528\u54ea\u4e9b\u52a8\u753b\u526a\u8f91\uff0c\u5e76\u63a7\u5236\u4f55\u65f6\u4ee5\u53ca\u5982\u4f55\u5728\u52a8\u753b\u526a\u8f91\u4e4b\u95f4\u8fdb\u884c\u6df7\u5408\u548c\u8fc7\u6e21\u3002",source:"@site/docs/animation-section/comp-animation-group/class-animator.md",sourceDirName:"animation-section/comp-animation-group",slug:"/comp-animation-group/class-animator",permalink:"/doc-unity-manual/docs/comp-animation-group/class-animator",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-section/comp-animation-group/class-animator.md",tags:[],version:"current",frontMatter:{id:"class-Animator",title:"Animator \u7ec4\u4ef6",slug:"/comp-animation-group/class-animator"},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u753b\u8fc7\u6e21",permalink:"/doc-unity-manual/docs/class-animator-controller/class-transition"},next:{title:"\u52a8\u753b\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/doc-unity-manual/docs/animation-section/mecanim-faq"}},u={},d=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u52a8\u753b\u66f2\u7ebf\u4fe1\u606f",id:"\u52a8\u753b\u66f2\u7ebf\u4fe1\u606f",level:2}],c={toc:d};function s(t){var a=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,e.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"animator-\u7ec4\u4ef6"},"Animator \u7ec4\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528 Animator \u7ec4\u4ef6\u53ef\u4ee5\u5c06\u52a8\u753b\u5206\u914d\u7ed9\u573a\u666f\u4e2d\u7684\u6e38\u620f\u5bf9\u8c61\u3002Animator \u7ec4\u4ef6\u9700\u8981\u5f15\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-animator-controller"},"Animator Controller"),"\uff0c\u540e\u8005\u5b9a\u4e49\u8981\u4f7f\u7528\u54ea\u4e9b\u52a8\u753b\u526a\u8f91\uff0c\u5e76\u63a7\u5236\u4f55\u65f6\u4ee5\u53ca\u5982\u4f55\u5728\u52a8\u753b\u526a\u8f91\u4e4b\u95f4\u8fdb\u884c\u6df7\u5408\u548c\u8fc7\u6e21\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u662f\u5177\u6709",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/fbximporter-rig/class-avatar"},"Avatar"),"\u5b9a\u4e49\u7684\u4eba\u5f62\u89d2\u8272\uff0c\u8fd8\u5e94\u5728\u6b64\u7ec4\u4ef6\u4e2d\u5206\u914dAvatar\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimAnimatorComponent.png",alt:"\u5df2\u5206\u914d\u63a7\u5236\u5668\u548c Avatar \u7684 Animator \u7ec4\u4ef6\u3002"})),(0,l.kt)("p",null,"\u5df2\u5206\u914d\u63a7\u5236\u5668\u548c Avatar \u7684 Animator \u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u5982\u4f55\u5c06\u5404\u79cd\u8d44\u6e90\uff08\u52a8\u753b\u526a\u8f91\u3001Animator Controller \u548c Avatar\uff09\u4e00\u8d77\u6c47\u96c6\u5728\u6e38\u620f\u5bf9\u8c61\u7684 Animator \u7ec4\u4ef6\u4e2d\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MecanimHowItFitsTogether.jpg",alt:"\u6b64\u56fe\u663e\u793a\u4e86\u52a8\u753b\u7cfb\u7edf\u7684\u5404\u4e2a\u90e8\u5206\u5982\u4f55\u8fde\u63a5\u5728\u4e00\u8d77"})),(0,l.kt)("p",null,"\u6b64\u56fe\u663e\u793a\u4e86\u52a8\u753b\u7cfb\u7edf\u7684\u5404\u4e2a\u90e8\u5206\u5982\u4f55\u8fde\u63a5\u5728\u4e00\u8d77"),(0,l.kt)("p",null,"\u53e6\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/animation-state-machines"},"\u72b6\u6001\u673a"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-blend-tree"},"\u6df7\u5408\u6811"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/fbximporter-rig/class-avatar"},"Avatar"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-animator-controller"},"Animator Controller")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Controller")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9644\u52a0\u5230\u6b64\u89d2\u8272\u7684 Animator Controller\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Avatar")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u89d2\u8272\u7684",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/fbximporter-rig/class-avatar"},"Avatar"),"\u3002\uff08\u5982\u679c Animator \u7528\u4e8e\u5bf9\u4eba\u5f62\u89d2\u8272\u8fdb\u884c\u52a8\u753b\u5316\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Apply Root Motion")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u4ece\u52a8\u753b\u672c\u8eab\u8fd8\u662f\u4ece\u811a\u672c\u63a7\u5236\u89d2\u8272\u7684\u4f4d\u7f6e\u548c\u65cb\u8f6c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Update Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u9009\u9879\u5141\u8bb8\u60a8\u9009\u62e9 Animator \u4f55\u65f6\u66f4\u65b0\u4ee5\u53ca\u5e94\u4f7f\u7528\u54ea\u4e2a\u65f6\u95f4\u6807\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Normal")),(0,l.kt)("td",{parentName:"tr",align:null},"Animator \u4e0e Update \u8c03\u7528\u540c\u6b65\u66f4\u65b0\uff0cAnimator \u7684\u901f\u5ea6\u4e0e\u5f53\u524d\u65f6\u95f4\u6807\u5ea6\u5339\u914d\u3002\u5982\u679c\u65f6\u95f4\u6807\u5ea6\u53d8\u6162\uff0c\u52a8\u753b\u5c06\u901a\u8fc7\u51cf\u901f\u6765\u5339\u914d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Animate Physics")),(0,l.kt)("td",{parentName:"tr",align:null},"Animator \u4e0e FixedUpdate \u8c03\u7528\u540c\u6b65\u66f4\u65b0\uff08\u5373\uff0c\u4e0e\u7269\u7406\u7cfb\u7edf\u6b65\u8c03\u4e00\u81f4\uff09\u3002\u5982\u679c\u8981\u5bf9\u5177\u6709\u7269\u7406\u4ea4\u4e92\u7684\u5bf9\u8c61\uff08\u4f8b\u5982\u53ef\u56db\u5904\u63a8\u52a8\u521a\u4f53\u5bf9\u8c61\u7684\u89d2\u8272\uff09\u7684\u8fd0\u52a8\u8fdb\u884c\u52a8\u753b\u5316\uff0c\u5e94\u4f7f\u7528\u6b64\u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Unscaled Time")),(0,l.kt)("td",{parentName:"tr",align:null},"Animator \u4e0e Update \u8c03\u7528\u540c\u6b65\u66f4\u65b0\uff0c\u4f46\u662f Animator \u7684\u901f\u5ea6\u5ffd\u7565\u5f53\u524d\u65f6\u95f4\u6807\u5ea6\u800c\u4e0d\u987e\u4e00\u5207\u4ee5 100% \u901f\u5ea6\u8fdb\u884c\u52a8\u753b\u5316\u3002\u6b64\u9009\u9879\u53ef\u7528\u4e8e\u4ee5\u6b63\u5e38\u901f\u5ea6\u5bf9 GUI \u7cfb\u7edf\u8fdb\u884c\u52a8\u753b\u5316\uff0c\u540c\u65f6\u5c06\u4fee\u6539\u7684\u65f6\u95f4\u6807\u5ea6\u7528\u4e8e\u7279\u6548\u6216\u6682\u505c\u6e38\u620f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Culling Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"\u60a8\u53ef\u4ee5\u4e3a\u52a8\u753b\u9009\u62e9\u7684\u5254\u9664\u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Always Animate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u59cb\u7ec8\u8fdb\u884c\u52a8\u753b\u5316\uff0c\u5373\u4f7f\u5728\u5c4f\u5e55\u5916\u4e5f\u4e0d\u8981\u5254\u9664\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Cull Update Transforms")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u663e\u793a\u6e32\u67d3\u5668\u65f6\uff0c\u7981\u7528\u53d8\u6362\u7ec4\u4ef6\u7684\u91cd\u5b9a\u5411\u3001IK\uff08\u53cd\u5411\u52a8\u529b\u5b66\uff09\u548c\u5199\u5165\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Cull Completely")),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u663e\u793a\u6e32\u67d3\u5668\u65f6\uff0c\u5b8c\u5168\u7981\u7528\u52a8\u753b\u3002")))),(0,l.kt)("h2",{id:"\u52a8\u753b\u66f2\u7ebf\u4fe1\u606f"},"\u52a8\u753b\u66f2\u7ebf\u4fe1\u606f"),(0,l.kt)("p",null,"Animator \u7ec4\u4ef6\u5e95\u90e8\u7684\u4fe1\u606f\u6846\u4e3a\u60a8\u63d0\u4f9b Animator Controller \u4f7f\u7528\u7684\u6240\u6709\u526a\u8f91\u4e2d\u6240\u7528\u6570\u636e\u7684\u660e\u7ec6\u3002"),(0,l.kt)("p",null,"\u52a8\u753b\u526a\u8f91\u5305\u542b\u201c\u66f2\u7ebf\u201d\u5f62\u5f0f\u7684\u6570\u636e\uff1b\u66f2\u7ebf\u8868\u793a\u503c\u5982\u4f55\u968f\u65f6\u95f4\u53d8\u5316\u3002\u8fd9\u4e9b\u66f2\u7ebf\u53ef\u63cf\u8ff0\u5bf9\u8c61\u7684\u4f4d\u7f6e\u6216\u65cb\u8f6c\u3001\u4eba\u5f62\u52a8\u753b\u7cfb\u7edf\u4e2d\u808c\u8089\u7684\u5f2f\u66f2\u6216\u8005\u526a\u8f91\u5185\u7684\u5176\u4ed6\u52a8\u753b\u503c\uff08\u4f8b\u5982\u6539\u53d8\u7684\u6750\u8d28\u989c\u8272\uff09\u3002"),(0,l.kt)("p",null,"\u4e0b\u8868\u8bf4\u660e\u4e86\u6bcf\u4e2a\u6570\u636e\u9879\u4ee3\u8868\u7684\u5185\u5bb9\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u6807\u7b7e")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u63cf\u8ff0")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Clip Count")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u6b64 Animator \u7684 Animator Controller \u4f7f\u7528\u7684\u52a8\u753b\u526a\u8f91\u603b\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Curves (Pos, Rot & Scale)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 Unity \u7528\u4e8e\u52a8\u753b\u5316\u6e38\u620f\u5bf9\u8c61\u4f4d\u7f6e\u3001\u65cb\u8f6c\u6216\u7f29\u653e\u7684\u66f2\u7ebf\u603b\u6570\u3002\u8fd9\u4e9b\u66f2\u7ebf\u7528\u4e8e\u4e0d\u5c5e\u4e8e\u6807\u51c6\u4eba\u5f62\u9aa8\u67b6\u7684\u52a8\u753b\u6e38\u620f\u5bf9\u8c61\u3002\u5728\u5bf9\u4eba\u5f62 Avatar \u8fdb\u884c\u52a8\u753b\u5316\u65f6\uff0c\u8fd9\u4e9b\u66f2\u7ebf\u4f1a\u663e\u793a\u989d\u5916\u975e\u808c\u8089\u9aa8\u9abc\uff08\u4f8b\u5982\u5c3e\u5df4\u3001\u98d8\u9038\u7684\u5e03\u6599\u6216\u60ac\u5782\u7684\u540a\u5760\uff09\u7684\u8ba1\u6570\u3002\u5982\u679c\u60a8\u6709\u4eba\u5f62\u52a8\u753b\u5e76\u53d1\u73b0\u610f\u5916\u7684\u975e\u808c\u8089\u52a8\u753b\u66f2\u7ebf\uff0c\u8868\u793a\u52a8\u753b\u6587\u4ef6\u4e2d\u53ef\u80fd\u6709\u4e0d\u5fc5\u8981\u7684\u52a8\u753b\u66f2\u7ebf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Muscles")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64 Animator \u7528\u4e8e\u4eba\u5f62\u52a8\u753b\u7684\u808c\u8089\u52a8\u753b\u66f2\u7ebf\u6570\u91cf\u3002\u8fd9\u4e9b\u662f\u7528\u4e8e\u5bf9\u6807\u51c6\u4eba\u5f62 Avatar \u808c\u8089\u8fdb\u884c\u52a8\u753b\u5316\u7684\u66f2\u7ebf\u3002\u9664\u4e86 Unity \u7684\u6807\u51c6 Avatar \u4e2d\u6240\u6709\u4eba\u5f62\u9aa8\u9abc\u7684\u6807\u51c6\u808c\u8089\u8fd0\u52a8\u5916\uff0c\u6b64\u5904\u8fd8\u5305\u62ec\u7528\u4e8e\u5b58\u50a8\u6839\u8fd0\u52a8\u4f4d\u7f6e\u548c\u65cb\u8f6c\u52a8\u753b\u7684\u4e24\u6761\u201c\u808c\u8089\u66f2\u7ebf\u201d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Generic")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 Animator \u7528\u4e8e\u52a8\u753b\u5316\u5176\u4ed6\u5c5e\u6027\uff08\u5982\u6750\u8d28\u989c\u8272\uff09\u7684\u6570\u5b57\uff08\u6d6e\u70b9\uff09\u66f2\u7ebf\u6570\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"PPtr")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7cbe\u7075\u52a8\u753b\u66f2\u7ebf\uff08\u7531 Unity \u7684 2D \u7cfb\u7edf\u4f7f\u7528\uff09\u7684\u603b\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Curves Count")),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a8\u753b\u66f2\u7ebf\u7684\u5408\u8ba1\u603b\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Constant")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316\u4e3a\u5e38\u91cf\uff08\u4e0d\u53d8\uff09\u503c\u7684\u52a8\u753b\u66f2\u7ebf\u6570\u91cf\u3002\u5982\u679c\u52a8\u753b\u6587\u4ef6\u5305\u542b\u4e86\u5177\u6709\u4e0d\u53d8\u503c\u7684\u66f2\u7ebf\uff0cUnity \u4f1a\u81ea\u52a8\u9009\u62e9\u6b64\u9879\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Dense")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u201c\u5bc6\u96c6\u201d\u6570\u636e\uff08\u901a\u8fc7\u7ebf\u6027\u5185\u63d2\u7684\u79bb\u6563\u503c\uff09\u5b58\u50a8\u65b9\u6cd5\u8fdb\u884c\u4f18\u5316\u7684\u52a8\u753b\u66f2\u7ebf\u6570\u91cf\u3002\u4e0e\u201c\u6d41\u201d\u65b9\u6cd5\u76f8\u6bd4\uff0c\u6b64\u65b9\u6cd5\u4f7f\u7528\u7684\u5185\u5b58\u5c11\u5f97\u591a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Stream")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u201c\u6d41\u201d\u6570\u636e\uff08\u8fd9\u4e9b\u503c\u5177\u6709\u7528\u4e8e\u66f2\u7ebf\u63d2\u503c\u7684\u65f6\u95f4\u548c\u5207\u7ebf\u6570\u636e\uff09\u5b58\u50a8\u65b9\u6cd5\u7684\u52a8\u753b\u66f2\u7ebf\u6570\u91cf\u3002\u4e0e\u201c\u5bc6\u96c6\u201d\u65b9\u6cd5\u76f8\u6bd4\uff0c\u6b64\u6570\u636e\u5360\u7528\u7684\u5185\u5b58\u591a\u5f97\u591a\u3002")))),(0,l.kt)("p",null,"\u5982\u679c\u5bfc\u5165\u52a8\u753b\u526a\u8f91\u65f6\u5728",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-animation-clip"},"\u52a8\u753b\u5bfc\u5165\u5f15\u7528"),"\u4e2d\u5c06\u201cAnim Compression\u201d\u8bbe\u7f6e\u4e3a\u201cOptimal\u201d\uff0cUnity \u5c06\u4f7f\u7528\u542f\u53d1\u5f0f\u7b97\u6cd5\u6765\u786e\u5b9a\u6700\u597d\u4f7f\u7528\u5bc6\u96c6\u8fd8\u662f\u6d41\u65b9\u6cd5\u6765\u5b58\u50a8\u6bcf\u6761\u66f2\u7ebf\u7684\u6570\u636e\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018\u201304\u201325 \u9875\u9762\u5df2\u4fee\u8ba2")))}s.isMDXComponent=!0}}]);