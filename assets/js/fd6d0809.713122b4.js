"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36945],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3655:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"PartSysCollisionModule",title:"Collision \u6a21\u5757",slug:"/particle-system-modules/part-sys-collision-module"},s="Collision \u6a21\u5757",p={unversionedId:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/PartSysCollisionModule",id:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/PartSysCollisionModule",title:"Collision \u6a21\u5757",description:"This module controls how particles collide with GameObjects in the Scene. Use the first drop-down to define whether your collision settings apply to  Planes  or to the  World . If you choose  World , use the  Collision Mode  drop-down to define whether your collision settings apply for a 2D or 3D world.",source:"@site/docs/graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/part-sys-collision-module.md",sourceDirName:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules",slug:"/particle-system-modules/part-sys-collision-module",permalink:"/docs/particle-system-modules/part-sys-collision-module",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/part-sys-collision-module.md",tags:[],version:"current",frontMatter:{id:"PartSysCollisionModule",title:"Collision \u6a21\u5757",slug:"/particle-system-modules/part-sys-collision-module"},sidebar:"tutorialSidebar",previous:{title:"\u7c92\u5b50\u7cfb\u7edf\u6a21\u5757",permalink:"/docs/particle-system-modules"},next:{title:"Color by Speed module",permalink:"/docs/particle-system-modules/part-sys-color-by-speed-module"}},m={},d=[{value:"Using the Collision module",id:"using-the-collision-module",level:2},{value:"API",id:"api",level:3},{value:"Planes module properties",id:"planes-module-properties",level:2},{value:"World module properties",id:"world-module-properties",level:2},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"World Collision Quality",id:"world-collision-quality",level:2}],u={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"collision-\u6a21\u5757"},"Collision \u6a21\u5757"),(0,l.kt)("p",null,"This module controls how ",(0,l.kt)("a",{parentName:"p",href:"/docs/part-sys-reference/class-particle-system"},"particles")," collide with ",(0,l.kt)("a",{parentName:"p",href:"/docs/game-objects"},"GameObjects")," in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/creating-scenes"},"Scene"),". Use the first drop-down to define whether your collision settings apply to  ",(0,l.kt)("strong",{parentName:"p"},"Planes"),"  or to the  ",(0,l.kt)("strong",{parentName:"p"},"World")," . If you choose  ",(0,l.kt)("strong",{parentName:"p"},"World")," , use the  ",(0,l.kt)("strong",{parentName:"p"},"Collision Mode"),"  drop-down to define whether your collision settings apply for a ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting-started-installing-unity/2dor3d"},"2D or 3D")," world."),(0,l.kt)("h2",{id:"using-the-collision-module"},"Using the Collision module"),(0,l.kt)("p",null,"This module is part of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/part-sys-reference/class-particle-system"},"Particle System")," component. When you create a new Particle System GameObject, or add a Particle System component to an exiting GameObject, Unity adds the Collision module to the Particle System. By default, Unity disables this module. To create a new Particle System and enable this module:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click  ",(0,l.kt)("strong",{parentName:"li"},"GameObject"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Effects"),"  ",">","  ",(0,l.kt)("strong",{parentName:"li"},"Particle System")," ."),(0,l.kt)("li",{parentName:"ol"},"In the Inspector, find the Particle System component."),(0,l.kt)("li",{parentName:"ol"},"In the Particle System component, find the Collision module fold-out."),(0,l.kt)("li",{parentName:"ol"},"To the left of the fold-out header, enable the checkbox.")),(0,l.kt)("h3",{id:"api"},"API"),(0,l.kt)("p",null,"Since this module is part of the Particle System component, you access it through the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ParticleSystem.html"},"ParticleSystem")," class. For information on how to access it and change values at runtime, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/ParticleSystem-collision.html"},"Collision module API documentation"),"."),(0,l.kt)("h2",{id:"planes-module-properties"},"Planes module properties"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PartSysCollisionInsp.png",alt:"PartSysCollisionInsp.png"})),(0,l.kt)("p",null,"For some properties in this section, you can use different modes to set their value. For information on the modes you can use, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/built-in-particle-system/part-sys-usage#%E9%9A%8F%E6%97%B6%E9%97%B4%E6%8E%A8%E7%A7%BB%E8%80%8C%E5%8F%98%E5%8C%96%E7%9A%84%E5%B1%9E%E6%80%A7"},"Varying properties over time"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Planes \u5f39\u51fa\u83dc\u5355")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"td"},"Planes"),"  \u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Planes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b9a\u4e49\u78b0\u649e\u5e73\u9762\u7684\u53d8\u6362\u7684\u53ef\u6269\u5c55\u5217\u8868\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Visualization")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u8981\u5c06 Scene \u89c6\u56fe\u4e2d\u7684\u78b0\u649e\u5e73\u9762\u8f85\u52a9\u56fe\u6807\u663e\u793a\u4e3a\u7ebf\u6846\u7f51\u683c\u8fd8\u662f\u5b9e\u4f53\u5e73\u9762\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Scale Plane")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u53ef\u89c6\u5316\u7684\u5e73\u9762\u5927\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Dampen")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u540e\u635f\u5931\u7684\u901f\u5ea6\u6bd4\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Bounce")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u540e\u4ece\u8868\u9762\u53cd\u5f39\u7684\u901f\u5ea6\u6bd4\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Lifetime Loss")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u540e\u635f\u5931\u7684\u603b\u751f\u547d\u5468\u671f\u6bd4\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Min Kill Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u78b0\u649e\u540e\u8fd0\u52a8\u901f\u5ea6\u4f4e\u4e8e\u6b64\u901f\u5ea6\u7684\u7c92\u5b50\u5c06\u4ece\u7cfb\u7edf\u4e2d\u4e88\u4ee5\u79fb\u9664\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Kill Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u78b0\u649e\u540e\u8fd0\u52a8\u901f\u5ea6\u9ad8\u4e8e\u6b64\u901f\u5ea6\u7684\u7c92\u5b50\u5c06\u4ece\u7cfb\u7edf\u4e2d\u4e88\u4ee5\u79fb\u9664\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Radius Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8c03\u6574\u7c92\u5b50\u78b0\u649e\u7403\u4f53\u7684\u534a\u5f84\uff0c\u4f7f\u5176\u66f4\u8d34\u8fd1\u7c92\u5b50\u56fe\u5f62\u7684\u53ef\u89c6\u8fb9\u7f18\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Send Collision Messages")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u542f\u7528\u6b64\u5c5e\u6027\uff0c\u5219\u53ef\u4ece\u811a\u672c\u4e2d\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnParticleCollision.html"},"OnParticleCollision")," \u51fd\u6570\u68c0\u6d4b\u7c92\u5b50\u78b0\u649e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Visualize Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 Scene \u89c6\u56fe\u4e2d\u5c06\u6bcf\u4e2a\u7c92\u5b50\u7684\u78b0\u649e\u8fb9\u754c\u6e32\u67d3\u4e3a\u7ebf\u6846\u5f62\u72b6\u3002")))),(0,l.kt)("h2",{id:"world-module-properties"},"World module properties"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PartSysCollisionInsp2.png",alt:"PartSysCollisionInsp2.png"})),(0,l.kt)("p",null,"For some properties in this section, you can use different modes to set their value. For information on the modes you can use, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/built-in-particle-system/part-sys-usage#%E9%9A%8F%E6%97%B6%E9%97%B4%E6%8E%A8%E7%A7%BB%E8%80%8C%E5%8F%98%E5%8C%96%E7%9A%84%E5%B1%9E%E6%80%A7"},"Varying properties over time"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u5c5e\u6027")," *"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"*\u529f\u80fd")," *"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"World \u5f39\u51fa\u83dc\u5355")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"td"},"World"),"  \u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collision Mode")),(0,l.kt)("td",{parentName:"tr",align:null},"3D \u6216 2D\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Dampen")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u540e\u635f\u5931\u7684\u901f\u5ea6\u6bd4\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Bounce")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u540e\u4ece\u8868\u9762\u53cd\u5f39\u7684\u901f\u5ea6\u6bd4\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Lifetime Loss")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u540e\u635f\u5931\u7684\u603b\u751f\u547d\u5468\u671f\u6bd4\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Min Kill Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u78b0\u649e\u540e\u8fd0\u52a8\u901f\u5ea6\u4f4e\u4e8e\u6b64\u901f\u5ea6\u7684\u7c92\u5b50\u5c06\u4ece\u7cfb\u7edf\u4e2d\u4e88\u4ee5\u79fb\u9664\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Kill Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u78b0\u649e\u540e\u8fd0\u52a8\u901f\u5ea6\u9ad8\u4e8e\u6b64\u901f\u5ea6\u7684\u7c92\u5b50\u5c06\u4ece\u7cfb\u7edf\u4e2d\u4e88\u4ee5\u79fb\u9664\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Radius Scale")),(0,l.kt)("td",{parentName:"tr",align:null},"2D \u6216 3D \u7684\u8bbe\u7f6e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collision Quality")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e0b\u62c9\u9009\u5355\u6765\u8bbe\u7f6e\u7c92\u5b50\u78b0\u649e\u7684\u8d28\u91cf\u3002\u6b64\u8bbe\u7f6e\u4f1a\u5f71\u54cd\u6709\u591a\u5c11\u7c92\u5b50\u53ef\u4ee5\u7a7f\u8fc7\u78b0\u649e\u4f53\u3002\u5728\u8f83\u4f4e\u7684\u8d28\u91cf\u6c34\u5e73\u4e0b\uff0c\u7c92\u5b50\u6709\u65f6\u4f1a\u7a7f\u8fc7\u78b0\u649e\u4f53\uff0c\u4f46\u9700\u8981\u7684\u8ba1\u7b97\u8d44\u6e90\u8f83\u5c11\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0High"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53  ",(0,l.kt)("strong",{parentName:"td"},"Collision Quality"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"td"},"High"),"  \u65f6\uff0c\u78b0\u649e\u59cb\u7ec8\u4f7f\u7528\u7269\u7406\u7cfb\u7edf\u6765\u68c0\u6d4b\u78b0\u649e\u7ed3\u679c\u3002\u6b64\u8bbe\u7f6e\u662f\u6700\u8017\u8d39\u8d44\u6e90\u4f46\u4e5f\u662f\u6700\u51c6\u786e\u7684\u9009\u9879\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Medium (Static Colliders)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53  ",(0,l.kt)("strong",{parentName:"td"},"Collision Quality"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"td"},"Medium (Static Colliders)"),"  \u65f6\uff0c\u78b0\u649e\u4f7f\u7528\u4e00\u7ec4\u4f53\u7d20\u6765\u7f13\u5b58\u5148\u524d\u7684\u78b0\u649e\uff0c\u4ece\u800c\u5728\u4ee5\u540e\u7684\u5e27\u4e2d\u66f4\u5feb\u5730\u91cd\u7528\u3002\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684",(0,l.kt)("a",{parentName:"td",href:"#world-collision-quality"},"\u4e16\u754c\u78b0\u649e"),"\u4ee5\u4e86\u89e3\u4e0e\u6b64\u7f13\u5b58\u76f8\u5173\u7684\u66f4\u591a\u4fe1\u606f\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Medium"),"  \u548c  ",(0,l.kt)("strong",{parentName:"td"},"Low"),"  \u4e4b\u95f4\u7684\u552f\u4e00\u533a\u522b\u662f\u7c92\u5b50\u7cfb\u7edf\u5728\u6bcf\u5e27\u67e5\u8be2\u7269\u7406\u7cfb\u7edf\u7684\u6b21\u6570\u3002 ",(0,l.kt)("strong",{parentName:"td"},"Medium"),"  \u6bcf\u5e27\u7684\u67e5\u8be2\u6b21\u6570\u591a\u4e8e  ",(0,l.kt)("strong",{parentName:"td"},"Low")," \u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u8bf7\u6ce8\u610f\uff0c\u6b64\u8bbe\u7f6e\u4ec5\u9002\u7528\u4e8e\u4ece\u4e0d\u79fb\u52a8\u7684\u9759\u6001\u78b0\u649e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0Low (Static Colliders)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53  ",(0,l.kt)("strong",{parentName:"td"},"Collision Quality"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"td"},"Low (Static Colliders)"),"  \u65f6\uff0c\u78b0\u649e\u4f7f\u7528\u4e00\u7ec4\u4f53\u7d20\u6765\u7f13\u5b58\u5148\u524d\u7684\u78b0\u649e\uff0c\u4ece\u800c\u5728\u4ee5\u540e\u7684\u5e27\u4e2d\u66f4\u5feb\u5730\u91cd\u7528\u3002\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684",(0,l.kt)("a",{parentName:"td",href:"#world-collision-quality"},"\u4e16\u754c\u78b0\u649e"),"\u4ee5\u4e86\u89e3\u4e0e\u6b64\u7f13\u5b58\u76f8\u5173\u7684\u66f4\u591a\u4fe1\u606f\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"Medium"),"  \u548c  ",(0,l.kt)("strong",{parentName:"td"},"Low"),"  \u4e4b\u95f4\u7684\u552f\u4e00\u533a\u522b\u662f\u7c92\u5b50\u7cfb\u7edf\u5728\u6bcf\u5e27\u67e5\u8be2\u7269\u7406\u7cfb\u7edf\u7684\u6b21\u6570\u3002 ",(0,l.kt)("strong",{parentName:"td"},"Medium"),"  \u6bcf\u5e27\u7684\u67e5\u8be2\u6b21\u6570\u591a\u4e8e  ",(0,l.kt)("strong",{parentName:"td"},"Low")," \u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u8bf7\u6ce8\u610f\uff0c\u6b64\u8bbe\u7f6e\u4ec5\u9002\u7528\u4e8e\u4ece\u4e0d\u79fb\u52a8\u7684\u9759\u6001\u78b0\u649e\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collides With")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u53ea\u4f1a\u4e0e\u6240\u9009\u5c42\u4e0a\u7684\u5bf9\u8c61\u53d1\u751f\u78b0\u649e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Max Collision Shapes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7c92\u5b50\u78b0\u649e\u53ef\u5305\u62ec\u7684\u78b0\u649e\u5f62\u72b6\u4e2a\u6570\u3002\u591a\u4f59\u7684\u5f62\u72b6\u5c06\u88ab\u5ffd\u7565\uff0c\u4e14\u5730\u5f62\u4f18\u5148\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Enable Dynamic Colliders")),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic colliders are any collider not configured as Kinematic (see documentation on ",(0,l.kt)("a",{parentName:"td",href:"/docs/physics-overview/colliders-overview"},"colliders")," for further information on collider types). ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Check this option to include these collider types in the set of objects that the particles respond to in collisions. If you uncheck this option, the particles only respond to collisions against static colliders.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Voxel Size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f53\u7d20 (voxel) \u8868\u793a\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u5e38\u89c4\u7f51\u683c\u4e0a\u7684\u503c\u3002\u4f7f\u7528  ",(0,l.kt)("strong",{parentName:"td"},"Medium"),"  \u6216  ",(0,l.kt)("strong",{parentName:"td"},"Low"),"  \u8d28\u91cf\u78b0\u649e\u65f6\uff0cUnity \u4f1a\u5728\u7f51\u683c\u7ed3\u6784\u4e2d\u7f13\u5b58\u78b0\u649e\u3002\u6b64\u8bbe\u7f6e\u63a7\u5236\u7740\u7f51\u683c\u5927\u5c0f\u3002\u8f83\u5c0f\u7684\u503c\u53ef\u63d0\u4f9b\u66f4\u9ad8\u7684\u51c6\u786e\u6027\uff0c\u4f46\u4f1a\u5360\u7528\u66f4\u591a\u5185\u5b58\uff0c\u6548\u7387\u4e5f\u4f1a\u964d\u4f4e\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f")," \uff1a\u4ec5\u5f53  ",(0,l.kt)("strong",{parentName:"td"},"Collision Quality"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"td"},"Medium"),"  \u6216  ",(0,l.kt)("strong",{parentName:"td"},"Low"),"  \u65f6\uff0c\u624d\u80fd\u8bbf\u95ee\u6b64\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Collider Force")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u7c92\u5b50\u78b0\u649e\u540e\u5bf9\u7269\u7406\u78b0\u649e\u4f53\u65bd\u529b\u3002\u8fd9\u5bf9\u4e8e\u7528\u7c92\u5b50\u63a8\u52a8\u78b0\u649e\u4f53\u5f88\u6709\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Multiply by Collision Angle")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5411\u78b0\u649e\u4f53\u65bd\u529b\u65f6\uff0c\u6839\u636e\u7c92\u5b50\u4e0e\u78b0\u649e\u4f53\u4e4b\u95f4\u7684\u78b0\u649e\u89d2\u5ea6\u6765\u7f29\u653e\u529b\u7684\u5f3a\u5ea6\u3002\u63a0\u5c04\u89d2\u5c06\u6bd4\u6b63\u9762\u78b0\u649e\u4ea7\u751f\u66f4\u5c0f\u7684\u529b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Multiply by Particle Speed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5411\u78b0\u649e\u4f53\u65bd\u529b\u65f6\uff0c\u6839\u636e\u7c92\u5b50\u7684\u901f\u5ea6\u6765\u7f29\u653e\u529b\u7684\u5f3a\u5ea6\u3002\u5feb\u901f\u79fb\u52a8\u7684\u7c92\u5b50\u4f1a\u6bd4\u8f83\u6162\u7684\u7c92\u5b50\u4ea7\u751f\u66f4\u5927\u7684\u529b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Multiply by Particle Size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5411\u78b0\u649e\u4f53\u65bd\u529b\u65f6\uff0c\u6839\u636e\u7c92\u5b50\u7684\u5927\u5c0f\u6765\u7f29\u653e\u529b\u7684\u5f3a\u5ea6\u3002\u8f83\u5927\u7684\u7c92\u5b50\u4f1a\u6bd4\u8f83\u5c0f\u7684\u7c92\u5b50\u4ea7\u751f\u66f4\u5927\u7684\u529b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Send Collision Messages")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u9009\u4e2d\u6b64\u590d\u9009\u6846\uff0c\u5219\u5141\u8bb8\u4ece\u811a\u672c\u4e2d\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnParticleCollision.html"},"OnParticleCollision")," \u51fd\u6570\u68c0\u6d4b\u7c92\u5b50\u78b0\u649e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Visualize Bounds")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 Scene \u89c6\u56fe\u4e2d\u9884\u89c8\u6bcf\u4e2a\u7c92\u5b50\u7684\u78b0\u649e\u7403\u4f53\u3002")))),(0,l.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,l.kt)("p",null,"\u5f53\u5176\u4ed6\u5bf9\u8c61\u56f4\u7ed5\u7c92\u5b50\u7cfb\u7edf\u65f6\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u7c92\u5b50\u4e0e\u8fd9\u4e9b\u5bf9\u8c61\u76f8\u4e92\u4f5c\u7528\u624d\u4f1a\u4f7f\u6548\u679c\u66f4\u6709\u8bf4\u670d\u529b\u3002\u4f8b\u5982\uff0c\u6c34\u6216\u788e\u7247\u5e94\u8be5\u88ab\u575a\u56fa\u7684\u5899\u58c1\u963b\u6321\u800c\u975e\u76f4\u63a5\u7a7f\u8fc7\u5899\u58c1\u3002\u542f\u7528  ",(0,l.kt)("strong",{parentName:"p"},"Collision"),"  \u6a21\u5757\u540e\uff0c\u7c92\u5b50\u53ef\u4e0e\u573a\u666f\u4e2d\u7684\u5bf9\u8c61\u53d1\u751f\u78b0\u649e\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ece\u5f39\u51fa\u83dc\u5355\u4e2d\u9009\u62e9  ",(0,l.kt)("strong",{parentName:"p"},"World"),"  \u6a21\u5f0f\uff0c\u53ef\u8bbe\u7f6e\u7c92\u5b50\u7cfb\u7edf\u6765\u4f7f\u5176\u7c92\u5b50\u4e0e\u573a\u666f\u4e2d\u7684\u4efb\u4f55\u78b0\u649e\u4f53\u78b0\u649e\u3002\u6b64\u5916\uff0c\u4e5f\u53ef\u4f7f\u7528  ",(0,l.kt)("strong",{parentName:"p"},"Collides With"),"  \u5c5e\u6027\u6839\u636e\u78b0\u649e\u4f53\u6240\u5728\u7684\u5c42\u6765\u7981\u7528\u78b0\u649e\u4f53\u3002\u5f39\u51fa\u83dc\u5355\u8fd8\u6709\u4e00\u4e2a  ",(0,l.kt)("strong",{parentName:"p"},"Planes"),"  \u6a21\u5f0f\u9009\u9879\uff0c\u53ef\u7528\u4e8e\u5411\u573a\u666f\u4e2d\u6dfb\u52a0\u4e00\u7ec4\u4e0d\u9700\u8981\u78b0\u649e\u4f53\u7684\u5e73\u9762\u3002\u6b64\u9009\u9879\u5bf9\u4e8e\u7b80\u5355\u7684\u5730\u677f\u3001\u5899\u58c1\u548c\u7c7b\u4f3c\u5bf9\u8c61\u975e\u5e38\u6709\u7528\uff0c\u5e76\u4e14\u5904\u7406\u5668\u5f00\u9500\u4f4e\u4e8e  ",(0,l.kt)("strong",{parentName:"p"},"World"),"  \u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u542f\u7528  ",(0,l.kt)("strong",{parentName:"p"},"Planes"),"  \u6a21\u5f0f\u540e\uff0c\u53ef\u901a\u8fc7  ",(0,l.kt)("strong",{parentName:"p"},"Planes"),"  \u5c5e\u6027\u6dfb\u52a0\u4e00\u7ec4\u53d8\u6362\uff08\u901a\u5e38\u4e3a\u7a7a\u6e38\u620f\u5bf9\u8c61\uff09\u3002\u5e73\u9762\u5728\u5bf9\u8c61\u7684\u5c40\u90e8 XZ \u5e73\u9762\u4e2d\u65e0\u9650\u5ef6\u4f38\uff0c\u5176\u4e2d\u4ee5\u6b63 Y \u8f74\u8868\u793a\u5e73\u9762\u7684\u6cd5\u7ebf\u77e2\u91cf\u3002\u4e3a\u4e86\u534f\u52a9\u5f00\u53d1\uff0c\u65e0\u8bba\u5bf9\u8c61\u672c\u8eab\u662f\u5426\u5177\u6709\u4efb\u4f55\u53ef\u89c1\u7684\u7f51\u683c\uff0c\u5e73\u9762\u90fd\u5c06\u5728\u573a\u666f\u4e2d\u663e\u793a\u4e3a\u8f85\u52a9\u56fe\u6807\u3002\u8f85\u52a9\u56fe\u6807\u53ef\u663e\u793a\u4e3a\u7ebf\u6846\u7f51\u683c\u6216\u5b9e\u4f53\u5e73\u9762\uff0c\u4e5f\u53ef\u8fdb\u884c\u7f29\u653e\u3002\u4f46\u662f\uff0c\u7f29\u653e\u4ec5\u9002\u7528\u4e8e\u53ef\u89c6\u5316\uff1b\u78b0\u649e\u5e73\u9762\u672c\u8eab\u5728\u573a\u666f\u4e2d\u65e0\u9650\u5ef6\u4f38\u3002"),(0,l.kt)("p",null,"\u542f\u7528\u78b0\u649e\u540e\uff0c\u7c92\u5b50\u7684\u5927\u5c0f\u6709\u65f6\u4f1a\u6210\u4e3a\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u7684\u56fe\u5f62\u5728\u4e0e\u8868\u9762\u63a5\u89e6\u65f6\u53ef\u80fd\u88ab\u88c1\u526a\u3002\u8fd9\u79cd\u60c5\u51b5\u53ef\u80fd\u5bfc\u81f4\u7c92\u5b50\u5728\u505c\u6b62\u6216\u53cd\u5f39\u4e4b\u524d\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u201c\u4e0b\u6c89\u201d\u5230\u8868\u9762\u4e2d\u3002 ",(0,l.kt)("strong",{parentName:"p"},"Radius Scale"),"  \u5c5e\u6027\u901a\u8fc7\u5b9a\u4e49\u7c92\u5b50\u7684\u8fd1\u4f3c\u5706\u5f62\u534a\u5f84\uff08\u4ee5\u5176\u5b9e\u9645\u5927\u5c0f\u7684\u767e\u5206\u6bd4\u5f62\u5f0f\uff09\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002\u6b64\u5927\u5c0f\u4fe1\u606f\u7528\u4e8e\u9632\u6b62\u88c1\u526a\u5e76\u907f\u514d\u4e0b\u6c89\u6548\u5e94\u3002"),(0,l.kt)("p",null,"\u5f53\u7c92\u5b50\u8868\u793a\u5b9e\u4f53\u5bf9\u8c61\u65f6\uff0c ",(0,l.kt)("strong",{parentName:"p"},"Dampen"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Bounce"),"  \u5c5e\u6027\u975e\u5e38\u6709\u7528\u3002\u4f8b\u5982\uff0c\u783e\u77f3\u5728\u629b\u51fa\u65f6\u5f80\u5f80\u4f1a\u5728\u575a\u786c\u7684\u8868\u9762\u4e0a\u53cd\u5f39\uff0c\u4f46\u662f\u96ea\u7403\u7c92\u5b50\u5728\u78b0\u649e\u65f6\u53ef\u80fd\u4f1a\u5931\u53bb\u901f\u5ea6\u3002 ",(0,l.kt)("strong",{parentName:"p"},"Lifetime Loss"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Min Kill Speed"),"  \u6709\u52a9\u4e8e\u51cf\u5c11\u78b0\u649e\u540e\u6b8b\u7559\u9897\u7c92\u7684\u5f71\u54cd\u3002\u4f8b\u5982\uff0c\u706b\u7403\u5728\u7a7a\u4e2d\u98de\u884c\u65f6\u53ef\u80fd\u4f1a\u6301\u7eed\u51e0\u79d2\u949f\uff0c\u4f46\u5728\u78b0\u649e\u540e\uff0c\u5355\u72ec\u7684\u706b\u7130\u7c92\u5b50\u5e94\u8be5\u5feb\u901f\u6d88\u6563\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86  ",(0,l.kt)("strong",{parentName:"p"},"Send Collision Messages")," \uff0c\u8fd8\u53ef\u4ece\u811a\u672c\u4e2d\u68c0\u6d4b\u7c92\u5b50\u78b0\u649e\u3002\u811a\u672c\u53ef\u9644\u52a0\u5230\u5e26\u6709\u7c92\u5b50\u7cfb\u7edf\u7684\u5bf9\u8c61\uff0c\u4e5f\u53ef\u9644\u52a0\u5230\u5e26\u6709\u78b0\u649e\u4f53\u7684\u5bf9\u8c61\u3002\u901a\u8fc7\u68c0\u6d4b\u78b0\u649e\uff0c\u53ef\u5c06\u7c92\u5b50\u7528\u4f5c\u6e38\u620f\u4e2d\u7684\u6d3b\u52a8\u5bf9\u8c61\uff0c\u4f8b\u5982\u98de\u5f39\u3001\u9b54\u6cd5\u548c\u80fd\u91cf\u5757 (power-up)\u3002\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnParticleCollision.html"},"MonoBehaviour.OnParticleCollision")," \u811a\u672c\u53c2\u8003\u9875\u9762\u4ee5\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u793a\u4f8b\u3002"),(0,l.kt)("h2",{id:"world-collision-quality"},"World Collision Quality"),(0,l.kt)("p",null,"World Collision \u6a21\u5757\u5177\u6709  ",(0,l.kt)("strong",{parentName:"p"},"Collision Quality"),"  \u5c5e\u6027\uff0c\u53ef\u5c06\u5176\u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"High")," \u3001 ",(0,l.kt)("strong",{parentName:"p"},"Medium"),"  \u6216  ",(0,l.kt)("strong",{parentName:"p"},"Low")," \u3002\u5f53  ",(0,l.kt)("strong",{parentName:"p"},"Collision Quality"),"  \u8bbe\u7f6e\u4e3a  ",(0,l.kt)("strong",{parentName:"p"},"Medium (Static Colliders")," ) \u6216  ",(0,l.kt)("strong",{parentName:"p"},"Low (Static Colliders)"),"  \u65f6\uff0c\u78b0\u649e\u4f7f\u7528\u4e00\u7ec4\u4f53\u7d20\uff083D \u7f51\u683c\u4e0a\u7684\u503c\uff09\u6765\u7f13\u5b58\u5148\u524d\u7684\u78b0\u649e\uff0c\u4ece\u800c\u5728\u4ee5\u540e\u7684\u5e27\u4e2d\u5feb\u901f\u91cd\u7528\u3002"),(0,l.kt)("p",null,"\u8be5\u7f13\u5b58\u7531\u6bcf\u4e2a\u4f53\u7d20\u4e2d\u7684\u5e73\u9762\u7ec4\u6210\uff0c\u5176\u4e2d\u7684\u5e73\u9762\u8868\u793a\u8be5\u4f4d\u7f6e\u5904\u7684\u78b0\u649e\u8868\u9762\u3002\u5728\u6bcf\u4e2a\u5e27\u4e0a\uff0cUnity \u90fd\u4f1a\u68c0\u67e5\u7f13\u5b58\u4e2d\u662f\u5426\u6709\u8be5\u7c92\u5b50\u4f4d\u7f6e\u7684\u5e73\u9762\uff0c\u5982\u679c\u6709\uff0c\u5219 Unity \u5c06\u5176\u7528\u4e8e\u78b0\u649e\u68c0\u6d4b\u3002\u5426\u5219\u4f1a\u67e5\u8be2\u7269\u7406\u7cfb\u7edf\u3002\u5982\u679c\u8fd4\u56de\u4e86\u78b0\u649e\uff0c\u5219\u4f1a\u5c06\u5176\u6dfb\u52a0\u5230\u7f13\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u5728\u540e\u7eed\u5e27\u4e0a\u5feb\u901f\u8fdb\u884c\u67e5\u8be2\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u8fd1\u4f3c\u7b97\u6cd5\uff0c\u56e0\u6b64\u53ef\u80fd\u5b58\u5728\u4e00\u4e9b\u7f3a\u5931\u7684\u78b0\u649e\u3002\u53ef\u901a\u8fc7\u51cf\u5c0f Voxel Size \u503c\u6765\u5e2e\u52a9\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1b\u4f46\u662f\uff0c\u8fd9\u6837\u505a\u4f1a\u5360\u7528\u989d\u5916\u7684\u5185\u5b58\uff0c\u6548\u7387\u4e5f\u4f1a\u964d\u4f4e\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"Medium"),"  \u548c  ",(0,l.kt)("strong",{parentName:"p"},"Low"),"  \u4e4b\u95f4\u7684\u552f\u4e00\u533a\u522b\u662f\u5141\u8bb8\u7cfb\u7edf\u5728\u6bcf\u5e27\u67e5\u8be2\u7269\u7406\u7cfb\u7edf\u7684\u6b21\u6570\u3002Low \u6bcf\u5e27\u7684\u67e5\u8be2\u6b21\u6570\u5c11\u4e8e Medium\u3002\u4e00\u65e6\u8d85\u51fa\u6bcf\u5e27\u9884\u7b97\uff0c\u53ea\u80fd\u5c06\u7f13\u5b58\u7528\u4e8e\u6240\u6709\u5176\u4f59\u7c92\u5b50\u3002\u8fd9\u6837\u4e00\u6765\u53ef\u80fd\u5bfc\u81f4\u7f3a\u5931\u7684\u78b0\u649e\u589e\u52a0\uff0c\u76f4\u5230\u66f4\u5168\u9762\u586b\u5145\u7f13\u5b58\u4e3a\u6b62\u3002"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2017\u201305\u201330 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/Manual/30_search.html?q=newin20171"},"2017.1")," \u4e2d\u66f4\u6539\u4e86 Collision \u6a21\u5757\u7684\u529f\u80fd NewIn20171")))}c.isMDXComponent=!0}}]);