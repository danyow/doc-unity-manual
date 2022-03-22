"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40394],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(k,s(s({ref:e},c),{},{components:r})):a.createElement(k,s({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59139:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],l={id:"SpriteAtlasWorkflow",title:"\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b",slug:"/class-sprite-atlas/sprite-atlas-workflow"},o="\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b",p={unversionedId:"unity2d/sprites/class-sprite-atlas/SpriteAtlasWorkflow",id:"unity2d/sprites/class-sprite-atlas/SpriteAtlasWorkflow",title:"\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b",description:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\uff1a",source:"@site/docs/unity2d/sprites/class-sprite-atlas/sprite-atlas-workflow.md",sourceDirName:"unity2d/sprites/class-sprite-atlas",slug:"/class-sprite-atlas/sprite-atlas-workflow",permalink:"/docs/class-sprite-atlas/sprite-atlas-workflow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/sprites/class-sprite-atlas/sprite-atlas-workflow.md",tags:[],version:"current",frontMatter:{id:"SpriteAtlasWorkflow",title:"\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b",slug:"/class-sprite-atlas/sprite-atlas-workflow"},sidebar:"tutorialSidebar",previous:{title:"Sprite Atlas V2",permalink:"/docs/class-sprite-atlas/sprite-atlas-v2"},next:{title:"Sprite Packer \u6a21\u5f0f",permalink:"/docs/class-sprite-atlas/sprite-packer-modes"}},c={},u=[{value:"\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\u8d44\u6e90",id:"\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\u8d44\u6e90",level:2},{value:"\u9009\u62e9\u8981\u6dfb\u52a0\u5230\u201cObjects for Packing\u201d\u5217\u8868\u7684\u9879",id:"\u9009\u62e9\u8981\u6dfb\u52a0\u5230objects-for-packing\u5217\u8868\u7684\u9879",level:2},{value:"Include in Build",id:"include-in-build",level:2},{value:"Optimizing Sprite Atlas usage and size for improved performance",id:"optimizing-sprite-atlas-usage-and-size-for-improved-performance",level:2}],d={toc:u};function m(t){var e=t.components,r=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b"},"\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b"),(0,i.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\uff1a"),(0,i.kt)("p",null,"1.\u521b\u5efa",(0,i.kt)("a",{parentName:"p",href:"#%E7%B2%BE%E7%81%B5%E5%9B%BE%E9%9B%86"},"\u7cbe\u7075\u56fe\u96c6"),"\u8d44\u6e90\u3002 2.\u9009\u62e9\u4e00\u7ec4\u8981\u6253\u5305\u5230\u7cbe\u7075\u56fe\u96c6\u4e2d\u7684\u5bf9\u8c61 (",(0,i.kt)("a",{parentName:"p",href:"#objects-for-packing"},"Objects for Packing"),")\u3002 3.\u5728\u7cbe\u7075\u56fe\u96c6\u4e0a\u542f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"#include-in-build"},"Include in Build")," \u4ee5\u4fbf\u5c06\u7cbe\u7075\u56fe\u96c6\u5305\u542b\u5728\u9879\u76ee\u4e2d\u3002 4.\uff08\u53ef\u9009\uff09\u521b\u5efa",(0,i.kt)("a",{parentName:"p",href:"/docs/master-variant-atlases/variant-sprite-atlas"},"\u53d8\u4f53\u7cbe\u7075\u56fe\u96c6"),"\u3002 5.\uff08\u53ef\u9009\uff09\u51c6\u5907\u8981",(0,i.kt)("a",{parentName:"p",href:"/docs/sprite-atlas-distribution"},"\u5206\u53d1"),"\u7684\u7cbe\u7075\u56fe\u96c6\u3002 - \u51c6\u5907\u8981\u5206\u53d1\u7684\u7cbe\u7075\u9700\u8981\u4f7f\u7528\u811a\u672c\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"/docs/sprite-atlas-distribution/late-binding"},"\u540e\u671f\u7ed1\u5b9a"),"\u8fdb\u884c\u52a0\u8f7d\u3002 6.\uff08\u53ef\u9009\uff09",(0,i.kt)("a",{parentName:"p",href:"#%E4%BC%98%E5%8C%96"},"\u4f18\u5316"),"\u9879\u76ee\u4e2d\u7684\u7cbe\u7075\u56fe\u96c6\u7684\u4f7f\u7528\u548c\u5927\u5c0f\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\u8d44\u6e90"},"\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\u8d44\u6e90"),(0,i.kt)("p",null,"To create the  ",(0,i.kt)("strong",{parentName:"p"},"Sprite Atlas"),"  Asset, go to  ",(0,i.kt)("strong",{parentName:"p"},"Asset ",">"," Create ",">"," Sprite Atlas")," . Unity creates the Sprite Atlas in the Asset folder, with the file extension ","*"," .spriteatlas."),(0,i.kt)("h2",{id:"\u9009\u62e9\u8981\u6dfb\u52a0\u5230objects-for-packing\u5217\u8868\u7684\u9879"},"\u9009\u62e9\u8981\u6dfb\u52a0\u5230\u201cObjects for Packing\u201d\u5217\u8868\u7684\u9879"),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"Objects for Packing"),"  list displays the currently selected items that are in the Sprite Atlas. You can place Texture2D and Sprite Assets in this list. Drag and drop a folder directly onto the list to automatically add all valid content within the folder to the list (only the folder appears on the list)."),(0,i.kt)("p",null,"\u8981\u9009\u62e9\u5217\u8868\u7684\u7279\u5b9a\u9879\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("p",null,"1.\u9009\u62e9\u7cbe\u7075\u56fe\u96c6\u8d44\u6e90\uff0c\u5e76\u5728\u5176 Inspector \u7a97\u53e3\u4e2d\u627e\u5230 Objects For Packing \u5217\u8868\u3002\u6b64\u5217\u8868\u663e\u793a Unity \u5728\u6784\u5efa\u7cbe\u7075\u56fe\u96c6\u65f6\u8981\u6253\u5305\u7684\u4e00\u7ec4\u9879\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![ObjectsList.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/ObjectsList.png)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To add items, select the plus ( ",(0,i.kt)("strong",{parentName:"p"},"+")," ) icon at the lower right of the list to create a new row. Drag a valid Asset onto an empty row to add it to the list, or select the circle icon to the right of the row to open the  ",(0,i.kt)("strong",{parentName:"p"},"Select Object"),"  window. Select an Asset from the Object Picker window to add it to the list:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TexturePicker.png",alt:"TexturePicker.png"})),(0,i.kt)("p",{parentName:"li"},"To remove an item from the list, click the minus ( ",(0,i.kt)("strong",{parentName:"p"},"-")," ) icon at the lower right of the  ",(0,i.kt)("strong",{parentName:"p"},"Objects For Packing"),"  list. To replace an item, drag another item to the row it occupies to replace it on the list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select  ",(0,i.kt)("strong",{parentName:"p"},"Pack Preview"),"  to preview the combined Atlas Texture in the  ",(0,i.kt)("strong",{parentName:"p"},"Asset Preview"),"  window."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PackPreview.png",alt:"PackPreview.png"})))),(0,i.kt)("h2",{id:"include-in-build"},"Include in Build"),(0,i.kt)("p",null,"All Sprite Atlases have  ",(0,i.kt)("strong",{parentName:"p"},"Include in Build"),"  enabled by default when created. This means that Unity includes the Sprite Atlases with the Project\u2019s ",(0,i.kt)("a",{parentName:"p",href:"/docs/publishing-builds"},"build")," and automatically loads them at the build\u2019s run time. Enable or disable the \u2018Include in Build\u2019 property to control which Sprite Atlases are included in the Project build."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/IncludeInBuild.png",alt:"IncludeInBuild.png"})),(0,i.kt)("p",null,"\u53d6\u6d88\u9009\u4e2d\u201cInclude in Build\u201d\u4f1a",(0,i.kt)("a",{parentName:"p",href:"/docs/sprite-atlas-distribution#%E7%A6%81%E7%94%A8%E2%80%9Cinclude-in-build%E2%80%9D"},"\u7981\u7528"),"\u6b64\u884c\u4e3a\uff0c\u5e76\u5728\u51c6\u5907\u8981",(0,i.kt)("a",{parentName:"p",href:"/docs/sprite-atlas-distribution"},"\u5206\u53d1"),"\u7684\u7cbe\u7075\u56fe\u96c6\u65f6\u5b8c\u6210\u3002"),(0,i.kt)("h2",{id:"optimizing-sprite-atlas-usage-and-size-for-improved-performance"},"Optimizing Sprite Atlas usage and size for improved performance"),(0,i.kt)("p",null,"\u5f53\u7cbe\u7075\u5728\u573a\u666f\u4e2d\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\uff0cUnity \u4f1a\u52a0\u8f7d\u8be5\u7cbe\u7075\u6240\u5c5e\u7684\u7cbe\u7075\u56fe\u96c6\u4ee5\u53ca\u8be5\u7cbe\u7075\u5305\u542b\u7684\u6240\u6709\u7eb9\u7406\u3002\u5982\u679c Unity \u52a0\u8f7d\u5177\u6709\u5de8\u5927\u7eb9\u7406\u7684\u7cbe\u7075\u56fe\u96c6\uff0c\u800c\u573a\u666f\u4e2d\u6ca1\u6709\u4efb\u4f55\u5bf9\u8c61\u4f7f\u7528\u5927\u591a\u6570\u7684\u8fd9\u4e9b\u7eb9\u7406\u65f6\uff0c\u8fd9\u6837\u505a\u4f1a\u5bfc\u81f4\u8fc7\u9ad8\u7684\u6027\u80fd\u5f00\u9500\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f18\u5316\u7cbe\u7075\u56fe\u96c6\u7684\u4f7f\u7528\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u573a\u666f\u4e2d\u6fc0\u6d3b\u7684\u6240\u6709\u6216\u5927\u591a\u6570\u7cbe\u7075\u90fd\u5e94\u5c5e\u4e8e\u540c\u4e00\u4e2a\u56fe\u96c6\u3002\u6700\u597d\u6839\u636e\u7cbe\u7075\u7eb9\u7406\u7684\u5e38\u89c1\u7528\u9014\u5c06\u7cbe\u7075\u7eb9\u7406\u5206\u5272\u6210\u591a\u4e2a\u8f83\u5c0f\u7684\u56fe\u96c6\u3002"),(0,i.kt)("p",null,"\u964d\u4f4e\u6027\u80fd\u5f00\u9500\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u51cf\u5c11\u7cbe\u7075\u56fe\u96c6\u4e2d\u6253\u5305\u7eb9\u7406\u4e4b\u95f4\u7684\u7a7a\u767d\u7a7a\u95f4\u3002\u6b64\u505a\u6cd5\u53ef\u51cf\u5c0f\u7cbe\u7075\u56fe\u96c6\u7684\u5927\u5c0f\u3002\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u9009\u62e9\u7cbe\u7075\u56fe\u96c6\uff0c\u5e76\u68c0\u67e5\u5176 Inspector \u8bbe\u7f6e\u5e95\u90e8\u7684 Pack Preview \u7a97\u53e3\u4e2d\u6253\u5305\u7684\u56fe\u96c6\u7eb9\u7406\u3002\u5982\u679c\u6ca1\u6709\u53ef\u7528\u7684\u9884\u89c8\uff0c\u8bf7\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Objects for Packing"),"  \u5217\u8868\u4e0b\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Pack Preview"),"  \u6309\u94ae\u4ee5\u751f\u6210\u6253\u5305\u7684\u7eb9\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_ExcessSpace.png",alt:"Sprite Atlas with excess empty space."}),(0,i.kt)("br",null),"Sprite Atlas with excess empty space."),(0,i.kt)("p",null,"\u5982\u679c\u53ef\u89c1\u7684\u7a7a\u767d\u7a7a\u95f4\u8fc7\u591a\uff0c\u53ef\u4ee5\u624b\u52a8\u51cf\u5c0f\u6253\u5305\u7eb9\u7406\u7684\u5927\u5c0f\uff0c\u4ece\u800c\u51cf\u5c11\u7a7a\u767d\u7a7a\u95f4\u91cf\u5e76\u4f18\u5316\u56fe\u96c6\u7684\u5927\u5c0f\u3002\u4e3a\u6b64\uff0c\u8bf7\u524d\u5f80 Inspector \u7a97\u53e3\u5e95\u90e8\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Platform-specific overrides"),"  \u9762\u677f\u3002\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"Max Texture Size"),"  \u8bbe\u7f6e\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u4e00\u4e2a\u8f83\u5c0f\u7684\u503c\uff0c\u7136\u540e\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Pack Preview"),"  \u4ee5\u91cd\u65b0\u751f\u6210\u6253\u5305\u7684\u7eb9\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2DSpriteAtlas_MaxTexSize.png",alt:"Set the Max Texture Size."}),(0,i.kt)("br",null),"Set the Max Texture Size."),(0,i.kt)("p",null,"\u5f53  ",(0,i.kt)("strong",{parentName:"p"},"Max Texture Size"),"  \u503c\u5c0f\u4e8e\u7cbe\u7075\u56fe\u96c6\u7eb9\u7406\u7684\u5f53\u524d\u5c3a\u5bf8\u65f6\uff0cUnity \u4f1a\u51cf\u5c0f\u6253\u5305\u7eb9\u7406\u5c3a\u5bf8\u4ee5\u5c3d\u53ef\u80fd\u4e0e\u8bbe\u7f6e\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Max Texture Size"),"  \u5339\u914d\uff0c\u5e76\u81ea\u52a8\u4fee\u526a\u6389\u4efb\u4f55\u591a\u4f59\u7684\u7a7a\u767d\u7a7a\u95f4\u3002\u5982\u679c\u9009\u62e9\u7684\u4e00\u4e9b\u7cbe\u7075\u7eb9\u7406\u8d85\u8fc7\u7cbe\u7075\u56fe\u96c6\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Max Texture Size"),"  \u8bbe\u7f6e\uff0c\u5219\u7cbe\u7075\u56fe\u96c6\u5c06\u5ffd\u7565  ",(0,i.kt)("strong",{parentName:"p"},"Max Texture Size"),"  \u8bbe\u7f6e\uff0c\u5e76\u4fdd\u6301\u4e3a\u4e86\u4ee5\u539f\u59cb\u5c3a\u5bf8\u5305\u542b\u7cbe\u7075\u7eb9\u7406\u800c\u9700\u8981\u7684\u6700\u5c0f\u5c3a\u5bf8\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2DSpriteAtlas_MinTexSize.png",alt:"Textures in a Sprite Atlas remain in their original dimensions."}),(0,i.kt)("br",null),"Textures in a Sprite Atlas remain in their original dimensions."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  When using ",(0,i.kt)("a",{parentName:"p",href:"/docs/master-variant-atlases/variant-sprite-atlas"},"Variant Sprite Atlases"),", selecting a very low scale value (less than 0.25) may result in visual artifacts, depending on the compression format used and original resolution of the Sprite. It is recommended to use high padding values and better compression formats when using Variant Atlases."))}m.isMDXComponent=!0}}]);