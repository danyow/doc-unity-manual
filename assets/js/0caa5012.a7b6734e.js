"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38328],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||c;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),c=(n(67294),n(3905)),i=["components"],l={id:"scenes-working-with",title:"\u521b\u5efa\u3001\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f",slug:"/creating-scenes/scenes-working-with"},p="\u521b\u5efa\u3001\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f",s={unversionedId:"unity-overview/creating-gameplay/creating-scenes/scenes-working-with",id:"unity-overview/creating-gameplay/creating-scenes/scenes-working-with",title:"\u521b\u5efa\u3001\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f",description:"\u672c\u9875\u8bf4\u660e\u5982\u4f55\u521b\u5efa\u3001\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f\u3002",source:"@site/docs/unity-overview/creating-gameplay/creating-scenes/scenes-working-with.md",sourceDirName:"unity-overview/creating-gameplay/creating-scenes",slug:"/creating-scenes/scenes-working-with",permalink:"/docs/creating-scenes/scenes-working-with",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/creating-gameplay/creating-scenes/scenes-working-with.md",tags:[],version:"current",frontMatter:{id:"scenes-working-with",title:"\u521b\u5efa\u3001\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f",slug:"/creating-scenes/scenes-working-with"},sidebar:"tutorialSidebar",previous:{title:"\u573a\u666f\u6a21\u677f\u8bbe\u7f6e",permalink:"/docs/scene-templates/scene-templates-settings"},next:{title:"\u8de8\u5e73\u53f0\u6ce8\u610f\u4e8b\u9879",permalink:"/docs/creating-gameplay/cross-platform-considerations"}},o={},u=[{value:"\u521b\u5efa\u65b0\u573a\u666f",id:"\u521b\u5efa\u65b0\u573a\u666f",level:2},{value:"\u4ece New Scene \u5bf9\u8bdd\u6846\u521b\u5efa\u65b0\u573a\u666f",id:"\u4ece-new-scene-\u5bf9\u8bdd\u6846\u521b\u5efa\u65b0\u573a\u666f",level:3},{value:"\u4ece\u83dc\u5355\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f\uff1a",id:"\u4ece\u83dc\u5355\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f",level:3},{value:"\u4ece Project \u7a97\u53e3\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f",id:"\u4ece-project-\u7a97\u53e3\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f",level:3},{value:"\u4ece C# \u811a\u672c\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f",id:"\u4ece-c-\u811a\u672c\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f",level:3},{value:"\u65b0\u573a\u666f\u7684\u4e8b\u4ef6",id:"\u65b0\u573a\u666f\u7684\u4e8b\u4ef6",level:4},{value:"\u52a0\u8f7d\u573a\u666f",id:"\u52a0\u8f7d\u573a\u666f",level:2},{value:"\u4e00\u6b21\u6253\u5f00\u591a\u4e2a\u573a\u666f",id:"\u4e00\u6b21\u6253\u5f00\u591a\u4e2a\u573a\u666f",level:3},{value:"\u4fdd\u5b58\u573a\u666f",id:"\u4fdd\u5b58\u573a\u666f",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u521b\u5efa\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f"},"\u521b\u5efa\u3001\u52a0\u8f7d\u548c\u4fdd\u5b58\u573a\u666f"),(0,c.kt)("p",null,"\u672c\u9875\u8bf4\u660e\u5982\u4f55",(0,c.kt)("a",{parentName:"p",href:"#%E5%88%9B%E5%BB%BA"},"\u521b\u5efa"),"\u3001",(0,c.kt)("a",{parentName:"p",href:"#%E5%8A%A0%E8%BD%BD%E5%9C%BA%E6%99%AF"},"\u52a0\u8f7d"),"\u548c",(0,c.kt)("a",{parentName:"p",href:"#%E4%BF%9D%E5%AD%98%E5%9C%BA%E6%99%AF"},"\u4fdd\u5b58"),"\u573a\u666f\u3002"),(0,c.kt)("h2",{id:"\u521b\u5efa\u65b0\u573a\u666f"},"\u521b\u5efa\u65b0\u573a\u666f"),(0,c.kt)("p",null,"\u53ef\u901a\u8fc7\u591a\u79cd\u65b9\u6cd5\u6765\u521b\u5efa\u65b0\u573a\u666f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"li",href:"#%E4%BB%8E-new-scene-%E5%AF%B9%E8%AF%9D%E6%A1%86%E5%88%9B%E5%BB%BA%E6%96%B0%E5%9C%BA%E6%99%AF"},"New Scene \u5bf9\u8bdd\u6846"),"\u4ece\u7279\u5b9a\u573a\u666f\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,c.kt)("a",{parentName:"li",href:"#%E4%BB%8E%E8%8F%9C%E5%8D%95%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E5%9C%BA%E6%99%AF%EF%BC%9A"},"\u83dc\u5355"),"\u6216\u8005 ",(0,c.kt)("a",{parentName:"li",href:"#%E4%BB%8E-project-%E7%AA%97%E5%8F%A3%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E5%9C%BA%E6%99%AF"},"Project \u7a97\u53e3"),"\u4ece\u9879\u76ee\u7684 Basic \u573a\u666f\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\uff0c\u65e0\u9700\u6253\u5f00 New Scene \u5bf9\u8bdd\u6846\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u76f4\u63a5",(0,c.kt)("a",{parentName:"li",href:"#%E4%BB%8E-c-%E8%84%9A%E6%9C%AC%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E5%9C%BA%E6%99%AF"},"\u901a\u8fc7\u4e00\u4e2a C# \u811a\u672c"),"\u4ece\u7279\u5b9a\u6a21\u677f\u521b\u5efa\u573a\u666f\u3002")),(0,c.kt)("p",null,"Unity \u4ece\u573a\u666f\u6a21\u677f\u521b\u5efa\u6bcf\u4e2a\u65b0\u573a\u666f\u3002\u6709\u5173\u521b\u5efa\u548c\u7ba1\u7406\u573a\u666f\u6a21\u677f\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/docs/scene-templates"},"\u573a\u666f\u6a21\u677f"),"\u3002"),(0,c.kt)("h3",{id:"\u4ece-new-scene-\u5bf9\u8bdd\u6846\u521b\u5efa\u65b0\u573a\u666f"},"\u4ece New Scene \u5bf9\u8bdd\u6846\u521b\u5efa\u65b0\u573a\u666f"),(0,c.kt)("p",null,"\u4f7f\u7528 New Scene \u5bf9\u8bdd\u6846\u5728\u9879\u76ee\u4e2d\u4ece\u7279\u5b9a\u573a\u666f\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 New Scene \u5bf9\u8bdd\u6846\u6765\u67e5\u627e\u548c\u7ba1\u7406\u573a\u666f\u6a21\u677f\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,c.kt)("a",{parentName:"p",href:"/docs/creating-scenes#new-scene-%E5%AF%B9%E8%AF%9D"},"New Scene \u5bf9\u8bdd\u6846"),"\u3002"),(0,c.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ece\u83dc\u5355 ( ",(0,c.kt)("strong",{parentName:"p"},"File"),"  ",">","  ",(0,c.kt)("strong",{parentName:"p"},"New Scene")," ) \u6216\u4f7f\u7528\u5feb\u6377\u65b9\u5f0f ( ",(0,c.kt)("strong",{parentName:"p"},"Ctrl/Cmd + n")," ) \u521b\u5efa\u65b0\u573a\u666f\u65f6\uff0c\u5c06\u6253\u5f00 New Scene \u5bf9\u8bdd\u3002"),(0,c.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u573a\u666f\uff1a"),(0,c.kt)("p",null,"1.\u4ece\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u6a21\u677f\u3002 1.\u5982\u679c\u60a8\u5e0c\u671b Unity \u4ee5\u9644\u52a0\u65b9\u5f0f\u52a0\u8f7d\u65b0\u573a\u666f\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u6ce8\u91ca\uff09\uff0c\u8bf7\u542f\u7528  ",(0,c.kt)("strong",{parentName:"p"},"Load Additively")," \u3002 1.\u5355\u51fb  ",(0,c.kt)("strong",{parentName:"p"},"Create"),"  \u4ece\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\u3002"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},(0,c.kt)("strong",{parentName:"th"},"\u6ce8\u610f\uff1a")))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"\u9644\u52a0\u65b9\u5f0f\u52a0\u8f7d\u610f\u5473\u7740 Unity \u4f1a\u5728\u5df2\u6253\u5f00\u7684\u4efb\u4f55\u5176\u4ed6\u573a\u666f\u4e4b\u5916\u52a0\u8f7d\u573a\u666f\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"td",href:"/docs/creating-scenes/multi-scene-editing"},"\u591a\u573a\u666f\u7f16\u8f91"),"\u3002")))),(0,c.kt)("p",null,"\u5982\u679c\u6a21\u677f\u6ca1\u6709\u4efb\u4f55",(0,c.kt)("a",{parentName:"p",href:"/docs/scene-templates#%E6%A8%A1%E6%9D%BF%E5%92%8C%E5%9C%BA%E6%99%AF%E4%BE%9D%E8%B5%96%E9%A1%B9"},"\u53ef\u514b\u9686\u7684\u4f9d\u8d56\u9879"),"\uff0cUnity \u4f1a\u5728\u5185\u5b58\u4e2d\u52a0\u8f7d\u65b0\u573a\u666f\uff0c\u4f46\u4e0d\u4fdd\u5b58\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u6a21\u677f\u6709",(0,c.kt)("a",{parentName:"p",href:"/docs/scene-templates#%E6%A8%A1%E6%9D%BF%E5%92%8C%E5%9C%BA%E6%99%AF%E4%BE%9D%E8%B5%96%E9%A1%B9"},"\u53ef\u514b\u9686\u7684\u4f9d\u8d56\u9879"),"\uff0cUnity \u4f1a\u63d0\u793a\u60a8\u5728\u9879\u76ee\u4e2d\u9009\u62e9\u4e00\u4e2a\u4f4d\u7f6e\u4fdd\u5b58\u573a\u666f\u3002\u5f53\u60a8\u4fdd\u5b58\u573a\u666f\u65f6\uff0cUnity \u4f1a\u5728\u76f8\u540c\u4f4d\u7f6e\u521b\u5efa\u4e00\u4e2a\u4e0e\u65b0\u573a\u666f\u540c\u540d\u7684\u6587\u4ef6\u5939\u3002\u7136\u540e\u5c06\u53ef\u514b\u9686\u7684\u4f9d\u8d56\u9879\u514b\u9686\u5230\u65b0\u6587\u4ef6\u5939\u4e2d\uff0c\u5e76\u66f4\u65b0\u65b0\u573a\u666f\u4ee5\u4f7f\u7528\u514b\u9686\u7684\u8d44\u6e90\u800c\u4e0d\u662f\u6a21\u677f\u573a\u666f\u4f7f\u7528\u7684\u539f\u59cb\u8d44\u6e90\u3002"),(0,c.kt)("h3",{id:"\u4ece\u83dc\u5355\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f"},"\u4ece\u83dc\u5355\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f\uff1a"),(0,c.kt)("p",null,"\u4f7f\u7528\u83dc\u5355 ( ",(0,c.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,c.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,c.kt)("strong",{parentName:"p"},"Scene")," ) \u521b\u5efa\u65b0\u573a\u666f\uff0c\u65e0\u9700\u6253\u5f00 New Scene \u5bf9\u8bdd\u6846\u3002"),(0,c.kt)("p",null,"\u5f53\u60a8\u4ece\u83dc\u5355\u521b\u5efa\u65b0\u573a\u666f\u65f6\uff0cUnity \u4f1a\u81ea\u52a8\u590d\u5236\u9879\u76ee\u7684 Basic \u6a21\u677f\uff0c\u5e76\u5c06\u65b0\u573a\u666f\u6dfb\u52a0\u5230 Project \u7a97\u53e3\u4e2d\u5f53\u524d\u6253\u5f00\u7684\u6587\u4ef6\u5939\u4e2d\u3002"),(0,c.kt)("h3",{id:"\u4ece-project-\u7a97\u53e3\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f"},"\u4ece Project \u7a97\u53e3\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f"),(0,c.kt)("p",null,"\u4f7f\u7528 Project \u7a97\u53e3\u4e2d\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u521b\u5efa\u65b0\u573a\u666f\uff0c\u65e0\u9700\u6253\u5f00 New Scene \u5bf9\u8bdd\u6846\u3002"),(0,c.kt)("p",null,"1.\u5bfc\u822a\u5230\u8981\u521b\u5efa\u65b0\u573a\u666f\u7684\u6587\u4ef6\u5939\u3002 2.\u53f3\u952e\u5355\u51fb\u5de6\u4fa7\u7a97\u683c\u4e2d\u7684\u6587\u4ef6\u5939\uff0c\u6216\u53f3\u952e\u5355\u51fb\u53f3\u4fa7\u7a97\u683c\u4e2d\u7684\u7a7a\u767d\u533a\u57df\uff0c\u7136\u540e\u4ece\u4e0a\u4e0b\u6587\u83dc\u5355\u9009\u62e9  ",(0,c.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,c.kt)("strong",{parentName:"p"},"Scene")," \u3002"),(0,c.kt)("p",null,"\u5f53\u60a8\u4ece\u83dc\u5355\u521b\u5efa\u65b0\u573a\u666f\u65f6\uff0cUnity \u4f1a\u81ea\u52a8\u590d\u5236\u9879\u76ee\u7684 Basic \u6a21\u677f\uff0c\u5e76\u5c06\u65b0\u573a\u666f\u6dfb\u52a0\u5230\u9009\u5b9a\u7684\u6587\u4ef6\u5939\u4e2d\u3002"),(0,c.kt)("h3",{id:"\u4ece-c-\u811a\u672c\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f"},"\u4ece C# \u811a\u672c\u521b\u5efa\u4e00\u4e2a\u65b0\u573a\u666f"),(0,c.kt)("p",null,"\u8981\u4ece C# \u811a\u672c\u4f7f\u7528\u7279\u5b9a\u573a\u666f\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\uff0c\u8bf7\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SceneTemplate.SceneTemplateService.Instantiate.html"}," ",(0,c.kt)("strong",{parentName:"a"},"Instantiate"),"  \u65b9\u6cd5"),"\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Tuple&lt;Scene, SceneAsset&gt; SceneTemplate.Instantiate(SceneTemplateAsset sceneTemplate, bool loadAdditively, string newSceneOutputPath = null);\n")),(0,c.kt)("p",null,"\u8be5 ",(0,c.kt)("inlineCode",{parentName:"p"},"Instantiate")," \u65b9\u6cd5\u4ece\u573a\u666f\u6a21\u677f\u4e2d\u5b9e\u4f8b\u5316\u4e00\u4e2a\u65b0\u573a\u666f\u3002\u5b83\u8fd4\u56de\u65b0\u521b\u5efa\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"Scene")," \u53e5\u67c4\uff0c\u53ca\u5176\u5339\u914d\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"SceneAsset"),"\u3002\u60a8\u53ef\u4ee5\u4ee5\u9644\u52a0\u65b9\u5f0f\u521b\u5efa\u6b64\u573a\u666f\u3002\u5982\u679c\u573a\u666f\u5305\u542b",(0,c.kt)("a",{parentName:"p",href:"/docs/scene-templates#%E6%A8%A1%E6%9D%BF%E5%92%8C%E5%9C%BA%E6%99%AF%E4%BE%9D%E8%B5%96%E9%A1%B9"},"\u9700\u8981\u514b\u9686\u7684\u8d44\u6e90"),"\uff0c\u60a8\u5fc5\u987b\u4e3a Unity \u63d0\u4f9b\u5c06\u573a\u666f\u4fdd\u5b58\u5230\u78c1\u76d8\u7684\u8def\u5f84\u3002"),(0,c.kt)("h4",{id:"\u65b0\u573a\u666f\u7684\u4e8b\u4ef6"},"\u65b0\u573a\u666f\u7684\u4e8b\u4ef6"),(0,c.kt)("p",null,"\u5f53\u60a8\u4ece\u6a21\u677f\u521b\u5efa\u65b0\u573a\u666f\u65f6\uff0c\u65e0\u8bba\u662f\u4ece\u811a\u672c\u8fd8\u662f\u4f7f\u7528 New Scene \u5bf9\u8bdd\u6846\uff0cUnity \u90fd\u4f1a\u89e6\u53d1\u4e00\u4e2a",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/SceneTemplate.SceneTemplateService-newSceneTemplateInstantiated.html"},"\u4e8b\u4ef6"),"\u3002Unity \u5728\u6a21\u677f\u5b9e\u4f8b\u5316\u4e4b\u540e\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\uff0c\u7136\u540e\u8fd8\u4f1a\u89e6\u53d1 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/SceneManagement.EditorSceneManager-newSceneCreated.html"},(0,c.kt)("inlineCode",{parentName:"a"},"EditorSceneManager.newSceneCreated"))," \u6216 ",(0,c.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/SceneManagement.EditorSceneManager-sceneOpened.html"},(0,c.kt)("inlineCode",{parentName:"a"},"EditorSceneManager.sceneOpened"))," \u4e8b\u4ef6\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\npublic class SceneTemplate\n{\n    public delegate void NewTemplateInstantiated(SceneTemplateAsset sceneTemplateAsset, Scene scene, SceneAsset sceneAsset, bool additiveLoad);\n\n    public static event NewTemplateInstantiated newSceneTemplateInstantiated;\n}\n")),(0,c.kt)("h2",{id:"\u52a0\u8f7d\u573a\u666f"},"\u52a0\u8f7d\u573a\u666f"),(0,c.kt)("p",null,"\u8981\u6253\u5f00\u573a\u666f\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5728 Project \u7a97\u53e3\u4e2d\uff0c\u53cc\u51fb\u8be5\u573a\u666f\u8d44\u6e90\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u4ece\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,c.kt)("strong",{parentName:"li"},"File"),"  ",">","  ",(0,c.kt)("strong",{parentName:"li"},"New Scene")," "),(0,c.kt)("li",{parentName:"ul"},"\u4ece\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,c.kt)("strong",{parentName:"li"},"File"),"  ",">","  ",(0,c.kt)("strong",{parentName:"li"},"Recent Scenes"),"  ",">","  ",(0,c.kt)("strong",{parentName:"li"},"*","[","\u573a\u666f\u540d\u79f0","]")," *")),(0,c.kt)("p",null,"\u5982\u679c\u5f53\u524d\u573a\u666f\u5305\u542b\u672a\u4fdd\u5b58\u7684\u66f4\u6539\uff0cUnity \u4f1a\u8be2\u95ee\u662f\u8981\u4fdd\u5b58\u8be5\u573a\u666f\u8fd8\u662f\u4e22\u5f03\u66f4\u6539\u3002"),(0,c.kt)("h3",{id:"\u4e00\u6b21\u6253\u5f00\u591a\u4e2a\u573a\u666f"},"\u4e00\u6b21\u6253\u5f00\u591a\u4e2a\u573a\u666f"),(0,c.kt)("p",null,"\u60a8\u53ef\u4ee5\u540c\u65f6\u6253\u5f00\u591a\u4e2a\u573a\u666f\u8fdb\u884c\u7f16\u8f91\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/docs/creating-scenes/multi-scene-editing"},"\u591a\u573a\u666f\u7f16\u8f91"),"\u3002"),(0,c.kt)("h2",{id:"\u4fdd\u5b58\u573a\u666f"},"\u4fdd\u5b58\u573a\u666f"),(0,c.kt)("p",null,"\u8981\u4fdd\u5b58\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u573a\u666f\uff0c\u8bf7\u4ece\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,c.kt)("strong",{parentName:"p"},"File"),"  ",">","  ",(0,c.kt)("strong",{parentName:"p"},"Save Scene")," \uff0c\u6216\u6309 Ctrl + S (Windows) \u6216 Cmd + S (macOS)\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SceneAssetsInProjectView_01.png",alt:"\u5df2\u4fdd\u5b58\u7684\u573a\u666f\u8d44\u6e90\u5728 Project \u7a97\u53e3\u4e2d\u53ef\u89c1"})),(0,c.kt)("p",null,"\u5df2\u4fdd\u5b58\u7684\u573a\u666f\u8d44\u6e90\u5728 Project \u7a97\u53e3\u4e2d\u53ef\u89c1"))}d.isMDXComponent=!0}}]);