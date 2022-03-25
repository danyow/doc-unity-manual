"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66920],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,g=f["".concat(c,".").concat(u)]||f[u]||p[u]||o;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62231:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"class-AreaEffector2D",title:"Area Effector 2D",slug:"/effectors2d/class-area-effector2d"},c="Area Effector 2D",s={unversionedId:"unity2d/physics2dreference/effectors2d/class-AreaEffector2D",id:"unity2d/physics2dreference/effectors2d/class-AreaEffector2D",title:"Area Effector 2D",description:"The Area Effector 2D applies forces within an area defined by the attached Collider 2Ds when another (target) Collider 2D comes into contact with the Effector 2D. You can configure the force at any angle with a specific magnitude and random variation on that magnitude. You can also apply both linear and angular drag forces to slow down Rigidbody 2Ds.",source:"@site/docs/unity2d/physics2dreference/effectors2d/class-area-effector2d.md",sourceDirName:"unity2d/physics2dreference/effectors2d",slug:"/effectors2d/class-area-effector2d",permalink:"/doc-unity-manual/docs/effectors2d/class-area-effector2d",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/physics2dreference/effectors2d/class-area-effector2d.md",tags:[],version:"current",frontMatter:{id:"class-AreaEffector2D",title:"Area Effector 2D",slug:"/effectors2d/class-area-effector2d"},sidebar:"tutorialSidebar",previous:{title:"2D \u6548\u5e94\u5668",permalink:"/doc-unity-manual/docs/effectors2d"},next:{title:"2D \u6d6e\u529b\u6548\u5e94\u5668 (Buoyancy Effector 2D)",permalink:"/doc-unity-manual/docs/effectors2d/class-buoyancy-effector2d"}},d={},p=[{value:"Properties",id:"properties",level:2}],f={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"area-effector-2d"},"Area Effector 2D"),(0,o.kt)("p",null,"The Area Effector 2D applies forces within an area defined by the attached Collider 2Ds when another (target) Collider 2D comes into contact with the Effector 2D. You can configure the force at any angle with a specific magnitude and random variation on that magnitude. You can also apply both linear and angular drag forces to slow down Rigidbody 2Ds."),(0,o.kt)("p",null,"Collider 2Ds that you use with the Area Effector 2D would typically be set as triggers, so that other Collider 2Ds can overlap with it to have forces applied. Non-triggers will still work, but forces will only be applied when Collider 2Ds come into contact with them."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/AreaEffector2DInspector.png",alt:"The Area Effector 2D Inspector"})),(0,o.kt)("p",null,"The Area Effector 2D Inspector"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"*Property:")," *"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"*Function:")," *"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Use Collider Mask")),(0,o.kt)("td",{parentName:"tr",align:null},"Check to enable use of the  ",(0,o.kt)("strong",{parentName:"td"},"Collider Mask"),"  property? If this is not enabled, the Global Collision Matrix will be used as the default for all Collider 2Ds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Collider Mask")),(0,o.kt)("td",{parentName:"tr",align:null},"The mask used to select specific Layers allowed to interact with the Area Effector 2D.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Use Global Angle")),(0,o.kt)("td",{parentName:"tr",align:null},"Check this to define the  ",(0,o.kt)("strong",{parentName:"td"},"Force Angle"),"  as a global (world-space) angle. If this is not checked, the  ",(0,o.kt)("strong",{parentName:"td"},"Force Angle"),"  is considered a local angle by the physics engine.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Force Angle")),(0,o.kt)("td",{parentName:"tr",align:null},"The angle of the force to be applied.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Force Magnitude")),(0,o.kt)("td",{parentName:"tr",align:null},"The magnitude of the force to be applied.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Force Variation")),(0,o.kt)("td",{parentName:"tr",align:null},"The variation of the magnitude of the force to be applied.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Drag")),(0,o.kt)("td",{parentName:"tr",align:null},"The linear drag to apply to Rigidbody 2Ds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Angular Drag")),(0,o.kt)("td",{parentName:"tr",align:null},"The angular drag to apply to Rigidbody 2Ds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Force Target")),(0,o.kt)("td",{parentName:"tr",align:null},"The point on a target GameObject where the Area Effector 2D applies any force.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Collider"),(0,o.kt)("td",{parentName:"tr",align:null},"The target point is defined as the current position of the Collider 2D. Applying force here can generate torque (rotation) if the Collider 2D isn\u2019t positioned at the center of mass.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Rigidbody"),(0,o.kt)("td",{parentName:"tr",align:null},"The target point is defined as the current center-of-mass of the Rigidbody 2D. Applying force here will never generate torque (rotation).")))))}u.isMDXComponent=!0}}]);