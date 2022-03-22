"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56848],{3905:function(e,r,a){a.d(r,{Zo:function(){return p},kt:function(){return c}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),u=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(a),c=n,m=f["".concat(o,".").concat(c)]||f[c]||d[c]||l;return a?t.createElement(m,i(i({ref:r},p),{},{components:a})):t.createElement(m,i({ref:r},p))}));function c(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=f;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5545:function(e,r,a){a.r(r),a.d(r,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var t=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"shader-NormalParallaxDiffuse",title:"\u89c6\u5dee\u6f2b\u5c04 (Parallax Diffuse)",slug:"/shader-normal-family/shader-normal-parallax-diffuse"},o="\u89c6\u5dee\u6f2b\u5c04 (Parallax Diffuse)",u={unversionedId:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-NormalParallaxDiffuse",id:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-NormalParallaxDiffuse",title:"\u89c6\u5dee\u6f2b\u5c04 (Parallax Diffuse)",description:"\u6ce8\u610f\uff1a Unity 5 \u5f15\u5165\u4e86\u6807\u51c6\u7740\u8272\u5668\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002",source:"@site/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-normal-parallax-diffuse.md",sourceDirName:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family",slug:"/shader-normal-family/shader-normal-parallax-diffuse",permalink:"/docs/shader-normal-family/shader-normal-parallax-diffuse",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-normal-parallax-diffuse.md",tags:[],version:"current",frontMatter:{id:"shader-NormalParallaxDiffuse",title:"\u89c6\u5dee\u6f2b\u5c04 (Parallax Diffuse)",slug:"/shader-normal-family/shader-normal-parallax-diffuse"},sidebar:"tutorialSidebar",previous:{title:"\u6f2b\u5c04 (Diffuse)",permalink:"/docs/shader-normal-family/shader-normal-diffuse"},next:{title:"\u89c6\u5dee\u51f9\u51f8\u955c\u9762\u53cd\u5c04 (Parallax Bumped Specular)",permalink:"/docs/shader-normal-family/shader-normal-parallax-specular"}},p={},d=[{value:"\u89c6\u5dee\u6cd5\u7ebf\u8d34\u56fe (Parallax Normal mapped) \u5c5e\u6027",id:"\u89c6\u5dee\u6cd5\u7ebf\u8d34\u56fe-parallax-normal-mapped-\u5c5e\u6027",level:2},{value:"\u6f2b\u5c04 (Diffuse) \u5c5e\u6027",id:"\u6f2b\u5c04-diffuse-\u5c5e\u6027",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}],f={toc:d};function c(e){var r=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u89c6\u5dee\u6f2b\u5c04-parallax-diffuse"},"\u89c6\u5dee\u6f2b\u5c04 (Parallax Diffuse)"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,l.kt)("a",{parentName:"p",href:"/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u6b64\u7740\u8272\u5668\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Shader-NormalParallaxBump.jpg",alt:"Shader-NormalParallaxBump.jpg"})),(0,l.kt)("h2",{id:"\u89c6\u5dee\u6cd5\u7ebf\u8d34\u56fe-parallax-normal-mapped-\u5c5e\u6027"},"\u89c6\u5dee\u6cd5\u7ebf\u8d34\u56fe (Parallax Normal mapped) \u5c5e\u6027"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u89c6\u5dee\u6cd5\u7ebf\u8d34\u56fe")," \u4e0e\u5e38\u89c4 ",(0,l.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe")," \u76f8\u540c\uff0c\u4f46\u53ef\u4ee5\u66f4\u597d\u5730\u6a21\u62df\u201c\u6df1\u5ea6\u201d\u3002\u901a\u8fc7\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"\u9ad8\u5ea6\u8d34\u56fe")," \u5b9e\u73b0\u989d\u5916\u7684\u6df1\u5ea6\u6548\u679c\u3002\u9ad8\u5ea6\u8d34\u56fe\u5305\u542b\u5728\u6cd5\u7ebf\u8d34\u56fe\u7684 Alpha \u901a\u9053\u4e2d\u3002\u5728 Alpha \u4e2d\uff0c\u9ed1\u8272\u4e3a\u96f6\u6df1\u5ea6\uff0c\u767d\u8272\u4e3a\u5168\u6df1\u5ea6\u3002\u8fd9\u901a\u5e38\u7528\u4e8e\u7816\u5757/\u77f3\u5934\uff0c\u4ee5\u66f4\u597d\u5730\u8868\u73b0\u5b83\u4eec\u4e4b\u95f4\u7684\u88c2\u7f1d\u3002"),(0,l.kt)("p",null,"\u89c6\u5dee\u8d34\u56fe\u6280\u672f\u975e\u5e38\u7b80\u5355\uff0c\u56e0\u6b64\u53ef\u80fd\u5177\u6709\u7455\u75b5\u548c\u5f02\u5e38\u6548\u679c\u3002\u5177\u4f53\u800c\u8a00\uff0c\u5e94\u907f\u514d\u9ad8\u5ea6\u8d34\u56fe\u4e2d\u51fa\u73b0\u975e\u5e38\u9661\u5ced\u7684\u9ad8\u5ea6\u8fc7\u6e21\u3002\u8c03\u6574  ",(0,l.kt)("strong",{parentName:"p"},"Inspector"),"  \u4e2d\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Height"),"  \u503c\u4e5f\u4f1a\u5bfc\u81f4\u5bf9\u8c61\u4ee5\u4e0d\u7b26\u5408\u5b9e\u9645\u7684\u5947\u602a\u65b9\u5f0f\u53d8\u5f62\u3002\u56e0\u6b64\uff0c\u5efa\u8bae\u4f7f\u7528\u9010\u6e10\u9ad8\u5ea6\u8d34\u56fe\u8fc7\u6e21\u6216\u5c06  ",(0,l.kt)("strong",{parentName:"p"},"Height"),"  \u6ed1\u52a8\u6761\u4fdd\u6301\u5728\u6d45\u7aef\u3002"),(0,l.kt)("h2",{id:"\u6f2b\u5c04-diffuse-\u5c5e\u6027"},"\u6f2b\u5c04 (Diffuse) \u5c5e\u6027"),(0,l.kt)("p",null,"\u6f2b\u5c04\u4f1a\u8ba1\u7b97\u4e00\u4e2a\u7b80\u5355\u7684 (Lambertian) \u5149\u7167\u6a21\u578b\u3002\u8868\u9762\u4e0a\u7684\u5149\u7167\u968f\u7740\u8868\u9762\u4e0e\u5149\u6e90\u4e4b\u95f4\u7684\u89d2\u5ea6\u51cf\u5c0f\u800c\u51cf\u5f31\u3002\u5149\u7167\u4ec5\u53d6\u51b3\u4e8e\u6b64\u89d2\u5ea6\uff0c\u5728\u6444\u50cf\u673a\u79fb\u52a8\u6216\u65cb\u8f6c\u65f6\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,l.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,l.kt)("p",null,"\u901a\u5e38\uff0c\u6b64\u7740\u8272\u5668\u7684\u6e32\u67d3\u6210\u672c\u8f83\u9ad8\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/docs/built-in-shader-guide/shader-performance"},"\u7740\u8272\u5668\u6027\u80fd\u9875\u9762"),"\u3002"))}c.isMDXComponent=!0}}]);