"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14568],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),g=i,y=m["".concat(s,".").concat(g)]||m[g]||u[g]||r;return n?a.createElement(y,o(o({ref:e},p),{},{components:n})):a.createElement(y,o({ref:e},p))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18957:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"UnityAnalyticsRemoteSettingsScripting",title:"Remote Settings \u811a\u672c",slug:"/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting"},s="Remote Settings \u811a\u672c",c={unversionedId:"unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/UnityAnalyticsRemoteSettingsScripting",id:"unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/UnityAnalyticsRemoteSettingsScripting",title:"Remote Settings \u811a\u672c",description:"*Note : Unity Remote Config is now available as a preview package. Remote Config is an improved offering that allows you to change the behavior and appearance of your game without requiring a new binary. You can remotely enable or disable features, change the specifics of your game to target specific audiences, or run special events by scheduling new content releases.*",source:"@site/docs/unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting.md",sourceDirName:"unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using",slug:"/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting",permalink:"/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-analytics/unity-analytics-remote-settings/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting.md",tags:[],version:"current",frontMatter:{id:"UnityAnalyticsRemoteSettingsScripting",title:"Remote Settings \u811a\u672c",slug:"/unity-analytics-remote-settings-using/unity-analytics-remote-settings-scripting"},sidebar:"tutorialSidebar",previous:{title:"Remote Settings \u7f51\u7edc\u8bf7\u6c42",permalink:"/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests"},next:{title:"\u6d4b\u8bd5 Remote Settings",permalink:"/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-testing"}},p={},u=[{value:"\u786e\u4fdd\u8bbe\u7f6e\u4e00\u81f4\u6027",id:"\u786e\u4fdd\u8bbe\u7f6e\u4e00\u81f4\u6027",level:2}],m={toc:u};function g(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-settings-\u811a\u672c"},"Remote Settings \u811a\u672c"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"*Note")," : ",(0,r.kt)("a",{parentName:"p",href:"https://unity.com/remote-config"},"Unity Remote Config")," is now available as a preview package. Remote Config is an improved offering that allows you to change the behavior and appearance of your game without requiring a new binary. You can remotely enable or disable features, change the specifics of your game to target specific audiences, or run special events by scheduling new content releases.*"),(0,r.kt)("p",null,"\u4f7f\u7528 Unity Scripting API ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/RemoteSettings.html"},"RemoteSettings")," \u7c7b\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u8bbf\u95ee Remote Settings\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u7c7b\u63d0\u4f9b\u8bbf\u95ee Remote Settings \u7684\u51fd\u6570\uff08\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings.GetString()"),"\uff09\u4ee5\u53ca\u5728\u63d0\u53d6\u6216\u66f4\u65b0\u8bbe\u7f6e\u65f6\u53ef\u7528\u4e8e\u89e6\u53d1\u51fd\u6570\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u4e8b\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u76ee\u7684"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BeforeFetchFromServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"RemoteSettings")," \u7c7b\u53d1\u51fa\u7f51\u7edc\u8bf7\u6c42\u4ee5\u83b7\u53d6 Remote Settings \u4e4b\u524d\u7acb\u5373\u5206\u53d1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Completed"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\u65f6\u5206\u53d1\u3002\u5373\u4f7f\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\u4e14 Remote Settings \u6ca1\u6709\u53d8\u5316\uff0c\u4e5f\u59cb\u7ec8\u5206\u53d1 ",(0,r.kt)("inlineCode",{parentName:"td"},"Completed"),"\u3002\u53ef\u4ee5\u4f7f\u7528\u4f20\u9012\u7ed9\u59d4\u6258\u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"serverResponse")," \u4ee3\u7801\u6765\u786e\u5b9a\u8bf7\u6c42\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\u3002\u8be5\u53c2\u6570\u5305\u542b\u4e00\u4e2a\u6807\u51c6 HTTP \u54cd\u5e94\u4ee3\u7801\uff0c\u4f8b\u5982 200 \u8868\u793a\u6210\u529f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Updated"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u7f51\u7edc\u8bf7\u6c42\u6210\u529f\u5b8c\u6210\u540e\u4f46\u4ec5\u5728 Remote Settings \u81ea\u4e0a\u6b21\u68c0\u67e5\u540e\u53d1\u751f\u66f4\u6539\u7684\u60c5\u51b5\u4e0b\u624d\u5206\u53d1\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u6ce8\u610f\uff1a\u5728 Unity 2018.1 \u4e4b\u524d\uff0c\u5373\u4f7f\u8bbe\u7f6e\u672a\u66f4\u6539\uff0c\u4e5f\u59cb\u7ec8\u5206\u53d1 ",(0,r.kt)("inlineCode",{parentName:"td"},"Updated")," \u4e8b\u4ef6\u3002\u5982\u679c\u60a8\u4f9d\u8d56\u59d4\u6258\u51fd\u6570\u5728\u6e38\u620f\u4e2d\u5e94\u7528\u8bbe\u7f6e\uff0c\u65e0\u8bba\u662f\u5426\u6709\u66f4\u6539\uff0c\u90fd\u5fc5\u987b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"Completed")," \u4e8b\u4ef6\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"td"},"Updated")," \u4e8b\u4ef6\u3002")))),(0,r.kt)("p",null,"\u5e94\u8be5\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u671f\u95f4\u5c3d\u65e9\u4e3a\u8fd9\u4e9b\u4e8b\u4ef6\u6ce8\u518c\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\uff0c\u4f8b\u5982\u5728\u7b2c\u4e00\u4e2a Unity \u573a\u666f\u4e2d\u52a0\u8f7d\u7684 MonoBehaviour \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Awake()")," \u51fd\u6570\u4e2d\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u83b7\u53d6\u8bbe\u7f6e\u9700\u8981",(0,r.kt)("a",{parentName:"p",href:"/docs/unity-analytics-remote-settings-using/unity-analytics-remote-settings-net-requests"},"\u7f51\u7edc\u5904\u7406"),"\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u5bf9\u8c61\u901a\u8fc7\u5f02\u6b65\u65b9\u5f0f\u5206\u53d1\u5176\u4e8b\u4ef6\u3002\u53ef\u80fd\u4e0d\u4f1a\u5728\u6bcf\u4e2a\u5e73\u53f0\u4e0a\u751a\u81f3\u4e0d\u4f1a\u5728\u540c\u4e00\u5e73\u53f0\u6bcf\u6b21\u542f\u52a8\u65f6\u4ee5\u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e8b\u4ef6\u7684\u76f8\u540c\u987a\u5e8f\u8c03\u7528\u60a8\u7684\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\u3002\u8bf7\u59cb\u7ec8\u7528\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u6765\u521d\u59cb\u5316\u60a8\u7684\u914d\u7f6e\u53d8\u91cf\uff0c\u5e76\u5141\u8bb8\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u671f\u95f4\u7684\u4e0d\u540c\u65f6\u95f4\u8c03\u7528\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u793a\u4f8b")," "),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u7684\u4e00\u4e2a\u7c7b\u5b9a\u4e49\u4e86\u53ef\u8c03\u6574\u6e38\u620f\u96be\u5ea6\u7684\u591a\u4e2a\u5c5e\u6027\uff0c\u5e76\u6839\u636e Remote Settings \u66f4\u65b0\u8fd9\u4e9b\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'using UnityEngine;\n\npublic class RemoteTuningVariables : MonoBehaviour {\n\n    public float DefaultSpawnRateFactor = 1.0f;\n    public float DefaultEnemySpeedFactor = 1.0f;\n    public float DefaultEnemyStrengthFactor = 1.0f;\n    public static float SpawnRateFactor{ get; private set; }\n    public static float EnemySpeedFactor{ get; private set; }\n    public static float EnemyStrengthFactor{ get; private set; }\n\n    void Start () {\n        SpawnRateFactor = DefaultSpawnRateFactor;\n        EnemySpeedFactor = DefaultEnemySpeedFactor;\n        EnemyStrengthFactor = DefaultEnemyStrengthFactor;\n\n        RemoteSettings.Completed += HandleRemoteSettings;\n    }\n\n    private void HandleRemoteSettings(bool wasUpdatedFromServer, bool settingsChanged, int serverResponse){\n        SpawnRateFactor \n            = RemoteSettings.GetFloat ("SpawnRateFactor", DefaultSpawnRateFactor);\n        EnemySpeedFactor\n            = RemoteSettings.GetFloat ("EnemySpeedFactor", DefaultEnemySpeedFactor);\n        EnemyStrengthFactor \n            = RemoteSettings.GetFloat ("EnemyStrengthFactor", DefaultEnemyStrengthFactor);\n    }\n}\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u8be5\u7c7b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings.GetFloat()")," \u65b9\u6cd5\u8c03\u7528\u4e2d\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u503c\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u5bf9\u8c61\u65e0\u6cd5\u627e\u5230\u6307\u5b9a\u7684\u952e\uff08\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u62fc\u9519\u952e\u540d\u79f0\uff09\uff0c\u8be5\u65b9\u6cd5\u4ecd\u4f1a\u5c06\u9ed8\u8ba4\u503c\u5206\u914d\u7ed9\u8c03\u6574\u53d8\u91cf\u3002\u5426\u5219\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GetFloat()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"GetInt()")," \u65b9\u6cd5\u4e3a\u6570\u5b57\u5206\u914d\u96f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GetString()")," \u4e3a\u5b57\u7b26\u4e32\u5206\u914d\u7a7a\u5b57\u7b26\u4e32\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"GetBool()")," \u4e3a\u5e03\u5c14\u503c\u53d8\u91cf\u5206\u914d false\u3002"),(0,r.kt)("p",null,"\u8be5\u7c7b\u8fd8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Start()")," \u65b9\u6cd5\u4e2d\u7684\u5c5e\u6027\u5206\u914d\u76f8\u540c\u7684\u9ed8\u8ba4\u503c\uff0c\u4ee5\u9632\u53e6\u4e00\u4e2a\u7c7b\u5728\u83b7\u53d6 Remote Settings \u4e4b\u524d\u8bbf\u95ee\u8bbe\u7f6e\u800c\u672c\u5730\u6ca1\u6709\u5148\u524d\u7f13\u5b58\u7684\u914d\u7f6e\u53ef\u7528\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Start()")," \u65b9\u6cd5\u4e2d\u5206\u914d\u9ed8\u8ba4\u503c\u53ef\u4ee5\u786e\u4fdd\u8fd9\u4e9b\u5c5e\u6027\u59cb\u7ec8\u6709\u5408\u7406\u503c\u3002"),(0,r.kt)("h2",{id:"\u786e\u4fdd\u8bbe\u7f6e\u4e00\u81f4\u6027"},"\u786e\u4fdd\u8bbe\u7f6e\u4e00\u81f4\u6027"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u6e38\u620f\u4e2d\u6709\u591a\u4e2a\u7c7b\u5728\u4e0d\u540c\u65f6\u95f4\u8bbf\u95ee Remote Settings\uff0c\u67d0\u4e9b\u5bf9\u8c61\u53ef\u80fd\u4f1a\u5728\u5f02\u6b65\u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\u4e4b\u524d\u8bbf\u95ee\u60a8\u7684\u8bbe\u7f6e\uff0c\u800c\u53e6\u4e00\u4e9b\u5bf9\u8c61\u5219\u5728\u4e4b\u540e\u8bbf\u95ee\u8bbe\u7f6e\uff0c\u56e0\u6b64\u53ef\u80fd\u5bfc\u81f4\u8bbe\u7f6e\u503c\u4e0d\u4e00\u81f4\u3002\u8981\u907f\u514d\u8fd9\u79cd\u4e0d\u4e00\u81f4\u95ee\u9898\uff0c\u5fc5\u987b\u7b49\u5f85\u5f02\u6b65\u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\u4e4b\u540e\u624d\u8bbf\u95ee\u8bbe\u7f6e\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528\u5f53\u524d\u4f1a\u8bdd\u5f00\u59cb\u65f6\u7684\u73b0\u6709\u8bbe\u7f6e\u3002\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u672c\u5730\u8bbe\u7f6e\u5728\u540e\u53f0\u66f4\u65b0\uff0c\u73a9\u5bb6\u5c06\u5728\u4e0b\u4e00\u4e2a\u4f1a\u8bdd\u4e2d\u770b\u5230\u5b83\u4eec\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f18\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7f3a\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u8bf7\u6c42\u5b8c\u6210"),(0,r.kt)("td",{parentName:"tr",align:null},"-"," \u8bbe\u7f6e\u503c\u662f\u4e00\u81f4\u7684",(0,r.kt)("br",null),"- \u59cb\u7ec8\u4f7f\u7528\u6700\u65b0\u8bbe\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"-"," \u8bbe\u7f6e\u53ef\u7528\u6027\u7684\u5ef6\u8fdf\u4e0d\u786e\u5b9a",(0,r.kt)("br",null),"- \u5f02\u6b65\u4ee3\u7801\u590d\u6742")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5f53\u524d\u8bbe\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"-"," \u8bbe\u7f6e\u503c\u662f\u4e00\u81f4\u7684",(0,r.kt)("br",null),"- \u8bbe\u7f6e\u7acb\u5373\u53ef\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"-"," \u5728\u7b2c\u4e8c\u4e2a\u4f1a\u8bdd\u624d\u80fd\u4f7f\u7528\u65b0\u8bbe\u7f6e\u503c",(0,r.kt)("br",null),"- \u73a9\u5bb6\u7b2c\u4e00\u6b21\u8fd0\u884c\u6e38\u620f\u65f6\uff0c\u6ca1\u6709\u53ef\u7528\u7684\u8bbe\u7f6e\u3002\uff08\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\uff09")))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u4e00\u4e2a\u63d0\u4f9b\u7a0b\u5e8f\u7c7b\uff0c\u8be5\u7c7b\u6839\u636e\u4ece Analytics \u670d\u52a1\u83b7\u53d6\u7684\u6700\u65b0\u7248 Remote Settings \u6765\u5206\u914d\u5176\u5c5e\u6027\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u7c7b\u4ecd\u7136\u5728\u540e\u53f0\u66f4\u65b0\u8bbe\u7f6e\uff0c\u56e0\u6b64\u4efb\u4f55\u8bbe\u7f6e\u66f4\u6539\u90fd\u5c06\u5728\u4e0b\u4e00\u4e2a\u4f1a\u8bdd\uff08\u800c\u4e0d\u662f\u5f53\u524d\u4f1a\u8bdd\uff09\u4e2d\u4f7f\u7528\u3002\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\uff0c\u56e0\u6b64\u65e0\u8bba\u4f55\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings")," \u7c7b\u63a5\u6536\u5230\u8fdc\u7a0b\u66f4\u65b0\uff0c\u4f7f\u7528\u8fd9\u4e9b\u8bbe\u7f6e\u7684\u6e38\u620f\u7684\u6240\u6709\u90e8\u5206\u90fd\u5c06\u83b7\u5f97\u76f8\u540c\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'using UnityEngine;\n\npublic class RemoteSettingProvider : MonoBehaviour {\n    public float DefaultSpawnRateFactor = 1.0f;\n    public float DefaultEnemySpeedFactor = 1.0f;\n    public float DefaultEnemyStrengthFactor = 1.0f;\n    public float SpawnRateFactor{ get; private set; }\n    public float EnemySpeedFactor{ get; private set; }\n    public float EnemyStrengthFactor{ get; private set; }\n\n    // \u5355\u4f8b\u6a21\u5f0f\n    private static RemoteSettingProvider _instance;\n    public static RemoteSettingProvider Instance\n    {\n        get { return _instance; }\n    }\n\n    void Awake()\n    {\n        if (_instance != null && _instance != this)\n        {\n            Destroy(this.gameObject);\n            return;\n        }\n\n        _instance = this;\n        DontDestroyOnLoad(this.gameObject);\n\n        //\u5728\u8fdc\u7a0b\u66f4\u65b0\u4e4b\u524d\u4f7f\u7528\u5f53\u524d\u8bbe\u7f6e\uff0c\u5982\u679c\u8bbe\u7f6e\uff08\u5c1a\uff09\u4e0d\u5b58\u5728\uff0c\n        //\u5219\u4f7f\u7528\u9ed8\u8ba4\u503c\n        SpawnRateFactor\n            = RemoteSettings.GetFloat("SpawnRateFactor", DefaultSpawnRateFactor);\n        EnemySpeedFactor\n            = RemoteSettings.GetFloat("EnemySpeedFactor", DefaultEnemySpeedFactor);\n        EnemyStrengthFactor\n            = RemoteSettings.GetFloat("EnemyStrengthFactor", DefaultEnemyStrengthFactor);\n    }\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\u65f6\uff0c\u59cb\u7ec8\u5728\u73a9\u5bb6\u5b89\u88c5\u540e\u7b2c\u4e00\u6b21\u8fd0\u884c\u6e38\u620f\u65f6\u4f7f\u7528\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6df7\u5408\u65b9\u6cd5\uff0c\u6b64\u65b9\u6cd5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSettings.GetCount()")," \u68c0\u67e5\u662f\u5426\u5b58\u5728\u672c\u5730\u8bbe\u7f6e\u3002\u5982\u679c\u8bbe\u7f6e\u5b58\u5728\u4e8e\u672c\u5730\uff0c\u5219\u53ef\u4ee5\u7acb\u5373\u4f7f\u7528\u5b83\u4eec\uff0c\u4f46\u5982\u679c\u6ca1\u6709\uff0c\u5219\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4ee5\u7b49\u5f85\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Updated")," \u4e8b\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SpawnRateFactor\n    = RemoteSettings.GetFloat("SpawnRateFactor", DefaultSpawnRateFactor);\nEnemySpeedFactor\n    = RemoteSettings.GetFloat("EnemySpeedFactor", DefaultEnemySpeedFactor);\nEnemyStrengthFactor\n    = RemoteSettings.GetFloat("EnemyStrengthFactor", DefaultEnemyStrengthFactor);\n\n\nif(RemoteSettings.GetCount() == 0){\n    //If there are no settings, get them from remote\n    RemoteSettings.Updated += HandleRemoteSettings;\n    Ready = false;\n} else {\n    Ready = true;\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528 Remote Settings \u7684\u5176\u4ed6\u7c7b\u5fc5\u987b\u68c0\u67e5\u63d0\u4f9b\u7a0b\u5e8f\u7c7b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," \u5c5e\u6027\uff0c\u4ee5\u786e\u5b9a\u8bbf\u95ee\u8bbe\u7f6e\u662f\u5426\u5b89\u5168\u3002\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u4e00\u4e2a\u7b49\u5f85\u8bbe\u7f6e\u5e76\u4f7f\u7528\u53ef\u914d\u7f6e\u8d85\u65f6\u503c\u7684\u7c7b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class RemoteSettingConsumer : MonoBehaviour {\n    public float SpeedFactor = 0;\n    public float StrengthFactor = 0;\n    public float SpawnRateFactor = 0;\n    public float Timeout = 0.125f;\n\n    void Start () {\n        StartCoroutine(GetRemoteSettings(Time.time));\n    }\n\n    IEnumerator GetRemoteSettings(float startTime){\n\n        while(!RemoteSettingProvider.Instance.Ready && (Time.time - startTime) &lt; Timeout)\n            yield return null;\n\n        SpeedFactor = RemoteSettingProvider.Instance.EnemySpeedFactor;\n        StrengthFactor = RemoteSettingProvider.Instance.EnemyStrengthFactor;\n        SpawnRateFactor = RemoteSettingProvider.Instance.SpawnRateFactor;\n    }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728 Remote Settings \u53ef\u7528\u4e4b\u524d\u8d85\u65f6\uff0c\u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\u4f7f\u7528\u8d85\u65f6\u503c\u53ef\u4ee5\u8ba9\u6e38\u620f\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\uff08\u5373\u7f51\u7edc\u4e8b\u52a1\u5728\u975e\u5e38\u77ed\u7684\u65f6\u95f4\u5185\u5b8c\u6210\uff09\u83b7\u5f97\u6700\u65b0\u8bbe\u7f6e\uff0c\u540c\u65f6\u5728\u7f51\u7edc\u6545\u969c\u7684\u60c5\u51b5\u4e0b\u901a\u8fc7\u7b49\u5f85\u8bf7\u6c42\u672c\u8eab\u8d85\u65f6\u786e\u4fdd\u4e86\u4e0d\u4f1a\u8fc7\u5ea6\u5ef6\u8fdf\u542f\u52a8\u3002"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2018\u201308\u201323 \u9875\u9762\u5df2\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},"2017.1 \u4e2d\u7684\u65b0\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"2018\u201308\u201323 - \u81ea 2018.1 \u7248\u8d77\uff0c\u6bcf\u4e2a\u4f1a\u8bdd\u90fd\u4e0d\u518d\u5206\u53d1\u66f4\u65b0\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u622a\u81f3 2018\u201308\u201323\uff0c\u670d\u52a1\u4e0e Unity 5.5 \u4e4b\u540e\u7684\u7248\u672c\u517c\u5bb9\uff0c\u4f46\u662f\u7248\u672c\u517c\u5bb9\u6027\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316\u3002")))}g.isMDXComponent=!0}}]);