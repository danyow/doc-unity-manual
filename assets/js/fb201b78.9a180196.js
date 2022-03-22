"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82383],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),s=a,y=d["".concat(u,".").concat(s)]||d[s]||c[s]||l;return n?r.createElement(y,i(i({ref:e},m),{},{components:n})):r.createElement(y,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6163:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"UnityYAML",title:"UnityYAML",slug:"/text-scene-format/unity-yaml"},u="UnityYAML",p={unversionedId:"unity-overview/editor-features/text-scene-format/UnityYAML",id:"unity-overview/editor-features/text-scene-format/UnityYAML",title:"UnityYAML",description:"Unity \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u4f18\u5316 YAML \u5e93\uff08\u79f0\u4e3a UnityYAML\uff09\u3002UnityYAML \u5e93\u4e0d\u652f\u6301\u5b8c\u6574\u7684 YAML \u89c4\u8303\u3002\u672c\u6587\u6863\u6982\u8ff0 UnityYAML \u652f\u6301 YAML \u89c4\u8303\u7684\u54ea\u4e9b\u90e8\u5206\u3002",source:"@site/docs/unity-overview/editor-features/text-scene-format/unity-yaml.md",sourceDirName:"unity-overview/editor-features/text-scene-format",slug:"/text-scene-format/unity-yaml",permalink:"/docs/text-scene-format/unity-yaml",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/editor-features/text-scene-format/unity-yaml.md",tags:[],version:"current",frontMatter:{id:"UnityYAML",title:"UnityYAML",slug:"/text-scene-format/unity-yaml"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u5e8f\u5217\u5316\u6587\u4ef6\u7684\u683c\u5f0f",permalink:"/docs/text-scene-format/format-description"},next:{title:"YAML \u573a\u666f\u6587\u4ef6\u7684\u4e00\u4e2a\u793a\u4f8b",permalink:"/docs/text-scene-format/yamlscene-example"}},m={},c=[{value:"\u652f\u6301\u7684\u529f\u80fd",id:"\u652f\u6301\u7684\u529f\u80fd",level:2},{value:"\u5728\u591a\u884c\u666e\u901a\u6807\u91cf\u4e0a\u7f29\u8fdb\u7684\u793a\u4f8b\uff1a",id:"\u5728\u591a\u884c\u666e\u901a\u6807\u91cf\u4e0a\u7f29\u8fdb\u7684\u793a\u4f8b",level:3},{value:"\u4e0d\u53d7\u652f\u6301\u7684\u529f\u80fd",id:"\u4e0d\u53d7\u652f\u6301\u7684\u529f\u80fd",level:2},{value:"\u539f\u59cb\u5757\u5e8f\u5217\u7684\u793a\u4f8b",id:"\u539f\u59cb\u5757\u5e8f\u5217\u7684\u793a\u4f8b",level:3}],d={toc:c};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"unityyaml"},"UnityYAML"),(0,l.kt)("p",null,"Unity \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u4f18\u5316 YAML \u5e93\uff08\u79f0\u4e3a UnityYAML\uff09\u3002UnityYAML \u5e93\u4e0d\u652f\u6301",(0,l.kt)("a",{parentName:"p",href:"https://yaml.org/spec/"},"\u5b8c\u6574\u7684 YAML \u89c4\u8303"),"\u3002\u672c\u6587\u6863\u6982\u8ff0 UnityYAML \u652f\u6301 YAML \u89c4\u8303\u7684\u54ea\u4e9b\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u65e0\u6cd5\u5728\u5916\u90e8\u751f\u6210\u6216\u7f16\u8f91 UnityYAML \u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u529f\u80fd"},"\u652f\u6301\u7684\u529f\u80fd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u652f\u6301")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6620\u5c04")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML \u652f\u6301\u6d41\u6837\u5f0f\u548c\u5757\u6837\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6807\u91cf")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML \u652f\u6301\u53cc\u5f15\u53f7\u548c\u5355\u5f15\u53f7\u6807\u91cf\u4ee5\u53ca\u666e\u901a\u6807\u91cf\u3002\u53ef\u4ee5\u5c06\u6807\u91cf\u62c6\u5206\u4e3a\u591a\u884c\u3002\u8bf7\u6ce8\u610f\uff0c\u591a\u884c\u6807\u91cf\u53ef\u80fd\u4f1a\u5728\u89e3\u6790\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u6027\u80fd\u548c\u5185\u5b58\u5f00\u9500\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u5206\u6210\u591a\u884c\u7684\u666e\u901a\u6807\u91cf\u5fc5\u987b\u6bd4\u524d\u4e00\u884c\u7f29\u8fdb\u66f4\u591a\u3002\u8bf7\u53c2\u9605\u4e0b\u8868\u4ee5\u67e5\u770b\u793a\u4f8b\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u60a8\u53ef\u4ee5\u5728\u6807\u91cf\u4e2d\u4f7f\u7528 UTF\u20138 \u5b57\u7b26\uff0c\u4f46\u662f UnityYAML \u4ec5\u5728\u8fd9\u4e9b\u5b57\u7b26\u662f\u53cc\u5f15\u53f7\u6807\u91cf\u7684\u4e00\u90e8\u5206\u65f6\u624d\u4f1a\u5bf9\u8fd9\u4e9b\u5b57\u7b26\u89e3\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u5e8f\u5217")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML \u652f\u6301\u6620\u5c04\u3001\u5757\u6837\u5f0f\u4ee5\u53ca\u5305\u542b\u5757\u6620\u5c04\u7684\u5757\u5e8f\u5217\u3002")))),(0,l.kt)("h3",{id:"\u5728\u591a\u884c\u666e\u901a\u6807\u91cf\u4e0a\u7f29\u8fdb\u7684\u793a\u4f8b"},"\u5728\u591a\u884c\u666e\u901a\u6807\u91cf\u4e0a\u7f29\u8fdb\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"parent: This is a\n  multi-line scalar\n^\n|\n")),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u7f29\u8fdb\uff0c\u5219\u6807\u91cf\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"This is a"),"\uff0c\u5e76\u53ef\u80fd\u89e6\u53d1\u8d44\u6e90\u7684\u8fdb\u4e00\u6b65\u89e3\u6790\u3002"),(0,l.kt)("h2",{id:"\u4e0d\u53d7\u652f\u6301\u7684\u529f\u80fd"},"\u4e0d\u53d7\u652f\u6301\u7684\u529f\u80fd"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u652f\u6301")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Chomping \u6307\u793a\u7b26")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML does not support using ",(0,l.kt)("inlineCode",{parentName:"td"},"+")," and `")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u91ca")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML \u4e0d\u652f\u6301\u6ce8\u91ca\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u590d\u6742\u6620\u5c04\u952e")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML \u4e0d\u652f\u6301\u590d\u6742\u6620\u5c04\u952e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u591a\u4e2a\u6587\u6863")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9605\u8bfb\u5668\u4f1a\u8df3\u8fc7\u6587\u4ef6\u9876\u90e8\u7684\u6587\u6863\u548c\u6807\u7b7e\u524d\u7f00\uff0c\u4f46\u4e0d\u4f1a\u5904\u7406\u7531\u591a\u4e2a\u6587\u6863\u7ec4\u6210\u7684 YAML \u8f93\u5165\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u539f\u59cb\u5757\u5e8f\u5217")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 UnityYAML \u4e2d\uff0c\u51e0\u4e4e\u6240\u6709\u8282\u70b9\u90fd\u662f\u6620\u5c04\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u6240\u6709\u5e8f\u5217\u90fd\u5fc5\u987b\u662f\u67d0\u4e2a\u6620\u5c04\u7684\u503c\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u8bf7\u53c2\u9605\u4e0b\u8868\u4ee5\u67e5\u770b\u793a\u4f8b\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u533f\u540d\u5e8f\u5217\u4f1a\u589e\u52a0\u89e3\u6790\u5668\u7684\u590d\u6742\u6027\u3002\u60a8\u4e0d\u80fd\u4f7f\u7528\u7f29\u8fdb\u6765\u786e\u5b9a\u5e8f\u5217\u5143\u7d20\u662f\u5426\u5df2\u5728 UnityYAML \u4e2d\u5b8c\u6210\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6807\u7b7e")),(0,l.kt)("td",{parentName:"tr",align:null},"UnityYAML \u4e0d\u652f\u6301\u6807\u7b7e\u3002")))),(0,l.kt)("h3",{id:"\u539f\u59cb\u5757\u5e8f\u5217\u7684\u793a\u4f8b"},"\u539f\u59cb\u5757\u5e8f\u5217\u7684\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var:\n  - 1\n  - 2\n  - 3\n")),(0,l.kt)("p",null,"\u8be5\u5e8f\u5217\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u4e0a\u7684\u67e5\u627e\uff0c\u56e0\u6b64\u4ee5\u4e0b\u5185\u5bb9\u4e0d\u8d77\u4f5c\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- 1\n- 2\n- 3\n")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2019\u201305\u201313 \u9875\u9762\u5df2\u53d1\u5e03"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2019.3/Documentation/Manual/30_search.html?q=newin20193"},"2019.3")," \u4e2d\u7684\u65b0\u529f\u80fd NewIn20193")))}s.isMDXComponent=!0}}]);