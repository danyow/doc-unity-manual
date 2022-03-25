"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28756],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"search-index-manager",title:"The Index Manager",slug:"/search-usage/search-index-manager"},s="The Index Manager",d={unversionedId:"search-overview/search-usage/search-index-manager",id:"search-overview/search-usage/search-index-manager",title:"The Index Manager",description:"The Index Manager allows you to create, edit, and remove search indexes. Indexes update when you add or change content in your project.",source:"@site/docs/search-overview/search-usage/search-index-manager.md",sourceDirName:"search-overview/search-usage",slug:"/search-usage/search-index-manager",permalink:"/doc-unity-manual/docs/search-usage/search-index-manager",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/search-overview/search-usage/search-index-manager.md",tags:[],version:"current",frontMatter:{id:"search-index-manager",title:"The Index Manager",slug:"/search-usage/search-index-manager"},sidebar:"tutorialSidebar",previous:{title:"Filter searches",permalink:"/doc-unity-manual/docs/search-usage/search-filters"},next:{title:"Search query operators",permalink:"/doc-unity-manual/docs/search-usage/search-query-operators"}},p={},u=[{value:"Index types",id:"index-types",level:2},{value:"Index results",id:"index-results",level:2},{value:"Index sizes",id:"index-sizes",level:2},{value:"Add an index",id:"add-an-index",level:2},{value:"Edit an index",id:"edit-an-index",level:2},{value:"Delete an index",id:"delete-an-index",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-index-manager"},"The Index Manager"),(0,i.kt)("p",null,"The Index Manager allows you to create, edit, and remove search indexes. Indexes update when you add or change content in your project."),(0,i.kt)("h2",{id:"index-types"},"Index types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Asset"),"  - An index of all Assets in a Project. This index is created automatically when you create a Project and rebuilds when you add or modify new content. The Asset index includes all Assets including Prefabs and scenes, but it doesn\u2019t index the content of a scene or a nested hierarchy in a Prefab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Package"),"  - An index containing Assets in the Packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prefab"),"  - An index containing only the GameObjects which are part of Prefabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scene"),"  - An index of Assets in any scene"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User"),"  - An index that is created for you and is not shared with the project.")),(0,i.kt)("p",null,"By default Unity creates the Asset index. To use Prefab, Package, Scene, and User indexes, you must create them in the Index Manager."),(0,i.kt)("p",null,"To open the Index Manager choose  ",(0,i.kt)("strong",{parentName:"p"},"Windows"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Search"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Index Manager")," ."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-index-manager.png",alt:"search-index-manager.png"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"File Path"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u540d\u79f0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Score"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Roots"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u5305"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Includes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Excludes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Options"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Show package indexes"))))),(0,i.kt)("h2",{id:"index-results"},"Index results"),(0,i.kt)("p",null,"The following tabs contain information about the index:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Assets:"),"  Displays the files indexed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objects:"),"  (Prefab and Scene indexes only) Displays the object identifiers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keywords:"),"  Displays the available searchable Properties or filters you can use to further narrow your search results.")),(0,i.kt)("h2",{id:"index-sizes"},"Index sizes"),(0,i.kt)("p",null,"To determine the index options you need, refer to this table."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Project size"),(0,i.kt)("th",{parentName:"tr",align:null},"Index required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Less than 1000 assets"),(0,i.kt)("td",{parentName:"tr",align:null},"Minimal - enable a minimal set of indexing options")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Between 1000 and 2000 assets"),(0,i.kt)("td",{parentName:"tr",align:null},"Default - index your project assets with File and Type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Over 2000 assets"),(0,i.kt)("td",{parentName:"tr",align:null},"Extended - index your project with File, Type, Properties, Sub objects, and Dependencies")))),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  The more options you add to the index, the longer it will take to generate your first index."),(0,i.kt)("h2",{id:"add-an-index"},"Add an index"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the  ",(0,i.kt)("strong",{parentName:"li"},"Index Manager")," ."),(0,i.kt)("li",{parentName:"ol"},"Click the plus (+) sign in the left pane of the  ",(0,i.kt)("strong",{parentName:"li"},"Index Manager"),"  window and select the type of index you want to create."),(0,i.kt)("li",{parentName:"ol"},"Customize your index settings in the right pane and click  ",(0,i.kt)("strong",{parentName:"li"},"Create")," ."),(0,i.kt)("li",{parentName:"ol"},"Name your index in the  ",(0,i.kt)("strong",{parentName:"li"},"Save Index Settings"),"  window and click  ",(0,i.kt)("strong",{parentName:"li"},"Save")," . ",(0,i.kt)("br",null)," Your index builds automatically. Depending on the size of the project and your index settings, this may take some time.")),(0,i.kt)("h2",{id:"edit-an-index"},"Edit an index"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the  ",(0,i.kt)("strong",{parentName:"p"},"Index Manager")," .")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the index from the left pane of the  ",(0,i.kt)("strong",{parentName:"p"},"Index Manager"),"  window.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make changes to your index name or settings and click  ",(0,i.kt)("strong",{parentName:"p"},"Save")," ."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"  If you make changes without saving your index, an asterisk (","*",") appears next to the window title. If you try to close the window without saving, Unity prompts you to save your index. When you save, Unity rebuilds your index with your changes."))),(0,i.kt)("h2",{id:"delete-an-index"},"Delete an index"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the  ",(0,i.kt)("strong",{parentName:"li"},"Index Manager")," ."),(0,i.kt)("li",{parentName:"ol"},"Select the index from the left pane of the  ",(0,i.kt)("strong",{parentName:"li"},"Index Manager"),"  window."),(0,i.kt)("li",{parentName:"ol"},"Click the minus (-) sign."),(0,i.kt)("li",{parentName:"ol"},"Click  ",(0,i.kt)("strong",{parentName:"li"},"Yes"),"  to confirm that you want to delete the index.")))}m.isMDXComponent=!0}}]);