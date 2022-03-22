"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25170],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},u=Object.keys(e);for(i=0;i<u.length;i++)r=u[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)r=u[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),p=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,k=s["".concat(a,".").concat(m)]||s[m]||c[m]||u;return r?i.createElement(k,l(l({ref:t},d),{},{components:r})):i.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,l=new Array(u);l[0]=s;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<u;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}s.displayName="MDXCreateElement"},25844:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var i=r(87462),n=r(63366),u=(r(67294),r(3905)),l=["components"],o={id:"AudioMixerOverview",title:"\u6982\u5ff5\u548c\u6df7\u97f3\u5668 (AudioMixer) \u7684\u6982\u8ff0",slug:"/audio-mixer/audio-mixer-overview"},a="\u6982\u5ff5\u548c\u6df7\u97f3\u5668 (AudioMixer) \u7684\u6982\u8ff0",p={unversionedId:"audio/audio-mixer/AudioMixerOverview",id:"audio/audio-mixer/AudioMixerOverview",title:"\u6982\u5ff5\u548c\u6df7\u97f3\u5668 (AudioMixer) \u7684\u6982\u8ff0",description:"\u6df7\u97f3\u5668\u662f\u4e00\u79cd\u53ef\u7531\u97f3\u9891\u6e90 (AudioSource) \u5f15\u7528\u7684\u8d44\u6e90\uff0c\u80fd\u591f\u5bf9\u901a\u8fc7\u97f3\u9891\u6e90\u751f\u6210\u7684\u97f3\u9891\u4fe1\u53f7\u8fdb\u884c\u66f4\u590d\u6742\u7684\u7ebf\u8def\u89c4\u5212\u548c\u6df7\u97f3\u3002\u8fd9\u4e00\u7c7b\u6df7\u97f3\u662f\u901a\u8fc7\u7528\u6237\u5728\u8d44\u6e90\u5185\u90e8\u6784\u9020\u7684\u97f3\u9891\u7ec4\u5c42\u7ea7\u89c6\u56fe\u6765\u5b8c\u6210\u7684\u3002",source:"@site/docs/audio/audio-mixer/audio-mixer-overview.md",sourceDirName:"audio/audio-mixer",slug:"/audio-mixer/audio-mixer-overview",permalink:"/docs/audio-mixer/audio-mixer-overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/audio/audio-mixer/audio-mixer-overview.md",tags:[],version:"current",frontMatter:{id:"AudioMixerOverview",title:"\u6982\u5ff5\u548c\u6df7\u97f3\u5668 (AudioMixer) \u7684\u6982\u8ff0",slug:"/audio-mixer/audio-mixer-overview"},sidebar:"tutorialSidebar",previous:{title:"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector)",permalink:"/docs/audio-mixer/audio-mixer-inspectors"},next:{title:"AudioMixer \u7a97\u53e3\u4e0a\u7684\u5177\u4f53\u5185\u5bb9",permalink:"/docs/audio-mixer/audio-mixer-specifics"}},d={},c=[{value:"\u6df7\u97f3\u5668\u89c6\u56fe",id:"\u6df7\u97f3\u5668\u89c6\u56fe",level:2},{value:"\u6df7\u97f3\u5668\u68c0\u89c6\u9762\u677f",id:"\u6df7\u97f3\u5668\u68c0\u89c6\u9762\u677f",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u8def\u7531\u548c\u6df7\u97f3",id:"\u8def\u7531\u548c\u6df7\u97f3",level:3},{value:"\u8fd9\u4e9b\u6709\u4ec0\u4e48\u7528\u9014\uff1f",id:"\u8fd9\u4e9b\u6709\u4ec0\u4e48\u7528\u9014",level:4},{value:"\u4e0e 3D \u7a7a\u95f4\u8870\u51cf\u7684\u5173\u7cfb",id:"\u4e0e-3d-\u7a7a\u95f4\u8870\u51cf\u7684\u5173\u7cfb",level:4},{value:"\u58f0\u97f3\u7c7b\u522b",id:"\u58f0\u97f3\u7c7b\u522b",level:3},{value:"\u6df7\u97f3\u7684\u60c5\u7eea\u548c\u4e3b\u9898",id:"\u6df7\u97f3\u7684\u60c5\u7eea\u548c\u4e3b\u9898",level:3},{value:"\u5168\u5c40\u6df7\u97f3",id:"\u5168\u5c40\u6df7\u97f3",level:3},{value:"\u5feb\u7167",id:"\u5feb\u7167",level:3}],s={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,u.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u6982\u5ff5\u548c\u6df7\u97f3\u5668-audiomixer-\u7684\u6982\u8ff0"},"\u6982\u5ff5\u548c\u6df7\u97f3\u5668 (AudioMixer) \u7684\u6982\u8ff0"),(0,u.kt)("p",null,"\u6df7\u97f3\u5668\u662f\u4e00\u79cd\u53ef\u7531\u97f3\u9891\u6e90 (AudioSource) \u5f15\u7528\u7684\u8d44\u6e90\uff0c\u80fd\u591f\u5bf9\u901a\u8fc7\u97f3\u9891\u6e90\u751f\u6210\u7684\u97f3\u9891\u4fe1\u53f7\u8fdb\u884c\u66f4\u590d\u6742\u7684\u7ebf\u8def\u89c4\u5212\u548c\u6df7\u97f3\u3002\u8fd9\u4e00\u7c7b\u6df7\u97f3\u662f\u901a\u8fc7\u7528\u6237\u5728\u8d44\u6e90\u5185\u90e8\u6784\u9020\u7684\u97f3\u9891\u7ec4\u5c42\u7ea7\u89c6\u56fe\u6765\u5b8c\u6210\u7684\u3002"),(0,u.kt)("p",null,"DSP \u6548\u679c\u548c\u5176\u4ed6\u97f3\u9891\u6bcd\u5e26\u5236\u4f5c\u6982\u5ff5\u53ef\u5e94\u7528\u4e8e\u97f3\u9891\u4fe1\u53f7\uff0c\u56e0\u4e3a\u97f3\u9891\u4fe1\u53f7\u662f\u4ece\u97f3\u9891\u6e90\u8def\u7531\u5230\u97f3\u9891\u76d1\u542c\u5668 (AudioListener)\u3002"),(0,u.kt)("h2",{id:"\u6df7\u97f3\u5668\u89c6\u56fe"},"\u6df7\u97f3\u5668\u89c6\u56fe"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerView.jpg",alt:"AudioMixerView.jpg"})),(0,u.kt)("p",null,"1.\u8d44\u6e90 - \u5305\u542b\u6240\u6709\u97f3\u9891\u7ec4 (AudioGroup) \u548c\u4f5c\u4e3a\u5b50\u8d44\u6e90\u7684\u97f3\u9891\u5feb\u7167 (AudioSnapshot)\u3002 1.Hierarchy \u89c6\u56fe - \u5305\u542b\u6df7\u97f3\u5668\u4e2d\u97f3\u9891\u7ec4\u7684\u6574\u4e2a\u6df7\u97f3\u5c42\u7ea7\u7ed3\u6784\u3002 1.\u6df7\u97f3\u5668\u89c6\u56fe - \u6b64\u5904\u5217\u51fa\u6df7\u97f3\u5668\u7f13\u5b58\u7684\u53ef\u89c1\u6027\u8bbe\u7f6e\u3002\u6bcf\u4e2a\u89c6\u56fe\u4ec5\u663e\u793a\u4e3b\u6df7\u97f3\u5668\u7a97\u53e3\u4e2d\u6574\u4e2a\u5c42\u7ea7\u89c6\u56fe\u7684\u4e00\u4e2a\u5b50\u96c6\u3002 1.\u5feb\u7167 - \u8fd9\u662f\u6df7\u97f3\u5668\u8d44\u6e90\u4e2d\u6240\u6709\u97f3\u9891\u5feb\u7167\u7684\u5217\u8868\u3002\u5feb\u7167\u6355\u83b7\u4e86\u6df7\u97f3\u5668\u4e2d\u6240\u6709\u53c2\u6570\u8bbe\u7f6e\u7684\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u5207\u6362\u3002 1.\u8f93\u51fa\u6df7\u97f3\u5668 - \u53ef\u5c06\u6df7\u97f3\u5668\u6df7\u5408\u5230\u5176\u4ed6\u6df7\u97f3\u5668\u7684\u97f3\u9891\u7ec4\u3002\u6b64\u5c5e\u6027\u5b57\u6bb5\u53ef\u7528\u4e8e\u5b9a\u4e49\u8981\u5c06\u6b64\u6df7\u97f3\u5668\u4fe1\u53f7\u8def\u7531\u5230\u7684\u8f93\u51fa\u97f3\u9891\u7ec4\u3002 1.\u97f3\u9891\u7ec4\u6761\u5e26\u89c6\u56fe - \u663e\u793a\u97f3\u9891\u7ec4\u7684\u6982\u8ff0\uff0c\u5305\u62ec\u5f53\u524d VU \u7ea7\u522b\u3001\u8870\u51cf\uff08\u97f3\u91cf\uff09\u8bbe\u7f6e\u3001\u9759\u97f3 (Mute)\u3001\u72ec\u594f (Solo) \u548c\u7ed5\u8fc7\u6548\u679c (Effect Bypass) \u8bbe\u7f6e\u4ee5\u53ca\u97f3\u9891\u7ec4 DSP \u6548\u679c\u5217\u8868\u3002 1.Edit In Play Mode - \u8fd9\u662f\u4e00\u4e2a\u5f00\u5173\uff0c\u64ad\u653e\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u7f16\u8f91\u6df7\u97f3\u5668\uff0c\u7981\u6b62\u7f16\u8f91\u65f6\u53ef\u5728\u6e38\u620f\u8fd0\u884c\u65f6\u63a7\u5236\u6df7\u97f3\u5668\u7684\u72b6\u6001\u3002 1.Exposed Parameters - \u663e\u793a\u66b4\u9732\u7684\u53c2\u6570\uff08\u6df7\u97f3\u5668\u4e2d\u7684\u4efb\u4f55\u53c2\u6570\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b57\u7b26\u4e32\u540d\u79f0\u66b4\u9732\u7ed9\u811a\u672c\uff09\u53ca\u5176\u5bf9\u5e94\u5b57\u7b26\u4e32\u540d\u79f0\u7684\u5217\u8868\u3002"),(0,u.kt)("h2",{id:"\u6df7\u97f3\u5668\u68c0\u89c6\u9762\u677f"},"\u6df7\u97f3\u5668\u68c0\u89c6\u9762\u677f"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerInspector.png",alt:"AudioMixerInspector.png"})),(0,u.kt)("p",null,"1.\u6240\u6709\u97f3\u9891\u7ec4\u9876\u90e8\u90fd\u4f1a\u663e\u793a\u97f3\u9ad8 (Pitch) \u548c\u95ea\u907f (Ducking) \u8bbe\u7f6e\u3002 1.\u53d1\u9001\u6548\u679c (Send Effect) \u793a\u4f8b\uff0c\u4f4d\u4e8e\u5e94\u7528\u8870\u51cf\u4e4b\u524d\u3002 1.\u8fd9\u91cc\u5bf9\u97f3\u9891\u7ec4\u8fdb\u884c\u4e86\u8870\u51cf\uff08\u97f3\u91cf\u8bbe\u7f6e\uff09\u3002\u53ef\u5728\u6548\u679c\u5806\u6808\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u5e94\u7528\u8870\u51cf\u3002\u8fd9\u91cc\u7684 VU \u8ba1\u91cf\u8868\u663e\u793a\u6548\u679c\u5806\u6808\u4e2d\u6b64\u65f6\u523b\u7684\u97f3\u91cf\u7ea7\u522b\uff08\u4e0d\u540c\u4e8e\u6df7\u97f3\u5668\u89c6\u56fe\u4e2d\u663e\u793a\u7684 VU \u8ba1\u91cf\u8868\uff0c\u6b64\u8ba1\u91cf\u8868\u663e\u793a\u4e86\u5728\u4fe1\u53f7\u79bb\u5f00\u97f3\u9891\u7ec4\u65f6\u7684\u7ea7\u522b\uff09\u3002 1.\u5305\u542b\u53c2\u6570\u7684\u793a\u4f8b\u6548\u679c\uff0c\u5728\u672c\u793a\u4f8b\u4e2d\u4e3a\u201c\u6df7\u54cd\u201d(Reverb)\u3002\u8981\u66b4\u9732\u53c2\u6570\uff0c\u53ef\u53f3\u952e\u5355\u51fb\u53c2\u6570\uff0c\u7136\u540e\u9009\u62e9\u66b4\u9732\u53c2\u6570\u5373\u53ef\u3002"),(0,u.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,u.kt)("h3",{id:"\u8def\u7531\u548c\u6df7\u97f3"},"\u8def\u7531\u548c\u6df7\u97f3"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Audio_mixing"},"http://en.wikipedia.org/wiki/Audio","_","mixing")),(0,u.kt)("p",null,"\u97f3\u9891\u8def\u7ebf\u89c4\u5212\u662f\u6307\u83b7\u53d6\u4e00\u5b9a\u6570\u91cf\u7684\u8f93\u5165\u97f3\u9891\u4fe1\u53f7\u5e76\u8f93\u51fa 1 \u4e2a\u6216\u591a\u4e2a\u8f93\u51fa\u4fe1\u53f7\u7684\u8fc7\u7a0b\u3002\u8fd9\u91cc\u7684\u201c\u4fe1\u53f7\u201d\u4e00\u8bcd\u6307\u7684\u662f\u8fde\u7eed\u7684\u6570\u5b57\u97f3\u9891\u6570\u636e\u6d41\uff0c\u53ef\u4ee5\u5206\u89e3\u4e3a\u6570\u5b57\u97f3\u9891\u58f0\u9053\uff08\u6bd4\u5982\u7acb\u4f53\u58f0\u6216 5.1\uff086 \u58f0\u9053\uff09\uff09\u3002"),(0,u.kt)("p",null,"\u5728\u5185\u90e8\u901a\u5e38\u4f1a\u5bf9\u8fd9\u4e9b\u4fe1\u53f7\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\u5de5\u4f5c\uff0c\u4f8b\u5982\u6df7\u97f3\u3001\u5e94\u7528\u6548\u679c\u3001\u8870\u51cf\u7b49\u3002\u7531\u4e8e\u5404\u79cd\u539f\u56e0\uff08\u540e\u9762\u4f1a\u8bb2\u5230\uff09\uff0c\u8fd9\u662f\u97f3\u9891\u5904\u7406\u7684\u4e00\u4e2a\u91cd\u8981\u65b9\u9762\uff0c\u8fd9\u4e5f\u662f\u6df7\u97f3\u5668\u7684\u8bbe\u8ba1\u7528\u9014\u3002"),(0,u.kt)("p",null,"\u9664\u4e86\u201c\u53d1\u9001\u201d(Sends) \u548c\u201c\u8fd4\u56de\u201d(Returns)\uff08\u540e\u9762\u4f1a\u8bb2\u5230\uff09\u4e4b\u5916\uff0c\u6df7\u97f3\u5668\u8fd8\u5305\u542b\u97f3\u9891\u7ec4\uff0c\u97f3\u9891\u7ec4\u5141\u8bb8\u4efb\u4f55\u6570\u91cf\u7684\u8f93\u5165\u4fe1\u53f7\uff0c\u6df7\u5408\u8fd9\u4e9b\u4fe1\u53f7\uff0c\u5e76\u4e14\u53ea\u6709 1 \u8def\u8f93\u51fa\u3002"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerSignalPath.png",alt:"AudioMixerSignalPath.png"})),(0,u.kt)("p",null,"\u5728\u97f3\u9891\u5904\u7406\u9886\u57df\uff0c\u8fd9\u79cd\u8def\u7ebf\u548c\u6df7\u97f3\u901a\u5e38\u5728\u4e0e\u573a\u666f\u56fe\u5f62\u5c42\u7ea7\u89c6\u56fe\u6b63\u4ea4\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210\uff0c\u56e0\u4e3a\u97f3\u9891\u7684\u884c\u4e3a\u4ee5\u53ca\u8bbe\u8ba1\u8005\u4e0e\u97f3\u9891\u7684\u4ea4\u4e92\u65b9\u5f0f\u4e0e\u573a\u666f\u4e2d\u663e\u793a\u7684\u5bf9\u8c61\u548c\u6982\u5ff5\u975e\u5e38\u4e0d\u540c\u3002"),(0,u.kt)("p",null,"\u5728\u4ee5\u524d\u7248\u672c\u7684 Unity \u4e2d\uff0c\u4e0d\u5b58\u5728\u8def\u7ebf\u548c\u6df7\u97f3\u7684\u6982\u5ff5\u3002\u7528\u6237\u4ee5\u524d\u53ef\u4ee5\u5c06\u97f3\u9891\u6e90\u653e\u7f6e\u5728\u573a\u666f\u4e2d\uff0c\u5e76\u4e14\u97f3\u9891\u6e90\u4ea7\u751f\u7684\u97f3\u9891\u4fe1\u53f7\uff08\u4f8b\u5982\u901a\u8fc7\u97f3\u9891\u526a\u8f91\uff09\u88ab\u76f4\u63a5\u6dfb\u52a0\u5230\u97f3\u9891\u76d1\u542c\u5668\uff0c\u6240\u6709\u97f3\u9891\u4fe1\u53f7\u5728\u4e00\u4e2a\u70b9\u4e0a\u6df7\u5408\u8d77\u6765\u3002\u6b64\u5904\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u4e0e\u573a\u666f\u56fe\u6b63\u4ea4\u8fdb\u884c\uff0c\u65e0\u8bba\u97f3\u9891\u6e90\u5728\u573a\u666f\u4e2d\u7684\u4ec0\u4e48\u5730\u65b9\u3002"),(0,u.kt)("p",null,"\u6df7\u97f3\u5668\u73b0\u5728\u4f4d\u4e8e\u97f3\u9891\u4fe1\u53f7\u5904\u7406\u7a7a\u95f4\u4e2d\u7684\u97f3\u9891\u6e90\u548c\u97f3\u9891\u76d1\u542c\u5668\u4e4b\u95f4\uff0c\u53ef\u4ee5\u4ece\u97f3\u9891\u6e90\u83b7\u53d6\u8f93\u51fa\u4fe1\u53f7\uff0c\u6267\u884c\u671f\u671b\u7684\u4efb\u4f55\u8def\u7ebf\u548c\u6df7\u97f3\u64cd\u4f5c\uff0c\u76f4\u5230\u6700\u7ec8\u6240\u6709\u97f3\u9891\u90fd\u8f93\u51fa\u5230\u97f3\u9891\u76d1\u542c\u5668\u5e76\u4ece\u626c\u58f0\u5668\u4e2d\u542c\u5230\u3002"),(0,u.kt)("h4",{id:"\u8fd9\u4e9b\u6709\u4ec0\u4e48\u7528\u9014"},"\u8fd9\u4e9b\u6709\u4ec0\u4e48\u7528\u9014\uff1f"),(0,u.kt)("p",null,"\u901a\u8fc7\u6df7\u97f3\u548c\u8def\u7ebf\uff0c\u53ef\u4ee5\u5c06\u6e38\u620f\u4e2d\u7684\u97f3\u9891\u5206\u7c7b\u4e3a\u6240\u6709\u9700\u6c42\u7684\u7c7b\u578b\u3002\u4e00\u65e6\u5c06\u58f0\u97f3\u6df7\u5408\u5230\u8fd9\u4e9b\u7c7b\u522b\u4e2d\uff0c\u6548\u679c\u548c\u5176\u4ed6\u64cd\u4f5c\u5c31\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u5e94\u7528\u4e8e\u8fd9\u4e9b\u7c7b\u522b\u3002\u8fd9\u4e00\u529f\u80fd\u5f88\u5f3a\u5927\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u5c06\u6e38\u620f\u903b\u8f91\u66f4\u6539\u5e94\u7528\u4e8e\u5404\u79cd\u58f0\u97f3\u7c7b\u522b\uff0c\u800c\u4e14\u8fd8\u5141\u8bb8\u8bbe\u8ba1\u4eba\u5458\u8c03\u6574\u6df7\u97f3\u7684\u5404\u4e2a\u65b9\u9762\u4ee5\u4fbf\u5728\u8fd0\u884c\u65f6\u5bf9\u6574\u4e2a\u97f3\u666f\u52a8\u6001\u5730\u6267\u884c\u6240\u8c13\u7684\u201c\u6bcd\u5e26\u5236\u4f5c\u201d(Mastering)\u3002"),(0,u.kt)("h4",{id:"\u4e0e-3d-\u7a7a\u95f4\u8870\u51cf\u7684\u5173\u7cfb"},"\u4e0e 3D \u7a7a\u95f4\u8870\u51cf\u7684\u5173\u7cfb"),(0,u.kt)("p",null,"\u67d0\u4e9b\u58f0\u97f3\u6982\u5ff5\u4e0e\u573a\u666f\u56fe\u548c 3D \u4e16\u754c\u6709\u5173\u3002\u5176\u4e2d\u6700\u660e\u663e\u7684\u662f\u57fa\u4e8e 3D \u8ddd\u79bb\u3001\u4e0e\u97f3\u9891\u76d1\u542c\u5668\u7684\u76f8\u5bf9\u901f\u5ea6\u548c\u73af\u5883\u6df7\u54cd\u6548\u679c\u8fdb\u884c\u7684\u8870\u51cf\u5e94\u7528\u3002"),(0,u.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e9b\u64cd\u4f5c\u4e0e\u573a\u666f\u6709\u5173\uff0c\u800c\u4e0e\u6df7\u97f3\u5668\u4e2d\u7684\u58f0\u97f3\u7c7b\u522b\u65e0\u5173\uff0c\u56e0\u6b64\u5728\u4fe1\u53f7\u8fdb\u5165\u6df7\u97f3\u5668\u4e4b\u524d\uff0c\u6548\u679c\u5c06\u5e94\u7528\u4e8e\u97f3\u9891\u6e90\u3002\u4f8b\u5982\uff0c\u57fa\u4e8e\u97f3\u9891\u6e90\u4e0e\u97f3\u9891\u76d1\u542c\u5668\u7684\u8ddd\u79bb\u5e94\u7528\u4e8e\u97f3\u9891\u6e90\u7684\u8870\u51cf\u5c06\u5728\u4fe1\u53f7\u79bb\u5f00\u97f3\u9891\u6e90\u4e4b\u524d\u5e94\u7528\u4e8e\u4fe1\u53f7\uff0c\u5e76\u88ab\u8def\u7531\u5230\u6df7\u97f3\u5668\u3002"),(0,u.kt)("h3",{id:"\u58f0\u97f3\u7c7b\u522b"},"\u58f0\u97f3\u7c7b\u522b"),(0,u.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u6df7\u97f3\u5668\u5141\u8bb8\u6709\u6548\u5730\u5bf9\u58f0\u97f3\u7c7b\u578b\u8fdb\u884c\u5206\u7c7b\u5e76\u5bf9\u8fd9\u4e9b\u7c7b\u522b\u6267\u884c\u64cd\u4f5c\u3002\u8fd9\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u56e0\u4e3a\u5982\u679c\u6ca1\u6709\u8fd9\u6837\u7684\u5206\u7c7b\uff0c\u6574\u4e2a\u58f0\u666f\u5f88\u5feb\u53d8\u6210\u4e00\u5806\u96be\u4ee5\u533a\u5206\u7684\u566a\u97f3\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u58f0\u97f3\u90fd\u662f\u5e73\u7b49\u5730\u64ad\u653e\uff0c\u800c\u6ca1\u6709\u5bf9\u5b83\u4eec\u5e94\u7528\u6df7\u97f3\u3002\u501f\u52a9\u8bf8\u5982\u95ea\u907f\u4e4b\u7c7b\u7684\u6982\u5ff5\uff0c\u58f0\u97f3\u7c7b\u522b\u4e5f\u53ef\u4ee5\u76f8\u4e92\u5f71\u54cd\uff0c\u4e3a\u6df7\u97f3\u589e\u52a0\u989d\u5916\u7684\u4e30\u5bcc\u6027\u3002"),(0,u.kt)("p",null,"\u4f8b\u5982\uff0c\u8bbe\u8ba1\u4eba\u5458\u53ef\u80fd\u5e0c\u671b\u5bf9\u7c7b\u522b\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5bf9\u4e00\u7ec4\u73af\u5883\u58f0\u97f3\u5e94\u7528\u8870\u51cf\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u6e38\u620f\u4e2d\u6240\u6709\u62df\u97f3\u7684\u4f4e\u901a\u6ee4\u6ce2\u5668\uff0c\u6a21\u62df\u6c34\u4e0b\u6548\u679c\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u8870\u51cf\u6e38\u620f\u4e2d\u7684\u6240\u6709\u58f0\u97f3\uff0c\u4f46\u83dc\u5355\u97f3\u4e50\u548c\u4ea4\u4e92\u58f0\u97f3\u9664\u5916\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u6e38\u620f\u4e2d\u6240\u6709\u67aa\u58f0\u548c\u7206\u70b8\u58f0\u7684\u97f3\u91cf\uff0c\u4ee5\u786e\u4fdd\u53ef\u542c\u5230\u73a9\u5bb6\u4e0e NPC \u4e4b\u95f4\u7684\u4ea4\u8c08\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u7b49\u7b49")),(0,u.kt)("p",null,"\u8fd9\u4e9b\u7c7b\u522b\u5b9e\u9645\u4e0a\u4e0e\u6e38\u620f\u7d27\u5bc6\u76f8\u5173\uff0c\u5e76\u4e14\u5728\u4e0d\u540c\u7684\u9879\u76ee\u4e4b\u95f4\u6709\u6240\u4e0d\u540c\uff0c\u4f46\u8fd9\u79cd\u5206\u7c7b\u53ef\u4ee5\u501f\u9274\u5982\u4e0b\u6240\u8ff0\u7684\u65b9\u5f0f\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u6240\u6709\u58f0\u97f3\u90fd\u8def\u7531\u5230\u201cMaster\u201d\u97f3\u9891\u7ec4"),(0,u.kt)("li",{parentName:"ul"},"\u5728 Master \u7ec4\u4e2d\uff0c\u5b58\u5728\u4ee5\u4e0b\u7c7b\u522b\uff1aMusic\uff08\u97f3\u4e50\uff09\u3001Menu\uff08\u83dc\u5355\uff09\u58f0\u97f3\u548c\u6240\u6709\u6e38\u620f\u58f0\u97f3"),(0,u.kt)("li",{parentName:"ul"},"\u6e38\u620f\u58f0\u97f3\u7ec4\u5206\u4e3a\uff1a\u4e0e NPC \u7684\u5bf9\u8bdd\u3001\u5468\u56f4\u7684\u73af\u5883\u58f0\u97f3\u4ee5\u53ca\u5176\u4ed6\u62df\u97f3\uff08\u6bd4\u5982\u67aa\u58f0\u548c\u811a\u6b65\u58f0\uff09"),(0,u.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6765\u8fdb\u4e00\u6b65\u7ec6\u5206\u8fd9\u4e9b\u7c7b\u522b")),(0,u.kt)("p",null,"\u6b64\u5e03\u5c40\u7684\u7c7b\u522b\u5c42\u7ea7\u89c6\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerHierarchy.png",alt:"AudioMixerHierarchy.png"})),(0,u.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u573a\u666f\u56fe\u5e03\u5c40\u770b\u8d77\u6765\u4e0e\u58f0\u97f3\u7c7b\u522b\u7684\u5e03\u5c40\u5b8c\u5168\u4e0d\u540c\u3002"),(0,u.kt)("h3",{id:"\u6df7\u97f3\u7684\u60c5\u7eea\u548c\u4e3b\u9898"},"\u6df7\u97f3\u7684\u60c5\u7eea\u548c\u4e3b\u9898"),(0,u.kt)("p",null,"\u6e38\u620f\u58f0\u97f3\u7684\u6df7\u97f3\u548c\u8def\u7531\u4e5f\u53ef\u7528\u4e8e\u521b\u5efa\u8bbe\u8ba1\u5e08\u6240\u5bfb\u627e\u7684\u6c89\u6d78\u611f\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5c06\u6df7\u54cd\u5e94\u7528\u4e8e\u6240\u6709\u6e38\u620f\u58f0\u97f3\uff0c\u5e76\u4f7f\u97f3\u4e50\u8870\u51cf\u4ee5\u4ea7\u751f\u8eab\u5904\u6d1e\u7a74\u4e2d\u7684\u611f\u89c9\u3002"),(0,u.kt)("p",null,"\u6df7\u97f3\u5668\u53ef\u4ee5\u6709\u6548\u5730\u7528\u4e8e\u5728\u6e38\u620f\u4e2d\u8425\u9020\u60c5\u7eea\u3002\u901a\u8fc7\u5728\u6e38\u620f\u4e2d\u4f7f\u7528\u5feb\u7167\uff08\u540e\u9762\u4f1a\u4ecb\u7ecd\uff09\u548c\u5176\u4ed6\u4e0d\u540c\u6df7\u97f3\u5668\u7b49\u6982\u5ff5\uff0c\u6e38\u620f\u53ef\u4ee5\u8f7b\u677e\u8f6c\u6362\u5176\u60c5\u7eea\u5e76\u4f7f\u73a9\u5bb6\u611f\u53d7\u5230\u8bbe\u8ba1\u5e08\u6240\u671f\u671b\u7684\u611f\u53d7\uff0c\u8fd9\u5728\u6e38\u620f\u7684\u6c89\u6d78\u4f53\u9a8c\u4e2d\u662f\u8d85\u7ea7\u5f3a\u5927\u7684\u3002"),(0,u.kt)("h3",{id:"\u5168\u5c40\u6df7\u97f3"},"\u5168\u5c40\u6df7\u97f3"),(0,u.kt)("p",null,"\u6df7\u97f3\u5668\u7528\u4e8e\u63a7\u5236\u6e38\u620f\u4e2d\u6240\u6709\u58f0\u97f3\u7684\u603b\u4f53\u6df7\u97f3\u3002\u8fd9\u4e9b\u6df7\u97f3\u5668\u5c06\u63a7\u5236\u5168\u5c40\u6df7\u97f3\uff0c\u53ef\u89c6\u4e3a\u8def\u7531\u58f0\u97f3\u5b9e\u4f8b\u7684\u9759\u6001\u5355\u58f0\u9053\u6df7\u97f3\u3002"),(0,u.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u6df7\u97f3\u5668\u59cb\u7ec8\u5b58\u5728\u4e8e\u573a\u666f\u7684\u751f\u547d\u5468\u671f\u4e2d\uff0c\u58f0\u97f3\u5b9e\u4f8b\u968f\u7740\u6e38\u620f\u7684\u8fdb\u884c\u800c\u521b\u5efa\u548c\u9500\u6bc1\uff0c\u5e76\u901a\u8fc7\u8fd9\u4e9b\u5168\u5c40\u6df7\u97f3\u5668\u64ad\u653e\u3002"),(0,u.kt)("h3",{id:"\u5feb\u7167"},"\u5feb\u7167"),(0,u.kt)("p",null,"\u5feb\u7167\u53ef\u4ee5\u6355\u83b7\u6df7\u97f3\u5668\u7684\u72b6\u6001\uff0c\u5e76\u968f\u7740\u6e38\u620f\u7684\u8fdb\u884c\u5728\u8fd9\u4e9b\u4e0d\u540c\u7684\u72b6\u6001\u4e4b\u95f4\u8f6c\u6362\u3002\u8981\u5b9a\u4e49\u6df7\u97f3\u7684\u60c5\u7eea\u6216\u4e3b\u9898\uff0c\u5e76\u968f\u7740\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u7684\u8fdb\u5c55\u800c\u6539\u53d8\u8fd9\u4e9b\u60c5\u7eea\uff0c\u8fd9\u662f\u4e00\u79cd\u5f88\u68d2\u7684\u65b9\u6cd5\u3002"),(0,u.kt)("p",null,"\u5feb\u7167\u53ef\u6355\u83b7\u6df7\u97f3\u5668\u4e2d\u6240\u6709\u53c2\u6570\u7684\u503c\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u97f3\u91cf"),(0,u.kt)("li",{parentName:"ul"},"\u97f3\u9ad8"),(0,u.kt)("li",{parentName:"ul"},"\u53d1\u9001\u7ea7\u522b"),(0,u.kt)("li",{parentName:"ul"},"\u6e7f\u6df7\u97f3\u7ea7\u522b"),(0,u.kt)("li",{parentName:"ul"},"\u6548\u679c\u53c2\u6570")),(0,u.kt)("p",null,"\u8981\u6539\u53d8\u97f3\u666f\u7684\u591a\u4e2a\u65b9\u9762\uff0c\u4e00\u79cd\u5f88\u68d2\u65b9\u6cd5\u662f\u5c06\u5feb\u7167\u4e0e\u6e38\u620f\u903b\u8f91\u76f8\u7ed3\u5408\u3002"))}m.isMDXComponent=!0}}]);