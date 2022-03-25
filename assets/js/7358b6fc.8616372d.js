"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64505],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45572:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],p={id:"class-Cloth",title:"\u5e03\u6599",slug:"/physics3dreference/class-cloth"},i="\u5e03\u6599",s={unversionedId:"physics-section/physics3dreference/class-Cloth",id:"physics-section/physics3dreference/class-Cloth",title:"\u5e03\u6599",description:"The Cloth component works with the Skinned Mesh Renderer to provide a physics-based solution for simulating fabrics. It is specifically designed for character clothing, and only works with the Skinned Mesh Renderer. If you add a Cloth component to a GameObject with a regular Mesh Renderer, Unity removes the Mesh Renderer and adds a Skinned Mesh Renderer.",source:"@site/docs/physics-section/physics3dreference/class-cloth.md",sourceDirName:"physics-section/physics3dreference",slug:"/physics3dreference/class-cloth",permalink:"/doc-unity-manual/docs/physics3dreference/class-cloth",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/physics-section/physics3dreference/class-cloth.md",tags:[],version:"current",frontMatter:{id:"class-Cloth",title:"\u5e03\u6599",slug:"/physics3dreference/class-cloth"},sidebar:"tutorialSidebar",previous:{title:"\u89d2\u8272\u5173\u8282",permalink:"/doc-unity-manual/docs/physics3dreference/class-character-joint"},next:{title:"\u53ef\u914d\u7f6e\u5173\u8282",permalink:"/doc-unity-manual/docs/physics3dreference/class-configurable-joint"}},c={},d=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u7f16\u8f91\u7ea6\u675f\u5de5\u5177",id:"\u7f16\u8f91\u7ea6\u675f\u5de5\u5177",level:3},{value:"\u7ea6\u675f\u7c7b\u578b\u548c\u989c\u8272",id:"\u7ea6\u675f\u7c7b\u578b\u548c\u989c\u8272",level:4},{value:"\u7ea6\u675f\u865a\u62df\u5316",id:"\u7ea6\u675f\u865a\u62df\u5316",level:4},{value:"\u7ea6\u675f\u7248\u672c\u6a21\u5f0f",id:"\u7ea6\u675f\u7248\u672c\u6a21\u5f0f",level:4},{value:"\u5728  <strong>Select</strong>  \u6a21\u5f0f\u4e0b\uff1a",id:"\u5728--select--\u6a21\u5f0f\u4e0b",level:5},{value:"\u5728  <strong>Paint</strong>  \u6a21\u5f0f\u4e0b\uff1a",id:"\u5728--paint--\u6a21\u5f0f\u4e0b",level:5},{value:"\u5728  <strong>Gradient</strong>  \u6a21\u5f0f\u4e0b\uff1a",id:"\u5728--gradient--\u6a21\u5f0f\u4e0b",level:5},{value:"\u81ea\u78b0\u649e\u548c\u4e92\u78b0\u649e",id:"\u81ea\u78b0\u649e\u548c\u4e92\u78b0\u649e",level:3},{value:"\u5e03\u6599\u4e92\u78b0\u649e",id:"\u5e03\u6599\u4e92\u78b0\u649e",level:4},{value:"\u78b0\u649e\u4f53\u78b0\u649e",id:"\u78b0\u649e\u4f53\u78b0\u649e",level:3}],m={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e03\u6599"},"\u5e03\u6599"),(0,l.kt)("p",null,"The Cloth component works with the Skinned Mesh Renderer to provide a physics-based solution for simulating fabrics. It is specifically designed for character clothing, and only works with the Skinned Mesh Renderer. If you add a Cloth component to a GameObject with a regular Mesh Renderer, Unity removes the Mesh Renderer and adds a Skinned Mesh Renderer."),(0,l.kt)("p",null,"To attach a Cloth component to GameObject that has a Skinned Mesh Renderer, select the GameObject in the Editor, click the  ",(0,l.kt)("strong",{parentName:"p"},"Add Component"),"  button in the Inspector window, and select  ",(0,l.kt)("strong",{parentName:"p"},"Physics"),"  ",">","  ",(0,l.kt)("strong",{parentName:"p"},"Cloth")," . The component appears in the Inspector."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Inspector-Cloth.png",alt:"Inspector-Cloth.png"})),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Stretching Stiffness")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e03\u6599\u7684\u62c9\u4f38\u521a\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Bending Stiffness")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e03\u6599\u7684\u5f2f\u66f2\u521a\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Tethers")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65bd\u52a0\u7ea6\u675f\u4ee5\u5e2e\u52a9\u9632\u6b62\u79fb\u52a8\u7684\u5e03\u6599\u7c92\u5b50\u79bb\u5f00\u56fa\u5b9a\u7c92\u5b50\u7684\u8ddd\u79bb\u592a\u8fdc\u3002\u6b64\u5c5e\u6027\u6709\u52a9\u4e8e\u51cf\u5c11\u8fc7\u5ea6\u62c9\u4f38\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Gravity")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5e94\u8be5\u5bf9\u5e03\u6599\u65bd\u52a0\u91cd\u529b\u52a0\u901f\u5ea6\uff1f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Damping")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u52a8\u963b\u5c3c\u7cfb\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"External Acceleration")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65bd\u52a0\u5728\u5e03\u6599\u4e0a\u7684\u6052\u5b9a\u5916\u90e8\u52a0\u901f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Random Acceleration")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65bd\u52a0\u5728\u5e03\u6599\u4e0a\u7684\u968f\u673a\u5916\u90e8\u52a0\u901f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"World Velocity Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89d2\u8272\u591a\u5927\u7a0b\u5ea6\u7684\u4e16\u754c\u7a7a\u95f4\u79fb\u52a8\u4f1a\u5f71\u54cd\u5e03\u6599\u9876\u70b9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"World Acceleration Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89d2\u8272\u591a\u5927\u7684\u4e16\u754c\u7a7a\u95f4\u52a0\u901f\u5ea6\u4f1a\u5f71\u54cd\u5e03\u6599\u9876\u70b9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Friction")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e03\u6599\u4e0e\u89d2\u8272\u78b0\u649e\u65f6\u7684\u6469\u64e6\u529b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collision Mass Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u78b0\u649e\u7c92\u5b50\u7684\u8d28\u91cf\u589e\u52a0\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Continuous Collision")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u8fde\u7eed\u78b0\u649e\u6765\u63d0\u9ad8\u78b0\u649e\u7a33\u5b9a\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Use Virtual Particles")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u4e09\u89d2\u5f62\u6dfb\u52a0\u4e00\u4e2a\u865a\u62df\u7c92\u5b50\uff0c\u4ece\u800c\u63d0\u9ad8\u78b0\u649e\u7a33\u5b9a\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solver Frequency")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e3\u7b97\u5668\u6bcf\u79d2\u8fed\u4ee3\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sleep Threshold")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e03\u6599\u7684\u7761\u7720\u9608\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Capsule Colliders")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u4e0e\u6b64 Cloth \u5b9e\u4f8b\u78b0\u649e\u7684 CapsuleCollider \u7684\u6570\u7ec4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Sphere Colliders")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u4e0e\u6b64 Cloth \u5b9e\u4f8b\u78b0\u649e\u7684 ClothSphereColliderPairs \u7684\u6570\u7ec4\u3002")))),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,l.kt)("p",null,"\u5e03\u6599\u4e0d\u54cd\u5e94\u573a\u666f\u4e2d\u7684\u4efb\u4f55\u78b0\u649e\u4f53\uff0c\u4e5f\u4e0d\u4f1a\u5c06\u529b\u53cd\u5c04\u56de\u4e16\u754c\u3002\u6dfb\u52a0 Cloth \u7ec4\u4ef6\u540e\uff0c\u8be5\u7ec4\u4ef6\u5b8c\u5168\u4e0d\u4f1a\u54cd\u5e94\u548c\u5f71\u54cd\u4efb\u4f55\u5176\u4ed6\u5b9e\u4f53\u3002\u56e0\u6b64\u5728\u624b\u52a8\u5c06\u78b0\u649e\u4f53\u4ece\u4e16\u754c\u6dfb\u52a0\u5230 Cloth \u7ec4\u4ef6\u4e4b\u524d\uff0c\u5e03\u6599\u548c\u4e16\u754c\u65e0\u6cd5\u8bc6\u522b\u6216\u770b\u5230\u5f7c\u6b64\u3002\u5373\u4f7f\u6267\u884c\u4e86\u6b64\u64cd\u4f5c\uff0c\u6a21\u62df\u4ecd\u662f\u5355\u5411\u7684\uff1a\u5e03\u6599\u53ef\u4ee5\u54cd\u5e94\u5b9e\u4f53\uff0c\u4f46\u4e0d\u4f1a\u53cd\u5411\u65bd\u529b\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u53ea\u80fd\u5bf9\u5e03\u6599\u4f7f\u7528\u4e09\u79cd\u7c7b\u578b\u7684\u78b0\u649e\u4f53\uff1a\u7403\u4f53\u3001\u80f6\u56ca\u4f53\u4ee5\u53ca\u4f7f\u7528\u4e24\u4e2a\u7403\u5f62\u78b0\u649e\u4f53\u6784\u9020\u800c\u6210\u7684\u5706\u9525\u80f6\u56ca\u78b0\u649e\u4f53\u3002\u4e4b\u6240\u4ee5\u5b58\u5728\u8fd9\u4e48\u591a\u9650\u5236\u662f\u4e3a\u4e86\u5e2e\u52a9\u63d0\u9ad8\u6027\u80fd\u3002"),(0,l.kt)("h3",{id:"\u7f16\u8f91\u7ea6\u675f\u5de5\u5177"},"\u7f16\u8f91\u7ea6\u675f\u5de5\u5177"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u7ea6\u675f\u5e94\u7528\u4e8e\u5e03\u6599\u7684\u7279\u5b9a\u9876\u70b9\uff0c\u4ee5\u589e\u52a0\u6216\u51cf\u5c11\u8fd9\u4e9b\u9876\u70b9\u7684\u79fb\u52a8\u81ea\u7531\u5ea6\u3002"),(0,l.kt)("p",null,"\u5728 Inspector \u4e2d\uff0c\u9009\u62e9 Cloth \u7ec4\u4ef6\u4e2d\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Edit cloth constraints")," \uff08\u5de6\u4e0a\u89d2\u7684\u6309\u94ae\uff09\u3002\u542f\u7528\u8be5\u5de5\u5177\u540e\uff0c\u5728 Scene \u89c6\u56fe\u4e2d\uff0c\u7f51\u683c\u7684\u6240\u6709\u9876\u70b9\u4e0a\u90fd\u5c06\u51fa\u73b0\u5c0f\u7403\u4f53\u3002\u8fd9\u4e9b\u5c0f\u7403\u4f53\u4ee3\u8868\u53ef\u4ee5\u5e94\u7528\u7ea6\u675f\u7684\u5e03\u6599\u7c92\u5b50\u3002Scene \u89c6\u56fe\u53f3\u4e0b\u89d2\u8fd8\u4f1a\u663e\u793a Cloth Constraints \u5de5\u5177\u7a97\u53e3\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Inspector-Cloth2.jpg",alt:"\u5728\u5e26\u8499\u76ae\u7684\u7f51\u683c\u6e32\u67d3\u5668\u4e0a\u4f7f\u7528\u7684\u5e03\u6599\u7ea6\u675f\u5de5\u5177\u3002"})),(0,l.kt)("p",null,"\u5728\u5e26\u8499\u76ae\u7684\u7f51\u683c\u6e32\u67d3\u5668\u4e0a\u4f7f\u7528\u7684\u5e03\u6599\u7ea6\u675f\u5de5\u5177\u3002"),(0,l.kt)("h4",{id:"\u7ea6\u675f\u7c7b\u578b\u548c\u989c\u8272"},"\u7ea6\u675f\u7c7b\u578b\u548c\u989c\u8272"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u5e03\u6599\u7c92\u5b50\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u548c\u663e\u793a\u4e24\u79cd\u7ea6\u675f\uff1a ","*","  ",(0,l.kt)("strong",{parentName:"p"},"Max Distance"),"  \u2013 \u5e03\u6599\u7c92\u5b50\u53ef\u4ece\u9876\u70b9\u4f4d\u7f6e\u884c\u8fdb\u7684\u6700\u5927\u8ddd\u79bb\u3002 ","*","  ",(0,l.kt)("strong",{parentName:"p"},"Surface Penetration"),"  \u2013 \u5e03\u6599\u7c92\u5b50\u53ef\u7a7f\u900f\u7f51\u683c\u7684\u6df1\u5ea6\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u5f53\u524d\u9009\u62e9\u7684\u7ea6\u675f\u7684\u7c7b\u578b\uff0c\u7c92\u5b50\u7684\u989c\u8272\u8868\u793a\u8be5\u7c92\u5b50\u7684\u7ea6\u675f\u5728\u5e03\u6599\u5185\u7684\u76f8\u5bf9\u503c\u3002"),(0,l.kt)("h4",{id:"\u7ea6\u675f\u865a\u62df\u5316"},"\u7ea6\u675f\u865a\u62df\u5316"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/cloth-constraints-tool.png",alt:"Cloth Constraints \u5de5\u5177\u7684\u865a\u62df\u5316\u5c5e\u6027\u3002"})),(0,l.kt)("p",null,"Cloth Constraints \u5de5\u5177\u7684\u865a\u62df\u5316\u5c5e\u6027\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Visualization")),(0,l.kt)("td",{parentName:"tr",align:null},"-> \u9009\u62e9\u8981\u663e\u793a\u7684\u7ea6\u675f\u7c7b\u578b\u548c\u7c92\u5b50\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("em",{parentName:"td"},"Max Distance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u5e03\u6599\u7c92\u5b50\u7684 Max Distance \u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("em",{parentName:"td"},"Surface Penetration")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u5e03\u6599\u7c92\u5b50\u7684 Surface Penetration \u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-> ",(0,l.kt)("em",{parentName:"td"},"Manipulate Backfaces")),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u9009\u9879\u53ef\u4ee5\u53ef\u89c6\u5316\u548c\u64cd\u63a7\u53ef\u80fd\u9690\u85cf\u5728\u5e03\u6599\u5f53\u524d\u671d\u5411\u90e8\u5206\u540e\u9762\u7684\u7c92\u5b50\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"["," \u8272\u8c31 ","]"),(0,l.kt)("td",{parentName:"tr",align:null},"-> \u6839\u636e\u5f53\u524d\u5728\u6574\u5757\u5e03\u6599\u4e2d\u5e94\u7528\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\uff0c\u4e3a\u4e0a\u8ff0\u9009\u5b9a\u7684\u7ea6\u675f\u7c7b\u578b\u63d0\u4f9b\u7c92\u5b50\u989c\u8272\u548c\u7ea6\u675f\u503c\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\u3002\u9ed1\u8272\u59cb\u7ec8\u8868\u793a\u7c92\u5b50\u6ca1\u6709\u7ea6\u675f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Constraint Size")),(0,l.kt)("td",{parentName:"tr",align:null},"-> \u4ee3\u8868\u5e03\u6599\u7c92\u5b50\u7684\u7403\u4f53\u7684\u663e\u793a\u5927\u5c0f\u3002\u5728\u65b9\u4fbf\u65f6\u53ef\u4ee5\u8c03\u6574\u6b64\u503c\u4ee5\u4fbf\u7b80\u5316\u7ea6\u675f\u7248\u672c\u3002\u8fd9\u4e2a\u5c5e\u6027\u5bf9\u7ea6\u675f\u672c\u8eab\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002")))),(0,l.kt)("h4",{id:"\u7ea6\u675f\u7248\u672c\u6a21\u5f0f"},"\u7ea6\u675f\u7248\u672c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 3 \u79cd\u4e0d\u540c\u7684\u6a21\u5f0f\u6765\u7f16\u8f91\u5e03\u6599\u7ea6\u675f\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u6a21\u5f0f")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u63cf\u8ff0")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Select")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u56fa\u5b9a\u7ea6\u675f\u503c\u5e94\u7528\u4e8e\u9884\u5148\u9009\u62e9\u7684\u7c92\u5b50\u7ec4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Paint")),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u7528\u753b\u7b14\u7ed8\u5236\u5e03\u6599\u7c92\u5b50\u6765\u65bd\u52a0\u56fa\u5b9a\u7684\u7ea6\u675f\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Gradient")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u7ea6\u675f\u503c\u7684\u4ece\u5de6\u5230\u53f3\u7ebf\u6027\u6e10\u53d8\u5e94\u7528\u4e8e\u9884\u5148\u9009\u62e9\u7684\u7c92\u5b50\u7ec4\u3002")))),(0,l.kt)("p",null,"\u6839\u636e\u4f7f\u7528\u7684\u6a21\u5f0f\uff0c\u5de5\u5177\u5c5e\u6027\u548c\u6240\u9700\u6267\u884c\u7684\u6b65\u9aa4\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u5728\u6240\u6709\u60c5\u51b5\u4e0b\uff0c\u6700\u540e\u4e00\u6b65\u90fd\u5bf9\u5e94\u4e8e\u5e94\u7528\u7ea6\u675f\u503c\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("h5",{id:"\u5728--select--\u6a21\u5f0f\u4e0b"},"\u5728  ",(0,l.kt)("strong",{parentName:"h5"},"Select"),"  \u6a21\u5f0f\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/cloth-constraints-select.png",alt:"Select \u6a21\u5f0f\u4e0b\u7684 Cloth Constraints \u5de5\u5177\u3002"})),(0,l.kt)("p",null,"1.\u4f7f\u7528\u9f20\u6807\u5149\u6807\u6765\u7ed8\u5236\u4e00\u4e2a\u9009\u6846\uff0c\u6216\u4e00\u6b21\u5355\u51fb\u4e00\u4e2a\u7c92\u5b50\u3002 2.\u542f\u7528\u8981\u5e94\u7528\u4e8e\u9009\u5b9a\u9879\u7684\u7ea6\u675f\u7c7b\u578b\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Max Distance"),"  \u548c/\u6216  ",(0,l.kt)("strong",{parentName:"p"},"Surface Penetration")," \u3002 3.\u6839\u636e\u521a\u542f\u7528\u7684\u7ea6\u675f\u7c7b\u578b\u8bbe\u7f6e\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("h5",{id:"\u5728--paint--\u6a21\u5f0f\u4e0b"},"\u5728  ",(0,l.kt)("strong",{parentName:"h5"},"Paint"),"  \u6a21\u5f0f\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/cloth-constraints-paint.png",alt:"Paint \u6a21\u5f0f\u4e0b\u7684 Cloth Constraints \u5de5\u5177\u3002"})),(0,l.kt)("p",null,"1.\u6839\u636e\u60a8\u9700\u8981\u7528\u753b\u7b14\u8986\u76d6\u7684\u533a\u57df\u6765\u8c03\u6574  ",(0,l.kt)("strong",{parentName:"p"},"Brush Radius")," \u3002 2.\u542f\u7528\u8981\u5e94\u7528\u7684\u7ea6\u675f\u7c7b\u578b\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Max Distance"),"  \u548c/\u6216  ",(0,l.kt)("strong",{parentName:"p"},"Surface Penetration")," \u3002 3.\u6839\u636e\u521a\u542f\u7528\u7684\u7ea6\u675f\u7c7b\u578b\u8bbe\u7f6e\u4e00\u4e2a\u7ed8\u5236\u503c\u3002 4.\u7528\u753b\u7b14\u5728\u7c92\u5b50\u4e0a\u7ed8\u5236\u7ea6\u675f\u3002"),(0,l.kt)("h5",{id:"\u5728--gradient--\u6a21\u5f0f\u4e0b"},"\u5728  ",(0,l.kt)("strong",{parentName:"h5"},"Gradient"),"  \u6a21\u5f0f\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/cloth-constraints-gradient.png",alt:"Gradient \u6a21\u5f0f\u4e0b\u7684 Cloth Constraints \u5de5\u5177\u3002"})),(0,l.kt)("p",null,"1.\u786e\u4fdd\u5728 Scene \u89c6\u56fe\u4e2d\u5f00\u542f  ",(0,l.kt)("strong",{parentName:"p"},"2D"),"  \u89c6\u56fe\uff08\u8be5\u5de5\u5177\u5728 3D \u89c6\u56fe\u4e0b\u65e0\u6cd5\u5e94\u7528\u6e10\u53d8\uff09\u3002 2.\u4f7f\u7528\u9f20\u6807\u5149\u6807\u6765\u7ed8\u5236\u4e00\u4e2a\u9009\u6846\uff0c\u6216\u4e00\u6b21\u5355\u51fb\u4e00\u4e2a\u7c92\u5b50\u3002 3.\u8bbe\u7f6e\u8981\u5728\u9009\u62e9\u8303\u56f4\u5185\u4ece\u5de6\u5230\u53f3\u5e94\u7528\u7684\u6e10\u53d8\u7684\u6781\u9650\u503c\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Gradient Start"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Gradient End")," \u3002 4.\u542f\u7528\u8981\u5e94\u7528\u4e8e\u9009\u5b9a\u9879\u7684\u7ea6\u675f\u7c7b\u578b\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Max Distance"),"  \u548c/\u6216  ",(0,l.kt)("strong",{parentName:"p"},"Surface Penetration")," \u3002"),(0,l.kt)("h3",{id:"\u81ea\u78b0\u649e\u548c\u4e92\u78b0\u649e"},"\u81ea\u78b0\u649e\u548c\u4e92\u78b0\u649e"),(0,l.kt)("p",null,"\u5e03\u6599\u78b0\u649e\u4f7f\u6e38\u620f\u4e2d\u7684\u89d2\u8272\u670d\u88c5\u548c\u5176\u4ed6\u9762\u6599\u66f4\u52a0\u903c\u771f\u3002\u5728 Unity \u4e2d\uff0c\u5e03\u6599\u6709\u51e0\u79cd\u5904\u7406\u78b0\u649e\u7684\u5e03\u6599\u7c92\u5b50\u3002\u53ef\u5c06\u5e03\u6599\u7c92\u5b50\u8bbe\u7f6e\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u78b0\u649e\uff0c\u9632\u6b62\u5e03\u6599\u7a7f\u900f\u81ea\u8eab\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e92\u78b0\u649e\uff0c\u5141\u8bb8\u5e03\u6599\u7c92\u5b50\u76f8\u4e92\u78b0\u649e\u3002")),(0,l.kt)("p",null,"\u8981\u4e3a\u5e03\u6599\u8bbe\u7f6e\u78b0\u649e\u7c92\u5b50\uff0c\u8bf7\u5728 Cloth Inspector \u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"Self Collision and Intercollision"),"  \u6309\u94ae\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Inspector-Cloth-Collision-Button.png",alt:"Cloth Inspector \u4e2d\u7684 Self Collision and Intercollision \u6309\u94ae"})),(0,l.kt)("p",null,"Cloth Inspector \u4e2d\u7684 Self Collision and Intercollision \u6309\u94ae"),(0,l.kt)("p",null,"\u6b64\u65f6\u5c06\u5728 Scene \u89c6\u56fe\u4e2d\u663e\u793a  ",(0,l.kt)("strong",{parentName:"p"},"Cloth Self Collision And Intercollision"),"  \u7a97\u53e3\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ClothSelfCollisionAndIntercollision.png",alt:"Cloth Self Collision And Intercollision \u7a97\u53e3"})),(0,l.kt)("p",null,"Cloth Self Collision And Intercollision \u7a97\u53e3"),(0,l.kt)("p",null,"\u5305\u542b Cloth \u7ec4\u4ef6\u7684\u8499\u76ae\u7f51\u683c\u5c06\u81ea\u52a8\u663e\u793a\u5e03\u6599\u7c92\u5b50\u3002\u6700\u521d\u6ca1\u6709\u4efb\u4f55\u5e03\u6599\u7c92\u5b50\u8bbe\u7f6e\u4e3a\u4f7f\u7528\u78b0\u649e\u3002\u8fd9\u4e9b\u672a\u4f7f\u7528\u7684\u7c92\u5b50\u663e\u793a\u4e3a\u9ed1\u8272\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ClothSelfCollisionNonSelected.jpg",alt:"\u672a\u4f7f\u7528\u7684\u5e03\u6599\u7c92\u5b50"})),(0,l.kt)("p",null,"\u672a\u4f7f\u7528\u7684\u5e03\u6599\u7c92\u5b50"),(0,l.kt)("p",null,"\u8981\u5e94\u7528\u81ea\u78b0\u649e\u6216\u4e92\u78b0\u649e\uff0c\u5fc5\u987b\u9009\u62e9\u4e00\u7ec4\u7c92\u5b50\u6765\u5e94\u7528\u78b0\u649e\u3002\u8981\u9009\u62e9\u4e00\u7ec4\u7c92\u5b50\u8fdb\u884c\u78b0\u649e\uff0c\u8bf7\u5355\u51fb  ",(0,l.kt)("strong",{parentName:"p"},"Select"),"  \u6309\u94ae\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ClothSelectParticles.png",alt:"Select \u5e03\u6599\u7c92\u5b50\u6309\u94ae"})),(0,l.kt)("p",null,"Select \u5e03\u6599\u7c92\u5b50\u6309\u94ae"),(0,l.kt)("p",null,"\u73b0\u5728\u5de6\u952e\u5355\u51fb\u5e76\u62d6\u52a8\u4ee5\u4fbf\u9009\u62e9\u8981\u5e94\u7528\u78b0\u649e\u7684\u7c92\u5b50\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SelectingClothParticles.jpg",alt:"\u4f7f\u7528\u5355\u51fb\u5e76\u62d6\u52a8\u7684\u65b9\u5f0f\u9009\u62e9\u5e03\u6599\u7c92\u5b50"})),(0,l.kt)("p",null,"\u4f7f\u7528\u5355\u51fb\u5e76\u62d6\u52a8\u7684\u65b9\u5f0f\u9009\u62e9\u5e03\u6599\u7c92\u5b50"),(0,l.kt)("p",null,"\u9009\u5b9a\u7c92\u5b50\u663e\u793a\u4e3a\u84dd\u8272\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SelectedParticlesBlue.jpg",alt:"\u9009\u5b9a\u7684\u5e03\u6599\u7c92\u5b50\u4e3a\u84dd\u8272"})),(0,l.kt)("p",null,"\u9009\u5b9a\u7684\u5e03\u6599\u7c92\u5b50\u4e3a\u84dd\u8272"),(0,l.kt)("p",null,"\u52fe\u9009  ",(0,l.kt)("strong",{parentName:"p"},"Self Collision and Intercollision"),"  \u590d\u9009\u6846\u53ef\u5c06\u78b0\u649e\u5e94\u7528\u4e8e\u9009\u5b9a\u7c92\u5b50\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SelfCollisionAndIntercollisionCheckbox.png",alt:"Self Collision and Intercollision \u590d\u9009\u6846"})),(0,l.kt)("p",null,"Self Collision and Intercollision \u590d\u9009\u6846"),(0,l.kt)("p",null,"\u6307\u5b9a\u7528\u4e8e\u78b0\u649e\u7684\u7c92\u5b50\u5c06\u663e\u793a\u4e3a\u7eff\u8272\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SelectedParticlesGreen.jpg",alt:"\u9009\u5b9a\u7c92\u5b50\u4e3a\u7eff\u8272"})),(0,l.kt)("p",null,"\u9009\u5b9a\u7c92\u5b50\u4e3a\u7eff\u8272"),(0,l.kt)("p",null,"\u8981\u4e3a\u5e03\u6599\u542f\u7528\u81ea\u78b0\u649e\u884c\u4e3a\uff0c\u8bf7\u9009\u62e9 Cloth Inspector \u7a97\u53e3\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Self Collision"),"  \u90e8\u5206\uff0c\u5e76\u5c06  ",(0,l.kt)("strong",{parentName:"p"},"Distance"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Stiffness"),"  \u8bbe\u7f6e\u4e3a\u975e\u96f6\u503c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SelfCollisionParameters.png",alt:"Self Collision \u5c5e\u6027\u7684\u53c2\u6570"})),(0,l.kt)("p",null,"Self Collision \u5c5e\u6027\u7684\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027\uff1a")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd\uff1a")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Distance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u7c92\u5b50\u7684\u5305\u88f9\u7403\u4f53\u7684\u76f4\u5f84\u3002Unity \u786e\u4fdd\u8fd9\u4e9b\u7403\u4f53\u5728\u6a21\u62df\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u91cd\u53e0\u3002 ",(0,l.kt)("strong",{parentName:"td"},"Distance"),"  \u5c5e\u6027\u7684\u503c\u5e94\u5c0f\u4e8e\u914d\u7f6e\u4e2d\u7684\u4e24\u4e2a\u7c92\u5b50\u4e4b\u95f4\u7684\u6700\u5c0f\u8ddd\u79bb\u3002\u5982\u679c\u8ddd\u79bb\u8f83\u5927\uff0c\u5219\u81ea\u78b0\u649e\u53ef\u80fd\u8fdd\u53cd\u67d0\u4e9b\u8ddd\u79bb\u7ea6\u675f\u5e76\u5bfc\u81f4\u6296\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Stiffness")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u4e4b\u95f4\u7684\u5206\u79bb\u51b2\u529b\u7684\u5f3a\u5ea6\u3002\u6b64\u503c\u7531\u5e03\u6599\u89e3\u7b97\u5668\u8fdb\u884c\u8ba1\u7b97\uff0c\u5e94\u8db3\u4ee5\u4fdd\u6301\u7c92\u5b50\u5206\u79bb\u3002")))),(0,l.kt)("p",null,"\u81ea\u78b0\u649e\u548c\u4e92\u78b0\u649e\u53ef\u80fd\u9700\u8981\u5927\u91cf\u7684\u603b\u6a21\u62df\u65f6\u95f4\u3002\u8bf7\u8003\u8651\u7f29\u5c0f\u78b0\u649e\u8ddd\u79bb\u5e76\u4f7f\u7528\u81ea\u78b0\u649e\u7d22\u5f15\u6765\u51cf\u5c11\u5f7c\u6b64\u78b0\u649e\u7684\u7c92\u5b50\u6570\u3002"),(0,l.kt)("p",null,"\u81ea\u78b0\u649e\u4f7f\u7528\u9876\u70b9\uff0c\u800c\u4e0d\u662f\u4e09\u89d2\u5f62\uff0c\u56e0\u6b64\u5bf9\u4e8e\u4e09\u89d2\u5f62\u8fdc\u5927\u4e8e\u5e03\u6599\u539a\u5ea6\u7684\u7f51\u683c\uff0c\u4e0d\u8981\u6307\u671b\u78b0\u649e\u80fd\u591f\u5b8c\u7f8e\u8fd0\u884c\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Paint"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Erase"),"  \u6a21\u5f0f\u5141\u8bb8\u901a\u8fc7\u6309\u4f4f\u9f20\u6807\u5de6\u952e\u5e76\u62d6\u52a8\u5355\u4e2a\u5e03\u6599\u7c92\u5b50\u6765\u6dfb\u52a0\u6216\u5220\u9664\u7528\u4e8e\u78b0\u649e\u7684\u7c92\u5b50\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PaintEraseModes.png",alt:"Self Collision \u53c2\u6570"})),(0,l.kt)("p",null,"Self Collision \u53c2\u6570"),(0,l.kt)("p",null,"\u5728  ",(0,l.kt)("strong",{parentName:"p"},"Paint"),"  \u6216  ",(0,l.kt)("strong",{parentName:"p"},"Erase"),"  \u6a21\u5f0f\u4e0b\uff0c\u6307\u5b9a\u7528\u4e8e\u78b0\u649e\u7684\u7c92\u5b50\u4e3a\u7eff\u8272\uff0c\u672a\u6307\u5b9a\u7684\u7c92\u5b50\u4e3a\u9ed1\u8272\uff0c\u753b\u7b14\u4e0b\u65b9\u7684\u7c92\u5b50\u4e3a\u84dd\u8272\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PaintBrushSelfCollision.jpg",alt:"\u6b63\u5728\u7ed8\u5236\u7684\u7c92\u5b50\u4e3a\u84dd\u8272"})),(0,l.kt)("p",null,"\u6b63\u5728\u7ed8\u5236\u7684\u7c92\u5b50\u4e3a\u84dd\u8272"),(0,l.kt)("h4",{id:"\u5e03\u6599\u4e92\u78b0\u649e"},"\u5e03\u6599\u4e92\u78b0\u649e"),(0,l.kt)("p",null,"\u53ef\u4f7f\u7528\u4e0e\u6307\u5b9a\u81ea\u78b0\u649e\u7c92\u5b50\u76f8\u540c\u7684\u65b9\u5f0f\uff08\u5982\u4e0a\u6240\u8ff0\uff09\u4e3a\u4e92\u78b0\u649e\u6307\u5b9a\u7c92\u5b50\u3002\u4e0e\u81ea\u78b0\u649e\u4e00\u6837\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4\u7528\u4e8e\u4e92\u78b0\u649e\u7684\u7c92\u5b50\u3002"),(0,l.kt)("p",null,"\u8981\u542f\u7528\u4e92\u78b0\u649e\u884c\u4e3a\uff0c\u8bf7\u6253\u5f00  ",(0,l.kt)("strong",{parentName:"p"},"Physics"),"  \u8bbe\u7f6e\uff08\u4ece Unity \u4e3b\u83dc\u5355\u4e2d\u9009\u62e9\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,l.kt)("strong",{parentName:"p"},"Project Settings")," \uff0c\u7136\u540e\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Physics"),"  \u7c7b\u522b\uff09\uff0c\u5e76\u5728  ",(0,l.kt)("strong",{parentName:"p"},"Cloth InterCollision"),"  \u90e8\u5206\u5c06  ",(0,l.kt)("strong",{parentName:"p"},"Distance"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Stiffness"),"  \u8bbe\u7f6e\u4e3a\u975e\u96f6\u503c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/ClothInspectorIntercollisionSettings.png",alt:"\u5728 Physics \u8bbe\u7f6e\u4e2d\u542f\u7528\u4e92\u78b0\u649e\u884c\u4e3a"})),(0,l.kt)("p",null,"\u5728 Physics \u8bbe\u7f6e\u4e2d\u542f\u7528\u4e92\u78b0\u649e\u884c\u4e3a"),(0,l.kt)("p",null,"\u5e03\u6599\u4e92\u78b0\u649e\u7684  ",(0,l.kt)("strong",{parentName:"p"},"Distance"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Stiffness"),"  \u5c5e\u6027\u4e0e\u4ee5\u4e0a\u63cf\u8ff0\u7684\u81ea\u78b0\u649e\u7684 Distance \u548c Stiffness \u5c5e\u6027\u529f\u80fd\u76f8\u540c\u3002"),(0,l.kt)("h3",{id:"\u78b0\u649e\u4f53\u78b0\u649e"},"\u78b0\u649e\u4f53\u78b0\u649e"),(0,l.kt)("p",null,"\u5e03\u6599\u65e0\u6cd5\u76f4\u63a5\u4e0e\u4efb\u610f\u4e16\u754c\u51e0\u4f55\u4f53\u78b0\u649e\uff0c\u73b0\u5728\u53ea\u4f1a\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Cloth-capsuleColliders.html"},"\u80f6\u56ca\u78b0\u649e\u4f53"),"\u6216",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Cloth-sphereColliders.html"},"\u7403\u5f62\u78b0\u649e\u4f53"),"\u6570\u7ec4\u4e2d\u6307\u5b9a\u7684\u78b0\u649e\u4f53\u76f8\u4e92\u4f5c\u7528\u3002"),(0,l.kt)("p",null,"\u7403\u5f62\u78b0\u649e\u4f53\u6570\u7ec4\u53ef\u4ee5\u5305\u542b\u5355\u4e2a\u6709\u6548\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/SphereCollider.html"},"SphereCollider")," \u5b9e\u4f8b\uff08\u7b2c\u4e8c\u4e2a\u4e3a null\uff09\u6216\u4e00\u5bf9\u5b9e\u4f8b\u3002\u5728\u524d\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ClothSphereColliderPair.html"},"ClothSphereColliderPair")," \u4ec5\u8868\u793a\u5f85\u78b0\u649e\u5e03\u6599\u7684\u5355\u4e2a\u7403\u5f62\u78b0\u649e\u4f53\u3002\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u8868\u793a\u7531\u4e24\u4e2a\u7403\u4f53\u4ee5\u53ca\u8fde\u63a5\u8fd9\u4e24\u4e2a\u7403\u4f53\u7684\u9525\u4f53\u6240\u5b9a\u4e49\u7684\u5706\u9525\u5f62\u80f6\u56ca\u5f62\u72b6\u3002\u5706\u9525\u5f62\u80f6\u56ca\u5f62\u72b6\u5728\u5bf9\u89d2\u8272\u7684\u56db\u80a2\u8fdb\u884c\u5efa\u6a21\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2017\u201312\u201305 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2017.3/Documentation/Manual/30_search.html?q=newin20173"},"2017.3")," \u7248\u4e2d\u6dfb\u52a0\u4e86\u5e03\u6599\u81ea\u78b0\u649e\u548c\u4e92\u78b0\u649e NewIn20173")))}u.isMDXComponent=!0}}]);