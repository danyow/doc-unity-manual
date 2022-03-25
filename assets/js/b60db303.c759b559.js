"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80801],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"ProfilerPhysics",title:"Physics Profiler \u6a21\u5757",slug:"/profiler-window/profiler-physics"},l="Physics Profiler \u6a21\u5757",c={unversionedId:"unity-overview/analysis/profiler/profiler-window/ProfilerPhysics",id:"unity-overview/analysis/profiler/profiler-window/ProfilerPhysics",title:"Physics Profiler \u6a21\u5757",description:"The Physics Profiler module displays information about the physics that the physics system has processed in your project\u2019s scene. This information can help you diagnose and resolve performance issues or unexpected discrepancies related to the physics in your project\u2019s scene. You can also use the Physics Debug Visualization to further debug and understand issues with physics in your application.",source:"@site/docs/unity-overview/analysis/profiler/profiler-window/profiler-physics.md",sourceDirName:"unity-overview/analysis/profiler/profiler-window",slug:"/profiler-window/profiler-physics",permalink:"/doc-unity-manual/docs/profiler-window/profiler-physics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/profiler/profiler-window/profiler-physics.md",tags:[],version:"current",frontMatter:{id:"ProfilerPhysics",title:"Physics Profiler \u6a21\u5757",slug:"/profiler-window/profiler-physics"},sidebar:"tutorialSidebar",previous:{title:"Memory Profiler \u6a21\u5757",permalink:"/doc-unity-manual/docs/profiler-window/profiler-memory"},next:{title:"Rendering Profiler \u6a21\u5757",permalink:"/doc-unity-manual/docs/profiler-window/profiler-rendering"}},d={},p=[{value:"\u56fe\u8868\u7c7b\u522b",id:"\u56fe\u8868\u7c7b\u522b",level:2},{value:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",level:2},{value:"Understanding physics performance issues",id:"understanding-physics-performance-issues",level:2},{value:"Legacy Physics Profiler module",id:"legacy-physics-profiler-module",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"physics-profiler-\u6a21\u5757"},"Physics Profiler \u6a21\u5757"),(0,o.kt)("p",null,"The Physics Profiler module displays information about the physics that the physics system has processed in your project\u2019s scene. This information can help you diagnose and resolve performance issues or unexpected discrepancies related to the physics in your project\u2019s scene. You can also use the ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics-overview/physics-debug-visualization"},"Physics Debug Visualization")," to further debug and understand issues with physics in your application."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/profiler-physics-module.png",alt:"Physics Profiler module"})),(0,o.kt)("p",null,"Physics Profiler module"),(0,o.kt)("h2",{id:"\u56fe\u8868\u7c7b\u522b"},"\u56fe\u8868\u7c7b\u522b"),(0,o.kt)("p",null,"The Physics Profiler module\u2019s chart tracks the time your application spends on physics. The timings are divided into different chart categories. To change the order of the categories in the chart, you can drag them in the chart\u2019s legend. You can also click a category\u2019s colored legend to toggle its display. When you click on the chart, you can see the exact numerical values of each chart category in the module details pane below the chart."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u56fe\u8868")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Physics Used Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"The total amount of memory that the physics module has used")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Dynamic Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.html"},"Rigidbody")," components and ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ArticulationBody.html"},"ArticulationBody")," components that aren\u2019t in a ",(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/physics-overview/rigidbodies-overview"},"sleep")," state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Kinematic Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of active Kinematic Rigidbody components. A Kinematic Rigidbody is active when ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.MovePosition.html"},"MovePosition")," or ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.MoveRotation.html"},"MoveRotation")," is called in a frame, and remains active in the next frame.",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Note")," : Unity might process Kinematic Rigidbody components that have joints attached multiple times per frame, and this contributes to the value displayed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Dynamic Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of Rigidbody components and ArticulationBody components.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Overlaps")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events. An overlapping event is when ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Collider.html"},"colliders")," overlap with each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Trigger Overlaps")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events with trigger colliders (counted in pairs).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Discreet Overlaps")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events which Unity used discrete collision detection to solve.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Continuous Overlaps")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events which Unity used continuous collision detection to solve.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Physics Queries")),(0,o.kt)("td",{parentName:"tr",align:null},"The total amount of physics queries, such as ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Physics.Raycast.html"},"Raycasts")," and shapecasts.")))),(0,o.kt)("h2",{id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"},"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"),(0,o.kt)("p",null,"When you click on the Physics Profiler module, the module details pane displays further information about the physics in your project\u2019s scene."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u7edf\u8ba1\u4fe1\u606f")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Physics Used Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"The total amount of memory that the physics module has used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Dynamic Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.html"},"Rigidbody")," components and ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ArticulationBody.html"},"ArticulationBody")," components.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Articulation Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ArticulationBody components in the scene")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Dynamic Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of Rigidbody components and ArticulationBody components that aren\u2019t in a ",(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/physics-overview/rigidbodies-overview"},"sleep")," state..")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Kinematic Bodies")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of active Kinematic Rigidbody components. A Kinematic Rigidbody is active when ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.MovePosition.html"},"MovePosition")," or ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.MoveRotation.html"},"MoveRotation")," is called in a frame, and remains active in the next frame.",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Note")," : Unity might process Kinematic Rigidbody components that have joints attached multiple times per frame, and this contributes to the value displayed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Static Colliders")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Collider.html"},"colliders")," that don\u2019t have a Rigidbody or ArticulationBody component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Colliders Synced")),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of colliders synced with ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Transform.html"},"Transforms"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Rigidbodies Synced")),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of Rigidbody components synced with Transforms.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Physics Queries")),(0,o.kt)("td",{parentName:"tr",align:null},"The total amount of physics queries, such as ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Physics.Raycast.html"},"Raycasts")," and shapecasts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Total Overlaps")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events. An overlapping event is when colliders overlap with each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Discreet"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events which Unity used discrete collision detection to solve.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Continuous"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events which Unity used continuous collision detection to solve.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> \u89e6\u53d1\u5668"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events with trigger colliders (counted in pairs).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Modified"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of overlap events which Unity used the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Physics.ContactModifyEvent.html"},"Contact Modification")," API to modify.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Broadphase Adds/Removes")),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of colliders that the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/guide/3.3.4/Manual/RigidBodyCollision.html#broad-phase-algorithms"},"broadphase algorithm")," either added or removed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Narrowphase Touches")),(0,o.kt)("td",{parentName:"tr",align:null},"The total amount of collision events that were either lost or appeared as new since the previous frame.")))),(0,o.kt)("p",null,"The numbers displayed in the Profiler might not correspond to the exact number of GameObjects with physics components in your Scene. This is because Unity processes some physics components at a different rate depending on which other components affect it (for example, an attached Joint component). To calculate the exact number of GameObjects with specific physics components attached, you must write a custom script with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Object.FindObjectsOfType.html"},"FindObjectsOfType")," function."),(0,o.kt)("p",null,"The Physics Profiler module doesn\u2019t display the number of sleeping Rigidbody components. These are components which don\u2019t engage with the physics system, so the Profiler doesn\u2019t process them. For more information on sleeping Rigidbody components, see the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics-overview/rigidbodies-overview"},"Rigidbody"),"."),(0,o.kt)("h2",{id:"understanding-physics-performance-issues"},"Understanding physics performance issues"),(0,o.kt)("p",null,"\u7269\u7406\u6a21\u62df\u5728\u4e3b\u903b\u8f91\u66f4\u65b0\u5faa\u73af\u7684\u5355\u72ec\u56fa\u5b9a\u9891\u7387\u66f4\u65b0\u5468\u671f\u4e2d\u8fd0\u884c\uff0c\u53ea\u80fd\u901a\u8fc7\u6bcf\u6b21\u8c03\u7528\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Time-fixedDeltaTime.html"},"Time.fixedDeltaTime")," \u63a8\u8fdb\u65f6\u95f4\u3002\u8fd9\u7c7b\u4f3c\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.Update.html"},"Update")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.FixedUpdate.html"},"FixedUpdate")," \u4e4b\u95f4\u7684\u533a\u522b\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5173\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-time-manager"},"Time \u7a97\u53e3"),"\u7684\u6587\u6863\u3002"),(0,o.kt)("p",null,"\u5f53\u4e00\u4e2a\u590d\u6742\u903b\u8f91\u6216\u56fe\u5f62\u5e27\u9700\u8981\u5f88\u957f\u65f6\u95f4\u65f6\uff0c\u6b64\u6027\u80fd\u5206\u6790\u5668\u5fc5\u987b\u6bcf\u5e27\u591a\u6b21\u8c03\u7528\u7269\u7406\u6a21\u62df\u3002\u8fd9\u610f\u5473\u7740\u5df2\u7ecf\u5360\u7528\u5927\u91cf\u8d44\u6e90\u7684\u5e27\u4f1a\u5360\u7528\u66f4\u591a\u7684\u65f6\u95f4\u548c\u8d44\u6e90\u3002\u8fd9\u53ef\u80fd\u5bfc\u81f4\u7269\u7406\u6a21\u62df\u4f1a\u6839\u636e  ",(0,o.kt)("strong",{parentName:"p"},"Maximum Allowed Timestep"),"  \u503c\u800c\u6682\u65f6\u505c\u6b62\uff1b\u8fd9\u4e2a\u503c\u53ef\u5728 Project Settings \u7a97\u53e3\uff08\u83dc\u5355\uff1a ",(0,o.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings ",">"," Time")," \uff09\u4e2d\u8bbe\u7f6e\u3002"),(0,o.kt)("p",null,"\u8981\u5728\u9879\u76ee\u4e2d\u68c0\u6d4b\u5230\u8fd9\u4e00\u70b9\uff0c\u8bf7\u9009\u62e9 ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler-window/profiler-cpu"},"CPU Usage Profiler \u6a21\u5757")," \u5e76\u5728  ",(0,o.kt)("strong",{parentName:"p"},"Hierarchy"),"  \u89c6\u56fe\u4e2d\u7684 Overview \u90e8\u5206\u4e2d\u68c0\u67e5  ",(0,o.kt)("strong",{parentName:"p"},"Physics.Processing"),"  \u6216  ",(0,o.kt)("strong",{parentName:"p"},"Physics.Simulate"),"  \u7684\u8c03\u7528\u6b21\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/profiler-physics-cpu-module.png",alt:"CPU Usage Profiler with the value of 2 in the Calls column"})),(0,o.kt)("p",null,"CPU Usage Profiler with the value of 2 in the  ",(0,o.kt)("strong",{parentName:"p"},"Calls"),"  column"),(0,o.kt)("p",null,"In this example image, the value of 2 in the Calls column indicates that the physics simulation was called two times over the last logical frame."),(0,o.kt)("p",null,"A call count close to 10 might indicate an issue. As a first solution, reduce the frequency of the physics simulation, and if the issue continues, check what might have caused the heavy frame before the physics system had to use a lot of simulation calls to catch up with the game time. Sometimes, a heavy graphics frame might cause more physics simulation calls later on in a Scene."),(0,o.kt)("p",null,"For more detailed information about the physics simulation in your Scene, select the search box at the top of the module details pane, search for  ",(0,o.kt)("strong",{parentName:"p"},"Physics.Processing")," , and then select  ",(0,o.kt)("strong",{parentName:"p"},"Calls"),"  from the dropdown at the top right of the pane. This displays the names of the physics system tasks that run to update your Scene. The two most common names you\u2019re likely to see are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pxs:"),"  short for \u2018PhysX solver\u2019, which are physics system tasks that joints require as well as resolving contacts for overlapping Rigidbody components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ScScene:"),"  used for tasks that update the Scene, run the broad phase and narrow phase, and integrate Rigidbody components (moving them in space due to forces and impulses). For more information, see ",(0,o.kt)("a",{parentName:"li",href:"http://planning.cs.uiuc.edu/node214.html"},"Steven M. LaValle\u2019s work on Planning Algorithms")," for a definition on two-phase collision detection phases.")),(0,o.kt)("h2",{id:"legacy-physics-profiler-module"},"Legacy Physics Profiler module"),(0,o.kt)("p",null,"You can switch to the  ",(0,o.kt)("strong",{parentName:"p"},"Legacy"),"  mode to see the older version of the Physics Profiler module, which was the default module in older versions of Unity. To do this, select  ",(0,o.kt)("strong",{parentName:"p"},"Legacy"),"  from the dropdown menu in the top right of the Physics Profiler module\u2019s details pane."),(0,o.kt)("p",null,"In this mode, you can load and inspect Profiler data that was saved in an older version of Unity. If you switch to this mode to inspect data captured in a newer version of Unity, then the data displayed is unreliable and inaccurate. You should always use the  ",(0,o.kt)("strong",{parentName:"p"},"Current"),"  mode to inspect new Physics Profiler data."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/profiler-physics-legacy-module.png",alt:"CPU Usage Profiler in Legacy mode"})),(0,o.kt)("p",null,"CPU Usage Profiler in Legacy mode"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u7edf\u8ba1\u4fe1\u606f")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Dynamic")),(0,o.kt)("td",{parentName:"tr",align:null},"\u6d3b\u52a8\u72b6\u6001\u7684\u975e\u8fd0\u52a8\u521a\u4f53\u7ec4\u4ef6\u7684\u6570\u91cf\u3002\u6d3b\u52a8\u72b6\u6001\u7684\u521a\u4f53\u662f\u6307\u672a\u5904\u4e8e",(0,o.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/physics-overview/rigidbodies-overview"},"\u7761\u7720"),"\u72b6\u6001\u7684\u521a\u4f53\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Kinematic")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of active Kinematic Rigidbody components. A Kinematic Rigidbody is active when ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.MovePosition.html"},"MovePosition")," or ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rigidbody.MoveRotation.html"},"MoveRotation")," is called in a frame, and remains active in the next frame.",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Note:"),"  Unity might process Kinematic Rigidbody components that have joints attached multiple times per frame, and this contributes to the value displayed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Static Colliders")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of Collider components on GameObjects that don\u2019t have Rigidbody components attached to the GameObjects or their parent GameObjects.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Collider components on GameObjects or parent GameObjects that have Rigidbody components do not count as Static Colliders. These are called Compound Colliders. Compound Colliders arrange multiple Colliders of a body in a convenient way, rather than having all of the Colliders on the same GameObject as the Rigidbody component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Rigidbody")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of Rigidbody components processed by the physics system, irrespective of the components\u2019 sleeping state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Trigger Overlaps")),(0,o.kt)("td",{parentName:"tr",align:null},"\u91cd\u53e0\u89e6\u53d1\u5668\u7684\u6570\u91cf\uff08\u6210\u5bf9\u8ba1\u6570\uff09\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Active Constraints")),(0,o.kt)("td",{parentName:"tr",align:null},"The number of primitive constraints the physics system has processed. Constraints are used as a building block of Joints as well as collision response. For example, restricting a linear or rotational degree of freedom of a ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ConfigurableJoint.html"},"ConfigurableJoint")," involves a primitive constraint per each restriction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Contacts")),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of contact pairs between all Colliders in the Scene, including the amount of trigger overlap pairs. A contact is a pair of Colliders that either touch or overlap. Note: Unity creates contact pairs per Collider pair once the distance between them is below a certain user configurable limit. As such, you might see contacts generated for Rigidbody components that are not yet touching or overlapping. See documentation on ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/Collider-contactOffset.html"},"Collider.contactOffset")," and ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/Manual/ContactPoint-separation.html"},"ContactPoint.separation")," for more details.")))))}h.isMDXComponent=!0}}]);