"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93485],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20877:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"class-AudioHighPassFilter",title:"\u97f3\u9891\u9ad8\u901a\u6ee4\u6ce2\u5668 (Audio High Pass Filter)",slug:"/class-audio-effect/class-audio-high-pass-filter"},l="\u97f3\u9891\u9ad8\u901a\u6ee4\u6ce2\u5668 (Audio High Pass Filter)",u={unversionedId:"audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-AudioHighPassFilter",id:"audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-AudioHighPassFilter",title:"\u97f3\u9891\u9ad8\u901a\u6ee4\u6ce2\u5668 (Audio High Pass Filter)",description:"Audio High Pass Filter  \u4f20\u9012\u97f3\u9891\u6e90\u7684\u9ad8\u9891\u7387\uff0c\u5e76\u5bf9\u9891\u7387\u4f4e\u4e8e \u622a\u6b62\u9891\u7387 (Cutoff Frequency)  \u7684\u4fe1\u53f7\u8fdb\u884c\u622a\u6b62\u3002",source:"@site/docs/audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-audio-high-pass-filter.md",sourceDirName:"audio/\u97f3\u9891\u53c2\u8003/class-audio-effect",slug:"/class-audio-effect/class-audio-high-pass-filter",permalink:"/docs/class-audio-effect/class-audio-high-pass-filter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/audio/\u97f3\u9891\u53c2\u8003/class-audio-effect/class-audio-high-pass-filter.md",tags:[],version:"current",frontMatter:{id:"class-AudioHighPassFilter",title:"\u97f3\u9891\u9ad8\u901a\u6ee4\u6ce2\u5668 (Audio High Pass Filter)",slug:"/class-audio-effect/class-audio-high-pass-filter"},sidebar:"tutorialSidebar",previous:{title:"\u97f3\u9891\u56de\u58f0\u6ee4\u6ce2\u5668 (Audio Echo Filter)",permalink:"/docs/class-audio-effect/class-audio-echo-filter"},next:{title:"\u97f3\u9891\u4f4e\u901a\u6ee4\u6ce2\u5668 (Audio Low Pass Filter)",permalink:"/docs/class-audio-effect/class-audio-low-pass-filter"}},c={},p=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u97f3\u9891\u9ad8\u901a\u6ee4\u6ce2\u5668-audio-high-pass-filter"},"\u97f3\u9891\u9ad8\u901a\u6ee4\u6ce2\u5668 (Audio High Pass Filter)"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Audio High Pass Filter"),"  \u4f20\u9012\u97f3\u9891\u6e90\u7684\u9ad8\u9891\u7387\uff0c\u5e76\u5bf9\u9891\u7387\u4f4e\u4e8e ",(0,i.kt)("strong",{parentName:"p"},"\u622a\u6b62\u9891\u7387 (Cutoff Frequency)"),"  \u7684\u4fe1\u53f7\u8fdb\u884c\u622a\u6b62\u3002"),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioHighPassFilter.png",alt:"AudioHighPassFilter.png"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Cutoff Frequency")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9ad8\u901a\u622a\u6b62\u9891\u7387\uff0c\u5355\u4f4d\u4e3a\u8d6b\u5179\uff08\u8303\u56f4\u4ece 10.0 \u81f3 22000.0\uff0c\u9ed8\u8ba4\u503c\u4e3a 5000.0\uff09\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Highpass Resonance Q")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9ad8\u901a\u5171\u632f\u54c1\u8d28\u503c\uff08\u8303\u56f4\u4ece 1.0 \u81f3 10.0\uff0c\u9ed8\u8ba4\u503c\u4e3a 1.0\uff09\u3002")))),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Highpass resonance Q")," \uff08Highpass Resonance Quality Factor \u7684\u7f29\u5199\uff0c\u8868\u793a\u9ad8\u901a\u5171\u632f\u54c1\u8d28\u56e0\u6570\uff09\u51b3\u5b9a\u4e86\u6ee4\u6ce2\u5668\u81ea\u5171\u632f\u7684\u8870\u51cf\u7a0b\u5ea6\u3002\u9ad8\u901a\u8c10\u632f\u54c1\u8d28\u8d8a\u9ad8\u8868\u660e\u80fd\u91cf\u635f\u5931\u901f\u5ea6\u8d8a\u6162\uff0c\u5373\u632f\u8361\u6d88\u5931\u5f97\u8d8a\u6162\u3002"))}f.isMDXComponent=!0}}]);