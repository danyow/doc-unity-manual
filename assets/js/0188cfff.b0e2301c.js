"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10896],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"UIB-interface-overview",title:"Interface overview",slug:"/uibuilder/uib-interface-overview"},s="Interface overview",p={unversionedId:"uitoolkits/uielements/uibuilder/UIB-interface-overview",id:"uitoolkits/uielements/uibuilder/UIB-interface-overview",title:"Interface overview",description:"This is the main UI Builder Editor Window:",source:"@site/docs/uitoolkits/uielements/uibuilder/uib-interface-overview.md",sourceDirName:"uitoolkits/uielements/uibuilder",slug:"/uibuilder/uib-interface-overview",permalink:"/doc-unity-manual/docs/uibuilder/uib-interface-overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uib-interface-overview.md",tags:[],version:"current",frontMatter:{id:"UIB-interface-overview",title:"Interface overview",slug:"/uibuilder/uib-interface-overview"},sidebar:"tutorialSidebar",previous:{title:"Workflow overview",permalink:"/doc-unity-manual/docs/uib-getting-started/uib-getting-started-workflow"},next:{title:"Structuring UI",permalink:"/doc-unity-manual/docs/uib-structuring-ui"}},u={},c=[{value:"StyleSheets",id:"stylesheets",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Library",id:"library",level:2},{value:"Viewport",id:"viewport",level:2},{value:"Navigating in the viewport",id:"navigating-in-the-viewport",level:3},{value:"Code Previews",id:"code-previews",level:2},{value:"Inspector",id:"inspector",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-overview"},"Interface overview"),(0,i.kt)("p",null,"This is the main UI Builder Editor Window:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/UIBuilderAnnotatedMainWindow.png",alt:"UI Builder Main Window"})),(0,i.kt)("p",null,"UI Builder Main Window"),(0,i.kt)("h2",{id:"stylesheets"},"StyleSheets"),(0,i.kt)("p",null,"StyleSheets and the USS Selectors within in UI Toolkit are used to share and apply styles across many elements and many UI Documents (UXML)."),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"StyleSheets"),"  pane ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/Numeral_1_half.png",alt:"1"})," is where you can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add, reorder, or remove StyleSheets (USS) to the current UI Document (UXML)."),(0,i.kt)("li",{parentName:"ol"},"Create, reorder, copy, or remove USS Selectors within StyleSheets for sharing styles across many elements.")),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  pane ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/Numeral_2_half.png",alt:"2"})," contains the tree view representing the element hierarchy of the current document. It\u2019s a superset of the hierarchy you see in the UXML text representation of the UI Document (UXML). Besides the elements created directly from UXML, the  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  pane also contains elements created dynamically and only exist in the runtime of the UI. For example, the  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  pane includes elements that are part of a Template instance (a different document instanced inside the current document), where the UXML would just has a single ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;Instance&gt;")," tag."),(0,i.kt)("p",null,"You can use the  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  pane to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select elements for inspecting or editing."),(0,i.kt)("li",{parentName:"ol"},"Cut, copy, delete, or reorder elements."),(0,i.kt)("li",{parentName:"ol"},"Open instanced template documents as sub-documents for in-place (in context) editing."),(0,i.kt)("li",{parentName:"ol"},"See at once many elements\u2019 style class lists, name attributes, and locally attached StyleSheets.")),(0,i.kt)("p",null,"Elements appear in the tree according to their ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attributes. If an element\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute is not set, it appears according to its C# type. You can double-click an element to quickly rename it."),(0,i.kt)("p",null,"Click the  ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"),"  icon in the top right corner of the  ",(0,i.kt)("strong",{parentName:"p"},"Hierarchy"),"  pane header to access a menu of display options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Type"),"  to force the  ",(0,i.kt)("strong",{parentName:"li"},"Hierarchy"),"  to display each element\u2019s C# type, regardless of whether it has a name."),(0,i.kt)("li",{parentName:"ul"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Class List"),"  to display each element\u2019s style class list next to its  ",(0,i.kt)("strong",{parentName:"li"},"Hierarchy"),"  entry."),(0,i.kt)("li",{parentName:"ul"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"Attached StyleSheets"),"  to display any locally attached StyleSheets next to their element.")),(0,i.kt)("h2",{id:"library"},"Library"),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"Library"),"  pane ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/Numeral_3_half.png",alt:"3"})," is similar to the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-editor/project-view"},"Project window")," in the Unity Editor. It lists available UI elements."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The  ",(0,i.kt)("strong",{parentName:"li"},"Standard"),"  tab lists the standard built-in elements that Unity provides. These elements include standard styling that works for all supported Unity Editor and runtime themes.")),(0,i.kt)("p",null,"You can change this view mode between tiles and tree view using the  ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"),"  icon in the top right corner of the  ",(0,i.kt)("strong",{parentName:"p"},"Library"),"  window and choosing  ",(0,i.kt)("strong",{parentName:"p"},"Tree View")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The  ",(0,i.kt)("strong",{parentName:"li"},"Project"),"  tab lists custom ",(0,i.kt)("inlineCode",{parentName:"li"},".uxml")," assets in the Project. It also lists any custom C# elements that inherit from ",(0,i.kt)("inlineCode",{parentName:"li"},"VisualElement")," and have their ",(0,i.kt)("inlineCode",{parentName:"li"},"UxmlFactory")," set up to be instantiable via UXML. To preview any element in the  ",(0,i.kt)("strong",{parentName:"li"},"Library")," \u2019s Project tab, hover over it. The preview appears to the right of the  ",(0,i.kt)("strong",{parentName:"li"},"Library"),"  pane.")),(0,i.kt)("p",null,"To instantiate an element, do one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Drag it into the  ",(0,i.kt)("strong",{parentName:"li"},"Hierarchy"),"  pane."),(0,i.kt)("li",{parentName:"ul"},"Drag it onto the  ",(0,i.kt)("strong",{parentName:"li"},"Canvas"),"  in the  ",(0,i.kt)("strong",{parentName:"li"},"Viewport")," ."),(0,i.kt)("li",{parentName:"ul"},"Double-click it. This adds the element as a sibling of the currently selected element. If nothing is selected, the element is added at the root of the UI Document (UXML).")),(0,i.kt)("h2",{id:"viewport"},"Viewport"),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"Viewport"),"  pane ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/Numeral_4_half.png",alt:"4"})," displays the output of a UI Document (UXML) on a floating resizable edit-time  ",(0,i.kt)("strong",{parentName:"p"},"Canvas")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The header of the  ",(0,i.kt)("strong",{parentName:"li"},"Canvas"),"  displays the name of the currently loaded UI Document (UXML). An asterisk (","*",") next to the name indicates unsaved changes."),(0,i.kt)("li",{parentName:"ul"},"The toolbar contains menus of UI Builder-specific commands,  ",(0,i.kt)("strong",{parentName:"li"},"Viewport"),"  settings,  ",(0,i.kt)("strong",{parentName:"li"},"Theme"),"  selector, and the  ",(0,i.kt)("strong",{parentName:"li"},"Preview"),"  button."),(0,i.kt)("li",{parentName:"ul"},"You can find additional UI Builder settings in the top-right corner of the  ",(0,i.kt)("strong",{parentName:"li"},"Viewport"),"  under the  ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"),"  menu, including a shortcut to the UI Builder\u2019s Settings in Unity\u2019s  ",(0,i.kt)("strong",{parentName:"li"},"Project Settings")," ."),(0,i.kt)("li",{parentName:"ul"},"The  ",(0,i.kt)("strong",{parentName:"li"},"Canvas"),"  is where you edit, preview, and interact with the UI Document (UXML) you are authoring."),(0,i.kt)("li",{parentName:"ul"},"You can change  ",(0,i.kt)("strong",{parentName:"li"},"Canvas"),"  settings by clicking on the  ",(0,i.kt)("strong",{parentName:"li"},"Canvas"),"  header and accessing the  ",(0,i.kt)("strong",{parentName:"li"},"Inspector")," .")),(0,i.kt)("h3",{id:"navigating-in-the-viewport"},"Navigating in the viewport"),(0,i.kt)("p",null,"Pan and zoom to navigate in the viewport. The UI Builder saves each UI Document (UXML)\u2019s current pan and zoom state, and restores them after the UI Builder window reloads, a domain reload, or when you close and re-open the same UI Document (UXML)."),(0,i.kt)("p",null,"When you create and open a new document, the UI Builder resets the pan and zoom states."),(0,i.kt)("p",null,"To pan, do one of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Middle-click and drag in the  ",(0,i.kt)("strong",{parentName:"li"},"Viewport")," ."),(0,i.kt)("li",{parentName:"ol"},"Hold down  ",(0,i.kt)("strong",{parentName:"li"},"Ctrl/Cmd"),"  +  ",(0,i.kt)("strong",{parentName:"li"},"Alt")," / ",(0,i.kt)("strong",{parentName:"li"},"Option"),"  and click and drag in the  ",(0,i.kt)("strong",{parentName:"li"},"Viewport")," .")),(0,i.kt)("p",null,"To zoom in and out, position the mouse pointer in the  ",(0,i.kt)("strong",{parentName:"p"},"Viewport"),"  and do one of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Position the mouse pointer in the viewport, and rotate the mouse wheel."),(0,i.kt)("li",{parentName:"ol"},"Hold down  ",(0,i.kt)("strong",{parentName:"li"},"Alt")," / ",(0,i.kt)("strong",{parentName:"li"},"Option"),"  and right-mouse drag. Drag right to zoom in, and left to zoom out.")),(0,i.kt)("h2",{id:"code-previews"},"Code Previews"),(0,i.kt)("p",null,"As you build your UI, UI Builder automatically generates the underlying UXML and USS text, and displays them in the  ",(0,i.kt)("strong",{parentName:"p"},"UXML Preview"),"  and  ",(0,i.kt)("strong",{parentName:"p"},"USS Preview"),"  panes ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/Numeral_5_half.png",alt:"5"}),"."),(0,i.kt)("h2",{id:"inspector"},"Inspector"),(0,i.kt)("p",null,"The UI Builder  ",(0,i.kt)("strong",{parentName:"p"},"Inspector"),"  pane ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/Numeral_6_half.png",alt:"6"})," is similar to the Unity ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/using-the-inspector"}," ",(0,i.kt)("strong",{parentName:"a"},"Inspector"),"  window"),". The  ",(0,i.kt)("strong",{parentName:"p"},"Inspector"),"  will display slightly different content, depending on the object you have selected inside the UI Builder:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Elements display an  ",(0,i.kt)("strong",{parentName:"li"},"Attribute"),"  section for per-element (UXML) attributes, a  ",(0,i.kt)("strong",{parentName:"li"},"StyleSheets"),"  section for assigning style classes and viewing applied styles from StyleSheets, and an  ",(0,i.kt)("strong",{parentName:"li"},"Inlined Styles"),"  section that allows editing of inline per-element style properties."),(0,i.kt)("li",{parentName:"ol"},"USS Selectors display a  ",(0,i.kt)("strong",{parentName:"li"},"Style Selector"),"  section for changing the selector query string and a  ",(0,i.kt)("strong",{parentName:"li"},"Styles"),"  section for editing of style properties."),(0,i.kt)("li",{parentName:"ol"},"Canvas displays a  ",(0,i.kt)("strong",{parentName:"li"},"Canvas Size"),"  section for changing the Canvas size, a  ",(0,i.kt)("strong",{parentName:"li"},"Canvas Background"),"  section for changing the edit-time canvas background, and a  ",(0,i.kt)("strong",{parentName:"li"},"Document Settings"),"  section for per-document edit-time settings.")))}m.isMDXComponent=!0}}]);