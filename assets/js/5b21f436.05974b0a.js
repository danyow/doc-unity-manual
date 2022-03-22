"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38257],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,s(s({ref:e},p),{},{components:n})):r.createElement(k,s({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52973:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"class-PositionConstraint",title:"\u4f4d\u7f6e\u7ea6\u675f (Position Constraints)",slug:"/constraints/class-position-constraint"},c="\u4f4d\u7f6e\u7ea6\u675f (Position Constraints)",l={unversionedId:"unity-overview/creating-gameplay/constraints/class-PositionConstraint",id:"unity-overview/creating-gameplay/constraints/class-PositionConstraint",title:"\u4f4d\u7f6e\u7ea6\u675f (Position Constraints)",description:"Position Constraint \u7ec4\u4ef6\u79fb\u52a8\u6e38\u620f\u5bf9\u8c61\u6765\u8ddf\u968f\u5176\u6e90\u6e38\u620f\u5bf9\u8c61\u3002",source:"@site/docs/unity-overview/creating-gameplay/constraints/class-position-constraint.md",sourceDirName:"unity-overview/creating-gameplay/constraints",slug:"/constraints/class-position-constraint",permalink:"/docs/constraints/class-position-constraint",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/creating-gameplay/constraints/class-position-constraint.md",tags:[],version:"current",frontMatter:{id:"class-PositionConstraint",title:"\u4f4d\u7f6e\u7ea6\u675f (Position Constraints)",slug:"/constraints/class-position-constraint"},sidebar:"tutorialSidebar",previous:{title:"\u7236\u7ea6\u675f (Parent Constraints)",permalink:"/docs/constraints/class-parent-constraint"},next:{title:"\u65cb\u8f6c\u7ea6\u675f (Rotation Constraints)",permalink:"/docs/constraints/class-rotation-constraint"}},p={},u=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f4d\u7f6e\u7ea6\u675f-position-constraints"},"\u4f4d\u7f6e\u7ea6\u675f (Position Constraints)"),(0,o.kt)("p",null,"Position Constraint \u7ec4\u4ef6\u79fb\u52a8\u6e38\u620f\u5bf9\u8c61\u6765\u8ddf\u968f\u5176\u6e90\u6e38\u620f\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/PositionConstraint.png",alt:"Position Constraint \u7ec4\u4ef6"})),(0,o.kt)("p",null,"Position Constraint \u7ec4\u4ef6"),(0,o.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Property:")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Function:")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Activate")),(0,o.kt)("td",{parentName:"tr",align:null},"After you position the constrained GameObject and its source GameObjects, click  ",(0,o.kt)("strong",{parentName:"td"},"Activate"),"  to save this information.  ",(0,o.kt)("strong",{parentName:"td"},"Activate"),"  saves the current offset from the source GameObjects in  ",(0,o.kt)("strong",{parentName:"td"},"Position At Rest"),"  and  ",(0,o.kt)("strong",{parentName:"td"},"Position Offset")," , then checks  ",(0,o.kt)("strong",{parentName:"td"},"Is Active"),"  and  ",(0,o.kt)("strong",{parentName:"td"},"Lock")," .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Zero")),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the position of the constrained GameObject to the source GameObjects.  ",(0,o.kt)("strong",{parentName:"td"},"Zero"),"  resets the  ",(0,o.kt)("strong",{parentName:"td"},"Position At Rest"),"  and  ",(0,o.kt)("strong",{parentName:"td"},"Position Offset"),"  fields, then checks  ",(0,o.kt)("strong",{parentName:"td"},"Is Active"),"  and  ",(0,o.kt)("strong",{parentName:"td"},"Lock")," .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Is Active")),(0,o.kt)("td",{parentName:"tr",align:null},"Toggles whether or not to evaluate the Constraint. To also apply the Constraint, make sure  ",(0,o.kt)("strong",{parentName:"td"},"Lock"),"  is checked.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Weight")),(0,o.kt)("td",{parentName:"tr",align:null},"The strength of the Constraint. A weight of 1 causes the Constraint to move this GameObject at the same rate as its source GameObjects. A weight of 0 removes the effect of the Constraint completely. This weight affects all source GameObjects. Each GameObject in the  ",(0,o.kt)("strong",{parentName:"td"},"Sources"),"  list also has a weight.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Constraint Settings")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Lock"),(0,o.kt)("td",{parentName:"tr",align:null},"Toggle to let the Constraint move the GameObject. Uncheck this property to edit the position of this GameObject. You can also edit the  ",(0,o.kt)("strong",{parentName:"td"},"Position At Rest"),"  and  ",(0,o.kt)("strong",{parentName:"td"},"Position Offset"),"  properties. If  ",(0,o.kt)("strong",{parentName:"td"},"Is Active"),"  is checked, the Constraint updates the  ",(0,o.kt)("strong",{parentName:"td"},"At Rest"),"  or  ",(0,o.kt)("strong",{parentName:"td"},"Offset"),"  properties for you as you move the GameObject or its Source GameObjects. When you are satisfied with your changes, check  ",(0,o.kt)("strong",{parentName:"td"},"Lock"),"  to let the Constraint control this GameObject. This property has no effect in Play Mode.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Position At Rest"),(0,o.kt)("td",{parentName:"tr",align:null},"The X, Y, and Z values to use when  ",(0,o.kt)("strong",{parentName:"td"},"Weight"),"  is 0 or when the corresponding  ",(0,o.kt)("strong",{parentName:"td"},"Freeze Position Axes"),"  is not checked. To edit these fields, uncheck  ",(0,o.kt)("strong",{parentName:"td"},"Lock")," .")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Position Offset"),(0,o.kt)("td",{parentName:"tr",align:null},"The X, Y, and Z offset from the Transform that is imposed by the Constraint. To edit these fields, uncheck Lock.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-> Freeze Position Axes"),(0,o.kt)("td",{parentName:"tr",align:null},"Check X, Y, or Z to allow the Constraint to control the corresponding axes. Uncheck an axis to stop the Constraint from controlling it. This allows you to edit, animate, or script the unfrozen axis.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Sources")),(0,o.kt)("td",{parentName:"tr",align:null},"The list of GameObjects that constrain this GameObject. Each source has a weight from 0 to 1.")))),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2018\u201303\u201313 \u9875\u9762\u5df2\u53d1\u5e03"),(0,o.kt)("li",{parentName:"ul"},"\u5728 2018.1 \u7248\u4e2d\u6dfb\u52a0\u4e86\u201c\u7ea6\u675f\u201d")))}d.isMDXComponent=!0}}]);