"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87722],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14605:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"class-Shader",title:"\u7740\u8272\u5668\u8d44\u6e90",slug:"/shaders-overview/class-shader"},c="\u7740\u8272\u5668\u8d44\u6e90",p={unversionedId:"graphics/shaders/shaders-overview/class-Shader",id:"graphics/shaders/shaders-overview/class-Shader",title:"\u7740\u8272\u5668\u8d44\u6e90",description:"\u7740\u8272\u5668\u8d44\u6e90\u662f Unity \u9879\u76ee\u4e2d\u7684\u8d44\u6e90\uff0c\u5b83\u5b9a\u4e49 Shader \u5bf9\u8c61\u3002\u5b83\u662f\u4e00\u4e2a\u6269\u5c55\u540d\u4e3a .shader \u7684\u6587\u672c\u6587\u4ef6\u3002\u5b83\u5305\u542b\u7740\u8272\u5668\u4ee3\u7801\u3002",source:"@site/docs/graphics/shaders/shaders-overview/class-shader.md",sourceDirName:"graphics/shaders/shaders-overview",slug:"/shaders-overview/class-shader",permalink:"/doc-unity-manual/docs/shaders-overview/class-shader",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shaders-overview/class-shader.md",tags:[],version:"current",frontMatter:{id:"class-Shader",title:"\u7740\u8272\u5668\u8d44\u6e90",slug:"/shaders-overview/class-shader"},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/shaders-overview/class-compute-shader"},next:{title:"\u7740\u8272\u5668\u7f16\u8bd1",permalink:"/doc-unity-manual/docs/shader-compilation"}},l={},d=[{value:"\u521b\u5efa\u65b0\u7684\u7740\u8272\u5668\u8d44\u6e90",id:"\u521b\u5efa\u65b0\u7684\u7740\u8272\u5668\u8d44\u6e90",level:2},{value:"Inspector \u53c2\u8003",id:"inspector-\u53c2\u8003",level:3},{value:"Import Settings",id:"import-settings",level:3},{value:"Imported object",id:"imported-object",level:3}],u={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7740\u8272\u5668\u8d44\u6e90"},"\u7740\u8272\u5668\u8d44\u6e90"),(0,o.kt)("p",null,"\u7740\u8272\u5668\u8d44\u6e90\u662f Unity \u9879\u76ee\u4e2d\u7684\u8d44\u6e90\uff0c\u5b83\u5b9a\u4e49 ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shaders-overview/shader-objects"},"Shader \u5bf9\u8c61"),"\u3002\u5b83\u662f\u4e00\u4e2a\u6269\u5c55\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},".shader")," \u7684\u6587\u672c\u6587\u4ef6\u3002\u5b83\u5305\u542b",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-writing"},"\u7740\u8272\u5668\u4ee3\u7801"),"\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u65b0\u7684\u7740\u8272\u5668\u8d44\u6e90"},"\u521b\u5efa\u65b0\u7684\u7740\u8272\u5668\u8d44\u6e90"),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u7740\u8272\u5668\u8d44\u6e90\uff0c\u8bf7\u4f7f\u7528\u4e3b\u83dc\u5355\u6216  ",(0,o.kt)("strong",{parentName:"p"},"Project View"),"  \u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u7684  ",(0,o.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Shader")," \u3002"),(0,o.kt)("h3",{id:"inspector-\u53c2\u8003"},"Inspector \u53c2\u8003"),(0,o.kt)("p",null,"\u5728 Unity \u9879\u76ee\u4e2d\u9009\u62e9\u7740\u8272\u5668\u8d44\u6e90\u65f6\uff0cInspector \u4f1a\u663e\u793a\u6709\u5173\u5b83\u5b9a\u4e49\u7684 Shader \u5bf9\u8c61\u7684\u57fa\u672c\u4fe1\u606f\u3002\u5b83\u8fd8\u63d0\u4f9b\u7528\u4e8e\u7f16\u8bd1\u548c\u68c0\u67e5\u5df2\u7f16\u8bd1\u4ee3\u7801\u7684\u63a7\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Inspector-Shader.png",alt:"\u7740\u8272\u5668\u68c0\u89c6\u9762\u677f (Shader Inspector)\u3002"})),(0,o.kt)("p",null,"\u7740\u8272\u5668\u68c0\u89c6\u9762\u677f (Shader Inspector)\u3002"),(0,o.kt)("h3",{id:"import-settings"},"Import Settings"),(0,o.kt)("p",null,"Inspector \u7684 Import settings \u90e8\u5206\u7528\u4e8e\u8bbe\u7f6e\u7740\u8272\u5668\u8d44\u6e90\u7684\u9ed8\u8ba4\u7eb9\u7406\u3002\u6bcf\u5f53\u4f7f\u7528\u6b64\u7740\u8272\u5668\u521b\u5efa\u65b0",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/materials/class-material"},"\u6750\u8d28"),"\u65f6\uff0c\u90fd\u4f1a\u81ea\u52a8\u5206\u914d\u8fd9\u4e9b\u7eb9\u7406\u3002"),(0,o.kt)("h3",{id:"imported-object"},"Imported object"),(0,o.kt)("p",null,"Inspector \u7684 Imported object \u7528\u4e8e\u67e5\u770b\u548c\u7f16\u8f91\u4e0e Shader \u5bf9\u8c61\u672c\u8eab\u76f8\u5173\u7684\u8bbe\u7f6e\uff0c\u4ee5\u53ca\u7740\u8272\u5668\u7f16\u8bd1\u5668\u5bf9\u5b83\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Inspector-ShaderCompilePopup.png",alt:"\u7740\u8272\u5668\u7f16\u8bd1\u5f39\u51fa\u83dc\u5355\u3002"})),(0,o.kt)("p",null,"\u7740\u8272\u5668\u7f16\u8bd1\u5f39\u51fa\u83dc\u5355\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders"},"\u8868\u9762\u7740\u8272\u5668"),"\uff0c ",(0,o.kt)("strong",{parentName:"p"},"Show generated code"),"  \u6309\u94ae\u663e\u793a Unity \u4ece\u60a8\u7684\u7b80\u5316\u6e90\u6587\u4ef6\u751f\u6210\u7684\u4ee3\u7801\u3002\u5982\u679c\u8981\u81ea\u5b9a\u4e49\u751f\u6210\u7684\u4ee3\u7801\uff0c\u53ea\u9700\u5c06\u5176\u590d\u5236\u5e76\u7c98\u8d34\u5230\u7740\u8272\u5668\u6e90\u6587\u4ef6\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528  ",(0,o.kt)("strong",{parentName:"p"},"Compile and show code"),"  \u5f39\u51fa\u83dc\u5355\u53ef\u4ee5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u9009\u5b9a\u7684\u56fe\u5f62 API \u624b\u52a8\u7f16\u8bd1\u6240\u6709\u7740\u8272\u5668\u53d8\u4f53\u3002\u5728 Unity \u7f16\u8f91\u5668\u4e2d\uff0c\u7740\u8272\u5668\u5728\u6784\u5efa\u4e4b\u524d\u4e0d\u4f1a\u4e3a\u6240\u6709\u56fe\u5f62 API \u7f16\u8bd1\u6240\u6709\u7740\u8272\u5668\u53d8\u4f53\u3002\u53ef\u4ee5\u624b\u52a8\u5f3a\u5236\u6267\u884c\u6b64\u64cd\u4f5c\u4ee5\u68c0\u67e5\u9519\u8bef\u3002\u6709\u5173\u7740\u8272\u5668\u7f16\u8bd1\u5668\u7684\u4f5c\u7528\u548c\u65f6\u95f4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/shader-compilation"},"\u7740\u8272\u5668\u7f16\u8bd1")),(0,o.kt)("li",{parentName:"ul"},"\u9762\u5411\u6240\u9009\u5e73\u53f0\u68c0\u67e5\u5df2\u7f16\u8bd1\u7684\u7740\u8272\u5668\u4ee3\u7801\u3002\u6b64\u529f\u80fd\u5728\u4f18\u5316\u7740\u8272\u5668\u6027\u80fd\u65f6\u975e\u5e38\u6709\u7528\uff1b\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u60a8\u4f1a\u60f3\u77e5\u9053\u751f\u6210\u4e86\u591a\u5c11\u4f4e\u7ea7\u6307\u4ee4\u3002\u53ef\u4ee5\u5c06\u751f\u6210\u7684\u4ee3\u7801\u7c98\u8d34\u5230 GPU \u7740\u8272\u5668\u6027\u80fd\u5206\u6790\u5de5\u5177\uff08\u5982 ",(0,o.kt)("a",{parentName:"li",href:"http://developer.amd.com/tools-and-sdks/graphics-development/gpu-shaderanalyzer/"},"AMD GPU ShaderAnalyzer")," \u6216 ",(0,o.kt)("a",{parentName:"li",href:"https://www.imaginationtech.com/developers/powervr-sdk-tools/pvrshadereditor/"},"PVRShaderEditor"),"\uff09\u4e2d\u3002")),(0,o.kt)("p",null,"The  ",(0,o.kt)("strong",{parentName:"p"},"Preprocess Only"),"  checkbox lets you view the preprocessed source for that shader asset."))}h.isMDXComponent=!0}}]);