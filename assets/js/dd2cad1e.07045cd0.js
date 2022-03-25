"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92821],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,m=s["".concat(u,".").concat(f)]||s[f]||l[f]||i;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var d={};for(var u in r)hasOwnProperty.call(r,u)&&(d[u]=r[u]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75031:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],d={id:"android-bugreporting",title:"\u62a5\u544a Android \u4e0b\u7684\u5d29\u6e83\u9519\u8bef",slug:"/android/android-bugreporting"},u="\u62a5\u544a Android \u4e0b\u7684\u5d29\u6e83\u9519\u8bef",c={unversionedId:"platform-specific/android/android-bugreporting",id:"platform-specific/android/android-bugreporting",title:"\u62a5\u544a Android \u4e0b\u7684\u5d29\u6e83\u9519\u8bef",description:"\u5728\u63d0\u4ea4\u9519\u8bef\u62a5\u544a\u4e4b\u524d\uff0c\u8bf7\u53c2\u9605 Unity \u624b\u518c\u7684 Android \u5f00\u53d1\u6545\u969c\u6392\u9664\u9875\u9762\u548c Unity Android \u8bba\u575b\uff0c\u83b7\u53d6\u5e38\u89c1\u5d29\u6e83\u548c\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/platform-specific/android/android-bugreporting.md",sourceDirName:"platform-specific/android",slug:"/android/android-bugreporting",permalink:"/doc-unity-manual/docs/android/android-bugreporting",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-specific/android/android-bugreporting.md",tags:[],version:"current",frontMatter:{id:"android-bugreporting",title:"\u62a5\u544a Android \u4e0b\u7684\u5d29\u6e83\u9519\u8bef",slug:"/android/android-bugreporting"},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/doc-unity-manual/docs/android"},next:{title:"Building and delivering for Android",permalink:"/doc-unity-manual/docs/android-building-and-delivering"}},p={},l=[],s={toc:l};function f(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u62a5\u544a-android-\u4e0b\u7684\u5d29\u6e83\u9519\u8bef"},"\u62a5\u544a Android \u4e0b\u7684\u5d29\u6e83\u9519\u8bef"),(0,i.kt)("p",null,"\u5728\u63d0\u4ea4\u9519\u8bef\u62a5\u544a\u4e4b\u524d\uff0c\u8bf7\u53c2\u9605 Unity \u624b\u518c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/trouble-shooting-android"},"Android \u5f00\u53d1\u6545\u969c\u6392\u9664"),"\u9875\u9762\u548c ",(0,i.kt)("a",{parentName:"p",href:"https://forum.unity3d.com/forums/android.30/"},"Unity Android \u8bba\u575b"),"\uff0c\u83b7\u53d6\u5e38\u89c1\u5d29\u6e83\u548c\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("p",null,"\u8c03\u67e5 Android \u4e0a\u7684\u5d29\u6e83\u95ee\u9898\u53ef\u80fd\u6781\u5177\u6311\u6218\u6027\uff0c\u7279\u522b\u662f\u60a8\u65e0\u6cd5\u5728\u81ea\u5df1\u7684\u8bbe\u5907\u4e0a\u91cd\u73b0\u5d29\u6e83\u7684\u60c5\u51b5\u4e0b\u3002\u53ef\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb.html"},"Android Debug Bridge (ADB)")," \u901a\u8fc7\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"adb logcat")," \u6765\u521b\u5efa\u8bbe\u5907\u7684\u65e5\u5fd7\u3002\u5982\u9700\u4e86\u89e3 ADB logcat \u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Android Studio \u6587\u6863\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/logcat.html"},"logcat \u547d\u4ee4\u884c\u5de5\u5177"),"\u9875\u9762\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u65e0\u6cd5\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u627e\u5230\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8bf7\u63d0\u4ea4\u9519\u8bef\u62a5\u544a\uff0c\u5e76\u5728\u63d0\u4ea4\u4e4b\u524d\u5c06 ADB logcat \u6587\u4ef6\u548c\u5b8c\u6574\u7684 Unity \u9879\u76ee\u9644\u52a0\u5230\u9519\u8bef\u62a5\u544a\u4e2d\uff0c\u540c\u65f6\u5e94\u9075\u5faa ",(0,i.kt)("a",{parentName:"p",href:"https://unity3d.com/unity/qa/bug-reporting"},"Unity \u9519\u8bef\u62a5\u544a\u6307\u5357"),"\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2017\u201305\u201325 \u9875\u9762\u5df2\u53d1\u5e03"),(0,i.kt)("li",{parentName:"ul"},"5.5 \u7248\u4e2d\u7684\u66f4\u65b0\u529f\u80fd")))}f.isMDXComponent=!0}}]);