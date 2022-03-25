"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60890],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),b=i,y=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74298:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={id:"Tilemap-ScriptableBrushes-Example",title:"\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b",slug:"/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example"},l="\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b",p={unversionedId:"unity2d/class-tilemap/tilemap-scriptable-brushes/Tilemap-ScriptableBrushes-Example",id:"unity2d/class-tilemap/tilemap-scriptable-brushes/Tilemap-ScriptableBrushes-Example",title:"\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b",description:"Tilemap-ScriptableBrushes-Example-32.png",source:"@site/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example.md",sourceDirName:"unity2d/class-tilemap/tilemap-scriptable-brushes",slug:"/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/class-tilemap/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example.md",tags:[],version:"current",frontMatter:{id:"Tilemap-ScriptableBrushes-Example",title:"\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b",slug:"/tilemap-scriptable-brushes/tilemap-scriptable-brushes-example"},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u7f16\u7a0b\u753b\u7b14",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes"},next:{title:"GridBrushBase",permalink:"/doc-unity-manual/docs/tilemap-scriptable-brushes/tilemap-scriptable-brushes-grid-brush-base"}},c={},u=[],m={toc:u};function b(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b"},"\u53ef\u7f16\u7a0b\u753b\u7b14\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/Tilemap-ScriptableBrushes-Example-32.png",alt:"Tilemap-ScriptableBrushes-Example-32.png"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LineBrush")," \u5141\u8bb8\u901a\u8fc7\u6307\u5b9a\u8d77\u70b9\u548c\u7ec8\u70b9\u5728\u74e6\u7247\u5730\u56fe\u4e0a\u8f7b\u677e\u7ed8\u5236\u591a\u884c\u74e6\u7247\u3002\u901a\u8fc7\u91cd\u5199 LineBrush \u7684 Paint \u65b9\u6cd5\uff0c\u5141\u8bb8\u7528\u6237\u5728\u7ed8\u753b\u6a21\u5f0f\u4e0b\u7b2c\u4e00\u6b21\u5355\u51fb\u9f20\u6807\u6765\u6307\u5b9a\u884c\u7684\u8d77\u70b9\uff0c\u7136\u540e\u5728\u7ed8\u753b\u6a21\u5f0f\u4e0b\u7b2c\u4e8c\u6b21\u5355\u51fb\u9f20\u6807\u6765\u7ed8\u5236\u8be5\u884c\u3002\u901a\u8fc7\u91cd\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPaintSceneGUI")," \u65b9\u6cd5\uff0c\u53ef\u751f\u6210\u5728\u7b2c\u4e00\u6b21\u548c\u7b2c\u4e8c\u6b21\u5355\u51fb\u9f20\u6807\u4e4b\u95f4\u7ed8\u5236\u7684\u884c\u7684\u9884\u89c8\u6548\u679c\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7528\u4e8e\u521b\u5efa\u753b\u7b14\u7684\u811a\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using System;\nusing System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.Tilemaps;\n\nnamespace UnityEditor.Tilemaps\n{\n    [CustomGridBrush(true, false, false, "Line Brush")]\n    public class LineBrush : GridBrush {\n        public bool lineStartActive = false;\n        public Vector3Int lineStart = Vector3Int.zero;\n        public override void Paint(GridLayout grid, GameObject brushTarget, Vector3Int position)\n        {\n            if (lineStartActive)\n            {\n                Vector2Int startPos = new Vector2Int(lineStart.x, lineStart.y);\n                Vector2Int endPos = new Vector2Int(position.x, position.y);\n                if (startPos == endPos)\n                    base.Paint(grid, brushTarget, position);    \n                else\n                {\n                    foreach (var point in GetPointsOnLine(startPos, endPos))\n                    {\n                        Vector3Int paintPos = new Vector3Int(point.x, point.y, position.z);\n                        base.Paint(grid, brushTarget, paintPos);\n                    }\n                }\n                lineStartActive = false;\n            }\n            else\n            {\n                lineStart = position;\n                lineStartActive = true;\n            }\n        }\n        [MenuItem("Assets/Create/Line Brush")]\n        public static void CreateBrush()\n        {\n            string path = EditorUtility.SaveFilePanelInProject("Save Line Brush", "New Line Brush", "Asset", "Save Line Brush", "Assets");\n            if (path == "")\n                return;\nAssetDatabase.CreateAsset(ScriptableObject.CreateInstance&lt;LineBrush&gt;(), path);\n        }\n        // http://ericw.ca/notes/bresenhams-line-algorithm-in-csharp.html\n        public static IEnumerable&lt;Vector2Int&gt; GetPointsOnLine(Vector2Int p1, Vector2Int p2)\n        {\n            int x0 = p1.x;\n            int y0 = p1.y;\n            int x1 = p2.x;\n            int y1 = p2.y;\n            bool steep = Math.Abs(y1 - y0) &gt; Math.Abs(x1 - x0);\n            if (steep)\n            {\n                int t;\n                t = x0; // \u4ea4\u6362 x0 \u548c y0\n                x0 = y0;\n                y0 = t;\n                t = x1; // \u4ea4\u6362 x1 \u548c y1\n                x1 = y1;\n                y1 = t;\n            }\n            if (x0 &gt; x1)\n            {\n                int t;\n                t = x0; // \u4ea4\u6362 x0 \u548c x1\n                x0 = x1;\n                x1 = t;\n                t = y0; // \u4ea4\u6362 y0 \u548c y1\n                y0 = y1;\n                y1 = t;\n            }\n            int dx = x1 - x0;\n            int dy = Math.Abs(y1 - y0);\n            int error = dx / 2;\n            int ystep = (y0 &lt; y1) ?1 : -1;\n            int y = y0;\n            for (int x = x0; x &lt;= x1; x++)\n            {\n                yield return new Vector2Int((steep ? y : x), (steep ? x : y));\n                error = error - dy;\n                if (error &lt; 0)\n                {\n                    y += ystep;\n                    error += dx;\n                }\n            }\n            yield break;\n        }\n    }\n    [CustomEditor(typeof(LineBrush))]\n    public class LineBrushEditor : GridBrushEditor\n    {\n        private LineBrush lineBrush { get { return target as LineBrush; } }\n        public override void OnPaintSceneGUI(GridLayout grid, GameObject brushTarget, BoundsInt position, GridBrushBase.Tool tool, bool executing)\n        {\n            base.OnPaintSceneGUI(grid, brushTarget, position, tool, executing);\n            if (lineBrush.lineStartActive)\n            {\n                Tilemap tilemap = brushTarget.GetComponent&lt;Tilemap&gt;();\n                if (tilemap != null)\n                    tilemap.ClearAllEditorPreviewTiles();\n                // \u7ed8\u5236\u74e6\u7247\u5730\u56fe\u7684\u9884\u89c8\u74e6\u7247\n                Vector2Int startPos = new Vector2Int(lineBrush.lineStart.x, lineBrush.lineStart.y);\n                Vector2Int endPos = new Vector2Int(position.x, position.y);\n                if (startPos == endPos)\n                    PaintPreview(grid, brushTarget, position.min);\n                else\n                {\n                    foreach (var point in LineBrush.GetPointsOnLine(startPos, endPos))\n                    {\n                        Vector3Int paintPos = new Vector3Int(point.x, point.y, position.z);\n                        PaintPreview(grid, brushTarget, paintPos);\n                    }\n                }\n                if (Event.current.type == EventType.Repaint)\n                {\n                    var min = lineBrush.lineStart;\n                    var max = lineBrush.lineStart + position.size;\n                    // \u5728\u62fe\u53d6\u7684\u8d77\u59cb\u4f4d\u7f6e\u7ed8\u5236\u4e00\u4e2a\u65b9\u6846\n                    GL.PushMatrix();\n                    GL.MultMatrix(GUI.matrix);\n                    GL.Begin(GL.LINES);\n                    Handles.color = Color.blue;\n                    Handles.DrawLine(new Vector3(min.x, min.y, min.z), new Vector3(max.x, min.y, min.z));\n                    Handles.DrawLine(new Vector3(max.x, min.y, min.z), new Vector3(max.x, max.y, min.z));\n                    Handles.DrawLine(new Vector3(max.x, max.y, min.z), new Vector3(min.x, max.y, min.z));\n                    Handles.DrawLine(new Vector3(min.x, max.y, min.z), new Vector3(min.x, min.y, min.z));\n                    GL.End();\n                    GL.PopMatrix();\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2017\u201309\u201306 \u9875\u9762\u5df2\u53d1\u5e03")))}b.isMDXComponent=!0}}]);