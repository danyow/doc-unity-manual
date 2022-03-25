"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90392],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),s=o,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||n;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16432:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],p={id:"XcodeFrameDebuggerIntegration",title:"Xcode frame debugger Unity integration",slug:"/platform-specific/xcode-frame-debugger-integration"},c="Xcode frame debugger Unity integration",l={unversionedId:"platform-specific/XcodeFrameDebuggerIntegration",id:"platform-specific/XcodeFrameDebuggerIntegration",title:"Xcode frame debugger Unity integration",description:"The Xcode frame debugger tool lets you capture a frame of your application to see the commands that the GPU performed during that frame, examine data in GPU memory, and identify bottlenecks in your shaders. This lets you analyze GPU performance in fine detail.",source:"@site/docs/platform-specific/xcode-frame-debugger-integration.md",sourceDirName:"platform-specific",slug:"/platform-specific/xcode-frame-debugger-integration",permalink:"/doc-unity-manual/docs/platform-specific/xcode-frame-debugger-integration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/xcode-frame-debugger-integration.md",tags:[],version:"current",frontMatter:{id:"XcodeFrameDebuggerIntegration",title:"Xcode frame debugger Unity integration",slug:"/platform-specific/xcode-frame-debugger-integration"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528 Windows \u5e73\u53f0\uff1aC# \u811a\u672c\u4e2d\u7684 WinRT API",permalink:"/doc-unity-manual/docs/windows-store/windowsstore-scripts"},next:{title:"\u811a\u672c",permalink:"/doc-unity-manual/docs/scripting-section"}},u={},m=[{value:"\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27",id:"\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27",level:2},{value:"\u4f7f\u7528 Xcode \u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27",id:"\u4f7f\u7528-xcode-\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27",level:3},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27",level:3},{value:"\u4ece Unity \u7f16\u8f91\u5668\u6355\u83b7\u5e27",id:"\u4ece-unity-\u7f16\u8f91\u5668\u6355\u83b7\u5e27",level:2},{value:"\u4f7f\u7528 Xcode \u4ece Unity \u7f16\u8f91\u5668\u6355\u83b7\u5e27",id:"\u4f7f\u7528-xcode-\u4ece-unity-\u7f16\u8f91\u5668\u6355\u83b7\u5e27",level:3},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece Unity \u7f16\u8f91\u5668\u6355\u83b7\u5e27",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece-unity-\u7f16\u8f91\u5668\u6355\u83b7\u5e27",level:3}],d={toc:m};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xcode-frame-debugger-unity-integration"},"Xcode frame debugger Unity integration"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"Xcode")," ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools"},"frame debugger tool")," lets you capture a frame of your application to see the commands that the GPU performed during that frame, examine data in GPU memory, and identify bottlenecks in your shaders. This lets you analyze GPU performance in fine detail."),(0,n.kt)("p",null,"Unity integrates with the Xcode frame debugger in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On macOS, iOS, and tvOS, you can use Xcode frame debugger to analyze frames from your application while it\u2019s running on the target device."),(0,n.kt)("li",{parentName:"ul"},"\u5728 macOS \u4e0a\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Xcode \u5e27\u8c03\u8bd5\u5668\u4ece Unity \u7f16\u8f91\u5668\u5206\u6790\u5e27\u3002")),(0,n.kt)("p",null,"Frame debugging only works if the application is running on a platform and graphics API that Xcode supports. Xcode only supports macOS with Metal graphics. If Unity uses another API, the Xcode integration is disabled until you select a supported graphics API."),(0,n.kt)("h2",{id:"\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27"},"\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27"),(0,n.kt)("p",null,"To use the Xcode frame debugger to capture a frame from do one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Launch your application from Xcode and either use the Xcode UI or the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.html"},"FrameCapture")," API to request frame captures. You can analyze the frame captures in Xcode immediately, or save them to disk. This workflow is supported on all platforms that use Metal."),(0,n.kt)("li",{parentName:"ul"},"Launch your application directly from the command line without an Xcode project, and use the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.html"},"FrameCapture")," API to save frame captures to disk.  ",(0,n.kt)("strong",{parentName:"li"},"Note:"),"  This workflow isn\u2019t supported on iOS.")),(0,n.kt)("h3",{id:"\u4f7f\u7528-xcode-\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27"},"\u4f7f\u7528 Xcode \u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27"),(0,n.kt)("p",null,"This section describes how to launch your application and perform a frame capture using the Xcode UI or the FrameCapture API. This workflow is supported on all platforms that use Metal."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"1","."," Create an Xcode project.")," "),(0,n.kt)("p",null,"You can either create an Xcode project from the Unity Editor, or use any other Xcode project to launch macOS applications."),(0,n.kt)("p",null,"To build an Xcode project from the Unity Editor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the Build Settings window ( ",(0,n.kt)("strong",{parentName:"li"},"File ",">"," Build Settings")," )."),(0,n.kt)("li",{parentName:"ol"},"macOS only: Enable  ",(0,n.kt)("strong",{parentName:"li"},"Create Xcode Project")," ."),(0,n.kt)("li",{parentName:"ol"},"Click Build.")),(0,n.kt)("p",null,"To use another Xcode project to launch macOS applications:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Xcode, create a new, empty macOS project, or open an existing macOS project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Product ",">"," Scheme ",">"," Edit scheme, and open the Info tab. 3.\u5c06  ",(0,n.kt)("strong",{parentName:"p"},"Executable"),"  \u8bbe\u7f6e\u4e3a\u6784\u5efa\u7684 Unity \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"2","."," Edit the Xcode project scheme so that you can perform frame captures.")," "))),(0,n.kt)("p",null,"Either, use the Xcode GUI. To do this, follow the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools/enabling_frame_capture"},"Enabling Frame Capture guide")," in the Xcode documentation to set your project scheme\u2019s GPU  ",(0,n.kt)("strong",{parentName:"p"},"Frame Capture"),"  setting to Metal."),(0,n.kt)("p",null,"You can also use the XcScheme API to configure an Xcode project scheme, which is useful for automated builds. For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/iOS.Xcode.XcScheme.html"},"XcScheme API documentation"),"."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"3","."," Launch your project from Xcode, and perform a frame capture.")," "),(0,n.kt)("p",null,"In Xcode, press the Frame Capture button (camera icon) to capture the next frame of data."),(0,n.kt)("p",null,"You can also use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.html"},"FrameCapture")," API to perform a frame capture from a script. For information on analyzing frame capture data in Xcode, see the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools"},"Xcode frame debugger documentation"),"."),(0,n.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27"},"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece\u5e94\u7528\u7a0b\u5e8f\u6355\u83b7\u5e27"),(0,n.kt)("p",null,"This section describes how to launch your application from the command line, perform a frame capture using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.html"},"FrameCapture")," API, and save the results to disk.  ",(0,n.kt)("strong",{parentName:"p"},"Important:"),"  This workflow isn\u2019t supported on iOS. To perform frame captures on iOS, you must always launch your application from Xcode."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add calls to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.BeginCaptureToFile.html"},"FrameCapture.BeginCaptureToFile")," and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.EndCapture.html"},"EndCapture")," to your code, so that you can perform frame captures as required."),(0,n.kt)("li",{parentName:"ol"},"Launch your application from the command line, with the following flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-enable-metal-capture.")," Xcode performs frame captures when your code requests them, and saves the results to disk.")),(0,n.kt)("p",null,"For information on how to analyze this data in Xcode, see Apple\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools"},"Xcode frame debugger documentation"),"."),(0,n.kt)("h2",{id:"\u4ece-unity-\u7f16\u8f91\u5668\u6355\u83b7\u5e27"},"\u4ece Unity \u7f16\u8f91\u5668\u6355\u83b7\u5e27"),(0,n.kt)("p",null,"\u5728 macOS \u4e0a\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Xcode \u5e27\u8c03\u8bd5\u5668\u4ece Unity \u7f16\u8f91\u5668\u5206\u6790\u5e27\u3002\u5982\u679c\u4f7f\u7528 Xcode \u542f\u52a8 Unity \u7f16\u8f91\u5668\uff0c\u5219\u53ef\u4ee5\u4ece Unity \u7f16\u8f91\u5668 UI \u8bf7\u6c42\u8fdb\u884c\u5e27\u6355\u83b7\u3002"),(0,n.kt)("h3",{id:"\u4f7f\u7528-xcode-\u4ece-unity-\u7f16\u8f91\u5668\u6355\u83b7\u5e27"},"\u4f7f\u7528 Xcode \u4ece Unity \u7f16\u8f91\u5668\u6355\u83b7\u5e27"),(0,n.kt)("p",null,"This section describes how to launch the Unity Editor from Xcode and perform a frame capture using the Unity Editor UI, the Xcode UI, or the FrameCapture API. You can analyze the frame capture immediately, or save the results to disk. This workflow is supported on macOS."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the Unity Editor is open, close it."),(0,n.kt)("li",{parentName:"ol"},"In Xcode, create a new, empty macOS project, or open an existing macOS project."),(0,n.kt)("li",{parentName:"ol"},"Go to  ",(0,n.kt)("strong",{parentName:"li"},"Product ",">"," Scheme ",">"," Edit scheme")," , and open the Info tab."),(0,n.kt)("li",{parentName:"ol"},"Set  ",(0,n.kt)("strong",{parentName:"li"},"Executable"),"  to the Unity Editor."),(0,n.kt)("li",{parentName:"ol"},"Follow the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools/enabling_frame_capture"},"Enabling Frame Capture guide in the Xcode documentation")," to set your project scheme\u2019s  ",(0,n.kt)("strong",{parentName:"li"},"GPU Frame Capture"),"  setting to Metal."),(0,n.kt)("li",{parentName:"ol"},"Run the Xcode project to launch the Unity Editor."),(0,n.kt)("li",{parentName:"ol"},"Perform a frame capture, either via the Unity Editor UI, the Xcode UI, or via a script:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unity Editor:"),"  Use the  ",(0,n.kt)("strong",{parentName:"li"},"Xcode Capture"),"  button to the right of the Scene view or Game view to perform a frame capture."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Xcode:"),"  Select the  ",(0,n.kt)("strong",{parentName:"li"},"Frame Capture"),"  button (camera icon) to capture the next frame of data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Script:"),"  Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"FrameCapture")," API. For more information, see the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/ScriptReference/Apple.FrameCapture.html"},"FrameCapture API")," documentation.")))),(0,n.kt)("p",null,"For information on analyzing frame capture data in Xcode, see Apple\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools"},"Xcode frame debugger documentation"),"."),(0,n.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece-unity-\u7f16\u8f91\u5668\u6355\u83b7\u5e27"},"\u4f7f\u7528\u547d\u4ee4\u884c\u4ece Unity \u7f16\u8f91\u5668\u6355\u83b7\u5e27"),(0,n.kt)("p",null,"This workflow describes how to launch the Unity Editor from the command line, use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.html"},"FrameCapture API")," to perform a frame capture, and save the frame capture to disk. This workflow is supported on macOS."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add calls to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.BeginCaptureToFile.html"},"FrameCapture.BeginCaptureToFile")," and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Apple.FrameCapture.EndCapture.html"},"EndCapture")," to your code, so that you can perform frame captures as required."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/command-line-arguments"},"Launch the Unity Editor from the command line"),", with the following flag: ",(0,n.kt)("inlineCode",{parentName:"li"},"-enable-metal-capture"),". Xcode performs frame captures when your code requests them, and saves the results to disk.")),(0,n.kt)("p",null,"For information on how to analyze this data in Xcode, see the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/metal/frame_capture_debugging_tools"},"Xcode frame debugger documentation"),"."))}s.isMDXComponent=!0}}]);