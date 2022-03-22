"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71799],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?i.createElement(k,r(r({ref:n},s),{},{components:t})):i.createElement(k,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<l;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},854:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],p={id:"deep-linking",title:"Deep linking",slug:"/platform-specific/deep-linking"},o="Deep linking",c={unversionedId:"platform-specific/deep-linking",id:"platform-specific/deep-linking",title:"Deep linking",description:"Deep links are URL links outside of your application that direct users to a location in your application. When the user clicks a deep link for an application, the operating system opens the Unity application at a specified place (for example, a specific scene). Unity uses the Application.absoluteURL property and Application.deepLinkActivated event to support deep links on the following platforms:",source:"@site/docs/platform-specific/deep-linking.md",sourceDirName:"platform-specific",slug:"/platform-specific/deep-linking",permalink:"/docs/platform-specific/deep-linking",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/deep-linking.md",tags:[],version:"current",frontMatter:{id:"deep-linking",title:"Deep linking",slug:"/platform-specific/deep-linking"},sidebar:"tutorialSidebar",previous:{title:"MacOS Player settings",permalink:"/docs/apple-mac/player-settings-mac-os"},next:{title:"iOS",permalink:"/docs/iphone"}},s={},u=[{value:"Enabling deep linking",id:"enabling-deep-linking",level:2},{value:"Using deep links",id:"using-deep-links",level:2},{value:"\u6d4b\u8bd5\u6df1\u5c42\u94fe\u63a5",id:"\u6d4b\u8bd5\u6df1\u5c42\u94fe\u63a5",level:2},{value:"Example HTML file",id:"example-html-file",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deep-linking"},"Deep linking"),(0,l.kt)("p",null,"Deep links are URL links outside of your application that direct users to a location in your application. When the user clicks a deep link for an application, the operating system opens the Unity application at a specified place (for example, a specific scene). Unity uses the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-absoluteURL.html"},"Application.absoluteURL")," property and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-deepLinkActivated.html"},"Application.deepLinkActivated")," event to support deep links on the following platforms:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"iOS"),(0,l.kt)("li",{parentName:"ul"},"Android"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528 Windows \u5e73\u53f0 (UWP)"),(0,l.kt)("li",{parentName:"ul"},"macOS")),(0,l.kt)("h2",{id:"enabling-deep-linking"},"Enabling deep linking"),(0,l.kt)("p",null,"Before you can process deep links, you need to configure your application to react to them. The process to configure an application to react to specific URLs is platform-specific. Unity supports deep links for the following platforms:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/i-os-%E9%AB%98%E7%BA%A7%E4%B8%BB%E9%A2%98/deep-linking-ios"},"iOS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/android-developing/deep-linking-android"},"Android")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/windows-store/deep-linking-universal-windows-platform"},"Universal Windows Platform")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/apple-mac/deep-linking-macos"},"macOS"))),(0,l.kt)("h2",{id:"using-deep-links"},"Using deep links"),(0,l.kt)("p",null,"To process deep links, you can either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-absoluteURL.html"},"Application.absoluteURL")," when the application starts."),(0,l.kt)("li",{parentName:"ul"},"Subscribe to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-deepLinkActivated.html"},"Application.deepLinkActivated")," event while the application is running. When the device opens an application from a deep link URL, Unity raises the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/Application-deepLinkActivated.html"},"Application.deepLinkActivated")," event.")),(0,l.kt)("p",null,"The following code sample shows you how to process a deep URL and load a scene depending on the URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing UnityEngine.SceneManagement;\n\npublic class ProcessDeepLinkMngr : MonoBehaviour\n{\n    public static ProcessDeepLinkMngr Instance { get; private set; }\n    public string deeplinkURL;\n    private void Awake()\n    {\n        if (Instance == null)\n        {\n            Instance = this;                \n            Application.deepLinkActivated += onDeepLinkActivated;\n            if (!string.IsNullOrEmpty(Application.absoluteURL))\n            {\n                // Cold start and Application.absoluteURL not null so process Deep Link.\n                onDeepLinkActivated(Application.absoluteURL);\n            }\n            // Initialize DeepLink Manager global variable.\n            else deeplinkURL = "[none]";\n            DontDestroyOnLoad(gameObject);\n        }\n        else\n        {\n            Destroy(gameObject);\n        }\n    }\n \n    private void onDeepLinkActivated(string url)\n    {\n        // Update DeepLink Manager global variable, so URL can be accessed from anywhere.\n        deeplinkURL = url;\n        \n// Decode the URL to determine action. \n// In this example, the app expects a link formatted like this:\n// unitydl://mylink?scene1\n        string sceneName = url.Split("?"[0])[1];\n        bool validScene;\n        switch (sceneName)\n        {\n            case "scene1":\n                validScene = true;\n                break;\n            case "scene2":\n                validScene = true;\n                break;\n            default:\n                validScene = false;\n                break;\n        }\n        if (validScene) SceneManager.LoadScene(sceneName);\n    }\n}\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u6df1\u5c42\u94fe\u63a5"},"\u6d4b\u8bd5\u6df1\u5c42\u94fe\u63a5"),(0,l.kt)("p",null,"To test a deep link:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create an ",(0,l.kt)("a",{parentName:"li",href:"#example-html-file"},"HTML file")," that includes the deep link to test."),(0,l.kt)("li",{parentName:"ol"},"Host it on a local web server."),(0,l.kt)("li",{parentName:"ol"},"Access it from a web browser on your device and click the link.")),(0,l.kt)("h3",{id:"example-html-file"},"Example HTML file"),(0,l.kt)("p",null,"This is an example HTML file that you can use to test deep links. To redirect the link, change the ",(0,l.kt)("inlineCode",{parentName:"p"},"href")," attribute in one of the ",(0,l.kt)("inlineCode",{parentName:"p"},"&lt;a&gt;")," elements."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'&lt;html&gt;\n    &lt;head&gt;\n       &lt;meta http-equiv=Content-Type content="text/html; charset=windows-1252"&gt;\n    &lt;/head&gt;\n    &lt;body &gt;\n       &lt;h1&gt;My Deep Link Test page&lt;/h1&gt;\n       &lt;p&gt;&lt;a href="unitydl://mylink"&gt;Launch&lt;/a&gt;&lt;/p&gt;\n       &lt;p&gt;&lt;a href="unitydl://mylink?parameter"&gt;Launch with Parameter&lt;/a&gt;&lt;/p&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n')))}m.isMDXComponent=!0}}]);