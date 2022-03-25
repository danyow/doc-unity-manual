"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23848],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),i=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},s=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?t.createElement(f,u(u({ref:n},s),{},{components:a})):t.createElement(f,u({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var i=2;i<l;i++)u[i]=a[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63917:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var t=a(87462),r=a(63366),l=(a(67294),a(3905)),u=["components"],o={id:"SL-SurfaceShaderExamples",title:"\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b",slug:"/sl-surface-shaders/sl-surface-shader-examples"},p="\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b",i={unversionedId:"graphics/shaders/shader-writing/sl-surface-shaders/SL-SurfaceShaderExamples",id:"graphics/shaders/shader-writing/sl-surface-shaders/SL-SurfaceShaderExamples",title:"\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b",description:"\u672c\u9875\u4e0a\u7684\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528\u5185\u7f6e\u5149\u7167\u6a21\u578b\u3002\u5982\u9700\u67e5\u770b\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605\u8868\u9762\u7740\u8272\u5668\u5149\u7167\u793a\u4f8b\u3002",source:"@site/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shader-examples.md",sourceDirName:"graphics/shaders/shader-writing/sl-surface-shaders",slug:"/sl-surface-shaders/sl-surface-shader-examples",permalink:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-examples",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-surface-shaders/sl-surface-shader-examples.md",tags:[],version:"current",frontMatter:{id:"SL-SurfaceShaderExamples",title:"\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b",slug:"/sl-surface-shaders/sl-surface-shader-examples"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u9762\u7740\u8272\u5668\u548c\u6e32\u67d3\u8def\u5f84",permalink:"/doc-unity-manual/docs/sl-surface-shaders/sl-render-pipeline"},next:{title:"\u8868\u9762\u7740\u8272\u5668\u5149\u7167\u793a\u4f8b",permalink:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-lighting-examples"}},s={},d=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"\u7b80\u5355\u7684\u7740\u8272\u5668\u793a\u4f8b",id:"\u7b80\u5355\u7684\u7740\u8272\u5668\u793a\u4f8b",level:2},{value:"\u7eb9\u7406",id:"\u7eb9\u7406",level:2},{value:"\u6cd5\u7ebf\u8d34\u56fe",id:"\u6cd5\u7ebf\u8d34\u56fe",level:2},{value:"\u8fb9\u7f18\u5149\u7167",id:"\u8fb9\u7f18\u5149\u7167",level:2},{value:"\u7ec6\u8282\u7eb9\u7406",id:"\u7ec6\u8282\u7eb9\u7406",level:2},{value:"\u5c4f\u5e55\u7a7a\u95f4\u4e2d\u7684\u7ec6\u8282\u7eb9\u7406",id:"\u5c4f\u5e55\u7a7a\u95f4\u4e2d\u7684\u7ec6\u8282\u7eb9\u7406",level:2},{value:"\u7acb\u65b9\u4f53\u8d34\u56fe\u53cd\u5c04",id:"\u7acb\u65b9\u4f53\u8d34\u56fe\u53cd\u5c04",level:2},{value:"\u901a\u8fc7\u4e16\u754c\u7a7a\u95f4\u4f4d\u7f6e\u8fdb\u884c\u7684\u5207\u7247",id:"\u901a\u8fc7\u4e16\u754c\u7a7a\u95f4\u4f4d\u7f6e\u8fdb\u884c\u7684\u5207\u7247",level:2},{value:"\u4f7f\u7528\u9876\u70b9\u4fee\u6539\u5668\u8fdb\u884c\u6cd5\u7ebf\u6324\u51fa",id:"\u4f7f\u7528\u9876\u70b9\u4fee\u6539\u5668\u8fdb\u884c\u6cd5\u7ebf\u6324\u51fa",level:2},{value:"\u6bcf\u9876\u70b9\u8ba1\u7b97\u7684\u81ea\u5b9a\u4e49\u6570\u636e",id:"\u6bcf\u9876\u70b9\u8ba1\u7b97\u7684\u81ea\u5b9a\u4e49\u6570\u636e",level:2},{value:"\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668",id:"\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668",level:2},{value:"\u4f7f\u7528\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\u81ea\u5b9a\u4e49\u96fe\u6548",id:"\u4f7f\u7528\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\u81ea\u5b9a\u4e49\u96fe\u6548",level:2},{value:"\u7ebf\u6027\u96fe",id:"\u7ebf\u6027\u96fe",level:2},{value:"\u8d34\u82b1",id:"\u8d34\u82b1",level:2}],c={toc:d};function m(e){var n=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b"},"\u8868\u9762\u7740\u8272\u5668\u793a\u4f8b"),(0,l.kt)("p",null,"\u672c\u9875\u4e0a\u7684",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders"},"\u8868\u9762\u7740\u8272\u5668"),"\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528\u5185\u7f6e\u5149\u7167\u6a21\u578b\u3002\u5982\u9700\u67e5\u770b\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5149\u7167\u6a21\u578b\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-surface-shaders/sl-surface-shader-lighting-examples"},"\u8868\u9762\u7740\u8272\u5668\u5149\u7167\u793a\u4f8b"),"\u3002"),(0,l.kt)("p",null,"\u5728\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf\u4e2d\uff0c\u8868\u9762\u7740\u8272\u5668\u662f\u7f16\u5199\u4e0e\u5149\u7167\u4ea4\u4e92\u7684\u7740\u8272\u5668\u7684\u4e00\u79cd\u7b80\u5316\u65b9\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u8868\u9762\u7740\u8272\u5668")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u6709\u5173\u5728 URP \u4e2d\u521b\u5efa Shader \u5bf9\u8c61\u7684\u7b80\u5316\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders/shader-graph"},"Shader Graph"),"\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u6709\u5173\u5728 HDRP \u4e2d\u521b\u5efa Shader \u5bf9\u8c61\u7684\u7b80\u5316\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"td",href:"/doc-unity-manual/docs/shaders/shader-graph"},"Shader Graph"),"\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("h2",{id:"\u7b80\u5355\u7684\u7740\u8272\u5668\u793a\u4f8b"},"\u7b80\u5355\u7684\u7740\u8272\u5668\u793a\u4f8b"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u4ece\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u7740\u8272\u5668 (Shader) \u5f00\u59cb\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u52a0\u4ee5\u4e30\u5bcc\u3002\u4e0b\u9762\u7684\u7740\u8272\u5668\u5c06\u8868\u9762\u989c\u8272\u8bbe\u7f6e\u4e3a\u201c\u767d\u8272\u201d\u3002\u5b83\u4f7f\u7528\u5185\u7f6e\u7684\u5170\u4f2f\u7279\uff08\u6f2b\u5c04\uff09\u5149\u7167\u6a21\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Diffuse Simple" {\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float4 color : COLOR;\n        };\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = 1;\n        }\n        ENDCG\n      }\n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u8bbe\u7f6e\u4e86\u4e24\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-light"},"\u5149\u6e90"),"\u7684\u6a21\u578b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderSimple.jpg",alt:"SurfaceShaderSimple.jpg"})),(0,l.kt)("h2",{id:"\u7eb9\u7406"},"\u7eb9\u7406"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5168\u767d\u7684\u5bf9\u8c61\u5f88\u65e0\u804a\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u7eb9\u7406\u3002\u6211\u4eec\u5c06\u5411\u7740\u8272\u5668\u6dfb\u52a0 ",(0,l.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-shader/sl-properties"},"Properties")," \u4ee3\u7801\u5757\uff0c\u8fd9\u6837\u6211\u4eec\u5c06\u5728\u6750\u8d28\u4e2d\u770b\u5230\u7eb9\u7406\u9009\u62e9\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Diffuse Texture" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n        };\n        sampler2D _MainTex;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderDiffuseTex.jpg",alt:"SurfaceShaderDiffuseTex.jpg"})),(0,l.kt)("h2",{id:"\u6cd5\u7ebf\u8d34\u56fe"},"\u6cd5\u7ebf\u8d34\u56fe"),(0,l.kt)("p",null,"\u6211\u4eec\u6765\u6dfb\u52a0\u4e00\u4e9b\u6cd5\u7ebf\u8d34\u56fe\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Diffuse Bump" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _BumpMap ("Bumpmap", 2D) = "bump" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n          float2 uv_MainTex;\n          float2 uv_BumpMap;\n        };\n        sampler2D _MainTex;\n        sampler2D _BumpMap;\n        void surf (Input IN, inout SurfaceOutput o) {\n          o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n          o.Normal = UnpackNormal (tex2D (_BumpMap, IN.uv_BumpMap));\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderDiffuseBump.jpg",alt:"SurfaceShaderDiffuseBump.jpg"})),(0,l.kt)("h2",{id:"\u8fb9\u7f18\u5149\u7167"},"\u8fb9\u7f18\u5149\u7167"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5c1d\u8bd5\u6dfb\u52a0\u4e00\u4e9b\u8fb9\u7f18\u5149\u7167\u4ee5\u7a81\u51fa\u6e38\u620f\u5bf9\u8c61\u7684\u8fb9\u7f18\u3002\u6211\u4eec\u5c06\u6839\u636e\u8868\u9762\u6cd5\u7ebf\u548c\u89c6\u56fe\u65b9\u5411\u4e4b\u95f4\u7684\u89d2\u5ea6\u6dfb\u52a0\u4e00\u4e9b\u53d1\u5c04\u5149\u7167\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5185\u7f6e\u7684\u8868\u9762\u7740\u8272\u5668\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"viewDir"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Rim" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _BumpMap ("Bumpmap", 2D) = "bump" {}\n        _RimColor ("Rim Color", Color) = (0.26,0.19,0.16,0.0)\n        _RimPower ("Rim Power", Range(0.5,8.0)) = 3.0\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n            float2 uv_BumpMap;\n            float3 viewDir;\n        };\n        sampler2D _MainTex;\n        sampler2D _BumpMap;\n        float4 _RimColor;\n        float _RimPower;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n            o.Normal = UnpackNormal (tex2D (_BumpMap, IN.uv_BumpMap));\n            half rim = 1.0 - saturate(dot (normalize(IN.viewDir), o.Normal));\n            o.Emission = _RimColor.rgb * pow (rim, _RimPower);\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderRim.jpg",alt:"SurfaceShaderRim.jpg"})),(0,l.kt)("h2",{id:"\u7ec6\u8282\u7eb9\u7406"},"\u7ec6\u8282\u7eb9\u7406"),(0,l.kt)("p",null,"\u4e3a\u83b7\u5f97\u4e0d\u540c\u6548\u679c\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u4e0e\u57fa\u7840\u7eb9\u7406\u7ed3\u5408\u7684\u7ec6\u8282\u7eb9\u7406\u3002\u7ec6\u8282\u7eb9\u7406\u901a\u5e38\u5728\u6750\u8d28\u4e2d\u4f7f\u7528\u76f8\u540c\u7684 UV\uff0c\u4f46\u4f7f\u7528\u4e0d\u540c\u5e73\u94fa\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u8f93\u5165 UV \u5750\u6807\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Detail" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _BumpMap ("Bumpmap", 2D) = "bump" {}\n        _Detail ("Detail", 2D) = "gray" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n            float2 uv_BumpMap;\n            float2 uv_Detail;\n        };\n        sampler2D _MainTex;\n        sampler2D _BumpMap;\n        sampler2D _Detail;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n            o.Albedo *= tex2D (_Detail, IN.uv_Detail).rgb * 2;\n            o.Normal = UnpackNormal (tex2D (_BumpMap, IN.uv_BumpMap));\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u4f7f\u7528\u7eb9\u7406\u68cb\u76d8\u683c\u4e0d\u4e00\u5b9a\u6709\u5b9e\u9645\u610f\u4e49\uff0c\u4f46\u5728\u6b64\u793a\u4f8b\u4e2d\u53ef\u7528\u4e8e\u8bf4\u660e\u5176\u4f5c\u7528\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderDetailTex.jpg",alt:"SurfaceShaderDetailTex.jpg"})),(0,l.kt)("h2",{id:"\u5c4f\u5e55\u7a7a\u95f4\u4e2d\u7684\u7ec6\u8282\u7eb9\u7406"},"\u5c4f\u5e55\u7a7a\u95f4\u4e2d\u7684\u7ec6\u8282\u7eb9\u7406"),(0,l.kt)("p",null,"\u5c4f\u5e55\u7a7a\u95f4\u4e2d\u7684\u7ec6\u8282\u7eb9\u7406\u5bf9\u4e8e\u58eb\u5175\u5934\u90e8\u6a21\u578b\u6ca1\u6709\u5b9e\u9645\u610f\u4e49\uff0c\u4f46\u662f\u5728\u8fd9\u91cc\u53ef\u7528\u4e8e\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u5185\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"screenPos")," \u8f93\u5165\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/ScreenPos" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _Detail ("Detail", 2D) = "gray" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n            float4 screenPos;\n        };\n        sampler2D _MainTex;\n        sampler2D _Detail;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n            float2 screenUV = IN.screenPos.xy / IN.screenPos.w;\n            screenUV *= float2(8,6);\n            o.Albedo *= tex2D (_Detail, screenUV).rgb * 2;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7740\u8272\u5668\u5220\u9664\u4e86\u6cd5\u7ebf\u8d34\u56fe\uff0c\u53ea\u662f\u4e3a\u4e86\u7f29\u77ed\u4ee3\u7801\u957f\u5ea6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderDetailTexScreenPos.jpg",alt:"SurfaceShaderDetailTexScreenPos.jpg"})),(0,l.kt)("h2",{id:"\u7acb\u65b9\u4f53\u8d34\u56fe\u53cd\u5c04"},"\u7acb\u65b9\u4f53\u8d34\u56fe\u53cd\u5c04"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u7740\u8272\u5668\u5c06\u4f7f\u7528\u5185\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"worldRefl")," \u8f93\u5165\u6765\u8fdb\u884c\u7acb\u65b9\u4f53\u8d34\u56fe\u53cd\u5c04\u3002\u5b83\u4e0e\u5185\u7f6e\u7684\u53cd\u5c04/\u6f2b\u5c04\u7740\u8272\u5668\u975e\u5e38\u7c7b\u4f3c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/WorldRefl" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _Cube ("Cubemap", CUBE) = "" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n            float3 worldRefl;\n        };\n        sampler2D _MainTex;\n        samplerCUBE _Cube;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb * 0.5;\n            o.Emission = texCUBE (_Cube, IN.worldRefl).rgb;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u56e0\u4e3a\u5b83\u5c06\u53cd\u5c04\u989c\u8272\u6307\u5b9a\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Emission")," \uff0c\u6240\u4ee5\u6211\u4eec\u5f97\u5230\u4e86\u4e00\u4e2a\u975e\u5e38\u95ea\u4eae\u7684\u58eb\u5175\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderWorldRefl.jpg",alt:"SurfaceShaderWorldRefl.jpg"})),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u505a\u4e00\u4e9b\u53d7\u6cd5\u7ebf\u8d34\u56fe\u5f71\u54cd\u7684\u53cd\u5c04\uff0c\u9700\u8981\u7a0d\u5fae\u590d\u6742\u4e00\u4e9b\uff1a\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERNAL_DATA")," \u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"Input")," \u7ed3\u6784\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"WorldReflectionVector")," \u51fd\u6570\u5728\u5199\u5165\u6cd5\u7ebf\u8f93\u51fa\u540e\u8ba1\u7b97\u6bcf\u50cf\u7d20\u53cd\u5c04\u77e2\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/WorldRefl Normalmap" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _BumpMap ("Bumpmap", 2D) = "bump" {}\n        _Cube ("Cubemap", CUBE) = "" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n            float2 uv_BumpMap;\n            float3 worldRefl;\n            INTERNAL_DATA\n        };\n        sampler2D _MainTex;\n        sampler2D _BumpMap;\n        samplerCUBE _Cube;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb * 0.5;\n            o.Normal = UnpackNormal (tex2D (_BumpMap, IN.uv_BumpMap));\n            o.Emission = texCUBE (_Cube, WorldReflectionVector (IN, o.Normal)).rgb;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u8fdb\u884c\u4e86\u6cd5\u7ebf\u8d34\u56fe\u7684\u95ea\u4eae\u58eb\u5175\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderWorldReflNormalmap.jpg",alt:"SurfaceShaderWorldReflNormalmap.jpg"})),(0,l.kt)("h2",{id:"\u901a\u8fc7\u4e16\u754c\u7a7a\u95f4\u4f4d\u7f6e\u8fdb\u884c\u7684\u5207\u7247"},"\u901a\u8fc7\u4e16\u754c\u7a7a\u95f4\u4f4d\u7f6e\u8fdb\u884c\u7684\u5207\u7247"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u7740\u8272\u5668\u901a\u8fc7\u4e22\u5f03\u51e0\u4e4e\u6c34\u5e73\u7684\u73af\u5f62\u4e2d\u7684\u50cf\u7d20\u6765\u5bf9\u6e38\u620f\u5bf9\u8c61\u201c\u5207\u7247\u201d\u3002\u4e3a\u5b9e\u73b0\u6b64\u6548\u679c\uff0c\u5b83\u4f7f\u7528\u4e86\u57fa\u4e8e\u50cf\u7d20\u4e16\u754c\u4f4d\u7f6e\u7684 Cg/HLSL \u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"clip()"),"\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u5185\u7f6e\u7684\u8868\u9762\u7740\u8272\u5668\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"worldPos"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Slices" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _BumpMap ("Bumpmap", 2D) = "bump" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        Cull Off\n        CGPROGRAM\n        #pragma surface surf Lambert\n        struct Input {\n            float2 uv_MainTex;\n            float2 uv_BumpMap;\n            float3 worldPos;\n        };\n        sampler2D _MainTex;\n        sampler2D _BumpMap;\n        void surf (Input IN, inout SurfaceOutput o) {\n            clip (frac((IN.worldPos.y+IN.worldPos.z*0.1) * 5) - 0.5);\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n            o.Normal = UnpackNormal (tex2D (_BumpMap, IN.uv_BumpMap));\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderSlices.jpg",alt:"SurfaceShaderSlices.jpg"})),(0,l.kt)("h2",{id:"\u4f7f\u7528\u9876\u70b9\u4fee\u6539\u5668\u8fdb\u884c\u6cd5\u7ebf\u6324\u51fa"},"\u4f7f\u7528\u9876\u70b9\u4fee\u6539\u5668\u8fdb\u884c\u6cd5\u7ebf\u6324\u51fa"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u201c\u9876\u70b9\u4fee\u6539\u5668\u201d\u51fd\u6570\u6765\u4fee\u6539\u9876\u70b9\u7740\u8272\u5668\u4e2d\u7684\u4f20\u5165\u9876\u70b9\u6570\u636e\u3002\u8fd9\u53ef\u7528\u4e8e\u7a0b\u5e8f\u5316\u52a8\u753b\u548c\u6cbf\u6cd5\u7ebf\u6324\u51fa\u7b49\u64cd\u4f5c\u3002\u8868\u9762\u7740\u8272\u5668\u7f16\u8bd1\u6307\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"vertex:functionName")," \u5c06\u7528\u4e8e\u6b64\u76ee\u7684\uff0c\u5176\u4e2d\u7684\u4e00\u4e2a\u51fd\u6570\u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"inout appdata_full")," \u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u7740\u8272\u5668\u6cbf\u7740\u6cd5\u7ebf\u6309\u7167\u6750\u8d28\u4e2d\u6307\u5b9a\u7684\u91cf\u79fb\u52a8\u9876\u70b9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Normal Extrusion" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _Amount ("Extrusion Amount", Range(-1,1)) = 0.5\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert vertex:vert\n        struct Input {\n            float2 uv_MainTex;\n        };\n        float _Amount;\n        void vert (inout appdata_full v) {\n            v.vertex.xyz += v.normal * _Amount;\n        }\n        sampler2D _MainTex;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u6cbf\u7740\u6cd5\u7ebf\u79fb\u52a8\u9876\u70b9\u4f1a\u4ea7\u751f\u4e00\u4e2a\u80a5\u80d6\u7684\u58eb\u5175\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderNormalExtrusion.jpg",alt:"SurfaceShaderNormalExtrusion.jpg"})),(0,l.kt)("h2",{id:"\u6bcf\u9876\u70b9\u8ba1\u7b97\u7684\u81ea\u5b9a\u4e49\u6570\u636e"},"\u6bcf\u9876\u70b9\u8ba1\u7b97\u7684\u81ea\u5b9a\u4e49\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528\u9876\u70b9\u4fee\u6539\u5668\u51fd\u6570\uff0c\u8fd8\u53ef\u4ee5\u5728\u9876\u70b9\u7740\u8272\u5668\u4e2d\u8ba1\u7b97\u81ea\u5b9a\u4e49\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u6309\u50cf\u7d20\u4f20\u9012\u7ed9\u8868\u9762\u7740\u8272\u5668\u51fd\u6570\u3002\u6b64\u60c5\u51b5\u4e0b\u4f7f\u7528\u76f8\u540c\u7684\u7f16\u8bd1\u6307\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"vertex:functionName"),"\uff0c\u4f46\u8be5\u51fd\u6570\u5e94\u91c7\u7528\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"inout appdata_full")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"out Input"),"\u3002\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u586b\u5199\u9664\u5185\u7f6e\u503c\u4ee5\u5916\u7684\u4efb\u4f55\u8f93\u5165\u6210\u5458\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4ee5\u8fd9\u79cd\u65b9\u5f0f\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49\u8f93\u5165\u6210\u5458\u4e0d\u5f97\u5305\u542b\u4ee5\u201cuv\u201d\u5f00\u5934\u7684\u540d\u79f0\uff0c\u5426\u5219\u5b83\u4eec\u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5728\u9876\u70b9\u51fd\u6570\u4e2d\u8ba1\u7b97\u7684\u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"float3 customColor")," \u6210\u5458\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Custom Vertex Data" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert vertex:vert\n        struct Input {\n            float2 uv_MainTex;\n            float3 customColor;\n        };\n        void vert (inout appdata_full v, out Input o) {\n            UNITY_INITIALIZE_OUTPUT(Input,o);\n            o.customColor = abs(v.normal);\n        }\n        sampler2D _MainTex;\n        void surf (Input IN, inout SurfaceOutput o) {\n            o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n            o.Albedo *= IN.customColor;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"customColor")," \u8bbe\u7f6e\u4e3a\u6cd5\u7ebf\u7684\u7edd\u5bf9\u503c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderCustomVertexData.jpg",alt:"SurfaceShaderCustomVertexData.jpg"})),(0,l.kt)("p",null,"\u66f4\u5b9e\u9645\u7684\u7528\u9014\u53ef\u80fd\u662f\u8ba1\u7b97\u5185\u7f6e\u8f93\u5165\u53d8\u91cf\u4e0d\u63d0\u4f9b\u7684\u4efb\u4f55\u6bcf\u9876\u70b9\u6570\u636e\uff1b\u6216\u4f18\u5316\u7740\u8272\u5668\u8ba1\u7b97\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5728\u6e38\u620f\u5bf9\u8c61\u7684\u9876\u70b9\u5904\u8ba1\u7b97\u8fb9\u7f18\u5149\u7167\uff0c\u800c\u4e0d\u662f\u5728\u8868\u9762\u7740\u8272\u5668\u4e2d\u6309\u7167\u6bcf\u4e2a\u50cf\u7d20\u8fdb\u884c\u8ba1\u7b97\u3002"),(0,l.kt)("h2",{id:"\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668"},"\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u201c\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\u201d\u51fd\u6570\u6765\u4fee\u6539\u7740\u8272\u5668\u8ba1\u7b97\u7684\u6700\u7ec8\u989c\u8272\u3002\u8868\u9762\u7740\u8272\u5668\u7f16\u8bd1\u6307\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"finalcolor:functionName")," \u5c06\u7528\u4e8e\u6b64\u76ee\u7684\uff0c\u5176\u4e2d\u7684\u4e00\u4e2a\u51fd\u6570\u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Input IN, SurfaceOutput o, inout fixed4 color")," \u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7740\u8272\u5668\uff0c\u5b83\u5c06\u8272\u8c03\u5e94\u7528\u4e8e\u6700\u7ec8\u989c\u8272\u3002\u8fd9\u4e0e\u4ec5\u5bf9\u8868\u9762\u53cd\u7167\u7387\u989c\u8272\u5e94\u7528\u8272\u8c03\u4e0d\u540c\uff1a\u6b64\u8272\u8c03\u8fd8\u4f1a\u5f71\u54cd\u6765\u81ea\u5149\u7167\u8d34\u56fe\u3001\u5149\u7167\u63a2\u9488\u548c\u7c7b\u4f3c\u989d\u5916\u6765\u6e90\u7684\u4efb\u4f55\u989c\u8272\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Tint Final Color" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _ColorTint ("Tint", Color) = (1.0, 0.6, 0.6, 1.0)\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert finalcolor:mycolor\n        struct Input {\n            float2 uv_MainTex;\n        };\n        fixed4 _ColorTint;\n        void mycolor (Input IN, SurfaceOutput o, inout fixed4 color)\n        {\n            color *= _ColorTint;\n        }\n        sampler2D _MainTex;\n        void surf (Input IN, inout SurfaceOutput o) {\n             o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderFinalColorSimple.jpg",alt:"SurfaceShaderFinalColorSimple.jpg"})),(0,l.kt)("h2",{id:"\u4f7f\u7528\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\u81ea\u5b9a\u4e49\u96fe\u6548"},"\u4f7f\u7528\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\u81ea\u5b9a\u4e49\u96fe\u6548"),(0,l.kt)("p",null,"\u4f7f\u7528\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\uff08\u89c1\u4e0a\u6587\uff09\u7684\u5e38\u89c1\u60c5\u51b5\u662f\u5728\u524d\u5411\u6e32\u67d3\u4e2d\u5b9e\u73b0\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684\u96fe\u6548\u3002\u96fe\u6548\u9700\u8981\u5f71\u54cd\u6700\u7ec8\u8ba1\u7b97\u7684\u50cf\u7d20\u7740\u8272\u5668\u989c\u8272\uff0c\u8fd9\u6b63\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"finalcolor")," \u4fee\u6539\u5668\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u6839\u636e\u4e0e\u5c4f\u5e55\u4e2d\u5fc3\u7684\u8ddd\u79bb\u5e94\u7528\u96fe\u6548\u8272\u8c03\u7684\u7740\u8272\u5668\u3002\u6b64\u7740\u8272\u5668\u5c06\u9876\u70b9\u4fee\u6539\u5668\u4e0e\u81ea\u5b9a\u4e49\u9876\u70b9\u6570\u636e (",(0,l.kt)("inlineCode",{parentName:"p"},"fog"),") \u548c\u6700\u7ec8\u989c\u8272\u4fee\u6539\u5668\u7ec4\u5408\u5728\u4e00\u8d77\u3002\u7528\u4e8e\u524d\u5411\u6e32\u67d3\u9644\u52a0\u901a\u9053\u65f6\uff0c\u96fe\u6548\u9700\u8981\u6de1\u5316\u4e3a\u9ed1\u8272\u3002\u6b64\u793a\u4f8b\u5c06\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u5e76\u68c0\u67e5\u662f\u5426\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"UNITY_PASS_FORWARDADD"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  Shader "Example/Fog via Final Color" {\n      Properties {\n        _MainTex ("Texture", 2D) = "white" {}\n        _FogColor ("Fog Color", Color) = (0.3, 0.4, 0.7, 1.0)\n      }\n      SubShader {\n        Tags { "RenderType" = "Opaque" }\n        CGPROGRAM\n        #pragma surface surf Lambert finalcolor:mycolor vertex:myvert\n        struct Input {\n            float2 uv_MainTex;\n            half fog;\n        };\n        void myvert (inout appdata_full v, out Input data)\n        {\n            UNITY_INITIALIZE_OUTPUT(Input,data);\n            float4 hpos = UnityObjectToClipPos(v.vertex);\n          hpos.xy/=hpos.w;\n            data.fog = min (1, dot (hpos.xy, hpos.xy)*0.5);\n        }\n        fixed4 _FogColor;\n        void mycolor (Input IN, SurfaceOutput o, inout fixed4 color)\n        {\n            fixed3 fogColor = _FogColor.rgb;\n            #ifdef UNITY_PASS_FORWARDADD\n            fogColor = 0;\n            #endif\n            color.rgb = lerp (color.rgb, fogColor, IN.fog);\n        }\n        sampler2D _MainTex;\n        void surf (Input IN, inout SurfaceOutput o) {\n             o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;\n        }\n        ENDCG\n      } \n      Fallback "Diffuse"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SurfaceShaderFinalColorFog.jpg",alt:"SurfaceShaderFinalColorFog.jpg"})),(0,l.kt)("h2",{id:"\u7ebf\u6027\u96fe"},"\u7ebf\u6027\u96fe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Example/Linear Fog" {\n  Properties {\n    _MainTex ("Base (RGB)", 2D) = "white" {}\n  }\n  SubShader {\n    Tags { "RenderType"="Opaque" }\n    LOD 200\n    \n    CGPROGRAM\n    #pragma surface surf Lambert finalcolor:mycolor vertex:myvert\n    #pragma multi_compile_fog\n\n    sampler2D _MainTex;\n    uniform half4 unity_FogStart;\n    uniform half4 unity_FogEnd;\n\n    struct Input {\n      float2 uv_MainTex;\n      half fog;\n    };\n\n    void myvert (inout appdata_full v, out Input data) {\n      UNITY_INITIALIZE_OUTPUT(Input,data);\n      float pos = length(UnityObjectToViewPos(v.vertex).xyz);\n      float diff = unity_FogEnd.x - unity_FogStart.x;\n      float invDiff = 1.0f / diff;\n      data.fog = clamp ((unity_FogEnd.x - pos) * invDiff, 0.0, 1.0);\n    }\n    void mycolor (Input IN, SurfaceOutput o, inout fixed4 color) {\n      #ifdef UNITY_PASS_FORWARDADD\n        UNITY_APPLY_FOG_COLOR(IN.fog, color, float4(0,0,0,0));\n      #else\n        UNITY_APPLY_FOG_COLOR(IN.fog, color, unity_FogColor);\n      #endif\n    }\n\n    void surf (Input IN, inout SurfaceOutput o) {\n      half4 c = tex2D (_MainTex, IN.uv_MainTex);\n      o.Albedo = c.rgb;\n      o.Alpha = c.a;\n    }\n    ENDCG\n  } \n  FallBack "Diffuse"\n}\n')),(0,l.kt)("h2",{id:"\u8d34\u82b1"},"\u8d34\u82b1"),(0,l.kt)("p",null,"\u8d34\u82b1\u901a\u5e38\u7528\u4e8e\u5728\u8fd0\u884c\u65f6\u5411\u6750\u8d28\u6dfb\u52a0\u7ec6\u8282\uff08\u4f8b\u5982\uff0c\u5b50\u5f39\u51b2\u51fb\u529b\u6548\u679c\uff09\u3002\u8d34\u82b1\u5728\u5ef6\u8fdf\u6e32\u67d3\u4e2d\u7279\u522b\u6709\u7528\uff0c\u56e0\u4e3a\u8d34\u82b1\u5728\u7167\u4eae\u4e4b\u524d\u4f1a\u6539\u53d8 G \u7f13\u51b2\u533a\uff0c\u56e0\u6b64\u53ef\u4ee5\u8282\u7701\u5f00\u9500\u3002"),(0,l.kt)("p",null,"\u5728\u5e38\u89c4\u60c5\u51b5\u4e0b\uff0c\u8d34\u82b1\u5e94\u8be5\u5728\u4e0d\u900f\u660e\u5bf9\u8c61\u4e4b\u540e\u6e32\u67d3\uff0c\u5e76\u4e14\u4e0d\u5e94\u8be5\u662f\u9634\u5f71\u6295\u5c04\u7269\uff0c\u5982\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u7684 ShaderLab\u201cTags\u201d\u4e2d\u6240\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Shader "Example/Decal" {\n  Properties {\n    _MainTex ("Base (RGB)", 2D) = "white" {}\n  }\n  SubShader {\n    Tags { "RenderType"="Opaque" "Queue"="Geometry+1" "ForceNoShadowCasting"="True" }\n    LOD 200\n    Offset -1, -1\n    \n    CGPROGRAM\n    #pragma surface surf Lambert decal:blend\n    \n    sampler2D _MainTex;\n    \n    struct Input {\n      float2 uv_MainTex;\n    };\n    \n    void surf (Input IN, inout SurfaceOutput o) {\n        half4 c = tex2D (_MainTex, IN.uv_MainTex);\n        o.Albedo = c.rgb;\n        o.Alpha = c.a;\n      }\n    ENDCG\n    }\n}\n')))}m.isMDXComponent=!0}}]);