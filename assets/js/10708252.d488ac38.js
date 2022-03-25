"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64868],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},52115:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],d={id:"android-export-process",title:"Exporting an Android project",slug:"/android-building-and-delivering/android-export-process"},p="Exporting an Android project",l={unversionedId:"platform-specific/android/android-building-and-delivering/android-export-process",id:"platform-specific/android/android-building-and-delivering/android-export-process",title:"Exporting an Android project",description:"If you need more control over the build pipeline, you can export a Unity project as a Gradle project and import that into Android Studio. This is useful if you want more control over the build pipeline, want to see or modify the Android App Manifest that Unity generates for your application, or integrate Unity-powered features into another Android application.",source:"@site/docs/platform-specific/android/android-building-and-delivering/android-export-process.md",sourceDirName:"platform-specific/android/android-building-and-delivering",slug:"/android-building-and-delivering/android-export-process",permalink:"/doc-unity-manual/docs/android-building-and-delivering/android-export-process",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-building-and-delivering/android-export-process.md",tags:[],version:"current",frontMatter:{id:"android-export-process",title:"Exporting an Android project",slug:"/android-building-and-delivering/android-export-process"},sidebar:"tutorialSidebar",previous:{title:"Delivering to Google Play",permalink:"/doc-unity-manual/docs/android-distribution/android-distribution-google-play"},next:{title:"Gradle templates",permalink:"/doc-unity-manual/docs/android-building-and-delivering/gradle-templates"}},c={},u=[{value:"Exporting",id:"exporting",level:2}],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exporting-an-android-project"},"Exporting an Android project"),(0,i.kt)("p",null,"If you need more control over the build pipeline, you can export a Unity project as a Gradle project and import that into Android Studio. This is useful if you want more control over the build pipeline, want to see or modify the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"Android App Manifest")," that Unity generates for your application, or ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-developing/unityasa-library-android"},"integrate Unity-powered features into another Android application"),"."),(0,i.kt)("h2",{id:"exporting"},"Exporting"),(0,i.kt)("p",null,"To export a Unity project for Android Studio:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select  ",(0,i.kt)("strong",{parentName:"li"},"File"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Build Settings")," ."),(0,i.kt)("li",{parentName:"ol"},"From the list of platforms in the  ",(0,i.kt)("strong",{parentName:"li"},"Platform"),"  pane, select  ",(0,i.kt)("strong",{parentName:"li"},"Android")," . ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"li"},"Note")," : If Android is greyed out, ",(0,i.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-getting-started/android-sdksetup"},"set up your project for Android development"),"."),(0,i.kt)("li",{parentName:"ol"},"Enable  ",(0,i.kt)("strong",{parentName:"li"},"Export Project")," ."),(0,i.kt)("li",{parentName:"ol"},"Click  ",(0,i.kt)("strong",{parentName:"li"},"Export")," ."),(0,i.kt)("li",{parentName:"ol"},"Select the destination folder and click  ",(0,i.kt)("strong",{parentName:"li"},"Select Folder"),"  to start the export process.")),(0,i.kt)("p",null,"When Unity finishes exporting the project, you can open Android Studio and import the project. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/intro/migrate.html"},"Migrate to Android Studio"),"."))}f.isMDXComponent=!0}}]);