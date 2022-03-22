"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81263],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"GameView",title:"Game \u89c6\u56fe",slug:"/using-the-editor/game-view"},s="Game \u89c6\u56fe",m={unversionedId:"unity-overview/using-the-editor/GameView",id:"unity-overview/using-the-editor/GameView",title:"Game \u89c6\u56fe",description:"The Game view is rendered from the Camera(s) in your application. It shows how the final, built application looks. You need to use one or more Cameras to control what the player sees when they are using your application. For more information about Cameras, see the Camera Component page.",source:"@site/docs/unity-overview/using-the-editor/game-view.md",sourceDirName:"unity-overview/using-the-editor",slug:"/using-the-editor/game-view",permalink:"/docs/using-the-editor/game-view",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/using-the-editor/game-view.md",tags:[],version:"current",frontMatter:{id:"GameView",title:"Game \u89c6\u56fe",slug:"/using-the-editor/game-view"},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u8f91\u5c5e\u6027",permalink:"/docs/using-the-editor/editing-value-properties"},next:{title:"Hierarchy \u7a97\u53e3",permalink:"/docs/using-the-editor/hierarchy"}},p={},u=[{value:"\u64ad\u653e\u6a21\u5f0f",id:"\u64ad\u653e\u6a21\u5f0f",level:2},{value:"Using the Simulator view",id:"using-the-simulator-view",level:2},{value:"Game \u89c6\u56fe\u63a7\u5236\u680f",id:"game-\u89c6\u56fe\u63a7\u5236\u680f",level:2},{value:"Gizmos \u83dc\u5355",id:"gizmos-\u83dc\u5355",level:2},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"game-\u89c6\u56fe"},"Game \u89c6\u56fe"),(0,o.kt)("p",null,"The Game view is rendered from the Camera(s) in your application. It shows how the final, built application looks. You need to use one or more Cameras to control what the player sees when they are using your application. For more information about Cameras, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cameras-overview/class-camera"},"Camera Component page"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/game-view-window.png",alt:"game-view-window.png"})),(0,o.kt)("p",null,"Unity lets you switch between the Game view and the Simulator view. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/device-simulator/device-simulator-view"},"Simulator view")," shows how your built application looks on a mobile device."),(0,o.kt)("h2",{id:"\u64ad\u653e\u6a21\u5f0f"},"\u64ad\u653e\u6a21\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Editor-PlayButtons.png",alt:"Editor-PlayButtons.png"})),(0,o.kt)("p",null,"The Play mode lets you run your project and see how it works as it would in a built application. Use the buttons in the Toolbar to control the Play mode. In Play mode, any changes you make are temporary, and are reset when you exit Play mode. When you enter the Play mode, Unity darkens parts of the interface outside the Game view."),(0,o.kt)("h2",{id:"using-the-simulator-view"},"Using the Simulator view"),(0,o.kt)("p",null,"Use the Simulator view to preview how your built application looks on a mobile device. To switch between Game and ",(0,o.kt)("a",{parentName:"p",href:"/docs/device-simulator/device-simulator-view"},"Simulator")," views, in the  ",(0,o.kt)("strong",{parentName:"p"},"Game/Simulator"),"  tab, select the appropriate option from the  ",(0,o.kt)("strong",{parentName:"p"},"Game/Simulator"),"  menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gameview-simulator.png",alt:"gameview-simulator.png"})),(0,o.kt)("p",null,"Alternatively, you can go to  ",(0,o.kt)("strong",{parentName:"p"},"Window ",">"," General")," , and select  ",(0,o.kt)("strong",{parentName:"p"},"Game"),"  or  ",(0,o.kt)("strong",{parentName:"p"},"Device Simulator"),"  from the menu to open the required window. If there are no instances of Game or Simulator windows open, by default they\u2019ll open as a floating window. However, if one of the windows is already open somewhere in the interface, then trying to open it from the menu will bring it into focus."),(0,o.kt)("h2",{id:"game-\u89c6\u56fe\u63a7\u5236\u680f"},"Game \u89c6\u56fe\u63a7\u5236\u680f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GameViewControlBar.png",alt:"GameViewControlBar.png"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u6309\u94ae")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Game/Simulator")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this menu to enable the  ",(0,o.kt)("strong",{parentName:"td"},"Game"),"  or  ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"/docs/device-simulator/device-simulator-view"},"Simulator")),"  view.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u663e\u793a\u5c4f")),(0,o.kt)("td",{parentName:"tr",align:null},"If you have multiple Cameras in the Scene, select the appropriate option to switch between them. By default, this is set to  ",(0,o.kt)("strong",{parentName:"td"},"Display 1")," . You can assign Displays to Cameras in the Camera module, under  ",(0,o.kt)("strong",{parentName:"td"},"Target Display")," .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Aspect ratio")),(0,o.kt)("td",{parentName:"tr",align:null},"Select from the available values to test how your game looks on monitors with different aspect ratios. By default, this is set to  ",(0,o.kt)("strong",{parentName:"td"},"Free Aspect")," .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},"Low Resolution Aspect Ratios")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable  ",(0,o.kt)("strong",{parentName:"td"},"Low Resolution Aspect Ratios"),"  to emulate the pixel density of older displays, which reduces the resolution of the Game view when an aspect ratio is selected. It is always enabled when the Game view is on a non-Retina display.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Scale \u6ed1\u52a8\u6761")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5411\u53f3\u6eda\u52a8\u53ef\u653e\u5927\u5e76\u66f4\u8be6\u7ec6\u5730\u68c0\u67e5\u6e38\u620f\u5c4f\u5e55\u7684\u533a\u57df\u3002\u8bbe\u5907\u5206\u8fa8\u7387\u9ad8\u4e8e Game \u89c6\u56fe\u7a97\u53e3\u5927\u5c0f\u7684\u60c5\u51b5\u4e0b\uff0c\u6b64\u6ed1\u52a8\u6761\u53ef\u7f29\u5c0f\u89c6\u56fe\u4ee5\u67e5\u770b\u6574\u4e2a\u5c4f\u5e55\u3002\u5728\u5e94\u7528\u7a0b\u5e8f\u505c\u6b62\u6216\u6682\u505c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6eda\u8f6e\u548c\u9f20\u6807\u4e2d\u952e\u6765\u6267\u884c\u6b64\u64cd\u4f5c\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Play Mode behavior")),(0,o.kt)("td",{parentName:"tr",align:null},"This section describes the play mode behavior based on your selection below.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},"Focused")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable Focused to shift focus on the selected Game view while the Editor is in Play mode. ",(0,o.kt)("br",null)," Only one game view can be in focus when you enter the Play mode. Using Maximized or Fullscreen on Display mode implies focus on the Maximized Game view. Enabling Focussed on a Game view disables it on other Game views.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},"VSync (Game view only)")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable  ",(0,o.kt)("strong",{parentName:"td"},"VSync (Game view only)"),"  to allow syncing, which is useful when recording a video, for example. Unity attempts to render the Game view at the monitor refresh rate, though this is not guaranteed. When this option is enabled, it is still useful to maximize the Game view in Play mode to hide other views and reduce the number of views that Unity renders.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Enter Play Mode:")),(0,o.kt)("td",{parentName:"tr",align:null},"Choose from the options below to determine the settings for the Editor when it enters the Play mode.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},"Normally")),(0,o.kt)("td",{parentName:"tr",align:null},"Select this to view the Game view without forcing focus or maximizing any views to full screen.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},"Maximized")),(0,o.kt)("td",{parentName:"tr",align:null},"When this option is selected, Unity runs the Play mode with the Game view maximized to 100% of the Editor window.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"->  ",(0,o.kt)("strong",{parentName:"td"},"Fullscreen On Display X")),(0,o.kt)("td",{parentName:"tr",align:null},"Select this to enter Play mode in a borderless full-screen window on the selected display. The number of full-screen options that appear in the menu depends on the number of connected displays detected by Unity on start-up. Typically, most full-screen options are listed as Generic PnP Monitor in the menu except when specific display drivers are installed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Mute audio")),(0,o.kt)("td",{parentName:"tr",align:null},"Click to enable: use this to mute any in-application audio when you enter the Play mode.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Stats")),(0,o.kt)("td",{parentName:"tr",align:null},"Click this to show or hide the Statistics overlay, which contains ",(0,o.kt)("a",{parentName:"td",href:"/docs/graphics-performance-profiling/rendering-statistics"},"Rendering Statistics")," about your application\u2019s audio and graphics. The overlay lets you monitor the performance of your application while in Play mode.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Gizmos")),(0,o.kt)("td",{parentName:"tr",align:null},"Click this to show or hide the visibility of ",(0,o.kt)("a",{parentName:"td",href:"/docs/using-the-scene-view/gizmos-menu"},"Gizmos"),". To only show certain types of Gizmos in the Play mode, from the  ",(0,o.kt)("strong",{parentName:"td"},"Gizmos"),"  menu, only enable the Gizmo types you want to see.")))),(0,o.kt)("h2",{id:"gizmos-\u83dc\u5355"},"Gizmos \u83dc\u5355"),(0,o.kt)("p",null,"Gizmos \u83dc\u5355\u5305\u542b\u7684\u4e00\u4e9b\u9009\u9879\u7528\u4e8e\u63a7\u5236 Unity \u5982\u4f55\u5728 Scene \u89c6\u56fe\u548c Game \u89c6\u56fe\u4e2d\u663e\u793a\u6e38\u620f\u5bf9\u8c61\u7684\u8f85\u52a9\u56fe\u6807\u4ee5\u53ca\u5176\u4ed6\u9879\u3002\u6b64\u83dc\u5355\u5728 Scene \u89c6\u56fe\u548c Game \u89c6\u56fe\u4e2d\u5747\u53ef\u7528\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/using-the-scene-view/gizmos-menu"},"Gizmos \u83dc\u5355"),"\u3002"),(0,o.kt)("h2",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,o.kt)("p",null,"Right-click the  ",(0,o.kt)("strong",{parentName:"p"},"Game"),"  tab to display advanced Game view options."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/GameView-AdvancedOptions.png",alt:"GameView-AdvancedOptions.png"})),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Warn if No Cameras Rendering")," : This option is enabled by default. It causes Unity to display a warning if no Cameras are rendering to the screen; e.g., for diagnosing problems such as accidentally deleting or disabling a Camera. Leave this enabled unless you are intentionally not using Cameras to render your application."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Clear Every Frame in Edit Mode")," : This option is enabled by default. It causes Unity to clear the Game view from every frame when your application is not playing. This prevents smearing effects while you are configuring your application. Leave this enabled unless you are depending on the previous frame\u2019s contents when not in the Play mode."),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ece ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.2/Documentation/Manual/30_search.html?q=newin20182"},"2018.2")," \u7248\u5f00\u59cb\u5728 Windows \u4e0a\u63d0\u4f9b\u4e86  ",(0,o.kt)("strong",{parentName:"li"},"Low Resolution Aspect Ratios"),"  Game \u89c6\u56fe\u9009\u9879 NewIn20182")))}c.isMDXComponent=!0}}]);