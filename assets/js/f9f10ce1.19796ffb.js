"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25197],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(n),k=i,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(d,c(c({ref:t},u),{},{components:n})):a.createElement(d,c({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),c=["components"],l={id:"ScenePicking",title:"Pick and select GameObjects",slug:"/using-the-scene-view/scene-picking"},p="Pick and select GameObjects",o={unversionedId:"unity-overview/using-the-editor/using-the-scene-view/ScenePicking",id:"unity-overview/using-the-editor/using-the-scene-view/ScenePicking",title:"Pick and select GameObjects",description:"\u53ef\u4ee5\u5728 Scene \u89c6\u56fe\u4e2d\u6216\u4ece Hierarchy \u7a97\u53e3\u4e2d\u9009\u62e9\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u3002\u4e5f\u53ef\u4ee5\u4e00\u6b21\u9009\u62e9\u591a\u4e2a\u6e38\u620f\u5bf9\u8c61\u3002",source:"@site/docs/unity-overview/using-the-editor/using-the-scene-view/scene-picking.md",sourceDirName:"unity-overview/using-the-editor/using-the-scene-view",slug:"/using-the-scene-view/scene-picking",permalink:"/doc-unity-manual/docs/using-the-scene-view/scene-picking",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/using-the-editor/using-the-scene-view/scene-picking.md",tags:[],version:"current",frontMatter:{id:"ScenePicking",title:"Pick and select GameObjects",slug:"/using-the-scene-view/scene-picking"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u683c\u5bf9\u9f50",permalink:"/doc-unity-manual/docs/positioning-game-objects/grid-snapping"},next:{title:"Scene \u89c6\u56fe\u6444\u50cf\u673a",permalink:"/doc-unity-manual/docs/using-the-scene-view/scene-view-camera"}},u={},s=[{value:"Select GameObjects",id:"select-gameobjects",level:2},{value:"\u573a\u666f\u62fe\u53d6\u63a7\u4ef6",id:"\u573a\u666f\u62fe\u53d6\u63a7\u4ef6",level:2},{value:"Toggle pickability",id:"toggle-pickability",level:3}],m={toc:s};function k(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pick-and-select-gameobjects"},"Pick and select GameObjects"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-scene-view"},"Scene \u89c6\u56fe"),"\u4e2d\u6216\u4ece ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-editor/hierarchy"},"Hierarchy \u7a97\u53e3"),"\u4e2d\u9009\u62e9\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u3002\u4e5f\u53ef\u4ee5\u4e00\u6b21\u9009\u62e9\u591a\u4e2a\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"Unity \u4f1a\u5728 Scene \u89c6\u56fe\u4e2d\u7a81\u51fa\u663e\u793a\u9009\u62e9\u7684\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u5b50\u9879\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9009\u62e9\u8f6e\u5ed3\u989c\u8272\u4e3a\u6a59\u8272\uff0c\u5b50\u9879\u8f6e\u5ed3\u989c\u8272\u4e3a\u84dd\u8272\u3002\u8fd8\u53ef\u4ee5\u9009\u62e9\u4ee5\u5176\u4ed6\u989c\u8272\u7a81\u51fa\u663e\u793a\u6240\u9009\u6e38\u620f\u5bf9\u8c61\u7684\u7ebf\u6846\u3002\u5728 Unity Preferences \u7a97\u53e3\uff08\u5728 macOS \u4e0a\u9009\u62e9  ",(0,r.kt)("strong",{parentName:"p"},"Unity ",">"," Preferences")," \uff0c\u6216\u5728 Windows \u4e0a\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Edit ",">"," Preferences")," \uff09\u4e2d\u53ef\u4ee5\u66f4\u6539\u6240\u6709\u8fd9\u4e9b\u8f6e\u5ed3\u7a81\u51fa\u663e\u793a\u989c\u8272\u3002"),(0,r.kt)("p",null,"\u8981\u4e86\u89e3\u5173\u4e8e\u8f6e\u5ed3\u548c\u7ebf\u6846\u9009\u62e9\u53ef\u89c6\u5316\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6709\u5173 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-scene-view/gizmos-menu"},"Gizmos \u83dc\u5355"),"\u7684\u6587\u6863\u3002"),(0,r.kt)("h2",{id:"select-gameobjects"},"Select GameObjects"),(0,r.kt)("p",null,"\u8981\u9009\u62e9\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u8bf7\u91c7\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-scene-view"},"Scene \u89c6\u56fe"),"\u4e2d\u5355\u51fb\u6e38\u620f\u5bf9\u8c61\u3002\u5982\u679c\u53cd\u590d\u5355\u51fb\u91cd\u53e0\u7684\u6e38\u620f\u5bf9\u8c61\u4e4b\u95f4\u7684\u5171\u4eab\u7a7a\u95f4\uff0c\u9009\u62e9\u5c06\u5728\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\u4e4b\u95f4\u5faa\u73af\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"\u6216"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-editor/hierarchy"},"Hierarchy \u7a97\u53e3"),"\u4e2d\u5355\u51fb\u6e38\u620f\u5bf9\u8c61\u7684\u540d\u79f0\u3002"))),(0,r.kt)("p",null,"\u8981\u9009\u62e9\u6216\u53d6\u6d88\u9009\u62e9\u591a\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u8bf7\u91c7\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56f4\u7ed5\u591a\u4e2a\u6e38\u620f\u5bf9\u8c61\u62d6\u51fa\u4e00\u4e2a\u77e9\u5f62\u3002Unity \u4f1a\u9009\u62e9\u6b64\u5305\u56f4\u6846\u5185\u7684\u6240\u6709\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"\u6216"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6309\u4f4f  ",(0,r.kt)("strong",{parentName:"p"},"Shift"),"  \u952e\u7684\u540c\u65f6\u5728\u573a\u666f\u4e2d\u5355\u51fb\u6e38\u620f\u5bf9\u8c61\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Ctrl"),"  (Windows) \u6216  ",(0,r.kt)("strong",{parentName:"p"},"Command"),"  (macOS) \u952e\uff0c\u5728\u9009\u62e9\u8303\u56f4\u5185\u6dfb\u52a0\u6216\u5220\u9664\u6e38\u620f\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728 Editor \u4e2d\u9700\u8981\u9009\u62e9\u5355\u4e2a\u6e38\u620f\u5bf9\u8c61\u6765\u6267\u884c\u64cd\u4f5c\u65f6\uff0c\u5b83\u5c06\u5bfb\u627e\u201c\u6fc0\u6d3b\u7684\u201d\u5bf9\u8c61\u3002\u4f8b\u5982\uff0c\u5728\u8f74\u5fc3\u6a21\u5f0f\u4e0b\uff0cUnity \u5fc5\u987b\u51b3\u5b9a\u5c06\u54ea\u4e2a\u6e38\u620f\u5bf9\u8c61\u7528\u4f5c\u53d8\u6362\u7ec4\u4ef6\u5de5\u5177\u7684\u8f74\u5fc3\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cUnity \u4f1a\u5c06\u60a8\u9009\u62e9\u7684\u7b2c\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u89c6\u4e3a\u201c\u6fc0\u6d3b\u7684\u201d\u5bf9\u8c61\u3002\u6bcf\u6b21\u6309\u4f4f Shift \u952e\u5e76\u5355\u51fb\u51e0\u4e2a\u9009\u5b9a\u6e38\u620f\u5bf9\u8c61\u4e4b\u4e00\u65f6\uff0c\u5373\u53ef\u66f4\u6539\u54ea\u4e2a\u6e38\u620f\u5bf9\u8c61\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u3002\u67d0\u4e2a\u6e38\u620f\u5bf9\u8c61\u5728 Scene \u89c6\u56fe\u4e2d\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u65f6\uff0cUnity \u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u53ef\u89c1\u7684\u63d0\u793a\u6765\u6307\u793a\u8be5\u6e38\u620f\u5bf9\u8c61\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u3002\u4f46\u662f\uff0c\u5728 Scene \u89c6\u56fe\u4e2d\uff0c\u5728",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/positioning-game-objects#%E8%BE%85%E5%8A%A9%E5%9B%BE%E6%A0%87%E6%8E%A7%E5%88%B6%E6%9F%84%E4%BD%8D%E7%BD%AE%E5%BC%80%E5%85%B3"},"\u8f74\u5fc3\u6a21\u5f0f"),"\u4e0b\u9009\u62e9\u591a\u4e2a\u5bf9\u8c61\u5e76\u6309\u4f4f Shift \u952e\u53cd\u590d\u5355\u51fb\u65f6\uff0c\u5373\u53ef\u770b\u5230\u54ea\u4e2a\u6e38\u620f\u5bf9\u8c61\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u3002"))),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u6240\u5904\u7406\u7684\u5927\u578b\u573a\u666f\u4e2d\u5305\u542b\u5f88\u591a\u573a\u666f\u9879\uff08\u4f8b\u5982\u6e38\u620f\u5bf9\u8c61\u3001\u5730\u5f62\u5bf9\u8c61\u3001\u6444\u50cf\u673a\u548c\u5149\u6e90\uff09\uff0c\u5219\u9009\u62e9\u591a\u4e2a\u5bf9\u8c61\u53ef\u80fd\u4f1a\u975e\u5e38\u68d8\u624b\u3002\u4e3a\u4e86\u65b9\u4fbf\u4ec5\u9009\u62e9\u6240\u9700\u7684\u9879\uff0c\u53ef\u4ee5\u4f7f\u7528\u573a\u666f\u62fe\u53d6\u63a7\u4ef6\u6765\u963b\u6b62\u62fe\u53d6\u67d0\u4e9b\u5bf9\u8c61\u3002"),(0,r.kt)("h2",{id:"\u573a\u666f\u62fe\u53d6\u63a7\u4ef6"},"\u573a\u666f\u62fe\u53d6\u63a7\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u6253\u5f00\u548c\u5173\u95ed\u573a\u666f\u62fe\u53d6\u63a7\u4ef6\u6765\u6807\u8bb0\u5728 Editor \u4e2d\u5de5\u4f5c\u65f6\u53ef\u4ee5\u62fe\u53d6\u7684\u9879\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u9879\u90fd\u53ef\u62fe\u53d6\uff0c\u4f46\u662f\u60a8\u53ef\u4ee5\u9009\u62e9\u5728\u5355\u51fb\u573a\u666f\u9879\u65f6 Unity \u8df3\u8fc7\u54ea\u4e9b\u9879\u800c\u4e0d\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u9009\u62e9\u8303\u56f4\u4e2d\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5728\u5177\u6709 10,000 \u591a\u4e2a\u5bf9\u8c61\u7684\u5927\u578b\u573a\u666f\u4e2d\u5de5\u4f5c\uff0c\u53ef\u4ee5\u6682\u65f6\u963b\u6b62\u9009\u62e9\u7279\u5b9a\u7684\u6e38\u620f\u5bf9\u8c61\u4ee5\u9632\u6b62\u8bef\u7f16\u8f91\u3002"),(0,r.kt)("p",null,"\u5c06\u67d0\u4e00\u9879\u6807\u8bb0\u4e3a\u4e0d\u53ef\u62fe\u53d6\u540e\uff0c\u5373\u4f7f\u65e0\u6cd5\u518d\u5728 Scene \u89c6\u56fe\u4e2d\u9009\u62e9\u6216\u7f16\u8f91\u8be5\u9879\uff0cUnity \u4e5f\u4f1a\u7ee7\u7eed\u6e32\u67d3\u8be5\u9879\u3002\u53ef\u62fe\u53d6\u6027\u72b6\u6001\u4ec5\u5728 Editor \u4e2d\u6301\u7eed\u5b58\u5728\uff0c\u5e76\u4e14\u4ec5\u5728\u8bbe\u7f6e\u5b83\u7684\u9879\u76ee\u4e2d\u9488\u5bf9\u8be5\u7528\u6237\u800c\u6301\u7eed\u5b58\u5728\u3002\u66f4\u6539\u62fe\u53d6\u72b6\u6001\u4e0d\u4f1a\u201c\u6c61\u67d3\u201d\u573a\u666f\uff08\u5373\u7b97\u4f5c\u4fee\u6539\uff09\u3002"),(0,r.kt)("p",null,"\u573a\u666f\u62fe\u53d6\u63a7\u4ef6\u4e0e",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-scene-view/scene-visibility"},"\u573a\u666f\u53ef\u89c1\u6027"),"\u63a7\u4ef6\u975e\u5e38\u76f8\u4f3c\u3002"),(0,r.kt)("h3",{id:"toggle-pickability"},"Toggle pickability"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-editor/hierarchy"},"Hierarchy \u7a97\u53e3"),"\u63a7\u5236\u5404\u4e2a\u6e38\u620f\u5bf9\u8c61\u5728\u573a\u666f\u4e2d\u7684\u53ef\u62fe\u53d6\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/scene-picking-icons-hierarchy.png",alt:"Every GameObject has a Scene pickability icon/toggle"})),(0,r.kt)("p",null,"Every GameObject has a Scene pickability icon/toggle"),(0,r.kt)("p",null,"\u8981\u5207\u6362\u573a\u666f\u53ef\u62fe\u53d6\u6027\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-editor/hierarchy"},"Hierarchy")," \u7a97\u53e3\u4e2d\u6e38\u620f\u5bf9\u8c61\u7684\u53ef\u62fe\u53d6\u6027\u56fe\u6807\uff0c\u5728\u542f\u7528\u548c\u7981\u7528\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u5b50\u9879\u7684\u62fe\u53d6\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5207\u6362\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u5b50\u9879\u7684\u53ef\u62fe\u53d6\u6027\u4f1a\u5f71\u54cd\u6240\u6709\u5b50\u6e38\u620f\u5bf9\u8c61\uff08\u4ece\u201c\u76ee\u6807\u201d\u6e38\u620f\u5bf9\u8c61\u4e00\u76f4\u5230\u5c42\u7ea7\u89c6\u56fe\u7684\u5e95\u90e8\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6309\u4f4f  ",(0,r.kt)("strong",{parentName:"p"},"Alt"),"  \u5e76\u5355\u51fb Hierarchy \u7a97\u53e3\u4e2d\u6e38\u620f\u5bf9\u8c61\u7684\u53ef\u62fe\u53d6\u6027\u56fe\u6807\uff0c\u5728\u4ec5\u542f\u7528\u548c\u7981\u7528\u8fd9\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u62fe\u53d6\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5207\u6362\u5355\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u53ef\u62fe\u53d6\u6027\u4e0d\u4f1a\u5f71\u54cd\u5176\u5b50\u9879\u3002\u8fd9\u4e9b\u5b50\u9879\u4f1a\u4fdd\u7559\u4ee5\u524d\u5177\u6709\u7684\u4efb\u4f55\u53ef\u62fe\u53d6\u6027\u72b6\u6001\u3002"))),(0,r.kt)("p",null,"\u7531\u4e8e\u53ef\u4ee5\u5207\u6362\u6574\u4e2a\u5206\u652f\u6216\u5355\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u53ef\u62fe\u53d6\u6027\uff0c\u56e0\u6b64\u6700\u540e\u53ef\u4ee5\u62fe\u53d6\u6e38\u620f\u5bf9\u8c61\uff0c\u4f46\u65e0\u6cd5\u62fe\u53d6\u5b50\u9879\u548c\u7236\u9879\u3002\u4e3a\u4e86\u5e2e\u52a9\u8ddf\u8e2a\u53d1\u751f\u7684\u60c5\u51b5\uff0c\u53ef\u62fe\u53d6\u6027\u56fe\u6807\u4f1a\u6539\u53d8\u4ee5\u6307\u793a\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/scene-picking-icons-ovw.png",alt:"Unity only selects pickable items when you draw a selection bounding box in the Scene view"})),(0,r.kt)("p",null,"Unity only selects pickable items when you draw a selection bounding box in the Scene view"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"->"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ScenePickingPickableUnpickableChildren.png",alt:"ScenePickingPickableUnpickableChildren.png"})),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u62fe\u53d6\u6e38\u620f\u5bf9\u8c61\uff0c\u4f46\u65e0\u6cd5\u62fe\u53d6\u5b83\u7684\u67d0\u4e9b\u5b50\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ScenePickingUnpickablePickableChildren.png",alt:"ScenePickingUnpickablePickableChildren.png"})),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u62fe\u53d6\u6e38\u620f\u5bf9\u8c61\uff0c\u4f46\u53ef\u4ee5\u62fe\u53d6\u5b83\u7684\u67d0\u4e9b\u5b50\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ScenePickingUnpickable.png",alt:"ScenePickingUnpickable.png"})),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u62fe\u53d6\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u5b50\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"D")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ScenePickingPickable.png",alt:"ScenePickingPickable.png"})),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u62fe\u53d6\u6e38\u620f\u5bf9\u8c61\u53ca\u5176\u5b50\u9879\u3002\u4ec5\u5f53\u9f20\u6807\u60ac\u505c\u5728\u6e38\u620f\u5bf9\u8c61\u4e0a\u65f6\uff0c\u624d\u4f1a\u663e\u793a\u6b64\u56fe\u6807\u3002")))),(0,r.kt)("p",null,"\u5728 Hierarchy \u7a97\u53e3\u4e2d\u8fdb\u884c\u7684\u6240\u6709\u573a\u666f\u62fe\u53d6\u66f4\u6539\u90fd\u662f\u6301\u4e45\u6709\u6548\u7684\u3002\u6bcf\u5f53\u4f7f\u7528  ",(0,r.kt)("strong",{parentName:"p"},"Select All"),"  \u6216  ",(0,r.kt)("strong",{parentName:"p"},"Deselect All")," \u3001\u5173\u95ed\u7136\u540e\u91cd\u65b0\u6253\u5f00\u573a\u666f\u6216\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\u65f6\uff0cUnity \u90fd\u4f1a\u91cd\u65b0\u5e94\u7528\u8fd9\u4e9b\u66f4\u6539\u3002"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/30_search.html?q=newin20193"},"2019.3")," \u4e2d\u6dfb\u52a0\u4e86\u201c\u573a\u666f\u62fe\u53d6\u201dNewIn20193")))}k.isMDXComponent=!0}}]);