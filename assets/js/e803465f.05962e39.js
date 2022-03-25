"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54305],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77994:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"BlendTree-AdditionalOptions",title:"Additional Blend Tree Options",slug:"/class-blend-tree/blend-tree-additional-options"},s="Additional Blend Tree Options",d={unversionedId:"animation-section/animator-controllers/class-blend-tree/BlendTree-AdditionalOptions",id:"animation-section/animator-controllers/class-blend-tree/BlendTree-AdditionalOptions",title:"Additional Blend Tree Options",description:"\u4ee5\u4e0b\u9009\u9879\u5bf9\u4e8e 1D \u548c 2D \u6df7\u5408\u90fd\u901a\u7528\u3002",source:"@site/docs/animation-section/animator-controllers/class-blend-tree/blend-tree-additional-options.md",sourceDirName:"animation-section/animator-controllers/class-blend-tree",slug:"/class-blend-tree/blend-tree-additional-options",permalink:"/doc-unity-manual/docs/class-blend-tree/blend-tree-additional-options",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-section/animator-controllers/class-blend-tree/blend-tree-additional-options.md",tags:[],version:"current",frontMatter:{id:"BlendTree-AdditionalOptions",title:"Additional Blend Tree Options",slug:"/class-blend-tree/blend-tree-additional-options"},sidebar:"tutorialSidebar",previous:{title:"2D \u6df7\u5408",permalink:"/doc-unity-manual/docs/class-blend-tree/blend-tree-2dblending"},next:{title:"\u76f4\u63a5\u6df7\u5408",permalink:"/doc-unity-manual/docs/class-blend-tree/blend-tree-direct-blending"}},c={},u=[{value:"\u65f6\u95f4\u5c3a\u5ea6",id:"\u65f6\u95f4\u5c3a\u5ea6",level:2},{value:"Mirroring",id:"mirroring",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"additional-blend-tree-options"},"Additional Blend Tree Options"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u9009\u9879\u5bf9\u4e8e 1D \u548c 2D \u6df7\u5408\u90fd\u901a\u7528\u3002"),(0,i.kt)("h2",{id:"\u65f6\u95f4\u5c3a\u5ea6"},"\u65f6\u95f4\u5c3a\u5ea6"),(0,i.kt)("p",null,"You can alter the \u201cnatural\u201d speed of animation clips with the animation speed number fields (the columns with a clock icon). For example, you can double the speed of a walk clip by specifying a value of 2.0. The  ",(0,i.kt)("strong",{parentName:"p"},"Adjust Time Scale ",">"," Homogeneous Speed"),"  button rescales the speed of the clips so that they correspond with the chosen minimum and maximum values of the parameter but keep the same ",(0,i.kt)("em",{parentName:"p"},"relative")," speed they initially had."),(0,i.kt)("p",null,"Note that the  ",(0,i.kt)("strong",{parentName:"p"},"Adjust Time Scale"),"  drop-down is only available if all the motions are Animation Clips and not child Blend Trees."),(0,i.kt)("h2",{id:"mirroring"},"Mirroring"),(0,i.kt)("p",null,"Enable the Mirror checkbox to mirror any humanoid Animation Clip in the motions list. Mirroring uses the same animation as its unmirrored original without doubling the memory and space."),(0,i.kt)("p",null,"However, mirroring an animation in a blend tree does not create a fully symmetrical animation. Unity automatically adds offsets to ensure that run cycles, walk cycles, and animations such as footsteps are blended correctly with other animation clips and blend trees. For example, if your blend tree has a humanoid running left, and you enable Mirror to switch the humanoid to run right, the foot cycles need to match so that the left foot touches the ground at the same time. This ensures that the mirrored Blend tree correctly blends with surrounding clips and other blend trees that have not been mirrored."))}m.isMDXComponent=!0}}]);