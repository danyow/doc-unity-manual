"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73321],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,m=p["".concat(u,".").concat(y)]||p[y]||g[y]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"using-skymanager",title:"SkyManager",slug:"/sky/using-skymanager"},u="SkyManager",l={unversionedId:"graphics/sky/using-skymanager",id:"graphics/sky/using-skymanager",title:"SkyManager",description:"Understanding the SkyManager",source:"@site/docs/graphics/sky/using-skymanager.md",sourceDirName:"graphics/sky",slug:"/sky/using-skymanager",permalink:"/doc-unity-manual/docs/sky/using-skymanager",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/sky/using-skymanager.md",tags:[],version:"current",frontMatter:{id:"using-skymanager",title:"SkyManager",slug:"/sky/using-skymanager"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5929\u7a7a\u76d2",permalink:"/doc-unity-manual/docs/skyboxes/skyboxes-using"},next:{title:"\u7eb9\u7406",permalink:"/doc-unity-manual/docs/textures"}},c={},g=[{value:"Understanding the SkyManager",id:"understanding-the-skymanager",level:2},{value:"Disabling the SkyManager",id:"disabling-the-skymanager",level:2}],p={toc:g};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"skymanager"},"SkyManager"),(0,i.kt)("h2",{id:"understanding-the-skymanager"},"Understanding the SkyManager"),(0,i.kt)("p",null,"Unity includes a dedicated manager\u2014the SkyManager\u2014to ensure that environment lighting affects your scene by default. The SkyManager automatically generates an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/RenderSettings-ambientProbe.html"},"ambient probe")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/ReflectionProbe-defaultTexture.html"},"default reflection probe")," to capture environment lighting."),(0,i.kt)("p",null,"Unity updates these probes each time environment lighting in your scene changes, until the moment you ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lighting-overview/lighting-window"},"generate lighting"),". After you generate lighting, Unity bakes the current environment light values into the probes."),(0,i.kt)("p",null,"When you specifically use the  ",(0,i.kt)("strong",{parentName:"p"},"Generate Lighting"),"  control to manually bake your lighting, Unity stops updating the probes from that point onward and only updates them again at the next bake. If you want Unity to continue to update the probes each time the environment lighting changes, enable the  ",(0,i.kt)("strong",{parentName:"p"},"Auto Generate"),"  option."),(0,i.kt)("p",null,"If you remove the Lighting Data Asset from your project, Unity continues to update the probes each time the environment lighting changes."),(0,i.kt)("h2",{id:"disabling-the-skymanager"},"Disabling the SkyManager"),(0,i.kt)("p",null,"To prevent the environment contribution from automatically affecting the lighting result for a scene or GameObject that does not have manually created light maps and Light Probes, disable the default Reflection Probe and the ambient probe."),(0,i.kt)("p",null,"To disable these probes, navigate to Window ",">"," Rendering ",">"," Lighting Settings ",">"," Environment, then make one of the following changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option 1: Set the Intensity Multiplier to 0."),(0,i.kt)("li",{parentName:"ul"},"Option 2: Use a black Skybox Material."),(0,i.kt)("li",{parentName:"ul"},"Option 3: Set either the Color or Gradient mode for the Source to black.")))}y.isMDXComponent=!0}}]);