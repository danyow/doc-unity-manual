"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31051],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var i=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=i.createContext({}),s=function(t){var e=i.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=s(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?i.createElement(m,c(c({ref:e},p),{},{components:r})):i.createElement(m,c({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92071:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),c=["components"],o={id:"script-Serialization-Errors",title:"\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef",slug:"/script-serialization/script-serialization-errors"},l="\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef",s={unversionedId:"scripting-section/unity-architecture/script-serialization/script-Serialization-Errors",id:"scripting-section/unity-architecture/script-serialization/script-Serialization-Errors",title:"\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef",description:"\u5e8f\u5217\u5316\u662f\u5c06\u6570\u636e\u7ed3\u6784\u6216\u5bf9\u8c61\u72b6\u6001\u8f6c\u6362\u4e3a Unity \u53ef\u5b58\u50a8\u5e76\u5728\u4ee5\u540e\u53ef\u91cd\u6784\u7684\u683c\u5f0f\u7684\u81ea\u52a8\u8fc7\u7a0b\u3002\uff08\u8bf7\u53c2\u9605\u6709\u5173\u811a\u672c\u5e8f\u5217\u5316\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\uff09",source:"@site/docs/scripting-section/unity-architecture/script-serialization/script-serialization-errors.md",sourceDirName:"scripting-section/unity-architecture/script-serialization",slug:"/script-serialization/script-serialization-errors",permalink:"/docs/script-serialization/script-serialization-errors",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/script-serialization/script-serialization-errors.md",tags:[],version:"current",frontMatter:{id:"script-Serialization-Errors",title:"\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef",slug:"/script-serialization/script-serialization-errors"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316",permalink:"/docs/script-serialization/script-serialization-custom"},next:{title:"\u811a\u672c\u540e\u7aef",permalink:"/docs/scripting-backends"}},p={},u=[{value:"\u4ece\u6784\u9020\u51fd\u6570\u6216\u5b57\u6bb5\u521d\u59cb\u5316\u51fd\u6570\u8c03\u7528 Unity Scripting API",id:"\u4ece\u6784\u9020\u51fd\u6570\u6216\u5b57\u6bb5\u521d\u59cb\u5316\u51fd\u6570\u8c03\u7528-unity-scripting-api",level:4},{value:"\u5728\u53cd\u5e8f\u5217\u5316\u671f\u95f4\u8c03\u7528 Unity Scripting API",id:"\u5728\u53cd\u5e8f\u5217\u5316\u671f\u95f4\u8c03\u7528-unity-scripting-api",level:4},{value:"\u7ebf\u7a0b\u5b89\u5168\u7684 Unity Scripting API",id:"\u7ebf\u7a0b\u5b89\u5168\u7684-unity-scripting-api",level:4}],d={toc:u};function f(t){var e=t.components,r=(0,n.Z)(t,c);return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef"},"\u811a\u672c\u5e8f\u5217\u5316\u9519\u8bef"),(0,a.kt)("p",null,"\u5e8f\u5217\u5316\u662f\u5c06\u6570\u636e\u7ed3\u6784\u6216\u5bf9\u8c61\u72b6\u6001\u8f6c\u6362\u4e3a Unity \u53ef\u5b58\u50a8\u5e76\u5728\u4ee5\u540e\u53ef\u91cd\u6784\u7684\u683c\u5f0f\u7684\u81ea\u52a8\u8fc7\u7a0b\u3002\uff08\u8bf7\u53c2\u9605\u6709\u5173",(0,a.kt)("a",{parentName:"p",href:"/docs/script-serialization"},"\u811a\u672c\u5e8f\u5217\u5316"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\uff09"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u811a\u672c\u5e8f\u5217\u5316\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002\u4e0b\u9762\u5217\u51fa\u4e86\u5176\u4e2d\u4e00\u4e9b\u9519\u8bef\u7684\u4fee\u590d\u65b9\u6cd5\u3002"),(0,a.kt)("h4",{id:"\u4ece\u6784\u9020\u51fd\u6570\u6216\u5b57\u6bb5\u521d\u59cb\u5316\u51fd\u6570\u8c03\u7528-unity-scripting-api"},"\u4ece\u6784\u9020\u51fd\u6570\u6216\u5b57\u6bb5\u521d\u59cb\u5316\u51fd\u6570\u8c03\u7528 Unity Scripting API"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.html"},"MonoBehaviour")," \u6784\u9020\u51fd\u6570\u6216\u5b57\u6bb5\u521d\u59cb\u5316\u51fd\u6570\u4e2d\u8c03\u7528\u8bf8\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GameObject.Find.html"},"GameObject.Find")," \u4e4b\u7c7b\u7684\u811a\u672c API \u4f1a\u89e6\u53d1\u9519\u8bef\uff1a\u201cFind is not allowed to be called from a MonoBehaviour constructor (or instance field initializer), call in in Awake or Start instead.\u201d"),(0,a.kt)("p",null,"\u89e3\u51b3\u6b64\u95ee\u9898\u7684\u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.Start.html"},"MonoBehaviour.Start")," \u4e2d\u800c\u4e0d\u662f\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u811a\u672c API\u3002"),(0,a.kt)("h4",{id:"\u5728\u53cd\u5e8f\u5217\u5316\u671f\u95f4\u8c03\u7528-unity-scripting-api"},"\u5728\u53cd\u5e8f\u5217\u5316\u671f\u95f4\u8c03\u7528 Unity Scripting API"),(0,a.kt)("p",null,"\u4ece\u6807\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Serializable")," \u7684\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u8bf8\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GameObject.Find.html"},"GameObject.Find")," \u4e4b\u7c7b\u7684\u811a\u672c API \u4f1a\u89e6\u53d1\u9519\u8bef\uff1a\u201cFind is not allowed to be called during serialization, call it from Awake or Start instead.\u201d"),(0,a.kt)("p",null,"\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8bf7\u7f16\u8f91\u4ee3\u7801\uff0c\u786e\u4fdd\u4e0d\u4f1a\u5728\u4efb\u4f55\u5e8f\u5217\u5316\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u4e2d\u8c03\u7528\u4efb\u4f55\u811a\u672c API\u3002"),(0,a.kt)("h4",{id:"\u7ebf\u7a0b\u5b89\u5168\u7684-unity-scripting-api"},"\u7ebf\u7a0b\u5b89\u5168\u7684 Unity Scripting API"),(0,a.kt)("p",null,"\u5927\u591a\u6570\u811a\u672c API \u90fd\u53d7\u4e0a\u9762\u5217\u51fa\u7684\u9650\u5236\u6240\u5f71\u54cd\u3002\u53ea\u6709\u90e8\u5206 Unity Scripting API \u514d\u53d7\u5f71\u54cd\uff0c\u53ef\u4ece\u4efb\u4f55\u4f4d\u7f6e\u63a5\u53d7\u8c03\u7528\u3002\u5b83\u4eec\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Debug.Log.html"},"Debug.Log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mathf.html"},"Mathf")," \u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u72ec\u7acb\u7ed3\u6784\uff1b\u4f8b\u5982\uff0c\u50cf ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Vector3.html"},"Vector3")," \u548c ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Quaternion.html"},"Quaternion")," \u8fd9\u6837\u7684\u6570\u5b66\u7ed3\u6784")),(0,a.kt)("p",null,"\u4e3a\u4e86\u964d\u4f4e\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\u51fa\u9519\u7684\u98ce\u9669\uff0c\u53ea\u80fd\u8c03\u7528\u4e0d\u9700\u8981\u5728 Unity \u672c\u8eab\u4e2d\u83b7\u53d6\u6216\u8bbe\u7f6e\u6570\u636e\u7684\u72ec\u7acb API \u65b9\u6cd5\u3002\u4ec5\u5728\u6ca1\u6709\u5176\u4ed6\u9009\u62e9\u7684\u60c5\u51b5\u4e0b\u624d\u8c03\u7528\u5b83\u4eec\u3002 ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u2022 2017\u201305\u201315 \u9875\u9762\u5df2\u53d1\u5e03",(0,a.kt)("br",null)))}f.isMDXComponent=!0}}]);