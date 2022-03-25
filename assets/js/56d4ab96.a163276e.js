"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94451],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return r?i.createElement(g,n(n({ref:t},p),{},{components:r})):i.createElement(g,n({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var u=2;u<o;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92104:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=r(87462),a=r(63366),o=(r(67294),r(3905)),n=["components"],s={id:"udp-firebase",title:"Using Firebase with UDP builds",slug:"/udp-service-interoperability/udp-firebase"},l="Using Firebase with UDP builds",u={unversionedId:"unity-services/udp/udp-service-interoperability/udp-firebase",id:"unity-services/udp/udp-service-interoperability/udp-firebase",title:"Using Firebase with UDP builds",description:"Implementing Firebase in your Android games lets you leverage the Firebase product layer, for example for analytics or crashlytics. If your game uses Firebase, additional configuration is required to support the builds that Unity Distribution Portal (UDP) creates for different stores.",source:"@site/docs/unity-services/udp/udp-service-interoperability/udp-firebase.md",sourceDirName:"unity-services/udp/udp-service-interoperability",slug:"/udp-service-interoperability/udp-firebase",permalink:"/doc-unity-manual/docs/udp-service-interoperability/udp-firebase",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/udp/udp-service-interoperability/udp-firebase.md",tags:[],version:"current",frontMatter:{id:"udp-firebase",title:"Using Firebase with UDP builds",slug:"/udp-service-interoperability/udp-firebase"},sidebar:"tutorialSidebar",previous:{title:"Using UDP with other services",permalink:"/doc-unity-manual/docs/udp-service-interoperability"},next:{title:"UDP \u6545\u969c\u6392\u9664",permalink:"/doc-unity-manual/docs/udp/udp-troubleshooting"}},p={},c=[{value:"Configuring Firebase for your UDP builds",id:"configuring-firebase-for-your-udp-builds",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Adding Firebase configuration files",id:"adding-firebase-configuration-files",level:2},{value:"Adding your Firebase ID in the UDP console",id:"adding-your-firebase-id-in-the-udp-console",level:2},{value:"Rebuilding your project",id:"rebuilding-your-project",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-firebase-with-udp-builds"},"Using Firebase with UDP builds"),(0,o.kt)("p",null,"Implementing ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase")," in your Android games lets you leverage the Firebase product layer, for example for analytics or ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/crashlytics"},"crashlytics"),". If your game uses Firebase, additional ",(0,o.kt)("a",{parentName:"p",href:"#configuring-firebase-for-your-udp-builds"},"configuration")," is required to support the builds that Unity Distribution Portal (",(0,o.kt)("a",{parentName:"p",href:"https://unity.com/udp"},"UDP"),") creates for different stores."),(0,o.kt)("p",null,"When your app invokes Firebase products, Firebase checks that the following information matches the details registered on the Firebase console:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The package name of the app"),(0,o.kt)("li",{parentName:"ul"},"The certificate the app was signed with"),(0,o.kt)("li",{parentName:"ul"},"The google","_","app","_","id in the Android package (APK) resource")),(0,o.kt)("p",null,"These details must match in order for Firebase to provide accurate analysis."),(0,o.kt)("p",null,"For certain stores where you publish your game via UDP, UDP adds a store-specific suffix to the package name. Additionally, if you don\u2019t use your own private key to generate the certificate, UDP generates a certificate for each repacked build. These events would cause your certificate and/or package name to no longer match the information on the Firebase console."),(0,o.kt)("p",null,"The UDP console displays a warning for Firebase services if you register your app to stores that need a package name suffix."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/udp-firebase-warning.png",alt:"Firebase services warning in UDP console"})),(0,o.kt)("p",null,"Firebase services warning in UDP console"),(0,o.kt)("p",null,"To enable your store-specific builds to work correctly with Firebase, you must register them with your Firebase project. The following sections explain how to configure Firebase for your UDP builds."),(0,o.kt)("h2",{id:"configuring-firebase-for-your-udp-builds"},"Configuring Firebase for your UDP builds"),(0,o.kt)("p",null,"This section gives an overview of the steps required to configure Firebase for your UDP builds (apps). For more detailed information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/unity/setup"},"Firebase documentation"),"."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/unity/setup#create-firebase-project"},"created a Firebase project")," and added it to your app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/unity/setup#add-sdks"},"added the Firebase Unity SDKs")," to your app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/udp/udp-managing-and-publishing#%E5%90%91%E5%95%86%E5%BA%97%E6%B3%A8%E5%86%8C%E6%B8%B8%E6%88%8F"},"registered your game with a store")," in the UDP console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you use the app-signing private key generated by UDP, repack and publish your app to generate a certificate"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note")," : During the process to register your app, you can download a google-services.json file. Unity recommends that you register all your package versions before you download this file."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/unity/setup#register-app"},"Register your app with Firebase"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use the store-specific package name from the UDP console:  ",(0,o.kt)("strong",{parentName:"li"},"My Games"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Publish"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Store"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Advanced"),"  page."))),(0,o.kt)("li",{parentName:"ol"},"In the Firebase console, go to Project Settings and add your app\u2019s fingerprint store certificate.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you use your own key, get your fingerprint with the command:",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"keytool -keystore path-to-your-keystore -list -v")),(0,o.kt)("li",{parentName:"ul"},"If you don\u2019t use your own key, use the SHA1 certificate for the corresponding UDP store ( ",(0,o.kt)("strong",{parentName:"li"},"UDP Console"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"My Games"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Publish"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Store"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Advanced")," )"),(0,o.kt)("li",{parentName:"ul"},"You can also download the APK certificate and get the fingerprint information with the command:",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"openssl x509 -in path-to-your-certificate -fingerprint -noout"))))),(0,o.kt)("p",null,"Repeat these steps for each store-specific app you want to link to your Firebase project. Firebase adds an App ID for each app you add."),(0,o.kt)("p",null,"When you\u2019ve registered all your apps, ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/unity/setup#add-config-file"},"add the Firebase configuration file")," to your Unity project."),(0,o.kt)("h2",{id:"adding-firebase-configuration-files"},"Adding Firebase configuration files"),(0,o.kt)("p",null,"When you register an app in Firebase, Firebase creates a google-services.json configuration file. When you\u2019ve added all your apps to Firebase, download the file and add it to your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Firebase console go to your app\u2019s Project Settings page."),(0,o.kt)("li",{parentName:"ol"},"Download the google-services.json file."),(0,o.kt)("li",{parentName:"ol"},"Copy the google-services.json file into your Unity project\u2019s  ",(0,o.kt)("strong",{parentName:"li"},"Assets"),"  folder.")),(0,o.kt)("p",null,"Your project is now properly configured for Firebase. To ensure stable operation of your app, rebuild and publish your project."),(0,o.kt)("h2",{id:"adding-your-firebase-id-in-the-udp-console"},"Adding your Firebase ID in the UDP console"),(0,o.kt)("p",null,"For each build you\u2019ve added to Firebase, in the UDP console, add the App ID:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the build-specific App ID from Firebase."),(0,o.kt)("li",{parentName:"ol"},"In the UDP console, go to  ",(0,o.kt)("strong",{parentName:"li"},"My Games"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Publish"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Store"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Advanced"),"  page.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Paste the App ID into the  ",(0,o.kt)("strong",{parentName:"li"},"Firebase App ID"),"  field. 1.\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58")," \u3002")))),(0,o.kt)("h2",{id:"rebuilding-your-project"},"Rebuilding your project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Unity Editor, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.purchasing.udp@latest/index.html?subfolder=/manual/building-your-game.html"},"rebuild your project"),"."),(0,o.kt)("li",{parentName:"ol"},"Upload your build to the UDP console."),(0,o.kt)("li",{parentName:"ol"},"Release a new revision."),(0,o.kt)("li",{parentName:"ol"},"In the Publish tab, select each store you want to publish.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Set the target step to  ",(0,o.kt)("strong",{parentName:"li"},"Submit to Store")," ."),(0,o.kt)("li",{parentName:"ol"},"Select  ",(0,o.kt)("strong",{parentName:"li"},"Publish")," .")))),(0,o.kt)("p",null,"For more information on these steps, see ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/udp/udp-managing-and-publishing"},"Managing and publishing your game on the UDP console"),"."))}f.isMDXComponent=!0}}]);