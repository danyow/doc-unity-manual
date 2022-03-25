"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55238],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(a),g=r,k=d["".concat(u,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5181:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"UIB-styling-ui-backgrounds",title:"Set background images",slug:"/uib-styling-ui/uib-styling-ui-backgrounds"},u="Set background images",s={unversionedId:"uitoolkits/uielements/uibuilder/uib-styling-ui/UIB-styling-ui-backgrounds",id:"uitoolkits/uielements/uibuilder/uib-styling-ui/UIB-styling-ui-backgrounds",title:"Set background images",description:"UI Builder doesn\u2019t have a dedicated \u201cimage\u201d element. To create an image, do the following:",source:"@site/docs/uitoolkits/uielements/uibuilder/uib-styling-ui/uib-styling-ui-backgrounds.md",sourceDirName:"uitoolkits/uielements/uibuilder/uib-styling-ui",slug:"/uib-styling-ui/uib-styling-ui-backgrounds",permalink:"/doc-unity-manual/docs/uib-styling-ui/uib-styling-ui-backgrounds",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uibuilder/uib-styling-ui/uib-styling-ui-backgrounds.md",tags:[],version:"current",frontMatter:{id:"UIB-styling-ui-backgrounds",title:"Set background images",slug:"/uib-styling-ui/uib-styling-ui-backgrounds"},sidebar:"tutorialSidebar",previous:{title:"Styling UI",permalink:"/doc-unity-manual/docs/uib-styling-ui"},next:{title:"Creating and managing StyleSheets (USS)",permalink:"/doc-unity-manual/docs/uib-styling-ui/uib-styling-ui-creating-uss"}},p={},m=[{value:"Image import settings",id:"image-import-settings",level:2},{value:"Texture",id:"texture",level:3},{value:"Sprites",id:"sprites",level:3},{value:"Vector images",id:"vector-images",level:3},{value:"9-Slice images with UI Toolkit",id:"9-slice-images-with-ui-toolkit",level:2}],d={toc:m};function g(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-background-images"},"Set background images"),(0,i.kt)("p",null,"UI Builder doesn\u2019t have a dedicated \u201cimage\u201d element. To create an image, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import background image into your project."),(0,i.kt)("li",{parentName:"ol"},"Create a regular visual element in UI Builder."),(0,i.kt)("li",{parentName:"ol"},"Set the element\u2019s background image to the imported image.")),(0,i.kt)("p",null,"When you set the background image, you must select a supported background image types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/importing-textures"},"Textures"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites"},"Sprites"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/textures/class-render-texture"},"Render textures"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SVG Vector images"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note")," : To use a SVG image as a background for a visual element, you must install a package. To do so, in the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/upm-ui"},"Package Manager window"),", install the package ",(0,i.kt)("inlineCode",{parentName:"p"},"com.unity.vectorgraphics")," from git URL."))),(0,i.kt)("h2",{id:"image-import-settings"},"Image import settings"),(0,i.kt)("p",null,"After you have imported an image to your project, for the most intuitive results, Unity recommends you to apply certain import settings for Textures, Sprites, and Vector images before you use them as a background for a visual element in the UI Builder."),(0,i.kt)("h3",{id:"texture"},"Texture"),(0,i.kt)("p",null,"The recommended import settings for a  ",(0,i.kt)("strong",{parentName:"p"},"Texture"),"  image that you use as a background for a visual element:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u503c\uff1a")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Texture Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Non-Power of 2")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Compression")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Alpha Is Transparency")),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Texture Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Editor GUI and Legacy GUI"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Non-Power of 2")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Compression")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Alpha Is Transparency")),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Texture Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Sprite (2D and UI)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Compression")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Alpha Is Transparency")),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Sprite Mode")),(0,i.kt)("td",{parentName:"tr",align:null},"Single")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Mesh Type")),(0,i.kt)("td",{parentName:"tr",align:null},"Tight")))),(0,i.kt)("h3",{id:"sprites"},"Sprites"),(0,i.kt)("p",null,"The recommended import settings for a  ",(0,i.kt)("strong",{parentName:"p"},"Sprite"),"  image that you use as a background for a visual element:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u503c\uff1a")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Texture Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Sprite (2D and UI)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Compression")),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Alpha Is Transparency")),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Sprite Mode")),(0,i.kt)("td",{parentName:"tr",align:null},"Multiple if file contains multiple sprites, Single otherwise")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Mesh Type")),(0,i.kt)("td",{parentName:"tr",align:null},"Tight")))),(0,i.kt)("h3",{id:"vector-images"},"Vector images"),(0,i.kt)("p",null,"The recommended import settings for a SVG  ",(0,i.kt)("strong",{parentName:"p"},"Vector"),"  image that you use as a background for a visual element:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5c5e\u6027\uff1a")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u503c\uff1a")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Generated Asset Type")),(0,i.kt)("td",{parentName:"tr",align:null},"UI Toolkit Vector Image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Tessellation Settings")),(0,i.kt)("td",{parentName:"tr",align:null},"Basic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Target Resolution")),(0,i.kt)("td",{parentName:"tr",align:null},"Lowest value that produces satisfactory results")))),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Tip")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can ",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/presets/default-presets-by-folder"},"apply default presets to Assets by folder")," to automatically set your desired import settings."),(0,i.kt)("li",{parentName:"ul"},"All image types are subject to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.DynamicAtlasSettings.html"},"dynamic atlasing")," if they\u2019re not already in an atlas. (An image is in an atlas if imported as a Sprite with  ",(0,i.kt)("strong",{parentName:"li"},"Sprite Mode"),"  set to  ",(0,i.kt)("strong",{parentName:"li"},"Multiple")," , or if you have manually added it to a ",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/class-sprite-atlas"},"Sprite Atlas")," asset.) You can configure dynamic atlasing in a Panel Settings asset.")),(0,i.kt)("h2",{id:"9-slice-images-with-ui-toolkit"},"9-Slice images with UI Toolkit"),(0,i.kt)("p",null,"Generally, you can only ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites/9slice-sprites"},"9-slice a regular 2D Sprite"),". With UI Toolkit however, you can also 9-slice Texture, Render Texture, and SVG Vector images."),(0,i.kt)("p",null,"To 9-slice an image:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a Sprite image, use ",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sprite-editor"},"Sprite Editor")," or ",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-uss"},"USS"),"."),(0,i.kt)("li",{parentName:"ul"},"For other types of images, use ",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-uss"},"USS"),".")),(0,i.kt)("p",null,"To 9-slice a selected image using USS:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open UI Builder ."),(0,i.kt)("li",{parentName:"ol"},"In the  ",(0,i.kt)("strong",{parentName:"li"},"Background"),"  section in the Inspector, specify the  ",(0,i.kt)("strong",{parentName:"li"},"Left")," ,  ",(0,i.kt)("strong",{parentName:"li"},"Right")," ,  ",(0,i.kt)("strong",{parentName:"li"},"Top")," , and  ",(0,i.kt)("strong",{parentName:"li"},"Bottom"),"  slice values.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ui-builder-slice.png",alt:"Slice options in UI Builder"})),(0,i.kt)("p",null,"Slice options in UI Builder"),(0,i.kt)("p",null,"You can also specify the slice values directly in USS, UXML, or C# files for the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-unity-slice-left"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-unity-slice-right"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-unity-slice-top"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-unity-slice-bottom")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Important")," :")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Slice values set using USS apply only to the image in the associated visual element. The values don\u2019t apply to the same image used in other visual elements, in other UI documents, or in a scene.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unset slice value is zero. For example, if you set the Top,Bottom, and Right slice attributes but leave the Left slice empty, the Left slice is zero.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Slice values set in USS override slice values set in the Sprite Editor. For the example above, no matter what value you added to the Left slice in the Sprite Editor, the Left slice value is zero."))))}g.isMDXComponent=!0}}]);