"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15269],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],d={id:"how-unity-builds-android-applications",title:"How Unity builds Android applications",slug:"/android-introducing/how-unity-builds-android-applications"},l="How Unity builds Android applications",s={unversionedId:"platform-specific/android/android-introducing/how-unity-builds-android-applications",id:"platform-specific/android/android-introducing/how-unity-builds-android-applications",title:"How Unity builds Android applications",description:"Unity uses Gradle to build Android applications so it is useful to understand the build process and how Unity interacts with Gradle. Gradle lets you use Player Settings and other Unity windows to configure most aspects of the final build, however for more control, you must overwrite manifest and template files, or export your project and edit it in Android Studio.",source:"@site/docs/platform-specific/android/android-introducing/how-unity-builds-android-applications.md",sourceDirName:"platform-specific/android/android-introducing",slug:"/android-introducing/how-unity-builds-android-applications",permalink:"/doc-unity-manual/docs/android-introducing/how-unity-builds-android-applications",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-introducing/how-unity-builds-android-applications.md",tags:[],version:"current",frontMatter:{id:"how-unity-builds-android-applications",title:"How Unity builds Android applications",slug:"/android-introducing/how-unity-builds-android-applications"},sidebar:"tutorialSidebar",previous:{title:"Requirements and compatibility",permalink:"/doc-unity-manual/docs/android-introducing/android-requirements-and-compatibility"},next:{title:"Unity for Android",permalink:"/doc-unity-manual/docs/android-introducing/unity-for-android"}},u={},c=[{value:"The build process",id:"the-build-process",level:2},{value:"Incremental build pipeline",id:"incremental-build-pipeline",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-unity-builds-android-applications"},"How Unity builds Android applications"),(0,a.kt)("p",null,"Unity uses ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-gradle-overview"},"Gradle")," to build Android applications so it is useful to understand the build process and how Unity interacts with Gradle. Gradle lets you use ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-getting-started/class-player-settings-android"},"Player Settings")," and other Unity windows to configure most aspects of the final build, however for more control, you must overwrite ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"manifest")," and ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-gradle-overview"},"template")," files, or export your project and edit it in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"Android Studio"),"."),(0,a.kt)("h2",{id:"the-build-process"},"The build process"),(0,a.kt)("p",null,"To build Android applications:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unity collects project resources, code libraries, plug-ins, Gradle templates, and manifest templates from your Unity project and uses them to create a valid Gradle project."),(0,a.kt)("li",{parentName:"ol"},"Unity adds and updates values inside Gradle templates and manifest files based on the Unity project\u2019s Player Settings and Build Settings."),(0,a.kt)("li",{parentName:"ol"},"If you chose to export the project and not build it, and use the IL2CPP ",(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/scripting-backends"},"scripting backend"),", Unity places C++ source files produced from your C# scripts into the Gradle project. Otherwise, if you chose to build the project, Unity places the ",(0,a.kt)("inlineCode",{parentName:"li"},"libil2cpp.so")," library into the Gradle project."),(0,a.kt)("li",{parentName:"ol"},"Unity calls ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Android.IPostGenerateGradleAndroidProject.OnPostGenerateGradleAndroidProject.html"},"OnPostGenerateGradleAndroidProject")," for all ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Android.IPostGenerateGradleAndroidProject.html"},"IPostGenerateGradleAndroidProject")," interfaces. You can use this callback to modify or move files before Gradle builds the application."),(0,a.kt)("li",{parentName:"ol"},"Unity runs Gradle to build the application from the Gradle project. Gradle merges the Unity Library Manifest, Unity Launcher Manifest, and plug-in manifests into one ",(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"Android App Manifest")," file.")),(0,a.kt)("h2",{id:"incremental-build-pipeline"},"Incremental build pipeline"),(0,a.kt)("p",null,"Unity uses the ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/incremental-build-pipeline"},"incremental build pipeline")," when it builds the Player for Android. See the following Android-specific incremental build pipeline behaviors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unity incrementally builds/generates:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-introducing/android-gradle-overview"},"Gradle files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"Manifest files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-developing/play-asset-delivery"},"Assets packs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-developing/android-obbsupport"},"APK expansion files (obbs)")),(0,a.kt)("li",{parentName:"ul"},"Uncompressed asset splits"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-testing-and-debugging/android-symbols"},"Android symbols zip files")))),(0,a.kt)("li",{parentName:"ul"},"Unity incrementally copies:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Player binaries"),(0,a.kt)("li",{parentName:"ul"},"Gradle resources"))),(0,a.kt)("li",{parentName:"ul"},"The last step in the ",(0,a.kt)("a",{parentName:"li",href:"#the-build-process"},"build process")," is to run Gradle. From this point, the build process doesn\u2019t use the incremental build pipeline and it\u2019s up to Gradle to track dependencies.")),(0,a.kt)("p",null,"If you implement callbacks that modify or move any Android file or asset that the incremental build pipeline uses, see ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/editor-features/incremental-build-pipeline#creating-non-incremental-builds"},"Creating non-incremental builds"),"."))}m.isMDXComponent=!0}}]);