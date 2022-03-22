"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6190],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"PlasticSCMPlugin",title:"Plastic SCM plugin for Unity",slug:"/plastic-scmplugin"},c="Plastic SCM plugin for Unity",u={unversionedId:"unity-overview/editor-features/plastic-scmplugin/PlasticSCMPlugin",id:"unity-overview/editor-features/plastic-scmplugin/PlasticSCMPlugin",title:"Plastic SCM plugin for Unity",description:"The Plastic SCM plugin for Unity provides source control functionality from within the Unity Editor. The  Plastic SCM  window in the Unity Editor displays a list of new or changed files in your local project. From here you can check these files into Plastic SCM.",source:"@site/docs/unity-overview/editor-features/plastic-scmplugin/plastic-scmplugin.md",sourceDirName:"unity-overview/editor-features/plastic-scmplugin",slug:"/plastic-scmplugin",permalink:"/docs/plastic-scmplugin",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/editor-features/plastic-scmplugin/plastic-scmplugin.md",tags:[],version:"current",frontMatter:{id:"PlasticSCMPlugin",title:"Plastic SCM plugin for Unity",slug:"/plastic-scmplugin"},sidebar:"tutorialSidebar",previous:{title:"Incremental build pipeline",permalink:"/docs/editor-features/incremental-build-pipeline"},next:{title:"\u5c06\u5916\u90e8\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7528\u4e8e Unity",permalink:"/docs/plastic-scmplugin/external-version-control-system-support"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plastic-scm-plugin-for-unity"},"Plastic SCM plugin for Unity"),(0,o.kt)("p",null,"The Plastic SCM plugin for Unity provides source control functionality from within the Unity Editor. The  ",(0,o.kt)("strong",{parentName:"p"},"Plastic SCM"),"  window in the Unity Editor displays a list of new or changed files in your local project. From here you can check these files into Plastic SCM."),(0,o.kt)("p",null,"Plastic SCM for Unity will enable you to work collaboratively on more complex projects by providing additional VCS features such as branching, locking, merging, and a standalone GUI."),(0,o.kt)("p",null,"The plugin is available via the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.collab-proxy@1.7/manual/QuickStartGuide.html"},"Version Control package")," in the Unity Package Manager. The package is the official integration of Plastic SCM in Unity that we will support and update."),(0,o.kt)("p",null,"The Version Control package follows the Unity support schedule. Currently, supported versions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2019.4.29f1"),(0,o.kt)("li",{parentName:"ul"},"2020.3.15f1"),(0,o.kt)("li",{parentName:"ul"},"2021.1.15f1"),(0,o.kt)("li",{parentName:"ul"},"2021.2.0b6"),(0,o.kt)("li",{parentName:"ul"},"2022.1.0a4")))}m.isMDXComponent=!0}}]);