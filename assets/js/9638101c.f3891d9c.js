"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91333],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=o,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},88614:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"webgl-browsercompatibility",title:"WebGL browser compatibility",slug:"/webgl-intro/webgl-browsercompatibility"},s="WebGL browser compatibility",p={unversionedId:"platform-specific/webgl/webgl-intro/webgl-browsercompatibility",id:"platform-specific/webgl/webgl-intro/webgl-browsercompatibility",title:"WebGL browser compatibility",description:"Unity WebGL support for desktop browsers differs depending on the browser. It supports browsers where all of the following are true:",source:"@site/docs/platform-specific/webgl/webgl-intro/webgl-browsercompatibility.md",sourceDirName:"platform-specific/webgl/webgl-intro",slug:"/webgl-intro/webgl-browsercompatibility",permalink:"/docs/webgl-intro/webgl-browsercompatibility",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/webgl/webgl-intro/webgl-browsercompatibility.md",tags:[],version:"current",frontMatter:{id:"webgl-browsercompatibility",title:"WebGL browser compatibility",slug:"/webgl-intro/webgl-browsercompatibility"},sidebar:"tutorialSidebar",previous:{title:"Audio in WebGL",permalink:"/docs/webgl-intro/webgl-audio"},next:{title:"WebGL \u4e2d\u7684\u5d4c\u5165\u5f0f\u8d44\u6e90",permalink:"/docs/webgl-intro/webgl-embeddedresources"}},c={},u=[{value:"WebGL 1 deprecation",id:"webgl-1-deprecation",level:2},{value:"WebGL 1 graphics card blocklists",id:"webgl-1-graphics-card-blocklists",level:2}],b={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webgl-browser-compatibility"},"WebGL browser compatibility"),(0,i.kt)("p",null,"Unity WebGL support for desktop browsers differs depending on the browser. It supports browsers where all of the following are true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The browser is WebGL 1 or WebGL 2 capable.  ",(0,i.kt)("strong",{parentName:"li"},"Note")," : Unity has marked WebGL 1 support for deprecation and will remove it in a future release."),(0,i.kt)("li",{parentName:"ul"},"The browser is HTML 5 standards-compliant."),(0,i.kt)("li",{parentName:"ul"},"The browser is 64-bit and supports WebAssembly.")),(0,i.kt)("p",null,"Unity WebGL doesn\u2019t support mobile devices. It might work on high-end devices, but current devices are often not powerful enough and don\u2019t have enough memory to support Unity WebGL content. To make the end user aware of this, the default ",(0,i.kt)("a",{parentName:"p",href:"/docs/webgl-building-distribution/webgl-templates"},"template")," for Unity WebGL displays a warning message when the end user attempts to load a Unity WebGL application on a mobile browser. To remove this warning from your application, add your own WebGL template. For information on how to do this, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/webgl-building-distribution/webgl-templates"},"Add a WebGL template"),"."),(0,i.kt)("p",null,"Unity WebGL supports some compressed texture formats. For information on the compressed texture formats Unity WebGL supports, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/texture-compression-formats/class-texture-importer-override"},"Recommended, default, and supported texture compression formats, by platform"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Desktop Browser")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Desktop Platforms")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Google Chrome"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows, macOS, Linux")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mozilla Firefox"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows, macOS, Linux")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Apple Safari"),(0,i.kt)("td",{parentName:"tr",align:null},"macOS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Edge"),(0,i.kt)("td",{parentName:"tr",align:null},"Windows, macOS, Linux")))),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apple Safari doesn\u2019t support WebGL 2 in versions before Safari 15."),(0,i.kt)("li",{parentName:"ul"},"Apple Safari doesn\u2019t support IndexedDB for content running in an iFrame."),(0,i.kt)("li",{parentName:"ul"},"Only Mozilla Firefox supports the Large-Allocation HTTP header. For information about the Large-Allocation HTTP header, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/webgl-develop/webgl-memory"},"Memory in WebGL"),"."),(0,i.kt)("li",{parentName:"ul"},"Unity WebGL no longer supports ",(0,i.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/microsoft-edge/what-is-microsoft-edge-legacy-3e779e55-4c55-08e6-ecc8-2333768c0fb0"},"Microsoft Edge Legacy"),". Unity WebGL supports the new Microsoft Edge based on Chromium.")),(0,i.kt)("h2",{id:"webgl-1-deprecation"},"WebGL 1 deprecation"),(0,i.kt)("p",null,"In version 2021.2, Unity marked support for the WebGL 1 Graphics API as deprecated. Currently, there are no changes in behavior and Unity still includes the WebGL 1 Graphics API if you enable the  ",(0,i.kt)("strong",{parentName:"p"},"Auto Graphics API"),"  Player Setting. However, Unity will remove support for WebGL 1 In a future release."),(0,i.kt)("h2",{id:"webgl-1-graphics-card-blocklists"},"WebGL 1 graphics card blocklists"),(0,i.kt)("p",null,"GPU blocklists apply. Older graphics cards might not support WebGL. For more information, see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mozilla\u2019s documentation on ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.mozilla.org/Blocklisting/Blocked_Graphics_Drivers"},"Blocklisting/Blocked Graphics Drivers"),"."),(0,i.kt)("li",{parentName:"ul"},"Khronos\u2019s documentation on ",(0,i.kt)("a",{parentName:"li",href:"https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists"},"Blacklists and Whitelists"),".")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u7528\u6237\u624b\u518c 5.6 \u4e2d\u7684\u6b64\u9875\u9762\u4e0a\u9996\u6b21\u6dfb\u52a0\u4e86\u5173\u4e8e Brotli \u538b\u7f29\u7684\u6587\u6863"),(0,i.kt)("li",{parentName:"ul"},"\u5728 2019.1 \u4e2d\u66f4\u65b0\u4e86\u6700\u65b0\u7684\u517c\u5bb9\u6027\u4fe1\u606f")))}m.isMDXComponent=!0}}]);