"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73636],{3905:function(n,t,e){e.d(t,{Zo:function(){return c},kt:function(){return k}});var i=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},l=Object.keys(n);for(i=0;i<l.length;i++)e=l[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)e=l[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var a=i.createContext({}),s=function(n){var t=i.useContext(a),e=t;return n&&(e="function"==typeof n?n(t):u(u({},t),n)),e},c=function(n){var t=s(n.components);return i.createElement(a.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(n,t){var e=n.components,o=n.mdxType,l=n.originalType,a=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),g=s(e),k=o,I=g["".concat(a,".").concat(k)]||g[k]||p[k]||l;return e?i.createElement(I,u(u({ref:t},c),{},{components:e})):i.createElement(I,u({ref:t},c))}));function k(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var l=e.length,u=new Array(l);u[0]=g;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=n,r.mdxType="string"==typeof n?n:o,u[1]=r;for(var s=2;s<l;s++)u[s]=e[s];return i.createElement.apply(null,u)}return i.createElement.apply(null,e)}g.displayName="MDXCreateElement"},46533:function(n,t,e){e.r(t),e.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var i=e(87462),o=e(63366),l=(e(67294),e(3905)),u=["components"],r={id:"gui-Customization",title:"\u81ea\u5b9a\u4e49",slug:"/guiscripting-guide/gui-customization"},a="\u81ea\u5b9a\u4e49",s={unversionedId:"uitoolkits/guiscripting-guide/gui-Customization",id:"uitoolkits/guiscripting-guide/gui-Customization",title:"\u81ea\u5b9a\u4e49",description:"\u81ea\u5b9a\u4e49 IMGUI \u63a7\u4ef6",source:"@site/docs/uitoolkits/guiscripting-guide/gui-customization.md",sourceDirName:"uitoolkits/guiscripting-guide",slug:"/guiscripting-guide/gui-customization",permalink:"/doc-unity-manual/docs/guiscripting-guide/gui-customization",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/guiscripting-guide/gui-customization.md",tags:[],version:"current",frontMatter:{id:"gui-Customization",title:"\u81ea\u5b9a\u4e49",slug:"/guiscripting-guide/gui-customization"},sidebar:"tutorialSidebar",previous:{title:"\u63a7\u4ef6",permalink:"/doc-unity-manual/docs/guiscripting-guide/gui-controls"},next:{title:"\u6269\u5c55 IMGUI",permalink:"/doc-unity-manual/docs/guiscripting-guide/gui-extending"}},c={},p=[{value:"\u81ea\u5b9a\u4e49 IMGUI \u63a7\u4ef6",id:"\u81ea\u5b9a\u4e49-imgui-\u63a7\u4ef6",level:2},{value:"\u6837\u5f0f\u5982\u4f55\u6539\u53d8 GUI \u63a7\u4ef6\u7684\u5916\u89c2",id:"\u6837\u5f0f\u5982\u4f55\u6539\u53d8-gui-\u63a7\u4ef6\u7684\u5916\u89c2",level:3},{value:"\u76ae\u80a4\u548c\u6837\u5f0f\u4e4b\u95f4\u7684\u533a\u522b",id:"\u76ae\u80a4\u548c\u6837\u5f0f\u4e4b\u95f4\u7684\u533a\u522b",level:3},{value:"\u4f7f\u7528\u6837\u5f0f",id:"\u4f7f\u7528\u6837\u5f0f",level:2},{value:"\u521b\u5efa\u516c\u5171\u53d8\u91cf GUIStyle",id:"\u521b\u5efa\u516c\u5171\u53d8\u91cf-guistyle",level:3},{value:"\u66f4\u6539\u4e0d\u540c\u7684\u6837\u5f0f\u5143\u7d20",id:"\u66f4\u6539\u4e0d\u540c\u7684\u6837\u5f0f\u5143\u7d20",level:3},{value:"\u4f7f\u7528\u76ae\u80a4",id:"\u4f7f\u7528\u76ae\u80a4",level:2},{value:"\u521b\u5efa\u65b0\u7684 GUISkin",id:"\u521b\u5efa\u65b0\u7684-guiskin",level:3},{value:"\u5c06\u76ae\u80a4\u5e94\u7528\u4e8e GUI",id:"\u5c06\u76ae\u80a4\u5e94\u7528\u4e8e-gui",level:3},{value:"\u66f4\u6539 GUI \u5b57\u4f53\u5927\u5c0f",id:"\u66f4\u6539-gui-\u5b57\u4f53\u5927\u5c0f",level:3}],g={toc:p};function k(n){var t=n.components,e=(0,o.Z)(n,u);return(0,l.kt)("wrapper",(0,i.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u81ea\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49-imgui-\u63a7\u4ef6"},"\u81ea\u5b9a\u4e49 IMGUI \u63a7\u4ef6"),(0,l.kt)("p",null,"\u867d\u7136 Unity \u7684 IMGUI \u7cfb\u7edf\u4e3b\u8981\u7528\u4e8e\u521b\u5efa\u5f00\u53d1\u8005\u5de5\u5177\u548c\u8c03\u8bd5\u754c\u9762\uff0c\u4f46\u4ecd\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u8fdb\u884c\u81ea\u5b9a\u4e49\u5e76\u8bbe\u7f6e\u6837\u5f0f\u3002\u5728 Unity \u7684 IMGUI \u7cfb\u7edf\u4e2d\uff0c\u53ef\u5fae\u8c03\u63a7\u4ef6\u7684\u5916\u89c2\uff0c\u4e3a\u63a7\u4ef6\u6dfb\u52a0\u5927\u91cf\u7ec6\u8282\u3002\u63a7\u4ef6\u5916\u89c2\u7531  ",(0,l.kt)("strong",{parentName:"p"},"GUIStyle"),"  \u51b3\u5b9a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u521b\u5efa\u63a7\u4ef6\u65f6\u672a\u5b9a\u4e49 GUIStyle\uff0c\u5219\u4f1a\u5e94\u7528 Unity \u7684\u9ed8\u8ba4 GUIStyle\u3002\u6b64\u6837\u5f0f\u662f Unity \u7684\u5185\u90e8\u6837\u5f0f\uff0c\u53ef\u5728\u5df2\u53d1\u5e03\u7684\u6e38\u620f\u4e2d\u5c06\u6b64\u6837\u5f0f\u7528\u4e8e\u5feb\u901f\u539f\u578b\u8bbe\u8ba1\uff0c\u6216\u8005\u5982\u679c\u9009\u62e9\u4e0d\u5bf9\u63a7\u4ef6\u8fdb\u884c\u6837\u5f0f\u8bbe\u7f6e\uff0c\u5219\u4f1a\u91c7\u7528\u6b64\u6837\u5f0f\u3002"),(0,l.kt)("p",null,"\u5f53\u6709\u5927\u91cf\u4e0d\u540c\u7684 GUIStyle \u53ef\u4f9b\u4f7f\u7528\u65f6\uff0c\u53ef\u5728\u5355\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"GUISkin"),"  \u4e2d\u5b9a\u4e49\u8fd9\u4e9b\u6837\u5f0f\u3002GUISkin \u53ea\u4e0d\u8fc7\u662f GUIStyle \u7684\u96c6\u5408\u3002"),(0,l.kt)("h3",{id:"\u6837\u5f0f\u5982\u4f55\u6539\u53d8-gui-\u63a7\u4ef6\u7684\u5916\u89c2"},"\u6837\u5f0f\u5982\u4f55\u6539\u53d8 GUI \u63a7\u4ef6\u7684\u5916\u89c2"),(0,l.kt)("p",null,"GUIStyle \u65e8\u5728\u6a21\u4eff Web \u6d4f\u89c8\u5668\u7684\u5c42\u53e0\u6837\u5f0f\u8868 (CSS)\u3002\u4e0d\u8fc7\uff0c\u8bb8\u591a\u4e0d\u540c\u7684 CSS \u65b9\u6cd5\u7ecf\u8fc7\u4e86\u6539\u7f16\uff0c\u5305\u62ec\u5bf9\u7528\u4e8e\u6837\u5f0f\u8bbe\u7f6e\u7684\u5404\u4e2a\u72b6\u6001\u5c5e\u6027\u8fdb\u884c\u5212\u5206\uff0c\u5728\u5185\u5bb9\u548c\u5916\u89c2\u4e4b\u95f4\u8fdb\u884c\u5206\u79bb\uff0c\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u63a7\u4ef6\u5b9a\u4e49\u5185\u5bb9\uff0c\u800c\u6837\u5f0f\u5b9a\u4e49\u5916\u89c2\u3002\u901a\u8fc7\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u521b\u5efa\u5916\u89c2\u50cf\u666e\u901a ",(0,l.kt)("strong",{parentName:"p"},"\u6309\u94ae (Button)"),"  \u4f46\u529f\u80fd\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u5f00\u5173 (Toggle)"),"  \u7684\u7ec4\u5408\u63a7\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-ToggleStyles.png",alt:"\u4e24\u79cd\u4e0d\u540c\u6837\u5f0f\u7684\u5f00\u5173\u63a7\u4ef6"})),(0,l.kt)("p",null,"\u4e24\u79cd\u4e0d\u540c\u6837\u5f0f\u7684\u5f00\u5173\u63a7\u4ef6"),(0,l.kt)("h3",{id:"\u76ae\u80a4\u548c\u6837\u5f0f\u4e4b\u95f4\u7684\u533a\u522b"},"\u76ae\u80a4\u548c\u6837\u5f0f\u4e4b\u95f4\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u5982\u524d\u6587\u6240\u8ff0\uff0cGUISkin \u662f GUIStyle \u7684\u96c6\u5408\u3002\u6837\u5f0f\u5b9a\u4e49\u4e86 GUI \u63a7\u4ef6\u7684\u5916\u89c2\u3002\u5982\u679c\u8981\u4f7f\u7528\u6837\u5f0f\uff0c\u5219\u4e0d\u5fc5\u4f7f\u7528\u76ae\u80a4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GuiStyleInspector.png",alt:"Inspector \u4e2d\u663e\u793a\u7684\u5355\u4e2a GUIStyle"})),(0,l.kt)("p",null,"Inspector \u4e2d\u663e\u793a\u7684\u5355\u4e2a GUIStyle"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Inspector-GUISkin.png",alt:"Inspector-GUISkin.png"})," ",(0,l.kt)("em",{parentName:"p"},"Inspector \u4e2d\u663e\u793a\u7684\u5355\u4e2a GUISkin - \u6ce8\u610f\u5176\u5305\u542b\u591a\u4e2a GUIStyle")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u6837\u5f0f"},"\u4f7f\u7528\u6837\u5f0f"),(0,l.kt)("p",null,"\u6240\u6709 GUI \u63a7\u4ef6\u51fd\u6570\u90fd\u6709\u53ef\u9009\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff1a\u7528\u4e8e\u663e\u793a\u63a7\u4ef6\u7684 GUIStyle\u3002\u5982\u679c\u5ffd\u7565\u6b64\u53c2\u6570\uff0c\u5219\u4f1a\u4f7f\u7528 Unity \u7684\u9ed8\u8ba4 GUIStyle\u3002\u51fd\u6570\u5185\u90e8\u4f1a\u5c06\u63a7\u4ef6\u7c7b\u578b\u7684\u540d\u79f0\u4f5c\u4e3a\u5b57\u7b26\u4e32\u5e94\u7528\uff0c\u56e0\u6b64  ",(0,l.kt)("strong",{parentName:"p"},"GUI.Button()"),"  \u4f7f\u7528\u201cbutton\u201d\u6837\u5f0f\uff0c ",(0,l.kt)("strong",{parentName:"p"},"GUI.Toggle()"),"  \u4f7f\u7528\u201ctoggle\u201d\u6837\u5f0f\uff0c\u7b49\u7b49\u3002\u82e5\u8981\u8986\u76d6\u63a7\u4ef6\u7684\u9ed8\u8ba4 GUIStyle\uff0c\u53ef\u5c06\u5176\u6307\u5b9a\u4e3a\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/* \u5c06\u9ed8\u8ba4\u63a7\u4ef6\u6837\u5f0f\u8986\u76d6\u4e3a UnityGUI \u9ed8\u8ba4\u6837\u5f0f\u4e2d\u7684\u5176\u4ed6\u6837\u5f0f */\n\n\n// JavaScript\nfunction OnGUI () {\n    // \u521b\u5efa\u4f7f\u7528 "box" GUIStyle \u7684\u6807\u7b7e\u3002\n    GUI.Label (Rect (0,0,200,100), "Hi - I\'m a label looking like a box", "box");\n\n    // \u521b\u5efa\u4f7f\u7528 "toggle" GUIStyle \u7684\u6309\u94ae\n    GUI.Button (Rect (10,140,180,20), "This is a button", "toggle");\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n                    \n    void OnGUI () {\n        // \u521b\u5efa\u4f7f\u7528 "box" GUIStyle \u7684\u6807\u7b7e\u3002\n        GUI.Label (new Rect (0,0,200,100), "Hi - I\'m a label looking like a box", "box");\n    \n        // \u521b\u5efa\u4f7f\u7528 "toggle" GUIStyle \u7684\u6309\u94ae\n        GUI.Button (new Rect (10,140,180,20), "This is a button", "toggle");\n    }\n\n}\n\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-DifferentDefaultStyles.png",alt:"\u4e0a\u8ff0\u4ee3\u7801\u793a\u4f8b\u521b\u5efa\u7684\u63a7\u4ef6"})),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u793a\u4f8b\u521b\u5efa\u7684\u63a7\u4ef6"),(0,l.kt)("h3",{id:"\u521b\u5efa\u516c\u5171\u53d8\u91cf-guistyle"},"\u521b\u5efa\u516c\u5171\u53d8\u91cf GUIStyle"),(0,l.kt)("p",null,"\u58f0\u660e GUIStyle \u516c\u5171\u53d8\u91cf\u65f6\uff0c\u6837\u5f0f\u7684\u6240\u6709\u5143\u7d20\u90fd\u5c06\u663e\u793a\u5728  ",(0,l.kt)("strong",{parentName:"p"},"Inspector"),"  \u4e2d\u3002\u5728\u8be5\u9762\u677f\u4e2d\u53ef\u4ee5\u7f16\u8f91\u6240\u6709\u4e0d\u540c\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/* \u5c06\u9ed8\u8ba4\u63a7\u4ef6\u6837\u5f0f\u8986\u76d6\u4e3a\u81ea\u5b9a\u4e49\u7684\u63a7\u4ef6\u6837\u5f0f */\n\n\n// JavaScript\nvar customButton : GUIStyle;\n\nfunction OnGUI () {\n    // \u521b\u5efa\u6309\u94ae\u3002\u5c06\u4e0a\u9762\u5b9a\u4e49\u7684 GUIStyle \u4f5c\u4e3a\u8981\u4f7f\u7528\u7684\u6837\u5f0f\u4f20\u5165\n    GUI.Button (Rect (10,10,150,20), "I am a Custom Button", customButton);\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n                    \n    public GUIStyle customButton;\n    \n    void OnGUI () {\n        // \u521b\u5efa\u6309\u94ae\u3002\u5c06\u4e0a\u9762\u5b9a\u4e49\u7684 GUIStyle \u4f5c\u4e3a\u8981\u4f7f\u7528\u7684\u6837\u5f0f\u4f20\u5165\n        GUI.Button (new Rect (10,10,150,20), "I am a Custom Button", customButton);\n    }\n    \n}\n\n\n')),(0,l.kt)("h3",{id:"\u66f4\u6539\u4e0d\u540c\u7684\u6837\u5f0f\u5143\u7d20"},"\u66f4\u6539\u4e0d\u540c\u7684\u6837\u5f0f\u5143\u7d20"),(0,l.kt)("p",null,"\u58f0\u660e GUIStyle \u540e\uff0c\u53ef\u5728 Inspector \u4e2d\u4fee\u6539\u8be5\u6837\u5f0f\u3002\u53ef\u4ee5\u5b9a\u4e49\u5927\u91cf\u72b6\u6001\uff0c\u5e76\u5e94\u7528\u4e8e\u4efb\u4f55\u7c7b\u578b\u7684\u63a7\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ModifyingStyleInInspector.png",alt:"\u6837\u5f0f\u7684\u4fee\u6539\u662f\u9488\u5bf9\u6bcf\u4e2a\u811a\u672c\u548c\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u8fdb\u884c\u7684"})),(0,l.kt)("p",null,"\u6837\u5f0f\u7684\u4fee\u6539\u662f\u9488\u5bf9\u6bcf\u4e2a\u811a\u672c\u548c\u6bcf\u4e2a\u6e38\u620f\u5bf9\u8c61\u8fdb\u884c\u7684"),(0,l.kt)("p",null,"\u5fc5\u987b\u5148\u4e3a\u63a7\u4ef6\u72b6\u6001\u5206\u914d  ",(0,l.kt)("strong",{parentName:"p"},"Background"),"  \u989c\u8272\uff0c\u7136\u540e\u518d\u5e94\u7528\u6307\u5b9a\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Text Color")," \u3002"),(0,l.kt)("p",null,"\u6709\u5173\u5404\u4e2a GUIStyle \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/guiscripting-guide/class-guistyle"},"GUIStyle \u7ec4\u4ef6\u53c2\u8003\u9875\u9762"),"\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u76ae\u80a4"},"\u4f7f\u7528\u76ae\u80a4"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8f83\u590d\u6742\u7684 GUI \u7cfb\u7edf\uff0c\u5c06\u4e00\u7cfb\u5217\u6837\u5f0f\u96c6\u4e2d\u4fdd\u5b58\u5728\u4e00\u4e2a\u4f4d\u7f6e\u662f\u5f88\u6709\u610f\u4e49\u7684\u3002\u8fd9\u5c31\u662f GUISkin \u7684\u4f5c\u7528\u3002GUISkin \u5305\u542b\u591a\u79cd\u4e0d\u540c\u7684\u6837\u5f0f\uff0c\u57fa\u672c\u4e0a\u80fd\u4e3a\u6240\u6709 GUI \u63a7\u4ef6\u63d0\u4f9b\u5b8c\u6574\u7684\u5916\u89c2\u4fee\u6539\u3002"),(0,l.kt)("h3",{id:"\u521b\u5efa\u65b0\u7684-guiskin"},"\u521b\u5efa\u65b0\u7684 GUISkin"),(0,l.kt)("p",null,"\u8981\u521b\u5efa GUISkin\uff0c\u8bf7\u4ece\u83dc\u5355\u680f\u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"Assets ",">"," Create ",">"," GUI Skin")," \u3002\u968f\u540e\u5c06\u5728 Project \u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a GUI Skin\u3002\u9009\u62e9\u8be5 GUI Skin \u5373\u53ef\u5728 Inspector \u4e2d\u67e5\u770b\u5176\u5b9a\u4e49\u7684\u6240\u6709 GUIStyle\u3002"),(0,l.kt)("h3",{id:"\u5c06\u76ae\u80a4\u5e94\u7528\u4e8e-gui"},"\u5c06\u76ae\u80a4\u5e94\u7528\u4e8e GUI"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u5df2\u521b\u5efa\u7684\u76ae\u80a4\uff0c\u8bf7\u5c06\u5176\u5206\u914d\u7ed9  ",(0,l.kt)("strong",{parentName:"p"},"OnGUI()"),"  \u51fd\u6570\u4e2d\u7684  ",(0,l.kt)("strong",{parentName:"p"},"GUI.skin")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/* \u521b\u5efa\u4e00\u4e2a\u5c5e\u6027\u6765\u5f15\u7528\u8981\u4f7f\u7528\u7684\u76ae\u80a4 */\n\n\n// JavaScript\nvar mySkin : GUISkin;\n\nfunction OnGUI () {\n    // \u5c06\u8be5\u76ae\u80a4\u6307\u5b9a\u4e3a\u5f53\u524d\u4f7f\u7528\u7684\u76ae\u80a4\u3002\n    GUI.skin = mySkin;\n\n    // \u521b\u5efa\u6309\u94ae\u3002\u6b64\u65f6\u5c06\u4ece\u5206\u914d\u7ed9 mySkin \u7684\u76ae\u80a4\u83b7\u5f97\u9ed8\u8ba4\u7684 "button" \u6837\u5f0f\u3002\n    GUI.Button (Rect (10,10,150,20), "Skinned Button");\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n                    \n    public GUISkin mySkin;\n    \n    void OnGUI () {\n        // \u5c06\u8be5\u76ae\u80a4\u6307\u5b9a\u4e3a\u5f53\u524d\u4f7f\u7528\u7684\u76ae\u80a4\u3002\n        GUI.skin = mySkin;\n    \n        // \u521b\u5efa\u6309\u94ae\u3002\u6b64\u65f6\u5c06\u4ece\u5206\u914d\u7ed9 mySkin \u7684\u76ae\u80a4\u83b7\u5f97\u9ed8\u8ba4\u7684 "button" \u6837\u5f0f\u3002\n        GUI.Button (new Rect (10,10,150,20), "Skinned Button");\n    }\n        \n}\n\n\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u5355\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"OnGUI()"),"  \u8c03\u7528\u5373\u53ef\u6309\u9700\u591a\u6b21\u5207\u6362\u76ae\u80a4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/* \u5728\u540c\u4e00\u4e2a OnGUI() \u8c03\u7528\u5207\u6362\u76ae\u80a4\u7684\u793a\u4f8b */\n\n\n// JavaScript\nvar mySkin : GUISkin;\n\nvar toggle = true;\n\nfunction OnGUI () {\n    // \u5c06\u8be5\u76ae\u80a4\u6307\u5b9a\u4e3a\u5f53\u524d\u4f7f\u7528\u7684\u76ae\u80a4\u3002\n    GUI.skin = mySkin;\n\n    // \u521b\u5efa\u5f00\u5173\u3002\u6b64\u65f6\u5c06\u4ece\u5206\u914d\u7ed9 mySkin \u7684\u76ae\u80a4\u83b7\u5f97 "button" \u6837\u5f0f\u3002\n    toggle = GUI.Toggle (Rect (10,10,150,20), toggle, "Skinned Button", "button");\n\n    // \u5c06\u5f53\u524d\u76ae\u80a4\u6307\u5b9a\u4e3a Unity \u7684\u9ed8\u8ba4\u503c\u3002\n    GUI.skin = null;\n\n    // \u521b\u5efa\u6309\u94ae\u3002\u6b64\u65f6\u5c06\u4ece\u5185\u7f6e\u76ae\u80a4\u83b7\u5f97\u9ed8\u8ba4\u7684 "button" \u6837\u5f0f\u3002\n    GUI.Button (Rect (10,35,150,20), "Built-in Button");\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n                    \n    public GUISkin mySkin;\n    private bool toggle = true;\n    \n    void OnGUI () {\n        // \u5c06\u8be5\u76ae\u80a4\u6307\u5b9a\u4e3a\u5f53\u524d\u4f7f\u7528\u7684\u76ae\u80a4\u3002\n        GUI.skin = mySkin;\n    \n        // \u521b\u5efa\u5f00\u5173\u3002\u6b64\u65f6\u5c06\u4ece\u5206\u914d\u7ed9 mySkin \u7684\u76ae\u80a4\u83b7\u5f97 "button" \u6837\u5f0f\u3002\n        toggle = GUI.Toggle (new Rect (10,10,150,20), toggle, "Skinned Button", "button");\n    \n        // \u5c06\u5f53\u524d\u76ae\u80a4\u6307\u5b9a\u4e3a Unity \u7684\u9ed8\u8ba4\u503c\u3002\n        GUI.skin = null;\n    \n        // \u521b\u5efa\u6309\u94ae\u3002\u6b64\u65f6\u5c06\u4ece\u5185\u7f6e\u76ae\u80a4\u83b7\u5f97\u9ed8\u8ba4\u7684 "button" \u6837\u5f0f\u3002\n        GUI.Button (new Rect (10,35,150,20), "Built-in Button");\n    }\n        \n}\n\n\n')),(0,l.kt)("h3",{id:"\u66f4\u6539-gui-\u5b57\u4f53\u5927\u5c0f"},"\u66f4\u6539 GUI \u5b57\u4f53\u5927\u5c0f"),(0,l.kt)("p",null,"\u6b64\u793a\u4f8b\u5c06\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u4ee3\u7801\u6765\u52a8\u6001\u66f4\u6539\u5b57\u4f53\u5927\u5c0f\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u5728 Unity \u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a Fontsize.cs \u7684 C# \u811a\u672c\uff0c\u5e76\u5c06\u4ee5\u4e0b\u4ee3\u7801\u7c98\u8d34\u5230\u5176\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'// C# \u793a\u4f8b\nusing UnityEngine;\n    \nusing System.Collections;\n    \npublic class Fontsize : MonoBehaviour\n{\n    void OnGUI ()\n    {\n        //\u5c06 GUIStyle \u6837\u5f0f\u8bbe\u7f6e\u4e3a\u6807\u7b7e\n        GUIStyle style = GUI.skin.GetStyle ("label");\n        \n        //\u5c06\u6837\u5f0f\u5b57\u4f53\u5927\u5c0f\u8bbe\u7f6e\u4e3a\u968f\u65f6\u95f4\u589e\u5927\u548c\u51cf\u5c0f\n        style.fontSize = (int)(20.0f + 10.0f * Mathf.Sin (Time.time));\n        \n        //\u521b\u5efa\u4e00\u4e2a\u6807\u7b7e\u5e76\u4f7f\u7528\u5f53\u524d\u8bbe\u7f6e\u6765\u663e\u793a\n        GUI.Label (new Rect (10, 10, 200, 80), "Hello World!");\n    }\n        \n}\n')),(0,l.kt)("p",null,"\u4fdd\u5b58\u811a\u672c\u5e76\u5c06\u5176\u9644\u52a0\u5230\u7a7a\u6e38\u620f\u5bf9\u8c61\uff0c\u7136\u540e\u5355\u51fb\u64ad\u653e\u4ee5\u67e5\u770b\u5b57\u4f53\u7684\u5927\u5c0f\u968f\u65f6\u95f4\u5faa\u73af\u589e\u5927\u548c\u51cf\u5c0f\u7684\u884c\u4e3a\u3002\u6b64\u65f6\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u5b57\u4f53\u4e0d\u80fd\u5e73\u6ed1\u5730\u6539\u53d8\u5927\u5c0f\uff0c\u8fd9\u662f\u56e0\u4e3a\u5b57\u4f53\u5927\u5c0f\u4e0d\u662f\u65e0\u9650\u6570\u91cf\u7684\u3002"),(0,l.kt)("p",null,"\u6b64\u7279\u5b9a\u793a\u4f8b\u8981\u6c42\u52a0\u8f7d\u9ed8\u8ba4\u5b57\u4f53 (Arial) \u5e76\u5c06\u5176\u6807\u8bb0\u4e3a\u52a8\u6001\u3002\u65e0\u6cd5\u66f4\u6539\u672a\u6807\u8bb0\u4e3a\u52a8\u6001\u7684\u4efb\u4f55\u5b57\u4f53\u7684\u5927\u5c0f\u3002"))}k.isMDXComponent=!0}}]);