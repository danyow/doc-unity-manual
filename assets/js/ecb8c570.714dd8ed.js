"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21088],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,g=u["".concat(l,".").concat(f)]||u[f]||s[f]||r;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83328:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],d={id:"deep-linking-android",title:"Deep linking on Android",slug:"/android-developing/deep-linking-android"},l="Deep linking on Android",p={unversionedId:"platform-specific/android/android-developing/deep-linking-android",id:"platform-specific/android/android-developing/deep-linking-android",title:"Deep linking on Android",description:"Deep links are URL links outside of your application that direct users to a location in your application. When the user clicks a deep link for an application, the operating system opens the Unity application at a specified place (for example, a specific scene). For more information about deep links and how to use them, see Deep links.",source:"@site/docs/platform-specific/android/android-developing/deep-linking-android.md",sourceDirName:"platform-specific/android/android-developing",slug:"/android-developing/deep-linking-android",permalink:"/docs/android-developing/deep-linking-android",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-developing/deep-linking-android.md",tags:[],version:"current",frontMatter:{id:"deep-linking-android",title:"Deep linking on Android",slug:"/android-developing/deep-linking-android"},sidebar:"tutorialSidebar",previous:{title:"Android thread configuration",permalink:"/docs/android-developing/android-thread-configuration"},next:{title:"Play \u8d44\u6e90\u4ea4\u4ed8",permalink:"/docs/android-developing/play-asset-delivery"}},c={},s=[{value:"Enabling deep linking for Android applications",id:"enabling-deep-linking-for-android-applications",level:2},{value:"Using deep linking on Android",id:"using-deep-linking-on-android",level:2}],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deep-linking-on-android"},"Deep linking on Android"),(0,r.kt)("p",null,"Deep links are URL links outside of your application that direct users to a location in your application. When the user clicks a deep link for an application, the operating system opens the Unity application at a specified place (for example, a specific scene). For more information about deep links and how to use them, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-specific/deep-linking"},"Deep links"),"."),(0,r.kt)("h2",{id:"enabling-deep-linking-for-android-applications"},"Enabling deep linking for Android applications"),(0,r.kt)("p",null,"Before you can process deep links, you need to configure your application to react to them. This section contains instructions on how set up deep links for Android."),(0,r.kt)("p",null,"To enable deep linking for Android applications, use an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/intents-filters"},"intent filter"),". An intent filter overrides the standard ",(0,r.kt)("a",{parentName:"p",href:"/docs/android-introducing/android-manifest"},"Android App Manifest")," to include a specific intent filter section for ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/app/Activity"},"Activity"),". To set up an intent filter:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Project window, go to  ",(0,r.kt)("strong",{parentName:"li"},"Assets"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Plugins"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Android")," ."),(0,r.kt)("li",{parentName:"ol"},"Create a new file and call it AndroidManifest.xml. Unity automatically processes this file when you build your application."),(0,r.kt)("li",{parentName:"ol"},"Copy the following code sample into the new file and save it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'&lt;?xml version="1.0" encoding="utf-8"?&gt;\n&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"&gt;\n  &lt;application&gt;\n    &lt;activity android:name="com.unity3d.player.UnityPlayerActivity" android:theme="@style/UnityThemeSelector" &gt;\n      &lt;intent-filter&gt;\n        &lt;action android:name="android.intent.action.MAIN" /&gt;\n        &lt;category android:name="android.intent.category.LAUNCHER" /&gt;\n      &lt;/intent-filter&gt;\n      &lt;intent-filter&gt;\n        &lt;action android:name="android.intent.action.VIEW" /&gt;\n        &lt;category android:name="android.intent.category.DEFAULT" /&gt;\n        &lt;category android:name="android.intent.category.BROWSABLE" /&gt;\n        &lt;data android:scheme="unitydl" android:host="mylink" /&gt;\n      &lt;/intent-filter&gt;\n    &lt;/activity&gt;\n  &lt;/application&gt;\n&lt;/manifest&gt;\n')),(0,r.kt)("p",null,"Your Android application now opens when the device processes any link that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"unitydl://"),"."),(0,r.kt)("h2",{id:"using-deep-linking-on-android"},"Using deep linking on Android"),(0,r.kt)("p",null,"After you enable deep links for Android, the way that you use them is platform-agnostic. For information on how to handle deep links when your application opens, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform-specific/deep-linking#using-deep-links"},"Using deep links"),"."))}f.isMDXComponent=!0}}]);