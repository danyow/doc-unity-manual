"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27211],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=u(r),y=a,f=l["".concat(s,".").concat(y)]||l[y]||p[y]||o;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},57819:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={id:"CameraRays",title:"\u6444\u50cf\u673a\u5c04\u7ebf",slug:"/camera-tricks/camera-rays"},s="\u6444\u50cf\u673a\u5c04\u7ebf",u={unversionedId:"graphics/cameras-overview/camera-tricks/CameraRays",id:"graphics/cameras-overview/camera-tricks/CameraRays",title:"\u6444\u50cf\u673a\u5c04\u7ebf",description:"\u4e86\u89e3\u89c6\u9525\u4f53\u90e8\u5206\u8bf4\u660e\u4e86\u6444\u50cf\u673a\u89c6\u56fe\u4e2d\u7684\u4efb\u4f55\u4e00\u70b9\u90fd\u5bf9\u5e94\u4e8e\u4e16\u754c\u7a7a\u95f4\u4e2d\u7684\u4e00\u6761\u7ebf\u3002\u6709\u65f6\u4f7f\u7528\u8fd9\u6761\u7ebf\u7684\u6570\u5b66\u8868\u793a\u5f62\u5f0f\u662f\u6709\u7528\u7684\uff0cUnity \u80fd\u591f\u4ee5 Ray \u5bf9\u8c61\u7684\u5f62\u5f0f\u63d0\u4f9b\u8be5\u8868\u793a\u5f62\u5f0f\u3002Ray \u59cb\u7ec8\u5bf9\u5e94\u4e8e\u89c6\u56fe\u4e2d\u7684\u4e00\u4e2a\u70b9\uff0c\u56e0\u6b64 Camera \u7c7b\u63d0\u4f9b ScreenPointToRay \u548c ViewportPointToRay \u51fd\u6570\u3002\u4e24\u8005\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e ScreenPointToRay \u671f\u671b\u4ee5\u50cf\u7d20\u5750\u6807\u7684\u5f62\u5f0f\u63d0\u4f9b\u8be5\u70b9\uff0c\u800c ViewportPointToRay \u5219\u63a5\u53d7 0..1 \u8303\u56f4\u5185\u7684\u6807\u51c6\u5316\u5750\u6807\uff08\u5176\u4e2d 0 \u8868\u793a\u89c6\u56fe\u7684\u5de6\u4e0b\u89d2\uff0c1 \u8868\u793a\u53f3\u4e0a\u89d2\uff09\u3002\u8fd9\u4e9b\u51fd\u6570\u4e2d\u7684\u6bcf\u4e00\u4e2a\u51fd\u6570\u90fd\u8fd4\u56de\u7531\u4e00\u4e2a\u539f\u70b9\u548c\u4e00\u4e2a\u77e2\u91cf\uff08\u8be5\u77e2\u91cf\u663e\u793a\u4ece\u8be5\u539f\u70b9\u51fa\u53d1\u7684\u7ebf\u6761\u65b9\u5411\uff09\u7ec4\u6210\u7684 Ray\u3002\u5c04\u7ebf (Ray) \u6e90\u81ea\u8fd1\u88c1\u526a\u9762\u800c\u4e0d\u662f\u6444\u50cf\u673a (Camera) \u7684 transform.position \u70b9\u3002",source:"@site/docs/graphics/cameras-overview/camera-tricks/camera-rays.md",sourceDirName:"graphics/cameras-overview/camera-tricks",slug:"/camera-tricks/camera-rays",permalink:"/doc-unity-manual/docs/camera-tricks/camera-rays",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/cameras-overview/camera-tricks/camera-rays.md",tags:[],version:"current",frontMatter:{id:"CameraRays",title:"\u6444\u50cf\u673a\u5c04\u7ebf",slug:"/camera-tricks/camera-rays"},sidebar:"tutorialSidebar",previous:{title:"\u6444\u50cf\u673a\u6280\u5de7",permalink:"/doc-unity-manual/docs/camera-tricks"},next:{title:"\u8ddd\u6444\u50cf\u673a\u4e00\u5b9a\u8ddd\u79bb\u7684\u89c6\u9525\u4f53\u7684\u5927\u5c0f",permalink:"/doc-unity-manual/docs/camera-tricks/frustum-size-at-distance"}},m={},p=[{value:"\u5c04\u7ebf\u6295\u5c04",id:"\u5c04\u7ebf\u6295\u5c04",level:2},{value:"\u6cbf\u7740\u5c04\u7ebf\u79fb\u52a8\u6444\u50cf\u673a",id:"\u6cbf\u7740\u5c04\u7ebf\u79fb\u52a8\u6444\u50cf\u673a",level:2}],l={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6444\u50cf\u673a\u5c04\u7ebf"},"\u6444\u50cf\u673a\u5c04\u7ebf"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/camera-tricks/understanding-frustum"},"\u4e86\u89e3\u89c6\u9525\u4f53"),"\u90e8\u5206\u8bf4\u660e\u4e86\u6444\u50cf\u673a\u89c6\u56fe\u4e2d\u7684\u4efb\u4f55\u4e00\u70b9\u90fd\u5bf9\u5e94\u4e8e\u4e16\u754c\u7a7a\u95f4\u4e2d\u7684\u4e00\u6761\u7ebf\u3002\u6709\u65f6\u4f7f\u7528\u8fd9\u6761\u7ebf\u7684\u6570\u5b66\u8868\u793a\u5f62\u5f0f\u662f\u6709\u7528\u7684\uff0cUnity \u80fd\u591f\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Ray.html"},"Ray")," \u5bf9\u8c61\u7684\u5f62\u5f0f\u63d0\u4f9b\u8be5\u8868\u793a\u5f62\u5f0f\u3002Ray \u59cb\u7ec8\u5bf9\u5e94\u4e8e\u89c6\u56fe\u4e2d\u7684\u4e00\u4e2a\u70b9\uff0c\u56e0\u6b64 Camera \u7c7b\u63d0\u4f9b ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Camera.ScreenPointToRay.html"},"ScreenPointToRay")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Camera.ViewportPointToRay.html"},"ViewportPointToRay")," \u51fd\u6570\u3002\u4e24\u8005\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e ScreenPointToRay \u671f\u671b\u4ee5\u50cf\u7d20\u5750\u6807\u7684\u5f62\u5f0f\u63d0\u4f9b\u8be5\u70b9\uff0c\u800c ViewportPointToRay \u5219\u63a5\u53d7 0..1 \u8303\u56f4\u5185\u7684\u6807\u51c6\u5316\u5750\u6807\uff08\u5176\u4e2d 0 \u8868\u793a\u89c6\u56fe\u7684\u5de6\u4e0b\u89d2\uff0c1 \u8868\u793a\u53f3\u4e0a\u89d2\uff09\u3002\u8fd9\u4e9b\u51fd\u6570\u4e2d\u7684\u6bcf\u4e00\u4e2a\u51fd\u6570\u90fd\u8fd4\u56de\u7531\u4e00\u4e2a\u539f\u70b9\u548c\u4e00\u4e2a\u77e2\u91cf\uff08\u8be5\u77e2\u91cf\u663e\u793a\u4ece\u8be5\u539f\u70b9\u51fa\u53d1\u7684\u7ebf\u6761\u65b9\u5411\uff09\u7ec4\u6210\u7684 Ray\u3002\u5c04\u7ebf (Ray) \u6e90\u81ea\u8fd1\u88c1\u526a\u9762\u800c\u4e0d\u662f\u6444\u50cf\u673a (Camera) \u7684 transform.position \u70b9\u3002"),(0,o.kt)("h2",{id:"\u5c04\u7ebf\u6295\u5c04"},"\u5c04\u7ebf\u6295\u5c04"),(0,o.kt)("p",null,"\u6765\u81ea\u6444\u50cf\u673a\u7684\u5c04\u7ebf\u6700\u5e38\u89c1\u7684\u7528\u9014\u662f\u5c06",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Physics.Raycast.html"},"\u5c04\u7ebf\u6295\u5c04 (raycast)")," \u5230\u573a\u666f\u4e2d\u3002\u5c04\u7ebf\u6295\u5c04\u4ece\u539f\u70b9\u6cbf\u7740\u5c04\u7ebf\u65b9\u5411\u53d1\u9001\u5047\u60f3\u7684\u201c\u6fc0\u5149\u675f\u201d\uff0c\u76f4\u81f3\u547d\u4e2d\u573a\u666f\u4e2d\u7684\u78b0\u649e\u4f53\u3002\u968f\u540e\u4f1a\u8fd4\u56de\u6709\u5173\u8be5\u5bf9\u8c61\u548c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/RaycastHit.html"},"RaycastHit")," \u5bf9\u8c61\u5185\u7684\u6295\u5c04\u547d\u4e2d\u70b9\u7684\u4fe1\u606f\u3002\u8fd9\u662f\u4e00\u79cd\u57fa\u4e8e\u5bf9\u8c61\u5728\u5c4f\u5e55\u4e0a\u7684\u56fe\u50cf\u6765\u5b9a\u4f4d\u5bf9\u8c61\u7684\u975e\u5e38\u6709\u7528\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u786e\u5b9a\u9f20\u6807\u4f4d\u7f6e\u5904\u7684\u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"using UnityEngine;\nusing System.Collections;\n\npublic class ExampleScript : MonoBehaviour {\n    public Camera camera;\n\n    void Start(){\n        RaycastHit hit;\n        Ray ray = camera.ScreenPointToRay(Input.mousePosition);\n        \n        if (Physics.Raycast(ray, out hit)) {\n            Transform objectHit = hit.transform;\n            \n            // \u5bf9\u5c04\u7ebf\u6295\u5c04\u547d\u4e2d\u7684\u5bf9\u8c61\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\u3002\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"\u6cbf\u7740\u5c04\u7ebf\u79fb\u52a8\u6444\u50cf\u673a"},"\u6cbf\u7740\u5c04\u7ebf\u79fb\u52a8\u6444\u50cf\u673a"),(0,o.kt)("p",null,"\u83b7\u53d6\u5bf9\u5e94\u4e8e\u5c4f\u5e55\u4f4d\u7f6e\u7684\u5c04\u7ebf\u518d\u6cbf\u7740\u8be5\u5c04\u7ebf\u79fb\u52a8\u6444\u50cf\u673a\u6709\u65f6\u5f88\u6709\u7528\u3002\u4f8b\u5982\uff0c\u9700\u8981\u5141\u8bb8\u7528\u6237\u4f7f\u7528\u9f20\u6807\u9009\u62e9\u5bf9\u8c61\uff0c\u7136\u540e\u653e\u5927\u8be5\u5bf9\u8c61\uff0c\u540c\u65f6\u5c06\u5176\u201c\u56fa\u5b9a\u201d\u5230\u9f20\u6807\u4e0b\u7684\u76f8\u540c\u5c4f\u5e55\u4f4d\u7f6e\uff08\u8fd9\u79cd\u64cd\u4f5c\u53ef\u80fd\u5f88\u6709\u7528\uff0c\u4f8b\u5982\uff0c\u5f53\u6444\u50cf\u673a\u6b63\u5728\u67e5\u770b\u6218\u672f\u5730\u56fe\u65f6\uff09\u3002\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u4ee3\u7801\u975e\u5e38\u7b80\u5355\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing System.Collections;\n\npublic class ExampleScript : MonoBehaviour {\n    public bool zooming;\n    public float zoomSpeed;\n    public Camera camera;\n\n    void Update() {\n        if (zooming) {\n            Ray ray = camera.ScreenPointToRay(Input.mousePosition);\n            float zoomDistance = zoomSpeed * Input.GetAxis("Vertical") * Time.deltaTime;\n            camera.transform.Translate(ray.direction * zoomDistance, Space.World);\n        }\n    }\n}\n')))}y.isMDXComponent=!0}}]);