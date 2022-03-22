"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84995],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:e},c),{},{components:r})):n.createElement(m,a({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},33776:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"class-AudioDistortionFilter",title:"\u97f3\u9891\u5931\u771f\u6ee4\u6ce2\u5668 (Audio Distortion Filter)",slug:"/class-audio-effect/class-audio-distortion-filter"},l="\u97f3\u9891\u5931\u771f\u6ee4\u6ce2\u5668 (Audio Distortion Filter)",u={unversionedId:"audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-AudioDistortionFilter",id:"audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-AudioDistortionFilter",title:"\u97f3\u9891\u5931\u771f\u6ee4\u6ce2\u5668 (Audio Distortion Filter)",description:"Audio Distortion Filter  \u53ef\u5c06\u6765\u81ea\u97f3\u9891\u6e90\u7684\u58f0\u97f3\u6216\u8005\u5230\u8fbe\u97f3\u9891\u76d1\u542c\u5668\u7684\u58f0\u97f3\u8fdb\u884c\u5931\u771f\u5904\u7406\u3002",source:"@site/docs/audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-audio-distortion-filter.md",sourceDirName:"audio/\u97f3\u9891\u53c2\u8003/class-audio-effect",slug:"/class-audio-effect/class-audio-distortion-filter",permalink:"/docs/class-audio-effect/class-audio-distortion-filter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-audio-distortion-filter.md",tags:[],version:"current",frontMatter:{id:"class-AudioDistortionFilter",title:"\u97f3\u9891\u5931\u771f\u6ee4\u6ce2\u5668 (Audio Distortion Filter)",slug:"/class-audio-effect/class-audio-distortion-filter"},sidebar:"tutorialSidebar",previous:{title:"\u97f3\u9891\u5408\u58f0\u6ee4\u6ce2\u5668 (Audio Chorus Filter)",permalink:"/docs/class-audio-effect/class-audio-chorus-filter"},next:{title:"\u97f3\u9891\u56de\u58f0\u6ee4\u6ce2\u5668 (Audio Echo Filter)",permalink:"/docs/class-audio-effect/class-audio-echo-filter"}},c={},d=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2}],p={toc:d};function f(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u97f3\u9891\u5931\u771f\u6ee4\u6ce2\u5668-audio-distortion-filter"},"\u97f3\u9891\u5931\u771f\u6ee4\u6ce2\u5668 (Audio Distortion Filter)"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Audio Distortion Filter"),"  \u53ef\u5c06\u6765\u81ea",(0,i.kt)("a",{parentName:"p",href:"/docs/%E9%9F%B3%E9%A2%91%E5%8F%82%E8%80%83/class-audio-source"},"\u97f3\u9891\u6e90"),"\u7684\u58f0\u97f3\u6216\u8005\u5230\u8fbe",(0,i.kt)("a",{parentName:"p",href:"/docs/%E9%9F%B3%E9%A2%91%E5%8F%82%E8%80%83/class-audio-listener"},"\u97f3\u9891\u76d1\u542c\u5668"),"\u7684\u58f0\u97f3\u8fdb\u884c\u5931\u771f\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioDistortionFilter.png",alt:"AudioDistortionFilter.png"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Distortion")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5931\u771f\u503c\u3002\u8303\u56f4\u4ece 0.0 \u5230 1.0\u3002\u9ed8\u8ba4\u503c\u4e3a 0.5\u3002")))),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,i.kt)("p",null,"\u5e94\u7528  ",(0,i.kt)("strong",{parentName:"p"},"Audio Distortion Filter"),"  \u53ef\u6a21\u62df\u4f4e\u8d28\u91cf\u65e0\u7ebf\u7535\u4f20\u8f93\u7684\u58f0\u97f3\u3002"))}f.isMDXComponent=!0}}]);