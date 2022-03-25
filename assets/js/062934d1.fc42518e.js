"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28320],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(u,".").concat(h)]||d[h]||l[h]||o;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50039:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={id:"com.unity.shadergraph",title:"Shader Graph",slug:"/pack-core/com-unity-shadergraph"},u="Shader Graph",p={unversionedId:"packages-list/pack-core/com.unity.shadergraph",id:"packages-list/pack-core/com.unity.shadergraph",title:"Shader Graph",description:"com.unity.shadergraph",source:"@site/docs/packages-list/pack-core/com-unity-shadergraph.md",sourceDirName:"packages-list/pack-core",slug:"/pack-core/com-unity-shadergraph",permalink:"/doc-unity-manual/docs/pack-core/com-unity-shadergraph",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages-list/pack-core/com-unity-shadergraph.md",tags:[],version:"current",frontMatter:{id:"com.unity.shadergraph",title:"Shader Graph",slug:"/pack-core/com-unity-shadergraph"},sidebar:"tutorialSidebar",previous:{title:"Universal RP",permalink:"/doc-unity-manual/docs/pack-core/com-unity-render-pipelines-universal"},next:{title:"Unity UI",permalink:"/doc-unity-manual/docs/pack-core/com-unity-ugui"}},s={},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u7248\u672c\u4fe1\u606f",id:"\u7248\u672c\u4fe1\u606f",level:2}],d={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shader-graph"},"Shader Graph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.shadergraph@13.1/manual/index.html"},"com.unity.shadergraph")),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"Shader Graph \u5305\u4e3a Unity \u6dfb\u52a0\u4e86\u53ef\u89c6\u5316\u7684\u7740\u8272\u5668\u7f16\u8f91\u5de5\u5177\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u5de5\u5177\u4ee5\u53ef\u89c6\u65b9\u5f0f\u521b\u5efa\u7740\u8272\u5668\uff0c\u800c\u4e0d\u7528\u7f16\u5199\u4ee3\u7801\u3002\u7279\u5b9a\u7684\u6e32\u67d3\u7ba1\u7ebf\u53ef\u4ee5\u5b9e\u73b0\u7279\u5b9a\u7684\u56fe\u5f62\u529f\u80fd\u3002\u5f53\u524d\uff0c\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf\u548c\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf\u5747\u652f\u6301 Shader Graph\u3002"),(0,o.kt)("h2",{id:"\u7248\u672c\u4fe1\u606f"},"\u7248\u672c\u4fe1\u606f"),(0,o.kt)("p",null,"\u6838\u5fc3\u5305\u5df2\u4fee\u590d\u4e3a\u4e0e\u7f16\u8f91\u5668\u7248\u672c\u5339\u914d\u7684\u5355\u4e2a\u7248\u672c\u3002"))}h.isMDXComponent=!0}}]);