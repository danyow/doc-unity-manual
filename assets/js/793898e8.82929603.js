"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21122],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=l,y=m["".concat(s,".").concat(b)]||m[b]||u[b]||n;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90168:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(87462),l=r(63366),n=(r(67294),r(3905)),o=["components"],i={id:"JobSystemParallelForJobs",title:"ParallelFor \u4f5c\u4e1a",slug:"/job-system/job-system-parallel-for-jobs"},s="ParallelFor \u4f5c\u4e1a",p={unversionedId:"scripting-section/job-system/JobSystemParallelForJobs",id:"scripting-section/job-system/JobSystemParallelForJobs",title:"ParallelFor \u4f5c\u4e1a",description:"\u5728\u8c03\u5ea6\u4f5c\u4e1a\u65f6\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u4f5c\u4e1a\u6b63\u5728\u6267\u884c\u4e00\u9879\u4efb\u52a1\u3002\u5728\u6e38\u620f\u4e2d\uff0c\u901a\u5e38\u5e0c\u671b\u5bf9\u5927\u91cf\u5bf9\u8c61\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\u3002\u6709\u4e00\u4e2a\u79f0\u4e3a IJobParallelFor \u7684\u5355\u72ec\u4f5c\u4e1a\u7c7b\u578b\u53ef\u4ee5\u5904\u7406\u6b64\u95ee\u9898\u3002",source:"@site/docs/scripting-section/job-system/job-system-parallel-for-jobs.md",sourceDirName:"scripting-section/job-system",slug:"/job-system/job-system-parallel-for-jobs",permalink:"/doc-unity-manual/docs/job-system/job-system-parallel-for-jobs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/job-system/job-system-parallel-for-jobs.md",tags:[],version:"current",frontMatter:{id:"JobSystemParallelForJobs",title:"ParallelFor \u4f5c\u4e1a",slug:"/job-system/job-system-parallel-for-jobs"},sidebar:"tutorialSidebar",previous:{title:"C# \u4f5c\u4e1a\u7cfb\u7edf\u6982\u8ff0",permalink:"/doc-unity-manual/docs/job-system/job-system-overview"},next:{title:"ParallelForTransform \u4f5c\u4e1a",permalink:"/doc-unity-manual/docs/job-system/job-system-parallel-for-transform-jobs"}},c={},u=[{value:"ParallelFor \u4f5c\u4e1a\u5b9a\u4e49\u793a\u4f8b\uff1a",id:"parallelfor-\u4f5c\u4e1a\u5b9a\u4e49\u793a\u4f8b",level:2},{value:"\u8c03\u5ea6 ParallelFor \u4f5c\u4e1a",id:"\u8c03\u5ea6-parallelfor-\u4f5c\u4e1a",level:2},{value:"\u8c03\u5ea6 ParallelFor \u4f5c\u4e1a\u7684\u793a\u4f8b",id:"\u8c03\u5ea6-parallelfor-\u4f5c\u4e1a\u7684\u793a\u4f8b",level:2}],m={toc:u};function b(e){var t=e.components,r=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parallelfor-\u4f5c\u4e1a"},"ParallelFor \u4f5c\u4e1a"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/job-system/job-system-scheduling-jobs"},"\u8c03\u5ea6\u4f5c\u4e1a"),"\u65f6\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u4f5c\u4e1a\u6b63\u5728\u6267\u884c\u4e00\u9879\u4efb\u52a1\u3002\u5728\u6e38\u620f\u4e2d\uff0c\u901a\u5e38\u5e0c\u671b\u5bf9\u5927\u91cf\u5bf9\u8c61\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\u3002\u6709\u4e00\u4e2a\u79f0\u4e3a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Jobs.IJobParallelFor.html"},"IJobParallelFor")," \u7684\u5355\u72ec\u4f5c\u4e1a\u7c7b\u578b\u53ef\u4ee5\u5904\u7406\u6b64\u95ee\u9898\u3002"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u201cParallelFor\u201d\u4f5c\u4e1a\u662f Unity \u4e2d\u5bf9\u4e8e\u4efb\u4f55\u5b9e\u73b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"IJobParallelFor")," \u63a5\u53e3\u7684\u7ed3\u6784\u7684\u7edf\u79f0\u3002"),(0,n.kt)("p",null,"ParallelFor \u4f5c\u4e1a\u4f7f\u7528\u4e00\u4e2a\u6570\u636e ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Collections.NativeArray_1.html"},"NativeArray")," \u4f5c\u4e3a\u5176\u6570\u636e\u6e90\u3002ParallelFor \u4f5c\u4e1a\u5728\u591a\u4e2a\u6838\u5fc3\u4e0a\u8fd0\u884c\u3002\u6bcf\u4e2a\u6838\u5fc3\u6709\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u6bcf\u4e2a\u4f5c\u4e1a\u5904\u7406\u4e00\u90e8\u5206\u5de5\u4f5c\u91cf\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"IJobParallelFor")," \u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"IJob"),"\uff0c\u4f46\u5176\u5e76\u975e\u8c03\u7528\u5355\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Unity.Jobs.IJob.Execute.html"},"Execute")," \u65b9\u6cd5\uff0c\u800c\u662f\u5bf9\u6570\u636e\u6e90\u4e2d\u7684\u6bcf\u4e00\u9879\u90fd\u8c03\u7528\u4e00\u6b21 ",(0,n.kt)("inlineCode",{parentName:"p"},"Execute")," \u65b9\u6cd5\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"Execute")," \u65b9\u6cd5\u4e2d\u6709\u4e00\u4e2a\u6574\u6570\u53c2\u6570\u3002\u8be5\u7d22\u5f15\u7528\u4e8e\u8bbf\u95ee\u548c\u64cd\u4f5c\u4f5c\u4e1a\u5b9e\u73b0\u4e2d\u7684\u6570\u636e\u6e90\u7684\u5355\u4e2a\u5143\u7d20\u3002"),(0,n.kt)("h2",{id:"parallelfor-\u4f5c\u4e1a\u5b9a\u4e49\u793a\u4f8b"},"ParallelFor \u4f5c\u4e1a\u5b9a\u4e49\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"struct IncrementByDeltaTimeJob: IJobParallelFor\n{\n    public NativeArray&lt;float&gt; values;\n    public float deltaTime;\n\n    public void Execute (int index)\n    {\n        float temp = values[index];\n        temp += deltaTime;\n        values[index] = temp;\n    }\n}\n")),(0,n.kt)("h2",{id:"\u8c03\u5ea6-parallelfor-\u4f5c\u4e1a"},"\u8c03\u5ea6 ParallelFor \u4f5c\u4e1a"),(0,n.kt)("p",null,"\u5728\u8c03\u5ea6 ParallelFor \u4f5c\u4e1a\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a\u8981\u62c6\u5206\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeArray")," \u6570\u636e\u6e90\u7684\u957f\u5ea6\u3002\u5982\u679c\u7ed3\u6784\u4e2d\u6709\u591a\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeArray"),"\uff0cUnity C# \u4f5c\u4e1a\u7cfb\u7edf\u65e0\u6cd5\u77e5\u9053\u60a8\u5e0c\u671b\u5c06\u54ea\u4e2a\u7528\u4f5c\u6570\u636e\u6e90\u3002\u957f\u5ea6\u8fd8\u544a\u8bc9 C# \u4f5c\u4e1a\u7cfb\u7edf\u5e94\u8be5\u6709\u591a\u5c11\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"Execute")," \u65b9\u6cd5\u3002"),(0,n.kt)("p",null,"\u5728\u540e\u53f0\uff0cParallelFor \u4f5c\u4e1a\u7684\u8c03\u5ea6\u66f4\u52a0\u590d\u6742\u3002\u5728\u8c03\u5ea6 ParallelFor \u4f5c\u4e1a\u65f6\uff0cC# \u4f5c\u4e1a\u7cfb\u7edf\u5c06\u5de5\u4f5c\u5206\u6210\u591a\u4e2a\u6279\u6b21\u4ee5\u4fbf\u5728\u591a\u4e2a\u6838\u5fc3\u4e4b\u95f4\u5206\u914d\u4efb\u52a1\u3002\u6bcf\u4e2a\u6279\u6b21\u5305\u542b\u4e00\u5c0f\u90e8\u5206 ",(0,n.kt)("inlineCode",{parentName:"p"},"Execute")," \u65b9\u6cd5\u3002\u7136\u540e\uff0c\u9488\u5bf9\u6bcf\u4e2a CPU \u6838\u5fc3\uff0cC# \u4f5c\u4e1a\u7cfb\u7edf\u4f1a\u5728 Unity \u672c\u673a\u4f5c\u4e1a\u7cfb\u7edf\u4e2d\u8c03\u5ea6\u6700\u591a\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u5e76\u5411\u8be5\u672c\u673a\u4f5c\u4e1a\u4f20\u9012\u4e00\u4e9b\u9700\u8981\u5b8c\u6210\u7684\u6279\u6b21\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/jobsystem_parallelfor_job_batches.svg",alt:"\u4e00\u4e2a ParallelFor \u4f5c\u4e1a\u5728\u591a\u4e2a\u6838\u5fc3\u4e4b\u95f4\u5212\u5206\u6279\u6b21"})),(0,n.kt)("p",null,"\u4e00\u4e2a ParallelFor \u4f5c\u4e1a\u5728\u591a\u4e2a\u6838\u5fc3\u4e4b\u95f4\u5212\u5206\u6279\u6b21"),(0,n.kt)("p",null,"\u4e00\u4e2a\u672c\u673a\u4f5c\u4e1a\u5728\u5176\u4ed6\u4f5c\u4e1a\u4e4b\u524d\u5b8c\u6210\u81ea\u5df1\u8d1f\u8d23\u7684\u6279\u6b21\u65f6\uff0c\u5b83\u4f1a\u4ece\u5176\u4ed6\u672c\u673a\u4f5c\u4e1a",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Work_stealing"},"\u7a83\u53d6"),"\u5269\u4f59\u6279\u6b21\u3002\u5b83\u4e00\u6b21\u53ea\u80fd\u7a83\u53d6\u672c\u673a\u4f5c\u4e1a\u5269\u4f59\u6279\u6b21\u7684\u4e00\u534a\uff0c\u4ee5\u786e\u4fdd",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/12065774/why-does-cache-locality-matter-for-array-performance"},"\u7f13\u5b58\u5c40\u90e8\u6027"),"\u3002"),(0,n.kt)("p",null,"\u8981\u4f18\u5316\u8be5\u8fc7\u7a0b\uff0c\u5fc5\u987b\u6307\u5b9a\u6279\u6b21\u8ba1\u6570\u3002\u6279\u6b21\u8ba1\u6570\u53ef\u4ee5\u63a7\u5236\u60a8\u83b7\u5f97\u7684\u4f5c\u4e1a\u6570\u91cf\uff0c\u4ee5\u53ca\u7ebf\u7a0b\u4e4b\u95f4\u91cd\u65b0\u5206\u914d\u5de5\u4f5c\u7684\u7ec6\u5316\u7a0b\u5ea6\u3002\u6279\u6b21\u8ba1\u6570\u8f83\u4f4e\uff08\u4f8b\u5982 1\uff09\u53ef\u4ee5\u4f7f\u7ebf\u7a0b\u4e4b\u95f4\u7684\u5de5\u4f5c\u5206\u5e03\u66f4\u5747\u5300\u3002\u8fd9\u6837\u786e\u5b9e\u4f1a\u5e26\u6765\u4e00\u4e9b\u5f00\u9500\uff0c\u6240\u4ee5\u6709\u65f6\u5019\u589e\u52a0\u6279\u6b21\u8ba1\u6570\u4f1a\u66f4\u597d\u3002\u4e00\u79cd\u6709\u6548\u7684\u7b56\u7565\u662f\u4ece 1 \u5f00\u59cb\u5e76\u589e\u52a0\u6279\u6b21\u8ba1\u6570\u76f4\u5230\u6027\u80fd\u589e\u76ca\u53ef\u5ffd\u7565\u4e0d\u8ba1\u3002"),(0,n.kt)("h2",{id:"\u8c03\u5ea6-parallelfor-\u4f5c\u4e1a\u7684\u793a\u4f8b"},"\u8c03\u5ea6 ParallelFor \u4f5c\u4e1a\u7684\u793a\u4f8b"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u4e1a\u4ee3\u7801")," \uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// \u5c06\u4e24\u4e2a\u6d6e\u70b9\u503c\u76f8\u52a0\u7684\u4f5c\u4e1a\npublic struct MyParallelJob : IJobParallelFor\n{\n    [ReadOnly]\n    public NativeArray&lt;float&gt; a;\n    [ReadOnly]\n    public NativeArray&lt;float&gt; b;\n    public NativeArray&lt;float&gt; result;\n\n    public void Execute(int i)\n    {\n        result[i] = a[i] + b[i];\n    }\n}\n")),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Control thread code")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NativeArray&lt;float&gt; a = new NativeArray&lt;float&gt;(2, Allocator.TempJob);\n\nNativeArray&lt;float&gt; b = new NativeArray&lt;float&gt;(2, Allocator.TempJob);\n\nNativeArray&lt;float&gt; result = new NativeArray&lt;float&gt;(2, Allocator.TempJob);\n\na[0] = 1.1;\nb[0] = 2.2;\na[1] = 3.3;\nb[1] = 4.4;\n\nMyParallelJob jobData = new MyParallelJob();\njobData.a = a;  \njobData.b = b;\njobData.result = result;\n\n// \u8c03\u5ea6\u4f5c\u4e1a\uff0c\u4e3a\u7ed3\u679c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u7d22\u5f15\u6267\u884c\u4e00\u4e2a Execute \u65b9\u6cd5\uff0c\u4e14\u6bcf\u4e2a\u5904\u7406\u6279\u6b21\u53ea\u5904\u7406\u4e00\u9879\nJobHandle handle = jobData.Schedule(result.Length, 1);\n\n// \u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\nhandle.Complete();\n\n// \u91ca\u653e\u6570\u7ec4\u5206\u914d\u7684\u5185\u5b58\na.Dispose();\nb.Dispose();\nresult.Dispose();\n")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2018\u201306\u201315 \u9875\u9762\u5df2\u53d1\u5e03"),(0,n.kt)("li",{parentName:"ul"},"\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.1/Documentation/Manual/30_search.html?q=newin20181"},"2018.1")," \u7248\u4e2d\u516c\u5f00\u4e86 C# \u4f5c\u4e1a\u7cfb\u7edf NewIn20181")))}b.isMDXComponent=!0}}]);