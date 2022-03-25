"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67792],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={id:"Tilemap-Isometric-RenderModes",title:"Tilemap Renderer \u6a21\u5f0f",slug:"/tilemap-isometric/tilemap-isometric-render-modes"},l="Tilemap Renderer \u6a21\u5f0f",s={unversionedId:"unity2d/class-tilemap/tilemap-isometric/Tilemap-Isometric-RenderModes",id:"unity2d/class-tilemap/tilemap-isometric/Tilemap-Isometric-RenderModes",title:"Tilemap Renderer \u6a21\u5f0f",description:"Tilemap Renderer  \u7ec4\u4ef6\u7528\u4e8e\u6e32\u67d3\u573a\u666f\u4e2d\u7684\u74e6\u7247\u5730\u56fe (Tilemap)\u3002Unity \u4f1a\u521b\u5efa\u9ed8\u8ba4\u9644\u52a0\u4e86 Tilemap Renderer \u7ec4\u4ef6\u7684\u74e6\u7247\u5730\u56fe\u3002Tilemap Renderer \u53ef\u4ee5\uff1a",source:"@site/docs/unity2d/class-tilemap/tilemap-isometric/tilemap-isometric-render-modes.md",sourceDirName:"unity2d/class-tilemap/tilemap-isometric",slug:"/tilemap-isometric/tilemap-isometric-render-modes",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-render-modes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/class-tilemap/tilemap-isometric/tilemap-isometric-render-modes.md",tags:[],version:"current",frontMatter:{id:"Tilemap-Isometric-RenderModes",title:"Tilemap Renderer \u6a21\u5f0f",slug:"/tilemap-isometric/tilemap-isometric-render-modes"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u7528\u4e8e\u7b49\u8ddd\u74e6\u7247\u5730\u56fe\u7684\u74e6\u7247\u9762\u677f",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-palette"},next:{title:"\u53ef\u7f16\u7a0b\u753b\u7b14",permalink:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-scriptable-brushes"}},m={},d=[{value:"\u5728 Chunk Mode \u6a21\u5f0f\u4e0b\u8fdb\u884c\u6279\u91cf\u6e32\u67d3",id:"\u5728-chunk-mode-\u6a21\u5f0f\u4e0b\u8fdb\u884c\u6279\u91cf\u6e32\u67d3",level:2},{value:"\u4f7f\u7528\u7cbe\u7075\u56fe\u96c6\u8fdb\u884c\u6392\u5e8f\uff08\u4ec5\u9650 Chunk Mode \u6a21\u5f0f\uff09",id:"\u4f7f\u7528\u7cbe\u7075\u56fe\u96c6\u8fdb\u884c\u6392\u5e8f\u4ec5\u9650-chunk-mode-\u6a21\u5f0f",level:3},{value:"\u5728 Individual Mode \u6a21\u5f0f\u4e0b\u8fdb\u884c\u5355\u72ec\u6e32\u67d3",id:"\u5728-individual-mode-\u6a21\u5f0f\u4e0b\u8fdb\u884c\u5355\u72ec\u6e32\u67d3",level:3},{value:"Individual Mode \u6a21\u5f0f\u4e0b\u7684 Z as Y Tilemap \u74e6\u7247\u5730\u56fe\u7684 Custom Axis \u6392\u5e8f\u6a21\u5f0f",id:"individual-mode-\u6a21\u5f0f\u4e0b\u7684-z-as-y-tilemap-\u74e6\u7247\u5730\u56fe\u7684-custom-axis-\u6392\u5e8f\u6a21\u5f0f",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tilemap-renderer-\u6a21\u5f0f"},"Tilemap Renderer \u6a21\u5f0f"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Tilemap Renderer"),"  \u7ec4\u4ef6\u7528\u4e8e\u6e32\u67d3\u573a\u666f\u4e2d\u7684",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-tilemap"},"\u74e6\u7247\u5730\u56fe (Tilemap)"),"\u3002Unity \u4f1a\u521b\u5efa\u9ed8\u8ba4\u9644\u52a0\u4e86 Tilemap Renderer \u7ec4\u4ef6\u7684\u74e6\u7247\u5730\u56fe\u3002Tilemap Renderer \u53ef\u4ee5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%9C%A8-chunk-mode-%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BF%9B%E8%A1%8C%E6%89%B9%E9%87%8F%E6%B8%B2%E6%9F%93"},"\u5728  ",(0,i.kt)("strong",{parentName:"a"},"Chunk Mode"),"  \u6a21\u5f0f\u4e0b\u8fdb\u884c\u6279\u91cf\u6e32\u67d3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%9C%A8-individual-mode-%E6%A8%A1%E5%BC%8F%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%8D%95%E7%8B%AC%E6%B8%B2%E6%9F%93"},"\u5728  ",(0,i.kt)("strong",{parentName:"a"},"Individual Mode"),"  \u6a21\u5f0f\u4e0b\u8fdb\u884c\u5355\u72ec\u6e32\u67d3"))),(0,i.kt)("p",null,"\u6e32\u67d3\u6a21\u5f0f (Render Mode) \u4f1a\u5f71\u54cd\u74e6\u7247\u5730\u56fe\u7cbe\u7075\u6e32\u67d3\u65f6\u7684\u6392\u5e8f\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u5728-chunk-mode-\u6a21\u5f0f\u4e0b\u8fdb\u884c\u6279\u91cf\u6e32\u67d3"},"\u5728 Chunk Mode \u6a21\u5f0f\u4e0b\u8fdb\u884c\u6279\u91cf\u6e32\u67d3"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Chunk Mode"),"  \u662f Tilemap Renderer \u7684\u9ed8\u8ba4\u6e32\u67d3\u6a21\u5f0f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_9.png",alt:"2D_IsoTilemap_9.png"})),(0,i.kt)("p",null,"\u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Chunk Mode"),"  \u65f6\uff0cTilemap Renderer \u4f1a\u6279\u91cf\u5904\u7406\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u7cbe\u7075\uff0c\u5e76\u5c06\u5b83\u4eec\u4e00\u8d77\u6e32\u67d3\u3002\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/unity2d/2dsorting"},"2D \u900f\u660e\u961f\u5217"),"\u4e2d\u6392\u5e8f\u65f6\uff0c\u8fd9\u4e9b\u7cbe\u7075\u88ab\u89c6\u4e3a\u5355\u4e2a\u6392\u5e8f\u9879\u3002\u6b64\u6a21\u5f0f\u901a\u8fc7\u51cf\u5c11\u7ed8\u5236\u8c03\u7528\u7684\u6570\u91cf\u6765\u63d0\u9ad8\u6574\u4f53\u6027\u80fd\uff0c\u4f46\u662f\u5176\u4ed6\u6e32\u67d3\u5668\u65e0\u6cd5\u5728\u74e6\u7247\u5730\u56fe\u7684\u4efb\u4f55\u90e8\u5206\u4e4b\u95f4\u8fdb\u884c\u6e32\u67d3\uff0c\u56e0\u6b64\u4f1a\u963b\u6b62\u5176\u4ed6\u6e32\u67d3\u7684\u7cbe\u7075\u4e0e\u74e6\u7247\u5730\u56fe\u7cbe\u7075\u4e4b\u95f4\u4ea4\u7ec7\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u7cbe\u7075\u56fe\u96c6\u8fdb\u884c\u6392\u5e8f\u4ec5\u9650-chunk-mode-\u6a21\u5f0f"},"\u4f7f\u7528\u7cbe\u7075\u56fe\u96c6\u8fdb\u884c\u6392\u5e8f\uff08\u4ec5\u9650 Chunk Mode \u6a21\u5f0f\uff09"),(0,i.kt)("p",null,"\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Chunk Mode"),"  \u6a21\u5f0f\u4e0b\uff0cTilemap Renderer \u65e0\u6cd5\u5355\u72ec\u4ece\u591a\u4e2a\u7eb9\u7406\u5bf9\u74e6\u7247\u8fdb\u884c\u6392\u5e8f\uff0c\u4e5f\u4e0d\u80fd\u4e00\u81f4\u5730\u6e32\u67d3\u74e6\u7247\u7cbe\u7075\uff08\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"#%E4%B8%8B%E9%9D%A2%E7%9A%84%E7%A4%BA%E4%BE%8B"},"\u4e0b\u9762\u7684\u793a\u4f8b"),"\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_10.png",alt:"2D_IsoTilemap_10.png"})),(0,i.kt)("p",null,"\u5c06\u6784\u6210\u74e6\u7247\u5730\u56fe\u7684\u6240\u6709\u7cbe\u7075\u4e2a\u4f53\u6253\u5305\u5230\u5355\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/SpriteAtlasV2.html"},"\u7cbe\u7075\u56fe\u96c6"),"\u4e2d\u53ef\u89e3\u51b3\u6b64\u95ee\u9898\u3002\u4e3a\u6b64\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("p",null,"1.\u4ece Assets \u83dc\u5355\u521b\u5efa ",(0,i.kt)("strong",{parentName:"p"},"\u7cbe\u7075\u56fe\u96c6")," \uff08\u9009\u62e9\uff1a ",(0,i.kt)("strong",{parentName:"p"},"Atlas ",">"," Create ",">"," Sprite Atlas")," \uff09\u3002 2.\u5411\u7cbe\u7075\u56fe\u96c6\u6dfb\u52a0\u7cbe\u7075\uff0c\u65b9\u6cd5\u662f\u5728\u7cbe\u7075\u56fe\u96c6\u7684 Inspector \u7a97\u53e3\u4e2d\u5c06\u7cbe\u7075\u62d6\u5230  ",(0,i.kt)("strong",{parentName:"p"},"Objects for Packing"),"  \u5217\u8868\u4e2d\u3002 ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_11.png",alt:"2D_IsoTilemap_11.png"})),(0,i.kt)("p",null,"3.\u5355\u51fb  ",(0,i.kt)("strong",{parentName:"p"},"Pack Preview")," \u3002Unity \u5728\u64ad\u653e\u6a21\u5f0f\u4e0b\u5c06\u7cbe\u7075\u6253\u5305\u5230\u7cbe\u7075\u56fe\u96c6\u4e2d\uff0c\u5e76\u6b63\u786e\u6392\u5e8f\u548c\u6e32\u67d3\u7cbe\u7075\u3002\u4ec5\u64ad\u653e\u6a21\u5f0f\u4e0b\u5728 Editor \u4e2d\u53ef\u89c1\u3002 ",(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_12.png",alt:"\u6807\u7b7e"})),(0,i.kt)("h3",{id:"\u5728-individual-mode-\u6a21\u5f0f\u4e0b\u8fdb\u884c\u5355\u72ec\u6e32\u67d3"},"\u5728 Individual Mode \u6a21\u5f0f\u4e0b\u8fdb\u884c\u5355\u72ec\u6e32\u67d3"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_13.png",alt:"2D_IsoTilemap_13.png"})),(0,i.kt)("p",null,"\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Individual Mode"),"  \u6a21\u5f0f\u4e0b\uff0cTilemap Renderer \u4f1a\u5bf9\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u7cbe\u7075\u8fdb\u884c\u6392\u5e8f\u548c\u6e32\u67d3\uff0c\u540c\u65f6\u8003\u8651\u573a\u666f\u4e2d\u7684\u5176\u4ed6\u6e32\u67d3\u5668\uff0c\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites/class-sprite-renderer"},"Sprite Renderer")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-mesh-renderer"},"Mesh Renderer"),"\u3002\u5982\u679c\u5176\u4ed6\u6e32\u67d3\u5668\u4e0e\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u7cbe\u7075\u548c\u5bf9\u8c61\u8fdb\u884c\u4ea4\u4e92\uff0c\u8bf7\u4f7f\u7528\u6b64\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0cTilemap Renderer \u6839\u636e\u7cbe\u7075\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u7684\u4f4d\u7f6e\u4ee5\u53ca\u5728 Tilemap Renderer \u4e2d\u8bbe\u7f6e\u7684\u6392\u5e8f\u5c5e\u6027\u5bf9\u7cbe\u7075\u8fdb\u884c\u6392\u5e8f\u3002\u4f8b\u5982\uff0c\u5141\u8bb8\u89d2\u8272\u7cbe\u7075\u8fdb\u5165\u969c\u788d\u7269\u7cbe\u7075\u4e4b\u95f4\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u793a\u4f8b\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_14.png",alt:"\u5728 Individual Mode \u6a21\u5f0f\u4e0b\uff0c\u89d2\u8272\u7cbe\u7075\u53ef\u5728\u5854\u697c\u7cbe\u7075\u540e\u9762\u6e32\u67d3\uff0c\u4e5f\u51fa\u73b0\u5728\u5730\u9762\u7cbe\u7075\u4e4b\u4e0a\u3002"})),(0,i.kt)("p",null,"\u5728 Individual Mode \u6a21\u5f0f\u4e0b\uff0c\u89d2\u8272\u7cbe\u7075\u53ef\u5728\u5854\u697c\u7cbe\u7075\u540e\u9762\u6e32\u67d3\uff0c\u4e5f\u51fa\u73b0\u5728\u5730\u9762\u7cbe\u7075\u4e4b\u4e0a\u3002"),(0,i.kt)("p",null,"\u540c\u6837\u7684\u793a\u4f8b\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Chunk Mode"),"  \u6a21\u5f0f\u4e0b\uff0c\u89d2\u8272\u7cbe\u7075\u53ef\u80fd\u4f1a\u88ab\u9690\u85cf\u5728\u5730\u9762\u7cbe\u7075\u540e\u9762\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/2D_IsoTilemap_15.png",alt:"\u540c\u6837\u7684\u573a\u666f\u5728 Chunk Mode \u6a21\u5f0f\u4e0b\u7684\u6e32\u67d3\u7ed3\u679c\u3002"})),(0,i.kt)("p",null,"\u540c\u6837\u7684\u573a\u666f\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Chunk Mode"),"  \u6a21\u5f0f\u4e0b\u7684\u6e32\u67d3\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528  ",(0,i.kt)("strong",{parentName:"p"},"Individual Mode"),"  \u6a21\u5f0f\u53ef\u80fd\u4f1a\u964d\u4f4e\u6027\u80fd\uff0c\u56e0\u4e3a\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u5355\u72ec\u6e32\u67d3\u6bcf\u4e2a\u7cbe\u7075\u4f1a\u4ea7\u751f\u66f4\u591a\u5f00\u9500\u3002"),(0,i.kt)("h3",{id:"individual-mode-\u6a21\u5f0f\u4e0b\u7684-z-as-y-tilemap-\u74e6\u7247\u5730\u56fe\u7684-custom-axis-\u6392\u5e8f\u6a21\u5f0f"},"Individual Mode \u6a21\u5f0f\u4e0b\u7684 Z as Y Tilemap \u74e6\u7247\u5730\u56fe\u7684 Custom Axis \u6392\u5e8f\u6a21\u5f0f"),(0,i.kt)("p",null,"\u8981\u5728  ",(0,i.kt)("strong",{parentName:"p"},"Isometric Z as Y"),"  \u74e6\u7247\u5730\u56fe\u4e0a\u6b63\u786e\u6392\u5e8f\u548c\u6e32\u67d3\u74e6\u7247\u7cbe\u7075\uff0cTransparency Sort Axis \u5fc5\u987b\u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Custom Axis")," \u3002\u9996\u5148\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Renderer Mode"),"  \u8bbe\u7f6e\u4e3a\u201cIndividual Mode\u201d\uff0c\u7136\u540e\u9009\u62e9  ",(0,i.kt)("strong",{parentName:"p"},"Edit ",">"," Settings ",">"," Graphics")," \u3002"),(0,i.kt)("p",null,"\u5c06  ",(0,i.kt)("strong",{parentName:"p"},"Transparency Sort Mode"),"  \u8bbe\u7f6e\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"Custom Axis")," \uff0c\u5e76\u5c06\u5176 Y \u503c\u8bbe\u7f6e\u4e3a \u20130.26\u3002\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/tilemap-isometric/tilemap-isometric-create-iso"},"\u521b\u5efa\u7b49\u8ddd\u74e6\u7247\u5730\u56fe"),"\u9875\u9762\u4ee5\u4e86\u89e3\u6709\u5173 ",(0,i.kt)("strong",{parentName:"p"},"Transparency Sort Axis"),"  \u8bbe\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2018.3/Documentation/Manual/30_search.html?q=newin20183"},"2018.3")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u7b49\u8ddd\u74e6\u7247\u5730\u56fe NewIn20183")))}c.isMDXComponent=!0}}]);