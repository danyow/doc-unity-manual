"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28505],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96206:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],s={id:"visual-effects-lines-trails-billboards",title:"Lines, trails, and billboards",slug:"/visual-effects-lines-trails-billboards"},o="Lines, trails, and billboards",u={unversionedId:"graphics/visual-effects/visual-effects-lines-trails-billboards/visual-effects-lines-trails-billboards",id:"graphics/visual-effects/visual-effects-lines-trails-billboards/visual-effects-lines-trails-billboards",title:"Lines, trails, and billboards",description:"Unity uses specialised components to configure and render lines, trails, and billboards.",source:"@site/docs/graphics/visual-effects/visual-effects-lines-trails-billboards/visual-effects-lines-trails-billboards.md",sourceDirName:"graphics/visual-effects/visual-effects-lines-trails-billboards",slug:"/visual-effects-lines-trails-billboards",permalink:"/docs/visual-effects-lines-trails-billboards",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/visual-effects-lines-trails-billboards/visual-effects-lines-trails-billboards.md",tags:[],version:"current",frontMatter:{id:"visual-effects-lines-trails-billboards",title:"Lines, trails, and billboards",slug:"/visual-effects-lines-trails-billboards"},sidebar:"tutorialSidebar",previous:{title:"Lens Flare component",permalink:"/docs/visual-effects-lens-flares/class-lens-flare"},next:{title:"Billboard asset",permalink:"/docs/visual-effects-lines-trails-billboards/class-billboard-asset"}},c={},p=[{value:"Render pipeline information",id:"render-pipeline-information",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lines-trails-and-billboards"},"Lines, trails, and billboards"),(0,l.kt)("p",null,"Unity uses specialised components to configure and render lines, trails, and billboards."),(0,l.kt)("h2",{id:"render-pipeline-information"},"Render pipeline information"),(0,l.kt)("p",null,"How you work with lines, trails, and billboards depends on the render pipeline you use."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Line Renderer component")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Trail Renderer component")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes.",(0,l.kt)("br",null),(0,l.kt)("br",null),"You can also use VFX Graph to create a custom trail effect."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes.",(0,l.kt)("br",null),(0,l.kt)("br",null),"You can also use VFX Graph to create a custom trail effect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Billboard Renderer component")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Only with VFX Graph.")))))}f.isMDXComponent=!0}}]);