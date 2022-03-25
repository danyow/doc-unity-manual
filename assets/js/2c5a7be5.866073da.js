"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39750],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?t.createElement(f,l(l({ref:n},d),{},{components:a})):t.createElement(f,l({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16185:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"SL-ShaderPerformance",title:"\u4f18\u5316\u7740\u8272\u5668\u8fd0\u884c\u65f6\u6027\u80fd",slug:"/shader-performance-debugging/sl-shader-performance"},p="\u4f18\u5316\u7740\u8272\u5668\u8fd0\u884c\u65f6\u6027\u80fd",s={unversionedId:"graphics/shaders/shader-performance-debugging/SL-ShaderPerformance",id:"graphics/shaders/shader-performance-debugging/SL-ShaderPerformance",title:"\u4f18\u5316\u7740\u8272\u5668\u8fd0\u884c\u65f6\u6027\u80fd",description:"\u4e0d\u540c\u7684\u5e73\u53f0\u5177\u6709\u622a\u7136\u4e0d\u540c\u7684\u6027\u80fd\uff1b\u4e0e\u4f4e\u7aef\u79fb\u52a8\u7aef GPU \u76f8\u6bd4\uff0c\u9ad8\u7aef PC GPU \u5728\u56fe\u5f62\u548c\u7740\u8272\u5668\u65b9\u9762\u7684\u5904\u7406\u80fd\u529b\u8981\u9ad8\u5f97\u591a\u3002\u5373\u4f7f\u5728\u5355\u4e00\u5e73\u53f0\u4e0a\u4e5f\u662f\u5982\u6b64\uff1b\u5feb\u901f\u7684 GPU \u6bd4\u6162\u901f\u7684\u96c6\u6210 GPU \u5feb\u51e0\u5341\u500d\u3002",source:"@site/docs/graphics/shaders/shader-performance-debugging/sl-shader-performance.md",sourceDirName:"graphics/shaders/shader-performance-debugging",slug:"/shader-performance-debugging/sl-shader-performance",permalink:"/doc-unity-manual/docs/shader-performance-debugging/sl-shader-performance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-performance-debugging/sl-shader-performance.md",tags:[],version:"current",frontMatter:{id:"SL-ShaderPerformance",title:"\u4f18\u5316\u7740\u8272\u5668\u8fd0\u884c\u65f6\u6027\u80fd",slug:"/shader-performance-debugging/sl-shader-performance"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Visual Studio \u8c03\u8bd5\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/shader-performance-debugging/sl-debugging-d3d11shaders-with-vs"},next:{title:"\u7f16\u5199\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/shader-writing"}},d={},u=[{value:"\u4ec5\u6267\u884c\u6240\u9700\u7684\u8ba1\u7b97",id:"\u4ec5\u6267\u884c\u6240\u9700\u7684\u8ba1\u7b97",level:2},{value:"\u8ba1\u7b97\u7684\u7cbe\u5ea6",id:"\u8ba1\u7b97\u7684\u7cbe\u5ea6",level:2},{value:"Complex mathematical operations",id:"complex-mathematical-operations",level:2},{value:"\u4f18\u5316\u7684\u8868\u9762\u7740\u8272\u5668",id:"\u4f18\u5316\u7684\u8868\u9762\u7740\u8272\u5668",level:2},{value:"Alpha \u6d4b\u8bd5",id:"alpha-\u6d4b\u8bd5",level:2},{value:"\u989c\u8272\u906e\u7f69 (Color Mask)",id:"\u989c\u8272\u906e\u7f69-color-mask",level:2}],c={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f18\u5316\u7740\u8272\u5668\u8fd0\u884c\u65f6\u6027\u80fd"},"\u4f18\u5316\u7740\u8272\u5668\u8fd0\u884c\u65f6\u6027\u80fd"),(0,i.kt)("p",null,"\u4e0d\u540c\u7684\u5e73\u53f0\u5177\u6709\u622a\u7136\u4e0d\u540c\u7684\u6027\u80fd\uff1b\u4e0e\u4f4e\u7aef\u79fb\u52a8\u7aef GPU \u76f8\u6bd4\uff0c\u9ad8\u7aef PC GPU \u5728\u56fe\u5f62\u548c\u7740\u8272\u5668\u65b9\u9762\u7684\u5904\u7406\u80fd\u529b\u8981\u9ad8\u5f97\u591a\u3002\u5373\u4f7f\u5728\u5355\u4e00\u5e73\u53f0\u4e0a\u4e5f\u662f\u5982\u6b64\uff1b\u5feb\u901f\u7684 GPU \u6bd4\u6162\u901f\u7684\u96c6\u6210 GPU \u5feb\u51e0\u5341\u500d\u3002"),(0,i.kt)("p",null,"GPU performance on mobile platforms and low-end PCs is likely to be much lower than on your development machine. It\u2019s recommended that you manually optimize your shaders to reduce calculations and texture reads, in order to get good performance across low-end GPU machines. For example, some built-in Shader objects have \u201cmobile\u201d equivalents that are much faster, but have some limitations or approximations."),(0,i.kt)("p",null,"This page contains information on optimizing your shaders for runtime performance."),(0,i.kt)("h2",{id:"\u4ec5\u6267\u884c\u6240\u9700\u7684\u8ba1\u7b97"},"\u4ec5\u6267\u884c\u6240\u9700\u7684\u8ba1\u7b97"),(0,i.kt)("p",null,"\u7740\u8272\u5668\u4ee3\u7801\u9700\u8981\u6267\u884c\u7684\u8ba1\u7b97\u548c\u5904\u7406\u8d8a\u591a\uff0c\u5b83\u5bf9\u6e38\u620f\u6027\u80fd\u7684\u5f71\u54cd\u5c31\u8d8a\u5927\u3002\u4f8b\u5982\uff0c\u652f\u6301\u6bcf\u79cd\u6750\u8d28\u7684\u989c\u8272\u53ef\u4ee5\u4f7f\u7740\u8272\u5668\u66f4\u52a0\u7075\u6d3b\uff0c\u4f46\u5982\u679c\u59cb\u7ec8\u5c06\u8be5\u989c\u8272\u8bbe\u7f6e\u4e3a\u767d\u8272\uff0c\u5219\u4f1a\u5bf9\u5c4f\u5e55\u4e0a\u6e32\u67d3\u7684\u6bcf\u4e2a\u9876\u70b9\u6216\u50cf\u7d20\u6267\u884c\u65e0\u7528\u7684\u8ba1\u7b97\u3002"),(0,i.kt)("p",null,"\u8ba1\u7b97\u7684\u9891\u7387\u4e5f\u4f1a\u5f71\u54cd\u6e38\u620f\u7684\u6027\u80fd\u3002\u901a\u5e38\uff0c\u4e0e\u9876\u70b9\u6570\uff08\u9876\u70b9\u7740\u8272\u5668\u6267\u884c\u6b21\u6570\uff09\u76f8\u6bd4\uff0c\u6e32\u67d3\u7684\u50cf\u7d20\u6570\u4f1a\u66f4\u591a\uff08\u56e0\u6b64\u50cf\u7d20\u7740\u8272\u5668\u6267\u884c\u6b21\u6570\u4e5f\u66f4\u591a\uff09\uff0c\u800c\u6e32\u67d3\u7684\u9876\u70b9\u6570\u6bd4\u6e32\u67d3\u7684\u5bf9\u8c61\u66f4\u591a\u3002\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u5c06\u8ba1\u7b97\u4ece\u50cf\u7d20\u7740\u8272\u5668\u4ee3\u7801\u79fb\u52a8\u5230\u9876\u70b9\u7740\u8272\u5668\u4ee3\u7801\u4e2d\uff0c\u6216\u8005\u5c06\u5b83\u4eec\u5b8c\u5168\u79fb\u51fa\u7740\u8272\u5668\u5e76\u5728\u811a\u672c\u4e2d\u8bbe\u7f6e\u503c\u3002"),(0,i.kt)("h2",{id:"\u8ba1\u7b97\u7684\u7cbe\u5ea6"},"\u8ba1\u7b97\u7684\u7cbe\u5ea6"),(0,i.kt)("p",null,"\u7528 Cg/HLSL \u7f16\u5199\u7740\u8272\u5668\u65f6\uff0c\u6709\u4e09\u79cd\u57fa\u672c\u6570\u5b57\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed"),"\uff08\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-shader-programs/sl-data-types-and-precision"},"\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6"),"\uff09\u3002"),(0,i.kt)("p",null,"For good performance, always use the lowest precision that is possible. This is especially important on lower-end hardware. Good rules of thumb are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e16\u754c\u7a7a\u95f4\u4f4d\u7f6e\u548c\u7eb9\u7406\u5750\u6807\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," \u7cbe\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u60c5\u51b5\uff08\u77e2\u91cf\u3001HDR \u989c\u8272\u7b49\uff09\uff0c\u8bf7\u9996\u5148\u5c1d\u8bd5 ",(0,i.kt)("inlineCode",{parentName:"li"},"half")," \u7cbe\u5ea6\u3002\u4ec5\u5728\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b\u518d\u63d0\u9ad8\u7cbe\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u5bf9\u7eb9\u7406\u6570\u636e\u8fdb\u884c\u975e\u5e38\u7b80\u5355\u7684\u8fd0\u7b97\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"fixed")," \u7cbe\u5ea6\u3002")),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5177\u4f53\u5e94\u8be5\u4f7f\u7528\u54ea\u79cd\u6570\u5b57\u7c7b\u578b\u53d6\u51b3\u4e8e\u5e73\u53f0\u548c GPU\u3002\u4e00\u822c\u6765\u8bf4\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u65b0\u6b3e\u7684\u684c\u9762\u7aef GPU \u5c06\u59cb\u7ec8\u4ee5\u5b8c\u6574 ",(0,i.kt)("inlineCode",{parentName:"li"},"float")," \u7cbe\u5ea6\u8fdb\u884c\u6240\u6709\u8ba1\u7b97\uff0c\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"li"},"float/half/fixed")," \u6700\u7ec8\u4ea7\u751f\u5b8c\u5168\u76f8\u540c\u7684\u7ed3\u679c\u3002\u8fd9\u53ef\u80fd\u4f1a\u4f7f\u6d4b\u8bd5\u53d8\u5f97\u56f0\u96be\uff0c\u56e0\u4e3a\u66f4\u96be\u4ee5\u786e\u5b9a half/fixed \u7cbe\u5ea6\u662f\u5426\u771f\u6b63\u591f\u7528\uff0c\u56e0\u6b64\u8bf7\u59cb\u7ec8\u5728\u76ee\u6807\u8bbe\u5907\u4e0a\u6d4b\u8bd5\u7740\u8272\u5668\u4ee5\u83b7\u5f97\u51c6\u786e\u7684\u7ed3\u679c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u7aef GPU \u5b9e\u9645\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"half")," \u7cbe\u5ea6\u3002\u8fd9\u79cd\u7cbe\u5ea6\u901a\u5e38\u901f\u5ea6\u66f4\u5feb\uff0c\u5e76\u4e14\u4f7f\u7528\u66f4\u5c11\u7684\u6027\u80fd\u6765\u6267\u884c\u8ba1\u7b97\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fixed")," \u7cbe\u5ea6\u901a\u5e38\u4ec5\u5bf9\u4e8e\u8f83\u65e7\u7684\u79fb\u52a8\u7aef GPU \u6709\u7528\u3002\u5927\u90e8\u5206\u65b0\u6b3e GPU\uff08\u53ef\u8fd0\u884c OpenGL ES 3 \u6216 Metal \u7684 GPU\uff09\u5728\u5185\u90e8\u4ee5\u76f8\u540c\u65b9\u5f0f\u6765\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"fixed")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"half")," \u7cbe\u5ea6\u3002")),(0,i.kt)("p",null,"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-shader-programs/sl-data-types-and-precision"},"\u6570\u636e\u7c7b\u578b\u548c\u7cbe\u5ea6"),"\u3002"),(0,i.kt)("h2",{id:"complex-mathematical-operations"},"Complex mathematical operations"),(0,i.kt)("p",null,"Transcendental mathematical functions (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"pow"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"exp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"log"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cos"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tan"),") are quite resource-intensive, so avoid using them where possible on low-end hardware. Consider using lookup textures as an alternative to complex math calculations if applicable."),(0,i.kt)("p",null,"\u907f\u514d\u7f16\u5199\u81ea\u5df1\u7684\u8fd0\u7b97\uff08\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"normalize"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"dot"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"inversesqrt"),"\uff09\u3002Unity \u7684\u5185\u7f6e\u9009\u9879\u786e\u4fdd\u9a71\u52a8\u7a0b\u5e8f\u53ef\u4ee5\u751f\u6210\u597d\u5f97\u591a\u7684\u4ee3\u7801\u3002\u8bf7\u8bb0\u4f4f\uff0cAlpha \u6d4b\u8bd5 (",(0,i.kt)("inlineCode",{parentName:"p"},"discard"),") \u8fd0\u7b97\u901a\u5e38\u4f1a\u4f7f\u7247\u5143\u7740\u8272\u5668\u53d8\u6162\u3002"),(0,i.kt)("h2",{id:"\u4f18\u5316\u7684\u8868\u9762\u7740\u8272\u5668"},"\u4f18\u5316\u7684\u8868\u9762\u7740\u8272\u5668"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders"},"\u8868\u9762\u7740\u8272\u5668"),"\u975e\u5e38\u9002\u5408\u7f16\u5199\u4e0e\u5149\u7167\u4ea4\u4e92\u7684\u7740\u8272\u5668\u3002\u4f46\u662f\uff0c\u5b83\u4eec\u7684\u9ed8\u8ba4\u9009\u9879\u5df2\u8c03\u6574\u4e3a\u6db5\u76d6\u5927\u91cf\u7684\u4e00\u822c\u60c5\u51b5\u3002\u53ef\u9488\u5bf9\u7279\u5b9a\u60c5\u51b5\u8c03\u6574\u8fd9\u4e9b\u9009\u9879\u4ee5\u4f7f\u7740\u8272\u5668\u8fd0\u884c\u901f\u5ea6\u66f4\u5feb\uff0c\u6216\u81f3\u5c11\u8ba9\u7740\u8272\u5668\u53d8\u5f97\u66f4\u5c0f\u5de7\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u89c6\u56fe\u65b9\u5411\uff08\u5373\u955c\u9762\u53cd\u5c04\uff09\u7684\u7740\u8272\u5668\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"approxview")," \u6307\u4ee4\u4f7f\u89c6\u56fe\u65b9\u5411\u6309\u7167\u9876\u70b9\uff08\u800c\u4e0d\u662f\u6309\u50cf\u7d20\uff09\u8fdb\u884c\u6807\u51c6\u5316\u3002\u8fd9\u662f\u8fd1\u4f3c\u503c\uff0c\u4f46\u901a\u5e38\u8db3\u591f\u597d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u955c\u9762\u53cd\u5c04\u7740\u8272\u5668\u7c7b\u578b\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"halfasview")," \u901f\u5ea6\u66f4\u5feb\u3002\u534a\u77e2\u91cf\uff08\u5149\u7167\u65b9\u5411\u548c\u89c6\u56fe\u77e2\u91cf\u4e4b\u95f4\uff09\u6309\u7167\u9876\u70b9\u8fdb\u884c\u8ba1\u7b97\u548c\u6807\u51c6\u5316\uff0c\u5e76\u4e14",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-lighting"},"\u5149\u7167\u51fd\u6570"),"\u63a5\u53d7\u534a\u77e2\u91cf\u4f5c\u4e3a\u53c2\u6570\uff0c\u800c\u4e0d\u662f\u89c6\u56fe\u77e2\u91cf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"noforwardadd")," \u4f7f\u7740\u8272\u5668\u4ec5\u5b8c\u5168\u652f\u6301\u524d\u5411\u6e32\u67d3\u4e2d\u7684\u5355\u65b9\u5411\u5149\u3002\u5176\u4f59\u7684\u5149\u6e90\u4ecd\u7136\u53ef\u63d0\u4f9b\u6bcf\u9876\u70b9\u5149\u6e90\u6216\u7403\u8c10\u51fd\u6570\u5149\u6e90\u7684\u6548\u679c\u3002\u8fd9\u6837\u53ef\u4ee5\u4f7f\u7740\u8272\u5668\u66f4\u5c0f\u5e76\u786e\u4fdd\u5b83\u59cb\u7ec8\u5728\u4e00\u4e2a\u901a\u9053\u4e2d\u6e32\u67d3\uff0c\u5373\u4f7f\u5b58\u5728\u591a\u4e2a\u5149\u6e90\u4e5f\u662f\u5982\u6b64\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"noambient")," \u5728\u7740\u8272\u5668\u4e2d\u7981\u7528\u73af\u5883\u5149\u7167\u548c\u7403\u8c10\u51fd\u6570\u5149\u6e90\u3002\u8fd9\u6837\u53ef\u4ee5\u7a0d\u7a0d\u63d0\u9ad8\u6027\u80fd\u3002")),(0,i.kt)("h2",{id:"alpha-\u6d4b\u8bd5"},"Alpha \u6d4b\u8bd5"),(0,i.kt)("p",null,"\u56fa\u5b9a\u51fd\u6570 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-shaderlab-legacy/sl-alpha-test"},"AlphaTest"),"\uff08\u6216\u8005\u5176\u53ef\u7f16\u7a0b\u7684\u7b49\u6548\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"clip()"),"\uff09\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u5177\u6709\u4e0d\u540c\u7684\u6027\u80fd\u7279\u5f81\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\uff0c\u5728\u4f7f\u7528\u8be5\u51fd\u6570\u6765\u79fb\u9664\u5927\u591a\u6570\u5e73\u53f0\u4e0a\u7684\u5b8c\u5168\u900f\u660e\u50cf\u7d20\u65f6\uff0c\u53ef\u83b7\u5f97\u5c11\u91cf\u4f18\u52bf\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f46\u662f\uff0c\u5728 iOS \u548c\u67d0\u4e9b Android \u8bbe\u5907\u7684 PowerVR GPU \u4e0a\uff0cAlpha \u6d4b\u8bd5\u662f\u8d44\u6e90\u5bc6\u96c6\u578b\u4efb\u52a1\u3002\u4e0d\u8981\u8bd5\u56fe\u5728\u8fd9\u4e9b\u5e73\u53f0\u4e0a\u4f7f\u7528\u8fd9\u79cd\u6d4b\u8bd5\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5bfc\u81f4\u6e38\u620f\u8fd0\u884c\u901f\u5ea6\u6bd4\u5e73\u5e38\u6162\u3002")),(0,i.kt)("h2",{id:"\u989c\u8272\u906e\u7f69-color-mask"},"\u989c\u8272\u906e\u7f69 (Color Mask)"),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u5e73\u53f0\uff08\u4e3b\u8981\u662f iOS \u548c Android \u8bbe\u5907\u7684\u79fb\u52a8\u7aef GPU\uff09\u4e0a\uff0c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-pass"},"ColorMask")," \u7701\u7565\u4e00\u4e9b\u901a\u9053\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"ColorMask RGB"),"\uff09\u53ef\u80fd\u662f\u8d44\u6e90\u5bc6\u96c6\u578b\u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u9664\u975e\u7edd\u5bf9\u9700\u8981\uff0c\u5426\u5219\u8bf7\u4e0d\u8981\u4f7f\u7528\u3002"))}m.isMDXComponent=!0}}]);