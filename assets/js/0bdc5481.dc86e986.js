"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42702],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),d=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(i.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,u=p["".concat(i,".").concat(m)]||p[m]||h[m]||l;return t?r.createElement(u,s(s({ref:a},c),{},{components:t})):r.createElement(u,s({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=p;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<l;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50808:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return h}});var r=t(87462),n=t(63366),l=(t(67294),t(3905)),s=["components"],o={id:"StandardShaderMaterialParameterMetallic",title:"Metallic mode Metallic Property",slug:"/standard-shader-material-parameters/standard-shader-material-parameter-metallic"},i="Metallic mode: Metallic Property",d={unversionedId:"graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/StandardShaderMaterialParameterMetallic",id:"graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/StandardShaderMaterialParameterMetallic",title:"Metallic mode Metallic Property",description:"StandardShaderMetallicMode.png",source:"@site/docs/graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/standard-shader-material-parameter-metallic.md",sourceDirName:"graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters",slug:"/standard-shader-material-parameters/standard-shader-material-parameter-metallic",permalink:"/docs/standard-shader-material-parameters/standard-shader-material-parameter-metallic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/standard-shader-material-parameter-metallic.md",tags:[],version:"current",frontMatter:{id:"StandardShaderMaterialParameterMetallic",title:"Metallic mode Metallic Property",slug:"/standard-shader-material-parameters/standard-shader-material-parameter-metallic"},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u5ea6\u8d34\u56fe",permalink:"/docs/standard-shader-material-parameters/standard-shader-material-parameter-height-map"},next:{title:"\u6cd5\u7ebf\u8d34\u56fe\uff08\u51f9\u51f8\u8d34\u56fe\uff09",permalink:"/docs/standard-shader-material-parameters/standard-shader-material-parameter-normal-map"}},c={},h=[{value:"Metallic Property",id:"metallic-property",level:3}],p={toc:h};function m(e){var a=e.components,t=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"metallic-mode-metallic-property"},"Metallic mode: Metallic Property"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderMetallicMode.png",alt:"StandardShaderMetallicMode.png"})),(0,l.kt)("p",null,"When working in the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic workflow"),"  (as opposed to the Specular workflow), the reflectivity and light response of the surface are modified by the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  level and the ",(0,l.kt)("a",{parentName:"p",href:"/docs/standard-shader-material-parameters/standard-shader-material-parameter-smoothness"},"Smoothness")," level."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderParameterMetallic.png",alt:"StandardShaderParameterMetallic.png"})),(0,l.kt)("p",null,"Specular reflections are still generated when using this workflow but they arise naturally depending on the settings you give for the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  and Smoothness levels, rather than being explicitly defined."),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Metallic mode is not just for materials which are supposed to look metallic!"),"  This mode is known as  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  because of the way you have control over how metallic or non-metallic a surface is."),(0,l.kt)("h3",{id:"metallic-property"},"Metallic Property"),(0,l.kt)("p",null,"The  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  Property of a material determines how \u201cmetal-like\u201d the surface is. When a surface is more metallic, it reflects the environment more and its albedo colour becomes less visible. At full metallic level, the surface colour is entirely driven by reflections from the environment. When a surface is less metallic, its albedo colour is more clear and any surface reflections are visible on top of the surface colour, rather than obscuring it."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderMetallicGraduationTable.jpg",alt:"A range of Metallic values from 0 to 1 (with smoothness at a constant 0.8 for all samples)"})),(0,l.kt)("p",null,"A range of Metallic values from 0 to 1 (with smoothness at a constant 0.8 for all samples)"),(0,l.kt)("p",null,"By default, with no texture assigned, the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  and Smoothness Properties are controlled by a slider each. This is enough for some materials. However if your model\u2019s surface has areas with a mixture of surface types in the albedo texture, you can use a texture map to control how the metallic and smoothness levels vary across the surface of the material. For instance if your texture contains a character\u2019s clothing including some metal buckles and zips. You would want the buckles and zips to have a higher  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  value than the fabric of the clothes. To achieve this, instead of using a single slider value, a texture map can be assigned which contains lighter pixel colours in the areas of the buckles and zips, and darker values for the fabric."),(0,l.kt)("p",null,"With a texture assigned to the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  Property, both the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  and  ",(0,l.kt)("strong",{parentName:"p"},"Smoothness"),"  sliders disappear. Instead, the  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  levels for the material are controlled by the values in the Red channel of the texture, and the ",(0,l.kt)("a",{parentName:"p",href:"/docs/standard-shader-material-parameters/standard-shader-material-parameter-smoothness"},"Smoothness")," levels for the material are controlled by the Alpha channel of the texture. (This means the Green and Blue channels are ignored). This means you have a single texture which can define areas as being rough or smooth, and metallic or non-metallic, which is very useful when working texture maps that cover many areas of a model with varying requirements - for example a single character texture map often includes multiple surface requirements - leather shoes, cloth clothes, skin for the hands and face and metal buckles."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderNoMetallicMap.jpg",alt:"\u6b64\u56fe\u663e\u793a\u4e86\u6ca1\u6709\u91d1\u5c5e\u6027\u8d34\u56fe\u7684\u624b\u63d0\u7bb1\u6a21\u578b"})),(0,l.kt)("p",null,"\u6b64\u56fe\u663e\u793a\u4e86\u6ca1\u6709\u91d1\u5c5e\u6027\u8d34\u56fe\u7684\u624b\u63d0\u7bb1\u6a21\u578b"),(0,l.kt)("p",null,"In the example above, the case has an albedo map, but no texture for  ",(0,l.kt)("strong",{parentName:"p"},"Metallic")," . This means the whole object has a single  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  and  ",(0,l.kt)("strong",{parentName:"p"},"Smoothness"),"  value, which is not ideal. The leather straps, the metal buckles, the sticker and the handle should all appear to have different surface properties."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderMetallicMap.jpg",alt:"\u6b64\u56fe\u663e\u793a\u4e86\u5df2\u5e94\u7528\u91d1\u5c5e\u6027\u8d34\u56fe\u7684\u624b\u63d0\u7bb1\u6a21\u578b"})),(0,l.kt)("p",null,"\u6b64\u56fe\u663e\u793a\u4e86\u5df2\u5e94\u7528\u91d1\u5c5e\u6027\u8d34\u56fe\u7684\u624b\u63d0\u7bb1\u6a21\u578b"),(0,l.kt)("p",null,"In this example, a  ",(0,l.kt)("strong",{parentName:"p"},"Metallic")," / ",(0,l.kt)("strong",{parentName:"p"},"Smoothness"),"  texture map has been assigned. The buckle now has a high  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  value and responds to light accordingly. The leather straps are shinier than the leather body of the box, however they have a low  ",(0,l.kt)("strong",{parentName:"p"},"Metallic"),"  value, so it appears to be a shiny non-metal surface. The black and white map on the far right shows the lighter areas for metal, and mid to low greys for the leather."))}m.isMDXComponent=!0}}]);