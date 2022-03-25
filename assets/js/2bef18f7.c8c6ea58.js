"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98810],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"android-library-manifest",title:"Unity Library Manifest",slug:"/android-introducing/android-library-manifest"},s="Unity Library Manifest",d={unversionedId:"platform-specific/android/android-introducing/android-library-manifest",id:"platform-specific/android/android-introducing/android-library-manifest",title:"Unity Library Manifest",description:"A Unity Library Manifest is the main Unity manifest and contains information about the Unity Player and its activity. Unity uses a default Unity Library Manifest during the build process to generate the final Android App Manifest for the application. You can override this with your own manifest file to have more control over the Android App Manifest that Unity generates. For more information, see \\Overriding an Android App Manifest\\.",source:"@site/docs/platform-specific/android/android-introducing/android-library-manifest.md",sourceDirName:"platform-specific/android/android-introducing",slug:"/android-introducing/android-library-manifest",permalink:"/doc-unity-manual/docs/android-introducing/android-library-manifest",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-introducing/android-library-manifest.md",tags:[],version:"current",frontMatter:{id:"android-library-manifest",title:"Unity Library Manifest",slug:"/android-introducing/android-library-manifest"},sidebar:"tutorialSidebar",previous:{title:"Unity Launcher Manifest",permalink:"/doc-unity-manual/docs/android-introducing/android-launcher-manifest"},next:{title:"Android App Manifest",permalink:"/doc-unity-manual/docs/android-introducing/android-manifest"}},c={},u=[{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unity-library-manifest"},"Unity Library Manifest"),(0,a.kt)("p",null,"A Unity Library Manifest is the main Unity manifest and contains information about the Unity Player and its ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/activities/intro-activities"},"activity"),". Unity uses a default Unity Library Manifest during the build process to generate the final ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"Android App Manifest")," for the application. You can override this with your own manifest file to have more control over the Android App Manifest that Unity generates. For more information, see ","[","Overriding an Android App Manifest","]","(overriding-android-manifest #creating-a-template-android-manifest-file)."),(0,a.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,a.kt)("p",null,"A Unity Library Manifest declares:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Unity ",(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/components/activities/intro-activities"},"activity"),"."),(0,a.kt)("li",{parentName:"ul"},"The theme that the Unity activity uses."),(0,a.kt)("li",{parentName:"ul"},"Permissions."),(0,a.kt)("li",{parentName:"ul"},"VR modes."),(0,a.kt)("li",{parentName:"ul"},"VR performance."),(0,a.kt)("li",{parentName:"ul"},"Whether to allow the user to resize the application window. This is useful for VR and ChromeOS."),(0,a.kt)("li",{parentName:"ul"},"The maximum aspect ratio."),(0,a.kt)("li",{parentName:"ul"},"How to react to configuration changes."),(0,a.kt)("li",{parentName:"ul"},"Supported orientations."),(0,a.kt)("li",{parentName:"ul"},"Supported launch modes. ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"li"},"Note")," : Unity only supports the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/topics/manifest/activity-element.html#lmode"},"singleTask launch mode"),"."),(0,a.kt)("li",{parentName:"ul"},"Android UI."),(0,a.kt)("li",{parentName:"ul"},"Whether to use hardware acceleration."),(0,a.kt)("li",{parentName:"ul"},"Which features the application uses such as a gamepad or touchscreen."),(0,a.kt)("li",{parentName:"ul"},"Which graphics APIs the application supports."),(0,a.kt)("li",{parentName:"ul"},"Whether the application supports notches on the device."),(0,a.kt)("li",{parentName:"ul"},"The initial window size."),(0,a.kt)("li",{parentName:"ul"},"Which window modes the application supports. This is useful for ChromeOS."),(0,a.kt)("li",{parentName:"ul"},"Splash screen configuration."),(0,a.kt)("li",{parentName:"ul"},"Whether to extract native libraries when installing the application."),(0,a.kt)("li",{parentName:"ul"},"Which devices the application can run on.")))}f.isMDXComponent=!0}}]);