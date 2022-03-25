"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5260],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return d}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),l=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=l(t.components);return a.createElement(u.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=l(e),d=r,A=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return e?a.createElement(A,i(i({ref:n},s),{},{components:e})):a.createElement(A,i({ref:n},s))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,i=new Array(o);i[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var l=2;l<o;l++)i[l]=e[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},29630:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=e(87462),r=e(63366),o=(e(67294),e(3905)),i=["components"],p={id:"UnityIAPAmazonConfiguration",title:"Amazon Appstore \u7684\u914d\u7f6e",slug:"/unity-iapsetting-up/unity-iapamazon-configuration"},u="Amazon Appstore \u7684\u914d\u7f6e",l={unversionedId:"unity-services/unity-iap/unity-iapsetting-up/UnityIAPAmazonConfiguration",id:"unity-services/unity-iap/unity-iapsetting-up/UnityIAPAmazonConfiguration",title:"Amazon Appstore \u7684\u914d\u7f6e",description:"\u7b80\u4ecb",source:"@site/docs/unity-services/unity-iap/unity-iapsetting-up/unity-iapamazon-configuration.md",sourceDirName:"unity-services/unity-iap/unity-iapsetting-up",slug:"/unity-iapsetting-up/unity-iapamazon-configuration",permalink:"/doc-unity-manual/docs/unity-iapsetting-up/unity-iapamazon-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-iap/unity-iapsetting-up/unity-iapamazon-configuration.md",tags:[],version:"current",frontMatter:{id:"UnityIAPAmazonConfiguration",title:"Amazon Appstore \u7684\u914d\u7f6e",slug:"/unity-iapsetting-up/unity-iapamazon-configuration"},sidebar:"tutorialSidebar",previous:{title:"Setting up Unity IAP",permalink:"/doc-unity-manual/docs/unity-iapsetting-up"},next:{title:"\u9488\u5bf9 Apple App Store \u548c Mac App Store \u8fdb\u884c\u914d\u7f6e",permalink:"/doc-unity-manual/docs/unity-iapsetting-up/unity-iapapple-configuration"}},s={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u8de8\u5e97\u5b9e\u73b0 IAP",id:"\u8de8\u5e97\u5b9e\u73b0-iap",level:2},{value:"Amazon Appstore",id:"amazon-appstore",level:2},{value:"\u51c6\u5907\u5f00\u59cb",id:"\u51c6\u5907\u5f00\u59cb",level:3},{value:"\u8bbe\u5907\u8bbe\u7f6e",id:"\u8bbe\u5907\u8bbe\u7f6e",level:3},{value:"Unity \u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e",id:"unity-\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e",level:3},{value:"Amazon Appstore \u8bbe\u7f6e",id:"amazon-appstore-\u8bbe\u7f6e",level:3}],m={toc:c};function d(t){var n=t.components,e=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amazon-appstore-\u7684\u914d\u7f6e"},"Amazon Appstore \u7684\u914d\u7f6e"),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"\u672c\u6307\u5357\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e Amazon Appstore \u4e0e Unity \u5e94\u7528\u5185\u8d2d (IAP) \u7cfb\u7edf\u914d\u5408\u4f7f\u7528\u3002\u6b64\u8bbe\u7f6e\u8fc7\u7a0b\u5305\u62ec\u5efa\u7acb\u6570\u5b57\u8bb0\u5f55\u548c\u5173\u7cfb\uff1b\u4e0e Unity IAP API \u8fdb\u884c\u4ea4\u4e92\u3001\u8bbe\u7f6e Amazon \u5f00\u53d1\u8005\u5e10\u6237\u4ee5\u53ca\u6d4b\u8bd5\u548c\u53d1\u5e03 Unity IAP \u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u7528\u5230\u8fd9\u4e9b\u8bb0\u5f55\u548c\u5173\u7cfb\u3002"),(0,o.kt)("p",null,"\u4e0e\u5176\u4ed6\u5e73\u53f0\u4e00\u6837\uff0cAmazon \u5e94\u7528\u5546\u5e97\u5141\u8bb8\u8d2d\u4e70\u865a\u62df\u5546\u54c1\u548c\u6240\u7ba1\u7406\u7684\u5546\u54c1\u3002\u8fd9\u4e9b\u6570\u5b57\u5546\u54c1\u7684\u6807\u8bc6\u5305\u62ec\u4e00\u4e2a\u5b57\u7b26\u4e32\u6807\u8bc6\u7b26\u548c\u4e00\u4e2a\u989d\u5916\u7528\u4e8e\u5b9a\u4e49\u8010\u7528\u6027\u7684\u7c7b\u578b\uff0c\u5176\u4e2d\u7684\u7c7b\u578b\u9009\u9879\u5305\u62ec\u8ba2\u9605\uff08\u53ef\u4ee5\u8ba2\u9605\uff09\u3001\u6d88\u8017\u54c1\uff08\u53ef\u4ee5\u591a\u6b21\u8d2d\u4e70\uff09\u4ee5\u53ca\u975e\u6d88\u8017\u54c1\uff08\u53ef\u4ee5\u8d2d\u4e70\u4e00\u6b21\uff09\u3002"),(0,o.kt)("h2",{id:"\u8de8\u5e97\u5b9e\u73b0-iap"},"\u8de8\u5e97\u5b9e\u73b0 IAP"),(0,o.kt)("p",null,"\u4f7f\u7528\u5171\u4eab\u7684 Android Bundle ID \u540c\u65f6\u53d1\u5e03\u5230\u591a\u4e2a Android IAP \u5546\u5e97\uff08\u4f8b\u5982 Amazon \u548c Google\uff09\u65f6\uff0c\u4f1a\u51fa\u73b0\u8de8\u5e97\u5b89\u88c5\u95ee\u9898\u3002\u8bf7\u53c2\u9605\u6709\u5173 ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%8C%87%E5%8D%97/unity-iapcross-store-installation-issues"},"Android \u5e94\u7528\u5185\u8d2d (IAP) \u5546\u5e97\u7684\u8de8\u5e97\u5b89\u88c5\u95ee\u9898"),"\u7684\u9875\u9762\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"amazon-appstore"},"Amazon Appstore"),(0,o.kt)("h3",{id:"\u51c6\u5907\u5f00\u59cb"},"\u51c6\u5907\u5f00\u59cb"),(0,o.kt)("p",null,"1.\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.amazon.com/"},"Amazon Developer Portal")," \u4e2d\u8bbe\u7acb Amazon \u5f00\u53d1\u8005\u5e10\u6237\u3002 1.\u7f16\u5199\u4e00\u4e2a\u6e38\u620f\u5e76\u5b9e\u73b0 Unity IAP API\u3002\u5982\u9700\u53c2\u8003\u8d44\u6599\uff0c\u8bf7\u53c2\u9605\u6709\u5173 ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%8C%87%E5%8D%97/unity-iapinitialization"},"Unity IAP \u521d\u59cb\u5316"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://unity3d.com/learn/tutorials/topics/analytics/integrating-unity-iap-your-game"},"\u5728\u6e38\u620f\u4e2d\u96c6\u6210 Unity IAP (Integrating Unity IAP in your game)")," \u7684\u6307\u5357\u3002Amazon Appstore \u9002\u5408\u7528\u4e8e\u5bf9 IAP \u5546\u54c1\u6ca1\u6709\u9650\u5236\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("h3",{id:"\u8bbe\u5907\u8bbe\u7f6e"},"\u8bbe\u5907\u8bbe\u7f6e"),(0,o.kt)("p",null,"1.\u5bf9\u4e8e Android \u8bbe\u5907\uff0c\u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.com/appstore_android_app"},"Amazon Appstore"),"\u3002 2.\u5bf9\u4e8e FireOS \u8bbe\u5907\uff0c\u5e94\u8be5\u4f1a\u9884\u88c5 Amazon Appstore\u3002",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u867d\u7136\u60a8\u53ef\u4ee5\u81ea\u7531\u5b9a\u4f4d FireOS \u8bbe\u5907\uff0c\u4f46 FireOS \u4e0d\u662f Unity \u652f\u6301\u7684\u5e73\u53f0\u3002",(0,o.kt)("br",null),(0,o.kt)("br",null)," 3.\u5b89\u88c5 Amazon Appstore \u540e\uff0c\u5e94\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"http://www.amazon.com/Amazon-App-Tester/dp/B00BN3YZM2/"},"Amazon App Tester"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"![AmazonConfiguration-AmazonAppTester.jpg](https://docs.unity3d.com/cn/2022.1/uploads/Main/AmazonConfiguration-AmazonAppTester.jpg)\n")),(0,o.kt)("p",null,"1.\u8bbe\u7f6e Android SDK 1.\u8981\u5b89\u88c5\u5e76\u67e5\u770b Android \u8c03\u8bd5\u65e5\u5fd7\uff0c\u8bf7\u786e\u4fdd\u5df2\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/install.html"},"Android SDK"),"\u3002\u4ece Android SDK \u5b89\u88c5\u9875\u9762\u4e0b\u8f7d\u76f8\u5173\u547d\u4ee4\u884c\u5de5\u5177\u5305\uff0c\u7136\u540e\u5c06\u5176\u89e3\u538b\u7f29\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u3002 1.\u786e\u8ba4 SDK \u80fd\u901a\u8fc7\u547d\u4ee4\u884c adb \u5de5\u5177\u8bc6\u522b\u8fde\u63a5\u7684 Android \u8bbe\u5907\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"|[11:07:01] user@laptop:/Applications | $ adb devices\nList of devices attached\n00DA0807526300W5    device\n")),(0,o.kt)("h3",{id:"unity-\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e"},"Unity \u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528 Unity \u7684 IAP\uff0c\u9700\u8981\u6267\u884c\u51e0\u4e2a\u8bbe\u7f6e\u6b65\u9aa4\u3002"),(0,o.kt)("p",null,"1.\u5bfc\u5165 Unity IAP \u63d2\u4ef6\u3002\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity-iapsetting-up"},"\u8bbe\u7f6e Unity IAP")," \u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff08Unity 5.3 \u6216\u66f4\u9ad8\u7248\u672c\uff09\u3002 1.\u8bbe\u7f6e IAP \u76ee\u6807\u5546\u5e97\u3002\u60a8\u5e94\u8be5\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e00\u4e2a Android \u5e94\u7528\u7a0b\u5e8f\u3002\u8bf7\u4f7f\u7528  ",(0,o.kt)("strong",{parentName:"p"},"Unity IAP Window ",">"," Unity IAP ",">"," Android ",">"," Target Amazon"),"  \u83dc\u5355\u9879\u6765\u8bbe\u7f6e\u76ee\u6807\u5546\u5e97\u3002\u6b64\u83dc\u5355\u9879\u7528\u4e8e\u5728 Google\u3001Amazon \u548c\u5176\u4ed6 Android \u5e94\u7528\u5546\u5e97\u4e4b\u95f4\u5207\u6362\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"![AmazonConfiguration-TargetAmazonMenu.jpg](https://docs.unity3d.com/cn/2022.1/uploads/Main/AmazonConfiguration-TargetAmazonMenu.jpg)\n")),(0,o.kt)("p",null,"\u6216\u8005\uff0c\u8bf7\u8c03\u7528 API\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"UnityPurchasingEditor.TargetAndroidStore(AndroidStore.AmazonAppStore)\n")),(0,o.kt)("h3",{id:"amazon-appstore-\u8bbe\u7f6e"},"Amazon Appstore \u8bbe\u7f6e"),(0,o.kt)("p",null,"\u5728\u51c6\u5907\u4f7f\u7528 Amazon \u5e94\u7528\u5546\u5e97\u65f6\uff0c\u65e0\u9700\u4e0b\u8f7d Amazon \u7684\u672c\u673a IAP \u63d2\u4ef6\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u7684\u6240\u6709\u529f\u80fd\u90fd\u5df2\u5305\u542b\u5728 Unity \u7684 IAP \u670d\u52a1\u4e2d\u3002"),(0,o.kt)("p",null,"1.\u6dfb\u52a0\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u4ece Amazon Developer Portal \u4e2d\u9009\u62e9  ",(0,o.kt)("strong",{parentName:"p"},"Add a New App")," \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"![AmazonConfiguration-AddNewApp.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/AmazonConfiguration-AddNewApp.png) \n")),(0,o.kt)("p",null,"1.\u8bbe\u7f6e\u60a8\u7684\u76ee\u5f55\u3002\u4f7f\u7528\u60a8\u4e8b\u5148\u51c6\u5907\u7684\u5546\u54c1\u63cf\u8ff0\uff0c\u901a\u8fc7 Amazon Developer Portal \u5c06\u5546\u54c1\u6dfb\u52a0\u5230 Amazon \u76ee\u5f55\u3002\u5bfc\u822a\u81f3\u5e94\u7528\u7a0b\u5e8f\u7684\u9875\u9762\uff0c\u7136\u540e\u627e\u5230  ",(0,o.kt)("strong",{parentName:"p"},"In-App Items"),"  \u90e8\u5206\u3002\u4f7f\u7528  ",(0,o.kt)("strong",{parentName:"p"},"Add a Consumable")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"Add an Entitlement"),"  \u6216  ",(0,o.kt)("strong",{parentName:"p"},"Add a Subscription"),"  \u6309\u94ae\u6765\u8bbe\u7f6e\u60a8\u7684\u76ee\u5f55\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"![AmazonConfiguration-SetUpCatalog.png](https://docs.unity3d.com/cn/2022.1/uploads/Main/AmazonConfiguration-SetUpCatalog.png) \n")))}d.isMDXComponent=!0}}]);