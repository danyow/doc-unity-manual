"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19836],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(r),d=a,m=f["".concat(o,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46872:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],c={id:"visual-effects-decals",title:"Decals and projectors",slug:"/visual-effects-decals"},o="Decals and projectors",i={unversionedId:"graphics/visual-effects/visual-effects-decals/visual-effects-decals",id:"graphics/visual-effects/visual-effects-decals/visual-effects-decals",title:"Decals and projectors",description:"Decals are materials that decorate the surface of other materials. They are most commonly used for effects like paint splatters and stickers.",source:"@site/docs/graphics/visual-effects/visual-effects-decals/visual-effects-decals.md",sourceDirName:"graphics/visual-effects/visual-effects-decals",slug:"/visual-effects-decals",permalink:"/docs/visual-effects-decals",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/visual-effects-decals/visual-effects-decals.md",tags:[],version:"current",frontMatter:{id:"visual-effects-decals",title:"Decals and projectors",slug:"/visual-effects-decals"},sidebar:"tutorialSidebar",previous:{title:"Post-processing and full-screen effects",permalink:"/docs/visual-effects/post-processing-overview"},next:{title:"Projector component",permalink:"/docs/visual-effects-decals/class-projector"}},u={},p=[{value:"Render pipeline information",id:"render-pipeline-information",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"decals-and-projectors"},"Decals and projectors"),(0,s.kt)("p",null,"Decals are materials that decorate the surface of other materials. They are most commonly used for effects like paint splatters and stickers."),(0,s.kt)("p",null,"Unity projects these materials into a scene so that they wrap around other scene geometry. This means that you can also use them for effects that simulate projected light, such as blob shadows."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/urp-decals.png",alt:"Decals in the Universal Render Pipeline"})),(0,s.kt)("p",null,"Decals in the Universal Render Pipeline"),(0,s.kt)("h2",{id:"render-pipeline-information"},"Render pipeline information"),(0,s.kt)("p",null,"How you work with decals and projectors depends on the render pipeline you use."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Decal and projectors")),(0,s.kt)("td",{parentName:"tr",align:null},"Yes",(0,s.kt)("br",null),(0,s.kt)("br",null),"Use the ",(0,s.kt)("a",{parentName:"td",href:"/docs/visual-effects-decals/class-projector"},"Projector component"),"."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes",(0,s.kt)("br",null),(0,s.kt)("br",null),"Use the ",(0,s.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest?subfolder=/manual/renderer-feature-decal.html"},"Decal Renderer Feature"),"."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes",(0,s.kt)("br",null),(0,s.kt)("br",null),"Use the ",(0,s.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest?subfolder=/manual/Decal-Projector.html"},"Decal Projector"),".")))))}d.isMDXComponent=!0}}]);