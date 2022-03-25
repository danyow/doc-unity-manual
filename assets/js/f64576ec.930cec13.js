"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93331],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70904:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"Quickstart2DCreate",title:"Creating a 2D game",slug:"/quickstart2d/quickstart2dcreate"},l="Creating a 2D game",p={unversionedId:"unity2d/quickstart2d/Quickstart2DCreate",id:"unity2d/quickstart2d/Quickstart2DCreate",title:"Creating a 2D game",description:"Before you create a 2D game, you need to decide on a game perspective and an art style.",source:"@site/docs/unity2d/quickstart2d/quickstart2dcreate.md",sourceDirName:"unity2d/quickstart2d",slug:"/quickstart2d/quickstart2dcreate",permalink:"/doc-unity-manual/docs/quickstart2d/quickstart2dcreate",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/quickstart2d/quickstart2dcreate.md",tags:[],version:"current",frontMatter:{id:"Quickstart2DCreate",title:"Creating a 2D game",slug:"/quickstart2d/quickstart2dcreate"},sidebar:"tutorialSidebar",previous:{title:"Art styles for 2D games",permalink:"/doc-unity-manual/docs/quickstart2d/quickstart2dart"},next:{title:"Game perspectives for 2D games",permalink:"/doc-unity-manual/docs/quickstart2d/quickstart2dperspective"}},c={},u=[{value:"Fundamentals",id:"fundamentals",level:2},{value:"\u811a\u672c",id:"\u811a\u672c",level:2},{value:"Sprites",id:"sprites",level:2},{value:"Importing and setting up Sprites",id:"importing-and-setting-up-sprites",level:3},{value:"Rendering Sprites",id:"rendering-sprites",level:3},{value:"Sprite Atlas",id:"sprite-atlas",level:3},{value:"Building in-game environments",id:"building-in-game-environments",level:2},{value:"9-slicing",id:"9-slicing",level:3},{value:"Tilemap",id:"tilemap",level:3},{value:"2D Tilemap Extras",id:"2d-tilemap-extras",level:4},{value:"Isometric Tilemaps",id:"isometric-tilemaps",level:4},{value:"SpriteShape",id:"spriteshape",level:3},{value:"Character animation",id:"character-animation",level:2},{value:"Frame-by-frame",id:"frame-by-frame",level:3},{value:"Cutout",id:"cutout",level:3},{value:"Skeletal",id:"skeletal",level:3},{value:"\u56fe\u5f62",id:"\u56fe\u5f62",level:2},{value:"Lighting",id:"lighting",level:3},{value:"Shadows",id:"shadows",level:3},{value:"Enhanced look and feel",id:"enhanced-look-and-feel",level:3},{value:"Particle systems",id:"particle-systems",level:4},{value:"Post-processing",id:"post-processing",level:4},{value:"Physics 2D",id:"physics-2d",level:2},{value:"Rigidbody 2D",id:"rigidbody-2d",level:3},{value:"Collider 2D",id:"collider-2d",level:3},{value:"Triggers",id:"triggers",level:3},{value:"2D Joints",id:"2d-joints",level:3},{value:"2D Effectors",id:"2d-effectors",level:3},{value:"Audio",id:"audio",level:2},{value:"User interface",id:"user-interface",level:2},{value:"Profiling, optimizing and testing a build",id:"profiling-optimizing-and-testing-a-build",level:2},{value:"\u6027\u80fd\u5206\u6790",id:"\u6027\u80fd\u5206\u6790",level:3},{value:"Optimizing",id:"optimizing",level:3},{value:"Testing",id:"testing",level:3},{value:"Publishing",id:"publishing",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-2d-game"},"Creating a 2D game"),(0,r.kt)("p",null,"Before you create a 2D game, you need to decide on a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/quickstart2d/quickstart2dperspective"},"game perspective")," and an ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/quickstart2d/quickstart2dart"},"art style"),"."),(0,r.kt)("p",null,"To create a 2D game, ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/quickstart2d/quickstart2dsetup"},"set up your Unity project")," and then familiarize yourself with the relevant concepts in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#fundamentals"},"Fundamentals")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E8%84%9A%E6%9C%AC"},"Scripting")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#sprites"},"Sprites")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#building-in-game-environments"},"Building in-game environments")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#character-animation"},"Character animation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#%E5%9B%BE%E5%BD%A2"},"Graphics")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#physics-2d"},"Physics 2D")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#audio"},"Audio")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#user-interface"},"User interface")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#profiling-optimizing-and-testing-a-build"},"Profiling, optimizing and testing")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#publishing"},"Publishing"))),(0,r.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/game-objects"},"GameObjects")," are fundamental objects in Unity that represent characters, props, scenery, and more. Every object in your game is a GameObject."),(0,r.kt)("p",null,"GameObjects represent the items in your game; the space in which you place them to build your level is called a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/creating-scenes"},"scene"),". Scenes in Unity are always 3D; when you make a 2D game in Unity, you typically choose to ignore the third dimension (the z-axis) but you can also use it in special cases, for example when making 2.5D games."),(0,r.kt)("p",null,"The behavior of GameObjects is defined by blocks of functionality called components. The following components are fundamental for 2D games:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/game-objects/class-transform"},"Transform"),": the Transform component determines the Position, Rotation, and Scale of each GameObject in the scene. Every GameObject has a Transform component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/sprites/class-sprite-renderer"},"Sprite Renderer"),": the Sprite Renderer component renders the Sprite and controls how it looks in a scene."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/cameras-overview/class-camera"},"Cameras"),": devices that capture and display the world to the player. Marking a Camera as  ",(0,r.kt)("strong",{parentName:"li"},"Orthographic"),"  removes all perspective from the Camera\u2019s view. This is mostly useful for making isometric or 2D games."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d"},"Collider 2D"),": this component defines the shape of a 2D GameObject for the purposes of physical collisions. See ",(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/comp-manager-group/class-physics2dmanager"},"2D Physics"),".")),(0,r.kt)("p",null,"Components are UI representations of C# classes; you can use scripts to change and interact with components, or create new ones. See the ",(0,r.kt)("a",{parentName:"p",href:"#%E8%84%9A%E6%9C%AC"},"Scripting")," section for more details."),(0,r.kt)("h2",{id:"\u811a\u672c"},"\u811a\u672c"),(0,r.kt)("p",null,"All 2D games need ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scripting-section"},"scripts"),". Scripts respond to input from the player and arrange for events in the gameplay to happen when they should."),(0,r.kt)("p",null,"For details on how to use scripts in Unity see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/scripting-concepts"},"Scripting Overview"),". Also see the Unity Learn ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/course/beginner-scripting"},"Beginner Scripting")," course."),(0,r.kt)("p",null,"Scripts are attached to GameObjects, and any script you create inherits from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/MonoBehaviour.html"},"MonoBehaviour")," class."),(0,r.kt)("h2",{id:"sprites"},"Sprites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites"},"Sprites")," are 2D graphic objects. You use Sprites for all types of 2D games. For example, you can import an image of your main character as a Sprite."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-sprite-2d.png",alt:"A character Sprite"})),(0,r.kt)("p",null,"A character Sprite"),(0,r.kt)("p",null,"You can also use a collection of Sprites to build a character. This allows you greater control over the movement and animation of your characters."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-sprite-editor-2d.png",alt:"Multiple Sprites that make up the parts of a character, displayed in the Sprite Editor"})),(0,r.kt)("p",null,"Multiple Sprites that make up the parts of a character, displayed in the Sprite Editor"),(0,r.kt)("h3",{id:"importing-and-setting-up-sprites"},"Importing and setting up Sprites"),(0,r.kt)("p",null,"Import your Sprites with Unity\u2019s recommended settings; see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites"},"Importing and Setting Up Sprites"),"."),(0,r.kt)("h3",{id:"rendering-sprites"},"Rendering Sprites"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites/class-sprite-renderer"},"Sprite Renderer")," component to render your Sprites. For example, you can use the Sprite Renderer to change the color and opacity of a Sprite."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-sprite-renderer-2d.png",alt:"Adjusting the color of a Sprite with the Sprite Renderer"})),(0,r.kt)("p",null,"Adjusting the color of a Sprite with the Sprite Renderer"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/introduction-to-the-sprite-renderer#"},"Introduction to the Sprite Renderer Learn tutorial"),". Sorting SpritesBy organizing Sprites in layers, you can create an illusion of depth. You can sort Sprites according to many strategies. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites"},"Sorting Sprites")," for full details. For example, you might sort Sprites along the y-axis, so that Sprites that are higher up are sorted behind Sprites that are lower, to make the Sprites that are higher appear further away than the Sprites that are lower."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-sort-sprites-2d.png",alt:"Sprites sorted along the y-axis"})),(0,r.kt)("p",null,"Sprites sorted along the y-axis"),(0,r.kt)("p",null,"To set the overlay order of Sprites, use ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-tag-manager"},"Sorting Layers"),"."),(0,r.kt)("p",null,"To group GameObjects with ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites/class-sprite-renderer"},"Sprite Renderers"),", and control the order in which they render their Sprites, use ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites/class-sorting-group"},"Sorting Groups"),"."),(0,r.kt)("h3",{id:"sprite-atlas"},"Sprite Atlas"),(0,r.kt)("p",null,"You can use a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-sprite-atlas"},"Sprite Atlas")," to consolidate several Textures into a single combined Texture. This optimizes your game and saves memory. For example, you can add all your Sprites associated with a particular character or purpose to a Sprite Atlas."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-sprite-atlas-2d.png",alt:"A Sprite Atlas"})),(0,r.kt)("p",null,"A Sprite Atlas"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/introduction-to-the-sprite-atlas"},"Introduction to the Sprite Atlas Learn tutorial"),"."),(0,r.kt)("h2",{id:"building-in-game-environments"},"Building in-game environments"),(0,r.kt)("p",null,"Environment design refers to the process of building your game\u2019s levels and environments. You can combine the environment design tools in this section in whichever way makes the most sense for your game; for example, you can make a top-down game using only 9-slice, or you can make a side on platformer with Tilemap and SpriteShape."),(0,r.kt)("h3",{id:"9-slicing"},"9-slicing"),(0,r.kt)("p",null,"9-slicing is a 2D technique that allows you to reuse an image at various sizes without needing to prepare multiple assets. Unity can dynamically stretch and tile designated parts of a Sprite to allow one Sprite to serve as the border or background for UI elements of many sizes. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/sprites/9slice-sprites"},"9-slicing sprites"),"."),(0,r.kt)("p",null,"For example, you could use 9-slicing to stretch a Sprite to shape when you build a 2D level."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-9-slice-2d.png",alt:"A 9-sliced Sprite, split into nine sections"})),(0,r.kt)("p",null,"A 9-sliced Sprite, split into nine sections"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/using-9-slicing-for-scalable-sprites-2019-3"},"Using 9-Slicing for Scalable Sprites Learn tutorial"),"."),(0,r.kt)("h3",{id:"tilemap"},"Tilemap"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-tilemap"},"Tilemap")," component is a system that stores and handles Tile assets for creating 2D levels. Use the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/class-tilemap"},"2D Tilemap Editor")," package (installed by default) to use Tilemaps."),(0,r.kt)("p",null,"For example, you can use Tilemaps to paint levels using Tiles and brush tools and define rules for how Tiles behave."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-tilemap-2d.png",alt:"The Tile Palette window, used to edit Tilemaps"})),(0,r.kt)("p",null,"The Tile Palette window, used to edit Tilemaps"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/introduction-to-tilemaps"},"Introduction to Tilemaps Learn tutorial"),"."),(0,r.kt)("h4",{id:"2d-tilemap-extras"},"2D Tilemap Extras"),(0,r.kt)("p",null,"To add some extra Tilemap assets to your Project, install the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.2d.tilemap.extras@1.6/manual/index.html"},"2D Tilemap Extras")," package. This package contains reusable 2D and Tilemap Editor scripts that you can use for your own Projects. You can customize the behavior of the scripts to create new Brushes that suit different scenarios."),(0,r.kt)("h4",{id:"isometric-tilemaps"},"Isometric Tilemaps"),(0,r.kt)("p",null,"For games with isometric perspective, you can create ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/tilemap-isometric"},"Isometric Tilemaps"),"."),(0,r.kt)("h3",{id:"spriteshape"},"SpriteShape"),(0,r.kt)("p",null,"In a similar way to a vector drawing tool, SpriteShape provides a more flexible way to create larger Sprites, such as organic-looking landscapes and paths. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.2d.spriteshape@3.0/manual/SSProfile.html"},"Sprite Shape Profile"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-spriteshape-path-2d.png",alt:"A path created in SpriteShape"})),(0,r.kt)("p",null,"A path created in SpriteShape"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/working-with-spriteshape"},"Working with SpriteShape tutorial"),"."),(0,r.kt)("h2",{id:"character-animation"},"Character animation"),(0,r.kt)("p",null,"There are three different ways you can animate 2D characters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2D animation type"),(0,r.kt)("th",{parentName:"tr",align:null},"Used for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frame-by-frame"),(0,r.kt)("td",{parentName:"tr",align:null},"Artistic reasons, if you want your game to have a classic animation art style. Frame-by-frame animation is relatively resource-intensive, both to make and to run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cutout"),(0,r.kt)("td",{parentName:"tr",align:null},"Smooth skeletal animation, when the characters don\u2019t require realistic articulation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skeletal"),(0,r.kt)("td",{parentName:"tr",align:null},"Smooth skeletal animation where Sprites bend according to the bone structure. Use this when the characters need a more organic feel.")))),(0,r.kt)("h3",{id:"frame-by-frame"},"Frame-by-frame"),(0,r.kt)("p",null,"Frame-by-frame animation is based on the traditional cel animation technique of drawing each moment of an animation as individual images, which are played in fast sequence, like flipping pages on a flipbook."),(0,r.kt)("p",null,"To do frame-by-frame animation, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.2d.animation@2.2/manual/FFanimation.html"},"Frame-by-frame Animation workflow"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-frame-by-frame-2d.png",alt:"Frame-by-frame animation in the Sprite Editor"})),(0,r.kt)("p",null,"Frame-by-frame animation in the Sprite Editor"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/introduction-to-sprite-animations"},"Introduction to Sprite Animations Learn tutorial"),"."),(0,r.kt)("h3",{id:"cutout"},"Cutout"),(0,r.kt)("p",null,"In cutout animation, multiple Sprites make up the body of a character, and each piece moves to give the visual effect of the whole character moving. This animation style is similar to skeletal animation (see below), except that the Sprites don\u2019t bend."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-cutout-2d.png",alt:"Cutout animation in the Sprite Editor"})),(0,r.kt)("p",null,"Cutout animation in the Sprite Editor"),(0,r.kt)("h3",{id:"skeletal"},"Skeletal"),(0,r.kt)("p",null,"With skeletal animation, you map a Sprite or a group of Sprites onto an animation skeleton. You can create and define animation bones for characters and objects, that define how they should bend and move. This approach allows the bones to bend and deform the Sprites, for a more natural movement style. To use skeletal animation, you need to use the ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/pack-safe/com-unity-2d-animation"},"2D Animation")," package (installed by default)."),(0,r.kt)("p",null,"For a 2D Animation workflow, including a guide to working with the Bone Editor, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.2d.animation@1.0/manual/index.html"},"2D Animation documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-skeletal-2d.png",alt:"A character with bones in the Bone Editor"})),(0,r.kt)("p",null,"A character with bones in the Bone Editor"),(0,r.kt)("h2",{id:"\u56fe\u5f62"},"\u56fe\u5f62"),(0,r.kt)("p",null,"This section describes your graphics options when using Universal Render Pipeline (URP)."),(0,r.kt)("h3",{id:"lighting"},"Lighting"),(0,r.kt)("p",null,"Because you\u2019re using URP with the 2D Renderer, you can use the Light 2D component to apply optimized 2D lighting to Sprites. For details, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.0/manual/Lights-2D-intro.html"},"Introduction to Lights 2D"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-lighting-2d.png",alt:"These two images show the same scene; in the image on the left, 2D Lights are disabled, and in the image on the right, 2D lights are enabled. With 2D Lights, you can use the same Sprites to create different weather conditions or moods."})),(0,r.kt)("p",null,"These two images show the same scene; in the image on the left, 2D Lights are disabled, and in the image on the right, 2D lights are enabled. With 2D Lights, you can use the same Sprites to create different weather conditions or moods."),(0,r.kt)("p",null,"To set up lighting:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare your Sprites for lighting. For details, see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.0/manual/PrepShader.html"},"Preparing Sprites for Lighting"),"."),(0,r.kt)("li",{parentName:"ol"},"Set up normal map and mask Textures. 2D Lights can interact with normal map and mask Textures linked to Sprites to create advanced lighting effects, such as ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Normal_mapping"},"normal mapping"),". See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.0/manual/SecondaryTextures.html"},"Setting up normal map and mask Textures"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a 2D Light GameObject; see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.0/manual/2DLightProperties.html"},"2D Lights Properties"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure the 2D Renderer Data asset; see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.0/manual/2DRendererData_overview.html"},"Configuring the 2D Renderer Asset"),"."),(0,r.kt)("li",{parentName:"ol"},"(Optional) if you want to apply 2D Light effects to a pixel art game, see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.0/manual/2d-pixelperfect.html"},"2D Pixel Perfect"),".")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/editing-lighting-in-the-lightweight-render-pipeline#"},"Lighting in URP Learn tutorial"),"."),(0,r.kt)("h3",{id:"shadows"},"Shadows"),(0,r.kt)("p",null,"To define the shape and properties that a Light uses to determine the shadows it casts, use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/2DShadows.html"},"Shadow Caster 2D component"),". Increase the Light\u2019s  ",(0,r.kt)("strong",{parentName:"p"},"Shadow Intensity"),"  above zero."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-shadows-2d.png",alt:"A shadow intensity of 0.5 in the Shadow Caster 2D component"})),(0,r.kt)("p",null,"A shadow intensity of 0.5 in the Shadow Caster 2D component"),(0,r.kt)("h3",{id:"enhanced-look-and-feel"},"Enhanced look and feel"),(0,r.kt)("p",null,"Particle systems and post-processing are optional tools that you can use to add polish to your game."),(0,r.kt)("h4",{id:"particle-systems"},"Particle systems"),(0,r.kt)("p",null,"You can use particle systems to create dynamic objects like fire, smoke or liquids, as an alternative to using a Sprite. Sprites are more suited to physical objects. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/particle-systems"},"Particle systems"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-particle-system-2d.png",alt:"A fire effect, created with the Particle System and Shader Graph for 2D"})),(0,r.kt)("p",null,"A fire effect, created with the Particle System and Shader Graph for 2D"),(0,r.kt)("h4",{id:"post-processing"},"Post-processing"),(0,r.kt)("p",null,"You can use post-processing effects and full-screen effects to significantly improve the appearance of your game. For example, you can use these effects to simulate physical camera or film properties, or to create stylized visuals."),(0,r.kt)("p",null,"URP has its own post-processing implementation. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@8.2/manual/integration-with-post-processing.html"},"Post-processing in the Universal Render Pipeline"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-post-processing-2d.png",alt:"The Lost Crypt demo uses the bloom and vignette post-processing effects"})),(0,r.kt)("p",null,"The Lost Crypt demo uses the bloom and vignette post-processing effects"),(0,r.kt)("h2",{id:"physics-2d"},"Physics 2D"),(0,r.kt)("p",null,"The Physics 2D settings define limits on the accuracy of the physical simulation in your 2D game. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-manager-group/class-physics2dmanager"},"2D Physics"),"."),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Xxbs9x2qB7Y&feature=youtu.be"},"video")," provides an overview of 2D physics features in Unity 2020.1."),(0,r.kt)("p",null,"To learn how to use Unity\u2019s 2D physics engine, see the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/2d-physics"},"2D Physics Learn tutorial"),"."),(0,r.kt)("p",null,"The following 2D physics tools are useful for 2D games."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rigidbody-2d"},"Rigidbody 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#collider-2d"},"Collider 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#triggers"},"Triggers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2d-joints"},"2D Joints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2d-effectors"},"2D Effectors"))),(0,r.kt)("h3",{id:"rigidbody-2d"},"Rigidbody 2D"),(0,r.kt)("p",null,"A Rigidbody 2D component places a GameObject under the control of the physics engine. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics2dreference/class-rigidbody2d"},"Rigidbody 2D"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-rigidbody-component-2d.png",alt:"The Rigidbody 2D component"})),(0,r.kt)("p",null,"The Rigidbody 2D component"),(0,r.kt)("h3",{id:"collider-2d"},"Collider 2D"),(0,r.kt)("p",null,"Collider 2D components define the shape of a 2D GameObject for the purposes of physical collisions. You can also use Collider 2D components for input detection. For example, in mobile games you can use them to make Sprites selectable."),(0,r.kt)("p",null,"The Collider 2D types that you can use with Rigidbody 2D are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d/class-circle-collider2d"},"Circle Collider 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d/class-box-collider2d"},"Box Collider 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d/class-polygon-collider2d"},"Polygon Collider 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d/class-edge-collider2d"},"Edge Collider 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d/class-capsule-collider2d"},"Capsule Collider 2D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc-unity-manual/docs/collider2d/class-composite-collider2d"},"Composite Collider 2D"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-circle-collider-component.png",alt:"The Circle Collider 2D component"})),(0,r.kt)("p",null,"The Circle Collider 2D component"),(0,r.kt)("h3",{id:"triggers"},"Triggers"),(0,r.kt)("p",null,"When you set a Collider 2D as a Trigger (by enabling its  ",(0,r.kt)("strong",{parentName:"p"},"Is Trigger"),"  property), it no longer behaves as a physical object, and it can intersect with other Colliders without causing a collision. Instead, when a Collider enters its space, Unity calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnTriggerEnter")," function on the Trigger GameObject\u2019s scripts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-is-trigger-2d.png",alt:"The Circle Collider 2D component with Is Trigger selected"})),(0,r.kt)("p",null,"The Circle Collider 2D component with  ",(0,r.kt)("strong",{parentName:"p"},"Is Trigger"),"  selected"),(0,r.kt)("h3",{id:"2d-joints"},"2D Joints"),(0,r.kt)("p",null,"Joints attach GameObjects together. You can only attach 2D joints to GameObjects that have a Rigidbody 2D component attached, or to a fixed position in world space. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/joints2d"},"2D Joints"),"."),(0,r.kt)("h3",{id:"2d-effectors"},"2D Effectors"),(0,r.kt)("p",null,"Use Effector 2D ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/game-objects/using-components"},"components")," with ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/collider2d"},"Collider 2D")," components to direct the forces of ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/physics-section"},"physics")," in your scene when ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/game-objects"},"GameObject")," Colliders come into contact with each other. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/effectors2d"},"2D Effectors"),"."),(0,r.kt)("h2",{id:"audio"},"Audio"),(0,r.kt)("p",null,"You can add background music and sound effects to your game in Unity; see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/audio/audio-overview"},"Audio Overview"),". Use third-party software to create your audio and import it into Unity with the recommended settings."),(0,r.kt)("h2",{id:"user-interface"},"User interface"),(0,r.kt)("p",null,"If you want to add a menu or help to your game, you need to set up a ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/uitoolkits"},"user interface"),". To set up a user interface, use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/UIToolkits.html"},"Unity UI"),"."),(0,r.kt)("h2",{id:"profiling-optimizing-and-testing-a-build"},"Profiling, optimizing and testing a build"),(0,r.kt)("h3",{id:"\u6027\u80fd\u5206\u6790"},"\u6027\u80fd\u5206\u6790"),(0,r.kt)("p",null,"Profiling allows you to see how resource-intensive the different parts of your game are. You should always profile your game on its target release platform; see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/profiler/profiler-profiling-applications"},"Profiling your application"),"."),(0,r.kt)("h3",{id:"optimizing"},"Optimizing"),(0,r.kt)("p",null,"After profiling, you can use the results to make performance improvements and optimizations. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/best-practice-understanding-performance-in-unity"},"Understanding optimization in Unity"),"."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Test your game and your code with the Unity Test Framework; see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/index.html"},"Unity Test Framework"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-testing-2d.png",alt:"The Test Runner window"})),(0,r.kt)("p",null,"The Test Runner window"),(0,r.kt)("h2",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"When you\u2019ve finished your game, you\u2019re ready to publish it. See ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/publishing-builds"},"Publishing Builds"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/quickstart-build-settings.png",alt:"The Build Settings window"})),(0,r.kt)("p",null,"The Build Settings window"))}m.isMDXComponent=!0}}]);