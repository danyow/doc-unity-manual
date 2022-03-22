"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60790],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,k=u["".concat(d,".").concat(y)]||u[y]||p[y]||a;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8947:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"android-keystore-concept",title:"Android keystores in Unity",slug:"/android-keystore/android-keystore-concept"},d="Android keystores in Unity",c={unversionedId:"platform-specific/android/android-getting-started/android-keystore/android-keystore-concept",id:"platform-specific/android/android-getting-started/android-keystore/android-keystore-concept",title:"Android keystores in Unity",description:"To interface with keystores, Unity provides the Keystore Manager as well as properties in Player Settings. You can use these tools to create, configure, or load Android keystores and keys.",source:"@site/docs/platform-specific/android/android-getting-started/android-keystore/android-keystore-concept.md",sourceDirName:"platform-specific/android/android-getting-started/android-keystore",slug:"/android-keystore/android-keystore-concept",permalink:"/docs/android-keystore/android-keystore-concept",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-getting-started/android-keystore/android-keystore-concept.md",tags:[],version:"current",frontMatter:{id:"android-keystore-concept",title:"Android keystores in Unity",slug:"/android-keystore/android-keystore-concept"},sidebar:"tutorialSidebar",previous:{title:"Add keys to a keystore",permalink:"/docs/android-keystore/android-keystore-add-keys"},next:{title:"Create a new keystore",permalink:"/docs/android-keystore/android-keystore-create"}},l={},p=[{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],u={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-keystores-in-unity"},"Android keystores in Unity"),(0,a.kt)("p",null,"To interface with keystores, Unity provides the Keystore Manager as well as properties in Player Settings. You can use these tools to create, configure, or load Android keystores and keys."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note")," : If you sign an application with a particular key and upload the application to an app store, you must sign future versions of the application with the same key."),(0,a.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/android-getting-started/class-player-settings-android#publishing-settings"},"Player Settings - Publishing Settings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/android-keystore/android-keystore-manager"},"Keystore Manager window reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/android-keystore/android-keystore-create"},"Create a new keystore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/android-keystore/android-keystore-add-keys"},"Add keys to a keystore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/android-keystore/android-keystore-load"},"Load a keystore"))))}y.isMDXComponent=!0}}]);