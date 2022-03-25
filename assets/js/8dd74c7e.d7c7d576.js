"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70603],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return p}});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),g=u(r),p=l,b=g["".concat(c,".").concat(p)]||g[p]||d[p]||i;return r?t.createElement(b,o(o({ref:n},s),{},{components:r})):t.createElement(b,o({ref:n},s))}));function p(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},76176:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var t=r(87462),l=r(63366),i=(r(67294),r(3905)),o=["components"],a={id:"gui-Extending",title:"\u6269\u5c55 IMGUI",slug:"/guiscripting-guide/gui-extending"},c="\u6269\u5c55 IMGUI",u={unversionedId:"uitoolkits/guiscripting-guide/gui-Extending",id:"uitoolkits/guiscripting-guide/gui-Extending",title:"\u6269\u5c55 IMGUI",description:"\u53ef\u501f\u52a9\u591a\u79cd\u65b9\u6cd5\u5229\u7528\u548c\u6269\u5c55 IMGUI \u7cfb\u7edf\uff0c\u4ece\u800c\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002\u60a8\u53ef\u4ee5\u6df7\u5408\u5e76\u521b\u5efa\u63a7\u4ef6\uff0c\u5e76\u5145\u5206\u63a7\u5236 GUI \u7528\u6237\u8f93\u5165\u7684\u5904\u7406\u65b9\u5f0f\u3002",source:"@site/docs/uitoolkits/guiscripting-guide/gui-extending.md",sourceDirName:"uitoolkits/guiscripting-guide",slug:"/guiscripting-guide/gui-extending",permalink:"/doc-unity-manual/docs/guiscripting-guide/gui-extending",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/guiscripting-guide/gui-extending.md",tags:[],version:"current",frontMatter:{id:"gui-Extending",title:"\u6269\u5c55 IMGUI",slug:"/guiscripting-guide/gui-extending"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49",permalink:"/doc-unity-manual/docs/guiscripting-guide/gui-customization"},next:{title:"IMGUI \u5e03\u5c40\u6a21\u5f0f",permalink:"/doc-unity-manual/docs/guiscripting-guide/gui-layout"}},s={},d=[{value:"\u590d\u5408\u63a7\u4ef6",id:"\u590d\u5408\u63a7\u4ef6",level:2},{value:"\u9759\u6001\u590d\u5408\u63a7\u4ef6",id:"\u9759\u6001\u590d\u5408\u63a7\u4ef6",level:3},{value:"\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u590d\u5408\u63a7\u4ef6",id:"\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u590d\u5408\u63a7\u4ef6",level:3}],g={toc:d};function p(e){var n=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6269\u5c55-imgui"},"\u6269\u5c55 IMGUI"),(0,i.kt)("p",null,"\u53ef\u501f\u52a9\u591a\u79cd\u65b9\u6cd5\u5229\u7528\u548c\u6269\u5c55 IMGUI \u7cfb\u7edf\uff0c\u4ece\u800c\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002\u60a8\u53ef\u4ee5\u6df7\u5408\u5e76\u521b\u5efa\u63a7\u4ef6\uff0c\u5e76\u5145\u5206\u63a7\u5236 GUI \u7528\u6237\u8f93\u5165\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u590d\u5408\u63a7\u4ef6"},"\u590d\u5408\u63a7\u4ef6"),(0,i.kt)("p",null,"GUI \u4e2d\u53ef\u80fd\u5b58\u5728\u4e24\u79cd\u7c7b\u578b\u7684\u63a7\u4ef6\u603b\u662f\u4e00\u8d77\u51fa\u73b0\u7684\u60c5\u51b5\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6b63\u5728\u521b\u5efa\u5177\u6709\u591a\u4e2a\u6c34\u5e73\u6ed1\u52a8\u6761 (Horizontal Slider) \u7684\u201c\u89d2\u8272\u521b\u5efa (Character Creation)\u201d\u5c4f\u5e55\u3002\u6240\u6709\u8fd9\u4e9b\u6ed1\u52a8\u6761 (Slider) \u90fd\u9700\u8981\u4e00\u4e2a\u6807\u7b7e (Label) \u6765\u8fdb\u884c\u6807\u8bc6\uff0c\u8ba9\u73a9\u5bb6\u77e5\u9053\u81ea\u5df1\u6b63\u5728\u8c03\u6574\u4ec0\u4e48\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u5c06\u6bcf\u4e2a  ",(0,i.kt)("strong",{parentName:"p"},"GUI.Label()"),"  \u8c03\u7528\u4e0e  ",(0,i.kt)("strong",{parentName:"p"},"GUI.HorizontalSlider()"),"  \u8c03\u7528\u8fdb\u884c\u642d\u914d\uff0c\u6216\u8005\u53ef\u521b\u5efa\u4e00\u4e2a\u540c\u65f6\u5305\u542b Label \u548c Slider \u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u590d\u5408\u63a7\u4ef6")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/* Label \u548c Slider \u590d\u5408\u63a7\u4ef6 */\n\n\n// JavaScript\nvar mySlider : float = 1.0;\n\nfunction OnGUI () {\n    mySlider = LabelSlider (Rect (10, 100, 100, 20), mySlider, 5.0, "Label text here");\n}\n\nfunction LabelSlider (screenRect : Rect, sliderValue : float, sliderMaxValue : float, labelText : String) : float {\n    GUI.Label (screenRect, labelText);\n    screenRect.x += screenRect.width; // &lt;- \u5c06 Slider \u63a8\u5230 Label \u7684\u672b\u5c3e\n    sliderValue = GUI.HorizontalSlider (screenRect, sliderValue, 0.0, sliderMaxValue);\n    return sliderValue;\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n        \n    private float mySlider = 1.0f;\n    \n    void OnGUI () {\n        mySlider = LabelSlider (new Rect (10, 100, 100, 20), mySlider, 5.0f, "Label text here");\n    }\n    \n    float LabelSlider (Rect screenRect, float sliderValue, float sliderMaxValue, string labelText) {\n        GUI.Label (screenRect, labelText);\n    \n        // &lt;- \u5c06 Slider \u63a8\u5230 Label \u7684\u672b\u5c3e\n        screenRect.x += screenRect.width; \n    \n        sliderValue = GUI.HorizontalSlider (screenRect, sliderValue, 0.0f, sliderMaxValue);\n        return sliderValue;\n    }\n\n}\n\n\n')),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"p"},"LabelSlider()"),"  \u5e76\u4f20\u9012\u6b63\u786e\u7684\u53c2\u6570\u5c06\u63d0\u4f9b\u4e0e\u6c34\u5e73\u6ed1\u52a8\u6761 (Horizontal Slider) \u914d\u5bf9\u7684\u6807\u7b7e (Label)\u3002\u521b\u5efa\u590d\u5408\u63a7\u4ef6\u65f6\uff0c\u5fc5\u987b\u8bb0\u4f4f\u9700\u8981\u5728\u51fd\u6570\u672b\u5c3e\u8fd4\u56de\u6b63\u786e\u7684\u503c\u4ee5\u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-LabelSlider.png",alt:"\u4e0a\u9762\u7684\u590d\u5408\u63a7\u4ef6\u603b\u662f\u521b\u5efa\u8fd9\u5bf9\u63a7\u4ef6"})),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u590d\u5408\u63a7\u4ef6\u603b\u662f\u521b\u5efa\u8fd9\u5bf9\u63a7\u4ef6"),(0,i.kt)("h3",{id:"\u9759\u6001\u590d\u5408\u63a7\u4ef6"},"\u9759\u6001\u590d\u5408\u63a7\u4ef6"),(0,i.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"\u9759\u6001")," \u51fd\u6570\uff0c\u53ef\u4ee5\u521b\u5efa\u81ea\u6210\u4e00\u4f53\u7684\u5b8c\u6574\u590d\u5408\u63a7\u4ef6\u96c6\u5408\u3002\u8fd9\u6837\uff0c\u5c31\u4e0d\u5fc5\u5728\u9700\u8981\u4f7f\u7528\u51fd\u6570\u7684\u540c\u4e00\u811a\u672c\u4e2d\u58f0\u660e\u8be5\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/* \u6b64\u811a\u672c\u540d\u4e3a CompoundControls */\n\n\n// JavaScript\nstatic function LabelSlider (screenRect : Rect, sliderValue : float, sliderMaxValue : float, labelText : String) : float {\n    GUI.Label (screenRect, labelText);\n    screenRect.x += screenRect.width; // &lt;- \u5c06 Slider \u63a8\u5230 Label \u7684\u672b\u5c3e\n    sliderValue = GUI.HorizontalSlider (screenRect, sliderValue, 0.0, sliderMaxValue);\n    return sliderValue;\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class CompoundControls : MonoBehaviour {     \n    \n    public static float LabelSlider (Rect screenRect, float sliderValue, float sliderMaxValue, string labelText) {\n        GUI.Label (screenRect, labelText);\n    \n        // &lt;- \u5c06 Slider \u63a8\u5230 Label \u7684\u672b\u5c3e\n        screenRect.x += screenRect.width; \n    \n        sliderValue = GUI.HorizontalSlider (screenRect, sliderValue, 0.0f, sliderMaxValue);\n        return sliderValue;\n    }\n\n}\n\n\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u5c06\u4ee5\u4e0a\u793a\u4f8b\u4fdd\u5b58\u5728\u540d\u4e3a  ",(0,i.kt)("strong",{parentName:"p"},"CompoundControls"),"  \u7684\u811a\u672c\u4e2d\uff0c\u53ea\u9700\u8f93\u5165  ",(0,i.kt)("strong",{parentName:"p"},"CompoundControls.LabelSlider()"),"  \u5e76\u63d0\u4f9b\u53c2\u6570\uff0c\u5373\u53ef\u4ece\u4efb\u4f55\u5176\u4ed6\u811a\u672c\u8c03\u7528  ",(0,i.kt)("strong",{parentName:"p"},"LabelSlider()"),"  \u51fd\u6570\u3002"),(0,i.kt)("h3",{id:"\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u590d\u5408\u63a7\u4ef6"},"\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u590d\u5408\u63a7\u4ef6"),(0,i.kt)("p",null,"\u53ef\u4f7f\u7528\u590d\u5408\u63a7\u4ef6\u5b9e\u73b0\u51fa\u8272\u7684\u521b\u9020\u6027\u3002\u53ef\u6309\u4efb\u4f55\u559c\u6b22\u7684\u65b9\u5f0f\u5bf9\u590d\u5408\u63a7\u4ef6\u8fdb\u884c\u6392\u5217\u548c\u5206\u7ec4\u3002\u4ee5\u4e0b\u793a\u4f8b\u5c06\u521b\u5efa\u53ef\u91cd\u590d\u4f7f\u7528\u7684 RGB Slider\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/* RGB Slider \u590d\u5408\u63a7\u4ef6 */\n\n\n// JavaScript\nvar myColor : Color;\n\nfunction OnGUI () {\n    myColor = RGBSlider (Rect (10,10,200,10), myColor);\n}\n\nfunction RGBSlider (screenRect : Rect, rgb : Color) : Color {\n    rgb.r = GUI.HorizontalSlider (screenRect, rgb.r, 0.0, 1.0);\n    screenRect.y += 20; // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n    rgb.g = GUI.HorizontalSlider (screenRect, rgb.g, 0.0, 1.0);\n    screenRect.y += 20; // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n    rgb.b = GUI.HorizontalSlider (screenRect, rgb.b, 0.0, 1.0);\n    return rgb;\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n        \n    public Color myColor;\n    \n    void OnGUI () {\n        myColor = RGBSlider (new Rect (10,10,200,10), myColor);\n    }\n    \n    Color RGBSlider (Rect screenRect, Color rgb) {\n        rgb.r = GUI.HorizontalSlider (screenRect, rgb.r, 0.0f, 1.0f);\n    \n        // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n        screenRect.y += 20; \n        rgb.g = GUI.HorizontalSlider (screenRect, rgb.g, 0.0f, 1.0f);\n    \n        // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n        screenRect.y += 20; \n    \n        rgb.b = GUI.HorizontalSlider (screenRect, rgb.b, 0.0f, 1.0f);\n        return rgb;\n    }\n}\n\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-RGBSlider.png",alt:"\u7531\u4ee5\u4e0a\u793a\u4f8b\u521b\u5efa\u7684 RGB Slider"})),(0,i.kt)("p",null,"\u7531\u4ee5\u4e0a\u793a\u4f8b\u521b\u5efa\u7684 RGB Slider"),(0,i.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6784\u5efa\u4e00\u4e9b\u4f4d\u4e8e\u5f7c\u6b64\u4e4b\u4e0a\u7684\u590d\u5408\u63a7\u4ef6\uff0c\u4ece\u800c\u6f14\u793a\u5982\u4f55\u5728\u590d\u5408\u63a7\u4ef6\u4e2d\u4f7f\u7528\u5176\u4ed6\u590d\u5408\u63a7\u4ef6\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u5982\u4e0a\u6240\u793a\u7684\u65b0 RGB Slider\uff0c\u4f46\u6211\u4eec\u5c06\u4f7f\u7528 LabelSlider \u6765\u6267\u884c\u6b64\u64cd\u4f5c\u3002\u8fd9\u6837\u6211\u4eec\u5c06\u59cb\u7ec8\u6709\u4e00\u4e2a\u6807\u7b7e\u663e\u793a\u54ea\u4e2a\u6ed1\u52a8\u6761\u5bf9\u5e94\u54ea\u79cd\u989c\u8272\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/* RGB Label Slider \u590d\u5408\u63a7\u4ef6 */\n\n\n// JavaScript\nvar myColor : Color;\n\nfunction OnGUI () {\n    myColor = RGBLabelSlider (Rect (10,10,200,20), myColor);\n}\n\nfunction RGBLabelSlider (screenRect : Rect, rgb : Color) : Color {\n    rgb.r = CompoundControls.LabelSlider (screenRect, rgb.r, 1.0, "Red");\n    screenRect.y += 20; // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n    rgb.g = CompoundControls.LabelSlider (screenRect, rgb.g, 1.0, "Green");\n    screenRect.y += 20; // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n    rgb.b = CompoundControls.LabelSlider (screenRect, rgb.b, 1.0, "Blue");\n    return rgb;\n}\n\n\n// C#\nusing UnityEngine;\nusing System.Collections;\n\npublic class GUITest : MonoBehaviour {\n        \n    public Color myColor;\n    \n    void OnGUI () {\n        myColor = RGBSlider (new Rect (10,10,200,30), myColor);\n    }\n    \n    Color RGBSlider (Rect screenRect, Color rgb) {\n        rgb.r = CompoundControls.LabelSlider (screenRect, rgb.r, 1.0f, "Red");\n    \n        // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n        screenRect.y += 20; \n        rgb.g = CompoundControls.LabelSlider (screenRect, rgb.g, 1.0f, "Green");\n    \n        // &lt;- \u5c06\u4e0b\u4e00\u4e2a\u63a7\u4ef6\u5411\u4e0b\u79fb\u52a8\u4e00\u70b9\u4ee5\u907f\u514d\u91cd\u53e0\n        screenRect.y += 20; \n    \n        rgb.b = CompoundControls.LabelSlider (screenRect, rgb.b, 1.0f, "Blue");\n        \n        return rgb;\n    }   \n    \n}\n\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/gsg-RGBLabelSlider.png",alt:"\u7531\u4ee5\u4e0a\u4ee3\u7801\u521b\u5efa\u7684\u590d\u5408 RGB Label Slider"})),(0,i.kt)("p",null,"\u7531\u4ee5\u4e0a\u4ee3\u7801\u521b\u5efa\u7684\u590d\u5408 RGB Label Slider"))}p.isMDXComponent=!0}}]);