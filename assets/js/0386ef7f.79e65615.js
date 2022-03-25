"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26789],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,v=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?i.createElement(v,u(u({ref:t},s),{},{components:n})):i.createElement(v,u({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var c=2;c<o;c++)u[c]=n[c];return i.createElement.apply(null,u)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),u=["components"],a={id:"device-simulator-plugins",title:"Extending the device simulator",slug:"/device-simulator/device-simulator-plugins"},l="Extending the device simulator",c={unversionedId:"unity-overview/using-the-editor/device-simulator/device-simulator-plugins",id:"unity-overview/using-the-editor/device-simulator/device-simulator-plugins",title:"Extending the device simulator",description:"The Device Simulator supports plugins to extend its functionality and change the UI of the Control Panel in the Simulator view.",source:"@site/docs/unity-overview/using-the-editor/device-simulator/device-simulator-plugins.md",sourceDirName:"unity-overview/using-the-editor/device-simulator",slug:"/device-simulator/device-simulator-plugins",permalink:"/doc-unity-manual/docs/device-simulator/device-simulator-plugins",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-overview/using-the-editor/device-simulator/device-simulator-plugins.md",tags:[],version:"current",frontMatter:{id:"device-simulator-plugins",title:"Extending the device simulator",slug:"/device-simulator/device-simulator-plugins"},sidebar:"tutorialSidebar",previous:{title:"Device Simulator introduction",permalink:"/doc-unity-manual/docs/device-simulator/device-simulator-introduction"},next:{title:"Simulated classes",permalink:"/doc-unity-manual/docs/device-simulator/device-simulator-simulated-classes"}},s={},d=[{value:"Creating a plugin",id:"creating-a-plugin",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extending-the-device-simulator"},"Extending the device simulator"),(0,o.kt)("p",null,"The Device Simulator supports plugins to extend its functionality and change the UI of the Control Panel in the Simulator view."),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,o.kt)("p",null,"To create a Device Simulator plugin, extend the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/DeviceSimulation.DeviceSimulatorPlugin.html"},"DeviceSimulatorPlugin")," class."),(0,o.kt)("p",null,"To insert UI into the Device Simulator view, your plugin must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Override the ",(0,o.kt)("inlineCode",{parentName:"li"},"title")," property to return a non-empty string."),(0,o.kt)("li",{parentName:"ul"},"Override the ",(0,o.kt)("inlineCode",{parentName:"li"},"OnCreateUI")," method to return a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/UIElements.VisualElement.html"},"VisualElement")," that contains the UI.")),(0,o.kt)("p",null,"If your plugin doesn\u2019t meet these conditions, the Device Simulator instantiates the plugin but doesn\u2019t display its UI in the Simulator view."),(0,o.kt)("p",null,"The following example demonstrates how to create a plugin that overrides the title property and adds UI to the Simulator view."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'public class TouchInfoPlugin : DeviceSimulatorPlugin\n{\n    public override string title =&gt; "Touch Info";\n    private Label m_TouchCountLabel;\n    private Label m_LastTouchEvent;\n    private Button m_ResetCountButton;\n\n    [SerializeField]\n    private int m_TouchCount = 0;\n\n    public override void OnCreate()\n    {\n        deviceSimulator.touchScreenInput += touchEvent =&gt;\n        {\n            m_TouchCount += 1;\n            UpdateTouchCounterText();\n            m_LastTouchEvent.text = $"Last touch event: {touchEvent.phase.ToString()}";\n        };\n    }\n\n    public override VisualElement OnCreateUI()\n    {\n        VisualElement root = new VisualElement();\n        \n        m_LastTouchEvent = new Label("Last touch event: None");\n        \n        m_TouchCountLabel = new Label();\n        UpdateTouchCounterText();\n\n        m_ResetCountButton = new Button {text = "Reset Count" };\n        m_ResetCountButton.clicked += () =&gt;\n        {\n            m_TouchCount = 0;\n            UpdateTouchCounterText();\n        };\n\n        root.Add(m_LastTouchEvent);\n        root.Add(m_TouchCountLabel);\n        root.Add(m_ResetCountButton);\n            \n        return root;\n    }\n\n    private void UpdateTouchCounterText()\n    {\n        if (m_TouchCount &gt; 0)\n            m_TouchCountLabel.text = $"Touches recorded: {m_TouchCount}";\n        else\n            m_TouchCountLabel.text = "No taps recorded";\n    }\n}\n')))}p.isMDXComponent=!0}}]);