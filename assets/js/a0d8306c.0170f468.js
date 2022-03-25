"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88749],{3905:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return m}});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},h=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(d,a(a({ref:e},h),{},{components:n})):i.createElement(d,a({ref:e},h))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93800:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={id:"ImportActivityWindow",title:"Import Activity window",slug:"/asset-workflow/import-activity-window"},l="Import Activity window",p={unversionedId:"asset-workflow/ImportActivityWindow",id:"asset-workflow/ImportActivityWindow",title:"Import Activity window",description:"\u6982\u8ff0",source:"@site/docs/asset-workflow/import-activity-window.md",sourceDirName:"asset-workflow",slug:"/asset-workflow/import-activity-window",permalink:"/doc-unity-manual/docs/asset-workflow/import-activity-window",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset-workflow/import-activity-window.md",tags:[],version:"current",frontMatter:{id:"ImportActivityWindow",title:"Import Activity window",slug:"/asset-workflow/import-activity-window"},sidebar:"tutorialSidebar",previous:{title:"\u811a\u672c\u5316\u5bfc\u5165\u5668 (Scripted Importer)",permalink:"/doc-unity-manual/docs/asset-types/scripted-importers"},next:{title:"Importing assets",permalink:"/doc-unity-manual/docs/importing-assets"}},h={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Accessing the Import Activity window",id:"accessing-the-import-activity-window",level:2},{value:"Layout",id:"layout",level:2},{value:"\u5de5\u5177\u680f",id:"\u5de5\u5177\u680f",level:2},{value:"Show Overview button",id:"show-overview-button",level:3},{value:"Options menu",id:"options-menu",level:3},{value:"Use relative timestamps",id:"use-relative-timestamps",level:4},{value:"Show previous imports",id:"show-previous-imports",level:4},{value:"Include PreviewImporter",id:"include-previewimporter",level:4},{value:"Search field",id:"search-field",level:3},{value:"Asset list",id:"asset-list",level:2},{value:"Information panel",id:"information-panel",level:2},{value:"Overview information",id:"overview-information",level:3},{value:"Asset information",id:"asset-information",level:3}],c={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-activity-window"},"Import Activity window"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"The Import Activity window provides you with information about what happens when Unity imports your assets. You can use this information to identify which assets in your project were imported recently, how long each asset took to import, and why it was imported (or re-imported)."),(0,r.kt)("p",null,"This information allows you to analyse your project\u2019s import activity, and make decisions about how to improve the time Unity takes to import your assets, or how to avoid unnecessary imports altogether. The Import Activity window therefore acts like a profiler for the import process."),(0,r.kt)("h2",{id:"accessing-the-import-activity-window"},"Accessing the Import Activity window"),(0,r.kt)("p",null,"To open the Import Activity window, go to  ",(0,r.kt)("strong",{parentName:"p"},"Window ",">"," Analysis ",">"," Import Activity Window")," ."),(0,r.kt)("p",null,"You can also open the Import Activity window directly from an asset, which causes the window to immediately display the import details for the selected asset. This is useful if you already know which asset\u2019s import data you want to analyse. There are two ways to do this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Right-click an asset in the Project window and, from the context menu, select  ",(0,r.kt)("strong",{parentName:"li"},"View in Import Activity Window")," ."),(0,r.kt)("li",{parentName:"ul"},"View an asset in the Inspector, right-click the Inspector\u2019s tab, and, from the context menu, select  ",(0,r.kt)("strong",{parentName:"li"},"Open in Import Activity Window")," .")),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("p",null,"The Import Activity window has three sections: the  ",(0,r.kt)("strong",{parentName:"p"},"toolbar"),"  at the top, the  ",(0,r.kt)("strong",{parentName:"p"},"asset list"),"  on the left, and the  ",(0,r.kt)("strong",{parentName:"p"},"information"),"  section on the right."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ImportActivityLayout.png",alt:"The layout of the import activity window"})),(0,r.kt)("p",null,"The layout of the import activity window"),(0,r.kt)("h2",{id:"\u5de5\u5177\u680f"},"\u5de5\u5177\u680f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ImportActivityToolbar.png",alt:"ImportActivityToolbar.png"})),(0,r.kt)("p",null,"The toolbar at the top of the window has the following three features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Show overview"),"  button"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Options"),"  menu"),(0,r.kt)("li",{parentName:"ol"},"Search field")),(0,r.kt)("h3",{id:"show-overview-button"},"Show Overview button"),(0,r.kt)("p",null,"When you click the  ",(0,r.kt)("strong",{parentName:"p"},"Show Overview"),"  button, the information section on the right displays overview information, which includes general information about your asset imports. See Overview information, below."),(0,r.kt)("h3",{id:"options-menu"},"Options menu"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Options"),"  dropdown allows you to adjust the information shown in the asset list. The following options are available:"),(0,r.kt)("h4",{id:"use-relative-timestamps"},"Use relative timestamps"),(0,r.kt)("p",null,"Controls whether the last import time is shown in relative format (eg. \u201ca few seconds ago\u201d), or absolute format, in the form:  ",(0,r.kt)("strong",{parentName:"p"},"Day-Month-Year Hour:Minute:Second")," "),(0,r.kt)("h4",{id:"show-previous-imports"},"Show previous imports"),(0,r.kt)("p",null,"Controls whether previous imports are shown, or only the most recent import. Showing previous imports allows you to see how many revisions of an asset are currently being kept in the Library folder. This list is generally cleared when Artifact Garbage Collection runs, when you restart the Editor."),(0,r.kt)("p",null,"When you enable this option, a second vertical list view appears alongside the asset list, showing all the currently stored import results for the selected asset."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ImportActivityPreviousImports.png",alt:"The previous imports list, showing three import results for the selected asset."})),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"previous imports"),"  list, showing three import results for the selected asset."),(0,r.kt)("p",null,"If you want to keep import results from previous Editor sessions to aid with debugging or analysis, you can turn off Artifact Garbage Collection by going to  ",(0,r.kt)("strong",{parentName:"p"},"Project Settings ",">"," Editor ",">"," Remove unused Artifacts on Restart")," . You can also control this setting via script by using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/EditorUserSettings.artifactGarbageCollection.html"},"EditorUserSettings.artifactGarbageCollection"),"."),(0,r.kt)("h4",{id:"include-previewimporter"},"Include PreviewImporter"),(0,r.kt)("p",null,"Controls whether to include artifacts generated by the preview window. These are hidden by default, because they are not usually useful when examining your asset imports."),(0,r.kt)("h3",{id:"search-field"},"Search field"),(0,r.kt)("p",null,"The search field on the right side of the toolbar allows you to quickly filter the  ",(0,r.kt)("strong",{parentName:"p"},"asset list"),"  by name to find the specific assets you are interested in."),(0,r.kt)("h2",{id:"asset-list"},"Asset list"),(0,r.kt)("p",null,"The left-hand section of the window shows the list of all assets in your project. The columns are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Asset")," : The asset name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Import")," : When the asset was last imported"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Duration")," : The amount of time the Last Import took, in milliseconds.")),(0,r.kt)("p",null,"To change the sort order of the list, click on the column headings."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ImportActivityAssetList.png",alt:"image alt text"})),(0,r.kt)("p",null,"image alt text"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The asset list, with results shown sorted by longest duration first.")),(0,r.kt)("h2",{id:"information-panel"},"Information panel"),(0,r.kt)("p",null,"The right-hand section of the window is the information panel, and has two modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overview information appears when there is no asset selected."),(0,r.kt)("li",{parentName:"ul"},"Asset information appears when you select an asset from the list on the left, or if you open the window directly via an asset as described above.")),(0,r.kt)("h3",{id:"overview-information"},"Overview information"),(0,r.kt)("p",null,"The Overview information displays a list of the assets with the most dependencies, and assets with the longest import duration. It is useful for quickly identifying which assets may be most significantly slowing down your import process. Assets with more dependencies are more likely to be regularly re-imported, because an asset is re-imported whenever any of its dependencies are modified."),(0,r.kt)("p",null,"When you open the Import Activity window from the main menu, it displays the Overview information by default. If you are viewing asset information and you want to return to the Overview information, select the  ",(0,r.kt)("strong",{parentName:"p"},"Show overview"),"  button in the toolbar ."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ImportActivityOverview.png",alt:"The Import Activity window displaying the Overview on the right side, and the Show Overview button in the top-left of the window."})),(0,r.kt)("p",null,"The Import Activity window displaying the Overview on the right side, and the  ",(0,r.kt)("strong",{parentName:"p"},"*Show Overview")," * button in the top-left of the window."),(0,r.kt)("h3",{id:"asset-information"},"Asset information"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ImportActivityAssetInfo.png",alt:"The asset information panel showing the information relating to a texture asset."})),(0,r.kt)("p",null,"The asset information panel showing the information relating to a texture asset."),(0,r.kt)("p",null,"When you select an asset from the asset list, the information panel displays the asset information. This includes the following details about the asset and its most recent import."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Title")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Asset")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the currently selected asset. You can click this field to locate the asset in the Project window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GUID")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique GUID assigned to the asset. You can use this to track its references across your project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Asset Size")),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the source file of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u8def\u5f84")),(0,r.kt)("td",{parentName:"tr",align:null},"The file path of the asset, relative to the project\u2019s root folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Editor Revision")),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the Editor that created this artifact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"The time at which the Artifact file was created. This matches the timestamp value of the file in the ",(0,r.kt)("inlineCode",{parentName:"td"},"Library")," folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Duration")),(0,r.kt)("td",{parentName:"tr",align:null},"The time Unity took to import this asset in the most recent import, in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Reason for Import")),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the change (or changes) in your project which caused this asset\u2019s most recent import, and details about the associated dependency type.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The Reason for Import field has its own search bar, which allows you to search its text. This is useful in situations where an asset has many reasons for import (for example, a compute shader can have many dependencies that are modified when you switch platforms).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Produced Files / Artifacts")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of files present in the ",(0,r.kt)("inlineCode",{parentName:"td"},"Library")," folder that Unity produced when it last imported this asset. Usually there is just one artifact per asset, although sometimes there can be multiple. For example, when Unity generates a preview of an asset.",(0,r.kt)("br",null),(0,r.kt)("br",null),"During a typical usage of the Editor, Unity might generate many versions of an asset\u2019s import result (an artifact). For this reason, each artifact has an artifact ID for reference. This is different to the asset\u2019s GUID.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The currently selected revision is referred to as the current revision, which is selected by default when an asset in the Asset List is selected.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Generally revisions are in chronological order with the current revision as the newest. However, if you undo an operation in Unity which changes an asset\u2019s artifact, the current revision reverts back to a previously cached artifact and therefore would not be the most recently listed artifact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4f9d\u8d56\u5173\u7cfb")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of Editor and project-specific variables which control the state of an asset, which, if changed, trigger the re-import of the asset.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Dependencies are how the asset database tracks the state of an asset. This means that if an asset dependency changes, the import result will be different and a new revision of an artifact will be generated.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Understanding your asset\u2019s dependency types and what can cause them to change can help you get the most out of Unity\u2019s asset database system, speed up your workflow, and avoid unnecessary import time.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This field has its own search bar, which allows you to search the text contained in the Dependencies field.")))))}m.isMDXComponent=!0}}]);