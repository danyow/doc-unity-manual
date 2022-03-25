"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24657],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?t.createElement(k,s(s({ref:n},p),{},{components:a})):t.createElement(k,s({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51113:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"SL-PackageRequirements",title:"ShaderLab specifying package requirements",slug:"/sl-reference/sl-package-requirements"},l="ShaderLab: specifying package requirements",c={unversionedId:"graphics/shaders/shader-writing/sl-reference/SL-PackageRequirements",id:"graphics/shaders/shader-writing/sl-reference/SL-PackageRequirements",title:"ShaderLab specifying package requirements",description:"Some shaders need to support multiple render pipelines simultaneously. Adding package requirements to SubShaders and Passes enables you to avoid compilation errors when shader code uses an include file from a package that is not installed or requires a specific version of a package to compile.",source:"@site/docs/graphics/shaders/shader-writing/sl-reference/sl-package-requirements.md",sourceDirName:"graphics/shaders/shader-writing/sl-reference",slug:"/sl-reference/sl-package-requirements",permalink:"/doc-unity-manual/docs/sl-reference/sl-package-requirements",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shader-writing/sl-reference/sl-package-requirements.md",tags:[],version:"current",frontMatter:{id:"SL-PackageRequirements",title:"ShaderLab specifying package requirements",slug:"/sl-reference/sl-package-requirements"},sidebar:"tutorialSidebar",previous:{title:"ShaderLab \u547d\u4ee4\uff1aZWrite",permalink:"/doc-unity-manual/docs/shader-shaderlab-commands/sl-zwrite"},next:{title:"ShaderLab\uff1a\u5b9a\u4e49\u4e00\u4e2a\u901a\u9053",permalink:"/doc-unity-manual/docs/sl-pass"}},p={},u=[{value:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027",level:2},{value:"Using the PackageRequirements block",id:"using-the-packagerequirements-block",level:2},{value:"Version syntax",id:"version-syntax",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Error checking",id:"error-checking",level:3},{value:"Malformed versions or empty package name",id:"malformed-versions-or-empty-package-name",level:4},{value:"Multiple dependencies on the same package",id:"multiple-dependencies-on-the-same-package",level:4},{value:"Conflicting dependency declarations",id:"conflicting-dependency-declarations",level:4},{value:"Conflicting dependency declarations between SubShaders and Passes",id:"conflicting-dependency-declarations-between-subshaders-and-passes",level:4}],d={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shaderlab-specifying-package-requirements"},"ShaderLab: specifying package requirements"),(0,i.kt)("p",null,"Some shaders need to support multiple render pipelines simultaneously. Adding package requirements to ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-sub-shader"},"SubShaders")," and ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sl-pass"},"Passes")," enables you to avoid compilation errors when shader code uses an include file from a package that is not installed or requires a specific version of a package to compile."),(0,i.kt)("h2",{id:"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"},"\u6e32\u67d3\u7ba1\u7ebf\u517c\u5bb9\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u529f\u80fd\u540d\u79f0")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5185\u7f6e\u6e32\u67d3\u7ba1\u7ebf")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u901a\u7528\u6e32\u67d3\u7ba1\u7ebf (URP)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u9ad8\u6e05\u6e32\u67d3\u7ba1\u7ebf (HDRP)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u81ea\u5b9a\u4e49 SRP")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ShaderLab: PackageRequirements block")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,i.kt)("h2",{id:"using-the-packagerequirements-block"},"Using the PackageRequirements block"),(0,i.kt)("p",null,"To specify package requirements for a SubShader or a Pass, you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PackageRequirements")," block. ShaderLab supports a single ",(0,i.kt)("inlineCode",{parentName:"p"},"PackageRequirements")," block per SubShader or Pass, but each block can specify multiple package requirements."),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Note")," : if you provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"PackageRequirements")," block, it must come before all other declarations inside the SubShader or Pass."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u7b7e\u540d")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PackageRequirements{ [requirement definition]}")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the package requirements for the Pass or SubShader.")))),(0,i.kt)("p",null,"There are multiple ways to declare package requirements. Each one provides a different behavior. They are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u201c","<","package name",">","\u201d")," : Specifies that the SubShader or Pass works with any version of the package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u201c","<","package name",">","\u201d: \u201c","<","version restrictions",">","\u201d")," : Specifies that the SubShader or Pass only works with a subset of package versions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u201c","<","package name",">","\u201d: \u201cunity=","<","version restrictions",">","\u201d")," : Specifies that the SubShader or Pass only works with a subset of Unity versions and requires a package with the given name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u201cunity\u201d:\u201c","<","version restrictions",">","\u201d")," : Specifies that the SubShader or Pass only works with a subset of Unity versions.")),(0,i.kt)("p",null,"Version restrictions define a set of version ranges. If the installed version of a required package is not inside any of the ranges, the package requirement is not met. Similarly, if a requirement specifies a set of Unity version restrictions, the same applies to the current version of Unity. For information about the syntax of version restrictions, see ",(0,i.kt)("a",{parentName:"p",href:"#version-syntax"},"Version syntax"),"."),(0,i.kt)("p",null,"If a SubShader or Pass declares package requirements that the project does not meet, Unity excludes the SubShader or Pass from further processing and compilation. This happens if the project does not include the required packages, or includes them but not with a compatible version. If a shader does not contain a single SubShader that meets the requirements, or if no SubShader contains Passes that meet the requirements, the Console window shows a warning message."),(0,i.kt)("h3",{id:"version-syntax"},"Version syntax"),(0,i.kt)("p",null,"In ShaderLab\u2019s package requirements, a version uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"major.minor")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"major.minor.patch")," format. If you only use ",(0,i.kt)("inlineCode",{parentName:"p"},"major.minor"),", Unity uses ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"patch"),". Package versions can also include a ",(0,i.kt)("inlineCode",{parentName:"p"},"-preview")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"-preview.n")," postfix where ",(0,i.kt)("inlineCode",{parentName:"p"},"-preview")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"-preview.0"),". Preview versions come before non-preview versions, so ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.3-preview.4")," comes after ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.2")," but before ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2.3"),"."),(0,i.kt)("p",null,"There are multiple ways to specify a version range. Each one provides a different behavior. They are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"<","version",">")," : Includes the version you enter and all versions after that. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"1.2.3")," includes all versions starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"1.2.3"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[","<","version",">","]")," : Specifies the exact version. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"[1.2.3]")," only includes version ",(0,i.kt)("inlineCode",{parentName:"li"},"1.2.3"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[","<","version1",">",",","<","version2",">","]")," : Specifies a range between ","<","version1",">"," and ","<","version2",">",". Using square brackets and round brackets causes the range to include or exclude to version respectively. The opening bracket affects ","<","version1",">"," and the closing bracket affects ","<","version2",">",". Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"[1.2.3,2.3.4)")," includes all versions from 1.2.3 to 2.3.3.")),(0,i.kt)("p",null,"You can also specify sets of version ranges for a single package. To create a set of version ranges from individual ranges, use a semicolon as a separator. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[2.0,3.4.5];[3.7];4.0")," includes versions from 2.0.0 to 3.4.5, version 3.7.0, and version 4.0.0 and above."),(0,i.kt)("p",null,"When you set the versions for a package, be aware of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Versions, version ranges, and sets of version ranges cannot contain any extra characters."),(0,i.kt)("li",{parentName:"ul"},"Version ranges cannot be empty."),(0,i.kt)("li",{parentName:"ul"},"Sets of version ranges cannot have intersections.")),(0,i.kt)("p",null,"If the syntax does not adhere to the above, the version restriction is invalid. For more information on what happens with invalid package requirements, see ",(0,i.kt)("a",{parentName:"p",href:"#error-checking"},"Error checking"),"."),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"The following code example shows how to specify package requirements in both a SubShader and a Pass. The SubShader declares a single package requirement for a package called \u201ccom.my.package\u201d and works with any version of this package starting from 2.2.0. The SubShader has two Passes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first Pass requires:"),(0,i.kt)("li",{parentName:"ul"},"The Universal Render Pipeline package with a version between 10.2.1 and 11.0."),(0,i.kt)("li",{parentName:"ul"},"The Text Mesh Pro package with a version of 3.2 or above."),(0,i.kt)("li",{parentName:"ul"},"The second Pass requires:"),(0,i.kt)("li",{parentName:"ul"},"The High-Definition Render Pipeline package with a version between 8.0 to 8.5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Shader "Examples/ExampleShader"\n{\n    SubShader\n    {\n        PackageRequirements\n        {\n            "com.my.package": "2.2"\n        }\n        Pass\n        {\n            PackageRequirements\n            {\n                "com.unity.render-pipelines.universal": "[10.2.1,11.0]"\n                "com.unity.textmeshpro": "3.2"\n            }\n        }\n        Pass\n        {\n            PackageRequirements\n            {\n                "com.unity.render-pipelines.high-definition": "[8.0,8.5]"\n            }\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"error-checking"},"Error checking"),(0,i.kt)("p",null,"If you define package requirements that can never be satisfied, the shader import process fails with an error. This section provides examples of the most common invalid package requirement definitions."),(0,i.kt)("h4",{id:"malformed-versions-or-empty-package-name"},"Malformed versions or empty package name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'PackageRequirements {\n  "com.some.package.x": "[10.2.1,9.0]"      // Error, empty version range\n  "com.some.package.y": "[10.2.1.9,11.0]"       // Error, incorrect version format\n  "com.some.package.z": "[2.3,3.5],[3.0,4.0]"               // Error, ranges intersect\n  "" : "[2.3.4,3.4.5]"                  // Error, no package name provided\n}\n')),(0,i.kt)("h4",{id:"multiple-dependencies-on-the-same-package"},"Multiple dependencies on the same package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'PackageRequirements {\n  "com.some.package.x": "[10.2.1,11.0]"\n  "com.some.package.x": "[11.2.1,12.0]" // Error, dependency on "com.some.package.x" declared twice\n  "unity" : "2021.2"\n  "unity" : "2021.3"    // Error, dependency on Unity version declared twice\n}\n')),(0,i.kt)("h4",{id:"conflicting-dependency-declarations"},"Conflicting dependency declarations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'PackageRequirements {\n  "com.some.package.x": "unity=[2021.2.1,2021.3.3]"\n  "unity" : "2021.2"    // Error: Unity version requirement cannot be declared on a package and on its own simultaneously\n}\n')),(0,i.kt)("h4",{id:"conflicting-dependency-declarations-between-subshaders-and-passes"},"Conflicting dependency declarations between SubShaders and Passes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'SubShader {\n  PackageRequirements {\n    "com.some.package.x": "[2.3.4,3.4.5]"\n    "com.some.package.z": "[1.1,3.2]"\n    "unity": "2021.2"\n  }\n  Pass {\n    PackageRequirements {\n      "com.some.package.y": "[1.2.2,2.5]"   // Fine, SubShader doesn\u2019t declare a dependency on "com.some.package.y"\n      "com.some.package.z": "[2.0,3.1]" // Fine, SubShader dependency intersects the provided version range\n      "com.some.package.x": "[1.1.1, 2.2.2]"    // Error, SubShader version range for "com.some.package.x" does not intersect the provided range\n      "com.some.package.w": "unity=[2021.2.1,2021.2.5]" // Fine, SubShader dependency intersects the provided version range\n      "com.some.package.u": "unity=[2020.2.1,2020.2.5]" // Error, SubShader Unity version range does not intersect the provided range\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);