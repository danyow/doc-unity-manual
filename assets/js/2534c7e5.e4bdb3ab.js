"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53004],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||l;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81091:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"SL-Fallback",title:"ShaderLab\uff1a\u5206\u914d\u56de\u9000",slug:"/sl-shader/sl-fallback"},s="ShaderLab\uff1a\u5206\u914d\u56de\u9000",c={unversionedId:"graphics/shaders/shader-writing/sl-reference/sl-shader/SL-Fallback",id:"graphics/shaders/shader-writing/sl-reference/sl-shader/SL-Fallback",title:"ShaderLab\uff1a\u5206\u914d\u56de\u9000",description:"\u672c\u9875\u9762\u5305\u542b\u6709\u5173\u5728 ShaderLab \u4ee3\u7801\u4e2d\u4f7f\u7528 Fallback \u4ee3\u7801\u5757\u5411 Shader \u5bf9\u8c61\u5206\u914d\u56de\u9000\u7684\u4fe1\u606f\u3002\u6709\u5173 Shader \u5bf9\u8c61\u7684\u5de5\u4f5c\u539f\u7406\u4ee5\u53ca Unity \u5982\u4f55\u9009\u62e9\u4f55\u65f6\u4f7f\u7528\u56de\u9000\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Shader \u5bf9\u8c61\u7b80\u4ecb\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/sl-shader/sl-fallback.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference/sl-shader",slug:"/sl-shader/sl-fallback",permalink:"/doc-unity-manual/docs/sl-shader/sl-fallback",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/sl-shader/sl-fallback.md",tags:[],version:"current",frontMatter:{id:"SL-Fallback",title:"ShaderLab\uff1a\u5206\u914d\u56de\u9000",slug:"/sl-shader/sl-fallback"},sidebar:"tutorialSidebar",previous:{title:"ShaderLab\uff1a\u6307\u5b9a\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668",permalink:"/doc-unity-manual/docs/sl-shader/sl-custom-editor"},next:{title:"ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027",permalink:"/doc-unity-manual/docs/sl-shader/sl-properties"}},d={},p=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528 Fallback \u4ee3\u7801\u5757",id:"\u4f7f\u7528-fallback-\u4ee3\u7801\u5757",level:2},{value:"\u56de\u9000\u4ee3\u7801\u793a\u4f8b",id:"\u56de\u9000\u4ee3\u7801\u793a\u4f8b",level:2}],u={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shaderlab\u5206\u914d\u56de\u9000"},"ShaderLab\uff1a\u5206\u914d\u56de\u9000"),(0,l.kt)("p",null,"\u672c\u9875\u9762\u5305\u542b\u6709\u5173\u5728 ShaderLab \u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Fallback")," \u4ee3\u7801\u5757\u5411 Shader \u5bf9\u8c61\u5206\u914d\u56de\u9000\u7684\u4fe1\u606f\u3002\u6709\u5173 Shader \u5bf9\u8c61\u7684\u5de5\u4f5c\u539f\u7406\u4ee5\u53ca Unity \u5982\u4f55\u9009\u62e9\u4f55\u65f6\u4f7f\u7528\u56de\u9000\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shaders-overview/shader-objects"},"Shader \u5bf9\u8c61\u7b80\u4ecb"),"\u3002"),(0,l.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ShaderLab\uff1aFallback \u4ee3\u7801\u5757")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,l.kt)("h2",{id:"\u4f7f\u7528-fallback-\u4ee3\u7801\u5757"},"\u4f7f\u7528 Fallback \u4ee3\u7801\u5757"),(0,l.kt)("p",null,"\u8981\u5206\u914d\u56de\u9000\uff0c\u8bf7\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Shader")," \u4ee3\u7801\u5757\u5185\u653e\u7f6e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Fallback")," \u4ee3\u7801\u5757\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7b7e\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'Fallback "&lt;name&gt;"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u627e\u4e0d\u5230\u517c\u5bb9\u7684 SubShader\uff0c\u5219\u4f7f\u7528\u6307\u5b9a\u7684 Shader \u5bf9\u8c61\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Fallback Off")),(0,l.kt)("td",{parentName:"tr",align:null},"Do not use a fallback Shader object in place of this one. If no compatible SubShaders are found, display the ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders-overview/shader-error"},"error shader"),".")))),(0,l.kt)("h2",{id:"\u56de\u9000\u4ee3\u7801\u793a\u4f8b"},"\u56de\u9000\u4ee3\u7801\u793a\u4f8b"),(0,l.kt)("p",null,"\u6b64\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u521b\u5efa\u5177\u6709\u6307\u5b9a\u56de\u9000\u7684 Shader \u5bf9\u8c61\u7684\u8bed\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Examples/ExampleFallback"\n{\n    SubShader\n    {\n        // \u6b64\u5904\u662f\u5b9a\u4e49\u5b50\u7740\u8272\u5668\u7684\u4ee3\u7801\u3002\n\n        Pass\n        {                \n              // \u6b64\u5904\u662f\u5b9a\u4e49\u901a\u9053\u7684\u4ee3\u7801\u3002\n        }\n    }\n\n    Fallback "ExampleOtherShader"\n}\n')))}h.isMDXComponent=!0}}]);