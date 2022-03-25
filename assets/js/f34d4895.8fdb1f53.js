"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16432],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=m(a),c=l,k=s["".concat(o,".").concat(c)]||s[c]||d[c]||r;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},87234:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],p={id:"Tilemap-Palette",title:"Creating a Tile Palette",slug:"/tilemap-workflow/tilemap-palette"},o="Creating a Tile Palette",m={unversionedId:"unity2d/class-tilemap/tilemap-workflow/Tilemap-Palette",id:"unity2d/class-tilemap/tilemap-workflow/Tilemap-Palette",title:"Creating a Tile Palette",description:"\u5c06\u9009\u62e9\u7684\u4e00\u7ec4\u74e6\u7247\u653e\u5728 \u74e6\u7247\u9762\u677f \u4e0a\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u4ece\u9762\u677f\u4e2d\u9009\u62e9\u74e6\u7247\u4ee5\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u8fdb\u884c\u7ed8\u5236\u3002\u8981\u521b\u5efa\u4e00\u4e2a \u74e6\u7247\u9762\u677f \uff0c\u8f6c\u5230  Window &gt; 2D &gt; Tile Palette \uff0c\u6253\u5f00  Tile Palette  \u7a97\u53e3\u3002\u5982\u679c\u770b\u4e0d\u5230\u6b64\u9009\u9879\uff0c\u5219\u8868\u793a\u53ef\u80fd\u672a\u5b89\u88c5  2D Tilemap Editor  \u5305\u3002\u5982\u679c\u786e\u5b9e\u5982\u6b64\uff0c\u8bf7\u901a\u8fc7 Package Manager \u4e0b\u8f7d  2D Tilemap Editor  \u5305\u3002",source:"@site/docs/unity2d/class-tilemap/tilemap-workflow/tilemap-palette.md",sourceDirName:"unity2d/class-tilemap/tilemap-workflow",slug:"/tilemap-workflow/tilemap-palette",permalink:"/doc-unity-manual/docs/tilemap-workflow/tilemap-palette",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/class-tilemap/tilemap-workflow/tilemap-palette.md",tags:[],version:"current",frontMatter:{id:"Tilemap-Palette",title:"Creating a Tile Palette",slug:"/tilemap-workflow/tilemap-palette"},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u5de5\u5177",permalink:"/doc-unity-manual/docs/tilemap-painting/tilemap-painting-selection-tool"},next:{title:"2D \u7269\u7406\u7cfb\u7edf\u53c2\u8003",permalink:"/doc-unity-manual/docs/physics2dreference"}},u={},d=[{value:"Create New Palette \u5c5e\u6027",id:"create-new-palette-\u5c5e\u6027",level:2},{value:"Active Brush Inspector",id:"active-brush-inspector",level:2},{value:"\u7f16\u8f91\u74e6\u7247\u9762\u677f (Tile Palette)",id:"\u7f16\u8f91\u74e6\u7247\u9762\u677f-tile-palette",level:2},{value:"\u4ece\u73b0\u6709\u7f51\u683c\u9884\u5236\u4ef6\u521b\u5efa\u9762\u677f\u8d44\u6e90",id:"\u4ece\u73b0\u6709\u7f51\u683c\u9884\u5236\u4ef6\u521b\u5efa\u9762\u677f\u8d44\u6e90",level:2},{value:"\u74e6\u7247\u9762\u677f\u5c0f\u5de5\u5177",id:"\u74e6\u7247\u9762\u677f\u5c0f\u5de5\u5177",level:2},{value:"Tile Palette \u4e0a\u4e0b\u6587\u83dc\u5355",id:"tile-palette-\u4e0a\u4e0b\u6587\u83dc\u5355",level:2}],s={toc:d};function c(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-tile-palette"},"Creating a Tile Palette"),(0,r.kt)("p",null,"\u5c06\u9009\u62e9\u7684\u4e00\u7ec4\u74e6\u7247\u653e\u5728 ",(0,r.kt)("strong",{parentName:"p"},"\u74e6\u7247\u9762\u677f")," \u4e0a\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u4ece\u9762\u677f\u4e2d\u9009\u62e9\u74e6\u7247\u4ee5",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/tilemap-painting"},"\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u8fdb\u884c\u7ed8\u5236"),"\u3002\u8981\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u74e6\u7247\u9762\u677f")," \uff0c\u8f6c\u5230  ",(0,r.kt)("strong",{parentName:"p"},"Window ",">"," 2D ",">"," Tile Palette")," \uff0c\u6253\u5f00  ",(0,r.kt)("strong",{parentName:"p"},"Tile Palette"),"  \u7a97\u53e3\u3002\u5982\u679c\u770b\u4e0d\u5230\u6b64\u9009\u9879\uff0c\u5219\u8868\u793a\u53ef\u80fd\u672a\u5b89\u88c5  ",(0,r.kt)("strong",{parentName:"p"},"2D Tilemap Editor"),"  \u5305\u3002\u5982\u679c\u786e\u5b9e\u5982\u6b64\uff0c\u8bf7\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages"},"Package Manager")," \u4e0b\u8f7d  ",(0,r.kt)("strong",{parentName:"p"},"2D Tilemap Editor"),"  \u5305\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTile Palette \u7a97\u53e3\u662f\u7a7a\u7684\u3002\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"New Palette"),"  \u4e0b\u62c9\u9009\u5355\u4ee5\u6253\u5f00\u9879\u76ee\u4e2d\u53ef\u7528\u7684\u74e6\u7247\u9762\u677f\u5217\u8868\uff0c\u6216\u7528\u4e8e\u521b\u5efa\u65b0\u9762\u677f\u7684\u9009\u9879\u3002\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Create New Palette"),"  \u9009\u9879\u521b\u5efa\u65b0\u7684\u9762\u677f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_Tile_Palette_CreateNew.png",alt:"2D_Tile_Palette_CreateNew.png"}),(0,r.kt)("br",null),"\u4ece\u4e0b\u62c9\u9009\u5355\u9009\u62e9 Create New Palette \u9009\u9879\u3002"),(0,r.kt)("p",null,"\u9009\u62e9\u521b\u5efa\u65b0\u74e6\u7247\u9762\u677f\u7684\u9009\u9879\u540e\uff0c","*","*"," Create New Palette","*","*"," \u5bf9\u8bdd\u6846\u53d8\u4e3a\u53ef\u7528\u3002\u5b83\u5305\u542b\u521b\u5efa\u65b0\u9762\u677f\u65f6\u53ef\u7528\u7684\u4e0d\u540c\u5c5e\u6027\u8bbe\u7f6e\u548c\u9009\u9879\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TilePalette_Options.png",alt:"TilePalette_Options.png"}),(0,r.kt)("br",null),"Create New Palette \u7684\u9009\u9879\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TilePalette_Grid.png",alt:"TilePalette_Grid.png"}),(0,r.kt)("br",null),"\u5c06 Grid \u9009\u9879\u5c55\u5f00\u3002"),(0,r.kt)("h2",{id:"create-new-palette-\u5c5e\u6027"},"Create New Palette \u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a\u521b\u5efa\u7684\u74e6\u7247\u9762\u677f\u8d44\u6e90\u63d0\u4f9b\u4e00\u4e2a\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Grid")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u8981\u5c06\u521b\u5efa\u7684\u74e6\u7247\u9762\u677f\u7ed8\u5236\u5230\u7684",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/class-tilemap/class-grid"},"\u7f51\u683c"),"\u5e03\u5c40\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Rectangle"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8981\u4e3a\u9ed8\u8ba4\u77e9\u5f62\u74e6\u7247\u5730\u56fe\u521b\u5efa\u9762\u677f\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Hexagon"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8981\u4e3a",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/class-tilemap/tilemap-hexagonal"},"\u516d\u8fb9\u5f62\u74e6\u7247\u5730\u56fe (Hexagonal Tilemap)")," \u521b\u5efa\u9762\u677f\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Isometric"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8981\u4e3a",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-isometric"},"\u7b49\u8ddd\u74e6\u7247\u5730\u56fe (Isometric Tilemap)")," \u521b\u5efa\u9762\u677f\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u3002\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-palette"},"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Isometric Z as Y")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8981\u4e3a ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-isometric"},"Isometric Z as Y Tilemap")," \u521b\u5efa\u9762\u677f\uff0c\u8bf7\u9009\u62e9\u6b64\u9009\u9879\u3002\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-palette"},"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0 ","*"," Hexagon Type\uff08\u4ec5\u5f53 Grid \u7c7b\u578b\u8bbe\u7f6e\u4e3a Hexagon \u65f6\u53ef\u7528\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u8981\u5c06\u74e6\u7247\u9762\u677f\u7ed8\u5236\u5230\u7684\u516d\u8fb9\u5f62\u74e6\u7247\u5730\u56fe\u7684\u7c7b\u578b\u3002\u8bf7\u53c2\u9605\u6709\u5173",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/class-tilemap/tilemap-hexagonal"},"\u516d\u8fb9\u5f62\u74e6\u7247\u5730\u56fe"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cell Size")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u5c06\u74e6\u7247\u7ed8\u5236\u5230\u7684\u5355\u5143\u683c\u7684\u5927\u5c0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Automatic"),(0,r.kt)("td",{parentName:"tr",align:null},"Cell Size \u4ee5 Unity \u5355\u4f4d\u81ea\u52a8\u8bbe\u7f6e\uff0c\u5e76\u57fa\u4e8e\u7528\u4e8e\u521b\u5efa\u74e6\u7247\u8d44\u6e90\u7684\u7cbe\u7075\u7684\u5927\u5c0f\u3002\u5982\u679c\u6709\u591a\u4e2a\u74e6\u7247\uff0c\u5219\u4f1a\u8c03\u6574 Cell Size \u4ee5\u5339\u914d\u9762\u677f\u5de6\u4e0b\u89d2\u7684\u7b2c\u4e00\u4e2a\u74e6\u7247\uff0c\u4f7f\u5176\u5b8c\u5168\u9002\u5408\u5355\u5143\u683c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Manual"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u9009\u9879\u53ef\u8f93\u5165\u81ea\u5b9a\u4e49\u5927\u5c0f\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Sort Mode")),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u5b9a\u74e6\u7247\u9762\u677f\u4e2d\u7684\u6e32\u67d3\u5668\u7684",(0,r.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/TransparencySortMode.html"},"\u900f\u660e\u5ea6\u6392\u5e8f\u6a21\u5f0f"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Default"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u900f\u660e\u5ea6\u6392\u5e8f\u6a21\u5f0f\u3002\u6b64\u6a21\u5f0f\u7531\u9879\u76ee\u7684 ",(0,r.kt)("strong",{parentName:"td"},"\u56fe\u5f62\u8bbe\u7f6e")," \u51b3\u5b9a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Orthographic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u6a21\u5f0f\u53ef\u6839\u636e\u4ece\u6444\u50cf\u673a\u5230\u74e6\u7247\u9762\u677f\u4e2d\u6e32\u67d3\u5668\u7684\u5782\u76f4\u8ddd\u79bb\u5bf9\u6e32\u67d3\u5668\u8fdb\u884c\u6392\u5e8f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Perspective"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u6a21\u5f0f\u53ef\u6839\u636e\u4ece\u6444\u50cf\u673a\u5230\u74e6\u7247\u9762\u677f\u4e2d\u6e32\u67d3\u5668\u7684\u76f4\u63a5\u8ddd\u79bb\u5bf9\u6e32\u67d3\u5668\u8fdb\u884c\u6392\u5e8f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Custom Axis Sort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6b64\u6a21\u5f0f\u53ef\u6839\u636e\u5bf9\u8c61\u6cbf\u81ea\u5b9a\u4e49\u8f74\u7684\u8ddd\u79bb\u5bf9\u5176\u8fdb\u884c\u6392\u5e8f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Sort Axis")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c  ",(0,r.kt)("strong",{parentName:"td"},"Sort Mode"),"  \u8bbe\u7f6e\u4e3a Custom Axis Sort\uff0c\u5219\u8bbe\u7f6e\u6392\u5e8f\u8f74\u7684 XYZ \u503c\u3002")))),(0,r.kt)("p",null,"\u547d\u540d\u65b0\u521b\u5efa\u7684\u9762\u677f\u5e76\u9009\u62e9\u6240\u9700\u7684\u8bbe\u7f6e\uff0c\u7136\u540e\u9009\u62e9 Create \u6309\u94ae\u3002\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u9009\u62e9\u8981\u5c06 Palette Asset \u6587\u4ef6\u4fdd\u5b58\u5230\u7684\u6587\u4ef6\u5939\u3002\u65b0\u521b\u5efa\u7684\u9762\u677f\u4f1a\u81ea\u52a8\u52a0\u8f7d\u5230 Tile Palette \u7a97\u53e3\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D-TilePalette-blank.png",alt:"2D-TilePalette-blank.png"}),(0,r.kt)("br",null),"\u7a7a\u767d\u74e6\u7247\u9762\u677f"),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"\u7eb9\u7406")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"\u7cbe\u7075")," \u4ece  ",(0,r.kt)("strong",{parentName:"p"},"Assets"),"  \u6587\u4ef6\u5939\u62d6\u653e\u5230\u74e6\u7247\u9762\u677f\uff0c\u5e76\u5728\u51fa\u73b0\u63d0\u793a\u65f6\u9009\u62e9\u4fdd\u5b58\u65b0\u7684",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-tilemap/tilemap-tile-asset"},"\u74e6\u7247\u8d44\u6e90"),"\u7684\u4f4d\u7f6e\u3002\u5c06\u5728\u6240\u9009\u6587\u4ef6\u5939\u4e2d\u751f\u6210\u65b0\u7684\u74e6\u7247\u8d44\u6e90\uff0c\u5e76\u4f1a\u5c06\u74e6\u7247\u653e\u7f6e\u5728\u6d3b\u52a8 Tile Palette \u7a97\u53e3\u7684\u7f51\u683c\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Tilemap-CreatingTiles-4.png",alt:"Tilemap-CreatingTiles-4.png"})),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u5feb\u6377\u65b9\u5f0f\u548c\u64cd\u4f5c\u6765\u5bfc\u822a Palette \u7a97\u53e3\uff0c\u5e76\u5f00\u59cb\u5728\u7f16\u8f91\u5668\u7a97\u53e3\u4e2d\u9009\u53d6\u74e6\u7247\u4ee5\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u7ed8\u5236\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5feb\u6377\u65b9\u5f0f/\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u5355\u51fb\u4e00\u4e2a\u74e6\u7247")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u74e6\u7247")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u9009\u62e9\u5e76\u5c06\u9f20\u6807\u62d6\u8fc7\u591a\u4e2a\u74e6\u7247")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u591a\u4e2a\u74e6\u7247")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Alt + \u9f20\u6807\u5de6\u952e\u5e76\u62d6\u52a8")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u79fb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u5355\u51fb\u9f20\u6807\u4e2d\u952e\u5e76\u62d6\u52a8")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u79fb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u65cb\u8f6c\u6eda\u8f6e\u952e")),(0,r.kt)("td",{parentName:"tr",align:null},"\u653e\u5927/\u7f29\u5c0f")))),(0,r.kt)("h2",{id:"active-brush-inspector"},"Active Brush Inspector"),(0,r.kt)("p",null,"Active Brush Inspector \u4f4d\u4e8e Tile Palette \u7a97\u53e3\u5e95\u90e8\u3002\u5728\u6b64\u5904\u53ef\u4ee5\u66f4\u6539\u5f53\u524d\u6709\u6548\u7684\u753b\u7b14\u53ca\u5176\u5c5e\u6027\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u6700\u5c0f\u5316\u3002\u8981\u5c06\u5176\u5c55\u5f00\uff0c\u8bf7\u5411\u4e0a\u62d6\u52a8\u5e95\u90e8\u7684\u5de5\u5177\u680f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/DefaultBrush_highlight.png",alt:"DefaultBrush_highlight.png"}),(0,r.kt)("br",null),"Brush \u4e0b\u62c9\u9009\u5355\u7a81\u51fa\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Brush"),"  \u4e0b\u62c9\u9009\u5355\u53ef\u5c06\u6709\u6548\u7684\u753b\u7b14\u4ece \u2019Default Brush\u2019\uff08\u9ed8\u8ba4\u753b\u7b14\uff09\u66f4\u6539\u4e3a\u5176\u4ed6\u753b\u7b14\uff0c\u4f8b\u5982",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/tilemap-scriptable-brushes"},"\u53ef\u7f16\u7a0b\u753b\u7b14"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Script")),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5f53\u524d\u5206\u914d\u7684\u811a\u672c\u8d44\u6e90\uff0c\u8be5\u8d44\u6e90\u4e3a\u74e6\u7247\u5730\u56fe\u7684\u7ed8\u5236\u63d0\u4f9b\u4e00\u7ec4\u56fa\u5b9a\u7684 API\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-scriptable-brushes/tilemap-scriptable-brushes-grid-brush-base"},"GridBrush"),"\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u6216\u521b\u5efa\u81ea\u5df1\u7684",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-scriptable-brushes"},"\u53ef\u7f16\u5199\u811a\u672c\u7684\u753b\u7b14"),"\uff0c\u4ee5\u4f9b\u4ece\u4e0b\u62c9\u9009\u5355\u4e2d\u4f7f\u7528\u3002Script \u5c5e\u6027\u66f4\u65b0\u4ee5\u53cd\u6620\u5f53\u524d\u6d3b\u52a8\u7684\u753b\u7b14\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Flood Fill Contiguous Only")),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u5c5e\u6027\u4f7f",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-painting#%E7%81%8C%E5%A1%AB%E5%B7%A5%E5%85%B7"},"\u704c\u586b\u5de5\u5177"),"\u4ec5\u5f71\u54cd\u74e6\u7247\u5730\u56fe\u4e0a\u4e0e\u76ee\u6807\u74e6\u7247\u76f8\u540c\u4e14\u76ee\u6807\u4f4d\u7f6e\u5f7c\u6b64\u76f8\u90bb\u7684\u74e6\u7247\u3002\u7981\u7528\u65f6\uff0c\u704c\u586b\u5c06\u66f4\u6539\u4e0e\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u76ee\u6807\u56fe\u5757\u76f8\u540c\u7684\u6240\u6709\u74e6\u7247\uff0c\u65e0\u8bba\u5176\u4f4d\u7f6e\u5982\u4f55\u3002\u8fd9\u4ec5\u5f71\u54cd\u9ed8\u8ba4\u753b\u7b14\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Lock Z Position")),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u5c5e\u6027\u53ef\u66f4\u6539\u6d3b\u52a8\u753b\u7b14\u7684 z \u4f4d\u7f6e\u3002\u7981\u7528\u5219\u9632\u6b62\u5bf9\u6d3b\u52a8\u753b\u7b14\u7684\u5f53\u524d z \u4f4d\u7f6e\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Z Position")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5728\u542f\u7528 Can Change Z Position \u65f6\u53ef\u7528\u3002\u4e3a\u6b64\u753b\u7b14\u8f93\u5165\u7ed8\u5236\u74e6\u7247\u65f6\u6240\u9700\u7684 z \u8f74\u503c\uff08\u4ec5\u9650\u6574\u6570\uff09\uff0c\u8fd9\u4e5f\u4f1a\u8c03\u6574 ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-create-iso"},"Z as Y \u7b49\u8ddd\u74e6\u7247\u5730\u56fe")," \u4e0a\u74e6\u7247\u7684\u76f8\u5bf9\u9ad8\u5ea6\u3002\u8bf7\u53c2\u9605\u6709\u5173",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-palette"},"\u5728\u74e6\u7247\u9762\u677f\u4e2d\u8c03\u6574\u74e6\u7247\u9ad8\u5ea6"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002")))),(0,r.kt)("h2",{id:"\u7f16\u8f91\u74e6\u7247\u9762\u677f-tile-palette"},"\u7f16\u8f91\u74e6\u7247\u9762\u677f (Tile Palette)"),(0,r.kt)("p",null,"\u62fe\u53d6\u548c\u7ed8\u5236\u74e6\u7247\u7684\u5de5\u5177\u4e5f\u53ef\u7528\u4e8e\u76f4\u63a5\u7f16\u8f91\u74e6\u7247\u9762\u677f\uff0c\u5141\u8bb8\u60a8\u79fb\u52a8\u548c\u64cd\u4f5c\u5f53\u524d\u653e\u7f6e\u5728\u74e6\u7247\u9762\u677f\u4e0a\u7684\u74e6\u7247\u3002\u4ece \u2018Palette\u2019 \u4e0b\u62c9\u9009\u5355\u4e2d\u9009\u62e9\u4e00\u4e2a\u8981\u7f16\u8f91\u7684\u9762\u677f\uff0c\u7136\u540e\u5355\u51fb  ",(0,r.kt)("strong",{parentName:"p"},"Edit"),"  \u5c06\u9762\u677f\u89e3\u9501\u4ee5\u8fdb\u884c\u7f16\u8f91\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Edit_highlighted.png",alt:"Edit_highlighted.png"})),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/tilemap-painting"},"\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u7ed8\u5236"),"\u7684\u6587\u6863\uff0c\u4e86\u89e3\u9762\u677f\u5de5\u5177\u7684\u5feb\u6377\u65b9\u5f0f\u548c\u529f\u80fd\uff0c\u8fd9\u4e9b\u5de5\u5177\u540c\u6837\u53ef\u7528\u4e8e\u7f16\u8f91\u9762\u677f\u3002"),(0,r.kt)("h2",{id:"\u4ece\u73b0\u6709\u7f51\u683c\u9884\u5236\u4ef6\u521b\u5efa\u9762\u677f\u8d44\u6e90"},"\u4ece\u73b0\u6709\u7f51\u683c\u9884\u5236\u4ef6\u521b\u5efa\u9762\u677f\u8d44\u6e90"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u73b0\u6709\u7684",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/prefabs"},"\u9884\u5236\u4ef6"),"\u8f6c\u6362\u4e3a\u9762\u677f\u8d44\u6e90\uff0c\u4ee5\u4fbf\u5728 Tile Palette \u7a97\u53e3\u4e2d\u4f7f\u7528\u3002\u4e3a\u6b64\uff0c\u9884\u5236\u4ef6\u4e0d\u80fd\u5df2\u7ecf\u662f\u9762\u677f\u8d44\u6e90\uff0c\u5e76\u4e14\u5728\u5176\u6700\u9876\u5c42\u7684\u6e38\u620f\u5bf9\u8c61\u4e0a\u5fc5\u987b\u6709\u4e00\u4e2a Grid \u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ActiveBrush_toolbar.png",alt:"Tile Palette \u5de5\u5177\u680f"})),(0,r.kt)("p",null,"Tile Palette \u5de5\u5177\u680f"),(0,r.kt)("p",null,"\u8981\u8f6c\u6362\u9884\u5236\u4ef6\uff0c\u8bf7\u5c06\u5176\u62d6\u653e\u5230 Tile Palette \u5de5\u5177\u680f\u4e0a\uff08\u5728\u4e0a\u56fe\u4e2d\u7a81\u51fa\u663e\u793a\uff09\u3002\u7f16\u8f91\u5668\u4f1a\u81ea\u52a8\u5c06\u5176\u8f6c\u6362\u4e3a\u9762\u677f\u8d44\u6e90\uff0c\u5e76\u6dfb\u52a0\u7f51\u683c\u9762\u677f\u8d44\u6e90\u3002\u65b0\u7684\u9762\u677f\u8d44\u6e90\u4e0e\u5176\u6e90\u7684\u540d\u79f0\u76f8\u540c\uff0c\u5e76\u53ef\u4ece Palette \u4e0b\u62c9\u9009\u5355\u4e2d\u9009\u62e9\u3002"),(0,r.kt)("h2",{id:"\u74e6\u7247\u9762\u677f\u5c0f\u5de5\u5177"},"\u74e6\u7247\u9762\u677f\u5c0f\u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TilePalette_gizmos.png",alt:"TilePalette_gizmos.png"})),(0,r.kt)("p",null,"\u74e6\u7247\u9762\u677f\u53ef\u5728\u5f53\u524d\u9762\u677f\u8d44\u6e90\u4e0a\u663e\u793a\u56fe\u6807\uff08",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-scene-view/gizmos-menu"},"\u5c0f\u5de5\u5177"),"\uff09\uff0c\u4ee5\u5e2e\u52a9\u60a8\u53ef\u89c6\u5316\u7279\u5b9a\u6761\u4ef6\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u4e3a\u4e0d\u5305\u542b\u7cbe\u7075\u7684\u74e6\u7247\u663e\u793a\u7279\u6b8a\u56fe\u6807\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u8981\u5728\u74e6\u7247\u9762\u677f\u4e0a\u663e\u793a\u9ed8\u8ba4\u7684 Unity \u548c\u74e6\u7247\u8d44\u6e90\u7684\u5c0f\u5de5\u5177\uff0c\u8bf7\u542f\u7528 Gizmos \u5f00\u5173\uff08\u5728\u4e0a\u56fe\u4e2d\u7a81\u51fa\u663e\u793a\uff09\u3002\u74e6\u7247\u9762\u677f\u4f1a\u7acb\u5373\u663e\u793a\u9762\u677f\u8d44\u6e90\u4e2d\u4efb\u4f55\u5e26\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnDrawGizmos.html"},"MonoBehaviour.OnDrawGizmos()")," \u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u8981\u5c06\u5e26\u6709 DrawGizmo \u7684\u7ec4\u4ef6\u6dfb\u52a0\u5230\u9762\u677f\u8d44\u6e90\uff1a"),(0,r.kt)("p",null,"1.\u5728 Project \u7a97\u53e3\u4e2d\u9009\u62e9\u9762\u677f\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"2.\u4ee5",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/prefabs/editing-in-prefab-mode"},"\u9884\u5236\u4ef6\u6a21\u5f0f"),"\u6253\u5f00\u9762\u677f\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"3.\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6dfb\u52a0\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"4.\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u4fdd\u5b58\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"5.\u9000\u51fa\u9884\u5236\u4ef6\u6a21\u5f0f\u3002"),(0,r.kt)("h2",{id:"tile-palette-\u4e0a\u4e0b\u6587\u83dc\u5355"},"Tile Palette \u4e0a\u4e0b\u6587\u83dc\u5355"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TilePalette_ContextualMenu.png",alt:"TilePalette_ContextualMenu.png"})),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb Tile Palette \u5de5\u5177\u680f\u4ee5\u663e\u793a\u4e0a\u4e0b\u6587\u83dc\u5355\uff0c\u5176\u4e2d\u5217\u51fa\u4e86\u591a\u4e2a\u64cd\u4f5c\uff0c\u53ef\u7528\u4e8e\u9009\u62e9\u548c\u5b9a\u4f4d\u4e0e\u74e6\u7247\u9762\u677f\u4ea4\u4e92\u7684\u5bf9\u8c61\u3002\u4e0b\u9762\u5217\u51fa\u4e86\u53ef\u7528\u7684\u64cd\u4f5c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u9009\u62e9\u7ed8\u5236\u76ee\u6807")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 Hierarchy \u7a97\u53e3\u4e2d\u9009\u62e9\u6e38\u620f\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u662f\u74e6\u7247\u9762\u677f\u4e2d\u7684\u5f53\u524d\u6d3b\u52a8\u74e6\u7247\u5730\u56fe\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u9009\u62e9\u9762\u677f\u9884\u5236\u4ef6")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 Project \u7a97\u53e3\u4e2d\u9009\u62e9\u5f53\u524d\u5728\u74e6\u7247\u9762\u677f\u4e2d\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u9762\u677f\u9884\u5236\u4ef6\u8d44\u6e90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u9009\u62e9\u74e6\u7247\u8d44\u6e90")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 Project \u7a97\u53e3\u4e2d\u9009\u62e9\u5f53\u524d\u9009\u5b9a\u7684\u74e6\u7247\u8d44\u6e90\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u89e3\u9501/\u9501\u5b9a\u9762\u677f\u7f16\u8f91")),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e3\u9501\u6216\u9501\u5b9a\u74e6\u7247\u9762\u677f\u7684\u7f16\u8f91\u3002")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u704c\u586b\u5de5\u5177\u8fde\u7eed\u8bbe\u7f6e\u548c Tile Palette \u4e0a\u4e0b\u6587\u83dc\u5355\u6dfb\u52a0\u4e8e ",(0,r.kt)("a",{parentName:"em",href:"https://docs.unity3d.com/2020.2/Documentation/Manual/30_search.html?q=newin20202"},"2020.2")," NewIn20202")," \u9875\u9762\u5185\u5bb9\u548c\u5c4f\u5e55\u622a\u56fe\u66f4\u65b0\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2020.1/Documentation/Manual/30_search.html?q=newin20201"},"2020.1")," NewIn20201 ","*"," \u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2017.2/Documentation/Manual/30_search.html?q=newin20172"},"2017.2")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u74e6\u7247\u5730\u56fe NewIn20172"))}c.isMDXComponent=!0}}]);