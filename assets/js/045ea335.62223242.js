"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64116],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return g}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(i),g=a,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||r;return i?n.createElement(m,o(o({ref:t},p),{},{components:i})):n.createElement(m,o({ref:t},p))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},64494:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],l={id:"android-distribution-google-play",title:"Delivering to Google Play",slug:"/android-distribution/android-distribution-google-play"},d="Delivering to Google Play",s={unversionedId:"platform-specific/android/android-building-and-delivering/android-distribution/android-distribution-google-play",id:"platform-specific/android/android-building-and-delivering/android-distribution/android-distribution-google-play",title:"Delivering to Google Play",description:"This page contains information about Google Play-specific delivery requirements and considerations.",source:"@site/docs/platform-specific/android/android-building-and-delivering/android-distribution/android-distribution-google-play.md",sourceDirName:"platform-specific/android/android-building-and-delivering/android-distribution",slug:"/android-distribution/android-distribution-google-play",permalink:"/doc-unity-manual/docs/android-distribution/android-distribution-google-play",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-building-and-delivering/android-distribution/android-distribution-google-play.md",tags:[],version:"current",frontMatter:{id:"android-distribution-google-play",title:"Delivering to Google Play",slug:"/android-distribution/android-distribution-google-play"},sidebar:"tutorialSidebar",previous:{title:"Digital distribution services for Android",permalink:"/doc-unity-manual/docs/android-distribution"},next:{title:"Exporting an Android project",permalink:"/doc-unity-manual/docs/android-building-and-delivering/android-export-process"}},p={},c=[{value:"Delivery requirements",id:"delivery-requirements",level:2},{value:"Android App Bundle",id:"android-app-bundle",level:3},{value:"Application size",id:"application-size",level:3},{value:"64-bit Architecture",id:"64-bit-architecture",level:3},{value:"Target API",id:"target-api",level:3},{value:"App signature",id:"app-signature",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Best practice checklist",id:"best-practice-checklist",level:3},{value:"Public symbols",id:"public-symbols",level:3}],u={toc:c};function g(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"delivering-to-google-play"},"Delivering to Google Play"),(0,r.kt)("p",null,"This page contains information about Google Play-specific delivery requirements and considerations."),(0,r.kt)("p",null,"For information on how to publish your application on Google Play, see ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/distribute/google-play"},"Google Play"),"."),(0,r.kt)("h2",{id:"delivery-requirements"},"Delivery requirements"),(0,r.kt)("p",null,"Google Play has requirements an application must fulfil before you publish it. This section describes Google Play-specific requirements and explains how to meet them."),(0,r.kt)("h3",{id:"android-app-bundle"},"Android App Bundle"),(0,r.kt)("p",null,"Google Play requires new apps to be an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/app-bundle"},"Android App Bundle")," (AAB) instead of an APK. For information on why, see ",(0,r.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2021/06/the-future-of-android-app-bundles-is.html"},"The future of Android App Bundles is here"),"."),(0,r.kt)("p",null,"To configure an application to be an AAB:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select  ",(0,r.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings")," ."),(0,r.kt)("li",{parentName:"ol"},"In the Project settings window, select the  ",(0,r.kt)("strong",{parentName:"li"},"Player"),"  tab, then open ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Android Player Settings"),":",(0,r.kt)("br",null),(0,r.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-player-settings-tab.png",alt:"android-player-settings-tab.png"})),(0,r.kt)("li",{parentName:"ol"},"In the  ",(0,r.kt)("strong",{parentName:"li"},"Publishing Settings"),"  section, enable  ",(0,r.kt)("strong",{parentName:"li"},"Split Application Binary")," ."),(0,r.kt)("li",{parentName:"ol"},"Select  ",(0,r.kt)("strong",{parentName:"li"},"File"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Build Settings")," ."),(0,r.kt)("li",{parentName:"ol"},"From the list of platforms in the  ",(0,r.kt)("strong",{parentName:"li"},"Platform"),"  pane, select  ",(0,r.kt)("strong",{parentName:"li"},"Android")," ."),(0,r.kt)("li",{parentName:"ol"},"Enable  ",(0,r.kt)("strong",{parentName:"li"},"Build App Bundle (Google Play)")," . If you want to ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-building-and-delivering/android-export-process"},"export the project")," and build it in Android Studio, enable  ",(0,r.kt)("strong",{parentName:"li"},"Export Project"),"  then enable  ",(0,r.kt)("strong",{parentName:"li"},"Export for App Bundle")," .")),(0,r.kt)("p",null,"Now when you ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-building-and-delivering/android-build-process#building"},"build the application"),", Unity builds the application as an AAB."),(0,r.kt)("h3",{id:"application-size"},"Application size"),(0,r.kt)("p",null,"Google Play limits the install size of applications. The following table describes the size limitations Google Play has for each application type:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Application type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Size limitation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"APK")),(0,r.kt)("td",{parentName:"tr",align:null},"If you ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/android-building-and-delivering/android-build-process#splitting-the-application-binary"},"split the application binary")," or use a custom ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/android-developing/android-obbsupport"},"expansion file"),", the APK must be smaller than 100MB and the expansion file must be smaller than 2GB. Otherwise, the APK must be smaller than 100MB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"AAB")),(0,r.kt)("td",{parentName:"tr",align:null},"If you split the application binary or use custom ",(0,r.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/android-developing/play-asset-delivery"},"asset packs"),", the base module inside the AAB must be smaller than 150MB and the asset packs must fit the file sizes described in ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/guide/playcore/asset-delivery#download-size-limits"},"Android\u2019s Download Size Limits")," documentation. Otherwise, the AAB must be smaller than 150MB.")))),(0,r.kt)("p",null,"For information on how to optimize the install size of your application, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-building-and-delivering/android-build-process#distribution-size"},"Distribution size"),"."),(0,r.kt)("h3",{id:"64-bit-architecture"},"64-bit Architecture"),(0,r.kt)("p",null,"Google Play requires applications to support 64-bit architecture. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/distribute/best-practices/develop/64-bit"},"Support 64-bit architectures"),". To make your application support 64-bit architecture:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select  ",(0,r.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings")," ."),(0,r.kt)("li",{parentName:"ol"},"In the Project settings window, select the  ",(0,r.kt)("strong",{parentName:"li"},"Player"),"  tab, then open ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Android Player Settings"),":",(0,r.kt)("br",null),(0,r.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-player-settings-tab.png",alt:"android-player-settings-tab.png"})),(0,r.kt)("li",{parentName:"ol"},"In the  ",(0,r.kt)("strong",{parentName:"li"},"Other Settings"),"  section, enable  ",(0,r.kt)("strong",{parentName:"li"},"ARM64")," . If your application targets Chrome OS, enable  ",(0,r.kt)("strong",{parentName:"li"},"x86\u201364 (Chrome OS"),"  too.  ",(0,r.kt)("strong",{parentName:"li"},"Note")," : You can only interact with this setting if your project uses the ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/il2cpp"},"IL2CPP")," ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/scripting-backends"},"scripting backend"),".")),(0,r.kt)("h3",{id:"target-api"},"Target API"),(0,r.kt)("p",null,"Google Play requires applications to support a minimum target API. For information on what the current minimum target API is, see ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/distribute/best-practices/develop/target-sdk"},"Meet Google Play\u2019s target API level requirement"),"."),(0,r.kt)("p",null,"To change your application\u2019s target API:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select  ",(0,r.kt)("strong",{parentName:"li"},"Edit"),"  ",">","  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings")," ."),(0,r.kt)("li",{parentName:"ol"},"In the Project settings window, select the  ",(0,r.kt)("strong",{parentName:"li"},"Player"),"  tab, then open ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Android Player Settings"),":",(0,r.kt)("br",null),(0,r.kt)("img",{parentName:"li",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/android-player-settings-tab.png",alt:"android-player-settings-tab.png"})),(0,r.kt)("li",{parentName:"ol"},"In the  ",(0,r.kt)("strong",{parentName:"li"},"Publishing Settings"),"  section, set  ",(0,r.kt)("strong",{parentName:"li"},"Target API Level"),"  to at least the target API level that Google Play requires.")),(0,r.kt)("h3",{id:"app-signature"},"App signature"),(0,r.kt)("p",null,"Google Play requires applications to be signed. For information on how to sign your application, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-keystore/android-keystore-manager"},"Android Keystore Manager"),"."),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"This section contains Google Play-specific considerations to be aware of before you publish an application to Google Play."),(0,r.kt)("h3",{id:"best-practice-checklist"},"Best practice checklist"),(0,r.kt)("p",null,"To help launch an Android application successfully, Android\u2019s documentation includes a best practice checklist of processes to follow. See ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/distribute/best-practices/launch/launch-checklist"},"Launch checklist"),"."),(0,r.kt)("h3",{id:"public-symbols"},"Public symbols"),(0,r.kt)("p",null,"If your application crashes on a device, Google can use a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-testing-and-debugging/android-symbols"},"symbols package")," to make a native stacktrace human-readable on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/performance/vitals"},"Android Vitals")," dashboard. It is best practice to generate a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-testing-and-debugging/android-symbols#public-symbols"},"public symbols")," package for your application and upload it to Google Play. For information on how to do this, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-testing-and-debugging/android-symbols#generating-a-symbols-package"},"Generating a symbols package"),"."))}g.isMDXComponent=!0}}]);