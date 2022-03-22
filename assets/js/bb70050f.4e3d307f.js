"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22832],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,f=p["".concat(i,".").concat(h)]||p[h]||l[h]||d;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var d=t.length,o=new Array(d);o[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<d;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57495:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(87462),a=t(63366),d=(t(67294),t(3905)),o=["components"],s={id:"StandardShaderMakeYourOwn",title:"\u81ea\u884c\u521b\u5efa",slug:"/shader-standard-shader/standard-shader-make-your-own"},i=void 0,u={unversionedId:"graphics/shaders/shader-built-in/shader-standard-shader/StandardShaderMakeYourOwn",id:"graphics/shaders/shader-built-in/shader-standard-shader/StandardShaderMakeYourOwn",title:"\u81ea\u884c\u521b\u5efa",description:"\u81ea\u884c\u521b\u5efa",source:"@site/docs/graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-make-your-own.md",sourceDirName:"graphics/shaders/shader-built-in/shader-standard-shader",slug:"/shader-standard-shader/standard-shader-make-your-own",permalink:"/docs/shader-standard-shader/standard-shader-make-your-own",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-make-your-own.md",tags:[],version:"current",frontMatter:{id:"StandardShaderMakeYourOwn",title:"\u81ea\u884c\u521b\u5efa",slug:"/shader-standard-shader/standard-shader-make-your-own"},sidebar:"tutorialSidebar",previous:{title:"\u5185\u5bb9\u548c\u4e0a\u4e0b\u6587",permalink:"/docs/shader-standard-shader/standard-shader-context-and-content"},next:{title:"\u6750\u8d28\u56fe\u8868",permalink:"/docs/shader-standard-shader/standard-shader-material-charts"}},c={},l=[{value:"\u81ea\u884c\u521b\u5efa",id:"\u81ea\u884c\u521b\u5efa",level:2}],p={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,o);return(0,d.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"\u81ea\u884c\u521b\u5efa"},"\u81ea\u884c\u521b\u5efa"),(0,d.kt)("p",null,"The Standard shader is suitable for a wide range of use cases. You can customize it for your own needs by downloading the shader source code, and then editing it."),(0,d.kt)("p",null,"\u8981\u4e0b\u8f7d\u6807\u51c6\u7740\u8272\u5668\u7684\u6e90\u4ee3\u7801\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,d.kt)("p",null,"1.\u8bbf\u95ee ",(0,d.kt)("a",{parentName:"p",href:"http://unity3d.com/get-unity/download/archive"},"Unity \u4e0b\u8f7d\u9875\u9762")," 2.\u627e\u5230\u60a8\u6b63\u5728\u4f7f\u7528\u7684 Unity \u7248\u672c\u7684\u76f8\u5e94\u884c 3.\u5728\u8be5\u884c\u4e2d\uff0c\u627e\u5230\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u5e73\u53f0\u7684  ",(0,d.kt)("strong",{parentName:"p"},"Downloads"),"  \u4e0b\u62c9\u83dc\u5355 4.\u4ece\u8be5\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,d.kt)("strong",{parentName:"p"},"Built-in Shaders")," "))}h.isMDXComponent=!0}}]);