"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98333],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return s}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)i=u[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)i=u[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,u=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(i),s=n,f=c["".concat(d,".").concat(s)]||c[s]||g[s]||u;return i?r.createElement(f,a(a({ref:t},p),{},{components:i})):r.createElement(f,a({ref:t},p))}));function s(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=i.length,a=new Array(u);a[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<u;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},49175:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return g}});var r=i(87462),n=i(63366),u=(i(67294),i(3905)),a=["components"],o={id:"UpgradeGuide5-Audio",title:"Unity 5.0 \u4e2d\u7684\u97f3\u9891",slug:"/upgrade-guide5/upgrade-guide5-audio"},d=void 0,l={unversionedId:"unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/UpgradeGuide5-Audio",id:"unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/UpgradeGuide5-Audio",title:"Unity 5.0 \u4e2d\u7684\u97f3\u9891",description:"Unity 5.0 \u4e2d\u7684\u97f3\u9891",source:"@site/docs/unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/upgrade-guide5-audio.md",sourceDirName:"unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5",slug:"/upgrade-guide5/upgrade-guide5-audio",permalink:"/docs/upgrade-guide5/upgrade-guide5-audio",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/upgrade-guides/upgrade-guide-legacy/upgrade-guide5/upgrade-guide5-audio.md",tags:[],version:"current",frontMatter:{id:"UpgradeGuide5-Audio",title:"Unity 5.0 \u4e2d\u7684\u97f3\u9891",slug:"/upgrade-guide5/upgrade-guide5-audio"},sidebar:"tutorialSidebar",previous:{title:"Unity 5.0 \u4e2d\u7684\u52a8\u753b\u529f\u80fd",permalink:"/docs/upgrade-guide5/upgrade-guide5-animation"},next:{title:"Unity 5.0 \u4e2d\u7684\u70d8\u7119\u6570\u636e",permalink:"/docs/upgrade-guide5/upgrade-guide5-baked-data-formats"}},p={},g=[{value:"Unity 5.0 \u4e2d\u7684\u97f3\u9891",id:"unity-50-\u4e2d\u7684\u97f3\u9891",level:2},{value:"\u97f3\u9891\u526a\u8f91 (AudioClip)",id:"\u97f3\u9891\u526a\u8f91-audioclip",level:3},{value:"\u683c\u5f0f",id:"\u683c\u5f0f",level:3},{value:"\u5728\u540e\u53f0\u9884\u52a0\u8f7d\u548c\u52a0\u8f7d\u97f3\u9891\u6570\u636e",id:"\u5728\u540e\u53f0\u9884\u52a0\u8f7d\u548c\u52a0\u8f7d\u97f3\u9891\u6570\u636e",level:3},{value:"\u591a\u91cd\u7f16\u8f91",id:"\u591a\u91cd\u7f16\u8f91",level:3},{value:"Force to Mono",id:"force-to-mono",level:3},{value:"GetData/SetData",id:"getdatasetdata",level:3},{value:"\u97f3\u9891\u6e90\u6682\u505c\u884c\u4e3a",id:"\u97f3\u9891\u6e90\u6682\u505c\u884c\u4e3a",level:3},{value:"\u6df7\u97f3\u5668",id:"\u6df7\u97f3\u5668",level:3},{value:"AudioSettings",id:"audiosettings",level:3}],c={toc:g};function s(e){var t=e.components,i=(0,n.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"unity-50-\u4e2d\u7684\u97f3\u9891"},"Unity 5.0 \u4e2d\u7684\u97f3\u9891"),(0,u.kt)("p",null,"\u5982\u679c\u9879\u76ee\u4f7f\u7528\u4e86\u97f3\u9891\u529f\u80fd\uff0c\u5728\u5c06\u9879\u76ee\u4ece Unity 4 \u5347\u7ea7\u5230 Unity 5 \u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\u3002"),(0,u.kt)("h3",{id:"\u97f3\u9891\u526a\u8f91-audioclip"},"\u97f3\u9891\u526a\u8f91 (AudioClip)"),(0,u.kt)("p",null,"\u97f3\u9891\u526a\u8f91\u65b9\u9762\u5b58\u5728\u5927\u91cf\u66f4\u6539\u3002\u9996\u5148\uff0c\u8d44\u6e90\u4e0a\u4e0d\u518d\u6709 3D \u6807\u5fd7\u3002\u6b64\u6807\u5fd7\u5df2\u7ecf\u4ee5 Spatial Blend \u6ed1\u52a8\u6761\u7684\u5f62\u5f0f\u79fb\u52a8\u5230\u97f3\u9891\u6e90 (AudioSource) \u4e2d\uff0c\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u5c06\u58f0\u97f3\u4ece 2D \u53d8\u4e3a 3D\u3002\u65e7\u9879\u76ee\u5c06\u4ee5\u8fd9\u6837\u7684\u65b9\u5f0f\u5bfc\u5165\uff1a\u573a\u666f\u6e38\u620f\u5bf9\u8c61\u4e0a\u5df2\u5206\u914d\u526a\u8f91\u7684\u97f3\u9891\u6e90\u5c06\u6839\u636e\u97f3\u9891\u526a\u8f91\u7684\u65e7 3D \u6807\u5fd7\u8bbe\u7f6e\u5176 Spatial Blend \u53c2\u6570\u3002\u7531\u4e8e\u663e\u800c\u6613\u89c1\u7684\u539f\u56e0\uff0c\u8fd9\u5bf9\u4e8e\u52a8\u6001\u5206\u914d\u526a\u8f91\u5230\u97f3\u9891\u6e90\u7684\u811a\u672c\u662f\u4e0d\u53ef\u80fd\u7684\uff0c\u56e0\u6b64\u8fd9\u9700\u8981\u624b\u52a8\u4fee\u590d\u3002"),(0,u.kt)("p",null,"\u65e7 3D \u5c5e\u6027\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a true\uff0c\u4f46\u5728\u65b0\u7cfb\u7edf\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSpatial Blend \u53c2\u6570\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a 2D\u3002"),(0,u.kt)("p",null,"\u6700\u540e\uff0c\u73b0\u5728\u53ef\u5bf9\u97f3\u9891\u526a\u8f91\u8fdb\u884c\u591a\u91cd\u7f16\u8f91\u3002"),(0,u.kt)("h3",{id:"\u683c\u5f0f"},"\u683c\u5f0f"),(0,u.kt)("p",null,"Format \u5c5e\u6027\u7684\u547d\u540d\u5df2\u66f4\u6539\uff0c\u73b0\u5728\u547d\u540d\u4e2d\u5c06\u53cd\u6620\u5b58\u50a8\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u56e0\u5e73\u53f0\u800c\u5f02\u7684\u7279\u5b9a\u6587\u4ef6\u683c\u5f0f\u3002\u6240\u4ee5\u4ece\u73b0\u5728\u5f00\u59cb\uff0cUncompressed \u8868\u793a\u539f\u59cb\u6837\u672c\u6570\u636e\uff0cCompressed \u8868\u793a\u6700\u9002\u5408\u5e73\u53f0\u7684\u6709\u635f\u538b\u7f29\u65b9\u6cd5\uff0cADPCM \u8868\u793a\u4e00\u79cd\u8f7b\u91cf\u7ea7\uff08\u5c31 CPU \u800c\u8a00\uff09\u538b\u7f29\u65b9\u6cd5\uff0c\u6700\u9002\u5408\u5305\u542b\u5927\u91cf\u566a\u97f3\uff08\u811a\u6b65\u58f0\u3001\u649e\u51fb\u58f0\u3001\u6b66\u5668\u58f0\u97f3\u7b49\uff09\u5e76\u9700\u8981\u5927\u91cf\u64ad\u653e\u7684\u81ea\u7136\u97f3\u9891\u4fe1\u53f7\u3002"),(0,u.kt)("h3",{id:"\u5728\u540e\u53f0\u9884\u52a0\u8f7d\u548c\u52a0\u8f7d\u97f3\u9891\u6570\u636e"},"\u5728\u540e\u53f0\u9884\u52a0\u8f7d\u548c\u52a0\u8f7d\u97f3\u9891\u6570\u636e"),(0,u.kt)("p",null,"\u97f3\u9891\u526a\u8f91\u6709\u4e00\u4e2a\u65b0\u529f\u80fd\uff0c\u5141\u8bb8\u901a\u8fc7\u4e00\u4e2a\u9009\u9879\u51b3\u5b9a\u662f\u5426\u9884\u52a0\u8f7d\u97f3\u9891\u6570\u636e\u3002\u97f3\u9891\u526a\u8f91\u7684\u4efb\u4f55\u5c5e\u6027\u90fd\u4e0e\u5b9e\u9645\u97f3\u9891\u6570\u636e\u52a0\u8f7d\u72b6\u6001\u5206\u79bb\uff0c\u5e76\u53ef\u4ee5\u968f\u65f6\u67e5\u8be2\uff0c\u56e0\u6b64\u73b0\u5728\u7684\u6309\u9700\u52a0\u8f7d\u529f\u80fd\u6709\u52a9\u4e8e\u51cf\u5c11\u97f3\u9891\u526a\u8f91\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u3002\u6b64\u5916\uff0c\u97f3\u9891\u526a\u8f91\u53ef\u4ee5\u5728\u540e\u53f0\u52a0\u8f7d\u4ed6\u4eec\u7684\u97f3\u9891\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u963b\u6b62\u4e3b\u6e38\u620f\u7ebf\u7a0b\u4ee5\u53ca\u5bfc\u81f4\u4e22\u5e27\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u901a\u8fc7\u811a\u672c API \u6765\u63a7\u5236\u52a0\u8f7d\u8fc7\u7a0b\u3002"),(0,u.kt)("h3",{id:"\u591a\u91cd\u7f16\u8f91"},"\u591a\u91cd\u7f16\u8f91"),(0,u.kt)("p",null,"\u6240\u6709\u97f3\u9891\u526a\u8f91\u73b0\u5728\u90fd\u652f\u6301\u591a\u91cd\u7f16\u8f91\u3002"),(0,u.kt)("h3",{id:"force-to-mono"},"Force to Mono"),(0,u.kt)("p",null,"Force To Mono \u9009\u9879\u73b0\u5728\u53ef\u4ee5\u5bf9\u751f\u6210\u7684\u5411\u4e0b\u6df7\u97f3\u6267\u884c\u5cf0\u503c\u5f52\u4e00\u5316\u3002"),(0,u.kt)("h3",{id:"getdatasetdata"},"GetData/SetData"),(0,u.kt)("p",null,"\u53ea\u6709\u5c06\u672a\u538b\u7f29\u7684\u97f3\u9891\u6570\u636e\u5b58\u50a8\u4e3a PCM \u6216\u5728\u52a0\u8f7d\u65f6\u6267\u884c\u89e3\u538b\u7f29\u7684\u526a\u8f91\u624d\u652f\u6301\u8fd9\u4e9b API \u8c03\u7528\u3002\u4ee5\u524d\u6709\u66f4\u591a\u526a\u8f91\u652f\u6301\u8fd9\u4e9b\u8c03\u7528\uff0c\u4f46\u6a21\u5f0f\u4e0d\u662f\u5f88\u6e05\u6670\uff0c\u56e0\u4e3a\u8fd9\u65e2\u4f9d\u8d56\u4e8e\u76ee\u6807\u5e73\u53f0\u53c8\u5728 Editor \u548c\u72ec\u7acb\u5e73\u53f0\u64ad\u653e\u5668\u4e2d\u5177\u6709\u4e0d\u540c\u7684\u884c\u4e3a\u3002\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u4e8b\u7269\uff0c\u8ddf\u8e2a\u5668\u6587\u4ef6\u4e5f\u53ef\u4ee5\u4f5c\u4e3a PCM \u6570\u636e\u89e3\u538b\u7f29\u5230\u5185\u5b58\u4e2d\uff0c\u56e0\u6b64\u4e5f\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u6587\u4ef6\u4f7f\u7528 GetData/SetData\u3002"),(0,u.kt)("h3",{id:"\u97f3\u9891\u6e90\u6682\u505c\u884c\u4e3a"},"\u97f3\u9891\u6e90\u6682\u505c\u884c\u4e3a"),(0,u.kt)("p",null,"\u73b0\u5728\uff0cUnity5 \u4e2d\u7684\u6682\u505c\u884c\u4e3a\u5728 Play \u8c03\u7528\u548c PlayOneShots \u8c03\u7528\u4e4b\u95f4\u4fdd\u6301\u4e00\u81f4\u3002\u6682\u505c\u97f3\u9891\u6e90\u4f1a\u6682\u505c\u901a\u8fc7\u8fd9\u4e24\u79cd\u65b9\u5f0f\u64ad\u653e\u7684\u8bed\u97f3\uff0c\u800c\u8c03\u7528 Play \u6216 PlayOneShot \u4e5f\u4f1a\u53d6\u6d88\u6682\u505c (unpause) \u901a\u8fc7\u8fd9\u4e24\u79cd\u65b9\u5f0f\u64ad\u653e\u7684\u97f3\u9891\u6e90\u3002"),(0,u.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5728\u4e0d\u64ad\u653e\u6307\u5b9a\u526a\u8f91\u7684\u60c5\u51b5\u4e0b\u53d6\u6d88\u6682\u505c\u97f3\u9891\u6e90\uff08\u5bf9\u4e8e\u64ad\u653e\u4e00\u6b21\u6027\u8bed\u97f3\u5f88\u6709\u7528\uff09\uff0c\u6211\u4eec\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u51fd\u6570 AudioSource.Unpause ()\u3002"),(0,u.kt)("h3",{id:"\u6df7\u97f3\u5668"},"\u6df7\u97f3\u5668"),(0,u.kt)("p",null,"\u6df7\u97f3\u5668 (AudioMixer) \u662f Unity 5 \u7684\u4e00\u9879\u65b0\u529f\u80fd\uff0c\u5141\u8bb8\u5c06\u97f3\u9891\u6e90\u7684\u97f3\u9891\u6570\u636e\u4ee5\u590d\u6742\u8def\u7531\u65b9\u5f0f\u4f20\u9001\u5230\u53ef\u4ee5\u5e94\u7528\u6548\u679c\u7684\u6df7\u97f3\u7ec4\u3002\u4e0e\u97f3\u9891\u6ee4\u6ce2\u5668 (Audio Filter) \u7ec4\u4ef6\u7684\u4e00\u4e2a\u5173\u952e\u533a\u522b\u5728\u4e8e\u97f3\u9891\u6ee4\u6ce2\u5668\u6839\u636e\u6bcf\u4e2a\u97f3\u9891\u6e90\u8fdb\u884c\u5b9e\u4f8b\u5316\uff0c\u56e0\u6b64\u5982\u679c\u6e38\u620f\u6709\u5927\u91cf\u97f3\u9891\u6e90\u5305\u542b\u6ee4\u6ce2\u5668\uff0c\u6216\u8005\u811a\u672c\u4ec5\u7528\u4e8e\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\u7684\u591a\u4e2a\u5b9e\u4f8b\uff0c\u5219\u8be5\u7ec4\u4ef6\u5728 CPU \u65b9\u9762\u7684\u6210\u672c\u4f1a\u66f4\u9ad8\u3002\u4f7f\u7528\u6df7\u97f3\u5668\u540e\uff0c\u73b0\u5728\u53ef\u4ee5\u8bbe\u7f6e\u5177\u6709\u76f8\u540c\u6548\u679c\u7684\u7ec4\uff0c\u5e76\u53ea\u9700\u901a\u8fc7\u5171\u4eab\u6548\u679c\u4ece\u97f3\u9891\u6e90\u8def\u7531\u97f3\u9891\uff0c\u56e0\u6b64\u964d\u4f4e\u4e86 CPU \u4f7f\u7528\u7387\u3002"),(0,u.kt)("p",null,"\u6df7\u97f3\u5668\u76ee\u524d\u4e0d\u652f\u6301\u57fa\u4e8e\u811a\u672c\u7684\u6548\u679c\uff0c\u4f46\u5374\u6709\u4e00\u4e2a\u65b0\u7684\u539f\u751f\u97f3\u9891\u63d2\u4ef6 API\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u7f16\u5199\u4e0e\u5176\u4ed6\u5185\u7f6e\u6548\u679c\u65e0\u7f1d\u96c6\u6210\u7684\u9ad8\u6027\u80fd\u6548\u679c\u3002"),(0,u.kt)("h3",{id:"audiosettings"},"AudioSettings"),(0,u.kt)("p",null,"\u97f3\u9891\u7cfb\u7edf\u7684\u914d\u7f6e\u65b9\u5f0f\u5df2\u66f4\u6539\u3002\u4ecd\u7136\u5e94\u8be5\u5728\u97f3\u9891\u9879\u76ee\u8bbe\u7f6e\u4e2d\u914d\u7f6e\u7528\u4e8e\u8bbe\u7f6e\u626c\u58f0\u5668\u6a21\u5f0f\u548c DSP \u7f13\u51b2\u533a\u5927\u5c0f\uff08\u5373\u5ef6\u8fdf\uff09\u7684\u603b\u4f53\u8bbe\u7f6e\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u73b0\u5728\u8fd8\u53ef\u4ee5\u914d\u7f6e\u5b9e\u9645\u548c\u865a\u62df\u8bed\u97f3\u8ba1\u6570\u3002\u771f\u5b9e\u7684\u8bed\u97f3\u8ba1\u6570\u6307\u5b9a\u4e86\u53ef\u4ee5\u540c\u65f6\u542c\u5230\u8bed\u97f3\u6570\uff0c\u56e0\u6b64\u5bf9\u6e38\u620f\u7684\u6574\u4f53 CPU \u6d88\u8017\u6709\u5f88\u5927\u5f71\u54cd\u3002\u4ee5\u524d\uff0c\u6b64\u6570\u503c\u4ee5\u786c\u7f16\u7801\u65b9\u5f0f\u8bbe\u7f6e\u4e3a 32\uff0c\u4f46\u6709\u4e00\u4e9b\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u4f8b\u5916\u60c5\u51b5\u3002\u5f53\u64ad\u653e\u7684\u8bed\u97f3\u6570\u91cf\u8d85\u8fc7\u6b64\u6570\u91cf\u65f6\uff0c\u58f0\u97f3\u6700\u5c0f\u7684\u8bed\u97f3\u5c06\u88ab\u6682\u505c\uff0c\u76f4\u5230\u8fd9\u4e9b\u8bed\u97f3\u6210\u4e3a\u4e3b\u5bfc\u8bed\u97f3\u6216\u67d0\u4e9b\u4e3b\u5bfc\u8bed\u97f3\u505c\u6b62\u64ad\u653e\u4e3a\u6b62\u3002\u8fd9\u4e9b\u8bed\u97f3\u5728\u64ad\u653e\u65f6\u5c06\u88ab\u8df3\u8fc7\u3002\u5b83\u4eec\u4e0d\u4f1a\u505c\u6b62\uff0c\u53ea\u662f\u5728\u6ca1\u6709\u5e26\u5bbd\u4e4b\u524d\u5c31\u4f1a\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u3002\u865a\u62df\u8bed\u97f3\u8ba1\u6570\u5b9a\u4e49\u4e86\u603b\u5171\u53ef\u4ee5\u7ba1\u7406\u7684\u8bed\u97f3\u6570\uff0c\u56e0\u6b64\u5982\u679c\u64ad\u653e\u7684\u8bed\u97f3\u6570\u91cf\u8d85\u8fc7\u6b64\u6570\u91cf\uff0c\u5219\u5c06\u505c\u6b62\u58f0\u97f3\u6700\u5c0f\u7684\u8bed\u97f3\u3002"),(0,u.kt)("p",null,"\u4ecd\u7136\u53ef\u4ee5\u4ece AudioSettings.outputSampleRate \u548c AudioSettings.speakerMode \u8fdb\u884c\u8bfb\u53d6\uff0c\u4f46\u73b0\u5728\u5df2\u5f03\u7528 setter\uff0cSetDSPBufferSize \u51fd\u6570\u4e5f\u5df2\u5f03\u7528\u3002\u4e3a\u4e86\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u6240\u9700\u7684\u97f3\u9891\u914d\u7f6e\u66f4\u6539\uff0c\u73b0\u5728\u7684\u66ff\u4ee3\u65b9\u6cd5\u662f\u4f7f\u7528\u4e00\u4e2a\u79f0\u4e3a AudioConfiguration \u7684\u7ed3\u6784\u3002\u4e3a\u83b7\u5f97\u6b64\u7ed3\u6784\uff0c\u53ef\u6267\u884c AudioSettings.GetConfiguration()\uff0c\u8be5\u8c03\u7528\u5c06\u8fd4\u56de\u97f3\u9891\u8f93\u51fa\u8bbe\u5907\u4e0a\u7684\u6709\u6548\u8bbe\u7f6e\u3002\u53ef\u4ee5\u5bf9\u6b64\u7ed3\u6784\u8fdb\u884c\u66f4\u6539\u5e76\u901a\u8fc7 AudioSettings.Reset() \u8fdb\u884c\u5e94\u7528\uff1b\u6b64\u8c03\u7528\u5c06\u8fd4\u56de\u5e03\u5c14\u7ed3\u679c\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5e94\u7528\u66f4\u6539\u7684\u7ed3\u679c\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\u3002"),(0,u.kt)("p",null,"\u6bcf\u5f53\u97f3\u9891\u914d\u7f6e\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u65e0\u8bba\u662f\u7531\u811a\u672c\u901a\u8fc7 AudioSettings.Reset() \u8fdb\u884c\u7684\u8fd8\u662f\u7531\u5916\u90e8\u4e8b\u4ef6\u5bfc\u81f4\u7684\uff08\u5982\u63d2\u5165\u5e26\u6709\u97f3\u9891\u652f\u6301\u7684 HDMI \u76d1\u89c6\u5668\u3001\u5916\u90e8\u58f0\u5361\u6216 USB \u8033\u673a\uff09\uff0c\u90fd\u4f1a\u8c03\u7528\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u7684\u56de\u8c03 AudioSettings.OnAudioConfigurationChanged(bool deviceChanged)\u3002\u5982\u679c\u66f4\u6539\u662f\u7531 AudioSettings.Reset() \u8c03\u7528\u5f15\u8d77\u7684\uff0c\u5219\u53c2\u6570 deviceChanged \u5c06\u4e3a false\uff1b\u5982\u679c\u7531\u5916\u90e8\u8bbe\u5907\u66f4\u6539\u5f15\u8d77\uff08\u8fd9\u4e5f\u53ef\u80fd\u4f1a\u66f4\u6539\u6b63\u5728\u4f7f\u7528\u7684\u97f3\u9891\u8bbe\u5907\u7684\u91c7\u6837\u7387\uff09\uff0c\u5219\u4e3a true\u3002\u501f\u52a9\u8be5\u56de\u8c03\uff0c\u53ef\u4ee5\u91cd\u65b0\u521b\u5efa\u4efb\u4f55\u6613\u5931\u6027\u58f0\u97f3\uff08\u4f8b\u5982\u751f\u6210\u7684 PCM \u526a\u8f91\uff09\u3001\u6062\u590d\u97f3\u9891\u72b6\u6001\u6216\u901a\u8fc7\u8c03\u7528 AudioSettings.Reset() \u6765\u8fdb\u4e00\u6b65\u8c03\u6574\u97f3\u9891\u8bbe\u7f6e\u3002"))}s.isMDXComponent=!0}}]);