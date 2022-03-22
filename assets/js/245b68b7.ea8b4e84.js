"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20278],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),v=r,k=s["".concat(u,".").concat(v)]||s[v]||c[v]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},21930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"nav-MixingComponents",title:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u4e0e\u5176\u4ed6\u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528",slug:"/nav-overview/nav-mixing-components"},u="\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u4e0e\u5176\u4ed6\u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528",p={unversionedId:"navigation/nav-overview/nav-MixingComponents",id:"navigation/nav-overview/nav-MixingComponents",title:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u4e0e\u5176\u4ed6\u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528",description:"\u60a8\u4e5f\u53ef\u4ee5\u5c06\u5bfc\u822a\u7f51\u683c\u4ee3\u7406 (NavMesh Agent)\u3001\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269 (NavMesh Obstacle) \u548c\u7f51\u683c\u5916\u94fe\u63a5 (Off Mesh Link) \u7ec4\u4ef6\u4e0e\u5176\u4ed6 Unity \u7ec4\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002\u6b64\u5904\u5217\u51fa\u4e86\u6df7\u7528\u4e0d\u540c\u7ec4\u4ef6\u65f6\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/docs/navigation/nav-overview/nav-mixing-components.md",sourceDirName:"navigation/nav-overview",slug:"/nav-overview/nav-mixing-components",permalink:"/docs/nav-overview/nav-mixing-components",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/navigation/nav-overview/nav-mixing-components.md",tags:[],version:"current",frontMatter:{id:"nav-MixingComponents",title:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u4e0e\u5176\u4ed6\u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528",slug:"/nav-overview/nav-mixing-components"},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u822a\u7f51\u683c\u6784\u5efa\u7ec4\u4ef6",permalink:"/docs/nav-overview/nav-mesh-building-components"},next:{title:"Unity \u4e2d\u7684\u5bfc\u822a\u7cfb\u7edf",permalink:"/docs/nav-overview/nav-navigation-system"}},m={},c=[{value:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u7269\u7406\u7ec4\u4ef6",id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u7269\u7406\u7ec4\u4ef6",level:2},{value:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u52a8\u753b\u5668",id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u52a8\u753b\u5668",level:2},{value:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269",id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269",level:2},{value:"\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269\u548c\u7269\u7406\u7ec4\u4ef6",id:"\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269\u548c\u7269\u7406\u7ec4\u4ef6",level:2}],s={toc:c};function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u4e0e\u5176\u4ed6\u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528"},"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u4e0e\u5176\u4ed6\u7ec4\u4ef6\u7ed3\u5408\u4f7f\u7528"),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5c06\u5bfc\u822a\u7f51\u683c\u4ee3\u7406 (NavMesh Agent)\u3001\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269 (NavMesh Obstacle) \u548c\u7f51\u683c\u5916\u94fe\u63a5 (Off Mesh Link) \u7ec4\u4ef6\u4e0e\u5176\u4ed6 Unity \u7ec4\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002\u6b64\u5904\u5217\u51fa\u4e86\u6df7\u7528\u4e0d\u540c\u7ec4\u4ef6\u65f6\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002"),(0,i.kt)("h2",{id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u7269\u7406\u7ec4\u4ef6"},"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u7269\u7406\u7ec4\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0\u9700\u5411\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u6dfb\u52a0\u7269\u7406\u78b0\u649e\u4f53\u6765\u8ba9\u5b83\u4eec\u5f7c\u6b64\u907f\u5f00",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bfc\u822a\u7cfb\u7edf\u4f1a\u6a21\u62df\u4ee3\u7406\u53ca\u5176\u5bf9\u969c\u788d\u7269\u548c\u9759\u6001\u4e16\u754c\u7684\u53cd\u5e94\u3002\u6b64\u5904\u6240\u8bf4\u7684\u9759\u6001\u4e16\u754c\u662f\u6307\u70d8\u7119\u7684\u5bfc\u822a\u7f51\u683c\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e0c\u671b\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u63a8\u5f00\u7269\u7406\u5bf9\u8c61\u6216\u4f7f\u7528\u7269\u7406\u89e6\u53d1\u5668\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u78b0\u649e\u4f53 (Collider) \u7ec4\u4ef6\uff08\u5982\u679c\u4e0d\u5b58\u5728\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u521a\u4f53 (Rigidbody) \u7ec4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u542f\u7528\u8fd0\u52a8\u5b66 (Is Kinematic) - \u8fd9\u5f88\u91cd\u8981\uff01"),(0,i.kt)("li",{parentName:"ul"},"\u8fd0\u52a8\u5b66\u610f\u5473\u7740\u521a\u4f53\u7531\u7269\u7406\u6a21\u62df\u4ee5\u5916\u7684\u5176\u4ed6\u4e8b\u7269\u63a7\u5236"))))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u521a\u4f53\uff08\u975e\u8fd0\u52a8\u5b66\uff09\u540c\u65f6\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff0c\u8868\u793a\u5b58\u5728\u7ade\u4e89\u6761\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u53ef\u80fd\u5c1d\u8bd5\u79fb\u52a8\u76f8\u540c\u4f4d\u7f6e\u7684\u4ee3\u7406\uff0c\u4ece\u800c\u5bfc\u81f4\u4e0d\u660e\u884c\u4e3a"))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u73a9\u5bb6\u89d2\u8272\u4e4b\u7c7b\u7684\u4ee3\u7406\uff0c\u65e0\u9700\u4f7f\u7528\u7269\u7406\u7ec4\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\u73a9\u5bb6\u4ee3\u7406\u7684\u8eb2\u907f\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e3a\u8f83\u5c0f\u6570\u5b57\uff08\u9ad8\u4f18\u5148\u7ea7\uff09\uff0c\u4ece\u800c\u5141\u8bb8\u73a9\u5bb6\u7a7f\u8fc7\u7fa4\u4f53"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/AI.NavMeshAgent-velocity.html"},"NavMeshAgent.velocity")," \u79fb\u52a8\u73a9\u5bb6\u4ee3\u7406\uff0c\u4f7f\u5176\u4ed6\u4ee3\u7406\u80fd\u591f\u9884\u6d4b\u73a9\u5bb6\u7684\u79fb\u52a8\u4ee5\u907f\u5f00\u73a9\u5bb6\u3002")))),(0,i.kt)("h2",{id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u52a8\u753b\u5668"},"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u52a8\u753b\u5668"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u5e26\u6709\u6839\u8fd0\u52a8\u7684\u52a8\u753b\u5668\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7ade\u4e89\u6761\u4ef6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u5c1d\u8bd5\u5728\u6bcf\u5e27\u79fb\u52a8\u53d8\u6362"),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u79cd\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848"))),(0,i.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u5e94\u59cb\u7ec8\u671d\u4e00\u4e2a\u65b9\u5411\u6d41\u52a8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8981\u4e48\u7531\u4ee3\u7406\u79fb\u52a8\u89d2\u8272\u5e76\u4f7f\u52a8\u753b\u8ddf\u968f"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u4e48\u6839\u636e\u6a21\u62df\u7ed3\u679c\u7531\u52a8\u753b\u79fb\u52a8\u89d2\u8272"),(0,i.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u6700\u7ec8\u5c06\u53d1\u751f\u96be\u4ee5\u8c03\u8bd5\u7684\u53cd\u9988\u5faa\u73af"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u52a8\u753b\u8ddf\u968f\u4ee3\u7406"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/AI.NavMeshAgent-velocity.html"},"NavMeshAgent.velocity")," \u4f5c\u4e3a\u52a8\u753b\u5668\u7684\u8f93\u5165\uff0c\u4ece\u800c\u5c06\u4ee3\u7406\u7684\u79fb\u52a8\u5927\u81f4\u5339\u914d\u6210\u52a8\u753b"),(0,i.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u4e14\u6613\u4e8e\u5b9e\u73b0\uff0c\u5c06\u5bfc\u81f4\u811a\u6ed1\uff08\u6b64\u60c5\u51b5\u4e0b\u52a8\u753b\u65e0\u6cd5\u4e0e\u901f\u5ea6\u5339\u914d\uff09"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u4ee3\u7406\u8ddf\u968f\u52a8\u753b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7981\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/AI.NavMeshAgent-updatePosition.html"},"NavMeshAgent.updatePosition")," \u548c ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/AI.NavMeshAgent-updateRotation.html"},"NavMeshAgent.updateRotation")," \u4ee5\u4ece\u6e38\u620f\u5bf9\u8c61\u4f4d\u7f6e\u89e3\u9664\u6a21\u62df"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6a21\u62df\u4ee3\u7406\u7684\u4f4d\u7f6e (",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/AI.NavMeshAgent-nextPosition.html"},"NavMeshAgent.nextPosition"),") \u548c\u52a8\u753b\u6839 (",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Animator-rootPosition.html"},"Animator.rootPosition"),") \u4e4b\u95f4\u7684\u5dee\u5f02\u6765\u8ba1\u7b97\u52a8\u753b\u7684\u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/docs/nav-how-tos/nav-coupling-animation-and-navigation"},"\u8026\u5408\u52a8\u753b\u548c\u5bfc\u822a"))))),(0,i.kt)("h2",{id:"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269"},"\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u548c\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6df7\u7528\uff01",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u540c\u65f6\u542f\u7528\u4e24\u8005\u5c06\u4f7f\u4ee3\u7406\u5c1d\u8bd5\u907f\u5f00\u81ea\u5df1"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u5916\u8fd8\u542f\u7528\u96d5\u523b\uff0c\u5219\u4ee3\u7406\u4f1a\u5c1d\u8bd5\u4e0d\u65ad\u91cd\u65b0\u6620\u5c04\u5230\u96d5\u523b\u5b54\u7684\u8fb9\u7f18\uff0c\u751a\u81f3\u4f1a\u4f34\u968f\u51fa\u73b0\u66f4\u591a\u9519\u8bef\u884c\u4e3a"))),(0,i.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5728\u4efb\u4f55\u7ed9\u5b9a\u65f6\u95f4\u53ea\u6709\u5176\u4e2d\u4e00\u4e2a\u4e3a\u6fc0\u6d3b\u72b6\u6001",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6b7b\u4ea1\u72b6\u6001\uff0c\u53ef\u5173\u95ed\u4ee3\u7406\u5e76\u5f00\u542f\u969c\u788d\u7269\u4ee5\u8feb\u4f7f\u5176\u4ed6\u4ee3\u7406\u907f\u5f00\u5b83"),(0,i.kt)("li",{parentName:"ul"},"\u6216\u8005\uff0c\u53ef\u4f7f\u7528\u4f18\u5148\u7ea7\u6765\u66f4\u591a\u5730\u907f\u5f00\u67d0\u4e9b\u4ee3\u7406")))),(0,i.kt)("h2",{id:"\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269\u548c\u7269\u7406\u7ec4\u4ef6"},"\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269\u548c\u7269\u7406\u7ec4\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5e0c\u671b\u7269\u7406\u63a7\u5236\u7684\u5bf9\u8c61\u5f71\u54cd\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u7684\u884c\u4e3a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269\u7ec4\u4ef6\u6dfb\u52a0\u5230\u4ee3\u7406\u5e94\u8be5\u77e5\u9053\u7684\u5bf9\u8c61\uff0c\u8fd9\u5141\u8bb8\u907f\u8ba9\u7cfb\u7edf\u63a8\u65ad\u969c\u788d\u7269"))),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u9644\u52a0\u4e86\u521a\u4f53\u548c\u5bfc\u822a\u7f51\u683c\u969c\u788d\u7269\uff0c\u5219\u81ea\u52a8\u4ece\u521a\u4f53\u83b7\u5f97\u969c\u788d\u7269\u7684\u901f\u5ea6",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u53ef\u8ba9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u9884\u6d4b\u5e76\u907f\u5f00\u79fb\u52a8\u7684\u969c\u788d\u7269")))))}v.isMDXComponent=!0}}]);