"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34343],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45843:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"PartSysLimitVelOverLifeModule",title:"Limit Velocity over Lifetime module",slug:"/particle-system-modules/part-sys-limit-vel-over-life-module"},s="Limit Velocity over Lifetime module",m={unversionedId:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/PartSysLimitVelOverLifeModule",id:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/PartSysLimitVelOverLifeModule",title:"Limit Velocity over Lifetime module",description:"\u6b64\u6a21\u5757\u63a7\u5236\u7c92\u5b50\u7684\u901f\u5ea6\u5728\u5176\u751f\u547d\u5468\u671f\u5185\u5982\u4f55\u964d\u4f4e\u3002",source:"@site/docs/graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/part-sys-limit-vel-over-life-module.md",sourceDirName:"graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules",slug:"/particle-system-modules/part-sys-limit-vel-over-life-module",permalink:"/doc-unity-manual/docs/particle-system-modules/part-sys-limit-vel-over-life-module",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/visual-effects/particle-systems/built-in-particle-system/part-sys-reference/particle-system-modules/part-sys-limit-vel-over-life-module.md",tags:[],version:"current",frontMatter:{id:"PartSysLimitVelOverLifeModule",title:"Limit Velocity over Lifetime module",slug:"/particle-system-modules/part-sys-limit-vel-over-life-module"},sidebar:"tutorialSidebar",previous:{title:"Lights \u6a21\u5757",permalink:"/doc-unity-manual/docs/particle-system-modules/part-sys-lights-module"},next:{title:"Main module",permalink:"/doc-unity-manual/docs/particle-system-modules/part-sys-main-module"}},c={},u=[{value:"Using the Limit Velocity over Lifetime module",id:"using-the-limit-velocity-over-lifetime-module",level:2},{value:"API",id:"api",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u8be6\u7ec6\u4fe1\u606f",id:"\u8be6\u7ec6\u4fe1\u606f",level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limit-velocity-over-lifetime-module"},"Limit Velocity over Lifetime module"),(0,i.kt)("p",null,"\u6b64\u6a21\u5757\u63a7\u5236\u7c92\u5b50\u7684\u901f\u5ea6\u5728\u5176\u751f\u547d\u5468\u671f\u5185\u5982\u4f55\u964d\u4f4e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PartSysLimVelLifeInsp.png",alt:"PartSysLimVelLifeInsp.png"})),(0,i.kt)("h2",{id:"using-the-limit-velocity-over-lifetime-module"},"Using the Limit Velocity over Lifetime module"),(0,i.kt)("p",null,"This module is part of the ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/part-sys-reference/class-particle-system"},"Particle System")," component. When you create a new Particle System GameObject, or add a Particle System component to an exiting GameObject, Unity adds the Limit Velocity over Lifetime module to the Particle System. By default, Unity disables this module. To create a new Particle System and enable this module:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click  ",(0,i.kt)("strong",{parentName:"li"},"GameObject"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Effects"),"  ",">","  ",(0,i.kt)("strong",{parentName:"li"},"Particle System")," ."),(0,i.kt)("li",{parentName:"ol"},"In the Inspector, find the Particle System component."),(0,i.kt)("li",{parentName:"ol"},"In the Particle System component, find the Limit Velocity over Lifetime module fold-out."),(0,i.kt)("li",{parentName:"ol"},"To the left of the fold-out header, enable the checkbox.")),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("p",null,"Since this module is part of the Particle System component, you access it through the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/ParticleSystem.html"},"ParticleSystem")," class. For information on how to access it and change values at runtime, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/ParticleSystem-limitVelocityOverLifetime.html"},"Limit Velocity over Lifetime module API documentation"),"."),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("p",null,"For some properties in this section, you can use different modes to set their value. For information on the modes you can use, see ",(0,i.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/built-in-particle-system/part-sys-usage#%E9%9A%8F%E6%97%B6%E9%97%B4%E6%8E%A8%E7%A7%BB%E8%80%8C%E5%8F%98%E5%8C%96%E7%9A%84%E5%B1%9E%E6%80%A7"},"Varying properties over time"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u5c5e\u6027")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"\u529f\u80fd")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Separate Axes")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5c06\u8f74\u62c6\u5206\u4e3a\u5355\u72ec\u7684 X\u3001Y \u548c Z \u5206\u91cf\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Speed")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7c92\u5b50\u7684\u901f\u5ea6\u9650\u5236\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Space")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u901f\u5ea6\u9650\u5236\u662f\u9002\u7528\u5c40\u90e8\u7a7a\u95f4\u8fd8\u662f\u4e16\u754c\u7a7a\u95f4\u3002\u4ec5\u5f53\u542f\u7528\u4e86  ",(0,i.kt)("strong",{parentName:"td"},"Separate Axes"),"  \u65f6\uff0c\u6b64\u9009\u9879\u624d\u53ef\u7528\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Dampen")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u7c92\u5b50\u901f\u5ea6\u8d85\u8fc7\u901f\u5ea6\u9650\u5236\u65f6\uff0c\u7c92\u5b50\u901f\u5ea6\u964d\u4f4e\u7684\u6bd4\u4f8b\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Drag")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u7c92\u5b50\u901f\u5ea6\u65bd\u52a0\u7ebf\u6027\u963b\u529b\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Multiply by Size")),(0,i.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u5c5e\u6027\u540e\uff0c\u8f83\u5927\u7684\u7c92\u5b50\u4f1a\u66f4\u5927\u7a0b\u5ea6\u4e0a\u53d7\u5230\u963b\u529b\u7cfb\u6570\u7684\u5f71\u54cd\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Multiply by Velocity")),(0,i.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u6b64\u5c5e\u6027\u540e\uff0c\u8f83\u5feb\u7684\u7c92\u5b50\u4f1a\u66f4\u5927\u7a0b\u5ea6\u4e0a\u53d7\u5230\u963b\u529b\u7cfb\u6570\u7684\u5f71\u54cd\u3002")))),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u4fe1\u606f"},"\u8be6\u7ec6\u4fe1\u606f"),(0,i.kt)("p",null,"\u8be5\u6a21\u5757\u975e\u5e38\u9002\u5408\u7528\u4e8e\u6a21\u62df\u4f1a\u51cf\u6162\u7c92\u5b50\u901f\u5ea6\u7684\u7a7a\u6c14\u963b\u529b\uff0c\u7279\u522b\u662f\u5728\u4f7f\u7528\u4e0b\u964d\u66f2\u7ebf\u968f\u65f6\u95f4\u63a8\u79fb\u800c\u964d\u4f4e\u901f\u5ea6\u9650\u5236\u7684\u60c5\u51b5\u4e0b\u3002\u4f8b\u5982\uff0c\u7206\u70b8\u6216\u70df\u82b1\u6700\u521d\u4ee5\u6781\u5feb\u7684\u901f\u5ea6\u7206\u53d1\uff0c\u4f46\u662f\u53d1\u5c04\u7684\u7c92\u5b50\u5728\u7a7f\u8fc7\u7a7a\u6c14\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u8fc5\u901f\u51cf\u901f\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Drag"),"  \u9009\u9879\u901a\u8fc7\u63d0\u4f9b\u57fa\u4e8e\u7c92\u5b50\u5927\u5c0f\u548c\u901f\u5ea6\u65bd\u52a0\u4e0d\u540c\u963b\u529b\u7684\u9009\u9879\uff0c\u63d0\u4f9b\u5728\u7269\u7406\u4e0a\u66f4\u52a0\u7cbe\u786e\u7684\u7a7a\u6c14\u963b\u529b\u6a21\u62df\u3002"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2017\u201309\u201305 \u9875\u9762\u5df2\u4fee\u8ba2"),(0,i.kt)("li",{parentName:"ul"},"\u5728 Unity ",(0,i.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2017.2/Documentation/Manual/30_search.html?q=newin20172"},"2017.2")," \u4e2d\u6dfb\u52a0\u4e86 Drag\u3001Multiply by Size \u548c Multiply by Velocity NewIn20172")))}d.isMDXComponent=!0}}]);