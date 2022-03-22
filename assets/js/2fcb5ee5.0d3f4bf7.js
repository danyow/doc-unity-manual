"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45172],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80963:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"UIB-structuring-ui-elements",title:"Working with elements",slug:"/uib-structuring-ui/uib-structuring-ui-elements"},s="Working with elements",u={unversionedId:"uitoolkits/uielements/uibuilder/uib-structuring-ui/UIB-structuring-ui-elements",id:"uitoolkits/uielements/uibuilder/uib-structuring-ui/UIB-structuring-ui-elements",title:"Working with elements",description:"Basic workflow",source:"@site/docs/uitoolkits/uielements/uibuilder/uib-structuring-ui/uib-structuring-ui-elements.md",sourceDirName:"uitoolkits/uielements/uibuilder/uib-structuring-ui",slug:"/uib-structuring-ui/uib-structuring-ui-elements",permalink:"/docs/uib-structuring-ui/uib-structuring-ui-elements",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uib-structuring-ui/uib-structuring-ui-elements.md",tags:[],version:"current",frontMatter:{id:"UIB-structuring-ui-elements",title:"Working with elements",slug:"/uib-structuring-ui/uib-structuring-ui-elements"},sidebar:"tutorialSidebar",previous:{title:"Using custom (C#) elements",permalink:"/docs/uib-structuring-ui/uib-structuring-ui-custom-elements"},next:{title:"Using UXML instances as templates",permalink:"/docs/uib-structuring-ui/uib-structuring-ui-templates"}},c={},p=[{value:"Basic workflow",id:"basic-workflow",level:2},{value:"Select elements",id:"select-elements",level:2},{value:"Create elements",id:"create-elements",level:2},{value:"Manipulate elements",id:"manipulate-elements",level:2},{value:"Read-only elements",id:"read-only-elements",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-elements"},"Working with elements"),(0,a.kt)("h2",{id:"basic-workflow"},"Basic workflow"),(0,a.kt)("p",null,"The basic workflow in UI Builder starts with you creating some elements by dragging elements from the  ",(0,a.kt)("strong",{parentName:"p"},"Library"),"  pane onto the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy")," .UI Toolkit is built and laid out as a hierarchy of elements. The hierarchy dictates which elements are on top of other elements and the order in which elements appear visually in the UI. It\u2019s similar to a transform hierarchy in a Unity Scene, except width and height are also influenced by parent or children elements. Another difference is, depending on style properties, some children will drive the size of their parents, while some parents will impact the size of their children."),(0,a.kt)("p",null,"The basic construction block and base class for all elements in UI Toolkit, is the ",(0,a.kt)("inlineCode",{parentName:"p"},"VisualElement")," class. It acts as the container element to create complex layouts. For example, to anchor a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," to the bottom right of the screen, you would need the following ",(0,a.kt)("inlineCode",{parentName:"p"},"VisualElements")," hierarchy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VisualElement #screen { flex-grow: 1; justify-content: flex-end; }\n    VisualElement #bottom-container { flex-direction: row; justify-content: flex-end; }\n        Button\n")),(0,a.kt)("h2",{id:"select-elements"},"Select elements"),(0,a.kt)("p",null,"You can select elements by clicking on them, both in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy"),"  and in the  ",(0,a.kt)("strong",{parentName:"p"},"Canvas")," . In the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy")," , hold down  ",(0,a.kt)("strong",{parentName:"p"},"Ctrl/Cmd"),"  to select additional elements. In the  ",(0,a.kt)("strong",{parentName:"p"},"Canvas")," , a double-click on top of an element selects its parent element, which you can repeat to travel up the element hierarchy until it reverts back to the original element."),(0,a.kt)("h2",{id:"create-elements"},"Create elements"),(0,a.kt)("p",null,"When you create elements from the  ",(0,a.kt)("strong",{parentName:"p"},"Library"),"  pane, UI Builder tries to preserve defaults, with some exceptions. By default, elements aren\u2019t named, so they appear in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy"),"  as their type name. To name an element, double-click on the item in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy")," , or select an element and find the  ",(0,a.kt)("strong",{parentName:"p"},"Name"),"  attribute in the  ",(0,a.kt)("strong",{parentName:"p"},"Inspector")," . Unique naming in UI Toolkit isn\u2019t enforced, so they\u2019re only for identification within the UI. UI Builder won\u2019t use element names for any internal identification or functionality."),(0,a.kt)("p",null,"To build a hierarchy, you can drag one or more elements in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy"),"  to reorder them or move them between parents:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/ReorderInHierarchy.png",alt:"ReorderInHierarchy"})),(0,a.kt)("p",null,"ReorderInHierarchy"),(0,a.kt)("p",null,"You can also drag elements into and from the  ",(0,a.kt)("strong",{parentName:"p"},"Viewport"),"   ",(0,a.kt)("strong",{parentName:"p"},"Canvas")," , where a  ",(0,a.kt)("strong",{parentName:"p"},"yellow line"),"  will appear to indicate where the element placement:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/ReorderInCanvas.png",alt:"ReorderInCanvas"})),(0,a.kt)("p",null,"ReorderInCanvas"),(0,a.kt)("h2",{id:"manipulate-elements"},"Manipulate elements"),(0,a.kt)("p",null,"To  ",(0,a.kt)("strong",{parentName:"p"},"cut/copy/paste/duplicate/delete"),"  one or more selected elements, right-click on an element, and select the option in the menu. You can also use the standard short-cut keys for your operating system."),(0,a.kt)("p",null,"When you copy an element in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy"),"  pane, it copies the UXML text representation of the element and its children. This means you can paste it directly into a text editor. You can also copy UXML text and paste it in the UI Builder."),(0,a.kt)("p",null,"All actions you do to an element are also applied to all its children. For example, deleting an element deletes all its children and duplicating an element will replicated the entire sub-tree of elements under it."),(0,a.kt)("h2",{id:"read-only-elements"},"Read-only elements"),(0,a.kt)("p",null,"You might see additional children elements created in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy"),"  from an element dragged from the  ",(0,a.kt)("strong",{parentName:"p"},"Library"),"  folder. These child elements will appear grayed out in the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy")," . This happens because some custom elements, like most elements in the  ",(0,a.kt)("strong",{parentName:"p"},"Standard"),"  tab of the  ",(0,a.kt)("strong",{parentName:"p"},"Library")," , create their internal hierarchy upon creation. You can\u2019t edit the internal hierarchy in UI Builder because the UI Builder can only edit what it can represent in the UI Document (UXML) it\u2019s editing. If you look at the UXML, these internal hierarchies don\u2019t exist. UXML is more like an instruction set and not an 1-to\u20131 copy of the live UI hierarchy."))}d.isMDXComponent=!0}}]);