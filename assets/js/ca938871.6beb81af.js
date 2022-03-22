"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15015],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),i=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=i(r),m=a,c=k["".concat(d,".").concat(m)]||k[m]||u[m]||l;return r?n.createElement(c,o(o({ref:e},p),{},{components:r})):n.createElement(c,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},45076:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],s={id:"shader-skybox-6sided",title:"6 \u9762\u5929\u7a7a\u76d2",slug:"/skybox-shaders/shader-skybox-6sided"},d="6 \u9762\u5929\u7a7a\u76d2",i={unversionedId:"graphics/sky/skybox-shaders/shader-skybox-6sided",id:"graphics/sky/skybox-shaders/shader-skybox-6sided",title:"6 \u9762\u5929\u7a7a\u76d2",description:"\u6b64\u5929\u7a7a\u76d2\u7740\u8272\u5668\u4ece\u516d\u4e2a\u5355\u72ec\u7eb9\u7406\u751f\u6210\u4e00\u4e2a\u5929\u7a7a\u76d2\u3002\u6bcf\u4e2a\u7eb9\u7406\u4ee3\u8868\u6cbf\u7279\u5b9a\u4e16\u754c\u8f74\u7684\u5929\u7a7a\u89c6\u56fe\u3002\u4e3a\u4e86\u65b9\u4fbf\u8bf4\u660e\uff0c\u53ef\u4ee5\u5c06\u573a\u666f\u89c6\u4e3a\u4f4d\u4e8e\u7acb\u65b9\u4f53\u5185\u3002\u6bcf\u4e2a\u7eb9\u7406\u4ee3\u8868\u7acb\u65b9\u4f53\u7684\u4e00\u4e2a\u5185\u8868\u9762\uff0c\u6240\u6709\u516d\u4e2a\u7eb9\u7406\u7ed3\u5408\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u65e0\u7f1d\u73af\u5883\u3002",source:"@site/docs/graphics/sky/skybox-shaders/shader-skybox-6sided.md",sourceDirName:"graphics/sky/skybox-shaders",slug:"/skybox-shaders/shader-skybox-6sided",permalink:"/docs/skybox-shaders/shader-skybox-6sided",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/sky/skybox-shaders/shader-skybox-6sided.md",tags:[],version:"current",frontMatter:{id:"shader-skybox-6sided",title:"6 \u9762\u5929\u7a7a\u76d2",slug:"/skybox-shaders/shader-skybox-6sided"},sidebar:"tutorialSidebar",previous:{title:"\u5929\u7a7a\u76d2\u7740\u8272\u5668",permalink:"/docs/skybox-shaders"},next:{title:"\u7acb\u65b9\u4f53\u8d34\u56fe\u5929\u7a7a\u76d2",permalink:"/docs/skybox-shaders/shader-skybox-cubemap"}},p={},u=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u5fc5\u5907\u7eb9\u7406",id:"\u5fc5\u5907\u7eb9\u7406",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],k={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"6-\u9762\u5929\u7a7a\u76d2"},"6 \u9762\u5929\u7a7a\u76d2"),(0,l.kt)("p",null,"\u6b64\u5929\u7a7a\u76d2\u7740\u8272\u5668\u4ece\u516d\u4e2a\u5355\u72ec\u7eb9\u7406\u751f\u6210\u4e00\u4e2a\u5929\u7a7a\u76d2\u3002\u6bcf\u4e2a\u7eb9\u7406\u4ee3\u8868\u6cbf\u7279\u5b9a\u4e16\u754c\u8f74\u7684\u5929\u7a7a\u89c6\u56fe\u3002\u4e3a\u4e86\u65b9\u4fbf\u8bf4\u660e\uff0c\u53ef\u4ee5\u5c06\u573a\u666f\u89c6\u4e3a\u4f4d\u4e8e\u7acb\u65b9\u4f53\u5185\u3002\u6bcf\u4e2a\u7eb9\u7406\u4ee3\u8868\u7acb\u65b9\u4f53\u7684\u4e00\u4e2a\u5185\u8868\u9762\uff0c\u6240\u6709\u516d\u4e2a\u7eb9\u7406\u7ed3\u5408\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u65e0\u7f1d\u73af\u5883\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u5982\u4f55\u521b\u5efa\u4f7f\u7528\u6b64\u5929\u7a7a\u76d2\u7740\u8272\u5668\u7684\u6750\u8d28\uff0c\u4ee5\u53ca\u6709\u5173\u5982\u4f55\u5728\u573a\u666f\u4e2d\u6e32\u67d3\u5929\u7a7a\u76d2\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/docs/skyboxes/skyboxes-using"},"\u4f7f\u7528\u5929\u7a7a\u76d2"),"\u3002"),(0,l.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"6 \u9762\u5929\u7a7a\u76d2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("h2",{id:"\u5fc5\u5907\u7eb9\u7406"},"\u5fc5\u5907\u7eb9\u7406"),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"6 \u9762")," \u5929\u7a7a\u76d2\uff0c\u60a8\u9700\u8981\u516d\u4e2a\u5355\u72ec\u7eb9\u7406\uff0c\u8fd9\u4e9b\u7eb9\u7406\u7ec4\u5408\u5728\u4e00\u8d77\u53ef\u6620\u5c04\u5230\u5982\u4e0b\u7f51\u7edc\u5e03\u5c40\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/skybox-six-sided-net.png",alt:"skybox-six-sided-net.png"})),(0,l.kt)("p",null,"\u4e3a\u751f\u6210\u6700\u4f73\u7684\u73af\u5883\u5149\u7167\uff0c\u7eb9\u7406\u5e94\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/docs/hdr"},"\u9ad8\u52a8\u6001\u8303\u56f4 (HDR)"),"\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Tint Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u5c06\u5929\u7a7a\u76d2\u7740\u8272\u6210\u7684\u989c\u8272\u3002Unity \u5c06\u8fd9\u79cd\u989c\u8272\u6dfb\u52a0\u5230\u7eb9\u7406\u4ee5\u66f4\u6539\u7eb9\u7406\u5916\u89c2\uff0c\u800c\u65e0\u9700\u66f4\u6539\u57fa\u7840\u7eb9\u7406\u6587\u4ef6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Exposure")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u6574\u5929\u7a7a\u76d2\u7684\u66dd\u5149\u3002\u56e0\u6b64\u53ef\u4ee5\u6821\u6b63\u5929\u7a7a\u76d2\u7eb9\u7406\u4e2d\u7684\u8272\u8c03\u503c\u3002\u8f83\u5927\u7684\u503c\u4f1a\u4ea7\u751f\u66dd\u5149\u66f4\u5f3a\u3001\u770b\u8d77\u6765\u66f4\u4eae\u7684\u5929\u7a7a\u76d2\u3002\u8f83\u5c0f\u7684\u503c\u4f1a\u4ea7\u751f\u66dd\u5149\u66f4\u5f31\u3001\u770b\u8d77\u6765\u66f4\u6697\u7684\u5929\u7a7a\u76d2\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Rotation")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5929\u7a7a\u76d2\u56f4\u7ed5\u6b63 y \u8f74\u65cb\u8f6c\u3002\u8fd9\u4f1a\u66f4\u6539\u5929\u7a7a\u76d2\u7684\u65b9\u5411\uff0c\u5982\u679c\u5e0c\u671b\u5929\u7a7a\u76d2\u7684\u7279\u5b9a\u90e8\u5206\u4f4d\u4e8e\u573a\u666f\u7684\u7279\u5b9a\u90e8\u5206\u540e\u65b9\uff0c\u5219\u6b64\u8bbe\u7f6e\u5f88\u6709\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Front ","[","+Z","]"," (HDR)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u4ee3\u8868\u5929\u7a7a\u76d2\u5728\u4e16\u754c\u7684 Z \u8f74\u6b63\u65b9\u5411\u4e0a\u7684\u4e00\u9762\u3002\u5728\u65b0\u7684 Unity \u573a\u666f\u4e2d\uff0c\u5b83\u4f4d\u4e8e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u6b63\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Back ","[","-Z","]"," (HDR)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u4ee3\u8868\u5929\u7a7a\u76d2\u5728\u4e16\u754c\u7684 Z \u8f74\u8d1f\u65b9\u5411\u4e0a\u7684\u4e00\u9762\u3002\u5728\u65b0\u7684 Unity \u573a\u666f\u4e2d\uff0c\u5b83\u4f4d\u4e8e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u80cc\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Left ","[","+X","]"," (HDR)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u4ee3\u8868\u5929\u7a7a\u76d2\u5728\u4e16\u754c\u7684 X \u8f74\u6b63\u65b9\u5411\u4e0a\u7684\u4e00\u9762\u3002\u5728\u65b0\u7684 Unity \u573a\u666f\u4e2d\uff0c\u5b83\u4f4d\u4e8e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u5de6\u4fa7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Right ","[","-X","]"," (HDR)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u4ee3\u8868\u5929\u7a7a\u76d2\u5728\u4e16\u754c\u7684 X \u8f74\u8d1f\u65b9\u5411\u4e0a\u7684\u4e00\u9762\u3002\u5728\u65b0\u7684 Unity \u573a\u666f\u4e2d\uff0c\u5b83\u4f4d\u4e8e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u53f3\u4fa7\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Up ","[","+Y","]"," (HDR)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u4ee3\u8868\u5929\u7a7a\u76d2\u5728\u4e16\u754c\u7684 Y \u8f74\u6b63\u65b9\u5411\u4e0a\u7684\u4e00\u9762\u3002\u5728\u65b0\u7684 Unity \u573a\u666f\u4e2d\uff0c\u5b83\u4f4d\u4e8e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u4e0a\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Down ","[","-Y","]"," (HDR)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u4ee3\u8868\u5929\u7a7a\u76d2\u5728\u4e16\u754c\u7684 Y \u8f74\u8d1f\u65b9\u5411\u4e0a\u7684\u4e00\u9762\u3002\u5728\u65b0\u7684 Unity \u573a\u666f\u4e2d\uff0c\u5b83\u4f4d\u4e8e\u9ed8\u8ba4\u6444\u50cf\u673a\u7684\u4e0b\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Render Queue")),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u5b9a Unity \u7ed8\u5236\u6e38\u620f\u5bf9\u8c61\u7684\u987a\u5e8f\u3002\u6709\u5173  ",(0,l.kt)("strong",{parentName:"td"},"Render Queue"),"  \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"td",href:"/docs/sl-sub-shader/sl-sub-shader-tags"},"SL-SubShaderTags"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Double Sided Global Illumination")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5149\u7167\u8d34\u56fe\u662f\u5426\u5728\u8ba1\u7b97\u5168\u5c40\u5149\u7167\u65f6\u8003\u8651\u51e0\u4f55\u4f53\u7684\u4e24\u9762\u3002\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5982\u679c\u4f7f\u7528\u6e10\u8fdb\u5149\u7167\u8d34\u56fe\uff0c\u5219\u80cc\u9762\u5c06\u4f7f\u7528\u4e0e\u6b63\u9762\u76f8\u540c\u7684\u53d1\u5c04\u548c\u53cd\u7167\u7387\u6765\u53cd\u5c04\u5149\u3002")))))}m.isMDXComponent=!0}}]);