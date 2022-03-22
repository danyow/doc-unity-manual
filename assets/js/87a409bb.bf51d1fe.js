"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37377],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62262:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"NestedPrefabs",title:"\u5d4c\u5957\u9884\u5236\u4ef6",slug:"/prefabs/nested-prefabs"},s="\u5d4c\u5957\u9884\u5236\u4ef6",p={unversionedId:"unity-overview/creating-gameplay/prefabs/NestedPrefabs",id:"unity-overview/creating-gameplay/prefabs/NestedPrefabs",title:"\u5d4c\u5957\u9884\u5236\u4ef6",description:"\u53ef\u4ee5\u5728\u5176\u4ed6\u9884\u5236\u4ef6\u5185\u5305\u542b\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002\u8fd9\u79f0\u4e3a \u5d4c\u5957 \u9884\u5236\u4ef6\u3002\u5d4c\u5957\u9884\u5236\u4ef6\u4fdd\u7559\u4e0e\u81ea\u5df1\u7684\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u94fe\u63a5\uff0c\u540c\u65f6\u4e5f\u6784\u6210\u53e6\u4e00\u4e2a\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u4e00\u90e8\u5206\u3002",source:"@site/docs/unity-overview/creating-gameplay/prefabs/nested-prefabs.md",sourceDirName:"unity-overview/creating-gameplay/prefabs",slug:"/prefabs/nested-prefabs",permalink:"/docs/prefabs/nested-prefabs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/creating-gameplay/prefabs/nested-prefabs.md",tags:[],version:"current",frontMatter:{id:"NestedPrefabs",title:"\u5d4c\u5957\u9884\u5236\u4ef6",slug:"/prefabs/nested-prefabs"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6",permalink:"/docs/prefabs/editing-prefab-via-instance"},next:{title:"\u5b9e\u4f8b\u8986\u76d6",permalink:"/docs/prefabs/prefab-instance-overrides"}},c={},u=[{value:"\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6dfb\u52a0\u5d4c\u5957\u9884\u5236\u4ef6",id:"\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6dfb\u52a0\u5d4c\u5957\u9884\u5236\u4ef6",level:2},{value:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u5d4c\u5957\u9884\u5236\u4ef6",id:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u5d4c\u5957\u9884\u5236\u4ef6",level:2}],f={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5d4c\u5957\u9884\u5236\u4ef6"},"\u5d4c\u5957\u9884\u5236\u4ef6"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u5176\u4ed6\u9884\u5236\u4ef6\u5185\u5305\u542b\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002\u8fd9\u79f0\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"\u5d4c\u5957")," \u9884\u5236\u4ef6\u3002\u5d4c\u5957\u9884\u5236\u4ef6\u4fdd\u7559\u4e0e\u81ea\u5df1\u7684\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u94fe\u63a5\uff0c\u540c\u65f6\u4e5f\u6784\u6210\u53e6\u4e00\u4e2a\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u4e00\u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6dfb\u52a0\u5d4c\u5957\u9884\u5236\u4ef6"},"\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6dfb\u52a0\u5d4c\u5957\u9884\u5236\u4ef6"),(0,i.kt)("p",null,"\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u50cf\u5728\u573a\u666f\u4e2d\u4e00\u6837\u6dfb\u52a0\u548c\u4f7f\u7528\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002\u53ef\u4ee5\u5c06\u9884\u5236\u4ef6\u8d44\u6e90\u4ece Project \u7a97\u53e3\u62d6\u52a8\u5230 Hierarchy \u7a97\u53e3\u6216 Scene \u89c6\u56fe\uff0c\u7531\u6b64\u4ece\u5df2\u6253\u5f00\u7684\u9884\u5236\u4ef6\u4e2d\u7684\u8be5\u8d44\u6e90\u521b\u5efa\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\u6253\u5f00\u7684\u9884\u5236\u4ef6\u7684\u6839\u6e38\u620f\u5bf9\u8c61\u4e0d\u4f1a\u663e\u793a\u84dd\u8272\u7acb\u65b9\u4f53\u9884\u5236\u4ef6\u56fe\u6807\uff0c\u4f46\u662f\u5176\u4ed6\u9884\u5236\u4ef6\u7684\u6240\u6709\u5b9e\u4f8b\u90fd\u4f1a\u663e\u793a\u8be5\u56fe\u6807\u3002\u8fd8\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u9884\u5236\u4ef6\u5b9e\u4f8b\u6dfb\u52a0\u8986\u76d6\uff0c\u5c31\u50cf\u5728\u573a\u666f\u4e2d\u4f7f\u7528\u9884\u5236\u4ef6\u5b9e\u4f8b\u4e00\u6837\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsNestedPrefab.png",alt:"\u5de6\uff1a\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\uff0cGermOBlaster\u9884\u5236\u4ef6\u5305\u542b\uff08\u5d4c\u5957\uff09\u5728GermSlimeTarget\u9884\u5236\u4ef6\u4e2d\u3002\u53f3\uff1a\u573a\u666f\u4e2d\u7684GermSlimeTarget\u9884\u5236\u4ef6\u5b9e\u4f8b\u5305\u542bGermOBlaster\u3002"})),(0,i.kt)("p",null,"\u5de6\uff1a\u5728\u9884\u5236\u4ef6\u6a21\u5f0f\u4e0b\uff0c\u201cGermOBlaster\u201d\u9884\u5236\u4ef6\u5305\u542b\uff08\u5d4c\u5957\uff09\u5728\u201cGermSlimeTarget\u201d\u9884\u5236\u4ef6\u4e2d\u3002\u53f3\uff1a\u573a\u666f\u4e2d\u7684\u201cGermSlimeTarget\u201d\u9884\u5236\u4ef6\u5b9e\u4f8b\u5305\u542b\u201cGermOBlaster\u201d\u3002"),(0,i.kt)("h2",{id:"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u5d4c\u5957\u9884\u5236\u4ef6"},"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u5d4c\u5957\u9884\u5236\u4ef6"),(0,i.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5c06\u9884\u5236\u4ef6\u5b9e\u4f8b\u4f5c\u4e3a\u5b50\u9879\u6dfb\u52a0\u5230\u573a\u666f\u4e2d\u7684\u53e6\u4e00\u4e2a\u9884\u5236\u4ef6\u5b9e\u4f8b\uff0c\u800c\u65e0\u9700\u8fdb\u5165\u9884\u5236\u4ef6\u6a21\u5f0f\uff0c\u5c31\u50cf\u53ef\u4ee5\u6dfb\u52a0\u4efb\u4f55\u5176\u4ed6\u6e38\u620f\u5bf9\u8c61\u4e00\u6837\u3002\u8fd9\u6837\u6dfb\u52a0\u7684\u9884\u5236\u4ef6\u5b9e\u4f8b\u5728 Hierarchy \u7a97\u53e3\u4e2d\u7684\u56fe\u6807\u4e0a\u4f1a\u53e0\u52a0\u4e00\u4e2a\u52a0\u53f7\u6807\u793a\uff0c\u8868\u793a\u8fd9\u662f\u5bf9\u5916\u5c42\u9884\u5236\u4ef6\u7684\u7279\u5b9a\u5b9e\u4f8b\u7684\u8986\u76d6\u3002"),(0,i.kt)("p",null,"\u6dfb\u52a0\u7684\u9884\u5236\u4ef6\u53ef\u4ee5\u6309\u7167\u4e0e\u5176\u4ed6\u8986\u76d6\u76f8\u540c\u7684\u65b9\u5f0f\uff08\u901a\u8fc7 Overrides \u4e0b\u62c9\u7a97\u53e3\uff0c\u6216\u901a\u8fc7 Hierarchy \u4e2d\u6e38\u620f\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\uff09\u8fd8\u539f\u6216\u5e94\u7528\u4e8e\u5916\u5c42\u9884\u5236\u4ef6\uff0c\u5982",(0,i.kt)("a",{parentName:"p",href:"/docs/prefabs/editing-prefab-via-instance"},"\u901a\u8fc7\u9884\u5236\u4ef6\u7684\u5b9e\u4f8b\u7f16\u8f91\u9884\u5236\u4ef6"),"\u4e2d\u6240\u8ff0\u3002Overrides \u4e0b\u62c9\u9009\u5355\u6309\u94ae\u4ec5\u4f4d\u4e8e\u5916\u5c42\u9884\u5236\u4ef6\u4e0a\u3002\u5e94\u7528\u540e\u7684\u9884\u5236\u4ef6\u4e0d\u518d\u663e\u793a\u52a0\u53f7\u6807\u793a\uff0c\u56e0\u4e3a\u5b83\u4e0d\u518d\u662f\u8986\u76d6\uff0c\u800c\u662f\u5df2\u7ecf\u5d4c\u5957\u5728\u5916\u5c42\u9884\u5236\u4ef6\u8d44\u6e90\u672c\u8eab\u4e2d\u3002\u4f46\u662f\uff0c\u8be5\u9884\u5236\u4ef6\u5374\u4f1a\u4fdd\u7559\u84dd\u8272\u7acb\u65b9\u4f53\u56fe\u6807\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u662f\u4e00\u4e2a\u9884\u5236\u4ef6\u5b9e\u4f8b\uff0c\u5e76\u4f1a\u4fdd\u7559\u4e0e\u81ea\u5df1\u7684\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u8fde\u63a5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PrefabsOverrideVsNested.png",alt:"\u5de6\uff1aGermOBlaster\u9884\u5236\u4ef6\u4f5c\u4e3a\u8986\u76d6\u6dfb\u52a0\u5230GermSlimeTarget\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002\u53f3\uff1aGermOBlaster\u9884\u5236\u4ef6\u5df2\u5e94\u7528\u4e8eGermSlimeTarget\u9884\u5236\u4ef6\uff0c\u73b0\u5728\u662fGermSlimeTarget\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u5d4c\u5957\u9884\u5236\u4ef6\u3002"})),(0,i.kt)("p",null,"\u5de6\uff1a\u201cGermOBlaster\u201d\u9884\u5236\u4ef6\u4f5c\u4e3a\u8986\u76d6\u6dfb\u52a0\u5230\u201cGermSlimeTarget\u201d\u9884\u5236\u4ef6\u5b9e\u4f8b\u3002\u53f3\uff1a\u201cGermOBlaster\u201d\u9884\u5236\u4ef6\u5df2\u5e94\u7528\u4e8e\u201cGermSlimeTarget\u201d\u9884\u5236\u4ef6\uff0c\u73b0\u5728\u662f\u201cGermSlimeTarget\u201d\u9884\u5236\u4ef6\u8d44\u6e90\u7684\u5d4c\u5957\u9884\u5236\u4ef6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2018\u201307\u201331 \u9875\u9762\u5df2\u53d1\u5e03"),(0,i.kt)("li",{parentName:"ul"},"\u5728 2018.3 \u7248\u4e2d\u6dfb\u52a0\u4e86\u5d4c\u5957\u9884\u5236\u4ef6\u548c\u9884\u5236\u4ef6\u53d8\u4f53")))}m.isMDXComponent=!0}}]);