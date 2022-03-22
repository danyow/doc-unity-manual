"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79974],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],l={id:"EditingPrefabViaInstance",title:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6",slug:"/prefabs/editing-prefab-via-instance"},o="\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6",s={unversionedId:"unity-overview/creating-gameplay/prefabs/EditingPrefabViaInstance",id:"unity-overview/creating-gameplay/prefabs/EditingPrefabViaInstance",title:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6",description:"\u4e0e\u666e\u901a\u6e38\u620f\u5bf9\u8c61\u76f8\u6bd4\uff0c\u9884\u5236\u4ef6\u5b9e\u4f8b\u7684\u6839\u7684 Inspector \u6709\u4e09\u4e2a\u989d\u5916\u7684\u63a7\u4ef6\uff1a Open \u3001 Select  \u548c  Overrides \u3002",source:"@site/docs/unity-overview/creating-gameplay/prefabs/editing-prefab-via-instance.md",sourceDirName:"unity-overview/creating-gameplay/prefabs",slug:"/prefabs/editing-prefab-via-instance",permalink:"/docs/prefabs/editing-prefab-via-instance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/creating-gameplay/prefabs/editing-prefab-via-instance.md",tags:[],version:"current",frontMatter:{id:"EditingPrefabViaInstance",title:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6",slug:"/prefabs/editing-prefab-via-instance"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u7f16\u8f91\u9884\u5236\u4ef6",permalink:"/docs/prefabs/editing-in-prefab-mode"},next:{title:"\u5d4c\u5957\u9884\u5236\u4ef6",permalink:"/docs/prefabs/nested-prefabs"}},c={},u=[{value:"Overrides \u4e0b\u62c9\u9009\u5355",id:"overrides-\u4e0b\u62c9\u9009\u5355",level:2},{value:"\u4e0a\u4e0b\u6587\u83dc\u5355",id:"\u4e0a\u4e0b\u6587\u83dc\u5355",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6"},"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6"),(0,p.kt)("p",null,"\u4e0e\u666e\u901a\u6e38\u620f\u5bf9\u8c61\u76f8\u6bd4\uff0c\u9884\u5236\u4ef6\u5b9e\u4f8b\u7684\u6839\u7684 Inspector \u6709\u4e09\u4e2a\u989d\u5916\u7684\u63a7\u4ef6\uff1a ",(0,p.kt)("strong",{parentName:"p"},"Open")," \u3001 ",(0,p.kt)("strong",{parentName:"p"},"Select"),"  \u548c  ",(0,p.kt)("strong",{parentName:"p"},"Overrides")," \u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsInspectorControls1.png",alt:"\u9884\u5236\u4ef6\u5b9e\u4f8b\u7684 Inspector \u7a97\u53e3\u4e2d\u7684\u4e09\u4e2a\u9884\u5236\u4ef6\u63a7\u4ef6"})),(0,p.kt)("p",null,"\u9884\u5236\u4ef6\u5b9e\u4f8b\u7684 Inspector \u7a97\u53e3\u4e2d\u7684\u4e09\u4e2a\u9884\u5236\u4ef6\u63a7\u4ef6"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Open"),"  \u6309\u94ae\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6253\u5f00\u5b9e\u4f8b\u6240\u5728\u7684\u9884\u5236\u4ef6\u8d44\u6e90\uff0c\u7136\u540e\u53ef\u4ee5\u7f16\u8f91\u9884\u5236\u4ef6\u8d44\u6e90\uff0c\u4ece\u800c\u66f4\u6539\u5176\u6240\u6709\u5b9e\u4f8b\u3002 ",(0,p.kt)("strong",{parentName:"p"},"Select"),"  \u6309\u94ae\u5728 Project \u7a97\u53e3\u4e2d\u9009\u62e9\u7528\u4e8e\u751f\u6210\u6b64\u5b9e\u4f8b\u7684\u9884\u5236\u4ef6\u8d44\u6e90\u3002 ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u6309\u94ae\u6253\u5f00 Overrides \u4e0b\u62c9\u7a97\u53e3\u3002"),(0,p.kt)("h2",{id:"overrides-\u4e0b\u62c9\u9009\u5355"},"Overrides \u4e0b\u62c9\u9009\u5355"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u4e0b\u62c9\u7a97\u53e3\u663e\u793a\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e0a\u7684\u6240\u6709\u8986\u76d6\u3002\u8fd8\u5141\u8bb8\u5c06\u5b9e\u4f8b\u7684\u8986\u76d6\u5e94\u7528\u4e8e\u9884\u5236\u4ef6\u8d44\u6e90\uff0c\u6216\u5c06\u5b9e\u4f8b\u4e0a\u7684\u8986\u76d6\u6062\u590d\u4e3a\u9884\u5236\u4ef6\u8d44\u6e90\u4e0a\u7684\u503c\u3002\u53ea\u6709\u6839\u9884\u5236\u4ef6\u5b9e\u4f8b\u4f1a\u663e\u793a  ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u4e0b\u62c9\u9009\u5355\u6309\u94ae\uff0c\u5176\u4ed6\u9884\u5236\u4ef6\u5185\u7684\u9884\u5236\u4ef6\u4e0d\u4f1a\u663e\u793a\u6b64\u6309\u94ae\u3002"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u4e0b\u62c9\u7a97\u53e3\u53ef\u4ee5\u5e94\u7528\u6216\u6062\u590d\u5355\u4e2a\u9884\u5236\u4ef6\u8986\u76d6\uff0c\u6216\u4e00\u6b21\u6027\u5e94\u7528\u6216\u6062\u590d\u6240\u6709\u9884\u5236\u4ef6\u8986\u76d6\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u5e94\u7528")," \u8986\u76d6\u4f1a\u4fee\u6539\u9884\u5236\u4ef6\u8d44\u6e90\u3002\u6b64\u64cd\u4f5c\u4f1a\u5c06\u8986\u76d6\uff08\u5f53\u524d\u4ec5\u5728\u60a8\u7684\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e0a\uff09\u7f6e\u4e8e\u8d44\u6e90\u4e4b\u4e0a\u3002\u8fd9\u610f\u5473\u7740\u9884\u5236\u4ef6\u8d44\u6e90\u73b0\u5728\u5177\u6709\u8be5\u4fee\u6539\uff0c\u800c\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e0d\u518d\u5177\u6709\u8be5\u4fee\u6539\u4f5c\u4e3a\u8986\u76d6\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u8fd8\u539f")," \u8986\u76d6\u4f1a\u4fee\u6539\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002\u6b64\u64cd\u4f5c\u5b9e\u8d28\u4e0a\u4f1a\u4e22\u5f03\u60a8\u7684\u8986\u76d6\u5e76\u5c06\u5176\u6062\u590d\u4e3a\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u72b6\u6001\u3002")),(0,p.kt)("p",null,"\u4e0b\u62c9\u7a97\u53e3\u4ee5\u4fee\u6539\u3001\u6dfb\u52a0\u548c\u5220\u9664\u7684\u7ec4\u4ef6\u4ee5\u53ca\u6dfb\u52a0\u7684\u6e38\u620f\u5bf9\u8c61\uff08\u5305\u62ec\u5176\u4ed6\u9884\u5236\u4ef6\uff09\u7684\u5f62\u5f0f\u663e\u793a\u5b9e\u4f8b\u66f4\u6539\u5217\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsOverridesDropdown1.png",alt:"\u67e5\u770b\u9884\u5236\u4ef6\u5b9e\u4f8b\u65f6\uff0cInspector \u7a97\u53e3\u4e2d\u7684 Overrides \u4e0b\u62c9\u9009\u5355"})),(0,p.kt)("p",null,"\u67e5\u770b\u9884\u5236\u4ef6\u5b9e\u4f8b\u65f6\uff0cInspector \u7a97\u53e3\u4e2d\u7684 Overrides \u4e0b\u62c9\u9009\u5355"),(0,p.kt)("p",null,"\u8981\u68c0\u67e5\u6761\u76ee\uff0c\u8bf7\u5355\u51fb\u8be5\u6761\u76ee\u3002\u6b64\u65f6\u5c06\u51fa\u73b0\u4e00\u4e2a\u6d6e\u52a8\u89c6\u56fe\uff0c\u5176\u4e2d\u663e\u793a\u66f4\u6539\u5e76\u5141\u8bb8\u60a8\u8fd8\u539f\u6216\u5e94\u7528\u8be5\u66f4\u6539\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsOverridesDropdownAddedComponent1.png",alt:"Overrides \u4e0b\u62c9\u7a97\u53e3\u4e2d\u9009\u4e2d\u4e86\u6dfb\u52a0\u7684\u7ec4\u4ef6\u8986\u76d6"})),(0,p.kt)("p",null,"Overrides \u4e0b\u62c9\u7a97\u53e3\u4e2d\u9009\u4e2d\u4e86\u6dfb\u52a0\u7684\u7ec4\u4ef6\u8986\u76d6"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u4fee\u6539\u4e86\u503c\u7684\u7ec4\u4ef6\uff0c\u6b64\u89c6\u56fe\u4f1a\u663e\u793a\u9884\u5236\u4ef6\u8d44\u6e90\u4e0a\u7ec4\u4ef6\u503c\u4e0e\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e0a\u5df2\u4fee\u6539\u7ec4\u4ef6\u7684\u5e76\u6392\u6bd4\u8f83\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u5c06\u539f\u59cb\u9884\u5236\u4ef6\u8d44\u6e90\u503c\u4e0e\u5f53\u524d\u8986\u76d6\u8fdb\u884c\u6bd4\u8f83\uff0c\u4ece\u800c\u53ef\u4ee5\u51b3\u5b9a\u662f\u8981\u8fd8\u539f\u8fd8\u662f\u5e94\u7528\u8fd9\u4e9b\u503c\u3002"),(0,p.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u9884\u5236\u4ef6\u8d44\u6e90\u548c\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e0a\u90fd\u5b58\u5728\u201cGermOBlaster\u201d\u5b50\u6e38\u620f\u5bf9\u8c61\uff0c\u4f46\u5b9e\u4f8b\u4e0a\u7684\u7f29\u653e\u5df2\u589e\u5927\u3002\u6b64\u7f29\u653e\u589e\u5927\u7ed3\u679c\u5c31\u662f\u4e00\u4e2a\u5b9e\u4f8b\u8986\u76d6\uff0c\u4e24\u8005\u7684\u89c6\u56fe\u53ef\u4ee5\u5728  ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u4e0b\u62c9\u7a97\u53e3\u4e2d\u8fdb\u884c\u5e76\u6392\u6bd4\u8f83\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsOverridesDropdownCompareComponent1.png",alt:"\u5177\u6709\u6bd4\u8f83\u89c6\u56fe\u7684 Overrides \u4e0b\u62c9\u9009\u5355\uff0c\u5176\u4e2d\u663e\u793a\u4e86\u9884\u5236\u4ef6\u5b9e\u4f8b\u5b50\u6e38\u620f\u5bf9\u8c61\u7684\u53d8\u6362 (Transform) \u7ec4\u4ef6\u4e2d\u7684\u4fee\u6539\u503c"})),(0,p.kt)("p",null,"\u5177\u6709\u6bd4\u8f83\u89c6\u56fe\u7684 Overrides \u4e0b\u62c9\u9009\u5355\uff0c\u5176\u4e2d\u663e\u793a\u4e86\u9884\u5236\u4ef6\u5b9e\u4f8b\u5b50\u6e38\u620f\u5bf9\u8c61\u7684\u53d8\u6362 (Transform) \u7ec4\u4ef6\u4e2d\u7684\u4fee\u6539\u503c"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u4e0b\u62c9\u7a97\u53e3\u8fd8\u6709  ",(0,p.kt)("strong",{parentName:"p"},"Revert All"),"  \u548c  ",(0,p.kt)("strong",{parentName:"p"},"Apply All"),"  \u6309\u94ae\uff0c\u7528\u4e8e\u4e00\u6b21\u6027\u8fd8\u539f\u6216\u5e94\u7528\u6240\u6709\u66f4\u6539\u3002\u5982\u679c\u5728\u5176\u4ed6\u9884\u5236\u4ef6\u4e2d\u6709\u9884\u5236\u4ef6\uff0c\u5219  ",(0,p.kt)("strong",{parentName:"p"},"Apply All"),"  \u6309\u94ae\u59cb\u7ec8\u9002\u7528\u4e8e\u6700\u5916\u9762\u7684\u9884\u5236\u4ef6\uff0c\u5373\u5728\u6839\u6e38\u620f\u5bf9\u8c61\u4e0a\u5177\u6709  ",(0,p.kt)("strong",{parentName:"p"},"Overrides"),"  \u4e0b\u62c9\u9009\u5355\u6309\u94ae\u7684\u9884\u5236\u4ef6\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4e00\u6b21\u9009\u62e9\u591a\u4e2a\u6761\u76ee\uff0cRevert All \u548c Apply All \u6309\u94ae\u5c06\u66ff\u6362\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Revert Selected"),"  \u548c  ",(0,p.kt)("strong",{parentName:"p"},"Apply Selected"),"  \u6309\u94ae\u3002\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u4e00\u6b21\u8fd8\u539f\u6216\u5e94\u7528\u591a\u4e2a\u8986\u76d6\u3002\u7c7b\u4f3c\u4e8e  ",(0,p.kt)("strong",{parentName:"p"},"Apply All"),"  \u6309\u94ae\uff0c ",(0,p.kt)("strong",{parentName:"p"},"Apply Selected"),"  \u6309\u94ae\u59cb\u7ec8\u9002\u7528\u4e8e\u6700\u5916\u9762\u7684\u9884\u5236\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u4e0a\u4e0b\u6587\u83dc\u5355"},"\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,p.kt)("p",null,"\u9664\u4e86 Overrides \u4e0b\u62c9\u7a97\u53e3\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 Inspector \u4e2d\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u6765 ",(0,p.kt)("strong",{parentName:"p"},"\u8fd8\u539f")," \u548c ",(0,p.kt)("strong",{parentName:"p"},"\u5e94\u7528")," \u5404\u4e2a\u8986\u76d6\u3002"),(0,p.kt)("p",null,"\u88ab\u8986\u76d6\u7684\u5c5e\u6027\u4ee5\u7c97\u4f53\u663e\u793a\u3002\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4e0b\u6587\u83dc\u5355\u8fd8\u539f\u6216\u5e94\u7528\u8fd9\u4e9b\u5c5e\u6027\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsContextSingleProperty1.png",alt:"\u5355\u4e2a\u5c5e\u6027\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"})),(0,p.kt)("p",null,"\u5355\u4e2a\u5c5e\u6027\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,p.kt)("p",null,"\u53ef\u901a\u8fc7\u7ec4\u4ef6\u6807\u9898\u7684\u9f7f\u8f6e\u4e0b\u62c9\u9009\u5355\u6309\u94ae\u6216\u4e0a\u4e0b\u6587\u83dc\u5355\u8fd8\u539f\u6216\u5e94\u7528\u5df2\u4fee\u6539\u7684\u7ec4\u4ef6\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsContextModifiedComponent1.png",alt:"\u4fee\u6539\u7684\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"})),(0,p.kt)("p",null,"\u4fee\u6539\u7684\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,p.kt)("p",null,"\u6dfb\u52a0\u7684\u7ec4\u4ef6\u5728\u56fe\u6807\u4e0a\u6709\u4e00\u4e2a\u53e0\u52a0\u7684\u52a0\u53f7\u6807\u793a\u3002\u53ef\u901a\u8fc7\u7ec4\u4ef6\u6807\u9898\u7684\u9f7f\u8f6e\u4e0b\u62c9\u9009\u5355\u6309\u94ae\u6216\u4e0a\u4e0b\u6587\u83dc\u5355\u8fd8\u539f\u6216\u5e94\u7528\u8fd9\u4e9b\u7ec4\u4ef6\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsContextAddedComponent1.png",alt:"\u6dfb\u52a0\u7684\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"})),(0,p.kt)("p",null,"\u6dfb\u52a0\u7684\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,p.kt)("p",null,"\u5220\u9664\u7684\u7ec4\u4ef6\u5728\u56fe\u6807\u4e0a\u6709\u4e00\u4e2a\u53e0\u52a0\u7684\u51cf\u53f7\u6807\u793a\u3002\u53ef\u901a\u8fc7\u7ec4\u4ef6\u6807\u9898\u7684\u9f7f\u8f6e\u4e0b\u62c9\u9009\u5355\u6309\u94ae\u6216\u4e0a\u4e0b\u6587\u83dc\u5355\u8fd8\u539f\u6216\u5e94\u7528\u5220\u9664\u64cd\u4f5c\u3002\u8fd8\u539f\u5220\u9664\u64cd\u4f5c\u4f1a\u4f7f\u7ec4\u4ef6\u6062\u590d\uff0c\u800c\u5e94\u7528\u5220\u9664\u64cd\u4f5c\u8fd8\u4f1a\u5c06\u7ec4\u4ef6\u4ece\u9884\u5236\u4ef6\u8d44\u6e90\u4e2d\u5220\u9664\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsContextRemovedComponent1.png",alt:"\u5220\u9664\u7684\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"})),(0,p.kt)("p",null,"\u5220\u9664\u7684\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,p.kt)("p",null,"\u4f5c\u4e3a\u5b50\u9879\u6dfb\u52a0\u5230\u9884\u5236\u4ef6\u5b9e\u4f8b\u7684\u6e38\u620f\u5bf9\u8c61\uff08\u5305\u62ec\u5176\u4ed6\u9884\u5236\u4ef6\uff09\u5728 Hierarchy \u4e2d\u7684\u56fe\u6807\u4e0a\u6709\u4e00\u4e2a\u53e0\u52a0\u7684\u52a0\u53f7\u6807\u793a\u3002\u53ef\u901a\u8fc7 Hierarchy \u7a97\u53e3\u4e2d\u7684\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u8fd8\u539f\u6216\u5e94\u7528\u8fd9\u4e9b\u6e38\u620f\u5bf9\u8c61\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsContextAddedGameObject1.png",alt:"\u6dfb\u52a0\u7684\u6e38\u620f\u5bf9\u8c61\u5b50\u9879\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"})),(0,p.kt)("p",null,"\u6dfb\u52a0\u7684\u6e38\u620f\u5bf9\u8c61\u5b50\u9879\u7684\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,p.kt)("hr",null),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"2018\u201307\u201331 \u9875\u9762\u5df2\u53d1\u5e03"),(0,p.kt)("li",{parentName:"ul"},"\u5728 2018.3 \u7248\u4e2d\u6dfb\u52a0\u4e86\u5d4c\u5957\u9884\u5236\u4ef6\u548c\u9884\u5236\u4ef6\u53d8\u4f53")))}m.isMDXComponent=!0}}]);