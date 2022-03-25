"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87950],{3905:function(t,e,s){s.d(e,{Zo:function(){return d},kt:function(){return A}});var a=s(67294);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e){if(null==t)return{};var s,a,n=function(t,e){if(null==t)return{};var s,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)s=r[a],e.indexOf(s)>=0||(n[s]=t[s]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)s=r[a],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),s=e;return t&&(s="function"==typeof t?t(e):i(i({},e),t)),s},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var s=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(s),A=n,b=c["".concat(l,".").concat(A)]||c[A]||u[A]||r;return s?a.createElement(b,i(i({ref:e},d),{},{components:s})):a.createElement(b,i({ref:e},d))}));function A(t,e){var s=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=s.length,i=new Array(r);i[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<r;p++)i[p]=s[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}c.displayName="MDXCreateElement"},25771:function(t,e,s){s.r(e),s.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return A},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=s(87462),n=s(63366),r=(s(67294),s(3905)),i=["components"],o={id:"AssetDatabaseBatching",title:"AssetDatabase \u6279\u5904\u7406",slug:"/asset-database/asset-database-batching"},l="AssetDatabase \u6279\u5904\u7406",p={unversionedId:"asset-workflow/asset-database/AssetDatabaseBatching",id:"asset-workflow/asset-database/AssetDatabaseBatching",title:"AssetDatabase \u6279\u5904\u7406",description:"\u4f7f\u7528\u6279\u5904\u7406\u53ef\u4ee5\u51cf\u5c11\u5728\u4ee3\u7801\u4e2d\u66f4\u6539\u8d44\u6e90\u65f6\u6240\u9700\u7684\u65f6\u95f4\u548c\u5904\u7406\u91cf\u3002",source:"@site/docs/asset-workflow/asset-database/asset-database-batching.md",sourceDirName:"asset-workflow/asset-database",slug:"/asset-database/asset-database-batching",permalink:"/doc-unity-manual/docs/asset-database/asset-database-batching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset-workflow/asset-database/asset-database-batching.md",tags:[],version:"current",frontMatter:{id:"AssetDatabaseBatching",title:"AssetDatabase \u6279\u5904\u7406",slug:"/asset-database/asset-database-batching"},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u6570\u636e\u5e93",permalink:"/doc-unity-manual/docs/asset-database"},next:{title:"\u5237\u65b0\u8d44\u6e90\u6570\u636e\u5e93",permalink:"/doc-unity-manual/docs/asset-database/asset-database-refreshing"}},d={},u=[{value:"\u5904\u7406\u64cd\u4f5c\u7684\u65b9\u6cd5",id:"\u5904\u7406\u64cd\u4f5c\u7684\u65b9\u6cd5",level:2},{value:"\u5d4c\u5957\u8c03\u7528 StartAssetEditing \u548c StopAssetEditing",id:"\u5d4c\u5957\u8c03\u7528-startassetediting-\u548c-stopassetediting",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528 try\u2026finally \u8fdb\u884c\u8d44\u6e90\u7f16\u8f91",id:"\u4f7f\u7528-tryfinally-\u8fdb\u884c\u8d44\u6e90\u7f16\u8f91",level:2}],c={toc:u};function A(t){var e=t.components,s=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assetdatabase-\u6279\u5904\u7406"},"AssetDatabase \u6279\u5904\u7406"),(0,r.kt)("p",null,"\u4f7f\u7528\u6279\u5904\u7406\u53ef\u4ee5\u51cf\u5c11\u5728\u4ee3\u7801\u4e2d\u66f4\u6539\u8d44\u6e90\u65f6\u6240\u9700\u7684\u65f6\u95f4\u548c\u5904\u7406\u91cf\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u4ee3\u7801\u4e2d\u5bf9\u591a\u4e2a\u8d44\u6e90\u8fdb\u884c\u66f4\u6539\uff08\u4f8b\u5982\uff0c\u590d\u5236\u6216\u79fb\u52a8\u8d44\u6e90\u6587\u4ef6\uff09\uff0c\u5219\u8d44\u6e90\u6570\u636e\u5e93 (Asset Database) \u7684\u9ed8\u8ba4\u884c\u4e3a\u662f\u4f9d\u6b21\u5904\u7406\u6bcf\u4e2a\u66f4\u6539\uff0c\u5e76\u5bf9\u8d44\u6e90\u6267\u884c\u5b8c\u6574\u7684\u201c\u5237\u65b0\u201d\u8fc7\u7a0b\uff0c\u7136\u540e\u518d\u8f6c\u5230\u4e0b\u4e00\u884c\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u5c06\u66f4\u6539\u4e09\u4e2a\u8d44\u6e90\u3002\u6267\u884c\u7684\u64cd\u4f5c\u662f\u590d\u5236 Asset1\u3001\u79fb\u52a8 Asset2 \u548c\u5220\u9664 Asset3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'AssetDatabase.CopyAsset("Assets/Asset1.txt", "Assets/Text/Asset1.txt");\nAssetDatabase.MoveAsset("Assets/Asset2.txt", "Assets/Text/Asset2.txt");\nAssetDatabase.DeleteAsset("Assets/Asset3.txt");\n')),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u8fdb\u884c\u6279\u5904\u7406\uff0cUnity \u4f1a\u5728\u5904\u7406\u6bcf\u4e2a\u66f4\u6539\u540e\u79fb\u5230\u4e0b\u4e00\u884c\u4ee3\u7801\u3002\u8fd9\u4e0d\u4ec5\u4f1a\u82b1\u8d39\u4e0d\u5fc5\u8981\u7684\u65f6\u95f4\uff0c\u8fd8\u4f1a\u89e6\u53d1\u8bb8\u591a\u56de\u8c03\uff08\u5982\u679c\u4f7f\u7528\u6279\u5904\u7406\u7684\u8bdd\uff0c\u5219\u53ef\u4ee5\u907f\u514d\uff09\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u79cd\u66ff\u4ee3\u505a\u6cd5\u662f\u53ef\u4ee5\u6307\u5b9a\u8d44\u6e90\u6570\u636e\u5e93\u5e94\u8be5\u4e00\u6b21\u6027\u5904\u7406\u4e00\u7ec4\u64cd\u4f5c\u3002\u4e3a\u6b64\uff0c\u9700\u8981\u544a\u8bc9\u8d44\u6e90\u6570\u636e\u5e93\u5728\u60a8\u8fdb\u884c\u66f4\u6539\u4e4b\u524d\u6682\u505c\u5176\u6b63\u5e38\u884c\u4e3a\uff0c\u7136\u540e\u5728\u60a8\u66f4\u6539\u5b8c\u6210\u540e\u544a\u8bc9\u5b83\u6062\u590d\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u800c\u8a00\uff0c\u5982\u679c\u60a8\u8981\u6267\u884c\u4ee5\u4e0b\u4efb\u610f\u591a\u9879\u64cd\u4f5c\uff0c\u5219\u5e94\u5c1d\u8bd5\u4f7f\u7528\u6279\u5904\u7406\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AssetDatabase.ImportAsset"),(0,r.kt)("li",{parentName:"ul"},"AssetDatabase.MoveAsset"),(0,r.kt)("li",{parentName:"ul"},"AssetDatabase.CopyAsset"),(0,r.kt)("li",{parentName:"ul"},"AddObjectToAsset")),(0,r.kt)("h2",{id:"\u5904\u7406\u64cd\u4f5c\u7684\u65b9\u6cd5"},"\u5904\u7406\u64cd\u4f5c\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,"\u8981\u6307\u5b9a\u8d44\u6e90\u6570\u636e\u5e93\u5e94\u8be5\u4e00\u6b21\u6027\u5904\u7406\u4e00\u7ec4\u64cd\u4f5c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AssetDatabase.StartAssetEditing.html"},"AssetDatabase.StartAssetEditing")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/AssetDatabase.StopAssetEditing.html"},"AssetDatabase.StopAssetEditing"),"\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"AssetDatabase.StartAssetEditing")," "),(0,r.kt)("p",null,"\u6b64\u65b9\u6cd5\u544a\u8bc9\u8d44\u6e90\u6570\u636e\u5e93\u60a8\u6b63\u5728\u5f00\u59cb\u5bf9\u8d44\u6e90\u8fdb\u884c\u7f16\u8f91\u3002\u8d44\u6e90\u6570\u636e\u5e93\u8fdb\u5165\u6682\u505c\u72b6\u6001\uff0c\u5e76\u5728\u60a8\u8c03\u7528\u76f8\u5e94\u7684  ",(0,r.kt)("strong",{parentName:"p"},"StopAssetEditing"),"  \u65b9\u6cd5\u544a\u8bc9\u60a8\u5df2\u5b8c\u6210\u4e4b\u524d\uff0c\u4e0d\u4f1a\u5bf9\u8d44\u6e90\u8fdb\u884c\u4efb\u4f55\u8fdb\u4e00\u6b65\u7684\u66f4\u6539\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"AssetDatabase.StopAssetEditing")," "),(0,r.kt)("p",null,"\u5b8c\u6210\u6240\u6709\u7684\u8d44\u6e90\u66f4\u6539\u540e\uff0c\u8bf7\u8c03\u7528\u6b64\u65b9\u6cd5\u544a\u8bc9\u8d44\u6e90\u6570\u636e\u5e93\u5904\u7406\u60a8\u7684\u66f4\u6539\u5e76\u6062\u590d\u5176\u7acb\u5373\u81ea\u52a8\u5904\u7406\u66f4\u6539\u7684\u6b63\u5e38\u884c\u4e3a\u3002\u7136\u540e\uff0c\u8d44\u6e90\u6570\u636e\u5e93\u4ee5\u6279\u5904\u7406\u65b9\u5f0f\u5904\u7406\u60a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"StartAssetEditing")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing")," \u4e4b\u95f4\u8fdb\u884c\u7684\u66f4\u6539\uff0c\u8fd9\u79cd\u5904\u7406\u65b9\u6cd5\u6bd4\u9010\u4e2a\u5904\u7406\u7684\u901f\u5ea6\u8981\u5feb\u3002"),(0,r.kt)("h3",{id:"\u5d4c\u5957\u8c03\u7528-startassetediting-\u548c-stopassetediting"},"\u5d4c\u5957\u8c03\u7528 StartAssetEditing \u548c StopAssetEditing"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"StartAssetEditing")," \u8fdb\u884c\u4e86\u591a\u6b21\u8c03\u7528\uff0c\u5fc5\u987b\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing")," \u8fdb\u884c\u76f8\u5e94\u6b21\u6570\u7684\u8c03\u7528\uff0c\u4f7f\u8d44\u6e90\u6570\u636e\u5e93\u6062\u590d\u5176\u81ea\u52a8\u5904\u7406\u66f4\u6539\u7684\u6b63\u5e38\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u8fd9\u4e9b\u51fd\u6570\u4f1a\u9012\u589e\u548c\u9012\u51cf\u8ba1\u6570\u5668\uff0c\u800c\u4e0d\u662f\u5145\u5f53\u7b80\u5355\u7684\u5f00/\u5173\u529f\u80fd\u3002\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"StartAssetEditing")," \u5c06\u9012\u589e\u8ba1\u6570\u5668\uff0c\u800c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing")," \u5c06\u9012\u51cf\u8ba1\u6570\u5668\u3002\u5f53\u8ba1\u6570\u5668\u8fbe\u5230\u96f6\u65f6\uff0c\u8d44\u6e90\u6570\u636e\u5e93\u5c06\u6062\u590d\u5176\u6b63\u5e38\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"Unity \u4f7f\u7528\u8ba1\u6570\u5668\u800c\u4e0d\u662f\u7b80\u5355\u5f00/\u5173\u5e03\u5c14\u503c\u7684\u539f\u56e0\u662f\uff0c\u901a\u8fc7\u4f7f\u7528\u8ba1\u6570\u5668\uff0c\u5982\u679c\u60a8\u7684\u4ee3\u7801\u6267\u884c\u591a\u4e2a\u5d4c\u5957\u7684\u201cstart\u201d\u548c\u201cstop\u201d\u5bf9\uff0c\u5185\u90e8\u5bf9\u4e0d\u4f1a\u610f\u5916\u5730\u8fc7\u65e9\u6062\u590d\u8d44\u6e90\u6570\u636e\u5e93\u7684\u6b63\u5e38\u884c\u4e3a\u3002\u76f8\u53cd\uff0c\u6bcf\u5bf9\u4f1a\u5c06\u8ba1\u6570\u5668\u52a0\u4e00\u6216\u51cf\u4e00\uff0c\u5e76\u4e14\u5982\u679c\u60a8\u7684\u4ee3\u7801\u6b63\u786e\u5d4c\u5957\uff0c\u5219\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing")," \u7684\u6700\u7ec8\u5916\u90e8\u8c03\u7528\u4f1a\u5c06\u8ba1\u6570\u5668\u8bbe\u7f6e\u4e3a\u96f6\u3002"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u60a8\u7684\u4ee3\u7801\u7edd\u4e0d\u5e94\u8be5\u4f7f\u8ba1\u6570\u5668\u964d\u5230\u96f6\u4ee5\u4e0b\u3002\u8fd9\u6837\u505a\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u8fd9\u4e9b\u65b9\u6cd5\u7684\u63a8\u8350\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'using UnityEditor;\npublic class StartStopAssetEditingExample : MonoBehaviour\n{\n    [MenuItem("APIExamples/StartStopAssetEditing")]\n    static void CallAssetDatabaseAPIsBetweenStartStopAssetEditing()\n    {\n        try\n        {\n            //\u5c06\u8d44\u6e90\u6570\u636e\u5e93\u7f6e\u4e8e\u5927\u591a\u6570 API\n            //\u90fd\u6682\u505c\u5bfc\u5165\u7684\u72b6\u6001\n            AssetDatabase.StartAssetEditing();\n            AssetDatabase.CopyAsset("Assets/Asset1.txt", "Assets/Text/Asset1.txt");\n            AssetDatabase.MoveAsset("Assets/Asset2.txt", "Assets/Text/Asset2.txt");\n            AssetDatabase.DeleteAsset("Assets/Asset3.txt");\n        }\n        finally\n        {\n            //\u5728 "finally" \u4ee3\u7801\u5757\u4e2d\u6dfb\u52a0\n            //\u5bf9 StopAssetEditing \u7684\u8c03\u7528\u53ef\u786e\u4fdd\n            //\u5728\u79bb\u5f00\u6b64\u51fd\u6570\u65f6\u91cd\u7f6e AssetDatabase \u72b6\u6001\n            AssetDatabase.StopAssetEditing();\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528-tryfinally-\u8fdb\u884c\u8d44\u6e90\u7f16\u8f91"},"\u4f7f\u7528 try\u2026finally \u8fdb\u884c\u8d44\u6e90\u7f16\u8f91"),(0,r.kt)("p",null,"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetDatabase.StartAssetEditing")," \u65f6\uff0cUnity \u4f1a\u5c06\u6574\u4e2a Editor \u7684 AssetDatabase \u7f6e\u4e8e\u6682\u505c\u72b6\u6001\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u6ca1\u6709\u5bf9 AssetDatabase.",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing")," \u8fdb\u884c\u76f8\u5e94\u7684\u8c03\u7528\uff0c\u5219\u5728\u6d89\u53ca\u4efb\u4f55\u4e0e\u8d44\u6e90\u76f8\u5173\u7684\u64cd\u4f5c\uff08\u5bfc\u5165\u3001\u5237\u65b0\u7b49\uff09\u65f6\uff0cEditor \u4f1a\u770b\u8d77\u6765\u65e0\u54cd\u5e94\uff0c\u5e76\u9700\u8981\u91cd\u65b0\u542f\u52a8 Editor \u4ee5\u6062\u590d\u5176\u6b63\u5e38\u8fd0\u884c\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," \u2026",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," \u4ee3\u7801\u5757\u65f6\uff0c\u5982\u679c\u4efb\u4f55\u7528\u4e8e\u4fee\u6539\u8d44\u6e90\u7684\u4ee3\u7801\u5bfc\u81f4\u4e86\u9519\u8bef\uff0c\u5219\u53ef\u80fd\u4f1a\u963b\u6b62\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing"),"\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u5c06\u8fd9\u4e9b\u8c03\u7528\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"StartAssetEditing")," \u4e00\u8d77\u5305\u88f9\u5728\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"try"),"\u2026",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," \u4ee3\u7801\u5757\u4e2d\uff0c\u7136\u540e\u5c06\u8d44\u6e90\u4fee\u6539\u4ee3\u7801\u5305\u542b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," \u4ee3\u7801\u5757\u4e2d\uff0c\u800c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"StopAssetEditing")," \u8c03\u7528\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," \u4ee3\u7801\u5757\u4e2d\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\uff0c\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," \u4ee3\u7801\u5757\u4e2d\u8fdb\u884c\u66f4\u6539\u65f6\u53d1\u751f\u4e86\u4efb\u4f55\u5f02\u5e38\uff0c\u4ecd\u53ef\u4ee5\u4fdd\u8bc1\u5c06\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetDatabase.StopAssetEditing"),"\u3002"))}A.isMDXComponent=!0}}]);