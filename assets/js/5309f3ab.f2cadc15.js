"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62811],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49051:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"terrain-Runtime",title:"\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5730\u5f62",slug:"/script-terrain/terrain-runtime"},u="\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5730\u5f62",s={unversionedId:"creating-environments/script-terrain/terrain-Runtime",id:"creating-environments/script-terrain/terrain-Runtime",title:"\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5730\u5f62",description:"\u5730\u5f62\u7cfb\u7edf\u4f7f\u7528 Unity \u5f15\u64ce\u8d44\u6e90\u6765\u786e\u4fdd\u6b63\u5e38\u8fd0\u884c\u3002\u5f53\u573a\u666f\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5730\u5f62\u5b9e\u4f8b\u662f\u6784\u5efa\u7684\u4e00\u90e8\u5206\u65f6\uff0cUnity \u4f1a\u5c06\u8fd9\u4e9b\u8d44\u6e90\u5305\u542b\u5728\u64ad\u653e\u5668\u6784\u5efa\u4e2d\u3002\u5982\u679c\u4ec5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u521b\u5efa\u5730\u5f62\uff0c\u8bf7\u786e\u4fdd\u5728\u6784\u5efa\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\u5305\u542b\u5730\u5f62\u7ec4\u4ef6\u4f5c\u4e3a\u5360\u4f4d\u7528\u9014\u3002\u60a8\u53ef\u4ee5\u7981\u7528\u8be5\u5730\u5f62\u5b9e\u4f8b\uff08\u5728 Inspector \u7a97\u53e3\u4e2d\u53d6\u6d88\u9009\u4e2d\u5730\u5f62\u540d\u79f0\u65c1\u8fb9\u7684\u6846\uff09\uff0c\u7136\u540e\u5c06\u8be5\u5b9e\u4f8b\u653e\u5165\u4e0d\u4f1a\u88ab\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u52a0\u8f7d\u7684\u573a\u666f\u4e2d\u3002",source:"@site/docs/creating-environments/script-terrain/terrain-runtime.md",sourceDirName:"creating-environments/script-terrain",slug:"/script-terrain/terrain-runtime",permalink:"/doc-unity-manual/docs/script-terrain/terrain-runtime",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-environments/script-terrain/terrain-runtime.md",tags:[],version:"current",frontMatter:{id:"terrain-Runtime",title:"\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5730\u5f62",slug:"/script-terrain/terrain-runtime"},sidebar:"tutorialSidebar",previous:{title:"\u5730\u5f62\u8bbe\u7f6e (Terrain Settings)",permalink:"/doc-unity-manual/docs/script-terrain/terrain-other-settings"},next:{title:"\u5730\u5f62\u5de5\u5177",permalink:"/doc-unity-manual/docs/terrain-tools"}},p={},l=[],m={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5730\u5f62"},"\u5728\u8fd0\u884c\u65f6\u4f7f\u7528\u5730\u5f62"),(0,o.kt)("p",null,"\u5730\u5f62\u7cfb\u7edf\u4f7f\u7528 Unity \u5f15\u64ce\u8d44\u6e90\u6765\u786e\u4fdd\u6b63\u5e38\u8fd0\u884c\u3002\u5f53\u573a\u666f\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5730\u5f62\u5b9e\u4f8b\u662f\u6784\u5efa\u7684\u4e00\u90e8\u5206\u65f6\uff0cUnity \u4f1a\u5c06\u8fd9\u4e9b\u8d44\u6e90\u5305\u542b\u5728\u64ad\u653e\u5668\u6784\u5efa\u4e2d\u3002\u5982\u679c\u4ec5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u521b\u5efa\u5730\u5f62\uff0c\u8bf7\u786e\u4fdd\u5728\u6784\u5efa\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\u5305\u542b\u5730\u5f62\u7ec4\u4ef6\u4f5c\u4e3a\u5360\u4f4d\u7528\u9014\u3002\u60a8\u53ef\u4ee5\u7981\u7528\u8be5\u5730\u5f62\u5b9e\u4f8b\uff08\u5728 Inspector \u7a97\u53e3\u4e2d\u53d6\u6d88\u9009\u4e2d\u5730\u5f62\u540d\u79f0\u65c1\u8fb9\u7684\u6846\uff09\uff0c\u7136\u540e\u5c06\u8be5\u5b9e\u4f8b\u653e\u5165\u4e0d\u4f1a\u88ab\u6e38\u620f\u6216\u5e94\u7528\u7a0b\u5e8f\u52a0\u8f7d\u7684\u573a\u666f\u4e2d\u3002"))}f.isMDXComponent=!0}}]);