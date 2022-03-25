"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54133],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,d(d({ref:e},m),{},{components:n})):a.createElement(N,d({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var o=2;o<l;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},32483:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),d=["components"],i={id:"SL-Blend",title:"ShaderLab \u547d\u4ee4\uff1aBlend",slug:"/shader-shaderlab-commands/sl-blend"},p="ShaderLab \u547d\u4ee4\uff1aBlend",o={unversionedId:"graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/SL-Blend",id:"graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/SL-Blend",title:"ShaderLab \u547d\u4ee4\uff1aBlend",description:"\u786e\u5b9a GPU \u5982\u4f55\u5c06\u7247\u5143\u7740\u8272\u5668\u7684\u8f93\u51fa\u4e0e\u6e32\u67d3\u76ee\u6807\u8fdb\u884c\u5408\u5e76\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/sl-blend.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands",slug:"/shader-shaderlab-commands/sl-blend",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-blend",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/shader-shaderlab-commands/sl-blend.md",tags:[],version:"current",frontMatter:{id:"SL-Blend",title:"ShaderLab \u547d\u4ee4\uff1aBlend",slug:"/shader-shaderlab-commands/sl-blend"},sidebar:"tutorialSidebar",previous:{title:"ShaderLab \u547d\u4ee4\uff1aBlendOp",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-blend-op"},next:{title:"ShaderLab \u547d\u4ee4\uff1aColorMask",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-color-mask"}},m={},u=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u6709\u6548\u53c2\u6570\u503c",id:"\u6709\u6548\u53c2\u6570\u503c",level:2},{value:"\u5e38\u89c1\u6df7\u5408\u7c7b\u578b (Blend Type)",id:"\u5e38\u89c1\u6df7\u5408\u7c7b\u578b-blend-type",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],k={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shaderlab-\u547d\u4ee4blend"},"ShaderLab \u547d\u4ee4\uff1aBlend"),(0,l.kt)("p",null,"\u786e\u5b9a GPU \u5982\u4f55\u5c06\u7247\u5143\u7740\u8272\u5668\u7684\u8f93\u51fa\u4e0e\u6e32\u67d3\u76ee\u6807\u8fdb\u884c\u5408\u5e76\u3002"),(0,l.kt)("p",null,"\u6b64\u547d\u4ee4\u7684\u529f\u80fd\u53d6\u51b3\u4e8e\u6df7\u5408\u64cd\u4f5c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 BlendOp \u547d\u4ee4\u8fdb\u884c\u8bbe\u7f6e\u3002\u8bf7\u6ce8\u610f\uff0c\u867d\u7136\u6240\u6709\u56fe\u5f62 API \u548c\u786c\u4ef6\u90fd\u652f\u6301\u6df7\u5408\u529f\u80fd\uff0c\u4f46\u5bf9\u67d0\u4e9b\u6df7\u5408\u64cd\u4f5c\u7684\u652f\u6301\u8f83\u4e3a\u6709\u9650\u3002"),(0,l.kt)("p",null,"\u542f\u7528\u6df7\u5408\u4f1a\u7981\u7528 GPU \u4e0a\u7684\u4e00\u4e9b\u4f18\u5316\uff08\u4e3b\u8981\u662f\u5220\u9664\u9690\u85cf\u7684\u8868\u9762/Early-Z\uff09\uff0c\u8fd9\u4e9b\u4f18\u5316\u4f1a\u589e\u52a0 GPU \u5e27\u65f6\u95f4\u3002"),(0,l.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Blend")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("p",null,"\u6b64\u547d\u4ee4\u4f1a\u66f4\u6539\u6e32\u67d3\u72b6\u6001\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Pass")," \u4ee3\u7801\u5757\u4e2d\u4f7f\u7528\u5b83\u53ef\u4e3a\u8be5\u901a\u9053\u8bbe\u7f6e\u6e32\u67d3\u72b6\u6001\uff0c\u6216\u8005\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"SubShader")," \u4ee3\u7801\u5757\u4e2d\u4f7f\u7528\u5b83\u53ef\u4e3a\u8be5\u5b50\u7740\u8272\u5668\u4e2d\u7684\u6240\u6709\u901a\u9053\u8bbe\u7f6e\u6e32\u67d3\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86\u6df7\u5408\uff0c\u5219\u4f1a\u53d1\u751f\u4ee5\u4e0b\u60c5\u51b5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 BlendOp \u547d\u4ee4\uff0c\u5219\u6df7\u5408\u64cd\u4f5c\u5c06\u8bbe\u7f6e\u4e3a\u8be5\u503c\u3002\u5426\u5219\uff0c\u6df7\u5408\u64cd\u4f5c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"Add"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6df7\u5408\u64cd\u4f5c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Add"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Sub"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"RevSub"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Min")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"Max"),"\uff0cGPU \u4f1a\u5c06\u7247\u5143\u7740\u8272\u5668\u7684\u8f93\u51fa\u503c\u4e58\u4ee5\u6e90\u7cfb\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6df7\u5408\u64cd\u4f5c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Add"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Sub"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"RevSub"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Min")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"Max"),"\uff0cGPU \u4f1a\u5c06\u6e32\u67d3\u76ee\u6807\u4e2d\u73b0\u6709\u7684\u503c\u4e58\u4ee5\u76ee\u6807\u7cfb\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"GPU \u5bf9\u7ed3\u679c\u503c\u6267\u884c\u6df7\u5408\u64cd\u4f5c\u3002")),(0,l.kt)("p",null,"\u6df7\u5408\u7b49\u5f0f\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"finalValue = sourceFactor * sourceValue operation destinationFactor * destinationValue\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u7b49\u5f0f\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"finalValue")," \u662f GPU \u5199\u5165\u76ee\u6807\u7f13\u51b2\u533a\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sourceFactor")," \u5728 Blend \u547d\u4ee4\u4e2d\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sourceValue")," \u662f\u7247\u5143\u7740\u8272\u5668\u8f93\u51fa\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"operation")," \u662f\u6df7\u5408\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"destinationFactor")," \u5728 Blend \u547d\u4ee4\u4e2d\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"destinationValue")," \u662f\u76ee\u6807\u7f13\u51b2\u533a\u4e2d\u73b0\u6709\u7684\u503c\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7b7e\u540d")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u793a\u4f8b\u8bed\u6cd5")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend &lt;state&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend Off")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u9ed8\u8ba4\u6e32\u67d3\u76ee\u6807\u7684\u6df7\u5408\u3002\u8fd9\u662f\u9ed8\u8ba4\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend &lt;render target&gt; &lt;state&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend 1 Off")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u4e0a\uff0c\u4f46\u9488\u5bf9\u7ed9\u5b9a\u7684\u6e32\u67d3\u76ee\u6807\u3002(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend &lt;source factor&gt; &lt;destination factor&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend One Zero")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u9ed8\u8ba4\u6e32\u67d3\u76ee\u6807\u7684\u6df7\u5408\u3002\u8bbe\u7f6e RGBA \u503c\u7684\u6df7\u5408\u7cfb\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend &lt;render target&gt; &lt;source factor&gt; &lt;destination factor&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend 1 One Zero")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u4e0a\uff0c\u4f46\u9488\u5bf9\u7ed9\u5b9a\u7684\u6e32\u67d3\u76ee\u6807\u3002(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend &lt;source factor RGB&gt; &lt;destination factor RGB&gt;, &lt;source factor alpha&gt; &lt;destination factor alpha&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend One Zero, Zero One")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u9ed8\u8ba4\u6e32\u67d3\u76ee\u6807\u7684\u6df7\u5408\u3002\u4e3a RGB \u548c Alpha \u503c\u8bbe\u7f6e\u5355\u72ec\u7684\u6df7\u5408\u7cfb\u6570\u3002(2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend &lt;render target&gt; &lt;source factor RGB&gt; &lt;destination factor RGB&gt;, &lt;source factor alpha&gt; &lt;destination factor alpha&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Blend 1 One Zero, Zero One")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u4e0a\uff0c\u4f46\u9488\u5bf9\u7ed9\u5b9a\u7684\u6e32\u67d3\u76ee\u6807\u3002(1) (2)")))),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," "),(0,l.kt)("p",null,"1.\u4efb\u4f55\u6307\u5b9a\u6e32\u67d3\u76ee\u6807\u7684\u7b7e\u540d\u90fd\u9700\u8981 OpenGL 4.0+\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"GL_ARB_draw_buffers_blend")," \u6216 OpenGL ES 3.2\u3002 2.\u5355\u72ec\u7684 RGB \u548c Alpha \u6df7\u5408\u4e0e",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-blend-op"},"\u9ad8\u7ea7 OpenGL \u6df7\u5408\u64cd\u4f5c"),"\u4e0d\u517c\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u6709\u6548\u53c2\u6570\u503c"},"\u6709\u6548\u53c2\u6570\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u503c")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"render target")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6574\u6570\uff0c\u8303\u56f4 0 \u5230 7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e32\u67d3\u76ee\u6807\u7d22\u5f15\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Off")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u6df7\u5408\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"factor")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"One")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8f93\u5165\u7684\u503c\u662f one\u3002\u8be5\u503c\u7528\u4e8e\u4f7f\u7528\u6e90\u6216\u76ee\u6807\u7684\u989c\u8272\u7684\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"Zero")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u8f93\u5165\u7684\u503c\u662f zero\u3002\u8be5\u503c\u7528\u4e8e\u5220\u9664\u6e90\u6216\u76ee\u6807\u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"SrcColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\u6e90\u989c\u8272\u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"SrcAlpha")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\u6e90 Alpha \u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"DstColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\u5e27\u7f13\u51b2\u533a\u7684\u6e90\u989c\u8272\u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"DstAlpha")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\u5e27\u7f13\u51b2\u533a\u7684\u6e90 Alpha \u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"OneMinusSrcColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\uff081 - \u6e90\u989c\u8272\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"OneMinusSrcAlpha")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\uff081 - \u6e90 Alpha\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"OneMinusDstColor")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\uff081 - \u76ee\u6807\u989c\u8272\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("inlineCode",{parentName:"td"},"OneMinusDstAlpha")),(0,l.kt)("td",{parentName:"tr",align:null},"GPU \u5c06\u6b64\u8f93\u5165\u7684\u503c\u4e58\u4ee5\uff081 - \u76ee\u6807 Alpha\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u5e38\u89c1\u6df7\u5408\u7c7b\u578b-blend-type"},"\u5e38\u89c1\u6df7\u5408\u7c7b\u578b (Blend Type)"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6700\u5e38\u89c1\u7684\u6df7\u5408\u7c7b\u578b\u7684\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Blend SrcAlpha OneMinusSrcAlpha // \u4f20\u7edf\u900f\u660e\u5ea6\nBlend One OneMinusSrcAlpha // \u9884\u4e58\u900f\u660e\u5ea6\nBlend One One // \u52a0\u6cd5\nBlend OneMinusDstColor One // \u8f6f\u52a0\u6cd5\nBlend DstColor Zero // \u4e58\u6cd5\nBlend DstColor SrcColor // 2x \u4e58\u6cd5\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Examples/CommandExample"\n{\n    SubShader\n    {\n         // \u6b64\u5904\u662f\u5b9a\u4e49\u5b50\u7740\u8272\u5668\u7684\u4ee3\u7801\u7684\u5176\u4f59\u90e8\u5206\u3002\n\n        Pass\n        {    \n              // \u4e3a\u6b64\u901a\u9053\u542f\u7528\u5e38\u89c4 Alpha \u6df7\u5408\n      Blend SrcAlpha OneMinusSrcAlpha\n            \n              // \u6b64\u5904\u662f\u5b9a\u4e49\u901a\u9053\u7684\u4ee3\u7801\u7684\u5176\u4f59\u90e8\u5206\u3002\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\u6b64\u793a\u4f8b\u4ee3\u7801\u6f14\u793a\u5728 SubShader \u4ee3\u7801\u5757\u4e2d\u4f7f\u7528\u6b64\u547d\u4ee4\u7684\u8bed\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Examples/CommandExample"\n{\n    SubShader\n    {\n         // \u4e3a\u6b64\u5b50\u7740\u8272\u5668\u542f\u7528\u5e38\u89c4 Alpha \u6df7\u5408\n         Blend SrcAlpha OneMinusSrcAlpha\n\n         // \u6b64\u5904\u662f\u5b9a\u4e49\u5b50\u7740\u8272\u5668\u7684\u4ee3\u7801\u7684\u5176\u4f59\u90e8\u5206\u3002\n\n        Pass\n        {    \n              // \u6b64\u5904\u662f\u5b9a\u4e49\u901a\u9053\u7684\u4ee3\u7801\u7684\u5176\u4f59\u90e8\u5206\u3002\n        }\n    }\n}\n')))}s.isMDXComponent=!0}}]);