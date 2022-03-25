"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41029],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1207:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"class-Transform",title:"\u53d8\u6362\u7ec4\u4ef6",slug:"/game-objects/class-transform"},s="\u53d8\u6362\u7ec4\u4ef6",p={unversionedId:"unity-overview/creating-gameplay/game-objects/class-Transform",id:"unity-overview/creating-gameplay/game-objects/class-Transform",title:"\u53d8\u6362\u7ec4\u4ef6",description:"\u53d8\u6362\u7ec4\u4ef6 \u7528\u4e8e\u5b58\u50a8\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u3001\u65cb\u8f6c\u3001\u7f29\u653e\u548c\u7236\u5b50\u5316\u72b6\u6001\uff0c\u56e0\u6b64\u975e\u5e38\u91cd\u8981\u3002\u6e38\u620f\u5bf9\u8c61\u59cb\u7ec8\u9644\u52a0\u4e00\u4e2a\u53d8\u6362\u7ec4\u4ef6\uff0c\u65e0\u6cd5\u5220\u9664\u53d8\u6362\u7ec4\u4ef6\u6216\u521b\u5efa\u6ca1\u6709\u53d8\u6362\u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\u3002",source:"@site/docs/unity-overview/creating-gameplay/game-objects/class-transform.md",sourceDirName:"unity-overview/creating-gameplay/game-objects",slug:"/game-objects/class-transform",permalink:"/doc-unity-manual/docs/game-objects/class-transform",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/creating-gameplay/game-objects/class-transform.md",tags:[],version:"current",frontMatter:{id:"class-Transform",title:"\u53d8\u6362\u7ec4\u4ef6",slug:"/game-objects/class-transform"},sidebar:"tutorialSidebar",previous:{title:"\u6e38\u620f\u5bf9\u8c61",permalink:"/doc-unity-manual/docs/game-objects"},next:{title:"\u7ec4\u4ef6\u7b80\u4ecb",permalink:"/doc-unity-manual/docs/game-objects/components"}},u={},c=[{value:"Transform \u7ec4\u4ef6",id:"transform-\u7ec4\u4ef6",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u7f16\u8f91\u53d8\u6362\u7ec4\u4ef6",id:"\u7f16\u8f91\u53d8\u6362\u7ec4\u4ef6",level:2},{value:"\u7236\u5b50\u5316",id:"\u7236\u5b50\u5316",level:2},{value:"\u975e\u4e00\u81f4\u7f29\u653e\u7684\u9650\u5236",id:"\u975e\u4e00\u81f4\u7f29\u653e\u7684\u9650\u5236",level:2},{value:"\u7f29\u653e\u6bd4\u4f8b\u7684\u91cd\u8981\u6027",id:"\u7f29\u653e\u6bd4\u4f8b\u7684\u91cd\u8981\u6027",level:2},{value:"\u5173\u4e8e\u4f7f\u7528\u53d8\u6362\u7ec4\u4ef6\u7684\u63d0\u793a",id:"\u5173\u4e8e\u4f7f\u7528\u53d8\u6362\u7ec4\u4ef6\u7684\u63d0\u793a",level:2}],m={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53d8\u6362\u7ec4\u4ef6"},"\u53d8\u6362\u7ec4\u4ef6"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u53d8\u6362\u7ec4\u4ef6")," \u7528\u4e8e\u5b58\u50a8\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u3001\u65cb\u8f6c\u3001\u7f29\u653e\u548c\u7236\u5b50\u5316\u72b6\u6001\uff0c\u56e0\u6b64\u975e\u5e38\u91cd\u8981\u3002\u6e38\u620f\u5bf9\u8c61\u59cb\u7ec8\u9644\u52a0\u4e00\u4e2a\u53d8\u6362\u7ec4\u4ef6\uff0c\u65e0\u6cd5\u5220\u9664\u53d8\u6362\u7ec4\u4ef6\u6216\u521b\u5efa\u6ca1\u6709\u53d8\u6362\u7ec4\u4ef6\u7684\u6e38\u620f\u5bf9\u8c61\u3002"),(0,l.kt)("h2",{id:"transform-\u7ec4\u4ef6"},"Transform \u7ec4\u4ef6"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Transform"),"  \u7ec4\u4ef6\u786e\u5b9a\u6bcf\u4e2a\u5bf9\u8c61\u5728\u573a\u666f\u4e2d\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Position")," \u3001 ",(0,l.kt)("strong",{parentName:"p"},"Rotation"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Scale"),"  \u5c5e\u6027\u7684\u503c\u3002\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u53d8\u6362\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TransformExample4.png",alt:"TransformExample4.png"})),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Position")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u6362\u7ec4\u4ef6\u5728 X\u3001Y \u548c Z \u5750\u6807\u7684\u4f4d\u7f6e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Rotation")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u6362\u7ec4\u4ef6\u56f4\u7ed5 X\u3001Y \u548c Z \u8f74\u7684\u65cb\u8f6c\uff08\u4ee5\u5ea6\u4e3a\u6d4b\u91cf\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"Scale of the Transform along X, Y, and Z axes. Value \u201c1\u201d is the original size (size at which the object was imported).",(0,l.kt)("br",null),"Select the link icon next to the values to toggle proportional scaling. Proportional scaling adjusts the scale values proportionately to each other. For example, if your GameObject\u2019s x, y and z axis values are (1, 2, 4) and you double the x axis value to 2, the y and z axis values change to 4 and 8 respectively. When enabled, proportional scaling also applies to changes you make using the Scale tool in the Scene view.",(0,l.kt)("br",null),"If any scale value is zero, it is grayed out and does not automatically adjust when proportional scaling is enabled.",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Note")," : You can assign a keyboard shortcut to enable or disable proportional scaling. See ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/editor-features/shortcuts-manager"},"Shortcuts Manager"),".")))),(0,l.kt)("p",null,"\u53d8\u6362\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u503c\u662f\u76f8\u5bf9\u4e8e\u53d8\u6362\u7ec4\u4ef6\u7684\u7236\u9879\u6d4b\u91cf\u7684\u3002\u5982\u679c\u53d8\u6362\u7ec4\u4ef6\u6ca1\u6709\u7236\u9879\uff0c\u5219\u6309\u7167\u4e16\u754c\u7a7a\u95f4\u6765\u6d4b\u91cf\u5c5e\u6027\u3002"),(0,l.kt)("h2",{id:"\u7f16\u8f91\u53d8\u6362\u7ec4\u4ef6"},"\u7f16\u8f91\u53d8\u6362\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5728 3D \u7a7a\u95f4\u4e2d\u53ef\u5728 X\u3001Y \u548c Z \u8f74\u4e0a\u64cd\u4f5c\u53d8\u6362\u7ec4\u4ef6\uff0c\u4f46\u5728 2D \u7a7a\u95f4\u4e2d\u53ea\u80fd\u5728 X \u548c Y \u8f74\u4e0a\u64cd\u4f5c\u3002\u5728 Unity \u4e2d\uff0c\u8fd9\u4e9b\u8f74\u5206\u522b\u7531\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u8868\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TransformExample2.png",alt:"\u4e00\u4e2a\u7528\u989c\u8272\u6807\u793a\u4e0d\u540c\u8f74\u7684\u53d8\u6362\u7ec4\u4ef6"})),(0,l.kt)("p",null,"\u4e00\u4e2a\u7528\u989c\u8272\u6807\u793a\u4e0d\u540c\u8f74\u7684\u53d8\u6362\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728 Scene \u89c6\u56fe\u4e2d\u7f16\u8f91\u53d8\u6362\u7ec4\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5728 Inspector \u4e2d\u66f4\u6539\u5176\u5c5e\u6027\u3002\u5728\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u79fb\u52a8\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u5de5\u5177\u4fee\u6539\u53d8\u6362\u7ec4\u4ef6\u3002\u8fd9\u4e9b\u5de5\u5177\u4f4d\u4e8e Unity Editor \u7684\u5de6\u4e0a\u89d2\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Transform-Tools.png",alt:"\u67e5\u770b\u3001\u79fb\u52a8\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u5de5\u5177"})),(0,l.kt)("p",null,"\u67e5\u770b\u3001\u79fb\u52a8\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u5de5\u5177"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5de5\u5177\u53ef\u7528\u4e8e\u573a\u666f\u4e2d\u7684\u4efb\u4f55\u5bf9\u8c61\u3002\u5355\u51fb\u5bf9\u8c61\u65f6\uff0c\u5bf9\u8c61\u4e2d\u5c06\u51fa\u73b0\u5de5\u5177\u8f85\u52a9\u56fe\u6807\u3002\u8f85\u52a9\u56fe\u6807\u7684\u5916\u89c2\u53d6\u51b3\u4e8e\u9009\u62e9\u7684\u5de5\u5177\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TransformGizmo35.png",alt:"\u53d8\u6362\u7ec4\u4ef6\u8f85\u52a9\u56fe\u6807"})),(0,l.kt)("p",null,"\u53d8\u6362\u7ec4\u4ef6\u8f85\u52a9\u56fe\u6807"),(0,l.kt)("p",null,"\u5355\u51fb\u5e76\u62d6\u52a8\u4e09\u4e2a\u8f85\u52a9\u56fe\u6807\u8f74\u7684\u5176\u4e2d\u4e00\u4e2a\u8f74\u65f6\uff0c\u8be5\u8f74\u7684\u989c\u8272\u53d8\u4e3a\u9ec4\u8272\u3002\u62d6\u52a8\u9f20\u6807\u65f6\uff0c\u5bf9\u8c61\u5c06\u6cbf\u9009\u5b9a\u8f74\u79fb\u52a8\u3001\u65cb\u8f6c\u6216\u7f29\u653e\u3002\u677e\u5f00\u9f20\u6807\u6309\u952e\u65f6\uff0c\u8be5\u8f74\u4fdd\u6301\u9009\u4e2d\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/TransformExample3.png",alt:"\u4e00\u4e2a\u5df2\u9009\u4e2d\uff08\u9ec4\u8272\uff09X \u8f74\u7684\u53d8\u6362\u7ec4\u4ef6"})),(0,l.kt)("p",null,"\u4e00\u4e2a\u5df2\u9009\u4e2d\uff08\u9ec4\u8272\uff09X \u8f74\u7684\u53d8\u6362\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5728\u79fb\u52a8\u6a21\u5f0f\u4e2d\u8fd8\u6709\u4e00\u4e2a\u9644\u52a0\u9009\u9879\u53ef\u4ee5\u9501\u5b9a\u9762\u5411\u7279\u5b9a\u5e73\u9762\u7684\u79fb\u52a8\uff08\u5373\u5141\u8bb8\u5728\u4e24\u4e2a\u8f74\u4e0a\u62d6\u52a8\u7684\u540c\u65f6\u4fdd\u6301\u7b2c\u4e09\u4e2a\u8f74\u4e0d\u53d8\uff09\u3002\u56f4\u7ed5\u79fb\u52a8\u8f85\u52a9\u56fe\u6807\u4e2d\u5fc3\u7684\u4e09\u4e2a\u5c0f\u5f69\u8272\u65b9\u5757\u53ef\u6fc0\u6d3b\u6bcf\u4e2a\u5e73\u9762\u7684\u9501\u5b9a\u529f\u80fd\uff1b\u8fd9\u4e9b\u989c\u8272\u5bf9\u5e94\u4e8e\u5355\u51fb\u65b9\u5757\u65f6\u5c06\u9501\u5b9a\u7684\u8f74\uff08\u4f8b\u5982\uff0c\u84dd\u8272\u9501\u5b9a Z \u8f74\uff09\u3002"),(0,l.kt)("h2",{id:"\u7236\u5b50\u5316"},"\u7236\u5b50\u5316"),(0,l.kt)("p",null,"\u7236\u5b50\u5316\u662f\u4f7f\u7528 Unity \u65f6\u9700\u8981\u7406\u89e3\u7684\u6700\u91cd\u8981\u6982\u5ff5\u4e4b\u4e00\u3002\u5f53\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u662f\u53e6\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u7236")," \u9879\u65f6\uff0c ",(0,l.kt)("strong",{parentName:"p"},"\u5b50")," \u6e38\u620f\u5bf9\u8c61\u5b8c\u5168\u8ddf\u968f\u5176\u7236\u9879\u79fb\u52a8\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u3002\u53ef\u5c06\u7236\u5b50\u5316\u770b\u4f5c\u662f\u624b\u81c2\u4e0e\u8eab\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb\uff1b\u6bcf\u5f53\u8eab\u4f53\u79fb\u52a8\u65f6\uff0c\u624b\u81c2\u4e5f\u968f\u4e4b\u79fb\u52a8\u3002\u5b50\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u5b50\u9879\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u6240\u4ee5\uff0c\u624b\u53ef\u4ee5\u89c6\u4e3a\u624b\u81c2\u7684\u201c\u5b50\u9879\u201d\uff0c\u7136\u540e\u6bcf\u53ea\u624b\u90fd\u6709\u51e0\u6839\u624b\u6307\uff0c\u7b49\u7b49\u3002\u4efb\u4f55\u4e00\u4e2a\u5bf9\u8c61\u90fd\u53ef\u4ee5\u6709\u591a\u4e2a\u5b50\u9879\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u7236\u9879\u3002\u8fd9\u4e9b\u591a\u7ea7\u7236\u5b50\u5173\u7cfb\u5f62\u6210\u4e86\u53d8\u6362\u7ec4\u4ef6\u7684","_","\u5c42\u7ea7\u89c6\u56fe",(0,l.kt)("em",{parentName:"p"},"\u3002\u5c42\u7ea7\u89c6\u56fe\u6700\u9876\u5c42\u7684\u5bf9\u8c61\uff08\u5373\u5c42\u7ea7\u89c6\u56fe\u4e2d\u552f\u4e00\u6ca1\u6709\u7236\u9879\u7684\u5bf9\u8c61\uff09\u79f0\u4e3a **\u6839"),"_","\u3002"),(0,l.kt)("p",null,"\u5c06",(0,l.kt)("strong",{parentName:"p"}," Hierarchy \u89c6\u56fe "),"\u4e2d\u7684\u4efb\u4f55\u6e38\u620f\u5bf9\u8c61\u62d6\u5230\u53e6\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u4e0a\u5373\u53ef\u521b\u5efa\u7236\u9879\u3002\u8fd9\u6837\u5c31\u4f1a\u5728\u8fd9\u4e24\u4e2a\u6e38\u620f\u5bf9\u8c61\u4e4b\u95f4\u5efa\u7acb\u7236\u5b50\u5173\u7cfb\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ParentingExample.png",alt:"\u7236\u5b50\u5c42\u7ea7\u89c6\u56fe\u7684\u793a\u4f8b\u3002\u540d\u79f0\u5de6\u4fa7\u6709\u6298\u53e0\u7bad\u5934\u7684\u6e38\u620f\u5bf9\u8c61\u8868\u793a\u7236\u9879\u3002"})),(0,l.kt)("p",null,"\u7236\u5b50\u5c42\u7ea7\u89c6\u56fe\u7684\u793a\u4f8b\u3002\u540d\u79f0\u5de6\u4fa7\u6709\u6298\u53e0\u7bad\u5934\u7684\u6e38\u620f\u5bf9\u8c61\u8868\u793a\u7236\u9879\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cInspector \u4e2d\u4efb\u4f55\u5b50\u6e38\u620f\u5bf9\u8c61\u7684 Transform \u503c\u90fd\u662f\u76f8\u5bf9\u4e8e\u7236\u9879 Transform \u503c\u663e\u793a\u7684\u7ed3\u679c\u3002\u8fd9\u4e9b\u503c\u79f0\u4e3a",(0,l.kt)("strong",{parentName:"p"}," \u5c40\u90e8\u5750\u6807 "),"\u3002\u56de\u5230\u521a\u624d\u8eab\u4f53\u548c\u624b\u81c2\u7684\u7c7b\u6bd4\uff0c\u8eab\u4f53\u7684\u4f4d\u7f6e\u53ef\u80fd\u4f1a\u968f\u7740\u4eba\u7684\u884c\u8d70\u800c\u79fb\u52a8\uff0c\u4f46\u624b\u81c2\u76f8\u5bf9\u4e8e\u8eab\u4f53\u7684\u4f4d\u7f6e\u4e0d\u53d8\u3002\u5728\u8fdb\u884c\u573a\u666f\u6784\u5efa\u65f6\uff0c\u901a\u5e38\u4f7f\u7528\u5b50\u5bf9\u8c61\u7684\u5c40\u90e8\u5750\u6807\u5c31\u8db3\u591f\u4e86\uff0c\u4f46\u5728\u6e38\u620f\u4e2d\u901a\u5e38\u9700\u8981\u627e\u5230\u8fd9\u4e9b\u5bf9\u8c61\u5728\u4e16\u754c\u7a7a\u95f4\u6216",(0,l.kt)("strong",{parentName:"p"}," \u5168\u5c40\u5750\u6807 "),"\u4e2d\u7684\u786e\u5207\u4f4d\u7f6e\u3002\u53d8\u6362\u7ec4\u4ef6\u7684\u811a\u672c API \u5177\u6709\u5c40\u90e8\u548c\u5168\u5c40\u4f4d\u7f6e\u3001\u65cb\u8f6c\u548c\u7f29\u653e\u7684\u5355\u72ec\u5c5e\u6027\uff0c\u8fd8\u5141\u8bb8\u5728\u5c40\u90e8\u548c\u5168\u5c40\u5750\u6807\u4e4b\u95f4\u8f6c\u6362\u4efb\u4f55\u70b9\u3002"),(0,l.kt)("h2",{id:"\u975e\u4e00\u81f4\u7f29\u653e\u7684\u9650\u5236"},"\u975e\u4e00\u81f4\u7f29\u653e\u7684\u9650\u5236"),(0,l.kt)("p",null,"\u975e\u4e00\u81f4\u7f29\u653e\u662f\u6307\u53d8\u6362\u7ec4\u4ef6\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"}," Scale "),"\u5177\u6709\u4e0d\u540c\u7684 x\u3001y \u548c z \u503c\uff1b\u4f8b\u5982 (2, 4, 2)\u3002\u76f8\u53cd\uff0c\u4e00\u81f4\u7f29\u653e\u5219\u5177\u6709\u76f8\u540c x\u3001y \u548c z \u503c\uff1b\u4f8b\u5982 (3, 3, 3)\u3002\u5728\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u975e\u4e00\u81f4\u7f29\u653e\u53ef\u80fd\u5f88\u6709\u7528\uff0c\u4f46\u8fd9\u79cd\u7f29\u653e\u65b9\u5f0f\u4f1a\u5bfc\u81f4\u4e00\u81f4\u7f29\u653e\u6240\u6ca1\u6709\u7684\u4e00\u4e9b\u5947\u602a\u73b0\u8c61\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u7ec4\u4ef6\u4e0d\u5b8c\u5168\u652f\u6301\u975e\u4e00\u81f4\u7f29\u653e\u3002\u4f8b\u5982\uff0c\u6709\u4e9b\u7ec4\u4ef6\u5177\u6709\u7531",(0,l.kt)("strong",{parentName:"li"}," radius "),"\u5c5e\u6027\u5b9a\u4e49\u7684\u5706\u5f62\u6216\u7403\u5f62\u5143\u7d20\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u5305\u62ec",(0,l.kt)("strong",{parentName:"li"}," \u7403\u5f62\u78b0\u649e\u4f53 (Sphere Collider) "),"\u3001",(0,l.kt)("strong",{parentName:"li"}," \u80f6\u56ca\u78b0\u649e\u4f53 (Capsule Collider) "),"\u3001",(0,l.kt)("strong",{parentName:"li"}," \u5149\u6e90 (Light) "),"\u548c",(0,l.kt)("strong",{parentName:"li"}," \u97f3\u9891\u6e90 (Audio Source) "),"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5706\u5f62\u5f62\u72b6\u4e0d\u4f1a\u50cf\u9884\u671f\u7684\u90a3\u6837\u5728\u975e\u4e00\u81f4\u7f29\u653e\u4e0b\u53d8\u6210\u692d\u5706\u5f62\uff0c\u800c\u662f\u4ecd\u7136\u4fdd\u6301\u5706\u5f62\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5b50\u5bf9\u8c61\u5177\u6709\u975e\u4e00\u81f4\u7f29\u653e\u7684\u7236\u9879\u5e76\u4e14\u76f8\u5bf9\u4e8e\u8be5\u7236\u9879\u65cb\u8f6c\u65f6\uff0c\u5b50\u5bf9\u8c61\u53ef\u80fd\u770b\u8d77\u6765\u662f\u503e\u659c\u6216\u201c\u622a\u65ad\u201d\u7684\u3002\u6709\u4e9b\u7ec4\u4ef6\u652f\u6301\u7b80\u5355\u7684\u975e\u4e00\u81f4\u7f29\u653e\uff0c\u4f46\u5728\u6709\u8fd9\u79cd\u503e\u659c\u7684\u60c5\u51b5\u4e0b\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u4f8b\u5982\uff0c\u503e\u659c\u7684",(0,l.kt)("strong",{parentName:"li"}," \u76d2\u578b\u78b0\u649e\u4f53 (Box Collider) "),"\u65e0\u6cd5\u51c6\u786e\u5339\u914d\u6e32\u67d3\u7f51\u683c\u7684\u5f62\u72b6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u5982\u679c\u7236\u9879\u975e\u4e00\u81f4\u7f29\u653e\uff0c\u5b50\u5bf9\u8c61\u5728\u65cb\u8f6c\u65f6\u4e0d\u4f1a\u81ea\u52a8\u66f4\u65b0\u5176\u7f29\u653e\u6bd4\u4f8b\u3002\u56e0\u6b64\uff0c\u5f53\u7f29\u653e\u6bd4\u4f8b\u6700\u7ec8","_","\u66f4\u65b0","_","\u65f6\uff0c\u5b50\u5bf9\u8c61\u7684\u5f62\u72b6\u53ef\u80fd\u4f1a\u7a81\u7136\u53d1\u751f\u53d8\u5316\uff0c\u4f8b\u5982\u5728\u5b50\u5bf9\u8c61\u4e0e\u7236\u9879\u5206\u79bb\u7684\u60c5\u51b5\u4e0b\u3002")),(0,l.kt)("h2",{id:"\u7f29\u653e\u6bd4\u4f8b\u7684\u91cd\u8981\u6027"},"\u7f29\u653e\u6bd4\u4f8b\u7684\u91cd\u8981\u6027"),(0,l.kt)("p",null,"\u53d8\u6362\u7ec4\u4ef6\u7684\u7f29\u653e\u6bd4\u4f8b\u51b3\u5b9a\u4e86\u7f51\u683c\u5728\u5efa\u6a21\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5927\u5c0f\u4e0e\u8be5\u7f51\u683c\u5728 Unity \u4e2d\u7684\u5927\u5c0f\u4e4b\u95f4\u7684\u5dee\u5f02\u3002Unity \u4e2d\u7684\u7f51\u683c\u5927\u5c0f\uff08\u56e0\u6b64\u4e5f\u5c31\u662f\u53d8\u6362\u7ec4\u4ef6\u7684\u7f29\u653e\u6bd4\u4f8b\uff09","_","\u975e\u5e38","_","\u91cd\u8981\uff0c\u5c24\u5176\u662f\u5728\u7269\u7406\u6a21\u62df\u8fc7\u7a0b\u4e2d\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7269\u7406\u5f15\u64ce\u5047\u5b9a\u4e16\u754c\u7a7a\u95f4\u4e2d\u7684\u4e00\u4e2a\u5355\u4f4d\u5bf9\u5e94\u4e8e\u4e00\u7c73\u3002\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u975e\u5e38\u5927\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u201c\u6162\u52a8\u4f5c\u201d\u95ee\u9898\uff1b\u6a21\u62df\u5b9e\u9645\u4e0a\u81ea\u751f\u6548\u4ee5\u6765\u662f\u6b63\u786e\u7684\uff0c\u4f46\u60a8\u4f1a\u770b\u5230\u975e\u5e38\u5927\u7684\u5bf9\u8c61\u6ede\u540e\u5f88\u8fdc\u7684\u8ddd\u79bb\u3002"),(0,l.kt)("p",null,"\u6709\u4e09\u4e2a\u56e0\u7d20\u4f1a\u5f71\u54cd\u5bf9\u8c61\u7684\u7f29\u653e\u6bd4\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u683c\u5728 3D \u5efa\u6a21\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5927\u5c0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684",(0,l.kt)("strong",{parentName:"li"}," Import Settings "),"\u4e2d\u7684",(0,l.kt)("strong",{parentName:"li"}," Mesh Scale Factor "),"\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53d8\u6362\u7ec4\u4ef6\u7684",(0,l.kt)("strong",{parentName:"li"}," Scale "),"\u503c\u3002")),(0,l.kt)("p",null,"\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5e94\u5728\u53d8\u6362\u7ec4\u4ef6\u4e2d\u8c03\u6574\u5bf9\u8c61\u7684",(0,l.kt)("strong",{parentName:"p"}," Scale "),"\u8bbe\u7f6e\u3002\u6700\u597d\u7684\u9009\u62e9\u662f\u4ee5\u771f\u5b9e\u6bd4\u4f8b\u521b\u5efa\u6a21\u578b\uff0c\u8fd9\u6837\u5c31\u4e0d\u5fc5\u66f4\u6539\u53d8\u6362\u7ec4\u4ef6\u7684\u6bd4\u4f8b\u3002\u6b21\u597d\u7684\u9009\u62e9\u662f\u5728\u5177\u4f53\u7f51\u683c\u7684",(0,l.kt)("strong",{parentName:"p"}," Import Settings "),"\u4e2d\u8c03\u6574\u5bfc\u5165\u7f51\u683c\u65f6\u7684\u6bd4\u4f8b\u3002\u6709\u4e9b\u4f18\u5316\u662f\u57fa\u4e8e\u5bfc\u5165\u5927\u5c0f\u8fdb\u884c\u7684\uff0c\u56e0\u6b64\u5b9e\u4f8b\u5316\u8c03\u6574\u4e86\u6bd4\u4f8b\u503c\u7684\u5bf9\u8c61\u53ef\u80fd\u4f1a\u964d\u4f4e\u6027\u80fd\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics3dreference/class-rigidbody"},"\u521a\u4f53 (Rigidbody)")," \u7ec4\u4ef6\u53c2\u8003\u9875\u9762\u4e0a\u5173\u4e8e\u4f18\u5316\u7f29\u653e\u6bd4\u4f8b\u7684\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u5173\u4e8e\u4f7f\u7528\u53d8\u6362\u7ec4\u4ef6\u7684\u63d0\u793a"},"\u5173\u4e8e\u4f7f\u7528\u53d8\u6362\u7ec4\u4ef6\u7684\u63d0\u793a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u8bbe\u7f6e\u53d8\u6362\u7ec4\u4ef6\u7684\u7236\u5b50\u5173\u7cfb\u65f6\uff0c\u4e00\u79cd\u6709\u7528\u7684\u505a\u6cd5\u662f\u5728\u6dfb\u52a0\u5b50\u9879\u4e4b\u524d\u5c06\u7236\u9879\u7684\u4f4d\u7f6e\u8bbe\u7f6e\u4e3a ","<","0,0,0",">","\u3002\u8fd9\u610f\u5473\u7740\u5b50\u9879\u7684\u5c40\u90e8\u5750\u6807\u5c06\u4e0e\u5168\u5c40\u5750\u6807\u76f8\u540c\uff0c\u56e0\u6b64\u66f4\u5bb9\u6613\u786e\u4fdd\u5b50\u9879\u5904\u4e8e\u6b63\u786e\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"}," \u521a\u4f53 "),"\u8fdb\u884c\u7269\u7406\u6a21\u62df\uff0c\u8bf7\u52a1\u5fc5\u9605\u8bfb",(0,l.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/physics3dreference/class-rigidbody"},"\u521a\u4f53"),"\u7ec4\u4ef6\u53c2\u8003\u9875\u9762\u4e0a\u7684 Scale \u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u504f\u597d\u8bbe\u7f6e\uff08\u83dc\u5355\uff1a",(0,l.kt)("strong",{parentName:"li"}," Unity ",">"," Preferences "),"\uff0c\u7136\u540e\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"}," Colors & keys")," \u9762\u677f\uff09\u66f4\u6539\u53d8\u6362\u8f74\uff08\u548c\u5176\u4ed6 UI \u5143\u7d20\uff09\u7684\u989c\u8272\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u6539\u7f29\u653e\u6bd4\u4f8b\u4f1a\u5f71\u54cd\u5b50\u9879\u8f6c\u6362\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982\uff0c\u5c06\u7236\u9879\u7684\u7f29\u653e\u6bd4\u4f8b\u8c03\u6574\u5230 (0,0,0) \u5c06\u4f7f\u6240\u6709\u5b50\u9879\u76f8\u5bf9\u4e8e\u7236\u9879\u4f4d\u4e8e (0,0,0) \u4f4d\u7f6e\u3002")))}d.isMDXComponent=!0}}]);