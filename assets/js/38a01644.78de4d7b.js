"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84870],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(a,".").concat(m)]||c[m]||s[m]||o;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],u={id:"AudioMixerInspectors",title:"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector)",slug:"/audio-mixer/audio-mixer-inspectors"},a="\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector)",p={unversionedId:"audio/audio-mixer/AudioMixerInspectors",id:"audio/audio-mixer/AudioMixerInspectors",title:"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector)",description:"\u5728 AudioGroup \u5c42\u7ea7\u89c6\u56fe\u3001AudioGroup \u89c6\u56fe\u6216 Project \u7a97\u53e3\u4e2d\u9009\u62e9\u67d0\u4e2a\u97f3\u9891\u7ec4\uff08\u4f5c\u4e3a\u5b50\u8d44\u6e90\uff09\u5c06\u663e\u793a\u6b64\u97f3\u9891\u7ec4\u7684\u68c0\u89c6\u9762\u677f\u3002",source:"@site/docs/audio/audio-mixer/audio-mixer-inspectors.md",sourceDirName:"audio/audio-mixer",slug:"/audio-mixer/audio-mixer-inspectors",permalink:"/docs/audio-mixer/audio-mixer-inspectors",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/audio/audio-mixer/audio-mixer-inspectors.md",tags:[],version:"current",frontMatter:{id:"AudioMixerInspectors",title:"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector)",slug:"/audio-mixer/audio-mixer-inspectors"},sidebar:"tutorialSidebar",previous:{title:"\u6df7\u97f3\u5668",permalink:"/docs/audio-mixer"},next:{title:"\u6982\u5ff5\u548c\u6df7\u97f3\u5668 (AudioMixer) \u7684\u6982\u8ff0",permalink:"/docs/audio-mixer/audio-mixer-overview"}},d={},s=[{value:"\u68c0\u89c6\u9762\u677f\u6807\u9898",id:"\u68c0\u89c6\u9762\u677f\u6807\u9898",level:2},{value:"Edit in Playmode",id:"edit-in-playmode",level:2},{value:"Pitch \u6ed1\u52a8\u6761",id:"pitch-\u6ed1\u52a8\u6761",level:2},{value:"\u8870\u51cf\u5355\u5143 (Attenuation Unit)",id:"\u8870\u51cf\u5355\u5143-attenuation-unit",level:2},{value:"\u6548\u679c\u5355\u5143",id:"\u6548\u679c\u5355\u5143",level:2},{value:"\u53d1\u9001\u5355\u5143 (Send Unit)",id:"\u53d1\u9001\u5355\u5143-send-unit",level:2},{value:"\u63a5\u6536\u5355\u5143 (Receive Unit)",id:"\u63a5\u6536\u5355\u5143-receive-unit",level:2},{value:"\u51cf\u5f31\u97f3\u91cf\u5355\u5143 (Duck Volume Unit)",id:"\u51cf\u5f31\u97f3\u91cf\u5355\u5143-duck-volume-unit",level:2},{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:2},{value:"\u9f7f\u8f6e\u9009\u9879",id:"\u9f7f\u8f6e\u9009\u9879",level:3},{value:"\u6e7f\u6df7 (Wet Mixing)",id:"\u6e7f\u6df7-wet-mixing",level:3},{value:"\u66b4\u9732\u7684\u53c2\u6570 (Exposed Parameters)",id:"\u66b4\u9732\u7684\u53c2\u6570-exposed-parameters",level:3},{value:"\u8fc7\u6e21\u8986\u76d6",id:"\u8fc7\u6e21\u8986\u76d6",level:3}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f-audiogroup-inspector"},"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector)"),(0,o.kt)("p",null,"\u5728 AudioGroup \u5c42\u7ea7\u89c6\u56fe\u3001AudioGroup \u89c6\u56fe\u6216 Project \u7a97\u53e3\u4e2d\u9009\u62e9\u67d0\u4e2a\u97f3\u9891\u7ec4\uff08\u4f5c\u4e3a\u5b50\u8d44\u6e90\uff09\u5c06\u663e\u793a\u6b64\u97f3\u9891\u7ec4\u7684\u68c0\u89c6\u9762\u677f\u3002"),(0,o.kt)("p",null,"\u97f3\u9891\u7ec4\u7684\u68c0\u89c6\u9762\u677f\u5305\u542b\u591a\u4e2a\u5143\u7d20\uff1a"),(0,o.kt)("h2",{id:"\u68c0\u89c6\u9762\u677f\u6807\u9898"},"\u68c0\u89c6\u9762\u677f\u6807\u9898"),(0,o.kt)("p",null,"\u97f3\u9891\u7ec4\uff08AudioGroup\uff09\u68c0\u89c6\u9762\u677f\u7684\u9876\u90e8\u662f\u97f3\u9891\u7ec4\uff08AudioGroup\uff09\u7684\u540d\u79f0\uff0c\u8fd8\u5305\u542b\u6240\u6709\u5bf9\u8c61\u68c0\u89c6\u9762\u677f\u901a\u7528\u7684\u9f7f\u8f6e\u4e0b\u62c9\u83dc\u5355\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerInspectorHeader.png",alt:"AudioMixerInspectorHeader.png"})),(0,o.kt)("p",null,"\u9f7f\u8f6e\u83dc\u5355\u5305\u542b\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u201cCopy all effect settings to all snapshots\u201d- \u7528\u4e8e\u5c06\u6b64\u97f3\u9891\u7ec4\u7684\u6240\u6709\u6548\u679c\u53c2\u6570\u3001\u97f3\u91cf\u548c\u97f3\u9ad8\u8bbe\u7f6e\u590d\u5236\u5230\u6df7\u97f3\u5668 (AudioMixer) \u4e2d\u5b58\u5728\u7684\u6240\u6709\u5176\u4ed6\u5feb\u7167\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u5bf9\u6b64\u97f3\u9891\u7ec4\u5feb\u901f\u521b\u5efa\u6240\u6709\u201c\u4e0e\u6b64\u7c7b\u4f3c\u201d\u7684\u5feb\u7167\u3002")," \u201cToggle CPU usage display\u201d- \u7528\u4e8e\u5207\u6362\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f\u4e2d\u5b58\u5728\u7684\u6240\u6709\u6548\u679c\u7684 CPU \u6027\u80fd\u4fe1\u606f\u3002\u6b64\u529f\u80fd\u53ef\u4ee5\u8ba9\u7528\u6237\u4e86\u89e3 DSP \u8bbe\u7f6e\u4e2d\u7684\u54ea\u4e9b\u6548\u679c\u6b63\u5728\u4f7f\u7528\u6700\u591a\u8d44\u6e90\u3002"),(0,o.kt)("h2",{id:"edit-in-playmode"},"Edit in Playmode"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerEditInPlaymode1.png",alt:"AudioMixerEditInPlaymode1.png"})," ",(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerEditInPlaymode2.png",alt:"AudioMixerEditInPlaymode2.png"})),(0,o.kt)("p",null,"\u5728 Unity \u4e2d\u5904\u4e8e Playmode \u65f6\uff0c\u97f3\u9891\u7ec4\u7684\u68c0\u89c6\u9762\u677f\u5728\u9876\u90e8\u5305\u542b\u4e00\u4e2a\u540d\u4e3a\u201cEdit in Playmode\u201d\u7684\u6309\u94ae\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6df7\u97f3\u5668\u7684\u53c2\u6570\u503c\u5728 Playmode \u4e0b\u65e0\u6cd5\u7f16\u8f91\uff0c\u5e76\u4e14\u5b8c\u5168\u7531\u6e38\u620f\u4e2d\u7684\u5f53\u524d\u5feb\u7167\u6765\u63a7\u5236\u3002"),(0,o.kt)("p",null,"Edit in Playmode \u53ef\u8ba9\u60a8\u8986\u76d6\u5feb\u7167\u7cfb\u7edf\uff0c\u5e76\u5728 Playmode \u671f\u95f4\u76f4\u63a5\u5bf9\u5f53\u524d\u5feb\u7167\u8fdb\u884c\u7f16\u8f91\u3002\u82e5\u8981\u5728\u73a9\u6e38\u73a9\u65f6\u5b9e\u65f6\u5bf9\u6e38\u620f\u8fdb\u884c\u6df7\u97f3\u548c\u6bcd\u5e26\u5236\u4f5c\uff0c\u8fd9\u662f\u4e00\u79cd\u4e0d\u9519\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("h2",{id:"pitch-\u6ed1\u52a8\u6761"},"Pitch \u6ed1\u52a8\u6761"),(0,o.kt)("p",null,"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f\u9876\u90e8\u6709\u4e00\u4e2a\u6ed1\u52a8\u6761\uff0c\u7528\u4e8e\u901a\u8fc7\u8be5\u97f3\u9891\u7ec4\u6765\u5b9a\u4e49\u64ad\u653e\u97f3\u9ad8\u3002\u8981\u66f4\u6539\u97f3\u9ad8\uff0c\u8bf7\u4f7f\u7528\u6ed1\u52a8\u6761\uff0c\u6216\u8005\u5728\u53f3\u4fa7\u7684\u6587\u672c\u5b57\u6bb5\u4e2d\u624b\u52a8\u8f93\u5165\u97f3\u9ad8\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerPitchSlider.png",alt:"AudioMixerPitchSlider.png"})),(0,o.kt)("h2",{id:"\u8870\u51cf\u5355\u5143-attenuation-unit"},"\u8870\u51cf\u5355\u5143 (Attenuation Unit)"),(0,o.kt)("p",null,"\u6df7\u97f3\u5668\u4e2d\u7684\u6bcf\u4e2a\u97f3\u9891\u7ec4\u53ea\u5305\u542b 1 \u4e2a\u8870\u51cf\u5355\u5143\u3002"),(0,o.kt)("p",null,"\u5728\u8870\u51cf\u5355\u5143\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5bf9\u901a\u8fc7\u97f3\u9891\u7ec4\u7684\u97f3\u9891\u4fe1\u53f7\u5e94\u7528\u8870\u51cf/\u589e\u76ca\u3002\u5bf9\u8870\u51cf\u7684\u8ba1\u7b97\u5e76\u5c06\u5176\u5e94\u7528\u4e8e\u4fe1\u53f7\u90fd\u662f\u5728\u5355\u5143\u5185\u8fdb\u884c\u7684\uff08\u4e0d\u4f1a\u4e0e\u5176\u4ed6\u8870\u51cf\u8bbe\u7f6e\u5408\u5e76\uff0c\u4e5f\u4e0d\u4f1a\u5e94\u7528\u4e8e\u8bed\u97f3\u6e90\uff09\u3002\u56e0\u6b64\uff0c\u901a\u8fc7\u4e0e\u53d1\u9001/\u63a5\u6536\u5355\u5143\u548c\u975e\u7ebf\u6027 DSP \u6548\u679c\u7ec4\u5408\u540e\uff0c\u53ef\u521b\u5efa\u975e\u5e38\u590d\u6742\u4e14\u6709\u8da3\u7684\u8bbe\u7f6e\u3002\u5e94\u7528\u8870\u51cf\u540e\u53ef\u964d\u4f4e\u81f3 \u201380dB\uff08\u9759\u97f3\uff09\uff0c\u800c\u5e94\u7528\u589e\u76ca\u540e\u53ef\u63d0\u9ad8\u81f3 +20dB\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerAttenuationUnit.png",alt:"AudioMixerAttenuationUnit.png"})),(0,o.kt)("p",null,"\u6bcf\u4e2a\u8870\u51cf\u5355\u5143\u5728\u68c0\u89c6\u9762\u677f\u4e2d\u90fd\u6709\u4e00\u4e2a VU \u8ba1\u91cf\u8868\u3002\u6b64\u8ba1\u91cf\u8868\u663e\u793a\u4fe1\u53f7\u94fe\u4e2d\u6b64\u65f6\u523b\uff08\u5373\u521a\u5e94\u7528\u8870\u51cf\u4e4b\u540e\uff09\u7684\u97f3\u9891\u4fe1\u53f7\u6c34\u5e73\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u5728\u8870\u51cf\u5355\u5143\u4e4b\u540e\u8bbe\u7f6e\u4e86 DSP \u6548\u679c\u6216\u63a5\u6536\u5355\u5143\uff0c\u5219\u60a8\u5728\u6b64\u97f3\u9891\u7ec4\u7684 AudioGroup \u6761\u5e26\u4e2d\u770b\u5230\u7684\u8ba1\u91cf\u4fe1\u606f\u5c06\u4e0d\u540c\u4e8e\u5728\u8870\u51cf\u5355\u5143\u4e2d\u770b\u5230\u7684\u8ba1\u91cf\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u5904\u7406\u94fe\u4e2d\u4e0a\u4e0b\u62d6\u52a8\u8870\u51cf\u5355\u5143\u6765\u67e5\u770b\u4e0d\u540c\u4f4d\u7f6e\u7684\u8ba1\u91cf\u4fe1\u606f\uff0c\u56e0\u6b64\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u4e0d\u9519\u7684\u97f3\u9891\u7ec4\u4fe1\u53f7\u94fe\u8c03\u8bd5\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"VU \u8ba1\u91cf\u8868\u5c06\u540c\u65f6\u663e\u793a RMS \u503c\u548c\u5cf0\u503c\u4fdd\u6301\u503c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u5728\u4fe1\u53f7\u94fe\u4e2d\u4e0a\u4e0b\u79fb\u52a8\u8870\u51cf\u5355\u5143\uff08\u6216\u4efb\u4f55\u6548\u679c\uff09\uff0c\u8bf7\u5355\u51fb\u8be5\u5355\u5143\u7684\u6807\u9898\uff0c\u7136\u540e\u4e0a\u4e0b\u62d6\u52a8\u68c0\u89c6\u9762\u677f\u4ee5\u5bf9\u5176\u91cd\u65b0\u5b9a\u4f4d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8981\u66f4\u6539\u8870\u51cf\u8bbe\u7f6e\uff0c\u8bf7\u79fb\u52a8\u8ba1\u91cf\u4fe1\u606f\u4e0a\u65b9\u7684\u6ed1\u52a8\u6761\uff0c\u6216\u5728\u6587\u672c\u6846\u4e2d\u8f93\u5165\u503c\u3002")),(0,o.kt)("h2",{id:"\u6548\u679c\u5355\u5143"},"\u6548\u679c\u5355\u5143"),(0,o.kt)("p",null,"\u6548\u679c\u5355\u5143 (Effect Unit) \u63d0\u4f9b\u5e38\u89c4 DSP \u6548\u679c\uff0c\u53ef\u4fee\u6539\u901a\u8fc7\u97f3\u9891\u7ec4\u64ad\u653e\u7684\u97f3\u9891\u4fe1\u53f7\uff0c\u4f8b\u5982\u9ad8\u901a (Highpass) \u6216\u6df7\u54cd (Reverb)\u3002\u6548\u679c\u5355\u5143\u8fd8\u53ef\u4ee5\u5904\u7406\u4ece\u53d1\u9001\u5355\u5143 (Send Unit) \u53d1\u9001\u5230\u6548\u679c\u5355\u5143\u7684\u65c1\u94fe\u4fe1\u53f7\u4fe1\u606f\u3002\u6bcf\u4e2a\u6548\u679c\u5355\u5143\u7684\u754c\u9762\u5404\u6709\u4e0d\u540c\uff0c\u4f46\u5927\u90e8\u5206\u90fd\u663e\u793a\u4e86\u4e00\u7ec4\u53ef\u4f9b\u4fee\u6539\u7684\u53c2\u6570\uff0c\u901a\u8fc7\u4fee\u6539\u53c2\u6570\u5373\u53ef\u66f4\u6539\u5bf9\u4fe1\u53f7\u5e94\u7528\u6548\u679c\u7684\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u53c2\u6570\u5747\u8861\u5668 (Parameter EQ) \u6548\u679c\u6709 3 \u4e2a\u53c2\u6570\u53ef\u7528\u4e8e\u4fee\u6539\u4fe1\u53f7\u7684\u5904\u7406\u65b9\u5f0f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerEffectUnits.png",alt:"AudioMixerEffectUnits.png"})),(0,o.kt)("p",null,"Unity \u9644\u5e26\u4e86\u4e00\u7ec4\u53ef\u5728\u97f3\u9891\u7ec4\u4e2d\u4f7f\u7528\u7684\u5185\u7f6e\u6548\u679c\u3002\u6b64\u5916\uff0c\u8fd8\u80fd\u521b\u5efa\u53ef\u5728\u6df7\u97f3\u5668\u4e2d\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49 DSP \u6548\u679c\u63d2\u4ef6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u5411\u97f3\u9891\u7ec4\u4e2d\u6dfb\u52a0\u6548\u679c\uff0c\u8bf7\u5355\u51fb\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f (AudioGroup Inspector) \u5e95\u90e8\u7684\u201cAdd Effect\u201d\u6309\u94ae\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerAddEffect.png",alt:"AudioMixerAddEffect.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u66f4\u6539\u6548\u679c\u5728\u97f3\u9891\u7ec4\u4e2d\u7684\u6392\u5e8f\uff0c\u8bf7\u5de6\u952e\u5355\u51fb\u6548\u679c\u6807\u9898\uff0c\u7136\u540e\u901a\u8fc7\u4e0a\u4e0b\u62d6\u52a8\u5c06\u5176\u653e\u5728\u4e0d\u540c\u4f4d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8981\u4ece\u97f3\u9891\u7ec4\u4e2d\u5220\u9664\u6548\u679c\uff0c\u8bf7\u53f3\u952e\u5355\u51fb\u6548\u679c\u6807\u9898\uff0c\u7136\u540e\u9009\u62e9\u201cRemove this effect\u201d\u3002")),(0,o.kt)("h2",{id:"\u53d1\u9001\u5355\u5143-send-unit"},"\u53d1\u9001\u5355\u5143 (Send Unit)"),(0,o.kt)("p",null,"\u53d1\u9001\u5355\u5143\u53ef\u7528\u4e8e\u5206\u53d1\u97f3\u9891\u4fe1\u53f7\u6d41\uff0c\u5e76\u53ef\u53d1\u9001\u53ef\u80fd\u8870\u51cf\u7684\u4fe1\u53f7\u526f\u672c\u4ee5\u7528\u4f5c\u53e6\u4e00\u4e2a\u6548\u679c\u5355\u5143\uff08\u5982\u65c1\u94fe\u6bd4\u8f83\u5668\u538b\u7f29\u5668\uff09\u4e2d\u7684\u65c1\u94fe\u3002\u60a8\u53ef\u4ee5\u5728\u4fe1\u53f7\u94fe\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u63d2\u5165\u53d1\u9001\u5355\u5143\uff0c\u4ece\u800c\u80fd\u591f\u5728\u4efb\u4f55\u70b9\u5206\u53d1\u4fe1\u53f7\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerSendUnits.png",alt:"AudioMixerSendUnits.png"})),(0,o.kt)("p",null,"\u53d1\u9001\u5355\u5143\u9996\u6b21\u6dfb\u52a0\u5230\u97f3\u9891\u7ec4\u65f6\uff0c\u4e0d\u4f1a\u5411\u4efb\u4f55\u5bf9\u8c61\u53d1\u9001\u4fe1\u53f7\uff0c\u800c\u4e14 Send Level \u8bbe\u7f6e\u4e3a 80dB\u3002\u8981\u53d1\u9001\u5230\u53e6\u4e00\u4e2a\u6548\u679c\u5355\u5143\uff0c\u5fc5\u987b\u4e8b\u5148\u5b58\u5728\u4e00\u4e2a\u6548\u679c\u5355\u5143\u53ef\u5728\u6df7\u97f3\u5668\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\u63a5\u53d7\u65c1\u94fe\u4fe1\u53f7\u3002\u5728\u9009\u62e9\u76ee\u6807\u6548\u679c\u5355\u5143\u540e\uff0c\u7528\u6237\u9700\u8981\u589e\u5927 Send Level \u624d\u80fd\u5c06\u4fe1\u53f7\u53d1\u9001\u5230\u76ee\u6807\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u5411\u97f3\u9891\u7ec4\u4e2d\u6dfb\u52a0\u53d1\u9001\u5355\u5143\uff0c\u8bf7\u5355\u51fb\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f\u5e95\u90e8\u7684\u201cAdd Effect\u201d\u6309\u94ae\uff0c\u7136\u540e\u9009\u62e9\u201cSend\u201d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8981\u5c06\u53d1\u9001\u5355\u5143\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u6548\u679c\u5355\u5143\uff08\u80fd\u591f\u63a5\u6536\u4fe1\u53f7\uff09\uff0c\u8bf7\u4ece\u53d1\u9001\u5355\u5143\u68c0\u89c6\u9762\u677f (Send Unit Inspector) \u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u76ee\u6807\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u201cSend Level\u201d\u6765\u8bbe\u7f6e\u53d1\u9001\u5230\u76ee\u6807\u7684\u4fe1\u53f7\u6c34\u5e73")),(0,o.kt)("h2",{id:"\u63a5\u6536\u5355\u5143-receive-unit"},"\u63a5\u6536\u5355\u5143 (Receive Unit)"),(0,o.kt)("p",null,"\u63a5\u6536\u5355\u5143\u662f\u53d1\u9001\u5355\u5143\u7684\u4fe1\u53f7\u63a5\u6536\u5668\uff0c\u76f4\u63a5\u83b7\u53d6\u4ece\u53d1\u9001\u5355\u5143\u53d1\u9001\u5230\u63a5\u6536\u5355\u5143\u7684\u97f3\u9891\u4fe1\u53f7\uff0c\u5e76\u5c06\u6b64\u4fe1\u53f7\u4e0e\u901a\u8fc7\u97f3\u9891\u7ec4\u7684\u7535\u6d41\u4fe1\u53f7\u6df7\u5408\u3002\u63a5\u6536\u5355\u5143\u6ca1\u6709\u53c2\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerReceiveUnits.png",alt:"AudioMixerReceiveUnits.png"})),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff0c\u5982\u679c\u5c06\u63a5\u6536\u5355\u5143\u8bbe\u4e3a Solo\uff0c\u5219\u4f1a\u4f7f\u58f0\u97f3\u64ad\u653e\u505c\u6b62\u3002\u8fd9\u662f\u6709\u610f\u8bbe\u8ba1\u7684\u3002"),(0,o.kt)("h2",{id:"\u51cf\u5f31\u97f3\u91cf\u5355\u5143-duck-volume-unit"},"\u51cf\u5f31\u97f3\u91cf\u5355\u5143 (Duck Volume Unit)"),(0,o.kt)("p",null,"\u51cf\u5f31\u97f3\u91cf\u5355\u5143\u53ef\u901a\u8fc7\u53d1\u9001\u5355\u5143\u53d1\u51fa\u7684\u4fe1\u53f7\u6765\u521b\u5efa\u65c1\u94fe\u538b\u7f29\u3002\u82e5\u8981\u6839\u636e\u6df7\u97f3\u5668\u4e2d\u5176\u4ed6\u4f4d\u7f6e\u6240\u64ad\u653e\u7684\u97f3\u9891\u6765\u63a7\u5236\u4fe1\u53f7\u7684\u8870\u51cf\uff0c\u51cf\u5f31\u97f3\u91cf (Duck Volume) \u662f\u4e00\u79cd\u5f88\u4e0d\u9519\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerDuckVolumeUnits.png",alt:"AudioMixerDuckVolumeUnits.png"})),(0,o.kt)("p",null,"\u53ef\u4ee5\u50cf\u4efb\u4f55\u5176\u4ed6\u6548\u679c\u5355\u5143\u4e00\u6837\u6dfb\u52a0\u51cf\u5f31\u97f3\u91cf\u5355\u5143\uff0c\u5e76\u4e14\u5fc5\u987b\u81f3\u5c11\u4ece\u4e00\u4e2a\u53d1\u9001\u5355\u5143\u5411\u51cf\u5f31\u97f3\u91cf\u5355\u5143\u53d1\u9001\u4fe1\u53f7\u624d\u80fd\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,o.kt)("p",null,"\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f\u4e2d\u7684\u6bcf\u4e2a\u5355\u5143\u90fd\u5305\u542b\u4e00\u4e9b\u901a\u7528\u7279\u6027\u3002"),(0,o.kt)("h3",{id:"\u9f7f\u8f6e\u9009\u9879"},"\u9f7f\u8f6e\u9009\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Allow Wet Mixing"),"  - \u5f00\u542f\u6b64\u9009\u9879\u53ef\u56f4\u7ed5\u6548\u679c\u521b\u5efa\u5e72\u58f0\u9053\u3002\u542f\u7528\u6b64\u9009\u9879\u540e\u663e\u793a\u7684\u6ed1\u52a8\u6761\u8868\u793a\u4f20\u9012\u5230\u6e7f/\u5e72\u5206\u91cf\u7684\u4fe1\u53f7\u767e\u5206\u6bd4\u3002\u542f\u7528\u6b64\u9009\u9879\u4f1a\u63d0\u9ad8\u5185\u5b58\u4f7f\u7528\u91cf\u548c CPU \u5f00\u9500\u3002\u6b64\u9009\u9879\u4ec5\u5bf9\u67d0\u4e9b\u5355\u5143\u53ef\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bypass"),"  - \u5f00\u542f\u6b64\u9009\u9879\u5c06\u5b8c\u5168\u7ed5\u8fc7\u6548\u679c\u5355\u5143\uff0c\u4ece\u800c\u5728\u4fe1\u53f7\u94fe\u4e2d\u6709\u6548\u7981\u7528\u8be5\u5355\u5143\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Copy Effect Settings to all Snapshots"),"  - \u9009\u62e9\u6b64\u9009\u9879\u53ef\u5c06\u6b64\u6548\u679c\u5355\u5143\u4e2d\u7684\u6240\u6709\u53c2\u6570\u503c\u590d\u5236\u5230\u6df7\u97f3\u5668\u4e2d\u7684\u6240\u6709\u5176\u4ed6\u5feb\u7167\u3002\u6b64\u9009\u9879\u5728\u4e0b\u5217\u60c5\u51b5\u4e0b\u5f88\u6709\u7528\uff1a\u6dfb\u52a0\u65b0\u7684\u6548\u679c\u5355\u5143\uff0c\u5bf9\u8be5\u6548\u679c\u5355\u5143\u8fdb\u884c\u66f4\u6539\uff0c\u5e0c\u671b\u8fd9\u4e9b\u8bbe\u7f6e\u5728\u6240\u6709\u5feb\u7167\u4e2d\u5747\u76f8\u540c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add Effect Before"),"  - \u5141\u8bb8\u5728\u97f3\u9891\u7ec4\u4e2d\u7684\u5f53\u524d\u6548\u679c\u5355\u5143\u4e4b\u524d\u63d2\u5165\u4e00\u4e2a\u6548\u679c\u5355\u5143\u3002\u4ece\u663e\u793a\u7684\u83dc\u5355\u4e2d\u9009\u62e9\u6240\u9700\u6548\u679c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Add Effect After"),"  - \u5141\u8bb8\u5728\u97f3\u9891\u7ec4\u4e2d\u7684\u5f53\u524d\u6548\u679c\u5355\u5143\u4e4b\u540e\u63d2\u5165\u4e00\u4e2a\u6548\u679c\u5355\u5143\u3002\u4ece\u663e\u793a\u7684\u83dc\u5355\u4e2d\u9009\u62e9\u6240\u9700\u6548\u679c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remove This Effect"),"  - \u4ece\u6df7\u97f3\u5668\u4e2d\u5b8c\u5168\u5220\u9664\u6b64\u6548\u679c\u5355\u5143\u3002\u65e0\u6cd5\u4ece\u97f3\u9891\u7ec4\u4e2d\u5220\u9664\u8870\u51cf\u5355\u5143\u3002")),(0,o.kt)("h3",{id:"\u6e7f\u6df7-wet-mixing"},"\u6e7f\u6df7 (Wet Mixing)"),(0,o.kt)("p",null,"\u901a\u8fc7\u5bf9 DSP \u6548\u679c\u4f7f\u7528\u6e7f\u6df7\uff0c\u53ef\u786e\u5b9a\u8981\u8fdb\u5165\u97f3\u6548\u7684\u97f3\u9891\u4fe1\u53f7\u4e2d\u5b9e\u9645\u6709\u591a\u5c11\u4fe1\u53f7\u91cf\u7531\u8be5\u6548\u679c\u5904\u7406\u3002\u542f\u7528\u6e7f\u6df7\u5b9e\u9645\u4e0a\u5c06\u56f4\u7ed5\u6548\u679c\u521b\u5efa\u5e72\u58f0\u9053\u3002\u7136\u540e\uff0c\u53ef\u5355\u51fb\u6548\u679c\u5b57\u6bb5\uff0c\u5e76\u8fdb\u884c\u5de6\u53f3\u62d6\u52a8\u4ee5\u589e\u5927\u6216\u51cf\u5c0f\u901a\u8fc7 DSP \u6548\u679c\u5355\u5143\u5904\u7406\u7684\u97f3\u9891\u4fe1\u53f7\u767e\u5206\u6bd4\u3002\u5176\u4f59\u4fe1\u53f7\u5c06\u901a\u8fc7\u5e72\u58f0\u9053\u3002\u4e0b\u56fe\u8bf4\u660e\u4e86\u6b64\u6982\u5ff5\uff1a"),(0,o.kt)("p",null,"\u5982\u679c\u7528\u6237\u5e0c\u671b\u63a7\u5236\u67d0\u4e00\u6548\u679c\u5bf9\u4e8e\u6df7\u97f3\u7684\u5f71\u54cd\u5e76\u4fdd\u7559\u4e00\u5b9a\u6bd4\u4f8b\u7684\u539f\u59cb\u4fe1\u53f7\uff0c\u6e7f\u6df7\u5c06\u5f88\u6709\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerWetMixing.png",alt:"AudioMixerWetMixing.png"})),(0,o.kt)("h3",{id:"\u66b4\u9732\u7684\u53c2\u6570-exposed-parameters"},"\u66b4\u9732\u7684\u53c2\u6570 (Exposed Parameters)"),(0,o.kt)("p",null,"\u901a\u8fc7\u66b4\u9732\u7684\u53c2\u6570\uff0c\u60a8\u53ef\u4ee5\u7ed5\u8fc7\u6df7\u97f3\u5668\u7684\u5feb\u7167\u7cfb\u7edf\uff0c\u5e76\u901a\u8fc7\u811a\u672c\u6765\u8bbe\u7f6e\u6df7\u97f3\u5668\u4e2d\u4efb\u4f55\u53c2\u6570\u7684\u503c\u3002\u901a\u8fc7\u811a\u672c\u6765\u8bbe\u7f6e\u67d0\u4e2a\u66b4\u9732\u7684\u53c2\u6570\u65f6\uff0c\u8be5\u53c2\u6570\u5c06\u9501\u5b9a\u4e3a\u8be5\u503c\uff0c\u4e0d\u4f1a\u968f\u7740\u6e38\u620f\u5207\u6362\u5feb\u7167\u800c\u66f4\u6539\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u97f3\u9891\u7ec4\u68c0\u89c6\u9762\u677f\u4e2d\u901a\u8fc7\u6df7\u97f3\u5668\u6765\u66b4\u9732\u53c2\u6570\u3002\u5bf9\u4e8e\u68c0\u89c6\u9762\u677f\u4e2d\u663e\u793a\u7684\u4efb\u4f55\u53c2\u6570\uff08\u5305\u62ec Pitch\u3001Volume\u3001Send Level \u548c Wet Level\uff09\uff0c\u90fd\u53ef\u4ee5\u5355\u51fb\u53c2\u6570\u540d\u79f0\uff0c\u7136\u540e\u9009\u62e9\u201cExpose X to script\u201d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerExposedParameters1.png",alt:"AudioMixerExposedParameters1.png"})),(0,o.kt)("p",null,"\u5728\u66b4\u9732\u67d0\u4e2a\u53c2\u6570\u540e\uff0c\u8be5\u53c2\u6570\u5c06\u663e\u793a\u5728 AudioMixer \u7a97\u53e3\u53f3\u4e0a\u89d2\u7684 Exposed Parameter \u4e0b\u62c9\u9009\u5355\u4e2d\u3002\u5355\u51fb\u6b64\u4e0b\u62c9\u9009\u5355\u5c06\u5728\u6df7\u97f3\u5668\u4e2d\u663e\u793a\u6240\u6709\u5df2\u66b4\u9732\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerExposedParameters2.png",alt:"AudioMixerExposedParameters2.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u91cd\u547d\u540d\u67d0\u4e2a\u66b4\u9732\u7684\u53c2\u6570\uff0c\u8bf7\u53f3\u952e\u5355\u51fb\u6b64\u66b4\u9732\u53c2\u6570\u7684\u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb\u201cRename\u201d\u3002\u5728\u6df7\u97f3\u5668 API \u4e2d\u53ef\u901a\u8fc7\u6b64\u540d\u79f0\u6765\u5f15\u7528\u53c2\u6570\u3002 ","*","\u8981\u5220\u9664\u67d0\u4e2a\u66b4\u9732\u7684\u53c2\u6570\uff0c\u8bf7\u53f3\u952e\u5355\u51fb\u6b64\u66b4\u9732\u53c2\u6570\u7684\u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb\u201cDelete\u201d\u3002")),(0,o.kt)("h3",{id:"\u8fc7\u6e21\u8986\u76d6"},"\u8fc7\u6e21\u8986\u76d6"),(0,o.kt)("p",null,"\u5728\u5feb\u7167\u4e4b\u95f4\u8fc7\u6e21\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u8fc7\u6e21\u90fd\u901a\u8fc7\u7ebf\u6027\u63d2\u503c\uff08\u4ece\u5f00\u59cb\u503c\u5230\u76ee\u6807\u503c\uff09\u6765\u5b8c\u6210\u3002\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e00\u8fc7\u6e21\u884c\u4e3a\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\uff0c\u4f8b\u5982\uff0c\u6709\u65f6\u66f4\u5e0c\u671b\u5c06\u66f4\u6539\u9650\u5236\u5728\u8fc7\u6e21\u7684\u5f00\u59cb\u6216\u7ed3\u675f\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6df7\u97f3\u5668\u4e2d\u53ef\u7528\u7684\u6240\u6709\u53c2\u6570\u90fd\u53ef\u4ee5\u66f4\u6539\u8fc7\u6e21\u884c\u4e3a\u3002\u8fc7\u6e21\u884c\u4e3a\u662f\u6839\u636e\u5feb\u7167\u6765\u5b9a\u4e49\u7684\uff0c\u7528\u76ee\u6807\u5feb\u7167\u6765\u5b9a\u4e49\u8fc7\u6e21\u884c\u4e3a\u3002"),(0,o.kt)("p",null,"\u8981\u4e3a\u5f53\u524d\u5feb\u7167\u7684\u7279\u5b9a\u53c2\u6570\u8bbe\u7f6e\u8fc7\u6e21\u8986\u76d6\uff0c\u8bf7\u53f3\u952e\u5355\u51fb\u53c2\u6570\u540d\u79f0\uff0c\u7136\u540e\u9009\u62e9\u6240\u9700\u7684\u8fc7\u6e21\u7c7b\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerTransitionOverrides.png",alt:"AudioMixerTransitionOverrides.png"})),(0,o.kt)("h1",{id:"\u6df7\u97f3\u5668audiomixer\u68c0\u89c6\u9762\u677f"},"\u6df7\u97f3\u5668(AudioMixer)\u68c0\u89c6\u9762\u677f"),(0,o.kt)("p",null,"\u6df7\u97f3\u5668\u8d44\u6e90\u81ea\u8eab\u5305\u542b\u4e00\u4e2a\u68c0\u89c6\u9762\u677f\uff0c\u53ef\u7528\u4e8e\u6307\u5b9a\u6df7\u97f3\u5668\u7684\u603b\u4f53\u6fc0\u6d3b/\u6682\u505c\u884c\u4e3a\u3002\u6df7\u97f3\u5668\u7528\u4f5c\u8d44\u6e90\uff0c\u53ea\u8981\u4efb\u4f55\u97f3\u9891\u6e90\u5728\u6df7\u97f3\u5668\u4e2d\u64ad\u653e\uff0c\u6df7\u97f3\u5668\u57fa\u672c\u4e0a\u5c31\u4f1a\u88ab\u6fc0\u6d3b\uff0c\u800c\u4e14\u53ea\u8981\u6709\u8fd9\u6837\u4e00\u4e2a\u9a71\u52a8\u56e0\u7d20\u5411\u6df7\u97f3\u5668\u63d0\u4f9b\u97f3\u9891\u6570\u636e\uff0c\u6df7\u97f3\u5668\u5c31\u4f1a\u4e00\u76f4\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002\u7531\u4e8e\u8fd8\u53ef\u901a\u8fc7 Scene \u89c6\u56fe\u4e2d\u7684\u97f3\u9891\u9884\u89c8\u6309\u94ae\u6765\u6fc0\u6d3b\u6df7\u97f3\u5668\uff0c\u56e0\u6b64\u6fc0\u6d3b\u884c\u4e3a\u4e0d\u540c\u4e8e\u573a\u666f\u5bf9\u8c61\uff08\u6bd4\u5982 MonoBehavior\uff09\u7684\u6fc0\u6d3b\u884c\u4e3a\u3002\u6240\u4ee5\uff0c\u5373\u4f7f\u5728\u505c\u6b62\u6a21\u5f0f\u4e0b\uff0c\u6df7\u97f3\u5668\u4e5f\u53ef\u80fd\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff08\u7ee7\u800c\u8017\u7528 CPU\uff09\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u9879\u76ee\u4e2d\u5305\u542b\u5927\u91cf\u6df7\u97f3\u5668\uff0c\u800c\u8fd9\u4e9b\u6df7\u97f3\u5668\u4e0d\u5e94\u8be5\u5168\u90e8\u540c\u65f6\u8fd0\u884c\uff08\u4f8b\u5982\uff0c\u7531\u4e8e\u7279\u5b9a\u7ea7\u522b\u4f7f\u7528\u67d0\u4e9b\u4e13\u95e8\u7684\u6df7\u97f3\u5668\uff09\uff0c\u4e3a\u4e86\u907f\u514d\u5728\u8be5\u9879\u76ee\u4e2d\u8017\u5c3d CPU \u8d44\u6e90\uff0c\u6df7\u97f3\u5668\u53ef\u901a\u8fc7\u5185\u7f6e\u7684\u529f\u80fd\u5c06\u81ea\u8eab\u7f6e\u4e8e\u6682\u505c\u6a21\u5f0f\uff0c\u4f7f\u6240\u6709\u5904\u7406\u90fd\u505c\u6b62\u3002\u4e3a\u4e86\u4ee5\u81ea\u7136\u7684\u65b9\u5f0f\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u4ece\u800c\u907f\u514d\u53ef\u542c\u89c1\u7684\u4eba\u4e3a\u58f0\u97f3\uff08\u5982\u5361\u55d2\u58f0\uff09\u6216\u7f3a\u5c11\u6df7\u54cd/\u56de\u58f0\u5c3e\u97f3\uff0c\u6bcf\u4e2a\u6df7\u97f3\u5668\u5747\u4f7f\u7528\u4ee5\u4e0b\u7b56\u7565\uff1a"),(0,o.kt)("p",null,"\u53ea\u8981\u6709\u4efb\u4f55\u97f3\u9891\u6e90\u5728\u6b64\u6df7\u97f3\u5668\u4e2d\u64ad\u653e\uff0c\u6216\u8005\u6df7\u97f3\u5668\u6b63\u5728\u4ece\u5176\u4ed6\u5b50\u6df7\u97f3\u5668\u4e2d\u63a5\u6536\u97f3\u9891\u6570\u636e\uff0c\u6df7\u97f3\u5668\u5c31\u4f1a\u4fdd\u6301\u81ea\u8eab\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\u3002\u5728\u6700\u540e\u4e00\u4e2a\u58f0\u6e90\u64ad\u653e\u5b8c\u6bd5\u540e\uff0c\u6df7\u97f3\u5668\u5c06\u7b49\u5f85\u4e00\u79d2\u949f\uff0c\u7136\u540e\u7ee7\u7eed\u4f7f\u7528\u54cd\u5ea6\u6d4b\u91cf\u7ed3\u679c\u4f5c\u4e3a\u81ea\u5df1\u7684\u8f93\u51fa\uff0c\u4ee5\u786e\u5b9a\u662f\u5426\u5e94\u6682\u505c\u81ea\u8eab\u3002\u8fd9\u662f\u6709\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u6df7\u54cd\u548c\u56de\u58f0\u5c3e\u97f3\u6709\u53ef\u80fd\u975e\u5e38\u7f13\u6162\u5730\u8870\u51cf\u3002\u6df7\u97f3\u5668\u6682\u505c\u81ea\u8eab\u65f6\u6240\u4f9d\u636e\u7684\u54cd\u5ea6\u9608\u503c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u786e\u5b9a\uff1a\u4ece\u9879\u76ee\u6d4f\u89c8\u5668\u4e2d\u9009\u62e9\u6df7\u97f3\u5668\u8d44\u6e90\uff08\u5e76\u975e\u9009\u62e9\u6df7\u97f3\u5668\u7ec4\u6216\u5feb\u7167\u7b49\u5b50\u8d44\u6e90\uff09\uff0c\u7136\u540e\u5728\u663e\u793a\u7684\u6df7\u97f3\u5668\u8d44\u6e90\u68c0\u89c6\u9762\u677f\u4e0a\u542f\u7528 Auto Mixer Suspend \u5e76\u8bbe\u7f6e Threshold Volume \u53c2\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a \u201380 dB\uff0c\u6b64\u503c\u4e0e\u6df7\u97f3\u5668\u4e2d\u63a8\u5b50\u7684\u6700\u4f4e\u503c\u5339\u914d\u3002\u5b9e\u9645\u4e0a\uff0c\u901a\u5e38\u53ef\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5927\u5f97\u591a\u7684\u503c\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u5feb\u505c\u7528\u5e76\u907f\u514d\u4e2d\u9014\u51fa\u73b0 CPU \u4f7f\u7528\u7387\u6fc0\u589e\uff08\u8fd9\u53ef\u80fd\u5bfc\u81f4\u5361\u987f\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AudioMixerSuspendSettings.png",alt:"\u6df7\u97f3\u5668\u8d44\u6e90\u7684\u6682\u505c\u8bbe\u7f6e"})),(0,o.kt)("p",null,"\u6df7\u97f3\u5668\u8d44\u6e90\u7684\u6682\u505c\u8bbe\u7f6e"))}m.isMDXComponent=!0}}]);