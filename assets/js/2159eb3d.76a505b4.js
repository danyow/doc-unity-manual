"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46258],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34907:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={id:"Tilemap-ScriptableBrushes",title:"\u53ef\u7f16\u7a0b\u753b\u7b14",slug:"/tilemap-scriptable-brushes"},l="\u53ef\u7f16\u7a0b\u753b\u7b14",u={unversionedId:"unity2d/class-tilemap/tilemap-scriptable-brushes/Tilemap-ScriptableBrushes",id:"unity2d/class-tilemap/tilemap-scriptable-brushes/Tilemap-ScriptableBrushes",title:"\u53ef\u7f16\u7a0b\u753b\u7b14",description:"\u521b\u5efa\u53ef\u7f16\u7a0b\u753b\u7b14",source:"@site/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes.md",sourceDirName:"unity2d/class-tilemap/tilemap-scriptable-brushes",slug:"/tilemap-scriptable-brushes",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes.md",tags:[],version:"current",frontMatter:{id:"Tilemap-ScriptableBrushes",title:"\u53ef\u7f16\u7a0b\u753b\u7b14",slug:"/tilemap-scriptable-brushes"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u5bfc\u5165\u548c\u51c6\u5907\u7cbe\u7075",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-sprites-import"},next:{title:"\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example"}},p={},c=[{value:"\u521b\u5efa\u53ef\u7f16\u7a0b\u753b\u7b14",id:"\u521b\u5efa\u53ef\u7f16\u7a0b\u753b\u7b14",level:2}],h={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u53ef\u7f16\u7a0b\u753b\u7b14"},"\u53ef\u7f16\u7a0b\u753b\u7b14"),(0,i.kt)("h2",{id:"\u521b\u5efa\u53ef\u7f16\u7a0b\u753b\u7b14"},"\u521b\u5efa\u53ef\u7f16\u7a0b\u753b\u7b14"),(0,i.kt)("p",null,"Create a new class inheriting from ",(0,i.kt)("inlineCode",{parentName:"p"},"GridBrushBase")," (or any useful subclasses of ",(0,i.kt)("inlineCode",{parentName:"p"},"GridBrushBase")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"GridBrush"),"). Override any required methods for your new Brush class. The following are the usual methods you would override:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Paint")," allows the Brush to add items onto the target Grid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Erase")," allows the Brush to remove items from the target Grid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FloodFill")," allows the Brush to fill items onto the target Grid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Rotate")," \u65cb\u8f6c\u753b\u7b14\u4e2d\u8bbe\u7f6e\u7684\u9879\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Flip")," \u7ffb\u8f6c\u753b\u7b14\u4e2d\u8bbe\u7f6e\u7684\u9879\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptableObject.CreateInstance&lt;(Your Brush Class&gt;()")," \u521b\u5efa\u8be5\u65b0\u7c7b\u7684\u5b9e\u4f8b\u3002\u53ef\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetDatabase.CreateAsset()")," \u5c06\u6b64\u65b0\u5b9e\u4f8b\u8f6c\u6362\u4e3a Editor \u4e2d\u7684\u8d44\u6e90\u4ee5\u4fbf\u91cd\u590d\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4e3a\u753b\u7b14\u521b\u5efa\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u3002\u8fd9\u4e0e\u811a\u672c\u5316\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u7684\u5de5\u4f5c\u65b9\u5f0f\u76f8\u540c\u3002\u4ee5\u4e0b\u662f\u5728\u521b\u5efa\u81ea\u5b9a\u4e49\u7f16\u8f91\u5668\u65f6\u8981\u91cd\u5199\u7684\u4e3b\u8981\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can override ",(0,i.kt)("inlineCode",{parentName:"li"},"OnPaintInspectorGUI")," to have an Inspector window appear on the Palette when the Brush is selected to provide additional behaviour when painting."),(0,i.kt)("li",{parentName:"ul"},"You can also override ",(0,i.kt)("inlineCode",{parentName:"li"},"OnPaintSceneGUI")," to add additional behaviours when painting on the ",(0,i.kt)("inlineCode",{parentName:"li"},"SceneView"),"."),(0,i.kt)("li",{parentName:"ul"},"You can also override ",(0,i.kt)("inlineCode",{parentName:"li"},"validTargets")," to have a custom list of targets which the Brush can interact with. This list of targets is shown as a dropdown list in the Palette window.")),(0,i.kt)("p",null,"When created, the Scriptable Brush is listed in the  ",(0,i.kt)("strong",{parentName:"p"},"Brushes"),"  dropdown menu in the Palette window. By default, an instance of the Scriptable Brush script is instantiated and stored in the ",(0,i.kt)("em",{parentName:"p"},"Library")," folder of your project. Any modifications to the brush properties are stored in that instance. If you want to have multiple copies of that Brush with different properties, you can instantiate the Brush as Assets in your project. These Brush Assets are listed separately in the Brush dropdown menu."),(0,i.kt)("p",null,"You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomGridBrush")," attribute to your Scriptable Brush class. This allows you to configure the behavior of the Brush in the Palette window. The ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomGridBrush")," attribute has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HideAssetInstances")," - Set this to true to hide all copies of created Brush Assets in the Palette window. This is useful when you want only the default instance to show up in the Brush dropdown menu in the Tile Palette window."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HideDefaultInstances")," - Set this to true to hide the default instance of the Brush in the Palette window. This is useful when you want only created Assets to show up in the Brush dropdown menu in the Tile Palette window."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultBrush")," - Set this to true to set the default instance of the Brush as the default Brush in the project. This makes this Brush the default selected Brush whenever the project starts.  ",(0,i.kt)("strong",{parentName:"li"},"Note:"),"  Only set one Scriptable Brush as the Default Brush. Setting more than one Default Brush may cause your Scriptable Brushes to behave incorrectly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DefaultName")," - Set a name to this to have the Brush dropdown menu use the set name as the name for the Brush instead of the name of the Brush\u2019s class.")),(0,i.kt)("p",null,"If you want your Scriptable Brush class to use only certain tools, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"BrushTools")," attribute to your class with a list of compatible ",(0,i.kt)("inlineCode",{parentName:"p"},"TilemapEditorTools")," types. This ensures that your Scriptable Brush only activates with these specific tools from the Tile Palette toolbar."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  Remember to save your project to ensure that your new Brush Assets are saved!"))}d.isMDXComponent=!0}}]);