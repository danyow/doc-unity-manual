"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39089],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88278:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],u={id:"UpgradeGuide3540",title:"\u5347\u7ea7\u5230 Unity 4.0",slug:"/upgrade-guide-legacy/upgrade-guide3540"},p="\u5347\u7ea7\u5230 Unity 4.0",o={unversionedId:"unity-overview/upgrade-guides/upgrade-guide-legacy/UpgradeGuide3540",id:"unity-overview/upgrade-guides/upgrade-guide-legacy/UpgradeGuide3540",title:"\u5347\u7ea7\u5230 Unity 4.0",description:"\u6e38\u620f\u5bf9\u8c61\u6d3b\u52a8\u72b6\u6001",source:"@site/docs/unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide3540.md",sourceDirName:"unity-overview/upgrade-guides/upgrade-guide-legacy",slug:"/upgrade-guide-legacy/upgrade-guide3540",permalink:"/doc-unity-manual/docs/upgrade-guide-legacy/upgrade-guide3540",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide3540.md",tags:[],version:"current",frontMatter:{id:"UpgradeGuide3540",title:"\u5347\u7ea7\u5230 Unity 4.0",slug:"/upgrade-guide-legacy/upgrade-guide3540"},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7\u5230 Unity 3.5",permalink:"/doc-unity-manual/docs/upgrade-guide-legacy/upgrade-guide3435"},next:{title:"\u5347\u7ea7\u5230 Unity 5.0",permalink:"/doc-unity-manual/docs/upgrade-guide5"}},c={},s=[{value:"\u6e38\u620f\u5bf9\u8c61\u6d3b\u52a8\u72b6\u6001",id:"\u6e38\u620f\u5bf9\u8c61\u6d3b\u52a8\u72b6\u6001",level:2},{value:"\u65e7\u884c\u4e3a\uff1a",id:"\u65e7\u884c\u4e3a",level:3},{value:"\u65b0\u884c\u4e3a\uff1a",id:"\u65b0\u884c\u4e3a",level:3},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:3},{value:"Editor \u4e2d\u7684\u65b0\u6d3b\u52a8\u72b6\u6001",id:"editor-\u4e2d\u7684\u65b0\u6d3b\u52a8\u72b6\u6001",level:3},{value:"\u5bf9\u73b0\u6709\u9879\u76ee\u7684\u5f71\u54cd\uff1a",id:"\u5bf9\u73b0\u6709\u9879\u76ee\u7684\u5f71\u54cd",level:3},{value:"\u5bf9\u8d44\u6e90\u5904\u7406\u7ba1\u7ebf\u7684\u66f4\u6539",id:"\u5bf9\u8d44\u6e90\u5904\u7406\u7ba1\u7ebf\u7684\u66f4\u6539",level:2},{value:"\u56e0\u4e3a\u5c1a\u672a\u6301\u4e45\u5316\u800c\u5bfc\u81f4\u5f15\u7528\u4e22\u5931\u7684\u793a\u4f8b",id:"\u56e0\u4e3a\u5c1a\u672a\u6301\u4e45\u5316\u800c\u5bfc\u81f4\u5f15\u7528\u4e22\u5931\u7684\u793a\u4f8b",level:3},{value:"\u5bf9\u4e22\u5f03\u7684\u5148\u524d\u5bfc\u5165\u8d44\u6e90\u7684\u5f15\u7528\u793a\u4f8b",id:"\u5bf9\u4e22\u5f03\u7684\u5148\u524d\u5bfc\u5165\u8d44\u6e90\u7684\u5f15\u7528\u793a\u4f8b",level:3},{value:"\u7f51\u683c\u8bfb\u53d6/\u5199\u5165\u9009\u9879",id:"\u7f51\u683c\u8bfb\u53d6\u5199\u5165\u9009\u9879",level:2},{value:"\u7f51\u683c\u4f18\u5316",id:"\u7f51\u683c\u4f18\u5316",level:2},{value:"\u79fb\u52a8\u7aef\u8f93\u5165",id:"\u79fb\u52a8\u7aef\u8f93\u5165",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5347\u7ea7\u5230-unity-40"},"\u5347\u7ea7\u5230 Unity 4.0"),(0,i.kt)("h2",{id:"\u6e38\u620f\u5bf9\u8c61\u6d3b\u52a8\u72b6\u6001"},"\u6e38\u620f\u5bf9\u8c61\u6d3b\u52a8\u72b6\u6001"),(0,i.kt)("p",null,"Unity 4.0 \u66f4\u6539\u4e86\u6e38\u620f\u5bf9\u8c61\u6d3b\u52a8\u72b6\u6001\u7684\u5904\u7406\u65b9\u5f0f\u3002\u6e38\u620f\u5bf9\u8c61\u7684\u6d3b\u52a8\u72b6\u6001\u73b0\u5728\u4f1a\u7531\u5b50\u6e38\u620f\u5bf9\u8c61\u7ee7\u627f\uff0c\u56e0\u6b64\u4efb\u4f55\u975e\u6d3b\u52a8\u6e38\u620f\u5bf9\u8c61\u4e5f\u4f1a\u5bfc\u81f4\u5176\u5b50\u9879\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u3002\u6211\u4eec\u76f8\u4fe1\u65b0\u884c\u4e3a\u6bd4\u65e7\u884c\u4e3a\u66f4\u5408\u7406\uff0c\u800c\u4e14\u5e94\u8be5\u59cb\u7ec8\u5982\u6b64\u3002\u6b64\u5916\uff0c\u5373\u5c06\u63a8\u51fa\u7684\u65b0 GUI \u7cfb\u7edf\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u51b3\u4e8e\u65b0\u7684 4.0 \u884c\u4e3a\uff0c\u6ca1\u6709\u5b83\u5c31\u4e0d\u53ef\u80fd\u5b9e\u73b0\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u8fd9\u53ef\u80fd\u9700\u8981\u6267\u884c\u4e00\u4e9b\u5de5\u4f5c\u6765\u4fee\u590d\u73b0\u6709\u9879\u76ee\u4ee5\u4fbf\u4f7f\u7528\u65b0\u7684 Unity 4.0 \u884c\u4e3a\uff0c\u66f4\u6539\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"\u65e7\u884c\u4e3a"},"\u65e7\u884c\u4e3a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e38\u620f\u5bf9\u8c61\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7531\u5176  ",(0,i.kt)("strong",{parentName:"li"},".active"),"  \u5c5e\u6027\u5b9a\u4e49\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u68c0\u67e5  ",(0,i.kt)("strong",{parentName:"li"},".active"),"  \u5c5e\u6027\u6765\u67e5\u8be2\u548c\u8bbe\u7f6e\u6b64\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6e38\u620f\u5bf9\u8c61\u7684\u6d3b\u52a8\u72b6\u6001\u5bf9\u5b50\u6e38\u620f\u5bf9\u8c61\u7684\u6d3b\u52a8\u72b6\u6001\u6ca1\u6709\u5f71\u54cd\u3002\u5982\u679c\u8981\u6fc0\u6d3b\u6216\u505c\u7528\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u6240\u6709\u5b50\u9879\uff0c\u9700\u8981\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.SetActiveRecursively")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u6e38\u620f\u5bf9\u8c61\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"li"},"SetActiveRecursively"),"  \u65f6\uff0c\u4efb\u4f55\u5b50\u6e38\u620f\u5bf9\u8c61\u7684\u5148\u524d\u6d3b\u52a8\u72b6\u6001\u90fd\u5c06\u4e22\u5931\u3002\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"li"},"SetActiveRecursively"),"  \u505c\u7528\u518d\u6fc0\u6d3b\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u6240\u6709\u5b50\u9879\u65f6\uff0c\u4efb\u4f55\u5728\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"SetActiveRecursively"),"  \u4e4b\u524d\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u7684\u5b50\u9879\u90fd\u5c06\u53d8\u4e3a\u6d3b\u52a8\u72b6\u6001\uff0c\u800c\u5982\u679c\u8981\u5c06\u5b50\u9879\u6062\u590d\u5230\u539f\u6765\u72b6\u6001\uff0c\u5fc5\u987b\u624b\u52a8\u8ddf\u8e2a\u5b50\u9879\u7684\u6d3b\u52a8\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9884\u5236\u4ef6\u4e0d\u80fd\u5305\u542b\u4efb\u4f55\u6d3b\u52a8\u72b6\u6001\uff0c\u5e76\u5728\u9884\u5236\u4ef6\u5b9e\u4f8b\u5316\u540e\u59cb\u7ec8\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002")),(0,i.kt)("h3",{id:"\u65b0\u884c\u4e3a"},"\u65b0\u884c\u4e3a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e38\u620f\u5bf9\u8c61\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7531\u5176\u81ea\u5df1\u7684  ",(0,i.kt)("strong",{parentName:"li"},".activeSelf"),"  \u5c5e\u6027\u53ca\u5176\u6240\u6709\u7236\u9879\u7684\u8be5\u5c5e\u6027\u5b9a\u4e49\u3002\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u81ea\u5df1\u7684  ",(0,i.kt)("strong",{parentName:"li"},".activeSelf"),"  \u5c5e\u6027\u53ca\u5176\u6240\u6709\u7236\u9879\u7684\u8be5\u5c5e\u6027\u4e3a  ",(0,i.kt)("strong",{parentName:"li"},"true")," \uff0c\u5219\u8be5\u6e38\u620f\u5bf9\u8c61\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002\u5982\u679c\u4efb\u4f55\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5c5e\u6027\u4e3a ",(0,i.kt)("strong",{parentName:"li"},"false")," \uff0c\u5219\u8be5\u6e38\u620f\u5bf9\u8c61\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"li"},".activeInHierarchy"),"  \u5c5e\u6027\u6765\u67e5\u8be2\u6b64\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.SetActive"),"  \u6765\u66f4\u6539\u6e38\u620f\u5bf9\u8c61\u7684  ",(0,i.kt)("strong",{parentName:"li"},".activeSelf"),"  \u72b6\u6001\u3002\u5bf9\u4ee5\u524d\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u6e38\u620f\u5bf9\u8c61\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"SetActive (false)"),"  \u65f6\uff0c\u5c06\u505c\u7528\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u6240\u6709\u5b50\u9879\u3002\u5bf9\u4ee5\u524d\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u7684\u6e38\u620f\u5bf9\u8c61\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"SetActive (true)"),"  \u65f6\uff0c\u5982\u679c\u8be5\u6e38\u620f\u5bf9\u8c61\u7684\u6240\u6709\u7236\u9879\u5747\u4e3a\u6d3b\u52a8\u72b6\u6001\uff0c\u5219\u5c06\u6fc0\u6d3b\u8be5\u6e38\u620f\u5bf9\u8c61\u3002\u5f53\u5b50\u9879\u7684\u6240\u6709\u7236\u9879\u90fd\u662f\u6d3b\u52a8\u72b6\u6001\u65f6\uff08\u5373\u5b83\u4eec\u6240\u6709\u7684\u7236\u9879\u90fd\u5c06  ",(0,i.kt)("strong",{parentName:"li"},".activeSelf"),"  \u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"li"},"true"),"  \u65f6\uff09\uff0c\u5b50\u9879\u5c06\u88ab\u6fc0\u6d3b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u610f\u5473\u7740\u4e0d\u518d\u9700\u8981  ",(0,i.kt)("strong",{parentName:"li"},"SetActiveRecursively")," \uff0c\u56e0\u4e3a\u6d3b\u52a8\u72b6\u6001\u5c06\u4ece\u7236\u9879\u7ee7\u627f\u3002\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("strong",{parentName:"li"},"SetActive"),"  \u6765\u505c\u7528\u548c\u6fc0\u6d3b\u5c42\u7ea7\u89c6\u56fe\u4e2d\u7684\u4e00\u90e8\u5206\u65f6\uff0c\u5c06\u4fdd\u7559\u6240\u6709\u5b50\u6e38\u620f\u5bf9\u8c61\u7684\u5148\u524d\u6d3b\u52a8\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9884\u5236\u4ef6\u53ef\u4ee5\u5305\u542b\u6d3b\u52a8\u72b6\u6001\uff0c\u8be5\u72b6\u6001\u5728\u9884\u5236\u4ef6\u5b9e\u4f8b\u5316\u65f6\u4fdd\u7559\u3002")),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b\uff1a"),(0,i.kt)("p",null,"\u5047\u5982\u6709\u4e09\u4e2a\u6e38\u620f\u5bf9\u8c61\uff1aA\u3001B \u548c C\uff0c\u5176\u4e2d B \u548c C \u662f A \u7684\u5b50\u9879\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"C.SetActive(false)"),"  \u6765\u505c\u7528 C\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728\uff0c ",(0,i.kt)("strong",{parentName:"li"},"A.activeInHierarchy == true")," \uff0c ",(0,i.kt)("strong",{parentName:"li"},"B.activeInHierarchy == true")," \uff0c\u800c  ",(0,i.kt)("strong",{parentName:"li"},"C.activeInHierarchy == false")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6837\uff0c ",(0,i.kt)("strong",{parentName:"li"},"A.activeSelf == true")," \uff0c ",(0,i.kt)("strong",{parentName:"li"},"B.activeSelf == true")," \uff0c\u800c  ",(0,i.kt)("strong",{parentName:"li"},"C.activeSelf == false")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728\u901a\u8fc7\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"A.SetActive(false)"),"  \u6765\u505c\u7528\u7236\u9879 A\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728\uff0c ",(0,i.kt)("strong",{parentName:"li"},"A.activeInHierarchy == false")," \uff0c ",(0,i.kt)("strong",{parentName:"li"},"B.activeInHierarchy == false")," \uff0c\u800c  ",(0,i.kt)("strong",{parentName:"li"},"C.activeInHierarchy == false")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6837\uff0c ",(0,i.kt)("strong",{parentName:"li"},"A.activeSelf == false")," \uff0c ",(0,i.kt)("strong",{parentName:"li"},"B.activeSelf == true")," \uff0c\u800c  ",(0,i.kt)("strong",{parentName:"li"},"C.activeSelf == false")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728\u901a\u8fc7\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"A.SetActive(true)"),"  \u518d\u6b21\u6fc0\u6d3b\u7236\u9879 A\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u73b0\u5728\uff0c\u6062\u590d\u4e3a  ",(0,i.kt)("strong",{parentName:"li"},"A.activeInHierarchy == true")," \uff0c ",(0,i.kt)("strong",{parentName:"li"},"B.activeInHierarchy == true")," \uff0c\u800c ",(0,i.kt)("strong",{parentName:"li"},"C.activeInHierarchy == false")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6837\uff0c ",(0,i.kt)("strong",{parentName:"li"},"A.activeSelf == true")," \uff0c ",(0,i.kt)("strong",{parentName:"li"},"B.activeSelf == true")," \uff0c\u800c  ",(0,i.kt)("strong",{parentName:"li"},"C.activeSelf == false")," \u3002")),(0,i.kt)("h3",{id:"editor-\u4e2d\u7684\u65b0\u6d3b\u52a8\u72b6\u6001"},"Editor \u4e2d\u7684\u65b0\u6d3b\u52a8\u72b6\u6001"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u8fd9\u4e9b\u66f4\u6539\u53ef\u89c6\u5316\uff0c\u5728 Unity 4.0 Editor \u4e2d\uff0c\u4efb\u4f55\u975e\u6d3b\u52a8\u6e38\u620f\u5bf9\u8c61\uff08\u7531\u4e8e\u5176\u81ea\u5df1\u7684  ",(0,i.kt)("strong",{parentName:"p"},".activeSelf"),"  \u5c5e\u6027\u6216\u8005\u5176\u4e2d\u4e00\u4e2a\u7236\u9879\u7684\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"false")," \uff09\u5c06\u5728\u5c42\u7ea7\u89c6\u56fe\u4e2d\u663e\u793a\u4e3a\u7070\u8272\uff0c\u5e76\u5728 Inspector \u4e2d\u5177\u6709\u7070\u8272\u56fe\u6807\u3002\u6e38\u620f\u5bf9\u8c61\u81ea\u5df1\u7684 ",(0,i.kt)("strong",{parentName:"p"},".activeSelf"),"  \u5c5e\u6027\u7531\u5176\u6d3b\u52a8\u72b6\u6001\u590d\u9009\u6846\u53cd\u6620\uff0c\u65e0\u8bba\u7236\u9879\u72b6\u6001\u5982\u4f55\u90fd\u53ef\u4ee5\u5207\u6362\u8be5\u5c5e\u6027\uff08\u4f46\u53ea\u6709\u5728\u6240\u6709\u7236\u9879\u90fd\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\u624d\u4f1a\u6fc0\u6d3b\u8be5\u6e38\u620f\u5bf9\u8c61\uff09\u3002"),(0,i.kt)("h3",{id:"\u5bf9\u73b0\u6709\u9879\u76ee\u7684\u5f71\u54cd"},"\u5bf9\u73b0\u6709\u9879\u76ee\u7684\u5f71\u54cd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u8ba9\u60a8\u4e86\u89e3\u6b64\u66f4\u6539\u5728\u4ee3\u7801\u65b9\u9762\u53ef\u80fd\u5e26\u6765\u7684\u5f71\u54cd\uff0c ",(0,i.kt)("strong",{parentName:"li"},"GameObject.active"),"  \u5c5e\u6027\u548c  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.SetActiveRecursively()"),"  \u51fd\u6570\u5df2\u5f03\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u800c\uff0c\u5b83\u4eec\u4ecd\u7136\u6709\u6548\u3002\u8bfb\u53d6  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.active"),"  \u7684\u503c\u7b49\u540c\u4e8e\u8bfb\u53d6  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.activeInHierarchy")," \uff0c\u8bbe\u7f6e ",(0,i.kt)("strong",{parentName:"li"},"GameObject.active"),"  \u7b49\u540c\u4e8e\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.SetActive()")," \u3002\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.SetActiveRecursively()"),"  \u7b49\u540c\u4e8e\u5bf9\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u6240\u6709\u5b50\u9879\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"li"},"GameObject.SetActive()")," \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5c06\u573a\u666f\u4e2d\u4efb\u4f55\u6e38\u620f\u5bf9\u8c61\u7684  ",(0,i.kt)("strong",{parentName:"li"},"selfActive"),"  \u5c5e\u6027\u8bbe\u7f6e\u4e3a\u5148\u524d\u7684  ",(0,i.kt)("strong",{parentName:"li"},"active"),"  \u5c5e\u6027\uff0c\u53ef\u4ee5\u5bfc\u5165 3.5 \u7248\u7684\u73b0\u6709\u573a\u666f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\uff0c\u5bf9\u4e8e\u4ece\u65e9\u671f\u7248\u672c\u7684 Unity \u5bfc\u5165\u7684\u4efb\u4f55\u9879\u76ee\uff0c\u53ea\u8981\u4e0d\u4f9d\u8d56\u4e8e\u975e\u6d3b\u52a8\u6e38\u620f\u5bf9\u8c61\u7684\u6d3b\u52a8\u5b50\u9879\uff08Unity 4.0 \u4e2d\u4e0d\u518d\u652f\u6301\uff09\uff0c\u5e94\u8be5\u4ecd\u80fd\u6309\u9884\u671f\u5de5\u4f5c\uff08\u4f46\u4f1a\u6709\u7f16\u8bd1\u5668\u8b66\u544a\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u9879\u76ee\u4f9d\u8d56\u4e8e\u975e\u6d3b\u52a8\u6e38\u620f\u5bf9\u8c61\u7684\u6d3b\u52a8\u5b50\u9879\uff0c\u9700\u8981\u5c06\u903b\u8f91\u66f4\u6539\u4e3a Unity 4.0 \u4e2d\u9002\u7528\u7684\u6a21\u578b\u3002")),(0,i.kt)("h2",{id:"\u5bf9\u8d44\u6e90\u5904\u7406\u7ba1\u7ebf\u7684\u66f4\u6539"},"\u5bf9\u8d44\u6e90\u5904\u7406\u7ba1\u7ebf\u7684\u66f4\u6539"),(0,i.kt)("p",null,"\u5728 4.0 \u7248\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u7684\u8d44\u6e90\u5bfc\u5165\u7ba1\u7ebf\u5728\u5185\u90e8\u505a\u4e86\u4e00\u4e9b\u91cd\u8981\u6539\u53d8\uff0c\u65e8\u5728\u63d0\u9ad8\u6027\u80fd\u3001\u5185\u5b58\u4f7f\u7528\u7387\u548c\u786e\u5b9a\u6027\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u66f4\u6539\u5bf9\u7528\u6237\u6ca1\u6709\u5f71\u54cd\uff0c\u4f46\u6709\u4e00\u4e2a\u4f8b\u5916\uff1a\u8d44\u6e90\u4e2d\u7684\u5bf9\u8c61\u76f4\u5230\u5bfc\u5165\u7ba1\u7ebf\u7684\u6700\u540e\u9636\u6bb5\u624d\u4f1a\u6301\u4e45\u5316\uff0c\u5e76\u4e14\u6240\u6709\u4ee5\u524d\u5bfc\u5165\u7684\u8d44\u6e90\u7248\u672c\u90fd\u5c06\u88ab\u5b8c\u5168\u66ff\u6362\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u70b9\u610f\u5473\u7740\u5728\u540e\u671f\u5904\u7406\u671f\u95f4\u65e0\u6cd5\u83b7\u5f97\u5bf9\u8d44\u6e90\u4e2d\u7684\u5bf9\u8c61\u7684\u6b63\u786e\u5f15\u7528\uff0c\u7b2c\u4e8c\u70b9\u610f\u5473\u7740\u5982\u679c\u5728\u540e\u671f\u5904\u7406\u671f\u95f4\u4f7f\u7528\u5bf9\u5148\u524d\u5bfc\u5165\u8d44\u6e90\u7248\u672c\u7684\u5f15\u7528\u6765\u5b58\u50a8\u4fee\u6539\uff0c\u8fd9\u4e9b\u4fee\u6539\u5c06\u4e22\u5931\u3002"),(0,i.kt)("h3",{id:"\u56e0\u4e3a\u5c1a\u672a\u6301\u4e45\u5316\u800c\u5bfc\u81f4\u5f15\u7528\u4e22\u5931\u7684\u793a\u4f8b"},"\u56e0\u4e3a\u5c1a\u672a\u6301\u4e45\u5316\u800c\u5bfc\u81f4\u5f15\u7528\u4e22\u5931\u7684\u793a\u4f8b"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003\u4e0b\u9762\u8fd9\u4e2a\u5c0f\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public class ModelPostprocessor : AssetPostprocessor\n{\n    public void OnPostprocessModel(GameObject go)\n    {\n        PrefabUtility.CreatePrefab("Prefabs/" + go.name, go);\n    }\n}\n\n\n')),(0,i.kt)("p",null,"\u5728 Unity 3.5 \u4e2d\uff0c\u6b64\u4ee3\u7801\u521b\u5efa\u7684\u9884\u5236\u4ef6\u5c06\u5305\u542b\u5bf9\u7f51\u683c\u7684\u6240\u6709\u6b63\u786e\u5f15\u7528\u7b49\u7b49\uff0c\u8fd9\u662f\u56e0\u4e3a\u6240\u6709\u7f51\u683c\u90fd\u5df2\u6301\u4e45\u5316\uff0c\u4f46\u7531\u4e8e Unity 4.0 \u4e2d\u7684\u60c5\u51b5\u5e76\u975e\u5982\u6b64\uff0c\u76f8\u540c\u7684\u540e\u671f\u5904\u7406\u7a0b\u5e8f\u521b\u5efa\u7684\u9884\u5236\u4ef6\u4e2d\u6240\u6709\u5bf9\u7f51\u683c\u7684\u5f15\u7528\u90fd\u4f1a\u6d88\u5931\uff0c\u8fd9\u662f\u56e0\u4e3a Unity 4.0 \u8fd8\u4e0d\u77e5\u9053\u5982\u4f55\u89e3\u6790\u5bf9\u539f\u59cb\u6a21\u578b\u9884\u5236\u4ef6\u4e2d\u5bf9\u8c61\u7684\u5f15\u7528\u3002\u8981\u5c06\u6a21\u578b\u9884\u5236\u4ef6\u6b63\u786e\u590d\u5236\u5230\u9884\u5236\u4ef6\uff0c\u5e94\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"p"},"OnPostProcessAllAssets"),"  \u6765\u5904\u7406\u6240\u6709\u5bfc\u5165\u7684\u8d44\u6e90\uff0c\u67e5\u627e\u6a21\u578b\u9884\u5236\u4ef6\uff0c\u5e76\u6309\u5982\u4e0a\u6240\u8ff0\u521b\u5efa\u65b0\u9884\u5236\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u5bf9\u4e22\u5f03\u7684\u5148\u524d\u5bfc\u5165\u8d44\u6e90\u7684\u5f15\u7528\u793a\u4f8b"},"\u5bf9\u4e22\u5f03\u7684\u5148\u524d\u5bfc\u5165\u8d44\u6e90\u7684\u5f15\u7528\u793a\u4f8b"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u7a0d\u5fae\u590d\u6742\u4e00\u70b9\uff0c\u4f46\u5b9e\u9645\u4e0a\u662f 3.5 \u7248\u4e2d\u6b63\u5e38\u4f46\u5728 4.0 \u7248\u4e2d\u6709\u95ee\u9898\u7684\u7528\u4f8b\u3002\u8fd9\u662f\u4e00\u4e2a\u5f15\u7528\u4e86\u7f51\u683c\u7684\u7b80\u5355  ",(0,i.kt)("strong",{parentName:"p"},"ScriptableObject")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class Referencer : ScriptableObject\n{\n    public Mesh myMesh; \n} \n\n\n")),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u8fd9\u4e2a  ",(0,i.kt)("strong",{parentName:"p"},"ScriptableObject"),"  \u6765\u521b\u5efa\u4e00\u4e2a\u8d44\u6e90\u5e76\u4f7f\u8be5\u8d44\u6e90\u5f15\u7528\u6a21\u578b\u4e2d\u7684\u7f51\u683c\uff0c\u7136\u540e\u5728\u540e\u671f\u5904\u7406\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u8be5\u5f15\u7528\u5e76\u4e3a\u5176\u6307\u5b9a\u4e00\u4e2a\u4e0d\u540c\u7684\u540d\u79f0\uff0c\u6700\u7ec8\u7ed3\u679c\u662f\u5f53\u6211\u4eec\u91cd\u65b0\u5bfc\u5165\u6a21\u578b\u65f6\uff0c\u7f51\u683c\u7684\u540d\u79f0\u5c06\u662f\u540e\u671f\u5904\u7406\u7a0b\u5e8f\u786e\u5b9a\u7684\u540d\u79f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public class Postprocess : AssetPostprocessor\n{\n    public void OnPostprocessModel(GameObject go)\n    {\n        Referencer myRef = (Referencer)AssetDatabase.LoadAssetAtPath("Assets/MyRef.asset", typeof(Referencer));\n        myRef.myMesh.name = "AwesomeMesh";\n    }\n}\n\n\n')),(0,i.kt)("p",null,"\u6b64\u4ee3\u7801\u5728 Unity 3.5 \u4e2d\u53ef\u6309\u9884\u671f\u5de5\u4f5c\uff0c\u4f46\u5728 Unity 4.0 \u4e2d\uff0c\u5df2\u7ecf\u5bfc\u5165\u7684\u6a21\u578b\u5c06\u88ab\u5b8c\u5168\u66ff\u6362\uff0c\u56e0\u6b64\u66f4\u6539\u5148\u524d\u5bfc\u5165\u7684\u7f51\u683c\u7684\u540d\u79f0\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002\u8fd9\u91cc\u7684\u89e3\u51b3\u65b9\u6848\u662f\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u627e\u5230\u7f51\u683c\uff0c\u7136\u540e\u66f4\u6539\u5176\u540d\u79f0\u3002\u6700\u91cd\u8981\u7684\u662f\u8981\u6ce8\u610f\uff0c\u5728 Unity 4.0 \u4e2d\uff0c\u5e94\u5f53\u53ea\u4fee\u6539\u63d0\u4f9b\u7ed9\u540e\u671f\u5904\u7406\u7a0b\u5e8f\u7684\u6307\u5b9a\u8f93\u5165\uff0c\u800c\u4e0d\u662f\u4f9d\u8d56\u4e8e\u8be5\u8d44\u6e90\u7684\u5148\u524d\u5bfc\u5165\u7248\u672c\u3002"),(0,i.kt)("h2",{id:"\u7f51\u683c\u8bfb\u53d6\u5199\u5165\u9009\u9879"},"\u7f51\u683c\u8bfb\u53d6/\u5199\u5165\u9009\u9879"),(0,i.kt)("p",null,"Unity 4.0 \u5728",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-fbximporter"},"\u6a21\u578b\u5bfc\u5165\u8bbe\u7f6e"),"\u4e2d\u6dfb\u52a0\u4e86\u201cRead/Write Enabled\u201d\u9009\u9879\u3002\u5173\u95ed\u6b64\u9009\u9879\u53ef\u4ee5\u8282\u7701\u5185\u5b58\uff0c\u56e0\u4e3a Unity \u53ef\u4ee5\u5728\u6e38\u620f\u4e2d\u5378\u8f7d\u7f51\u683c\u6570\u636e\u526f\u672c\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u975e\u4e00\u81f4\u6bd4\u4f8b\u7f29\u653e\u6216\u5b9e\u4f8b\u5316\u7f51\u683c\uff0c\u53ef\u80fd\u5fc5\u987b\u5728\u8fd9\u4e9b\u7f51\u683c\u7684\u5bfc\u5165\u8bbe\u7f6e\u4e2d\u542f\u7528\u201cRead/Write Enabled\u201d\u3002\u539f\u56e0\u662f\u975e\u4e00\u81f4\u7f29\u653e\u9700\u8981\u5c06\u7f51\u683c\u6570\u636e\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\u3002\u901a\u5e38\u6211\u4eec\u5728\u6784\u5efa\u65f6\u4f1a\u68c0\u6d4b\u5230\u8fd9\u4e00\u70b9\uff0c\u4f46\u5728\u8fd0\u884c\u65f6\u7f29\u653e\u6216\u5b9e\u4f8b\u5316\u7f51\u683c\u65f6\uff0c\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u8fdb\u884c\u6b64\u8bbe\u7f6e\u3002\u5426\u5219\uff0c\u8fd9\u4e9b\u7f51\u683c\u53ef\u80fd\u65e0\u6cd5\u5728\u6e38\u620f\u6784\u5efa\u4e2d\u6b63\u786e\u6e32\u67d3\u3002"),(0,i.kt)("h2",{id:"\u7f51\u683c\u4f18\u5316"},"\u7f51\u683c\u4f18\u5316"),(0,i.kt)("p",null,"Unity 4.0 \u4e2d\u7684 Model Importer \u5728\u7f51\u683c\u4f18\u5316\u65b9\u9762\u8fdb\u4e00\u6b65\u6539\u5584\u3002Unity 4.0 \u7684 Model Importer \u4e2d\u7684\u201cMesh Optimization\u201d\u590d\u9009\u6846\u73b0\u5728\u9ed8\u8ba4\u4e3a\u542f\u7528\u72b6\u6001\uff0c\u5e76\u4f1a\u5bf9\u7f51\u683c\u4e2d\u7684\u9876\u70b9\u91cd\u65b0\u6392\u5e8f\u4ee5\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002\u9879\u76ee\u4e2d\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u540e\u671f\u5904\u7406\u4ee3\u7801\u6216\u6548\u679c\uff0c\u8fd9\u4e9b\u4ee3\u7801\u6216\u6548\u679c\u53d6\u51b3\u4e8e\u7f51\u683c\u7684\u9876\u70b9\u987a\u5e8f\uff0c\u5e76\u53ef\u80fd\u4f1a\u56e0\u6b64\u66f4\u6539\u800c\u51fa\u73b0\u95ee\u9898\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5173\u95ed Mesh Importer \u4e2d\u7684\u201cMesh Optimization\u201d\u3002\u5c24\u5176\u662f\u5728\u4f7f\u7528 SkinnedCloth \u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c\u7f51\u683c\u4f18\u5316\u5c06\u5bfc\u81f4\u9876\u70b9\u6743\u91cd\u6620\u5c04\u53d1\u751f\u53d8\u5316\u3002\u56e0\u6b64\uff0c\u5982\u679c\u5728\u4ece 3.5 \u5bfc\u5165\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 SkinnedCloth\uff0c\u9700\u8981\u4e3a\u53d7\u5f71\u54cd\u7684\u7f51\u683c\u5173\u95ed\u201cMesh Optimization\u201d\uff0c\u6216\u8005\u91cd\u65b0\u914d\u7f6e\u9876\u70b9\u6743\u91cd\u6765\u5339\u914d\u65b0\u7684\u9876\u70b9\u987a\u5e8f\u3002"),(0,i.kt)("h2",{id:"\u79fb\u52a8\u7aef\u8f93\u5165"},"\u79fb\u52a8\u7aef\u8f93\u5165"),(0,i.kt)("p",null,"\u5728 Unity 4.0 \u4e2d\uff0c\u79fb\u52a8\u7aef\u4f20\u611f\u5668\u8f93\u5165\u5728\u5e73\u53f0\u4e4b\u95f4\u5177\u6709\u66f4\u597d\u7684\u4e00\u81f4\u6027\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5728\u5904\u7406\u79fb\u52a8\u5e73\u53f0\u4e0a\u7684\u5178\u578b\u8f93\u5165\u65f6\u7f16\u5199\u66f4\u5c11\u7684\u4ee3\u7801\u3002\u73b0\u5728\u52a0\u901f\u5ea6\u548c\u9640\u87ba\u4eea\u8f93\u5165\u5c06\u5728 iOS \u548c Android \u5e73\u53f0\u4e0a\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u8ffd\u8e2a\u5c4f\u5e55\u65b9\u5411\u3002\u4e3a\u4e86\u5229\u7528\u6b64\u66f4\u6539\u5e26\u6765\u7684\u4f18\u52bf\uff0c\u5e94\u5728\u5904\u7406\u52a0\u901f\u5ea6\u548c\u9640\u87ba\u4eea\u8f93\u5165\u65f6\u91cd\u6784\u8f93\u5165\u4ee3\u7801\u5e76\u5220\u9664\u5173\u4e8e\u5e73\u53f0\u548c\u5c4f\u5e55\u65b9\u5411\u7684\u4ee3\u7801\u3002\u901a\u8fc7\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Input.compensateSensors"),"  \u8bbe\u7f6e\u4e3a false\uff0c\u4ecd\u7136\u80fd\u5728 iOS \u4e0a\u83b7\u5f97\u4ee5\u524d\u7684\u884c\u4e3a\u3002"))}d.isMDXComponent=!0}}]);