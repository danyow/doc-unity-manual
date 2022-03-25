"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21910],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||p;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81718:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],i={id:"DebuggingShadersWithPIX",title:"\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX 12 \u7740\u8272\u5668",slug:"/shader-performance-debugging/debugging-shaders-with-pix"},s="\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX 12 \u7740\u8272\u5668",u={unversionedId:"graphics/shaders/shader-performance-debugging/DebuggingShadersWithPIX",id:"graphics/shaders/shader-performance-debugging/DebuggingShadersWithPIX",title:"\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX 12 \u7740\u8272\u5668",description:"PIX \u662f Microsoft \u4e3a Windows \u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684\u6027\u80fd\u8c03\u4f18\u548c\u8c03\u8bd5\u5de5\u5177\u3002\u6b64\u5de5\u5177\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7528\u4e8e\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u6a21\u5f0f\uff0c\u5e76\u5305\u62ec\u4ece\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6355\u83b7 DirectX \u9879\u76ee\u7684\u5e27\u4ee5\u8fdb\u884c\u8c03\u8bd5\u7684\u529f\u80fd\u3002",source:"@site/docs/graphics/shaders/shader-performance-debugging/debugging-shaders-with-pix.md",sourceDirName:"graphics/shaders/shader-performance-debugging",slug:"/shader-performance-debugging/debugging-shaders-with-pix",permalink:"/doc-unity-manual/docs/shader-performance-debugging/debugging-shaders-with-pix",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-performance-debugging/debugging-shaders-with-pix.md",tags:[],version:"current",frontMatter:{id:"DebuggingShadersWithPIX",title:"\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX 12 \u7740\u8272\u5668",slug:"/shader-performance-debugging/debugging-shaders-with-pix"},sidebar:"tutorialSidebar",previous:{title:"Understanding shader performance",permalink:"/doc-unity-manual/docs/shader-performance-debugging"},next:{title:"\u4f7f\u7528 Visual Studio \u8c03\u8bd5\u7740\u8272\u5668",permalink:"/doc-unity-manual/docs/shader-performance-debugging/sl-debugging-d3d11shaders-with-vs"}},l={},c=[{value:"\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX \u7740\u8272\u5668",id:"\u4f7f\u7528-pix-\u6765\u8c03\u8bd5-directx-\u7740\u8272\u5668",level:2},{value:"\u4f7f\u7528\u652f\u6301\u8c03\u8bd5\u7684\u7740\u8272\u5668\u6765\u521b\u5efa\u9879\u76ee",id:"\u4f7f\u7528\u652f\u6301\u8c03\u8bd5\u7684\u7740\u8272\u5668\u6765\u521b\u5efa\u9879\u76ee",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u9879\u76ee\uff1a",id:"\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u9879\u76ee",level:4},{value:"\u4ece Windows \u72ec\u7acb\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6355\u83b7\u5e27\uff1a",id:"\u4ece-windows-\u72ec\u7acb\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6355\u83b7\u5e27",level:3}],g={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u4f7f\u7528-pix-\u6765\u8c03\u8bd5-directx-12-\u7740\u8272\u5668"},"\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX 12 \u7740\u8272\u5668"),(0,p.kt)("p",null,"PIX \u662f Microsoft \u4e3a Windows \u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684\u6027\u80fd\u8c03\u4f18\u548c\u8c03\u8bd5\u5de5\u5177\u3002\u6b64\u5de5\u5177\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7528\u4e8e\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u6a21\u5f0f\uff0c\u5e76\u5305\u62ec\u4ece\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6355\u83b7 DirectX \u9879\u76ee\u7684\u5e27\u4ee5\u8fdb\u884c\u8c03\u8bd5\u7684\u529f\u80fd\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528 PIX \u53ef\u8c03\u67e5 Windows 64\u4f4d (x86","_","64) \u72ec\u7acb\u5e73\u53f0\u6216\u901a\u7528 Windows \u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u95ee\u9898\u3002"),(0,p.kt)("p",null,"\u8981\u5b89\u88c5 PIX\uff0c",(0,p.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/pix/download/"},"\u8bf7\u4e0b\u8f7d\u5e76\u8fd0\u884c Microsoft PIX \u5b89\u88c5\u7a0b\u5e8f"),"\uff0c\u6309\u7167\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,"\u6709\u5173 PIX \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Microsoft \u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/pix/introduction/"},"PIX \u8bf4\u660e (Introduction)")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/pix/documentation/"},"PIX \u6587\u6863 (Documentation)"),"\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528-pix-\u6765\u8c03\u8bd5-directx-\u7740\u8272\u5668"},"\u4f7f\u7528 PIX \u6765\u8c03\u8bd5 DirectX \u7740\u8272\u5668"),(0,p.kt)("p",null,"\u5e94\u4f7f\u7528\u5df2\u6784\u5efa\u7684 Unity \u5e94\u7528\u7a0b\u5e8f\u7248\u672c\u6765\u6355\u83b7\u5e27\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Unity Editor \u4e2d\u8fd0\u884c\u7684\u7248\u672c\u3002\u8fd9\u662f\u56e0\u4e3a\u9700\u8981\u4ece PIX \u4e2d\u542f\u52a8\u76ee\u6807\u5e94\u7528\u7a0b\u5e8f\u6765\u624d\u80fd\u6355\u83b7 GPU \u5e27\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u5f00\u53d1\u7248\u53ef\u4e3a PIX \u6dfb\u52a0\u989d\u5916\u7684\u4fe1\u606f\uff0c\u4ece\u800c\u4f7f\u5f97\u573a\u666f\u6355\u83b7\u64cd\u4f5c\u66f4\u52a0\u5bb9\u6613\u3002"),(0,p.kt)("h3",{id:"\u4f7f\u7528\u652f\u6301\u8c03\u8bd5\u7684\u7740\u8272\u5668\u6765\u521b\u5efa\u9879\u76ee"},"\u4f7f\u7528\u652f\u6301\u8c03\u8bd5\u7684\u7740\u8272\u5668\u6765\u521b\u5efa\u9879\u76ee"),(0,p.kt)("p",null,"\u8981\u5728 PIX \u4e2d\u4f7f\u7528\u6e90\u4ee3\u7801\u8c03\u8bd5\u7740\u8272\u5668\uff0c\u5fc5\u987b\u5c06\u4ee5\u4e0b pragma \u63d2\u5165\u5230\u7740\u8272\u5668\u4ee3\u7801\u4e2d\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"#pragma enable_d3d11_debug_symbols")),(0,p.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u6f14\u7ec3\u7a0b\u5e8f\u4f7f\u7528\u4e00\u4e2a\u57fa\u672c\u793a\u4f8b\u6f14\u793a\u6574\u4e2a\u64cd\u4f5c\u8fc7\u7a0b\u3002"),(0,p.kt)("h4",{id:"\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u9879\u76ee\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Create a new Unity project (see the Hub documentation on ",(0,p.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/hub/manual/Projects.html"},"Projects"),").")),(0,p.kt)("p",null,"2.\u5728\u9876\u90e8\u83dc\u5355\u4e2d\uff0c\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Shader"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Standard Surface Shader")," \u3002\u6b64\u65f6\u5c06\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Project"),"  \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7740\u8272\u5668\u6587\u4ef6\u3002"),(0,p.kt)("p",null,"3.\u9009\u62e9\u7740\u8272\u5668\u6587\u4ef6\uff0c\u7136\u540e\u5728 Inspector \u7a97\u53e3\u4e2d\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Open")," \u3002\u6b64\u65f6\u5c06\u5728\u811a\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00\u7740\u8272\u5668\u6587\u4ef6\u3002\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"#pragma enable_d3d11_debug_symbols")," \u63d2\u5165\u5230\u7740\u8272\u5668\u4ee3\u7801\u4e2d\u7684\u5176\u4ed6 ",(0,p.kt)("inlineCode",{parentName:"p"},"#pragma")," \u884c\u4e0b\u9762\u3002"),(0,p.kt)("p",null,"4.\u521b\u5efa\u65b0\u7684\u6750\u8d28\uff08\u83dc\u5355\uff1a ",(0,p.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Material")," \uff09\u3002"),(0,p.kt)("p",null,"5.\u5728 Material Inspector \u7a97\u53e3\u4e2d\uff0c\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Shader"),"  \u4e0b\u62c9\u9009\u5355\uff0c\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Custom")," \uff0c\u7136\u540e\u9009\u62e9\u521a\u521b\u5efa\u7684\u7740\u8272\u5668\u3002"),(0,p.kt)("p",null,"6.\u521b\u5efa 3D \u7acb\u65b9\u4f53\u6e38\u620f\u5bf9\u8c61\uff08\u83dc\u5355\uff1a ",(0,p.kt)("strong",{parentName:"p"},"GameObject"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"3D Object"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Cube")," \uff09\u3002"),(0,p.kt)("p",null,"7.\u5c06\u65b0\u6750\u8d28\u5206\u914d\u7ed9\u65b0\u7684\u6e38\u620f\u5bf9\u8c61\u3002\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u5c06\u6750\u8d28\u4ece  ",(0,p.kt)("strong",{parentName:"p"},"Project"),"  \u7a97\u53e3\u62d6\u5230 3D \u7acb\u65b9\u4f53\u4e0a\u3002"),(0,p.kt)("h3",{id:"\u4ece-windows-\u72ec\u7acb\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6355\u83b7\u5e27"},"\u4ece Windows \u72ec\u7acb\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6355\u83b7\u5e27\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Go to  ",(0,p.kt)("strong",{parentName:"p"},"File"),"  ",">","  ",(0,p.kt)("strong",{parentName:"p"},"Build Settings")," , and under  ",(0,p.kt)("strong",{parentName:"p"},"Platform")," , select  ",(0,p.kt)("strong",{parentName:"p"},"Windows, Mac, Linux")," . Set the  ",(0,p.kt)("strong",{parentName:"p"},"Target Platform"),"  to  ",(0,p.kt)("strong",{parentName:"p"},"Windows")," , set the  ",(0,p.kt)("strong",{parentName:"p"},"Architecture"),"  to  ",(0,p.kt)("strong",{parentName:"p"},"Intel 64-bit")," , and click the  ",(0,p.kt)("strong",{parentName:"p"},"Development Build"),"  checkbox."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugBuildSettings.png",alt:"PIXDebugBuildSettings.png"})))),(0,p.kt)("p",null,"2.\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Build")," \u3002"),(0,p.kt)("p",null,"3.\u542f\u52a8  ",(0,p.kt)("strong",{parentName:"p"},"PIX")," \u3002"),(0,p.kt)("p",null,"4.\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Home")," \uff0c\u7136\u540e\u5355\u51fb ",(0,p.kt)("strong",{parentName:"p"},"Connect")," \u3002"),(0,p.kt)("p",null,"5.\u9009\u62e9\u8ba1\u7b97\u673a  ",(0,p.kt)("strong",{parentName:"p"},"localhost"),"  \u4ee5\u4f7f\u7528\u60a8\u7684 PC \u8fdb\u884c\u6355\u83b7\uff0c\u7136\u540e\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Connect")," \u3002"),(0,p.kt)("p",null,"6.\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Select Target Process"),"  \u5bf9\u8bdd\u6846\u4e2d\uff0c\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Launch Win32"),"  \u9009\u9879\u5361\uff0c\u7136\u540e\u4f7f\u7528  ",(0,p.kt)("strong",{parentName:"p"},"Browse"),"  \u6309\u94ae\u9009\u62e9\u5e94\u7528\u7a0b\u5e8f\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u201cWin32\u201d\u8868\u793a\u975e UWP \u5e94\u7528\u7a0b\u5e8f\uff1b\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6587\u4ef6\u5fc5\u987b\u662f 64 \u4f4d\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,p.kt)("p",null,"7.\u542f\u7528  ",(0,p.kt)("strong",{parentName:"p"},"Launch for GPU Capture")," \uff0c\u7136\u540e\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"Launch"),"  \u6309\u94ae\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugTargetProcess.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugTargetProcess.png)\n")),(0,p.kt)("p",null,"8.\u7167\u5e38\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\uff0c\u76f4\u5230\u51c6\u5907\u597d\u6355\u83b7\u5e27\u3002\u8981\u6355\u83b7\u5e27\uff0c\u8bf7\u6309\u952e\u76d8\u4e0a\u7684  ",(0,p.kt)("strong",{parentName:"p"},"Print Screen"),"  \u952e\uff0c\u6216\u5355\u51fb GPU Capture \u9762\u677f\u4e0a\u7684\u6444\u50cf\u673a\u56fe\u6807\u3002\u5728\u9762\u677f\u4e2d\u5c06\u663e\u793a\u6355\u83b7\u7684\u7f29\u7565\u56fe\u3002\u8981\u6253\u5f00\u6355\u83b7\u7ed3\u679c\uff0c\u8bf7\u5355\u51fb\u7f29\u7565\u56fe\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugGPUCapture.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugGPUCapture.png)\n")),(0,p.kt)("p",null,"9.\u8981\u5f00\u59cb\u5206\u6790\u6355\u83b7\u7ed3\u679c\uff0c\u8bf7\u5355\u51fb\u7a81\u51fa\u663e\u793a\u7684\u6587\u672c\u6216\u83dc\u5355\u680f\u4e0a\u7684\u5c0f  ",(0,p.kt)("strong",{parentName:"p"},"Play"),"  \u56fe\u6807\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugAnalysisArrow.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugAnalysisArrow.png)\n")),(0,p.kt)("p",null,"10.\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Pipeline"),"  \u9009\u9879\u5361\uff0c\u7136\u540e\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"Events"),"  \u7a97\u53e3\u5bfc\u822a\u5230\u60a8\u611f\u5174\u8da3\u7684\u7ed8\u56fe\u8c03\u7528\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugPiplineTab.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugPiplineTab.png)\n")),(0,p.kt)("p",null,"11.\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Pipeline"),"  \u9009\u9879\u5361\u7684\u4e0b\u534a\u90e8\u5206\uff0c\u4ece  ",(0,p.kt)("strong",{parentName:"p"},"OM"),"  (Output Merger) \u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u6e32\u67d3\u76ee\u6807\u4ee5\u67e5\u770b\u7ed8\u5236\u8c03\u7528\u7684\u8f93\u51fa\u3002\u5728\u8981\u8c03\u8bd5\u7684\u5bf9\u8c61\u4e0a\u9009\u62e9\u4e00\u4e2a\u50cf\u7d20\u3002\u8bf7\u6ce8\u610f\uff0c\u4e3a\u4e86\u67e5\u627e\u611f\u5174\u8da3\u7684\u7ed8\u5236\u8c03\u7528\uff0c\u4e00\u79cd\u65b9\u6cd5\u662f\u53ef\u4ee5\u53f3\u952e\u5355\u51fb\u50cf\u7d20\u4ee5\u67e5\u770b\u7ed8\u5236\u8c03\u7528\u5386\u53f2\u8bb0\u5f55\u3002"),(0,p.kt)("p",null,"12.\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Pixel Details"),"  \u9762\u677f\u4e0a\u9009\u62e9  ",(0,p.kt)("strong",{parentName:"p"},"Debug Pixel")," \u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugPixelDetails.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugPixelDetails.png)\n")),(0,p.kt)("p",null,"13.\u5728\u8c03\u8bd5\u9762\u677f\u4e0a\uff0c\u4f7f\u7528 Shader Options \u9009\u62e9\u8981\u8c03\u8bd5\u7684\u7740\u8272\u5668\u9636\u6bb5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugShaderOptions.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugShaderOptions.png)\n")),(0,p.kt)("p",null,"14.\u4f7f\u7528\u5de5\u5177\u680f\u6216\u952e\u76d8\u5feb\u6377\u952e\u9010\u6b65\u6267\u884c\u4ee3\u7801\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"![PIXDebugShaderDebugger.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/PIXDebugShaderDebugger.png)\n")),(0,p.kt)("p",null,"\u6709\u5173\u4f7f\u7528 PIX \u8c03\u8bd5\u7740\u8272\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Microsoft \u7684\u89c6\u9891\u7cfb\u5217 ",(0,p.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLeHvwXyqearWuPPxh6T03iwX-McPG5LkB"},"Windows \u4e0a\u7684 PIX (PIX on Windows)"),"\uff0c\u5c24\u5176\u662f",(0,p.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jRflMYmXv2g"},"\u7b2c 5 \u90e8\u5206 - Debug \u9009\u9879\u5361 (Part 5 - Debug Tab)"),"\u3002"),(0,p.kt)("p",null,"\u6709\u5173 PIX \u4e2d\u7684 GPU \u6355\u83b7\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Microsoft \u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/pix/gpu-captures/"},"GPU \u6355\u83b7 (GPU Captures)")," \u6587\u6863\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"2018\u201309\u201317 \u9875\u9762\u5df2\u53d1\u5e03")))}d.isMDXComponent=!0}}]);