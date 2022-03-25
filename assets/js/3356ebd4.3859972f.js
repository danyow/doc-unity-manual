"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16996],{3905:function(e,i,t){t.d(i,{Zo:function(){return l},kt:function(){return c}});var n=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?s(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var i=n.useContext(d),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},l=function(e){var i=p(e.components);return n.createElement(d.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},m=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||s;return t?n.createElement(h,a(a({ref:i},l),{},{components:t})):n.createElement(h,a({ref:i},l))}));function c(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var o={};for(var d in i)hasOwnProperty.call(i,d)&&(o[d]=i[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17363:function(e,i,t){t.r(i),t.d(i,{assets:function(){return l},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"android-permissions-in-unity",title:"Android permissions in Unity",slug:"/android-device-features-and-permissions/android-permissions-in-unity"},d="Android permissions in Unity",p={unversionedId:"platform-specific/android/android-developing/android-device-features-and-permissions/android-permissions-in-unity",id:"platform-specific/android/android-developing/android-device-features-and-permissions/android-permissions-in-unity",title:"Android permissions in Unity",description:"To get permission to access device features or data outside of your Unity application\u2019s sandbox, there are two stages:",source:"@site/docs/platform-specific/android/android-developing/android-device-features-and-permissions/android-permissions-in-unity.md",sourceDirName:"platform-specific/android/android-developing/android-device-features-and-permissions",slug:"/android-device-features-and-permissions/android-permissions-in-unity",permalink:"/doc-unity-manual/docs/android-device-features-and-permissions/android-permissions-in-unity",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-developing/android-device-features-and-permissions/android-permissions-in-unity.md",tags:[],version:"current",frontMatter:{id:"android-permissions-in-unity",title:"Android permissions in Unity",slug:"/android-device-features-and-permissions/android-permissions-in-unity"},sidebar:"tutorialSidebar",previous:{title:"Declare permissions for an application",permalink:"/doc-unity-manual/docs/android-device-features-and-permissions/android-permissions-declare"},next:{title:"Request runtime permissions",permalink:"/doc-unity-manual/docs/android-device-features-and-permissions/android-requesting-permissions"}},l={},u=[{value:"Declare permissions",id:"declare-permissions",level:2},{value:"Runtime permissions",id:"runtime-permissions",level:2},{value:"Unity-handled permissions",id:"unity-handled-permissions",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],m={toc:u};function c(e){var i=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"android-permissions-in-unity"},"Android permissions in Unity"),(0,s.kt)("p",null,"To get permission to access device features or data outside of your Unity application\u2019s sandbox, there are two stages:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"At build time, declare the permission in the application\u2019s ",(0,s.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"Android App Manifest"),"."),(0,s.kt)("li",{parentName:"ol"},"At runtime, request permission from the user.")),(0,s.kt)("p",null,"For some permissions, Unity automatically handles both the build-time Android App Manifest entries and runtime permission requests. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"#unity-handled-permissions"},"Unity-handled permissions"),"."),(0,s.kt)("h2",{id:"declare-permissions"},"Declare permissions"),(0,s.kt)("p",null,"An Android application can only request the user for permission to use device features or data that it declares in its Android App Manifest. This is the build-time stage of Android permission handling. For information on how to declare permissions, see ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-device-features-and-permissions/android-permissions-declare"},"Declare permissions for an application"),"."),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"Note")," : If a plug-in declares a permission in its Android App Manifest, Gradle automatically adds the permission to the final Android App Manifest during the Gradle merge stage"),(0,s.kt)("h2",{id:"runtime-permissions"},"Runtime permissions"),(0,s.kt)("p",null,"You can request runtime permissions at any time while the application is running. It\u2019s best practice to request permission for restricted data or a device feature when the application requires the data/feature for the first time. You should also show the user a message that explains why the application requires the data/feature before you send the request. This is important to give users context so they are less likely to deny the permission out of confusion."),(0,s.kt)("p",null,"For information on how to request permission at runtime, see ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-device-features-and-permissions/android-requesting-permissions"},"Request runtime permissions"),"."),(0,s.kt)("p",null," ",(0,s.kt)("strong",{parentName:"p"},"Important")," : If you try to request the user for a permission that the Android App Manifest doesn\u2019t declare, the device doesn\u2019t show the permission dialogue."),(0,s.kt)("h2",{id:"unity-handled-permissions"},"Unity-handled permissions"),(0,s.kt)("p",null,"Depending on the ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Player Settings")," and Unity APIs that the application uses, Unity automatically adds some required permissions to the Android App Manifest and sends permission requests at runtime. This also applies to any plug-ins that the application uses."),(0,s.kt)("p",null,"To stop Unity from automatically sending permission requests at runtime, add ",(0,s.kt)("inlineCode",{parentName:"p"},"unityplayer.SkipPermissionsDialog")," to the Android App Manifest. This is useful if you want to provide information about why the application requires each permission before the user sees the permission request. In this case, you need to send the permission requests manually. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-device-features-and-permissions/android-requesting-permissions"},"Request runtime permissions"),"."),(0,s.kt)("p",null,"The following list explains which permissions Unity handles automatically:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the application uses the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Network.html"},"Network")," class, Unity adds the ",(0,s.kt)("inlineCode",{parentName:"li"},"INTERNET")," permission to the Android App Manifest and requests permission from the user the first time that the application uses ",(0,s.kt)("inlineCode",{parentName:"li"},"Network"),"."),(0,s.kt)("li",{parentName:"ul"},"If the application uses vibration such as ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Handheld.Vibrate.html"},"Handheld.Vibrate"),", Unity adds the ",(0,s.kt)("inlineCode",{parentName:"li"},"VIBRATE")," permission to the Android App Manifest and requests permission from the user the first time that the application uses vibration."),(0,s.kt)("li",{parentName:"ul"},"If the application uses the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-internetReachability.html"},"InternetReachability")," property, Unity adds the ",(0,s.kt)("inlineCode",{parentName:"li"},"ACCESS_NETWORK_STATE")," permission to the Android App Manifest and requests permission from the user the first time that the application uses ",(0,s.kt)("inlineCode",{parentName:"li"},"Application.InternetReachability"),"."),(0,s.kt)("li",{parentName:"ul"},"If the application uses a location API such as ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/LocationService.html"},"LocationService"),", Unity adds the ",(0,s.kt)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION")," permission to the Android App Manifest and requests permission from the user the first time that the application uses location."),(0,s.kt)("li",{parentName:"ul"},"If the application uses the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/WebCamTexture.html"},"WebCamTexture")," class Unity adds the ",(0,s.kt)("inlineCode",{parentName:"li"},"CAMERA")," permission to the Android App Manifest and requests permission from the user the first time that the application uses ",(0,s.kt)("inlineCode",{parentName:"li"},"WebCamTexture"),"."),(0,s.kt)("li",{parentName:"ul"},"If the application uses the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Microphone.html"},"Microphone")," class adds the ",(0,s.kt)("inlineCode",{parentName:"li"},"RECORD_AUDIO")," permission to the Android App Manifest and requests permission from the user the first time that the application uses ",(0,s.kt)("inlineCode",{parentName:"li"},"Microphone"),".")),(0,s.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-device-features-and-permissions/android-permissions-declare"},"Declare permissions for an application")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-device-features-and-permissions/android-requesting-permissions"},"Request runtime permissions"))))}c.isMDXComponent=!0}}]);