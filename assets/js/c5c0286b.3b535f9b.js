"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17296],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,y=m["".concat(a,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),l=["components"],o={id:"UIB-getting-started-inline",title:"Inline styles vs style sheets",slug:"/uib-getting-started/uib-getting-started-inline"},a="Inline styles vs style sheets",u={unversionedId:"uitoolkits/uielements/uibuilder/uib-getting-started/UIB-getting-started-inline",id:"uitoolkits/uielements/uibuilder/uib-getting-started/UIB-getting-started-inline",title:"Inline styles vs style sheets",description:"Style information for an element in UI Toolkit can come from three different places:",source:"@site/docs/uitoolkits/uielements/uibuilder/uib-getting-started/uib-getting-started-inline.md",sourceDirName:"uitoolkits/uielements/uibuilder/uib-getting-started",slug:"/uib-getting-started/uib-getting-started-inline",permalink:"/docs/uib-getting-started/uib-getting-started-inline",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uib-getting-started/uib-getting-started-inline.md",tags:[],version:"current",frontMatter:{id:"UIB-getting-started-inline",title:"Inline styles vs style sheets",slug:"/uib-getting-started/uib-getting-started-inline"},sidebar:"tutorialSidebar",previous:{title:"Runtime UI vs Editor Extension Authoring",permalink:"/docs/uib-getting-started/uib-getting-started-editor-ext"},next:{title:"Workflow overview",permalink:"/docs/uib-getting-started/uib-getting-started-workflow"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"inline-styles-vs-style-sheets"},"Inline styles vs style sheets"),(0,s.kt)("p",null,"Style information for an element in UI Toolkit can come from three different places:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"C# inline style properties set directly in C#. These properties override any same property coming from any other source."),(0,s.kt)("li",{parentName:"ol"},"UXML inline style properties on the element itself, stored directly inside UXML, using the special ",(0,s.kt)("inlineCode",{parentName:"li"},"style")," attribute. These properties override any same property coming from style sheets."),(0,s.kt)("li",{parentName:"ol"},"StyleSheet style properties coming from a StyleSheet (",(0,s.kt)("inlineCode",{parentName:"li"},".uss"),") asset and applied to an element because the element matches a USS Selector (which is like a search query).")),(0,s.kt)("p",null,"Similar to CSS, style sheets allow sharing of styles across UI elements, UI panels, and screens. They also allow quick refactoring and changing of styles across an entire application from a central location, like themes. It\u2019s encouraged to keep styling in style sheets as much as possible, instead of styles on each individual element."),(0,s.kt)("p",null,"In UI Builder, you can start by creating elements and using inline styles only to experiment while the number of elements is still small. As you build more complex UI, it\u2019s easier to manage styles using style sheets. You can use the  ",(0,s.kt)("strong",{parentName:"p"},"Extract Inline Styles to New Class"),"  in the  ",(0,s.kt)("strong",{parentName:"p"},"StyleSheet"),"  section of the  ",(0,s.kt)("strong",{parentName:"p"},"Inspector"),"  to extract inline styles on an element to a StyleSheet."),(0,s.kt)("p",null,"Style sheets also have features that aren\u2019t possible to use with inline styles, like:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Pseudo states like ",(0,s.kt)("inlineCode",{parentName:"li"},":hover"),", which will apply some style properties to an element when you hover over it with the mouse."),(0,s.kt)("li",{parentName:"ol"},"Styling of elements inside a read-only hierarchy inside a  ",(0,s.kt)("strong",{parentName:"li"},"Template Instance"),"  (instance of another UI Document (UXML)) or custom C# element that creates an internal hierarchy. You can style elements with style sheets using hierarchical USS Selectors, like the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"   .parentElement &gt; .childElement\n")),(0,s.kt)("p",null,"For more information on style sheets, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/uie-uss"},"Unity style sheets"),"."))}d.isMDXComponent=!0}}]);