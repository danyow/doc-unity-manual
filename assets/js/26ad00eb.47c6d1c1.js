"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88480],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,f=m["".concat(d,".").concat(s)]||m[s]||u[s]||o;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41250:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"android-API",title:"Android \u79fb\u52a8\u7aef\u811a\u672c",slug:"/android-developing/android-api"},d="Android \u79fb\u52a8\u7aef\u811a\u672c",p={unversionedId:"platform-specific/android/android-developing/android-API",id:"platform-specific/android/android-developing/android-API",title:"Android \u79fb\u52a8\u7aef\u811a\u672c",description:"\u6ce8\u610f\uff1a \u5bf9\u4e8e\u8de8\u5e73\u53f0\u9879\u76ee\uff0c\u8bf7\u4f7f\u7528 UNITY_ANDROID #define \u6307\u4ee4\u6309\u6761\u4ef6\u7f16\u8bd1 Android \u7279\u5b9a\u7684 C# \u4ee3\u7801\u3002\u8bf7\u53c2\u9605\u6709\u5173\u5e73\u53f0\u76f8\u5173\u7684\u7f16\u8bd1\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002",source:"@site/docs/platform-specific/android/android-developing/android-api.md",sourceDirName:"platform-specific/android/android-developing",slug:"/android-developing/android-api",permalink:"/docs/android-developing/android-api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-developing/android-api.md",tags:[],version:"current",frontMatter:{id:"android-API",title:"Android \u79fb\u52a8\u7aef\u811a\u672c",slug:"/android-developing/android-api"},sidebar:"tutorialSidebar",previous:{title:"Developing for Android",permalink:"/docs/android-developing"},next:{title:"Device features and permissions",permalink:"/docs/android-device-features-and-permissions"}},c={},u=[{value:"\u8bbf\u95ee\u8bbe\u5907\u7279\u6709\u7684\u529f\u80fd\u548c\u5c5e\u6027",id:"\u8bbf\u95ee\u8bbe\u5907\u7279\u6709\u7684\u529f\u80fd\u548c\u5c5e\u6027",level:2},{value:"\u632f\u52a8\u652f\u6301",id:"\u632f\u52a8\u652f\u6301",level:3},{value:"\u6d3b\u52a8\u6307\u793a\u5668",id:"\u6d3b\u52a8\u6307\u793a\u5668",level:3},{value:"\u53cd\u76d7\u7248\u68c0\u67e5",id:"\u53cd\u76d7\u7248\u68c0\u67e5",level:2},{value:"\u5c4f\u5e55\u65b9\u5411",id:"\u5c4f\u5e55\u65b9\u5411",level:2}],m={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-\u79fb\u52a8\u7aef\u811a\u672c"},"Android \u79fb\u52a8\u7aef\u811a\u672c"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5bf9\u4e8e\u8de8\u5e73\u53f0\u9879\u76ee\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"UNITY_ANDROID")," #define \u6307\u4ee4\u6309\u6761\u4ef6\u7f16\u8bd1 Android \u7279\u5b9a\u7684 C# \u4ee3\u7801\u3002\u8bf7\u53c2\u9605\u6709\u5173",(0,o.kt)("a",{parentName:"p",href:"/docs/platform-dependent-compilation"},"\u5e73\u53f0\u76f8\u5173\u7684\u7f16\u8bd1"),"\u7684\u6587\u6863\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u8bbf\u95ee\u8bbe\u5907\u7279\u6709\u7684\u529f\u80fd\u548c\u5c5e\u6027"},"\u8bbf\u95ee\u8bbe\u5907\u7279\u6709\u7684\u529f\u80fd\u548c\u5c5e\u6027"),(0,o.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Input.html"},"Input")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Handheld.html"},"Handheld")," \u7c7b\u6765\u8bbf\u95ee Android \u8bbe\u5907\u7684\u5927\u591a\u6570\u529f\u80fd\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/mobile-input"},"\u79fb\u52a8\u8bbe\u5907\u8f93\u5165")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/mobile-input/mobile-keyboard"},"\u79fb\u52a8\u952e\u76d8"))),(0,o.kt)("h3",{id:"\u632f\u52a8\u652f\u6301"},"\u632f\u52a8\u652f\u6301"),(0,o.kt)("p",null,"\u53ef\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Handheld.Vibrate.html"},"Handheld.Vibrate")," \u6765\u89e6\u53d1\u632f\u52a8\u3002\u4e0d\u542b\u632f\u52a8\u786c\u4ef6\u7684\u8bbe\u5907\u5c06\u5ffd\u7565\u6b64\u8c03\u7528\u3002"),(0,o.kt)("h3",{id:"\u6d3b\u52a8\u6307\u793a\u5668"},"\u6d3b\u52a8\u6307\u793a\u5668"),(0,o.kt)("p",null,"\u79fb\u52a8\u64cd\u4f5c\u7cfb\u7edf\u5177\u6709\u5185\u7f6e\u6d3b\u52a8\u6307\u793a\u5668\uff1b\u5e94\u7528\u7a0b\u5e8f\u53ef\u5728\u6162\u901f\u64cd\u4f5c\u671f\u95f4\u4f7f\u7528\u8fd9\u4e9b\u6307\u793a\u5668\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Handheld.StartActivityIndicator.html"},"Handheld.StartActivityIndicator"),"\u3002"),(0,o.kt)("p",null,"\u8981\u8bbf\u95ee\u8bbe\u5907\u7279\u6709\u7684\u5c5e\u6027\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u811a\u672c")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u8bbe\u5907\u5c5e\u6027")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/SystemInfo-deviceUniqueIdentifier.html"},"SystemInfo.deviceUniqueIdentifier")),(0,o.kt)("td",{parentName:"tr",align:null},"\u59cb\u7ec8\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"td"},"ANDROID_ID")," \u7684 md5\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Android \u5f00\u53d1\u8005\u6587\u6863\u7684 ",(0,o.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID"},"ANDROID","_","ID")," \u90e8\u5206\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/SystemInfo-deviceName.html"},"SystemInfo.deviceName")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u8bbe\u5907\u540d\u79f0\u3002\u5bf9\u4e8e Android \u8bbe\u5907\uff0cUnity \u4f1a\u5c1d\u8bd5\u4ece\u5b89\u5168\u7cfb\u7edf\u8bbe\u7f6e\u4e2d\u8bfb\u53d6 ",(0,o.kt)("inlineCode",{parentName:"td"},"device_name")," \u548c ",(0,o.kt)("inlineCode",{parentName:"td"},"bluetooth_name"),"\u3002\u5982\u679c\u8fd9\u4e9b\u5b57\u7b26\u4e32\u6ca1\u6709\u503c\uff0cUnity \u5c06\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"td"},"&lt;unknown&gt;"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/SystemInfo-deviceModel.html"},"SystemInfo.deviceModel")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u8bbe\u5907\u578b\u53f7\u3002\u8fd9\u901a\u5e38\u5305\u62ec\u5236\u9020\u5546\u540d\u79f0\u548c\u578b\u53f7\uff08\u4f8b\u5982\u201cLGE Nexus 5\u201d\u6216\u201cSAMSUNG-SM-G900A\u201d\uff09\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/SystemInfo-operatingSystem.html"},"SystemInfo.operatingSystem")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u64cd\u4f5c\u7cfb\u7edf\u540d\u79f0\u548c\u7248\u672c\u3002")))),(0,o.kt)("h2",{id:"\u53cd\u76d7\u7248\u68c0\u67e5"},"\u53cd\u76d7\u7248\u68c0\u67e5"),(0,o.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u6709\u5173\u7528\u6237\u7684\u8bb8\u53ef\u4fe1\u606f\u5e76\u9632\u6b62\u76d7\u7248\uff0cGoogle \u63d0\u4f9b\u4e86\u4e00\u9879\u79f0\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/google/play/licensing"},"Google Play \u5e94\u7528\u8bb8\u53ef (Google Play Application Licensing)")," \u7684\u670d\u52a1\u3002\u8bf7\u53c2\u9605 Asset Store \u4e0a\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/tools/utilities/google-play-application-license-verification-3190"},"Google Play \u5e94\u7528\u8bb8\u53ef\u8bc1\u9a8c\u8bc1 (Google Play Application License Verification)")," \u793a\u4f8b\u63d2\u4ef6\uff0c\u67e5\u770b\u8be5\u793a\u4f8b\u5982\u4f55\u5c06\u6b64\u529f\u80fd\u96c6\u6210\u5230 Unity \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u8fd8\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/GooglePlayLicenseVerification"},"GitHub \u4ee3\u7801\u4ed3\u5e93"),"\u4e0b\u8f7d\u63d2\u4ef6\u6e90\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"\u5c4f\u5e55\u65b9\u5411"},"\u5c4f\u5e55\u65b9\u5411"),(0,o.kt)("p",null,"\u53ef\u5728 iOS \u548c Android \u8bbe\u5907\u4e0a\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u7684\u5c4f\u5e55\u65b9\u5411\u3002\u68c0\u6d4b\u65b9\u5411\u53d8\u5316\u6216\u5f3a\u5236\u4f7f\u7528\u7279\u5b9a\u65b9\u5411\u5bf9\u4e8e\u521b\u5efa\u4e00\u4e9b\u53d6\u51b3\u4e8e\u7528\u6237\u5982\u4f55\u63e1\u6301\u8bbe\u5907\u7684\u6e38\u620f\u884c\u4e3a\u5f88\u6709\u7528\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-orientation.html"},"Screen.orientation")," \u5c5e\u6027\u6765\u83b7\u53d6\u8bbe\u5907\u65b9\u5411\u3002\u5141\u8bb8\u7684\u65b9\u5411\u5982\u4e0b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u65b9\u5411")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u884c\u4e3a")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Portrait")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5904\u4e8e\u7eb5\u5411\u6a21\u5f0f\uff0c\u76f4\u7acb\u63e1\u6301\u8bbe\u5907\uff0c\u4e3b\u5c4f\u5e55\u6309\u94ae\u4f4d\u4e8e\u5e95\u90e8\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PortraitUpsideDown")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5904\u4e8e\u7eb5\u5411\u6a21\u5f0f\uff0c\u4f46\u662f\u4e0a\u4e0b\u98a0\u5012\uff0c\u76f4\u7acb\u63e1\u6301\u8bbe\u5907\uff0c\u4e3b\u5c4f\u5e55\u6309\u94ae\u4f4d\u4e8e\u9876\u90e8\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LandscapeLeft")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5904\u4e8e\u6a2a\u5411\u6a21\u5f0f\uff0c\u76f4\u7acb\u63e1\u6301\u8bbe\u5907\uff0c\u4e3b\u5c4f\u5e55\u6309\u94ae\u4f4d\u4e8e\u53f3\u4fa7\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"LandscapeRight")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u5904\u4e8e\u6a2a\u5411\u6a21\u5f0f\uff0c\u76f4\u7acb\u63e1\u6301\u8bbe\u5907\uff0c\u4e3b\u5c4f\u5e55\u6309\u94ae\u4f4d\u4e8e\u5de6\u4fa7\u3002")))),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-orientation.html"},"Screen.orientation")," \u8bbe\u7f6e\u4e3a\u4e0a\u8ff0\u65b9\u5411\u4e4b\u4e00\uff0c\u6216\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ScreenOrientation.AutoRotation.html"},"ScreenOrientation.AutoRotation")," \u6765\u63a7\u5236\u5c4f\u5e55\u65b9\u5411\u3002\u542f\u7528\u81ea\u52a8\u65cb\u8f6c\u540e\uff0c\u4ecd\u53ef\u6839\u636e\u5177\u4f53\u60c5\u51b5\u7981\u7528\u67d0\u4e2a\u65b9\u5411\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u6765\u63a7\u5236\u81ea\u52a8\u65cb\u8f6c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-autorotateToPortrait.html"},"Screen.autorotateToPortrait")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-autorotateToPortraitUpsideDown.html"},"Screen.autorotateToPortraitUpsideDown")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-autorotateToLandscapeLeft.html"},"Screen.autorotateToLandscapeLeft")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Screen-autorotateToLandscapeRight.html"},"Screen.autorotateToLandscapeRight"))))}s.isMDXComponent=!0}}]);