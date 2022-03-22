"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18550],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return T}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},E={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),T=a,d=c["".concat(o,".").concat(T)]||c[T]||E[T]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function T(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},29897:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return T},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return E}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],p={id:"SinglePassInstancing",title:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3",slug:"/single-pass-stereo-rendering/single-pass-instancing"},o="\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3",s={unversionedId:"xr/single-pass-stereo-rendering/SinglePassInstancing",id:"xr/single-pass-stereo-rendering/SinglePassInstancing",title:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3",description:"\u4f7f\u7528 \u5355\u901a\u9053\u5b9e\u4f8b\u5316 (Single Pass Instanced)  \u6e32\u67d3\uff08\u4e5f\u79f0\u4e3a\u7acb\u4f53\u5b9e\u4f8b\u5316\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u7531 GPU \u6267\u884c\u5355\u4e2a\u6e32\u67d3\u901a\u9053\uff0c\u5c06\u6bcf\u4e2a\u7ed8\u5236\u8c03\u7528\u66ff\u6362\u4e3a\u5b9e\u4f8b\u5316\u7ed8\u5236\u8c03\u7528\u3002\u7531\u4e8e\u4e24\u4e2a\u7ed8\u5236\u8c03\u7528\u4e4b\u95f4\u7684\u7f13\u5b58\u4e00\u81f4\u6027\uff0c\u56e0\u6b64\u53ef\u5927\u5927\u964d\u4f4e CPU \u7684\u4f7f\u7528\uff0c\u5e76\u7565\u5fae\u51cf\u5c11 GPU \u7684\u4f7f\u7528\u3002\u8fd9\u6837\u53ef\u4ee5\u5927\u5e45\u964d\u4f4e\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u8017\u3002",source:"@site/docs/xr/single-pass-stereo-rendering/single-pass-instancing.md",sourceDirName:"xr/single-pass-stereo-rendering",slug:"/single-pass-stereo-rendering/single-pass-instancing",permalink:"/docs/single-pass-stereo-rendering/single-pass-instancing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xr/single-pass-stereo-rendering/single-pass-instancing.md",tags:[],version:"current",frontMatter:{id:"SinglePassInstancing",title:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3",slug:"/single-pass-stereo-rendering/single-pass-instancing"},sidebar:"tutorialSidebar",previous:{title:"\u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3\uff08\u53cc\u5bbd\u6e32\u67d3\uff09",permalink:"/docs/single-pass-stereo-rendering"},next:{title:"HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3",permalink:"/docs/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens"}},u={},E=[{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u81ea\u5b9a\u4e49\u7740\u8272\u5668",id:"\u81ea\u5b9a\u4e49\u7740\u8272\u5668",level:2},{value:"\u540e\u671f\u5904\u7406\u7740\u8272\u5668",id:"\u540e\u671f\u5904\u7406\u7740\u8272\u5668",level:2},{value:"\u5b8c\u6574\u7684\u793a\u4f8b\u7740\u8272\u5668\u4ee3\u7801",id:"\u5b8c\u6574\u7684\u793a\u4f8b\u7740\u8272\u5668\u4ee3\u7801",level:2},{value:"\u7a0b\u5e8f\u5316\u51e0\u4f55\u4f53",id:"\u7a0b\u5e8f\u5316\u51e0\u4f55\u4f53",level:2},{value:"\u8c03\u8bd5\u7740\u8272\u5668",id:"\u8c03\u8bd5\u7740\u8272\u5668",level:2}],c={toc:E};function T(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3"},"\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"\u5355\u901a\u9053\u5b9e\u4f8b\u5316 (Single Pass Instanced)"),"  \u6e32\u67d3\uff08\u4e5f\u79f0\u4e3a\u7acb\u4f53\u5b9e\u4f8b\u5316\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u7531 GPU \u6267\u884c\u5355\u4e2a\u6e32\u67d3\u901a\u9053\uff0c\u5c06\u6bcf\u4e2a\u7ed8\u5236\u8c03\u7528\u66ff\u6362\u4e3a\u5b9e\u4f8b\u5316\u7ed8\u5236\u8c03\u7528\u3002\u7531\u4e8e\u4e24\u4e2a\u7ed8\u5236\u8c03\u7528\u4e4b\u95f4\u7684",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_coherence"},"\u7f13\u5b58\u4e00\u81f4\u6027"),"\uff0c\u56e0\u6b64\u53ef\u5927\u5927\u964d\u4f4e CPU \u7684\u4f7f\u7528\uff0c\u5e76\u7565\u5fae\u51cf\u5c11 GPU \u7684\u4f7f\u7528\u3002\u8fd9\u6837\u53ef\u4ee5\u5927\u5e45\u964d\u4f4e\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u8017\u3002"),(0,i.kt)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PlayStation VR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Oculus Rift (DirectX 11)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HoloLens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Magic Leap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u652f\u6301 Multiview \u6269\u5c55\u7684 Android \u8bbe\u5907")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u684c\u9762\u5e73\u53f0\u4e0a\u7684 DirextX\uff0cGPU \u5fc5\u987b\u652f\u6301 Direct3D 11 \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"VPAndRTArrayIndexFromAnyShaderFeedingRasterizer")," \u6269\u5c55\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u684c\u9762\u5e73\u53f0\u4e0a\u7684 OpenGL\uff0cGPU \u5fc5\u987b\u652f\u6301\u4ee5\u4e0b\u6269\u5c55\u4e4b\u4e00\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GL_NV_viewport_array2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GL_AMD_vertex_shader_layer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GL_ARB_shader_viewport_layer_array"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4f7f\u7528\u5ef6\u8fdf\u6e32\u67d3\u65f6\uff0cUnity \u4e0d\u652f\u6301\u65e7\u7248\u6e32\u67d3\u7ba1\u7ebf\u4e2d\u7684\u5355\u901a\u9053\u7acb\u4f53\u5b9e\u4f8b\u5316\u3002"))),(0,i.kt)("p",null,"\u8981\u542f\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u6253\u5f00  ",(0,i.kt)("strong",{parentName:"p"},"Player"),"  \u8bbe\u7f6e\uff08\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Project Settings")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"p"},"Player"),"  \u7c7b\u522b\uff09\u3002\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Player"),"  \u8bbe\u7f6e\u4e2d\uff0c\u5bfc\u822a\u5230\u5e95\u90e8\u7684  ",(0,i.kt)("strong",{parentName:"p"},"XR Settings"),"  \u9762\u677f\uff0c\u9009\u4e2d  ",(0,i.kt)("strong",{parentName:"p"},"Virtual Reality Supported"),"  \u9009\u9879\uff0c\u7136\u540e\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"Stereo Rendering Method"),"  \u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Single Pass Instanced (Preview)")," \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Stereorendermethod.png",alt:"\u5728 XR Settings \u9762\u677f\u4e2d\uff0c\u5c06 Stereo Rendering Method \u8bbe\u7f6e\u4e3a Single Pass Instanced (Preview)"})),(0,i.kt)("p",null,"\u5728 XR Settings \u9762\u677f\u4e2d\uff0c\u5c06 Stereo Rendering Method \u8bbe\u7f6e\u4e3a Single Pass Instanced (Preview)"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u7684  ",(0,i.kt)("strong",{parentName:"p"},"Stereo Rendering Method"),"  \u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Multi Pass")," \u3002\u6b64\u8bbe\u7f6e\u8f83\u6162\uff0c\u4f46\u901a\u5e38\u66f4\u9002\u5408\u4e8e\u81ea\u5b9a\u4e49\u7740\u8272\u5668\u3002\u5982\u679c\u6709\u81ea\u5b9a\u4e49\u7740\u8272\u5668\uff0c\u5219\u53ef\u80fd\u9700\u8981\u66f4\u6539\u8fd9\u4e9b\u7740\u8272\u5668\uff0c\u4f7f\u4e4b\u4e0e  ",(0,i.kt)("strong",{parentName:"p"},"Single Pass Instanced"),"  \u6e32\u67d3\u517c\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7740\u8272\u5668"},"\u81ea\u5b9a\u4e49\u7740\u8272\u5668"),(0,i.kt)("p",null,"\u5728\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u64cd\u4f5c\u4e4b\u524d\uff0c\u8bf7\u66f4\u65b0\u81ea\u5b9a\u4e49\u7740\u8272\u5668\u4ee5\u4f7f\u7528\u5b9e\u4f8b\u5316\u529f\u80fd\uff08\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/docs/gpuinstancing"},"GPU \u5b9e\u4f8b\u5316"),"\uff09\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5bf9\u4e8e\u6240\u6709\u81ea\u5b9a\u4e49\u7740\u8272\u5668\uff0c\u60a8\u9700\u8981\u5728\u7247\u5143\u7740\u8272\u5668\uff08\u9876\u70b9/\u5916\u58f3/\u57df/\u51e0\u4f55\u4f53\uff09\u4e4b\u524d\u4f7f\u7528\u7684\u6700\u540e\u4e00\u4e2a\u7740\u8272\u5668\u9636\u6bb5\u4e2d\u8fdb\u884c\u4e24\u9879\u989d\u5916\u7684\u66f4\u6539\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8981\u652f\u6301\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u7684\u6bcf\u4e2a\u81ea\u5b9a\u4e49\u7740\u8272\u5668\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 1\uff1a")," \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_VERTEX_INPUT_INSTANCE_ID")," \u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"appdata struct"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"struct appdata\n{\n    float4 vertex : POSITION;\n    float2 uv : TEXCOORD0;\n\n    UNITY_VERTEX_INPUT_INSTANCE_ID //\u63d2\u5165\n};\n")),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 2\uff1a")," \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_VERTEX_OUTPUT_STEREO")," \u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"v2f output struct"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"struct v2f\n{\n    float2 uv : TEXCOORD0;\n    float4 vertex : SV_POSITION;\n\n    UNITY_VERTEX_OUTPUT_STEREO //\u63d2\u5165\n};\n")),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 3\uff1a")," \u5728\u4e3b ",(0,i.kt)("inlineCode",{parentName:"p"},"vert")," \u65b9\u6cd5\u7684\u5f00\u5934\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_SETUP_INSTANCE_ID()")," \u5b8f\uff0c\u7136\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_INITIALIZE_OUTPUT(v2f, o)")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO()"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_SETUP_INSTANCE_ID()")," calculates and sets the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"unity_StereoEyeIndex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unity_InstanceID")," shader variables to the correct values based on which eye the GPU is currently rendering."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO")," \u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"unity_StereoEyeIndex")," \u7684\u503c\u544a\u8bc9 GPU \u5e94\u8be5\u6e32\u67d3\u5230\u7eb9\u7406\u6570\u7ec4\u4e2d\u7684\u54ea\u53ea\u773c\u775b\u3002\u6b64\u5b8f\u8fd8\u4ece\u9876\u70b9\u7740\u8272\u5668\u4f20\u8f93 ",(0,i.kt)("inlineCode",{parentName:"p"},"unity_StereoEyeIndex")," \u7684\u503c\uff0c\u786e\u4fdd\u4ec5\u5f53\u5728\u7247\u5143\u7740\u8272\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"frag")," \u65b9\u6cd5\u4e2d\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX")," \u65f6\u624d\u80fd\u5728\u7247\u5143\u7740\u8272\u5668\u4e2d\u8bbf\u95ee\u8be5\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_INITALIZE_OUTPUT(v2f,o)")," \u5c06\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"v2f")," \u503c\u521d\u59cb\u5316\u4e3a 0\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"v2f vert (appdata v)\n{\n    v2f o;\n\n    UNITY_SETUP_INSTANCE_ID(v); //\u63d2\u5165\n    UNITY_INITIALIZE_OUTPUT(v2f, o); //\u63d2\u5165\n    UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o); //\u63d2\u5165\n\n    o.vertex = UnityObjectToClipPos(v.vertex);\n\n    o.uv = v.uv;\n\n    return o;\n}\n")),(0,i.kt)("h2",{id:"\u540e\u671f\u5904\u7406\u7740\u8272\u5668"},"\u540e\u671f\u5904\u7406\u7740\u8272\u5668"),(0,i.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u540e\u671f\u5904\u7406\u7740\u8272\u5668\u652f\u6301\u5355\u901a\u9053\u5b9e\u4f8b\u5316\uff0c\u8bf7\u6309\u7167\u201c\u81ea\u5b9a\u4e49\u7740\u8272\u5668\u201d\u4e2d\u7684\u6b65\u9aa4\u4ee5\u53ca\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u3002\u53ef\u4ece ",(0,i.kt)("a",{parentName:"p",href:"https://unity3d.com/get-unity/download/archive"},"Unity \u7f51\u7ad9"),"\u4e0b\u8f7d\u6240\u6709 Unity \u57fa\u7840\u7740\u8272\u5668\u811a\u672c\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8981\u652f\u6301\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u7684\u6bcf\u4e2a\u540e\u671f\u5904\u7406\u7740\u8272\u5668\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 1\uff1a")," \u5728\u7740\u8272\u5668\u811a\u672c\u4e2d\u7684 frag \u65b9\u6cd5\u4e4b\u5916\u6dfb\u52a0 UNITY","_","DECLARE","_","SCREENSPACE","_","TEXTURE(tex) \u5b8f\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u653e\u7f6e\u4f4d\u7f6e\u793a\u4f8b\uff09\uff0c\u8fd9\u6837\u5f53\u60a8\u4f7f\u7528\u7279\u5b9a\u7684\u7acb\u4f53\u6e32\u67d3\u65b9\u6cd5\u65f6\uff0cGPU \u4f1a\u4f7f\u7528\u9002\u5f53\u7684\u7eb9\u7406\u91c7\u6837\u5668\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528\u591a\u901a\u9053\u6e32\u67d3\uff0c\u5219 GPU \u4f1a\u4f7f\u7528 2D \u7eb9\u7406\u91c7\u6837\u5668\u3002\u5bf9\u4e8e\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6216\u591a\u89c6\u56fe\u6e32\u67d3\uff0c\u7eb9\u7406\u91c7\u6837\u5668\u4e3a\u7eb9\u7406\u6570\u7ec4\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 2\uff1a")," \u5728\u7247\u5143\u7740\u8272\u5668 frag \u65b9\u6cd5\u7684\u5f00\u5934\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i)"),"\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u653e\u7f6e\u4f4d\u7f6e\u793a\u4f8b\uff09\u3002\u4ec5\u5f53\u5e0c\u671b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"unity_StereoEyeIndex")," \u5185\u7f6e\u7740\u8272\u5668\u53d8\u91cf\u6765\u627e\u51fa GPU \u6b63\u5728\u6e32\u67d3\u5230\u7684\u773c\u775b\u65f6\uff0c\u624d\u9700\u8981\u6dfb\u52a0\u8be5\u5b8f\u3002\u8fd9\u5728\u6d4b\u8bd5\u540e\u671f\u5904\u7406\u6548\u679c\u65f6\u5f88\u6709\u7528\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 3\uff1a")," \u91c7\u6837 2D \u7eb9\u7406\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_SAMPLE_SCREENSPACE_TEXTURE()")," \u5b8f\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u653e\u7f6e\u4f4d\u7f6e\u793a\u4f8b\uff09\u3002\u6807\u51c6\u7740\u8272\u5668\u4f7f\u7528\u57fa\u4e8e 2D \u7eb9\u7406\u7684\u540e\u7f13\u51b2\u533a\u6765\u5bf9\u7eb9\u7406\u8fdb\u884c\u91c7\u6837\u3002\u5355\u901a\u9053\u7acb\u4f53\u5b9e\u4f8b\u5316\u6280\u672f\u4e0d\u4f7f\u7528\u6b64\u7c7b\u578b\u7684\u540e\u7f13\u51b2\u533a\uff0c\u56e0\u6b64\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5176\u4ed6\u7684 2D \u7eb9\u7406\u91c7\u6837\u65b9\u6cd5\uff0c\u7740\u8272\u5668\u5c06\u65e0\u6cd5\u6b63\u786e\u6e32\u67d3\u3002\u4e3a\u9632\u6b62\u6e32\u67d3\u95ee\u9898\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"UNITY_SAMPLE_SCREENSPACE_TEXTURE()")," \u5b8f\u4f1a\u68c0\u6d4b\u6b63\u5728\u4f7f\u7528\u7684\u7acb\u4f53\u6e32\u67d3\u8def\u5f84\uff0c\u7136\u540e\u4ee5\u6b63\u786e\u7684\u65b9\u5f0f\u81ea\u52a8\u91c7\u6837\u7eb9\u7406\u3002\u8bf7\u53c2\u9605 Unity \u6587\u6863\u5173\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs/sl-shader-programs/sl-builtin-includes"},"HLSLSupport.cginc")," \u7684\u8bf4\u660e\uff0c\u8fdb\u4e00\u6b65\u4e86\u89e3\u7528\u4e8e\u6df1\u5ea6\u7eb9\u7406\u548c\u5c4f\u5e55\u7a7a\u95f4\u9634\u5f71\u8d34\u56fe\u7684\u7c7b\u4f3c\u5b8f\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UNITY_DECLARE_SCREENSPACE_TEXTURE(_MainTex); //\u63d2\u5165\n\nfixed4 frag (v2f i) : SV_Target\n{\n    UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i); //\u63d2\u5165\n    \n    fixed4 col = UNITY_SAMPLE_SCREENSPACE_TEXTURE(_MainTex, i.uv); //\u63d2\u5165\n    \n    // \u4ec5\u63d2\u5165\u989c\u8272\n    \n    col = 1 - col;\n    \n    return col;\n}\n")),(0,i.kt)("h2",{id:"\u5b8c\u6574\u7684\u793a\u4f8b\u7740\u8272\u5668\u4ee3\u7801"},"\u5b8c\u6574\u7684\u793a\u4f8b\u7740\u8272\u5668\u4ee3\u7801"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u6a21\u677f\u56fe\u50cf\u6548\u679c\u7740\u8272\u5668\u7684\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\uff0c\u5176\u4e2d\u5e94\u7528\u4e86\u6240\u6709\u524d\u9762\u63d0\u5230\u7684\u66f4\u6539\u6765\u5b9e\u73b0\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u652f\u6301\u3002\u7740\u8272\u5668\u4ee3\u7801\u7684\u6dfb\u52a0\u4f4d\u7f6e\u6807\u8bb0\u4e86\u6ce8\u91ca (",(0,i.kt)("inlineCode",{parentName:"p"},"//Insert"),")\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"struct appdata\n{\n    float4 vertex : POSITION;\n    float2 uv : TEXCOORD0;\n    \n    UNITY_VERTEX_INPUT_INSTANCE_ID //\u63d2\u5165\n};\n\n//v2f \u8f93\u51fa\u7ed3\u6784\n\nstruct v2f\n{\n\n    float2 uv : TEXCOORD0;\n    float4 vertex : SV_POSITION;\n    \n    UNITY_VERTEX_OUTPUT_STEREO //\u63d2\u5165\n};\n\nv2f vert (appdata v)\n{\n    v2f o;\n    \n    UNITY_SETUP_INSTANCE_ID(v); //\u63d2\u5165\n    UNITY_INITIALIZE_OUTPUT(v2f, o); //\u63d2\u5165\n    UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o); //\u63d2\u5165\n    \n    o.vertex = UnityObjectToClipPos(v.vertex);\n    o.uv = v.uv;\n    return o;\n}\n\nUNITY_DECLARE_SCREENSPACE_TEXTURE(_MainTex); //\u63d2\u5165\n\nfixed4 frag (v2f i) : SV_Target\n{\n    UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i); //\u63d2\u5165\n    \n    fixed4 col = UNITY_SAMPLE_SCREENSPACE_TEXTURE(_MainTex, i.uv); //\u63d2\u5165\n    \n    // \u63d2\u5165\u989c\u8272\n    \n    col = 1 - col;\n    \n    return col;\n}\n")),(0,i.kt)("h2",{id:"\u7a0b\u5e8f\u5316\u51e0\u4f55\u4f53"},"\u7a0b\u5e8f\u5316\u51e0\u4f55\u4f53"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.DrawProcedural.html"},"Graphics.DrawProceduralIndirect()")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Graphics.DrawProceduralIndirect.html"},"CommandBuffer.DrawProceduralIndirect()")," \u65b9\u6cd5\u5728 GPU \u4e0a\u7ed8\u5236\u5b8c\u5168\u7a0b\u5e8f\u5316\u7684\u51e0\u4f55\u4f53\u65f6\uff0c\u5fc5\u987b\u6ce8\u610f\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u90fd\u4ece\u8ba1\u7b97\u7f13\u51b2\u533a\u63a5\u6536\u53c2\u6570\u3002\u8fd9\u610f\u5473\u7740\u5728\u8fd0\u884c\u65f6\u5f88\u96be\u589e\u52a0\u5b9e\u4f8b\u8ba1\u6570\u3002\u8981\u589e\u52a0\u5b9e\u4f8b\u8ba1\u6570\uff0c\u5fc5\u987b\u624b\u52a8\u4f7f\u8ba1\u7b97\u7f13\u51b2\u533a\u4e2d\u5305\u542b\u7684\u5b9e\u4f8b\u8ba1\u6570\u52a0\u500d\u3002"),(0,i.kt)("h2",{id:"\u8c03\u8bd5\u7740\u8272\u5668"},"\u8c03\u8bd5\u7740\u8272\u5668"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u7740\u8272\u5668\u4ee3\u7801\u5c06\u6e38\u620f\u5bf9\u8c61\u6e32\u67d3\u4e3a\u7eff\u8272\uff08\u7528\u6237\u5de6\u773c\uff09\u548c\u7ea2\u8272\uff08\u53f3\u773c\uff09\u3002\u6b64\u7740\u8272\u5668\u5bf9\u4e8e\u8c03\u8bd5\u7acb\u4f53\u6e32\u67d3\u975e\u5e38\u6709\u7528\uff0c\u56e0\u4e3a\u5b83\u53ef\u7528\u4e8e\u9a8c\u8bc1\u6240\u6709\u7acb\u4f53\u56fe\u5f62\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Shader "XR/StereoEyeIndexColor"\n{\n   Properties\n   {\n       _LeftEyeColor("Left Eye Color", COLOR) = (0,1,0,1)\n       _RightEyeColor("Right Eye Color", COLOR) = (1,0,0,1)\n   }\n\n   SubShader\n   {\n      Tags { "RenderType" = "Opaque" }\n\n      Pass\n      {\n         CGPROGRAM\n\n         #pragma vertex vert\n         #pragma fragment frag\n\n         float4 _LeftEyeColor;\n         float4 _RightEyeColor;\n\n         #include "UnityCG.cginc"\n\n         struct appdata\n         {\n            float4 vertex : POSITION;\n\n            UNITY_VERTEX_INPUT_INSTANCE_ID\n         };\n\n         struct v2f\n         {\n            float4 vertex : SV_POSITION;\n\n            UNITY_VERTEX_INPUT_INSTANCE_ID \n            UNITY_VERTEX_OUTPUT_STEREO\n         };\n\n         v2f vert (appdata v)\n         {\n            v2f o;\n\n            UNITY_SETUP_INSTANCE_ID(v);\n            UNITY_INITIALIZE_OUTPUT(v2f, o);\n            UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);\n\n            o.vertex = UnityObjectToClipPos(v.vertex);\n\n            return o;\n         }\n\n         fixed4 frag (v2f i) : SV_Target\n         {\n            UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);\n\n            return lerp(_LeftEyeColor, _RightEyeColor, unity_StereoEyeIndex);\n         }\n         ENDCG\n      }\n   }\n}\n')))}T.isMDXComponent=!0}}]);