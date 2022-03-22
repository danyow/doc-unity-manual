"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32238],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(v,l(l({ref:t},c),{},{components:n})):o.createElement(v,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22911:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],a={id:"UsingCustomEditorTools",title:"\u4f7f\u7528\u81ea\u5b9a\u4e49 Editor \u5de5\u5177",slug:"/using-the-scene-view/using-custom-editor-tools"},s="\u4f7f\u7528\u81ea\u5b9a\u4e49 Editor \u5de5\u5177",u={unversionedId:"unity-overview/using-the-editor/using-the-scene-view/UsingCustomEditorTools",id:"unity-overview/using-the-editor/using-the-scene-view/UsingCustomEditorTools",title:"\u4f7f\u7528\u81ea\u5b9a\u4e49 Editor \u5de5\u5177",description:"\u4ece Scene \u89c6\u56fe\u4e2d\u53ef\u4ee5\u8bbf\u95ee\u4f7f\u7528\u5de5\u5177\u6a21\u5f0f API \u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u5de5\u5177\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u8bbf\u95ee\u81ea\u5b9a\u4e49\u5de5\u5177\uff1a",source:"@site/docs/unity-overview/using-the-editor/using-the-scene-view/using-custom-editor-tools.md",sourceDirName:"unity-overview/using-the-editor/using-the-scene-view",slug:"/using-the-scene-view/using-custom-editor-tools",permalink:"/docs/using-the-scene-view/using-custom-editor-tools",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/using-the-editor/using-the-scene-view/using-custom-editor-tools.md",tags:[],version:"current",frontMatter:{id:"UsingCustomEditorTools",title:"\u4f7f\u7528\u81ea\u5b9a\u4e49 Editor \u5de5\u5177",slug:"/using-the-scene-view/using-custom-editor-tools"},sidebar:"tutorialSidebar",previous:{title:"\u573a\u666f\u53ef\u89c1\u6027",permalink:"/docs/using-the-scene-view/scene-visibility"},next:{title:"Scene view View Options toolbar",permalink:"/docs/using-the-scene-view/view-modes"}},c={},p=[{value:"\u5168\u5c40\u5de5\u5177\u4e0e\u4e0a\u4e0b\u6587\u5de5\u5177",id:"\u5168\u5c40\u5de5\u5177\u4e0e\u4e0a\u4e0b\u6587\u5de5\u5177",level:2},{value:"\u4ece Scene \u89c6\u56fe\u5de5\u5177\u680f\u4e2d\u6fc0\u6d3b\u81ea\u5b9a\u4e49 Editor \u5de5\u5177",id:"\u4ece-scene-\u89c6\u56fe\u5de5\u5177\u680f\u4e2d\u6fc0\u6d3b\u81ea\u5b9a\u4e49-editor-\u5de5\u5177",level:2},{value:"\u4ece Component Editor Tools \u9762\u677f\u4e2d\u6fc0\u6d3b\u4e0a\u4e0b\u6587\u5de5\u5177",id:"\u4ece-component-editor-tools-\u9762\u677f\u4e2d\u6fc0\u6d3b\u4e0a\u4e0b\u6587\u5de5\u5177",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-editor-\u5de5\u5177"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 Editor \u5de5\u5177"),(0,i.kt)("p",null,"\u4ece ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-the-scene-view"},"Scene \u89c6\u56fe"),"\u4e2d\u53ef\u4ee5\u8bbf\u95ee\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.1/Documentation/ScriptReference/EditorTools.EditorTool.html"},"\u5de5\u5177\u6a21\u5f0f API")," \u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u5de5\u5177\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u8bbf\u95ee\u81ea\u5b9a\u4e49\u5de5\u5177\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clicking the ",(0,i.kt)("a",{parentName:"li",href:"#%E4%BB%8E-scene-%E8%A7%86%E5%9B%BE%E5%B7%A5%E5%85%B7%E6%A0%8F%E4%B8%AD%E6%BF%80%E6%B4%BB%E8%87%AA%E5%AE%9A%E4%B9%89-editor-%E5%B7%A5%E5%85%B7"}," ",(0,i.kt)("strong",{parentName:"a"},"Available Custom Editor Tools"),"  drop-down menu")," in the Scene view Tool toolbar Overlay."),(0,i.kt)("li",{parentName:"ul"},"Opening the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Overlays.html"},"Tools Settings toolbar Overlay"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ToolModesExample.png",alt:"Custom Editor tools are available from a menu in the Scene view Tools toolbar Overlay"})),(0,i.kt)("p",null,"Custom Editor tools are available from a menu in the Scene view Tools toolbar Overlay"),(0,i.kt)("h2",{id:"\u5168\u5c40\u5de5\u5177\u4e0e\u4e0a\u4e0b\u6587\u5de5\u5177"},"\u5168\u5c40\u5de5\u5177\u4e0e\u4e0a\u4e0b\u6587\u5de5\u5177"),(0,i.kt)("p",null,"\u6709\u4e9b\u81ea\u5b9a\u4e49\u5de5\u5177\u662f\u5168\u5c40\u6027\u7684\uff0c\u800c\u6709\u4e9b\u5219\u662f\u4f9d\u8d56\u4e8e\u4e0a\u4e0b\u6587\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5168\u5c40\u5de5\u5177\u4f1a\u5f71\u54cd\u4efb\u4f55\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u5e76\u4e14\u65e0\u8bba\u60a8\u9009\u62e9\u54ea\u79cd\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u5168\u5c40\u5de5\u5177\u90fd\u59cb\u7ec8\u53ef\u7528\u3002\u4f8b\u5982\uff0c\u53d8\u6362\u7ec4\u4ef6\u5de5\u5177\u53ef\u7528\u4e8e\u4efb\u4f55\u6e38\u620f\u5bf9\u8c61\uff0c\u56e0\u6b64\u59cb\u7ec8\u53ef\u4f9b\u8bbf\u95ee\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u81ea\u5b9a\u4e49\u5de5\u5177\u4ec5\u5f71\u54cd\u7279\u5b9a\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\uff0c\u5e76\u4e14\u4ec5\u5728\u60a8\u9009\u62e9\u8be5\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\u65f6\u624d\u53ef\u7528\u3002\u4f8b\u5982\uff0c\u4ec5\u5f53\u9009\u62e9\u4e86\u5149\u6e90\u65f6\uff0c\u624d\u53ef\u4ee5\u8bbf\u95ee\u5149\u6e90\u7684\u81ea\u5b9a\u4e49\u64cd\u63a7\u5668\u3002")),(0,i.kt)("h2",{id:"\u4ece-scene-\u89c6\u56fe\u5de5\u5177\u680f\u4e2d\u6fc0\u6d3b\u81ea\u5b9a\u4e49-editor-\u5de5\u5177"},"\u4ece Scene \u89c6\u56fe\u5de5\u5177\u680f\u4e2d\u6fc0\u6d3b\u81ea\u5b9a\u4e49 Editor \u5de5\u5177"),(0,i.kt)("p",null,"\u8981\u6fc0\u6d3b\u81ea\u5b9a\u4e49 Editor \u5de5\u5177\uff0c\u8bf7\u53f3\u952e\u5355\u51fb Scene \u89c6\u56fe\u5de5\u5177\u680f\u4e2d\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Available Custom Editor Tools"),"  \u6309\u94ae\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ToolmodesMenu.png",alt:"ToolmodesMenu.png"})),(0,i.kt)("p",null,"\u6b64\u65f6\u5c06\u6253\u5f00\u4e00\u4e2a\u83dc\u5355\uff0c\u5e76\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A.  ",(0,i.kt)("strong",{parentName:"li"},"Recent")," \uff1a\u5217\u51fa\u6700\u8fd1\u4f7f\u7528\u8fc7\u7684\u5168\u5c40\u5de5\u5177\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u53ea\u6709\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u9996\u6b21\u6fc0\u6d3b\u5168\u5c40\u5de5\u5177\u65f6\uff0c\u624d\u4f1a\u51fa\u73b0\u6b64\u90e8\u5206\u3002"),(0,i.kt)("li",{parentName:"ul"},"B.  ",(0,i.kt)("strong",{parentName:"li"},"Selection")," \uff1a\u5217\u51fa\u53ef\u5f71\u54cd\u5f53\u524d\u6240\u9009\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u5de5\u5177\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u5982\u679c\u9879\u76ee\u4e2d\u6ca1\u6709\u5f71\u54cd\u6240\u9009\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u5de5\u5177\uff0c\u5219\u4e0d\u4f1a\u51fa\u73b0\u6b64\u90e8\u5206\u3002"),(0,i.kt)("li",{parentName:"ul"},"C.  ",(0,i.kt)("strong",{parentName:"li"},"Available")," \uff1a\u5217\u51fa\u6240\u6709\u53ef\u7528\u7684\u5168\u5c40\u5de5\u5177\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"\u53ea\u8981\u9879\u76ee\u5305\u542b\u81ea\u5b9a\u4e49\u5de5\u5177\uff0c\u6b64\u90e8\u5206\u5c31\u4f1a\u59cb\u7ec8\u51fa\u73b0\u3002")),(0,i.kt)("p",null,"If the Project does not contain any custom tools, the menu will not have the custom tools icon."),(0,i.kt)("p",null,"\u4ece\u83dc\u5355\u4e2d\u9009\u62e9\u5de5\u5177\u540e\uff0c ",(0,i.kt)("strong",{parentName:"p"},"Available Custom Editor Tools"),"  \u6309\u94ae\u5c06\u53d8\u4e3a\u9009\u5b9a\u5de5\u5177\u7684\u56fe\u6807\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ToolmodesMenuSelected.png",alt:"\u4ece\u83dc\u5355\u4e2d\u9009\u62e9 Custom Transform Tool \u540e\uff0c\u8be5\u5de5\u5177\u7684\u56fe\u6807\u5c06\u663e\u793a\u5728 Scene \u89c6\u56fe\u5de5\u5177\u680f\u4e2d"})),(0,i.kt)("p",null,"\u4ece\u83dc\u5355\u4e2d\u9009\u62e9 Custom Transform Tool \u540e\uff0c\u8be5\u5de5\u5177\u7684\u56fe\u6807\u5c06\u663e\u793a\u5728 Scene \u89c6\u56fe\u5de5\u5177\u680f\u4e2d"),(0,i.kt)("h2",{id:"\u4ece-component-editor-tools-\u9762\u677f\u4e2d\u6fc0\u6d3b\u4e0a\u4e0b\u6587\u5de5\u5177"},"\u4ece Component Editor Tools \u9762\u677f\u4e2d\u6fc0\u6d3b\u4e0a\u4e0b\u6587\u5de5\u5177"),(0,i.kt)("p",null,"The Component Editor Tools appear in the Tools Settings toolbar Overlay in the main Scene view window."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ToolmodesPopup.png",alt:"ToolmodesPopup.png"})),(0,i.kt)("p",null,"The Tool Settings toolbar contains all contextual custom tools that affect one or more selected GameObjects. It updates automatically whenever the selection changes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5355\u51fb\u4e00\u4e2a\u6309\u94ae\u4ee5\u6fc0\u6d3b\u4e00\u4e2a\u5de5\u5177\u3002")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.1/Documentation/Manual/30_search.html?q=newin20191"},"2019.1")," \u4e2d\u6dfb\u52a0\u4e86 Available Custom Editor Tools \u6309\u94ae\u548c Component Editor Tools \u9762\u677f NewIn20191")))}d.isMDXComponent=!0}}]);