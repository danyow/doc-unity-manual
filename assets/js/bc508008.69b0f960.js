"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52256],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(g,u(u({ref:t},c),{},{components:n})):a.createElement(g,u({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,u=new Array(r);u[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var l=2;l<r;l++)u[l]=n[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),u=["components"],o={id:"UIB-structuring-ui-templates",title:"Using UXML instances as templates",slug:"/uib-structuring-ui/uib-structuring-ui-templates"},s="Using UXML instances as templates",l={unversionedId:"uitoolkits/uielements/uibuilder/uib-structuring-ui/UIB-structuring-ui-templates",id:"uitoolkits/uielements/uibuilder/uib-structuring-ui/UIB-structuring-ui-templates",title:"Using UXML instances as templates",description:"You can instantiate existing UI Documents (UXML) as  Templates  inside your current UI Document as  Template Instances , similar to how Prefabs work in Unity. To use a UI document as a template, do the following:",source:"@site/docs/uitoolkits/uielements/uibuilder/uib-structuring-ui/uib-structuring-ui-templates.md",sourceDirName:"uitoolkits/uielements/uibuilder/uib-structuring-ui",slug:"/uib-structuring-ui/uib-structuring-ui-templates",permalink:"/doc-unity-manual/docs/uib-structuring-ui/uib-structuring-ui-templates",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uib-structuring-ui/uib-structuring-ui-templates.md",tags:[],version:"current",frontMatter:{id:"UIB-structuring-ui-templates",title:"Using UXML instances as templates",slug:"/uib-structuring-ui/uib-structuring-ui-templates"},sidebar:"tutorialSidebar",previous:{title:"Working with elements",permalink:"/doc-unity-manual/docs/uib-structuring-ui/uib-structuring-ui-elements"},next:{title:"Styling UI",permalink:"/doc-unity-manual/docs/uib-styling-ui"}},c={},p=[{value:"Edit a UI document template instance",id:"edit-a-ui-document-template-instance",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-uxml-instances-as-templates"},"Using UXML instances as templates"),(0,r.kt)("p",null,"You can instantiate existing UI Documents (UXML) as  ",(0,r.kt)("strong",{parentName:"p"},"Templates"),"  inside your current UI Document as  ",(0,r.kt)("strong",{parentName:"p"},"Template Instances")," , similar to how ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/prefabs"},"Prefabs")," work in Unity. To use a UI document as a template, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Under the  ",(0,r.kt)("strong",{parentName:"li"},"Library")," \u2019s  ",(0,r.kt)("strong",{parentName:"li"},"Project"),"  tab, find the UXML Asset (",(0,r.kt)("inlineCode",{parentName:"li"},".uxml"),") you wish to instantiate."),(0,r.kt)("li",{parentName:"ol"},"Drag it into the  ",(0,r.kt)("strong",{parentName:"li"},"Hierarchy"),"  like an element in the  ",(0,r.kt)("strong",{parentName:"li"},"Library")," .")),(0,r.kt)("p",null,"A  ",(0,r.kt)("strong",{parentName:"p"},"Template Instance"),"  appears in the  ",(0,r.kt)("strong",{parentName:"p"},"Hierarchy"),"  like a normal element of type ",(0,r.kt)("inlineCode",{parentName:"p"},"TemplateContainer"),". The name of the ",(0,r.kt)("inlineCode",{parentName:"p"},".uxml")," file displays as greyed font to the right of its name. If you expand the  ",(0,r.kt)("strong",{parentName:"p"},"Template Instance"),"  you can see the internal hierarchy of the instance. This internal hierarchy, as explained in ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uib-structuring-ui/uib-structuring-ui-elements"},"Working with elements"),", is read-only and only shown for reference. To make edits to this hierarchy, you must edit the original UI Document."),(0,r.kt)("h2",{id:"edit-a-ui-document-template-instance"},"Edit a UI document template instance"),(0,r.kt)("p",null,"UI Builder offers three ways to edit an original UI Document used as a  ",(0,r.kt)("strong",{parentName:"p"},"Template Instance")," . To access these options, right-click on a  ",(0,r.kt)("strong",{parentName:"p"},"Template Instance"),"  and choose:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open in UI Builder")," : This unloads the current UI Document and loads the UI Document being instanced: ",(0,r.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder//OpenSubDocumentNormally.png",alt:"OpenSubDocumentNormally"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open as Sub-Document")," : This selection keeps the current UI Document loaded in the background while loading the UI Document being instanced. The  ",(0,r.kt)("strong",{parentName:"li"},"Hierarchy"),"  and the  ",(0,r.kt)("strong",{parentName:"li"},"Canvas"),"  only displays the contents of the  ",(0,r.kt)("strong",{parentName:"li"},"Sub-Document")," , while the  ",(0,r.kt)("strong",{parentName:"li"},"StyleSheets"),"  pane includes the style sheet of the background parent UI Document in a read-only state. This is because the style sheets are still being applied to the  ",(0,r.kt)("strong",{parentName:"li"},"Sub-Document")," : ",(0,r.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder//EditAsSubDocumentInIsolation.png",alt:"EditAsSubDocumentInIsolation"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Open as Sub-Document In-Place")," : This selection keeps the current UI Document loaded while making all its elements read-only and grayed out in the  ",(0,r.kt)("strong",{parentName:"li"},"Hierarchy"),"  and the  ",(0,r.kt)("strong",{parentName:"li"},"Canvas")," . This mode allows editing the contents of the UI Document being instanced, within the context of the parent UI Document. This mode is ideal for making changes to  ",(0,r.kt)("strong",{parentName:"li"},"Template Instance"),"  content without losing the context of the host document: ",(0,r.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder//EditAsSubDocumentInPlace.png",alt:"EditAsSubDocumentInPlace"}))),(0,r.kt)("p",null,"For cases (2) and (3) above, a breadcrumb appears above the  ",(0,r.kt)("strong",{parentName:"p"},"Viewport"),"  indicating this state. You can repeat this action on a  ",(0,r.kt)("strong",{parentName:"p"},"Template Instance"),"  inside the original  ",(0,r.kt)("strong",{parentName:"p"},"Template Instance")," , recursively. Use the breadcrumb to go back to a parent UI Document."),(0,r.kt)("p",null,"Going into a Sub-Document and back to the parent document require a full save:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder//SubDocumentBreadcrumbs.png",alt:"SubDocumentBreadcrumbs"})),(0,r.kt)("p",null,"SubDocumentBreadcrumbs"))}d.isMDXComponent=!0}}]);