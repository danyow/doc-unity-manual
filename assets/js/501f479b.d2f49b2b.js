"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82746],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(o,".").concat(m)]||k[m]||u[m]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"CacheServer",title:"\u7f13\u5b58\u670d\u52a1\u5668",slug:"/asset-server/cache-server"},o="\u7f13\u5b58\u670d\u52a1\u5668",s={unversionedId:"legacy-topics/asset-server/CacheServer",id:"legacy-topics/asset-server/CacheServer",title:"\u7f13\u5b58\u670d\u52a1\u5668",description:"\u91cd\u8981\u4fe1\u606f \uff1a\u7f13\u5b58\u670d\u52a1\u5668 (Cache Server) \u4ec5\u652f\u6301\u8d44\u6e90\u5bfc\u5165\u7ba1\u7ebf (Asset Import Pipeline) \u7248\u672c 1\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u8d44\u6e90\u5bfc\u5165\u7ba1\u7ebf\u7248\u672c 2\uff0c\u8bf7\u6539\u7528 Unity Accelerator\u3002",source:"@site/docs/legacy-topics/asset-server/cache-server.md",sourceDirName:"legacy-topics/asset-server",slug:"/asset-server/cache-server",permalink:"/doc-unity-manual/docs/asset-server/cache-server",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/legacy-topics/asset-server/cache-server.md",tags:[],version:"current",frontMatter:{id:"CacheServer",title:"\u7f13\u5b58\u670d\u52a1\u5668",slug:"/asset-server/cache-server"},sidebar:"tutorialSidebar",previous:{title:"Asset Server\uff08\u56e2\u961f\u8bb8\u53ef\u8bc1\uff09",permalink:"/doc-unity-manual/docs/asset-server"},next:{title:"\u8bbe\u7f6e Asset Server",permalink:"/doc-unity-manual/docs/asset-server/settingupthe-asset-server"}},c={},u=[{value:"\u542f\u7528\u7f13\u5b58\u670d\u52a1\u5668",id:"\u542f\u7528\u7f13\u5b58\u670d\u52a1\u5668",level:2},{value:"\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8bbe\u7f6e <strong>\u7f13\u5b58\u670d\u52a1\u5668</strong>",id:"\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8bbe\u7f6e-\u7f13\u5b58\u670d\u52a1\u5668",level:2},{value:"\u5c06\u7f13\u5b58\u670d\u52a1\u5668\u5b89\u88c5\u4e3a\u670d\u52a1",id:"\u5c06\u7f13\u5b58\u670d\u52a1\u5668\u5b89\u88c5\u4e3a\u670d\u52a1",level:2},{value:"\u65b0\u7248\u548c\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668",id:"\u65b0\u7248\u548c\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668",level:2},{value:"\u7f13\u5b58\u670d\u52a1\u5668\u914d\u7f6e",id:"\u7f13\u5b58\u670d\u52a1\u5668\u914d\u7f6e",level:2},{value:"\u6258\u7ba1\u7f13\u5b58\u670d\u52a1\u5668\u7684\u8ba1\u7b97\u673a\u7684\u8981\u6c42",id:"\u6258\u7ba1\u7f13\u5b58\u670d\u52a1\u5668\u7684\u8ba1\u7b97\u673a\u7684\u8981\u6c42",level:2},{value:"\u5173\u4e8e\u7f13\u5b58\u670d\u52a1\u5668\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5173\u4e8e\u7f13\u5b58\u670d\u52a1\u5668\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u968f\u7740\u5bfc\u5165\u548c\u5b58\u50a8\u7684\u8d44\u6e90\u8d8a\u6765\u8d8a\u591a\uff0c\u7f13\u5b58\u670d\u52a1\u5668\u6570\u636e\u5e93\u7684\u5927\u5c0f\u4f1a\u65e0\u9650\u589e\u957f\u5417\uff1f",id:"\u968f\u7740\u5bfc\u5165\u548c\u5b58\u50a8\u7684\u8d44\u6e90\u8d8a\u6765\u8d8a\u591a\u7f13\u5b58\u670d\u52a1\u5668\u6570\u636e\u5e93\u7684\u5927\u5c0f\u4f1a\u65e0\u9650\u589e\u957f\u5417",level:3},{value:"\u7f13\u5b58\u670d\u52a1\u5668\u662f\u5426\u4ec5\u9002\u7528\u4e8e\u8d44\u6e90\u670d\u52a1\u5668 (Asset Server)\uff1f",id:"\u7f13\u5b58\u670d\u52a1\u5668\u662f\u5426\u4ec5\u9002\u7528\u4e8e\u8d44\u6e90\u670d\u52a1\u5668-asset-server",level:3},{value:"\u54ea\u4e9b\u66f4\u6539\u4f1a\u5bfc\u81f4\u91cd\u65b0\u751f\u6210\u5bfc\u5165\u7684\u6587\u4ef6\uff1f",id:"\u54ea\u4e9b\u66f4\u6539\u4f1a\u5bfc\u81f4\u91cd\u65b0\u751f\u6210\u5bfc\u5165\u7684\u6587\u4ef6",level:3},{value:"\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u4f9d\u8d56\u9879\uff1f",id:"\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u4f9d\u8d56\u9879",level:3},{value:"\u4f7f\u7528\u6750\u8d28\u65f6\u662f\u5426\u6709\u4efb\u4f55\u95ee\u9898\uff1f",id:"\u4f7f\u7528\u6750\u8d28\u65f6\u662f\u5426\u6709\u4efb\u4f55\u95ee\u9898",level:3},{value:"\u662f\u5426\u6709\u4efb\u4f55\u8d44\u6e90\u7c7b\u578b\u4e0d\u4f1a\u88ab\u670d\u52a1\u5668\u7f13\u5b58\uff1f",id:"\u662f\u5426\u6709\u4efb\u4f55\u8d44\u6e90\u7c7b\u578b\u4e0d\u4f1a\u88ab\u670d\u52a1\u5668\u7f13\u5b58",level:3}],k={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f13\u5b58\u670d\u52a1\u5668"},"\u7f13\u5b58\u670d\u52a1\u5668"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8981\u4fe1\u606f")," \uff1a\u7f13\u5b58\u670d\u52a1\u5668 (Cache Server) \u4ec5\u652f\u6301",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/asset-database"},"\u8d44\u6e90\u5bfc\u5165\u7ba1\u7ebf (Asset Import Pipeline)")," \u7248\u672c 1\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f\u8d44\u6e90\u5bfc\u5165\u7ba1\u7ebf\u7248\u672c 2\uff0c\u8bf7\u6539\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-collaborate/unity-accelerator"},"Unity Accelerator"),"\u3002"),(0,l.kt)("p",null,"Unity \u6709\u4e00\u4e2a\u5b8c\u5168\u81ea\u52a8\u7684\u8d44\u6e90\u7ba1\u7ebf\u3002\u6bcf\u5f53\u4fee\u6539 .psd \u6216 .fbx \u6587\u4ef6\u7b49\u6e90\u8d44\u6e90\u65f6\uff0cUnity \u90fd\u4f1a\u68c0\u6d4b\u5230\u66f4\u6539\u5e76\u81ea\u52a8\u5c06\u5176\u91cd\u65b0\u5bfc\u5165\u3002\u968f\u540e\uff0cUnity \u4ee5\u5185\u90e8\u683c\u5f0f\u5b58\u50a8\u4ece\u6587\u4ef6\u5bfc\u5165\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u5b89\u6392\u65e8\u5728\u4f7f\u5de5\u4f5c\u6d41\u7a0b\u5bf9\u4e8e\u4e2a\u4eba\u7528\u6237\u800c\u8a00\u5c3d\u53ef\u80fd\u9ad8\u6548\u548c\u7075\u6d3b\u3002\u4f46\u662f\uff0c\u5728\u56e2\u961f\u4e2d\u5de5\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u53d1\u73b0\u5176\u4ed6\u7528\u6237\u53ef\u80fd\u4f1a\u7ee7\u7eed\u5bf9\u8d44\u6e90\u8fdb\u884c\u66f4\u6539\uff0c\u6240\u6709\u8fd9\u4e9b\u66f4\u6539\u90fd\u5fc5\u987b\u5bfc\u5165\u3002\u6b64\u5916\uff0c\u5728\u684c\u9762\u548c\u79fb\u52a8\u6784\u5efa\u76ee\u6807\u5e73\u53f0\u4e4b\u95f4\u5207\u6362\u65f6\uff0c\u5fc5\u987b\u91cd\u65b0\u5bfc\u5165\u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u8be5\u5207\u6362\u5bf9\u4e8e\u5927\u578b\u9879\u76ee\u800c\u8a00\u53ef\u80fd\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u670d\u52a1\u5668")," \u4e0a\u7f13\u5b58\u5bfc\u5165\u7684\u8d44\u6e90\u6570\u636e\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u5bfc\u5165\u8d44\u6e90\u6240\u9700\u7684\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"Unity \u5728\u6bcf\u6b21\u5bfc\u5165\u8d44\u6e90\u65f6\u57fa\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u8fdb\u884c\u7f13\u5b58\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u6587\u4ef6\u672c\u8eab"),(0,l.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u5bfc\u5165\u5668\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u524d\u5e73\u53f0")),(0,l.kt)("p",null,"\u5982\u679c\u4ee5\u4e0a\u4efb\u4f55\u5185\u5bb9\u66f4\u6539\uff0cUnity \u90fd\u4f1a\u91cd\u65b0\u5bfc\u5165\u8d44\u6e90\u3002\u5426\u5219\uff0cUnity \u4ece\u7f13\u5b58\u670d\u52a1\u5668\u4e0b\u8f7d\u8d44\u6e90\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7f13\u5b58\u670d\u52a1\u5668\u65f6\uff0c\u751a\u81f3\u53ef\u4ee5\u8de8\u591a\u4e2a\u9879\u76ee\u5171\u4eab\u8d44\u6e90\u5bfc\u5165\uff08\u5373\uff0c\u5728\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u5b8c\u6210\u5bfc\u5165\u5de5\u4f5c\uff0c\u7ed3\u679c\u5c06\u4e0e\u5176\u4ed6\u8ba1\u7b97\u673a\u5171\u4eab\uff09\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4e00\u65e6",(0,l.kt)("a",{parentName:"p",href:"#%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E8%BA%AB%E4%BB%BD%E8%AE%BE%E7%BD%AE__%E7%BC%93%E5%AD%98%E6%9C%8D%E5%8A%A1%E5%99%A8__"},"\u8bbe\u7f6e"),"\u5e76",(0,l.kt)("a",{parentName:"p",href:"#%E5%90%AF%E7%94%A8%E7%BC%93%E5%AD%98%E6%9C%8D%E5%8A%A1%E5%99%A8"},"\u542f\u7528"),"\u4e86\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u6b64\u8fc7\u7a0b\u5c31\u662f\u5b8c\u5168\u81ea\u52a8\u7684\uff0c\u56e0\u6b64\u6ca1\u6709\u5176\u4ed6\u5de5\u4f5c\u6d41\u7a0b\u8981\u6c42\u3002\u7f13\u5b58\u670d\u52a1\u5668\u53ef\u51cf\u5c11\u5bfc\u5165\u9879\u76ee\u6240\u9700\u7684\u65f6\u95f4\uff0c\u65e0\u9700\u7528\u6237\u8fdb\u4e00\u6b65\u5e72\u9884\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u7f13\u5b58\u670d\u52a1\u5668"},"\u542f\u7528\u7f13\u5b58\u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u8981\u542f\u7528\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"1.\u6253\u5f00 Unity  ",(0,l.kt)("strong",{parentName:"p"},"Preferences"),"  \u7a97\u53e3\uff08\u5728 MacOS \u4e0a\u9009\u62e9\u4e3b\u83dc\u5355\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Unity"),"  ",">","  ",(0,l.kt)("strong",{parentName:"p"},"Preferences")," \uff0c\u6216\u5728 Windows \u548c Linux \u4e0a\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,l.kt)("strong",{parentName:"p"},"Preferences")," \uff09\u3002 2. Select  ",(0,l.kt)("strong",{parentName:"p"},"Asset Pipeline"),"  from the category list on the left. The  ",(0,l.kt)("strong",{parentName:"p"},"Unity Accelerator (Cache Server)"),"  settings appear in the details pane on the right. 3.\u4ece ",(0,l.kt)("strong",{parentName:"p"},"Cache Server Mode"),"  \u4e0b\u62c9\u6846\u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"Remote"),"  \u6216  ",(0,l.kt)("strong",{parentName:"p"},"Local")," \u3002\u968f\u540e\u5c06\u663e\u793a\u6240\u9009\u6a21\u5f0f\u7279\u6709\u7684\u5c5e\u6027\u3002 4. Set the ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/preferences"},"Cache Server preferences")," for the mode you selected."),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")," \u7531\u4e8e\u786c\u76d8\u9a71\u52a8\u5668\u5927\u5c0f\u9650\u5236\uff0c\u5982\u679c\u53ef\u80fd\uff0c\u6700\u597d\u5728\u5355\u72ec\u7684\u8ba1\u7b97\u673a\u4e0a\u6258\u7ba1\u7f13\u5b58\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5982\u679c\u672c\u5730\u7f13\u5b58\u670d\u52a1\u5668\u5177\u6709\u81ea\u5b9a\u4e49\u4f4d\u7f6e\uff0c\u4f46\u8be5\u4f4d\u7f6e\u53d8\u4e3a\u4e0d\u53ef\u7528\uff0cUnity \u5c06\u663e\u793a\u4ee5\u4e0b\u8b66\u544a\uff1a"),(0,l.kt)("p",null,">"," ",(0,l.kt)("em",{parentName:"p"},"Local cache directory does not exist - please check that you can access the cache folder and are able to write to it")),(0,l.kt)("h2",{id:"\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8bbe\u7f6e-\u7f13\u5b58\u670d\u52a1\u5668"},"\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8bbe\u7f6e ",(0,l.kt)("strong",{parentName:"h2"},"\u7f13\u5b58\u670d\u52a1\u5668")),(0,l.kt)("p",null,"\u7ba1\u7406\u5458\u9700\u8981\u8bbe\u7f6e\u6258\u7ba1\u7f13\u5b58\u8d44\u6e90\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u670d\u52a1\u5668")," \u8ba1\u7b97\u673a\u3002"),(0,l.kt)("p",null,"\u8981\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8bbe\u7f6e\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"1.\u4e0b\u8f7d\u7f13\u5b58\u670d\u52a1\u5668\uff1a ","*"," \u6253\u5f00 Unity \u7684",(0,l.kt)("a",{parentName:"p",href:"https://unity3d.com/get-unity/download/archive"},"\u4e0b\u8f7d\u5b58\u6863 (Download Archive)")," \u9875\u9762\u3002 ","*"," \u627e\u5230\u6240\u4f7f\u7528\u7684 Unity \u7248\u672c\uff0c\u7136\u540e\u5355\u51fb\u76ee\u6807\u670d\u52a1\u5668\u64cd\u4f5c\u7cfb\u7edf\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Downloads"),"  \u6309\u94ae\u3002 ","*"," \u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u670d\u52a1\u5668 (Cache Server)"),"  \u94fe\u63a5\u5f00\u59cb\u4e0b\u8f7d\u3002 2.\u89e3\u538b\u7f29\u6587\u4ef6\uff0c\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a ",(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CacheServerZipCropped.png",alt:"CacheServerZipCropped.png"})," 3.\u8fd0\u884c\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u5339\u914d\u7684\u547d\u4ee4\u811a\u672c\u3002 \u968f\u540e\u5c06\u51fa\u73b0\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\uff0c\u5176\u4e2d\u663e\u793a\u7f13\u5b58\u670d\u52a1\u5668\u6b63\u5728\u540e\u53f0\u8fd0\u884c\uff1a ",(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CacheServerTerminal.png",alt:"CacheServerTerminal.png"})),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u8981\u4fe1\u606f\uff1a")," \u7f13\u5b58\u670d\u52a1\u5668\u9700\u8981\u4f4d\u4e8e\u5177\u6709\u5927\u578b\u5b58\u50a8\u7684\u53ef\u9760\u8ba1\u7b97\u673a\u4e0a\uff08\u8fdc\u5927\u4e8e\u9879\u76ee\u672c\u8eab\u7684\u5927\u5c0f\uff0c\u56e0\u4e3a\u4f1a\u5b58\u50a8\u591a\u4e2a\u7248\u672c\u7684\u5bfc\u5165\u8d44\u6e90\uff09\u3002\u5982\u679c\u786c\u76d8\u5df2\u6ee1\uff0c\u7f13\u5b58\u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u8fd0\u884c\u7f13\u6162\u3002"),(0,l.kt)("h2",{id:"\u5c06\u7f13\u5b58\u670d\u52a1\u5668\u5b89\u88c5\u4e3a\u670d\u52a1"},"\u5c06\u7f13\u5b58\u670d\u52a1\u5668\u5b89\u88c5\u4e3a\u670d\u52a1"),(0,l.kt)("p",null,"\u5fc5\u987b\u5c06\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".sh")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},".cmd")," \u811a\u672c\u8bbe\u7f6e\u4e3a\u670d\u52a1\u5668\u4e0a\u7684\u670d\u52a1\u3002 \u7f13\u5b58\u670d\u52a1\u5668\u53ef\u4ee5\u968f\u65f6\u5b89\u5168\u5730\u7ec8\u6b62\u548c\u91cd\u65b0\u542f\u52a8\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u539f\u5b50\u6587\u4ef6\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7248\u548c\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668"},"\u65b0\u7248\u548c\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u542f\u52a8\u4e24\u4e2a\u7f13\u5b58\u670d\u52a1\u5668\u8fdb\u7a0b\u3002\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668\u9002\u7528\u4e8e 5.0 \u4e4b\u524d\u7684 Unity \u7248\u672c\u3002\u65b0\u7248\u7f13\u5b58\u670d\u52a1\u5668\u9002\u7528\u4e8e 5.0 \u548c\u4e4b\u540e\u7684 Unity \u7248\u672c\u3002\u6709\u5173\u914d\u7f6e\u3001\u542f\u7528\u548c\u7981\u7528\u4e24\u4e2a\u4e0d\u540c\u7f13\u5b58\u670d\u52a1\u5668\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u7f13\u5b58\u670d\u52a1\u5668\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u7f13\u5b58\u670d\u52a1\u5668\u914d\u7f6e"},"\u7f13\u5b58\u670d\u52a1\u5668\u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\u679c\u901a\u8fc7\u6267\u884c\u811a\u672c\u76f4\u63a5\u542f\u52a8\uff0c\u5c06\u5728\u7aef\u53e3 8125 \u4e0a\u542f\u52a8\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u800c\u5728\u7aef\u53e3 8126 \u4e0a\u542f\u52a8\u65b0\u7248\u7f13\u5b58\u670d\u52a1\u5668\u3002\u6b64\u5916\u8fd8\u4f1a\u5728\u4e0e\u811a\u672c\u76f8\u540c\u7684\u76ee\u5f55\u4e2d\u521b\u5efa\u201ccache\u201d\u548c\u201ccache5.0\u201d\u76ee\u5f55\uff0c\u5e76\u5728\u5176\u4e2d\u4fdd\u5b58\u6570\u636e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7f13\u5b58\u76ee\u5f55\u6700\u591a\u53ef\u589e\u957f\u5230 50 GB\u3002\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u9009\u9879\u914d\u7f6e\u6570\u636e\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./RunOSX.command --path ~/mycachePath --size 2000000000")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./RunOSX.command --path ~/mycachePath --port 8199 --nolegacy")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u884c\u9009\u9879\u914d\u7f6e\u7f13\u5b58\u670d\u52a1\u5668\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--port")," \u6307\u5b9a\u670d\u52a1\u5668\u7aef\u53e3\u3002\u8fd9\u4ec5\u9002\u7528\u4e8e\u65b0\u7248\u7f13\u5b58\u670d\u52a1\u5668\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"8126"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--path")," \u6307\u5b9a\u7f13\u5b58\u4f4d\u7f6e\u7684\u8def\u5f84\u3002\u8fd9\u4ec5\u9002\u7528\u4e8e\u65b0\u7248\u7f13\u5b58\u670d\u52a1\u5668\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"./cache5.0"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--legacypath")," \u6307\u5b9a\u7f13\u5b58\u4f4d\u7f6e\u7684\u8def\u5f84\u3002\u8fd9\u4ec5\u9002\u7528\u4e8e\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"./cache"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--size")," \u6307\u5b9a\u4e24\u4e2a\u7f13\u5b58\u670d\u52a1\u5668\u7684\u6700\u5927\u7f13\u5b58\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002\u8d85\u8fc7\u6b64\u7f13\u5b58\u5927\u5c0f\u65f6\uff0c\u5c06\u81ea\u52a8\u4e22\u5f03\u6700\u8fd1\u672a\u4f7f\u7528\u7684\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"--nolegacy")," \u7981\u6b62\u542f\u52a8\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668\u3002\u5426\u5219\uff0c\u65e7\u7248\u7f13\u5b58\u670d\u52a1\u5668\u4f1a\u5728\u7aef\u53e3 ",(0,l.kt)("inlineCode",{parentName:"li"},"8125")," \u4e0a\u542f\u52a8\u3002")),(0,l.kt)("h2",{id:"\u6258\u7ba1\u7f13\u5b58\u670d\u52a1\u5668\u7684\u8ba1\u7b97\u673a\u7684\u8981\u6c42"},"\u6258\u7ba1\u7f13\u5b58\u670d\u52a1\u5668\u7684\u8ba1\u7b97\u673a\u7684\u8981\u6c42"),(0,l.kt)("p",null,"\u4e3a\u83b7\u5f97\u6700\u4f73\u6027\u80fd\uff0c\u5fc5\u987b\u6709\u8db3\u591f\u7684 RAM \u6765\u5bb9\u7eb3\u6574\u4e2a\u5bfc\u5165\u7684\u9879\u76ee\u6587\u4ef6\u5939\u3002\u6b64\u5916\uff0c\u8ba1\u7b97\u673a\u6700\u597d\u914d\u5907\u5feb\u901f\u786c\u76d8\u9a71\u52a8\u5668\u548c\u5feb\u901f\u4ee5\u592a\u7f51\u8fde\u63a5\u3002\u786c\u76d8\u9a71\u52a8\u5668\u8fd8\u5e94\u8be5\u6709\u8db3\u591f\u7684\u53ef\u7528\u7a7a\u95f4\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u7f13\u5b58\u670d\u52a1\u5668\u7684 CPU \u4f7f\u7528\u7387\u975e\u5e38\u4f4e\u3002"),(0,l.kt)("p",null,"\u7f13\u5b58\u670d\u52a1\u5668\u548c\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\u4e4b\u4e00\u662f\u5176\u7f13\u5b58\u7684\u6570\u636e\u59cb\u7ec8\u53ef\u4ee5\u5728\u672c\u5730\u91cd\u5efa\u3002\u5b83\u53ea\u662f\u4e00\u79cd\u63d0\u9ad8\u6027\u80fd\u7684\u5de5\u5177\u3002\u56e0\u6b64\uff0c\u5728\u4e92\u8054\u7f51\u4e0a\u4f7f\u7528\u7f13\u5b58\u670d\u52a1\u5668\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002\u5982\u679c\u662f\u5206\u5e03\u5f0f\u56e2\u961f\uff0c\u5e94\u5728\u6bcf\u4e2a\u4f4d\u7f6e\u653e\u7f6e\u5355\u72ec\u7684\u7f13\u5b58\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u7f13\u5b58\u670d\u52a1\u5668\u5728 Linux \u6216 Mac OS X \u8ba1\u7b97\u673a\u4e0a\u7684\u8fd0\u884c\u6548\u679c\u6700\u597d\u3002Windows \u6587\u4ef6\u7cfb\u7edf\u6ca1\u6709\u9488\u5bf9\u7f13\u5b58\u670d\u52a1\u5668\u7684\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\u8fdb\u884c\u5f88\u597d\u7684\u7279\u522b\u4f18\u5316\uff0c\u5e76\u4e14 Windows \u4e0a\u7684\u6587\u4ef6\u9501\u5b9a\u95ee\u9898\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u5728 Linux \u6216 Mac OS X \u4e0a\u4e0d\u4f1a\u51fa\u73b0\u7684\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u5173\u4e8e\u7f13\u5b58\u670d\u52a1\u5668\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5173\u4e8e\u7f13\u5b58\u670d\u52a1\u5668\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,l.kt)("h3",{id:"\u968f\u7740\u5bfc\u5165\u548c\u5b58\u50a8\u7684\u8d44\u6e90\u8d8a\u6765\u8d8a\u591a\u7f13\u5b58\u670d\u52a1\u5668\u6570\u636e\u5e93\u7684\u5927\u5c0f\u4f1a\u65e0\u9650\u589e\u957f\u5417"},"\u968f\u7740\u5bfc\u5165\u548c\u5b58\u50a8\u7684\u8d44\u6e90\u8d8a\u6765\u8d8a\u591a\uff0c\u7f13\u5b58\u670d\u52a1\u5668\u6570\u636e\u5e93\u7684\u5927\u5c0f\u4f1a\u65e0\u9650\u589e\u957f\u5417\uff1f"),(0,l.kt)("p",null,"\u7f13\u5b58\u670d\u52a1\u5668\u4f1a\u81ea\u52a8\u5220\u9664\u4e00\u6bb5\u65f6\u95f4\u672a\u4f7f\u7528\u7684\u8d44\u6e90\uff08\u5f53\u7136\uff0c\u5982\u679c\u518d\u6b21\u9700\u8981\u8fd9\u4e9b\u8d44\u6e90\uff0c\u5219\u4f1a\u5728\u4e0b\u6b21\u4f7f\u7528\u65f6\u91cd\u65b0\u521b\u5efa\u8fd9\u4e9b\u8d44\u6e90\uff09\u3002"),(0,l.kt)("h3",{id:"\u7f13\u5b58\u670d\u52a1\u5668\u662f\u5426\u4ec5\u9002\u7528\u4e8e\u8d44\u6e90\u670d\u52a1\u5668-asset-server"},"\u7f13\u5b58\u670d\u52a1\u5668\u662f\u5426\u4ec5\u9002\u7528\u4e8e\u8d44\u6e90\u670d\u52a1\u5668 (Asset Server)\uff1f"),(0,l.kt)("p",null,"\u6839\u636e\u8bbe\u8ba1\uff0c\u7f13\u5b58\u670d\u52a1\u5668\u5bf9\u6e90\u4ee3\u7801/\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u800c\u8a00\u662f\u900f\u660e\u7684\uff0c\u56e0\u6b64\u4e0d\u5c40\u9650\u4e8e\u4f7f\u7528 Unity \u7684\u8d44\u6e90\u670d\u52a1\u5668\u3002"),(0,l.kt)("h3",{id:"\u54ea\u4e9b\u66f4\u6539\u4f1a\u5bfc\u81f4\u91cd\u65b0\u751f\u6210\u5bfc\u5165\u7684\u6587\u4ef6"},"\u54ea\u4e9b\u66f4\u6539\u4f1a\u5bfc\u81f4\u91cd\u65b0\u751f\u6210\u5bfc\u5165\u7684\u6587\u4ef6\uff1f"),(0,l.kt)("p",null,"\u5f53 Unity \u5373\u5c06\u5bfc\u5165\u8d44\u6e90\u65f6\uff0c\u5b83\u4f1a\u751f\u6210\u6240\u6709\u6e90\u6570\u636e\u7684 MD5 \u54c8\u5e0c\u503c\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7eb9\u7406\uff0c\u8fd9\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6e90\u8d44\u6e90\uff1a\u201cmyTexture.psd\u201d\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6587\u4ef6\uff1a\u201cmyTexture.psd.meta\u201d\uff08\u5b58\u50a8\u6240\u6709\u5bfc\u5165\u5668\u8bbe\u7f6e\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7eb9\u7406\u5bfc\u5165\u5668\u7684\u5185\u90e8\u7248\u672c\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AssetPostprocessor.html"},"AssetPostprocessor")," \u7684\u7248\u672c\u53f7\u54c8\u5e0c\u503c")),(0,l.kt)("p",null,"\u5982\u679c\u8be5\u54c8\u5e0c\u503c\u4e0e\u7f13\u5b58\u670d\u52a1\u5668\u4e0a\u5b58\u50a8\u7684\u54c8\u5e0c\u503c\u4e0d\u540c\uff0c\u5219\u91cd\u65b0\u5bfc\u5165\u8d44\u6e90\u3002\u5426\u5219\uff0c\u5c06\u4e0b\u8f7d\u7f13\u5b58\u7248\u672c\u3002\u5ba2\u6237\u7aef Unity Editor \u4ec5\u5728\u9700\u8981\u65f6\u4ece\u670d\u52a1\u5668\u4e2d\u62c9\u53d6\u8d44\u6e90 - \u8d44\u6e90\u5728\u66f4\u6539\u65f6\u4e0d\u4f1a\u88ab\u63a8\u9001\u5230\u6bcf\u4e2a\u9879\u76ee\u3002"),(0,l.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u4f9d\u8d56\u9879"},"\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u4f9d\u8d56\u9879\uff1f"),(0,l.kt)("p",null,"\u7f13\u5b58\u670d\u52a1\u5668\u4e0d\u5904\u7406\u4f9d\u8d56\u9879\u3002Unity \u7684\u8d44\u6e90\u7ba1\u7ebf\u4e0d\u5904\u7406\u4f9d\u8d56\u9879\u7684\u6982\u5ff5\u3002\u6839\u636e\u8bbe\u8ba1\uff0c\u5b83\u4f1a\u907f\u514d\u8d44\u6e90\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AssetPostprocessor.html"},"AssetPostprocessor")," \u7c7b\u662f\u4e00\u79cd\u7528\u4e8e\u81ea\u5b9a\u4e49\u8d44\u6e90\u5bfc\u5165\u5668\u6765\u6ee1\u8db3\u9700\u6c42\u7684\u5e38\u7528\u6280\u672f\u3002\u4f8b\u5982\uff0c\u6709\u65f6\u53ef\u80fd\u5e0c\u671b\u5c06\u7f51\u683c\u78b0\u649e\u4f53\u6dfb\u52a0\u5230 .fbx \u6587\u4ef6\u4e2d\u7684\u67d0\u4e9b\u6e38\u620f\u5bf9\u8c61\uff08\u57fa\u4e8e\u540d\u79f0\u6216\u6807\u7b7e\uff09\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"AssetPostprocessor")," \u6765\u5f15\u5165\u4f9d\u8d56\u9879\u4e5f\u5f88\u5bb9\u6613\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u8d44\u6e90\u65c1\u8fb9\u7684\u6587\u672c\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5411\u5bfc\u5165\u7684\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u5176\u4ed6\u7ec4\u4ef6\u3002\u7f13\u5b58\u670d\u52a1\u5668\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u3002\u5982\u679c\u8981\u4f7f\u7528\u7f13\u5b58\u670d\u52a1\u5668\uff0c\u5fc5\u987b\u53bb\u9664\u5bf9\u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u5176\u4ed6\u8d44\u6e90\u7684\u4f9d\u8d56\u3002\u7531\u4e8e\u7f13\u5b58\u670d\u52a1\u5668\u5bf9\u540e\u5904\u7406\u5668\u4e2d\u7684\u4f9d\u8d56\u9879\u4e00\u65e0\u6240\u77e5\uff0c\u56e0\u6b64\u5b83\u4e0d\u77e5\u9053\u662f\u5426\u4efb\u4f55\u5185\u5bb9\u5df2\u53d1\u751f\u66f4\u6539\uff0c\u56e0\u6b64\u4f1a\u4f7f\u7528\u8d44\u6e90\u7684\u65e7\u7f13\u5b58\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u8fdb\u884c\u8d44\u6e90\u540e\u671f\u5904\u7406\uff0c\u4ee5\u4fbf\u4e0e\u7f13\u5b58\u670d\u52a1\u5668\u914d\u5408\u4f7f\u7528\u3002\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5df2\u5bfc\u5165\u8d44\u6e90\u7684\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7684\u4efb\u4f55\u5bfc\u5165\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u6e90\u8d44\u6e90\u672c\u8eab\u6216\u5728\u5176\u57fa\u7840\u4e0a\u751f\u6210\u7684\u4efb\u4f55\u6570\u636e\uff08\u5728\u8d44\u6e90\u540e\u5904\u7406\u5668\u4e2d\u4f20\u9012\u7ed9\u60a8\uff09\u3002")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6750\u8d28\u65f6\u662f\u5426\u6709\u4efb\u4f55\u95ee\u9898"},"\u4f7f\u7528\u6750\u8d28\u65f6\u662f\u5426\u6709\u4efb\u4f55\u95ee\u9898\uff1f"),(0,l.kt)("p",null,"\u4fee\u6539\u5df2\u5b58\u5728\u7684\u6750\u8d28\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002\u4f7f\u7528\u7f13\u5b58\u670d\u52a1\u5668\u65f6\uff0cUnity \u4f1a\u9a8c\u8bc1\u662f\u5426\u7ef4\u6301\u4e86\u5bf9\u6750\u8d28\u7684\u5f15\u7528\uff0c\u4f46\u7531\u4e8e\u4e0d\u4f1a\u8c03\u7528\u540e\u671f\u5904\u7406\u8c03\u7528\uff0c\u56e0\u6b64\u5728\u901a\u8fc7\u7f13\u5b58\u670d\u52a1\u5668\u5bfc\u5165\u6a21\u578b\u65f6\u65e0\u6cd5\u66f4\u6539\u6750\u8d28\u7684\u5185\u5bb9\u3002\u56e0\u6b64\uff0c\u4f7f\u7528\u548c\u4e0d\u4f7f\u7528\u7f13\u5b58\u670d\u52a1\u5668\u8fdb\u884c\u5bfc\u5165\u53ef\u80fd\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u4e0d\u8981\u4ece\u8d44\u6e90\u540e\u5904\u7406\u5668\u4fee\u6539\u78c1\u76d8\u4e0a\u5df2\u5b58\u5728\u7684\u6750\u8d28\uff0c\u56e0\u4e3a\u5982\u679c\u901a\u8fc7\u7f13\u5b58\u670d\u52a1\u5668\u4e0b\u8f7d fbx \u6587\u4ef6\uff0c\u5219\u4e0d\u4f1a\u8fd0\u884c\u5bfc\u5165\u8fc7\u7a0b\u3002\u6240\u4ee5\uff0c\u5982\u679c\u6bcf\u6b21\u8fd0\u884c\u6a21\u578b\u5bfc\u5165\u5668\u65f6\u9700\u8981\u5c06\u751f\u6210\u7684\u6750\u8d28\u91cd\u7f6e\u4e3a\u67d0\u4e9b\u751f\u6210\u7684\u9ed8\u8ba4\u503c\uff0c\u5219\u5728\u5bfc\u5165\u7f13\u5b58\u7684 fbx \u6587\u4ef6\u65f6\u5c06\u4e0d\u4f1a\u8fd0\u884c\u6b64\u8d44\u6e90\u540e\u5904\u7406\u5668\u3002"),(0,l.kt)("h3",{id:"\u662f\u5426\u6709\u4efb\u4f55\u8d44\u6e90\u7c7b\u578b\u4e0d\u4f1a\u88ab\u670d\u52a1\u5668\u7f13\u5b58"},"\u662f\u5426\u6709\u4efb\u4f55\u8d44\u6e90\u7c7b\u578b\u4e0d\u4f1a\u88ab\u670d\u52a1\u5668\u7f13\u5b58\uff1f"),(0,l.kt)("p",null,"\u6709\u51e0\u79cd\u7c7b\u578b\u7684\u8d44\u6e90\u6570\u636e\u4e0d\u4f1a\u88ab\u670d\u52a1\u5668\u7f13\u5b58\u3002\u5bf9\u811a\u672c\u6587\u4ef6\u8fdb\u884c\u7f13\u5b58\u5b9e\u9645\u4e0a\u4e0d\u4f1a\u5e26\u6765\u4efb\u4f55\u597d\u5904\uff0c\u56e0\u6b64\u670d\u52a1\u5668\u4f1a\u5ffd\u7565\u5b83\u4eec\u3002\u6b64\u5916\uff0c3D \u5efa\u6a21\u8f6f\u4ef6\uff08Autodesk\xae Maya\xae\u3001Autodesk\xae 3ds Max\xae \u7b49\uff09\u4f7f\u7528\u7684\u539f\u751f\u6587\u4ef6\u5c06\u7531\u5e94\u7528\u7a0b\u5e8f\u672c\u8eab\u8f6c\u6362\u4e3a FBX\u3002\u8d44\u6e90\u670d\u52a1\u5668\u4e0d\u4f1a\u7f13\u5b58\u539f\u751f\u6587\u4ef6\uff0c\u4e5f\u4e0d\u4f1a\u7f13\u5b58\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u751f\u6210\u7684\u4e2d\u95f4 FBX \u6587\u4ef6\u3002\u4f46\u662f\uff0c\u901a\u8fc7\u4ece\u5efa\u6a21\u8f6f\u4ef6\u5bfc\u51fa\u6587\u4ef6\u4f5c\u4e3a FBX\uff0c\u7136\u540e\u5c06\u8fd9\u4e9b\u6587\u4ef6\u6dfb\u52a0\u5230 Unity \u9879\u76ee\uff0c\u4e5f\u8bb8\u53ef\u4ece\u8be5\u670d\u52a1\u5668\u53d7\u76ca\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2018\u201311\u201309 \u9875\u9762\u5df2\u4fee\u8ba2")))}m.isMDXComponent=!0}}]);