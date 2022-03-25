"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"UIBasicLayout",title:"Basic Layout",slug:"/com-unity-ugui/uibasic-layout"},c="Basic Layout",s={unversionedId:"uitoolkits/com-unity-ugui/UIBasicLayout",id:"uitoolkits/com-unity-ugui/UIBasicLayout",title:"Basic Layout",description:"In this section we\u2019ll look at how you can position UI elements relative to the Canvas and each other. If you want to test yourself while reading, you can create an Image using the menu  GameObject -&gt; UI -&gt; Image .",source:"@site/docs/uitoolkits/com-unity-ugui/uibasic-layout.md",sourceDirName:"uitoolkits/com-unity-ugui",slug:"/com-unity-ugui/uibasic-layout",permalink:"/doc-unity-manual/docs/com-unity-ugui/uibasic-layout",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/com-unity-ugui/uibasic-layout.md",tags:[],version:"current",frontMatter:{id:"UIBasicLayout",title:"Basic Layout",slug:"/com-unity-ugui/uibasic-layout"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u5e03\u5c40",permalink:"/doc-unity-manual/docs/com-unity-ugui/uiauto-layout"},next:{title:"\u753b\u5e03",permalink:"/doc-unity-manual/docs/com-unity-ugui/uicanvas"}},u={},p=[{value:"\u77e9\u5f62\u5de5\u5177",id:"\u77e9\u5f62\u5de5\u5177",level:2},{value:"\u77e9\u5f62\u53d8\u6362",id:"\u77e9\u5f62\u53d8\u6362",level:2},{value:"\u8c03\u6574\u5927\u5c0f\u4e0e\u7f29\u653e",id:"\u8c03\u6574\u5927\u5c0f\u4e0e\u7f29\u653e",level:3},{value:"\u8f74\u5fc3",id:"\u8f74\u5fc3",level:3},{value:"\u951a\u70b9",id:"\u951a\u70b9",level:3},{value:"\u951a\u70b9\u9884\u8bbe",id:"\u951a\u70b9\u9884\u8bbe",level:3},{value:"Inspector \u4e2d\u7684\u951a\u70b9\u548c\u4f4d\u7f6e\u5b57\u6bb5",id:"inspector-\u4e2d\u7684\u951a\u70b9\u548c\u4f4d\u7f6e\u5b57\u6bb5",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-layout"},"Basic Layout"),(0,r.kt)("p",null,"In this section we\u2019ll look at how you can position UI elements relative to the Canvas and each other. If you want to test yourself while reading, you can create an Image using the menu  ",(0,r.kt)("strong",{parentName:"p"},"GameObject -",">"," UI -",">"," Image")," ."),(0,r.kt)("h2",{id:"\u77e9\u5f62\u5de5\u5177"},"\u77e9\u5f62\u5de5\u5177"),(0,r.kt)("p",null,"Every UI element is represented as a rectangle for layout purposes. This rectangle can be manipulated in the Scene View using the  ",(0,r.kt)("strong",{parentName:"p"},"Rect Tool"),"  in the toolbar. The Rect Tool is used both for Unity\u2019s 2D features and for UI, and in fact can be used even for 3D objects as well."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GUI_Rect_Tool_Button.png",alt:"\u5728\u5de5\u5177\u680f\u6309\u94ae\u4e2d\u5df2\u9009\u4e2d\u77e9\u5f62\u5de5\u5177"})),(0,r.kt)("p",null,"\u5728\u5de5\u5177\u680f\u6309\u94ae\u4e2d\u5df2\u9009\u4e2d\u77e9\u5f62\u5de5\u5177"),(0,r.kt)("p",null,"\u4f7f\u7528\u77e9\u5f62\u5de5\u5177\u53ef\u5bf9 UI \u5143\u7d20\u8fdb\u884c\u79fb\u52a8\u3001\u5927\u5c0f\u8c03\u6574\u548c\u65cb\u8f6c\u3002\u9009\u62e9 UI \u5143\u7d20\u540e\uff0c\u53ef\u901a\u8fc7\u5355\u51fb\u77e9\u5f62\u5185\u7684\u4efb\u610f\u4f4d\u7f6e\u5e76\u62d6\u52a8\u6765\u5bf9\u5143\u7d20\u8fdb\u884c\u79fb\u52a8\u3002\u901a\u8fc7\u5355\u51fb\u8fb9\u6216\u89d2\u5e76\u62d6\u52a8\uff0c\u53ef\u8c03\u6574\u5143\u7d20\u5927\u5c0f\u3002\u82e5\u8981\u65cb\u8f6c\u5143\u7d20\uff0c\u53ef\u5728\u7a0d\u5fae\u8fdc\u79bb\u89d2\u70b9\u7684\u4f4d\u7f6e\u60ac\u505c\u5149\u6807\uff0c\u76f4\u5230\u9f20\u6807\u5149\u6807\u770b\u8d77\u6765\u50cf\u65cb\u8f6c\u7b26\u53f7\u3002\u7136\u540e\uff0c\u53ef\u5355\u51fb\u5e76\u5411\u4efb\u4e00\u65b9\u5411\u62d6\u52a8\u6765\u8fdb\u884c\u65cb\u8f6c\u3002"),(0,r.kt)("p",null,"\u4e0e\u5176\u4ed6\u5de5\u5177\u4e00\u6837\uff0c\u77e9\u5f62\u5de5\u5177\u4f7f\u7528\u5de5\u5177\u680f\u4e2d\u8bbe\u7f6e\u7684\u5f53\u524d\u8f74\u5fc3\u6a21\u5f0f\u548c\u7a7a\u95f4\u3002\u4f7f\u7528 UI \u65f6\uff0c\u901a\u5e38\u6700\u597d\u5c06\u8fd9\u4e9b\u8bbe\u7f6e\u4fdd\u6301\u4e3a  ",(0,r.kt)("strong",{parentName:"p"},"Pivot"),"  \u548c  ",(0,r.kt)("strong",{parentName:"p"},"Local")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GUI_Pivot_Local_Buttons.png",alt:"\u5de5\u5177\u680f\u6309\u94ae\u8bbe\u7f6e\u4e3a Pivot \u548c Local"})),(0,r.kt)("p",null,"\u5de5\u5177\u680f\u6309\u94ae\u8bbe\u7f6e\u4e3a Pivot \u548c Local"),(0,r.kt)("h2",{id:"\u77e9\u5f62\u53d8\u6362"},"\u77e9\u5f62\u53d8\u6362"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"Rect Transform"),"  is a new transform component that\u2019s used for all UI elements instead of the regular  ",(0,r.kt)("strong",{parentName:"p"},"Transform"),"  component."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_RectTransform.png",alt:"UI_RectTransform.png"})),(0,r.kt)("p",null,"\u4e0e\u5e38\u89c4\u53d8\u6362\u4e00\u6837\uff0c\u77e9\u5f62\u53d8\u6362\u5177\u6709\u4f4d\u7f6e\u3001\u65cb\u8f6c\u548c\u7f29\u653e\uff0c\u4f46\u8fd8\u5177\u6709\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff0c\u7528\u4e8e\u6307\u5b9a\u77e9\u5f62\u7684\u5c3a\u5bf8\u3002"),(0,r.kt)("h3",{id:"\u8c03\u6574\u5927\u5c0f\u4e0e\u7f29\u653e"},"\u8c03\u6574\u5927\u5c0f\u4e0e\u7f29\u653e"),(0,r.kt)("p",null,"When the Rect Tool is used to change the size of an object, normally for Sprites in the 2D system and for 3D objects it will change the local ",(0,r.kt)("em",{parentName:"p"},"scale")," of the object. However, when it\u2019s used on an object with a Rect Transform on it, it will instead change the width and the height, keeping the local scale unchanged. This resizing won\u2019t affect font sizes or the border on sliced images."),(0,r.kt)("h3",{id:"\u8f74\u5fc3"},"\u8f74\u5fc3"),(0,r.kt)("p",null,"\u65cb\u8f6c\u3001\u5927\u5c0f\u548c\u7f29\u653e\u4fee\u6539\u90fd\u662f\u56f4\u7ed5\u8f74\u5fc3\u8fdb\u884c\u7684\uff0c\u56e0\u6b64\u8f74\u5fc3\u7684\u4f4d\u7f6e\u4f1a\u5f71\u54cd\u65cb\u8f6c\u3001\u5927\u5c0f\u8c03\u6574\u6216\u7f29\u653e\u7684\u7ed3\u679c\u3002\u5de5\u5177\u680f Pivot \u6309\u94ae\u8bbe\u7f6e\u4e3a\u8f74\u5fc3\u6a21\u5f0f\u65f6\uff0c\u53ef\u5728 Scene \u89c6\u56fe\u4e2d\u79fb\u52a8\u77e9\u5f62\u53d8\u6362\u7684\u8f74\u5fc3\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_PivotRotate.png",alt:"UI_PivotRotate.png"})),(0,r.kt)("h3",{id:"\u951a\u70b9"},"\u951a\u70b9"),(0,r.kt)("p",null,"Rect Transforms include a layout concept called  ",(0,r.kt)("strong",{parentName:"p"},"anchors")," . Anchors are shown as four small triangular handles in the Scene View and anchor information is also shown in the Inspector."),(0,r.kt)("p",null,"\u5982\u679c\u77e9\u5f62\u53d8\u6362\u7684\u7236\u9879\u4e5f\u662f\u77e9\u5f62\u53d8\u6362\uff0c\u5219\u5b50\u77e9\u5f62\u53d8\u6362\u8fd8\u53ef\u901a\u8fc7\u5404\u79cd\u65b9\u5f0f\u951a\u5b9a\u5230\u7236\u77e9\u5f62\u53d8\u6362\u3002\u4f8b\u5982\uff0c\u5b50\u9879\u53ef\u4ee5\u951a\u5b9a\u5230\u7236\u9879\u7684\u4e2d\u5fc3\uff0c\u6216\u951a\u5b9a\u5230\u4e00\u4e2a\u89d2\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_Anchored1.gif",alt:"UI \u5143\u7d20\u951a\u5b9a\u5230\u7236\u9879\u7684\u4e2d\u5fc3\u3002\u5143\u7d20\u4e0e\u4e2d\u5fc3\u4fdd\u6301\u56fa\u5b9a\u504f\u79fb\u3002"})),(0,r.kt)("p",null,"UI \u5143\u7d20\u951a\u5b9a\u5230\u7236\u9879\u7684\u4e2d\u5fc3\u3002\u5143\u7d20\u4e0e\u4e2d\u5fc3\u4fdd\u6301\u56fa\u5b9a\u504f\u79fb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_Anchored2.gif",alt:"UI \u5143\u7d20\u951a\u5b9a\u5230\u7236\u9879\u7684\u53f3\u4e0b\u89d2\u3002\u5143\u7d20\u4e0e\u53f3\u4e0b\u89d2\u4fdd\u6301\u56fa\u5b9a\u504f\u79fb\u3002"})),(0,r.kt)("p",null,"UI \u5143\u7d20\u951a\u5b9a\u5230\u7236\u9879\u7684\u53f3\u4e0b\u89d2\u3002\u5143\u7d20\u4e0e\u53f3\u4e0b\u89d2\u4fdd\u6301\u56fa\u5b9a\u504f\u79fb\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u951a\u5b9a\u8fd8\u53ef\u4ee5\u8ba9\u5b50\u9879\u968f\u7236\u9879\u7684\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u4e00\u8d77\u62c9\u4f38\u3002\u77e9\u5f62\u7684\u6bcf\u4e2a\u89d2\u4e0e\u5176\u5bf9\u5e94\u7684\u951a\u70b9\u90fd\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u504f\u79fb\uff0c\u5373\u77e9\u5f62\u7684\u5de6\u4e0a\u89d2\u4e0e\u5de6\u4e0a\u89d2\u951a\u70b9\u6709\u4e00\u4e2a\u56fa\u5b9a\u7684\u504f\u79fb\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u56e0\u6b64\uff0c\u77e9\u5f62\u7684\u4e0d\u540c\u89d2\u53ef\u4ee5\u951a\u5b9a\u5230\u7236\u77e9\u5f62\u4e2d\u7684\u4e0d\u540c\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_Anchored3.gif",alt:"UI \u5143\u7d20\u7684\u5de6\u89d2\u951a\u5b9a\u5230\u7236\u9879\u7684\u5de6\u4e0b\u89d2\u5e76\u4e14\u53f3\u89d2\u951a\u5b9a\u5230\u53f3\u4e0b\u89d2\u3002\u5143\u7d20\u7684\u89d2\u4e0e\u5176\u5404\u81ea\u7684\u951a\u70b9\u4fdd\u6301\u56fa\u5b9a\u7684\u504f\u79fb\u3002"})),(0,r.kt)("p",null,"UI \u5143\u7d20\u7684\u5de6\u89d2\u951a\u5b9a\u5230\u7236\u9879\u7684\u5de6\u4e0b\u89d2\u5e76\u4e14\u53f3\u89d2\u951a\u5b9a\u5230\u53f3\u4e0b\u89d2\u3002\u5143\u7d20\u7684\u89d2\u4e0e\u5176\u5404\u81ea\u7684\u951a\u70b9\u4fdd\u6301\u56fa\u5b9a\u7684\u504f\u79fb\u3002"),(0,r.kt)("p",null,"The positions of the anchors are defined in fractions (or percentages) of the parent rectangle width and height. 0.0 (0%) corresponds to the left or bottom side, 0.5 (50%) to the middle, and 1.0 (100%) to the right or top side. But anchors aren\u2019t limited to the sides and middle; they can be anchored to any point within the parent rectangle."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_Anchored4.gif",alt:"UI \u5143\u7d20\u7684\u5de6\u89d2\u951a\u5b9a\u5230\u8ddd\u79bb\u7236\u77e9\u5f62\u5de6\u8fb9\u4e00\u5b9a\u767e\u5206\u6bd4\u7684\u70b9\uff0c\u800c\u53f3\u89d2\u951a\u70b9\u5230\u8ddd\u79bb\u7236\u77e9\u5f62\u53f3\u8fb9\u4e00\u5b9a\u767e\u5206\u6bd4\u7684\u70b9\u3002"})),(0,r.kt)("p",null,"UI \u5143\u7d20\u7684\u5de6\u89d2\u951a\u5b9a\u5230\u8ddd\u79bb\u7236\u77e9\u5f62\u5de6\u8fb9\u4e00\u5b9a\u767e\u5206\u6bd4\u7684\u70b9\uff0c\u800c\u53f3\u89d2\u951a\u70b9\u5230\u8ddd\u79bb\u7236\u77e9\u5f62\u53f3\u8fb9\u4e00\u5b9a\u767e\u5206\u6bd4\u7684\u70b9\u3002"),(0,r.kt)("p",null,"You can drag each of the anchors individually, or if they\u2019re together, you can drag them together by clicking in the middle in between them and dragging. If you hold down  ",(0,r.kt)("strong",{parentName:"p"},"Shift"),"  key while dragging an anchor, the corresponding corner of the rectangle will move together with the anchor."),(0,r.kt)("p",null,"\u951a\u70b9\u63a7\u5236\u67c4\u7684\u4e00\u79cd\u6709\u7528\u529f\u80fd\u662f\u53ef\u4ee5\u81ea\u52a8\u8d34\u9760\u5230\u540c\u7ea7\u77e9\u5f62\u7684\u951a\u70b9\uff0c\u4ece\u800c\u8fdb\u884c\u7cbe\u786e\u5b9a\u4f4d\u3002"),(0,r.kt)("h3",{id:"\u951a\u70b9\u9884\u8bbe"},"\u951a\u70b9\u9884\u8bbe"),(0,r.kt)("p",null,"In the Inspector, the  ",(0,r.kt)("strong",{parentName:"p"},"Anchor Preset"),"  button can be found in the upper left corner of the Rect Transform component. Clicking the button brings up the Anchor Presets dropdown. From here you can select from some of the most common anchoring options. You can anchor the UI element to the sides or middle of the parent, or stretch together with the parent size. The horizontal and vertical anchoring is independent."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_AnchorPreset.png",alt:"UI_AnchorPreset.png"})),(0,r.kt)("p",null,"Anchor Presets \u6309\u94ae\u5c06\u663e\u793a\u5f53\u524d\u6240\u9009\u7684\u9884\u8bbe\u9009\u9879\uff08\u5982\u679c\u6709\uff09\u3002\u5982\u679c\u6c34\u5e73\u8f74\u6216\u5782\u76f4\u8f74\u4e0a\u7684\u951a\u70b9\u8bbe\u7f6e\u4e3a\u4e0e\u4efb\u4f55\u9884\u8bbe\u4e0d\u540c\u7684\u4f4d\u7f6e\uff0c\u5219\u4f1a\u663e\u793a\u81ea\u5b9a\u4e49\u9009\u9879\u3002"),(0,r.kt)("h3",{id:"inspector-\u4e2d\u7684\u951a\u70b9\u548c\u4f4d\u7f6e\u5b57\u6bb5"},"Inspector \u4e2d\u7684\u951a\u70b9\u548c\u4f4d\u7f6e\u5b57\u6bb5"),(0,r.kt)("p",null,"You can click the Anchors expansion arrow to reveal the anchor number fields if they are not already visible.  ",(0,r.kt)("strong",{parentName:"p"},"Anchor Min"),"  corresponds to the lower left anchor handle in the Scene View, and  ",(0,r.kt)("strong",{parentName:"p"},"Anchor Max"),"  corresponds to the upper right handle."),(0,r.kt)("p",null,"\u6839\u636e\u951a\u70b9\u662f\u5728\u4e00\u8d77\uff08\u4ea7\u751f\u56fa\u5b9a\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff09\u8fd8\u662f\u5206\u5f00\uff08\u4f7f\u5f97\u77e9\u5f62\u4e0e\u7236\u77e9\u5f62\u4e00\u8d77\u62c9\u4f38\uff09\uff0c\u77e9\u5f62\u7684\u4f4d\u7f6e\u5b57\u6bb5\u663e\u793a\u4e0d\u540c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UI_RectTransform.png",alt:"UI_RectTransform.png"})),(0,r.kt)("p",null,"When all the anchor handles are together the fields displayed are Pos X, Pos Y, Width, and Height. The Pos X and Pos Y values indicate the position of the pivot relative to the anchors."),(0,r.kt)("p",null,"When the anchors are separated the fields can change partially or completely to Left, Right, Top, and Bottom. These fields define the padding inside the rectangle defined by the anchors. The Left and Right fields are used if the anchors are separated horizontally and the Top and Bottom fields are used if they\u2019re separated vertically."),(0,r.kt)("p",null,"Note that changing the values in the anchor or pivot fields will normally counter-adjust the positioning values in order to make the rectangle stay in place. In cases where this isn\u2019t desired, enable  ",(0,r.kt)("strong",{parentName:"p"},"Raw edit mode"),"  by clicking the  ",(0,r.kt)("strong",{parentName:"p"},"R"),"  button in the Inspector. This causes the anchor and pivot value to be able to be changed without any other values changing as a result. This will likely cause the rectangle to be visually moved or resized, since its position and size is dependent on the anchor and pivot values."))}d.isMDXComponent=!0}}]);