"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28873],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),p=["components"],a={id:"iphone-playerSizeOptimization",title:"\u4f18\u5316\u6784\u5efa\u7684 iOS \u64ad\u653e\u5668\u7684\u5927\u5c0f",slug:"/iphone-performance/iphone-player-size-optimization"},l="\u4f18\u5316\u6784\u5efa\u7684 iOS \u64ad\u653e\u5668\u7684\u5927\u5c0f",c={unversionedId:"platform-specific/iphone/i-os-\u9ad8\u7ea7\u4e3b\u9898/iphone-performance/iphone-playerSizeOptimization",id:"platform-specific/iphone/i-os-\u9ad8\u7ea7\u4e3b\u9898/iphone-performance/iphone-playerSizeOptimization",title:"\u4f18\u5316\u6784\u5efa\u7684 iOS \u64ad\u653e\u5668\u7684\u5927\u5c0f",description:"\u51cf\u5c0f\u64ad\u653e\u5668\u5927\u5c0f\u7684\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u662f\u5728 Xcode \u4e2d\u521b\u5efa\u5408\u7406\u7684  Release build  \u4ee5\u53ca\u5728 Unity \u4e2d\u66f4\u6539  Stripping Level \u3002",source:"@site/docs/platform-specific/iphone/i-os-\u9ad8\u7ea7\u4e3b\u9898/iphone-performance/iphone-player-size-optimization.md",sourceDirName:"platform-specific/iphone/i-os-\u9ad8\u7ea7\u4e3b\u9898/iphone-performance",slug:"/iphone-performance/iphone-player-size-optimization",permalink:"/doc-unity-manual/docs/iphone-performance/iphone-player-size-optimization",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/iphone/i-os-\u9ad8\u7ea7\u4e3b\u9898/iphone-performance/iphone-player-size-optimization.md",tags:[],version:"current",frontMatter:{id:"iphone-playerSizeOptimization",title:"\u4f18\u5316\u6784\u5efa\u7684 iOS \u64ad\u653e\u5668\u7684\u5927\u5c0f",slug:"/iphone-performance/iphone-player-size-optimization"},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316\u7269\u7406\u6027\u80fd",permalink:"/doc-unity-manual/docs/iphone-performance/iphone-optimizing-physics"},next:{title:"Social API",permalink:"/doc-unity-manual/docs/i-os-\u9ad8\u7ea7\u4e3b\u9898/net-social-api"}},s={},u=[{value:"\u4e3a\u5206\u53d1\u8fdb\u884c\u6784\u5efa",id:"\u4e3a\u5206\u53d1\u8fdb\u884c\u6784\u5efa",level:2},{value:"iOS \u5265\u79bb\u7ea7\u522b",id:"ios-\u5265\u79bb\u7ea7\u522b",level:2},{value:"\u4f7f\u7528 IL2CPP \u8fdb\u884c\u5265\u79bb",id:"\u4f7f\u7528-il2cpp-\u8fdb\u884c\u5265\u79bb",level:2},{value:"\u5173\u4e8e\u4f7f\u5206\u53d1\u5927\u5c0f\u5c3d\u53ef\u80fd\u5c0f\u7684\u7b80\u5355\u6838\u5bf9\u8868",id:"\u5173\u4e8e\u4f7f\u5206\u53d1\u5927\u5c0f\u5c3d\u53ef\u80fd\u5c0f\u7684\u7b80\u5355\u6838\u5bf9\u8868",level:3},{value:"\u4f7f\u7528 Unity \u5236\u4f5c\u7684\u5e94\u7528\u7a0b\u5e8f\u6700\u5c0f\u4e3a\u591a\u5927\uff1f",id:"\u4f7f\u7528-unity-\u5236\u4f5c\u7684\u5e94\u7528\u7a0b\u5e8f\u6700\u5c0f\u4e3a\u591a\u5927",level:3},{value:"\u4e3a\u4ec0\u4e48\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u53d1\u5e03\u5230 App Store \u540e\u4f1a\u589e\u5927\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u53d1\u5e03\u5230-app-store-\u540e\u4f1a\u589e\u5927",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f18\u5316\u6784\u5efa\u7684-ios-\u64ad\u653e\u5668\u7684\u5927\u5c0f"},"\u4f18\u5316\u6784\u5efa\u7684 iOS \u64ad\u653e\u5668\u7684\u5927\u5c0f"),(0,o.kt)("p",null,"\u51cf\u5c0f\u64ad\u653e\u5668\u5927\u5c0f\u7684\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u662f\u5728 Xcode \u4e2d\u521b\u5efa\u5408\u7406\u7684  ",(0,o.kt)("strong",{parentName:"p"},"Release build"),"  \u4ee5\u53ca\u5728 Unity \u4e2d\u66f4\u6539  ",(0,o.kt)("strong",{parentName:"p"},"Stripping Level")," \u3002"),(0,o.kt)("h2",{id:"\u4e3a\u5206\u53d1\u8fdb\u884c\u6784\u5efa"},"\u4e3a\u5206\u53d1\u8fdb\u884c\u6784\u5efa"),(0,o.kt)("p",null,"\u901a\u5e38\u5e94\u4f7f\u7528 Xcode \u547d\u4ee4  ",(0,o.kt)("strong",{parentName:"p"},"Product"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Archive"),"  \u8fdb\u884c\u6700\u7ec8\u53d1\u884c\u7248\u6784\u5efa\u3002\u4f7f\u7528\u6b64\u547d\u4ee4\u53ef\u786e\u4fdd\u4f7f\u7528\u53d1\u5e03\u914d\u7f6e\u8fdb\u884c\u6784\u5efa ",(0,o.kt)("strong",{parentName:"p"},"\u5e76")," \u5265\u79bb\u6240\u6709\u8c03\u8bd5\u7b26\u53f7\u3002 \u53d1\u51fa\u6b64\u547d\u4ee4\u540e\uff0cXcode \u5c06\u5207\u6362\u5230 Organizer \u7a97\u53e3  ",(0,o.kt)("strong",{parentName:"p"},"Archives"),"  \u9009\u9879\u5361\u3002\u5982\u9700\u4e86\u89e3\u5173\u4e8e\u5982\u4f55\u8ba1\u7b97\u5e94\u7528\u7a0b\u5e8f\u5927\u5c0f\u7684\u51c6\u5219\u4ee5\u53ca\u5176\u4ed6\u5173\u4e8e\u51cf\u5c0f\u5927\u5c0f\u7684\u6280\u5de7\uff0c\u8bf7\u53c2\u9605 Apple \u7684\u6280\u672f\u95ee\u7b54\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/qa/qa1795/_index.html"},"\u51cf\u5c0f\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u5927\u5c0f (Reducing the size of my App)"),"\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u8bbe\u7f6e\u65e0\u7ebf\u4e0b\u8f7d\u9650\u5236\uff08\u76ee\u524d\u4e3a 150MB\uff09\u65f6\u7559\u51fa\u5c11\u91cf\u7684\u8bef\u5dee\u4f59\u5730\u3002"),(0,o.kt)("h2",{id:"ios-\u5265\u79bb\u7ea7\u522b"},"iOS \u5265\u79bb\u7ea7\u522b"),(0,o.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u5265\u79bb\u65b9\u5f0f\u6fc0\u6d3b Mono \u811a\u672c\u540e\u7aef\u6784\u5efa\u7684\u5927\u5c0f\u4f18\u5316\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Strip assemblies"),"  \u7ea7\u522b\uff1a\u5206\u6790\u811a\u672c\u7684\u5b57\u8282\u7801\uff0c\u4ee5\u4fbf\u53ef\u4ece DLL \u4e2d\u5220\u9664\u672a\u5728\u811a\u672c\u4e2d\u5f15\u7528\u7684\u7c7b\u548c\u65b9\u6cd5\uff0c\u4ece\u800c\u5728 AOT \u7f16\u8bd1\u9636\u6bb5\u4e2d\u5c06\u5b83\u4eec\u6392\u9664\u3002\u6b64\u4f18\u5316\u53ef\u4ee5\u51cf\u5c0f\u4e3b\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u9644\u5e26 DLL \u7684\u5927\u5c0f\uff0c\u53ea\u8981\u4e0d\u4f7f\u7528\u53cd\u5c04\u5c31\u662f\u5b89\u5168\u7684\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Strip ByteCode"),"  \u7ea7\u522b\uff1a\u6240\u6709 .NET DLL\uff08\u5b58\u50a8\u5728 Data \u6587\u4ef6\u5939\u4e2d\uff09\u90fd\u4f1a\u88ab\u5265\u79bb\u4e3a\u4ec5\u5269\u4e0b\u5143\u6570\u636e\u3002\u4e4b\u6240\u4ee5\u53ef\u4ee5\u8fd9\u6837\u505a\uff0c\u662f\u56e0\u4e3a\u6240\u6709\u4ee3\u7801\u90fd\u5df2\u5728 AOT \u9636\u6bb5\u9884\u7f16\u8bd1\u5e76\u94fe\u63a5\u5230\u4e3b\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use micro mscorlib"),"  \u7ea7\u522b\uff1a\u4f7f\u7528\u7279\u6b8a\u7684\u8f83\u5c0f\u7248\u672c\u7684 mscorlib\u3002\u67d0\u4e9b\u7ec4\u4ef6\u5c06\u4ece\u6b64\u5e93\u4e2d\u5220\u9664\uff0c\u4f8b\u5982 Security\u3001Reflection.Emit\u3001Remoting\u3001\u975e Gregorian \u65e5\u5386\u7b49\u3002\u6b64\u5916\uff0c\u5185\u90e8\u7ec4\u4ef6\u4e4b\u95f4\u7684\u76f8\u4e92\u4f9d\u8d56\u5173\u7cfb\u5c06\u6700\u5c0f\u5316\u3002\u6b64\u4f18\u5316\u53ef\u4ee5\u51cf\u5c0f\u4e3b\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c mscorlib.dll \u5927\u5c0f\uff0c\u4f46\u4e0e\u67d0\u4e9b System \u548c System.Xml \u7a0b\u5e8f\u96c6\u7c7b\u4e0d\u517c\u5bb9\uff0c\u56e0\u6b64\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"))),(0,o.kt)("p",null,"\u8fd9\u4e9b\u7ea7\u522b\u662f\u7d2f\u79ef\u7684\uff0c\u56e0\u6b64\u7ea7\u522b 3 \u4f18\u5316\u9690\u542b\u5730\u5305\u62ec\u7ea7\u522b 2 \u548c 1\uff0c\u800c\u7ea7\u522b 2 \u4f18\u5316\u5305\u62ec\u7ea7\u522b 1\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c ",(0,o.kt)("strong",{parentName:"p"},"Micro mscorlib"),"  \u662f\u6838\u5fc3\u5e93\u7684\u5927\u5e45\u5ea6\u7cbe\u7b80\u7248\u672c\u3002\u53ea\u4fdd\u7559 Unity \u4e2d Mono \u8fd0\u884c\u65f6\u6240\u9700\u7684\u9879\u3002\u4f7f\u7528 micro mscorlib \u7684\u6700\u4f73\u505a\u6cd5\u662f\u4e0d\u8981\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u4e0d\u9700\u8981\u7684\u4efb\u4f55\u7c7b\u6216\u5176\u4ed6 .NET \u529f\u80fd\u3002GUID \u5c31\u662f\u4e00\u4e2a\u53ef\u4ee5\u7701\u7565\u7684\u5178\u578b\u793a\u4f8b\uff1b\u5f88\u5bb9\u6613\u5c06\u5b83\u4eec\u66ff\u6362\u4e3a\u5b9a\u5236\u7684\u4f2a GUID\uff0c\u8fd9\u6837\u505a\u53ef\u4ee5\u5e26\u6765\u66f4\u597d\u7684\u6027\u80fd\u548c\u66f4\u5c0f\u7684\u5e94\u7528\u7a0b\u5e8f\u5927\u5c0f\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-il2cpp-\u8fdb\u884c\u5265\u79bb"},"\u4f7f\u7528 IL2CPP \u8fdb\u884c\u5265\u79bb"),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605\u6709\u5173",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scripting-backends/managed-code-stripping"},"\u4f7f\u7528 IL2CPP \u8fdb\u884c\u6258\u7ba1\u5b57\u8282\u7801\u5265\u79bb"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u6709\u65f6\u5019\u5f88\u96be\u786e\u5b9a\u54ea\u4e9b\u7c7b\u88ab\u9519\u8bef\u5265\u79bb\uff08\u867d\u7136\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u8fd9\u4e9b\u7c7b\uff09\u3002\u901a\u5e38\uff0c\u901a\u8fc7\u5728\u6a21\u62df\u5668\u4e0a\u8fd0\u884c\u5265\u79bb\u540e\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u68c0\u67e5 Xcode \u63a7\u5236\u53f0\u662f\u5426\u6709\u9519\u8bef\u6d88\u606f\uff0c\u53ef\u4ee5\u83b7\u5f97\u6709\u7528\u7684\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"\u5173\u4e8e\u4f7f\u5206\u53d1\u5927\u5c0f\u5c3d\u53ef\u80fd\u5c0f\u7684\u7b80\u5355\u6838\u5bf9\u8868"},"\u5173\u4e8e\u4f7f\u5206\u53d1\u5927\u5c0f\u5c3d\u53ef\u80fd\u5c0f\u7684\u7b80\u5355\u6838\u5bf9\u8868"),(0,o.kt)("p",null,"1.\u4f7f\u8d44\u6e90\u6700\u5c0f\u5316\uff1a\u542f\u7528\u7eb9\u7406\u538b\u7f29\u5e76\u5c3d\u53ef\u80fd\u964d\u4f4e\u5176\u5206\u8fa8\u7387\u3002\u6b64\u5916\uff0c\u6700\u5927\u9650\u5ea6\u51cf\u5c0f\u672a\u538b\u7f29\u58f0\u97f3\u7684\u6570\u91cf\u3002",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/publishing-builds/reducing-filesize"},"\u6b64\u5904"),"\u6709\u4e00\u4e9b\u51cf\u5c0f\u6587\u4ef6\u5927\u5c0f\u7684\u989d\u5916\u6280\u5de7\u3002 1.\u5728 Mono \u4e0a\u5c06  ",(0,o.kt)("strong",{parentName:"p"},"iOS Stripping Level"),"  \u8bbe\u7f6e\u4e3a  ",(0,o.kt)("strong",{parentName:"p"},"Use micro mscorlib")," \uff0c\u6216\u5728 IL2CPP \u4e0a\u542f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Strip Engine Code")," \u3002 1.\u5c06\u811a\u672c\u8c03\u7528\u4f18\u5316 (Script Call Optimization) \u7ea7\u522b\u8bbe\u7f6e\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Fast but no exceptions")," \u3002 1.\u4e0d\u8981\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528 System.dll \u6216 System.Xml.dll \u4e2d\u7684\u4efb\u4f55\u5185\u5bb9\u3002\u8fd9\u4e9b\u5e93\u4e0e micro mscorlib  ",(0,o.kt)("strong",{parentName:"p"},"\u4e0d")," \u517c\u5bb9\u3002 1.\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u4ee3\u7801\u4f9d\u8d56\u9879\u3002 1.\u5c06 API \u517c\u5bb9\u6027\u7ea7\u522b (API Compatibility Level) \u8bbe\u7f6e\u4e3a ",(0,o.kt)("strong",{parentName:"p"},".Net 2.0 subset")," \u3002\u8bf7\u6ce8\u610f\uff0c.Net 2.0 \u5b50\u96c6\u4e0e\u5176\u4ed6\u5e93\u7684\u517c\u5bb9\u6027\u6709\u9650\u3002 1.\u907f\u514d\u5c06\u901a\u7528\u5bb9\u5668\u4e0e\u503c\u7c7b\u578b\uff08\u5305\u62ec\u7ed3\u6784\uff09\u7ed3\u5408\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-unity-\u5236\u4f5c\u7684\u5e94\u7528\u7a0b\u5e8f\u6700\u5c0f\u4e3a\u591a\u5927"},"\u4f7f\u7528 Unity \u5236\u4f5c\u7684\u5e94\u7528\u7a0b\u5e8f\u6700\u5c0f\u4e3a\u591a\u5927\uff1f"),(0,o.kt)("p",null,"\u5982\u679c\u5173\u95ed\u6240\u6709\u5927\u5c0f\u4f18\u5316\uff0c\u5219\u7a7a\u9879\u76ee\u5728 App Store \u4e2d\u5c06\u5c0f\u4e8e 22 MB\u3002\u8fdb\u884c\u4ee3\u7801\u5265\u79bb\u540e\uff0c\u53ea\u5305\u542b\u4e3b\u6444\u50cf\u673a\u7684\u7a7a\u573a\u666f\u53ef\u4ee5\u5728 App Store \u4e2d\u51cf\u5c11\u5230\u5c0f\u4e8e 12 MB\uff08\u7ecf\u8fc7\u538b\u7f29\u5e76\u9644\u52a0 DRM\uff09\u3002"),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u53d1\u5e03\u5230-app-store-\u540e\u4f1a\u589e\u5927"},"\u4e3a\u4ec0\u4e48\u6211\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u53d1\u5e03\u5230 App Store \u540e\u4f1a\u589e\u5927\uff1f"),(0,o.kt)("p",null,"\u53d1\u5e03\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0cApple App Store \u670d\u52a1\u9996\u5148\u52a0\u5bc6\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 zip \u5bf9\u5176\u8fdb\u884c\u538b\u7f29\u3002\u52a0\u5bc6\u4f1a\u589e\u52a0\u4ee3\u7801\u6bb5\u7684\u201c\u968f\u673a\u6027\u201d\uff0c\u4ece\u800c\u4f7f\u538b\u7f29\u6548\u679c\u53d8\u5dee\u3002\u8bf7\u67e5\u770b\u4e0a\u9762\u7684\u201c\u4e3a\u5206\u53d1\u8fdb\u884c\u6784\u5efa\u201d\u4e00\u7ae0\uff0c\u4e86\u89e3\u5982\u4f55\u5728\u63d0\u4ea4\u524d\u4f30\u8ba1 App Store \u5927\u5c0f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2018\u201306\u201314 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,o.kt)("li",{parentName:"ul"},"2017\u201314\u201306 - \u66f4\u65b0\u4e86\u201c\u4f7f\u7528 IL2CPP \u8fdb\u884c\u5265\u79bb\u201d\u90e8\u5206")))}f.isMDXComponent=!0}}]);