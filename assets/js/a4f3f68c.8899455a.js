"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85536],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),u=n,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(c,p(p({ref:e},m),{},{components:a})):r.createElement(c,p({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94292:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),p=["components"],i={id:"SL-Properties",title:"ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027",slug:"/sl-shader/sl-properties"},d="ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027",o={unversionedId:"graphics/shaders/shader-writing/sl-reference/sl-shader/SL-Properties",id:"graphics/shaders/shader-writing/sl-reference/sl-shader/SL-Properties",title:"ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027",description:"\u672c\u9875\u9762\u5305\u542b\u6709\u5173\u5728 ShaderLab \u4ee3\u7801\u4e2d\u4f7f\u7528 Properties \u4ee3\u7801\u5757\u4e3a Shader \u5bf9\u8c61\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027\u7684\u4fe1\u606f\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/sl-shader/sl-properties.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference/sl-shader",slug:"/sl-shader/sl-properties",permalink:"/docs/sl-shader/sl-properties",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/sl-shader/sl-properties.md",tags:[],version:"current",frontMatter:{id:"SL-Properties",title:"ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027",slug:"/sl-shader/sl-properties"},sidebar:"tutorialSidebar",previous:{title:"ShaderLab\uff1a\u5206\u914d\u56de\u9000",permalink:"/docs/sl-shader/sl-fallback"},next:{title:"ShaderLab\uff1a\u5b9a\u4e49\u5b50\u7740\u8272\u5668",permalink:"/docs/sl-sub-shader"}},m={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528 Properties \u4ee3\u7801\u5757",id:"\u4f7f\u7528-properties-\u4ee3\u7801\u5757",level:2},{value:"\u6750\u8d28\u5c5e\u6027\u58f0\u660e",id:"\u6750\u8d28\u5c5e\u6027\u58f0\u660e",level:3},{value:"\u6309\u7c7b\u578b\u5212\u5206\u7684\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u8bed\u6cd5",id:"\u6309\u7c7b\u578b\u5212\u5206\u7684\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u8bed\u6cd5",level:4},{value:"Reserved material property names",id:"reserved-material-property-names",level:4},{value:"\u6750\u8d28\u5c5e\u6027\u7279\u6027",id:"\u6750\u8d28\u5c5e\u6027\u7279\u6027",level:3},{value:"\u5c06\u6750\u8d28\u5c5e\u6027\u4e0e C# \u4ee3\u7801\u7ed3\u5408\u4f7f\u7528",id:"\u5c06\u6750\u8d28\u5c5e\u6027\u4e0e-c-\u4ee3\u7801\u7ed3\u5408\u4f7f\u7528",level:2},{value:"\u5728 ShaderLab \u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf",id:"\u5728-shaderlab-\u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf",level:2},{value:"\u5728 HLSL \u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf",id:"\u5728-hlsl-\u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf",level:2}],k={toc:s};function u(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shaderlab\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027"},"ShaderLab\uff1a\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027"),(0,l.kt)("p",null,"\u672c\u9875\u9762\u5305\u542b\u6709\u5173\u5728 ShaderLab \u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Properties")," \u4ee3\u7801\u5757\u4e3a Shader \u5bf9\u8c61\u5b9a\u4e49\u6750\u8d28\u5c5e\u6027\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u5728 ShaderLab \u4ee3\u7801\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49 ",(0,l.kt)("strong",{parentName:"p"},"\u6750\u8d28\u5c5e\u6027")," \u3002\u6750\u8d28\u5c5e\u6027\u662f Unity \u4f5c\u4e3a\u6750\u8d28\u8d44\u6e90\u4e00\u90e8\u5206\u5b58\u50a8\u7684\u5c5e\u6027\u3002\u8fd9\u4f7f\u7f8e\u672f\u5e08\u53ef\u4ee5\u521b\u5efa\u3001\u7f16\u8f91\u548c\u5171\u4eab\u5177\u6709\u4e0d\u540c\u914d\u7f6e\u7684\u6750\u8d28\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u5bf9\u6750\u8d28\u8c03\u7528\u51fd\u6570\uff08\u4f8b\u5982 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.SetFloat.html"},"Material.SetFloat"),"\uff09\u6765\u83b7\u53d6\u6216\u8bbe\u7f6e Shader \u5bf9\u8c61\u4e2d\u7684\u53d8\u91cf\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u6750\u8d28 Inspector \u67e5\u770b\u548c\u7f16\u8f91\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"Unity \u4f1a\u5c06\u8fdb\u884c\u7684\u66f4\u6539\u4fdd\u5b58\u4e3a\u6750\u8d28\u8d44\u6e90\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u5b83\u4eec\u53ef\u5728\u4f1a\u8bdd\u4e4b\u95f4\u6301\u7eed\u5b58\u5728\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\uff1a ","*"," \u4ecd\u53ef\u4ee5\u901a\u8fc7\u5bf9\u6750\u8d28\u8c03\u7528\u51fd\u6570\u6765\u83b7\u53d6\u6216\u8bbe\u7f6e Shader \u5bf9\u8c61\u4e2d\u7684\u53d8\u91cf\u503c\u3002 ","*"," \u8fd9\u4e9b\u503c\u6ca1\u6709\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u3002 ","*"," \u66f4\u6539\u4e0d\u4f1a\u5728\u4f1a\u8bdd\u4e4b\u95f4\u6301\u7eed\u5b58\u5728\u3002"),(0,l.kt)("p",null,"\u901a\u5e38","_","\u4e0d","_","\u521b\u5efa\u6750\u8d28\u5c5e\u6027\u7684\u552f\u4e00\u60c5\u51b5\u662f\u5982\u679c\u8981\u5b8c\u5168\u4f7f\u7528\u811a\u672c\u8bbe\u7f6e\u7740\u8272\u5668\u5c5e\u6027\u503c\uff08\u4f8b\u5982\uff0c\u5982\u679c\u5728\u5236\u4f5c\u7a0b\u5e8f\u5316\u5185\u5bb9\uff09\u3001\u5982\u679c\u65e0\u6cd5\u5c06\u5c5e\u6027\u8bbe\u4e3a\u6750\u8d28\u5c5e\u6027\u6216\u8005\u5982\u679c\u4e0d\u5e0c\u671b\u5728 Inspector \u4e2d\u7f16\u8f91\u5b83\u4eec\u3002"),(0,l.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ShaderLab\uff1aProperties \u4ee3\u7801\u5757")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f",(0,l.kt)("br",null),"\u5728 HLSL \u4ee3\u7801\u4e2d\uff0c\u5fc5\u987b\u5c06\u6bcf\u6750\u8d28\u53d8\u91cf\u7f6e\u4e8e\u540c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"CBUFFER")," \u4e2d\u4ee5\u5b9e\u73b0 SRP Batcher \u517c\u5bb9\u6027\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f",(0,l.kt)("br",null),"\u5728 HLSL \u4ee3\u7801\u4e2d\uff0c\u5fc5\u987b\u5c06\u6bcf\u6750\u8d28\u53d8\u91cf\u7f6e\u4e8e\u540c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"CBUFFER")," \u4e2d\u4ee5\u5b9e\u73b0 SRP Batcher \u517c\u5bb9\u6027\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f",(0,l.kt)("br",null),"\u5728 HLSL \u4ee3\u7801\u4e2d\uff0c\u5fc5\u987b\u5c06\u6bcf\u6750\u8d28\u53d8\u91cf\u7f6e\u4e8e\u540c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"CBUFFER")," \u4e2d\u4ee5\u5b9e\u73b0 SRP Batcher \u517c\u5bb9\u6027\u3002")))),(0,l.kt)("h2",{id:"\u4f7f\u7528-properties-\u4ee3\u7801\u5757"},"\u4f7f\u7528 Properties \u4ee3\u7801\u5757"),(0,l.kt)("p",null,"\u8981\u5728 ShaderLab \u4e2d\u5c06\u6750\u8d28\u5c5e\u6027\u5206\u914d\u7ed9 Shader \u5bf9\u8c61\uff0c\u8bf7\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Shader")," \u4ee3\u7801\u5757\u5185\u653e\u7f6e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Properties")," \u4ee3\u7801\u5757\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7b7e\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Properties"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"{"),(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"&lt;Material property declaration&gt;"),(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"&lt;Material property declaration&gt;"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"}")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u7ed9\u5b9a\u5c5e\u6027\u4fdd\u5b58\u4e3a\u6750\u8d28\u8d44\u6e90\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u5728\u6e32\u67d3\u671f\u95f4\u4f7f\u7528\u5b58\u50a8\u5728\u6750\u8d28\u8d44\u6e90\u4e2d\u7684\u503c\u3002",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"Properties")," \u4ee3\u7801\u5757\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u91cf\u7684\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u3002")))),(0,l.kt)("h3",{id:"\u6750\u8d28\u5c5e\u6027\u58f0\u660e"},"\u6750\u8d28\u5c5e\u6027\u58f0\u660e"),(0,l.kt)("p",null,"\u6240\u6709\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u90fd\u9075\u5faa\u4ee5\u4e0b\u57fa\u672c\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[optional: attribute] name("display text in Inspector", type name) = default value\n')),(0,l.kt)("p",null,"\u786e\u5207\u8bed\u6cd5\u56e0\u7c7b\u578b\u800c\u5f02\u3002"),(0,l.kt)("p",null,"\u672c\u8282\u5305\u542b\u4ee5\u4e0b\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%8C%89%E7%B1%BB%E5%9E%8B%E5%88%92%E5%88%86%E7%9A%84%E6%9D%90%E8%B4%A8%E5%B1%9E%E6%80%A7%E5%A3%B0%E6%98%8E%E8%AF%AD%E6%B3%95"},"\u6309\u7c7b\u578b\u5212\u5206\u7684\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u8bed\u6cd5"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%9D%90%E8%B4%A8%E5%B1%9E%E6%80%A7%E7%89%B9%E6%80%A7"},"\u6750\u8d28\u5c5e\u6027\u7279\u6027"))),(0,l.kt)("h4",{id:"\u6309\u7c7b\u578b\u5212\u5206\u7684\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u8bed\u6cd5"},"\u6309\u7c7b\u578b\u5212\u5206\u7684\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u8bed\u6cd5"),(0,l.kt)("p",null,"\u7c7b\u578b\u540d\u79f0\u548c\u9ed8\u8ba4\u503c\u7684\u8bed\u6cd5\u53d6\u51b3\u4e8e\u5c5e\u6027\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5728\u7740\u8272\u5668\u4ee3\u7801\u4e2d\uff0c\u901a\u5e38\u6240\u6709\u5c5e\u6027\u540d\u79f0\u90fd\u4ee5\u4e0b\u5212\u7ebf\u5b57\u7b26\u5f00\u5934\u3002\u672c\u9875\u9762\u4e0a\u7684\u793a\u4f8b\u9075\u5faa\u6b64\u7ea6\u5b9a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u793a\u4f8b\u8bed\u6cd5")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u6ce8\u91ca")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6574\u6570")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Integer display name", Integer) = 1')),(0,l.kt)("td",{parentName:"tr",align:null},"This type is backed by a real integer (unlike the legacy ",(0,l.kt)("inlineCode",{parentName:"td"},"Int")," type described below, which is backed by a float). Use this instead of Int when you want to use an integer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Int")," \uff08\u65e7\u7248\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Int display name", Int) = 1')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Note:"),"  This legacy type is backed by a float, rather than an integer. It is supported for backwards compatibility reasons only. Use the ",(0,l.kt)("inlineCode",{parentName:"td"},"Integer")," type instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Float")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Float display name", Float) = 0.5'),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Float with range", Range(0.0, 1.0)) = 0.5')),(0,l.kt)("td",{parentName:"tr",align:null},"\u8303\u56f4\u6ed1\u52a8\u6761\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u5305\u542b\u5728\u5185\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Texture2D")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Texture2D display name", 2D) = "" {}'),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Texture2D display name", 2D) = "red" {}')),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u4ee5\u4e0b\u503c\u7f6e\u4e8e\u9ed8\u8ba4\u503c\u5b57\u7b26\u4e32\u4e2d\u53ef\u4f7f\u7528 Unity \u7684\u5185\u7f6e\u7eb9\u7406\u4e4b\u4e00\uff1a\u201cwhite\u201d\uff08RGBA\uff1a1,1,1,1\uff09\u3001\u201cblack\u201d\uff08RGBA\uff1a0,0,0,1\uff09\u3001\u201cgray\u201d\uff08RGBA\uff1a0.5,0.5,0.5,1\uff09\u3001\u201cbump\u201d\uff08RGBA\uff1a0.5,0.5,1,0.5\uff09\u6216\u201cred\u201d\uff08RGBA\uff1a1,0,0,1\uff09\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u5982\u679c\u5c06\u8be5\u5b57\u7b26\u4e32\u7559\u7a7a\u6216\u8f93\u5165\u65e0\u6548\u503c\uff0c\u5219\u5b83\u9ed8\u8ba4\u4e3a \u201cgray\u201d\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f\uff1a")," \u8fd9\u4e9b\u9ed8\u8ba4\u7eb9\u7406\u5728 Inspector \u4e2d\u4e0d\u53ef\u89c1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Texture2DArray")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Texture2DArray display name", 2DArray) = "" {}')),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"td",href:"/docs/textures/class-texture2darray"},"\u7eb9\u7406\u6570\u7ec4"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Texture3D")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Texture3D", 3D) = "" {}')),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\u4e3a \u201cgray\u201d\uff08RGBA\uff1a0.5,0.5,0.5,1\uff09\u7eb9\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Cubemap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Cubemap", Cube) = "" {}')),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\u4e3a \u201cgray\u201d\uff08RGBA\uff1a0.5,0.5,0.5,1\uff09\u7eb9\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CubemapArray")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("CubemapArray", CubeArray) = "" {}')),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"td",href:"/docs/textures/class-cubemap-array"},"\u7acb\u65b9\u4f53\u8d34\u56fe\u6570\u7ec4"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName("Example color", Color) = (.25, .5, .5, 1)')),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4f1a\u5728\u7740\u8272\u5668\u4ee3\u7801\u4e2d\u6620\u5c04\u5230 float4\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u6750\u8d28 Inspector \u4f1a\u663e\u793a\u4e00\u4e2a\u62fe\u8272\u5668\u3002\u5982\u679c\u66f4\u613f\u610f\u5c06\u503c\u4f5c\u4e3a\u56db\u4e2a\u5355\u72ec\u7684\u6d6e\u70b9\u6570\u8fdb\u884c\u7f16\u8f91\uff0c\u8bf7\u4f7f\u7528 Vector \u7c7b\u578b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Vector")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_ExampleName ("Example vector", Vector) = (.25, .5, .5, 1)')),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4f1a\u5728\u7740\u8272\u5668\u4ee3\u7801\u4e2d\u6620\u5c04\u5230 float4\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u6750\u8d28 Inspector \u4f1a\u663e\u793a\u56db\u4e2a\u5355\u72ec\u7684\u6d6e\u70b9\u6570\u5b57\u6bb5\u3002\u5982\u679c\u66f4\u613f\u610f\u4f7f\u7528\u62fe\u8272\u5668\u7f16\u8f91\u503c\uff0c\u8bf7\u4f7f\u7528 Color \u7c7b\u578b\u3002")))),(0,l.kt)("h4",{id:"reserved-material-property-names"},"Reserved material property names"),(0,l.kt)("p",null,"Unity has some reserved names for material properties. When you create a material property with one of these names, Unity performs predefined operations. Do not use these names unless you intend to use this functionality."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u793a\u4f8b\u8bed\u6cd5")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","TransparencyLM"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'_TransparencyLM ("Transmissive Texture", 2D) = "white" {}')),(0,l.kt)("td",{parentName:"tr",align:null},"Enables custom RGB transparency during lightmapping.",(0,l.kt)("br",null),(0,l.kt)("br",null),"For more information, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/lightmappers/meta-pass"},"Lightmapping and shaders"),".")))),(0,l.kt)("h3",{id:"\u6750\u8d28\u5c5e\u6027\u7279\u6027"},"\u6750\u8d28\u5c5e\u6027\u7279\u6027"),(0,l.kt)("p",null,"\u6750\u8d28\u5c5e\u6027\u58f0\u660e\u53ef\u4ee5\u5177\u6709\u4e00\u4e2a\u53ef\u9009\u7279\u6027\uff0c\u7528\u4e8e\u544a\u77e5 Unity \u5982\u4f55\u5904\u7406\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u6b64\u5904\u5217\u51fa\u7684\u7279\u6027\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u8bed\u6cd5\u5411\u6750\u8d28\u5c5e\u6027\u6dfb\u52a0 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialPropertyDrawer.html"},"MaterialPropertyDrawer"),"\u3002\u901a\u8fc7\u8fd9\u4e9b\u5185\u5bb9\u53ef\u4ee5\u63a7\u5236\u6750\u8d28\u5c5e\u6027\u5728 Inspector \u7a97\u53e3\u4e2d\u7684\u663e\u793a\u65b9\u5f0f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[Gamma]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u793a\u6d6e\u70b9\u6570\u6216\u77e2\u91cf\u5c5e\u6027\u4f7f\u7528 sRGB \u503c\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u9879\u76ee\u4e2d\u7684\u989c\u8272\u7a7a\u95f4\u9700\u8981\uff0c\u5219\u5b83\u5fc5\u987b\u4e0e\u5176\u4ed6 sRGB \u503c\u4e00\u8d77\u8f6c\u6362\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"td",href:"/docs/sl-shader-programs/sl-properties-in-programs"},"\u7740\u8272\u5668\u7a0b\u5e8f\u4e2d\u7684\u5c5e\u6027"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[HDR]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u793a\u7eb9\u7406\u6216\u989c\u8272\u5c5e\u6027\u4f7f\u7528",(0,l.kt)("a",{parentName:"td",href:"/docs/hdr"},"\u9ad8\u52a8\u6001\u8303\u56f4 (HDR)")," \u503c\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u5bf9\u4e8e\u7eb9\u7406\u5c5e\u6027\uff0c\u5982\u679c\u5206\u914d\u4e86 LDR \u7eb9\u7406\uff0c\u5219 Unity \u7f16\u8f91\u5668\u4f1a\u663e\u793a\u8b66\u544a\u3002\u5bf9\u4e8e\u989c\u8272\u5c5e\u6027\uff0cUnity \u7f16\u8f91\u5668\u4f1a\u4f7f\u7528 HDR \u62fe\u8272\u5668\u7f16\u8f91\u6b64\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[HideInInspector]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u544a\u77e5 Unity \u7f16\u8f91\u5668\u5728 Inspector \u4e2d\u9690\u85cf\u6b64\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[MainTexture]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6750\u8d28\u8bbe\u7f6e\u4e3b\u7eb9\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/Material-mainTexture.html"},"Material.mainTexture")," \u8fdb\u884c\u8bbf\u95ee\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cUnity \u5c06\u5177\u6709\u5c5e\u6027\u540d\u79f0 ",(0,l.kt)("inlineCode",{parentName:"td"},"_MainTex")," \u7684\u7eb9\u7406\u89c6\u4e3a\u4e3b\u7eb9\u7406\u3002\u5982\u679c\u7eb9\u7406\u5177\u6709\u4e0d\u540c\u7684\u5c5e\u6027\u540d\u79f0\uff0c\u4f46\u5e0c\u671b Unity \u5c06\u5b83\u89c6\u4e3a\u4e3b\u7eb9\u7406\uff0c\u8bf7\u4f7f\u7528\u6b64\u7279\u6027\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u5982\u679c\u591a\u6b21\u4f7f\u7528\u6b64\u7279\u6027\uff0c\u5219 Unity \u4f1a\u4f7f\u7528\u7b2c\u4e00\u4e2a\u5c5e\u6027\u5e76\u5ffd\u7565\u540e\u7eed\u5c5e\u6027\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f\uff1a")," \u4f7f\u7528\u6b64\u7279\u6027\u8bbe\u7f6e\u4e3b\u7eb9\u7406\u65f6\uff0c\u5982\u679c\u4f7f\u7528\u7eb9\u7406\u4e32\u6d41\u8c03\u8bd5\u89c6\u56fe\u6a21\u5f0f\u6216\u81ea\u5b9a\u4e49\u8c03\u8bd5\u5de5\u5177\uff0c\u5219\u8be5\u7eb9\u7406\u5728\u6e38\u620f\u89c6\u56fe\u4e2d\u4e0d\u53ef\u89c1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[MainColor]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6750\u8d28\u8bbe\u7f6e\u4e3b\u8272\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/Material-color.html"},"Material.color")," \u8fdb\u884c\u8bbf\u95ee\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cUnity \u5c06\u5177\u6709\u5c5e\u6027\u540d\u79f0 ",(0,l.kt)("inlineCode",{parentName:"td"},"_Color")," \u7684\u989c\u8272\u89c6\u4e3a\u4e3b\u8272\u3002\u5982\u679c\u60a8\u7684\u989c\u8272\u5177\u6709\u5176\u4ed6\u5c5e\u6027 (property) \u540d\u79f0\uff0c\u4f46\u60a8\u5e0c\u671b Unity \u5c06\u8fd9\u4e2a\u989c\u8272\u89c6\u4e3a\u4e3b\u8272\uff0c\u8bf7\u4f7f\u7528\u6b64\u5c5e\u6027 (attribute)\u3002\u5982\u679c\u60a8\u591a\u6b21\u4f7f\u7528\u6b64\u5c5e\u6027 (attribute)\uff0c\u5219 Unity \u4f1a\u4f7f\u7528\u7b2c\u4e00\u4e2a\u5c5e\u6027 (property)\uff0c\u800c\u5ffd\u7565\u540e\u7eed\u5c5e\u6027 (property)\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[NoScaleOffset]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u544a\u77e5 Unity \u7f16\u8f91\u5668\u9690\u85cf\u6b64\u7eb9\u7406\u5c5e\u6027\u7684\u5e73\u94fa\u548c\u504f\u79fb\u5b57\u6bb5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[Normal]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u793a\u7eb9\u7406\u5c5e\u6027\u9700\u8981\u6cd5\u7ebf\u8d34\u56fe\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u5982\u679c\u5206\u914d\u4e86\u4e0d\u517c\u5bb9\u7684\u7eb9\u7406\uff0c\u5219 Unity \u7f16\u8f91\u5668\u4f1a\u663e\u793a\u8b66\u544a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[PerRendererData]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u793a\u7eb9\u7406\u5c5e\u6027\u5c06\u6765\u81ea\u6bcf\u6e32\u67d3\u5668\u6570\u636e\uff0c\u5f62\u5f0f\u4e3a ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialPropertyBlock.html"},"MaterialPropertyBlock"),"\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u6750\u8d28 Inspector \u4f1a\u5c06\u8fd9\u4e9b\u5c5e\u6027\u663e\u793a\u4e3a\u53ea\u8bfb\u3002")))),(0,l.kt)("h2",{id:"\u5c06\u6750\u8d28\u5c5e\u6027\u4e0e-c-\u4ee3\u7801\u7ed3\u5408\u4f7f\u7528"},"\u5c06\u6750\u8d28\u5c5e\u6027\u4e0e C# \u4ee3\u7801\u7ed3\u5408\u4f7f\u7528"),(0,l.kt)("p",null,"\u6750\u8d28\u5c5e\u6027\u5728 C# \u4ee3\u7801\u4e2d\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialProperty.html"},"MaterialProperty")," \u7c7b\u8fdb\u884c\u8868\u793a\u3002"),(0,l.kt)("p",null,"\u8981\u8bbf\u95ee HLSL \u4ee3\u7801\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u8c03\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.GetFloat.html"},"Material.GetFloat"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.SetFloat.html"},"Material.SetFloat"),"\u3002\u8fd8\u6709\u5176\u4ed6\u7c7b\u4f3c\u7684\u65b9\u6cd5\uff1b\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.html"},"\u6750\u8d28 API \u6587\u6863"),"\u4ee5\u83b7\u53d6\u5b8c\u6574\u5217\u8868\u3002\u4f7f\u7528\u8fd9\u4e9b API \u8bbf\u95ee HLSL \u53d8\u91cf\u65f6\uff0c\u53d8\u91cf\u662f\u5426\u4e3a\u6750\u8d28\u5c5e\u6027\u5e76\u4e0d\u91cd\u8981\u3002"),(0,l.kt)("p",null,"\u5728 Unity \u7f16\u8f91\u5668\u4e2d\uff0c\u53ef\u4ee5\u63a7\u5236\u6750\u8d28\u5c5e\u6027\u5728 Inspector \u7a97\u53e3\u4e2d\u7684\u663e\u793a\u65b9\u5f0f\u3002\u4e3a\u6b64\uff0c\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialPropertyDrawer.html"},"MaterialPropertyDrawer"),"\u3002\u5bf9\u4e8e\u66f4\u590d\u6742\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialEditor.html"},"MaterialEditor"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialProperty.html"},"MaterialProperty")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ShaderGUI.html"},"ShaderGUI")," \u7c7b\u3002\u6709\u5173\u4e3a\u7740\u8272\u5668\u521b\u5efa\u81ea\u5b9a\u4e49 GUI \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/docs/sl-shader/sl-custom-editor"},"ShaderLab\uff1a\u5206\u914d\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668"),"\u3002"),(0,l.kt)("h2",{id:"\u5728-shaderlab-\u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf"},"\u5728 ShaderLab \u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf"),(0,l.kt)("p",null,"\u8981\u5728 ShaderLab \u4ee3\u7801\u4e2d\u901a\u8fc7\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf\u7684\u503c\uff0c\u8bf7\u5728 ShaderLab \u4ee3\u7801\u4e2d\u5c06\u6750\u8d28\u5c5e\u6027\u540d\u79f0\u7f6e\u4e8e\u65b9\u62ec\u53f7\u4e2d\u3002"),(0,l.kt)("p",null,"\u6b64\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e ShaderLab ",(0,l.kt)("inlineCode",{parentName:"p"},"Offset")," \u547d\u4ee4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"units")," \u503c\u7684\u8bed\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Examples/MaterialPropertyShaderLab"\n{\n    Properties\n    {\n        // \u5728\u6750\u8d28 Inspector \u4e2d\u66f4\u6539\u6b64\u503c\u4ee5\u5f71\u54cd Offset \u547d\u4ee4\u7684\u503c\n        _OffsetUnitScale ("Offset unit scale", Integer) = 1\n    }\n    SubShader\n    {\n        // \u6b64\u5904\u662f\u5b9a\u4e49 SubShader \u5176\u4f59\u90e8\u5206\u7684\u4ee3\u7801\n\n        Pass\n        {\n            Offset 0, [_OffsetUnitScale]\n\n           // \u6b64\u5904\u662f\u5b9a\u4e49 Pass \u5176\u4f59\u90e8\u5206\u7684\u4ee3\u7801\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5728-hlsl-\u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf"},"\u5728 HLSL \u4ee3\u7801\u4e2d\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u8bbe\u7f6e\u53d8\u91cf"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u6750\u8d28\u5c5e\u6027\u5728 HLSL \u4ee3\u7801\u4e2d\u8bbe\u7f6e\u53d8\u91cf\u7684\u503c\uff0c\u8bf7\u4e3a\u6750\u8d28\u5c5e\u6027\u63d0\u4f9b\u4e0e\u7740\u8272\u5668\u5c5e\u6027\u76f8\u540c\u7684\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728\u4ee5\u4e0b\u6587\u7ae0\u4e2d\u67e5\u770b\u6b64\u6280\u672f\uff0c\u5176\u4e2d\u5305\u62ec\u6b63\u5e38\u5de5\u4f5c\u7684\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/built-in-shader-examples/sl-vertex-fragment-shader-examples"},"\u4e3a\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u7f16\u5199\u9876\u70b9\u548c\u7247\u5143\u7740\u8272\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/manual/writing-custom-shaders-urp.html"},"\u4e3a\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf\u7f16\u5199\u81ea\u5b9a\u4e49\u7740\u8272\u5668"))))}u.isMDXComponent=!0}}]);