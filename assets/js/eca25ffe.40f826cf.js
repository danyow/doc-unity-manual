"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24348],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return y}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),y=i,v=l["".concat(a,".").concat(y)]||l[y]||d[y]||o;return t?n.createElement(v,s(s({ref:r},u),{},{components:t})):n.createElement(v,s({ref:r},u))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=l;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3568:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],c={id:"RigidbodiesOverview",title:"\u521a\u4f53\u6982\u8ff0",slug:"/physics-overview/rigidbodies-overview"},a="\u521a\u4f53\u6982\u8ff0",p={unversionedId:"physics-section/physics-overview/RigidbodiesOverview",id:"physics-section/physics-overview/RigidbodiesOverview",title:"\u521a\u4f53\u6982\u8ff0",description:"\u521a\u4f53 (Rigidbody)  \u662f\u5b9e\u73b0\u6e38\u620f\u5bf9\u8c61\u7684\u7269\u7406\u884c\u4e3a\u7684\u4e3b\u8981\u7ec4\u4ef6\u3002\u8fde\u63a5\u521a\u4f53\u540e\uff0c\u5bf9\u8c61\u5c06\u7acb\u5373\u54cd\u5e94\u91cd\u529b\u3002\u5982\u679c\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a \u78b0\u649e\u4f53 \u7ec4\u4ef6\uff0c\u5219\u6e38\u620f\u5bf9\u8c61\u4f1a\u56e0\u53d1\u751f\u78b0\u649e\u800c\u79fb\u52a8\u3002",source:"@site/docs/physics-section/physics-overview/rigidbodies-overview.md",sourceDirName:"physics-section/physics-overview",slug:"/physics-overview/rigidbodies-overview",permalink:"/doc-unity-manual/docs/physics-overview/rigidbodies-overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/physics-section/physics-overview/rigidbodies-overview.md",tags:[],version:"current",frontMatter:{id:"RigidbodiesOverview",title:"\u521a\u4f53\u6982\u8ff0",slug:"/physics-overview/rigidbodies-overview"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u573a\u666f\u7269\u7406",permalink:"/doc-unity-manual/docs/physics-overview/physics-multi-scene"},next:{title:"3D \u7269\u7406\u7cfb\u7edf\u53c2\u8003",permalink:"/doc-unity-manual/docs/physics3dreference"}},u={},d=[{value:"\u7761\u7720",id:"\u7761\u7720",level:2}],l={toc:d};function y(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521a\u4f53\u6982\u8ff0"},"\u521a\u4f53\u6982\u8ff0"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u521a\u4f53 (Rigidbody)"),"  \u662f\u5b9e\u73b0\u6e38\u620f\u5bf9\u8c61\u7684\u7269\u7406\u884c\u4e3a\u7684\u4e3b\u8981\u7ec4\u4ef6\u3002\u8fde\u63a5\u521a\u4f53\u540e\uff0c\u5bf9\u8c61\u5c06\u7acb\u5373\u54cd\u5e94\u91cd\u529b\u3002\u5982\u679c\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"\u78b0\u649e\u4f53")," \u7ec4\u4ef6\uff0c\u5219\u6e38\u620f\u5bf9\u8c61\u4f1a\u56e0\u53d1\u751f\u78b0\u649e\u800c\u79fb\u52a8\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u521a\u4f53\u7ec4\u4ef6\u4f1a\u63a5\u7ba1\u9644\u52a0\u5230\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u8fd0\u52a8\uff0c\u56e0\u6b64\u4e0d\u5e94\u8bd5\u56fe\u501f\u52a9\u811a\u672c\u901a\u8fc7\u66f4\u6539",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/game-objects/class-transform"},"\u53d8\u6362"),"\u5c5e\u6027\uff08\u5982\u4f4d\u7f6e\u548c\u65cb\u8f6c\uff09\u6765\u79fb\u52a8\u6e38\u620f\u5bf9\u8c61\u3002\u76f8\u53cd\uff0c\u5e94\u8be5\u65bd\u52a0 ",(0,o.kt)("strong",{parentName:"p"},"\u529b")," \u6765\u63a8\u52a8\u6e38\u620f\u5bf9\u8c61\u5e76\u8ba9\u7269\u7406\u5f15\u64ce\u8ba1\u7b97\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u5e0c\u671b\u6e38\u620f\u5bf9\u8c61\u5177\u6709\u521a\u4f53\uff0c\u5e76\u8ba9\u521a\u4f53\u7684\u8fd0\u52a8\u6446\u8131\u7269\u7406\u5f15\u64ce\u7684\u63a7\u5236\u3002\u4f8b\u5982\uff0c\u53ef\u80fd\u5e0c\u671b\u76f4\u63a5\u4ece\u811a\u672c\u4ee3\u7801\u63a7\u5236\u89d2\u8272\uff0c\u4f46\u4ecd\u5141\u8bb8\u89e6\u53d1\u5668\u68c0\u6d4b\u89d2\u8272\uff08\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics-overview/colliders-overview"},"\u78b0\u649e\u4f53"),"\u4e3b\u9898\u4e0b\u7684","_","\u89e6\u53d1\u5668","_","\uff09\u3002\u811a\u672c\u4ea7\u751f\u7684\u8fd9\u79cd\u975e\u7269\u7406\u8fd0\u52a8\u79f0\u4e3a","_","\u8fd0\u52a8\u5b66","_","\u8fd0\u52a8\u3002\u521a\u4f53\u7ec4\u4ef6\u6709\u4e00\u4e2a\u540d\u4e3a  ",(0,o.kt)("strong",{parentName:"p"},"Is Kinematic"),"  \u7684\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u53ef\u4ee5\u8ba9\u521a\u4f53\u6446\u8131\u7269\u7406\u5f15\u64ce\u7684\u63a7\u5236\uff0c\u5e76\u5141\u8bb8\u901a\u8fc7\u811a\u672c\u4ee5\u8fd0\u52a8\u5b66\u65b9\u5f0f\u6765\u79fb\u52a8\u521a\u4f53\u3002\u53ef\u4ee5\u901a\u8fc7\u811a\u672c\u6765\u66f4\u6539  ",(0,o.kt)("strong",{parentName:"p"},"Is Kinematic"),"  \u7684\u503c\uff0c\u4ece\u800c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u5f00\u542f\u548c\u5173\u95ed\u7269\u7406\u5f15\u64ce\uff0c\u4f46\u8fd9\u4f1a\u4ea7\u751f\u6027\u80fd\u5f00\u9500\uff0c\u5e94\u8c28\u614e\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u8bbe\u7f6e\u548c\u811a\u672c\u9009\u9879\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics3dreference/class-rigidbody"},"\u521a\u4f53"),"\u548c ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics2dreference/class-rigidbody2d"},"2D \u521a\u4f53"),"\u53c2\u8003\u9875\u9762\u3002"),(0,o.kt)("h2",{id:"\u7761\u7720"},"\u7761\u7720"),(0,o.kt)("p",null,"\u5f53\u521a\u4f53\u79fb\u52a8\u901f\u5ea6\u4f4e\u4e8e\u89c4\u5b9a\u7684\u6700\u5c0f\u7ebf\u6027\u901f\u5ea6\u6216\u8f6c\u901f\u65f6\uff0c\u7269\u7406\u5f15\u64ce\u4f1a\u8ba4\u4e3a\u521a\u4f53\u5df2\u7ecf\u505c\u6b62\u3002\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0c\u6e38\u620f\u5bf9\u8c61\u5728\u53d7\u5230\u78b0\u649e\u6216\u529b\u4e4b\u524d\u4e0d\u4f1a\u518d\u6b21\u79fb\u52a8\uff0c\u56e0\u6b64\u5c06\u5176\u8bbe\u7f6e\u4e3a\u201c\u7761\u7720\u201d\u6a21\u5f0f\u3002\u8fd9\u79cd\u4f18\u5316\u610f\u5473\u7740\uff0c\u5728\u521a\u4f53\u4e0b\u4e00\u6b21\u88ab\u201c\u5524\u9192\u201d\uff08\u5373\u518d\u6b21\u8fdb\u5165\u8fd0\u52a8\u72b6\u6001\uff09\u4e4b\u524d\uff0c\u4e0d\u4f1a\u82b1\u8d39\u5904\u7406\u5668\u65f6\u95f4\u6765\u66f4\u65b0\u521a\u4f53\u3002"),(0,o.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u521a\u4f53\u7ec4\u4ef6\u7684\u7761\u7720\u548c\u5524\u9192\u662f\u900f\u660e\u53d1\u751f\u7684\u3002\u4f46\u662f\uff0c\u5982\u679c\u901a\u8fc7\u4fee\u6539 ",(0,o.kt)("strong",{parentName:"p"},"\u53d8\u6362")," \u4f4d\u7f6e\u5c06\u9759\u6001\u78b0\u649e\u4f53\uff08\u5373\uff0c\u6ca1\u6709\u521a\u4f53\u7684\u78b0\u649e\u4f53\uff09\u79fb\u5165\u6e38\u620f\u5bf9\u8c61\u6216\u8fdc\u79bb\u6e38\u620f\u5bf9\u8c61\uff0c\u5219\u53ef\u80fd\u65e0\u6cd5\u5524\u9192\u6e38\u620f\u5bf9\u8c61\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\uff0c\u4f8b\u5982\uff0c\u5df2\u7ecf\u4ece\u521a\u4f53\u6e38\u620f\u5bf9\u8c61\u4e0b\u9762\u79fb\u8d70\u5730\u677f\u65f6\uff0c\u521a\u4f53\u6e38\u620f\u5bf9\u8c61\u4f1a\u60ac\u5728\u7a7a\u4e2d\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"WakeUp")," \u51fd\u6570\u663e\u5f0f\u5524\u9192\u6e38\u620f\u5bf9\u8c61\u3002\u6709\u5173\u7761\u7720\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics3dreference/class-rigidbody"},"\u521a\u4f53"),"\u548c ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics2dreference/class-rigidbody2d"},"2D \u521a\u4f53"),"\u7ec4\u4ef6\u9875\u9762\u3002"))}y.isMDXComponent=!0}}]);