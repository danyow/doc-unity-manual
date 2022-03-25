"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32731],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),m=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49867:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={id:"Tilemap-Isometric-Palette",title:"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f",slug:"/tilemap-isometric/tilemap-isometric-palette"},o="\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f",m={unversionedId:"unity2d/class-tilemap/tilemap-isometric/Tilemap-Isometric-Palette",id:"unity2d/class-tilemap/tilemap-isometric/Tilemap-Isometric-Palette",title:"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f",description:"\u8981\u521b\u5efa\u7528\u4e8e\u7ed8\u5236\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684 \u74e6\u7247\u9762\u677f (Tile Palette) \uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a",source:"@site/docs/unity2d/class-tilemap/tilemap-isometric/tilemap-isometric-palette.md",sourceDirName:"unity2d/class-tilemap/tilemap-isometric",slug:"/tilemap-isometric/tilemap-isometric-palette",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-palette",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/class-tilemap/tilemap-isometric/tilemap-isometric-palette.md",tags:[],version:"current",frontMatter:{id:"Tilemap-Isometric-Palette",title:"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f",slug:"/tilemap-isometric/tilemap-isometric-palette"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u7b49\u8ddd\u74e6\u7247\u5730\u56fe",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-create-iso"},next:{title:"Tilemap Renderer \u6a21\u5f0f",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-render-modes"}},s={},c=[{value:"\u5728\u74e6\u7247\u9762\u677f\u4e2d\u8c03\u6574\u74e6\u7247\u9ad8\u5ea6",id:"\u5728\u74e6\u7247\u9762\u677f\u4e2d\u8c03\u6574\u74e6\u7247\u9ad8\u5ea6",level:2}],u={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f"},"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f"),(0,i.kt)("p",null,"\u8981\u521b\u5efa\u7528\u4e8e\u7ed8\u5236\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u74e6\u7247\u9762\u677f (Tile Palette)")," \uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("p",null,"1.\u6253\u5f00 Tile Palette \u7a97\u53e3\uff08\u83dc\u5355\uff1a ",(0,i.kt)("strong",{parentName:"p"},"Window ",">"," 2D ",">"," Tile Palette")," \uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![2D_IsoTilemap_4.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_4.png)\n")),(0,i.kt)("p",null,"2.\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Create New Palette"),"  \u4ee5\u6253\u5f00\u5176\u4e0b\u62c9\u83dc\u5355\u3002"),(0,i.kt)("p",null,"3.\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Grid type"),"  \u8bbe\u7f6e\u4e3a\u4e0e\u5f53\u524d\u7ed8\u5236\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Isometric"),"  \u6216  ",(0,i.kt)("strong",{parentName:"p"},"Isometric Z As Y"),"  \u74e6\u7247\u5730\u56fe\u76f8\u540c\u7684\u5e03\u5c40\u3002"),(0,i.kt)("p",null,"4.\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Cell Size"),"  \u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Manual")," \u3002\u5c06 X \u548c Z \u4fdd\u7559\u4e3a\u9ed8\u8ba4\u503c\uff0c\u4f46\u5c06 Y \u8bbe\u7f6e\u4e3a\u4e0e\u74e6\u7247\u5730\u56fe Cell Size \u7684 Y \u503c\u76f8\u540c\u7684\u503c\u3002\u6b64\u503c\u53d6\u51b3\u4e8e\u74e6\u7247\u5730\u56fe\u7684\u6295\u5f71\u7c7b\u578b\u3002\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-create-iso"},"\u521b\u5efa\u7b49\u8ddd\u74e6\u7247\u5730\u56fe"),"\u9875\u9762\u4ee5\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![2D_IsoTilemap_6.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_6.png)\n")),(0,i.kt)("p",null,"5.\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Create"),"  \u4ee5\u5b8c\u6210\u8bbe\u7f6e\uff0c\u5e76\u521b\u5efa\u65b0\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u74e6\u7247\u9762\u677f\u8d44\u6e90")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![2D_IsoTilemap_5.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_5.png)\n")),(0,i.kt)("p",null,"6.\u8981\u5bf9\u74e6\u7247\u9762\u677f\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\uff0c\u8bf7\u53cc\u51fb\u8d44\u6e90\u6587\u4ef6\u5939\u4e2d\u7684\u8d44\u6e90\u4ee5\u5c06\u5176\u4f5c\u4e3a",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/prefabs"},"\u9884\u5236\u4ef6"),"\u6253\u5f00\uff0c\u7136\u540e\u5728\u6b64\u5904\u8fdb\u884c\u66f4\u6539\u3002"),(0,i.kt)("h2",{id:"\u5728\u74e6\u7247\u9762\u677f\u4e2d\u8c03\u6574\u74e6\u7247\u9ad8\u5ea6"},"\u5728\u74e6\u7247\u9762\u677f\u4e2d\u8c03\u6574\u74e6\u7247\u9ad8\u5ea6"),(0,i.kt)("p",null,"\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Isometric Z as Y Tilemap"),"  \u4e0a\u7ed8\u5236\u74e6\u7247\u65f6\uff0c\u8bf7\u901a\u8fc7\u8bbe\u7f6e  ",(0,i.kt)("strong",{parentName:"p"},"Z Position"),"  \u503c\u6765\u5b9a\u4e49\u6240\u7ed8\u5236\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Grid"),"  \u7684 Z \u4f4d\u7f6e\u3002\u5bf9\u4e8e\u8fd9\u79cd\u7c7b\u578b\u7684\u74e6\u7247\u5730\u56fe\uff0cZ \u4f4d\u7f6e\u503c\u8f6c\u6362\u4e3a\u6cbf Y \u8f74\u7684\u504f\u79fb\uff0c\u5e76\u4e14\u4ee5\u4e0d\u540c Z \u4f4d\u7f6e\u7ed8\u5236\u7684\u74e6\u7247\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u770b\u8d77\u6765\u5177\u6709\u4e0d\u540c\u7684\u9ad8\u5ea6\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Z Position"),"  \u7f16\u8f91\u5668\u4f4d\u4e8e\u74e6\u7247\u5730\u56fe\u9762\u677f (Tilemap Palette) \u5e95\u90e8\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_7.png",alt:"2D_IsoTilemap_7.png"})),(0,i.kt)("p",null,"\u901a\u8fc7\u8f93\u5165\u6240\u9700\u7684\u503c\uff08\u4ec5\u6574\u6570\uff09\u8c03\u6574 Z Position \u503c\u3002\u7cfb\u7edf\u4f1a\u4f7f\u7528\u8bbe\u7f6e\u7684 Z \u4f4d\u7f6e\u503c\u5728\u7f51\u683c\u4e0a\u7ed8\u5236\u74e6\u7247\uff0c\u76f4\u5230\u66f4\u6539\u6216\u91cd\u7f6e\u8be5\u503c\u3002\u8981\u5c06\u503c\u6539\u56de\u9ed8\u8ba4\u503c 0\uff0c\u8bf7\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Reset")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_8.png",alt:"2D_IsoTilemap_8.png"})),(0,i.kt)("p",null,"\u5728 Scene \u89c6\u56fe\u4e2d\uff0c\u753b\u7b14\u9884\u89c8\u4f1a\u5c06\u5355\u5143\u683c\u539f\u59cb\u4f4d\u7f6e\uff08Z \u503c\u4e3a 0\uff09\u7684\u74e6\u7247\u663e\u793a\u4e3a\u84dd\u8272\u8f6e\u5ed3\uff0c\u800c\u5176\u5e94\u7528\u4e86 Z-as-Y \u504f\u79fb\u7684\u7ed8\u5236\u4f4d\u7f6e\u5219\u663e\u793a\u4e3a\u767d\u8272\u8f6e\u5ed3\u3002"),(0,i.kt)("p",null,"\u9009\u62e9\u74e6\u7247\u753b\u7b14\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u5feb\u6377\u952e\u5feb\u901f\u5207\u6362\u5230\u4e0d\u540c\u7684 Z \u4f4d\u7f6e\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5feb\u6377\u952e\uff1a")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u547d\u4ee4\uff1a")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5c06 Z \u4f4d\u7f6e\u589e\u52a0 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\\="),(0,i.kt)("td",{parentName:"tr",align:null},"\u5c06 Z \u4f4d\u7f6e\u51cf\u5c0f 1")))),(0,i.kt)("p",null,"\u8981\u5220\u9664\u74e6\u7247\uff0c\u8bf7\u5c06 ",(0,i.kt)("strong",{parentName:"p"},"\u64e6\u9664\u753b\u7b14 (Erase Brush)"),"  \u8bbe\u7f6e\u4e3a\u4e0e\u8981\u5220\u9664\u7684\u76ee\u6807\u74e6\u7247\u76f8\u540c\u7684 Z \u4f4d\u7f6e\u3002\u64e6\u9664\u753b\u7b14 (Erase Brush) \u4e0d\u4f1a\u64e6\u9664\u4e0e\u76ee\u6807\u74e6\u7247\u4e0d\u540c\u7684 Z \u4f4d\u7f6e\u4e0a\u7ed8\u5236\u7684\u74e6\u7247\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.3/Documentation/Manual/30_search.html?q=newin20183"},"2018.3")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u7b49\u8ddd\u74e6\u7247\u5730\u56fe NewIn20183")))}d.isMDXComponent=!0}}]);