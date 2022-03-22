"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62021],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81390:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"ProfilerMemory",title:"Memory Profiler \u6a21\u5757",slug:"/profiler-window/profiler-memory"},s="Memory Profiler \u6a21\u5757",m={unversionedId:"unity-overview/analysis/profiler/profiler-window/ProfilerMemory",id:"unity-overview/analysis/profiler/profiler-window/ProfilerMemory",title:"Memory Profiler \u6a21\u5757",description:"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5728 Unity \u4e2d\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff1a",source:"@site/docs/unity-overview/analysis/profiler/profiler-window/profiler-memory.md",sourceDirName:"unity-overview/analysis/profiler/profiler-window",slug:"/profiler-window/profiler-memory",permalink:"/docs/profiler-window/profiler-memory",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/analysis/profiler/profiler-window/profiler-memory.md",tags:[],version:"current",frontMatter:{id:"ProfilerMemory",title:"Memory Profiler \u6a21\u5757",slug:"/profiler-window/profiler-memory"},sidebar:"tutorialSidebar",previous:{title:"GPU Usage Profiler \u6a21\u5757",permalink:"/docs/profiler-window/profiler-gpu"},next:{title:"Physics Profiler \u6a21\u5757",permalink:"/docs/profiler-window/profiler-physics"}},d={},p=[{value:"Memory profiling in the Editor",id:"memory-profiling-in-the-editor",level:2},{value:"\u56fe\u8868\u7c7b\u522b",id:"\u56fe\u8868\u7c7b\u522b",level:2},{value:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f",level:2},{value:"Simple \u89c6\u56fe",id:"simple-\u89c6\u56fe",level:3},{value:"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027",id:"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027",level:3},{value:"Detailed \u89c6\u56fe",id:"detailed-\u89c6\u56fe",level:3}],u={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"memory-profiler-\u6a21\u5757"},"Memory Profiler \u6a21\u5757"),(0,o.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5728 Unity \u4e2d\u5206\u6790\u5e94\u7528\u7a0b\u5e8f\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory"),"   ",(0,o.kt)("strong",{parentName:"li"},"Profiler"),"   ",(0,o.kt)("strong",{parentName:"li"},"module")," : A built-in Profiler module that gives you basic information on where your application uses memory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory Profiler package")," : A Unity package that you can add to your project. It adds an additional Memory Profiler window to the Unity Editor, which you can then use to analyze memory usage in your application in even more detail. You can store and compare snapshots to find memory leaks, or see the memory layout to find memory fragmentation issues.")),(0,o.kt)("p",null,"\u672c\u9875\u6db5\u76d6\u6709\u5173\u5185\u7f6e Memory Profiler \u6a21\u5757\u7684\u4fe1\u606f\u3002\u6709\u5173 Memory Profiler \u5305\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest"},"Memory Profiler \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"The Memory Profiler module visualizes counters that represent the total allocated memory in your application. You can use the memory module to see information like the number of loaded objects, and the memory that they take in total per category. You can also see the number of ",(0,o.kt)("a",{parentName:"p",href:"/docs/performance-garbage-collector"},"GC allocations")," per Profiler frame."),(0,o.kt)("h2",{id:"memory-profiling-in-the-editor"},"Memory profiling in the Editor"),(0,o.kt)("p",null,"When you profile your application in the Editor, rather than building and profiling your application on a target device, the profiling data in the Memory Profiler module is larger than when you run your application on its release platform. This is because the Unity Editor uses specific objects that take up memory, and the Editor window itself uses extra memory."),(0,o.kt)("p",null,"Also, because Unity can\u2019t cleanly separate the memory that the Profiler itself takes up from the Play mode\u2019s memory, memory that the Profiler uses is displayed in the Profiler window. To remind you of this, a warning displays at the top of the Memory Profiler module details pane whenever you have the Profiler target set to  ",(0,o.kt)("strong",{parentName:"p"},"Play Mode"),"  or  ",(0,o.kt)("strong",{parentName:"p"},"Editor")," . For more precise numbers and memory usage for your application, you should profile your application on the target device and operating system you intend it to run on. For more information, see the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/docs/profiler/profiler-profiling-applications"},"Profiling your application"),"."),(0,o.kt)("h2",{id:"\u56fe\u8868\u7c7b\u522b"},"\u56fe\u8868\u7c7b\u522b"),(0,o.kt)("p",null,"The Memory Profiler module is divided into categories that display detailed information on where your application spends memory. You can also click a category\u2019s colored legend to toggle its display."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u7c7b\u522b")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Total Allocated")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u5df2\u4f7f\u7528\u7684\u5185\u5b58\u603b\u91cf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Texture Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684",(0,o.kt)("a",{parentName:"td",href:"/docs/class-texture-importer"},"\u7eb9\u7406"),"\u5df2\u4f7f\u7528\u7684\u5185\u5b58\u91cf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Mesh Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684",(0,o.kt)("a",{parentName:"td",href:"/docs/mesh/class-mesh"},"\u7f51\u683c"),"\u5df2\u4f7f\u7528\u7684\u5185\u5b58\u91cf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Material Count")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684",(0,o.kt)("a",{parentName:"td",href:"/docs/materials"},"\u6750\u8d28"),"\u5b9e\u4f8b\u6570\u91cf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Object Count")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u539f\u751f\u5bf9\u8c61\u5b9e\u4f8b\u6570\u91cf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GC Used Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of memory the ",(0,o.kt)("a",{parentName:"td",href:"/docs/performance-memory-overview/performance-managed-memory#managed-heap-overview"},"GC heap")," has used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GC Allocated in Frame")),(0,o.kt)("td",{parentName:"tr",align:null},"GC \u5806\u4e2d\u6bcf\u5e27\u5206\u914d\u7684\u5185\u5b58\u91cf\u3002")))),(0,o.kt)("h2",{id:"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"},"\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u9762\u677f"),(0,o.kt)("p",null,"There are two views available in the module details pane, located at the bottom of the Profiler window:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple:"),"  Displays a high level overview of the memory statistics per frame"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Detailed:"),"  Captures a memory snapshot which contains more details on the memory that native objects used, including native references to them, and Unity\u2019s different subsystems.")),(0,o.kt)("p",null,"To change the view, select it from the dropdown in the top left of the module details pane."),(0,o.kt)("h3",{id:"simple-\u89c6\u56fe"},"Simple \u89c6\u56fe"),(0,o.kt)("p",null,"The Simple view displays an overview of how Unity uses memory in real-time on a per-frame basis. It breaks down the total memory that your application uses into a few major categories. The  ",(0,o.kt)("strong",{parentName:"p"},"Total"),"  value is based on the System Used Memory Profiler counter, which indicates how much memory the operating system (OS) reports as being in use by your application."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/profiler-memory-simple-view.png",alt:"The Simple view with some Profiler data loaded"})),(0,o.kt)("p",null,"The Simple view with some Profiler data loaded"),(0,o.kt)("p",null,"Unity sets some memory pools aside for allocations to avoid asking the operating system for memory too often. The Profiler module displays how much memory Unity reserves, and how much memory Unity used at the time of the Profiler capture."),(0,o.kt)("p",null,"The Simple view displays the data collected within the  ",(0,o.kt)("strong",{parentName:"p"},"System Used Memory"),"  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.profiling.core@1.0/manual/profilercounter-guide.html"},"Profiler counter"),". This indicates how much memory the operating system (OS) reports as being in use by the app and corresponds to the  ",(0,o.kt)("strong",{parentName:"p"},"Total"),"  value of the  ",(0,o.kt)("strong",{parentName:"p"},"Total Committed Memory"),"  bar and the  ",(0,o.kt)("strong",{parentName:"p"},"Total Memory Breakdown"),"  bar."),(0,o.kt)("p",null,"On platforms that support getting the total memory size of the application from the operating system, the  ",(0,o.kt)("strong",{parentName:"p"},"System Memory Usage"),"  is over 0 and is the same size in a task manager."),(0,o.kt)("p",null,"The following reference table describes the statistics available in the Simple view, plus its corresponding profiler counter, and availability in Release builds. This information is also available via the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerRecorder.html"},"ProfilerRecorder API")," and in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/profiler-creating-custom-modules/profiler-module-editor"},"Profiler Module Editor")," so you can add them to a custom Profiler module."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"\u63cf\u8ff0")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Corresponding Profiler counter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Available in Release Players?")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Normalized")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable this setting to scale the  ",(0,o.kt)("strong",{parentName:"td"},"Total Committed Memory"),"  and  ",(0,o.kt)("strong",{parentName:"td"},"Total Memory Breakdown"),"  charts to the memory usage of the selected frame. If you disable this setting, the charts scale to the total used memory within the frame range. This setting can help you see how the total or relative amounts of memory change from frame to frame"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Total Committed Memory")),(0,o.kt)("td",{parentName:"tr",align:null},"The length of the Total Committed Memory bar indicates the total amount of memory that Unity\u2019s Memory Manager system tracked, how much of that it used, and how much memory isn\u2019t tracked through this system."),(0,o.kt)("td",{parentName:"tr",align:null},"System Used Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tracked Memory (in use / Reserved)"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the total amount of memory that Unity uses and tracks ( ",(0,o.kt)("strong",{parentName:"td"},"in use")," ), and the amount of memory that Unity reserves for tracking purposes and pool allocations ( ",(0,o.kt)("strong",{parentName:"td"},"Reserved")," )."),(0,o.kt)("td",{parentName:"tr",align:null},"Total Used Memory ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Total Reserved Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Untracked Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the total amount of memory that Unity used but isn\u2019t aware of. Some examples of untracked memory are: ",(0,o.kt)("br",null),(0,o.kt)("br",null),"- Memory allocated through native plug-ins or some drivers ",(0,o.kt)("br",null),"- Mono or IL2CPP type metadata ",(0,o.kt)("br",null),"- Memory that executable code and DLLs use ",(0,o.kt)("br",null),(0,o.kt)("br",null),"The ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest"},"Memory Profiler package")," and native platform providers might have more information on some of these untracked memory amounts."),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Total Memory Breakdown")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays the same total amount as the  ",(0,o.kt)("strong",{parentName:"td"},"Total Committed Memory"),"  bar but breaks it into some high level categories, based on which subsystems Unity allocated the memory for. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Not all memory systems use pools or differentiate between used and reserved memory. Those that do display two numbers, the used and the reserved amount of memory. If the used amount doesn\u2019t share the same unit (B, MB, GB) as the reserved amount, Unity displays the unit, otherwise it\u2019s omitted."),(0,o.kt)("td",{parentName:"tr",align:null},"System Used Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Managed Heap (in use / Reserved)"),(0,o.kt)("td",{parentName:"tr",align:null},"The used heap size and total heap size that managed code uses. This memory is ",(0,o.kt)("a",{parentName:"td",href:"/docs/performance-garbage-collector"},"garbage collected"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"GC Used Memory ",(0,o.kt)("br",null),(0,o.kt)("br",null),"GC Reserved Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graphics & Graphics Driver"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9a71\u52a8\u7a0b\u5e8f\u5bf9\u7eb9\u7406\u3001\u6e32\u67d3\u76ee\u6807\u3001\u7740\u8272\u5668\u548c\u7f51\u683c\u6570\u636e\u4f7f\u7528\u7684\u4f30\u8ba1\u5185\u5b58\u91cf\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"Gfx Used Memory",(0,o.kt)("br",null),(0,o.kt)("br",null),"Gfx Reserved Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Audio"),(0,o.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891\u7cfb\u7edf\u7684\u4f30\u8ba1\u5185\u5b58\u4f7f\u7528\u91cf\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"Audio Used Memory",(0,o.kt)("br",null),(0,o.kt)("br",null),"Audio Reserved Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Video"),(0,o.kt)("td",{parentName:"tr",align:null},"The Video system\u2019s estimated memory usage."),(0,o.kt)("td",{parentName:"tr",align:null},"Video Used Memory",(0,o.kt)("br",null),(0,o.kt)("br",null),"Video Reserved Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Other"),(0,o.kt)("td",{parentName:"tr",align:null},"Displays native memory that Unity tracks, but isn\u2019t reported under a specific counter. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"To get more information on the makeup of this or the other categories, take a snapshot in the ",(0,o.kt)("a",{parentName:"td",href:"#detailed-%E8%A7%86%E5%9B%BE"},"Detailed view")," or with the Memory Profiler package. ",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Important:"),"  The Other category doesn\u2019t directly map to the Other group in the  ",(0,o.kt)("strong",{parentName:"td"},"Detailed"),"  view. In this view,  ",(0,o.kt)("strong",{parentName:"td"},"Other"),"  contains the remainder of the native memory that was not used for the GPU side of graphics memory, the Profiler, Audio, or Video memory."),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Profiler"),(0,o.kt)("td",{parentName:"tr",align:null},"The memory that the Profiler functionality uses and reserves from the system."),(0,o.kt)("td",{parentName:"tr",align:null},"Profiler Used Memory",(0,o.kt)("br",null),(0,o.kt)("br",null),"Profiler Reserved Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Objects stats")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays the amount of object instances of the types of Assets that commonly take up a high percentage of the memory (Textures, Meshes, Materials, Animation Clips), together with their accumulated sizes in memory (Assets, GameObjects, Scene Objects). ",(0,o.kt)("br",null),(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"td"},"Note:"),"  Texture and Mesh memory doesn\u2019t map directly to the  ",(0,o.kt)("strong",{parentName:"td"},"Graphics & Graphics"),"  Driver stat in the  ",(0,o.kt)("strong",{parentName:"td"},"Total Memory Breakdown"),"  view. This is because some of that memory might also fall into the  ",(0,o.kt)("strong",{parentName:"td"},"Other"),"  category of the Total Memory Breakdown bar."),(0,o.kt)("td",{parentName:"tr",align:null},"Object Count"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Textures"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7684\u7eb9\u7406\u603b\u6570\u53ca\u5176\u4f7f\u7528\u7684\u5185\u5b58\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"Texture Count",(0,o.kt)("br",null),(0,o.kt)("br",null),"Texture Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u7f51\u683c"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7684\u7f51\u683c\u603b\u6570\u53ca\u5176\u4f7f\u7528\u7684\u5185\u5b58\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"Mesh Count",(0,o.kt)("br",null),(0,o.kt)("br",null),"Mesh Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6750\u8d28"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7684\u6750\u8d28\u603b\u6570\u53ca\u5176\u4f7f\u7528\u7684\u5185\u5b58\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"Material Count",(0,o.kt)("br",null),(0,o.kt)("br",null),"Material Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u52a8\u753b\u526a\u8f91"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7684\u52a8\u753b\u526a\u8f91\u603b\u6570\u53ca\u5176\u4f7f\u7528\u7684\u5185\u5b58\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"AnimationClip Count",(0,o.kt)("br",null),(0,o.kt)("br",null),"AnimationClip Memory"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Assets"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7684\u8d44\u6e90\u603b\u6570\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"Asset Count"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Game Objects"),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GameObject.html"},"GameObject")," instances in the scene."),(0,o.kt)("td",{parentName:"tr",align:null},"GameObject Count"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scene Objects"),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of dynamic ",(0,o.kt)("inlineCode",{parentName:"td"},"UnityEngine.Objects"),". This number includes the GameObject Count, plus the total number of components, and everything which isn\u2019t an asset in the scene."),(0,o.kt)("td",{parentName:"tr",align:null},"Scene Object Count"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GC allocated in frame"),(0,o.kt)("td",{parentName:"tr",align:null},"Displays the amount of managed allocations in the selected frame, and their total size in bytes."),(0,o.kt)("td",{parentName:"tr",align:null},"GC Allocation In Frame Count",(0,o.kt)("br",null),(0,o.kt)("br",null),"GC Allocated In Frame"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,o.kt)("h3",{id:"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027"},"\u64ad\u653e\u5668\u4e2d\u7684\u53ef\u7528\u6027"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerRecorder.html"},"ProfilerRecorder API")," to access the Memory Profiler module\u2019s counters in Players. The following example contains a simple script that collects  ",(0,o.kt)("strong",{parentName:"p"},"Total Reserved Memory")," ,  ",(0,o.kt)("strong",{parentName:"p"},"GC Reserved Memory"),"  and  ",(0,o.kt)("strong",{parentName:"p"},"System Used Memory"),"  metrics, and displays those as a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GUI.TextAreaGUI.TextArea.html"},"GUI.TextArea"),". The Memory Profiler module information belongs to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Profiling.ProfilerCategory.Memory.html"},"ProfilerCategory.Memory")," Profiler category."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Text;\nusing Unity.Profiling;\nusing UnityEngine;\n\npublic class MemoryStatsScript : MonoBehaviour\n{\n    string statsText;\n    ProfilerRecorder totalReservedMemoryRecorder;\n    ProfilerRecorder gcReservedMemoryRecorder;\n    ProfilerRecorder systemUsedMemoryRecorder;\n\n    void OnEnable()\n    {\n        totalReservedMemoryRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Memory, "Total Reserved Memory");\n        gcReservedMemoryRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Memory, "GC Reserved Memory");\n        systemUsedMemoryRecorder = ProfilerRecorder.StartNew(ProfilerCategory.Memory, "System Used Memory");\n    }\n\n    void OnDisable()\n    {\n        totalReservedMemoryRecorder.Dispose();\n        gcReservedMemoryRecorder.Dispose();\n        systemUsedMemoryRecorder.Dispose();\n    }\n\n    void Update()\n    {\n        var sb = new StringBuilder(500);\n        if (totalReservedMemoryRecorder.Valid)\n            sb.AppendLine($"Total Reserved Memory: {totalReservedMemoryRecorder.LastValue}");\n        if (gcReservedMemoryRecorder.Valid)\n            sb.AppendLine($"GC Reserved Memory: {gcReservedMemoryRecorder.LastValue}");\n        if (systemUsedMemoryRecorder.Valid)\n            sb.AppendLine($"System Used Memory: {systemUsedMemoryRecorder.LastValue}");\n        statsText = sb.ToString();\n    }\n\n    void OnGUI()\n    {\n        GUI.TextArea(new Rect(10, 30, 250, 50), statsText);\n    }\n}\n')),(0,o.kt)("p",null,"\u4ee5\u4e0b\u5c4f\u5e55\u622a\u56fe\u663e\u793a\u4e86\u5c06\u811a\u672c\u6dfb\u52a0\u5230 ",(0,o.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/essentials/tutorial-projects/tanks-tutorial-46209"},"Tanks! \u6559\u7a0b\u9879\u76ee"),"\u7684\u7ed3\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/profiler-tanks-memory-overlay.png",alt:"\u9644\u5e26\u5185\u5b58\u4fe1\u606f\u7684 Tanks! \u6559\u7a0b"})),(0,o.kt)("p",null,"\u9644\u5e26\u5185\u5b58\u4fe1\u606f\u7684 Tanks! \u6559\u7a0b"),(0,o.kt)("p",null,"This information is available in Release Players, as are the other high level counters in the table above. If you want to see the selected memory counters in a custom module in the Profiler window, use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/profiler-creating-custom-modules/profiler-module-editor"},"Module Editor")," to configure the chart."),(0,o.kt)("h3",{id:"detailed-\u89c6\u56fe"},"Detailed \u89c6\u56fe"),(0,o.kt)("p",null,"The Detailed view provides a snapshot of your application\u2019s current state. Select the  ",(0,o.kt)("strong",{parentName:"p"},"Take Sample"),"  button to capture detailed memory usage for the current target. It takes the Profiler time to get this data, so the Detailed view doesn\u2019t give you real-time details. After the Profiler takes a sample, the Profiler window displays a list view where you can explore your application\u2019s memory usage in more detail."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/profiler-memory-detailed-view.png",alt:"Memory \u6a21\u5757 Detailed \u89c6\u56fe"})),(0,o.kt)("p",null,"Memory \u6a21\u5757 Detailed \u89c6\u56fe"),(0,o.kt)("p",null,"Enable the  ",(0,o.kt)("strong",{parentName:"p"},"Gather Object References"),"  setting at the top of the module details pane to collect information about what\u2019s referencing an object at the time of the snapshot. The Profiler displays this information in the right-hand pane of the window."),(0,o.kt)("p",null,"\u5217\u8868\u89c6\u56fe\u5c06\u4f7f\u7528\u5185\u5b58\u7684\u5bf9\u8c61\u5c06\u5206\u4e3a\u4ee5\u4e0b\u7c7b\u522b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other\uff1a")," \u8d44\u6e90\u3001\u6e38\u620f\u5bf9\u8c61\u6216\u7ec4\u4ef6\u4ee5\u5916\u7684\u5bf9\u8c61\u3002\u5176\u4e2d\u5305\u62ec\u8bf8\u5982 Unity \u7528\u4e8e\u4e0d\u540c\u7cfb\u7edf\u7684\u5185\u5b58\u4e4b\u7c7b\u7684\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Not Saved:"),"  Objects marked as ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/HideFlags.html"},"DontSave")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Builtin Resources:"),"  Unity Editor resources or Unity default resources, such as Shaders you have added to the ",(0,o.kt)("a",{parentName:"li",href:"/docs/comp-manager-group/class-graphics-settings#always-included-shaders"},"Always Included Shaders")," list of the Graphics settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Assets\uff1a")," \u4ece\u7528\u6237\u6216\u539f\u751f\u4ee3\u7801\u5f15\u7528\u7684\u8d44\u6e90\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scene Memory:"),"  Objects and attached components.")),(0,o.kt)("p",null,"When you click on a GameObject in the Assets or Scene Memory list, Unity highlights it in the Project or Scene view."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  In the Other category, memory reported under ",(0,o.kt)("inlineCode",{parentName:"p"},"System.ExecutableAndDlls")," is read-only memory. The operating system might discard these pages as needed and later reload them from the file system. This generates lower memory usage, and doesn\u2019t directly contribute to the operating system\u2019s decision to close your application if it uses too much memory. Some of these pages might also be shared with other applications that are using the same frameworks."))}c.isMDXComponent=!0}}]);