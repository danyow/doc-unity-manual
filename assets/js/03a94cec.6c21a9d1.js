"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84504],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return b}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(t),b=l,m=y["".concat(s,".").concat(b)]||y[b]||p[b]||r;return t?n.createElement(m,o(o({ref:a},u),{},{components:t})):n.createElement(m,o({ref:a},u))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=y;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4134:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),o=["components"],i={id:"Playables",title:"Playables API",slug:"/playables"},s="Playables API",c={unversionedId:"animation-section/playables/Playables",id:"animation-section/playables/Playables",title:"Playables API",description:"Playables API \u63d0\u4f9b\u4e00\u79cd\u901a\u8fc7\u7ec4\u7ec7\u548c\u8bc4\u4f30\u6811\u72b6\u7ed3\u6784\uff08\u79f0\u4e3a PlayableGraph\uff09\u4e2d\u7684\u6570\u636e\u6e90\u6765\u521b\u5efa\u5de5\u5177\u3001\u6548\u679c\u6216\u5176\u4ed6\u6e38\u620f\u673a\u5236\u7684\u65b9\u6cd5\u3002PlayableGraph \u5141\u8bb8\u60a8\u6df7\u5408\u3001\u878d\u5408\u548c\u4fee\u6539\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u5e76\u901a\u8fc7\u5355\u4e2a\u8f93\u51fa\u64ad\u653e\u5b83\u4eec\u3002",source:"@site/docs/animation-section/playables/playables.md",sourceDirName:"animation-section/playables",slug:"/playables",permalink:"/doc-unity-manual/docs/playables",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-section/playables/playables.md",tags:[],version:"current",frontMatter:{id:"Playables",title:"Playables API",slug:"/playables"},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u548c\u4f18\u5316",permalink:"/doc-unity-manual/docs/animation-section/mecanim-peformanceand-optimization"},next:{title:"\u53ef\u64ad\u653e\u9879 (Playable) \u793a\u4f8b",permalink:"/doc-unity-manual/docs/playables/playables-examples"}},u={},p=[{value:"\u53ef\u64ad\u653e\u9879 (Playable) \u4e0e\u52a8\u753b\u7ec4\u4ef6",id:"\u53ef\u64ad\u653e\u9879-playable-\u4e0e\u52a8\u753b\u7ec4\u4ef6",level:2},{value:"Playables API \u7684\u4f18\u70b9",id:"playables-api-\u7684\u4f18\u70b9",level:2}],y={toc:p};function b(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"playables-api"},"Playables API"),(0,r.kt)("p",null,"Playables API \u63d0\u4f9b\u4e00\u79cd\u901a\u8fc7\u7ec4\u7ec7\u548c\u8bc4\u4f30\u6811\u72b6\u7ed3\u6784\uff08\u79f0\u4e3a PlayableGraph\uff09\u4e2d\u7684\u6570\u636e\u6e90\u6765\u521b\u5efa\u5de5\u5177\u3001\u6548\u679c\u6216\u5176\u4ed6\u6e38\u620f\u673a\u5236\u7684\u65b9\u6cd5\u3002PlayableGraph \u5141\u8bb8\u60a8\u6df7\u5408\u3001\u878d\u5408\u548c\u4fee\u6539\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u5e76\u901a\u8fc7\u5355\u4e2a\u8f93\u51fa\u64ad\u653e\u5b83\u4eec\u3002"),(0,r.kt)("p",null,"Playables API \u652f\u6301\u52a8\u753b\u3001\u97f3\u9891\u548c\u811a\u672c\u3002Playables API \u8fd8\u63d0\u4f9b\u901a\u8fc7\u811a\u672c\u4e0e",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/animation-section"},"\u52a8\u753b\u7cfb\u7edf"),"\u548c\u97f3\u9891\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1 Playables API \u76ee\u524d\u4ec5\u9650\u4e8e\u52a8\u753b\u3001\u97f3\u9891\u548c\u811a\u672c\uff0c\u4f46\u5b83\u662f\u4e00\u79cd\u901a\u7528 API\uff0c\u6700\u7ec8\u53ef\u4f9b\u89c6\u9891\u548c\u5176\u4ed6\u7cfb\u7edf\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u53ef\u64ad\u653e\u9879-playable-\u4e0e\u52a8\u753b\u7ec4\u4ef6"},"\u53ef\u64ad\u653e\u9879 (Playable) \u4e0e\u52a8\u753b\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u52a8\u753b\u7cfb\u7edf\u5df2\u6709\u4e00\u4e2a\u56fe\u5f62\u7f16\u8f91\u5de5\u5177\uff0c\u8fd9\u662f\u4e00\u4e2a\u4ec5\u9650\u4e8e\u64ad\u653e\u52a8\u753b\u7684\u72b6\u6001\u673a\u7cfb\u7edf\u3002Playables API \u8bbe\u8ba1\u5f97\u66f4\u7075\u6d3b\u5e76\u652f\u6301\u5176\u4ed6\u7cfb\u7edf\u3002Playables API \u8fd8\u53ef\u521b\u5efa\u72b6\u6001\u673a\u65e0\u6cd5\u5b9e\u73b0\u7684\u56fe\u5f62\u3002\u8fd9\u4e9b\u56fe\u5f62\u8868\u793a\u4e00\u4e2a\u6570\u636e\u6d41\uff0c\u6307\u793a\u6bcf\u4e2a\u8282\u70b9\u751f\u6210\u548c\u4f7f\u7528\u7684\u5185\u5bb9\u3002\u6b64\u5916\uff0c\u5355\u4e2a\u56fe\u5f62\u4e0d\u9650\u4e8e\u5355\u4e2a\u7cfb\u7edf\u3002\u5355\u4e2a\u56fe\u5f62\u53ef\u80fd\u5305\u542b\u52a8\u753b\u3001\u97f3\u9891\u548c\u811a\u672c\u7684\u8282\u70b9\u3002"),(0,r.kt)("h2",{id:"playables-api-\u7684\u4f18\u70b9"},"Playables API \u7684\u4f18\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playables API \u652f\u6301\u52a8\u6001\u52a8\u753b\u6df7\u5408\u3002\u8fd9\u610f\u5473\u7740\u573a\u666f\u4e2d\u7684\u5bf9\u8c61\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5df1\u7684\u52a8\u753b\u3002\u4f8b\u5982\uff0c\u6b66\u5668\u3001\u5b9d\u7bb1\u548c\u9677\u9631\u7684\u52a8\u753b\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u5230 PlayableGraph \u5e76\u4f7f\u7528\u4e00\u6bb5\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"Playables API \u53ef\u8ba9\u60a8\u8f7b\u677e\u64ad\u653e\u5355\u4e2a\u52a8\u753b\uff0c\u800c\u4e0d\u4f1a\u4ea7\u751f\u521b\u5efa\u548c\u7ba1\u7406 AnimatorController \u8d44\u6e90\u6240\u6d89\u53ca\u7684\u5f00\u9500\u3002"),(0,r.kt)("li",{parentName:"ul"},"Playables API \u5141\u8bb8\u7528\u6237\u52a8\u6001\u521b\u5efa\u6df7\u5408\u56fe\u5e76\u76f4\u63a5\u9010\u5e27\u63a7\u5236\u6df7\u5408\u6743\u91cd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u5728\u8fd0\u884c\u65f6\u521b\u5efa PlayableGraph\uff0c\u6839\u636e\u6761\u4ef6\u6309\u9700\u6dfb\u52a0\u53ef\u64ad\u653e\u8282\u70b9\u3002\u53ef\u91cf\u8eab\u5b9a\u5236 PlayableGraph \u6765\u9002\u5e94\u5f53\u524d\u60c5\u51b5\u7684\u8981\u6c42\uff0c\u800c\u4e0d\u662f\u63d0\u4f9b\u4e00\u4e2a\u5de8\u5927\u7684\u201c\u4e00\u5200\u5207\u201d\u56fe\u5f62\u6765\u542f\u7528\u548c\u7981\u7528\u8282\u70b9\u3002")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2017\u201307\u201304 \u9875\u9762\u5df2\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},"2017\u201307\u201304 Unity ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/30_search.html?q=newin20171"},"2017.1")," \u4e2d\u7684\u65b0\u529f\u80fd NewIn20171")))}b.isMDXComponent=!0}}]);