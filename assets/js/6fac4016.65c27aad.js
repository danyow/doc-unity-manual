"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21826],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),i=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=i(t),m=r,k=g["".concat(c,".").concat(m)]||g[m]||u[m]||p;return t?n.createElement(k,o(o({ref:a},l),{},{components:t})):n.createElement(k,o({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=g;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13072:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var n=t(87462),r=t(63366),p=(t(67294),t(3905)),o=["components"],s={id:"class-PackageManager",title:"Package Manager",slug:"/comp-manager-group/class-package-manager"},c="Package Manager",i={unversionedId:"unity-overview/editor-features/comp-manager-group/class-PackageManager",id:"unity-overview/editor-features/comp-manager-group/class-PackageManager",title:"Package Manager",description:"Package Manager  \u8bbe\u7f6e\uff08\u83dc\u5355\uff1a Edit &gt; Project Settings \uff0c\u7136\u540e  Package Manager  \u7c7b\u522b\uff09\u7528\u4e8e\u7ba1\u7406\u8303\u56f4\u6ce8\u518c\u8868\u5e76\u4fee\u6539\u5f53\u524d\u9879\u76ee\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u3002",source:"@site/docs/unity-overview/editor-features/comp-manager-group/class-package-manager.md",sourceDirName:"unity-overview/editor-features/comp-manager-group",slug:"/comp-manager-group/class-package-manager",permalink:"/doc-unity-manual/docs/comp-manager-group/class-package-manager",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/editor-features/comp-manager-group/class-package-manager.md",tags:[],version:"current",frontMatter:{id:"class-PackageManager",title:"Package Manager",slug:"/comp-manager-group/class-package-manager"},sidebar:"tutorialSidebar",previous:{title:"Script Execution Order \u8bbe\u7f6e",permalink:"/doc-unity-manual/docs/comp-manager-group/class-mono-manager"},next:{title:"\u7269\u7406 (Physics)",permalink:"/doc-unity-manual/docs/comp-manager-group/class-physics-manager"}},l={},u=[{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Enable Pre-release Packages",id:"enable-pre-release-packages",level:3},{value:"Show Dependencies",id:"show-dependencies",level:3},{value:"Scoped Registries",id:"scoped-registries",level:2},{value:"\u6dfb\u52a0\u65b0\u7684\u6ce8\u518c\u8868",id:"\u6dfb\u52a0\u65b0\u7684\u6ce8\u518c\u8868",level:3},{value:"\u4fee\u6539\u73b0\u6709\u7684\u6ce8\u518c\u8868",id:"\u4fee\u6539\u73b0\u6709\u7684\u6ce8\u518c\u8868",level:3},{value:"\u5220\u9664\u6ce8\u518c\u8868",id:"\u5220\u9664\u6ce8\u518c\u8868",level:3}],g={toc:u};function m(e){var a=e.components,t=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"package-manager"},"Package Manager"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Package Manager"),"  \u8bbe\u7f6e\uff08\u83dc\u5355\uff1a ",(0,p.kt)("strong",{parentName:"p"},"Edit ",">"," Project Settings")," \uff0c\u7136\u540e  ",(0,p.kt)("strong",{parentName:"p"},"Package Manager"),"  \u7c7b\u522b\uff09\u7528\u4e8e\u7ba1\u7406\u8303\u56f4\u6ce8\u518c\u8868\u5e76\u4fee\u6539\u5f53\u524d\u9879\u76ee\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/class-PackageManager.png",alt:"Properties for the Package Manager"})),(0,p.kt)("p",null,"Properties for the Package Manager"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"(A)"),"  Under the  ",(0,p.kt)("strong",{parentName:"p"},"Advanced Settings"),"  section, toggle whether or not ",(0,p.kt)("a",{parentName:"p",href:"#enable-pre-release-packages"},"pre-release packages")," and ",(0,p.kt)("a",{parentName:"p",href:"#show-dependencies"},"package dependencies")," are visible in the Package Manager window."),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"(B)"),"  ",(0,p.kt)("a",{parentName:"p",href:"#%E6%B7%BB%E5%8A%A0%E6%96%B0%E7%9A%84%E6%B3%A8%E5%86%8C%E8%A1%A8"},"Add"),", ",(0,p.kt)("a",{parentName:"p",href:"#%E4%BF%AE%E6%94%B9%E7%8E%B0%E6%9C%89%E7%9A%84%E6%B3%A8%E5%86%8C%E8%A1%A8"},"modify"),", and ",(0,p.kt)("a",{parentName:"p",href:"#%E5%88%A0%E9%99%A4%E6%B3%A8%E5%86%8C%E8%A1%A8"},"remove")," scoped registries for your project under the  ",(0,p.kt)("strong",{parentName:"p"},"Scoped Registries"),"  group, which contains the following areas:"),(0,p.kt)("p",null,"\xa0\xa0\xa0\xa0 ",(0,p.kt)("strong",{parentName:"p"},"(1)"),"  \u5f53\u524d\u4e3a\u6b64\u9879\u76ee\u5b9a\u4e49\u7684\u8303\u56f4\u6ce8\u518c\u8868\u7684\u5217\u8868"),(0,p.kt)("p",null,"\xa0\xa0\xa0\xa0 ",(0,p.kt)("strong",{parentName:"p"},"(2)"),"  \u6240\u9009\u8303\u56f4\u6ce8\u518c\u8868\u7684\u8be6\u7ec6\u4fe1\u606f"),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,p.kt)("p",null,"Use the Advanced Settings group to toggle the ",(0,p.kt)("a",{parentName:"p",href:"#enable-pre-release-packages"},"Enable Pre-release Packages")," and ",(0,p.kt)("a",{parentName:"p",href:"#show-dependencies"},"Show Dependencies")," settings for your current project."),(0,p.kt)("h3",{id:"enable-pre-release-packages"},"Enable Pre-release Packages"),(0,p.kt)("p",null,"Enable the  ",(0,p.kt)("strong",{parentName:"p"},"Enable Pre-release Packages"),"  setting to display ",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/pack-preview"},"pre-release packages")," in the Package Manager window. Pre-release packages appear with the ",(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/iconPre.png",alt:"iconPre.png"})," tag in the list view and the ",(0,p.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/iconPrerelease.png",alt:"iconPrerelease.png"})," tag in the details view, as a reminder of which packages will be released with the LTS version of the Editor."),(0,p.kt)("br",null),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Warning")," :"),(0,p.kt)("p",null,"By default this setting is disabled because pre-release packages are still being verified as stable enough for production, but are not fully released yet. For more information about the lifecycle of packages, see ",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/upm-concepts/upm-lifecycle"},"Package states and lifecycle"),"."),(0,p.kt)("br",null),(0,p.kt)("h3",{id:"show-dependencies"},"Show Dependencies"),(0,p.kt)("p",null,"\u542f\u7528  ",(0,p.kt)("strong",{parentName:"p"},"Show Dependencies"),"  \u8bbe\u7f6e\u53ef\u4ee5\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5728 Package Manager \u7a97\u53e3\u7684",(0,p.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/upm-ui/upm-ui-list"},"\u5305\u5217\u8868"),"\u4e2d\u663e\u793a\u4f5c\u4e3a\u95f4\u63a5\u4f9d\u8d56\u9879\u5b89\u88c5\u7684\u6240\u6709\u5305\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5728 Package Manager \u7a97\u53e3\u4e2d\u7684",(0,p.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/upm-ui/upm-ui-details"},"\u5305\u5217\u8868"),"\u4e2d\u663e\u793a\u5305\u7684\u4f9d\u8d56\u4fe1\u606f\u3002\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Is using"),"  \u5217\u51fa\u6b64\u5305\u9700\u8981\u7684\u4efb\u4f55\u5305\uff0c\u5305\u62ec\u7279\u5b9a\u7248\u672c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Used by"),"  \u5217\u51fa\u4f9d\u8d56\u4e8e\u6b64\u5305\u7684\u4efb\u4f55\u5176\u4ed6\u5305\u7684\u540d\u79f0\u548c\u7248\u672c\u3002")))),(0,p.kt)("br",null),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u7981\u7528\u6b64\u8bbe\u7f6e\u3002\u6709\u5173\u4f9d\u8d56\u5173\u7cfb\u5982\u4f55\u5904\u7406\u5305\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/upm-concepts/upm-dependencies"},"\u4f9d\u8d56\u548c\u89e3\u6790"),"\u3002"),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"scoped-registries"},"Scoped Registries"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"Scoped Registries"),"  \u7ec4\u5de6\u4fa7\u663e\u793a\u5df2\u6dfb\u52a0\u5230\u5f53\u524d\u9879\u76ee\u7684",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"\u8303\u56f4\u6ce8\u518c\u8868"),"\u7684\u5217\u8868\uff0c\u53f3\u4fa7\u662f\u6240\u9009\u6ce8\u518c\u8868\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,p.kt)("p",null,"\u6709\u5173\u8303\u56f4\u6ce8\u518c\u8868\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u5982\u4f55\u901a\u8fc7 Unity Package Manager \u4f7f\u7528\u548c\u914d\u7f6e\uff0c\u8bf7\u53c2\u9605\u6709\u5173",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"\u8303\u56f4\u6ce8\u518c\u8868"),"\u7684\u6587\u6863\u3002"),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u5982\u679c\u60a8\u6dfb\u52a0\u4e86\u8303\u56f4\u6ce8\u518c\u8868\uff0c\u4f46\u5728  ",(0,p.kt)("strong",{parentName:"p"},"My Registries"),"  \u4e0a\u4e0b\u6587\u6216  ",(0,p.kt)("strong",{parentName:"p"},"My Registries"),"  \u4e0a\u4e0b\u6587\u6839\u672c\u4e0d\u53ef\u7528\uff0c\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u6dfb\u52a0\u7684\u5305\u6ce8\u518c\u8868\u670d\u52a1\u5668\u6ca1\u6709\u5b9e\u73b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"/-/v1/search")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"/-/all")," \u7ec8\u7aef\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u4e0e Unity \u7684 Package Manager \u4e0d\u517c\u5bb9\u3002"),(0,p.kt)("h3",{id:"\u6dfb\u52a0\u65b0\u7684\u6ce8\u518c\u8868"},"\u6dfb\u52a0\u65b0\u7684\u6ce8\u518c\u8868"),(0,p.kt)("p",null,"\u5411\u9879\u76ee\u6dfb\u52a0\u8303\u56f4\u6ce8\u518c\u8868\uff1a"),(0,p.kt)("p",null,"1.\u9009\u62e9\u5217\u8868\u5e95\u90e8\u7684  ",(0,p.kt)("strong",{parentName:"p"},"+"),"  \u6309\u94ae\u3002\u5c06\u663e\u793a\u4e00\u4e2a  ",(0,p.kt)("strong",{parentName:"p"},"New Scoped Registry"),"  \u65b0\u6761\u76ee\uff0c\u53f3\u4fa7\u7684\u8be6\u7ec6\u4fe1\u606f\u7684\u503c\u5747\u4e3a\u7a7a\u767d\uff0c\u800c\u4e14  ",(0,p.kt)("strong",{parentName:"p"},"Revert"),"  \u548c  ",(0,p.kt)("strong",{parentName:"p"},"Apply"),"  \u6309\u94ae\u53d8\u4e3a  ",(0,p.kt)("strong",{parentName:"p"},"Cancel"),"  \u548c  ",(0,p.kt)("strong",{parentName:"p"},"Save"),"  \u6309\u94ae\u3002 2.\u5206\u522b\u4e3a ",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"Name"),"\u3001",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"URL")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"Scope(s)")," \u5c5e\u6027\u8f93\u5165\u503c\u3002 3.\u5982\u679c\u60a8\u9700\u8981\u6307\u5b9a\u591a\u4e2a\u8303\u56f4\uff0c\u8bf7\u9009\u62e9\u6700\u540e\u4e00\u4e2a  ",(0,p.kt)("strong",{parentName:"p"},"Scope(s)"),"  \u503c\u4e0b\u65b9\u7684  ",(0,p.kt)("strong",{parentName:"p"},"+"),"  \u6309\u94ae\u3002\u5c06\u51fa\u73b0\u53e6\u4e00\u4e2a\u6587\u672c\u6846\u3002 4.\u9009\u5b9a\u8303\u56f4\u6ce8\u518c\u8868\u7684\u4fe1\u606f\u8f93\u5165\u5b8c\u6210\u540e\uff0c\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Save")," \u3002\u8981\u5b8c\u5168\u53d6\u6d88\u65b0\u8303\u56f4\u6ce8\u518c\u8868\u7684\u6dfb\u52a0\u64cd\u4f5c\uff0c\u8bf7\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Cancel")," \u3002"),(0,p.kt)("h3",{id:"\u4fee\u6539\u73b0\u6709\u7684\u6ce8\u518c\u8868"},"\u4fee\u6539\u73b0\u6709\u7684\u6ce8\u518c\u8868"),(0,p.kt)("p",null,"\u8981\u4fee\u6539\u73b0\u6709\u7684\u8303\u56f4\u6ce8\u518c\u8868\uff1a"),(0,p.kt)("p",null,"1.\u4ece\u5de6\u4fa7\u7684\u5217\u8868\u9009\u62e9\u8981\u4fee\u6539\u7684\u6ce8\u518c\u8868\u3002\u73b0\u6709\u4fe1\u606f\u663e\u793a\u5728\u53f3\u4fa7\u3002 2.\u4fee\u6539\u4efb\u4f55\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"Name"),"\u3001",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"URL")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/packages/upm-scoped"},"Scope(s)")," \u5c5e\u6027\u3002 3.\u9009\u5b9a\u8303\u56f4\u6ce8\u518c\u8868\u7684\u4fe1\u606f\u66f4\u65b0\u5b8c\u6210\u540e\uff0c\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Apply")," \u3002\u8981\u5b8c\u5168\u53d6\u6d88\u65b0\u8303\u56f4\u6ce8\u518c\u8868\u7684\u6dfb\u52a0\u64cd\u4f5c\uff0c\u8bf7\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Revert")," \u3002"),(0,p.kt)("h3",{id:"\u5220\u9664\u6ce8\u518c\u8868"},"\u5220\u9664\u6ce8\u518c\u8868"),(0,p.kt)("p",null,"\u8981\u5220\u9664\u73b0\u6709\u7684\u8303\u56f4\u6ce8\u518c\u8868\uff1a"),(0,p.kt)("p",null,"1.\u4ece\u5217\u8868\u4e2d\u9009\u62e9\u8981\u5220\u9664\u7684\u6ce8\u518c\u8868\u3002 2.\u5355\u51fb\u5217\u8868\u4e0b\u65b9\u7684  ",(0,p.kt)("strong",{parentName:"p"},"-"),"  \u6309\u94ae\u3002\u51fa\u73b0\u4e00\u4e2a\u5bf9\u8bdd\u6846\u63d0\u793a\u60a8\u786e\u8ba4\u5220\u9664\u3002 3.\u5355\u51fb  ",(0,p.kt)("strong",{parentName:"p"},"Ok"),"  \u7ee7\u7eed\u6216  ",(0,p.kt)("strong",{parentName:"p"},"Cancel"),"  \u4fdd\u6301\u4e0d\u53d8\u3002"),(0,p.kt)("br",null),(0,p.kt)("hr",null),(0,p.kt)("br",null),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Scoped Registries")," ,  ",(0,p.kt)("strong",{parentName:"li"},"Enable Preview Packages"),"  and  ",(0,p.kt)("strong",{parentName:"li"},"Show Dependencies"),"  project settings added in ",(0,p.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2020.1/Documentation/Manual/30_search.html?q=newin20201"},"2020.1")," NewIn20201"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Enable Preview Packages"),"  project setting changed to  ",(0,p.kt)("strong",{parentName:"li"},"Enable Pre-release Packages"),"  in ",(0,p.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2021.1/Documentation/Manual/30_search.html?q=newin20211"},"2021.1")," NewIn20211")))}m.isMDXComponent=!0}}]);