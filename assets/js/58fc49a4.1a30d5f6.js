"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22543],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),l=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(t),u=n,y=h["".concat(d,".").concat(u)]||h[u]||p[u]||s;return t?a.createElement(y,o(o({ref:r},c),{},{components:t})):a.createElement(y,o({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=h;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69861:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=t(87462),n=t(63366),s=(t(67294),t(3905)),o=["components"],i={id:"shader-keywords-material-inspector",title:"Using shader keywords with the material Inspector",slug:"/shader-variants-and-keywords/shader-keywords-material-inspector"},d="Using shader keywords with the material Inspector",l={unversionedId:"graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-material-inspector",id:"graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-material-inspector",title:"Using shader keywords with the material Inspector",description:"In the Unity Editor, when you view a material in the material Inspector, you can enable and disable its local shader keywords. This is useful for two reasons:",source:"@site/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-material-inspector.md",sourceDirName:"graphics/shaders/shaders-overview/shader-variants-and-keywords",slug:"/shader-variants-and-keywords/shader-keywords-material-inspector",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords-material-inspector",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-material-inspector.md",tags:[],version:"current",frontMatter:{id:"shader-keywords-material-inspector",title:"Using shader keywords with the material Inspector",slug:"/shader-variants-and-keywords/shader-keywords-material-inspector"},sidebar:"tutorialSidebar",previous:{title:"Conditionals in shaders",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-conditionals"},next:{title:"Using shader keywords with C# scripts",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords-scripts"}},c={},p=[],h={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-shader-keywords-with-the-material-inspector"},"Using shader keywords with the material Inspector"),(0,s.kt)("p",null,"In the Unity Editor, when you view a material in the material Inspector, you can enable and disable its local shader keywords. This is useful for two reasons:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It allows artists to easily set different keyword values for different materials, without needing to use code."),(0,s.kt)("li",{parentName:"ul"},"When you enable a keyword using the ",(0,s.kt)("inlineCode",{parentName:"li"},"[KeywordEnum]")," MaterialPropertyDrawer, Unity automatically disables the other keywords in a set. This ensures that exactly one keyword from a set is enabled at any time.")),(0,s.kt)("p",null,"As with any shader settings or data, shader keywords are only available in the material Inspector when they are declared as ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-shader/sl-properties"},"material properties")," in the shader source file."),(0,s.kt)("p",null,"For shaders created in Shader Graph, keywords are material properties by default. This means that these settings are automatically available in the material Inspector. To change this, open the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.shadergraph@latest?subfolder=/manual/Blackboard.html"},"Blackboard"),", and change the  ",(0,s.kt)("strong",{parentName:"p"},"Exposed"),"  property."),(0,s.kt)("p",null,"For hand-coded shaders, you must ensure that your ShaderLab code defines a ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-shader/sl-properties"},"material property")," that represents the keyword set. The material property must have a type of ",(0,s.kt)("inlineCode",{parentName:"p"},"Float"),", and must use the ",(0,s.kt)("inlineCode",{parentName:"p"},"[Toggle]"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"[ToggleOff]"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"[KeywordEnum]")," ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialPropertyDrawer.html"},"MaterialPropertyDrawer")," attribute to expose it correctly to the Inspector. For more information and examples, see the documentation for the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MaterialPropertyDrawer.html"},"MaterialPropertyDrawer")," API."))}u.isMDXComponent=!0}}]);