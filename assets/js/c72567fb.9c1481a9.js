"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91312],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6321:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],d={id:"android-sdksetup",title:"Android \u73af\u5883\u8bbe\u7f6e",slug:"/android-getting-started/android-sdksetup"},l="Android \u73af\u5883\u8bbe\u7f6e",s={unversionedId:"platform-specific/android/android-getting-started/android-sdksetup",id:"platform-specific/android/android-getting-started/android-sdksetup",title:"Android \u73af\u5883\u8bbe\u7f6e",description:"To create a Unity application for Android, you first need to set up your Unity project to support Android. To support Android, a Unity project requires the following dependencies:",source:"@site/docs/platform-specific/android/android-getting-started/android-sdksetup.md",sourceDirName:"platform-specific/android/android-getting-started",slug:"/android-getting-started/android-sdksetup",permalink:"/doc-unity-manual/docs/android-getting-started/android-sdksetup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-getting-started/android-sdksetup.md",tags:[],version:"current",frontMatter:{id:"android-sdksetup",title:"Android \u73af\u5883\u8bbe\u7f6e",slug:"/android-getting-started/android-sdksetup"},sidebar:"tutorialSidebar",previous:{title:"Keystore Manager window reference",permalink:"/doc-unity-manual/docs/android-keystore/android-keystore-manager"},next:{title:"Android Player \u8bbe\u7f6e",permalink:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"}},p={},u=[{value:"Installing dependencies",id:"installing-dependencies",level:2},{value:"Customizing dependencies",id:"customizing-dependencies",level:3},{value:"Supported dependency versions",id:"supported-dependency-versions",level:4},{value:"SDK",id:"sdk",level:5},{value:"NDK",id:"ndk",level:5},{value:"JDK",id:"jdk",level:5},{value:"Setting the Android SDK Target API",id:"setting-the-android-sdk-target-api",level:2},{value:"Chrome OS",id:"chrome-os",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-\u73af\u5883\u8bbe\u7f6e"},"Android \u73af\u5883\u8bbe\u7f6e"),(0,o.kt)("p",null,"To create a Unity application for Android, you first need to set up your Unity project to support Android. To support Android, a Unity project requires the following dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The  ",(0,o.kt)("strong",{parentName:"li"},"Android Build Support"),"  module."),(0,o.kt)("li",{parentName:"ul"},"The Android Software Development Kit (SDK)."),(0,o.kt)("li",{parentName:"ul"},"The Native Development Kit (NDK)."),(0,o.kt)("li",{parentName:"ul"},"A Java Development Kit. By default, Unity uses ",(0,o.kt)("a",{parentName:"li",href:"http://openjdk.java.net/"},"OpenJDK"),".")),(0,o.kt)("p",null,"Before you get started, check Unity\u2019s ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-requirements-and-compatibility"},"Requirements and compatibility documentation")," for Android to make sure you\u2019re aware of any limitations for developing a Unity application for Android."),(0,o.kt)("h2",{id:"installing-dependencies"},"Installing dependencies"),(0,o.kt)("p",null,"Unity distributes dependencies as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/hub/manual/AddModules.html"},"modules")," which means you use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/hub/manual/index.html"},"Unity Hub")," to install them. You can install them either when you install a new Unity Editor version, or add them to an existing Unity Editor install. To install modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At install time, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/hub/manual/InstallEditors.html"},"Downloading and installing Editors and modules with the Unity Hub"),"."),(0,o.kt)("li",{parentName:"ul"},"To an existing install, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/hub/manual/AddModules.html"},"Add modules"),".")),(0,o.kt)("p",null,"The three modules to install are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Android Build Support")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Android SDK & NDK Tools")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OpenJDK")," ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-modules.png",alt:"Unity Hub displaying the three dependency modules."})),(0,o.kt)("p",null,"Unity Hub displaying the three dependency modules."),(0,o.kt)("p",null,"Unity installs  ",(0,o.kt)("strong",{parentName:"p"},"Android SDK & NDK Tools"),"  and  ",(0,o.kt)("strong",{parentName:"p"},"OpenJDK"),"  respectively in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SDK"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NDK"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenJDK")," folders under ",(0,o.kt)("inlineCode",{parentName:"p"},"/Unity/Hub/Editor/[EditorVersion]/Editor/Data/PlaybackEngines/AndroidPlayer/"),"."),(0,o.kt)("h3",{id:"customizing-dependencies"},"Customizing dependencies"),(0,o.kt)("p",null,"You should use the Unity Hub to install  ",(0,o.kt)("strong",{parentName:"p"},"Android SDK & NDK tools"),"  and  ",(0,o.kt)("strong",{parentName:"p"},"OpenJDK"),"  to ensure that you receive the correct versions and configurations. However, there are situations where it\u2019s useful to change the SDK, NDK, or JDK that Unity uses to build applications for Android. For example, if you have multiple versions of Unity with the same dependencies and you don\u2019t want to duplicate the installation of the SDK, NDK, and JDK, you can specify a shared location."),(0,o.kt)("p",null,"To make Unity use a custom version of a dependency:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the custom version of the dependency.",(0,o.kt)("br",null),"  ",(0,o.kt)("strong",{parentName:"li"},"Warning")," : Unity only officially supports versions of the OpenJDK, SDK, or NDK that it supplies through the Hub. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"#supported-dependency-versions"},"Supported dependency versions"),"."),(0,o.kt)("li",{parentName:"ol"},"In Unity, select  ",(0,o.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Preferences"),"  (macOS:  ",(0,o.kt)("strong",{parentName:"li"},"Unity"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Preferences")," )."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation column, select  ",(0,o.kt)("strong",{parentName:"li"},"External Tools")," . The Android section of the External Tools panel contains entries for  ",(0,o.kt)("strong",{parentName:"li"},"JDK")," ,  ",(0,o.kt)("strong",{parentName:"li"},"SDK")," ,  ",(0,o.kt)("strong",{parentName:"li"},"NDK")," , and  ",(0,o.kt)("strong",{parentName:"li"},"Gradle")," . Each entry contains:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A checkbox that indicates whether to use the version that Unity provides or a custom version."),(0,o.kt)("li",{parentName:"ul"},"The path to the dependency\u2019s installation folder.",(0,o.kt)("br",null),(0,o.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PreferenceesExternalToolsAndroid.png",alt:"Preferences window showing external tools settings for Android"})))),(0,o.kt)("li",{parentName:"ol"},"To customize the installation for any of these dependencies, disable the dependency\u2019s respective  ",(0,o.kt)("strong",{parentName:"li"},"\u2026installed with Unity (recommended)"),"  checkbox then click  ",(0,o.kt)("strong",{parentName:"li"},"Browse"),"  and select the installation folder for the custom dependency.")),(0,o.kt)("h4",{id:"supported-dependency-versions"},"Supported dependency versions"),(0,o.kt)("p",null,"This section contains information on which versions of each dependency each Unity version supports. Each version of Unity requires a specific version of the Android NDK and Android JDK, but there are no exact version requirements for the Android SDK."),(0,o.kt)("h5",{id:"sdk"},"SDK"),(0,o.kt)("p",null,"Unity relies on tools that the Android SDK provides and different versions of the SDK have the same tools available. This means you can use any recent version of the SDK since they all contain build tools that Unity requires."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Important")," : The only exception is Android SDK Build-tools version 31. Unity doesn\u2019t support this version of the Android SDK Build-tools component."),(0,o.kt)("h5",{id:"ndk"},"NDK"),(0,o.kt)("p",null,"The following table shows the NDK version that each Unity version supports:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Unity \u7248\u672c")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"NDK \u7248\u672c")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2019.4 LTS"),(0,o.kt)("td",{parentName:"tr",align:null},"r19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2020.3 LTS"),(0,o.kt)("td",{parentName:"tr",align:null},"r19")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021.2"),(0,o.kt)("td",{parentName:"tr",align:null},"r21d")))),(0,o.kt)("h5",{id:"jdk"},"JDK"),(0,o.kt)("p",null,"The following table shows the JDK version that each Unity version supports:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Unity \u7248\u672c")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"JDK version")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2019.4 LTS"),(0,o.kt)("td",{parentName:"tr",align:null},"8 (OpenJDK version 1.8)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2020.3 LTS"),(0,o.kt)("td",{parentName:"tr",align:null},"8 (OpenJDK version 1.8)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021.2"),(0,o.kt)("td",{parentName:"tr",align:null},"8 (OpenJDK version 1.8)")))),(0,o.kt)("h2",{id:"setting-the-android-sdk-target-api"},"Setting the Android SDK Target API"),(0,o.kt)("p",null,"The Unity Hub installs the latest version of the Android SDK Target API that Google Play requires. If you need to use a more recent version, you can change it in the ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Android Player Settings"),". To do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select  ",(0,o.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Project Settings")," ."),(0,o.kt)("li",{parentName:"ol"},"In the Project settings window, select the  ",(0,o.kt)("strong",{parentName:"li"},"Player"),"  tab, then open ",(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Android Player Settings"),":",(0,o.kt)("br",null),(0,o.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-player-settings-tab.png",alt:"Selecting a target API for the Android SDK"})),(0,o.kt)("li",{parentName:"ol"},"In the  ",(0,o.kt)("strong",{parentName:"li"},"Other Settings"),"  section, change the  ",(0,o.kt)("strong",{parentName:"li"},"Target API Level")," .",(0,o.kt)("br",null),(0,o.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-sdk-target-api.png",alt:"android-sdk-target-api.png"}))),(0,o.kt)("p",null,"If you select a target API version newer than the latest installed version, the Unity Android SDK Updater can automatically download and install the new version. Unity displays a prompt and you can choose to either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Automatically download and install the new version of the Android SDK."),(0,o.kt)("li",{parentName:"ul"},"Continue to use the highest installed version of the Android SDK.")),(0,o.kt)("p",null,"If you select a target API version that isn\u2019t installed and is older than the latest installed version, the Unity Android SDK Updater can\u2019t perform the update and Unity displays an error message. In this case, to update the Android SDK Target API, you must use the Android ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/sdkmanager"},"sdkmanager")," from either ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/sdkmanager"},"command-line tool"),". Regardless of the method you choose, make sure to select the correct Android SDK folder for Unity in the  ",(0,o.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Preferences"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"External Tools"),"  window. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"#customizing-dependencies"},"Customizing dependencies"),"."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Important")," : On Windows, if you installed the Unity Editor in the default folder (",(0,o.kt)("inlineCode",{parentName:"p"},"/Program Files/"),"), you must run the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdkmanager")," with elevated privilege ( ",(0,o.kt)("strong",{parentName:"p"},"Run as Administrator")," ) to perform the update."),(0,o.kt)("h2",{id:"chrome-os"},"Chrome OS"),(0,o.kt)("p",null,"In Unity, Chrome OS is part of the Android development environment. This means you can deliver new and existing Android applications to Chrome OS. Also, since many Chrome OS devices are laptops or have a laptop mode, you can use features such as mouse and keyboard input. For more information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Chrome OS in Unity: ",(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-chrome-os-introducing"},"Chrome OS"),"."),(0,o.kt)("li",{parentName:"ul"},"On how to build an Android application for Chrome OS: ",(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-chrome-os-introducing/android-chrome-os-building-your-application"},"Building your Chrome OS application"),".")))}m.isMDXComponent=!0}}]);