"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30165],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),a=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=a(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=a(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return r?o.createElement(m,u(u({ref:t},p),{},{components:r})):o.createElement(m,u({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var a=2;a<i;a++)u[a]=r[a];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42857:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),u=["components"],c={id:"HOWTO-UIWorldSpace",title:"\u521b\u5efa World Space UI",slug:"/uihow-tos/howto-uiworld-space"},l="\u521b\u5efa World Space UI",a={unversionedId:"uitoolkits/com-unity-ugui/uihow-tos/HOWTO-UIWorldSpace",id:"uitoolkits/com-unity-ugui/uihow-tos/HOWTO-UIWorldSpace",title:"\u521b\u5efa World Space UI",description:"\u4f7f\u7528 UI \u7cfb\u7edf\u53ef\u4ee5\u5728\u4e16\u754c\u4e2d\u8f7b\u677e\u521b\u5efa\u4f4d\u4e8e\u573a\u666f\u5185\u5176\u4ed6 2D \u6216 3D \u5bf9\u8c61\u4e4b\u95f4\u7684 UI\u3002",source:"@site/docs/uitoolkits/com-unity-ugui/uihow-tos/howto-uiworld-space.md",sourceDirName:"uitoolkits/com-unity-ugui/uihow-tos",slug:"/uihow-tos/howto-uiworld-space",permalink:"/docs/uihow-tos/howto-uiworld-space",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/com-unity-ugui/uihow-tos/howto-uiworld-space.md",tags:[],version:"current",frontMatter:{id:"HOWTO-UIWorldSpace",title:"\u521b\u5efa World Space UI",slug:"/uihow-tos/howto-uiworld-space"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u5c4f\u5e55\u8fc7\u6e21",permalink:"/docs/uihow-tos/howto-uiscreen-transition"},next:{title:"\u4ea4\u4e92\u7ec4\u4ef6",permalink:"/docs/com-unity-ugui/uiinteraction-components"}},p={},s=[{value:"\u5c06\u753b\u5e03\u8bbe\u7f6e\u4e3a World Space",id:"\u5c06\u753b\u5e03\u8bbe\u7f6e\u4e3a-world-space",level:2},{value:"\u51b3\u5b9a\u5206\u8fa8\u7387",id:"\u51b3\u5b9a\u5206\u8fa8\u7387",level:2},{value:"\u6307\u5b9a\u753b\u5e03\u5728\u4e16\u754c\u4e2d\u7684\u5927\u5c0f",id:"\u6307\u5b9a\u753b\u5e03\u5728\u4e16\u754c\u4e2d\u7684\u5927\u5c0f",level:2},{value:"\u5b9a\u4f4d\u753b\u5e03",id:"\u5b9a\u4f4d\u753b\u5e03",level:2},{value:"\u521b\u5efa UI",id:"\u521b\u5efa-ui",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521b\u5efa-world-space-ui"},"\u521b\u5efa World Space UI"),(0,i.kt)("p",null,"\u4f7f\u7528 UI \u7cfb\u7edf\u53ef\u4ee5\u5728\u4e16\u754c\u4e2d\u8f7b\u677e\u521b\u5efa\u4f4d\u4e8e\u573a\u666f\u5185\u5176\u4ed6 2D \u6216 3D \u5bf9\u8c61\u4e4b\u95f4\u7684 UI\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u573a\u666f\u4e2d\u8fd8\u6ca1\u6709 UI \u5143\u7d20\uff08\u5982\u56fe\u50cf\uff09\uff0c\u9996\u5148\u4f7f\u7528 GameObject ",">"," UI ",">"," Image \u521b\u5efa\u4e00\u4e2a UI \u5143\u7d20\u3002\u6b64\u8fc7\u7a0b\u8fd8\u5c06\u521b\u5efa\u753b\u5e03\u3002"),(0,i.kt)("h2",{id:"\u5c06\u753b\u5e03\u8bbe\u7f6e\u4e3a-world-space"},"\u5c06\u753b\u5e03\u8bbe\u7f6e\u4e3a World Space"),(0,i.kt)("p",null,"\u9009\u62e9\u753b\u5e03\u5e76\u5c06 Render Mode \u66f4\u6539\u4e3a World Space\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u753b\u5e03\u5df2\u7ecf\u5b9a\u4f4d\u5728\u4e16\u754c\u4e2d\uff0c\u5e76\u53ef\u8ba9\u6240\u6709\u6444\u50cf\u673a\u770b\u5230\uff08\u5982\u679c\u6444\u50cf\u673a\u9762\u5411\u8be5\u753b\u5e03\uff09\uff0c\u4f46\u4e0e\u573a\u666f\u4e2d\u7684\u5176\u4ed6\u5bf9\u8c61\u76f8\u6bd4\uff0c\u753b\u5e03\u53ef\u80fd\u8fc7\u4e8e\u5de8\u5927\u3002\u6211\u4eec\u7a0d\u540e\u5c06\u8ba8\u8bba\u8fd9\u4e00\u70b9\u3002"),(0,i.kt)("h2",{id:"\u51b3\u5b9a\u5206\u8fa8\u7387"},"\u51b3\u5b9a\u5206\u8fa8\u7387"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u51b3\u5b9a\u753b\u5e03\u7684\u5206\u8fa8\u7387\u5e94\u8be5\u662f\u591a\u5c11\u3002\u5982\u679c\u662f\u56fe\u50cf\uff0c\u56fe\u50cf\u7684\u50cf\u7d20\u5206\u8fa8\u7387\u5e94\u8be5\u662f\u591a\u5c11\uff1f\u6700\u5f00\u59cb\u8bbe\u7f6e\u4e3a 800x600 \u8fd9\u6837\u7684\u5206\u8fa8\u7387\u53ef\u80fd\u662f\u6bd4\u8f83\u597d\u7684\u9009\u62e9\u3002\u5e94\u5728\u753b\u5e03\u7684\u77e9\u5f62\u53d8\u6362\u7684 Width \u548c Height \u503c\u4e2d\u8f93\u5165\u5206\u8fa8\u7387\u7684\u76f8\u5e94\u503c\u3002\u540c\u65f6\uff0c\u5c06\u4f4d\u7f6e\u8bbe\u7f6e\u4e3a 0,0 \u53ef\u80fd\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002"),(0,i.kt)("h2",{id:"\u6307\u5b9a\u753b\u5e03\u5728\u4e16\u754c\u4e2d\u7684\u5927\u5c0f"},"\u6307\u5b9a\u753b\u5e03\u5728\u4e16\u754c\u4e2d\u7684\u5927\u5c0f"),(0,i.kt)("p",null,"\u73b0\u5728\u5e94\u8003\u8651\u753b\u5e03\u5728\u4e16\u754c\u4e2d\u5e94\u8be5\u6709\u591a\u5927\u3002\u53ef\u4f7f\u7528\u7f29\u653e\u5de5\u5177\u5c06\u753b\u5e03\u7f29\u5c0f\uff0c\u76f4\u81f3\u5176\u5927\u5c0f\u770b\u8d77\u6765\u5408\u9002\uff0c\u4e5f\u53ef\u91c7\u7528\u7c73\u4e3a\u5355\u4f4d\u51b3\u5b9a\u5176\u5e94\u6709\u7684\u5927\u5c0f\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u753b\u5e03\u5177\u6709\u4ee5\u7c73\u4e3a\u5355\u4f4d\u7684\u7279\u5b9a\u5bbd\u5ea6\uff0c\u5219\u53ef\u4f7f\u7528 meter","_","size / canvas","_","width \u8ba1\u7b97\u6240\u9700\u7684\u6bd4\u4f8b\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5e0c\u671b\u753b\u5e03\u5bbd\u4e3a 2 \u7c73\uff0c\u800c\u5b9e\u9645\u753b\u5e03\u5bbd\u5ea6\u4e3a 800\uff0c\u5219\u4f1a\u5f97\u5230 2 / 800 = 0.0025 \u7684\u6bd4\u4f8b\u3002\u7136\u540e\uff0c\u5c06\u753b\u5e03\u4e0a\u7684\u77e9\u5f62\u53d8\u6362\u7684 Scale \u5c5e\u6027\u5bf9\u4e8e X\u3001Y \u548c Z \u5747\u8bbe\u7f6e\u4e3a 0.0025\uff0c\u4ece\u800c\u786e\u4fdd\u753b\u5e03\u5747\u5300\u7f29\u653e\u3002"),(0,i.kt)("p",null,"\u53e6\u4e00\u79cd\u601d\u8def\u662f\u63a7\u5236\u753b\u5e03\u4e2d\u4e00\u4e2a\u50cf\u7d20\u7684\u5927\u5c0f\u3002\u5982\u679c\u753b\u5e03\u7f29\u653e\u5230 0.0025 \u500d\uff0c\u90a3\u4e48\u8fd9\u4e5f\u662f\u753b\u5e03\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u5728\u4e16\u754c\u4e2d\u7684\u5927\u5c0f\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4f4d\u753b\u5e03"},"\u5b9a\u4f4d\u753b\u5e03"),(0,i.kt)("p",null,"\u4e0e\u8bbe\u7f6e\u4e3a Screen Space \u7684\u753b\u5e03\u4e0d\u540c\uff0cWorld Space \u753b\u5e03\u53ef\u4ee5\u5728\u573a\u666f\u4e2d\u81ea\u7531\u5b9a\u4f4d\u548c\u65cb\u8f6c\u3002\u753b\u5e03\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u4f55\u5899\u58c1\u3001\u5730\u677f\u3001\u5929\u82b1\u677f\u6216\u503e\u659c\u8868\u9762\u4e0a\uff08\u5f53\u7136\u4e5f\u53ef\u4ee5\u5728\u7a7a\u4e2d\u81ea\u7531\u60ac\u6302\uff09\u3002\u53ea\u9700\u4f7f\u7528\u5de5\u5177\u680f\u4e2d\u7684\u5e38\u89c4\u79fb\u52a8\u548c\u65cb\u8f6c\u5de5\u5177\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa-ui"},"\u521b\u5efa UI"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u53ef\u4ee5\u50cf\u4f7f\u7528 Screen Space \u753b\u5e03\u4e00\u6837\u5f00\u59cb\u8bbe\u7f6e UI \u5143\u7d20\u548c\u5e03\u5c40\u3002"))}f.isMDXComponent=!0}}]);