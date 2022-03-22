"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5757],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return k}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),o=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},p=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=o(r),k=n,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return r?a.createElement(m,d(d({ref:e},p),{},{components:r})):a.createElement(m,d({ref:e},p))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,d=new Array(l);d[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,d[1]=i;for(var o=2;o<l;o++)d[o]=r[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},94228:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),d=["components"],i={id:"shader-StandardParticleShaders",title:"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668",slug:"/shader-built-in/shader-standard-particle-shaders"},s="\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668",o={unversionedId:"graphics/shaders/shader-built-in/shader-StandardParticleShaders",id:"graphics/shaders/shader-built-in/shader-StandardParticleShaders",title:"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668",description:"Unity \u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668\u662f\u53ef\u7528\u4e8e\u6e32\u67d3\u5404\u79cd\u7c92\u5b50\u7cfb\u7edf\u6548\u679c\u7684\u5185\u7f6e\u7740\u8272\u5668\u3002\u8fd9\u4e9b\u7740\u8272\u5668\u63d0\u4f9b\u6807\u51c6\u7740\u8272\u5668\u4e0d\u5177\u5907\u7684\u5404\u79cd\u7c92\u5b50\u7279\u6709\u529f\u80fd\u3002",source:"@site/docs/graphics/shaders/shader-built-in/shader-standard-particle-shaders.md",sourceDirName:"graphics/shaders/shader-built-in",slug:"/shader-built-in/shader-standard-particle-shaders",permalink:"/docs/shader-built-in/shader-standard-particle-shaders",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/shader-standard-particle-shaders.md",tags:[],version:"current",frontMatter:{id:"shader-StandardParticleShaders",title:"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668",slug:"/shader-built-in/shader-standard-particle-shaders"},sidebar:"tutorialSidebar",previous:{title:"Autodesk Interactive \u7740\u8272\u5668",permalink:"/docs/shader-built-in/shader-autodesk-interactive"},next:{title:"\u6807\u51c6\u7740\u8272\u5668",permalink:"/docs/shader-standard-shader"}},p={},u=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"Blending Options",id:"blending-options",level:3},{value:"Main Options",id:"main-options",level:3},{value:"\u6807\u51c6\u7c92\u5b50\u8868\u9762\u7740\u8272\u5668 (Standard Particles Surface Shader)",id:"\u6807\u51c6\u7c92\u5b50\u8868\u9762\u7740\u8272\u5668-standard-particles-surface-shader",level:2},{value:"\u6807\u51c6\u7c92\u5b50\u65e0\u5149\u7167\u7740\u8272\u5668 (Standard Particles Unlit Shader)",id:"\u6807\u51c6\u7c92\u5b50\u65e0\u5149\u7167\u7740\u8272\u5668-standard-particles-unlit-shader",level:2}],c={toc:u};function k(t){var e=t.components,r=(0,n.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668"},"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668"),(0,l.kt)("p",null,"Unity \u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668\u662f\u53ef\u7528\u4e8e\u6e32\u67d3\u5404\u79cd\u7c92\u5b50\u7cfb\u7edf\u6548\u679c\u7684\u5185\u7f6e\u7740\u8272\u5668\u3002\u8fd9\u4e9b\u7740\u8272\u5668\u63d0\u4f9b\u6807\u51c6\u7740\u8272\u5668\u4e0d\u5177\u5907\u7684\u5404\u79cd\u7c92\u5b50\u7279\u6709\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u7c92\u5b50\u7740\u8272\u5668\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"1.\u9009\u62e9\u8981\u5c06\u7740\u8272\u5668\u5e94\u7528\u5230\u7684\u6750\u8d28\u3002\u4f8b\u5982\uff0c\u53ef\u5c06\u706b\u7130\u6750\u8d28\u5e94\u7528\u4e8e\u706b\u7130\u7c92\u5b50\u7cfb\u7edf\u6548\u679c\u3002"),(0,l.kt)("p",null,"2.\u5728\u6750\u8d28 (Material) \u7684 Inspector \u4e2d\uff0c\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"Shader Particles")," \u3002"),(0,l.kt)("p",null,"3.\u9009\u62e9\u8981\u4f7f\u7528\u7684\u7c92\u5b50\u7740\u8272\u5668\uff0c\u4f8b\u5982  ",(0,l.kt)("strong",{parentName:"p"},"Standard Surface")," \u3002"),(0,l.kt)("p",null,"4.\u5728 Inspector \u4e2d\u542f\u7528\u548c\u7981\u7528\u5404\u79cd\u7c92\u5b50\u7740\u8272\u5668\u5c5e\u6027\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668\u5177\u6709\u4e0e",(0,l.kt)("a",{parentName:"p",href:"/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u76f8\u540c\u7684\u5c5e\u6027\u96c6\uff08\u6216\u8fd9\u4e9b\u5c5e\u6027\u7684\u5b50\u96c6\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u7740\u8272\u5668\uff09\u3002\u672c\u9875\u9762\u5c06\u4ecb\u7ecd\u6807\u51c6\u7740\u8272\u5668\u5c5e\u6027\u4e4b\u5916\u7684\u5176\u4ed6\u5c5e\u6027\u548c\u9009\u9879\u3002\u5982\u9700\u4e86\u89e3\u6807\u51c6\u7740\u8272\u5668\u5c5e\u6027\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6709\u5173",(0,l.kt)("a",{parentName:"p",href:"/docs/standard-shader-material-parameters"},"\u6750\u8d28\u53c2\u6570"),"\u7684\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"blending-options"},"Blending Options"),(0,l.kt)("p",null,"\u6240\u6709\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668\u90fd\u5177\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u6df7\u5408\u9009\u9879 (Blending Options)")," \uff0c\u5141\u8bb8\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5c06\u7c92\u5b50\u4e0e\u5468\u56f4\u7684\u5bf9\u8c61\u6df7\u5408\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\uff1a"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\uff1a"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Rendering Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668\u53ef\u4ee5\u5177\u6709\u4ee5\u4e0b ",(0,l.kt)("a",{parentName:"td",href:"/docs/standard-shader-material-parameters/standard-shader-material-parameter-rendering-mode"},"Rendering Mode")," \u9009\u9879\uff0c\u8fd9\u4e9b\u9009\u9879\u63a7\u5236\u7740\u8272\u5668\u7684\u6700\u7ec8\u989c\u8272\u4e0e\u80cc\u666f\u989c\u8272\u7684\u7ec4\u5408\uff1a",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Additive")," \uff1a\u5c06\u80cc\u666f\u989c\u8272\u548c\u6700\u7ec8\u7c92\u5b50\u989c\u8272\u76f8\u52a0\u3002\u975e\u5e38\u9002\u7528\u4e8e\u53d1\u5149\u6548\u679c\uff0c\u4f8b\u5982\u53ef\u80fd\u7528\u4e8e\u706b\u7130\u6216\u9b54\u6cd5\u7684\u6548\u679c\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Subtractive")," \uff1a\u4ece\u80cc\u666f\u4e2d\u51cf\u53bb\u6700\u7ec8\u7c92\u5b50\u989c\u8272\uff0c\u4f7f\u7c92\u5b50\u76f8\u5bf9\u4e8e\u80cc\u666f\u53d8\u6697\u3002\u9002\u7528\u4e8e\u96fe\u5316\u6548\u679c\uff0c\u4f8b\u5982\u53ef\u80fd\u7528\u4e8e\u84b8\u6c7d\u6216\u6d53\u9ed1\u70df\u96fe\u7684\u6548\u679c\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Modulate")," \uff1a\u5c06\u6700\u7ec8\u7c92\u5b50\u989c\u8272\u4e0e\u80cc\u666f\u989c\u8272\u76f8\u4e58\u3002\u9002\u7528\u4e8e\u5165\u53e3\u548c\u5149\u7ebf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Color Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u53cd\u7167\u7387\u7eb9\u7406\u4e0e\u7c92\u5b50\u989c\u8272\u7684\u7ec4\u5408\u65b9\u5f0f\u3002 ",(0,l.kt)("strong",{parentName:"td"},"Color Mode"),"  \u9009\u9879\u4e3a\uff1a",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Multiply")," \uff1a\u5c06\u7c92\u5b50\u53cd\u7167\u7387\u989c\u8272\u4e0e\u7c92\u5b50\u7eb9\u7406\u76f8\u4e58\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Additive")," \uff1a\u4fdd\u7559\u70ed\u70b9\uff0c\u4f8b\u5982\u7c92\u5b50\u7eb9\u7406\u7684\u767d\u8272\u90e8\u5206\uff0c\u540c\u65f6\u5c06\u7c92\u5b50\u53cd\u7167\u7387\u989c\u8272\u4e0e\u7eb9\u7406\u7684\u8f83\u6697\u50cf\u7d20\u76f8\u52a0\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Subtractive")," \uff1a\u4ece\u7c92\u5b50\u7eb9\u7406\u4e2d\u51cf\u53bb\u7c92\u5b50\u53cd\u7167\u7387\u989c\u8272\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Overlay")," \uff1a\u63d0\u4f9b\u66f4\u591a\u4e0e\u539f\u59cb\u989c\u8272\u7684\u5bf9\u6bd4\u5ea6\uff0c\u5e76\u5c06\u7c92\u5b50\u53cd\u7167\u7387\u989c\u8272\u4e0e\u7070\u5ea6\u503c\u76f8\u52a0\u3002\u4e0e Additive \u76f8\u4f3c\uff0c\u4f46\u4fdd\u7559\u539f\u59cb\u989c\u8272\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Color")," \uff1a\u4f7f\u7528\u7c92\u5b50\u7eb9\u7406\u7684 Alpha \u901a\u9053\u548c\u7c92\u5b50\u672c\u8eab\u7684\u53cd\u7167\u7387\u989c\u8272\u3002\u9002\u7528\u4e8e\u6539\u5199\u76f8\u540c\u989c\u8272\u7684\u7c92\u5b50\u5e76\u540c\u65f6\u4fdd\u6301\u5176\u539f\u59cb\u201c\u5f62\u72b6\u201d\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Difference")," \uff1a\u4ece\u7eb9\u7406\u4e2d\u51cf\u53bb\u7c92\u5b50\u53cd\u7167\u7387\u989c\u8272\uff0c\u6216\u4ece\u989c\u8272\u4e2d\u51cf\u53bb\u7eb9\u7406\uff0c\u4ece\u800c\u83b7\u5f97\u6b63\u503c\u3002\u9002\u7528\u4e8e\u60f3\u8981\u66f4\u591a\u52a8\u6001\u989c\u8272\u53d8\u5316\u7684\u4e00\u7cfb\u5217\u6548\u679c\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u8bf7\u53c2\u9605\u8868\u4e0b\u7684\u56fe\u50cf\u4ee5\u67e5\u770b\u6b64\u6548\u679c\u7684\u6f14\u793a\u3002")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SPSSColorModes.png",alt:"\u989c\u8272\u6a21\u5f0f\u652f\u6301\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u7ec4\u5408\u7c92\u5b50\u989c\u8272\u4e0e\u53cd\u7167\u7387\u7eb9\u7406"})),(0,l.kt)("p",null,"\u989c\u8272\u6a21\u5f0f\u652f\u6301\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u7ec4\u5408\u7c92\u5b50\u989c\u8272\u4e0e\u53cd\u7167\u7387\u7eb9\u7406"),(0,l.kt)("h3",{id:"main-options"},"Main Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Flip-Book Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u7ffb\u9875\u6e32\u67d3\u4e3a\u5355\u72ec\u7684\u5e27\u6216\u5c06\u5e27\u6df7\u5408\u5728\u4e00\u8d77\u4ee5\u63d0\u4f9b\u66f4\u6d41\u7545\u7684\u52a8\u753b\u3002\u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\uff1a",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Simple"),"  - \u5c06\u7ffb\u9875\u4e2d\u7684\u5e27\u6e32\u67d3\u4e3a\u5355\u5e27\u5e8f\u5217\u3002",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Blended"),"  - \u6df7\u5408\u7ffb\u9875\u4e2d\u7684\u5e27\u4ee5\u5c06\u7ffb\u9875\u6e32\u67d3\u4e3a\u5e73\u6ed1\u52a8\u753b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Two Sided")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e32\u67d3\u7c92\u5b50\u7684\u6b63\u9762\u548c\u80cc\u9762\u3002\u7981\u7528\u65f6\uff0cUnity \u4ec5\u6e32\u67d3\u51e0\u4f55\u4f53\u7684\u6b63\u9762\uff0c\u5373\u6444\u50cf\u673a\u89c6\u56fe\u4e2d\u7684\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Enable Soft Particles")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u7c92\u5b50\u63a5\u8fd1\u5199\u5165\u6df1\u5ea6\u7f13\u51b2\u533a\u7684\u5bf9\u8c61\u8868\u9762\u65f6\u6de1\u51fa\u7c92\u5b50\u3002\u5f53\u7c92\u5b50\u4e0e\u4e0d\u900f\u660e\u51e0\u4f55\u4f53\u76f8\u4ea4\u65f6\uff0c\u8fd9\u5bf9\u4e8e\u907f\u514d\u786c\u8fb9\u975e\u5e38\u6709\u7528\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u542f\u7528\u8f6f\u7c92\u5b50\uff0c\u53ef\u4ee5\u4f7f\u7c92\u5b50\u7cfb\u7edf\u53d1\u5c04\u63a5\u8fd1\u4e0d\u900f\u660e\u8868\u9762\u7684\u7c92\u5b50\uff0c\u800c\u4e0d\u4f1a\u4e0e\u8868\u9762\u4ea7\u751f\u7a81\u5140\u7684\u76f8\u4ea4\uff1a",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SPSSSoftParticles.png",alt:"SPSSSoftParticles.png"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Enable Camera Fading")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u7c92\u5b50\u63a5\u8fd1\u6444\u50cf\u673a\u65f6\u6de1\u51fa\u7c92\u5b50\u3002\u8bbe\u7f6e\u4e3a\uff1a",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Near fade"),"  - \u8ddd\u79bb\u6700\u8fd1\u7684\u7c92\u5b50\u4ece\u6444\u50cf\u673a\u89c6\u91ce\u4e2d\u6de1\u51fa\u4e4b\u524d\u53ef\u4ee5\u5230\u8fbe\u6444\u50cf\u673a\u3002",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Far fade"),"  - \u8ddd\u79bb\u6700\u8fdc\u7684\u7c92\u5b50\u5728\u4ece\u6444\u50cf\u673a\u89c6\u91ce\u4e2d\u6de1\u51fa\u4e4b\u524d\u53ef\u4ee5\u8fdc\u79bb\u6444\u50cf\u673a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Enable Distortion")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7c92\u5b50\u4f7f\u7528\u5728\u7c92\u5b50\u4e4b\u524d\u7ed8\u5236\u7684\u5bf9\u8c61\u6267\u884c\u4f2a\u6298\u5c04\u3002\u5931\u771f\u662f\u4e3a\u706b\u7130\u4ea7\u751f\u70ed\u96fe\u6548\u679c\u7684\u7406\u60f3\u9009\u62e9\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SPSSEnableDistortion.png",alt:"SPSSEnableDistortion.png"}),(0,l.kt)("br",null),"\u6b64\u6548\u679c\u5c06\u5f53\u524d\u5e27\u6355\u83b7\u5230\u7eb9\u7406\uff0c\u56e0\u6b64\u6210\u672c\u53ef\u80fd\u975e\u5e38\u9ad8\u6602\u3002")))),(0,l.kt)("h2",{id:"\u6807\u51c6\u7c92\u5b50\u8868\u9762\u7740\u8272\u5668-standard-particles-surface-shader"},"\u6807\u51c6\u7c92\u5b50\u8868\u9762\u7740\u8272\u5668 (Standard Particles Surface Shader)"),(0,l.kt)("p",null,"\u6b64\u7740\u8272\u5668\u5177\u6709\u4e0e\u6807\u51c6\u7740\u8272\u5668\u7c7b\u4f3c\u7684\u529f\u80fd\uff0c\u4f46\u7279\u522b\u9002\u5408\u7c92\u5b50\u3002\u4e0e\u6807\u51c6\u7740\u8272\u5668\u4e00\u6837\uff0c\u6b64\u7740\u8272\u5668\u652f\u6301\u57fa\u4e8e\u7269\u7406\u7740\u8272\u3002\u4e0d\u5305\u62ec\u90a3\u4e9b\u4e0d\u9002\u5408\u52a8\u6001\u7c92\u5b50\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u5149\u7167\u8d34\u56fe\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SPSSStandardSurfaceShaderProperties.png",alt:"SPSSStandardSurfaceShaderProperties.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SPSSBillboardParticles.png",alt:"\u4f7f\u7528\u6807\u51c6\u7c92\u5b50\u8868\u9762\u7740\u8272\u5668\u548c\u6cd5\u7ebf\u8d34\u56fe\u7684\u516c\u544a\u724c\u7c92\u5b50\u793a\u4f8b"})),(0,l.kt)("p",null,"\u4f7f\u7528\u6807\u51c6\u7c92\u5b50\u8868\u9762\u7740\u8272\u5668\u548c\u6cd5\u7ebf\u8d34\u56fe\u7684\u516c\u544a\u724c\u7c92\u5b50\u793a\u4f8b"),(0,l.kt)("h2",{id:"\u6807\u51c6\u7c92\u5b50\u65e0\u5149\u7167\u7740\u8272\u5668-standard-particles-unlit-shader"},"\u6807\u51c6\u7c92\u5b50\u65e0\u5149\u7167\u7740\u8272\u5668 (Standard Particles Unlit Shader)"),(0,l.kt)("p",null,"\u8fd9\u79cd\u7b80\u5355\u7684\u7740\u8272\u5668\u6bd4\u8868\u9762\u7740\u8272\u5668\u66f4\u5feb\u3002\u652f\u6301\u6240\u6709\u901a\u7528\u7c92\u5b50\u63a7\u4ef6\uff0c\u4f8b\u5982\u7ffb\u9875\u6df7\u5408\u548c\u5931\u771f\uff0c\u4f46\u4e0d\u6267\u884c\u4efb\u4f55\u5149\u7167\u8ba1\u7b97\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SPSSStandardUnlitShader.png",alt:"SPSSStandardUnlitShader.png"})),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2017\u201310\u201316 \u9875\u9762\u5df2\u53d1\u5e03"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2017.3/Documentation/Manual/30_search.html?q=newin20173"},"2017.3")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u6807\u51c6\u7c92\u5b50\u7740\u8272\u5668NewIn20173")))}k.isMDXComponent=!0}}]);