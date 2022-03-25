"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52344],{3905:function(e,a,r){r.d(a,{Zo:function(){return h},kt:function(){return y}});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function d(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),l=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},h=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),p=l(r),y=n,w=p["".concat(i,".").concat(y)]||p[y]||c[y]||o;return r?t.createElement(w,s(s({ref:a},h),{},{components:r})):t.createElement(w,s({ref:a},h))}));function y(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,s[1]=d;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},22813:function(e,a,r){r.r(a),r.d(a,{assets:function(){return h},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var t=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],d={id:"shader-keywords-scripts",title:"Using shader keywords with C# scripts",slug:"/shader-variants-and-keywords/shader-keywords-scripts"},i="Using shader keywords with C",l={unversionedId:"graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-scripts",id:"graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-scripts",title:"Using shader keywords with C# scripts",description:"scripts",source:"@site/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-scripts.md",sourceDirName:"graphics/shaders/shaders-overview/shader-variants-and-keywords",slug:"/shader-variants-and-keywords/shader-keywords-scripts",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords-scripts",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/shaders/shaders-overview/shader-variants-and-keywords/shader-keywords-scripts.md",tags:[],version:"current",frontMatter:{id:"shader-keywords-scripts",title:"Using shader keywords with C# scripts",slug:"/shader-variants-and-keywords/shader-keywords-scripts"},sidebar:"tutorialSidebar",previous:{title:"Using shader keywords with the material Inspector",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords-material-inspector"},next:{title:"Shader keywords",permalink:"/doc-unity-manual/docs/shader-variants-and-keywords/shader-keywords"}},h={},c=[{value:"Local and global shader keywords",id:"local-and-global-shader-keywords",level:2},{value:"Local shader keywords",id:"local-shader-keywords",level:3},{value:"Global shader keywords",id:"global-shader-keywords",level:3},{value:"How local and global shader keywords interact",id:"how-local-and-global-shader-keywords-interact",level:3},{value:"Shader variants or dynamic branching",id:"shader-variants-or-dynamic-branching",level:2},{value:"Enabling and disabling shader keywords",id:"enabling-and-disabling-shader-keywords",level:2},{value:"Managing sets of keywords at runtime",id:"managing-sets-of-keywords-at-runtime",level:2}],p={toc:c};function y(e){var a=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-shader-keywords-with-c-scripts"},"Using shader keywords with C# scripts"),(0,o.kt)("p",null,"You can enable or disable shader keywords. When you enable or disable a shader keyword, the shader displays the appropriate conditional behavior. Depending on whether the keyword works with shader variants or dynamic branching, this means that either Unity renders the appropriate shader variant, or the GPU executes the appropriate branch."),(0,o.kt)("p",null,"\u672c\u9875\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#local-and-global-shader-keywords"},"Local and global shader keywords")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shader-variants-or-dynamic-branching"},"Shader variants or dynamic branching")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enabling-and-disabling-shader-keywords"},"Enabling and disabling shader keywords")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#managing-sets-of-keywords-at-runtime"},"Managing sets of keywords at runtime"))),(0,o.kt)("h2",{id:"local-and-global-shader-keywords"},"Local and global shader keywords"),(0,o.kt)("p",null,"When Unity represents shader keywords in C#, it uses the concept of  ",(0,o.kt)("strong",{parentName:"p"},"local shader keywords"),"  and  ",(0,o.kt)("strong",{parentName:"p"},"global shader keywords")," ."),(0,o.kt)("p",null,"Local shader keywords comprise all keywords that you declare in shader source files. Local shader keywords affect an individual shader or compute shader. Local keywords can have local or global scope, which affects whether they can be overridden by global shader keywords."),(0,o.kt)("p",null,"Global shader keywords act as overrides for local shader keywords. You don\u2019t declare these in shader source files; they exist only in C# code. Global shader keywords can affect multiple shaders and compute shaders at the same time."),(0,o.kt)("h3",{id:"local-shader-keywords"},"Local shader keywords"),(0,o.kt)("p",null,"When you declare a shader keyword in a shader source file, Unity represents this in C# with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.LocalKeyword.html"},"LocalKeyword")," struct. This is called a  ",(0,o.kt)("strong",{parentName:"p"},"local shader keyword")," ."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Rendering.LocalKeyword-isOverridable.html"},"isOverridable")," property of a ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalKeyword")," indicates whether the keyword was declared with a global or local scope in the source file. It is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the keyword was declared with global scope and can therefore be overridden by a global shader keyword with the same name. It is ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the keyword was declared with local scope, and therefore cannot be overridden by a global shader keyword with the same name."),(0,o.kt)("p",null,"Unity stores all local shader keywords that affect a shader or compute shader in a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.LocalKeywordSpace.html"},"LocalKeywordSpace")," struct. For a graphics shader, you can access this with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Shader.keywordSpace.html"},"Shader.keywordSpace"),". For a compute shader, you can access this with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/ComputeShader-keywordSpace.html"},"ComputeShader-keywordSpace"),"."),(0,o.kt)("h3",{id:"global-shader-keywords"},"Global shader keywords"),(0,o.kt)("p",null,"In addition to the local shader keywords that you declared in your source files, Unity maintains a separate list of  ",(0,o.kt)("strong",{parentName:"p"},"global shader keywords")," . You don\u2019t declare these in shader source files; instead, they are runtime overrides for local shader keywords that you work with in C#. Global shader keywords can affect multiple shaders and compute shaders at the same time."),(0,o.kt)("p",null,"Unity represents a global shader keyword with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.GlobalKeyword.html"},"GlobalKeyword")," struct."),(0,o.kt)("p",null,"Setting a global shader keyword can be convenient when you need to enable or disable the same shader keyword for many materials and compute shaders. However, it has the following potential downsides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting the global state of keywords can lead to unintended consequences if shaders accidentally define a keyword with the same name. You can guard against this by declaring keywords with local scope, or by naming keywords in a way that reduces the likelihood of clashes."),(0,o.kt)("li",{parentName:"ul"},"When you create a new ",(0,o.kt)("inlineCode",{parentName:"li"},"GlobalKeyword"),", Unity updates its internal mapping between global and local keyword space for all shaders and compute shaders loaded at this point. This can be a CPU-intensive operation. To reduce the impact of this operation, try to create all global keywords shortly after application startup, while your application is loading.")),(0,o.kt)("h3",{id:"how-local-and-global-shader-keywords-interact"},"How local and global shader keywords interact"),(0,o.kt)("p",null,"When a global and local shader keyword with the same name have different states, Unity uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"isOverridable")," property of a ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalKeyword")," to determine whether the keyword is enabled or disabled for an individual material or compute shader. ",(0,o.kt)("inlineCode",{parentName:"p"},"isOverridable")," is true if the keyword was declared with global scope, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if it was declared with local scope."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"isOverridable")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),": If a global keyword with the same name exists and is enabled, Unity uses the state of the global keyword. Otherwise, Unity uses the state of the local keyword."),(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"isOverridable")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),": Unity always uses the state of the local keyword.")),(0,o.kt)("p",null,"Therefore, to understand whether a shader keyword is enabled or disabled for an individual material or compute shader, you must examine the state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"isOverridable")," property and the global and/or local keyword state."),(0,o.kt)("p",null,"This example demonstrates how to check whether Unity considers a keyword enabled or disabled for a material:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing UnityEngine.Rendering;\n\npublic class KeywordExample : MonoBehaviour\n{\n    public Material material;\n\n    void Start()\n    {\n        CheckShaderKeywordState();\n    }\n\n    void CheckShaderKeywordState()\n    {\n        // Get the instance of the Shader class that the material uses\n        var shader = material.shader;\n\n        // Get all the local keywords that affect the Shader\n        var keywordSpace = shader.keywordSpace;\n\n        // Iterate over the local keywords\n        foreach (var localKeyword in keywordSpace.keywords)\n        {\n            // If the local keyword is overridable (i.e., it was declared with a global scope),\n            // and a global keyword with the same name exists and is enabled,\n            // then Unity uses the global keyword state\n            if (localKeyword.isOverridable && Shader.IsKeywordEnabled(localKeyword.name))\n            {\n                Debug.Log("Local keyword with name of " + localKeyword.name + " is overridden by a global keyword, and is enabled");\n            }\n            // Otherwise, Unity uses the local keyword state\n            else\n            {\n                var state = material.IsKeywordEnabled(localKeyword) ? "enabled" : "disabled";\n                Debug.Log("Local keyword with name of " + localKeyword.name + " is " + state);\n            }            \n        }\n    }\n}\n\n')),(0,o.kt)("h2",{id:"shader-variants-or-dynamic-branching"},"Shader variants or dynamic branching"),(0,o.kt)("p",null,"In Unity, you can use shader keywords with shader variants, or you can use them with dynamic branching. You decide when you declare the keywords."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Rendering.LocalKeyword-isDynamic.html"},"isDynamic")," property of a ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalKeyword")," indicates whether the keyword was declared for use with dynamic branching in the shader source file. It is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the keyword was declared for use with dynamic branching, and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if it was declared for use with shader variants."),(0,o.kt)("h2",{id:"enabling-and-disabling-shader-keywords"},"Enabling and disabling shader keywords"),(0,o.kt)("p",null,"To check whether a local keyword is enabled for a graphics shader, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.IsKeywordEnabled.html"},"Material.IsKeywordEnabled")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.enabledKeywords.html"},"Material.enabledKeywords"),". For a compute shader, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ComputeShader.IsKeywordEnabled.html"},"ComputeShader.IsKeywordEnabled"),", or ","[","ComputeShader.enabledKeywords","]","."),(0,o.kt)("p",null,"To check whether a global keyword is enabled, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Shader.IsKeywordEnabled.html"},"Shader.IsKeywordEnabled")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Shader.enabledGlobalKeywords.html"},"Shader.enabledGlobalKeywords")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ComputeShader.enabledKeywords.html"},"ComputeShader.enabledKeywords"),"."),(0,o.kt)("p",null,"To enable or disable a local shader keyword for a graphics shader, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.SetKeyword.html"},"Material.SetKeyword"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.EnableKeyword.html"},"Material.EnableKeyword"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Material.DisableKeyword.html"},"Material.DisableKeyword"),". For a compute shader, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ComputeShader.SetKeyword.html"},"ComputeShader.SetKeyword"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ComputeShader.EnableKeyword.html"},"ComputeShader.EnableKeyword"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ComputeShader.DisableKeyword.html"},"ComputeShader.DisableKeyword"),"."),(0,o.kt)("p",null,"To enable or disable a global shader keyword, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Shader.SetKeyword.html"},"Shader.SetKeyword"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Shader.EnableKeyword.html"},"ComputeShader.EnableKeyword"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Shader.DisableKeyword.html"},"ComputeShader.DisableKeyword"),"."),(0,o.kt)("p",null,"To enable or disable a local or global keyword with a Command Buffer, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.CommandBuffer.EnableKeyword.html"},"CommandBuffer.EnableKeyword"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.CommandBuffer.DisableKeyword.html"},"CommandBuffer.DisableKeyword")," ."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  When you enable or disable keywords that work with shader variants, Unity uses different shader variants. Changing shader variants at runtime can impact performance. If a change in keywords requires a variant to be used for the first time, it can lead to hitches while the graphics driver prepares the shader program. This can be a particular problem for large or complex shaders, or if a global keyword state change affects multiple shaders. To avoid this, if you use keywords with shader variants, ensure that you consider keyword variants in your shader loading and prewarming strategy. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/shaders-overview/shader-loading"},"Shader loading"),"."),(0,o.kt)("h2",{id:"managing-sets-of-keywords-at-runtime"},"Managing sets of keywords at runtime"),(0,o.kt)("p",null,"When you author your shader, you declare keywords in sets. A set contains mutually-exclusive keywords."),(0,o.kt)("p",null,"At runtime, Unity has no concept of these sets. It allows you to enable or disable any keyword independently, and enabling or disabling a keyword has no effect on the state of any other keyword. This means that it is possible to enable multiple keywords from the same set, or disable all the keywords in a set."),(0,o.kt)("p",null,"If you use keywords with shader variants, when more than one keyword in a set is enabled or no keywords in a set are enabled, Unity chooses a variant that it considers a \u201cgood enough\u201d match. There is no guarantee about what exactly happens, and it can lead to unintended results. It is best to avoid this situation by managing keyword state carefully."),(0,o.kt)("p",null,"If you use keywords with dynamic branching, when more than one keyword in a set is enabled or no keywords in a set are enabled, the conditional branches execute accordingly. For example, if both ",(0,o.kt)("inlineCode",{parentName:"p"},"KEYWORD_A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"KEYWORD_B")," are enabled, the branches for ",(0,o.kt)("inlineCode",{parentName:"p"},"if (KEYWORD_A)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"if (KEYWORD_B)")," will both execute."))}y.isMDXComponent=!0}}]);