"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89782],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return m}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(i),m=n,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return i?r.createElement(g,l(l({ref:t},d),{},{components:i})):r.createElement(g,l({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},95424:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=i(87462),n=i(63366),a=(i(67294),i(3905)),l=["components"],o={id:"UIBuilder",title:"UI Builder",slug:"/uibuilder"},u="UI Builder",s={unversionedId:"uitoolkits/uielements/uibuilder/UIBuilder",id:"uitoolkits/uielements/uibuilder/UIBuilder",title:"UI Builder",description:"UI Builder  lets you visually create and edit UI assets, such as UI Documents (.uxml), and StyleSheets (.uss), that you use with UI Toolkit.",source:"@site/docs/uitoolkits/uielements/uibuilder/uibuilder.md",sourceDirName:"uitoolkits/uielements/uibuilder",slug:"/uibuilder",permalink:"/docs/uibuilder",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uibuilder.md",tags:[],version:"current",frontMatter:{id:"UIBuilder",title:"UI Builder",slug:"/uibuilder"},sidebar:"tutorialSidebar",previous:{title:"UI \u5de5\u5177\u5305",permalink:"/docs/uielements"},next:{title:"Get started with UI Builder",permalink:"/docs/uib-getting-started"}},d={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"Accessing UI Builder",id:"accessing-ui-builder",level:2},{value:"Optional dependencies",id:"optional-dependencies",level:2},{value:"Vector graphics",id:"vector-graphics",level:3},{value:"2D Sprites support",id:"2d-sprites-support",level:3},{value:"Get started with UI Builder",id:"get-started-with-ui-builder",level:2}],p={toc:c};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ui-builder"},"UI Builder"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"UI Builder"),"  lets you visually create and edit UI assets, such as UI Documents (",(0,a.kt)("inlineCode",{parentName:"p"},".uxml"),"), and StyleSheets (",(0,a.kt)("inlineCode",{parentName:"p"},".uss"),"), that you use with ",(0,a.kt)("a",{parentName:"p",href:"/docs/uielements"},"UI Toolkit"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/UI-builder-banner.png",alt:"UI-builder-banner.png"})),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,"As of 2021.1, UI Builder is now a core feature of Unity."),(0,a.kt)("h2",{id:"accessing-ui-builder"},"Accessing UI Builder"),(0,a.kt)("p",null,"You can open the UI Builder window in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Under the Editor window, select  ",(0,a.kt)("strong",{parentName:"li"},"Window ",">"," UI Toolkit ",">"," UI Builder")," "),(0,a.kt)("li",{parentName:"ol"},"From the Project window, double-click a ",(0,a.kt)("inlineCode",{parentName:"li"},".uxml")," asset.")),(0,a.kt)("h2",{id:"optional-dependencies"},"Optional dependencies"),(0,a.kt)("p",null,"UI Builder has optional packages that offer additional functionality for creating UI for your game."),(0,a.kt)("h3",{id:"vector-graphics"},"Vector graphics"),(0,a.kt)("p",null,"You can install the ",(0,a.kt)("inlineCode",{parentName:"p"},"com.unity.vectorgraphics")," package to have the UI Builder expose the ability to assign a ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorImage")," as a background style on an element."),(0,a.kt)("h3",{id:"2d-sprites-support"},"2D Sprites support"),(0,a.kt)("p",null,"You can install the ",(0,a.kt)("inlineCode",{parentName:"p"},"com.unity.2d.sprite")," package to have the UI Builder expose the ability to assign a 2D Sprite asset (or sub-asset) as a background style on an element. With the 2D Sprite package installed, you will also have the ability to open the 2D Sprite Editor directly from the  ",(0,a.kt)("strong",{parentName:"p"},"Inspector"),"  pane."),(0,a.kt)("h2",{id:"get-started-with-ui-builder"},"Get started with UI Builder"),(0,a.kt)("p",null,"This section lists all concepts and workflows for UI Builder."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/uib-getting-started/uib-getting-started-documents"},"Creating and managing UI Documents (UXML)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/uib-getting-started/uib-getting-started-canvas"},"Setting up the edit-time Canvas")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/uib-getting-started/uib-getting-started-editor-ext"},"Runtime UI vs Editor Extension Authoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/uib-getting-started/uib-getting-started-inline"},"Inline styles vs StyleSheets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/uib-getting-started/uib-getting-started-workflow"},"Workflow overview"))))}m.isMDXComponent=!0}}]);