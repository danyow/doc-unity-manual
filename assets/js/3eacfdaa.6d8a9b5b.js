"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94467],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},u=Object.keys(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,m=c["".concat(p,".").concat(f)]||c[f]||l[f]||u;return r?a.createElement(m,s(s({ref:t},o),{},{components:r})):a.createElement(m,s({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,s=new Array(u);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<u;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},70633:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var a=r(87462),n=r(63366),u=(r(67294),r(3905)),s=["components"],i={id:"shader-TransCutBumpedDiffuse",title:"\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u6f2b\u5c04 (Transparent Cutout Bumped Diffuse)",slug:"/shader-transparent-cutout-family/shader-trans-cut-bumped-diffuse"},p="\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u6f2b\u5c04 (Transparent Cutout Bumped Diffuse)",d={unversionedId:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-cutout-family/shader-TransCutBumpedDiffuse",id:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-cutout-family/shader-TransCutBumpedDiffuse",title:"\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u6f2b\u5c04 (Transparent Cutout Bumped Diffuse)",description:"\u6ce8\u610f\uff1a Unity 5 \u5f15\u5165\u4e86\u6807\u51c6\u7740\u8272\u5668\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002",source:"@site/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-cutout-family/shader-trans-cut-bumped-diffuse.md",sourceDirName:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-cutout-family",slug:"/shader-transparent-cutout-family/shader-trans-cut-bumped-diffuse",permalink:"/doc-unity-manual/docs/shader-transparent-cutout-family/shader-trans-cut-bumped-diffuse",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-cutout-family/shader-trans-cut-bumped-diffuse.md",tags:[],version:"current",frontMatter:{id:"shader-TransCutBumpedDiffuse",title:"\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u6f2b\u5c04 (Transparent Cutout Bumped Diffuse)",slug:"/shader-transparent-cutout-family/shader-trans-cut-bumped-diffuse"},sidebar:"tutorialSidebar",previous:{title:"\u900f\u660e\u9542\u7a7a\u7740\u8272\u5668\u7cfb\u5217",permalink:"/doc-unity-manual/docs/shader-transparent-cutout-family"},next:{title:"\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u955c\u9762\u53cd\u5c04 (Transparent Cutout Bumped Specular)",permalink:"/doc-unity-manual/docs/shader-transparent-cutout-family/shader-trans-cut-bumped-specular"}},o={},l=[{value:"\u900f\u660e\u9542\u7a7a (Transparent Cutout) \u5c5e\u6027",id:"\u900f\u660e\u9542\u7a7a-transparent-cutout-\u5c5e\u6027",level:2},{value:"\u6cd5\u7ebf\u8d34\u56fe (Normal Mapped) \u5c5e\u6027",id:"\u6cd5\u7ebf\u8d34\u56fe-normal-mapped-\u5c5e\u6027",level:2},{value:"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe",id:"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe",level:3},{value:"\u6280\u672f\u7ec6\u8282",id:"\u6280\u672f\u7ec6\u8282",level:3},{value:"\u6f2b\u5c04 (Diffuse) \u5c5e\u6027",id:"\u6f2b\u5c04-diffuse-\u5c5e\u6027",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}],c={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,u.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u6f2b\u5c04-transparent-cutout-bumped-diffuse"},"\u900f\u660e\u9542\u7a7a\u51f9\u51f8\u6f2b\u5c04 (Transparent Cutout Bumped Diffuse)"),(0,u.kt)("p",null," ",(0,u.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Shader-TransCutoutBump.jpg",alt:"Shader-TransCutoutBump.jpg"})),(0,u.kt)("h2",{id:"\u900f\u660e\u9542\u7a7a-transparent-cutout-\u5c5e\u6027"},"\u900f\u660e\u9542\u7a7a (Transparent Cutout) \u5c5e\u6027"),(0,u.kt)("p",null," ",(0,u.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,u.kt)("p",null,"\u9542\u7a7a\u7740\u8272\u5668\u662f\u663e\u793a\u900f\u660e\u5bf9\u8c61\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u3002\u9542\u7a7a\u548c\u5e38\u89c4",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family"},"\u900f\u660e (Transparent)")," \u7740\u8272\u5668\u4e4b\u95f4\u7684\u533a\u522b\u4e3a\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u6b64\u7740\u8272\u5668\u4e0d\u80fd\u6709\u90e8\u5206\u900f\u660e\u533a\u57df\u3002\u5168\u90e8\u90fd\u5c06\u662f\u5b8c\u5168\u4e0d\u900f\u660e\u6216\u5b8c\u5168\u900f\u660e\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6b64\u7740\u8272\u5668\u7684\u5bf9\u8c61\u53ef\u4ee5\u6295\u5c04\u548c\u63a5\u53d7\u9634\u5f71\uff01"),(0,u.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6b64\u7740\u8272\u5668\u65f6\uff0c\u901a\u5e38\u4e0e\u900f\u660e\u7740\u8272\u5668\u76f8\u5173\u7684\u56fe\u5f62\u6392\u5e8f\u95ee\u9898\u4e0d\u4f1a\u53d1\u751f\u3002")),(0,u.kt)("p",null,"\u6b64\u7740\u8272\u5668\u4f7f\u7528 ",(0,u.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u4e2d\u5305\u542b\u7684 Alpha \u901a\u9053\u6765\u786e\u5b9a\u900f\u660e\u533a\u57df\u3002\u5982\u679c Alpha \u5305\u542b\u900f\u660e\u533a\u57df\u548c\u4e0d\u900f\u660e\u533a\u57df\u4e4b\u95f4\u7684\u6df7\u5408\uff0c\u5219\u53ef\u4ee5\u624b\u52a8\u786e\u5b9a\u6240\u663e\u793a\u533a\u57df\u7684\u5206\u754c\u70b9\u3002\u901a\u8fc7\u8c03\u6574  ",(0,u.kt)("strong",{parentName:"p"},"Alpha Cutoff"),"  \u6ed1\u52a8\u6761\u5373\u53ef\u66f4\u6539\u6b64\u5206\u754c\u70b9\u3002"),(0,u.kt)("h2",{id:"\u6cd5\u7ebf\u8d34\u56fe-normal-mapped-\u5c5e\u6027"},"\u6cd5\u7ebf\u8d34\u56fe (Normal Mapped) \u5c5e\u6027"),(0,u.kt)("p",null,"\u50cf ",(0,u.kt)("strong",{parentName:"p"},"\u6f2b\u5c04 (Diffuse)"),"  \u7740\u8272\u5668\u4e00\u6837\uff0c\u6cd5\u7ebf\u8d34\u56fe\u4f1a\u8ba1\u7b97\u4e00\u4e2a\u7b80\u5355\u7684 (Lambertian) \u5149\u7167\u6a21\u578b\u3002\u8868\u9762\u4e0a\u7684\u5149\u7167\u968f\u7740\u8868\u9762\u4e0e\u5149\u6e90\u4e4b\u95f4\u7684\u89d2\u5ea6\u51cf\u5c0f\u800c\u51cf\u5f31\u3002\u5149\u7167\u4ec5\u53d6\u51b3\u4e8e\u89d2\u5ea6\uff0c\u5728\u6444\u50cf\u673a\u79fb\u52a8\u6216\u65cb\u8f6c\u65f6\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,u.kt)("p",null," ",(0,u.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe")," \u4f7f\u7528\u7eb9\u7406\u6a21\u62df\u5c0f\u7684\u8868\u9762\u7ec6\u8282\uff0c\u800c\u4e0d\u662f\u7528\u66f4\u591a\u7684\u591a\u8fb9\u5f62\u6765\u5b9e\u9645\u96d5\u523b\u7ec6\u8282\u3002\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u6539\u53d8\u5bf9\u8c61\u7684\u5f62\u72b6\uff0c\u800c\u662f\u4f7f\u7528\u4e00\u79cd\u79f0\u4e3a ",(0,u.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe (Normal Map)"),"  \u7684\u7279\u6b8a\u7eb9\u7406\u6765\u5b9e\u73b0\u8fd9\u79cd\u6548\u679c\u3002\u5728\u6cd5\u7ebf\u8d34\u56fe\u4e2d\uff0c\u6bcf\u4e2a\u50cf\u7d20\u7684\u989c\u8272\u503c\u8868\u793a\u8868\u9762\u6cd5\u7ebf\u7684\u89d2\u5ea6\u3002\u7136\u540e\u901a\u8fc7\u4f7f\u7528\u8be5\u503c\u800c\u4e0d\u662f\u51e0\u4f55\u4e2d\u7684\u503c\u6765\u8ba1\u7b97\u5149\u7167\u3002\u5728\u8ba1\u7b97\u5bf9\u8c61\u7684\u5149\u7167\u65f6\uff0c\u6cd5\u7ebf\u8d34\u56fe\u53ef\u4ee5\u6709\u6548\u5730\u8986\u76d6\u7f51\u683c\u7684\u51e0\u4f55\u4f53\u3002"),(0,u.kt)("h3",{id:"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe"},"\u521b\u5efa\u6cd5\u7ebf\u8d34\u56fe"),(0,u.kt)("p",null,"\u53ef\u4ee5\u5bfc\u5165\u5728 Unity \u5916\u90e8\u521b\u5efa\u7684\u6cd5\u7ebf\u8d34\u56fe\uff0c\u4e5f\u53ef\u4ee5\u5bfc\u5165\u5e38\u89c4\u7070\u5ea6\u56fe\u50cf\u5e76\u5728 Unity \u4e2d\u5c06\u5176\u8f6c\u6362\u4e3a\u6cd5\u7ebf\u8d34\u56fe\u3002\uff08\u672c\u9875\u9762\u5f15\u7528\u7684\u662f\u5df2\u88ab",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u53d6\u4ee3\u7684\u65e7\u7248\u7740\u8272\u5668\uff0c\u4f46\u60a8\u53ef\u4ee5\u4e86\u89e3\u6709\u5173\u5982\u4f55\u4f7f\u7528",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/standard-shader-material-parameters/standard-shader-material-parameter-normal-map"},"\u6807\u51c6\u7740\u8272\u5668\u4e2d\u7684\u6cd5\u7ebf\u8d34\u56fe"),"\u7684\u66f4\u591a\u4fe1\u606f\uff09"),(0,u.kt)("h3",{id:"\u6280\u672f\u7ec6\u8282"},"\u6280\u672f\u7ec6\u8282"),(0,u.kt)("p",null,"\u6cd5\u7ebf\u8d34\u56fe\u662f\u4e00\u79cd\u5207\u7ebf\u7a7a\u95f4\u7c7b\u578b\u7684\u6cd5\u7ebf\u8d34\u56fe\u3002\u5207\u7ebf\u7a7a\u95f4\u662f\u201c\u8d34\u5408\u6a21\u578b\u51e0\u4f55\u4f53\u8868\u9762\u201d\u7684\u7a7a\u95f4\u3002\u5728\u6b64\u7a7a\u95f4\u4e2d\uff0cZ \u603b\u662f\u80cc\u79bb\u8868\u9762\u3002\u5207\u7ebf\u7a7a\u95f4\u6cd5\u7ebf\u8d34\u56fe\u6bd4\u5176\u4ed6\u201c\u5bf9\u8c61\u7a7a\u95f4\u201d\u7c7b\u578b\u7684\u6cd5\u7ebf\u8d34\u56fe\u7684\u6210\u672c\u7a0d\u9ad8\uff0c\u4f46\u6709\u4e00\u4e9b\u4f18\u70b9\uff1a"),(0,u.kt)("p",null,"1.\u53ef\u4ee5\u5728\u53d8\u5f62\u6a21\u578b\u4e0a\u4f7f\u7528\u5b83\u4eec - \u51f8\u8d77\u5c06\u4fdd\u7559\u5728\u53d8\u5f62\u8868\u9762\u4e0a\u5e76\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002 1.\u53ef\u4ee5\u5728\u6a21\u578b\u7684\u4e0d\u540c\u533a\u57df\u91cd\u590d\u4f7f\u7528\u6cd5\u7ebf\u8d34\u56fe\u7684\u67d0\u4e9b\u90e8\u5206\uff1b\u6216\u5728\u4e0d\u540c\u6a21\u578b\u4e0a\u4f7f\u7528\u5b83\u4eec\u3002"),(0,u.kt)("h2",{id:"\u6f2b\u5c04-diffuse-\u5c5e\u6027"},"\u6f2b\u5c04 (Diffuse) \u5c5e\u6027"),(0,u.kt)("p",null,"\u6f2b\u5c04\u4f1a\u8ba1\u7b97\u4e00\u4e2a\u7b80\u5355\u7684 (Lambertian) \u5149\u7167\u6a21\u578b\u3002\u8868\u9762\u4e0a\u7684\u5149\u7167\u968f\u7740\u8868\u9762\u4e0e\u5149\u6e90\u4e4b\u95f4\u7684\u89d2\u5ea6\u51cf\u5c0f\u800c\u51cf\u5f31\u3002\u5149\u7167\u4ec5\u53d6\u51b3\u4e8e\u6b64\u89d2\u5ea6\uff0c\u5728\u6444\u50cf\u673a\u79fb\u52a8\u6216\u65cb\u8f6c\u65f6\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,u.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,u.kt)("p",null,"\u901a\u5e38\uff0c\u6b64\u7740\u8272\u5668\u7684\u6e32\u67d3\u6210\u672c\u4f4e\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,u.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/built-in-shader-guide/shader-performance"},"\u7740\u8272\u5668\u6027\u80fd\u9875\u9762"),"\u3002"))}f.isMDXComponent=!0}}]);