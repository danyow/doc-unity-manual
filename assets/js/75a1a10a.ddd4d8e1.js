"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29088],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66040:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={id:"ReflectionProbes",title:"\u53cd\u5c04\u63a2\u9488",slug:"/reflection-probes"},l="\u53cd\u5c04\u63a2\u9488",s={unversionedId:"graphics/lighting-overview/reflection-probes/ReflectionProbes",id:"graphics/lighting-overview/reflection-probes/ReflectionProbes",title:"\u53cd\u5c04\u63a2\u9488",description:"CG films and animations commonly feature highly realistic reflections, which are important for giving a sense of \u201cconnectedness\u201d among the objects in the scene. However, the accuracy of these reflections comes with a high cost in processor time and while this is not a problem for films, it severely limits the use of reflective objects in real-time games.",source:"@site/docs/graphics/lighting-overview/reflection-probes/reflection-probes.md",sourceDirName:"graphics/lighting-overview/reflection-probes",slug:"/reflection-probes",permalink:"/docs/reflection-probes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/lighting-overview/reflection-probes/reflection-probes.md",tags:[],version:"current",frontMatter:{id:"ReflectionProbes",title:"\u53cd\u5c04\u63a2\u9488",slug:"/reflection-probes"},sidebar:"tutorialSidebar",previous:{title:"LOD and Enlighten Realtime Global Illumination",permalink:"/docs/realtime-gi-using-enlighten/lodrealtime-gi"},next:{title:"\u9ad8\u7ea7\u53cd\u5c04\u63a2\u9488\u529f\u80fd",permalink:"/docs/reflection-probes/advanced-ref-probe"}},p={},u=[{value:"\u53cd\u5c04\u63a2\u9488\u7684\u5de5\u4f5c\u539f\u7406",id:"\u53cd\u5c04\u63a2\u9488\u7684\u5de5\u4f5c\u539f\u7406",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u53cd\u5c04\u63a2\u9488"},"\u53cd\u5c04\u63a2\u9488"),(0,i.kt)("p",null,"CG films and animations commonly feature highly realistic reflections, which are important for giving a sense of \u201cconnectedness\u201d among the objects in the scene. However, the accuracy of these reflections comes with a high cost in processor time and while this is not a problem for films, it severely limits the use of reflective objects in real-time games."),(0,i.kt)("p",null,"\u4f20\u7edf\u4e0a\uff0c\u6e38\u620f\u4f7f\u7528\u4e00\u79cd\u79f0\u4e3a","_","\u53cd\u5c04\u8d34\u56fe","_","\u7684\u6280\u672f\u6765\u6a21\u62df\u6765\u81ea\u5bf9\u8c61\u7684\u53cd\u5c04\uff0c\u540c\u65f6\u5c06\u5904\u7406\u5f00\u9500\u4fdd\u6301\u5728\u53ef\u63a5\u53d7\u7684\u6c34\u5e73\u3002\u6b64\u6280\u672f\u5047\u5b9a\u573a\u666f\u4e2d\u7684\u6240\u6709\u53cd\u5c04\u5bf9\u8c61\u90fd\u53ef\u4ee5\u201c\u770b\u5230\u201d\uff08\u56e0\u6b64\u4f1a\u53cd\u5c04\uff09\u5b8c\u5168\u76f8\u540c\u7684\u5468\u56f4\u73af\u5883\u3002\u5982\u679c\u6e38\u620f\u7684\u4e3b\u89d2\uff08\u6bd4\u5982\u95ea\u4eae\u7684\u6c7d\u8f66\uff09\u5904\u4e8e\u5f00\u653e\u7a7a\u95f4\u4e2d\uff0c\u6b64\u6280\u672f\u5c06\u975e\u5e38\u6709\u6548\uff0c\u4f46\u662f\u5f53\u89d2\u8272\u8fdb\u5165\u4e0d\u540c\u7684\u5468\u56f4\u73af\u5883\u65f6\uff0c\u4fbf\u770b\u8d77\u6765\u4e0d\u771f\u5b9e\uff1b\u5982\u679c\u4e00\u8f86\u6c7d\u8f66\u9a76\u5165\u96a7\u9053\u4f46\u5929\u7a7a\u4ecd\u7136\u5728\u7a97\u6237\u4e0a\u4ea7\u751f\u660e\u663e\u53cd\u5c04\uff0c\u770b\u8d77\u6765\u5c31\u5f88\u5947\u602a\u3002"),(0,i.kt)("p",null,"Unity \u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"\u53cd\u5c04\u63a2\u9488")," \u6539\u8fdb\u4e86\u57fa\u672c\u53cd\u5c04\u8d34\u56fe\uff0c\u8fd9\u79cd\u63a2\u9488\u53ef\u5728\u573a\u666f\u4e2d\u7684\u5173\u952e\u70b9\u5bf9\u89c6\u89c9\u73af\u5883\u8fdb\u884c\u91c7\u6837\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5e94\u5c06\u8fd9\u4e9b\u63a2\u9488\u653e\u7f6e\u5728\u53cd\u5c04\u5bf9\u8c61\u5916\u89c2\u53d1\u751f\u660e\u663e\u53d8\u5316\u7684\u6bcf\u4e2a\u70b9\u4e0a\uff08\u4f8b\u5982\uff0c\u96a7\u9053\u3001\u5efa\u7b51\u7269\u9644\u8fd1\u533a\u57df\u548c\u5730\u9762\u989c\u8272\u53d8\u5316\u7684\u5730\u65b9\uff09\u3002\u5f53\u53cd\u5c04\u5bf9\u8c61\u9760\u8fd1\u63a2\u9488\u65f6\uff0c\u63a2\u9488\u91c7\u6837\u7684\u53cd\u5c04\u53ef\u7528\u4e8e\u5bf9\u8c61\u7684\u53cd\u5c04\u8d34\u56fe\u3002\u6b64\u5916\uff0c\u5f53\u51e0\u4e2a\u63a2\u9488\u4f4d\u4e8e\u5f7c\u6b64\u9644\u8fd1\u65f6\uff0cUnity \u53ef\u5728\u5b83\u4eec\u4e4b\u95f4\u8fdb\u884c\u63d2\u503c\uff0c\u4ece\u800c\u5b9e\u73b0\u53cd\u5c04\u7684\u9010\u6e10\u53d8\u5316\u3002\u56e0\u6b64\uff0c\u4f7f\u7528\u53cd\u5c04\u63a2\u9488\u53ef\u4ee5\u4ea7\u751f\u975e\u5e38\u903c\u771f\u7684\u53cd\u5c04\uff0c\u540c\u65f6\u5c06\u5904\u7406\u5f00\u9500\u63a7\u5236\u5728\u53ef\u63a5\u53d7\u7684\u6c34\u5e73\u3002"),(0,i.kt)("h2",{id:"\u53cd\u5c04\u63a2\u9488\u7684\u5de5\u4f5c\u539f\u7406"},"\u53cd\u5c04\u63a2\u9488\u7684\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"\u573a\u666f\u4e2d\u67d0\u4e2a\u70b9\u7684\u89c6\u89c9\u73af\u5883\u53ef\u7531",(0,i.kt)("a",{parentName:"p",href:"/docs/textures/class-cubemap"},"\u7acb\u65b9\u4f53\u8d34\u56fe"),"\u8868\u793a\u3002\u7acb\u65b9\u4f53\u8d34\u56fe\u5728\u6982\u5ff5\u4e0a\u5f88\u50cf\u4e00\u4e2a\u5728\u5185\u90e8\u8868\u9762\u7ed8\u6709\u516d\u4e2a\u65b9\u5411\uff08\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3\u3001\u524d\u3001\u540e\uff09\u5e73\u9762\u56fe\u50cf\u7684\u76d2\u5b50\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CubemapDiagram.svg",alt:"\u5929\u7a7a\u76d2\u7acb\u65b9\u4f53\u8d34\u56fe\u7684\u5185\u90e8\u8868\u9762\uff08\u53bb\u9664\u4e86\u524d\u9762\uff09"})),(0,i.kt)("p",null,"\u5929\u7a7a\u76d2\u7acb\u65b9\u4f53\u8d34\u56fe\u7684\u5185\u90e8\u8868\u9762\uff08\u53bb\u9664\u4e86\u524d\u9762\uff09"),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5bf9\u8c61\u663e\u793a\u53cd\u5c04\uff0c\u5176\u7740\u8272\u5668\u5fc5\u987b\u80fd\u591f\u8bbf\u95ee\u8868\u793a\u7acb\u65b9\u4f53\u8d34\u56fe\u7684\u56fe\u50cf\u3002\u5bf9\u8c61\u8868\u9762\u7684\u6bcf\u4e2a\u70b9\u90fd\u53ef\u5728\u8868\u9762\u671d\u5411\u7684\u65b9\u5411\uff08\u5373\u8868\u9762\u6cd5\u5411\u77e2\u91cf\u7684\u65b9\u5411\uff09\u4e0a\u201c\u770b\u5230\u201d\u7acb\u65b9\u4f53\u8d34\u56fe\u7684\u4e00\u5c0f\u5757\u533a\u57df\u3002\u7740\u8272\u5668\u5728\u6b64\u5904\u4f7f\u7528\u7acb\u65b9\u4f53\u8d34\u56fe\u7684\u989c\u8272\u6765\u8ba1\u7b97\u5bf9\u8c61\u8868\u9762\u5e94\u8be5\u662f\u4ec0\u4e48\u989c\u8272\uff1b\u955c\u9762\u6750\u8d28\u53ef\u80fd\u4f1a\u51c6\u786e\u53cd\u5c04\u989c\u8272\uff0c\u800c\u95ea\u4eae\u7684\u6c7d\u8f66\u53ef\u80fd\u4f1a\u7565\u5fae\u892a\u8272\u548c\u7740\u8272\u3002"),(0,i.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u4f20\u7edf\u7684\u53cd\u5c04\u8d34\u56fe\u4ec5\u4f7f\u7528\u5355\u4e2a\u7acb\u65b9\u4f53\u8d34\u56fe\u6765\u8868\u793a\u6574\u4e2a\u573a\u666f\u7684\u5468\u56f4\u73af\u5883\u3002\u7acb\u65b9\u4f53\u8d34\u56fe\u53ef\u7531\u7f8e\u672f\u5e08\u7ed8\u5236\uff0c\u4e5f\u53ef\u901a\u8fc7\u4ece\u573a\u666f\u4e2d\u7684\u4e00\u4e2a\u70b9\u8fdb\u884c\u516d\u6b21\u201c\u5feb\u7167\u201d\uff08\u6bcf\u4e2a\u7acb\u65b9\u4f53\u9762\u5bf9\u5e94\u4e00\u6b21\u5feb\u7167\uff09\u83b7\u5f97\u3002\u53cd\u5c04\u63a2\u9488\u5728\u8fd9\u65b9\u9762\u8fdb\u884c\u4e86\u6539\u8fdb\uff0c\u5141\u8bb8\u60a8\u5728\u573a\u666f\u4e2d\u8bbe\u7f6e\u8bb8\u591a\u9884\u5b9a\u4e49\u7684\u70b9\uff0c\u5728\u8fd9\u4e9b\u4f4d\u7f6e\u70b9\u53ef\u521b\u5efa\u7acb\u65b9\u4f53\u8d34\u56fe\u5feb\u7167\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u5728\u573a\u666f\u4e2d\u5b58\u5728\u660e\u663e\u4e0d\u540c\u53cd\u5c04\u7684\u4efb\u4f55\u4f4d\u7f6e\u70b9\u8bb0\u5f55\u5468\u56f4\u89c6\u56fe\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u89c6\u70b9\u4e4b\u5916\uff0c\u63a2\u9488\u8fd8\u6709\u4e00\u4e2a\u7531\u573a\u666f\u4e2d\u7684\u4e0d\u53ef\u89c1\u76d2\u4f53\u5f62\u72b6\u5b9a\u4e49\u7684\u6548\u679c\u533a\u57df\u3002\u5728\u63a2\u9488\u533a\u57df\u5185\u901a\u8fc7\u7684\u53cd\u5c04\u5bf9\u8c61\u7684\u53cd\u5c04\u7acb\u65b9\u4f53\u8d34\u56fe\u7531\u8be5\u63a2\u9488\u4e34\u65f6\u63d0\u4f9b\u3002\u5f53\u5bf9\u8c61\u4ece\u4e00\u4e2a\u533a\u57df\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u533a\u57df\u65f6\uff0c\u7acb\u65b9\u4f53\u8d34\u56fe\u4f1a\u76f8\u5e94\u6539\u53d8\u3002"))}m.isMDXComponent=!0}}]);