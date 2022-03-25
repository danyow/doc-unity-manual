"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97002],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,u=new Array(o);u[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),u=["components"],a={id:"UIE-IMGUI",title:"IMGUI support",slug:"/uielements/uie-imgui"},l="IMGUI support",p={unversionedId:"uitoolkits/uielements/UIE-IMGUI",id:"uitoolkits/uielements/UIE-IMGUI",title:"IMGUI support",description:"\u4f7f\u7528 IMGUIContainer \u53ef\u5c06 IMGUI \u4ee3\u7801\u653e\u5728 VisualElement \u4e2d\u3002\u901a\u5e38\u53ef\u5728 OnGUI() \u4e2d\u6267\u884c\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u53d7\u652f\u6301\u3002",source:"@site/docs/uitoolkits/uielements/uie-imgui.md",sourceDirName:"uitoolkits/uielements",slug:"/uielements/uie-imgui",permalink:"/doc-unity-manual/docs/uielements/uie-imgui",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-imgui.md",tags:[],version:"current",frontMatter:{id:"UIE-IMGUI",title:"IMGUI support",slug:"/uielements/uie-imgui"},sidebar:"tutorialSidebar",previous:{title:"Simple UI Toolkit workflow",permalink:"/doc-unity-manual/docs/uie-getting-started/uie-simple-ui-toolkit-workflow"},next:{title:"\u5e03\u5c40\u5f15\u64ce",permalink:"/doc-unity-manual/docs/uielements/uie-layout-engine"}},c={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"imgui-support"},"IMGUI support"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"IMGUIContainer")," \u53ef\u5c06 IMGUI \u4ee3\u7801\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"VisualElement")," \u4e2d\u3002\u901a\u5e38\u53ef\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"OnGUI()")," \u4e2d\u6267\u884c\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u53d7\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6df7\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"GUILayout")," \u548c UI \u5de5\u5177\u5305\u5e03\u5c40\u6765\u5b89\u6392\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"IMGUIContainer")," \u5e76\u6392\u5217\u5b83\u4eec\u3002\u8bf7\u6ce8\u610f\uff0c\u65e0\u6cd5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"IMGUIContainer")," \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"VisualElement")," \u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIElementsIMGUI.png",alt:"IMGUIContainer \u793a\u4f8b"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IMGUIContainer")," \u793a\u4f8b"))}f.isMDXComponent=!0}}]);