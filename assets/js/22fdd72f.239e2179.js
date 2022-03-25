"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84172],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6738:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"Profiler-creating-custom-counters",title:"Creating custom Profiler counters",slug:"/profiler-customizing/profiler-creating-custom-counters"},s="Creating custom Profiler counters",u={unversionedId:"unity-overview/analysis/profiler/profiler-customizing/Profiler-creating-custom-counters",id:"unity-overview/analysis/profiler/profiler-customizing/Profiler-creating-custom-counters",title:"Creating custom Profiler counters",description:"To display custom metrics in the Unity profiler, you must use the ProfilerCounter API in the Unity Profiling Core package.",source:"@site/docs/unity-overview/analysis/profiler/profiler-customizing/profiler-creating-custom-counters.md",sourceDirName:"unity-overview/analysis/profiler/profiler-customizing",slug:"/profiler-customizing/profiler-creating-custom-counters",permalink:"/doc-unity-manual/docs/profiler-customizing/profiler-creating-custom-counters",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/profiler/profiler-customizing/profiler-creating-custom-counters.md",tags:[],version:"current",frontMatter:{id:"Profiler-creating-custom-counters",title:"Creating custom Profiler counters",slug:"/profiler-customizing/profiler-creating-custom-counters"},sidebar:"tutorialSidebar",previous:{title:"Customizing the Profiler",permalink:"/doc-unity-manual/docs/profiler-customizing"},next:{title:"Creating Custom Profiler modules",permalink:"/doc-unity-manual/docs/profiler-creating-custom-modules"}},c={},p=[{value:"Defining a counter",id:"defining-a-counter",level:2},{value:"Using Profiler categories",id:"using-profiler-categories",level:2},{value:"Assigning a Profiler counter to a Profiler category",id:"assigning-a-profiler-counter-to-a-profiler-category",level:3},{value:"Updating a counter\u2019s value",id:"updating-a-counters-value",level:2},{value:"Updating the counter\u2019s value script example",id:"updating-the-counters-value-script-example",level:3},{value:"Using Profiler counters to profile a release build",id:"using-profiler-counters-to-profile-a-release-build",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-custom-profiler-counters"},"Creating custom Profiler counters"),(0,i.kt)("p",null,"To display custom metrics in the Unity profiler, you must use the ProfilerCounter API in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@latest?subfolder=/manual/index.html"},"Unity Profiling Core")," package."),(0,i.kt)("p",null,"You can use the Profiling Core API to track a metric in your application. You can display the information that a counter tracks in the Unity Profiler. Use custom Profiler counters to compare system metrics and identify performance issues in the Profiler window."),(0,i.kt)("p",null,"A custom Profiler counter can display data from ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfilerCounter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfilerCounterValue"),"."),(0,i.kt)("p",null,"For a complete guide to using the Unity Profiling Core API to create Profiler counters, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@latest?subfolder=/manual/profilercounter-guide.html"},"Profiler counters API guide"),"."),(0,i.kt)("p",null,"To add a profiler counter, create scripts to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#defining-a-counter"},"Create a new counter"),"."),(0,i.kt)("li",{parentName:"ul"},"Assign your counter to a ",(0,i.kt)("a",{parentName:"li",href:"#using-profiler-categories"},"Profiler category"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-a-counter%E2%80%99s-value"},"Update the counter\u2019s value"),".")),(0,i.kt)("p",null,"The code examples in these sections add a Profiler counter to track the total number of particles that Unity created for every instance of a GameObject\u2019s trail effects. In these examples, the GameObject\u2019s name is \u201cTank\u201d."),(0,i.kt)("h2",{id:"defining-a-counter"},"Defining a counter"),(0,i.kt)("p",null,"To create a new counter, write a script to define the value type of the new counter, and assign a name and a unit to this type."),(0,i.kt)("p",null,"When you create a counter you must specify which ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerCategory.html"},"Profiler category")," your new counter belongs to. To do this use an existing Unity category. For example, the script example below uses the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfilerCategory.Scripts")," category.For more information, see ",(0,i.kt)("a",{parentName:"p",href:"#using-profiler-categories"},"Using Profiler categories")),(0,i.kt)("p",null,"The following example script defines the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@latest?subfolder=/api/Unity.Profiling.ProfilerCounter-1.html"},"ProfilerCounterValue")," ",(0,i.kt)("inlineCode",{parentName:"p"},"TankTrailParticleCount"),", with the name \u201cTank Trail Particles\u201d. This counter has a unit of \u201cCount\u201d:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' \n public static class GameStats\n {\n    public static readonly ProfilerCategory TanksCategory = ProfilerCategory.Scripts;\n\n    public const string TankTrailParticleCountName = "Tank Trail Particles";\n    public static readonly ProfilerCounterValue&lt;int&gt; TankTrailParticleCount =\n        new ProfilerCounterValue&lt;int&gt;(TanksCategory, TankTrailParticleCountName, ProfilerMarkerDataUnit.Count,\n            ProfilerCounterOptions.FlushOnEndOfFrame | ProfilerCounterOptions.ResetToZeroOnFlush);\n}\n')),(0,i.kt)("p",null,"The options ",(0,i.kt)("inlineCode",{parentName:"p"},"FlushOnEndOfFrame")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ResetToZeroOnFlush")," automatically send the counter to the Profiler data stream and reset the Count value to zero at the end of the frame."),(0,i.kt)("h2",{id:"using-profiler-categories"},"Using Profiler categories"),(0,i.kt)("p",null,"Unity automatically groups Profiler counters into categories based on the type of work the counters profile, for example, Rendering, Scripting, or Animation. You can assign a custom Profiler counter to any of Unity\u2019s profiling categories. For a full list of available Profiler categories, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerCategory.html"},"ProfilerCategory"),"."),(0,i.kt)("h3",{id:"assigning-a-profiler-counter-to-a-profiler-category"},"Assigning a Profiler counter to a Profiler category"),(0,i.kt)("p",null,"A Profiler counter must belong to a Profiler category. You should assign a category to a Profiler counter when you define the counter. To do this, use the ProfilerModule\u2019s optional ",(0,i.kt)("inlineCode",{parentName:"p"},"autoEnabledCategoryNames")," constructor argument to assign one or more categories to a Profiler counter. There is an example of this method in the following example code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n using Unity.Profiling;\n using Unity.Profiling.Editor;\n\n [System.Serializable]\n [ProfilerModuleMetadata("Tank Effects")] \n public class TankEffectsProfilerModule : ProfilerModule\n {\n    static readonly ProfilerCounterDescriptor[] k_Counters = new ProfilerCounterDescriptor[]\n    {\n        new ProfilerCounterDescriptor(GameStatistics.TankTrailParticleCountName, GameStatistics.TanksCategory),\n        new ProfilerCounterDescriptor(GameStatistics.ShellExplosionParticleCountName, GameStatistics.TanksCategory),\n        new ProfilerCounterDescriptor(GameStatistics.TankExplosionParticleCountName, GameStatistics.TanksCategory),\n    };\n\n    // Ensure that both ProfilerCategory.Scripts and ProfilerCategory.Memory categories are enabled when our module is active.\n    static readonly string[] k_AutoEnabledCategoryNames = new string[]\n    {\n        ProfilerCategory.Scripts.Name,\n        ProfilerCategory.Memory.Name\n    };\n\n\n    // Pass the auto-enabled category names to the base constructor.\n    public TankEffectsProfilerModule() : base(k_Counters, autoEnabledCategoryNames: k_AutoEnabledCategoryNames) { }\n}\n')),(0,i.kt)("h2",{id:"updating-a-counters-value"},"Updating a counter\u2019s value"),(0,i.kt)("p",null,"To update the value of a counter, create a MonoBehaviour script that sets the value of a counter you have defined. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@latest?subfolder=/manual/profilercounter-guide.html#how-to-pass-counter-values-to-the-profiler"},"How to pass counter values to the Profiler"),"."),(0,i.kt)("h3",{id:"updating-the-counters-value-script-example"},"Updating the counter\u2019s value script example"),(0,i.kt)("p",null,"This example MonoBehaviour script counts the number of trail particles that belong to an assigned GameObject every frame in the Update function. To do this, it uses the counter called ",(0,i.kt)("inlineCode",{parentName:"p"},"TankTrailParticleCount"),"."),(0,i.kt)("p",null,"The following example script also creates a public property called  ",(0,i.kt)("strong",{parentName:"p"},"Trail Particle System"),"  (",(0,i.kt)("inlineCode",{parentName:"p"},"m_TrailParticleSystem"),") in the Inspector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n using UnityEngine;\n\n class TankMovement : MonoBehaviour\n {\n    public ParticleSystem m_TrailParticleSystem;\n\n    void Update()\n    {\n        GameStats.TankTrailParticleCount.Value += m_TrailParticleSystem.particleCount;\n    }\n }\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Profiler_Tank_example.png",alt:"Profiler_Tank_example.png"})),(0,i.kt)("h2",{id:"using-profiler-counters-to-profile-a-release-build"},"Using Profiler counters to profile a release build"),(0,i.kt)("p",null,"When you run your project in a release player, you don\u2019t have access to the Profiler window. However, you can display counters as UI elements in a release player. This means you can include profiling tools in a released application. To do this, see  ",(0,i.kt)("strong",{parentName:"p"},"Getting counter values in players"),"  in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@latest?subfolder=/manual/profilercounter-guide.html"},"Profiler counters API guide"),"."),(0,i.kt)("p",null,"The following image displays counters in the top left of the scene using custom UI in a release player:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Tanks-Runtime-Stats.png",alt:"Tanks-Runtime-Stats.png"})))}m.isMDXComponent=!0}}]);