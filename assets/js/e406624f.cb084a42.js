"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62389],{3905:function(e,r,t){t.d(r,{Zo:function(){return h},kt:function(){return u}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},h=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=n,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?a.createElement(m,c(c({ref:r},h),{},{components:t})):a.createElement(m,c({ref:r},h))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12581:function(e,r,t){t.r(r),t.d(r,{assets:function(){return h},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),c=["components"],o={id:"api-search-provider-class",title:"The SearchProvider class",slug:"/api/api-search-provider-class"},s="The SearchProvider class",l={unversionedId:"search-overview/api/api-search-provider-class",id:"search-overview/api/api-search-provider-class",title:"The SearchProvider class",description:"The  SearchProvider  class executes searches for specific types of items, and manages thumbnails, descriptions, and sub-filters.",source:"@site/docs/search-overview/api/api-search-provider-class.md",sourceDirName:"search-overview/api",slug:"/api/api-search-provider-class",permalink:"/doc-unity-manual/docs/api/api-search-provider-class",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/search-overview/api/api-search-provider-class.md",tags:[],version:"current",frontMatter:{id:"api-search-provider-class",title:"The SearchProvider class",slug:"/api/api-search-provider-class"},sidebar:"tutorialSidebar",previous:{title:"Registering a Search Provider",permalink:"/doc-unity-manual/docs/api/api-register-provider"},next:{title:"Performing a search",permalink:"/doc-unity-manual/docs/api/api-searching"}},h={},p=[{value:"Caching and releasing resources",id:"caching-and-releasing-resources",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"Tracking item selection",id:"tracking-item-selection",level:2},{value:"Enabling drag and drop",id:"enabling-drag-and-drop",level:2},{value:"Including a provider in a contextual search",id:"including-a-provider-in-a-contextual-search",level:2}],d={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-searchprovider-class"},"The SearchProvider class"),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchProvider.html"},"SearchProvider")),"  class executes searches for specific types of items, and manages thumbnails, descriptions, and sub-filters."),(0,i.kt)("p",null,"It has the following basic API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public class SearchProvider\n{\n    public SearchProvider(string id, string displayName = null);\n\n    // Creates an Item bound to this provider.\n    public SearchItem CreateItem(string id, string label = null, string description = null, Texture2D thumbnail = null);\n\n    // Utility functions to check whether the search text matches a string.\n    public static bool MatchSearchGroups(string searchContext, string content);\n    public static bool MatchSearchGroups(string searchContext, string content,\n                                        out int startIndex, out int endIndex);\n\n    // The provider\'s unique ID.\n    public NameId name;\n    // Text token to "filter" a provider (for example, "me:", "p:", and "s:").\n    public string filterId;\n    // This provider is only active when a search explicitly specifies it with\n    // its filterId.\n    public bool isExplicitProvider;\n    // Handler to fetch and format the label of a search item.\n    public FetchStringHandler fetchLabel;\n    // Handler to provide an async description for an item. Called just before\n    // Search displays the item.\n    // Allows a plug-in provider to fetch long descriptions only when\n    // Search needs them.\n    public FetchStringHandler fetchDescription;\n    // Handler to provider an async thumbnail for an item. Called just before\n    // Search displays the item.\n    // Allows a plug-in provider to fetch/generate previews only when\n    // Search needs them.\n    public PreviewHandler fetchThumbnail;\n    // Handler to support drag interactions. It is up to the SearchProvider\n    // to properly set up the DragAndDrop manager.\n    public StartDragHandler startDrag;\n    // Called when the selection changes and Search can track it.\n    public TrackSelectionHandler trackSelection;\n    // MANDATORY: Handler to get items for a search context.\n    public GetItemsHandler fetchItems;\n    // A Search Provider can return a list of words that help the user complete\n    // their search query.\n    public GetKeywordsHandler fetchKeywords;\n    // List of sub-filters that are visible in the FilterWindow for a\n    // SearchProvider (see AssetProvider for an example).\n    public List&lt;NameId&gt; subCategories;\n    // Called when the Search window opens. Allows the Provider to perform\n    // some caching.\n    public Action onEnable;\n    // Called when the Search window closes. Allows the Provider to release\n    // cached resources.\n    public Action onDisable;\n    // Int to sort the Provider. Affects the order of search results and the\n    // order in which providers are shown in the FilterWindow.\n    public int priority;\n    // Called when Search opens in "contextual mode". If you return true\n    // it means the provider is enabled for this search context.\n    public IsEnabledForContextualSearch isEnabledForContextualSearch;\n}\n')),(0,i.kt)("h2",{id:"caching-and-releasing-resources"},"Caching and releasing resources"),(0,i.kt)("p",null,"When you launch the Search window, it calls ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-onEnable.html"},(0,i.kt)("inlineCode",{parentName:"a"},"onEnable")),", which you can use to cache resources."),(0,i.kt)("p",null,"When you close the Search window, it calls ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-onDisable.html"},(0,i.kt)("inlineCode",{parentName:"a"},"onDisable")),", which you can use to release resources."),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,i.kt)("p",null,"Because the Search item list uses a virtual scrolling algorithm, some ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchItem.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchItem"))," fields (for example, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchItem-label.html"},(0,i.kt)("inlineCode",{parentName:"a"},"label")),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchItem-thumbnail.html"},(0,i.kt)("inlineCode",{parentName:"a"},"thumbnail")),", and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchItem-description.html"},(0,i.kt)("inlineCode",{parentName:"a"},"description")),") are fetched on demand, if they are not already provided."),(0,i.kt)("p",null,"To populate those fields after the items are created, you need to initialize the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchProvider"))," with specific handlers (",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-fetchLabel.html"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchLabel")),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-fetchDescription.html"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchDescription")),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-fetchThumbnail.html"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchThumbnail")),")."),(0,i.kt)("h2",{id:"tracking-item-selection"},"Tracking item selection"),(0,i.kt)("p",null,"You can register a callback on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-trackSelection.html"},(0,i.kt)("inlineCode",{parentName:"a"},"trackSelection"))," to have Search do something whenever you select an item in the search results using the mouse or the keyboard. For example, the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/search-providers/search-assets"},"Asset")," and ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/search-providers/search-scene"},"Scene")," providers use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-trackSelection.html"},(0,i.kt)("inlineCode",{parentName:"a"},"trackSelection"))," callback to ping the selected item in Search."),(0,i.kt)("h2",{id:"enabling-drag-and-drop"},"Enabling drag and drop"),(0,i.kt)("p",null,"Some Search Providers return items that you can drag and drop into the Scene. If you are creating a custom provider whose items support drag and drop, implement ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-startDrag.html"},(0,i.kt)("inlineCode",{parentName:"a"},"startDrag")),"."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/search-providers/search-assets"},"Asset")," and ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/search-providers/search-scene"},"Scene")," providers populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"DragAndDrop")," structure with the relevant item UIDs to allow proper drag and drop interactions."),(0,i.kt)("h2",{id:"including-a-provider-in-a-contextual-search"},"Including a provider in a contextual search"),(0,i.kt)("p",null,"When you open the Search window with the  ",(0,i.kt)("strong",{parentName:"p"},"Alt Shift + C"),"  shortcut, it starts a contextual search, meaning Search searches the window that has focus."),(0,i.kt)("p",null,"When you launch a contextual search, providers that override ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchProvider-isEnabledForContextualSearch.html"},(0,i.kt)("inlineCode",{parentName:"a"},"isEnabledForContextualSearch"))," check to see if they should be enabled, as in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'// Taken from Scene hierarchy provider:\n// Makes the provider part of the contextual search if the Scene view or the\n// Hierarchy window has focus.\nisEnabledForContextualSearch = () =&gt;\n                QuickSearchTool.IsFocusedWindowTypeName("SceneView") ||\n                QuickSearchTool.IsFocusedWindowTypeName("SceneHierarchyWindow");\n')))}u.isMDXComponent=!0}}]);