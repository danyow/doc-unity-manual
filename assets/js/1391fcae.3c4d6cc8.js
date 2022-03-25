"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55705],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7631:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=["components"],o={id:"class-Flare",title:"Flare asset",slug:"/visual-effects-lens-flares/class-flare"},i="Flare asset",p={unversionedId:"graphics/visual-effects/visual-effects-lens-flares/class-Flare",id:"graphics/visual-effects/visual-effects-lens-flares/class-Flare",title:"Flare asset",description:"A Flare asset allows you to create and configure the appearance of lens flares. Lens flares simulate the effect of lights refracting inside a camera lens. Use them to represent bright lights or to add a bit more atmosphere to your Scene.",source:"@site/docs/graphics/visual-effects/visual-effects-lens-flares/class-flare.md",sourceDirName:"graphics/visual-effects/visual-effects-lens-flares",slug:"/visual-effects-lens-flares/class-flare",permalink:"/doc-unity-manual/docs/visual-effects-lens-flares/class-flare",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/visual-effects-lens-flares/class-flare.md",tags:[],version:"current",frontMatter:{id:"class-Flare",title:"Flare asset",slug:"/visual-effects-lens-flares/class-flare"},sidebar:"tutorialSidebar",previous:{title:"Flare Layer component",permalink:"/doc-unity-manual/docs/visual-effects-lens-flares/class-flare-layer"},next:{title:"Halo component",permalink:"/doc-unity-manual/docs/visual-effects-lens-flares/class-halo"}},u={},c=[{value:"Using Flare assets",id:"using-flare-assets",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Flare Inspector reference",id:"flare-inspector-reference",level:2},{value:"Configuring Flare assets",id:"configuring-flare-assets",level:2},{value:"Texture Layouts",id:"texture-layouts",level:2},{value:"1 \u5927 4 \u5c0f",id:"1-\u5927-4-\u5c0f",level:3},{value:"1 \u5927 2 \u4e2d 8 \u5c0f",id:"1-\u5927-2-\u4e2d-8-\u5c0f",level:3},{value:"1 \u4e2a\u7eb9\u7406",id:"1-\u4e2a\u7eb9\u7406",level:3},{value:"2x2 \u7f51\u683c",id:"2x2-\u7f51\u683c",level:2},{value:"3x3 \u7f51\u683c",id:"3x3-\u7f51\u683c",level:3},{value:"4x4 \u7f51\u683c",id:"4x4-\u7f51\u683c",level:3}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flare-asset"},"Flare asset"),(0,l.kt)("p",null,"A Flare asset allows you to create and configure the appearance of lens flares. Lens flares simulate the effect of lights refracting inside a camera lens. Use them to represent bright lights or to add a bit more atmosphere to your Scene."),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Note:"),"  This workflow is compatible only with the Built-in Render Pipelne. For similar functionality in other render pipelines, see ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/visual-effects-lens-flares"},"Lens flares and halos"),"."),(0,l.kt)("h2",{id:"using-flare-assets"},"Using Flare assets"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Assign the Flare asset to a ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/class-light"},"Light component")," or a ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/visual-effects-lens-flares/class-lens-flare"},"Lens flare component"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you assign it to the  ",(0,l.kt)("strong",{parentName:"li"},"Flare"),"  property of a ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/class-light"},"Light component"),", Unity automatically tracks the position and direction of the Light and uses those values to configure the appearance of the lens flare."),(0,l.kt)("li",{parentName:"ul"},"If you assign it to the  ",(0,l.kt)("strong",{parentName:"li"},"Flare"),"  property of a ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/visual-effects-lens-flares/class-lens-flare"},"Lens flare component"),", you can use the Lens Flare component to configure additional values for more precise control."))),(0,l.kt)("li",{parentName:"ol"},"If you want a ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/cameras-overview/class-camera"},"Camera")," to see lens flares, attach a ",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/visual-effects-lens-flares/class-flare-layer"},"Flare Layer")," component to the Camera\u2019s GameObject."),(0,l.kt)("li",{parentName:"ol"},"To see the lens flare effect in the  ",(0,l.kt)("strong",{parentName:"li"},"Scene View")," , enable the Effect toggle in the Scene View toolbar and, in the drop-down, enable  ",(0,l.kt)("strong",{parentName:"li"},"Flares")," .")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"There are some sample Flare assets in Unity\u2019s ",(0,l.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/essentials/asset-packs/standard-assets-for-unity-2017-3-32351"},"Standard Assets"),"."),(0,l.kt)("h2",{id:"flare-inspector-reference"},"Flare Inspector reference"),(0,l.kt)("p",null,"\u5149\u6655\u9700\u8981\u5305\u542b\u5355\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u7eb9\u7406")," \u4e0a\u7684\u591a\u4e2a\u5149\u6655 ",(0,l.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u3002\u5728\u5149\u6655\u4e2d\uff0c\u53ef\u4ece\u4efb\u4f55\u7eb9\u7406\u9009\u53d6\u8981\u5305\u542b\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlareInspector.png",alt:"\u5149\u6655\u68c0\u89c6\u9762\u677f (Flare Inspector)"})),(0,l.kt)("p",null,"\u5149\u6655\u68c0\u89c6\u9762\u677f (Flare Inspector)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Elements")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5149\u6655\u4e2d\u5305\u542b\u7684\u5149\u6655\u56fe\u50cf\u6570\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Image Index")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece  ",(0,l.kt)("strong",{parentName:"td"},"Flare Texture"),"  \u4e3a\u6b64\u5143\u7d20\u4f7f\u7528\u54ea\u4e2a\u5149\u6655\u56fe\u50cf\u3002\u8bf7\u53c2\u9605\u4e0b\u9762\u7684","_","\u5149\u6655\u7eb9\u7406","_","\u90e8\u5206\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u6cbf\u7740\u4ece\u6240\u5c5e\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u5230\u5c4f\u5e55\u4e2d\u5fc3\u7684\u7ebf\u8def\u4e0a\u7684\u504f\u79fb\u91cf\u30020 = \u6e38\u620f\u5bf9\u8c61\u4f4d\u7f6e\uff0c1 = \u5c4f\u5e55\u4e2d\u5fc3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7684\u5927\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u7d20\u7684\u989c\u8272\u8272\u8c03\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Use Light Color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5149\u6655\u9644\u52a0\u5728\u5149\u6e90\u4e0a\uff0c\u542f\u7528\u6b64\u529f\u80fd\u4f1a\u4f7f\u7528\u5149\u6e90\u7684\u989c\u8272\u4e3a\u5149\u6655\u7740\u8272\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Rotate")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u542f\u7528\u6b64\u5c5e\u6027\uff0c\u5143\u7d20\u7684\u5e95\u90e8\u5c06\u59cb\u7ec8\u9762\u5411\u5c4f\u5e55\u7684\u4e2d\u5fc3\uff0c\u4f7f\u5143\u7d20\u968f\u7740\u955c\u5934\u5149\u6655\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u800c\u65cb\u8f6c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Zoom")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u542f\u7528\u6b64\u5c5e\u6027\uff0c\u5143\u7d20\u5c06\u5728\u53ef\u89c1\u65f6\u6269\u5927\uff0c\u800c\u5728\u4e0d\u53ef\u89c1\u65f6\u518d\u6b21\u7f29\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,l.kt)("strong",{parentName:"td"},"Fade")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u542f\u7528\u6b64\u5c5e\u6027\uff0c\u5143\u7d20\u5c06\u5728\u53ef\u89c1\u65f6\u6de1\u5165\u81f3\u6700\u9ad8\u5f3a\u5ea6\uff0c\u800c\u5728\u4e0d\u53ef\u89c1\u65f6\u6de1\u51fa\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Flare Texture")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b64\u7eb9\u7406\u5305\u542b\u8be5\u5149\u6655\u7684 ",(0,l.kt)("strong",{parentName:"td"},"\u5143\u7d20")," \u4f7f\u7528\u7684\u56fe\u50cf\u3002\u5fc5\u987b\u6839\u636e  ",(0,l.kt)("strong",{parentName:"td"},"TextureLayout"),"  \u9009\u9879\u4e4b\u4e00\u8fdb\u884c\u6392\u5217\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Texture Layout")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u4f55\u5728 ",(0,l.kt)("strong",{parentName:"td"},"\u5149\u6655\u7eb9\u7406 (Flare Texture)"),"  \u4e2d\u5e03\u7f6e\u5404\u4e2a\u5149\u6655\u5143\u7d20\u56fe\u50cf\uff08\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4e0b\u9762\u7684","_","\u7eb9\u7406\u5e03\u5c40","_","\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Fog")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u542f\u7528\u6b64\u5c5e\u6027\uff0c\u5149\u6655\u5c06\u4f34\u968f\u7740\u8ddd\u79bb\u96fe\u6548\u6d88\u5931\u3002\u6b64\u5c5e\u6027\u901a\u5e38\u7528\u4e8e\u5c0f\u5149\u6655\u3002")))),(0,l.kt)("h2",{id:"configuring-flare-assets"},"Configuring Flare assets"),(0,l.kt)("p",null,"\u5149\u6655\u7531\u591a\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u7ec4\u6210\uff0c\u6cbf\u7740\u4e00\u6761\u7ebf\u6392\u5217\u3002\u8fd9\u6761\u7ebf\u662f\u901a\u8fc7\u6bd4\u8f83\u5305\u542b\u955c\u5934\u5149\u6655\u7684\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u4e0e\u5c4f\u5e55\u7684\u4e2d\u5fc3\u6765\u8ba1\u7b97\u5f97\u51fa\u7684\u3002\u8fd9\u6761\u7ebf\u4f1a\u5ef6\u4f38\u5230\u6240\u5c5e\u6e38\u620f\u5bf9\u8c61\u548c\u5c4f\u5e55\u4e2d\u5fc3\u4e4b\u5916\u3002\u6240\u6709\u5149\u6655 ",(0,l.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u90fd\u5728\u8fd9\u6761\u7ebf\u4e0a\u6392\u6210\u4e00\u884c\u3002"),(0,l.kt)("p",null,"For performance reasons, all  ",(0,l.kt)("strong",{parentName:"p"},"Elements"),"  of one Flare must share the same Texture. This Texture contains a collection of the different images that are available as Elements in a single Flare. The  ",(0,l.kt)("strong",{parentName:"p"},"Texture Layout"),"  defines how the  ",(0,l.kt)("strong",{parentName:"p"},"Elements"),"  are laid out in the  ",(0,l.kt)("strong",{parentName:"p"},"Flare Texture")," . If you use many different Flare assets, using a shared single  ",(0,l.kt)("strong",{parentName:"p"},"Flare Texture"),"  that contains all the  ",(0,l.kt)("strong",{parentName:"p"},"Elements"),"  will give you best rendering performance."),(0,l.kt)("p",null,"Lens Flares are blocked by  ",(0,l.kt)("strong",{parentName:"p"},"Colliders")," . A Collider in-between the Flare GameObject and the Camera will hide the Flare, even if the Collider does not have a  ",(0,l.kt)("strong",{parentName:"p"},"Mesh Renderer")," . If the in-between Collider is marked as Trigger it will block the flare if and only if  ",(0,l.kt)("strong",{parentName:"p"},"Physics.queriesHitTriggers"),"  is true."),(0,l.kt)("p",null,"To override the shader used for Flares, open the ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-graphics-settings"},"Graphics")," window and set  ",(0,l.kt)("strong",{parentName:"p"},"Lens Flares"),"  to the shader that you would like to use as the override."),(0,l.kt)("h2",{id:"texture-layouts"},"Texture Layouts"),(0,l.kt)("p",null,"\u4e0b\u9762\u63d0\u4f9b\u4e86\u4e0d\u540c\u5149\u6655 ",(0,l.kt)("strong",{parentName:"p"},"\u7eb9\u7406\u5e03\u5c40")," \u7684\u9009\u9879\u3002\u56fe\u50cf\u4e2d\u7684\u6570\u5b57\u5bf9\u5e94\u4e8e\u6bcf\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u7684  ",(0,l.kt)("strong",{parentName:"p"},"Image Index"),"  \u5c5e\u6027\u3002"),(0,l.kt)("h3",{id:"1-\u5927-4-\u5c0f"},"1 \u5927 4 \u5c0f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlaresLayout0.png",alt:"FlaresLayout0.png"})),(0,l.kt)("p",null,"\u4e13\u4e3a\u7c7b\u4f3c\u4e8e\u592a\u9633\u7684\u5927\u578b\u5149\u6655\u800c\u8bbe\u8ba1\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u9700\u8981\u5176\u4e2d\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u6bd4\u5176\u4ed6\u5143\u7d20\u5177\u6709\u66f4\u9ad8\u7684\u4fdd\u771f\u5ea6\u3002\u6b64\u5e03\u5c40\u9002\u7528\u4e8e\u9ad8\u5ea6\u662f\u5bbd\u5ea6\u4e24\u500d\u7684\u7eb9\u7406\u3002"),(0,l.kt)("h3",{id:"1-\u5927-2-\u4e2d-8-\u5c0f"},"1 \u5927 2 \u4e2d 8 \u5c0f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlaresLayout1.png",alt:"FlaresLayout1.png"})),(0,l.kt)("p",null,"\u4e13\u4e3a\u9700\u8981 1 \u4e2a\u9ad8\u6e05\u56fe\u50cf\u30012 \u4e2a\u4e2d\u7b49\u5927\u5c0f\u56fe\u50cf\u548c 8 \u4e2a\u5c0f\u56fe\u50cf\u7684\u590d\u6742\u5149\u6655\u800c\u8bbe\u8ba1\u3002\u6b64\u5e03\u5c40\u7528\u4e8e\u6807\u51c6\u8d44\u6e90\u201c50mm Zoom Flare\u201d\uff0850mm \u7f29\u653e\u5149\u6655\uff09\uff0c\u5176\u4e2d\u6709\u4e24\u4e2a\u4e2d\u7b49\u5927\u5c0f\u7684\u5143\u7d20\u8868\u793a\u5f69\u8679\u8272\u5706\u5708\u3002\u6b64\u5e03\u5c40\u9002\u7528\u4e8e\u9ad8\u5ea6\u662f\u5bbd\u5ea6\u4e24\u500d\u7684\u7eb9\u7406\u3002"),(0,l.kt)("h3",{id:"1-\u4e2a\u7eb9\u7406"},"1 \u4e2a\u7eb9\u7406"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlaresLayout2.png",alt:"FlaresLayout2.png"})),(0,l.kt)("p",null,"\u5355\u4e2a\u56fe\u50cf\u3002"),(0,l.kt)("h2",{id:"2x2-\u7f51\u683c"},"2x2 \u7f51\u683c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlaresLayout3.png",alt:"FlaresLayout3.png"})),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 2x2 \u7f51\u683c\u3002"),(0,l.kt)("h3",{id:"3x3-\u7f51\u683c"},"3x3 \u7f51\u683c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlaresLayout4.png",alt:"FlaresLayout4.png"})),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 3x3 \u7f51\u683c\u3002"),(0,l.kt)("h3",{id:"4x4-\u7f51\u683c"},"4x4 \u7f51\u683c"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/FlaresLayout5.png",alt:"FlaresLayout5.png"})),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 4x4 \u7f51\u683c\u3002"))}d.isMDXComponent=!0}}]);