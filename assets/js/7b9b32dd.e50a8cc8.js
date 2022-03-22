"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29289],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return d}});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=t.createContext({}),a=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=a(e.components);return t.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,u=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=a(r),d=l,m=s["".concat(p,".").concat(d)]||s[d]||g[d]||u;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function d(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var u=r.length,i=new Array(u);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var a=2;a<u;a++)i[a]=r[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},81214:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return g}});var t=r(87462),l=r(63366),u=(r(67294),r(3905)),i=["components"],o={id:"CullingGroupAPI",title:"CullingGroup API",slug:"/cameras-overview/culling-group-api"},p="CullingGroup API",a={unversionedId:"graphics/cameras-overview/CullingGroupAPI",id:"graphics/cameras-overview/CullingGroupAPI",title:"CullingGroup API",description:"CullingGroup \u63d0\u4f9b\u4e00\u79cd\u5c06\u7cfb\u7edf\u96c6\u6210\u5230 Unity \u5254\u9664\u548c LOD \u7ba1\u7ebf\u4e2d\u7684\u65b9\u6cd5\u3002\u8fd9\u53ef\u7528\u4e8e\u8bb8\u591a\u76ee\u7684\uff1b\u4f8b\u5982\uff1a",source:"@site/docs/graphics/cameras-overview/culling-group-api.md",sourceDirName:"graphics/cameras-overview",slug:"/cameras-overview/culling-group-api",permalink:"/docs/cameras-overview/culling-group-api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/cameras-overview/culling-group-api.md",tags:[],version:"current",frontMatter:{id:"CullingGroupAPI",title:"CullingGroup API",slug:"/cameras-overview/culling-group-api"},sidebar:"tutorialSidebar",previous:{title:"Camera component",permalink:"/docs/cameras-overview/class-camera"},next:{title:"Deep learning super sampling",permalink:"/docs/cameras-overview/deep-learning-super-sampling"}},c={},g=[{value:"CullingGroup \u5165\u95e8",id:"cullinggroup-\u5165\u95e8",level:2},{value:"\u901a\u8fc7 onStateChanged \u56de\u8c03\u6765\u63a5\u6536\u7ed3\u679c",id:"\u901a\u8fc7-onstatechanged-\u56de\u8c03\u6765\u63a5\u6536\u7ed3\u679c",level:3},{value:"\u901a\u8fc7 CullingGroup \u67e5\u8be2 API \u6765\u63a5\u6536\u7ed3\u679c",id:"\u901a\u8fc7-cullinggroup-\u67e5\u8be2-api-\u6765\u63a5\u6536\u7ed3\u679c",level:3},{value:"CullingGroup API \u6700\u4f73\u5b9e\u8df5",id:"cullinggroup-api-\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5229\u7528\u53ef\u89c1\u6027",id:"\u5229\u7528\u53ef\u89c1\u6027",level:3},{value:"\u5229\u7528\u8ddd\u79bb",id:"\u5229\u7528\u8ddd\u79bb",level:3},{value:"\u6027\u80fd\u548c\u8bbe\u8ba1",id:"\u6027\u80fd\u548c\u8bbe\u8ba1",level:3}],s={toc:g};function d(e){var n=e.components,r=(0,l.Z)(e,i);return(0,u.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"cullinggroup-api"},"CullingGroup API"),(0,u.kt)("p",null,"CullingGroup \u63d0\u4f9b\u4e00\u79cd\u5c06\u7cfb\u7edf\u96c6\u6210\u5230 Unity \u5254\u9664\u548c LOD \u7ba1\u7ebf\u4e2d\u7684\u65b9\u6cd5\u3002\u8fd9\u53ef\u7528\u4e8e\u8bb8\u591a\u76ee\u7684\uff1b\u4f8b\u5982\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u6a21\u62df\u4e00\u7fa4\u4eba\uff0c\u540c\u65f6\u53ea\u4e3a\u73b0\u5728\u5b9e\u9645\u53ef\u89c1\u7684\u89d2\u8272\u63d0\u4f9b\u5b8c\u6574\u7684\u6e38\u620f\u5bf9\u8c61"),(0,u.kt)("li",{parentName:"ul"},"\u6784\u5efa\u7531 Graphics.DrawProcedural \u9a71\u52a8\u7684 GPU \u7c92\u5b50\u7cfb\u7edf\uff0c\u4f46\u662f\u8df3\u8fc7\u5bf9\u5899\u80cc\u540e\u7684\u7c92\u5b50\u7cfb\u7edf\u7684\u6e32\u67d3"),(0,u.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a\u4e0d\u5728\u6444\u50cf\u673a\u89c6\u91ce\u8303\u56f4\u5185\u7684\u751f\u6210\u70b9\uff0c\u4ee5\u4fbf\u5728\u751f\u6210\u654c\u4eba\u65f6\u4e0d\u8ba9\u73a9\u5bb6\u770b\u5230\u4ed6\u4eec\u201c\u5f39\u5165\u201d\u89c6\u56fe"),(0,u.kt)("li",{parentName:"ul"},"\u5c06\u89d2\u8272\u4ece\u8fd1\u5904\u7684\u5168\u8d28\u91cf\u52a8\u753b\u548c AI \u8ba1\u7b97\u5207\u6362\u5230\u8fdc\u5904\u66f4\u4f4e\u8d28\u91cf\u3001\u66f4\u4f4e\u6210\u672c\u7684\u884c\u4e3a"),(0,u.kt)("li",{parentName:"ul"},"\u5728\u573a\u666f\u4e2d\u8bbe\u7f6e 10,000 \u4e2a\u6807\u8bb0\u70b9\uff0c\u5e76\u5728\u73a9\u5bb6\u8fdb\u5165\u5176\u4e2d\u4efb\u4f55\u6807\u8bb0\u70b9\u7684 1m \u8303\u56f4\u5185\u65f6\u6709\u6548\u53d1\u73b0\u8fd9\u4e00\u72b6\u6001")),(0,u.kt)("p",null,"API \u7684\u5de5\u4f5c\u539f\u7406\u662f\u8ba9\u60a8\u63d0\u4f9b\u4e00\u7cfb\u5217\u5305\u56f4\u7403\u4f53\u3002\u7136\u540e\u8ba1\u7b97\u8fd9\u4e9b\u7403\u4f53\u76f8\u5bf9\u4e8e\u7279\u5b9a\u6444\u50cf\u673a\u7684\u53ef\u89c1\u6027\uff0c\u4ee5\u53ca\u53ef\u89c6\u4e3a LOD \u7ea7\u522b\u53f7\u7684\u201c\u8ddd\u79bb\u5e26\u201d\u503c\u3002"),(0,u.kt)("h2",{id:"cullinggroup-\u5165\u95e8"},"CullingGroup \u5165\u95e8"),(0,u.kt)("p",null,"\u6ca1\u6709\u7528\u4e8e\u5904\u7406 CullingGroup \u7684\u7ec4\u4ef6\u6216\u53ef\u89c6\u5316\u5de5\u5177\uff1b\u53ea\u80fd\u901a\u8fc7\u811a\u672c\u8bbf\u95ee\u5b83\u4eec\u3002"),(0,u.kt)("p",null,"\u53ef\u4f7f\u7528\u201cnew\u201d\u8fd0\u7b97\u7b26\u6765\u6784\u9020 CullingGroup\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"CullingGroup group = new CullingGroup();\n")),(0,u.kt)("p",null,"\u8981\u8ba9 CullingGroup \u6267\u884c\u53ef\u89c1\u6027\u8ba1\u7b97\uff0c\u8bf7\u6307\u5b9a\u5176\u5e94\u4f7f\u7528\u7684\u6444\u50cf\u673a\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"group.targetCamera = Camera.main;\n")),(0,u.kt)("p",null,"\u4f7f\u7528\u7403\u4f53\u7684\u4f4d\u7f6e\u548c\u534a\u5f84\u6765\u521b\u5efa\u5e76\u586b\u5145 BoundingSphere \u7ed3\u6784\u6570\u7ec4\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u9645\u4f4d\u4e8e\u6570\u7ec4\u4e2d\u7684\u7403\u4f53\u6570\u4e00\u8d77\u4f20\u9012\u7ed9 SetBoundingSpheres\u3002\u7403\u4f53\u7684\u6570\u91cf\u4e0d\u9700\u8981\u4e0e\u6570\u7ec4\u7684\u957f\u5ea6\u76f8\u540c\u3002Unity \u5efa\u8bae\u521b\u5efa\u4e00\u4e2a\u8db3\u591f\u5927\u7684\u6570\u7ec4\u6765\u4fdd\u5b58\u60a8\u4e00\u6b21\u62e5\u6709\u7684\u6700\u591a\u7403\u4f53\uff08\u5373\u4f7f\u60a8\u6700\u521d\u5728\u6570\u7ec4\u4e2d\u5b9e\u9645\u62e5\u6709\u7684\u7403\u4f53\u6570\u91cf\u975e\u5e38\u5c11\uff09\u3002\u5982\u679c\u4f7f\u7528\u8f83\u5927\u7684\u6570\u7ec4\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u6216\u5220\u9664\u7403\u4f53\uff0c\u800c\u65e0\u9700\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u8c03\u6574\u6570\u7ec4\u5927\u5c0f\u8fd9\u6837\u8ba1\u7b97\u6210\u672c\u9ad8\u6602\u7684\u8fc7\u7a0b\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"BoundingSphere[] spheres = new BoundingSphere[1000];\nspheres[0] = new BoundingSphere(Vector3.zero, 1f);\ngroup.SetBoundingSpheres(spheres);\ngroup.SetBoundingSphereCount(1);\n")),(0,u.kt)("p",null,"\u6b64\u65f6\uff0cCullingGroup \u5c06\u5f00\u59cb\u8ba1\u7b97\u6bcf\u5e27\u5355\u4e2a\u7403\u4f53\u7684\u53ef\u89c1\u6027\u3002"),(0,u.kt)("p",null,"\u8981\u6e05\u7406 CullingGroup \u5e76\u91ca\u653e\u5b83\u4f7f\u7528\u7684\u6240\u6709\u5185\u5b58\uff0c\u8bf7\u901a\u8fc7\u6807\u51c6\u7684 .NET IDisposable \u673a\u5236\u6765\u5904\u7f6e CullingGroup\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"group.Dispose();\ngroup = null;\n")),(0,u.kt)("h3",{id:"\u901a\u8fc7-onstatechanged-\u56de\u8c03\u6765\u63a5\u6536\u7ed3\u679c"},"\u901a\u8fc7 onStateChanged \u56de\u8c03\u6765\u63a5\u6536\u7ed3\u679c"),(0,u.kt)("p",null,"\u4e3a\u54cd\u5e94\u7403\u4f53\u800c\u66f4\u6539\u5176\u53ef\u89c1\u6027\u6216\u8ddd\u79bb\u72b6\u6001\u7684\u6700\u6709\u6548\u65b9\u6cd5\u662f\u4f7f\u7528 onStateChanged \u56de\u8c03\u5b57\u6bb5\u3002\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u4ee5 CullingGroupEvent \u7ed3\u6784\u4f5c\u4e3a\u53c2\u6570\uff1b\u5bf9\u4e8e\u5df2\u6539\u53d8\u72b6\u6001\u7684\u6bcf\u4e2a\u7403\u4f53\uff0c\u5c06\u5728\u5254\u9664\u5b8c\u6210\u540e\u8c03\u7528\u6b64\u51fd\u6570\u3002CullingGroupEvent \u7ed3\u6784\u7684\u6210\u5458\u4f1a\u544a\u8bc9\u60a8\u7403\u4f53\u7684\u5148\u524d\u72b6\u6001\u548c\u65b0\u72b6\u6001\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'group.onStateChanged = StateChangedMethod;\n\nprivate void StateChangedMethod(CullingGroupEvent evt)\n{\n    if(evt.hasBecomeVisible)\n        Debug.LogFormat("Sphere {0} has become visible!", evt.index);\n    if(evt.hasBecomeInvisible)\n        Debug.LogFormat("Sphere {0} has become invisible!", evt.index);\n}\n')),(0,u.kt)("h3",{id:"\u901a\u8fc7-cullinggroup-\u67e5\u8be2-api-\u6765\u63a5\u6536\u7ed3\u679c"},"\u901a\u8fc7 CullingGroup \u67e5\u8be2 API \u6765\u63a5\u6536\u7ed3\u679c"),(0,u.kt)("p",null,"\u9664\u4e86 onStateChanged \u59d4\u6258\u4e4b\u5916\uff0cCullingGroup \u8fd8\u63d0\u4f9b\u4e00\u4e2a API\uff0c\u7528\u4e8e\u68c0\u7d22\u5305\u56f4\u7403\u4f53\u6570\u7ec4\u4e2d\u4efb\u4f55\u7403\u4f53\u7684\u6700\u65b0\u53ef\u89c1\u6027\u548c\u8ddd\u79bb\u7ed3\u679c\u3002\u8981\u68c0\u67e5\u5355\u4e2a\u7403\u4f53\u7684\u72b6\u6001\uff0c\u8bf7\u4f7f\u7528 IsVisible \u548c GetDistance \u65b9\u6cd5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"bool sphereIsVisible = group.IsVisible(0);\nint sphereDistanceBand = group.GetDistance(0);\n")),(0,u.kt)("p",null,"\u8981\u68c0\u67e5\u591a\u4e2a\u7403\u4f53\u7684\u72b6\u6001\uff0c\u53ef\u4f7f\u7528 QueryIndices \u65b9\u6cd5\u3002\u6b64\u65b9\u6cd5\u5c06\u626b\u63cf\u8fde\u7eed\u8303\u56f4\u7684\u7403\u4f53\u4ee5\u67e5\u627e\u4e0e\u6307\u5b9a\u53ef\u89c1\u6027\u6216\u8ddd\u79bb\u72b6\u6001\u76f8\u5339\u914d\u7684\u7403\u4f53\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"// \u5206\u914d\u4e00\u4e2a\u6570\u7ec4\u6765\u4fdd\u5b58\u751f\u6210\u7684\u7403\u4f53\u7d22\u5f15 - \u6570\u7ec4\u7684\u5927\u5c0f\u51b3\u5b9a\u6bcf\u6b21\u8c03\u7528\u68c0\u67e5\u7684\u6700\u5927\u7403\u4f53\u6570\nint[] resultIndices = new int[1000];\n// \u8fd8\u8981\u8bbe\u7f6e\u4e00\u4e2a int \u6765\u5b58\u50a8\u5df2\u653e\u5165\u6570\u7ec4\u7684\u5b9e\u9645\u7ed3\u679c\u6570\nint numResults = 0;\n\n// \u67e5\u627e\u6240\u6709\u53ef\u89c1\u7684\u7403\u4f53\nnumResults = group.QueryIndices(true, resultIndices, 0);\n// \u67e5\u627e\u4f4d\u4e8e\u8ddd\u79bb\u5e26 1 \u4e2d\u7684\u6240\u6709\u7403\u4f53\nnumResults = group.QueryIndices(1, resultIndices, 0);\n// \u67e5\u627e\u9690\u85cf\u5728\u8ddd\u79bb\u5e26 2 \u4e2d\u7684\u6240\u6709\u7403\u4f53\uff0c\u8df3\u8fc7\u524d 100 \u4e2a\u7403\u4f53\nnumResults = group.QueryIndices(false, 2, resultIndices, 100);\n")),(0,u.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u4ec5\u5728 CullingGroup \u4f7f\u7528\u7684\u6444\u50cf\u673a\u5b9e\u9645\u6267\u884c\u5254\u9664\u65f6\uff0c\u624d\u66f4\u65b0\u67e5\u8be2 API \u68c0\u7d22\u7684\u4fe1\u606f\u3002"),(0,u.kt)("h2",{id:"cullinggroup-api-\u6700\u4f73\u5b9e\u8df5"},"CullingGroup API \u6700\u4f73\u5b9e\u8df5"),(0,u.kt)("p",null,"\u5728\u8003\u8651\u5982\u4f55\u5c06 CullingGroup \u5e94\u7528\u4e8e\u9879\u76ee\u65f6\uff0c\u8bf7\u8003\u8651 CullingGroup \u8bbe\u8ba1\u7684\u4ee5\u4e0b\u65b9\u9762\u3002"),(0,u.kt)("h3",{id:"\u5229\u7528\u53ef\u89c1\u6027"},"\u5229\u7528\u53ef\u89c1\u6027"),(0,u.kt)("p",null,"CullingGroup \u4e3a\u5176\u8ba1\u7b97\u53ef\u89c1\u6027\u7684\u6240\u6709\u4f53\u79ef\u90fd\u7531\u5305\u56f4\u7403\u4f53\u5b9a\u4e49\uff1b\u5b9e\u9645\u4e0a\uff0c\u7531\u4f4d\u7f6e\uff08\u7403\u4f53\u4e2d\u5fc3\uff09\u548c\u534a\u5f84\u503c\u5b9a\u4e49\u3002\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u4e0d\u652f\u6301\u5176\u4ed6\u5305\u56f4\u5f62\u72b6\u3002\u5728\u5b9e\u8df5\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u5c06\u5b9a\u4e49\u4e00\u4e2a\u7403\u4f53\u6765\u5b8c\u5168\u5305\u56f4\u5e0c\u671b\u5254\u9664\u7684\u5bf9\u8c61\u3002\u5982\u679c\u9700\u8981\u66f4\u7d27\u5bc6\u62df\u5408\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u591a\u4e2a\u7403\u4f53\u6765\u8986\u76d6\u5bf9\u8c61\u7684\u4e0d\u540c\u90e8\u5206\uff0c\u5e76\u6839\u636e\u6240\u6709\u7403\u4f53\u7684\u53ef\u89c1\u6027\u72b6\u6001\u505a\u51fa\u51b3\u5b9a\u3002"),(0,u.kt)("p",null,"\u4e3a\u4e86\u8bc4\u4f30\u53ef\u89c1\u6027\uff0cCullingGroup \u9700\u8981\u77e5\u9053\u5e94\u8be5\u4ece\u54ea\u4e2a\u6444\u50cf\u673a\u53ef\u89c1\u6027\u5f00\u59cb\u8ba1\u7b97\u3002\u76ee\u524d\uff0c\u5355\u4e2a CullingGroup \u4ec5\u652f\u6301\u5355\u4e2a\u6444\u50cf\u673a\u3002\u5982\u679c\u9700\u8981\u8bc4\u4f30\u591a\u4e2a\u6444\u50cf\u673a\u7684\u53ef\u89c1\u6027\uff0c\u5e94\u4e3a\u6bcf\u4e2a\u6444\u50cf\u673a\u4f7f\u7528\u4e00\u4e2a CullingGroup \u5e76\u5408\u5e76\u7ed3\u679c\u3002"),(0,u.kt)("p",null,"CullingGroup \u5c06\u4ec5\u57fa\u4e8e\u89c6\u9525\u4f53\u5254\u9664\u548c\u9759\u6001\u906e\u6321\u5254\u9664\u6765\u8ba1\u7b97\u53ef\u89c1\u6027\u3002\u5b83\u4e0d\u4f1a\u5c06\u52a8\u6001\u5bf9\u8c61\u89c6\u4e3a\u6f5c\u5728\u906e\u6321\u7269\u3002"),(0,u.kt)("h3",{id:"\u5229\u7528\u8ddd\u79bb"},"\u5229\u7528\u8ddd\u79bb"),(0,u.kt)("p",null,"CullingGroup \u80fd\u591f\u8ba1\u7b97\u67d0\u4e2a\u53c2\u8003\u70b9\uff08\u4f8b\u5982\uff0c\u6444\u50cf\u673a\u6216\u73a9\u5bb6\u7684\u4f4d\u7f6e\uff09\u4e0e\u6bcf\u4e2a\u7403\u4f53\u4e0a\u6700\u8fd1\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002\u6b64\u8ddd\u79bb\u503c\u4e0d\u4f1a\u76f4\u63a5\u63d0\u4f9b\u7ed9\u60a8\uff0c\u800c\u662f\u4f7f\u7528\u60a8\u63d0\u4f9b\u7684\u4e00\u7ec4\u9608\u503c\u6765\u91cf\u5316\uff0c\u4ee5\u4fbf\u8ba1\u7b97\u79bb\u6563\u7684\u201c\u8ddd\u79bb\u5e26\u201d\u6574\u6570\u7ed3\u679c\u3002\u76ee\u7684\u662f\u5c06\u8fd9\u4e9b\u8ddd\u79bb\u5e26\u89e3\u8bfb\u4e3a\u201c\u8fd1\u8ddd\u79bb\u201d\u3001\u201c\u4e2d\u8ddd\u79bb\u201d\u3001\u201c\u8fdc\u8ddd\u79bb\u201d\u7b49\u3002"),(0,u.kt)("p",null,"\u4e00\u4e2a\u5bf9\u8c61\u4ece\u4e00\u4e2a\u533a\u57df\u79fb\u5230\u53e6\u4e00\u4e2a\u533a\u57df\u65f6\uff0cCullingGroup \u5c06\u63d0\u4f9b\u56de\u8c03\uff0c\u8ba9\u60a8\u6709\u673a\u4f1a\u8fdb\u884c\u67d0\u4e9b\u64cd\u4f5c\uff0c\u4f8b\u5982\u5c06\u8be5\u5bf9\u8c61\u7684\u884c\u4e3a\u66f4\u6539\u4e3a CPU \u4f7f\u7528\u5f3a\u5ea6\u8f83\u4f4e\u7684\u64cd\u4f5c\u3002"),(0,u.kt)("p",null,"\u8d85\u51fa\u6700\u540e\u4e00\u4e2a\u8ddd\u79bb\u7684\u4efb\u4f55\u7403\u4f53\u90fd\u5c06\u88ab\u89c6\u4e3a\u4e0d\u53ef\u89c1\uff0c\u8fd9\u4f7f\u60a8\u53ef\u4ee5\u8f7b\u677e\u6784\u5efa\u4e00\u4e2a\u5254\u9664\u5b9e\u73b0\u6765\u5b8c\u5168\u505c\u7528\u975e\u5e38\u8fdc\u7684\u5bf9\u8c61\u3002\u5982\u679c\u4e0d\u60f3\u8981\u6b64\u884c\u4e3a\uff0c\u53ea\u9700\u5c06\u6700\u7ec8\u9608\u503c\u8bbe\u7f6e\u4e3a\u65e0\u9650\u8fdc\u7684\u8ddd\u79bb\u3002"),(0,u.kt)("p",null,"\u6bcf\u4e2a CullingGroup \u4ec5\u652f\u6301\u4e00\u4e2a\u53c2\u8003\u70b9\u3002"),(0,u.kt)("h3",{id:"\u6027\u80fd\u548c\u8bbe\u8ba1"},"\u6027\u80fd\u548c\u8bbe\u8ba1"),(0,u.kt)("p",null,"CullingGroup API \u4e0d\u5141\u8bb8\u60a8\u5bf9\u573a\u666f\u8fdb\u884c\u66f4\u6539\u540e\u7acb\u5373\u8bf7\u6c42\u5305\u56f4\u7403\u4f53\u7684\u65b0\u53ef\u89c1\u6027\u72b6\u6001\u3002\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0cCullingGroup \u4ec5\u5728\u6267\u884c\u6574\u4e2a\u6444\u50cf\u673a\u5254\u9664\u671f\u95f4\u8ba1\u7b97\u65b0\u7684\u53ef\u89c1\u6027\u4fe1\u606f\uff1b\u6b64\u65f6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u56de\u8c03\u6216 CullingGroup \u67e5\u8be2 API \u6765\u83b7\u53d6\u4fe1\u606f\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u5e94\u8be5\u4ee5\u5f02\u6b65\u65b9\u5f0f\u5904\u7406 CullingGroup\u3002"),(0,u.kt)("p",null,"\u63d0\u4f9b\u7ed9 CullingGroup \u7684\u5305\u56f4\u7403\u4f53\u6570\u7ec4\u5c06\u7531 CullingGroup \u5f15\u7528\uff0c\u800c\u4e0d\u662f\u590d\u5236\u3002\u8fd9\u610f\u5473\u7740\u60a8\u5e94\u8be5\u4fdd\u7559\u5bf9\u4f20\u9012\u7ed9 SetBoundingSpheres \u7684\u6570\u7ec4\u7684\u5f15\u7528\uff0c\u5e76\u53ef\u4fee\u6539\u6b64\u6570\u7ec4\u7684\u5185\u5bb9\uff0c\u800c\u65e0\u9700\u518d\u6b21\u8c03\u7528 SetBoundingSpheres\u3002\u5982\u679c\u9700\u8981\u591a\u4e2a CullingGroup \u6765\u8ba1\u7b97\u540c\u4e00\u7ec4\u7403\u4f53\u7684\u53ef\u89c1\u6027\u548c\u8ddd\u79bb\uff08\u4f8b\u5982\uff0c\u5bf9\u4e8e\u591a\u4e2a\u6444\u50cf\u673a\uff09\uff0c\u90a3\u4e48\u8ba9\u6240\u6709 CullingGroup \u5171\u4eab\u76f8\u540c\u7684\u5305\u56f4\u7403\u4f53\u6570\u7ec4\u5b9e\u4f8b\u4f1a\u5f88\u9ad8\u6548\u3002"))}d.isMDXComponent=!0}}]);