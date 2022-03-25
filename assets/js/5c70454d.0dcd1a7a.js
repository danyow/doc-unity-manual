"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96260],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return b}});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=l.createContext({}),u=function(e){var a=l.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=u(e.components);return l.createElement(i.Provider,{value:a},e.children)},y={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,m=s["".concat(i,".").concat(b)]||s[b]||y[b]||r;return t?l.createElement(m,p(p({ref:a},c),{},{components:t})):l.createElement(m,p({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=s;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<r;u++)p[u]=t[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5948:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return y}});var l=t(87462),n=t(63366),r=(t(67294),t(3905)),p=["components"],o={id:"Playables-Graph",title:"PlayableGraph",slug:"/playables/playables-graph"},i="PlayableGraph",u={unversionedId:"animation-section/playables/Playables-Graph",id:"animation-section/playables/Playables-Graph",title:"PlayableGraph",description:"PlayableGraph \u5b9a\u4e49\u4e00\u7ec4\u7ed1\u5b9a\u5230 GameObject \u6216\u7ec4\u4ef6\u7684\u53ef\u64ad\u653e\u8f93\u51fa\u9879\u3002PlayableGraph \u8fd8\u5b9a\u4e49\u4e00\u7ec4\u53ef\u64ad\u653e\u9879\u53ca\u5176\u4f9d\u8d56\u5173\u7cfb\u3002\u56fe 1 \u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\u3002",source:"@site/docs/animation-section/playables/playables-graph.md",sourceDirName:"animation-section/playables",slug:"/playables/playables-graph",permalink:"/doc-unity-manual/docs/playables/playables-graph",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/animation-section/playables/playables-graph.md",tags:[],version:"current",frontMatter:{id:"Playables-Graph",title:"PlayableGraph",slug:"/playables/playables-graph"},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u64ad\u653e\u9879 (Playable) \u793a\u4f8b",permalink:"/doc-unity-manual/docs/playables/playables-examples"},next:{title:"ScriptPlayable \u548c PlayableBehaviour",permalink:"/doc-unity-manual/docs/playables/playables-script-playable"}},c={},y=[],s={toc:y};function b(e){var a=e.components,t=(0,n.Z)(e,p);return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"playablegraph"},"PlayableGraph"),(0,r.kt)("p",null,"PlayableGraph \u5b9a\u4e49\u4e00\u7ec4\u7ed1\u5b9a\u5230 GameObject \u6216",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/game-objects/components"},"\u7ec4\u4ef6"),"\u7684\u53ef\u64ad\u653e\u8f93\u51fa\u9879\u3002PlayableGraph \u8fd8\u5b9a\u4e49\u4e00\u7ec4\u53ef\u64ad\u653e\u9879\u53ca\u5176\u4f9d\u8d56\u5173\u7cfb\u3002\u56fe 1 \u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"PlayableGraph \u8d1f\u8d23\u7ba1\u7406\u53ef\u64ad\u653e\u9879\u53ca\u5176\u8f93\u51fa\u7684\u751f\u547d\u5468\u671f\u3002\u4f7f\u7528 PlayableGraph \u53ef\u521b\u5efa\u3001\u8fde\u63a5\u548c\u9500\u6bc1\u53ef\u64ad\u653e\u9879\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PlayablesGraph0.png",alt:"\u56fe 1\uff1aPlayableGraph \u793a\u4f8b"})),(0,r.kt)("p",null,"\u56fe 1\uff1aPlayableGraph \u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u56fe 1 \u4e2d\uff0c\u663e\u793a PlayableGraph \u65f6\uff0c\u4e3a\u4e86\u7d27\u51d1\uff0c\u4ece\u56fe\u5f62\u8282\u70b9\u7684\u540d\u79f0\u4e2d\u79fb\u9664\u4e86\u201cPlayable\u201d\u4e00\u8bcd\u3002\u4f8b\u5982\uff0c\u540d\u4e3a\u201cAnimationClipPlayable\u201d\u7684\u8282\u70b9\u663e\u793a\u4e3a\u201cAnimationClip\u201d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PlayablesGraphWarning.png",alt:"PlayablesGraphWarning.png"})),(0,r.kt)("p",null,"\u53ef\u64ad\u653e\u9879\u662f\u4e00\u79cd\u7ee7\u627f IPlayable \u63a5\u53e3\u7684 C# \u7ed3\u6784\u4f53\u3002\u5b83\u7528\u4e8e\u5b9a\u4e49\u5176\u4e0e\u5176\u4ed6\u53ef\u64ad\u653e\u9879\u7684\u5173\u7cfb\u3002\u540c\u6837\uff0c\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u662f\u7ee7\u627f IPlayableOutput \u63a5\u53e3\u7684 C# \u7ed3\u6784\u4f53\uff0c\u7528\u4e8e\u5b9a\u4e49 PlayableGraph \u7684\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u56fe 2 \u663e\u793a\u4e86\u6700\u5e38\u89c1\u7684\u6838\u5fc3\u53ef\u64ad\u653e\u9879\u7c7b\u578b\u3002\u56fe 3 \u663e\u793a\u4e86\u6838\u5fc3\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PlayablesGraph1.png",alt:"\u56fe 2\uff1a\u6838\u5fc3\u53ef\u64ad\u653e\u9879\u7c7b\u578b"})),(0,r.kt)("p",null,"\u56fe 2\uff1a\u6838\u5fc3\u53ef\u64ad\u653e\u9879\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PlayablesGraph2.png",alt:"\u56fe 3\uff1a\u6838\u5fc3\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u7c7b\u578b"})),(0,r.kt)("p",null,"\u56fe 3\uff1a\u6838\u5fc3\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u7c7b\u578b"),(0,r.kt)("p",null,"The playable core types and playable output types are implemented as C# structs to avoid allocating ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/performance-memory-overview/performance-managed-memory"},"memory for garbage collection"),"."),(0,r.kt)("p",null,"\u201cPlayable\u201d\u662f\u6240\u6709\u53ef\u64ad\u653e\u9879\u7684\u57fa\u672c\u7c7b\u578b\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u603b\u662f\u53ef\u4ee5\u9690\u5f0f\u5c06\u4e00\u4e2a\u53ef\u64ad\u653e\u9879\u8f6c\u6362\u4e3a Playable\u3002\u76f8\u53cd\u7684\u60c5\u51b5\u5e76\u4e0d\u6210\u7acb\uff0c\u5982\u679c\u5c06\u201cPlayable\u201d\u663e\u5f0f\u8f6c\u6362\u4e3a\u4e0d\u517c\u5bb9\u7c7b\u578b\uff0c\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\u5b83\u8fd8\u5b9a\u4e49\u80fd\u5728\u53ef\u64ad\u653e\u9879\u4e0a\u6267\u884c\u7684\u6240\u6709\u57fa\u672c\u65b9\u6cd5\u3002\u8981\u8bbf\u95ee\u7279\u5b9a\u4e8e\u7c7b\u578b\u7684\u65b9\u6cd5\uff0c\u60a8\u9700\u8981\u5c06\u53ef\u64ad\u653e\u9879\u8f6c\u6362\u4e3a\u76f8\u5e94\u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PlayableOutput")," \u4e5f\u662f\u5982\u6b64\uff0c\u5b83\u662f\u6240\u6709\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u7684\u57fa\u672c\u7c7b\u578b\uff0c\u5b9a\u4e49\u4e86\u57fa\u672c\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Playable")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableOutput")," \u672a\u66b4\u9732\u5927\u91cf\u65b9\u6cd5\u3002\u4f46\u201cPlayableExtensions\u201d\u548c\u201cPlayableOutputExtensions\u201d\u9759\u6001\u7c7b\u63d0\u4f9b\u4e86\u6269\u5c55\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u6240\u6709\u975e\u62bd\u8c61\u53ef\u64ad\u653e\u9879\u90fd\u6709\u4e00\u4e2a\u516c\u6709\u9759\u6001\u65b9\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()"),"\uff0c\u8be5\u65b9\u6cd5\u521b\u5efa\u76f8\u5e94\u7c7b\u578b\u7684\u53ef\u64ad\u653e\u9879\u3002\u201cCreate()\u201d\u65b9\u6cd5\u59cb\u7ec8\u5c06 PlayableGraph \u4f5c\u4e3a\u5176\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u8be5\u56fe\u62e5\u6709\u65b0\u521b\u5efa\u7684\u53ef\u64ad\u653e\u9879\u3002\u67d0\u4e9b\u7c7b\u578b\u7684\u53ef\u64ad\u653e\u9879\u53ef\u80fd\u9700\u8981\u5176\u4ed6\u53c2\u6570\u3002\u975e\u62bd\u8c61\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u8fd8\u4f1a\u66b4\u9732 ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," \u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u6709\u6548\u7684\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u5e94\u94fe\u63a5\u5230\u53ef\u64ad\u653e\u9879\u3002\u5982\u679c\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u672a\u94fe\u63a5\u5230\u53ef\u64ad\u653e\u9879\uff0c\u5219\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u8981\u5c06\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u94fe\u63a5\u5230\u53ef\u64ad\u653e\u9879\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableOutput.SetSourcePlayable()")," \u65b9\u6cd5\u3002\u5bf9\u4e8e\u8be5\u7279\u5b9a\u53ef\u64ad\u653e\u9879\u8f93\u51fa\uff0c\u94fe\u63a5\u7684\u53ef\u64ad\u653e\u9879\u5145\u5f53\u53ef\u64ad\u653e\u9879\u6811\u7684\u6839\u3002"),(0,r.kt)("p",null,"\u8981\u5c06\u4e24\u4e2a\u53ef\u64ad\u653e\u9879\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableGraph.Connect()")," \u65b9\u6cd5\u3002\u8bf7\u6ce8\u610f\uff0c\u67d0\u4e9b\u53ef\u64ad\u653e\u9879\u4e0d\u80fd\u6709\u8f93\u5165\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableGraph.Create()")," \u9759\u6001\u65b9\u6cd5\u6765\u521b\u5efa PlayableGraph\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableGraph.Play()")," \u65b9\u6cd5\u6765\u64ad\u653e PlayableGraph\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableGraph.Stop()")," \u65b9\u6cd5\u6765\u505c\u6b62\u64ad\u653e PlayableGraph\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableGraph.Evaluate()")," \u65b9\u6cd5\u6765\u8bc4\u4f30 PlayableGraph \u5728\u7279\u5b9a\u65f6\u95f4\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayableGraph.Destroy()")," \u65b9\u6cd5\u6765\u624b\u52a8\u9500\u6bc1 PlayableGraph\u3002\u6b64\u65b9\u6cd5\u4f1a\u81ea\u52a8\u9500\u6bc1 PlayableGraph \u521b\u5efa\u7684\u6240\u6709\u53ef\u64ad\u653e\u9879\u548c\u53ef\u64ad\u653e\u9879\u8f93\u51fa\u3002\u5fc5\u987b\u624b\u52a8\u8c03\u7528\u6b64\u9500\u6bc1\u65b9\u6cd5\u6765\u9500\u6bc1 PlayableGraph\uff0c\u5426\u5219 Unity \u4f1a\u53d1\u51fa\u4e00\u6761\u9519\u8bef\u6d88\u606f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2017\u201307\u201304 \u9875\u9762\u5df2\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},"Unity ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/30_search.html?q=newin20171"},"2017.1")," \u4e2d\u7684\u65b0\u529f\u80fd NewIn20171")))}b.isMDXComponent=!0}}]);