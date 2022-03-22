"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22190],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||s;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],o={id:"class-LensFlare",title:"Lens Flare component",slug:"/visual-effects-lens-flares/class-lens-flare"},i="Lens Flare component",c={unversionedId:"graphics/visual-effects/visual-effects-lens-flares/class-LensFlare",id:"graphics/visual-effects/visual-effects-lens-flares/class-LensFlare",title:"Lens Flare component",description:"A Lens Flare component displays a lens flare that is configured by a Flare asset.",source:"@site/docs/graphics/visual-effects/visual-effects-lens-flares/class-lens-flare.md",sourceDirName:"graphics/visual-effects/visual-effects-lens-flares",slug:"/visual-effects-lens-flares/class-lens-flare",permalink:"/docs/visual-effects-lens-flares/class-lens-flare",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/visual-effects-lens-flares/class-lens-flare.md",tags:[],version:"current",frontMatter:{id:"class-LensFlare",title:"Lens Flare component",slug:"/visual-effects-lens-flares/class-lens-flare"},sidebar:"tutorialSidebar",previous:{title:"Halo component",permalink:"/docs/visual-effects-lens-flares/class-halo"},next:{title:"Lines, trails, and billboards",permalink:"/docs/visual-effects-lines-trails-billboards"}},p={},f=[{value:"Using a Lens Flare component",id:"using-a-lens-flare-component",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],u={toc:f};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lens-flare-component"},"Lens Flare component"),(0,s.kt)("p",null,"A Lens Flare component displays a lens flare that is configured by a ",(0,s.kt)("a",{parentName:"p",href:"/docs/visual-effects-lens-flares/class-flare"},"Flare asset"),"."),(0,s.kt)("p",null,"You can display a Flare asset with a ",(0,s.kt)("a",{parentName:"p",href:"/docs/class-light"},"Light component"),". If you do this, Unity automatically tracks the position and direction of the Light and uses those values to configure the appearance of the lens flare."),(0,s.kt)("p",null,"Use this component instead to configure the values of the lens flare yourself, which gives you more precise control."),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"Note:"),"  This workflow is compatible only with the Built-in Render Pipelne. For similar functionality in other render pipelines, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/visual-effects-lens-flares"},"Lens flares and halos"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Inspector-LensFlare.png",alt:"Inspector-LensFlare.png"})),(0,s.kt)("h2",{id:"using-a-lens-flare-component"},"Using a Lens Flare component"),(0,s.kt)("p",null,"1.\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,s.kt)("strong",{parentName:"p"},"\u6e38\u620f\u5bf9\u8c61")," \uff08\u83dc\u5355\u680f\uff1a ",(0,s.kt)("strong",{parentName:"p"},"GameObject ",">"," Create Empty")," \uff09\u3002 2.\u5728 Inspector \u4e2d\u5355\u51fb  ",(0,s.kt)("strong",{parentName:"p"},"Add Component ",">"," Effects ",">"," Lens Flare")," \u3002 3.\u4e3a  ",(0,s.kt)("strong",{parentName:"p"},"Flare"),"  \u5c5e\u6027\u6307\u5b9a\u4e00\u4e2a",(0,s.kt)("a",{parentName:"p",href:"/docs/visual-effects-lens-flares/class-flare"},"\u5149\u6655\u8d44\u6e90"),"\u3002 4. If you want a ",(0,s.kt)("a",{parentName:"p",href:"/docs/cameras-overview/class-camera"},"Camera")," to see lens flares, attach a ",(0,s.kt)("a",{parentName:"p",href:"/docs/visual-effects-lens-flares/class-flare-layer"},"Flare Layer")," component to the Camera\u2019s GameObject. 5. To see the lens flare effect in the  ",(0,s.kt)("strong",{parentName:"p"},"Scene View")," , enable the Effect toggle in the Scene View toolbar and, in the drop-down, enable  ",(0,s.kt)("strong",{parentName:"p"},"Flares")," ."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LensFlare-FXButton.png",alt:"\u542f\u7528\u6548\u679c\u5f00\u5173\u4ee5\u4fbf\u5728 Scene \u89c6\u56fe\u4e2d\u67e5\u770b\u955c\u5934\u5149\u6655"})),(0,s.kt)("p",null,"\u542f\u7528\u6548\u679c\u5f00\u5173\u4ee5\u4fbf\u5728 Scene \u89c6\u56fe\u4e2d\u67e5\u770b\u955c\u5934\u5149\u6655"),(0,s.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Flare")),(0,s.kt)("td",{parentName:"tr",align:null},"The ",(0,s.kt)("a",{parentName:"td",href:"/docs/visual-effects-lens-flares/class-flare"},"Flare asset")," to render.",(0,s.kt)("br",null),(0,s.kt)("br",null)," ",(0,s.kt)("strong",{parentName:"td"},"Note")," : The other properties in the Lens Flare Inspector are stored in this Flare asset. They are not stored in the Lens Flare component.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Color")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8981\u5c06\u5149\u6655\u7740\u8272\u6210\u7684\u989c\u8272\u3002\u53ef\u7528\u4e8e\u4f7f\u955c\u5934\u5149\u6655\u66f4\u597d\u5730\u9002\u5e94\u573a\u666f\u7684\u6c1b\u56f4\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Brightness")),(0,s.kt)("td",{parentName:"tr",align:null},"The size and brightness the lens flare appears. If you use a very bright lens flare, make sure its direction fits with your Scene\u2019s primary light source.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Fade Speed")),(0,s.kt)("td",{parentName:"tr",align:null},"Unity \u6de1\u5165\u548c\u6de1\u51fa\u955c\u5934\u5149\u6655\u7684\u901f\u5ea6\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Ignore Layers")),(0,s.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u786e\u5b9a\u54ea\u4e9b\u56fe\u5c42\u53ef\u4ee5\u770b\u5230\u955c\u5934\u5149\u6655\u7684\u906e\u7f69\u3002")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Directional")),(0,s.kt)("td",{parentName:"tr",align:null},"\u6307\u793a Unity \u662f\u5426\u4f7f\u5149\u6655\u7684\u65b9\u5411\u6cbf\u6e38\u620f\u5bf9\u8c61\u7684\u6b63 z \u8f74\u3002\u5149\u6655\u770b\u8d77\u6765\u597d\u50cf\u662f\u65e0\u9650\u8fdc\uff0c\u4e0d\u4f1a\u8ddf\u8e2a\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\uff0c\u53ea\u8ddf\u8e2a z \u8f74\u7684\u65b9\u5411\u3002")))))}m.isMDXComponent=!0}}]);