"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81102],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=i.createContext({}),l=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=l(t.components);return i.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(b,u(u({ref:e},c),{},{components:n})):i.createElement(b,u({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,u[1]=s;for(var l=2;l<a;l++)u[l]=n[l];return i.createElement.apply(null,u)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28282:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),u=["components"],s={id:"UIB-structuring-ui-attributes",title:"Structuring UXML attributes",slug:"/uib-structuring-ui/uib-structuring-ui-attributes"},o="Structuring UXML attributes",l={unversionedId:"uitoolkits/uielements/uibuilder/uib-structuring-ui/UIB-structuring-ui-attributes",id:"uitoolkits/uielements/uibuilder/uib-structuring-ui/UIB-structuring-ui-attributes",title:"Structuring UXML attributes",description:"Attributes in UXML",source:"@site/docs/uitoolkits/uielements/uibuilder/uib-structuring-ui/uib-structuring-ui-attributes.md",sourceDirName:"uitoolkits/uielements/uibuilder/uib-structuring-ui",slug:"/uib-structuring-ui/uib-structuring-ui-attributes",permalink:"/doc-unity-manual/docs/uib-structuring-ui/uib-structuring-ui-attributes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uib-structuring-ui/uib-structuring-ui-attributes.md",tags:[],version:"current",frontMatter:{id:"UIB-structuring-ui-attributes",title:"Structuring UXML attributes",slug:"/uib-structuring-ui/uib-structuring-ui-attributes"},sidebar:"tutorialSidebar",previous:{title:"Structuring UI",permalink:"/doc-unity-manual/docs/uib-structuring-ui"},next:{title:"Using custom (C#) elements",permalink:"/doc-unity-manual/docs/uib-structuring-ui/uib-structuring-ui-custom-elements"}},c={},p=[{value:"Attributes in UXML",id:"attributes-in-uxml",level:2},{value:"Change attributes in the Inspector",id:"change-attributes-in-the-inspector",level:2},{value:"Change attributes in the Canvas",id:"change-attributes-in-the-canvas",level:2}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structuring-uxml-attributes"},"Structuring UXML attributes"),(0,a.kt)("h2",{id:"attributes-in-uxml"},"Attributes in UXML"),(0,a.kt)("p",null,"Elements have per-element attributes which can be set in UXML. You can think of them as constructor or initialization arguments. This includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attribute. The base ",(0,a.kt)("inlineCode",{parentName:"p"},"VisualElement")," class comes with a few standard attributes that all elements share (since all elements inherit from ",(0,a.kt)("inlineCode",{parentName:"p"},"VisualElement"),"), like: ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tooltip"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tabindex"),". More advanced elements and controls will have additional attributes you can set, for example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Label")," adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," attribute."),(0,a.kt)("p",null,"A small note on the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," attribute. The ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," attribute supports multi-line text. Just use  ",(0,a.kt)("strong",{parentName:"p"},"Enter"),"  to add newline characters in the  ",(0,a.kt)("strong",{parentName:"p"},"Inspector")," ."),(0,a.kt)("h2",{id:"change-attributes-in-the-inspector"},"Change attributes in the Inspector"),(0,a.kt)("p",null,"All attributes, both standard and custom, appear at the top of the  ",(0,a.kt)("strong",{parentName:"p"},"Inspector"),"  in a section that has the same name as the name of the element\u2019s type. For example, if you click on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),", look for a section in the  ",(0,a.kt)("strong",{parentName:"p"},"Inspector"),"  called  ",(0,a.kt)("strong",{parentName:"p"},"Button")," ."),(0,a.kt)("p",null,"You can set the value of an attribute by changing the corresponding field in the attribute section. If the field appears  ",(0,a.kt)("strong",{parentName:"p"},"bold"),"  with a solid line on the left of the field\u2019s label, it means the attribute is already set and not using the default. For example, setting ",(0,a.kt)("inlineCode",{parentName:"p"},"tooltip")," from empty to ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," and then back to empty is different from never setting it in the first place: the first case is ",(0,a.kt)("inlineCode",{parentName:"p"},"unset")," while the second case is ",(0,a.kt)("inlineCode",{parentName:"p"},"set to empty"),". What ",(0,a.kt)("inlineCode",{parentName:"p"},"this attribute is set")," means is there\u2019s an entry in the UXML text on this element setting this attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"value"),(0,a.kt)("p",null,"If the attribute isn\u2019t mentioned in the UXML text, it\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"not set"),"."),(0,a.kt)("p",null,"You can unset an attribute by right-clicking on the field\u2019s label and choosing  ",(0,a.kt)("strong",{parentName:"p"},"Unset")," . You can unset all attributes, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attribute, by right-clicking on any attribute field and choosing  ",(0,a.kt)("strong",{parentName:"p"},"Unset All")," ."),(0,a.kt)("h2",{id:"change-attributes-in-the-canvas"},"Change attributes in the Canvas"),(0,a.kt)("p",null,"The only attribute you can change directly in the  ",(0,a.kt)("strong",{parentName:"p"},"Canvas"),"  is the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," attribute on text elements. To change the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," attribute on something like a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Label")," you can double-click on it in the  ",(0,a.kt)("strong",{parentName:"p"},"Canvas")," . A temporary text field will appear, using the same font settings as the original text:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/EditButtonTextInCanvas.png",alt:"EditButtonTextInCanvas"})),(0,a.kt)("p",null,"EditButtonTextInCanvas"),(0,a.kt)("p",null,"Pressing  ",(0,a.kt)("strong",{parentName:"p"},"Enter"),"  commits the change. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," attribute contains newline characters, use  ",(0,a.kt)("strong",{parentName:"p"},"Shift + Enter"),"  to commit the change. Press  ",(0,a.kt)("strong",{parentName:"p"},"Esc"),"  to cancel any changes."))}d.isMDXComponent=!0}}]);