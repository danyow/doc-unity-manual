"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72453],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,y=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"editor-PropertyDrawers",title:"\u5c5e\u6027\u7ed8\u5236\u5668",slug:"/extending-the-editor/editor-property-drawers"},l="\u5c5e\u6027\u7ed8\u5236\u5668",u={unversionedId:"uitoolkits/guiscripting-guide/extending-the-editor/editor-PropertyDrawers",id:"uitoolkits/guiscripting-guide/extending-the-editor/editor-PropertyDrawers",title:"\u5c5e\u6027\u7ed8\u5236\u5668",description:"\u501f\u52a9\u5c5e\u6027\u7ed8\u5236\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u811a\u672c\u4e0a\u7684\u7279\u6027\u6216\u901a\u8fc7\u63a7\u5236\u7279\u5b9a Serializable \u7c7b\u7684\u5916\u89c2\u6765\u81ea\u5b9a\u4e49  Inspector \u7a97\u53e3 \u4e2d\u67d0\u4e9b\u63a7\u4ef6\u7684\u5916\u89c2\u3002",source:"@site/docs/uitoolkits/guiscripting-guide/extending-the-editor/editor-property-drawers.md",sourceDirName:"uitoolkits/guiscripting-guide/extending-the-editor",slug:"/extending-the-editor/editor-property-drawers",permalink:"/docs/extending-the-editor/editor-property-drawers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/guiscripting-guide/extending-the-editor/editor-property-drawers.md",tags:[],version:"current",frontMatter:{id:"editor-PropertyDrawers",title:"\u5c5e\u6027\u7ed8\u5236\u5668",slug:"/extending-the-editor/editor-property-drawers"},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u8f91\u5668\u7a97\u53e3",permalink:"/docs/extending-the-editor/editor-editor-windows"},next:{title:"TreeView",permalink:"/docs/extending-the-editor/tree-view-api"}},s={},d=[{value:"\u81ea\u5b9a\u4e49 Serializable \u7c7b\u7684 GUI",id:"\u81ea\u5b9a\u4e49-serializable-\u7c7b\u7684-gui",level:2},{value:"\u4f7f\u7528\u5c5e\u6027\u7279\u6027\u6765\u81ea\u5b9a\u4e49\u811a\u672c\u6210\u5458\u7684 GUI",id:"\u4f7f\u7528\u5c5e\u6027\u7279\u6027\u6765\u81ea\u5b9a\u4e49\u811a\u672c\u6210\u5458\u7684-gui",level:2}],c={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5c5e\u6027\u7ed8\u5236\u5668"},"\u5c5e\u6027\u7ed8\u5236\u5668"),(0,o.kt)("p",null,"\u501f\u52a9\u5c5e\u6027\u7ed8\u5236\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u811a\u672c\u4e0a\u7684\u7279\u6027\u6216\u901a\u8fc7\u63a7\u5236\u7279\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable")," \u7c7b\u7684\u5916\u89c2\u6765\u81ea\u5b9a\u4e49  ",(0,o.kt)("strong",{parentName:"p"},"Inspector \u7a97\u53e3")," \u4e2d\u67d0\u4e9b\u63a7\u4ef6\u7684\u5916\u89c2\u3002"),(0,o.kt)("p",null,"\u5c5e\u6027\u7ed8\u5236\u5668\u6709\u4e24\u79cd\u7528\u9014\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 Serializable \u7c7b\u7684\u6bcf\u4e2a\u5b9e\u4f8b\u7684 GUI\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u5c5e\u6027\u7279\u6027")," \u6765\u81ea\u5b9a\u4e49\u811a\u672c\u6210\u5458\u7684 GUI\u3002")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49-serializable-\u7c7b\u7684-gui"},"\u81ea\u5b9a\u4e49 Serializable \u7c7b\u7684 GUI"),(0,o.kt)("p",null,"\u5982\u679c\u6709\u81ea\u5b9a\u4e49\u7684  ",(0,o.kt)("strong",{parentName:"p"},"Serializable"),"  \u7c7b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u7ed8\u5236\u5668")," \u6765\u63a7\u5236\u8be5\u7c7b\u5728  ",(0,o.kt)("strong",{parentName:"p"},"Inspector"),"  \u4e2d\u7684\u5916\u89c2\u3002\u8bf7\u53c2\u8003\u4ee5\u4e0b\u811a\u672c\u793a\u4f8b\u4e2d\u7684 Serializable \u7c7b Ingredient\uff08 ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u8fd9\u4e9b\u4e0d\u662f\u7f16\u8f91\u5668\u811a\u672c\u3002\u5c5e\u6027\u7279\u6027\u7c7b\u5e94\u653e\u5728\u5e38\u89c4\u811a\u672c\u6587\u4ef6\u4e2d\uff09\uff1a"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"C#\uff08\u793a\u4f8b\uff09")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"using System;\nusing UnityEngine;\n\nenum IngredientUnit { Spoon, Cup, Bowl, Piece }\n\n// \u81ea\u5b9a\u4e49 Serializable \u7c7b\n[Serializable]\npublic class Ingredient\n{\n    public string name;\n    public int amount = 1;\n    public IngredientUnit unit;\n}\n\npublic class Recipe : MonoBehaviour\n{\n    public Ingredient potionResult;\n    public Ingredient[] potionIngredients;\n}\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c5e\u6027\u7ed8\u5236\u5668\u6765\u66f4\u6539 Inspector \u4e2d Ingredient \u7c7b\u7684\u6bcf\u4e2a\u5916\u89c2\u3002\u6bd4\u8f83\u4e0d\u5e26\u6709\u548c\u5e26\u6709\u81ea\u5b9a\u4e49\u5c5e\u6027\u7ed8\u5236\u5668\u7684 Inspector \u4e2d Ingredient \u5c5e\u6027\u7684\u5916\u89c2\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/CustomPropertyDrawer_Class.png",alt:"\u4e0d\u5e26\u6709\uff08\u5de6\uff09\u548c\u5e26\u6709\uff08\u53f3\uff09\u81ea\u5b9a\u4e49\u5c5e\u6027\u7ed8\u5236\u5668\u7684 Inspector \u4e2d\u7684\u7c7b\u3002"})),(0,o.kt)("p",null,"\u4e0d\u5e26\u6709\uff08\u5de6\uff09\u548c\u5e26\u6709\uff08\u53f3\uff09\u81ea\u5b9a\u4e49\u5c5e\u6027\u7ed8\u5236\u5668\u7684 Inspector \u4e2d\u7684\u7c7b\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528  ",(0,o.kt)("strong",{parentName:"p"},"CustomPropertyDrawer"),"  \u5c5e\u6027\u5c06\u5c5e\u6027\u7ed8\u5236\u5668\u9644\u52a0\u5230 Serializable \u7c7b\uff0c\u7136\u540e\u4f20\u5165\u5c5e\u6027\u7ed8\u5236\u5668\u6240\u9488\u5bf9\u7684 Serializable \u7c7b\u7684\u7c7b\u578b\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"C#\uff08\u793a\u4f8b\uff09")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using UnityEditor;\nusing UnityEngine;\n\n// IngredientDrawer\n[CustomPropertyDrawer(typeof(Ingredient))]\npublic class IngredientDrawer : PropertyDrawer\n{\n    // \u5728\u7ed9\u5b9a\u7684\u77e9\u5f62\u5185\u7ed8\u5236\u5c5e\u6027\n    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)\n    {\n        // \u5728\u7236\u5c5e\u6027\u4e0a\u4f7f\u7528 BeginProperty/EndProperty \u610f\u5473\u7740\n        // \u9884\u5236\u4ef6\u91cd\u5199\u903b\u8f91\u4f5c\u7528\u4e8e\u6574\u4e2a\u5c5e\u6027\u3002\n        EditorGUI.BeginProperty(position, label, property);\n\n        //\u7ed8\u5236\u6807\u7b7e\n        position = EditorGUI.PrefixLabel(position, GUIUtility.GetControlID(FocusType.Passive), label);\n\n        // \u4e0d\u8981\u8ba9\u5b50\u5b57\u6bb5\u7f29\u8fdb\n        var indent = EditorGUI.indentLevel;\n        EditorGUI.indentLevel = 0;\n\n        // \u8ba1\u7b97\u77e9\u5f62\n        var amountRect = new Rect(position.x, position.y, 30, position.height);\n        var unitRect = new Rect(position.x + 35, position.y, 50, position.height);\n        var nameRect = new Rect(position.x + 90, position.y, position.width - 90, position.height);\n\n        // \u7ed8\u5236\u5b57\u6bb5 - \u5c06 GUIContent.none \u4f20\u5165\u6bcf\u4e2a\u5b57\u6bb5\uff0c\u4ece\u800c\u53ef\u4ee5\u4e0d\u4f7f\u7528\u6807\u7b7e\u6765\u7ed8\u5236\u5b57\u6bb5\n        EditorGUI.PropertyField(amountRect, property.FindPropertyRelative("amount"), GUIContent.none);\n        EditorGUI.PropertyField(unitRect, property.FindPropertyRelative("unit"), GUIContent.none);\n        EditorGUI.PropertyField(nameRect, property.FindPropertyRelative("name"), GUIContent.none);\n\n        // \u5c06\u7f29\u8fdb\u6062\u590d\u539f\u6837\n        EditorGUI.indentLevel = indent;\n\n        EditorGUI.EndProperty();\n    }\n}\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528\u5c5e\u6027\u7279\u6027\u6765\u81ea\u5b9a\u4e49\u811a\u672c\u6210\u5458\u7684-gui"},"\u4f7f\u7528\u5c5e\u6027\u7279\u6027\u6765\u81ea\u5b9a\u4e49\u811a\u672c\u6210\u5458\u7684 GUI"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u7ed8\u5236\u5668")," \u7684\u53e6\u4e00\u7528\u9014\u662f\u66f4\u6539\u811a\u672c\u4e2d\u5177\u6709\u81ea\u5b9a\u4e49 ",(0,o.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u7279\u6027")," \u7684\u6210\u5458\u7684\u5916\u89c2\u3002\u5047\u8bbe\u8981\u5c06\u811a\u672c\u4e2d\u7684\u6d6e\u70b9\u6570\u6216\u6574\u6570\u9650\u5236\u5728\u7279\u5b9a\u8303\u56f4\u5185\uff0c\u5e76\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Inspector"),"  \u4e2d\u5c06\u5176\u663e\u793a\u4e3a\u6ed1\u52a8\u6761\u3002\u90a3\u4e48\uff0c\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684  ",(0,o.kt)("strong",{parentName:"p"},"PropertyAttribute")," \uff08\u79f0\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"RangeAttribute")," \uff09\u6765\u6267\u884c\u6b64\u64cd\u4f5c\uff1a"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"C#\uff08\u793a\u4f8b\uff09")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u5728 Inspector \u4e2d\u5c06\u6b64\u6d6e\u70b9\u6570\u663e\u793a\u4e3a 0 \u5230 10 \u4e4b\u95f4\u7684\u6ed1\u52a8\u6761\n[Range(0f, 10f)]\nfloat myFloat = 0f;\n")),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684  ",(0,o.kt)("strong",{parentName:"p"},"PropertyAttribute")," \u3002\u6211\u4eec\u5c06\u4ee5  ",(0,o.kt)("strong",{parentName:"p"},"RangeAttribute"),"  \u7684\u4ee3\u7801\u4e3a\u4f8b\u3002\u8be5\u5c5e\u6027\u5fc5\u987b\u6269\u5c55  ",(0,o.kt)("strong",{parentName:"p"},"PropertyAttribute"),"  \u7c7b\u3002\u5982\u679c\u9700\u8981\uff0c\u5c5e\u6027\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570\u5e76\u5c06\u5b83\u4eec\u5b58\u50a8\u4e3a\u516c\u5171\u6210\u5458\u53d8\u91cf\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"C#\uff08\u793a\u4f8b\uff09")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"using UnityEngine;\n\npublic class MyRangeAttribute : PropertyAttribute \n{\n        readonly float min;\n        readonly float max;\n        \n        void MyRangeAttribute(float min, float max)\n        {\n            this.min = min;\n            this.max = max;\n        }\n} \n")),(0,o.kt)("p",null,"\u62e5\u6709\u8be5\u7279\u6027\u4e4b\u540e\uff0c\u5c31\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u7ed8\u5236\u5668")," \u6765\u7ed8\u5236\u5177\u6709\u8be5\u7279\u6027\u7684\u5c5e\u6027\u3002\u8be5\u7ed8\u5236\u5668\u5fc5\u987b\u6269\u5c55  ",(0,o.kt)("strong",{parentName:"p"},"PropertyDrawer"),"  \u7c7b\uff0c\u4e14\u5fc5\u987b\u5177\u6709  ",(0,o.kt)("strong",{parentName:"p"},"CustomPropertyDrawer"),"  \u7279\u6027\u6765\u8bf4\u660e\u7ed8\u5236\u5668\u6240\u9488\u5bf9\u7684\u7279\u6027\u3002"),(0,o.kt)("p",null,"\u5c5e\u6027\u7ed8\u5236\u5668\u7c7b\u5e94\u653e\u5728\u7f16\u8f91\u5668\u811a\u672c\u4e2d\uff0c\u8be5\u811a\u672c\u4f4d\u4e8e\u79f0\u4e3a Editor \u7684\u6587\u4ef6\u5939\u5185\u3002"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"C#\uff08\u793a\u4f8b\uff09")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using UnityEditor;\nusing UnityEngine;\n\n// \u544a\u77e5 MyRangeDrawer \u8fd9\u662f\u9488\u5bf9\u5177\u6709 MyRangeAttribute \u7684\u5c5e\u6027\u7684\u7ed8\u5236\u5668\u3002\n[CustomPropertyDrawer(typeof(MyRangeAttribute))]\npublic class RangeDrawer : PropertyDrawer\n{\n    // \u5728\u7ed9\u5b9a\u7684\u77e9\u5f62\u5185\u7ed8\u5236\u5c5e\u6027\n    void OnGUI(Rect position, SerializedProperty property, GUIContent label)\n    {\n        //\u9996\u5148\u83b7\u53d6\u8be5\u7279\u6027\uff0c\u56e0\u4e3a\u5b83\u5305\u542b\u6ed1\u52a8\u6761\u7684\u8303\u56f4\n        MyRangeAttribute range = (MyRangeAttribute)attribute;\n\n        // \u73b0\u5728\u6839\u636e\u5c5e\u6027\u662f\u6d6e\u70b9\u503c\u8fd8\u662f\u6574\u6570\u6765\u786e\u5b9a\u5c06\u5c5e\u6027\u7ed8\u5236\u4e3a Slider \u8fd8\u662f IntSlider\u3002\n        if (property.propertyType == SerializedPropertyType.Float)\n            EditorGUI.Slider(position, property, range.min, range.max, label);\n        else if (property.propertyType == SerializedPropertyType.Integer)\n            EditorGUI.IntSlider(position, property, (int) range.min, (int) range.max, label);\n        else\n            EditorGUI.LabelField(position, label.text, "Use MyRange with float or int.");\n    }\n}\n\n')),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0cEditorGUILayout \u51fd\u6570\u4e0d\u80fd\u7528\u4e8e\u5c5e\u6027\u7ed8\u5236\u5668\u3002"))}g.isMDXComponent=!0}}]);