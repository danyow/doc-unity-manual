"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85429],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=o(n),g=l,k=c["".concat(d,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92024:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],p={id:"StyledText",title:"\u5bcc\u6587\u672c",slug:"/com-unity-ugui/styled-text"},d="\u5bcc\u6587\u672c",o={unversionedId:"uitoolkits/com-unity-ugui/StyledText",id:"uitoolkits/com-unity-ugui/StyledText",title:"\u5bcc\u6587\u672c",description:"UI \u5143\u7d20\u548c\u6587\u672c\u7f51\u683c\u7684\u6587\u672c\u53ef\u4ee5\u5305\u542b\u591a\u79cd\u5b57\u4f53\u6837\u5f0f\u548c\u5927\u5c0f\u3002Text\u3001GUIStyle \u548c TextMesh \u7c7b\u90fd\u5177\u6709  Rich Text  \u8bbe\u7f6e\uff0c\u6b64\u8bbe\u7f6e\u4f1a\u6307\u793a Unity \u5728\u6587\u672c\u4e2d\u67e5\u627e\u6807\u8bb0\u6807\u7b7e\u3002Debug.Log \u51fd\u6570\u4e5f\u53ef\u4f7f\u7528\u8fd9\u4e9b\u6807\u8bb0\u6807\u7b7e\u6765\u589e\u5f3a\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\u62a5\u544a\u3002\u6807\u7b7e\u4e0d\u4f1a\u663e\u793a\uff0c\u4f46\u4f1a\u6307\u793a\u8981\u5e94\u7528\u4e8e\u6587\u672c\u7684\u6837\u5f0f\u66f4\u6539\u3002",source:"@site/docs/uitoolkits/com-unity-ugui/styled-text.md",sourceDirName:"uitoolkits/com-unity-ugui",slug:"/com-unity-ugui/styled-text",permalink:"/docs/com-unity-ugui/styled-text",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/com-unity-ugui/styled-text.md",tags:[],version:"current",frontMatter:{id:"StyledText",title:"\u5bcc\u6587\u672c",slug:"/com-unity-ugui/styled-text"},sidebar:"tutorialSidebar",previous:{title:"\u652f\u6301\u7684\u4e8b\u4ef6",permalink:"/docs/event-system/supported-events"},next:{title:"\u52a8\u753b\u96c6\u6210",permalink:"/docs/com-unity-ugui/uianimation-integration"}},m={},u=[{value:"\u6807\u8bb0\u683c\u5f0f",id:"\u6807\u8bb0\u683c\u5f0f",level:2},{value:"\u5d4c\u5957\u7684\u5143\u7d20",id:"\u5d4c\u5957\u7684\u5143\u7d20",level:3},{value:"\u6807\u7b7e\u53c2\u6570",id:"\u6807\u7b7e\u53c2\u6570",level:3},{value:"\u652f\u6301\u7684\u6807\u7b7e",id:"\u652f\u6301\u7684\u6807\u7b7e",level:2},{value:"\u652f\u6301\u7684\u989c\u8272",id:"\u652f\u6301\u7684\u989c\u8272",level:3},{value:"Editor GUI",id:"editor-gui",level:2}],c={toc:u};function g(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5bcc\u6587\u672c"},"\u5bcc\u6587\u672c"),(0,r.kt)("p",null,"UI \u5143\u7d20\u548c\u6587\u672c\u7f51\u683c\u7684\u6587\u672c\u53ef\u4ee5\u5305\u542b\u591a\u79cd\u5b57\u4f53\u6837\u5f0f\u548c\u5927\u5c0f\u3002Text\u3001GUIStyle \u548c TextMesh \u7c7b\u90fd\u5177\u6709  ",(0,r.kt)("strong",{parentName:"p"},"Rich Text"),"  \u8bbe\u7f6e\uff0c\u6b64\u8bbe\u7f6e\u4f1a\u6307\u793a Unity \u5728\u6587\u672c\u4e2d\u67e5\u627e\u6807\u8bb0\u6807\u7b7e\u3002",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Debug.Log.html"},"Debug.Log")," \u51fd\u6570\u4e5f\u53ef\u4f7f\u7528\u8fd9\u4e9b\u6807\u8bb0\u6807\u7b7e\u6765\u589e\u5f3a\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\u62a5\u544a\u3002\u6807\u7b7e\u4e0d\u4f1a\u663e\u793a\uff0c\u4f46\u4f1a\u6307\u793a\u8981\u5e94\u7528\u4e8e\u6587\u672c\u7684\u6837\u5f0f\u66f4\u6539\u3002"),(0,r.kt)("h2",{id:"\u6807\u8bb0\u683c\u5f0f"},"\u6807\u8bb0\u683c\u5f0f"),(0,r.kt)("p",null,"\u8be5\u6807\u8bb0\u7cfb\u7edf\u53d7 HTML \u7684\u542f\u53d1\uff0c\u4f46\u5e76\u4e0d\u6253\u7b97\u4e0e\u6807\u51c6 HTML \u4e25\u683c\u517c\u5bb9\u3002\u57fa\u672c\u601d\u60f3\u662f\u53ef\u4ee5\u5c06\u6587\u672c\u7684\u4e00\u90e8\u5206\u5305\u542b\u5728\u4e00\u5bf9\u5339\u914d\u6807\u7b7e\u5185\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"We are &lt;b&gt;not&lt;/b&gt; amused.")),(0,r.kt)("p",null,"\u5982\u793a\u4f8b\u6240\u793a\uff0c\u6807\u7b7e\u5c31\u662f\u201c\u5c16\u62ec\u53f7\u201d\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"&gt;")," \u5185\u7684\u6587\u672c\u7247\u6bb5\u3002"),(0,r.kt)("p",null,"_","\u5f00\u59cb","_","\u6807\u7b7e\u653e\u5728\u8fd9\u90e8\u5206\u7684\u5f00\u5934\u3002\u6807\u7b7e\u5185\u7684\u6587\u672c\u8868\u793a\u6807\u7b7e\u7684\u540d\u79f0\uff08\u5728\u672c\u793a\u4f8b\u4e2d\u5c31\u662f  ",(0,r.kt)("strong",{parentName:"p"},"b")," \uff09\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u6807\u7b7e\u653e\u5728\u8fd9\u90e8\u5206\u7684\u7ed3\u5c3e\u3002\u8fd9\u4e2a\u6807\u7b7e\u5c31\u662f","_","\u7ed3\u675f","_","\u6807\u7b7e\u3002\u5b83\u5177\u6709\u4e0e\u5f00\u59cb\u6807\u7b7e\u76f8\u540c\u7684\u540d\u79f0\uff0c\u4f46\u662f\u540d\u79f0\u524d\u9762\u5e26\u6709\u659c\u6760 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u5b57\u7b26\u3002\u6bcf\u4e2a\u5f00\u59cb\u6807\u7b7e\u5fc5\u987b\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684\u7ed3\u675f\u6807\u7b7e\u3002\u5982\u679c\u5f00\u59cb\u6807\u7b7e\u6ca1\u6709\u5bf9\u5e94\u7684","_","\u7ed3\u675f","_","\u6807\u7b7e\uff0c\u5219\u4f1a\u5448\u73b0\u4e3a\u5e38\u89c4\u6587\u672c\u3002"),(0,r.kt)("p",null,"\u6807\u7b7e\u4e0d\u4f1a\u76f4\u63a5\u663e\u793a\u7ed9\u7528\u6237\uff0c\u800c\u662f\u7528\u4e8e\u8bf4\u660e\u5176\u5305\u88f9\u7684\u6587\u672c\u7684\u6837\u5f0f\u3002\u4e0a\u4f8b\u4e2d\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," \u6807\u7b7e\u5c06\u7c97\u4f53\u5e94\u7528\u4e8e\u5355\u8bcd\u201cnot\u201d\uff0c\u56e0\u6b64\u6587\u672c\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4e3a\uff1a"),(0,r.kt)("p",null,"We are  ",(0,r.kt)("strong",{parentName:"p"},"not"),"  amused"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StyleTextBold.png",alt:"StyleTextBold.png"})),(0,r.kt)("p",null,"\u6807\u8bb0\u7684\u6587\u672c\u90e8\u5206\uff08\u5305\u62ec\u5c06\u5176\u5305\u88f9\u7684\u6807\u7b7e\uff09\u79f0\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u5143\u7d20")," \u3002"),(0,r.kt)("h3",{id:"\u5d4c\u5957\u7684\u5143\u7d20"},"\u5d4c\u5957\u7684\u5143\u7d20"),(0,r.kt)("p",null,"\u901a\u8fc7\u5c06\u4e00\u4e2a\u5143\u7d20\u201c\u5d4c\u5957\u201d\u5728\u53e6\u4e00\u4e2a\u5143\u7d20\u4e2d\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a\u6837\u5f0f\u5e94\u7528\u4e8e\u6587\u672c\u7684\u4e00\u90e8\u5206"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"We are &lt;b&gt;&lt;i&gt;definitely not&lt;/i&gt;&lt;/b&gt; amused")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"&lt;i&gt;")," \u6807\u7b7e\u8868\u793a\u5e94\u7528\u659c\u4f53\u6837\u5f0f\uff0c\u56e0\u6b64\u5c06\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4e3a"),(0,r.kt)("p",null,"We are  ",(0,r.kt)("strong",{parentName:"p"},"*definitely not")," * amused"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StyleTextBoldItalic1.png",alt:"StyleTextBoldItalic1.png"})),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\u7ed3\u675f\u6807\u7b7e\u7684\u987a\u5e8f\u4e0e\u8d77\u59cb\u6807\u7b7e\u7684\u987a\u5e8f\u76f8\u53cd\u3002\u4e3a\u4e86\u66f4\u6e05\u695a\u8bf4\u660e\u539f\u56e0\uff0c\u73b0\u5728\u8ba9\u5185\u90e8\u6807\u7b7e\u4e0d\u5fc5\u8de8\u8d8a\u6700\u5916\u5c42\u5143\u7d20\u7684\u6574\u4e2a\u6587\u672c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"We are &lt;b&gt;absolutely &lt;i&gt;definitely&lt;/i&gt; not&lt;/b&gt; amused")),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,r.kt)("p",null,"We are  ",(0,r.kt)("strong",{parentName:"p"},"absolutely ",(0,r.kt)("em",{parentName:"strong"},"definitely")," not"),"  amused"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StyleTextBoldItalic2.png",alt:"StyleTextBoldItalic2.png"})),(0,r.kt)("h3",{id:"\u6807\u7b7e\u53c2\u6570"},"\u6807\u7b7e\u53c2\u6570"),(0,r.kt)("p",null,"\u6709\u4e9b\u6807\u7b7e\u5bf9\u6587\u672c\u5177\u6709\u7b80\u5355\u7684\u201c\u5168\u6709\u6216\u5168\u65e0\u201d(all-or-nothing) \u6548\u679c\uff0c\u4f46\u5176\u4ed6\u6807\u7b7e\u53ef\u80fd\u5141\u8bb8\u53d8\u5316\u3002\u4f8b\u5982\uff0c ",(0,r.kt)("strong",{parentName:"p"},"color"),"  \u6807\u7b7e\u9700\u8981\u77e5\u9053\u8981\u5e94\u7528\u7684\u989c\u8272\u3002\u5e94\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")," \u5c06\u6b64\u7c7b\u4fe1\u606f\u6dfb\u52a0\u5230\u6807\u7b7e\u4e2d\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"We are &lt;color=green&gt;green&lt;/color&gt; with envy")),(0,r.kt)("p",null,"\u751f\u6210\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/StyleTextColorGreen.png",alt:"StyleTextColorGreen.png"})),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7ed3\u675f\u6807\u7b7e\u4e0d\u5305\u542b\u53c2\u6570\u503c\u3002\u53ef\u9009\u62e9\u5c06\u503c\u7528\u5f15\u53f7\u5f15\u8d77\u6765\uff0c\u4f46\u8fd9\u4e0d\u662f\u5fc5\u9700\u7684\u3002"),(0,r.kt)("p",null,"\u6807\u7b7e\u53c2\u6570\u4e0d\u80fd\u5305\u542b\u7a7a\u683c\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"We are &lt;color = green&gt;green&lt;/color&gt; with envy")),(0,r.kt)("p",null,"\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," \u5b57\u7b26\u4e24\u4fa7\u7684\u7a7a\u683c\u800c\u65e0\u6548\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u6807\u7b7e"},"\u652f\u6301\u7684\u6807\u7b7e"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5217\u8868\u63cf\u8ff0\u4e86 Unity \u652f\u6301\u7684\u6240\u6709\u6837\u5f0f\u6807\u7b7e\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u6807\u7b7e")," *"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u63cf\u8ff0")," *"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u793a\u4f8b")," *"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u6ce8\u610f\u4e8b\u9879")," *"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"b")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7c97\u4f53\u663e\u793a\u6587\u672c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"We are &lt;b&gt;not&lt;/b&gt; amused.")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"i")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u659c\u4f53\u663e\u793a\u6587\u672c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"We are &lt;i&gt;usually&lt;/i&gt; not amused.")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u53c2\u6570\u503c\u8bbe\u7f6e\u6587\u672c\u7684\u5927\u5c0f\uff08\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\uff09\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"We are &lt;size=50&gt;largely&lt;/size&gt; unaffected.")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c3d\u7ba1\u6b64\u6807\u7b7e\u53ef\u7528\u4e8e Debug.Log\uff0c\u4f46\u5982\u679c\u5927\u5c0f\u8bbe\u7f6e\u5f97\u592a\u5927\uff0c\u60a8\u4f1a\u53d1\u73b0\u7a97\u53e3\u680f\u548c\u63a7\u5236\u53f0\u4e2d\u7684\u884c\u95f4\u8ddd\u770b\u8d77\u6765\u5f88\u5947\u602a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u53c2\u6570\u503c\u8bbe\u7f6e\u6587\u672c\u7684\u989c\u8272\u3002\u53ef\u4f7f\u7528\u4f20\u7edf\u7684 HTML \u683c\u5f0f\u6307\u5b9a\u989c\u8272\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"#rrggbbaa")," \u2026\u5176\u4e2d\u7684\u5b57\u6bcd\u5bf9\u5e94\u4e8e\u5341\u516d\u8fdb\u5236\u6570\u5b57\u5bf9\uff0c\u8868\u793a\u989c\u8272\u7684\u7ea2\u3001\u7eff\u3001\u84dd\u548c Alpha\uff08\u900f\u660e\u5ea6\uff09\u503c\u3002\u4f8b\u5982\uff0c\u5b8c\u5168\u4e0d\u900f\u660e\u7684\u9752\u8272\u5c06\u6307\u5b9a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"color=#00ffffff"),"\u2026",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u53ef\u901a\u8fc7\u5927\u5199\u6216\u5c0f\u5199\u5f62\u5f0f\u6307\u5b9a\u5341\u516d\u8fdb\u5236\u503c\uff1b",(0,r.kt)("inlineCode",{parentName:"td"},"#FF0000")," \u7b49\u6548\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"#ff0000"),"\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"We are &lt;color=#ff0000ff&gt;colorfully&lt;/color&gt; amused")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53e6\u4e00\u79cd\u9009\u62e9\u662f\u4f7f\u7528\u989c\u8272\u7684\u540d\u79f0\u3002\u8fd9\u79cd\u65b9\u6cd5\u66f4\u5bb9\u6613\u7406\u89e3\uff0c\u4f46\u5f53\u7136\uff0c\u989c\u8272\u8303\u56f4\u53d7\u9650\uff0c\u5e76\u59cb\u7ec8\u5047\u8bbe\u989c\u8272\u5b8c\u5168\u4e0d\u900f\u660e\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"&lt;color=cyan&gt;some text&lt;/color&gt;")," ",(0,r.kt)("a",{parentName:"td",href:"#%E6%94%AF%E6%8C%81%E7%9A%84%E9%A2%9C%E8%89%B2"},"\u4e0b\u8868"),"\u4e2d\u5217\u51fa\u4e86\u53ef\u7528\u7684\u989c\u8272\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"material")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4ec5\u5bf9\u6587\u672c\u7f51\u683c\u6709\u7528\uff0c\u4f7f\u7528\u53c2\u6570\u6307\u5b9a\u7684\u6750\u8d28\u6e32\u67d3\u6587\u672c\u90e8\u5206\u3002\u503c\u4e3a Inspector \u663e\u793a\u7684\u6587\u672c\u7f51\u683c\u6750\u8d28\u6570\u7ec4\u7684\u7d22\u5f15\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"We are &lt;material=2&gt;texturally&lt;/material&gt; amused")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"quad")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4ec5\u5bf9\u6587\u672c\u7f51\u683c\u6709\u7528\uff0c\u6e32\u67d3\u4e0e\u6587\u672c\u5185\u8054\u7684\u56fe\u50cf\u3002\u91c7\u7528\u6307\u5b9a\u56fe\u50cf\u6750\u8d28\u7684\u53c2\u6570\u3001\u56fe\u50cf\u9ad8\u5ea6\u53c2\u6570\uff08\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\uff09\u4ee5\u53ca\u53e6\u5916\u56db\u4e2a\u8868\u793a\u5f85\u663e\u793a\u56fe\u50cf\u7684\u77e9\u5f62\u533a\u57df\u7684\u53c2\u6570\u3002\u4e0e\u5176\u4ed6\u6807\u7b7e\u4e0d\u540c\uff0cquad \u4e0d\u4f1a\u5305\u88f9\u4e00\u6bb5\u6587\u672c\uff0c\u56e0\u6b64\u6ca1\u6709\u7ed3\u675f\u6807\u7b7e\uff1b\u659c\u6760\u5b57\u7b26\u653e\u5728\u521d\u59cb\u6807\u7b7e\u7684\u672b\u5c3e\uff0c\u8868\u793a\u201c\u81ea\u52a8\u5173\u95ed\u201d\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"&lt;quad material=1 size=20 x=0.1 y=0.1 width=0.5 height=0.5&gt;")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd9\u5c06\u9009\u62e9\u6e32\u67d3\u5668\u6750\u8d28\u6570\u7ec4\u4e2d\u4f4d\u7f6e\u7684\u6750\u8d28\uff0c\u5e76\u5c06\u56fe\u50cf\u7684\u9ad8\u5ea6\u8bbe\u7f6e\u4e3a 20 \u50cf\u7d20\u3002\u56fe\u50cf\u7684\u77e9\u5f62\u533a\u57df\u7531 x\u3001y\u3001\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u503c\u51b3\u5b9a\uff0c\u8fd9\u4e9b\u503c\u5168\u90e8\u8868\u793a\u4e3a\u7eb9\u7406\u7684\u672a\u7f29\u653e\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684\u4e00\u5b9a\u6bd4\u4f8b\u3002")))),(0,r.kt)("h3",{id:"\u652f\u6301\u7684\u989c\u8272"},"\u652f\u6301\u7684\u989c\u8272"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"#code-%3Ccolor%3E-code"},(0,r.kt)("inlineCode",{parentName:"a"},"&lt;color&gt;"))," \u5bcc\u6587\u672c\u6807\u7b7e\u4e2d\u4f7f\u7528\u540d\u79f0\u800c\u4e0d\u662f\u5341\u516d\u8fdb\u5236\u503c\u7684\u989c\u8272\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u989c\u8272\u540d\u79f0")," *"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u5341\u516d\u8fdb\u5236\u503c")," *"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"*\u6837\u672c")," *"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aqua\uff08\u7b49\u540c\u4e8e cyan\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#00ffffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CyanSwatch.png",alt:"CyanSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"black"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#000000ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/BlackSwatch.png",alt:"BlackSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#0000ffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/BlueSwatch.png",alt:"BlueSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brown"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#a52a2aff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/BrownSwatch.png",alt:"BrownSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cyan\uff08\u7b49\u540c\u4e8e aqua\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#00ffffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CyanSwatch.png",alt:"CyanSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"darkblue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#0000a0ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/DarkblueSwatch.png",alt:"DarkblueSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fuchsia\uff08\u7b49\u540c\u4e8e magenta\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#ff00ffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MagentaSwatch.png",alt:"MagentaSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"green"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#008000ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GreenSwatch.png",alt:"GreenSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"grey"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#808080ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GreySwatch.png",alt:"GreySwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lightblue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#add8e6ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LightblueSwatch.png",alt:"LightblueSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#00ff00ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/LimeSwatch.png",alt:"LimeSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"magenta\uff08\u7b49\u540c\u4e8e fuchsia\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#ff00ffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MagentaSwatch.png",alt:"MagentaSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maroon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#800000ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/MaroonSwatch.png",alt:"MaroonSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"navy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#000080ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/NavySwatch.png",alt:"NavySwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"olive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#808000ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/OliveSwatch.png",alt:"OliveSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#ffa500ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/OrangeSwatch.png",alt:"OrangeSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"purple"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#800080ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PurpleSwatch.png",alt:"PurpleSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"red"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#ff0000ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/RedSwatch.png",alt:"RedSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"silver"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#c0c0c0ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SilverSwatch.png",alt:"SilverSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"teal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#008080ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TealSwatch.png",alt:"TealSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"white"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#ffffffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/WhiteSwatch.png",alt:"WhiteSwatch.png"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yellow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"#ffff00ff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/YellowSwatch.png",alt:"YellowSwatch.png"}))))),(0,r.kt)("h2",{id:"editor-gui"},"Editor GUI"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cEditor GUI \u7cfb\u7edf\u4e2d\u5df2\u7981\u7528\u5bcc\u6587\u672c\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUIStyle.html"},"GUIStyle")," \u663e\u5f0f\u542f\u7528\u5bcc\u6587\u672c\u3002\u5e94\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"richText")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a true\uff0c\u5e76\u5c06\u6837\u5f0f\u4f20\u9012\u7ed9\u76f8\u5173\u7684 GUI \u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'GUIStyle style = new GUIStyle ();\nstyle.richText = true;\nGUILayout.Label("&lt;size=30&gt;Some &lt;color=yellow&gt;RICH&lt;/color&gt; text&lt;/size&gt;",style);\n')))}g.isMDXComponent=!0}}]);