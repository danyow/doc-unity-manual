"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74675],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},h),{},{components:r})):n.createElement(d,o({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30907:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={id:"api-searching",title:"Performing a search",slug:"/api/api-searching"},s="Performing a search",l={unversionedId:"search-overview/api/api-searching",id:"search-overview/api/api-searching",title:"Performing a search",description:"Search Providers use the fetchItems function to search for items and filter the results. The fetchItems function has the following signature:",source:"@site/docs/search-overview/api/api-searching.md",sourceDirName:"search-overview/api",slug:"/api/api-searching",permalink:"/docs/api/api-searching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/search-overview/api/api-searching.md",tags:[],version:"current",frontMatter:{id:"api-searching",title:"Performing a search",slug:"/api/api-searching"},sidebar:"tutorialSidebar",previous:{title:"The SearchProvider class",permalink:"/docs/api/api-search-provider-class"},next:{title:"Search expressions",permalink:"/docs/search-expressions"}},h={},p=[{value:"Using fuzzy search",id:"using-fuzzy-search",level:2},{value:"Asynchronous search API",id:"asynchronous-search-api",level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"performing-a-search"},"Performing a search"),(0,i.kt)("p",null,"Search Providers use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchItems"))," function to search for items and filter the results. The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchItems"))," function has the following signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// context: the necessary search context (for example, tokenized search and\n// sub-filters).\n// items: list of items to populate (if not using the asynchronous api)\n// provider: the Search Provider itself\npublic delegate IEnumerable&lt;SearchItem&gt; GetItemsHandler(SearchContext context,\n                                    List&lt;SearchItem&gt; items,\n                                    SearchProvider provider);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchProvider"))," must add new ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchItem.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchItem")),"s to the ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," list or return an ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;SearchItem&gt;"),"."),(0,i.kt)("p",null,">","  ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  If you do not use the asynchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchItems")," API, you must return ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchItems")," function."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchItem")," is a simple struct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public struct SearchItem\n{\n    public readonly string id;\n    // The item score affects how Search sorts the item within the results from the Search Provider.\n    public int score;\n    // Optional: Display name of the item. If the item does not have one,\n    // SearchProvider.fetchLabel is called).\n    public string label;\n    // If the item does not have a description SearchProvider.fetchDescription\n    // is called when Search first displays the item.\n    public string description;\n    // If true, the description already has rich text formatting.\n    public SearchItemDescriptionFormat descriptionFormat;\n    // If the item does not have a thumbnail, SearchProvider.fetchThumbnail\n    // is called when Search first displays the item.\n    public Texture2D thumbnail;\n    // Search Provider user-customizable content\n    public object data;\n}\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchItem")," only requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,i.kt)("p",null,">","  ",(0,i.kt)("strong",{parentName:"p"},"Tip:"),"  When you filter according to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Search.SearchContext-searchText.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchContext.searchText"))," use the static function ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.SearchProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchProvider.MatchSearchGroup"))," which makes a partial search."),(0,i.kt)("h2",{id:"using-fuzzy-search"},"Using fuzzy search"),(0,i.kt)("p",null,"To use fuzzy search on an item, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Search.FuzzySearch.html"},(0,i.kt)("inlineCode",{parentName:"a"},"FuzzySearch.FuzzyMatch")),", as in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"if (FuzzySearch.FuzzyMatch(sq, CleanString(item.label), ref score, matches))\n    item.label = RichTextFormatter.FormatSuggestionTitle(item.label, matches);\n")),(0,i.kt)("p",null,"All search items are sorted against items of the same provider with their ",(0,i.kt)("inlineCode",{parentName:"p"},"score"),". The  ",(0,i.kt)("strong",{parentName:"p"},"lower score"),"  appears at the top of the item list ( ",(0,i.kt)("strong",{parentName:"p"},"ascending sorting")," )."),(0,i.kt)("h2",{id:"asynchronous-search-api"},"Asynchronous search API"),(0,i.kt)("p",null,"You can use the asynchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchItems")," API when a Search Provider takes a long time to compute its results, or relies on an asynchronous search engine such as WebRequests."),(0,i.kt)("p",null,"To use the asynchronous API, have the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchItems")," function return an ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;SearchItem&gt;"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;SearchItem&gt;")," should be a function that yields results, so that the API can fetch one item at a time."),(0,i.kt)("p",null,"When an ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnumerable&lt;SearchItem&gt;")," is returned, the enumerator is stored and iterated over during an application update. Enumeration continues over multiple application updates until it is finished."),(0,i.kt)("p",null,"The iterating time is constrained to ensure the UI is not blocked. However, because the call is in the main thread, you should make sure to yield as soon as possible if the results are not ready."),(0,i.kt)("p",null,"The following example demonstrates how to use the asynchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchItems")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public class AsyncSearchProvider : SearchProvider\n{\n    public AsyncSearchProvider(string id, string displayName = null)\n        : base(id, displayName)\n    {\n        fetchItems = (context, items, provider) =&gt; FetchItems(context, provider);\n    }\n\n    private IEnumerable&lt;SearchItem&gt; FetchItems(SearchContext context, SearchProvider provider)\n    {\n        while(ResultsNotReady())\n        {\n            yield return null;\n        }\n\n        var oneItem = // Get an item\n        yield return oneItem;\n\n        var anotherItem = // Get another item\n        yield return anotherItem;\n\n        if(SomeConditionThatBreaksTheSearch())\n        {\n            // Search must be terminated\n            yield break;\n        }\n\n        // You can iterate over an enumerable. The enumeration\n        // continues where it left.\n        foreach(var item in someItems)\n        {\n            yield return item;\n        }\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AssetStoreProvider.cs"),": queries the Asset Store using WebRequest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ESS.cs"),": creates a process to start the Entrian Source search indexer, which provides full text search for Assets in your Project.")))}m.isMDXComponent=!0}}]);