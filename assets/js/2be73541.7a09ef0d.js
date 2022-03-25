"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29292],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var o=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],i={id:"overlays-custom",title:"Create custom Overlays",slug:"/overlays/overlays-custom"},s="Create custom Overlays",d={unversionedId:"unity-overview/using-the-editor/using-the-scene-view/overlays/overlays-custom",id:"unity-overview/using-the-editor/using-the-scene-view/overlays/overlays-custom",title:"Create custom Overlays",description:"You can create custom panel Overlays and toolbar Overlays for your  Scene view  window.",source:"@site/docs/unity-overview/using-the-editor/using-the-scene-view/overlays/overlays-custom.md",sourceDirName:"unity-overview/using-the-editor/using-the-scene-view/overlays",slug:"/overlays/overlays-custom",permalink:"/doc-unity-manual/docs/overlays/overlays-custom",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/using-the-editor/using-the-scene-view/overlays/overlays-custom.md",tags:[],version:"current",frontMatter:{id:"overlays-custom",title:"Create custom Overlays",slug:"/overlays/overlays-custom"},sidebar:"tutorialSidebar",previous:{title:"Overlays",permalink:"/doc-unity-manual/docs/overlays"},next:{title:"Position GameObjects",permalink:"/doc-unity-manual/docs/positioning-game-objects"}},p={},c=[{value:"The EditorToolbarElement",id:"the-editortoolbarelement",level:2},{value:"Panel Overlays",id:"panel-overlays",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Toolbar Overlays",id:"toolbar-overlays",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"Toolbar elements implementation",id:"toolbar-elements-implementation",level:3},{value:"EditorToolbarButton",id:"editortoolbarbutton",level:4},{value:"EditorToolbarToggle",id:"editortoolbartoggle",level:4},{value:"EditorToolbarDropdown",id:"editortoolbardropdown",level:4},{value:"EditorToolbarDropdownToggle",id:"editortoolbardropdowntoggle",level:4},{value:"Panel Overlay",id:"panel-overlay",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-custom-overlays"},"Create custom Overlays"),(0,l.kt)("p",null,"You can create custom panel Overlays and toolbar Overlays for your  ",(0,l.kt)("strong",{parentName:"p"},"Scene view"),"  window."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#panel-overlays"},"Panel Overlays"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#toolbar-overlays"},"Toolbar Overlays")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Tip:"),"  For information about creating UIElements, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/UIElements.html"},"UI Elements Developer Guide"),"."))),(0,l.kt)("h2",{id:"the-editortoolbarelement"},"The EditorToolbarElement"),(0,l.kt)("p",null,"A toolbar element can contain text, an icon, or a combination of the two."),(0,l.kt)("p",null,"Use ","[",(0,l.kt)("inlineCode",{parentName:"p"},"EditorToolbarElement(Identifier, EditorWindowType)"),"]"," to register toolbar elements for use in ",(0,l.kt)("inlineCode",{parentName:"p"},"ToolbarOverlay")," implementations."),(0,l.kt)("p",null,"You may inherit any VisualElement type and provide styling yourself, but toolbar elements require specific styling, so it is preferable to inherit one of the predefined ",(0,l.kt)("inlineCode",{parentName:"p"},"EditorToolbar")," types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EditorToolbarButton - based on ",(0,l.kt)("inlineCode",{parentName:"p"},"UnityEditor.UIElements.ToolbarButton"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EditorToolbarDropdown - based on ",(0,l.kt)("inlineCode",{parentName:"p"},"EditorToolbarButton"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EditorToolbarDropdownToggle - based on ",(0,l.kt)("inlineCode",{parentName:"p"},"UnityEngine.UIElements.BaseField&lt;bool&gt;"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EditorToolbarToggle - based on ",(0,l.kt)("inlineCode",{parentName:"p"},"UnityEditor.UIElements.ToolbarToggle")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Tip:"),"  If a toolbar is docked horizontally or vertically the text will be clipped or not visible, so specify an icon for each."))),(0,l.kt)("h2",{id:"panel-overlays"},"Panel Overlays"),(0,l.kt)("p",null,"All Overlays must inherit the Overlay base class and implement the CreatePanelContent() method. This creates a basic panel that you can use as-is or add toolbar elements."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/CreatingAndUsingScripts.html"},"C# script")," in your ",(0,l.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/SpecialFolders.html"},"Editor")," folder and name it."),(0,l.kt)("li",{parentName:"ol"},"Open your new script."),(0,l.kt)("li",{parentName:"ol"},"Remove the boilerplate content between the main curly brackets and implement the ",(0,l.kt)("inlineCode",{parentName:"li"},"Overlay"),"class in the namespace ",(0,l.kt)("inlineCode",{parentName:"li"},"UnityEditor.Overlays"),"."),(0,l.kt)("li",{parentName:"ol"},"Override the ",(0,l.kt)("inlineCode",{parentName:"li"},"CreatePanelContent")," function and add your content to the visual element."),(0,l.kt)("li",{parentName:"ol"},"Add the ",(0,l.kt)("inlineCode",{parentName:"li"},"Overlay"),"attribute to the class and specify which type of window this Overlay will be available in. Specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"EditorWindow")," as the type, will make the Overlay available in all Editor windows, specifying ",(0,l.kt)("inlineCode",{parentName:"li"},"SceneView")," will make the Overlay available in Scene view only."),(0,l.kt)("li",{parentName:"ol"},"Add the name, ID, and display name."),(0,l.kt)("li",{parentName:"ol"},"Optional: Add the ",(0,l.kt)("inlineCode",{parentName:"li"},"Icon"),"attribute to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Overlay"),"class to specify which icon to use in condensed mode. If no icon is specified, then by default the system uses the first two letters of the Overlay name (or the first two initial letters of the first two words).")),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'using UnityEditor;\nusing UnityEditor.Overlays;\nusing UnityEngine.UIElements;\n[Overlay(typeof(SceneView), "My Custom Toolbar", true)]\npublic class MyToolButtonOverlay : Overlay\n{\n    public override VisualElement CreatePanelContent()\n    {\n        var root = new VisualElement() { name = "My Toolbar Root" };\n        root.Add(new Label() { text = "Hello" });\n        return root;\n\n    }\n}\n')),(0,l.kt)("h2",{id:"toolbar-overlays"},"Toolbar Overlays"),(0,l.kt)("p",null,"Toolbar Overlays are containers that hold toolbar items and are composed of collections of ",(0,l.kt)("inlineCode",{parentName:"p"},"EditorToolbarElement"),"."),(0,l.kt)("p",null,"Toolbar Overlays have built-in horizontal, vertical, and panel layouts. ToolbarOverlay implements a parameterless constructor, passing the EditorToolbarElementAttribute ID. Unlike panel Overlays, the contents are defined as standalone pieces that are collected to form a strip of elements."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"As with panel Overlays, start by creating a C# script and saving it in your Editor folder, then open and edit your script."),(0,l.kt)("li",{parentName:"ol"},"Add toolbar elements."),(0,l.kt)("li",{parentName:"ol"},"Add the toolbar elements to the Overlay constructor."),(0,l.kt)("li",{parentName:"ol"},"Add the panel Overlay and implement with the toolbar elements.")),(0,l.kt)("p",null,"When creating toolbar Overlays:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"[EditorToolbarElement(Identifier, EditorWindowType)]")," to register toolbar elements for use in the ",(0,l.kt)("inlineCode",{parentName:"li"},"ToolbarOverlay")," implementation."),(0,l.kt)("li",{parentName:"ul"},"All Overlays must be tagged with the ",(0,l.kt)("inlineCode",{parentName:"li"},"OverlayAttribute")),(0,l.kt)("li",{parentName:"ul"},"Toolbar Overlays must inherit ",(0,l.kt)("inlineCode",{parentName:"li"},"ToolbarOverlay")," and implement a parameter-less constructor."),(0,l.kt)("li",{parentName:"ul"},"The contents of a toolbar are populated with string IDs, which are passed to the base constructor."),(0,l.kt)("li",{parentName:"ul"},"IDs are defined by ",(0,l.kt)("inlineCode",{parentName:"li"},"EditorToolbarElementAttribute"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Icon")," attribute defines the icon visible when an Overlay is collapsed. If not provided, the first two letters of the Overlay name (or the first two initial letters of the first two words) are used.")),(0,l.kt)("p",null,"When implementing ToolbarOverlay-specific elements in an Overlay:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The IAccessContainerWindow interface is for toolbar only, therefore, the element won\u2019t be aware of its context. In the DropdownToggleExample, toggling the element won\u2019t do anything."),(0,l.kt)("li",{parentName:"ul"},"The toolbar element won\u2019t carry its styling in an Overlay. Use UIElement styling for visuals.")),(0,l.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,l.kt)("p",null,"This example demonstrates an Overlay named ",(0,l.kt)("em",{parentName:"p"},"Element Toolbars Example")," that demonstrates toolbar elements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EditorToolbarButton"),(0,l.kt)("li",{parentName:"ul"},"EditorToolbarToggle"),(0,l.kt)("li",{parentName:"ul"},"EditorToolbarDropdown"),(0,l.kt)("li",{parentName:"ul"},"EditorToolbarDropdownToggle")),(0,l.kt)("p",null,"Each toolbar element is created as a standalone class and then added to the Overlay panel."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It can be arranged as a panel, horizontally, and vertically."),(0,l.kt)("li",{parentName:"ul"},"The buttons include text and tooltips."),(0,l.kt)("li",{parentName:"ul"},"The toolbar has icons defined by the ",(0,l.kt)("inlineCode",{parentName:"li"},"Icon"),"attribute which will be visible when the toolbar is collapsed.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    using System.Collections;\n    using System.Collections.Generic;\n    using System.Text;\n    using UnityEngine;\n    using UnityEditor.EditorTools;\n    using UnityEditor.Toolbars;\n    using UnityEditor.Overlays;\n    using UnityEngine.UIElements;\n    using UnityEditor;\n\n    // Use [EditorToolbarElement(Identifier, EditorWindowType)] to register toolbar elements for use in ToolbarOverlay implementation.\n\n    [EditorToolbarElement(id, typeof(SceneView))]\n    class DropdownExample : EditorToolbarDropdown\n    {\n        public const string id = "ExampleToolbar/Dropdown";\n\n        static string dropChoice = null;\n\n        public DropdownExample()\n        {\n            text = "Axis";\n            clicked += ShowDropdown;\n        }\n\n        void ShowDropdown()\n        {\n            var menu = new GenericMenu();\n            menu.AddItem(new GUIContent("X"), dropChoice == "X", () =&gt; { text = "X"; dropChoice = "X"; });\n            menu.AddItem(new GUIContent("Y"), dropChoice == "Y", () =&gt; { text = "Y"; dropChoice = "Y"; });\n            menu.AddItem(new GUIContent("Z"), dropChoice == "Z", () =&gt; { text = "Z"; dropChoice = "Z"; });\n            menu.ShowAsContext();\n        }\n    }\n    [EditorToolbarElement(id, typeof(SceneView))]\n    class ToggleExample : EditorToolbarToggle\n    {\n        public const string id = "ExampleToolbar/Toggle";\n        public ToggleExample()\n        {\n            text = "Toggle OFF";\n            this.RegisterValueChangedCallback(Test);\n        }\n\n        void Test(ChangeEvent&lt;bool&gt; evt)\n        {\n            if (evt.newValue)\n            {\n                Debug.Log("ON");\n                text = "Toggle ON";\n            }\n            else\n            {\n                Debug.Log("OFF");\n                text = "Toggle OFF";\n            }\n        }\n    }\n\n    [EditorToolbarElement(id, typeof(SceneView))]\n    class DropdownToggleExample : EditorToolbarDropdownToggle, IAccessContainerWindow\n    {\n        public const string id = "ExampleToolbar/DropdownToggle";\n\n        // This property is specified by IAccessContainerWindow and is used to access the Overlay\'s EditorWindow.\n\n        public EditorWindow containerWindow { get; set; }\n        static int colorIndex = 0;\n        static readonly Color[] colors = new Color[] { Color.red, Color.green, Color.cyan };\n        public DropdownToggleExample()\n        {\n            text = "Color Bar";\n            tooltip = "Display a color rectangle in the top left of the Scene view. Toggle on or off, and open the dropdown" +\n                      "to change the color.";\n\n        // When the dropdown is opened, ShowColorMenu is invoked and we can create a popup menu.\n\n            dropdownClicked += ShowColorMenu;\n\n        // Subscribe to the Scene view OnGUI callback so that we can draw our color swatch.\n\n            SceneView.duringSceneGui += DrawColorSwatch;\n        }\n\n        void DrawColorSwatch(SceneView view)\n        {\n\n         // Test that this callback is for the Scene View that we\'re interested in, and also check if the toggle is on\n        // or off (value).\n\n            if (view != containerWindow || !value)\n            {\n                return;\n            }\n\n            Handles.BeginGUI();\n            GUI.color = colors[colorIndex];\n            GUI.DrawTexture(new Rect(8, 8, 120, 24), Texture2D.whiteTexture);\n            GUI.color = Color.white;\n            Handles.EndGUI();\n        }\n\n        // When the dropdown button is clicked, this method will create a popup menu at the mouse cursor position.\n\n        void ShowColorMenu()\n        {\n            var menu = new GenericMenu();\n            menu.AddItem(new GUIContent("Red"), colorIndex == 0, () =&gt; colorIndex = 0);\n            menu.AddItem(new GUIContent("Green"), colorIndex == 1, () =&gt; colorIndex = 1);\n            menu.AddItem(new GUIContent("Blue"), colorIndex == 2, () =&gt; colorIndex = 2);\n            menu.ShowAsContext();\n        }\n    }\n\n    [EditorToolbarElement(id, typeof(SceneView))]\n    class CreateCube : EditorToolbarButton//, IAccessContainerWindow\n    {\n        // This ID is used to populate toolbar elements.\n\n        public const string id = "ExampleToolbar/Button";\n\n        // IAccessContainerWindow provides a way for toolbar elements to access the `EditorWindow` in which they exist.\n        // Here we use `containerWindow` to focus the camera on our newly instantiated objects after creation.\n        //public EditorWindow containerWindow { get; set; }\n\n        // Because this is a VisualElement, it is appropriate to place initialization logic in the constructor.\n        // In this method you can also register to any additional events as required. In this example there is a tooltip, an icon, and an action.\n\n        public CreateCube()\n        {\n\n    // A toolbar element can be either text, icon, or a combination of the two. Keep in mind that if a toolbar is\n        // docked horizontally the text will be clipped, so usually it\'s a good idea to specify an icon.\n\n            text = "Create Cube";\n            icon = AssetDatabase.LoadAssetAtPath&lt;Texture2D&gt;("Assets/CreateCubeIcon.png");\n            tooltip = "Instantiate a cube in the scene.";\n            clicked += OnClick;\n        }\n\n        // This method will be invoked when the `Create Cube` button is clicked.\n\n        void OnClick()\n        {\n            var newObj = GameObject.CreatePrimitive(PrimitiveType.Cube).transform;\n\n        // When writing editor tools don\'t forget to be a good citizen and implement Undo!\n\n            Undo.RegisterCreatedObjectUndo(newObj.gameObject, "Create Cube");\n\n        //if (containerWindow is SceneView view)\n        //    view.FrameSelected();\n\n        }\n\n    }\n\n    // All Overlays must be tagged with the OverlayAttribute\n\n    [Overlay(typeof(SceneView), "ElementToolbars Example")]\n\n        // IconAttribute provides a way to define an icon for when an Overlay is in collapsed form. If not provided, the name initials are used.\n\n    [Icon("Assets/unity.png")]\n\n    // Toolbar Overlays must inherit `ToolbarOverlay` and implement a parameter-less constructor. The contents of a toolbar are populated with string IDs, which are passed to the base constructor. IDs are defined by EditorToolbarElementAttribute.\n\n    public class EditorToolbarExample : ToolbarOverlay\n    {\n\n     // ToolbarOverlay implements a parameterless constructor, passing the EditorToolbarElementAttribute ID.\n    // This is the only code required to implement a toolbar Overlay. Unlike panel Overlays, the contents are defined\n    // as standalone pieces that will be collected to form a strip of elements.\n\n        EditorToolbarExample() : base(\n            CreateCube.id,\n            ToggleExample.id,\n            DropdownExample.id,\n            DropdownToggleExample.id\n            )\n        { }\n    }\n\n\n')),(0,l.kt)("h3",{id:"toolbar-elements-implementation"},"Toolbar elements implementation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#creating-custom-overlays"},"Creating custom Overlays")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-editor-toolbar-element"},"Using EditorToolbarElement")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#panel-overlays"},"Panel Overlays"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},"Example")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolbar-overlays"},"Toolbar Overlays"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#example"},"Example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolbar-elements-implementation"},"Toolbar elements implementation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#editor-toolbar-button"},"EditorToolbarButton")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#editor-toolbar-toggle"},"EditorToolbarToggle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#editor-toolbar-dropdown"},"EditorToolbarDropdown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#editor-toolbar-dropdown-toggle"},"EditorToolbarDropdownToggle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#panel-overlay"},"Panel Overlay"))))),(0,l.kt)("p",null,"After adding the toolbar elements, implement the ",(0,l.kt)("a",{parentName:"p",href:"#panel-overlay"},"Overlay")," panel."),(0,l.kt)("p",null,"The controls are the same as their equivalent in UIToolkit but inherit some toolbar functionalities (like collapse state, orientation, and panel) and specific styling."),(0,l.kt)("h4",{id:"editortoolbarbutton"},"EditorToolbarButton"),(0,l.kt)("p",null,"A standalone class that will contain all the logic of the element. Here is an example of a button that creates a cube when clicked."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[EditorToolbarElement(id, typeof(SceneView))]\nclass CreateCube : EditorToolbarButton\n{\n// This ID is used to populate toolbar elements.\n\npublic const string id = "ExampleToolbar/Button";   \n\n// Because this is a VisualElement, it is appropriate to place initialization logic in the constructor.\n\n// In this method you can also register to any additional events as required. In this example there is a tooltip, an icon, and an action.\n\n    public CreateCube()\n       {\n\n// A toolbar element can be either text, icon, or a combination of the two. Keep in mind that if a toolbar is docked horizontally the text will be clipped, so it\'s a good idea to specify an icon.\n\n            text = "Create Cube";\n            icon = AssetDatabase.LoadAssetAtPath&lt;Texture2D&gt;("Assets/CreateCubeIcon.png");\n            tooltip = "Instantiate a cube in the scene.";\n            clicked += OnClick;\n}\n\nvoid OnClick()\n{\n    var newObj = GameObject.CreatePrimitive(PrimitiveType.Cube).transform;\n\n    // When writing editor tools, don\'t forget to be a good citizen and implement Undo.\n\n    Undo.RegisterCreatedObjectUndo(newObj.gameObject, "Create Cube");\n\n// Note: Using ObjectFactory class instead of GameObject(like in this example) will register the undo entry automatically removing the need to register manually.\n\n}\n}\n')),(0,l.kt)("p",null,"Add the element\u2019s ID to the Overlay constructor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[Overlay(typeof(SceneView), "ElementToolbar Example")]\n[Icon("Assets/unity.png")]\npublic class EditorToolbarExample : ToolbarOverlay\n{\n    EditorToolbarExample() : base(CreateCube.id) { }\n\n}\n')),(0,l.kt)("h4",{id:"editortoolbartoggle"},"EditorToolbarToggle"),(0,l.kt)("p",null,"Create a standalone class that contains all the logic of the element. Here is a simple example of a toggle that prints its state in the console and updates its text in the element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[EditorToolbarElement(id, typeof(SceneView))]\nclass ToggleExample : EditorToolbarToggle\n{\n    public const string id = "ExampleToolbar/Toggle";\n    public ToggleExample()\n    {\n        text = "Toggle OFF";\n\n    // Register the class to a callback for when the toggle\u2019s state changes\n\n        this.RegisterValueChangedCallback(OnStateChange);\n    }\n\n    void OnStateChange(ChangeEvent&lt;bool&gt; evt)\n    {\n        if (evt.newValue)\n        {\n\n    // Put logic for when the state is ON here\n\n                Debug.Log("Toggle State -&gt; ON");\n        text = "Toggle ON";\n        }\n        else\n        {\n\n    // Put logic for when the state is OFF here\n\n                Debug.Log("Toggle State -&gt; OFF");\n        text = "Toggle OFF";\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Add the element\u2019s ID to the Overlay constructor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[[Overlay(typeof(SceneView), "ElementToolbar Example")]\n[Icon("Assets/unity.png")]\npublic class EditorToolbarExample : ToolbarOverlay\n{\n    EditorToolbarExample() : base(\nToggleExample.id\n) { }\n\n}\n\n')),(0,l.kt)("h4",{id:"editortoolbardropdown"},"EditorToolbarDropdown"),(0,l.kt)("p",null,"Create a standalone class that contains all the logic of the element. Here is a simple example of a drop-down that adjusts its text with the drop-down selection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[EditorToolbarElement(id, typeof(SceneView))]\nclass DropdownExample : EditorToolbarDropdown\n{\n    public const string id = "ExampleToolbar/Dropdown";\n\n    static string dropChoice = null;\n\n    public DropdownExample()\n    {\n        text = "Axis";\n        clicked += ShowDropdown;\n    }\n\n    void ShowDropdown()\n    {\n\n// A simple GenericMenu to populate the dropdown content\n\n        var menu = new GenericMenu();\n        menu.AddItem(new GUIContent("X"), dropChoice == "X", () =&gt; { text = "X"; dropChoice = "X"; });\n        menu.AddItem(new GUIContent("Y"), dropChoice == "Y", () =&gt; { text = "Y"; dropChoice = "Y"; });\n        menu.AddItem(new GUIContent("Z"), dropChoice == "Z", () =&gt; { text = "Z"; dropChoice = "Z"; });\n        menu.ShowAsContext();\n    }\n}\n')),(0,l.kt)("p",null,"Add the element\u2019s ID to the Overlay constructor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[Overlay(typeof(SceneView), "ElementToolbar Example")]\n[Icon("Assets/unity.png")]\npublic class EditorToolbarExample : ToolbarOverlay\n{\n    EditorToolbarExample() : base(\nDropdownExample.id\n) { }\n\n}\n')),(0,l.kt)("h4",{id:"editortoolbardropdowntoggle"},"EditorToolbarDropdownToggle"),(0,l.kt)("p",null,"Create a standalone class that contains all the logic of the element. A drop-down toggle is a dropdown that can also be toggled (Like the Gizmo menu in the Scene view). This example creates a colored rectangle in the corner of the Scene view when toggled with the color chosen from the dropdown."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[EditorToolbarElement(id, typeof(SceneView))]\nclass DropdownToggleExample : EditorToolbarDropdownToggle, IAccessContainerWindow\n{\n    public const string id = "ExampleToolbar/DropdownToggle";\n\n\n    // This property is specified by IAccessContainerWindow and is used to access the Overlay\'s EditorWindow.\n\n    public EditorWindow containerWindow { get; set; }\n    static int colorIndex = 0;\n    static readonly Color[] colors = new Color[] { Color.red, Color.green, Color.cyan };\n    public DropdownToggleExample()\n    {\n        text = "Color Bar";\n        tooltip = "Display a color rectangle in the top left of the Scene view. Toggle on or off, and open the dropdown" +\n                "to change the color.";\n\n\n   // When the dropdown is opened, ShowColorMenu is invoked and you can create a pop-up menu.\n\n        dropdownClicked += ShowColorMenu;\n\n\n    // Subscribe to the Scene view OnGUI callback to draw a color swatch.\n\n        SceneView.duringSceneGui += DrawColorSwatch;\n    }\n\n\n    void DrawColorSwatch(SceneView view)\n    {\n\n        // Test that this callback is for the correct Scene view, and check if the toggle is on\n     // or off (value).\n\n        if (view != containerWindow || !value)\n        {\n            return;\n        }\n\n\n        Handles.BeginGUI();\n            GUI.color = colors[colorIndex];\n        GUI.DrawTexture(new Rect(8, 8, 120, 24), Texture2D.whiteTexture);\n        GUI.color = Color.white;\n        Handles.EndGUI();\n    }\n\n\n    // When the drop-down button is clicked, this method creates a pop-up menu at the mouse cursor position.\n\n    void ShowColorMenu()\n    {\n        var menu = new GenericMenu();\n        menu.AddItem(new GUIContent("Red"), colorIndex == 0, () =&gt; colorIndex = 0);\n        menu.AddItem(new GUIContent("Green"), colorIndex == 1, () =&gt; colorIndex = 1);\n        menu.AddItem(new GUIContent("Blue"), colorIndex == 2, () =&gt; colorIndex = 2);\n        menu.ShowAsContext();\n    }\n}\n')),(0,l.kt)("p",null,"Add the element\u2019s ID to the Overlay constructor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[Overlay(typeof(SceneView), "ElementToolbar Example")]\n[Icon("Assets/unity.png")]\npublic class EditorToolbarExample : ToolbarOverlay\n{\n    EditorToolbarExample() : base(\nDropdownToggleExample.id\n) { }\n\n\n}\n')),(0,l.kt)("h4",{id:"panel-overlay"},"Panel Overlay"),(0,l.kt)("p",null,"Implement the Panel Overlay and add the toolbar element standalone classes. In the example below, all of the toolbar elements are included to demonstrate how to add multiple elements to a toolbar. Toolbar elements must be included in the Panel Overlay to be visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[Overlay(typeof(SceneView), "ElementToolbar Example")]\n[Icon("Assets/unity.png")]\npublic class EditorToolbarExample : Overlay\n{\n    public override VisualElement CreatePanelContent()\n    {\n        var root = new VisualElement() { name = "My Tool Root" };\n        root.Add(new CreateCube());\n        root.Add(new ToggleExample());\n        root.Add(new DropdownExample());\n        root.Add(new DropdownToggleExample());\n        return root;\n    }\n}\n')))}m.isMDXComponent=!0}}]);