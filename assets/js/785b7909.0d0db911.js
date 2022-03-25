"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77175],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=p(o),m=r,h=l["".concat(s,".").concat(m)]||l[m]||c[m]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}l.displayName="MDXCreateElement"},65274:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),a=["components"],u={id:"android-ChromeOS-support-user-input",title:"Support user input on Chrome OS devices",slug:"/android-chrome-os-developing/android-chrome-os-support-user-input"},s="Support user input on Chrome OS devices",p={unversionedId:"platform-specific/android/android-chrome-os-introducing/android-chrome-os-developing/android-ChromeOS-support-user-input",id:"platform-specific/android/android-chrome-os-introducing/android-chrome-os-developing/android-ChromeOS-support-user-input",title:"Support user input on Chrome OS devices",description:"Unlike Android applications that use touchscreens, many Chrome OS devices are laptops or have a laptop mode. As a result, when you build an application for Chrome OS, you must handle inputs from mice, touchpads, and keyboards. You can use the Player setting  Chrome OS Input Emulation  ( menu: File &gt; Build Settings &gt; Player Settings &gt; Other Settings ) to determine how your application handles user input on Chrome OS devices.",source:"@site/docs/platform-specific/android/android-chrome-os-introducing/android-chrome-os-developing/android-chrome-os-support-user-input.md",sourceDirName:"platform-specific/android/android-chrome-os-introducing/android-chrome-os-developing",slug:"/android-chrome-os-developing/android-chrome-os-support-user-input",permalink:"/doc-unity-manual/docs/android-chrome-os-developing/android-chrome-os-support-user-input",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-chrome-os-introducing/android-chrome-os-developing/android-chrome-os-support-user-input.md",tags:[],version:"current",frontMatter:{id:"android-ChromeOS-support-user-input",title:"Support user input on Chrome OS devices",slug:"/android-chrome-os-developing/android-chrome-os-support-user-input"},sidebar:"tutorialSidebar",previous:{title:"Debugging on a Chrome OS device",permalink:"/doc-unity-manual/docs/android-chrome-os-developing/android-chrome-os-debugging"},next:{title:"Getting started with Chrome OS",permalink:"/doc-unity-manual/docs/android-chrome-os-getting-started"}},d={},c=[{value:"\u6e38\u620f\u548c\u89e6\u63a7\u677f\u8f93\u5165",id:"\u6e38\u620f\u548c\u89e6\u63a7\u677f\u8f93\u5165",level:2},{value:"UI \u548c\u89e6\u6478\u5c4f\u952e\u76d8",id:"ui-\u548c\u89e6\u6478\u5c4f\u952e\u76d8",level:2},{value:"Hover over UI elements",id:"hover-over-ui-elements",level:3}],l={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"support-user-input-on-chrome-os-devices"},"Support user input on Chrome OS devices"),(0,i.kt)("p",null,"Unlike Android applications that use touchscreens, many Chrome OS devices are laptops or have a laptop mode. As a result, when you build an application for Chrome OS, you must handle inputs from mice, touchpads, and keyboards. You can use the Player setting  ",(0,i.kt)("strong",{parentName:"p"},"Chrome OS Input Emulation"),"  ( ",(0,i.kt)("strong",{parentName:"p"},"menu: File ",">"," Build Settings ",">"," Player Settings ",">"," Other Settings")," ) to determine how your application handles user input on Chrome OS devices."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/chromeos-player-settings-input-emulation.png",alt:"Location of Chrome OS Input Emulation Player Setting"})),(0,i.kt)("p",null,"Location of Chrome OS Input Emulation Player Setting"),(0,i.kt)("h2",{id:"\u6e38\u620f\u548c\u89e6\u63a7\u677f\u8f93\u5165"},"\u6e38\u620f\u548c\u89e6\u63a7\u677f\u8f93\u5165"),(0,i.kt)("p",null,"To emulate touchscreen input, Chrome OS automatically converts left+clicks from a mouse or touchpad input into screen taps. As a result, an Android application that you developed for phones and tablets works by default on a Chrome OS device."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Important:"),"  Only left+click and keyboard inputs are supported. Any other inputs are ignored."),(0,i.kt)("p",null,"By default, this behavior is enabled via the  ",(0,i.kt)("strong",{parentName:"p"},"Chrome OS Input Emulation"),"  Player Setting."),(0,i.kt)("p",null,"To support mouse and touchpad input, disable the  ",(0,i.kt)("strong",{parentName:"p"},"Chrome OS Input Emulation"),"  setting. When you disable this option, your application receives the following mouse and touchpad input unchanged:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Left and right mouse clicks (instead of just left)."),(0,i.kt)("li",{parentName:"ul"},"Scroll wheel and touchpad scroll events."),(0,i.kt)("li",{parentName:"ul"},"Updates to the position of the cursor,which allows you to implement mouse-over functionality, such as highlighting components with the cursor.")),(0,i.kt)("p",null,"When you disable this setting, you also need to write Unity input code to handle mouse and touchpad input. The input code must include information on how to read the cursor position, handle mouse and touchpad clicks, and read scrolling evens. For more information on writing input code, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/Input.html"},"Input")," for API script references."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note:"),"  Android and Chrome OS support custom cursors. To customize your cursor, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/WSA.Cursor.SetCustomCursor.html"},"Cursor.SetCustomCursor"),"."),(0,i.kt)("h2",{id:"ui-\u548c\u89e6\u6478\u5c4f\u952e\u76d8"},"UI \u548c\u89e6\u6478\u5c4f\u952e\u76d8"),(0,i.kt)("p",null,"On Android, whenever there is an input field or text field selected, the virtual on-screen keyboard always comes up so that the user can enter text. On Chrome OS, when there is a hardware keyboard available, the on-screen keyboard is not shown or required. When a hardware keyboard is not available, the on-screen keyboard is displayed. This behavior is not affected by the  ",(0,i.kt)("strong",{parentName:"p"},"Chrome OS Input Emulation"),"  Player setting."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note")," : If your Android application prompts the user to open a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/TouchScreenKeyboard.html"},"TouchScreenKeyboard"),", it behaves the same way on Chrome OS."),(0,i.kt)("h3",{id:"hover-over-ui-elements"},"Hover over UI elements"),(0,i.kt)("p",null,"To support hover over functionality, Unity needs the exact mouse position. When in  ",(0,i.kt)("strong",{parentName:"p"},"Chrome OS Input Emulation"),"  mode, the exact mouse information is not available. As a result, you need to disable the  ",(0,i.kt)("strong",{parentName:"p"},"Chrome OS Input Emulation"),"  setting to support hover over in your application."))}m.isMDXComponent=!0}}]);