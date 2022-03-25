"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20210],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],l={id:"WindowsDebugging",title:"\ufeffWindows \u8c03\u8bd5",slug:"/windows/windows-debugging"},s="Windows \u8c03\u8bd5",d={unversionedId:"platform-specific/windows/WindowsDebugging",id:"platform-specific/windows/WindowsDebugging",title:"\ufeffWindows \u8c03\u8bd5",description:"Unity provides several options for debugging on Windows for forensic or live debugging of game and editor processes.",source:"@site/docs/platform-specific/windows/windows-debugging.md",sourceDirName:"platform-specific/windows",slug:"/windows/windows-debugging",permalink:"/doc-unity-manual/docs/windows/windows-debugging",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/windows/windows-debugging.md",tags:[],version:"current",frontMatter:{id:"WindowsDebugging",title:"\ufeffWindows \u8c03\u8bd5",slug:"/windows/windows-debugging"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a Windows \u72ec\u7acb\u5e73\u53f0\u7684 Visual Studio \u9879\u76ee\u751f\u6210",permalink:"/doc-unity-manual/docs/windows/visual-studioprojectgeneration-windows"},next:{title:"Windows \u4f4e\u5b8c\u6574\u6027",permalink:"/doc-unity-manual/docs/windows/windows-low-integrity"}},u={},p=[{value:"\u672c\u673a\u4e0e\u6258\u7ba1\u8c03\u8bd5",id:"\u672c\u673a\u4e0e\u6258\u7ba1\u8c03\u8bd5",level:3},{value:"\u672c\u673a\u8c03\u8bd5",id:"\u672c\u673a\u8c03\u8bd5",level:4},{value:"\u6258\u7ba1\u8c03\u8bd5",id:"\u6258\u7ba1\u8c03\u8bd5",level:4},{value:"\u7b26\u53f7",id:"\u7b26\u53f7",level:3},{value:"WinDbg Setup",id:"windbg-setup",level:4},{value:"Visual Studio \u8bbe\u7f6e",id:"visual-studio-\u8bbe\u7f6e",level:4},{value:"\u5b9e\u65f6\u8c03\u8bd5",id:"\u5b9e\u65f6\u8c03\u8bd5",level:3},{value:"\u8bbe\u7f6e\u81ea\u52a8\u5f02\u5e38\u8c03\u8bd5",id:"\u8bbe\u7f6e\u81ea\u52a8\u5f02\u5e38\u8c03\u8bd5",level:4},{value:"\u4e8b\u540e\u5206\u6790/\u53d6\u8bc1\u8c03\u8bd5",id:"\u4e8b\u540e\u5206\u6790\u53d6\u8bc1\u8c03\u8bd5",level:3},{value:"\u8c03\u8bd5\u63d0\u793a\u548c\u6280\u5de7",id:"\u8c03\u8bd5\u63d0\u793a\u548c\u6280\u5de7",level:3},{value:"\u5728\u672c\u673a\u6258\u7ba1\u7684\u5f02\u5e38",id:"\u5728\u672c\u673a\u6258\u7ba1\u7684\u5f02\u5e38",level:4},{value:"\u67e5\u770b\u6258\u7ba1\u5806\u6808\u5e27",id:"\u67e5\u770b\u6258\u7ba1\u5806\u6808\u5e27",level:4},{value:"\u5f3a\u5236\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u8f6c\u50a8",id:"\u5f3a\u5236\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u8f6c\u50a8",level:4}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows-\u8c03\u8bd5"},"Windows \u8c03\u8bd5"),(0,a.kt)("p",null,"Unity provides several options for debugging on Windows for forensic or live debugging of game and editor processes."),(0,a.kt)("h3",{id:"\u672c\u673a\u4e0e\u6258\u7ba1\u8c03\u8bd5"},"\u672c\u673a\u4e0e\u6258\u7ba1\u8c03\u8bd5"),(0,a.kt)("p",null,"Unity allows two types of debugging: the native C++ debugging and the C# managed debugging."),(0,a.kt)("h4",{id:"\u672c\u673a\u8c03\u8bd5"},"\u672c\u673a\u8c03\u8bd5"),(0,a.kt)("p",null,"Native Debugging stores symbols in pdb files for the associated binary files, such as exe and dll."),(0,a.kt)("h4",{id:"\u6258\u7ba1\u8c03\u8bd5"},"\u6258\u7ba1\u8c03\u8bd5"),(0,a.kt)("p",null,"On Windows, the standard .NET managed symbols are stored in pdb files."),(0,a.kt)("h3",{id:"\u7b26\u53f7"},"\u7b26\u53f7"),(0,a.kt)("p",null,"Unity provides a symbol store at ",(0,a.kt)("a",{parentName:"p",href:"http://symbolserver.unity3d.com/"},"http://symbolserver.unity3d.com/"),". Much like the Microsoft\u2019s symbol store, you can use the Unity server URL in Windows Debugger (WinDbg), or Visual Studio 2019 and later for automatic symbol resolution and downloading."),(0,a.kt)("h4",{id:"windbg-setup"},"WinDbg Setup"),(0,a.kt)("p",null,"To add a symbol store on WinDbg, use the .sympath command:"),(0,a.kt)("p",null,">"," ",(0,a.kt)("inlineCode",{parentName:"p"},".sympath+ SRV*c:\\symbols-cache*http://symbolserver.unity3d.com/")),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,a.kt)("p",null,">"," ",(0,a.kt)("inlineCode",{parentName:"p"},".sympath+"),(0,a.kt)("br",null)," The + addition, leaves the existing symbol path alone, and appends this symbol store lookup.\n",">","\n",">"," ",(0,a.kt)("inlineCode",{parentName:"p"},"SRV*c:\\symbols-cache"),(0,a.kt)("br",null)," The SRV indicates a remote server to fetch from, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"c:\\symbols")," is a local path to cache the downloaded symbols and to look there first before downloading again.\n",">","\n",">"," ",(0,a.kt)("inlineCode",{parentName:"p"},"*http://symbolserver.unity3d.com/"),(0,a.kt)("br",null)," The path to the symbol store to fetch from."),(0,a.kt)("h4",{id:"visual-studio-\u8bbe\u7f6e"},"Visual Studio \u8bbe\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to  ",(0,a.kt)("strong",{parentName:"li"},"Tools ",">"," Options")," ."),(0,a.kt)("li",{parentName:"ol"},"Expand the  ",(0,a.kt)("strong",{parentName:"li"},"Debugging"),"  section and then select  ",(0,a.kt)("strong",{parentName:"li"},"Symbols")," ."),(0,a.kt)("li",{parentName:"ol"},"Specify a cache directory if not already specified."),(0,a.kt)("li",{parentName:"ol"},"Add a  ",(0,a.kt)("strong",{parentName:"li"},"Symbol file (.pdb) location"),"  (",(0,a.kt)("a",{parentName:"li",href:"http://symbolserver.unity3d.com/"},"http://symbolserver.unity3d.com/"),").")),(0,a.kt)("h3",{id:"\u5b9e\u65f6\u8c03\u8bd5"},"\u5b9e\u65f6\u8c03\u8bd5"),(0,a.kt)("p",null,"Live Debugging is the scenario of attaching a debugger to a process that\u2019s running normal, or to a process where an exception has been caught. For the debugger to know what\u2019s going on, the symbols must be included in the build using the steps above. Additionally, the game executable is named according to your game name, so the debugger may have issues finding the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"pdb")," if it doesn\u2019t have access to the renamed executable."),(0,a.kt)("h4",{id:"\u8bbe\u7f6e\u81ea\u52a8\u5f02\u5e38\u8c03\u8bd5"},"\u8bbe\u7f6e\u81ea\u52a8\u5f02\u5e38\u8c03\u8bd5"),(0,a.kt)("p",null,"On Windows, Microsoft sets up automatically on application crashes to go to Dr Watson/Error Reporting to Microsoft. However, if you have Visual Studio or WinDbg installed, Microsoft provides an option to instead opt to ",(0,a.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/windows/desktop/bb204634(v=vs.85).aspx"},"debug the crashes"),".",(0,a.kt)("br",null)," For ease of installing, follow this registry file contents to install:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Windows Registry Editor Version 5.00\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AeDebug]\n"Auto"="1"\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows NT\\CurrentVersion\\AeDebug]\n "Auto"="1"\n')),(0,a.kt)("p",null,"Additional content for Editor debugging:"),(0,a.kt)("p",null,">"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Unity.exe -dbgbreak"),(0,a.kt)("br",null)," Will launch Unity and immediately offer a debugger to connect if the automatic crash handling is set up."),(0,a.kt)("h3",{id:"\u4e8b\u540e\u5206\u6790\u53d6\u8bc1\u8c03\u8bd5"},"\u4e8b\u540e\u5206\u6790/\u53d6\u8bc1\u8c03\u8bd5"),(0,a.kt)("p",null,"Windows provides facilities to investigate crash dump files (.dmp or .mdmp). Depending on the type of crash dump, you might either see stack information or the entire process memory. The contents of the dump file determine the cause of the crash, which typically has at least a stack to investigate (as long as it\u2019s a valid stack)."),(0,a.kt)("p",null,"To investigate a dump file, you can load it up via Visual Studio or WinDbg. While Visual Studio is a more friendly tool to use, it\u2019s slightly limited than WinDbg."),(0,a.kt)("h3",{id:"\u8c03\u8bd5\u63d0\u793a\u548c\u6280\u5de7"},"\u8c03\u8bd5\u63d0\u793a\u548c\u6280\u5de7"),(0,a.kt)("p",null,"When running Visual Studio, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/UnityMixedCallstack"},"UnityMixedCallstack")," extension for VS Code by Unity that makes debugging even easier."),(0,a.kt)("h4",{id:"\u5728\u672c\u673a\u6258\u7ba1\u7684\u5f02\u5e38"},"\u5728\u672c\u673a\u6258\u7ba1\u7684\u5f02\u5e38"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"NullReferenceException")," typically looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    1b45558c()  \n&gt;   mono-2.0-bdwgc.dll!malloc(unsigned int size=12)  Line 163 + 0x5f bytes  C  \n    mono-2.0-bdwgc.dll!g_hash_table_insert_replace(_GHashTable * hash=0x065c3960, void * key=0x0018cba4, void * value=0x0018cb8c, int replace=457528232)  Line 204 + 0x7 bytes  C  \n    mono-2.0-bdwgc.dll!mono_jit_runtime_invoke(_MonoMethod * method=0x242bf8b0, void * obj=0x065c3960, void  **params=0x0018cba4, MonoObject * * exc=0x0018cb8c)  Line 4889 + 0xc bytes C  \n")),(0,a.kt)("h4",{id:"\u67e5\u770b\u6258\u7ba1\u5806\u6808\u5e27"},"\u67e5\u770b\u6258\u7ba1\u5806\u6808\u5e27"),(0,a.kt)("p",null,"\u518d\u6b21\u91c7\u7528\u4e0a\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    1b45558c()  \n&gt;   mono-2.0-bdwgc.dll!malloc(unsigned int size=12)  Line 163 + 0x5f bytes  C  \n    mono-2.0-bdwgc.dll!g_hash_table_insert_replace(_GHashTable * hash=0x065c3960, void * key=0x0018cba4, void * value=0x0018cb8c, int replace=457528232)  Line 204 + 0x7 bytes  C  \n    mono-2.0-bdwgc.dll!mono_jit_runtime_invoke(_MonoMethod * method=0x242bf8b0, void * obj=0x065c3960, void**  params=0x0018cba4, MonoObject * * exc=0x0018cb8c)  Line 4889 + 0xc bytes C  \n")),(0,a.kt)("p",null,"The lines without any information are managed frames. There is, however, a way to get the managed stack information: mono has a builtin function called ",(0,a.kt)("inlineCode",{parentName:"p"},"mono_pmip"),", which accepts the address of a stack frame and returns a char","*"," with information. You can invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"mono_pmip")," in the Visual Studio immediate window:"),(0,a.kt)("p",null,">"," ",(0,a.kt)("inlineCode",{parentName:"p"},"?(char*){,,mono-2.0-bdwgc.dll}mono_pmip((void*)0x1b45558c)"),(0,a.kt)("br",null)," 0x26a296c0 \u201c Tiles:OnPostRender () + 0x1e4 (1B4553A8 1B4555DC) ","[","065C6BD0 - Unity Child Domain","]","\u201d","`"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"  This only works where ",(0,a.kt)("inlineCode",{parentName:"p"},"mono-2.0-bdwgc.dll")," symbols are loaded properly."),(0,a.kt)("h4",{id:"\u5f3a\u5236\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u8f6c\u50a8"},"\u5f3a\u5236\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u8f6c\u50a8"),(0,a.kt)("p",null,"Ocassionally, the application doesn\u2019t crash with the debugger attached, or an application crashes on a remote device where the debugger isn\u2019t available. However, you can still get useful information if you can get the dump file - follow the below steps to do so."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note:"),"  These instructions apply to both  ",(0,a.kt)("strong",{parentName:"p"},"Windows Standalone"),"  and  ",(0,a.kt)("strong",{parentName:"p"},"Universal Windows"),"  platforms when running on desktop."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the registry."),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting"),"."),(0,a.kt)("li",{parentName:"ol"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"LocalDumps")," folder if it\u2019s not there."),(0,a.kt)("li",{parentName:"ol"},"Add following keys:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"DumpFolder"=&lt;FolderPath goes here&gt; , e.g., C:\\Temp')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"DumpCount"=dword:00000010')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"DumpType"=dword:00000002')))),(0,a.kt)("li",{parentName:"ol"},"Launch the application via the Universal Windows Platform or Windows Standalone executable."),(0,a.kt)("li",{parentName:"ol"},"Reproduce the crash. The dump file is created in the folder you specified earlier. You can open the dump file with Visual Studio or WinDbg.")))}m.isMDXComponent=!0}}]);