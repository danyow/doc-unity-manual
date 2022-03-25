"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80871],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33843:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"search-scene",title:"Search the current Scene",slug:"/search-providers/search-scene"},p="Search the current Scene",s={unversionedId:"search-overview/search-providers/search-scene",id:"search-overview/search-providers/search-scene",title:"Search the current Scene",description:"Use the Hierarchy Search Provider to find GameObjects in the current Scene.",source:"@site/docs/search-overview/search-providers/search-scene.md",sourceDirName:"search-overview/search-providers",slug:"/search-providers/search-scene",permalink:"/doc-unity-manual/docs/search-providers/search-scene",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/search-overview/search-providers/search-scene.md",tags:[],version:"current",frontMatter:{id:"search-scene",title:"Search the current Scene",slug:"/search-providers/search-scene"},sidebar:"tutorialSidebar",previous:{title:"Search saved queries",permalink:"/doc-unity-manual/docs/search-providers/search-saved-queries"},next:{title:"Search Settings and Preferences",permalink:"/doc-unity-manual/docs/search-providers/search-settings"}},d={},c=[{value:"Sub-filters",id:"sub-filters",level:2},{value:"Scene Properties",id:"scene-properties",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"search-the-current-scene"},"Search the current Scene"),(0,l.kt)("p",null,"Use the Hierarchy Search Provider to find GameObjects in the current Scene."),(0,l.kt)("p",null,"Hierarchy queries run on  ",(0,l.kt)("strong",{parentName:"p"},"all"),"  objects of the  ",(0,l.kt)("strong",{parentName:"p"},"current scene")," . For this search, Unity uses progressive caching, not indexed data (as opposed to ",(0,l.kt)("a",{parentName:"p",href:"#asset"},"Asset")," and ",(0,l.kt)("a",{parentName:"p",href:"#objects"},"Objects")," providers)."),(0,l.kt)("p",null,"From the  ",(0,l.kt)("strong",{parentName:"p"},"More")," ( ",(0,l.kt)("strong",{parentName:"p"},"\u22ee")," ) menu, select  ",(0,l.kt)("strong",{parentName:"p"},"Show more results"),"  to enable \u201cfuzzy\u201d search in the Hierarchy Search Provider. Fuzzy searches are more resource intensive than direct searches, but usually return more matches. They can be slower in larger Scenes and may cause a lag."),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/doc-unity-manual/docs/search-usage/search-filters#search-tokens"},"Search token"),":"),"  ",(0,l.kt)("inlineCode",{parentName:"p"},"h:")," (for \u201chierarchy\u201d)"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/doc-unity-manual/docs/search-usage#default-actions"},"Default action"),":"),"  Select the GameObject in the Scene."),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/doc-unity-manual/docs/search-usage#additional-actions"},"Context menu actions"),":")," "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action:"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\uff1a"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Select")),(0,l.kt)("td",{parentName:"tr",align:null},"Selects the GameObject in the Scene and the Hierarchy window.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Open")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the Project Asset that contains the GameObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hide/Show")),(0,l.kt)("td",{parentName:"tr",align:null},"Hides/Shows the GameObject in the Scene view.")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-provider-scene.png",alt:"scene provider"}),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"},"Hierarchy Search Provider")),(0,l.kt)("h2",{id:"sub-filters"},"Sub-filters"),(0,l.kt)("p",null,"Use these tokens to further limit your Hierarchy searches."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Filter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Search token")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Component type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"t:")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"t:collid")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that have a component containing the word collid (ex: Collider, Collider2d, MyCustomCollider).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Instance id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id:")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id :210")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects whose instanceID contains the word 210 (ex: 21064). ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"id=21064")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects whose instanceID is exactly 21064.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u8def\u5f84")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path:parent/to/child")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path:Wall5/Br")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects whose path matches the partial path ",(0,l.kt)("inlineCode",{parentName:"td"},"Wall5/Br")," (e.g.: /Structures/Wall5/Brick)",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"path=/Structures/Wall5/Brick")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects with a scene path that is exactly /Structures/Wall5/Brick.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6807\u7b7e")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tag:")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tag:resp")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that have a tag containing the word resp (e.g.: Respawn)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Layer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"layer:&lt;layer number&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"layer:8")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that are on layer 8 (e.g.: 8: Terrain)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size:number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size&gt;5")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects with an AABB volume size larger than 5.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Overlap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"overlap:number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"overlap&gt;3")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that renderer bounds intersects with more than 3 other GameObjects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u4f9d\u8d56\u5173\u7cfb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ref:&lt;asset name&gt;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ref:stone")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects and their components that have a dependency on an asset whose name contains the word stone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Child")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:child")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:child")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that are the child of a GameObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Leaf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:leaf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:leaf")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that don\u2019t have a child.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Root")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:root")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:root")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that don\u2019t have a parent (i.e. that root objects in the scene).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Visible")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:visible")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:visible")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that are visible by the camera of the Scene View.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Hidden")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:hidden")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:hidden")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that are hidden according to the SceneVisibilityManager.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Static")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:static")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:static")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that are static.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Prefab")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:prefab")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is:prefab")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Searches all GameObjects that are part of a Prefab.")))),(0,l.kt)("h2",{id:"scene-properties"},"Scene Properties"),(0,l.kt)("p",null,"You can use the special ",(0,l.kt)("inlineCode",{parentName:"p"},"p(&lt;partial propertyname&gt;)")," syntax to filter objects according to the value of a property in order to match the partial name of the property against any of the components of an object. This is a dynamic operation that doesn\u2019t use an index. Here are some examples of queries using ",(0,l.kt)("inlineCode",{parentName:"p"},"p()"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"->"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p(drawmode)=Simple")),(0,l.kt)("td",{parentName:"tr",align:null},"Matches the ",(0,l.kt)("inlineCode",{parentName:"td"},"drawmode")," property of a Sprite renderer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p(orthographic size)&gt;2")),(0,l.kt)("td",{parentName:"tr",align:null},"Matches a Camera with an orthographic size higher than 2.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p(istrigger)=false")),(0,l.kt)("td",{parentName:"tr",align:null},"Matches all GameObjects where the ",(0,l.kt)("inlineCode",{parentName:"td"},"IsTrigger")," property in a Collider2d is NOT a trigger.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p(sprite)=bee")),(0,l.kt)("td",{parentName:"tr",align:null},"Matches all GameObjects with a ",(0,l.kt)("inlineCode",{parentName:"td"},"Sprite")," property (e.g.: Sprite Renderer) that links to an Asset whose name is exactly ",(0,l.kt)("inlineCode",{parentName:"td"},"bee"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p(sprite):bee")),(0,l.kt)("td",{parentName:"tr",align:null},"Matches all GameObjects with a ",(0,l.kt)("inlineCode",{parentName:"td"},"Sprite")," property (e.g.: Sprite Renderer) that links to a GameObject with a name containing the word ",(0,l.kt)("inlineCode",{parentName:"td"},"bee"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"p(spri):bee")),(0,l.kt)("td",{parentName:"tr",align:null},"Matches all GameObjects with a property containing the word ",(0,l.kt)("inlineCode",{parentName:"td"},"spri")," (such as the Sprite property of a Sprite Renderer component) that links to a GameObject Asset with a name containing the word ",(0,l.kt)("inlineCode",{parentName:"td"},"bee"),".")))),(0,l.kt)("p",null,"Unity indexes property names according to their internal name, which might be different than the display name in the Inspector. To find the internal name of a property, check the Inspector in Debug mode."))}u.isMDXComponent=!0}}]);