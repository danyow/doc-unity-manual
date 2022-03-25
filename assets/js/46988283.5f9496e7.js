"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29425],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),d=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return a.createElement(p.Provider,{value:r},e.children)},o={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=d(t),f=n,m=c["".concat(p,".").concat(f)]||c[f]||o[f]||s;return t?a.createElement(m,i(i({ref:r},l),{},{components:t})):a.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=c;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var d=2;d<s;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},43094:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return o}});var a=t(87462),n=t(63366),s=(t(67294),t(3905)),i=["components"],u={id:"shader-TransBumpedDiffuse",title:"\u900f\u660e\u51f9\u51f8\u6f2b\u5c04 (Transparent Bumped Diffuse)",slug:"/shader-transparent-family/shader-trans-bumped-diffuse"},p="\u900f\u660e\u51f9\u51f8\u6f2b\u5c04 (Transparent Bumped Diffuse)",d={unversionedId:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-TransBumpedDiffuse",id:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-TransBumpedDiffuse",title:"\u900f\u660e\u51f9\u51f8\u6f2b\u5c04 (Transparent Bumped Diffuse)",description:"\u6ce8\u610f\uff1a Unity 5 \u5f15\u5165\u4e86\u6807\u51c6\u7740\u8272\u5668\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002",source:"@site/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-trans-bumped-diffuse.md",sourceDirName:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family",slug:"/shader-transparent-family/shader-trans-bumped-diffuse",permalink:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-diffuse",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-trans-bumped-diffuse.md",tags:[],version:"current",frontMatter:{id:"shader-TransBumpedDiffuse",title:"\u900f\u660e\u51f9\u51f8\u6f2b\u5c04 (Transparent Bumped Diffuse)",slug:"/shader-transparent-family/shader-trans-bumped-diffuse"},sidebar:"tutorialSidebar",previous:{title:"\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217",permalink:"/doc-unity-manual/docs/shader-transparent-family"},next:{title:"\u900f\u660e\u51f9\u51f8\u955c\u9762\u53cd\u5c04 (Transparent Bumped Specular)",permalink:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-specular"}},l={},o=[{value:"\u900f\u660e (Transparent) \u5c5e\u6027",id:"\u900f\u660e-transparent-\u5c5e\u6027",level:2},{value:"\u6cd5\u7ebf\u8d34\u56fe (Normal Mapped) \u5c5e\u6027",id:"\u6cd5\u7ebf\u8d34\u56fe-normal-mapped-\u5c5e\u6027",level:2},{value:"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe",id:"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe",level:3},{value:"\u6280\u672f\u7ec6\u8282",id:"\u6280\u672f\u7ec6\u8282",level:3},{value:"\u6f2b\u5c04 (Diffuse) \u5c5e\u6027",id:"\u6f2b\u5c04-diffuse-\u5c5e\u6027",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}],c={toc:o};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u900f\u660e\u51f9\u51f8\u6f2b\u5c04-transparent-bumped-diffuse"},"\u900f\u660e\u51f9\u51f8\u6f2b\u5c04 (Transparent Bumped Diffuse)"),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Shader-TransBump.jpg",alt:"Shader-TransBump.jpg"})),(0,s.kt)("h2",{id:"\u900f\u660e-transparent-\u5c5e\u6027"},"\u900f\u660e (Transparent) \u5c5e\u6027"),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,s.kt)("p",null,"\u6b64\u7740\u8272\u5668\u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6\u4e3b\u7eb9\u7406\u7684 Alpha \u901a\u9053\u4f7f\u7f51\u683c\u51e0\u4f55\u4f53\u90e8\u5206\u900f\u660e\u6216\u5b8c\u5168\u900f\u660e\u3002\u5728 Alpha \u4e2d\uff0c0\uff08\u9ed1\u8272\uff09\u8868\u793a\u5b8c\u5168\u900f\u660e\uff0c\u800c 255\uff08\u767d\u8272\uff09\u8868\u793a\u5b8c\u5168\u4e0d\u900f\u660e\u3002\u5982\u679c\u4e3b\u7eb9\u7406\u6ca1\u6709 Alpha \u901a\u9053\uff0c\u5219\u5bf9\u8c61\u5c06\u663e\u793a\u4e3a\u5b8c\u5168\u4e0d\u900f\u660e\u3002"),(0,s.kt)("p",null,"\u5728\u6e38\u620f\u4e2d\u4f7f\u7528\u900f\u660e\u5bf9\u8c61\u53ef\u80fd\u5f88\u68d8\u624b\uff0c\u56e0\u4e3a\u4f20\u7edf\u7684\u56fe\u5f62\u7f16\u7a0b\u95ee\u9898\u53ef\u80fd\u4f1a\u5728\u6e38\u620f\u4e2d\u5e26\u6765\u6392\u5e8f\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5728\u540c\u65f6\u900f\u8fc7\u4e24\u4e2a\u7a97\u53e3\u89c2\u5bdf\u65f6\u770b\u5230\u5947\u602a\u7684\u7ed3\u679c\uff0c\u5219\u8868\u793a\u9047\u5230\u4e86\u5728\u4f7f\u7528\u900f\u660e\u5ea6\u65b9\u9762\u7684\u5178\u578b\u95ee\u9898\u3002\u4e00\u822c\u89c4\u5219\u662f\u8981\u6ce8\u610f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u900f\u660e\u5bf9\u8c61\u53ef\u80fd\u4ee5\u4e0d\u5bfb\u5e38\u7684\u65b9\u5f0f\u5728\u53e6\u4e00\u4e2a\u5bf9\u8c61\u4e4b\u524d\u7ed8\u5236\uff0c\u7279\u522b\u662f\u5728\u8fd9\u4e9b\u5bf9\u8c61\u76f8\u4ea4\u3001\u76f8\u4e92\u5305\u56f4\u6216\u8005\u5927\u5c0f\u5dee\u5f02\u5de8\u5927\u7684\u60c5\u51b5\u4e0b\u3002\u56e0\u6b64\uff0c\u5e94\u8be5\u5728\u9700\u8981\u65f6\u624d\u4f7f\u7528\u900f\u660e\u5bf9\u8c61\uff0c\u5c3d\u91cf\u907f\u514d\u8fc7\u591a\u4f7f\u7528\u3002\u8fd8\u5e94\u8be5\u8ba9\u8bbe\u8ba1\u4eba\u5458\u610f\u8bc6\u5230\u53ef\u80fd\u53d1\u751f\u8fd9\u6837\u7684\u6392\u5e8f\u95ee\u9898\uff0c\u8ba9\u4ed6\u4eec\u51c6\u5907\u6539\u53d8\u4e00\u4e9b\u8bbe\u8ba1\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,s.kt)("h2",{id:"\u6cd5\u7ebf\u8d34\u56fe-normal-mapped-\u5c5e\u6027"},"\u6cd5\u7ebf\u8d34\u56fe (Normal Mapped) \u5c5e\u6027"),(0,s.kt)("p",null,"\u50cf ",(0,s.kt)("strong",{parentName:"p"},"\u6f2b\u5c04 (Diffuse)"),"  \u7740\u8272\u5668\u4e00\u6837\uff0c\u6cd5\u7ebf\u8d34\u56fe\u4f1a\u8ba1\u7b97\u4e00\u4e2a\u7b80\u5355\u7684 (Lambertian) \u5149\u7167\u6a21\u578b\u3002\u8868\u9762\u4e0a\u7684\u5149\u7167\u968f\u7740\u8868\u9762\u4e0e\u5149\u6e90\u4e4b\u95f4\u7684\u89d2\u5ea6\u51cf\u5c0f\u800c\u51cf\u5f31\u3002\u5149\u7167\u4ec5\u53d6\u51b3\u4e8e\u89d2\u5ea6\uff0c\u5728\u6444\u50cf\u673a\u79fb\u52a8\u6216\u65cb\u8f6c\u65f6\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe")," \u4f7f\u7528\u7eb9\u7406\u6a21\u62df\u5c0f\u7684\u8868\u9762\u7ec6\u8282\uff0c\u800c\u4e0d\u662f\u7528\u66f4\u591a\u7684\u591a\u8fb9\u5f62\u6765\u5b9e\u9645\u96d5\u523b\u7ec6\u8282\u3002\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u6539\u53d8\u5bf9\u8c61\u7684\u5f62\u72b6\uff0c\u800c\u662f\u4f7f\u7528\u4e00\u79cd\u79f0\u4e3a ",(0,s.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe (Normal Map)"),"  \u7684\u7279\u6b8a\u7eb9\u7406\u6765\u5b9e\u73b0\u8fd9\u79cd\u6548\u679c\u3002\u5728\u6cd5\u7ebf\u8d34\u56fe\u4e2d\uff0c\u6bcf\u4e2a\u50cf\u7d20\u7684\u989c\u8272\u503c\u8868\u793a\u8868\u9762\u6cd5\u7ebf\u7684\u89d2\u5ea6\u3002\u7136\u540e\u901a\u8fc7\u4f7f\u7528\u8be5\u503c\u800c\u4e0d\u662f\u51e0\u4f55\u4e2d\u7684\u503c\u6765\u8ba1\u7b97\u5149\u7167\u3002\u5728\u8ba1\u7b97\u5bf9\u8c61\u7684\u5149\u7167\u65f6\uff0c\u6cd5\u7ebf\u8d34\u56fe\u53ef\u4ee5\u6709\u6548\u5730\u8986\u76d6\u7f51\u683c\u7684\u51e0\u4f55\u4f53\u3002"),(0,s.kt)("h3",{id:"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe"},"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe"),(0,s.kt)("p",null,"\u53ef\u4ee5\u5bfc\u5165\u5728 Unity \u5916\u90e8\u521b\u5efa\u7684\u6cd5\u7ebf\u8d34\u56fe\uff0c\u4e5f\u53ef\u4ee5\u5bfc\u5165\u5e38\u89c4\u7070\u5ea6\u56fe\u50cf\u5e76\u5728 Unity \u4e2d\u5c06\u5176\u8f6c\u6362\u4e3a\u6cd5\u7ebf\u8d34\u56fe\u3002\uff08\u672c\u9875\u9762\u5f15\u7528\u7684\u662f\u5df2\u88ab",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u53d6\u4ee3\u7684\u65e7\u7248\u7740\u8272\u5668\uff0c\u4f46\u60a8\u53ef\u4ee5\u4e86\u89e3\u6709\u5173\u5982\u4f55\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/standard-shader-material-parameters/standard-shader-material-parameter-normal-map"},"\u6807\u51c6\u7740\u8272\u5668\u4e2d\u7684\u6cd5\u7ebf\u8d34\u56fe"),"\u7684\u66f4\u591a\u4fe1\u606f\uff09"),(0,s.kt)("h3",{id:"\u6280\u672f\u7ec6\u8282"},"\u6280\u672f\u7ec6\u8282"),(0,s.kt)("p",null,"\u6cd5\u7ebf\u8d34\u56fe\u662f\u4e00\u79cd\u5207\u7ebf\u7a7a\u95f4\u7c7b\u578b\u7684\u6cd5\u7ebf\u8d34\u56fe\u3002\u5207\u7ebf\u7a7a\u95f4\u662f\u201c\u8d34\u5408\u6a21\u578b\u51e0\u4f55\u4f53\u8868\u9762\u201d\u7684\u7a7a\u95f4\u3002\u5728\u6b64\u7a7a\u95f4\u4e2d\uff0cZ \u603b\u662f\u80cc\u79bb\u8868\u9762\u3002\u5207\u7ebf\u7a7a\u95f4\u6cd5\u7ebf\u8d34\u56fe\u6bd4\u5176\u4ed6\u201c\u5bf9\u8c61\u7a7a\u95f4\u201d\u7c7b\u578b\u7684\u6cd5\u7ebf\u8d34\u56fe\u7684\u6210\u672c\u7a0d\u9ad8\uff0c\u4f46\u6709\u4e00\u4e9b\u4f18\u70b9\uff1a"),(0,s.kt)("p",null,"1.\u53ef\u4ee5\u5728\u53d8\u5f62\u6a21\u578b\u4e0a\u4f7f\u7528\u5b83\u4eec - \u51f8\u8d77\u5c06\u4fdd\u7559\u5728\u53d8\u5f62\u8868\u9762\u4e0a\u5e76\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002 1.\u53ef\u4ee5\u5728\u6a21\u578b\u7684\u4e0d\u540c\u533a\u57df\u91cd\u590d\u4f7f\u7528\u6cd5\u7ebf\u8d34\u56fe\u7684\u67d0\u4e9b\u90e8\u5206\uff1b\u6216\u5728\u4e0d\u540c\u6a21\u578b\u4e0a\u4f7f\u7528\u5b83\u4eec\u3002"),(0,s.kt)("h2",{id:"\u6f2b\u5c04-diffuse-\u5c5e\u6027"},"\u6f2b\u5c04 (Diffuse) \u5c5e\u6027"),(0,s.kt)("p",null,"\u6f2b\u5c04\u4f1a\u8ba1\u7b97\u4e00\u4e2a\u7b80\u5355\u7684 (Lambertian) \u5149\u7167\u6a21\u578b\u3002\u8868\u9762\u4e0a\u7684\u5149\u7167\u968f\u7740\u8868\u9762\u4e0e\u5149\u6e90\u4e4b\u95f4\u7684\u89d2\u5ea6\u51cf\u5c0f\u800c\u51cf\u5f31\u3002\u5149\u7167\u4ec5\u53d6\u51b3\u4e8e\u6b64\u89d2\u5ea6\uff0c\u5728\u6444\u50cf\u673a\u79fb\u52a8\u6216\u65cb\u8f6c\u65f6\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,s.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,s.kt)("p",null,"\u901a\u5e38\uff0c\u6b64\u7740\u8272\u5668\u7684\u6e32\u67d3\u6210\u672c\u4f4e\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/built-in-shader-guide/shader-performance"},"\u7740\u8272\u5668\u6027\u80fd\u9875\u9762"),"\u3002"))}f.isMDXComponent=!0}}]);