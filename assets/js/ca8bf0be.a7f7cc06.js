"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3662],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,s=function(t,e){if(null==t)return{};var r,a,s={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,s=t.mdxType,n=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(r),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(h,i(i({ref:e},c),{},{components:r})):a.createElement(h,i({ref:e},c))}));function m(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:s,i[1]=o;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39255:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(87462),s=r(63366),n=(r(67294),r(3905)),i=["components"],o={id:"SpriteAtlasV2",title:"Sprite Atlas V2",slug:"/class-sprite-atlas/sprite-atlas-v2"},l="Sprite Atlas V2",p={unversionedId:"unity2d/sprites/class-sprite-atlas/SpriteAtlasV2",id:"unity2d/sprites/class-sprite-atlas/SpriteAtlasV2",title:"Sprite Atlas V2",description:"The current Sprite Atlas V1 system packs Textures (from Sprites, Sprites within Textures, and Sprites in folders) into an Atlas Texture. It packs these Textures when it enters Play mode, or when it builds the Player or an AssetBundle. AssetDatabase V1 cannot have dependencies, and has no Importer support for named objects, so Unity packs its Sprite Atlases through a custom mechanism and stores the output data of Textures and render data in the Library/AtlasCache folder.",source:"@site/docs/unity2d/sprites/class-sprite-atlas/sprite-atlas-v2.md",sourceDirName:"unity2d/sprites/class-sprite-atlas",slug:"/class-sprite-atlas/sprite-atlas-v2",permalink:"/doc-unity-manual/docs/class-sprite-atlas/sprite-atlas-v2",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/sprites/class-sprite-atlas/sprite-atlas-v2.md",tags:[],version:"current",frontMatter:{id:"SpriteAtlasV2",title:"Sprite Atlas V2",slug:"/class-sprite-atlas/sprite-atlas-v2"},sidebar:"tutorialSidebar",previous:{title:"\u89e3\u6790\u4e0d\u540c\u7684\u7cbe\u7075\u56fe\u96c6\u60c5\u5f62",permalink:"/doc-unity-manual/docs/sprite-atlas-distribution/sprite-atlas-scenarios"},next:{title:"\u7cbe\u7075\u56fe\u96c6\u5de5\u4f5c\u6d41\u7a0b",permalink:"/doc-unity-manual/docs/class-sprite-atlas/sprite-atlas-workflow"}},c={},u=[{value:"Sprite Atlas V2 development criteria",id:"sprite-atlas-v2-development-criteria",level:2},{value:"Sprite Atlas V2 Inspector properties",id:"sprite-atlas-v2-inspector-properties",level:2},{value:"Enabling Sprite Atlas V2",id:"enabling-sprite-atlas-v2",level:2}],d={toc:u};function m(t){var e=t.components,r=(0,s.Z)(t,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sprite-atlas-v2"},"Sprite Atlas V2"),(0,n.kt)("p",null,"The current Sprite Atlas V1 system packs Textures (from Sprites, Sprites within Textures, and Sprites in folders) into an Atlas Texture. It packs these Textures when it enters Play mode, or when it builds the Player or an AssetBundle. ",(0,n.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/asset-database"},"AssetDatabase V1")," cannot have dependencies, and has no Importer support for named objects, so Unity packs its Sprite Atlases through a custom mechanism and stores the output data of Textures and render data in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Library/AtlasCache")," folder."),(0,n.kt)("p",null,"However, Sprite Atlas V1 does not support the ",(0,n.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/asset-server/cache-server"},"Cache Server"),". Unity can only cache ",(0,n.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/asset-database"},"Artifacts")," (data generated through the import process) stored in the Library folder. As it does not use an ",(0,n.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/asset-types/scripted-importers"},"importer"),", the current system cannot use some of the functionalities exposed by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/AssetDatabase.html"},"AssetDatabase V2")," (ADBV2) such as Cache Server support."),(0,n.kt)("h2",{id:"sprite-atlas-v2-development-criteria"},"Sprite Atlas V2 development criteria"),(0,n.kt)("p",null,"The Sprite Atlas V2 system is developed with the following criteria in mind:"),(0,n.kt)("p",null,"1.\u4f7f\u7528\u652f\u6301\u7f13\u5b58\u670d\u52a1\u5668\u548c\u5176\u4ed6 ADBV2 \u529f\u80fd\u7684\u5bfc\u5165\u5668\u5de5\u4f5c\u6d41\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"No changes are made to the Sprite Atlas runtime object.")),(0,n.kt)("p",null,"3.\u786e\u4fdd\u5b58\u5728\u5c06\u5f53\u524d\u7cbe\u7075\u56fe\u96c6\u8fc1\u79fb\u5230 Sprite Atlas \u7248\u672c 2 \u7684\u8def\u5f84\u3002"),(0,n.kt)("p",null,"4.UX \u5de5\u4f5c\u6d41\u7a0b\u6ca1\u6709\u91cd\u5927\u53d8\u5316\u3002"),(0,n.kt)("h2",{id:"sprite-atlas-v2-inspector-properties"},"Sprite Atlas V2 Inspector properties"),(0,n.kt)("p",null,"There are no changes to the Inspector properties and settings from that of Sprite Atlas V1 except for the following :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The imported Sprite Atlas object is displayed at the bottom of the Inspector.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SprAtlasV2_Inspector.png",alt:"SprAtlasV2_Inspector.png"}),(0,n.kt)("br",null),"Sprite Atlas V2 Inspector properties."),(0,n.kt)("h2",{id:"enabling-sprite-atlas-v2"},"Enabling Sprite Atlas V2"),(0,n.kt)("p",null,"To enable Sprite Atlas V2 Sprite Packer mode, go to  ",(0,n.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings ",">"," Sprite Packer ",">"," Mode")," , and select  ",(0,n.kt)("strong",{parentName:"p"},"Sprite Atlas V2 - Enabled"),"  from the dropdown menu."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SprAtlasV2_ProjectSettings.png",alt:"SprAtlasV2_ProjectSettings.png"})),(0,n.kt)("p",null,"When you enable  ",(0,n.kt)("strong",{parentName:"p"},"Sprite Atlas V2")," , there are the following effects:"),(0,n.kt)("p",null,"1.\u5f53\u60a8\u901a\u8fc7 Assets \u83dc\u5355\u521b\u5efa\u7cbe\u7075\u56fe\u96c6\u65f6\uff0c\u5b83\u6210\u4e3a\u9ed8\u8ba4\u6a21\u5f0f ( ",(0,n.kt)("strong",{parentName:"p"},"Assets ",">"," Create ",">"," Sprite Atlas")," )\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Unity automatically migrates all existing Sprite Atlas V1 Assets to Sprite Atlas V2.")),(0,n.kt)("p",null,"Due to the automatic migration, it is recommended that you make a backup of your V1 Sprite Atlases before you enable Sprite Atlas V2. Assets converted to V2 are incompatible with V1, and cannot be converted back."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"*","Sprite Atlas \u7248\u672c 2\uff08\u5b9e\u9a8c\u6027\uff09\u6dfb\u52a0\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2020.1/Documentation/Manual/30_search.html?q=newin20201"},"2020.1")," NewIn20201"))}m.isMDXComponent=!0}}]);