"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75090],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71863:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],s={id:"SinglePassStereoRenderingHoloLens",title:"HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3",slug:"/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens"},i="HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3",p={unversionedId:"xr/single-pass-stereo-rendering/SinglePassStereoRenderingHoloLens",id:"xr/single-pass-stereo-rendering/SinglePassStereoRenderingHoloLens",title:"HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3",description:"Windows Holographic \u8bbe\u5907 (HoloLens) \u6709\u4e24\u79cd\u7acb\u4f53\u6e32\u67d3\u65b9\u6cd5\uff1a\u591a\u901a\u9053\u548c\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u3002",source:"@site/docs/xr/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens.md",sourceDirName:"xr/single-pass-stereo-rendering",slug:"/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens",permalink:"/doc-unity-manual/docs/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xr/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens.md",tags:[],version:"current",frontMatter:{id:"SinglePassStereoRenderingHoloLens",title:"HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3",slug:"/single-pass-stereo-rendering/single-pass-stereo-rendering-holo-lens"},sidebar:"tutorialSidebar",previous:{title:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3",permalink:"/doc-unity-manual/docs/single-pass-stereo-rendering/single-pass-instancing"},next:{title:"VR \u7a7a\u95f4\u97f3\u54cd",permalink:"/doc-unity-manual/docs/xr/vraudio-spatializer"}},u={},c=[{value:"\u591a\u901a\u9053",id:"\u591a\u901a\u9053",level:2},{value:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316",id:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316",level:2},{value:"\u7740\u8272\u5668\u811a\u672c\u8981\u6c42",id:"\u7740\u8272\u5668\u811a\u672c\u8981\u6c42",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hololens-\u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3"},"HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3"),(0,a.kt)("p",null,"Windows Holographic \u8bbe\u5907 (HoloLens) \u6709\u4e24\u79cd\u7acb\u4f53\u6e32\u67d3\u65b9\u6cd5\uff1a\u591a\u901a\u9053\u548c\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u3002"),(0,a.kt)("h2",{id:"\u591a\u901a\u9053"},"\u591a\u901a\u9053"),(0,a.kt)("p",null,"\u591a\u901a\u9053\u6e32\u67d3\u8fd0\u884c 2 \u4e2a\u5b8c\u6574\u7684\u6e32\u67d3\u901a\u9053\uff08\u6bcf\u53ea\u773c\u775b\u5bf9\u5e94\u4e00\u4e2a\uff09\u3002\u56e0\u6b64\uff0c\u4e0e\u5355\u901a\u9053\u5b9e\u4f8b\u5316\u6e32\u67d3\u65b9\u6cd5\u76f8\u6bd4\uff0c\u591a\u901a\u9053\u65b9\u6cd5\u4f1a\u4ea7\u751f\u51e0\u4e4e\u4e24\u500d\u7684 CPU \u5de5\u4f5c\u8d1f\u8f7d\u3002\u4f46\u662f\uff0c\u6b64\u65b9\u6cd5\u5177\u6709\u6700\u9ad8\u7684\u5411\u540e\u517c\u5bb9\u6027\uff0c\u4e0d\u9700\u8981\u5bf9\u7740\u8272\u5668\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002"),(0,a.kt)("h2",{id:"\u5355\u901a\u9053\u5b9e\u4f8b\u5316"},"\u5355\u901a\u9053\u5b9e\u4f8b\u5316"),(0,a.kt)("p",null,"\u5b9e\u4f8b\u5316\u6e32\u67d3\u6267\u884c\u5355\u4e2a\u6e32\u67d3\u901a\u9053\uff0c\u5176\u4e2d\u7684\u6bcf\u4e2a\u7ed8\u5236\u8c03\u7528\u90fd\u5c06\u66ff\u6362\u4e3a\u5b9e\u4f8b\u5316\u7ed8\u5236\u8c03\u7528\u3002\u8fd9\u5927\u5927\u964d\u4f4e\u4e86 CPU \u5229\u7528\u7387\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u4e24\u4e2a\u7ed8\u5236\u8c03\u7528\u4e4b\u95f4\u7684\u7f13\u5b58\u4e00\u81f4\u6027\uff0c\u56e0\u6b64\u8fd8\u53ef\u7565\u5fae\u964d\u4f4e GPU \u5229\u7528\u7387\u3002\u8fdb\u800c\uff0c\u5e94\u7528\u7a0b\u5e8f\u7684\u529f\u8017\u4f1a\u4f4e\u5f97\u591a\u3002"),(0,a.kt)("p",null,"\u8981\u542f\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u6253\u5f00 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-player-settings"},"Player")," \u8bbe\u7f6e\uff08\u83dc\u5355\uff1a ",(0,a.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Project Settings")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"Player"),"  \u7c7b\u522b\uff09\u3002\u7136\u540e\uff0c\u5bfc\u822a\u5230  ",(0,a.kt)("strong",{parentName:"p"},"Other Settings"),"  \u9762\u677f\uff0c\u542f\u7528  ",(0,a.kt)("strong",{parentName:"p"},"Virtual Reality Supported"),"  \u5c5e\u6027\uff0c\u7136\u540e\u4ece  ",(0,a.kt)("strong",{parentName:"p"},"Stereo Rendering Method"),"  \u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,a.kt)("strong",{parentName:"p"},"Single Pass Instanced (Fastest)")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SinglePassHoloLens1.png",alt:"SinglePassHoloLens1.png"})),(0,a.kt)("p",null,"Unity \u9ed8\u8ba4\u91c7\u7528\u8f83\u6162\u7684  ",(0,a.kt)("strong",{parentName:"p"},"Multi pass (Slow)"),"  \u8bbe\u7f6e\uff0c\u56e0\u4e3a\u60a8\u53ef\u80fd\u6709\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7740\u8272\u5668\u5728\u811a\u672c\u4e2d\u6ca1\u6709\u6240\u9700\u7684\u4ee3\u7801\u6765\u652f\u6301\u8be5\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u7740\u8272\u5668\u811a\u672c\u8981\u6c42"},"\u7740\u8272\u5668\u811a\u672c\u8981\u6c42"),(0,a.kt)("p",null,"\u4efb\u4f55\u975e\u5185\u7f6e\u7740\u8272\u5668\u90fd\u9700\u8981\u7ecf\u8fc7\u66f4\u65b0\u624d\u80fd\u4f7f\u7528\u5b9e\u4f8b\u5316\u3002\u8bf7\u9605\u8bfb\u6b64\u6587\u6863\u4e86\u89e3\u5982\u4f55\u5b8c\u6210\u6b64\u64cd\u4f5c\uff1a",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/gpuinstancing"},"GPU \u5b9e\u4f8b\u5316"),"\u3002\u6b64\u5916\uff0c\u8fd8\u9700\u8981\u5728\u7247\u5143\u7740\u8272\u5668\uff08\u9876\u70b9/\u5916\u58f3/\u57df/\u51e0\u4f55\u4f53\uff09\u4e4b\u524d\u4f7f\u7528\u7684\u6700\u540e\u4e00\u4e2a\u7740\u8272\u5668\u9636\u6bb5\u4e2d\u8fdb\u884c\u4e24\u9879\u989d\u5916\u7684\u66f4\u6539\u3002\u9996\u5148\uff0c\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNITY_VERTEX_OUTPUT_STEREO")," \u6dfb\u52a0\u5230\u8f93\u51fa\u7ed3\u6784\u3002\u5176\u6b21\uff0c\u5728\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNITY_SETUP_INSTANCE_ID()")," \u4e4b\u540e\uff0c\u9700\u8981\u5728\u8be5\u9636\u6bb5\u7684\u4e3b\u51fd\u6570\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO()"),"\u3002"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"\u540e\u671f\u5904\u7406\u7740\u8272\u5668")," "),(0,a.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u58f0\u660e 2D \u7eb9\u7406\u6570\u7ec4\uff0c\u9700\u8981\u5728\u8f93\u5165\u7eb9\u7406\u58f0\u660e\u7684\u5468\u56f4\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNITY_DECLARE_SCREENSPACE_TEXTURE(tex)")," \u5b8f\u3002\u63a5\u4e0b\u6765\uff0c\u5fc5\u987b\u5728\u7247\u5143\u7740\u8272\u5668\u7684\u5f00\u5934\u6dfb\u52a0\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNITY_SETUP_INSTANCE_ID()")," \u7684\u8c03\u7528\u3002\u6700\u540e\uff0c\u5728\u91c7\u6837\u8fd9\u4e9b\u7eb9\u7406\u65f6\uff0c\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNITY_SAMPLE_SCREENSPACE_TEXTURE()")," \u5b8f\u3002\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-shader-programs/sl-builtin-includes"},"HLSLSupport.cginc")," \u8fdb\u4e00\u6b65\u4e86\u89e3\u7528\u4e8e\u6df1\u5ea6\u7eb9\u7406\u548c\u5c4f\u5e55\u7a7a\u95f4\u9634\u5f71\u8d34\u56fe\u7684\u5176\u4ed6\u7c7b\u4f3c\u5b8f\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5176\u4e2d\u5c06\u6240\u6709\u524d\u9762\u63d0\u5230\u7684\u66f4\u6539\u5e94\u7528\u4e8e\u6a21\u677f\u56fe\u50cf\u6548\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"struct appdata\n{\n    float4 vertex : POSITION;\n    float2 uv : TEXCOORD0;\n    UNITY_INSTANCE_ID\n};\nstruct v2f\n{\n    float2 uv : TEXCOORD0;\n    float4 vertex : SV_POSITION;\n    UNITY_INSTANCE_ID\n    UNITY_VERTEX_OUTPUT_STEREO\n};\nv2f vert (appdata v)\n{\n    v2f o;\n    UNITY_SETUP_INSTANCE_ID(v);\n    UNITY_TRANSFER_INSTANCE_ID(v, o);\n    UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);\n    o.vertex = UnityObjectToClipPos(v.vertex);\n    o.uv = v.uv;\n    return o;\n}\n\nUNITY_DECLARE_SCREENSPACE_TEXTURE(_MainTex);\n\nfixed4 frag (v2f i) : SV_Target\n{\n    UNITY_SETUP_INSTANCE_ID(i);\n    fixed4 col = UNITY_SAMPLE_SCREENSPACE_TEXTURE(_MainTex, i.uv);\n    // \u4ec5\u63d2\u5165\u989c\u8272\n    col = 1 - col;\n    return col;\n}\n")),(0,a.kt)("h1",{id:"drawproceduralindirect"},"DrawProceduralIndirect"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Graphics.DrawProceduralIndirect()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandBuffer.DrawProceduralIndirect()")," \u4ece\u8ba1\u7b97\u7f13\u51b2\u533a\u4e2d\u83b7\u53d6\u6240\u6709\u53c2\u6570\uff0c\u56e0\u6b64\u6211\u4eec\u65e0\u6cd5\u8f7b\u677e\u589e\u52a0\u5b9e\u4f8b\u8ba1\u6570\u3002\u6240\u4ee5\uff0c\u5fc5\u987b\u624b\u52a8\u4f7f\u8ba1\u7b97\u7f13\u51b2\u533a\u4e2d\u5305\u542b\u7684\u5b9e\u4f8b\u8ba1\u6570\u52a0\u500d\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/built-in-shader-examples/sl-vertex-fragment-shader-examples"},"\u9876\u70b9\u548c\u7247\u5143\u7740\u8272\u5668\u793a\u4f8b"),"\u9875\u9762\u4ee5\u4e86\u89e3\u6709\u5173\u7740\u8272\u5668\u4ee3\u7801\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2017\u201309\u201301 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,a.kt)("li",{parentName:"ul"},"5.5 \u4e2d\u7684\u65b0\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u6b63\u4e86 HoloLens \u5355\u901a\u9053\u7acb\u4f53\u6e32\u67d3\u7684\u793a\u4f8b\u4ee3\u7801")))}g.isMDXComponent=!0}}]);