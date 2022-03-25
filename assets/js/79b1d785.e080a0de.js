"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31062],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||u;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),u=(n(67294),n(3905)),o=["components"],l={id:"UIE-LoadingUXMLcsharp",title:"\u4ece C# \u52a0\u8f7d UXML",slug:"/uie-uxml/uie-loading-uxmlcsharp"},a="\u4ece C",s={unversionedId:"uitoolkits/uielements/uie-uxml/UIE-LoadingUXMLcsharp",id:"uitoolkits/uielements/uie-uxml/UIE-LoadingUXMLcsharp",title:"\u4ece C# \u52a0\u8f7d UXML",description:"\u52a0\u8f7d UXML",source:"@site/docs/uitoolkits/uielements/uie-uxml/uie-loading-uxmlcsharp.md",sourceDirName:"uitoolkits/uielements/uie-uxml",slug:"/uie-uxml/uie-loading-uxmlcsharp",permalink:"/doc-unity-manual/docs/uie-uxml/uie-loading-uxmlcsharp",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-uxml/uie-loading-uxmlcsharp.md",tags:[],version:"current",frontMatter:{id:"UIE-LoadingUXMLcsharp",title:"\u4ece C# \u52a0\u8f7d UXML",slug:"/uie-uxml/uie-loading-uxmlcsharp"},sidebar:"tutorialSidebar",previous:{title:"UXML \u5143\u7d20\u53c2\u8003",permalink:"/doc-unity-manual/docs/uie-uxml/uie-element-ref"},next:{title:"UQuery",permalink:"/doc-unity-manual/docs/uie-uxml/uie-uquery"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u4ece-c-\u52a0\u8f7d-uxml"},"\u4ece C# \u52a0\u8f7d UXML"),(0,u.kt)("p",null,"\u8981\u6839\u636e UXML \u6a21\u677f\u6784\u5efa\u7528\u6237\u754c\u9762\uff0c\u5fc5\u987b\u5148\u5c06\u6a21\u677f\u52a0\u8f7d\u5230 ",(0,u.kt)("inlineCode",{parentName:"p"},"VisualTreeAsset")," \u4e2d\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'var template = EditorGUIUtility.Load("path/to/file.uxml") as VisualTreeAsset;\n')),(0,u.kt)("p",null,"\u6216\u8005\u91c7\u7528\u66f4\u76f4\u63a5\u7684\u65b9\u5f0f\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'var template = AssetDatabase.LoadAssetAtPath&lt;VisualTreeAsset&gt;("path/to/file.uxml");\n')),(0,u.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u6784\u5efa\u8868\u793a\u7684\u89c6\u89c9\u6811\u5e76\u5c06\u5176\u9644\u52a0\u5230\u7236\u5143\u7d20\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"template.CloneTree(parentElement, slots);\n")),(0,u.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u8bed\u53e5\u4e2d\uff0c\u6a21\u677f\u4e2d\u7684 ",(0,u.kt)("inlineCode",{parentName:"p"},"&lt;UXML&gt;")," \u5143\u7d20\u88ab\u8f6c\u6362\u4e3a ",(0,u.kt)("inlineCode",{parentName:"p"},"VisualElement"),"\u3002\u76f8\u53cd\uff0c\u5176\u6240\u6709\u5b50\u9879\u90fd\u9644\u52a0\u5230 ",(0,u.kt)("inlineCode",{parentName:"p"},"parentElement")," \u6307\u5b9a\u7684\u5143\u7d20\u3002"),(0,u.kt)("p",null,"\u5b9e\u4f8b\u5316\u6a21\u677f\u540e\uff0c\u5373\u53ef\u4f7f\u7528 UQuery\uff08Unity \u7684 JQuery/Linq \u5b9e\u73b0\uff09\u4ece\u89c6\u89c9\u5143\u7d20\u6811\u4e2d\u68c0\u7d22\u7279\u5b9a\u5143\u7d20\u3002"),(0,u.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u65b0\u7684 ",(0,u.kt)("inlineCode",{parentName:"p"},"EditorWindow")," \u5e76\u52a0\u8f7d UXML \u6587\u4ef6\u4f5c\u4e3a\u5176\u5185\u5bb9\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'\npublic class MyWindow : EditorWindow  {\n    [MenuItem ("Window/My Window")]\n    public static void  ShowWindow () {\n        EditorWindow w = EditorWindow.GetWindow(typeof(MyWindow));\n\n        VisualTreeAsset uiAsset = AssetDatabase.LoadAssetAtPath&lt;VisualTreeAsset&gt;("Assets/MyWindow.uxml");\n        VisualElement ui = uiAsset.CloneTree(null);\n\n        w.rootVisualElement.Add(ui);\n    }\n\n    void OnGUI () {\n        // \u6b64\u5904\u65e0\u9700\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\uff0c\u9664\u975e\u8fd8\u9700\u8981\u5904\u7406 IMGUI \u76f8\u5173\u4e8b\u9879\u3002\n    }\n}\n')),(0,u.kt)("hr",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"2018\u201311\u201302 \u9875\u9762\u5df2\u4fee\u8ba2")))}d.isMDXComponent=!0}}]);