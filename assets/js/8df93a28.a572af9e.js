"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36138],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=i,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,a(a({ref:e},p),{},{components:n})):r.createElement(y,a({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16502:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"JSONSerialization",title:"JSON \u5e8f\u5217\u5316",slug:"/script-serialization/jsonserialization"},s="JSON \u5e8f\u5217\u5316",c={unversionedId:"scripting-section/unity-architecture/script-serialization/JSONSerialization",id:"scripting-section/unity-architecture/script-serialization/JSONSerialization",title:"JSON \u5e8f\u5217\u5316",description:"\u4f7f\u7528 JsonUtility \u7c7b\u53ef\u5728 Unity \u5bf9\u8c61\u4e0e JSON \u683c\u5f0f\u4e4b\u95f4\u6765\u56de\u8f6c\u6362\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528 JSON \u5e8f\u5217\u5316\u4e0e Web \u670d\u52a1\u8fdb\u884c\u4ea4\u4e92\uff0c\u6216\u8005\u8f7b\u677e\u5730\u5c06\u6570\u636e\u538b\u7f29\u548c\u89e3\u538b\u7f29\u4e3a\u57fa\u4e8e\u6587\u672c\u7684\u683c\u5f0f\u3002",source:"@site/docs/scripting-section/unity-architecture/script-serialization/jsonserialization.md",sourceDirName:"scripting-section/unity-architecture/script-serialization",slug:"/script-serialization/jsonserialization",permalink:"/doc-unity-manual/docs/script-serialization/jsonserialization",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/script-serialization/jsonserialization.md",tags:[],version:"current",frontMatter:{id:"JSONSerialization",title:"JSON \u5e8f\u5217\u5316",slug:"/script-serialization/jsonserialization"},sidebar:"tutorialSidebar",previous:{title:"Script serialization",permalink:"/doc-unity-manual/docs/script-serialization"},next:{title:"\u5185\u7f6e\u5e8f\u5217\u5316",permalink:"/doc-unity-manual/docs/script-serialization/script-serialization-built-in-use"}},p={},u=[{value:"\u7528 JSON \u8986\u76d6\u5bf9\u8c61",id:"\u7528-json-\u8986\u76d6\u5bf9\u8c61",level:2},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2},{value:"\u63a7\u5236 ToJson() \u7684\u8f93\u51fa",id:"\u63a7\u5236-tojson-\u7684\u8f93\u51fa",level:2},{value:"\u4f7f\u7528\u5305\u542b\u672a\u77e5\u7c7b\u578b\u7684 FromJson()",id:"\u4f7f\u7528\u5305\u542b\u672a\u77e5\u7c7b\u578b\u7684-fromjson",level:2}],m={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json-\u5e8f\u5217\u5316"},"JSON \u5e8f\u5217\u5316"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.html"},"JsonUtility")," \u7c7b\u53ef\u5728 Unity \u5bf9\u8c61\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"http://www.json.org"},"JSON")," \u683c\u5f0f\u4e4b\u95f4\u6765\u56de\u8f6c\u6362\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528 JSON \u5e8f\u5217\u5316\u4e0e Web \u670d\u52a1\u8fdb\u884c\u4ea4\u4e92\uff0c\u6216\u8005\u8f7b\u677e\u5730\u5c06\u6570\u636e\u538b\u7f29\u548c\u89e3\u538b\u7f29\u4e3a\u57fa\u4e8e\u6587\u672c\u7684\u683c\u5f0f\u3002"),(0,o.kt)("p",null,"JSON \u5e8f\u5217\u5316\u4f7f\u7528\u201c\u7ed3\u6784\u5316\u201dJSON \u7684\u6982\u5ff5\uff1a\u521b\u5efa\u4e00\u4e2a\u7c7b\u6216\u7ed3\u6784\u6765\u63cf\u8ff0\u5c06\u5728 JSON \u6570\u636e\u4e2d\u5b58\u50a8\u7684\u53d8\u91cf\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Serializable]\npublic class MyClass\n{\n    public int level;\n    public float timeElapsed;\n    public string playerName;\n}\n")),(0,o.kt)("p",null,"\u6b64\u4ee3\u7801\u6bb5\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5305\u542b\u4e09\u4e2a\u53d8\u91cf\uff08 ",(0,o.kt)("strong",{parentName:"p"},"level")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"timeElapsed"),"  \u548c  ",(0,o.kt)("strong",{parentName:"p"},"playerName")," \uff09\u7684\u666e\u901a C# \u7c7b\uff0c\u5e76\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable")," \u5c5e\u6027\u6807\u8bb0\u8be5\u7c7b\uff0c\u8fd9\u6837\u624d\u80fd\u4f7f\u7528 JSON \u5e8f\u5217\u5316\u7a0b\u5e8f\u3002\u8981\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u6240\u793a\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'MyClass myObject = new MyClass();\nmyObject.level = 1;\nmyObject.timeElapsed = 47.5f;\nmyObject.playerName = "Dr Charles Francis";\n')),(0,o.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.ToJson.html"},"JsonUtility.ToJson")," \u65b9\u6cd5\u5c06\u5176\u5e8f\u5217\u5316\uff08\u8f6c\u6362\uff09\u4e3a JSON \u683c\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'string json = JsonUtility.ToJson(myObject);\n// json \u73b0\u5728\u5305\u542b\uff1a\'{"level":1,"timeElapsed":47.5,"playerName":"Dr Charles Francis"}\'\n')),(0,o.kt)("p",null,"\u8981\u5c06 JSON \u8f6c\u6362\u56de\u5bf9\u8c61\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.FromJson.html"},"JsonUtility.FromJson"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"myObject = JsonUtility.FromJson&lt;MyClass&gt;(json);\n")),(0,o.kt)("p",null,"\u6b64\u4ee3\u7801\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyClass")," \u5b9e\u4f8b\uff0c\u5e76\u4f7f\u7528 JSON \u6570\u636e\u8bbe\u7f6e\u8be5\u5b9e\u4f8b\u7684\u503c\u3002\u5982\u679c JSON \u6570\u636e\u5305\u542b\u7684\u67d0\u4e9b\u503c\u672a\u6620\u5c04\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyClass")," \u4e2d\u7684\u5b57\u6bb5\uff0c\u5219\u5e8f\u5217\u5316\u7a0b\u5e8f\u5c06\u5ffd\u7565\u8fd9\u4e9b\u503c\u3002\u5982\u679c JSON \u6570\u636e\u7f3a\u5c11 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyClass")," \u4e2d\u67d0\u4e9b\u5b57\u6bb5\u7684\u503c\uff0c\u5219\u5e8f\u5217\u5316\u7a0b\u5e8f\u4f1a\u5728\u8fd4\u56de\u7684\u5bf9\u8c61\u4e2d\u4fdd\u7559\u8fd9\u4e9b\u5b57\u6bb5\u7684\u6784\u9020\u503c\u3002"),(0,o.kt)("h2",{id:"\u7528-json-\u8986\u76d6\u5bf9\u8c61"},"\u7528 JSON \u8986\u76d6\u5bf9\u8c61"),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5728\u73b0\u6709\u5bf9\u8c61\u4e0a\u53cd\u5e8f\u5217\u5316 JSON \u6570\u636e\uff0c\u4ece\u800c\u8986\u76d6\u6240\u6709\u73b0\u6709\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"JsonUtility.FromJsonOverwrite(json, myObject);\n")),(0,o.kt)("p",null,"\u5982\u679c JSON \u6570\u636e\u4e0d\u5305\u542b\u67d0\u4e2a\u5b57\u6bb5\u7684\u503c\uff0c\u5219\u5e8f\u5217\u5316\u7a0b\u5e8f\u4e0d\u4f1a\u66f4\u6539\u8be5\u5b57\u6bb5\u7684\u503c\u3002\u6b64\u65b9\u6cd5\u53ef\u91cd\u590d\u4f7f\u7528\u5148\u524d\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u53ef\u4ee5\u5c06\u5206\u914d\u5de5\u4f5c\u4fdd\u6301\u5728\u6700\u4f4e\u9650\u5ea6\u3002\u6b64\u65b9\u6cd5\u8fd8\u5141\u8bb8\u60a8\u6545\u610f\u7528\u4ec5\u5305\u542b\u4e00\u5c0f\u90e8\u5206\u5b57\u6bb5\u7684 JSON \u6765\u8986\u76d6\u5bf9\u8c61\u4ee5\u4fbf\u201c\u4fee\u8865\u201d\u5bf9\u8c61\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u8b66\u544a\uff1a")," JSON \u5e8f\u5217\u5316\u7a0b\u5e8f API \u652f\u6301 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.html"},"MonoBehaviour")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ScriptableObject.html"},"ScriptableObject")," \u5b50\u7c7b\u4ee5\u53ca\u666e\u901a\u7ed3\u6784\u548c\u7c7b\u3002\u4f46\u662f\uff0c\u5c06 JSON \u53cd\u5e8f\u5217\u5316\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"MonoBehaviour")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptableObject")," \u5b50\u7c7b\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.FromJsonOverwrite.html"},"FromJsonOverwrite")," \u65b9\u6cd5\u3002\u5982\u679c\u5c1d\u8bd5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.FromJson.html"},"FromJson"),"\uff0c\u5219 Unity \u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u56e0\u4e3a\u4e0d\u652f\u6301\u6b64\u884c\u4e3a\u3002"),(0,o.kt)("h2",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,o.kt)("p",null,"JSON \u5e8f\u5217\u5316\u7a0b\u5e8f API \u652f\u6301\u4efb\u4f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"MonoBehaviour")," \u5b50\u7c7b\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"ScriptableObject")," \u5b50\u7c7b\u6216\u8005\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"[Serializable]")," \u5c5e\u6027\u7684\u666e\u901a\u7c7b\u6216\u7ed3\u6784\u3002\u5c06\u5bf9\u8c61\u4f20\u5165\u5230\u6807\u51c6 Unity \u5e8f\u5217\u5316\u7a0b\u5e8f\u8fdb\u884c\u5904\u7406\u65f6\uff0c\u9700\u8981\u9075\u5faa\u4e0e\u5728 Inspector \u4e2d\u76f8\u540c\u7684\u89c4\u5219\u548c\u9650\u5236\uff1aUnity \u53ea\u5e8f\u5217\u5316\u5b57\u6bb5\uff1b\u4e0d\u652f\u6301\u7c7b\u4f3c ",(0,o.kt)("inlineCode",{parentName:"p"},"Dictionary&lt;&gt;")," \u7684\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"Unity \u4e0d\u652f\u6301\u5c06\u5176\u4ed6\u7c7b\u578b\u76f4\u63a5\u4f20\u9012\u5230 API\uff0c\u4f8b\u5982\u539f\u59cb\u7c7b\u578b\u6216\u6570\u7ec4\u3002\u5982\u679c\u9700\u8981\u8f6c\u6362\u4e0a\u8ff0\u7c7b\u578b\uff0c\u5219\u9700\u8981\u5c06\u5b83\u4eec\u5305\u88f9\u5728\u67d0\u79cd ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," \u4e2d\u3002"),(0,o.kt)("p",null,"\u5728 Editor \u4e2d\u4e14\u4ec5\u5728 Editor \u4e2d\u6709\u4e00\u4e2a\u5e76\u884c API ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/EditorJsonUtility.html"},"EditorJsonUtility"),"\uff0c\u5141\u8bb8\u5c06 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Object.html"},"UnityEngine.Object")," \u6d3e\u751f\u7684\u4efb\u4f55\u5bf9\u8c61\u4e0e JSON \u8fdb\u884c\u4e92\u76f8\u5e8f\u5217\u5316\u3002\u8fd9\u6837\u751f\u6210\u7684 JSON \u5c06\u5305\u542b\u4e0e\u5bf9\u8c61\u7684 YAML \u8868\u793a\u76f8\u540c\u7684\u6570\u636e\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.html"},"JsonUtility")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/EditorJsonUtility.html"},"EditorJsonUtility")," are utility classes for serializing Objects to and from JSON\u2019s string format using ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/script-serialization#serialization-rules"},"Unity serialization rules"),". In cases where it\u2019s necessary to manipulate JSON data through code, or to serialize data structures that Unity\u2019s serialization doesn\u2019t support, you can use a general purpose .NET JSON library as a companion to the JsonUtility API."),(0,o.kt)("h2",{id:"\u6027\u80fd"},"\u6027\u80fd"),(0,o.kt)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\u8868\u660e\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.html"},"JsonUtility")," \u6bd4\u6d41\u884c\u7684 .NET JSON \u89e3\u51b3\u65b9\u6848\u8981\u5feb\u5f97\u591a\uff0c\u4f46\u6b64\u7c7b\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u63d0\u4f9b\u7684\u529f\u80fd\u8f83\u5c11\u3002"),(0,o.kt)("p",null,"\u5783\u573e\u6536\u96c6 (GC) \u5185\u5b58\u4f7f\u7528\u91cf\u4e3a\u6700\u4f4e\u91cf\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.ToJson.html"},"ToJson")," \u4ec5\u4e3a\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u5206\u914d GC \u5185\u5b58\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.FromJson.html"},"FromJson")," \u4ec5\u4e3a\u8fd4\u56de\u7684\u5bf9\u8c61\u4ee5\u53ca\u6240\u9700\u7684\u6240\u6709\u5b50\u5bf9\u8c61\u5206\u914d GC \u5185\u5b58\uff08\u4f8b\u5982\uff0c\u5982\u679c\u5bf9\u5305\u542b\u6570\u7ec4\u7684\u5bf9\u8c61\u8fdb\u884c\u53cd\u5e8f\u5217\u5316\uff0c\u5219 Unity \u5c06\u4e3a\u8be5\u6570\u7ec4\u5206\u914d GC \u5185\u5b58\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.FromJsonOverwrite.html"},"FromJsonOverwrite")," \u4ec5\u6839\u636e\u9700\u8981\u4e3a\u5199\u5165\u7684\u5b57\u6bb5\uff08\u4f8b\u5982\u5b57\u7b26\u4e32\u548c\u6570\u7ec4\uff09\u5206\u914d GC \u5185\u5b58\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c JSON \u8986\u76d6\u7684\u6240\u6709\u5b57\u6bb5\u90fd\u662f\u503c\u7c7b\u578b\uff0c\u5219 Unity \u4e0d\u4f1a\u5206\u914d\u4efb\u4f55 GC \u5185\u5b58\u3002")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u540e\u53f0\u7ebf\u7a0b\u4e2d\u7684 JsonUtility API\u3002\u4f46\u662f\uff0c\u4e0e\u4efb\u4f55\u591a\u7ebf\u7a0b\u4ee3\u7801\u4e00\u6837\uff0c\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u5e8f\u5217\u5316\u6216\u53cd\u5e8f\u5217\u5316\u5bf9\u8c61\u65f6\uff0c\u8bf7\u52ff\u5728\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u8bbf\u95ee\u6216\u66f4\u6539\u8be5\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"\u63a7\u5236-tojson-\u7684\u8f93\u51fa"},"\u63a7\u5236 ToJson() \u7684\u8f93\u51fa"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/JsonUtility.ToJson.html"},"ToJson")," \u65b9\u6cd5\u652f\u6301\u5b8c\u7f8e\u6253\u5370 JSON \u8f93\u51fa\u3002\u6b64\u529f\u80fd\u9ed8\u8ba4\u4e3a\u5173\u95ed\u72b6\u6001\uff0c\u4f46\u53ef\u901a\u8fc7\u4f20\u9012 ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u5f00\u542f\u6b64\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"[NonSerialized]")," \u5c5e\u6027\u5728\u8f93\u51fa\u4e2d\u7701\u7565\u5b57\u6bb5\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u5305\u542b\u672a\u77e5\u7c7b\u578b\u7684-fromjson"},"\u4f7f\u7528\u5305\u542b\u672a\u77e5\u7c7b\u578b\u7684 FromJson()"),(0,o.kt)("p",null,"\u5982\u679c\u4e8b\u5148\u4e0d\u77e5\u9053\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u8bf7\u5c06 JSON \u53cd\u5e8f\u5217\u5316\u4e3a\u5305\u542b\u201c\u516c\u5171\u201d\u5b57\u6bb5\u7684\u7c7b\u6216\u7ed3\u6784\uff0c\u7136\u540e\u4f7f\u7528\u8fd9\u4e9b\u5b57\u6bb5\u7684\u503c\u6765\u8ba1\u7b97\u51fa\u60a8\u60f3\u8981\u7684\u5b9e\u9645\u7c7b\u578b\u3002\u7136\u540e\u7b2c\u4e8c\u6b21\u53cd\u5e8f\u5217\u5316\u4e3a\u8be5\u7c7b\u578b\u3002"))}d.isMDXComponent=!0}}]);