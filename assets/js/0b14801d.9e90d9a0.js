"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87927],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),y=u,m=d["".concat(a,".").concat(y)]||d[y]||s[y]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function y(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:u,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31192:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),u=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"UnityCloudBuildVcsMercurial",title:"Using the Unity Developer Dashboard to configure Cloud Build for Mercurial",slug:"/unity-cloud-build-setting-up/unity-cloud-build-vcs-mercurial"},a="Using the Unity Developer Dashboard to configure Cloud Build for Mercurial",c={unversionedId:"unity-services/unity-cloud-build/unity-cloud-build-setting-up/UnityCloudBuildVcsMercurial",id:"unity-services/unity-cloud-build/unity-cloud-build-setting-up/UnityCloudBuildVcsMercurial",title:"Using the Unity Developer Dashboard to configure Cloud Build for Mercurial",description:"Cloud Build supports projects stored in Mercurial repositories. You can host your repository on Bitbucket or a private server.",source:"@site/docs/unity-services/unity-cloud-build/unity-cloud-build-setting-up/unity-cloud-build-vcs-mercurial.md",sourceDirName:"unity-services/unity-cloud-build/unity-cloud-build-setting-up",slug:"/unity-cloud-build-setting-up/unity-cloud-build-vcs-mercurial",permalink:"/docs/unity-cloud-build-setting-up/unity-cloud-build-vcs-mercurial",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-cloud-build/unity-cloud-build-setting-up/unity-cloud-build-vcs-mercurial.md",tags:[],version:"current",frontMatter:{id:"UnityCloudBuildVcsMercurial",title:"Using the Unity Developer Dashboard to configure Cloud Build for Mercurial",slug:"/unity-cloud-build-setting-up/unity-cloud-build-vcs-mercurial"},sidebar:"tutorialSidebar",previous:{title:"Using the Unity Developer Dashboard to configure Cloud Build for Git",permalink:"/docs/unity-cloud-build-setting-up/unity-cloud-build-vcs-git"},next:{title:"Using the Unity Developer Dashboard to configure Cloud Build for Perforce",permalink:"/docs/unity-cloud-build-setting-up/unity-cloud-build-vcs-perforce"}},p={},s=[{value:"\u5728\u63a7\u5236\u9762\u677f\u4e2d\u914d\u7f6e Mercurial",id:"\u5728\u63a7\u5236\u9762\u677f\u4e2d\u914d\u7f6e-mercurial",level:2},{value:"URL \u8bed\u6cd5",id:"url-\u8bed\u6cd5",level:3},{value:"\u8bbe\u7f6e\u60a8\u7684\u51ed\u636e",id:"\u8bbe\u7f6e\u60a8\u7684\u51ed\u636e",level:3},{value:"\u8bbe\u7f6e\u76ee\u6807\u7f16\u8bd1\u5e73\u53f0",id:"\u8bbe\u7f6e\u76ee\u6807\u7f16\u8bd1\u5e73\u53f0",level:2},{value:"Android \u51ed\u636e",id:"android-\u51ed\u636e",level:3},{value:"iOS \u51ed\u636e",id:"ios-\u51ed\u636e",level:3}],d={toc:s};function y(e){var t=e.components,r=(0,u.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-unity-developer-dashboard-to-configure-cloud-build-for-mercurial"},"Using the Unity Developer Dashboard to configure Cloud Build for Mercurial"),(0,i.kt)("p",null,"Cloud Build supports projects stored in ",(0,i.kt)("a",{parentName:"p",href:"https://www.mercurial-scm.org/"},"Mercurial")," repositories. You can host your repository on ",(0,i.kt)("a",{parentName:"p",href:"https://bitbucket.org/"},"Bitbucket")," or a private server."),(0,i.kt)("p",null,"\u8981\u8fde\u63a5\u5230\u4ee3\u7801\u4ed3\u5e93\uff08Repository\uff09\uff0cUnity Cloud Build \u9700\u8981\u60a8\u63d0\u4f9b\u76f8\u5e94\u7684\u8bbf\u95ee\u51ed\u636e\u3002\u8fd9\u4e00\u8981\u6c42\u9002\u7528\u4e8e Bitbucket \u6216\u5176\u4ed6\u5730\u65b9\u6258\u7ba1\u7684 Mercurial \u4ee3\u7801\u4ed3\u5e93\u3002"),(0,i.kt)("h2",{id:"\u5728\u63a7\u5236\u9762\u677f\u4e2d\u914d\u7f6e-mercurial"},"\u5728\u63a7\u5236\u9762\u677f\u4e2d\u914d\u7f6e Mercurial"),(0,i.kt)("p",null,"1.\u767b\u5f55 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.cloud.unity3d.com"},"Unity \u5f00\u53d1\u8005\u63a7\u5236\u9762\u677f (Developer Dashboard)"),"\u3002 2.\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"Projects"),"  \u9875\u9762\u4e2d\uff0c\u9009\u62e9\u60a8\u7684\u9879\u76ee\u3002 3.\u5728\u5de6\u4fa7\u5bfc\u822a\u9762\u677f\u4e2d\uff0c\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Cloud Build"),"  ",">","  ",(0,i.kt)("strong",{parentName:"p"},"Config")," \u3002 4.\u5982\u679c\u8fd9\u662f\u7b2c\u4e00\u6b21\u914d\u7f6e Cloud Build\uff0c\u60a8\u4f1a\u770b\u5230 Build History \u9875\u9762\u4e0a\u663e\u793a  ",(0,i.kt)("strong",{parentName:"p"},"Cloud Build has not been set up for this project")," \u3002\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Set up Cloud Build"),"  \u94fe\u63a5\u7ee7\u7eed\u3002 5.\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Source Control"),"  \u7a97\u53e3\u4e2d\uff0c\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Manual"),"  \u9009\u9879\u5361\u3002 6.\u5728  ",(0,i.kt)("strong",{parentName:"p"},"SCM URL"),"  \u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 Mercurial \u670d\u52a1\u5668\u7684 URL\u3002\u6709\u5173 URL \u683c\u5f0f\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u7684  ",(0,i.kt)("strong",{parentName:"p"},"URL \u8bed\u6cd5")," \u90e8\u5206\u3002 7.\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"SCM Type"),"  \u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Mercurial")," \u3002 7.\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Next Access"),"  \u6309\u94ae\u3002"),(0,i.kt)("h3",{id:"url-\u8bed\u6cd5"},"URL \u8bed\u6cd5"),(0,i.kt)("p",null,"\u8981\u8fde\u63a5\u5230\u4ee3\u7801\u4ed3\u5e93\uff0c\u5fc5\u987b\u6307\u5b9a Mercurial \u670d\u52a1\u5668\u7684 URL\u3002\u60a8\u53ef\u4ee5\u6307\u5b9a URL \u4f7f\u7528\u4ee5\u4e0b\u534f\u8bae\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTPS"),(0,i.kt)("li",{parentName:"ul"},"SSH")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://bitbucket.org/"},"bitbucket")," \u7684 URL \u793a\u4f8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/youraccount/yourrepo"},"https://github.com/youraccount/yourrepo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:git@bitbucket.org"},"git@bitbucket.org"),":youraccount/yourrepo.git")),(0,i.kt)("p",null,"\u8bf7\u4f7f\u7528\u6700\u9002\u5408\u60a8\u7684\u683c\u5f0f\u3002Unity Cloud Build \u4f1a\u81ea\u52a8\u5c06 URL \u91cd\u5199\u4e3a\u6240\u9700\u7684\u683c\u5f0f\u3002"),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u60a8\u7684\u51ed\u636e"},"\u8bbe\u7f6e\u60a8\u7684\u51ed\u636e"),(0,i.kt)("p",null,"On your Mercurial server, create a username for Unity Cloud Build and assign a secure password. If your Mercurial host supports it, make this a read-only user account."),(0,i.kt)("p",null,"On the  ",(0,i.kt)("strong",{parentName:"p"},"Grant us access to your source control"),"  window, enter your user name and password, and click  ",(0,i.kt)("strong",{parentName:"p"},"Next: Target Setup")," ."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/DashMecurial_1.png",alt:"\u63a7\u5236\u9762\u677f\u6388\u6743\u7a97\u53e3"})),(0,i.kt)("p",null,"\u63a7\u5236\u9762\u677f\u6388\u6743\u7a97\u53e3"),(0,i.kt)("h2",{id:"\u8bbe\u7f6e\u76ee\u6807\u7f16\u8bd1\u5e73\u53f0"},"\u8bbe\u7f6e\u76ee\u6807\u7f16\u8bd1\u5e73\u53f0"),(0,i.kt)("p",null,"In the  ",(0,i.kt)("strong",{parentName:"p"},"Target Setup"),"  window, select a build platform."),(0,i.kt)("p",null,"\u5728\u5f00\u53d1\u8005\u63a7\u5236\u9762\u677f (Developer Dashboard) \u4e0a\u7684  ",(0,i.kt)("strong",{parentName:"p"},"NEW BUILD TARGET: BASIC INFO"),"  \u7a97\u53e3\u4e2d\uff1a"),(0,i.kt)("p",null,"1.\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Target Label"),"  \u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u7f16\u8bd1\u540d\u79f0\u3002"),(0,i.kt)("p",null,"2.\u5982\u679c\u4ee3\u7801\u4ed3\u5e93\u7684\u6839\u6587\u4ef6\u5939\u672a\u5305\u542b\u60a8\u7684\u8d44\u6e90\u548c\u9879\u76ee\u8bbe\u7f6e\uff0c\u8bf7\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Project Subfolder"),"  \u5b57\u6bb5\u4e2d\u8f93\u5165\u5305\u542b\u6240\u9700\u8d44\u6e90\u548c\u9879\u76ee\u8bbe\u7f6e\u7684\u6587\u4ef6\u5939\u7684 URL\u3002"),(0,i.kt)("p",null,"3.\u4ece  ",(0,i.kt)("strong",{parentName:"p"},"Unity Version"),"  \u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u7528\u4e8e\u7f16\u8bd1\u9879\u76ee\u7684 Unity \u7248\u672c\u3002"),(0,i.kt)("p",null,"4.\u5982\u679c\u4e0d\u5e0c\u671b\u6bcf\u6b21\u66f4\u65b0\u4ee3\u7801\u4ed3\u5e93\u65f6\u4fbf\u81ea\u52a8\u7f16\u8bd1\u9879\u76ee\uff0c\u8bf7\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Auto-build"),"  \u5207\u6362\u5f00\u5173\u4ee5\u7981\u7528\u6b64\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u9488\u5bf9 iOS \u6216 Android \u5e73\u53f0\u8fdb\u884c\u7f16\u8bd1\uff0c\u5219\u4e0b\u4e00\u6b65\u662f\u8f93\u5165\u7f16\u8bd1\u7684\u51ed\u636e\u3002\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Next: Credentials")," \u3002\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u5e73\u53f0\uff0c\u8bf7\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Next: Build"),"  \u4ee5\u5b8c\u6210\u914d\u7f6e\u5e76\u5f00\u59cb\u521d\u59cb\u7f16\u8bd1\u3002"),(0,i.kt)("h3",{id:"android-\u51ed\u636e"},"Android \u51ed\u636e"),(0,i.kt)("p",null,"On the  ",(0,i.kt)("strong",{parentName:"p"},"SIGNING CREDS"),"  window supply the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bundle ID")," \uff0c\u7528\u4e8e\u5728\u8bbe\u5907\u4e0a\u548c Google Play \u5e94\u7528\u5546\u5e97\u4e2d\u552f\u4e00\u6807\u8bc6\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u60a8\u7684 Android \u5bc6\u94a5\u5e93\u51ed\u636e\u6216\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"li"},"Auto Generated Debug Keystore"),"  \u6765\u4f7f\u7528\u5f00\u53d1\u5bc6\u94a5\u5e93\u3002\u6709\u5173 Android \u5bc6\u94a5\u5e93\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/articles/keystore.html"},"Android \u5bc6\u94a5\u5e93\u7cfb\u7edf (Android Keystore System)"),"\u3002")),(0,i.kt)("h3",{id:"ios-\u51ed\u636e"},"iOS \u51ed\u636e"),(0,i.kt)("p",null,"On the iOS  ",(0,i.kt)("strong",{parentName:"p"},"SIGNING CREDS"),"  window supply the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bundle ID\uff0c\u7528\u4e8e\u5728\u8bbe\u5907\u4e0a\u552f\u4e00\u6807\u8bc6\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u7f16\u8bd1\u5e94\u7528\u7a0b\u5e8f\u7684 Xcode \u7248\u672c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8f93\u5165\u60a8\u7684 iOS \u51ed\u636e\u3002\u6709\u5173 iOS \u51ed\u636e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"li",href:"/docs/unity-cloud-build/unity-cloud-buildi-os"},"\u53d1\u5e03\u5230 iOS"),"\u3002")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"2018\u201304\u201310 \u9875\u9762\u5df2\u53d1\u5e03"))}y.isMDXComponent=!0}}]);