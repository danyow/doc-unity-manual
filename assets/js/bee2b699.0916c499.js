"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83378],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,g=h["".concat(s,".").concat(d)]||h[d]||l[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"GICache",title:"GI \u7f13\u5b58",slug:"/lighting-precomputed-data/gicache"},s="GI \u7f13\u5b58",p={unversionedId:"graphics/lighting-overview/lighting-precomputed-data/GICache",id:"graphics/lighting-overview/lighting-precomputed-data/GICache",title:"GI \u7f13\u5b58",description:"The GI cache is an internal data cache that the Unity Editor uses to store intermediate files when precomputing lighting data for Baked Global Illumination and Enlighten Realtime Global Illumination. By storing this data in a cache, Unity can speed up subsequent precomputations.",source:"@site/docs/graphics/lighting-overview/lighting-precomputed-data/gicache.md",sourceDirName:"graphics/lighting-overview/lighting-precomputed-data",slug:"/lighting-precomputed-data/gicache",permalink:"/doc-unity-manual/docs/lighting-precomputed-data/gicache",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lighting-precomputed-data/gicache.md",tags:[],version:"current",frontMatter:{id:"GICache",title:"GI \u7f13\u5b58",slug:"/lighting-precomputed-data/gicache"},sidebar:"tutorialSidebar",previous:{title:"\u9884\u8ba1\u7b97\u7684\u5149\u7167\u6570\u636e",permalink:"/doc-unity-manual/docs/lighting-precomputed-data"},next:{title:"\u5149\u7167\u6570\u636e\u8d44\u6e90",permalink:"/doc-unity-manual/docs/lighting-precomputed-data/lightmap-snapshot"}},u={},l=[{value:"\u4f7f\u7528 GI \u7f13\u5b58",id:"\u4f7f\u7528-gi-\u7f13\u5b58",level:2}],h={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gi-\u7f13\u5b58"},"GI \u7f13\u5b58"),(0,i.kt)("p",null,"The GI cache is an internal data cache that the Unity Editor uses to store intermediate files when precomputing lighting data for Baked Global Illumination and Enlighten Realtime Global Illumination. By storing this data in a cache, Unity can speed up subsequent precomputations."),(0,i.kt)("p",null,"The cache is shared between all Unity projects on the computer, so projects with similar content and lightmapping backend can share the cached files. One more reason to not have the cache per project is that the cache can grow a lot during baking, up to hundreds of gigabytes for large projects using Enlighten and that could consume all of the hard drive space on the computer."),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"p"},"GI Cache"),"  \u504f\u597d\u8bbe\u7f6e\u6765\u7ba1\u7406\u7f13\u5b58\u7684\u5927\u5c0f\u3001\u4f4d\u7f6e\u548c\u538b\u7f29\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/preferences"},"\u504f\u597d\u8bbe\u7f6e (Preferences) \u6587\u6863"),"\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528-gi-\u7f13\u5b58"},"\u4f7f\u7528 GI \u7f13\u5b58"),(0,i.kt)("p",null,"The Unity Editor uses the GI Cache when it precomputes lighting data. To enable the GI Cache, open the Lighting window ( ",(0,i.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Lighting")," ) and enable the  ",(0,i.kt)("strong",{parentName:"p"},"Auto"),"  option. This makes lighting data precomputation automatic and stores output data in the GI Cache. If you prefer to store lighting data in a ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lighting-precomputed-data/lightmap-snapshot"},"Lighting Data Asset")," instead, disable the  ",(0,i.kt)("strong",{parentName:"p"},"Auto"),"  option. However, even when you disable  ",(0,i.kt)("strong",{parentName:"p"},"Auto"),"  and store precomputed data in a Lighting Data Asset, the Editor stores intermediate results in the GI Cache."),(0,i.kt)("p",null,"In the Lighting window, you can clear the baked data in a Scene (disable the  ",(0,i.kt)("strong",{parentName:"p"},"Auto"),"  option and choose  ",(0,i.kt)("strong",{parentName:"p"},"Clear Baked Data"),"  from the  ",(0,i.kt)("strong",{parentName:"p"},"Build"),"  button drop-down menu). This only removes the data in the scene, it does not clear the GI Cache, because this would increase bake time afterwards. To clean the GICache, go to ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/preferences"},"Preferences documentation"),". Cleaning the cache should only be done as a last resort and any issues forcing you do do so, should be reported via the bug reporter built into the Editor."),(0,i.kt)("p",null,"You can copy the ",(0,i.kt)("em",{parentName:"p"},"GiCache")," folder among different machines. This can make your lighting build faster, because the files are fetched from the ",(0,i.kt)("em",{parentName:"p"},"GiCache")," folder instead of being recomputed."),(0,i.kt)("p",null,'If you try to bake with more than one instance of the Editor running on the same computer, the Editor displays the following warning message: "The GI Cache is using increasing amounts of space on your hard drive to support concurrent lightmap generation. To prevent failed bakes, close all other instances of the Unity Editor.'))}d.isMDXComponent=!0}}]);