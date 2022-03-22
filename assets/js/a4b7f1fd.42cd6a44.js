"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29665],{3905:function(e,a,r){r.d(a,{Zo:function(){return m},kt:function(){return c}});var t=r(67294);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){l(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,l=function(e,a){if(null==e)return{};var r,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=t.createContext({}),u=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},m=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(r),c=l,h=d["".concat(i,".").concat(c)]||d[c]||o[c]||n;return r?t.createElement(h,p(p({ref:a},m),{},{components:r})):t.createElement(h,p({ref:a},m))}));function c(e,a){var r=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=r.length,p=new Array(n);p[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,p[1]=s;for(var u=2;u<n;u++)p[u]=r[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19549:function(e,a,r){r.r(a),r.d(a,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return o}});var t=r(87462),l=r(63366),n=(r(67294),r(3905)),p=["components"],s={id:"shader-NormalFamily",title:"\u666e\u901a\u7740\u8272\u5668\u7cfb\u5217",slug:"/shader-normal-family"},i="\u666e\u901a\u7740\u8272\u5668\u7cfb\u5217",u={unversionedId:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-NormalFamily",id:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-NormalFamily",title:"\u666e\u901a\u7740\u8272\u5668\u7cfb\u5217",description:"\u6ce8\u610f\uff1a Unity 5 \u5f15\u5165\u4e86\u6807\u51c6\u7740\u8272\u5668\u6765\u53d6\u4ee3\u8fd9\u4e9b\u7740\u8272\u5668\u3002",source:"@site/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-normal-family.md",sourceDirName:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family",slug:"/shader-normal-family",permalink:"/docs/shader-normal-family",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-normal-family/shader-normal-family.md",tags:[],version:"current",frontMatter:{id:"shader-NormalFamily",title:"\u666e\u901a\u7740\u8272\u5668\u7cfb\u5217",slug:"/shader-normal-family"},sidebar:"tutorialSidebar",previous:{title:"\u65e7\u7248\u7740\u8272\u5668",permalink:"/docs/built-in-shader-guide"},next:{title:"\u51f9\u51f8\u6f2b\u5c04 (Bumped Diffuse)",permalink:"/docs/shader-normal-family/shader-normal-bumped-diffuse"}},m={},o=[{value:"\u9876\u70b9\u5149\u7167 (Vertex Lit)",id:"\u9876\u70b9\u5149\u7167-vertex-lit",level:2},{value:"\u6f2b\u5c04 (Diffuse)",id:"\u6f2b\u5c04-diffuse",level:2},{value:"\u955c\u9762\u53cd\u5c04 (Specular)",id:"\u955c\u9762\u53cd\u5c04-specular",level:2},{value:"\u6cd5\u7ebf\u8d34\u56fe (Normal mapped)",id:"\u6cd5\u7ebf\u8d34\u56fe-normal-mapped",level:2},{value:"\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04 (Normal mapped Specular)",id:"\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04-normal-mapped-specular",level:2},{value:"\u89c6\u5dee (Parallax)",id:"\u89c6\u5dee-parallax",level:2},{value:"\u89c6\u5dee\u955c\u9762\u53cd\u5c04 (Parallax Specular)",id:"\u89c6\u5dee\u955c\u9762\u53cd\u5c04-parallax-specular",level:2},{value:"\u8d34\u82b1 (Decal)",id:"\u8d34\u82b1-decal",level:2},{value:"\u6f2b\u5c04\u7ec6\u8282 (Diffuse Detail)",id:"\u6f2b\u5c04\u7ec6\u8282-diffuse-detail",level:2}],d={toc:o};function c(e){var a=e.components,r=(0,l.Z)(e,p);return(0,n.kt)("wrapper",(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u666e\u901a\u7740\u8272\u5668\u7cfb\u5217"},"\u666e\u901a\u7740\u8272\u5668\u7cfb\u5217"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,n.kt)("a",{parentName:"p",href:"/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u8fd9\u4e9b\u7740\u8272\u5668\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e9b\u7740\u8272\u5668\u662f Unity \u4e2d\u7684\u57fa\u672c\u7740\u8272\u5668\u3002\u5b83\u4eec\u4e0d\u662f\u4e13\u95e8\u7684\u7740\u8272\u5668\uff0c\u5e94\u8be5\u9002\u7528\u4e8e\u5927\u591a\u6570\u4e0d\u900f\u660e\u5bf9\u8c61\u3002\u5982\u679c\u60f3\u8ba9\u5bf9\u8c61\u900f\u660e\u3001\u53d1\u5149\u7b49\uff0c\u8fd9\u4e9b\u7740\u8272\u5668\u4e0d\u9002\u5408\u3002"),(0,n.kt)("h2",{id:"\u9876\u70b9\u5149\u7167-vertex-lit"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-vertex-lit"},"\u9876\u70b9\u5149\u7167 (Vertex Lit)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalVertex.jpg",alt:"shader-NormalVertexLit"})),(0,n.kt)("p",null,"shader-NormalVertexLit"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\uff0c\u65e0\u9700 Alpha \u901a\u9053")),(0,n.kt)("h2",{id:"\u6f2b\u5c04-diffuse"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-diffuse"},"\u6f2b\u5c04 (Diffuse)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalDiffuse.jpg",alt:"shader-NormalDiffuse"})),(0,n.kt)("p",null,"shader-NormalDiffuse"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\uff0c\u65e0\u9700 Alpha \u901a\u9053")),(0,n.kt)("h2",{id:"\u955c\u9762\u53cd\u5c04-specular"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-specular"},"\u955c\u9762\u53cd\u5c04 (Specular)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalSpec.jpg",alt:"shader-NormalSpecular"})),(0,n.kt)("p",null,"shader-NormalSpecular"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u955c\u9762\u8d34\u56fe\u7684 Alpha \u901a\u9053")),(0,n.kt)("h2",{id:"\u6cd5\u7ebf\u8d34\u56fe-normal-mapped"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-bumped-diffuse"},"\u6cd5\u7ebf\u8d34\u56fe (Normal mapped)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalBump.jpg",alt:"shader-NormalBumpedDiffuse"})),(0,n.kt)("p",null,"shader-NormalBumpedDiffuse"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\uff0c\u65e0\u9700 Alpha \u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u6cd5\u7ebf\u8d34\u56fe")," ")),(0,n.kt)("h2",{id:"\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04-normal-mapped-specular"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-bumped-specular"},"\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04 (Normal mapped Specular)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalBumpSpec.jpg",alt:"shader-NormalBumpedSpecular"})),(0,n.kt)("p",null,"shader-NormalBumpedSpecular"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u955c\u9762\u8d34\u56fe\u7684 Alpha \u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u6cd5\u7ebf\u8d34\u56fe")," ")),(0,n.kt)("h2",{id:"\u89c6\u5dee-parallax"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-parallax-diffuse"},"\u89c6\u5dee (Parallax)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalParallaxBump.jpg",alt:"shader-NormalParallaxDiffuse"})),(0,n.kt)("p",null,"shader-NormalParallaxDiffuse"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\uff0c\u65e0\u9700 Alpha \u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u6cd5\u7ebf\u8d34\u56fe")," "),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u5ea6")," \u7eb9\u7406\u4ee5\u53ca Alpha \u901a\u9053\u4e2d\u7684\u89c6\u5dee\u6df1\u5ea6")),(0,n.kt)("h2",{id:"\u89c6\u5dee\u955c\u9762\u53cd\u5c04-parallax-specular"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-parallax-specular"},"\u89c6\u5dee\u955c\u9762\u53cd\u5c04 (Parallax Specular)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalParallaxBumpSpec.jpg",alt:"shader-NormalParallaxSpecular"})),(0,n.kt)("p",null,"shader-NormalParallaxSpecular"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u955c\u9762\u8d34\u56fe\u7684 Alpha \u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u6cd5\u7ebf\u8d34\u56fe")," "),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u5ea6")," \u7eb9\u7406\u4ee5\u53ca Alpha \u901a\u9053\u4e2d\u7684\u89c6\u5dee\u6df1\u5ea6")),(0,n.kt)("h2",{id:"\u8d34\u82b1-decal"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-decal"},"\u8d34\u82b1 (Decal)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalDecal.jpg",alt:"shader-NormalDecal"})),(0,n.kt)("p",null,"shader-NormalDecal"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\uff0c\u65e0\u9700 Alpha \u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u8d34\u82b1")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u8d34\u82b1\u900f\u660e\u5ea6\u7684 Alpha \u901a\u9053")),(0,n.kt)("h2",{id:"\u6f2b\u5c04\u7ec6\u8282-diffuse-detail"},(0,n.kt)("a",{parentName:"h2",href:"/docs/shader-normal-family/shader-normal-diffuse-detail"},"\u6f2b\u5c04\u7ec6\u8282 (Diffuse Detail)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-NormalDiffuseDetail.jpg",alt:"shader-NormalDiffuseDetail"})),(0,n.kt)("p",null,"shader-NormalDiffuseDetail"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\uff0c\u65e0\u9700 Alpha \u901a\u9053"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"li"},"\u7ec6\u8282")," \u7070\u5ea6\u7eb9\u7406\uff1b\u4ee5 50% \u7070\u8272\u4e3a\u4e2d\u6027\u8272")))}c.isMDXComponent=!0}}]);