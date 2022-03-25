"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15432],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=o(r),p=a,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||c;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<c;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return f}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),i=["components"],u={id:"FrustumSizeAtDistance",title:"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f",slug:"/camera-tricks/frustum-size-at-distance"},s="\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f",o={unversionedId:"graphics/cameras-overview/camera-tricks/FrustumSizeAtDistance",id:"graphics/cameras-overview/camera-tricks/FrustumSizeAtDistance",title:"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f",description:"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u6a2a\u622a\u9762\u5c06\u5728\u4e16\u754c\u7a7a\u95f4\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6784\u6210\u53ef\u89c1\u533a\u57df\u7684\u77e9\u5f62\u3002\u6b64\u5f62\u72b6\u6709\u65f6\u53ef\u7528\u4e8e\u8ba1\u7b97\u6b64\u77e9\u5f62\u5728\u7ed9\u5b9a\u8ddd\u79bb\u5904\u7684\u5927\u5c0f\uff0c\u6216\u8005\u67e5\u627e\u77e9\u5f62\u4e3a\u7ed9\u5b9a\u5927\u5c0f\u65f6\u6240\u5904\u7684\u8ddd\u79bb\u3002\u4f8b\u5982\uff0c\u5982\u679c\u79fb\u52a8\u7684\u6444\u50cf\u673a\u9700\u8981\u59cb\u7ec8\u5c06\u5bf9\u8c61\uff08\u4f8b\u5982\u73a9\u5bb6\uff09\u5b8c\u5168\u4fdd\u6301\u5728\u955c\u5934\u4e2d\uff0c\u5219\u4e0d\u5f97\u8fc7\u4e8e\u63a5\u8fd1\u6444\u50cf\u673a\u4ee5\u514d\u8be5\u5bf9\u8c61\u7684\u4e00\u90e8\u5206\u88ab\u622a\u65ad\u3002",source:"@site/docs/graphics/cameras-overview/camera-tricks/frustum-size-at-distance.md",sourceDirName:"graphics/cameras-overview/camera-tricks",slug:"/camera-tricks/frustum-size-at-distance",permalink:"/doc-unity-manual/docs/camera-tricks/frustum-size-at-distance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/cameras-overview/camera-tricks/frustum-size-at-distance.md",tags:[],version:"current",frontMatter:{id:"FrustumSizeAtDistance",title:"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f",slug:"/camera-tricks/frustum-size-at-distance"},sidebar:"tutorialSidebar",previous:{title:"\u6444\u50cf\u673a\u5c04\u7ebf",permalink:"/doc-unity-manual/docs/camera-tricks/camera-rays"},next:{title:"\u4f7f\u7528\u659c\u89c6\u9525\u4f53",permalink:"/doc-unity-manual/docs/camera-tricks/oblique-frustum"}},l={},f=[],m={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f"},"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f"),(0,c.kt)("p",null,"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u6a2a\u622a\u9762\u5c06\u5728\u4e16\u754c\u7a7a\u95f4\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6784\u6210\u53ef\u89c1\u533a\u57df\u7684\u77e9\u5f62\u3002\u6b64\u5f62\u72b6\u6709\u65f6\u53ef\u7528\u4e8e\u8ba1\u7b97\u6b64\u77e9\u5f62\u5728\u7ed9\u5b9a\u8ddd\u79bb\u5904\u7684\u5927\u5c0f\uff0c\u6216\u8005\u67e5\u627e\u77e9\u5f62\u4e3a\u7ed9\u5b9a\u5927\u5c0f\u65f6\u6240\u5904\u7684\u8ddd\u79bb\u3002\u4f8b\u5982\uff0c\u5982\u679c\u79fb\u52a8\u7684\u6444\u50cf\u673a\u9700\u8981\u59cb\u7ec8\u5c06\u5bf9\u8c61\uff08\u4f8b\u5982\u73a9\u5bb6\uff09\u5b8c\u5168\u4fdd\u6301\u5728\u955c\u5934\u4e2d\uff0c\u5219\u4e0d\u5f97\u8fc7\u4e8e\u63a5\u8fd1\u6444\u50cf\u673a\u4ee5\u514d\u8be5\u5bf9\u8c61\u7684\u4e00\u90e8\u5206\u88ab\u622a\u65ad\u3002"),(0,c.kt)("p",null,"\u53ef\u4f7f\u7528\u4ee5\u4e0b\u516c\u5f0f\u6765\u8ba1\u7b97\u89c6\u9525\u4f53\u5728\u7ed9\u5b9a\u8ddd\u79bb\u5904\u7684\u9ad8\u5ea6\uff08\u5747\u4ee5\u4e16\u754c\u5355\u4f4d\u8868\u793a\uff09\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"}," var frustumHeight = 2.0f * distance * Mathf.Tan(camera.fieldOfView * 0.5f * Mathf.Deg2Rad);\n")),(0,c.kt)("p",null,"\u2026\u8fd8\u53ef\u53cd\u8f6c\u8be5\u8fc7\u7a0b\u4ee5\u8ba1\u7b97\u83b7\u5f97\u6307\u5b9a\u89c6\u9525\u4f53\u9ad8\u5ea6\u6240\u9700\u7684\u8ddd\u79bb\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"}," var distance = frustumHeight * 0.5f / Mathf.Tan(camera.fieldOfView * 0.5f * Mathf.Deg2Rad);\n")),(0,c.kt)("p",null,"\u5f53\u9ad8\u5ea6\u548c\u8ddd\u79bb\u5df2\u77e5\u65f6\uff0c\u4e5f\u53ef\u4ee5\u8ba1\u7b97 FOV\uff08\u89c6\u91ce\uff09\u89d2\u5ea6\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"}," var camera.fieldOfView = 2.0f * Mathf.Atan(frustumHeight * 0.5f / distance) * Mathf.Rad2Deg;\n")),(0,c.kt)("p",null,"\u8fd9\u4e9b\u8ba1\u7b97\u90fd\u6d89\u53ca\u5230\u89c6\u9525\u4f53\u7684\u9ad8\u5ea6\uff0c\u4f46\u8fd9\u53ef\u4ee5\u5f88\u5bb9\u6613\u4ece\u5bbd\u5ea6\uff08\u53cd\u4e4b\u4ea6\u7136\uff09\u83b7\u5f97\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"var frustumWidth = frustumHeight * camera.aspect;\nvar frustumHeight = frustumWidth / camera.aspect;\n")))}p.isMDXComponent=!0}}]);