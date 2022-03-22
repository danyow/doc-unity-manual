"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11314],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},v=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),v=u(n),d=r,f=v["".concat(c,".").concat(d)]||v[d]||l[d]||a;return n?o.createElement(f,i(i({ref:e},p),{},{components:n})):o.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=v;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5575:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"nav-MoveToDestination",title:"\u544a\u8bc9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e",slug:"/nav-how-tos/nav-move-to-destination"},c="\u544a\u8bc9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e",u={unversionedId:"navigation/nav-how-tos/nav-MoveToDestination",id:"navigation/nav-how-tos/nav-MoveToDestination",title:"\u544a\u8bc9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e",description:"\u53ea\u9700\u5c06 NavMeshAgent.destination \u5c5e\u6027\u8bbe\u7f6e\u4e3a\u60a8\u5e0c\u671b\u4ee3\u7406\u79fb\u52a8\u5230\u7684\u70b9\uff0c\u5373\u53ef\u544a\u8bc9\u4ee3\u7406\u5f00\u59cb\u8ba1\u7b97\u8def\u5f84\u3002\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u4ee3\u7406\u5c06\u81ea\u52a8\u6cbf\u8def\u5f84\u79fb\u52a8\uff0c\u76f4\u81f3\u5230\u8fbe\u76ee\u6807\u4f4d\u7f6e\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u7c7b\uff0c\u8be5\u7c7b\u4f7f\u7528\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u6765\u6807\u8bb0\u5728 Start \u51fd\u6570\u4e2d\u5206\u914d\u7ed9 destination \u5c5e\u6027\u7684\u76ee\u6807\u70b9\u3002\u8bf7\u6ce8\u610f\uff0c\u8be5\u811a\u672c\u5047\u5b9a\u60a8\u5df2\u4ece Editor \u4e2d\u6dfb\u52a0\u5e76\u914d\u7f6e\u4e86\u5bfc\u822a\u7f51\u683c\u4ee3\u7406 (NavMeshAgent) \u7ec4\u4ef6\u3002",source:"@site/docs/navigation/nav-how-tos/nav-move-to-destination.md",sourceDirName:"navigation/nav-how-tos",slug:"/nav-how-tos/nav-move-to-destination",permalink:"/docs/nav-how-tos/nav-move-to-destination",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/navigation/nav-how-tos/nav-move-to-destination.md",tags:[],version:"current",frontMatter:{id:"nav-MoveToDestination",title:"\u544a\u8bc9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e",slug:"/nav-how-tos/nav-move-to-destination"},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u4ee3\u7406\u79fb\u52a8\u5230\u9f20\u6807\u5355\u51fb\u7684\u4f4d\u7f6e",permalink:"/docs/nav-how-tos/nav-move-to-click-point"},next:{title:"\u5bfc\u822a\u6982\u8ff0",permalink:"/docs/nav-overview"}},p={},l=[],v={toc:l};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u544a\u8bc9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e"},"\u544a\u8bc9\u5bfc\u822a\u7f51\u683c\u4ee3\u7406\u79fb\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e"),(0,a.kt)("p",null,"\u53ea\u9700\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/AI.NavMeshAgent-destination.html"},"NavMeshAgent.destination")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a\u60a8\u5e0c\u671b\u4ee3\u7406\u79fb\u52a8\u5230\u7684\u70b9\uff0c\u5373\u53ef\u544a\u8bc9\u4ee3\u7406\u5f00\u59cb\u8ba1\u7b97\u8def\u5f84\u3002\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u4ee3\u7406\u5c06\u81ea\u52a8\u6cbf\u8def\u5f84\u79fb\u52a8\uff0c\u76f4\u81f3\u5230\u8fbe\u76ee\u6807\u4f4d\u7f6e\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u7c7b\uff0c\u8be5\u7c7b\u4f7f\u7528\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u6765\u6807\u8bb0\u5728 ",(0,a.kt)("em",{parentName:"p"},"Start")," \u51fd\u6570\u4e2d\u5206\u914d\u7ed9 ",(0,a.kt)("em",{parentName:"p"},"destination")," \u5c5e\u6027\u7684\u76ee\u6807\u70b9\u3002\u8bf7\u6ce8\u610f\uff0c\u8be5\u811a\u672c\u5047\u5b9a\u60a8\u5df2\u4ece Editor \u4e2d\u6dfb\u52a0\u5e76\u914d\u7f6e\u4e86\u5bfc\u822a\u7f51\u683c\u4ee3\u7406 (NavMeshAgent) \u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    // MoveDestination.cs\n        using UnityEngine;\n    \n        public class MoveDestination : MonoBehaviour {\n       \n           public Transform goal;\n       \n           void Start () {\n              NavMeshAgent agent = GetComponent&lt;NavMeshAgent&gt;();\n              agent.destination = goal.position; \n           }\n        } \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    // MoveDestination.js\n        var goal: Transform;\n\n        function Start() {\n          var agent: NavMeshAgent = GetComponent.&lt;NavMeshAgent&gt;();\n          agent.destination = goal.position; \n        }\n")))}d.isMDXComponent=!0}}]);