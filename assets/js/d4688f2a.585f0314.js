"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55903],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return n?o.createElement(k,l(l({ref:t},d),{},{components:n})):o.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return m}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],r={id:"UIE-simple-ui-toolkit-workflow",title:"Simple UI Toolkit workflow",slug:"/uie-getting-started/uie-simple-ui-toolkit-workflow"},s="Simple UI Toolkit workflow",u={unversionedId:"uitoolkits/uielements/uie-getting-started/UIE-simple-ui-toolkit-workflow",id:"uitoolkits/uielements/uie-getting-started/UIE-simple-ui-toolkit-workflow",title:"Simple UI Toolkit workflow",description:"If you perform a specific task often, you can use UI Toolkit to create a dedicated UI for it. For example you can create a custom Editor window.",source:"@site/docs/uitoolkits/uielements/uie-getting-started/uie-simple-ui-toolkit-workflow.md",sourceDirName:"uitoolkits/uielements/uie-getting-started",slug:"/uie-getting-started/uie-simple-ui-toolkit-workflow",permalink:"/doc-unity-manual/docs/uie-getting-started/uie-simple-ui-toolkit-workflow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/uitoolkits/uielements/uie-getting-started/uie-simple-ui-toolkit-workflow.md",tags:[],version:"current",frontMatter:{id:"UIE-simple-ui-toolkit-workflow",title:"Simple UI Toolkit workflow",slug:"/uie-getting-started/uie-simple-ui-toolkit-workflow"},sidebar:"tutorialSidebar",previous:{title:"Creating your first runtime UI",permalink:"/doc-unity-manual/docs/uie-getting-started/uie-how-to-create-runtime-ui"},next:{title:"IMGUI support",permalink:"/doc-unity-manual/docs/uielements/uie-imgui"}},d={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"Create a custom Editor window",id:"create-a-custom-editor-window",level:2},{value:"\u5411\u7a97\u53e3\u6dfb\u52a0 UI \u63a7\u4ef6",id:"\u5411\u7a97\u53e3\u6dfb\u52a0-ui-\u63a7\u4ef6",level:2},{value:"Use UI Builder to add UI controls",id:"use-ui-builder-to-add-ui-controls",level:3},{value:"Use UXML to add UI controls",id:"use-uxml-to-add-ui-controls",level:3},{value:"Use C# script to add UI controls",id:"use-c-script-to-add-ui-controls",level:3},{value:"Define the behavior of your UI controls",id:"define-the-behavior-of-your-ui-controls",level:2}],p={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-ui-toolkit-workflow"},"Simple UI Toolkit workflow"),(0,a.kt)("p",null,"If you perform a specific task often, you can use UI Toolkit to create a dedicated UI for it. For example you can create a custom Editor window."),(0,a.kt)("p",null,"This guide describes the basic UI Toolkit workflow using a custom Editor window as an example. The example demonstrates how to create a custom Editor window and add UI controls into your custom Editor window using ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uibuilder"},"UI Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uie-uxml"},"UXML"),", and C# script."),(0,a.kt)("p",null,"You can find the completed files that this example creates in this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/ui-toolkit-manual-code-examples/tree/master/simple-ui-toolkit-workflow"},"GitHub repository"),"."),(0,a.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("p",null,"This guide is for developers familiar with the Unity Editor and C# scripting, but new to UI Toolkit. Unity recommends that you have a basic understanding of the following concepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uibuilder"},"UI Builder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-uxml"},"UXML")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uielements/uie-visual-tree"},"Visual Tree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/uie-controls"},"Controls"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.Label.html"},"Label")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.button.html"},"Button")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.toggle.html"},"Toggle"))))),(0,a.kt)("h2",{id:"create-a-custom-editor-window"},"Create a custom Editor window"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the Project window, right-click and select  ",(0,a.kt)("strong",{parentName:"li"},"Create"),"  ",">","  ",(0,a.kt)("strong",{parentName:"li"},"UI Toolkit"),"  ",">","  ",(0,a.kt)("strong",{parentName:"li"},"Editor Window")," ."),(0,a.kt)("li",{parentName:"ol"},"In  ",(0,a.kt)("strong",{parentName:"li"},"UI Toolkit Editor Window Creator")," , enter ",(0,a.kt)("inlineCode",{parentName:"li"},"MyCustomEditor")," and disable  ",(0,a.kt)("strong",{parentName:"li"},"USS")," ."),(0,a.kt)("li",{parentName:"ol"},"Click  ",(0,a.kt)("strong",{parentName:"li"},"Confirm")," .")),(0,a.kt)("p",null,"This creates a custom Editor window with two labels. You can open the Editor window from the menu ( ",(0,a.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"UI Toolkit"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"MyCustomEditor")," ). You can find the source files for it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset/Editor")," folder."),(0,a.kt)("h2",{id:"\u5411\u7a97\u53e3\u6dfb\u52a0-ui-\u63a7\u4ef6"},"\u5411\u7a97\u53e3\u6dfb\u52a0 UI \u63a7\u4ef6"),(0,a.kt)("p",null,"You can add UI controls into your window in the following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-the-ui-builder-to-visually-add-the-ui-controls"},"Use the UI Builder to visually add the UI controls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-an-xml-like-text-file-uxml-to-add-the-ui-controls"},"Use an XML-like text file (UXML) to add the UI controls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-c-script-to-add-the-ui-controls"},"Use C# script to add the UI controls"))),(0,a.kt)("p",null,"You can use any of these methods individually, or combine. The following examples create three sets of labels, buttons, and toggles using a combination of these methods."),(0,a.kt)("h3",{id:"use-ui-builder-to-add-ui-controls"},"Use UI Builder to add UI controls"),(0,a.kt)("p",null,"To visually add UI controls to your window, use ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uibuilder"},"UI Builder"),". The following example demonstrates how to add a button and a toggle into your custom Editor window in addition to the default label."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Editor")," folder, double-click ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor.uxml")," to open the UI Builder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the UI Builder, drag  ",(0,a.kt)("strong",{parentName:"p"},"Button"),"  and  ",(0,a.kt)("strong",{parentName:"p"},"Toggle"),"  from  ",(0,a.kt)("strong",{parentName:"p"},"Library"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Controls"),"  into the  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy"),"  or the window preview in the  ",(0,a.kt)("strong",{parentName:"p"},"Viewport")," .")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In  ",(0,a.kt)("strong",{parentName:"p"},"Hierarchy")," , add some attributes to your controls:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Click the label, and then in the  ",(0,a.kt)("strong",{parentName:"li"},"Text"),"  field of the  ",(0,a.kt)("strong",{parentName:"li"},"Inspector")," , change the default text to ",(0,a.kt)("inlineCode",{parentName:"li"},"These controls were created in UI Builder"),"."),(0,a.kt)("li",{parentName:"ul"},"Click the button, and then in the  ",(0,a.kt)("strong",{parentName:"li"},"Text"),"  field of the  ",(0,a.kt)("strong",{parentName:"li"},"Inspector")," , enter ",(0,a.kt)("inlineCode",{parentName:"li"},"This is button1"),". In the  ",(0,a.kt)("strong",{parentName:"li"},"Name"),"  field of the  ",(0,a.kt)("strong",{parentName:"li"},"Inspector")," , enter ",(0,a.kt)("inlineCode",{parentName:"li"},"button1"),"."),(0,a.kt)("li",{parentName:"ul"},"Click the toggle, and then in the  ",(0,a.kt)("strong",{parentName:"li"},"Label"),"  field of the  ",(0,a.kt)("strong",{parentName:"li"},"Inspector")," , enter ",(0,a.kt)("inlineCode",{parentName:"li"},"Number?"),". In the  ",(0,a.kt)("strong",{parentName:"li"},"Name"),"  field of the  ",(0,a.kt)("strong",{parentName:"li"},"Inspector")," , enter ",(0,a.kt)("inlineCode",{parentName:"li"},"toggle1"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uib-getting-started/uib-getting-started-documents"},"Save")," and close the UI Builder window.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your custom Editor window. You should see the button and the toggle you just added in your window."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/CustomEditorWithUIControls1.png",alt:"Custom Editor Window with one set UI Controls"})),(0,a.kt)("p",null,"Custom Editor Window with one set UI Controls"),(0,a.kt)("h3",{id:"use-uxml-to-add-ui-controls"},"Use UXML to add UI controls"),(0,a.kt)("p",null,"If you prefer define your UI in a text file, you can edit the ",(0,a.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uie-uxml"},"UXML")," to add the UI controls. The example adds another set of label, button, and toggle into your window."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Editor")," folder, click  ",(0,a.kt)("strong",{parentName:"p"},"Assets"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Create"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"UI Toolkit"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"UI Document"),"  to create a UXML file called ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor_UXML.uxml"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor_UXML.uxml")," on a text editor."),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("strong",{parentName:"p"},"Tip")," : You can do so by clicking the arrow on ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor_UXML.uxml")," in the Project window, and then double-clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"inlineStyle"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By default, the UXML document displays a single element with the ",(0,a.kt)("inlineCode",{parentName:"p"},"engine:UXML")," tag. This is the root element of the XML tree. Within this element, you can add the UI controls with their attributes."),(0,a.kt)("p",{parentName:"li"},"Your finished ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor_UXML.uxml")," file should look like the following:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'&lt;?xml version="1.0" encoding="utf-8"?&gt;\n&lt;engine:UXML\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:engine="UnityEngine.UIElements"\n    xmlns:editor="UnityEditor.UIElements"\n    xsi:noNamespaceSchemaLocation="../../UIElementsSchema/UIElements.xsd"\n&gt;\n    &lt;engine:Label text="These controls were created with UXML." /&gt;\n    &lt;engine:Button text="This is button2." name="button2"/&gt;\n    &lt;engine:Toggle label="Number?" name="toggle2"/&gt;\n&lt;/engine:UXML&gt;\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor.cs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a private ",(0,a.kt)("inlineCode",{parentName:"p"},"VisualTreeAsset")," field called ",(0,a.kt)("inlineCode",{parentName:"p"},"m_UXMLTree")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor")," class. Put the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"[SerializeField]")," above it:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[SerializeField]\nprivate VisualTreeAsset m_UXMLTree;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following line of code to the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateGUI()"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rootVisualElement.Add(m_UXMLTree.Instantiate());\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Project window, select ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor.cs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor_UXML.uxml")," from the Project window into the  ",(0,a.kt)("strong",{parentName:"p"},"UXML Tree"),"  field in the  ",(0,a.kt)("strong",{parentName:"p"},"Inspector")," . This assigns your UXML to the visual tree.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your custom Editor window. You should see three labels, two buttons, and two toggles in your window."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/CustomEditorWithUIControls2.png",alt:"Custom Editor Window with two sets UI Controls"})),(0,a.kt)("p",null,"Custom Editor Window with two sets UI Controls"),(0,a.kt)("h3",{id:"use-c-script-to-add-ui-controls"},"Use C# script to add UI controls"),(0,a.kt)("p",null,"If you prefer coding, you can add UI Controls to your window using C# script. The following example adds another set of label, button, and toggle into your window."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomEditor.cs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Unity uses ",(0,a.kt)("inlineCode",{parentName:"p"},"UnityEngine.UIElements")," for basic UI controls like label, button, and toggle. To work with UI controls, you must add the following declaration if it\u2019s not already present."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"using UnityEngine.UIElements;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the text of the existing label from ",(0,a.kt)("inlineCode",{parentName:"p"},'"Hello World! From C#"')," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"These controls were created using C# code."'),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/EditorWindow.html"},"EditorWindow")," class has a property called ",(0,a.kt)("inlineCode",{parentName:"p"},"rootVisualElement"),". To add the UI controls to your window, first instantiate the element class with some attributes, and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"rootVisualElement"),"."),(0,a.kt)("p",{parentName:"li"},"Your finished ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateGUI()")," method should look like the following:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'public void CreateGUI()\n{\n    // Each editor window contains a root VisualElement object\n    VisualElement root = rootVisualElement;\n\n    // VisualElements objects can contain other VisualElements following a tree hierarchy.\n    Label label = new Label("These controls were created using C# code.");\n    root.Add(label);\n\n    Button button = new Button();\n    button.name = "button3";\n    button.text = "This is button3.";\n    rootVisualElement.Add(button);\n\n    Toggle toggle = new Toggle();\n    toggle.name = "toggle3";\n    toggle.label = "Number?";\n    rootVisualElement.Add(toggle);\n\n    // Import UXML\n    var visualTree = AssetDatabase.LoadAssetAtPath&lt;VisualTreeAsset&gt;("Assets/Editor/MyCustomEditor.uxml");\n    VisualElement labelFromUXML = visualTree.Instantiate();\n    root.Add(labelFromUXML);\n\n    rootVisualElement.Add(m_UXMLTree.Instantiate());\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the Editor and open your custom Editor window. You should see three labels, three buttons, and three toggles in your window."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/UIBuilder/CustomEditorWithUIControls.png",alt:"Custom Editor Window with three Controls"})),(0,a.kt)("p",null,"Custom Editor Window with three Controls"),(0,a.kt)("h2",{id:"define-the-behavior-of-your-ui-controls"},"Define the behavior of your UI controls"),(0,a.kt)("p",null,"You can set up event handlers for your UI controls so that when you click the button, and select or clear the toggle, your UI controls perform some tasks."),(0,a.kt)("p",null,"The code below shows example event handlers that do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When a button is clicked, the Editor Console displays a message."),(0,a.kt)("li",{parentName:"ul"},"When a toggle is selected, the Console shows how many times the buttons have been clicked.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using UnityEditor;\nusing UnityEngine;\nusing UnityEngine.UIElements;\n\npublic class MyCustomEditor : EditorWindow\n{\n    [MenuItem("Window/UI Toolkit/MyCustomEditor")]\n    public static void ShowExample()\n    {\n        MyCustomEditor wnd = GetWindow&lt;MyCustomEditor&gt;();\n        wnd.titleContent = new GUIContent("MyCustomEditor");\n    }\n\n    [SerializeField]\n    private VisualTreeAsset m_UXMLTree;\n\n    private int m_ClickCount = 0;\n\n    private const string m_ButtonPrefix = "button";\n\n    public void CreateGUI()\n    {\n        // Each editor window contains a root VisualElement object\n        VisualElement root = rootVisualElement;\n\n        // VisualElements objects can contain other VisualElements following a tree hierarchy.\n        Label label = new Label("These controls were created using C# code.");\n        root.Add(label);\n\n        Button button = new Button();\n        button.name = "button3";\n        button.text = "This is button3.";\n        rootVisualElement.Add(button);\n\n        Toggle toggle = new Toggle();\n        toggle.name = "toggle3";\n        toggle.label = "Number?";\n        rootVisualElement.Add(toggle);\n\n        // Import UXML\n        var visualTree = AssetDatabase.LoadAssetAtPath&lt;VisualTreeAsset&gt;("Assets/Editor/MyCustomEditor.uxml");\n        VisualElement labelFromUXML = visualTree.Instantiate();\n        root.Add(labelFromUXML);\n\n        rootVisualElement.Add(m_UXMLTree.Instantiate());\n\n        //Call the event handler\n        SetupButtonHandler();\n    }\n\n    //Functions as the event handlers for your button click and number counts \n    private void SetupButtonHandler()\n    {\n        var buttons = rootVisualElement.Query&lt;Button&gt;();\n        buttons.ForEach(RegisterHandler);\n    }\n\n    private void RegisterHandler(Button button)\n    {\n        button.RegisterCallback&lt;ClickEvent&gt;(PrintClickMessage);\n    }\n\n    private void PrintClickMessage(ClickEvent evt)\n    {\n        ++m_ClickCount;\n\n        //Because of the names we gave the buttons and toggles, we can use the\n        //button name to find the toggle name.\n        Button button = evt.currentTarget as Button;\n        string buttonNumber = button.name.Substring(m_ButtonPrefix.Length);\n        string toggleName = "toggle" + buttonNumber;\n        Toggle toggle = rootVisualElement.Q&lt;Toggle&gt;(toggleName);\n\n        Debug.Log("Button was clicked!" +\n            (toggle.value ? " Count: " + m_ClickCount : ""));\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI Toolkit simple workflow added in Unity ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2021.2/Documentation/Manual/30_search.html?q=newin20212"},"2021.2")," NewIn20212")))}c.isMDXComponent=!0}}]);