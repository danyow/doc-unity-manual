"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,y=m["".concat(o,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={id:"xrsdk-runtime-discovery",title:"\u5b50\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u53d1\u73b0\u548c\u6fc0\u6d3b",slug:"/xr-sdk/xrsdk-runtime-discovery"},o="\u5b50\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u53d1\u73b0\u548c\u6fc0\u6d3b",d={unversionedId:"xr/xr-sdk/xrsdk-runtime-discovery",id:"xr/xr-sdk/xrsdk-runtime-discovery",title:"\u5b50\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u53d1\u73b0\u548c\u6fc0\u6d3b",description:"\u5c06\u4ee5\u4e0b\u811a\u672c\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\uff0c\u4ee5\u626b\u63cf\u5e76\u521b\u5efa\u6216\u542f\u52a8 id \u4e3a Display0 \u7684\u663e\u793a\u5b50\u7cfb\u7edf\u3002\u5982\u679c\u8981\u52a0\u8f7d\u5176\u4ed6\u663e\u793a\u5b50\u7cfb\u7edf\uff0c\u53ef\u4ee5\u66f4\u6539 match \u53d8\u91cf\uff1a",source:"@site/docs/xr/xr-sdk/xrsdk-runtime-discovery.md",sourceDirName:"xr/xr-sdk",slug:"/xr-sdk/xrsdk-runtime-discovery",permalink:"/docs/xr-sdk/xrsdk-runtime-discovery",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xr/xr-sdk/xrsdk-runtime-discovery.md",tags:[],version:"current",frontMatter:{id:"xrsdk-runtime-discovery",title:"\u5b50\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u53d1\u73b0\u548c\u6fc0\u6d3b",slug:"/xr-sdk/xrsdk-runtime-discovery"},sidebar:"tutorialSidebar",previous:{title:"XR SDK \u7f51\u683c\u5b50\u7cfb\u7edf",permalink:"/docs/subsystems/xrsdk-meshing"},next:{title:"XR SDK PreInit \u63a5\u53e3",permalink:"/docs/\u63a5\u53e3/xrsdk-pre-init-interface"}},u={},p=[{value:"\u8fd0\u884c\u65f6\u63d2\u4ef6\u53d1\u73b0\u6545\u969c\u6392\u9664",id:"\u8fd0\u884c\u65f6\u63d2\u4ef6\u53d1\u73b0\u6545\u969c\u6392\u9664",level:2},{value:"\u5728 C# \u4e2d\u627e\u4e0d\u5230\u5b50\u7cfb\u7edf",id:"\u5728-c-\u4e2d\u627e\u4e0d\u5230\u5b50\u7cfb\u7edf",level:2},{value:"UnitySubsystemsManifest.json \u6587\u4ef6\u7684\u9519\u8bef\u67e5\u627e\u548c\u89e3\u6790",id:"unitysubsystemsmanifestjson-\u6587\u4ef6\u7684\u9519\u8bef\u67e5\u627e\u548c\u89e3\u6790",level:2},{value:"\u67e5\u627e\u548c\u52a0\u8f7d\u63d0\u4f9b\u7a0b\u5e8f\u63d2\u4ef6\u65f6\u51fa\u9519",id:"\u67e5\u627e\u548c\u52a0\u8f7d\u63d0\u4f9b\u7a0b\u5e8f\u63d2\u4ef6\u65f6\u51fa\u9519",level:2},{value:"\u521d\u59cb\u5316\u63d0\u4f9b\u7a0b\u5e8f\u65f6\u51fa\u9519",id:"\u521d\u59cb\u5316\u63d0\u4f9b\u7a0b\u5e8f\u65f6\u51fa\u9519",level:2}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b50\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u53d1\u73b0\u548c\u6fc0\u6d3b"},"\u5b50\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u53d1\u73b0\u548c\u6fc0\u6d3b"),(0,i.kt)("p",null,"\u5c06\u4ee5\u4e0b\u811a\u672c\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\uff0c\u4ee5\u626b\u63cf\u5e76\u521b\u5efa\u6216\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Display0")," \u7684\u663e\u793a\u5b50\u7cfb\u7edf\u3002\u5982\u679c\u8981\u52a0\u8f7d\u5176\u4ed6\u663e\u793a\u5b50\u7cfb\u7edf\uff0c\u53ef\u4ee5\u66f4\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," \u53d8\u91cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'using System;\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.Experimental.XR;\nusing UnityEngine.XR;\n\npublic class Display : MonoBehaviour\n{\n    public string match = "Display0";\n\n    // Use this for initialization\n    void Start ()\n    {\n        List&lt;XRDisplaySubsystemDescriptor&gt; displays = new List&lt;XRDisplaySubsystemDescriptor&gt;();\n        SubsystemManager.GetSubsystemDescriptors(displays);\n        Debug.Log("Number of display providers found: " + displays.Count);\n\n        foreach (var d in displays)\n        {\n            Debug.Log("Scanning display id: " + d.id);\n\n            if (d.id.Contains(match))\n            {\n                Debug.Log("Creating display " + d.id);\n                XRDisplaySubsystem dispInst = d.Create();\n\n                if (dispInst != null)\n                {\n                    Debug.Log("Starting display " + d.id);\n                    dispInst.Start();\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.xr.management@latest"},"XR Management")," \u5305\u662f\u9762\u5411\u7528\u6237\u7684 UI\uff0c\u7528\u4e8e\u5728\u8fd0\u884c\u65f6\u914d\u7f6e\u5b50\u7cfb\u7edf\u7684\u52a0\u8f7d\u3002\u5b83\u4f7f\u7528\u76f8\u540c\u7684\u5e95\u5c42 API\uff08\u5982\u4e0a\u6240\u8ff0\uff09\u6765\u521b\u5efa\u548c\u7ba1\u7406\u5b50\u7cfb\u7edf\u3002\u5982\u679c\u60a8\u5e0c\u671b\u63d0\u4f9b\u7a0b\u5e8f\u663e\u793a\u5728 XR Settings UI \u4e2d\uff0c\u8bf7\u7f16\u5199\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.xr.management@3.0/manual/Provider.html"},"XRLoader"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u7684\u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684",(0,i.kt)("a",{parentName:"p",href:"#%E8%BF%90%E8%A1%8C%E6%97%B6%E6%8F%92%E4%BB%B6%E5%8F%91%E7%8E%B0%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4"},"\u6545\u969c\u6392\u9664"),"\u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"\u8fd0\u884c\u65f6\u63d2\u4ef6\u53d1\u73b0\u6545\u969c\u6392\u9664"},"\u8fd0\u884c\u65f6\u63d2\u4ef6\u53d1\u73b0\u6545\u969c\u6392\u9664"),(0,i.kt)("p",null,"\u8981\u5bf9\u5b50\u7cfb\u7edf\u63d0\u4f9b\u7a0b\u5e8f\u7684\u521d\u59cb\u5316\u6216\u542f\u52a8\u8fdb\u884c\u6545\u969c\u6392\u9664\uff0c\u8bf7\u5728",(0,i.kt)("a",{parentName:"p",href:"/docs/analysis/log-files"},"\u7f16\u8f91\u5668\u65e5\u5fd7\u6216\u64ad\u653e\u5668\u8f93\u51fa\u65e5\u5fd7"),"\u4e2d\u67e5\u627e\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"[XR]")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"[Subsystems]")," \u5f00\u5934\u7684\u884c\u3002"),(0,i.kt)("h2",{id:"\u5728-c-\u4e2d\u627e\u4e0d\u5230\u5b50\u7cfb\u7edf"},"\u5728 C# \u4e2d\u627e\u4e0d\u5230\u5b50\u7cfb\u7edf"),(0,i.kt)("p",null,"If you just added a .json and plug-in files, make sure you relaunch Unity. Currently, Unity only discovers these files at start-up. Also, make sure that the Provider uses the correct ",(0,i.kt)("a",{parentName:"p",href:"/docs/%E6%8F%90%E4%BE%9B%E7%A8%8B%E5%BA%8F%E8%AE%BE%E7%BD%AE/xrsdk-provider-setup#%E6%96%87%E4%BB%B6%E5%B8%83%E5%B1%80"},"file layout"),"."),(0,i.kt)("h2",{id:"unitysubsystemsmanifestjson-\u6587\u4ef6\u7684\u9519\u8bef\u67e5\u627e\u548c\u89e3\u6790"},"UnitySubsystemsManifest.json \u6587\u4ef6\u7684\u9519\u8bef\u67e5\u627e\u548c\u89e3\u6790"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9519\u8bef")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[","XR","]"," 3 \u2018displays\u2019 descriptors matched in Assets/UnityXRDisplayExample/UnitySubsystemsManifest.json"),(0,i.kt)("td",{parentName:"tr",align:null},"Unity \u6210\u529f\u627e\u5230\u4e86\u663e\u793a\u63cf\u8ff0\u7b26\u5e76\u4e3a\u6b64\u63d2\u4ef6\u6ce8\u518c\u4e86\u4e09\u4e2a\u4e0d\u540c\u7684 ID\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[","XR","]"," No descriptors matched for inputs in Assets/UnityXRDisplayExample/UnitySubsystemsManifest.json."),(0,i.kt)("td",{parentName:"tr",align:null},"The .json file contains no input descriptors. This is normal if you\u2019re not implementing an input subsystem.",(0,i.kt)("br",null),"If you were expecting Unity to find descriptors in your .json file, they could be malformed. See documentation on ",(0,i.kt)("a",{parentName:"td",href:"/docs/%E6%8F%90%E4%BE%9B%E7%A8%8B%E5%BA%8F%E8%AE%BE%E7%BD%AE/xrsdk-unity-subsystems-manifest-json"},"UnitySubsystemsManifest.json")," for the correct format to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[","XR","]"," Failed to parse json header for Assets/UnityXRDisplayExample/UnitySubsystemsManifest.json (did you forget to include name or libraryName fields?)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fd9\u53ef\u80fd\u610f\u5473\u7740\u60a8\u7684 .json \u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e\u3002\u901a\u8fc7\u9a8c\u8bc1\u5de5\u5177\uff08\u5982",(0,i.kt)("a",{parentName:"td",href:"https://jsonlint.com/"},"json linter"),"\uff09\u8fd0\u884c\u8be5\u6587\u4ef6\u3002")))),(0,i.kt)("h2",{id:"\u67e5\u627e\u548c\u52a0\u8f7d\u63d0\u4f9b\u7a0b\u5e8f\u63d2\u4ef6\u65f6\u51fa\u9519"},"\u67e5\u627e\u548c\u52a0\u8f7d\u63d0\u4f9b\u7a0b\u5e8f\u63d2\u4ef6\u65f6\u51fa\u9519"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9519\u8bef")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[","XR","]"," PluginName failed to register Provider for DisplayId (json name or id doesn\u2019t match?)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fd9\u610f\u5473\u7740 ",(0,i.kt)("inlineCode",{parentName:"td"},"RegisterLifecycleProvider")," \u7684\u524d\u4e24\u4e2a\u53c2\u6570\u4e0e .json \u6587\u4ef6\u4e0d\u5339\u914d\u3002",(0,i.kt)("br",null),"\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"td"},"pluginName")," \u5e94\u8be5\u4e0e .json \u6587\u4ef6\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," \u5b57\u6bb5\u5339\u914d\u3002",(0,i.kt)("br",null),"\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u5e94\u8be5\u4e0e .json \u6587\u4ef6\u4e2d\u5b50\u7cfb\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u5b57\u6bb5\u5339\u914d\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[","XR","]"," Unable to load plugin PluginName for subsystem DisplayId"),(0,i.kt)("td",{parentName:"tr",align:null},"\u627e\u4e0d\u5230\u60a8\u7684\u63d2\u4ef6\uff0c\u5b83\u662f\u4e3a\u9519\u8bef\u7684\u67b6\u6784\u6784\u5efa\u7684\uff0c\u6216\u8005\u7f3a\u5c11\u9700\u8981\u52a0\u8f7d\u7684\u4f9d\u8d56\u9879\u3002\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"td",href:"http://www.dependencywalker.com/"},"Dependency Walker")," \u5de5\u5177\u6765\u786e\u5b9a\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u9879\u3002")))),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u63d0\u4f9b\u7a0b\u5e8f\u65f6\u51fa\u9519"},"\u521d\u59cb\u5316\u63d0\u4f9b\u7a0b\u5e8f\u65f6\u51fa\u9519"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9519\u8bef")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[","XR","]"," Failed to initialize subsystem DisplayId ","[","error: 1","]"),(0,i.kt)("td",{parentName:"tr",align:null},"Unity \u8c03\u7528\u4e86\u60a8\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"Initialize")," \u65b9\u6cd5\uff0c\u4f46\u5b83\u8fd4\u56de\u4e86 ",(0,i.kt)("inlineCode",{parentName:"td"},"kUnitySubsystemErrorCodeFailure"),"\u3002\u4ed4\u7ec6\u68c0\u67e5\u60a8\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"Initialize")," \u65b9\u6cd5\u7684\u5b9e\u73b0\u3002")))))}c.isMDXComponent=!0}}]);