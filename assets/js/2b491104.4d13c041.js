"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28732],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,c(c({ref:t},o),{},{components:n})):a.createElement(k,c({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),c=["components"],p={id:"scene-templates-creating",title:"\u521b\u5efa\u573a\u666f\u6a21\u677f",slug:"/scene-templates/scene-templates-creating"},i="\u521b\u5efa\u573a\u666f\u6a21\u677f",s={unversionedId:"unity-overview/creating-gameplay/creating-scenes/scene-templates/scene-templates-creating",id:"unity-overview/creating-gameplay/creating-scenes/scene-templates/scene-templates-creating",title:"\u521b\u5efa\u573a\u666f\u6a21\u677f",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u521b\u5efa\u65b0\u7684\u573a\u666f\u6a21\u677f\uff1a",source:"@site/docs/unity-overview/creating-gameplay/creating-scenes/scene-templates/scene-templates-creating.md",sourceDirName:"unity-overview/creating-gameplay/creating-scenes/scene-templates",slug:"/scene-templates/scene-templates-creating",permalink:"/doc-unity-manual/docs/scene-templates/scene-templates-creating",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/creating-gameplay/creating-scenes/scene-templates/scene-templates-creating.md",tags:[],version:"current",frontMatter:{id:"scene-templates-creating",title:"\u521b\u5efa\u573a\u666f\u6a21\u677f",slug:"/scene-templates/scene-templates-creating"},sidebar:"tutorialSidebar",previous:{title:"\u573a\u666f\u6a21\u677f",permalink:"/doc-unity-manual/docs/scene-templates"},next:{title:"\u81ea\u5b9a\u4e49\u65b0\u573a\u666f\u521b\u5efa",permalink:"/doc-unity-manual/docs/scene-templates/scene-templates-customizing-scene-instantiation"}},o={},m=[{value:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f",id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f",level:2},{value:"\u4ece\u73b0\u6709\u573a\u666f\u8d44\u6e90\u521b\u5efa\u4e00\u4e2a\u6a21\u677f",id:"\u4ece\u73b0\u6709\u573a\u666f\u8d44\u6e90\u521b\u5efa\u4e00\u4e2a\u6a21\u677f",level:2},{value:"\u4ece\u5f53\u524d\u573a\u666f\u521b\u5efa\u4e00\u4e2a\u6a21\u677f",id:"\u4ece\u5f53\u524d\u573a\u666f\u521b\u5efa\u4e00\u4e2a\u6a21\u677f",level:2},{value:"\u4ece C# \u811a\u672c\u521b\u5efa\u6a21\u677f",id:"\u4ece-c-\u811a\u672c\u521b\u5efa\u6a21\u677f",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u521b\u5efa\u573a\u666f\u6a21\u677f"},"\u521b\u5efa\u573a\u666f\u6a21\u677f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u521b\u5efa\u65b0\u7684\u573a\u666f\u6a21\u677f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u4e00\u4e2a",(0,l.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%A9%BA%E7%9A%84%E5%9C%BA%E6%99%AF%E6%A8%A1%E6%9D%BF"},"\u7a7a\u6a21\u677f")," \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%8E%E7%8E%B0%E6%9C%89%E5%9C%BA%E6%99%AF%E8%B5%84%E6%BA%90%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%A8%A1%E6%9D%BF"},"\u4ece\u73b0\u6709\u573a\u666f\u8d44\u6e90"),"\u521b\u5efa\u4e00\u4e2a\u6a21\u677f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%8E%E5%BD%93%E5%89%8D%E5%9C%BA%E6%99%AF%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%A8%A1%E6%9D%BF"},"\u4ece\u5f53\u524d\u573a\u666f"),"\u521b\u5efa\u4e00\u4e2a\u6a21\u677f\u3002")),(0,l.kt)("p",null,"\u521b\u5efa\u6a21\u677f\u540e\uff0c\u60a8\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scene-templates/scene-templates-editing"},"\u7f16\u8f91\u5176\u5c5e\u6027"),"\u6216\u8005",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/creating-scenes/scenes-working-with#%E4%BB%8E-new-scene-%E5%AF%B9%E8%AF%9D%E6%A1%86%E5%88%9B%E5%BB%BA%E6%96%B0%E5%9C%BA%E6%99%AF"},"\u4ece\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u63d0\u793a\uff1a")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u4ece\u573a\u666f\u521b\u5efa\u6a21\u677f\u4e4b\u524d\uff0c\u5148\u4f7f\u7528\u573a\u666f\u540d\u79f0\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u7136\u540e\u5c06\u8981\u514b\u9686\u7684\u4efb\u4f55\u8d44\u6e90\u653e\u5165\u5176\u4e2d\u3002\u521b\u5efa\u6a21\u677f\u65f6\uff0cUnity \u4f1a\u81ea\u52a8\u4e3a\u8fd9\u4e9b\u8d44\u6e90\u542f\u7528  ",(0,l.kt)("strong",{parentName:"td"},"Clone")," \u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/scene-templates/scene-templates-editing"},"\u7f16\u8f91\u573a\u666f\u6a21\u677f"),"\u3002")))),(0,l.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f"},"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u7a7a\u7684\u573a\u666f\u6a21\u677f\u5e76\u5728\u4ee5\u540e\u914d\u7f6e\u5b83\u4eec\u3002\u7a7a\u6a21\u677f\u4ec5\u5728\u60a8",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scene-templates/scene-templates-editing"},"\u7f16\u8f91\u5176\u5c5e\u6027"),"\u4e3a\u5176\u5173\u8054\u573a\u666f\u8d44\u6e90\u540e\uff0c\u624d\u4f1a\u51fa\u73b0\u5728 New Scene \u5bf9\u8bdd\u6846\u4e2d\u3002"),(0,l.kt)("p",null,"\u8981\u5728\u5f53\u524d\u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"li"},"Assets ",">"," Create ",">"," Scene Template")," \u3002")),(0,l.kt)("p",null,"\u8981\u5728\u7279\u5b9a\u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f\uff1a"),(0,l.kt)("p",null,"1.\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 Project \u7a97\u53e3\u4e2d\uff0c\u53f3\u952e\u5355\u51fb\u6587\u4ef6\u5939\u4ee5\u6253\u5f00\u4e0a\u4e0b\u6587\u83dc\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Project \u7a97\u53e3\u4e2d\u6253\u5f00\u6587\u4ef6\u5939\uff0c\u7136\u540e\u53f3\u952e\u5355\u51fb\u8d44\u6e90\u7a97\u683c\u4ee5\u6253\u5f00\u4e0a\u4e0b\u6587\u83dc\u5355\u3002 1.\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"li"},"Create ",">"," Scene Template")," \u3002")),(0,l.kt)("h2",{id:"\u4ece\u73b0\u6709\u573a\u666f\u8d44\u6e90\u521b\u5efa\u4e00\u4e2a\u6a21\u677f"},"\u4ece\u73b0\u6709\u573a\u666f\u8d44\u6e90\u521b\u5efa\u4e00\u4e2a\u6a21\u677f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u4efb\u4f55\u73b0\u6709\u573a\u666f\u8f6c\u6362\u4e3a\u573a\u666f\u6a21\u677f\u3002\u4ece\u73b0\u6709\u573a\u666f\u521b\u5efa\u6a21\u677f\u540e\uff0c\u60a8\u53ef\u80fd\u60f3\u8981",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scene-templates/scene-templates-editing"},"\u7f16\u8f91\u5176\u5c5e\u6027"),"\u6307\u5b9a\u4ece\u8be5\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\u65f6 Unity \u514b\u9686\u5b83\u7684\u54ea\u4e9b\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("p",null,"\u8981\u4ece\u73b0\u6709\u573a\u666f\u8d44\u6e90\u521b\u5efa\u6a21\u677f\uff0c\u8bf7\u6253\u5f00 Project \u7a97\u53e3\uff0c\u7136\u540e\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53f3\u952e\u5355\u51fb\u573a\u666f\u8d44\u6e90\u4ee5\u6253\u5f00\u4e0a\u4e0b\u6587\u83dc\u5355\u3002\u7136\u540e\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"li"},"Create ",">"," Scene Template From Scene")," \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u573a\u666f\u8d44\u6e90\uff0c\u7136\u540e\u4ece\u4e3b\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"li"},"Assets ",">"," Create ",">"," Scene Template From Scene")," \u3002")),(0,l.kt)("h2",{id:"\u4ece\u5f53\u524d\u573a\u666f\u521b\u5efa\u4e00\u4e2a\u6a21\u677f"},"\u4ece\u5f53\u524d\u573a\u666f\u521b\u5efa\u4e00\u4e2a\u6a21\u677f"),(0,l.kt)("p",null,"\u8981\u4ece\u5f53\u524d\u573a\u666f\u521b\u5efa\u573a\u666f\u6a21\u677f\uff0c\u8bf7\u4ece\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"File ",">"," Save As Scene Template")," \u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6709\u672a\u4fdd\u5b58\u7684\u66f4\u6539\uff0cUnity \u4f1a\u5728\u4fdd\u5b58\u6a21\u677f\u4e4b\u524d\u63d0\u793a\u60a8\u4fdd\u5b58\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u4ece\u5f53\u524d\u573a\u666f\u521b\u5efa\u6a21\u677f\u540e\uff0c\u60a8\u53ef\u80fd\u60f3\u8981",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scene-templates/scene-templates-editing"},"\u7f16\u8f91\u5176\u5c5e\u6027"),"\u6307\u5b9a\u4ece\u8be5\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\u65f6 Unity \u514b\u9686\u5b83\u7684\u54ea\u4e9b\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h2",{id:"\u4ece-c-\u811a\u672c\u521b\u5efa\u6a21\u677f"},"\u4ece C# \u811a\u672c\u521b\u5efa\u6a21\u677f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece C# \u811a\u672c\u521b\u5efa\u573a\u666f\u6a21\u677f\u3002"),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u573a\u666f\u6a21\u677f\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SceneTemplate.SceneTemplateService.CreateSceneTemplate.html"}," ",(0,l.kt)("strong",{parentName:"a"},"CreateSceneTemplate"),"  \u65b9\u6cd5"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SceneTemplate.CreateSceneTemplate(string sceneTemplatePath)\n")),(0,l.kt)("p",null,"\u8981\u4ece\u73b0\u6709\u573a\u666f\u521b\u5efa\u6a21\u677f\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SceneTemplate.SceneTemplateService.CreateTemplateFromScene.html"}," ",(0,l.kt)("strong",{parentName:"a"},"CreateTemplateFromScene"),"  \u65b9\u6cd5")," \u3002Unity \u81ea\u52a8\u5c06\u573a\u666f\u4e0e\u6a21\u677f\u5173\u8054\uff0c\u5e76\u63d0\u53d6\u573a\u666f\u7684\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SceneTemplate.CreateTemplateFromScene(SceneAsset sourceSceneAsset, string sceneTemplatePath);\n")),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);