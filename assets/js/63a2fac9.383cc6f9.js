"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93782],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return d}});var i=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=i.createContext({}),p=function(t){var n=i.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},u=function(t){var n=p(t.components);return i.createElement(m.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,m=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(e),d=r,k=s["".concat(m,".").concat(d)]||s[d]||c[d]||a;return e?i.createElement(k,o(o({ref:n},u),{},{components:e})):i.createElement(k,o({ref:n},u))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,o=new Array(a);o[0]=s;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<a;p++)o[p]=e[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}s.displayName="MDXCreateElement"},10037:function(t,n,e){e.r(n),e.d(n,{assets:function(){return u},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=e(87462),r=e(63366),a=(e(67294),e(3905)),o=["components"],l={id:"animeditor-CreatingANewAnimationClip",title:"\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91",slug:"/animation-editor-guide/animeditor-creating-anew-animation-clip"},m="\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91",p={unversionedId:"animation-section/animation-clips/animation-editor-guide/animeditor-CreatingANewAnimationClip",id:"animation-section/animation-clips/animation-editor-guide/animeditor-CreatingANewAnimationClip",title:"\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91",description:"\u8981\u521b\u5efa\u65b0\u7684 \u52a8\u753b\u526a\u8f91 \uff0c\u8bf7\u5728\u573a\u666f\u4e2d\u9009\u62e9\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u7136\u540e\u6253\u5f00  Animation \u7a97\u53e3 \uff08\u9876\u90e8\u83dc\u5355\uff1a Window  &gt;  Animation  &gt;  Animation \uff09\u3002",source:"@site/docs/animation-section/animation-clips/animation-editor-guide/animeditor-creating-anew-animation-clip.md",sourceDirName:"animation-section/animation-clips/animation-editor-guide",slug:"/animation-editor-guide/animeditor-creating-anew-animation-clip",permalink:"/doc-unity-manual/docs/animation-editor-guide/animeditor-creating-anew-animation-clip",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-section/animation-clips/animation-editor-guide/animeditor-creating-anew-animation-clip.md",tags:[],version:"current",frontMatter:{id:"animeditor-CreatingANewAnimationClip",title:"\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91",slug:"/animation-editor-guide/animeditor-creating-anew-animation-clip"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u52a8\u753b\u66f2\u7ebf",permalink:"/doc-unity-manual/docs/animation-editor-guide/animeditor-animation-curves"},next:{title:"\u66f2\u7ebf\u6a21\u5f0f\u4e2d\u7684\u5173\u952e\u70b9\u64cd\u4f5c",permalink:"/doc-unity-manual/docs/animation-editor-guide/animeditor-key-manipulation-in-curves-mode"}},u={},c=[{value:"\u6dfb\u52a0\u53e6\u4e00\u52a8\u753b\u526a\u8f91",id:"\u6dfb\u52a0\u53e6\u4e00\u52a8\u753b\u526a\u8f91",level:2},{value:"\u5982\u4f55\u6574\u5408\u5230\u4e00\u8d77",id:"\u5982\u4f55\u6574\u5408\u5230\u4e00\u8d77",level:2}],s={toc:c};function d(t){var n=t.components,e=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91"},"\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u52a8\u753b\u526a\u8f91")," \uff0c\u8bf7\u5728\u573a\u666f\u4e2d\u9009\u62e9\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\uff0c\u7136\u540e\u6253\u5f00  ",(0,a.kt)("strong",{parentName:"p"},"Animation \u7a97\u53e3")," \uff08\u9876\u90e8\u83dc\u5355\uff1a ",(0,a.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Animation"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Animation")," \uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u5c1a\u672a\u5206\u914d\u4efb\u4f55\u52a8\u753b\u526a\u8f91\uff0c\u5219\u4f1a\u5728 Animation \u7a97\u53e3\u65f6\u95f4\u8f74\u533a\u57df\u7684\u4e2d\u5fc3\u4f4d\u7f6e\u663e\u793a\u201cCreate\u201d\u6309\u94ae\uff08\u8bf7\u53c2\u9605",(0,a.kt)("em",{parentName:"p"},"\u56fe 1\uff1a\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91"),"\uff09\u3002"),(0,a.kt)("p",null,"\u5355\u51fb  ",(0,a.kt)("strong",{parentName:"p"},"Create"),"  \u6309\u94ae\u3002Unity \u4f1a\u63d0\u793a\u60a8\u5c06\u65b0\u7684\u7a7a\u52a8\u753b\u526a\u8f91\u4fdd\u5b58\u5728  ",(0,a.kt)("strong",{parentName:"p"},"Assets"),"  \u6587\u4ef6\u5939\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnimationEditorNewClip.png",alt:"\u56fe 1\uff1a\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91"})),(0,a.kt)("p",null,"\u56fe 1\uff1a\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91"),(0,a.kt)("p",null,"\u4fdd\u5b58\u8fd9\u4e2a\u65b0\u7684\u7a7a\u52a8\u753b\u526a\u8f91\u65f6\uff0cUnity \u4f1a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7684 Animator Controller \u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u65b0\u526a\u8f91\u4ee5\u9ed8\u8ba4\u72b6\u6001\u6dfb\u52a0\u5230 Animator Controller \u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 Animator \u7ec4\u4ef6\u6dfb\u52a0\u5230\u8981\u5e94\u7528\u52a8\u753b\u7684\u6e38\u620f\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a Animator \u7ec4\u4ef6\u5206\u914d\u65b0\u7684 Animator Controller")),(0,a.kt)("p",null,"\u73b0\u5728\u5df2\u4e3a\u60a8\u8bbe\u7f6e\u597d\u52a8\u753b\u7cfb\u7edf\u6240\u6709\u5fc5\u9700\u7684\u5143\u7d20\uff0c\u56e0\u6b64\u63a5\u4e0b\u6765\u53ef\u4ee5\u5f00\u59cb\u52a8\u753b\u5316\u6e38\u620f\u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u53e6\u4e00\u52a8\u753b\u526a\u8f91"},"\u6dfb\u52a0\u53e6\u4e00\u52a8\u753b\u526a\u8f91"),(0,a.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u4e3a\u6e38\u620f\u5bf9\u8c61\u5206\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u753b\u526a\u8f91\uff0c\u201cCreate\u201d\u6309\u94ae\u5c06\u4e0d\u53ef\u89c1\u3002\u6b64\u60c5\u51b5\u4e0b\uff0c\u73b0\u6709\u526a\u8f91\u7684\u5176\u4e2d\u4e4b\u4e00\u5c06\u5728 Animation \u7a97\u53e3\u4e2d\u53ef\u89c1\u3002\u8981\u5728\u52a8\u753b\u526a\u8f91\u4e4b\u95f4\u5207\u6362\uff0c\u8bf7\u4f7f\u7528 Animation \u7a97\u53e3\u5de6\u4e0a\u89d2\u7684\u83dc\u5355\uff08\u5728\u64ad\u653e\u63a7\u4ef6\u4e0b\u65b9\uff09\uff08\u8bf7\u53c2\u9605",(0,a.kt)("em",{parentName:"p"},"\u56fe 2\uff1a\u6dfb\u52a0\u66f4\u591a\u52a8\u753b\u526a\u8f91"),"\uff09\u3002"),(0,a.kt)("p",null,"\u8981\u5728\u5305\u542b\u73b0\u6709\u52a8\u753b\u7684\u6e38\u620f\u5bf9\u8c61\u4e0a\u521b\u5efa\u65b0\u7684\u52a8\u753b\u526a\u8f91\uff0c\u8bf7\u4ece\u6b64\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,a.kt)("strong",{parentName:"p"},"Create New Clip")," \u3002Unity \u5c06\u518d\u6b21\u63d0\u793a\u60a8\u4fdd\u5b58\u65b0\u7684\u7a7a\u52a8\u753b\u526a\u8f91\uff0c\u7136\u540e\u60a8\u624d\u80fd\u5904\u7406\u8be5\u52a8\u753b\u526a\u8f91\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnimationEditorNewClipMenu.png",alt:"\u56fe 2\uff1a\u6dfb\u52a0\u66f4\u591a\u52a8\u753b\u526a\u8f91"})),(0,a.kt)("p",null,"\u56fe 2\uff1a\u6dfb\u52a0\u66f4\u591a\u52a8\u753b\u526a\u8f91"),(0,a.kt)("h2",{id:"\u5982\u4f55\u6574\u5408\u5230\u4e00\u8d77"},"\u5982\u4f55\u6574\u5408\u5230\u4e00\u8d77"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6b65\u9aa4\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u76f8\u5173\u7ec4\u4ef6\u548c\u5f15\u7528\u3002\u4f46\u662f\uff0c\u4e86\u89e3\u90e8\u4ef6\u7684\u8fde\u63a5\u65b9\u5f0f\u4f1a\u5f88\u6709\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e38\u620f\u5bf9\u8c61\u5fc5\u987b\u6709 ",(0,a.kt)("strong",{parentName:"li"},"Animator")," \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4e3a Animator \u7ec4\u4ef6\u5206\u914d  ",(0,a.kt)("strong",{parentName:"li"},"Animator Controller"),"  \u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4e3aAnimator Controller\u8d44\u6e90\u5206\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u753b\u526a\u8f91")),(0,a.kt)("p",null,"\u4e0b\u56fe\u4ee5 Animation \u7a97\u53e3\u4e2d\u521b\u5efa\u65b0\u52a8\u753b\u526a\u8f91\u4e3a\u8d77\u70b9\uff0c\u5c55\u793a\u4e86 Unity \u5982\u4f55\u5206\u914d\u8fd9\u4e9b\u90e8\u4ef6\uff08\u8bf7\u53c2\u9605",(0,a.kt)("em",{parentName:"p"},"\u56fe 3\uff1a\u52a8\u753b\u526a\u8f91\u56fe"),"\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnimationNewClipAutoSetup.png",alt:"\u56fe 3\uff1a\u52a8\u753b\u526a\u8f91\u56fe\u3002"})),(0,a.kt)("p",null,"\u56fe 3\uff1a\u52a8\u753b\u526a\u8f91\u56fe\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u65b0\u7684\u52a8\u753b\u526a\u8f91\u540e\uff0c\u73b0\u5728\u53ef\u4ee5\u770b\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Animation \u7a97\u53e3\uff08\u5de6\u4e0a\u89d2\uff09\u663e\u793a\u5e26\u6709\u767d\u8272\u56de\u653e\u5934\u7ebf\u7684\u65f6\u95f4\u8f74\uff0c\u8868\u660e\u5df2\u51c6\u5907\u597d\u5f55\u5236\u65b0\u7684\u5173\u952e\u5e27\u3002\u8be5\u526a\u8f91\u7684\u540d\u79f0\u663e\u793a\u5728\u526a\u8f91\u83dc\u5355\u4e2d\uff0c\u4f4d\u4e8e\u64ad\u653e\u63a7\u4ef6\u4e0b\u65b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"Inspector\uff08\u4e2d\u5fc3\u4f4d\u7f6e\uff09\u663e\u793a\u201cCube\u201d\u6e38\u620f\u5bf9\u8c61\u5177\u6709  ",(0,a.kt)("strong",{parentName:"li"},"Animator \u7ec4\u4ef6")," \uff0c\u8be5\u7ec4\u4ef6\u7684 ",(0,a.kt)("strong",{parentName:"li"},"Controller"),"  \u5b57\u6bb5\u663e\u793a\u5df2\u5206\u914d\u4e00\u4e2a\u540d\u4e3a  ",(0,a.kt)("strong",{parentName:"li"},"Cube"),"  \u7684 Animator Controller \u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},"Project \u7a97\u53e3\uff08\u53f3\u4e0b\u89d2\uff09\u663e\u793a\u5df2\u521b\u5efa\u4e24\u4e2a\u65b0\u8d44\u6e90\uff1a\u4e00\u4e2a\u540d\u4e3a  ",(0,a.kt)("strong",{parentName:"li"},"Cube"),"  \u7684 Animator Controller \u8d44\u6e90\u548c\u4e00\u4e2a\u540d\u4e3a  ",(0,a.kt)("strong",{parentName:"li"},"Cube Animation Clip"),"  \u7684\u52a8\u753b\u526a\u8f91\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},"Animator \u7a97\u53e3\uff08\u5de6\u4e0b\u89d2\uff09\u663e\u793a Animator Controller \u7684\u5185\u5bb9\uff1a\u63a7\u5236\u5668\u4e0a\u6709\u4e00\u4e2a  ",(0,a.kt)("strong",{parentName:"li"},"Cube Animation Clip")," \uff0c\u5e76\u5904\u4e8e\u9ed8\u8ba4\u72b6\u6001\uff08\u4ee5\u6a59\u8272\u6307\u793a\uff09\u3002\u6dfb\u52a0\u5230\u63a7\u5236\u5668\u7684\u540e\u7eed\u526a\u8f91\u5c06\u5448\u7070\u8272\uff0c\u8868\u793a\u5b83\u4eec\u4e0d\u662f\u9ed8\u8ba4\u72b6\u6001\uff08\u8bf7\u53c2\u9605",(0,a.kt)("em",{parentName:"li"},"\u56fe 4\uff1aProject \u7a97\u53e3\u4e2d\u7684\u65b0\u52a8\u753b\u526a\u8f91"),"\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AnimationEditorNewAnimationAdded.png",alt:"\u56fe 4\uff1aProject \u7a97\u53e3\u4e2d\u7684\u65b0\u52a8\u753b\u526a\u8f91"})),(0,a.kt)("p",null,"\u56fe 4\uff1aProject \u7a97\u53e3\u4e2d\u7684\u65b0\u52a8\u753b\u526a\u8f91"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2017\u201309\u201305 \u9875\u9762\u5df2\u4fee\u8ba2")))}d.isMDXComponent=!0}}]);