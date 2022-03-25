"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43581],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=s(r),h=o,g=m["".concat(p,".").concat(h)]||m[h]||l[h]||i;return r?n.createElement(g,a(a({ref:e},u),{},{components:r})):n.createElement(g,a({ref:e},u))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80194:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={id:"terrain-SmoothHeight",title:"Smooth Height",slug:"/terrain-tools/terrain-smooth-height"},p="Smooth Height",s={unversionedId:"creating-environments/script-terrain/terrain-tools/terrain-SmoothHeight",id:"creating-environments/script-terrain/terrain-tools/terrain-SmoothHeight",title:"Smooth Height",description:"Smooth Height  \u5de5\u5177\u53ef\u4ee5\u5e73\u6ed1\u9ad8\u5ea6\u8d34\u56fe\u5e76\u67d4\u5316\u5730\u5f62\u7279\u5f81\u3002\u5728 Terrain Inspector \u4e2d\uff0c\u5355\u51fb  Paint Terrain  \u56fe\u6807\uff0c\u7136\u540e\u4ece\u5730\u5f62\u5de5\u5177\u5217\u8868\u4e2d\u9009\u62e9  Smooth Height \u3002",source:"@site/docs/creating-environments/script-terrain/terrain-tools/terrain-smooth-height.md",sourceDirName:"creating-environments/script-terrain/terrain-tools",slug:"/terrain-tools/terrain-smooth-height",permalink:"/doc-unity-manual/docs/terrain-tools/terrain-smooth-height",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-environments/script-terrain/terrain-tools/terrain-smooth-height.md",tags:[],version:"current",frontMatter:{id:"terrain-SmoothHeight",title:"Smooth Height",slug:"/terrain-tools/terrain-smooth-height"},sidebar:"tutorialSidebar",previous:{title:"Set Height",permalink:"/doc-unity-manual/docs/terrain-tools/terrain-set-height"},next:{title:"Stamp Terrain",permalink:"/doc-unity-manual/docs/terrain-tools/terrain-stamp-terrain"}},u={},l=[],m={toc:l};function h(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smooth-height"},"Smooth Height"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Smooth Height"),"  \u5de5\u5177\u53ef\u4ee5\u5e73\u6ed1",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/script-terrain/terrain-heightmaps"},"\u9ad8\u5ea6\u8d34\u56fe"),"\u5e76\u67d4\u5316\u5730\u5f62\u7279\u5f81\u3002\u5728 Terrain Inspector \u4e2d\uff0c\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Paint Terrain"),"  \u56fe\u6807\uff0c\u7136\u540e\u4ece\u5730\u5f62\u5de5\u5177\u5217\u8868\u4e2d\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Smooth Height")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/1.3.5-SmoothHeight_grey.png",alt:"Terrain Inspector \u4e2d\u7684 Smooth Height \u5de5\u5177"})),(0,i.kt)("p",null,"Terrain Inspector \u4e2d\u7684 Smooth Height \u5de5\u5177"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Smooth Height"),"  \u5de5\u5177\u53ef\u4ee5\u5c06\u9644\u8fd1\u533a\u57df\u5e73\u5747\u5316\uff0c\u67d4\u5316\u666f\u89c2\uff0c\u5e76\u51cf\u5c11\u7a81\u7136\u51fa\u73b0\u7684\u53d8\u5316\uff1b\u4e0d\u4f1a\u663e\u8457\u5347\u9ad8\u6216\u964d\u4f4e\u5730\u5f62\u9ad8\u5ea6\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u5305\u542b\u9ad8\u9891\u56fe\u6848\u7684\u753b\u7b14\u8fdb\u884c\u7ed8\u5236\u540e\uff0c\u5e73\u6ed1\u7279\u522b\u6709\u7528\u3002\u8fd9\u4e9b\u753b\u7b14\u56fe\u6848\u5f80\u5f80\u4f1a\u5c06\u5c16\u9510\u7684\u952f\u9f7f\u72b6\u8fb9\u7f18\u5f15\u5165\u666f\u89c2\u4e2d\uff0c\u4f46\u53ef\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"p"},"Smooth Height"),"  \u5de5\u5177\u4f7f\u8fd9\u4e9b\u7c97\u7cd9\u5916\u89c2\u67d4\u5316\u3002"),(0,i.kt)("p",null,"\u8c03\u6574  ",(0,i.kt)("strong",{parentName:"p"},"Blur Direction"),"  \u503c\u4ee5\u63a7\u5236\u8981\u67d4\u5316\u7684\u533a\u57df\u3002\u5982\u679c\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Blur Direction"),"  \u8bbe\u7f6e\u4e3a \u20131\uff0c\u5219\u8be5\u5de5\u5177\u4f1a\u67d4\u5316\u5730\u5f62\u7684\u5916\u90e8\uff08\u51f8\u51fa\uff09\u8fb9\u7f18\u3002\u5982\u679c\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Blur Direction"),"  \u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u8be5\u5de5\u5177\u4f1a\u67d4\u5316\u5730\u5f62\u7684\u5185\u90e8\uff08\u51f9\u5165\uff09\u8fb9\u7f18\u3002\u82e5\u8981\u5747\u5300\u5e73\u6ed1\u5730\u5f62\u7684\u6240\u6709\u90e8\u5206\uff0c\u8bf7\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Blur Direction"),"  \u8bbe\u7f6e\u4e3a 0\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Brush Size"),"  \u503c\u786e\u5b9a\u8981\u4f7f\u7528\u7684\u753b\u7b14\u7684\u5927\u5c0f\uff0c\u800c  ",(0,i.kt)("strong",{parentName:"p"},"Opacity"),"  \u503c\u786e\u5b9a\u8be5\u5de5\u5177\u5bf9\u8981\u7ed8\u5236\u7684\u533a\u57df\u8fdb\u884c\u5e73\u6ed1\u7684\u901f\u5ea6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2019\u201304\u201317 \u9875\u9762\u5df2\u53d1\u5e03"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u4e86\u5185\u5bb9\u4ee5\u53cd\u6620\u65b0\u7684 UI \u548c\u9009\u9879")))}h.isMDXComponent=!0}}]);