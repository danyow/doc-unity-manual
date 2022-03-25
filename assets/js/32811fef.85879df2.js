"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63757],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,y=p["".concat(c,".").concat(g)]||p[g]||s[g]||a;return n?r.createElement(y,u(u({ref:t},l),{},{components:n})):r.createElement(y,u({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var d=2;d<a;d++)u[d]=n[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),u=["components"],o={id:"UpgradeGuide5-AI",title:"Unity 5.0 \u4e2d\u7684 AI",slug:"/upgrade-guide5/upgrade-guide5-ai"},c=void 0,d={unversionedId:"unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/UpgradeGuide5-AI",id:"unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/UpgradeGuide5-AI",title:"Unity 5.0 \u4e2d\u7684 AI",description:"Unity 5.0 \u4e2d\u7684 AI",source:"@site/docs/unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/upgrade-guide5-ai.md",sourceDirName:"unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5",slug:"/upgrade-guide5/upgrade-guide5-ai",permalink:"/doc-unity-manual/docs/upgrade-guide5/upgrade-guide5-ai",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/upgrade-guide5-ai.md",tags:[],version:"current",frontMatter:{id:"UpgradeGuide5-AI",title:"Unity 5.0 \u4e2d\u7684 AI",slug:"/upgrade-guide5/upgrade-guide5-ai"},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7\u5230 Unity 5.0",permalink:"/doc-unity-manual/docs/upgrade-guide5"},next:{title:"Unity 5.0 \u4e2d\u7684\u52a8\u753b\u529f\u80fd",permalink:"/doc-unity-manual/docs/upgrade-guide5/upgrade-guide5-animation"}},l={},s=[{value:"Unity 5.0 \u4e2d\u7684 AI",id:"unity-50-\u4e2d\u7684-ai",level:2},{value:"\u91cd\u65b0\u70d8\u7119\u811a\u672c\u793a\u4f8b",id:"\u91cd\u65b0\u70d8\u7119\u811a\u672c\u793a\u4f8b",level:3}],p={toc:s};function g(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"unity-50-\u4e2d\u7684-ai"},"Unity 5.0 \u4e2d\u7684 AI"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u4f7f\u7528\u4e86 AI/\u5bfc\u822a\u7f51\u683c (NavMesh) \u529f\u80fd\uff0c\u5728\u5c06\u9879\u76ee\u4ece Unity 4 \u5347\u7ea7\u5230 Unity 5 \u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u66f4\u6539\u4e86\u5206\u533a\uff0c\u5bfc\u822a\u7f51\u683c\u8f6e\u5ed3\u53ef\u80fd\u770b\u8d77\u6765\u4e0d\u540c\uff08\u5728\u72ed\u7a84\u7684\u8d70\u5eca/\u95e8\u9053\u6216\u7c7b\u4f3c\u60c5\u51b5\u4e0b\uff09\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u8fde\u63a5\u5dee\u5f02\u3002\u901a\u8fc7\u8c03\u6574\u5bfc\u822a\u7f51\u683c\u6784\u5efa\u7684\u4f53\u7d20\u5927\u5c0f\u53ef\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u8c03\u7528\u201cStop\u201d\u540e\u8bbe\u7f6e\u5bfc\u822a\u7f51\u683c\u4ee3\u7406 (NavMeshAgent) \u7684\u76ee\u6807\u4e0d\u4f1a\u6062\u590d\u4ee3\u7406 - \u5e94\u663e\u5f0f\u8c03\u7528\u201cResume\u201d\u6765\u6062\u590d\u4ee3\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"NavMeshAgent.updatePosition\uff1a\u5f53 updatePosition \u4e3a false \u5e76\u79fb\u52a8\u4ee3\u7406\u53d8\u6362\u7ec4\u4ef6\u65f6\uff0c\u4ee3\u7406\u4f4d\u7f6e\u4e0d\u4f1a\u66f4\u6539\u3002\u4ee5\u524d\uff0c\u4ee3\u7406\u4f4d\u7f6e\u5c06\u91cd\u7f6e\u4e3a\u53d8\u6362\u4f4d\u7f6e - \u7ea6\u675f\u5230\u9644\u8fd1\u7684\u5bfc\u822a\u7f51\u683c\u3002"),(0,a.kt)("li",{parentName:"ul"},"NavMeshObstacle \u7ec4\u4ef6\uff1a\u65b0\u521b\u5efa\u7684 NavMeshObstacle \u7ec4\u4ef6\u7684\u9ed8\u8ba4\u5f62\u72b6\u662f\u4e00\u4e2a\u76d2\u4f53\u3002\u9009\u62e9\u7684\u5f62\u72b6\uff08\u76d2\u4f53\u6216\u80f6\u56ca\u4f53\uff09\u73b0\u5728\u9002\u7528\u4e8e\u96d5\u523b\u548c\u907f\u969c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f7f\u7528\u65e9\u671f\u7248\u672c\u7684 Unity \u6784\u5efa\u7684\u5bfc\u822a\u7f51\u683c\u3002\u5fc5\u987b\u4f7f\u7528 Unity 5 \u91cd\u65b0\u6784\u5efa\u3002\u53ef\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u4f5c\u4e3a\u793a\u4f8b\uff0c\u4e86\u89e3\u5982\u4f55\u4e3a\u6240\u6709\u573a\u666f\u91cd\u65b0\u6784\u5efa\u5bfc\u822a\u7f51\u683c\u6570\u636e\u3002")),(0,a.kt)("h3",{id:"\u91cd\u65b0\u70d8\u7119\u811a\u672c\u793a\u4f8b"},"\u91cd\u65b0\u70d8\u7119\u811a\u672c\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# if UNITY_EDITOR\nusing System.Collections.Generic;\nusing System.Collections;\nusing System.IO;\nusing UnityEditor;\nusing UnityEngine;\nusing UnityEngine.AI;\npublic class RebakeAllScenesEditorScript\n{\n    [MenuItem ("Upgrade helper/Bake All Scenes")]\n    public static void Bake()\n    {\n        List&lt;string&gt; sceneNames = SearchFiles (Application.dataPath, "*.unity");\n        foreach (string f in sceneNames)\n        {\n            EditorApplication.OpenScene(f);\n \n            // \u91cd\u65b0\u70d8\u7119\u5bfc\u822a\u7f51\u683c\u6570\u636e\n            NavMeshBuilder.BuildNavMesh ();\n \n            EditorApplication.SaveScene ();\n        }\n    }\n    static List&lt;string&gt; SearchFiles(string dir, string pattern)\n    {\n        List &lt;string&gt; sceneNames = new List &lt;string&gt;();\n        foreach (string f in Directory.GetFiles(dir, pattern, SearchOption.AllDirectories))\n        {\n            sceneNames.Add (f);\n        }\n        return sceneNames;\n    }\n}\n# endif\n')))}g.isMDXComponent=!0}}]);