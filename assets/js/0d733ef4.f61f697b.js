"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68748],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||s;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74223:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),l=["components"],o={id:"SL-UsePass",title:"ShaderLab \u547d\u4ee4\uff1aUsePass",slug:"/shader-shaderlab-commands/sl-use-pass"},d="ShaderLab \u547d\u4ee4\uff1aUsePass",i={unversionedId:"graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/SL-UsePass",id:"graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/SL-UsePass",title:"ShaderLab \u547d\u4ee4\uff1aUsePass",description:"UsePass \u547d\u4ee4\u63d2\u5165\u6765\u81ea\u53e6\u4e00\u4e2a Shader \u5bf9\u8c61\u7684\u6307\u5b9a\u901a\u9053\u3002\u53ef\u4ee5\u4f7f\u7528\u6b64\u547d\u4ee4\u6765\u51cf\u5c11\u7740\u8272\u5668\u6e90\u6587\u4ef6\u4e2d\u7684\u4ee3\u7801\u91cd\u590d\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/sl-use-pass.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands",slug:"/shader-shaderlab-commands/sl-use-pass",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-use-pass",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/sl-use-pass.md",tags:[],version:"current",frontMatter:{id:"SL-UsePass",title:"ShaderLab \u547d\u4ee4\uff1aUsePass",slug:"/shader-shaderlab-commands/sl-use-pass"},sidebar:"tutorialSidebar",previous:{title:"ShaderLab \u547d\u4ee4\uff1a\u6a21\u677f",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-stencil"},next:{title:"ShaderLab \u547d\u4ee4\uff1aZClip",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-zclip"}},u={},c=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"shaderlab-\u547d\u4ee4usepass"},"ShaderLab \u547d\u4ee4\uff1aUsePass"),(0,s.kt)("p",null,"UsePass \u547d\u4ee4\u63d2\u5165\u6765\u81ea\u53e6\u4e00\u4e2a Shader \u5bf9\u8c61\u7684\u6307\u5b9a\u901a\u9053\u3002\u53ef\u4ee5\u4f7f\u7528\u6b64\u547d\u4ee4\u6765\u51cf\u5c11\u7740\u8272\u5668\u6e90\u6587\u4ef6\u4e2d\u7684\u4ee3\u7801\u91cd\u590d\u3002"),(0,s.kt)("p",null,"\u6709\u5173\u5728 ShaderLab \u4ee3\u7801\u4e2d\u5411\u901a\u9053\u6dfb\u52a0\u540d\u79f0\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-pass/sl-name"},"ShaderLab\uff1a\u5411\u901a\u9053\u6dfb\u52a0\u540d\u79f0"),"\u3002"),(0,s.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"UsePass")),(0,s.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,s.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,s.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u7b7e\u540d")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'UsePass "Shader object name/PASS NAME IN UPPERCASE"')),(0,s.kt)("td",{parentName:"tr",align:null},"Inserts the named Pass from the named Shader object.",(0,s.kt)("br",null),(0,s.kt)("br",null),"If the named Shader object contains more than one SubShader, Unity iterates over the SubShaders until it finds the first supported SubShader that contains a Pass with the given name. For information on how Unity determines whether a SubShader is supported, see ",(0,s.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders-overview/shader-objects"},"Shader objects introduction"),".",(0,s.kt)("br",null),(0,s.kt)("br",null),"If the SubShader contains more than one Pass with the same name, Unity returns the last Pass it finds.",(0,s.kt)("br",null),(0,s.kt)("br",null),"If Unity does not find a matching Pass, it shows the ",(0,s.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders-overview/shader-error"},"error shader"),".")))),(0,s.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,s.kt)("p",null,"\u6b64\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a NamedPass \u7684 Shader \u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u540d\u4e3a ExampleNamedPass \u7684\u901a\u9053\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Shader "Examples/ContainsNamedPass"\n{\n    SubShader\n    {\n        Pass\n        {    \n              Name "ExampleNamedPass"\n            \n              // \u6b64\u5904\u662f\u901a\u9053\u5185\u5bb9\u7684\u5176\u4f59\u90e8\u5206\u3002\n        }\n    }\n}\n')),(0,s.kt)("p",null,"\u6b64\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a UseNamedPass \u7684 Shader \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4f7f\u7528\u4e0a\u8ff0\u793a\u4f8b\u4ee3\u7801\u4e2d\u7684\u6307\u5b9a\u901a\u9053\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Shader "Examples/UsesNamedPass"\n{\n    SubShader\n    {\n        UsePass "Examples/ContainsNamedPass/EXAMPLENAMEDPASS"\n    }\n}\n')))}m.isMDXComponent=!0}}]);