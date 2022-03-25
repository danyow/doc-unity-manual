"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39292],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),o=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57369:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return g}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"class-LightmapParameters",title:"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",slug:"/lightmappers/class-lightmap-parameters"},s="\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",o={unversionedId:"graphics/lighting-overview/lightmappers/class-LightmapParameters",id:"graphics/lighting-overview/lightmappers/class-LightmapParameters",title:"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",description:"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90\u4e2d\u5305\u542b\u4e86\u4e00\u7ec4\u7528\u4e8e\u63a7\u5236 Unity \u5149\u7167\u529f\u80fd\u7684\u53c2\u6570\u503c\u3002\u8fd9\u4e9b\u8d44\u6e90\u5141\u8bb8\u5b9a\u4e49\u548c\u4fdd\u5b58\u4e0d\u540c\u7684\u5149\u7167\u503c\u96c6\u5408\uff0c\u4ee5\u4fbf\u7528\u4e8e\u4e0d\u540c\u7684\u60c5\u51b5\u3002",source:"@site/docs/graphics/lighting-overview/lightmappers/class-lightmap-parameters.md",sourceDirName:"graphics/lighting-overview/lightmappers",slug:"/lightmappers/class-lightmap-parameters",permalink:"/doc-unity-manual/docs/lightmappers/class-lightmap-parameters",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/lightmappers/class-lightmap-parameters.md",tags:[],version:"current",frontMatter:{id:"class-LightmapParameters",title:"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",slug:"/lightmappers/class-lightmap-parameters"},sidebar:"tutorialSidebar",previous:{title:"\u5149\u7167\u8d34\u56fe",permalink:"/doc-unity-manual/docs/lightmappers"},next:{title:"Lightmapping using Enlighten Baked Global Illumination",permalink:"/doc-unity-manual/docs/lightmappers/gi-enlighten"}},m={},g=[{value:"\u521b\u5efa\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",id:"\u521b\u5efa\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"Realtime GI",id:"realtime-gi",level:3},{value:"Baked GI",id:"baked-gi",level:3},{value:"\u70d8\u7119\u6807\u7b7e (Baked Tags)\uff1a\u8be6\u7ec6\u4fe1\u606f",id:"\u70d8\u7119\u6807\u7b7e-baked-tags\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"Baked AO",id:"baked-ao",level:2},{value:"General GI",id:"general-gi",level:2},{value:"\u5206\u914d\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",id:"\u5206\u914d\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u6e38\u620f\u5bf9\u8c61",id:"\u6e38\u620f\u5bf9\u8c61",level:3}],u={toc:g};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90"},"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90"),(0,l.kt)("p",null,"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90\u4e2d\u5305\u542b\u4e86\u4e00\u7ec4\u7528\u4e8e\u63a7\u5236 Unity \u5149\u7167\u529f\u80fd\u7684\u53c2\u6570\u503c\u3002\u8fd9\u4e9b\u8d44\u6e90\u5141\u8bb8\u5b9a\u4e49\u548c\u4fdd\u5b58\u4e0d\u540c\u7684\u5149\u7167\u503c\u96c6\u5408\uff0c\u4ee5\u4fbf\u7528\u4e8e\u4e0d\u540c\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90\u53ef\u4ee5\u7528\u6765\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684\u6e38\u620f\u5bf9\u8c61\u6216\u4e3a\u4e0d\u540c\u5e73\u53f0\u548c\u4e0d\u540c\u573a\u666f\u7c7b\u578b\uff08\u4f8b\u5982\uff0c\u5ba4\u5185\u6216\u5ba4\u5916\u573a\u666f\uff09\u521b\u5efa\u4f18\u5316\u7684\u9884\u8bbe\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90"},"\u521b\u5efa\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90"),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u7684\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90\uff0c\u8bf7\u5728 Project \u7a97\u53e3\u4e2d\u53f3\u952e\u5355\u51fb\uff0c\u7136\u540e\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,l.kt)("strong",{parentName:"p"},"New Parameters Asset")," \u3002Unity \u5c06\u6b64\u8d44\u6e90\u5b58\u50a8\u5728 Project \u6587\u4ef6\u5939\u4e2d\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,"\u5728 Project \u7a97\u53e3\u4e2d\u5355\u51fb\u67d0\u4e2a\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90\u65f6\uff0cInspector \u7a97\u53e3\u5c06\u663e\u793a\u8be5\u8d44\u6e90\u4e2d\u5b9a\u4e49\u7684\u503c\u3002\u4e0b\u8868\u4e2d\u5217\u51fa\u4e86\u53c2\u6570\u53ca\u5176\u63cf\u8ff0\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LightmapParametersAsset-Deprecated.png",alt:"LightmapParametersAsset-Deprecated.png"})),(0,l.kt)("h3",{id:"realtime-gi"},"Realtime GI"),(0,l.kt)("p",null,"These parameters configure ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/realtime-gi-using-enlighten"},"Enlighten Realtime Global Illumination"),"."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@12.0?subfolder=/manual/Feature-Comparison.html"},"HDRP")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0?subfolder=/manual/universalrp-builtin-feature-comparison.html"},"URP")," documentation for compatibility information specific to scriptable render pipelines. Unless otherwise specified, the Built-In Render Pipeline supports all features described in this article."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Resolution")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u503c\u5728 Lighting \u7a97\u53e3\u7684 Scene \u9009\u9879\u5361\u4e2d\u7f29\u653e  ",(0,l.kt)("strong",{parentName:"td"},"Realtime Resolution"),"  \u503c\uff08\u83dc\u5355\uff1a ",(0,l.kt)("strong",{parentName:"td"},"Window"),"  ",">","  ",(0,l.kt)("strong",{parentName:"td"},"Rendering"),"  ",">","  ",(0,l.kt)("strong",{parentName:"td"},"Lighting"),"  ",">","  ",(0,l.kt)("strong",{parentName:"td"},"Scene")," \uff09\u4ee5\u63d0\u4f9b\u5149\u7167\u8d34\u56fe\u7684\u6700\u7ec8\u5206\u8fa8\u7387\uff08\u7eb9\u7406\u50cf\u7d20/\u8ddd\u79bb\u5355\u4f4d\uff09\u3002")))),(0,l.kt)("h3",{id:"baked-gi"},"Baked GI"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u7528\u4e8e\u914d\u7f6e",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lightmappers"},"\u5149\u7167\u8d34\u56fe"),"\u3002"),(0,l.kt)("p",null,"For information about current scriptable render pipeline support for lighting features, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest?subfolder=/manual/Feature-Comparison.html"},"HDRP")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest?subfolder=/manual/universalrp-builtin-feature-comparison.html"},"URP")," documentation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"->  ",(0,l.kt)("strong",{parentName:"td"},"Enlighten Baked Global Illumination")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6e10\u8fdb\u5149\u7167\u8d34\u56fe (Progressive Lightmapper)")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Blur Radius")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540e\u671f\u5904\u7406\u8fc7\u7a0b\u4e2d\u5e94\u7528\u4e8e\u76f4\u63a5\u5149\u7167\u7684\u6a21\u7cca\u8fc7\u6ee4\u5668\u7684\u534a\u5f84\uff08\u5355\u4f4d\uff1a\u7eb9\u7406\u50cf\u7d20\uff09\u3002\u6b64\u534a\u5f84\u57fa\u672c\u4e0a\u662f\u76f8\u90bb\u7eb9\u7406\u50cf\u7d20\u7684\u5e73\u5747\u8ddd\u79bb\u3002\u534a\u5f84\u8d8a\u5927\uff0c\u6548\u679c\u8d8a\u6a21\u7cca\u3002\u8f83\u9ad8\u7684\u6a21\u7cca\u5ea6\u5f80\u5f80\u4f1a\u51cf\u5c11\u89c6\u89c9\u7455\u75b5\uff0c\u4f46\u4e5f\u4f1a\u8f6f\u5316\u9634\u5f71\u7684\u8fb9\u7f18\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6e10\u8fdb\u5149\u7167\u8d34\u56fe\u65f6\uff0c ",(0,l.kt)("strong",{parentName:"td"},"Blur Radius"),"  \u4e0d\u53ef\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Anti-aliasing Samples")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u6297\u952f\u9f7f\u7a0b\u5ea6\uff08\u51cf\u5c11\u201c\u5757\u72b6\u201d\u7455\u75b5\uff09\u3002\u6570\u5b57\u8d8a\u5927\uff0c\u8d28\u91cf\u8d8a\u9ad8\u4e14\u70d8\u7119\u65f6\u95f4\u8d8a\u957f\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u7eb9\u7406\u50cf\u7d20\u8fdb\u884c\u8d85\u7ea7\u91c7\u6837\u4ee5\u51cf\u5c11\u952f\u9f7f\u7684\u6b21\u6570\u3002\u91c7\u6837\u6b21\u6570\u4e3a ","[","1;3","]"," \u5c06\u7981\u7528\u8d85\u7ea7\u91c7\u6837\uff0c\u91c7\u6837\u6b21\u6570\u4e3a ","[","4;8","]"," \u5c06\u63d0\u4f9b 2x \u8d85\u7ea7\u91c7\u6837\uff0c\u800c\u91c7\u6837\u6b21\u6570\u4e3a ","[","9;256","]"," \u63d0\u4f9b 4x \u8d85\u7ea7\u91c7\u6837\u3002\u6b64\u8bbe\u7f6e\u4e3b\u8981\u5f71\u54cd\u7528\u4e8e\u4f4d\u7f6e\u548c\u6cd5\u7ebf\u7f13\u51b2\u533a\u7684\u5185\u5b58\u91cf\uff082x \u4f7f\u7528 4 \u500d\u7684\u5185\u5b58\u91cf\uff0c4x \u4f7f\u7528 16 \u500d\u7684\u5185\u5b58\u91cf\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Direct Light Quality")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bc4\u4f30\u76f4\u63a5\u5149\u7167\u7684\u5149\u7ebf\u6570\u91cf\u3002\u8f83\u9ad8\u6570\u91cf\u7684\u5149\u7ebf\u5f80\u5f80\u4f1a\u4ea7\u751f\u66f4\u51c6\u786e\u7684\u67d4\u548c\u9634\u5f71\uff0c\u4f46\u4f1a\u589e\u52a0\u70d8\u7119\u65f6\u95f4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6e10\u8fdb\u5149\u7167\u8d34\u56fe\u65f6\uff0c ",(0,l.kt)("strong",{parentName:"td"},"Direct Light Quality"),"  \u4e0d\u53ef\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Backface Tolerance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f51\u683c\u7684\u7ed3\u6784\u6709\u65f6\u4f1a\u5bfc\u81f4\u67d0\u4e9b\u7eb9\u7406\u50cf\u7d20\u542b\u6709\u80cc\u9762\u5e26\u6709\u51e0\u4f55\u4f53\u7684\u201c\u89c6\u56fe\u201d\u3002\u6765\u81ea\u80cc\u9762\u7684\u5165\u5c04\u5149\u5728\u4efb\u4f55\u573a\u666f\u4e2d\u90fd\u65e0\u610f\u4e49\u3002\u56e0\u6b64\uff0c\u6b64\u5c5e\u6027\u7528\u4e8e\u9009\u62e9\u6709\u591a\u5c11\u5149\u91cf\uff08\u767e\u5206\u6bd4\u9608\u503c\uff09\u6765\u81ea\u6b63\u9762\u51e0\u4f55\u4f53\u624d\u80fd\u5c06\u7eb9\u7406\u50cf\u7d20\u89c6\u4e3a\u6709\u6548\u3002\u65e0\u6548\u7eb9\u7406\u50cf\u7d20\u7684\u5149\u7167\u503c\u901a\u8fc7\u76f8\u90bb\u7eb9\u7406\u50cf\u7d20\u7684\u503c\u4f30\u7b97\u5f97\u51fa\u3002\u964d\u4f4e\u6b64\u503c\u53ef\u4ee5\u89e3\u51b3\u7531\u80cc\u9762\u5165\u5c04\u5149\u5f15\u8d77\u7684\u5149\u7167\u95ee\u9898\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7167\u5c04\u5230\u6b63\u9762\u624d\u4f1a\u88ab\u89c6\u4e3a\u53ef\u7528\u7684\u8f93\u51fa\u7eb9\u7406\u50cf\u7d20\u53d1\u5c04\u5149\u7ebf\u7684\u767e\u5206\u6bd4\u3002\u5982\u679c\u4ece\u7eb9\u7406\u50cf\u7d20\u6295\u5c04\u7684\u592a\u591a\u5149\u7ebf\u7167\u5c04\u5230\u80cc\u9762\uff08\u7eb9\u7406\u50cf\u7d20\u5728\u67d0\u4e2a\u51e0\u4f55\u4f53\u5185\uff09\uff0c\u7eb9\u7406\u50cf\u7d20\u65e0\u6548\u5904\u7406\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u901a\u8fc7\u4ece\u5468\u56f4\u7eb9\u7406\u50cf\u7d20\u514b\u9686\u6709\u6548\u503c\u6765\u907f\u514d\u7455\u75b5\u3002\u4f8b\u5982\uff0c\u5982\u679c Backface Tolerance \u4e3a 0.0\uff0c\u5219\u4ec5\u5728\u7eb9\u7406\u50cf\u7d20\u53ea\u80fd\u770b\u5230\u80cc\u9762\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u62d2\u7edd\u8be5\u7eb9\u7406\u50cf\u7d20\u3002\u5982\u679c\u6b64\u8bbe\u7f6e\u4e3a 1.0\uff0c\u5373\u4f7f\u5c04\u7ebf\u539f\u70b9\u6709\u4e00\u6761\u5c04\u7ebf\u7167\u5c04\u5230\u80cc\u9762\uff0c\u4e5f\u4f1a\u62d2\u7edd\u8be5\u539f\u70b9\u3002\u5728\u201cBaked Texel Validity\u201dScene \u89c6\u56fe\u6a21\u5f0f\u4e2d\uff0c\u4e00\u4e2a\u7bb1\u5b50\u53ef\u770b\u5230\u6709\u6548\uff08\u7eff\u8272\uff09\u548c\u65e0\u6548\uff08\u7ea2\u8272\uff09\u7eb9\u7406\u50cf\u7d20\u3002\u5982\u679c\u573a\u666f\u4e2d\u6709\u5355\u9762\u7f51\u683c\uff0c\u53ef\u80fd\u9700\u8981\u901a\u8fc7\u5c06\u503c\u8bbe\u7f6e\u4e3a\u96f6\u6765\u7981\u7528\u6b64\u529f\u80fd\u3002\u7a0d\u540e\u5c06\u5728 Editor \u4e2d\u6dfb\u52a0\u53cc\u9762\u6807\u5fd7\u4ee5\u89e3\u51b3\u6b64\u95ee\u9898\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Pushoff")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u59cb\u5728\u5efa\u6a21\u5355\u5143\u4e2d\u8ddf\u8e2a\u5c04\u7ebf\u4e4b\u524d\u4ece\u8868\u9762\u51e0\u4f55\u4f53\u63a8\u79bb\u7684\u8ddd\u79bb\u3002\u6b64\u5c5e\u6027\u9002\u7528\u4e8e\u6240\u6709\u70d8\u7119\u5149\u7167\u8d34\u56fe\uff0c\u56e0\u6b64\u4f1a\u5f71\u54cd\u76f4\u5c04\u5149\u3001\u95f4\u63a5\u5149\u548c AO\u3002 ",(0,l.kt)("strong",{parentName:"td"},"Pushoff"),"  \u53ef\u7528\u4e8e\u6446\u8131\u4e0d\u5fc5\u8981\u7684 AO \u6216\u9634\u5f71\u3002\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53ef\u89e3\u51b3\u5bf9\u8c61\u8868\u9762\u81ea\u8eab\u9634\u5f71\u906e\u6321\u95ee\u9898\uff0c\u8be5\u95ee\u9898\u4f1a\u5bfc\u81f4\u6591\u70b9\u9634\u5f71\u56fe\u6848\u51fa\u73b0\u5728\u8868\u9762\u4e0a\u800c\u627e\u4e0d\u5230\u660e\u663e\u6765\u6e90\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53bb\u9664\u5de8\u578b\u5bf9\u8c61\u4e0a\u4e0d\u5fc5\u8981\u7684\u7455\u75b5\uff08\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7684\u6d6e\u70b9\u7cbe\u5ea6\u4e0d\u591f\u9ad8\uff0c\u65e0\u6cd5\u51c6\u786e\u5730\u5bf9\u7cbe\u7ec6\u7ec6\u8282\u8fdb\u884c\u5c04\u7ebf\u8ffd\u8e2a\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5efa\u6a21\u5355\u5143\u4e2d\u6cbf\u7740\u5c04\u7ebf\u8ffd\u8e2a\u7684\u6cd5\u7ebf\u5c06\u5c04\u7ebf\u539f\u70b9\u4ece\u51e0\u4f55\u4f53\u63a8\u79bb\u7684\u91cf\u3002\u6b64\u5c5e\u6027\u9002\u7528\u4e8e\u6240\u6709\u70d8\u7119\u5149\u7167\u8d34\u56fe\uff0c\u56e0\u6b64\u4f1a\u5f71\u54cd\u76f4\u5c04\u5149\u3001\u95f4\u63a5\u5149\u548c\u70d8\u7119\u73af\u5883\u5149\u906e\u6321\u3002\u53ef\u7528\u4e8e\u6446\u8131\u4e0d\u5fc5\u8981\u7684\u906e\u6321/\u9634\u5f71\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Baked Tag")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e\u4e0a\u6587\u7684  ",(0,l.kt)("strong",{parentName:"td"},"System Tag"),"  \u5c5e\u6027\u76f8\u4f3c\uff0c\u6b64\u6570\u5b57\u8868\u793a\u5355\u72ec\u7684\u70d8\u7119\u5149\u7167\u8d34\u56fe\u5c06\u7279\u5b9a\u5bf9\u8c61\u96c6\u7ec4\u5408\u5728\u4e00\u8d77\u3002\u4e0e System Tag \u4e00\u6837\uff0c\u786e\u5207\u7684\u6570\u503c\u5e76\u4e0d\u91cd\u8981\u3002\u5177\u6709\u4e0d\u540c Baked Tag \u503c\u7684\u5bf9\u8c61\u7edd\u4e0d\u4f1a\u653e\u5728\u540c\u4e00\u56fe\u96c6\u4e2d\uff1b\u4f46\u662f\uff0c\u4e5f\u65e0\u6cd5\u4fdd\u8bc1\u5177\u6709\u76f8\u540c\u6807\u7b7e\u7684\u5bf9\u8c61\u6700\u7ec8\u5904\u4e8e\u540c\u4e00\u56fe\u96c6\u4e2d\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5bf9\u8c61\u53ef\u80fd\u4e0d\u4e00\u5b9a\u9002\u5408\u653e\u5165\u540c\u4e00\u4e2a\u5149\u7167\u8d34\u56fe\uff08\u6709\u5173\u6b64\u60c5\u51b5\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u7684\u56fe\u50cf A\uff09\u3002\u4f7f\u7528\u591a\u573a\u666f\u70d8\u7119 API \u65f6\u4e0d\u5fc5\u8bbe\u7f6e\u6b64\u9879\uff0c\u56e0\u4e3a\u5206\u7ec4\u662f\u81ea\u52a8\u5b8c\u6210\u7684\uff08\u4f7f\u7528  ",(0,l.kt)("strong",{parentName:"td"},"Baked Tag"),"  \u6765\u590d\u5236  ",(0,l.kt)("strong",{parentName:"td"},"Lock Atlas"),"  \u9009\u9879\u7684\u67d0\u4e9b\u884c\u4e3a\uff09\u3002\u8bf7\u53c2\u9605\u4e0b\u6587\u7684",(0,l.kt)("a",{parentName:"td",href:"#%E7%83%98%E7%84%99%E6%A0%87%E7%AD%BE-baked-tags-%EF%BC%9A%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF"},"\u70d8\u7119\u6807\u7b7e (Baked Tags)\uff1a\u8be6\u7ec6\u4fe1\u606f"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Limit Lightmap Count")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Limit Lightmap Count"),"  is not available when you use Enlighten Baked Global Illumination."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Limit Lightmap Count"),"  applies a maximum number of lightmaps that Unity can use when packing GameObjects with the same Baked Global Illumination settings. When you enable  ",(0,l.kt)("strong",{parentName:"td"},"Limit Lightmap Count")," , a setting appears underneath it called  ",(0,l.kt)("strong",{parentName:"td"},"Max Lightmaps")," ; use this to set the maximum number of lightmaps Unity can use. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Unity considers GameObjects to have the same Baked Global Illumination settings if they have equal values for  ",(0,l.kt)("strong",{parentName:"td"},"Anti-aliasing Samples")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Pushoff")," ,  ",(0,l.kt)("strong",{parentName:"td"},"Baked Tag")," , and  ",(0,l.kt)("strong",{parentName:"td"},"Backface Tolerance")," . This means that Unity might pack together GameObjects associated with different lightmap parameter Assets. To pack the GameObjects, Unity gradually scales down the UV layouts until all GameObjects fit inside the specified number of lightmaps. The ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/class-lighting-settings"},"Lightmapping Settings")," define the size of these lightmaps. This process might reduce the GameObjects\u2019 lightmap resolution.")))),(0,l.kt)("h3",{id:"\u70d8\u7119\u6807\u7b7e-baked-tags\u8be6\u7ec6\u4fe1\u606f"},"\u70d8\u7119\u6807\u7b7e (Baked Tags)\uff1a\u8be6\u7ec6\u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/BakedLightmaps-Merged.png",alt:"BakedLightmaps-Merged.png"})," ",(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/BakedLightmaps-Merged2.png",alt:"BakedLightmaps-Merged2.png"})),(0,l.kt)("p",null,"The two images above shows two views of the same Scene:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Top:"),"  Everything is in one atlas because all the GameObjects have the same  ",(0,l.kt)("strong",{parentName:"li"},"Baked Tag")," ."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Bottom:"),"  One GameObject is assigned a different  ",(0,l.kt)("strong",{parentName:"li"},"Baked Tag")," , and forced into a second lightmap.")),(0,l.kt)("h2",{id:"baked-ao"},"Baked AO"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u7528\u4e8e\u914d\u7f6e\u70d8\u7119\u73af\u5883\u5149\u906e\u6321\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Quality")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc4\u4f30\u70d8\u7119\u73af\u5883\u5149\u906e\u6321 (AO) \u65f6\u6295\u5c04\u7684\u5c04\u7ebf\u6570\u91cf\u3002\u5c04\u7ebf\u6570\u91cf\u8d8a\u591a\uff0cAO \u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u70d8\u7119\u65f6\u95f4\u4e5f\u8d8a\u957f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Anti-aliasing Samples")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdb\u884c AO \u6297\u952f\u9f7f\u65f6\u8981\u91c7\u96c6\u7684\u6837\u672c\u6570\u3002\u6837\u672c\u6570\u91cf\u8d8a\u591a\uff0cAO \u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u70d8\u7119\u65f6\u95f4\u4e5f\u8d8a\u957f\u3002")))),(0,l.kt)("h2",{id:"general-gi"},"General GI"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Backface Tolerance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7167\u5c04\u5230\u5149\u7167\u7cfb\u7edf\u6b63\u9762\u624d\u4f1a\u88ab\u89c6\u4e3a\u53ef\u7528\u7684\u8f93\u51fa\u7eb9\u7406\u50cf\u7d20\u53d1\u5c04\u5149\u7ebf\u7684\u767e\u5206\u6bd4\u3002\u5982\u679c\u4ece\u7eb9\u7406\u50cf\u7d20\u6295\u5c04\u7684\u592a\u591a\u5149\u7ebf\u7167\u5c04\u5230\u80cc\u9762\uff08\u4f8b\u5982\uff0c\u5982\u679c\u7eb9\u7406\u50cf\u7d20\u5728\u67d0\u4e2a\u51e0\u4f55\u4f53\u5185\uff09\uff0c\u6b64\u8bbe\u7f6e\u5141\u8bb8 Unity \u8ba9\u7eb9\u7406\u50cf\u7d20\u65e0\u6548\u3002\u5149\u7167\u7cfb\u7edf\u4ece\u5468\u56f4\u7eb9\u7406\u50cf\u7d20\u514b\u9686\u6709\u6548\u503c\u6765\u907f\u514d\u610f\u5916\u7684\u7455\u75b5\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u5982\u679c  ",(0,l.kt)("strong",{parentName:"td"},"Backface Tolerance"),"  \u8bbe\u7f6e\u4e3a 0.0\uff0c\u5219\u5149\u7167\u7cfb\u7edf\u4ec5\u5728\u7eb9\u7406\u50cf\u7d20\u53ea\u80fd\u770b\u5230\u80cc\u9762\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u62d2\u7edd\u8be5\u7eb9\u7406\u50cf\u7d20\u3002\u5982\u679c\u6b64\u8bbe\u7f6e\u4e3a 1.0\uff0c\u5373\u4f7f\u5c04\u7ebf\u539f\u70b9\u6709\u4e00\u6761\u5c04\u7ebf\u7167\u5c04\u5230\u80cc\u9762\uff0c\u5149\u7167\u7cfb\u7edf\u4e5f\u4f1a\u62d2\u7edd\u8be5\u539f\u70b9\u3002")))),(0,l.kt)("h2",{id:"\u5206\u914d\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90"},"\u5206\u914d\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90"),(0,l.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,l.kt)("p",null,"To assign a Lightmap Parameters Asset to the whole Scene:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/lighting-overview/lighting-window"},"Lighting window")," ( ",(0,l.kt)("strong",{parentName:"li"},"Window"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Rendering"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Lighting")," )"),(0,l.kt)("li",{parentName:"ol"},"Click the  ",(0,l.kt)("strong",{parentName:"li"},"Scene"),"  tab"),(0,l.kt)("li",{parentName:"ol"},"Navigate to the  ",(0,l.kt)("strong",{parentName:"li"},"Lightingmapping Settings")," ."),(0,l.kt)("li",{parentName:"ol"},"Use the  ",(0,l.kt)("strong",{parentName:"li"},"Lightmap Parameters"),"  drop-down to assign a default Lightmap Parameters Asset. This drop-down lists all available Lightmap Parameters Assets.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LightingSettings02.png",alt:"LightingSettings02.png"})),(0,l.kt)("h3",{id:"\u6e38\u620f\u5bf9\u8c61"},"\u6e38\u620f\u5bf9\u8c61"),(0,l.kt)("p",null,"\u8981\u5c06\u5149\u7167\u8d34\u56fe\u53c2\u6570\u8d44\u6e90\u5206\u914d\u7ed9\u5355\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u8bf7\u786e\u4fdd\u6e38\u620f\u5bf9\u8c61\u5df2\u9644\u52a0\u7f51\u683c\u6e32\u67d3\u5668 (Mesh Renderer) \u6216\u5730\u5f62 (Terrain) \u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"To assign a Lightmap Parameters Asset to a Mesh Renderer component:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Inspector, go to  ",(0,l.kt)("strong",{parentName:"li"},"Mesh Renderer"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Lighting")," "),(0,l.kt)("li",{parentName:"ol"},"Enable  ",(0,l.kt)("strong",{parentName:"li"},"Contribute Global Illumination")," "),(0,l.kt)("li",{parentName:"ol"},"In the mesh Renderer component, go to  ",(0,l.kt)("strong",{parentName:"li"},"Lightmapping"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Lightmap Parameters")," ."),(0,l.kt)("li",{parentName:"ol"},"Select an option from the menu. Select  ",(0,l.kt)("strong",{parentName:"li"},"Scene Default Parameter"),"  to use the same Lightmap Parameters Asset that\u2019s assigned to the whole Scene.")),(0,l.kt)("p",null,"To assign a Lightmap Parameters Asset to a Terrain component:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the Inspector, go to  ",(0,l.kt)("strong",{parentName:"li"},"Terrain"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Terrain Settings"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Lighting")," "),(0,l.kt)("li",{parentName:"ol"},"Enable  ",(0,l.kt)("strong",{parentName:"li"},"Contribute Global Illumination")," "),(0,l.kt)("li",{parentName:"ol"},"In  ",(0,l.kt)("strong",{parentName:"li"},"Terrain Settings")," , go to  ",(0,l.kt)("strong",{parentName:"li"},"Lightmapping"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Lightmap Parameters")," ."),(0,l.kt)("li",{parentName:"ol"},"Select an option from the menu. Select  ",(0,l.kt)("strong",{parentName:"li"},"Scene Default Parameter"),"  to use the same Lightmap Parameters Asset that\u2019s assigned to the whole Scene.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"2019\u201303\u201328 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,l.kt)("p",null,"2018\u201303\u201328 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2019.1/Documentation/Manual/30_search.html?q=newin20191"},"2019.1")," \u7248\u4e2d\u6dfb\u52a0\u4e86 Limit Lightmap Count NewIn20191"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2018.1/Documentation/Manual/30_search.html?q=newin20181"},"2018.1")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u6e10\u8fdb\u5149\u7167\u8d34\u56fe NewIn20181"))}d.isMDXComponent=!0}}]);