"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80357],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37494:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"script-Serialization-BuiltInUse",title:"\u5185\u7f6e\u5e8f\u5217\u5316",slug:"/script-serialization/script-serialization-built-in-use"},s="\u5185\u7f6e\u5e8f\u5217\u5316",l={unversionedId:"scripting-section/unity-architecture/script-serialization/script-Serialization-BuiltInUse",id:"scripting-section/unity-architecture/script-serialization/script-Serialization-BuiltInUse",title:"\u5185\u7f6e\u5e8f\u5217\u5316",description:"Unity \u7684\u4e00\u4e9b\u5185\u7f6e\u529f\u80fd\u81ea\u52a8\u4f7f\u7528\u5e8f\u5217\u5316\u6280\u672f\u3002\u8fd9\u4e9b\u529f\u80fd\u5982\u4e0b\u6240\u8ff0\u3002",source:"@site/docs/scripting-section/unity-architecture/script-serialization/script-serialization-built-in-use.md",sourceDirName:"scripting-section/unity-architecture/script-serialization",slug:"/script-serialization/script-serialization-built-in-use",permalink:"/docs/script-serialization/script-serialization-built-in-use",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/script-serialization/script-serialization-built-in-use.md",tags:[],version:"current",frontMatter:{id:"script-Serialization-BuiltInUse",title:"\u5185\u7f6e\u5e8f\u5217\u5316",slug:"/script-serialization/script-serialization-built-in-use"},sidebar:"tutorialSidebar",previous:{title:"JSON \u5e8f\u5217\u5316",permalink:"/docs/script-serialization/jsonserialization"},next:{title:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316",permalink:"/docs/script-serialization/script-serialization-custom"}},p={},u=[{value:"\u4fdd\u5b58\u548c\u52a0\u8f7d",id:"\u4fdd\u5b58\u548c\u52a0\u8f7d",level:4},{value:"Inspector \u7a97\u53e3",id:"inspector-\u7a97\u53e3",level:4},{value:"\u5728 Unity Editor \u4e2d\u91cd\u65b0\u52a0\u8f7d\u811a\u672c",id:"\u5728-unity-editor-\u4e2d\u91cd\u65b0\u52a0\u8f7d\u811a\u672c",level:4},{value:"\u9884\u5236\u4ef6",id:"\u9884\u5236\u4ef6",level:4},{value:"\u5b9e\u4f8b\u5316",id:"\u5b9e\u4f8b\u5316",level:4},{value:"\u5378\u8f7d\u672a\u4f7f\u7528\u7684\u8d44\u6e90",id:"\u5378\u8f7d\u672a\u4f7f\u7528\u7684\u8d44\u6e90",level:4}],d={toc:u};function f(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5185\u7f6e\u5e8f\u5217\u5316"},"\u5185\u7f6e\u5e8f\u5217\u5316"),(0,a.kt)("p",null,"Unity \u7684\u4e00\u4e9b\u5185\u7f6e\u529f\u80fd\u81ea\u52a8\u4f7f\u7528\u5e8f\u5217\u5316\u6280\u672f\u3002\u8fd9\u4e9b\u529f\u80fd\u5982\u4e0b\u6240\u8ff0\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605\u6709\u5173",(0,a.kt)("a",{parentName:"p",href:"/docs/script-serialization"},"\u811a\u672c\u5e8f\u5217\u5316"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h4",{id:"\u4fdd\u5b58\u548c\u52a0\u8f7d"},"\u4fdd\u5b58\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"Unity \u4f7f\u7528\u5e8f\u5217\u5316\u6280\u672f\u4ece\u8ba1\u7b97\u673a\u7684\u786c\u76d8\u9a71\u52a8\u5668\u52a0\u8f7d\u548c\u4fdd\u5b58",(0,a.kt)("a",{parentName:"p",href:"/docs/creating-scenes"},"\u573a\u666f"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/docs/asset-workflow"},"\u8d44\u6e90"),"\u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/asset-bundles-intro"},"AssetBundle"),"\u3002\u8fd9\u5305\u62ec\u4fdd\u5b58\u5728\u60a8\u81ea\u5df1\u7684\u811a\u672c API \u5bf9\u8c61\uff08\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.html"},"MonoBehaviour")," \u7ec4\u4ef6\u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/scripting-important-classes/class-scriptable-object"},"ScriptableObject"),"\uff09\u4e2d\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u8fd9\u53d1\u751f\u5728 Editor \u7684 Play \u6a21\u5f0f\u548c Edit \u6a21\u5f0f\u4e2d\u3002"),(0,a.kt)("h4",{id:"inspector-\u7a97\u53e3"},"Inspector \u7a97\u53e3"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-the-inspector"},"Inspector \u7a97\u53e3"),"\u4e2d\u67e5\u770b\u6216\u66f4\u6539\u6e38\u620f\u5bf9\u8c61\u7684\u7ec4\u4ef6\u5b57\u6bb5\u7684\u503c\u65f6\uff0cUnity \u4f1a\u5e8f\u5217\u5316\u6b64\u6570\u636e\uff0c\u7136\u540e\u5728 Inspector \u7a97\u53e3\u4e2d\u663e\u793a\u6570\u636e\u3002Inspector \u7a97\u53e3\u5728\u663e\u793a\u5b57\u6bb5\u503c\u65f6\u4e0d\u4e0e Unity Scripting API \u901a\u4fe1\u3002\u5982\u679c\u5728\u811a\u672c\u4e2d\u4f7f\u7528\u5c5e\u6027\uff0c\u5219\u5728 Inspector \u7a97\u53e3\u4e2d\u67e5\u770b\u6216\u66f4\u6539\u503c\u65f6\uff0c\u7edd\u4e0d\u4f1a\u8c03\u7528\u4efb\u4f55\u5c5e\u6027 getter \u548c setter\uff0c\u56e0\u4e3a Unity \u4f1a\u76f4\u63a5\u5e8f\u5217\u5316 Inspector \u7a97\u53e3\u5b57\u6bb5\u3002"),(0,a.kt)("h4",{id:"\u5728-unity-editor-\u4e2d\u91cd\u65b0\u52a0\u8f7d\u811a\u672c"},"\u5728 Unity Editor \u4e2d\u91cd\u65b0\u52a0\u8f7d\u811a\u672c"),(0,a.kt)("p",null,"\u66f4\u6539\u5e76\u4fdd\u5b58\u811a\u672c\u65f6\uff0cUnity \u4f1a\u91cd\u65b0\u52a0\u8f7d\u6240\u6709\u5f53\u524d\u52a0\u8f7d\u7684\u811a\u672c\u6570\u636e\u3002\u5b83\u9996\u5148\u5c06\u6240\u6709\u53ef\u5e8f\u5217\u5316\u53d8\u91cf\u5b58\u50a8\u5728\u6240\u6709\u52a0\u8f7d\u7684\u811a\u672c\u4e2d\uff0c\u5e76\u5728\u52a0\u8f7d\u811a\u672c\u540e\u6062\u590d\u5b83\u4eec\u3002\u91cd\u65b0\u52a0\u8f7d\u811a\u672c\u540e\uff0c\u6240\u6709\u4e0d\u53ef\u5e8f\u5217\u5316\u7684\u6570\u636e\u90fd\u5c06\u4e22\u5931\u3002"),(0,a.kt)("p",null,"\u8fd9\u4f1a\u5f71\u54cd\u6240\u6709 Editor \u7a97\u53e3\u4ee5\u53ca\u9879\u76ee\u4e2d\u7684\u6240\u6709 MonoBehaviour\u3002\u4e0e Unity \u4e2d\u7684\u5176\u4ed6\u5e8f\u5217\u5316\u60c5\u51b5\u4e0d\u540c\uff0c\u79c1\u6709\u5b57\u6bb5\u5728\u91cd\u65b0\u52a0\u8f7d\u65f6\u4f1a\u9ed8\u8ba4\u5e8f\u5217\u5316\uff0c\u5373\u4f7f\u5b83\u4eec\u6ca1\u6709\u201cSerializeField\u201d\u5c5e\u6027\u4e5f\u662f\u5982\u6b64\u3002"),(0,a.kt)("h4",{id:"\u9884\u5236\u4ef6"},"\u9884\u5236\u4ef6"),(0,a.kt)("p",null,"\u5728\u5e8f\u5217\u5316\u80cc\u666f\u4e0b\uff0c",(0,a.kt)("a",{parentName:"p",href:"/docs/prefabs"},"\u9884\u5236\u4ef6"),"\u662f\u4e00\u4e2a\u6216\u591a\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/docs/game-objects"},"\u6e38\u620f\u5bf9\u8c61"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/docs/game-objects/components"},"\u7ec4\u4ef6"),"\u7684\u5e8f\u5217\u5316\u7684\u6570\u636e\u3002\u9884\u5236\u4ef6\u5b9e\u4f8b\u5305\u542b\u5bf9\u9884\u5236\u4ef6\u6e90\u53ca\u5176\u4e00\u7cfb\u5217\u4fee\u6539\u7684\u5f15\u7528\u3002\u8fd9\u4e9b\u4fee\u6539\u662f Unity \u4e3a\u4e86\u521b\u5efa\u7279\u5b9a\u9884\u5236\u4ef6\u5b9e\u4f8b\u800c\u9700\u8981\u5bf9\u9884\u5236\u4ef6\u6e90\u8fdb\u884c\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u53ea\u6709\u5728 Unity Editor \u4e2d\u7f16\u8f91\u9879\u76ee\u65f6\uff0c\u9884\u5236\u4ef6\u5b9e\u4f8b\u624d\u5b58\u5728\u3002\u5728\u9879\u76ee\u6784\u5efa\u671f\u95f4\uff0cUnity Editor \u4ece\u4e24\u7ec4\u5e8f\u5217\u5316\u6570\u636e\uff08\u9884\u5236\u4ef6\u6e90\u548c\u9884\u5236\u4ef6\u5b9e\u4f8b\u7684\u4fee\u6539\uff09\u8fdb\u884c\u6e38\u620f\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5316\u3002"),(0,a.kt)("h4",{id:"\u5b9e\u4f8b\u5316"},"\u5b9e\u4f8b\u5316"),(0,a.kt)("p",null,"\u5bf9",(0,a.kt)("a",{parentName:"p",href:"/docs/creating-scenes"},"\u573a\u666f"),"\u4e2d\u5b58\u5728\u7684\u4efb\u4f55\u5bf9\u8c61\uff08\u4f8b\u5982",(0,a.kt)("a",{parentName:"p",href:"/docs/prefabs"},"\u9884\u5236\u4ef6"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"/docs/game-objects"},"\u6e38\u620f\u5bf9\u8c61"),"\uff09\u8c03\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Object.Instantiate.html"},"Instantiate")," \u65f6\uff0cUnity \u90fd\u4f1a\u5bf9\u5176\u8fdb\u884c\u5e8f\u5217\u5316\u3002\u5728\u8fd0\u884c\u65f6\u548c\u5728 Editor \u4e2d\u90fd\u662f\u5982\u6b64\u3002\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Object.html"},"UnityEngine.Object")," \u6d3e\u751f\u7684\u4e00\u5207\u5747\u53ef\u5e8f\u5217\u5316\u3002"),(0,a.kt)("p",null,"Unity \u968f\u540e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6e38\u620f\u5bf9\u8c61\u5e76\u5c06\u6570\u636e\u53cd\u5e8f\u5217\u5316\u5230\u65b0\u7684\u6e38\u620f\u5bf9\u8c61\u4e0a\u3002\u63a5\u4e0b\u6765\uff0cUnity \u5728\u53e6\u4e00\u4e2a\u4e0d\u540c\u7684\u53d8\u4f53\u4e2d\u8fd0\u884c\u76f8\u540c\u7684\u5e8f\u5217\u5316\u4ee3\u7801\uff0c\u4ee5\u62a5\u544a\u6b63\u5728\u5f15\u7528\u7684\u5176\u4ed6 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityEngine.Objects"),"\u3002\u5b83\u4f1a\u68c0\u67e5\u6240\u6709\u5f15\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityEngine.Objects")," \u4ee5\u67e5\u770b\u5b83\u4eec\u662f\u5426\u662f\u8981\u5b9e\u4f8b\u5316\u7684\u6570\u636e\u7684\u4e00\u90e8\u5206\u3002\u5982\u679c\u5f15\u7528\u6307\u5411\u201c\u5916\u90e8\u201d\uff0c\u4f8b\u5982\u7eb9\u7406\uff0c\u5219 Unity \u4f1a\u4fdd\u6301\u8be5\u5f15\u7528\u4e0d\u53d8\u3002\u5982\u679c\u5f15\u7528\u6307\u5411\u201c\u5185\u90e8\u201d\uff0c\u4f8b\u5982\u5b50\u6e38\u620f\u5bf9\u8c61\uff0c\u5219 Unity \u4f1a\u4fee\u8865\u5bf9\u76f8\u5e94\u526f\u672c\u7684\u5f15\u7528\u3002"),(0,a.kt)("h4",{id:"\u5378\u8f7d\u672a\u4f7f\u7528\u7684\u8d44\u6e90"},"\u5378\u8f7d\u672a\u4f7f\u7528\u7684\u8d44\u6e90"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Resource.GarbageCollectSharedAssets()")," \u662f\u672c\u673a Unity \u5783\u573e\u56de\u6536\u5668\uff0c\u4e0e\u6807\u51c6 C# \u5783\u573e\u56de\u6536\u5668\u6267\u884c\u4e0d\u540c\u7684\u529f\u80fd\u3002\u8be5\u5783\u573e\u56de\u6536\u5668\u5728\u60a8\u52a0\u8f7d\u573a\u666f\u4e4b\u540e\u8fd0\u884c\uff0c\u68c0\u67e5\u4e0d\u518d\u5f15\u7528\u7684\u5bf9\u8c61\uff08\u5982\u7eb9\u7406\uff09\uff0c\u5e76\u5b89\u5168\u5378\u8f7d\u5b83\u4eec\u3002\u672c\u673a Unity \u5783\u573e\u56de\u6536\u5668\u5728\u4e00\u4e2a\u53d8\u4f53\u4e2d\u8fd0\u884c\u5e8f\u5217\u5316\u7a0b\u5e8f\uff0c\u800c\u5728\u6b64\u53d8\u4f53\u4e2d\uff0c\u5bf9\u8c61\u4f1a\u62a5\u544a\u5bf9\u5916\u90e8 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityEngine.Objects")," \u7684\u6240\u6709\u5f15\u7528\u3002\u901a\u8fc7\u6b64\u65b9\u5f0f\u5373\u53ef\u5c06\u4e00\u4e2a\u573a\u666f\u4f7f\u7528\u8fc7\u7684\u7eb9\u7406\u5728\u4e0b\u4e00\u4e2a\u573a\u666f\u4e2d\u5378\u8f7d\u3002 ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u2022 2017\u201305\u201315 \u9875\u9762\u5df2\u53d1\u5e03",(0,a.kt)("br",null)))}f.isMDXComponent=!0}}]);