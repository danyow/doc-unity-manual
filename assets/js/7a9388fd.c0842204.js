"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24543],{3905:function(e,r,a){a.d(r,{Zo:function(){return d},kt:function(){return h}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),i=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(a),h=n,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||s;return a?t.createElement(m,o(o({ref:r},d),{},{components:a})):t.createElement(m,o({ref:r},d))}));function h(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4587:function(e,r,a){a.r(r),a.d(r,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var t=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],l={id:"StandardShaderMaterialParameterSpecular",title:"Specular mode Specular Property",slug:"/standard-shader-material-parameters/standard-shader-material-parameter-specular"},p="Specular mode: Specular Property",i={unversionedId:"graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/StandardShaderMaterialParameterSpecular",id:"graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/StandardShaderMaterialParameterSpecular",title:"Specular mode Specular Property",description:"StandardShaderSpecularMode.png",source:"@site/docs/graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/standard-shader-material-parameter-specular.md",sourceDirName:"graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters",slug:"/standard-shader-material-parameters/standard-shader-material-parameter-specular",permalink:"/doc-unity-manual/docs/standard-shader-material-parameters/standard-shader-material-parameter-specular",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-built-in/shader-standard-shader/standard-shader-material-parameters/standard-shader-material-parameter-specular.md",tags:[],version:"current",frontMatter:{id:"StandardShaderMaterialParameterSpecular",title:"Specular mode Specular Property",slug:"/standard-shader-material-parameters/standard-shader-material-parameter-specular"},sidebar:"tutorialSidebar",previous:{title:"\u5e73\u6ed1\u5ea6",permalink:"/doc-unity-manual/docs/standard-shader-material-parameters/standard-shader-material-parameter-smoothness"},next:{title:"Metallic \u4e0e Specular \u5de5\u4f5c\u6d41\u7a0b\u7684\u6bd4\u8f83",permalink:"/doc-unity-manual/docs/shader-standard-shader/standard-shader-metallic-vs-specular"}},d={},c=[{value:"Specular Property",id:"specular-property",level:3}],u={toc:c};function h(e){var r=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"specular-mode-specular-property"},"Specular mode: Specular Property"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderSpecularMode.png",alt:"StandardShaderSpecularMode.png"})),(0,s.kt)("h3",{id:"specular-property"},"Specular Property"),(0,s.kt)("p",null,"The  ",(0,s.kt)("strong",{parentName:"p"},"Specular"),"  Property is only visible when using the  ",(0,s.kt)("strong",{parentName:"p"},"Specular setup")," , as shown in the  ",(0,s.kt)("strong",{parentName:"p"},"Shader"),"  field in the image above. Specular effects are essentially the direct reflections of light sources in your Scene, which typically show up as bright highlights and shine on the surface of objects (although specular highlights can be subtle or diffuse too)."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderParameterSpecularSmoothness.png",alt:"StandardShaderParameterSpecularSmoothness.png"})),(0,s.kt)("p",null,"Both the  ",(0,s.kt)("strong",{parentName:"p"},"Specular setup"),"  and  ",(0,s.kt)("strong",{parentName:"p"},"Metallic setup"),"  produce specular highlights, so the choice of which to use is more a matter of setup and your artistic preference. In the  ",(0,s.kt)("strong",{parentName:"p"},"Specular setup"),"  you have direct control over the brightness and tint colour of specular highlights, while in the  ",(0,s.kt)("strong",{parentName:"p"},"Metallic setup"),"  you control other Properties and the intensity and colour of the specular highlights emerge as a natural result of the other Property settings."),(0,s.kt)("p",null,"When working in Specular mode, the RGB colour in the  ",(0,s.kt)("strong",{parentName:"p"},"Specular"),"  Property controls the strength and colour tint of the specular reflectivity. This includes shine from light sources and reflections from the environment. The ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/standard-shader-material-parameters/standard-shader-material-parameter-smoothness"},"Smoothness")," Property controls the clarity of the specular effect. With a low  ",(0,s.kt)("strong",{parentName:"p"},"Smoothness"),"  value, even strong specular reflections appear blurred and diffuse. With a high  ",(0,s.kt)("strong",{parentName:"p"},"Smoothness"),"  value, specular reflections are crisper and clearer."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderReflectivityGraduationTable.svg",alt:"\u4e00\u7ec4\u4ece 0 \u5230 1 \u7684\u955c\u9762\u53cd\u5c04\u5e73\u6ed1\u5ea6\u503c"})),(0,s.kt)("p",null,"\u4e00\u7ec4\u4ece 0 \u5230 1 \u7684\u955c\u9762\u53cd\u5c04\u5e73\u6ed1\u5ea6\u503c"),(0,s.kt)("p",null,"You might want to vary the  ",(0,s.kt)("strong",{parentName:"p"},"Specular"),"  values across the surface of your material - for example, if your Texture contains a character\u2019s coat that has some shiny buttons. You would want the buttons to have a higher specular value than the fabric of the clothes. To achieve this, assign a Texture map instead of using a single slider value. This allows greater control over the the strength and colour of the specular light reflections across the surface of the material, according to the pixel colours of your specular map."),(0,s.kt)("p",null,"When a Texture is assigned to the  ",(0,s.kt)("strong",{parentName:"p"},"Specular"),"  Property, both the  ",(0,s.kt)("strong",{parentName:"p"},"Specular"),"  Property and  ",(0,s.kt)("strong",{parentName:"p"},"Smoothness"),"  slider disappear. Instead, the specular levels for the material are controlled by the values in the  ",(0,s.kt)("strong",{parentName:"p"},"Red")," ,  ",(0,s.kt)("strong",{parentName:"p"},"Green"),"  and  ",(0,s.kt)("strong",{parentName:"p"},"Blue"),"  channels of the Texture itself, and the ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/standard-shader-material-parameters/standard-shader-material-parameter-smoothness"},"Smoothness")," levels for the material are controlled by the Alpha channel of the same Texture. This provides a single Texture which defines areas as being rough or smooth, and have varying levels and colors of specularity. This is very useful when working Texture maps that cover many areas of a model with varying requirements; for example, a single character Texture map often includes multiple surface requirements such as leather shoes, fabric of the clothes, skin for the hands and face, and metal buckles."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderSpecularCol1000kgWeight.jpg",alt:"\u4e00\u4e2a 1000 \u5343\u514b\u79e4\u7823\u7684\u793a\u4f8b\uff0c\u5b83\u5177\u6709\u6765\u81ea\u65b9\u5411\u5149\u7684\u5f3a\u70c8\u955c\u9762\u53cd\u5c04\u3002"})),(0,s.kt)("p",null,"\u4e00\u4e2a 1000 \u5343\u514b\u79e4\u7823\u7684\u793a\u4f8b\uff0c\u5b83\u5177\u6709\u6765\u81ea\u65b9\u5411\u5149\u7684\u5f3a\u70c8\u955c\u9762\u53cd\u5c04\u3002"),(0,s.kt)("p",null,"Here, the specular reflection and smoothness are defined by a colour and the  ",(0,s.kt)("strong",{parentName:"p"},"Smoothness"),"  slider. No Texture has been assigned, so the specular and smoothness level is constant across the whole surface. This is not always desirable, particularly in the case where your Albedo Texture maps to a variety of different areas on your model (also known as a Texture atlas)."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StandardShaderSpecularMap1000kgWeight.jpg",alt:"\u76f8\u540c\u7684\u6a21\u578b\uff0c\u4f46\u5206\u914d\u4e86\u955c\u9762\u53cd\u5c04\u8d34\u56fe\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5e38\u91cf\u503c\u3002"})),(0,s.kt)("p",null,"\u76f8\u540c\u7684\u6a21\u578b\uff0c\u4f46\u5206\u914d\u4e86\u955c\u9762\u53cd\u5c04\u8d34\u56fe\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5e38\u91cf\u503c\u3002"),(0,s.kt)("p",null,"\u6b64\u5904\uff0c\u7eb9\u7406\u8d34\u56fe\u63a7\u5236\u7740\u955c\u9762\u53cd\u5c04\u548c\u5e73\u6ed1\u5ea6\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5141\u8bb8\u955c\u9762\u53cd\u5c04\u5728\u6a21\u578b\u7684\u8868\u9762\u4e0a\u53d8\u5316\u3002\u8bf7\u6ce8\u610f\uff0c\u8fb9\u7f18\u5177\u6709\u6bd4\u4e2d\u5fc3\u4f4d\u7f6e\u66f4\u9ad8\u7684\u955c\u9762\u53cd\u5c04\u6548\u679c\uff0c\u8868\u9762\u5bf9\u5149\u7ebf\u6709\u4e00\u4e9b\u5fae\u5999\u7684\u989c\u8272\u54cd\u5e94\uff0c\u5e76\u4e14\u5b57\u6bcd\u5185\u90e8\u7684\u533a\u57df\u4e0d\u518d\u6709\u955c\u9762\u9ad8\u5149\u3002\u53f3\u56fe\u662f\u7528\u4e8e\u63a7\u5236\u955c\u9762\u53cd\u5c04\u989c\u8272\u548c\u5f3a\u5ea6\u7684 RGB \u901a\u9053\u4ee5\u53ca\u7528\u4e8e\u63a7\u5236\u5e73\u6ed1\u5ea6\u7684 Alpha \u901a\u9053\u3002"),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u9ed1\u8272\u955c\u9762\u53cd\u5c04\u989c\u8272 (0,0,0) \u5c06\u4f7f\u955c\u9762\u53cd\u5c04\u6548\u679c\u65e0\u6548\u3002"))}h.isMDXComponent=!0}}]);