"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30492],{3905:function(n,t,e){e.d(t,{Zo:function(){return y},kt:function(){return s}});var i=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var d=i.createContext({}),p=function(n){var t=i.useContext(d),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},y=function(n){var t=p(n.components);return i.createElement(d.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,d=n.parentName,y=l(n,["components","mdxType","originalType","parentName"]),u=p(e),s=r,m=u["".concat(d,".").concat(s)]||u[s]||c[s]||a;return e?i.createElement(m,o(o({ref:t},y),{},{components:e})):i.createElement(m,o({ref:t},y))}));function s(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=n,l.mdxType="string"==typeof n?n:r,o[1]=l;for(var p=2;p<a;p++)o[p]=e[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}u.displayName="MDXCreateElement"},73760:function(n,t,e){e.r(t),e.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=e(87462),r=e(63366),a=(e(67294),e(3905)),o=["components"],l={id:"AndroidUnityPlayerActivity",title:"\u6269\u5c55 UnityPlayerActivity Java \u4ee3\u7801",slug:"/plugins-for-android/android-unity-player-activity"},d="\u6269\u5c55 UnityPlayerActivity Java \u4ee3\u7801",p={unversionedId:"platform-specific/android/android-developing/plugins-for-android/AndroidUnityPlayerActivity",id:"platform-specific/android/android-developing/plugins-for-android/AndroidUnityPlayerActivity",title:"\u6269\u5c55 UnityPlayerActivity Java \u4ee3\u7801",description:"\u672c\u9875\u9762\u5305\u542b\u4ee5\u4e0b\u90e8\u5206\uff1a",source:"@site/docs/platform-specific/android/android-developing/plugins-for-android/android-unity-player-activity.md",sourceDirName:"platform-specific/android/android-developing/plugins-for-android",slug:"/plugins-for-android/android-unity-player-activity",permalink:"/doc-unity-manual/docs/plugins-for-android/android-unity-player-activity",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-developing/plugins-for-android/android-unity-player-activity.md",tags:[],version:"current",frontMatter:{id:"AndroidUnityPlayerActivity",title:"\u6269\u5c55 UnityPlayerActivity Java \u4ee3\u7801",slug:"/plugins-for-android/android-unity-player-activity"},sidebar:"tutorialSidebar",previous:{title:"\u9002\u7528\u4e8e Android \u7684\u539f\u751f (C++) \u63d2\u4ef6",permalink:"/doc-unity-manual/docs/plugins-for-android/android-native-plugins"},next:{title:"\u5c06 Unity \u96c6\u6210\u5230 Android \u5e94\u7528\u7a0b\u5e8f\u4e2d",permalink:"/doc-unity-manual/docs/android-developing/unityasa-library-android"}},y={},c=[{value:"\u6269\u5c55 UnityPlayerActivity \u6587\u4ef6",id:"\u6269\u5c55-unityplayeractivity-\u6587\u4ef6",level:2},{value:"\u4ece\u81ea\u5b9a\u4e49 UnityPlayerActivity \u6587\u4ef6\u6307\u5b9a Unity \u542f\u52a8\u53c2\u6570",id:"\u4ece\u81ea\u5b9a\u4e49-unityplayeractivity-\u6587\u4ef6\u6307\u5b9a-unity-\u542f\u52a8\u53c2\u6570",level:2}],u={toc:c};function s(n){var t=n.components,e=(0,r.Z)(n,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6269\u5c55-unityplayeractivity-java-\u4ee3\u7801"},"\u6269\u5c55 UnityPlayerActivity Java \u4ee3\u7801"),(0,a.kt)("p",null,"\u672c\u9875\u9762\u5305\u542b\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%89%A9%E5%B1%95-unity-player-activity-%E6%96%87%E4%BB%B6"},"\u6269\u5c55 UnityPlayerActivity \u6587\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%BB%8E%E8%87%AA%E5%AE%9A%E4%B9%89-unity-player-activity-%E6%96%87%E4%BB%B6%E6%8C%87%E5%AE%9A-unity-%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0"},"\u4ece\u81ea\u5b9a\u4e49 UnityPlayerActivity \u6587\u4ef6\u6307\u5b9a Unity \u542f\u52a8\u53c2\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#unity-player-activity-%E7%A4%BA%E4%BE%8B%E6%96%87%E4%BB%B6"},"\u5305\u542b\u793a\u4f8b\u6e05\u5355\u7684 UnityPlayerActivity \u793a\u4f8b\u6587\u4ef6"))),(0,a.kt)("h2",{id:"\u6269\u5c55-unityplayeractivity-\u6587\u4ef6"},"\u6269\u5c55 UnityPlayerActivity \u6587\u4ef6"),(0,a.kt)("p",null,"\u5728\u5f00\u53d1 Unity Android \u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u53ef\u4f7f\u7528\u63d2\u4ef6\u6765\u6269\u5c55\u6807\u51c6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityPlayerActivity")," \u7c7b\uff08\u8fd9\u662f Android \u4e0a\u7684 Unity Player \u7684\u4e3b Java \u7c7b\uff0c\u7c7b\u4f3c\u4e8e Unity iOS \u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController.mm"),"\uff09\u3002\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u8986\u76d6 Android \u64cd\u4f5c\u7cfb\u7edf\u548c Unity Android \u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u6240\u6709\u57fa\u672c\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,"\u8981\u8986\u76d6\u9ed8\u8ba4\u6d3b\u52a8\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"UnityPlayerActivity")," \u6d3e\u751f\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Activity"),"\uff08\u8bf7\u53c2\u9605 Android \u6587\u6863\u4e2d\u6709\u5173",(0,a.kt)("a",{parentName:"li",href:"http://developer.android.com/reference/android/app/Activity.html"},"\u6d3b\u52a8 (Activity)")," \u7684\u90e8\u5206\uff09\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Modify the ",(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/android-introducing/android-manifest"},"Android App Manifest")," to have the new ",(0,a.kt)("inlineCode",{parentName:"li"},"Activity")," as the application\u2019s entry point.")),(0,a.kt)("p",null,"\u4e3a\u5b9e\u73b0\u6b64\u76ee\u7684\uff0c\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4ece Unity \u5bfc\u51fa\u9879\u76ee\uff0c\u7136\u540e\u5728 Android Studio \u4e2d\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityPlayerActivity")," \u7c7b\u8fdb\u884c\u5fc5\u8981\u7684\u4fee\u6539\u3002\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7c7b\uff0c\u5bf9\u5176\u8fdb\u884c\u6269\u5c55\uff0c\u4fee\u6539 unityLibrary \u9879\u76ee\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\uff0c\u7136\u540e\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityPlayerActivity")," \u66ff\u6362\u4e3a\u60a8\u7684\u7c7b\u3002"),(0,a.kt)("p",null,"\u8981\u7528\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Activity")," \u521b\u5efa\u63d2\u4ef6\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u9879\u76ee\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("p",null,"1.\u6269\u5c55 UnityPlayerActivity \u6587\u4ef6\u3002\u8fd9\u6700\u597d\u5728\u4ece Unity \u5bfc\u51fa\u9879\u76ee\u540e\u5728 Android Studio \u4e2d\u5b8c\u6210\u3002\u7136\u540e\u60a8\u6709\u4ee5\u4e0b\u9009\u9879\uff1a ","*"," \u5c06\u5305\u542b\u60a8\u7684 activity \u7c7b\u7684 .java \u6216 .kt \u6587\u4ef6\u76f4\u63a5\u653e\u5165 Unity \u9879\u76ee\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u6587\u4ef6\u4f4d\u4e8e\uff1a ","*","  ",(0,a.kt)("strong",{parentName:"p"},"macOS:")," :",(0,a.kt)("inlineCode",{parentName:"p"},"/Applications/Unity/Unity.app/Contents/PlaybackEngines/AndroidPlayer/src/com/unity3d/player")," ","*","  ",(0,a.kt)("strong",{parentName:"p"},"Windows:")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Unity\\Editor\\Data\\PlaybackEngines\\AndroidPlayer\\src\\com\\unity3d\\player")," ","*"," \u521b\u5efa\u5305\u542b\u60a8\u7684\u7c7b\u7684 Java \u5e93\uff0c\u8fdb\u884c\u7f16\u8bd1\u5e76\u5c06\u751f\u6210\u7684 .jar \u6587\u4ef6\u653e\u5165 Unity \u9879\u76ee ","*"," \u521b\u5efa\u4e00\u4e2a\u5305\u542b\u60a8\u7684\u7c7b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/projects/android-library"},"Android \u5e93"),"\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u6b64\u5e93\u653e\u5165\u6e90\u4ee3\u7801\u4e2d\u7684 Unity \u9879\u76ee\u4e2d\u3002\u4e3a\u6b64\uff0c\u8bf7\u4e3a\u60a8\u7684\u6587\u4ef6\u5939\u547d\u540d\u5e76\u4f7f\u7528 .androidlib \u6269\u5c55\u540d\uff0c\u6216\u8005\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u7f16\u8bd1\u5e76\u5c06\u751f\u6210\u7684 .aar \u6587\u4ef6\u653e\u5165\u60a8\u7684 Unity \u9879\u76ee\u4e2d 2. Create a new Android App Manifest to set the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Activity")," as the entry point of your application, then place the ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/Plugins/Android")," folder of your Project."),(0,a.kt)("h2",{id:"\u4ece\u81ea\u5b9a\u4e49-unityplayeractivity-\u6587\u4ef6\u6307\u5b9a-unity-\u542f\u52a8\u53c2\u6570"},"\u4ece\u81ea\u5b9a\u4e49 UnityPlayerActivity \u6587\u4ef6\u6307\u5b9a Unity \u542f\u52a8\u53c2\u6570"),(0,a.kt)("p",null,"\u6269\u5c55 ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityPlayerActivity")," \u65f6\uff0c\u53ef\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"String UnityPlayerActivity.updateUnityCommandLineArguments"),"(String cmdLine) \u4ee5\u5c06\u542f\u52a8\u53c2\u6570\u4f20\u9012\u7ed9 Unity\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UnityPlayerActivity")," \u4f1a\u5728\u542f\u52a8\u671f\u95f4\u8c03\u7528\u6b64\u65b9\u6cd5\u3002\u5b83\u63a5\u53d7\u5f53\u524d\u7684\u547d\u4ee4\u884c\u53c2\u6570\uff08\u8fd9\u4e9b\u53c2\u6570\u53ef\u4e3a null \u6216\u4e3a\u7a7a\uff09\uff0c\u5e76\u8fd4\u56de\u65b0\u7684\u547d\u4ee4\u884c\u53c2\u6570\u5b57\u7b26\u4e32\u4ee5\u4f20\u9012\u7ed9 Unity\u3002"),(0,a.kt)("p",null,"\u6709\u5173 Unity \u547d\u4ee4\u884c\u754c\u9762\u7684\u4e00\u822c\u6982\u8ff0\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/command-line-arguments"},"\u547d\u4ee4\u884c\u53c2\u6570"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u8be5\u6587\u4ef6\u6839\u636e\u5f53\u524d\u8bbe\u5907\u9009\u62e9\u56fe\u5f62 API\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'package com.company.product;\nimport com.unity3d.player.UnityPlayerActivity;\nimport android.os.Bundle;\nimport android.os.Build;\n\npublic class OverrideExample extends UnityPlayerActivity {\n    private boolean preferVulkan() {\n        // \u5728 Google Pixel \u8bbe\u5907\u4e0a\u4f7f\u7528 Vulkan\n        if (Build.MANUFACTURER.equals("Google") && Build.MODEL.startsWith("Pixel"))\n            return true;\n        else\n            return false;\n    }\n\n    private boolean preferES2() {\n        // \u5728\u8fd0\u884c Android 5.1 \u6216\u66f4\u65e9\u7248\u672c\u7684\u8bbe\u5907\u4e0a\u4f7f\u7528 OpenGL ES 2.0\n        if (Build.VERSION.SDK_INT &lt;= Build.VERSION_CODES.LOLLIPOP_MR1)\n            return true;\n        else\n            return false;\n    }\n\n    private String appendCommandLineArgument(String cmdLine, String arg) {\n        if (arg == null || arg.isEmpty())\n            return cmdLine;\n        else if (cmdLine == null || cmdLine.isEmpty())\n            return arg;\n        else\n            return cmdLine + " " + arg; \n    } \n\n    @Override protected String updateUnityCommandLineArguments(String cmdLine)\n    {\n        if (preferVulkan())\n            return appendCommandLineArgument(cmdLine, "-force-vulkan");\n        else if (preferES2())\n            return appendCommandLineArgument(cmdLine, "-force-gles20");\n        else\n            return cmdLine; // \u8ba9 Unity \u6839\u636e PlayerSettings \u9009\u62e9\u56fe\u5f62 API\n    }\n\n    @Override protected void onCreate(Bundle savedInstanceState)\n    {\n        super.onCreate(savedInstanceState);\n    }\n}\n')),(0,a.kt)("h1",{id:"unityplayeractivity-\u793a\u4f8b\u6587\u4ef6"},"UnityPlayerActivity \u793a\u4f8b\u6587\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityPlayerActivity")," \u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'OverrideExample.java:\npackage com.company.product;\nimport com.unity3d.player.UnityPlayerActivity;\nimport android.os.Bundle;\nimport android.util.Log;\n\npublic class OverrideExample extends UnityPlayerActivity {\n  protected void onCreate(Bundle savedInstanceState) {\n    // \u8c03\u7528 UnityPlayerActivity.onCreate()\n    super.onCreate(savedInstanceState);\n    // \u5c06\u8c03\u8bd5\u6d88\u606f\u6253\u5370\u81f3 logcat\n    Log.d("OverrideActivity", "onCreate called!");\n  }\n  public void onBackPressed()\n  {\n    // \u4e0d\u8c03\u7528 UnityPlayerActivity.onBackPressed()\uff0c\u800c\u662f\u76f4\u63a5\u5ffd\u7565 Back \u6309\u94ae\u4e8b\u4ef6\n    // super.onBackPressed();\n  }\n}\n')),(0,a.kt)("p",null,"\u76f8\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," \u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'&lt;?xml version="1.0" encoding="utf-8"?&gt;\n&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.company.product"&gt;\n  &lt;application android:icon="@drawable/app_icon" android:label="@string/app_name"&gt;\n    &lt;activity android:name="com.YourPackage.name.OverrideExample"\n             android:label="@string/app_name"\n             android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"&gt;\n        &lt;intent-filter&gt;\n            &lt;action android:name="android.intent.action.MAIN" /&gt;\n            &lt;category android:name="android.intent.category.LAUNCHER" /&gt;\n        &lt;/intent-filter&gt;\n    &lt;/activity&gt;\n  &lt;/application&gt;\n&lt;/manifest&gt;\n\n')),(0,a.kt)("p",null,"\u8981\u7528\u65b0 Activity \u521b\u5efa\u63d2\u4ef6\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u9879\u76ee\uff0c\u5fc5\u987b\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("p",null,"1.\u6269\u5c55 UnityPlayerActivity \u6587\u4ef6\u3002\u8fd9\u6700\u597d\u5728\u4ece Unity \u5bfc\u51fa\u9879\u76ee\u540e\u5728 Android Studio \u4e2d\u5b8c\u6210\u3002\u6709\u51e0\u4e2a\u9009\u9879\uff1a ","*"," \u53ef\u5c06\u5305\u542b\u60a8\u7684 activity \u7c7b\u7684 .java \u6216 .kt \u6587\u4ef6\u653e\u5165 Unity \u9879\u76ee\u3002 ","*"," \u521b\u5efa\u5305\u542b\u60a8\u7684\u7c7b\u7684 Java \u5e93\uff0c\u8fdb\u884c\u7f16\u8bd1\u5e76\u5c06\u751f\u6210\u7684 .jar \u6587\u4ef6\u653e\u5165 Unity \u9879\u76ee\u3002 ","*"," \u521b\u5efa\u5305\u542b\u60a8\u7684\u7c7b\u7684 Android \u5e93\uff1b\u8fd9\u4e2a\u5e93\u53ef\u4ee5\u6e90\u4ee3\u7801\u7684\u5f62\u5f0f\u653e\u5165 Unity \u9879\u76ee\u4e2d\uff08\u901a\u8fc7\u547d\u540d\u6587\u4ef6\u5939\uff0c\u4f7f\u5176\u5177\u6709 .androidlib \u201c\u6269\u5c55\u201d\uff09\uff0c\u6216\u8005\u53ef\u4ee5\u8fdb\u884c\u7f16\u8bd1\u5e76\u5c06\u751f\u6210\u7684 .aar \u653e\u5165 Unity \u9879\u76ee\u4e2d\u3002 2. Create a new Android App Manifest to set the new Activity as the entry point of your application, then place the AndroidManifest.xml file in the Assets/Plugins/Android folder of your Project."),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 2019.2 \u4e2d\u6dfb\u52a0\u4e86\u65b0\u4ee3\u7801\u793a\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9 Unity 2019.3 \u6216\u66f4\u9ad8\u7248\u672c\u66f4\u65b0\u4e86 AndroidManifest \u793a\u4f8b")))}s.isMDXComponent=!0}}]);