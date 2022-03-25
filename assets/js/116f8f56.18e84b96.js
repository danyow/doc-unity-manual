"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77462],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,c=m["".concat(d,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(c,i(i({ref:t},o),{},{components:a})):n.createElement(c,i({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15834:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"shader-predefined-pass-tags-built-in",title:"ShaderLab\uff1a\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e",slug:"/sl-pass/shader-predefined-pass-tags-built-in"},d="ShaderLab\uff1a\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e",p={unversionedId:"graphics/shaders/shader-writing/sl-reference/sl-pass/shader-predefined-pass-tags-built-in",id:"graphics/shaders/shader-writing/sl-reference/sl-pass/shader-predefined-pass-tags-built-in",title:"ShaderLab\uff1a\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e",description:"\u672c\u9875\u9762\u5305\u542b\u6709\u5173\u53ef\u7528\u4e8e\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e\u7684\u4fe1\u606f\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/sl-pass/shader-predefined-pass-tags-built-in.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference/sl-pass",slug:"/sl-pass/shader-predefined-pass-tags-built-in",permalink:"/doc-unity-manual/docs/sl-pass/shader-predefined-pass-tags-built-in",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/sl-pass/shader-predefined-pass-tags-built-in.md",tags:[],version:"current",frontMatter:{id:"shader-predefined-pass-tags-built-in",title:"ShaderLab\uff1a\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e",slug:"/sl-pass/shader-predefined-pass-tags-built-in"},sidebar:"tutorialSidebar",previous:{title:"ShaderLab\uff1a\u5b9a\u4e49\u4e00\u4e2a\u901a\u9053",permalink:"/doc-unity-manual/docs/sl-pass"},next:{title:"ShaderLab\uff1a\u4e3a\u901a\u9053\u6307\u5b9a\u540d\u79f0",permalink:"/doc-unity-manual/docs/sl-pass/sl-name"}},o={},u=[{value:"LightMode \u6807\u7b7e\u6709\u6548\u503c",id:"lightmode-\u6807\u7b7e\u6709\u6548\u503c",level:2},{value:"PassFlags \u6807\u7b7e",id:"passflags-\u6807\u7b7e",level:2},{value:"\u6709\u6548\u503c",id:"\u6709\u6548\u503c",level:3},{value:"PassFlag \u6807\u7b7e\u7684\u4ee3\u7801\u793a\u4f8b",id:"passflag-\u6807\u7b7e\u7684\u4ee3\u7801\u793a\u4f8b",level:3},{value:"RequireOptions \u6807\u7b7e",id:"requireoptions-\u6807\u7b7e",level:2},{value:"\u6709\u6548\u503c",id:"\u6709\u6548\u503c-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],m={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shaderlab\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e"},"ShaderLab\uff1a\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e"),(0,l.kt)("p",null,"\u672c\u9875\u9762\u5305\u542b\u6709\u5173\u53ef\u7528\u4e8e\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u7684\u9884\u5b9a\u4e49\u901a\u9053\u6807\u7b7e\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u901a\u9053\u6807\u7b7e\u7684\u4e00\u822c\u4fe1\u606f\uff0c\u5305\u62ec LightMode \u6807\u7b7e\u7684\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-pass"},"ShaderLab\uff1a\u4e3a\u901a\u9053\u5206\u914d\u6807\u7b7e"),"\u3002\u6709\u5173\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP) \u4e2d\u9884\u5b9a\u4e49\u7684\u901a\u9053\u6807\u7b7e\u503c\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@11.0/manual/urp-shaders/urp-shaderlab-pass-tags.html#urp-pass-tags-lightmode"},"URP \u901a\u9053\u6807\u7b7e\uff1aLightMode"),"\u3002"),(0,l.kt)("h2",{id:"lightmode-\u6807\u7b7e\u6709\u6548\u503c"},"LightMode \u6807\u7b7e\u6709\u6548\u503c"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u662f\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"LightMode")," \u901a\u9053\u6807\u7b7e\u7684\u6709\u6548\u503c\u3002\u6709\u5173 LightMode \u6807\u7b7e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-pass/sl-pass-tags"},"ShaderLab\uff1a\u4f7f\u7528\u901a\u9053\u6807\u7b7e"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u503c")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Always")),(0,l.kt)("td",{parentName:"tr",align:null},"\u59cb\u7ec8\u6e32\u67d3\uff1b\u4e0d\u5e94\u7528\u4efb\u4f55\u5149\u7167\u3002\u8fd9\u662f\u9ed8\u8ba4\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ForwardBase")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u524d\u5411\u6e32\u67d3\u4e2d\u4f7f\u7528\uff1b\u5e94\u7528\u73af\u5883\u5149\u3001\u4e3b\u65b9\u5411\u5149\u3001\u9876\u70b9/SH \u5149\u6e90\u548c\u5149\u7167\u8d34\u56fe\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ForwardAdd")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u524d\u5411\u6e32\u67d3\u4e2d\u4f7f\u7528\uff1b\u5e94\u7528\u9644\u52a0\u7684\u6bcf\u50cf\u7d20\u5149\u6e90\uff08\u6bcf\u4e2a\u5149\u6e90\u6709\u4e00\u4e2a\u901a\u9053\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Deferred")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5ef6\u8fdf\u6e32\u67d3\u4e2d\u4f7f\u7528\uff1b\u6e32\u67d3 G \u7f13\u51b2\u533a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ShadowCaster")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5bf9\u8c61\u6df1\u5ea6\u6e32\u67d3\u5230\u9634\u5f71\u8d34\u56fe\u6216\u6df1\u5ea6\u7eb9\u7406\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MotionVectors")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8ba1\u7b97\u6bcf\u4e2a\u5bf9\u8c61\u7684\u8fd0\u52a8\u77e2\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PrepassBase")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u65e7\u7248\u5ef6\u8fdf\u5149\u7167\uff0c\u6e32\u67d3\u6cd5\u7ebf\u548c\u955c\u9762\u53cd\u5c04\u6307\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PrepassFinal")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u65e7\u7248\u5ef6\u8fdf\u5149\u7167\uff1b\u901a\u8fc7\u7ec4\u5408\u7eb9\u7406\u3001\u5149\u7167\u548c\u53d1\u5149\u6765\u6e32\u67d3\u6700\u7ec8\u989c\u8272\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ShadowCaster")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u5bf9\u8c61\u6df1\u5ea6\u6e32\u67d3\u5230\u9634\u5f71\u8d34\u56fe\u6216\u6df1\u5ea6\u7eb9\u7406\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Vertex")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u65e7\u7248\u9876\u70b9\u5149\u7167\u6e32\u67d3\uff08\u5f53\u5bf9\u8c61\u4e0d\u8fdb\u884c\u5149\u7167\u8d34\u56fe\u65f6\uff09\uff1b\u5e94\u7528\u6240\u6709\u9876\u70b9\u5149\u6e90\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"VertexLMRGBM")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u65e7\u7248\u9876\u70b9\u5149\u7167\u6e32\u67d3\uff08\u5f53\u5bf9\u8c61\u4e0d\u8fdb\u884c\u5149\u7167\u8d34\u56fe\u65f6\uff09\uff0c\u4ee5\u53ca\u5149\u7167\u8d34\u56fe\u4e3a RGBM \u7f16\u7801\u7684\u5e73\u53f0\uff08PC \u548c\u6e38\u620f\u4e3b\u673a\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"VertexLM")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u65e7\u7248\u9876\u70b9\u5149\u7167\u6e32\u67d3\uff08\u5f53\u5bf9\u8c61\u4e0d\u8fdb\u884c\u5149\u7167\u8d34\u56fe\u65f6\uff09\uff0c\u4ee5\u53ca\u5149\u7167\u8d34\u56fe\u4e3a\u53cc LDR \u7f16\u7801\u7684\u5e73\u53f0\u4e0a\uff08\u79fb\u52a8\u5e73\u53f0\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Meta")),(0,l.kt)("td",{parentName:"tr",align:null},"This Pass is not used during regular rendering, only for lightmap baking or Enlighten Realtime Global Illumination. For more information, see ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/lightmappers/meta-pass"},"Lightmapping and shaders"),".")))),(0,l.kt)("h2",{id:"passflags-\u6807\u7b7e"},"PassFlags \u6807\u7b7e"),(0,l.kt)("p",null,"\u5728\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"PassFlags")," \u901a\u9053\u6807\u7b7e\u6765\u6307\u5b9a Unity \u63d0\u4f9b\u7ed9\u901a\u9053\u7684\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"\u6709\u6548\u503c"},"\u6709\u6548\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u503c")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnlyDirectional"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5728\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u4e14\u6e32\u67d3\u8def\u5f84\u8bbe\u7f6e\u4e3a Forward\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"LightMode")," \u6807\u7b7e\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"ForwardBase")," \u7684\u901a\u9053\u4e2d\u6709\u6548\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," Unity \u53ea\u4e3a\u8be5\u901a\u9053\u63d0\u4f9b\u4e3b\u65b9\u5411\u5149\u548c\u73af\u5883\u5149/\u5149\u7167\u63a2\u9488\u6570\u636e\u3002\u8fd9\u610f\u5473\u7740\u975e\u91cd\u8981\u5149\u6e90\u7684\u6570\u636e\u5c06\u4e0d\u4f1a\u4f20\u9012\u5230\u9876\u70b9\u5149\u6e90\u6216\u7403\u8c10\u51fd\u6570\u7740\u8272\u5668\u53d8\u91cf\u3002\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/rendering-paths/render-tech-forward-rendering"},"\u524d\u5411\u6e32\u67d3\u8def\u5f84"),"\u4ee5\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002")))),(0,l.kt)("h3",{id:"passflag-\u6807\u7b7e\u7684\u4ee3\u7801\u793a\u4f8b"},"PassFlag \u6807\u7b7e\u7684\u4ee3\u7801\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Examples/ExamplePassFlag"\n{\n    SubShader\n    {\n        Pass\n        {    \n              Tags { "LightMode" = "ForwardBase" "PassFlags" = "OnlyDirectional" }\n            \n              // The rest of the code that defines the Pass goes here.\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"requireoptions-\u6807\u7b7e"},"RequireOptions \u6807\u7b7e"),(0,l.kt)("p",null,"\u5728\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"RequireOptions")," \u901a\u9053\u6807\u7b7e\u6839\u636e\u9879\u76ee\u8bbe\u7f6e\u542f\u7528\u6216\u7981\u7528\u4e00\u4e2a\u901a\u9053\u3002"),(0,l.kt)("h3",{id:"\u6709\u6548\u503c-1"},"\u6709\u6548\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u503c")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SoftVegetation")),(0,l.kt)("td",{parentName:"tr",align:null},"Render this Pass only if ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/QualitySettings-softVegetation.html"},"QualitySettings-softVegetation")," is enabled.")))),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Examples/ExampleRequireOptions"\n{\n    SubShader\n    {\n        Pass\n        {    \n              Tags { "RequireOptions" = "SoftVegetation" }\n            \n              // The rest of the code that defines the Pass goes here.\n        }\n    }\n}\n')))}g.isMDXComponent=!0}}]);