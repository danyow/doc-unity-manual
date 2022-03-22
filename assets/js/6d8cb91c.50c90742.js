"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76711],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37424:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"webgl-texture-format",title:"Texture Compression in WebGL",slug:"/webgl-gettingstarted/webgl-texture-format"},l="Texture Compression in WebGL",u={unversionedId:"platform-specific/webgl/webgl-gettingstarted/webgl-texture-format",id:"platform-specific/webgl/webgl-gettingstarted/webgl-texture-format",title:"Texture Compression in WebGL",description:"Desktop and mobile devices support different texture compression formats. If you want your WebGL application to use compressed textures on both types of browsers, you must first choose a supported texture compression format.",source:"@site/docs/platform-specific/webgl/webgl-gettingstarted/webgl-texture-format.md",sourceDirName:"platform-specific/webgl/webgl-gettingstarted",slug:"/webgl-gettingstarted/webgl-texture-format",permalink:"/docs/webgl-gettingstarted/webgl-texture-format",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/webgl/webgl-gettingstarted/webgl-texture-format.md",tags:[],version:"current",frontMatter:{id:"webgl-texture-format",title:"Texture Compression in WebGL",slug:"/webgl-gettingstarted/webgl-texture-format"},sidebar:"tutorialSidebar",previous:{title:"WebGL Player \u8bbe\u7f6e",permalink:"/docs/webgl-gettingstarted/class-player-settings-web-gl"},next:{title:"Introduction to WebGL",permalink:"/docs/webgl-intro"}},c={},p=[{value:"Precedence for Texture Compression format settings",id:"precedence-for-texture-compression-format-settings",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"texture-compression-in-webgl"},"Texture Compression in WebGL"),(0,i.kt)("p",null,"Desktop and mobile devices support different texture compression formats. If you want your WebGL application to use compressed textures on both types of browsers, you must first choose a supported texture compression format."),(0,i.kt)("p",null,"You can set the default texture compression format for your WebGL application from one of the following locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("a",{parentName:"li",href:"/docs/webgl-building"},"WebGL Build Settings")," with the  ",(0,i.kt)("strong",{parentName:"li"},"Texture compression format"),"  setting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For an example on how to simultaneously create builds for both desktop browsers and mobile browsers with their corresponding texture compression formats, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/webgl-building#create-builds-for-desktop-and-mobile-browsers-from-a-script"},"Create builds for desktop and mobile browsers from a script"),"."))),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("a",{parentName:"li",href:"/docs/webgl-gettingstarted/class-player-settings-web-gl"},"WebGL Player Settings")," window ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Other Settings"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Rendering"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Texture compression format"),"  setting.")),(0,i.kt)("p",null,"The main difference between the Texture compression format setting in ",(0,i.kt)("a",{parentName:"p",href:"/docs/webgl-building"},"Build Settings")," vs the ",(0,i.kt)("a",{parentName:"p",href:"/docs/webgl-gettingstarted/class-player-settings-web-gl"},"Player Settings")," is that the texture compression in Build settings is serialized in the Library folder; therefore, it\u2019s not managed by version control."),(0,i.kt)("h3",{id:"precedence-for-texture-compression-format-settings"},"Precedence for Texture Compression format settings"),(0,i.kt)("p",null,"Before you set the texture compression format, it\u2019s important to determine which of these settings take precedence. The texture compression format value you set in Build Settings has priority over the value you set in Player Settings. By default, the Build settings value is set to  ",(0,i.kt)("strong",{parentName:"p"},"Use Player Settings")," ."),(0,i.kt)("p",null,"You can also customize the texture compression format for individual textures. The value you set for an individual texture  ",(0,i.kt)("strong",{parentName:"p"},"overrides"),"  the default texture compression format value. For information on how to change the texture format of individual textures, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/class-texture-importer"},"Texture Importer"),"."))}m.isMDXComponent=!0}}]);