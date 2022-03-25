"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47382],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(r),f=o,m=g["".concat(c,".").concat(f)]||g[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},99262:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"LightProbes",title:"\u5149\u7167\u63a2\u9488",slug:"/light-probes"},c="\u5149\u7167\u63a2\u9488",p={unversionedId:"graphics/lighting-overview/light-probes/LightProbes",id:"graphics/lighting-overview/light-probes/LightProbes",title:"\u5149\u7167\u63a2\u9488",description:"\u901a\u8fc7 \u5149\u7167\u63a2\u9488 \u53ef\u4ee5\u6355\u83b7\u5e76\u4f7f\u7528\u7a7f\u8fc7\u573a\u666f\u7a7a\u767d\u7a7a\u95f4\u7684\u5149\u7ebf\u7684\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/docs/graphics/lighting-overview/light-probes/light-probes.md",sourceDirName:"graphics/lighting-overview/light-probes",slug:"/light-probes",permalink:"/doc-unity-manual/docs/light-probes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/light-probes/light-probes.md",tags:[],version:"current",frontMatter:{id:"LightProbes",title:"\u5149\u7167\u63a2\u9488",slug:"/light-probes"},sidebar:"tutorialSidebar",previous:{title:"Scene \u89c6\u56fe\u5149\u7167\u7ed8\u5236\u6a21\u5f0f",permalink:"/doc-unity-manual/docs/lighting-overview/givis"},next:{title:"Light Probe Group",permalink:"/doc-unity-manual/docs/light-probes/class-light-probe-group"}},u={},s=[],g={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5149\u7167\u63a2\u9488"},"\u5149\u7167\u63a2\u9488"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("strong",{parentName:"p"},"\u5149\u7167\u63a2\u9488")," \u53ef\u4ee5\u6355\u83b7\u5e76\u4f7f\u7528\u7a7f\u8fc7\u573a\u666f\u7a7a\u767d\u7a7a\u95f4\u7684\u5149\u7ebf\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u4e0e\u5149\u7167\u8d34\u56fe\u7c7b\u4f3c\uff0c\u5149\u7167\u63a2\u9488\u5b58\u50a8\u4e86\u6709\u5173\u573a\u666f\u4e2d\u7684\u5149\u7167\u7684\u201c\u70d8\u7119\u201d\u4fe1\u606f\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u5149\u7167\u8d34\u56fe\u5b58\u50a8\u7684\u662f\u6709\u5173\u5149\u7ebf\u7167\u5c04\u5230\u573a\u666f\u4e2d\u7684",(0,i.kt)("em",{parentName:"p"},"\u8868\u9762"),"\u7684\u5149\u7167\u4fe1\u606f\uff0c\u800c\u5149\u7167\u63a2\u9488\u5b58\u50a8\u7684\u662f\u6709\u5173\u5149\u7ebf\u7a7f\u8fc7\u573a\u666f\u4e2d\u7684",(0,i.kt)("em",{parentName:"p"},"\u7a7a\u767d\u7a7a\u95f4"),"\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5149\u7167\u63a2\u9488\u662f\u5728\u70d8\u7119\u671f\u95f4\u6d4b\u91cf\uff08\u63a2\u6d4b\uff09\u5149\u7167\u7684\u573a\u666f\u4f4d\u7f6e\u3002\u5728\u8fd0\u884c\u65f6\uff0c\u7cfb\u7edf\u5c06\u4f7f\u7528\u8ddd\u79bb\u52a8\u6001\u6e38\u620f\u5bf9\u8c61\u6700\u8fd1\u7684\u63a2\u9488\u7684\u503c\u6765\u4f30\u7b97\u7167\u5c04\u5230\u8fd9\u4e9b\u5bf9\u8c61\u7684\u95f4\u63a5\u5149\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LightProbes-0.png",alt:"\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u573a\u666f\u663e\u793a\u4e86\u653e\u7f6e\u5728\u4e24\u4e2a\u7acb\u65b9\u4f53\u5468\u56f4\u7684\u5149\u7167\u63a2\u9488"})),(0,i.kt)("p",null,"\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u573a\u666f\u663e\u793a\u4e86\u653e\u7f6e\u5728\u4e24\u4e2a\u7acb\u65b9\u4f53\u5468\u56f4\u7684\u5149\u7167\u63a2\u9488"),(0,i.kt)("p",null,"\u5149\u7167\u63a2\u9488\u6709\u4e24\u4e2a\u4e3b\u8981\u7528\u9014\uff1a"),(0,i.kt)("p",null,"\u5149\u7167\u63a2\u9488\u7684\u4e3b\u8981\u7528\u9014\u662f\u4e3a\u573a\u666f\u4e2d\u7684\u79fb\u52a8\u5bf9\u8c61\u63d0\u4f9b\u9ad8\u8d28\u91cf\u7684\u5149\u7167\uff08\u5305\u62ec\u95f4\u63a5\u53cd\u5c04\u5149\uff09\u3002"),(0,i.kt)("p",null,"\u5149\u7167\u63a2\u9488\u7684\u6b21\u8981\u7528\u9014\u662f\u5728\u9759\u6001\u666f\u7269\u4f7f\u7528 Unity \u7684  ",(0,i.kt)("strong",{parentName:"p"},"LOD\uff08\u7ec6\u8282\u7ea7\u522b\uff09\u7cfb\u7edf")," \u65f6\u63d0\u4f9b\u8be5\u666f\u7269\u7684\u5149\u7167\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5c06\u5149\u7167\u63a2\u9488\u7528\u4e8e\u8fd9\u4e24\u4e2a\u4e0d\u540c\u76ee\u7684\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u7684\u8bb8\u591a\u6280\u672f\u90fd\u662f\u76f8\u540c\u7684\u3002\u4e86\u89e3\u5149\u7167\u63a2\u9488\u7684\u5de5\u4f5c\u539f\u7406\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u6837\u624d\u80fd\u6b63\u786e\u9009\u62e9\u5c06\u63a2\u9488\u653e\u7f6e\u5728\u573a\u666f\u4e2d\u7684\u4f4d\u7f6e\u3002"))}f.isMDXComponent=!0}}]);