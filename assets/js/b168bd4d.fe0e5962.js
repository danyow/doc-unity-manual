"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46682],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"unity-linker",title:"The Unity linker",slug:"/scripting-backends/unity-linker"},o="The Unity linker",p={unversionedId:"scripting-section/unity-architecture/scripting-backends/unity-linker",id:"scripting-section/unity-architecture/scripting-backends/unity-linker",title:"The Unity linker",description:"The Unity build process uses a tool called the Unity linker to strip managed code. The Unity linker is a version of the IL Linker customized to work with Unity. The custom Unity Engine specific parts of the Unity linker aren\u2019t publicly available.",source:"@site/docs/scripting-section/unity-architecture/scripting-backends/unity-linker.md",sourceDirName:"scripting-section/unity-architecture/scripting-backends",slug:"/scripting-backends/unity-linker",permalink:"/docs/scripting-backends/unity-linker",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/unity-architecture/scripting-backends/unity-linker.md",tags:[],version:"current",frontMatter:{id:"unity-linker",title:"The Unity linker",slug:"/scripting-backends/unity-linker"},sidebar:"tutorialSidebar",previous:{title:"\u811a\u672c\u9650\u5236",permalink:"/docs/scripting-backends/scripting-restrictions"},next:{title:"Unity Search",permalink:"/docs/search-overview"}},d={},m=[{value:"How the Unity linker works",id:"how-the-unity-linker-works",level:2},{value:"How the Unity linker strips assemblies",id:"how-the-unity-linker-strips-assemblies",level:2},{value:"Marking rules",id:"marking-rules",level:2},{value:"Root marking rules",id:"root-marking-rules",level:3},{value:"Dependency marking rules",id:"dependency-marking-rules",level:3},{value:"Link XML feature tag exclusions",id:"link-xml-feature-tag-exclusions",level:2},{value:"Editing of method bodies",id:"editing-of-method-bodies",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-unity-linker"},"The Unity linker"),(0,i.kt)("p",null,"The Unity build process uses a tool called the Unity linker to strip managed code. The Unity linker is a version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mono/linker"},"IL Linker")," customized to work with Unity. The custom Unity Engine specific parts of the Unity linker aren\u2019t publicly available."),(0,i.kt)("p",null,"The Unity linker is responsible for both managed code stripping and part of the process of engine code stripping, which is a separate process available through the IL2CPP script backend that removes unused engine code. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/PlayerSettings-stripEngineCode.html"},"PlayerSettings.StripEngineCode"),"]","."),(0,i.kt)("h2",{id:"how-the-unity-linker-works"},"How the Unity linker works"),(0,i.kt)("p",null,"The Unity linker analyzes all the assemblies in your project. First, it marks root types, methods, properties, and fields. For example, MonoBehaviour-derived classes you add to GameObjects in a Scene are root types. The Unity linker then analyzes the roots it has marked to identify, and marks any managed code that these roots depend upon. Upon completion of this static analysis, any remaining unmarked code is unreachable by any execution path through your application code and the Unity linker deletes it from the assembly."),(0,i.kt)("h2",{id:"how-the-unity-linker-strips-assemblies"},"How the Unity linker strips assemblies"),(0,i.kt)("p",null,"The Unity Editor creates a list of the assemblies that contain types used in any of the Scenes in your Unity project and passes this list to the Unity linker. The Unity linker then processes those assemblies, any references of those assemblies, any assemblies declared in a link.xml file, and any assemblies with the AlwaysLinkAssembly attribute. In general, the Unity linker doesn\u2019t process assemblies included in your project that don\u2019t fall under one of these categories, and excludes them from the Player build."),(0,i.kt)("p",null,"For each assembly the Unity linker processes, it follows a set of rules based on the classification of the assembly, whether the assembly contains types used in a Scene, and the  ",(0,i.kt)("strong",{parentName:"p"},"Managed Stripping Level"),"  you have selected for the build."),(0,i.kt)("p",null,"\u6839\u636e\u8fd9\u4e9b\u89c4\u5219\u7684\u7528\u9014\uff0c\u7a0b\u5e8f\u96c6\u5212\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u5206\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".NET Class Library assemblies \u2014 Includes the Mono class libraries such as mscorlib.dll and System.dll, as well as .NET class library facade assemblies like netstandard.dll."),(0,i.kt)("li",{parentName:"ul"},"Platform SDK assemblies \u2014 Includes the managed assemblies specific to a platform SDK. For example, the windows.winmd assembly that is part of the Universal Windows Platform SDK."),(0,i.kt)("li",{parentName:"ul"},"Unity Engine Module assemblies \u2014 Includes the managed assemblies that make up the Unity Engine, such as UnityEngine.Core.dll."),(0,i.kt)("li",{parentName:"ul"},"Project assemblies \u2014 Includes the assemblies specific to a project such as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u811a\u672c\u7a0b\u5e8f\u96c6\uff0c\u5982 Assembly-CSharp.dll"),(0,i.kt)("li",{parentName:"ul"},"\u9884\u7f16\u8bd1\u7684\u7a0b\u5e8f\u96c6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html"},"Assembly Definition Assemblies")),(0,i.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u5305\u7a0b\u5e8f\u96c6")))),(0,i.kt)("h2",{id:"marking-rules"},"Marking rules"),(0,i.kt)("p",null,"When you build a project in Unity, the build process compiles your C# code to a .NET bytecode format called Common Intermediate Language (CIL). Unity packages this CIL byte code into files called assemblies. The .NET framework libraries and any C# libraries in the plugins you use in your project are also pre-packaged as assemblies of CIL bytecode."),(0,i.kt)("p",null,"When the Unity linker performs its static analysis, it follows sets of rules to determine which parts of the CIL bytecode the Unity linker marks as necessary for the build. Root marking rules determine how the Unity linker identifies and preserves top-level assemblies in the build. Dependency marking rules determine how the Unity linker identifies and preserves any code that the root assemblies depend on."),(0,i.kt)("p",null,"The  ",(0,i.kt)("strong",{parentName:"p"},"Managed Stripping Level"),"  property changes the set of rules that the Unity linker uses. The following sections describe the marking rules for each possible setting for the  ",(0,i.kt)("strong",{parentName:"p"},"Managed Stripping Level"),"  property."),(0,i.kt)("h3",{id:"root-marking-rules"},"Root marking rules"),(0,i.kt)("p",null,"The following table describes how the Unity linker identifies the top-level types in an assembly:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Assembly type:")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Marking rules:")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Minimal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Low"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},".NET Class & Platform SDK and UnityEngine Assemblies")),(0,i.kt)("td",{parentName:"tr",align:null},"Applies precautionary preservations and any preservations defined in any link.xml file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Assemblies with types referenced in a scene")),(0,i.kt)("td",{parentName:"tr",align:null},"Marks all types and members in the assembly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"All other")),(0,i.kt)("td",{parentName:"tr",align:null},"Marks all types and members in the assembly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Test")),(0,i.kt)("td",{parentName:"tr",align:null},"Marks any methods with the ",(0,i.kt)("inlineCode",{parentName:"td"},"[UnityTest]")," attribute and any methods annotated with an Attribute defined in the NUnit.Framework.")))),(0,i.kt)("h3",{id:"dependency-marking-rules"},"Dependency marking rules"),(0,i.kt)("p",null,"After the Unity linker identifies the roots in an assembly, it needs to identify any code that those roots depend on. The following table describes how the Unity linker identifies dependencies of root types in an assembly:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Rule Target")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Action at each stripping level")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"->  ",(0,i.kt)("strong",{parentName:"td"},"Minimal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Low"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"MonoBehaviour")),(0,i.kt)("td",{parentName:"tr",align:null},"The Unity linker marks all members of a MonoBehavior type when it marks the type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ScriptableObject")),(0,i.kt)("td",{parentName:"tr",align:null},"The Unity linker marks all members of a ScriptableObject type when it marks the type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},"When the Unity linker marks an assembly, type or other code structure, it also marks all attributes of those structures.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Debugging Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},"When script debugging is enabled, the Unity linker marks all members that have the ",(0,i.kt)("inlineCode",{parentName:"td"},"[DebuggerDisplay]")," attribute, even when there isn\u2019t a code path that uses those members.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},".NET Facade Class Library")),(0,i.kt)("td",{parentName:"tr",align:null},"Removes facade assemblies since they aren\u2019t necessary at runtime.")))),(0,i.kt)("h2",{id:"link-xml-feature-tag-exclusions"},"Link XML feature tag exclusions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ManagedCodeStripping.html#LinkXML"},"Link.xml")," files support an uncommonly used \u201cfeatures\u201d XML attribute. In the example, the mscorlib.xml file embedded in mscorlib.dll uses this attribute, but you can use it in any link.xml file, when appropriate."),(0,i.kt)("p",null,"When you use the  ",(0,i.kt)("strong",{parentName:"p"},"High"),"  stripping level, the Unity linker excludes preservations for features that aren\u2019t supported based on the settings for the current build:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"remoting \u2014 Excluded when targeting the IL2CPP scripting backend."),(0,i.kt)("li",{parentName:"ol"},"sre \u2014 Excluded when targeting the IL2CPP scripting backend."),(0,i.kt)("li",{parentName:"ol"},"com \u2014 Excluded when targeting platforms that don\u2019t support COM.")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684 link.xml \u6587\u4ef6\u5728\u652f\u6301 COM \u7684\u5e73\u53f0\u4e0a\u4fdd\u7559\u67d0\u79cd\u7c7b\u578b\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5e76\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u4fdd\u7559\u4e00\u4e2a\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'&lt;linker&gt;\n\n    &lt;assembly fullname="Foo"&gt;\n\n        &lt;type fullname="Type1"&gt;\n\n            &lt;!--Preserve FeatureOne on platforms that support COM--&gt;\n\n            &lt;method signature="System.Void FeatureOne()" feature="com"/&gt;\n\n            &lt;!--Preserve FeatureTwo on all platforms--&gt;\n\n            &lt;method signature="System.Void FeatureTwo()"/&gt;\n\n        &lt;/type&gt;\n\n    &lt;/assembly&gt;\n\n&lt;/linker&gt;\n')),(0,i.kt)("h2",{id:"editing-of-method-bodies"},"Editing of method bodies"),(0,i.kt)("p",null,"When you use the  ",(0,i.kt)("strong",{parentName:"p"},"High"),"  stripping level, the Unity linker edits method bodies to further reduce code size. This section summarizes some of the notable edits that the Unity linker makes to method bodies."),(0,i.kt)("p",null,"The Unity linker only edits method bodies in the .NET Class Library assemblies. After method body editing, the source code of the assembly no longer matches the compiled code in the assembly, which can make debugging more difficult."),(0,i.kt)("p",null,"The following list describes actions that the Unity linker can perform to edit a method body:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove unreachable branches - The Unity linker removes If-statement blocks that check System.Environment.OSVersion.Platform and aren\u2019t reachable for the currently targeted platform."),(0,i.kt)("li",{parentName:"ul"},"Inline methods that only access fields - The Unity linker replaces calls to methods that get or set a field with direct access to the field. This often makes it possible to strip away the method entirely. When you use the Mono backend, the Unity linker only makes this change when the caller of the method is allowed to directly access the field, based on the field\u2019s visibility. For IL2CPP, visibility rules don\u2019t apply, so the Unity linker makes this change where appropriate."),(0,i.kt)("li",{parentName:"ul"},"Inline methods that return a const value - The Unity linker inlines calls to methods that only return a const value."),(0,i.kt)("li",{parentName:"ul"},"Remove empty non-returning calls - The Unity linker removes calls to methods that are empty and have a void return type."),(0,i.kt)("li",{parentName:"ul"},"Remove empty scope - The Unity linker removes Try/Finally blocks when the Finally block is empty. Removing ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/ManagedCodeStripping.html#EmptyCalls"},"empty calls")," can create empty Finally blocks. When that happens during method editing, Unity linker removes the entire Try/Finally block. One scenario where this can occur is when the compiler generates Try/Finally blocks as part of foreach loops in order to call Dispose().")))}u.isMDXComponent=!0}}]);