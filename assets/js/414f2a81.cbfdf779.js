"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={id:"EventFunctions",title:"\u4e8b\u4ef6\u51fd\u6570",slug:"/scripting-concepts/event-functions"},p="\u4e8b\u4ef6\u51fd\u6570",s={unversionedId:"scripting-section/scripting-concepts/EventFunctions",id:"scripting-section/scripting-concepts/EventFunctions",title:"\u4e8b\u4ef6\u51fd\u6570",description:"Unity \u4e2d\u7684\u811a\u672c\u4e0e\u4f20\u7edf\u7684\u7a0b\u5e8f\u6982\u5ff5\u4e0d\u540c\u3002\u5728\u4f20\u7edf\u7a0b\u5e8f\u4e2d\uff0c\u4ee3\u7801\u5728\u5faa\u73af\u4e2d\u8fde\u7eed\u8fd0\u884c\uff0c\u76f4\u5230\u5b8c\u6210\u4efb\u52a1\u3002\u76f8\u53cd\uff0cUnity \u901a\u8fc7\u8c03\u7528\u5728\u811a\u672c\u4e2d\u58f0\u660e\u7684\u67d0\u4e9b\u51fd\u6570\u6765\u95f4\u6b47\u5730\u5c06\u63a7\u5236\u6743\u4ea4\u7ed9\u811a\u672c\u3002\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u63a7\u5236\u6743\u5c06\u4ea4\u56de Unity\u3002\u8fd9\u4e9b\u51fd\u6570\u7531 Unity \u6fc0\u6d3b\u4ee5\u54cd\u5e94\u6e38\u620f\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u56e0\u6b64\u79f0\u4e3a\u4e8b\u4ef6\u51fd\u6570\u3002Unity \u4f7f\u7528\u4e00\u79cd\u547d\u540d\u65b9\u6848\u6765\u6807\u8bc6\u8981\u5bf9\u7279\u5b9a\u4e8b\u4ef6\u8c03\u7528\u7684\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u5148\u524d\u4ecb\u7ecd\u8fc7\u7684 Update \u51fd\u6570\uff08\u5728\u5e27\u66f4\u65b0\u53d1\u751f\u4e4b\u524d\u8c03\u7528\uff09\u548c Start \u51fd\u6570\uff08\u5728\u5bf9\u8c61\u7684\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d\u7acb\u5373\u8c03\u7528\uff09\u3002Unity \u4e2d\u63d0\u4f9b\u4e86\u5927\u91cf\u5176\u4ed6\u4e8b\u4ef6\u51fd\u6570\uff1b\u53ef\u5728 MonoBehaviour \u7c7b\u7684\u811a\u672c\u53c2\u8003\u9875\u9762\u4e2d\u627e\u5230\u4e8b\u4ef6\u51fd\u6570\u7684\u5b8c\u6574\u5217\u8868\u4ee5\u53ca\u8be6\u7ec6\u7684\u4e8b\u4ef6\u51fd\u6570\u7528\u6cd5\u8bf4\u660e\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u6700\u5e38\u89c1\u548c\u6700\u91cd\u8981\u7684\u4e8b\u4ef6\u3002",source:"@site/docs/scripting-section/scripting-concepts/event-functions.md",sourceDirName:"scripting-section/scripting-concepts",slug:"/scripting-concepts/event-functions",permalink:"/doc-unity-manual/docs/scripting-concepts/event-functions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripting-section/scripting-concepts/event-functions.md",tags:[],version:"current",frontMatter:{id:"EventFunctions",title:"\u4e8b\u4ef6\u51fd\u6570",slug:"/scripting-concepts/event-functions"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u548c\u4f7f\u7528\u811a\u672c",permalink:"/doc-unity-manual/docs/scripting-concepts/creating-and-using-scripts"},next:{title:"\u4e8b\u4ef6\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f",permalink:"/doc-unity-manual/docs/scripting-concepts/execution-order"}},u={},l=[{value:"\u5e38\u89c4\u66f4\u65b0\u4e8b\u4ef6",id:"\u5e38\u89c4\u66f4\u65b0\u4e8b\u4ef6",level:2},{value:"\u521d\u59cb\u5316\u4e8b\u4ef6",id:"\u521d\u59cb\u5316\u4e8b\u4ef6",level:2},{value:"GUI \u4e8b\u4ef6",id:"gui-\u4e8b\u4ef6",level:2},{value:"\u7269\u7406\u4e8b\u4ef6",id:"\u7269\u7406\u4e8b\u4ef6",level:2}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e8b\u4ef6\u51fd\u6570"},"\u4e8b\u4ef6\u51fd\u6570"),(0,i.kt)("p",null,"Unity \u4e2d\u7684\u811a\u672c\u4e0e\u4f20\u7edf\u7684\u7a0b\u5e8f\u6982\u5ff5\u4e0d\u540c\u3002\u5728\u4f20\u7edf\u7a0b\u5e8f\u4e2d\uff0c\u4ee3\u7801\u5728\u5faa\u73af\u4e2d\u8fde\u7eed\u8fd0\u884c\uff0c\u76f4\u5230\u5b8c\u6210\u4efb\u52a1\u3002\u76f8\u53cd\uff0cUnity \u901a\u8fc7\u8c03\u7528\u5728\u811a\u672c\u4e2d\u58f0\u660e\u7684\u67d0\u4e9b\u51fd\u6570\u6765\u95f4\u6b47\u5730\u5c06\u63a7\u5236\u6743\u4ea4\u7ed9\u811a\u672c\u3002\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u63a7\u5236\u6743\u5c06\u4ea4\u56de Unity\u3002\u8fd9\u4e9b\u51fd\u6570\u7531 Unity \u6fc0\u6d3b\u4ee5\u54cd\u5e94\u6e38\u620f\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u56e0\u6b64\u79f0\u4e3a\u4e8b\u4ef6\u51fd\u6570\u3002Unity \u4f7f\u7528\u4e00\u79cd\u547d\u540d\u65b9\u6848\u6765\u6807\u8bc6\u8981\u5bf9\u7279\u5b9a\u4e8b\u4ef6\u8c03\u7528\u7684\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u5148\u524d\u4ecb\u7ecd\u8fc7\u7684 Update \u51fd\u6570\uff08\u5728\u5e27\u66f4\u65b0\u53d1\u751f\u4e4b\u524d\u8c03\u7528\uff09\u548c Start \u51fd\u6570\uff08\u5728\u5bf9\u8c61\u7684\u7b2c\u4e00\u6b21\u5e27\u66f4\u65b0\u4e4b\u524d\u7acb\u5373\u8c03\u7528\uff09\u3002Unity \u4e2d\u63d0\u4f9b\u4e86\u5927\u91cf\u5176\u4ed6\u4e8b\u4ef6\u51fd\u6570\uff1b\u53ef\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.html"},"MonoBehaviour")," \u7c7b\u7684\u811a\u672c\u53c2\u8003\u9875\u9762\u4e2d\u627e\u5230\u4e8b\u4ef6\u51fd\u6570\u7684\u5b8c\u6574\u5217\u8868\u4ee5\u53ca\u8be6\u7ec6\u7684\u4e8b\u4ef6\u51fd\u6570\u7528\u6cd5\u8bf4\u660e\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u6700\u5e38\u89c1\u548c\u6700\u91cd\u8981\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u5e38\u89c4\u66f4\u65b0\u4e8b\u4ef6"},"\u5e38\u89c4\u66f4\u65b0\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u6e38\u620f\u5f88\u50cf\u52a8\u753b\uff0c\u5176\u4e2d\u7684\u52a8\u753b\u5e27\u662f\u52a8\u6001\u751f\u6210\u7684\u3002\u6e38\u620f\u7f16\u7a0b\u4e2d\u7684\u4e00\u4e2a\u5173\u952e\u6982\u5ff5\u662f\u5728\u6e32\u67d3\u6bcf\u5e27\u4e4b\u524d\u6539\u53d8\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u3001\u72b6\u6001\u548c\u884c\u4e3a\u3002",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.Update.html"},"Update")," \u51fd\u6570\u662f Unity \u4e2d\u5305\u542b\u8fd9\u79cd\u4ee3\u7801\u7684\u4e3b\u8981\u4f4d\u7f6e\u3002\u5728\u6e32\u67d3\u5e27\u4e4b\u524d\u4ee5\u53ca\u8ba1\u7b97\u52a8\u753b\u4e4b\u524d\u90fd\u4f1a\u8c03\u7528 Update \u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'void Update() {\n    float distance = speed * Time.deltaTime * Input.GetAxis("Horizontal");\n    transform.Translate(Vector3.right * distance);\n}\n\n')),(0,i.kt)("p",null,"\u7269\u7406\u5f15\u64ce\u4e5f\u91c7\u7528\u4e0e\u5e27\u6e32\u67d3\u7c7b\u4f3c\u7684\u65b9\u5f0f\u4ee5\u79bb\u6563\u65f6\u95f4\u6b65\u9aa4\u8fdb\u884c\u66f4\u65b0\u3002\u5728\u6bcf\u6b21\u7269\u7406\u66f4\u65b0\u4e4b\u524d\u90fd\u4f1a\u8c03\u7528\u4e00\u4e2a\u79f0\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.FixedUpdate.html"},"FixedUpdate")," \u7684\u5355\u72ec\u4e8b\u4ef6\u51fd\u6570\u3002\u7531\u4e8e\u7269\u7406\u66f4\u65b0\u548c\u5e27\u66f4\u65b0\u4e0d\u4f1a\u4ee5\u76f8\u540c\u9891\u7387\u8fdb\u884c\uff0c\u6240\u4ee5\u5982\u679c\u5c06\u7269\u7406\u4ee3\u7801\u653e\u5728 FixedUpdate \u51fd\u6570\u800c\u4e0d\u662f Update \u4e2d\uff0c\u6b64\u4ee3\u7801\u5c06\u4ea7\u751f\u66f4\u51c6\u786e\u7684\u7ed3\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'void FixedUpdate() {\n    Vector3 force = transform.forward * driveForce * Input.GetAxis("Vertical");\n    rigidbody.AddForce(force);\n}\n\n')),(0,i.kt)("p",null,"\u4e3a\u573a\u666f\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\u8c03\u7528 Update \u548c FixedUpdate \u51fd\u6570\u4e4b\u540e\u4ee5\u53ca\u8ba1\u7b97\u6240\u6709\u52a8\u753b\u4e4b\u540e\uff0c\u5982\u679c\u80fd\u8fdb\u884c\u5176\u4ed6\u66f4\u6539\uff0c\u4e5f\u4f1a\u5f88\u6709\u7528\u3002\u4e00\u4e2a\u4f8b\u5b50\u662f\u6444\u50cf\u673a\u5e94\u8be5\u805a\u7126\u4e8e\u76ee\u6807\u5bf9\u8c61\uff1b\u5fc5\u987b\u5728\u76ee\u6807\u5bf9\u8c61\u79fb\u52a8\u540e\u624d\u80fd\u8c03\u6574\u6444\u50cf\u673a\u7684\u65b9\u5411\u3002\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f\u811a\u672c\u4ee3\u7801\u5e94\u8be5\u8986\u76d6\u52a8\u753b\u7684\u6548\u679c\uff08\u4f8b\u5982\uff0c\u8ba9\u89d2\u8272\u7684\u5934\u90e8\u770b\u5411\u573a\u666f\u4e2d\u7684\u76ee\u6807\u5bf9\u8c61\uff09\u3002\u53ef\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.LateUpdate.html"},"LateUpdate")," \u51fd\u6570\u6765\u5904\u7406\u8fd9\u4e9b\u7c7b\u578b\u7684\u60c5\u51b5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void LateUpdate() {\n    Camera.main.transform.LookAt(target.transform);\n}\n\n")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u4e8b\u4ef6"},"\u521d\u59cb\u5316\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u80fd\u5728\u6e38\u620f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u4efb\u4f55\u66f4\u65b0\u4e4b\u524d\u8c03\u7528\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u901a\u5e38\u4f1a\u5f88\u6709\u7528\u3002\u5728\u7b2c\u4e00\u5e27\u4e4b\u524d\u6216\u5f00\u59cb\u5bf9\u8c61\u7684\u7269\u7406\u66f4\u65b0\u4e4b\u524d\u9700\u8981\u8c03\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.Start.html"},"Start")," \u51fd\u6570\u3002\u573a\u666f\u52a0\u8f7d\u65f6\u4f1a\u4e3a\u573a\u666f\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u8c03\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.Awake.html"},"Awake")," \u51fd\u6570\u3002\u8bf7\u6ce8\u610f\uff0c\u867d\u7136\u5404\u79cd\u5bf9\u8c61\u7684 Start \u548c Awake \u51fd\u6570\u7684\u8c03\u7528\u987a\u5e8f\u662f\u4efb\u610f\u7684\uff0c\u4f46\u5728\u8c03\u7528\u7b2c\u4e00\u4e2a Start \u4e4b\u524d\uff0c\u6240\u6709 Awake \u90fd\u8981\u5b8c\u6210\u3002\u8fd9\u610f\u5473\u7740 Start \u51fd\u6570\u4e2d\u7684\u4ee3\u7801\u53ef\u4ee5\u5229\u7528\u5148\u524d\u5728 Awake \u9636\u6bb5\u6267\u884c\u7684\u5176\u4ed6\u521d\u59cb\u5316\u3002"),(0,i.kt)("h2",{id:"gui-\u4e8b\u4ef6"},"GUI \u4e8b\u4ef6"),(0,i.kt)("p",null,"Unity \u6709\u4e00\u4e2a\u7cfb\u7edf\u7528\u4e8e\u6e32\u67d3\u573a\u666f\u4e2d\u4e3b\u8981\u64cd\u4f5c\u7684 GUI \u63a7\u4ef6\uff0c\u5e76\u54cd\u5e94\u5bf9\u8fd9\u4e9b\u63a7\u4ef6\u7684\u70b9\u51fb\u3002\u6b64\u4ee3\u7801\u7684\u5904\u7406\u65b9\u5f0f\u4e0e\u6b63\u5e38\u7684\u5e27\u66f4\u65b0\u6709\u4e9b\u4e0d\u540c\uff0c\u56e0\u6b64\u5e94\u5c06\u6b64\u4ee3\u7801\u7f6e\u4e8e\u5b9a\u671f\u8c03\u7528\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnGUI.html"},"OnGUI")," \u51fd\u6570\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'void OnGUI() {\n    GUI.Label(labelRect, "Game Over");\n}\n\n')),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u68c0\u6d4b\u573a\u666f\u4e2d\u51fa\u73b0\u7684\u6e38\u620f\u5bf9\u8c61\u4e0a\u53d1\u751f\u7684\u9f20\u6807\u4e8b\u4ef6\u3002\u4f7f\u7528\u6b64\u529f\u80fd\u53ef\u4ee5\u5b9a\u4f4d\u6b66\u5668\u6216\u663e\u793a\u5f53\u524d\u5728\u9f20\u6807\u6307\u9488\u4e0b\u7684\u89d2\u8272\u7684\u76f8\u5173\u4fe1\u606f\u3002\u501f\u52a9\u4e00\u7cfb\u5217 OnMouseXXX \u4e8b\u4ef6\u51fd\u6570\uff08\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnMouseOver.html"},"OnMouseOver"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnMouseDown.html"},"OnMouseDown"),"\uff09\u53ef\u4ee5\u8ba9\u811a\u672c\u5bf9\u7528\u6237\u7684\u9f20\u6807\u64cd\u4f5c\u505a\u51fa\u53cd\u5e94\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6307\u9488\u4f4d\u4e8e\u7279\u5b9a\u5bf9\u8c61\u4e0a\u65f6\u6309\u4e0b\u9f20\u6807\u6309\u94ae\uff0c\u5219\u4f1a\u8c03\u7528\u8be5\u5bf9\u8c61\u7684\u811a\u672c\uff08\u5982\u679c\u5b58\u5728\uff09\u4e2d\u7684 OnMouseDown \u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"\u7269\u7406\u4e8b\u4ef6"},"\u7269\u7406\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u7269\u7406\u5f15\u64ce\u5c06\u901a\u8fc7\u8c03\u7528\u8be5\u5bf9\u8c61\u7684\u811a\u672c\u4e0a\u7684\u4e8b\u4ef6\u51fd\u6570\u6765\u62a5\u544a\u5bf9\u8c61\u7684\u78b0\u649e\u60c5\u51b5\u3002\u5728\u8fdb\u884c\u63a5\u89e6\u3001\u4fdd\u6301\u63a5\u89e6\u548c\u4e2d\u65ad\u63a5\u89e6\u65f6\uff0c\u5c06\u8c03\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnCollisionEnter.html"},"OnCollisionEnter"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnCollisionStay.html"},"OnCollisionStay")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnCollisionExit.html"},"OnCollisionExit")," \u51fd\u6570\u3002\u5bf9\u8c61\u7684\u78b0\u649e\u4f53\u914d\u7f6e\u4e3a\u89e6\u53d1\u5668\uff08\u5373\uff0c\u78b0\u649e\u4f53\u53ea\u68c0\u6d4b\u67d0\u7269\u4f55\u65f6\u8fdb\u5165\u800c\u4e0d\u8fdb\u884c\u7269\u7406\u53cd\u5e94\uff09\u65f6\uff0c\u5c06\u8c03\u7528\u76f8\u5e94\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnTriggerEnter.html"},"OnTriggerEnter"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnTriggerStay.html"},"OnTriggerStay")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.OnTriggerExit.html"},"OnTriggerExit")," \u51fd\u6570\u3002\u5982\u679c\u5728\u7269\u7406\u66f4\u65b0\u671f\u95f4\u68c0\u6d4b\u5230\u591a\u6b21\u63a5\u89e6\uff0c\u53ef\u80fd\u8fde\u7eed\u591a\u6b21\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\uff0c\u56e0\u6b64\u4f1a\u5c06\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\uff0c\u4ece\u800c\u63d0\u4f9b\u78b0\u649e\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u4f4d\u7f6e\u3001\u8fdb\u5165\u5bf9\u8c61\u6807\u8bc6\u7b49\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'void OnCollisionEnter(otherObj: Collision) {\n    if (otherObj.tag == "Arrow") {\n        ApplyDamage(10);\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);