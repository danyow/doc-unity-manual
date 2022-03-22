"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75877],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),h=a,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||n;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},26419:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=i(87462),a=i(63366),n=(i(67294),i(3905)),o=["components"],l={id:"android-thread-configuration",title:"Android thread configuration",slug:"/android-developing/android-thread-configuration"},d="Android thread configuration",s={unversionedId:"platform-specific/android/android-developing/android-thread-configuration",id:"platform-specific/android/android-developing/android-thread-configuration",title:"Android thread configuration",description:"Unity configures thread affinity and thread priority based on the CPU topology of the device. Unity\u2019s default thread configuration works well for most projects, but in some situations, you might want to change the thread configuration (for example, if you want to optimize for specific devices, or if your application aims for low power consumption and doesn\u2019t require high frame rates).",source:"@site/docs/platform-specific/android/android-developing/android-thread-configuration.md",sourceDirName:"platform-specific/android/android-developing",slug:"/android-developing/android-thread-configuration",permalink:"/docs/android-developing/android-thread-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-developing/android-thread-configuration.md",tags:[],version:"current",frontMatter:{id:"android-thread-configuration",title:"Android thread configuration",slug:"/android-developing/android-thread-configuration"},sidebar:"tutorialSidebar",previous:{title:"Unity Remote",permalink:"/docs/android-testing-and-debugging/unity-remote5"},next:{title:"Deep linking on Android",permalink:"/docs/android-developing/deep-linking-android"}},c={},p=[{value:"Thread affinity",id:"thread-affinity",level:2},{value:"Identifying CPU cores",id:"identifying-cpu-cores",level:3},{value:"Thread affinity aliases",id:"thread-affinity-aliases",level:3},{value:"Thread priority",id:"thread-priority",level:2},{value:"Configurable Unity threads",id:"configurable-unity-threads",level:2},{value:"Unity main thread",id:"unity-main-thread",level:3},{value:"Unity JobWorker threads",id:"unity-jobworker-threads",level:3},{value:"Unity render thread",id:"unity-render-thread",level:3}],u={toc:p};function h(e){var t=e.components,i=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"android-thread-configuration"},"Android thread configuration"),(0,n.kt)("p",null,"Unity configures ",(0,n.kt)("a",{parentName:"p",href:"#thread-affinity"},"thread affinity")," and ",(0,n.kt)("a",{parentName:"p",href:"#thread-priority"},"thread priority")," based on the CPU topology of the device. Unity\u2019s default thread configuration works well for most projects, but in some situations, you might want to change the thread configuration (for example, if you want to optimize for specific devices, or if your application aims for low power consumption and doesn\u2019t require high frame rates)."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Important")," : Use Unity\u2019s default settings when possible. If you change the thread configuration to optimize for specific devices, any changes you make can have a negative performance impact on other devices or even the same devices in future operating system versions."),(0,n.kt)("h2",{id:"thread-affinity"},"Thread affinity"),(0,n.kt)("p",null,"The affinity of a thread controls which CPU cores the thread should run on. For Android devices, cores usually fit into two categories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Big: Powerful cores that are battery power-intensive.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Little: Slower cores that are less battery power-intensive than big cores."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Important")," : For typical applications that target a variety of Android devices, don\u2019t bind threads to specific cores."))),(0,n.kt)("h3",{id:"identifying-cpu-cores"},"Identifying CPU cores"),(0,n.kt)("p",null,"Unity usually receives the capacity and big/little assignment for every CPU core from the device\u2019s operating system. For older operating system versions, this information isn\u2019t always available. In this case, Unity calculates the capacity of the CPU cores and uses that information to assign each core as either big or little. To assign a core, Unity compares the CPU capacity of each core to a threshold. By default, a core is big if it has at least double the CPU capacity of the slowest core, and is little otherwise."),(0,n.kt)("p",null,"For more control over which cores Unity assigns as big or little, you can provide a custom threshold. To provide a custom threshold, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-platform-android-cpucapacity-threshold [value]")," command-line argument with a value between 0 and 1024 where 0 represents the lowest capacity core and 1024 represents the highest capacity core. For example, a value of ",(0,n.kt)("inlineCode",{parentName:"p"},"870"),", which is approximately 85% of 1024, means that a core is big if its CPU capacity is in the top 15% of those on the chip. For information on how to add start-up command-line arguments to Unity on Android devices, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/plugins-for-android/android-unity-player-activity#%E4%BB%8E%E8%87%AA%E5%AE%9A%E4%B9%89-unity-player-activity-%E6%96%87%E4%BB%B6%E6%8C%87%E5%AE%9A-unity-%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0"},"Specifying Unity startup arguments from a custom UnityPlayerActivity file"),"."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Note")," : Unity always categorizes a core as either big or little. For some complex CPU topologies (for example, those that have medium cores), Unity still categorizes its cores as either big or little."),(0,n.kt)("h3",{id:"thread-affinity-aliases"},"Thread affinity aliases"),(0,n.kt)("p",null,"Unity provides the following aliases that you can use as the thread affinity value:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"any"),": Allows the thread to run on any core."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"little"),": Allows the thread to run on any little core."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"big"),": Allows the thread to run on any big core.")),(0,n.kt)("p",null,"You can also use hexadecimal and binary values to specify thread affinity. In binary, the index of the bit references a specific CPU core. Typically, little cores start at index 0 and big cores come directly after them."),(0,n.kt)("p",null,"For example, if the CPU contains four little cores and four big cores:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The binary value ",(0,n.kt)("inlineCode",{parentName:"li"},"0b11110000")," and hexadecimal value ",(0,n.kt)("inlineCode",{parentName:"li"},"0xf0")," allow the thread to run on big cores."),(0,n.kt)("li",{parentName:"ul"},"The binary value ",(0,n.kt)("inlineCode",{parentName:"li"},"0b1111")," and hexadecimal value ",(0,n.kt)("inlineCode",{parentName:"li"},"0xf")," allow the thread to run on little cores.")),(0,n.kt)("h2",{id:"thread-priority"},"Thread priority"),(0,n.kt)("p",null,"The priority of a thread controls how the device\u2019s operating system allocates CPU time to the thread. The operating system allocates more CPU time to threads with a higher priority relative to threads with a lower priority."),(0,n.kt)("p",null,"The thread priority values you can use in Unity are in the range of \u201320 to 19, where \u201320 indicates the highest priority and 19 indicates the lowest priority."),(0,n.kt)("h2",{id:"configurable-unity-threads"},"Configurable Unity threads"),(0,n.kt)("p",null,"This section contains information about the Unity threads you can configure, and which command-line arguments you use to configure them."),(0,n.kt)("p",null,"For information on how to add startup command-line arguments to Unity on Android devices, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/plugins-for-android/android-unity-player-activity#%E4%BB%8E%E8%87%AA%E5%AE%9A%E4%B9%89-unity-player-activity-%E6%96%87%E4%BB%B6%E6%8C%87%E5%AE%9A-unity-%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0"},"Specifying Unity startup arguments from a custom UnityPlayerActivity file"),"."),(0,n.kt)("h3",{id:"unity-main-thread"},"Unity main thread"),(0,n.kt)("p",null,"Unity\u2019s main thread executes all scripts and usually has a high CPU load. The command-line arguments that affect this thread are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-platform-android-unitymain-priority [value]")," where ",(0,n.kt)("inlineCode",{parentName:"li"},"[value]")," is the ",(0,n.kt)("a",{parentName:"li",href:"#thread-priority"},"priority")," of the thread."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-platform-android-unitymain-affinity [value]")," where ",(0,n.kt)("inlineCode",{parentName:"li"},"[value]")," is the ",(0,n.kt)("a",{parentName:"li",href:"#thread-affinity"},"affinity")," of the thread.")),(0,n.kt)("h3",{id:"unity-jobworker-threads"},"Unity JobWorker threads"),(0,n.kt)("p",null,"Unity\u2019s worker threads execute jobs from both the core engine and those your application dispatches via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/job-system"},"C# Job System"),". The command-line arguments that affect these threads are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-platform-android-jobworker-priority [value]")," where ",(0,n.kt)("inlineCode",{parentName:"li"},"[value]")," is the ",(0,n.kt)("a",{parentName:"li",href:"#thread-priority"},"priority")," of the threads."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-platform-android-jobworker-affinity [value] [value1 value2 value3]")," where ",(0,n.kt)("inlineCode",{parentName:"li"},"[value]")," is the ",(0,n.kt)("a",{parentName:"li",href:"#thread-affinity"},"affinity")," of the thread and ",(0,n.kt)("inlineCode",{parentName:"li"},"[value1 value2 value3]")," are optional values you can use to specify the affinity of worker threads per thread. If you only set a single value, Unity uses the same value for all worker threads. You can use \u2019-job-worker-count\u2019 to specify the number of worker threads.")),(0,n.kt)("h3",{id:"unity-render-thread"},"Unity render thread"),(0,n.kt)("p",null,"Unity\u2019s render thread interacts with the Graphics API if your project uses ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.RenderingThreadingMode.MultiThreaded.html"},"multithreaded rendering"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"-platform-android-gfxdeviceworker-priority [value]")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"[value]")," is the ",(0,n.kt)("a",{parentName:"p",href:"#thread-priority"},"priority")," of the thread.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"-platform-android-gfxdeviceworker-affinity [value]")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"[value]")," is the ",(0,n.kt)("a",{parentName:"p",href:"#thread-affinity"},"affinity")," of the thread."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Note")," : If you use GraphicsJobs, JobWorker threads also interact with the Graphics API."))))}h.isMDXComponent=!0}}]);