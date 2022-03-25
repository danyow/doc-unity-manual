"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1119],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=d(n),p=r,m=g["".concat(u,".").concat(p)]||g[p]||s[p]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15051:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"UpgradeGuide20211",title:"Upgrading to Unity 2021.1",slug:"/upgrade-guides/upgrade-guide20211"},u="Upgrading to Unity 2021.1",d={unversionedId:"unity-overview/upgrade-guides/UpgradeGuide20211",id:"unity-overview/upgrade-guides/UpgradeGuide20211",title:"Upgrading to Unity 2021.1",description:"Note : Follow the advice in this section in release order. For example, if you need to upgrade your project from 2018 to 2021, read the 2019 upgrade guides to see if there are any changes that you need to make before you read the 2021 upgrade guides.",source:"@site/docs/unity-overview/upgrade-guides/upgrade-guide20211.md",sourceDirName:"unity-overview/upgrade-guides",slug:"/upgrade-guides/upgrade-guide20211",permalink:"/doc-unity-manual/docs/upgrade-guides/upgrade-guide20211",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/upgrade-guides/upgrade-guide20211.md",tags:[],version:"current",frontMatter:{id:"UpgradeGuide20211",title:"Upgrading to Unity 2021.1",slug:"/upgrade-guides/upgrade-guide20211"},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7\u5230 Unity 2020 LTS",permalink:"/doc-unity-manual/docs/upgrade-guides/upgrade-guide2020lts"},next:{title:"Upgrading to Unity 2021.2",permalink:"/doc-unity-manual/docs/upgrade-guides/upgrade-guide20212"}},c={},s=[{value:"Device Simulator",id:"device-simulator",level:2},{value:"Environment Lighting",id:"environment-lighting",level:2},{value:"Enable Code Coverage preference",id:"enable-code-coverage-preference",level:2}],g={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-to-unity-20211"},"Upgrading to Unity 2021.1"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note")," : Follow the advice in this section in release order. For example, if you need to upgrade your project from 2018 to 2021, read the 2019 upgrade guides to see if there are any changes that you need to make before you read the 2021 upgrade guides."),(0,o.kt)("p",null,"This page lists changes in the Unity 2021.1 version which might affect existing projects when you upgrade from 2020 LTS to 2021.1."),(0,o.kt)("h2",{id:"device-simulator"},"Device Simulator"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.device-simulator@latest?subfolder=/manual/index.html"},"Device Simulator")," is now part of the Editor and is accessible from the Game window. To set up the Device Simulator, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"UnityEngine.Device")," namespace to the Screen, Application, and SystemInfo classes: ",(0,o.kt)("inlineCode",{parentName:"p"},"UnityEngine.Device.Screen;")," ",(0,o.kt)("inlineCode",{parentName:"p"},"UnityEngine.Device.Application;")," ",(0,o.kt)("inlineCode",{parentName:"p"},"UnityEngine.Device.SystemInfo;")),(0,o.kt)("p",null,"To switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"UnityEngine.Device"),", add the following logic to each script you want to use with the simulator: ",(0,o.kt)("inlineCode",{parentName:"p"},"using Screen = UnityEngine.Device.Screen; using Application = UnityEngine.Device.Application; using SystemInfo = UnityEngine.Device.SystemInfo;")," The new namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"UnityEngine.Device")," transitions smoothly from Simulator (when in Editor) to actual device API with a runtime build."),(0,o.kt)("h2",{id:"environment-lighting"},"Environment Lighting"),(0,o.kt)("p",null,"The Editor now automatically bakes the default ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/skyboxes/skyboxes-using"},"skybox")," probe and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/RenderSettings-ambientProbe.html"},"ambient probe")," and retains that data until you manually bake the Scene. When you upgrade, Scenes with no ambient light contribution might visually change. To restore the original look of these Scenes, set the Environment lighting ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lighting-overview/lighting-window#environment-%E7%8E%AF%E5%A2%83"},"intensity multiplier")," to 0. Alternatively, set the skybox to black, bake the scene, then reset the skybox to your preferred sky color."),(0,o.kt)("h2",{id:"enable-code-coverage-preference"},"Enable Code Coverage preference"),(0,o.kt)("p",null,"The user interface for managing Code Coverage has moved from General Preferences to within the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.testtools.codecoverage@latest"},"Code Coverage package"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/upgrade211CodeCoverage.png",alt:"In Unity 2021 the Enable Code Coverage checkbox was moved in the Code Coverage window."})),(0,o.kt)("p",null,"In Unity 2021 the Enable Code Coverage checkbox was moved in the Code Coverage window."),(0,o.kt)("p",null,"The Code Coverage package is available as a released package via the Package Manager for Unity 2019.3 and above. The latest version is 1.0.0."),(0,o.kt)("p",null,"You can use one of the following methods to enable code coverage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.testtools.codecoverage@1.0/manual/InstallingCodeCoverage.html"},"Install")," the Code Coverage package, open the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.testtools.codecoverage@1.0/manual/CodeCoverageWindow.html"},"Code Coverage window")," ( ",(0,o.kt)("strong",{parentName:"li"},"Window"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Analysis"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Code Coverage")," ) and select ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.testtools.codecoverage@1.0/manual/Quickstart.html#4-enable-code-coverage-sub1-minsub"}," ",(0,o.kt)("strong",{parentName:"a"},"Enable Code Coverage")," "),"."),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/command-line-arguments"},"Command line argument")," ",(0,o.kt)("inlineCode",{parentName:"li"},"-enableCodeCoverage")," in batchmode."),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/TestTools.Coverage-enabled.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Coverage.enabled"))," API. Example class:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Create a new C# script called CodeCoverageMenuItem and place it\n// under the Editor folder.\n// This class creates a toggle menu item under Code Coverage &gt; Enable\n// Code Coverage. Use it to enable/disable Code Coverage.\n\nusing UnityEditor;\nusing UnityEngine.TestTools;\n\nclass CodeCoverageMenuItem\n{\n    const string EnableCodeCoverageItemName = "Code Coverage/Enable Code Coverage";\n\n    [MenuItem(EnableCodeCoverageItemName, false)]\n    static void EnableCodeCoverage()\n    {\n        Coverage.enabled = !Coverage.enabled;\n    }\n\n    [MenuItem(EnableCodeCoverageItemName, true)]\n    static bool EnableCodeCoverageValidate()\n    {\n        Menu.SetChecked(EnableCodeCoverageItemName, Coverage.enabled);\n        return true;\n    }\n}\n')))}p.isMDXComponent=!0}}]);