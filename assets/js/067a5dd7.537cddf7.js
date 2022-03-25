"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49374],{3905:function(a,e,r){r.d(e,{Zo:function(){return d},kt:function(){return c}});var t=r(67294);function n(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function p(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.push.apply(r,t)}return r}function l(a){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(a,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))}))}return a}function s(a,e){if(null==a)return{};var r,t,n=function(a,e){if(null==a)return{};var r,t,n={},p=Object.keys(a);for(t=0;t<p.length;t++)r=p[t],e.indexOf(r)>=0||(n[r]=a[r]);return n}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(t=0;t<p.length;t++)r=p[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}var u=t.createContext({}),i=function(a){var e=t.useContext(u),r=e;return a&&(r="function"==typeof a?a(e):l(l({},e),a)),r},d=function(a){var e=i(a.components);return t.createElement(u.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},o=t.forwardRef((function(a,e){var r=a.components,n=a.mdxType,p=a.originalType,u=a.parentName,d=s(a,["components","mdxType","originalType","parentName"]),o=i(r),c=n,h=o["".concat(u,".").concat(c)]||o[c]||m[c]||p;return r?t.createElement(h,l(l({ref:e},d),{},{components:r})):t.createElement(h,l({ref:e},d))}));function c(a,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var p=r.length,l=new Array(p);l[0]=o;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=a,s.mdxType="string"==typeof a?a:n,l[1]=s;for(var i=2;i<p;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}o.displayName="MDXCreateElement"},93754:function(a,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var t=r(87462),n=r(63366),p=(r(67294),r(3905)),l=["components"],s={id:"shader-TransparentFamily",title:"\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217",slug:"/shader-transparent-family"},u="\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217",i={unversionedId:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-TransparentFamily",id:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-TransparentFamily",title:"\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217",description:"\u6ce8\u610f\uff1a Unity 5 \u5f15\u5165\u4e86\u6807\u51c6\u7740\u8272\u5668\u6765\u53d6\u4ee3\u8fd9\u4e9b\u7740\u8272\u5668\u3002",source:"@site/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-transparent-family.md",sourceDirName:"graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family",slug:"/shader-transparent-family",permalink:"/doc-unity-manual/docs/shader-transparent-family",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/built-in-shader-guide/shader-transparent-family/shader-transparent-family.md",tags:[],version:"current",frontMatter:{id:"shader-TransparentFamily",title:"\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217",slug:"/shader-transparent-family"},sidebar:"tutorialSidebar",previous:{title:"\u900f\u660e\u9542\u7a7a\u9876\u70b9\u5149\u7167 (Transparent Cutout Vertex-Lit)",permalink:"/doc-unity-manual/docs/shader-transparent-cutout-family/shader-trans-cut-vertex-lit"},next:{title:"\u900f\u660e\u51f9\u51f8\u6f2b\u5c04 (Transparent Bumped Diffuse)",permalink:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-diffuse"}},d={},m=[{value:"\u900f\u660e\u9876\u70b9\u5149\u7167 (Transparent Vertex-Lit)",id:"\u900f\u660e\u9876\u70b9\u5149\u7167-transparent-vertex-lit",level:2},{value:"\u900f\u660e\u6f2b\u5c04 (Transparent Diffuse)",id:"\u900f\u660e\u6f2b\u5c04-transparent-diffuse",level:2},{value:"\u900f\u660e\u955c\u9762\u53cd\u5c04 (Transparent Specular)",id:"\u900f\u660e\u955c\u9762\u53cd\u5c04-transparent-specular",level:2},{value:"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe (Transparent Normal mapped)",id:"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe-transparent-normal-mapped",level:2},{value:"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04 (Transparent Normal mapped Specular)",id:"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04-transparent-normal-mapped-specular",level:2},{value:"\u900f\u660e\u89c6\u5dee (Transparent Parallax)",id:"\u900f\u660e\u89c6\u5dee-transparent-parallax",level:2},{value:"\u900f\u660e\u89c6\u5dee\u955c\u9762\u53cd\u5c04 (Transparent Parallax Specular)",id:"\u900f\u660e\u89c6\u5dee\u955c\u9762\u53cd\u5c04-transparent-parallax-specular",level:2}],o={toc:m};function c(a){var e=a.components,r=(0,n.Z)(a,l);return(0,p.kt)("wrapper",(0,t.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217"},"\u900f\u660e\u7740\u8272\u5668\u7cfb\u5217"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Unity 5 \u5f15\u5165\u4e86",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-standard-shader"},"\u6807\u51c6\u7740\u8272\u5668"),"\u6765\u53d6\u4ee3\u8fd9\u4e9b\u7740\u8272\u5668\u3002"),(0,p.kt)("p",null,"\u900f\u660e (Transparent) \u7740\u8272\u5668\u7528\u4e8e\u5168\u900f\u660e\u6216\u534a\u900f\u660e\u5bf9\u8c61\u3002\u901a\u8fc7\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u7684 Alpha \u901a\u9053\uff0c\u53ef\u786e\u5b9a\u5bf9\u8c61\u7684\u533a\u57df\u7684\u900f\u660e\u5ea6\u9ad8\u4e8e\u6216\u4f4e\u4e8e\u5176\u4ed6\u533a\u57df\u3002\u8fd9\u79cd\u7740\u8272\u5668\u53ef\u4e3a\u73bb\u7483\u3001HUD\uff08\u62ac\u5934\u663e\u793a\uff09\u754c\u9762\u6216\u79d1\u5e7b\u573a\u666f\u5e26\u6765\u5f88\u597d\u7684\u6548\u679c\u3002"),(0,p.kt)("h2",{id:"\u900f\u660e\u9876\u70b9\u5149\u7167-transparent-vertex-lit"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-vertex-lit"},"\u900f\u660e\u9876\u70b9\u5149\u7167 (Transparent Vertex-Lit)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransVertex.jpg",alt:"shader-TransVertexLit"})),(0,p.kt)("p",null,"shader-TransVertexLit"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u900f\u660e\u8d34\u56fe\u7684 Alpha \u901a\u9053")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-vertex-lit"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("h2",{id:"\u900f\u660e\u6f2b\u5c04-transparent-diffuse"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-diffuse"},"\u900f\u660e\u6f2b\u5c04 (Transparent Diffuse)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransDiffuse.jpg",alt:"shader-TransDiffuse"})),(0,p.kt)("p",null,"shader-TransDiffuse"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u900f\u660e\u8d34\u56fe\u7684 Alpha \u901a\u9053")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-diffuse"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("h2",{id:"\u900f\u660e\u955c\u9762\u53cd\u5c04-transparent-specular"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-specular"},"\u900f\u660e\u955c\u9762\u53cd\u5c04 (Transparent Specular)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransSpec.jpg",alt:"shader-TransSpecular"})),(0,p.kt)("p",null,"shader-TransSpecular"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u540c\u65f6\u7528\u4e8e\u900f\u660e\u8d34\u56fe/\u955c\u9762\u8d34\u56fe\u7684 Alpha \u901a\u9053"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"  \u6b64\u7740\u8272\u5668\u7684\u4e00\u4e2a\u9650\u5236\u662f ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u7684 Alpha \u901a\u9053\u5c06\u540c\u65f6\u517c\u4f5c\u6b64\u7740\u8272\u5668\u7cfb\u5217\u4e2d\u955c\u9762\u53cd\u5c04\u7740\u8272\u5668\u7684\u955c\u9762\u8d34\u56fe\u3002"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-specular"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("h2",{id:"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe-transparent-normal-mapped"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-diffuse"},"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe (Transparent Normal mapped)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransBump.jpg",alt:"shader-TransBumpedDiffuse"})),(0,p.kt)("p",null,"shader-TransBumpedDiffuse"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u900f\u660e\u8d34\u56fe\u7684 Alpha \u901a\u9053"),(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"li"},"\u6cd5\u7ebf\u8d34\u56fe")," \uff0c\u65e0\u9700 Alpha \u901a\u9053")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-diffuse"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("h2",{id:"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04-transparent-normal-mapped-specular"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-specular"},"\u900f\u660e\u6cd5\u7ebf\u8d34\u56fe\u955c\u9762\u53cd\u5c04 (Transparent Normal mapped Specular)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransBumpSpec.jpg",alt:"shader-TransBumpedSpecular"})),(0,p.kt)("p",null,"shader-TransBumpedSpecular"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u540c\u65f6\u7528\u4e8e\u900f\u660e\u8d34\u56fe/\u955c\u9762\u8d34\u56fe\u7684 Alpha \u901a\u9053")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe")," \uff0c\u65e0\u9700 Alpha \u901a\u9053"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"  \u6b64\u7740\u8272\u5668\u7684\u4e00\u4e2a\u9650\u5236\u662f ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u7684 Alpha \u901a\u9053\u5c06\u540c\u65f6\u517c\u4f5c\u6b64\u7740\u8272\u5668\u7cfb\u5217\u4e2d\u955c\u9762\u53cd\u5c04\u7740\u8272\u5668\u7684\u955c\u9762\u8d34\u56fe\u3002"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-bumped-specular"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("h2",{id:"\u900f\u660e\u89c6\u5dee-transparent-parallax"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-parallax-diffuse"},"\u900f\u660e\u89c6\u5dee (Transparent Parallax)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransParallaxBump.jpg",alt:"shader-TransParallaxDiffuse"})),(0,p.kt)("p",null,"shader-TransParallaxDiffuse"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"li"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u7528\u4e8e\u900f\u660e\u8d34\u56fe\u7684 Alpha \u901a\u9053"),(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"li"},"\u6cd5\u7ebf\u8d34\u56fe")," \u4ee5\u53ca\u7528\u4e8e\u89c6\u5dee\u6df1\u5ea6\u7684 Alpha \u901a\u9053")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-parallax-diffuse"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,p.kt)("h2",{id:"\u900f\u660e\u89c6\u5dee\u955c\u9762\u53cd\u5c04-transparent-parallax-specular"},(0,p.kt)("a",{parentName:"h2",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-parallax-specular"},"\u900f\u660e\u89c6\u5dee\u955c\u9762\u53cd\u5c04 (Transparent Parallax Specular)")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Shaders/Thumb-TransParallaxBumpSpec.jpg",alt:"shader-TransParallaxSpecular"})),(0,p.kt)("p",null,"shader-TransParallaxSpecular"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u9700\u8981\u7684\u8d44\u6e90\uff1a")," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u4ee5\u53ca\u540c\u65f6\u7528\u4e8e\u900f\u660e\u8d34\u56fe/\u955c\u9762\u8d34\u56fe\u7684 Alpha \u901a\u9053")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u6cd5\u7ebf\u8d34\u56fe")," \u4ee5\u53ca\u7528\u4e8e\u89c6\u5dee\u6df1\u5ea6\u7684 Alpha \u901a\u9053"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"  \u6b64\u7740\u8272\u5668\u7684\u4e00\u4e2a\u9650\u5236\u662f ",(0,p.kt)("strong",{parentName:"p"},"\u57fa\u7840")," \u7eb9\u7406\u7684 Alpha \u901a\u9053\u5c06\u540c\u65f6\u517c\u4f5c\u6b64\u7740\u8272\u5668\u7cfb\u5217\u4e2d\u955c\u9762\u53cd\u5c04\u7740\u8272\u5668\u7684\u955c\u9762\u8d34\u56fe\u3002"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shader-transparent-family/shader-trans-parallax-specular"},"\xbb \u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")))}c.isMDXComponent=!0}}]);