"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91248],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17768:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],l={id:"Tilemap-ScriptableBrushes-TilemapEditorTool",title:"TilemapEditorTool",slug:"/tilemap-scriptable-brushes/tilemap-scriptable-brushes-tilemap-editor-tool"},p="TilemapEditorTool",s={unversionedId:"unity2d/class-tilemap/tilemap-scriptable-brushes/Tilemap-ScriptableBrushes-TilemapEditorTool",id:"unity2d/class-tilemap/tilemap-scriptable-brushes/Tilemap-ScriptableBrushes-TilemapEditorTool",title:"TilemapEditorTool",description:"The TilemapEditorTool is an inheritable class that defines  editor tools  for the Tile Palette window. To create a new editor tool for the Tile Palette window, create a new class inheriting from TilemapEditorTool. Override any required methods for your new TilemapEditorToolclass.",source:"@site/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes-tilemap-editor-tool.md",sourceDirName:"unity2d/class-tilemap/tilemap-scriptable-brushes",slug:"/tilemap-scriptable-brushes/tilemap-scriptable-brushes-tilemap-editor-tool",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes/tilemap-scriptable-brushes-tilemap-editor-tool",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes-tilemap-editor-tool.md",tags:[],version:"current",frontMatter:{id:"Tilemap-ScriptableBrushes-TilemapEditorTool",title:"TilemapEditorTool",slug:"/tilemap-scriptable-brushes/tilemap-scriptable-brushes-tilemap-editor-tool"},sidebar:"tutorialSidebar",previous:{title:"\u5176\u4ed6\u6709\u7528\u7684\u7c7b",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes/tilemap-scriptable-brushes-other-classes"},next:{title:"\u53ef\u7f16\u7a0b\u74e6\u7247",permalink:"/doc-unity-manual/docs/tilemap-scriptable-tiles"}},u={},d=[],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tilemapeditortool"},"TilemapEditorTool"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool")," is an inheritable class that defines  ",(0,n.kt)("strong",{parentName:"p"},"editor tools"),"  for the Tile Palette window. To create a new editor tool for the Tile Palette window, create a new class inheriting from ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),". Override any required methods for your new ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),"class."),(0,n.kt)("p",null,"You can override the following methods from ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"protected abstract string tooltipStringFormat { get; }\n")),(0,n.kt)("p",null,"Define this to show the tooltip for your ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),". The shortcut for your ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),"will be passed in to this and formatted for the final tooltip."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"protected abstract string shortcutId { get; }\n")),(0,n.kt)("p",null,"Define this to assign a Shortcut Id for identifying your keyboard shortcut for your tool."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"public virtual GUIContent toolbarIcon { get; }\n")),(0,n.kt)("p",null,"Define this to show the icon for your ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),". If this is not defined, the toolbar displays the  ",(0,n.kt)("strong",{parentName:"p"},"Tool Mode"),"  icon."),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"public virtual bool HandleTool(bool isHotControl, GridLayout gridLayout, GameObject brushTarget, Vector3Int gridMousePosition)\n")),(0,n.kt)("p",null,"Override this to determine any custom behavior for handling your ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),". The following parameters are passed into the method for additional information:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"isHotControl")),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the tool is a hot control under ",(0,n.kt)("inlineCode",{parentName:"td"},"UnityGUI")," (refer to ",(0,n.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/GUIUtility-hotControl.html"},"GUIUtility.hotControl")," for more information).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"gridLayout")),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GridLayout.html"},"GridLayout")," being handled by the Tool.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"brushTarget")),(0,n.kt)("td",{parentName:"tr",align:null},"The GameObject being handled by the Tool.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"gridMousePosition")),(0,n.kt)("td",{parentName:"tr",align:null},"The Grid Cell position where the mouse cursor currently is.")))),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"public override bool IsAvailable()\n")),(0,n.kt)("p",null,"Whether your ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),"can be activated at the current time. Use this to validate whether the prerequisites for activating your ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),"are available."),(0,n.kt)("p",null,"The custom ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),"can be added as a default tool in the Tile Palette using the Tile Palette Preferences or as a tool for specific Grid Brushes when your ",(0,n.kt)("inlineCode",{parentName:"p"},"GridBrush"),"has a ",(0,n.kt)("inlineCode",{parentName:"p"},"BrushTool"),"attribute with the type of your custom ",(0,n.kt)("inlineCode",{parentName:"p"},"TilemapEditorTool"),"."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"TilemapEditorTool page added in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/2021.2/Documentation/Manual/30_search.html?q=newin20212"},"2021.2")," ."))}m.isMDXComponent=!0}}]);