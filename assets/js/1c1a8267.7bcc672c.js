"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84778],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"android-symbols",title:"Android symbols",slug:"/android-testing-and-debugging/android-symbols"},s="Android symbols",d={unversionedId:"platform-specific/android/android-developing/android-testing-and-debugging/android-symbols",id:"platform-specific/android/android-developing/android-testing-and-debugging/android-symbols",title:"Android symbols",description:"To help you debug your application, Unity can generate a package that contains symbol files for native Unity libraries. Symbol files contain a table that translates active memory addresses into information you can use, like a method name. The translation process is called symbolication. You can upload a symbols package to the Google Play Console to see a human-readable stack trace on the Android Vitals dashboard.",source:"@site/docs/platform-specific/android/android-developing/android-testing-and-debugging/android-symbols.md",sourceDirName:"platform-specific/android/android-developing/android-testing-and-debugging",slug:"/android-testing-and-debugging/android-symbols",permalink:"/doc-unity-manual/docs/android-testing-and-debugging/android-symbols",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-developing/android-testing-and-debugging/android-symbols.md",tags:[],version:"current",frontMatter:{id:"android-symbols",title:"Android symbols",slug:"/android-testing-and-debugging/android-symbols"},sidebar:"tutorialSidebar",previous:{title:"Debugging on an Android device",permalink:"/doc-unity-manual/docs/android-testing-and-debugging/android-debugging-on-an-android-device"},next:{title:"Unity Remote",permalink:"/doc-unity-manual/docs/android-testing-and-debugging/unity-remote5"}},p={},u=[{value:"Public symbols",id:"public-symbols",level:2},{value:"Debugging symbols",id:"debugging-symbols",level:2},{value:"Generating a symbols package",id:"generating-a-symbols-package",level:2},{value:"Using symbols in the Google Play console",id:"using-symbols-in-the-google-play-console",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android-symbols"},"Android symbols"),(0,o.kt)("p",null,"To help you debug your application, Unity can generate a package that contains symbol files for native Unity libraries. Symbol files contain a table that translates active memory addresses into information you can use, like a method name. The translation process is called symbolication. You can upload a symbols package to the Google Play Console to see a human-readable stack trace on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/topic/performance/vitals"},"Android Vitals")," dashboard."),(0,o.kt)("p",null,"There are two types of symbol files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public: A small file that contains a symbol table. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"#public-symbols"},"Public symbols"),"."),(0,o.kt)("li",{parentName:"ul"},"Debug: Contains everything that a public symbol file contains, and full debugging information that you can use for more in-depth debugging. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"#debugging-symbols"},"Debugging symbols"),".")),(0,o.kt)("p",null,"You can generate symbol files for the following libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"libmain"),": Responsible for initial Unity engine loading logic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"libunity"),": Unity\u2019s engine code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"libil2cpp"),": Contains C# scripts from the project converted to C++ code.")),(0,o.kt)("p",null,"Unity generates the ",(0,o.kt)("inlineCode",{parentName:"p"},"libmain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libunity")," symbol files. ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-gradle-overview"},"Gradle")," generates the ",(0,o.kt)("inlineCode",{parentName:"p"},"libil2cpp")," symbol file."),(0,o.kt)("h2",{id:"public-symbols"},"Public symbols"),(0,o.kt)("p",null,"A public symbol file contains information that resolves function addresses to human-readable strings. Unity uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"--strip-debug")," parameter to create public symbols that remove more in-depth debug information. This makes public symbol files and packages smaller than ",(0,o.kt)("a",{parentName:"p",href:"#debugging-symbols"},"debugging symbol")," files and packages."),(0,o.kt)("h2",{id:"debugging-symbols"},"Debugging symbols"),(0,o.kt)("p",null,"A debugging symbol file contains full debugging information and a symbol table. Use it to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resolve stack traces and to debug applications that you have source code available for."),(0,o.kt)("li",{parentName:"ul"},"Attach a native debugger to the application and debug the code.")),(0,o.kt)("p",null,"Unity uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"--only-keep-debug")," parameter to create debugging symbols. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/objcopy.1.html"},"\u2013only-keep-debug")," in the Linux user manual."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  If debugging symbols aren\u2019t available, Unity places a ",(0,o.kt)("a",{parentName:"p",href:"#public-symbols"},"public symbol")," file in your project at build time. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"libmain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libunity")," libraries, debugging symbols are not available and Unity always generates public symbol files."),(0,o.kt)("h2",{id:"generating-a-symbols-package"},"Generating a symbols package"),(0,o.kt)("p",null,"There are two ways to enable symbols package generation for your application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the Build Settings window:"),(0,o.kt)("li",{parentName:"ul"},"Open the Build Settings window (menu:  ",(0,o.kt)("strong",{parentName:"li"},"File"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Build Settings")," )."),(0,o.kt)("li",{parentName:"ul"},"Select the Android platform."),(0,o.kt)("li",{parentName:"ul"},"Set  ",(0,o.kt)("strong",{parentName:"li"},"Create symbols.zip"),"  to one of the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#public-symbols"},"Public")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#debugging-symbols"},"Debugging")))),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/EditorUserBuildSettings-androidCreateSymbols.html"},"EditorUserBuildSettings.androidCreateSymbols")," API.")),(0,o.kt)("p",null,"After you enable symbols package generation, building your project generates a ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," file that contains symbol files for the ",(0,o.kt)("inlineCode",{parentName:"p"},"libmain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libunity")," library. If you set your ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scripting-backends"},"scripting backend")," to  ",(0,o.kt)("strong",{parentName:"p"},"IL2CPP")," , the ",(0,o.kt)("inlineCode",{parentName:"p"},".zip")," also contains a symbol file for the ",(0,o.kt)("inlineCode",{parentName:"p"},"libil2cpp")," library. Unity places this symbols package within the output directory."),(0,o.kt)("p",null,"If you enable  ",(0,o.kt)("strong",{parentName:"p"},"Export Project"),"  in the Android Build Settings, Unity doesn\u2019t build the project. Instead, it exports the project for Android Studio, generates symbols for ",(0,o.kt)("inlineCode",{parentName:"p"},"libmain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libunity"),", and places them within ",(0,o.kt)("inlineCode",{parentName:"p"},"unityLibrary/symbols/&lt;architecture&gt;/")," in the output directory. When you build your exported project from Android Studio, Gradle generates the ",(0,o.kt)("inlineCode",{parentName:"p"},"libil2cpp")," symbol file and places it within the ",(0,o.kt)("inlineCode",{parentName:"p"},"unityLibrary/symbols/&lt;architecture&gt;/")," directory alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"libmain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libunity")," symbol file."),(0,o.kt)("h2",{id:"using-symbols-in-the-google-play-console"},"Using symbols in the Google Play console"),(0,o.kt)("p",null,"After you upload your application to Google Play, you can upload a ",(0,o.kt)("a",{parentName:"p",href:"#public-symbols"},"public symbols")," package for it. For information on how to do this, see Google\u2019s documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/9848633"},"Deobfuscate or symbolicate crash stack traces"),"."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  Google Play doesn\u2019t symbolicate crashes that your application received before you uploaded the symbols package."))}c.isMDXComponent=!0}}]);