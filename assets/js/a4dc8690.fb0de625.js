"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60320],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],o={id:"SpritePacker",title:"Sprite Packer",slug:"/class-sprite-atlas/sprite-packer"},l="Sprite Packer",p={unversionedId:"unity2d/sprites/class-sprite-atlas/SpritePacker",id:"unity2d/sprites/class-sprite-atlas/SpritePacker",title:"Sprite Packer",description:"Sprite Packer \u5df2\u5f03\u7528",source:"@site/docs/unity2d/sprites/class-sprite-atlas/sprite-packer.md",sourceDirName:"unity2d/sprites/class-sprite-atlas",slug:"/class-sprite-atlas/sprite-packer",permalink:"/docs/class-sprite-atlas/sprite-packer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity2d/sprites/class-sprite-atlas/sprite-packer.md",tags:[],version:"current",frontMatter:{id:"SpritePacker",title:"Sprite Packer",slug:"/class-sprite-atlas/sprite-packer"},sidebar:"tutorialSidebar",previous:{title:"Sprite Packer \u6a21\u5f0f",permalink:"/docs/class-sprite-atlas/sprite-packer-modes"},next:{title:"\u7cbe\u7075\u906e\u7f69",permalink:"/docs/sprites/class-sprite-mask"}},c={},u=[{value:"Sprite Packer \u5df2\u5f03\u7528",id:"sprite-packer-\u5df2\u5f03\u7528",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528 Sprite Packer",id:"\u4f7f\u7528-sprite-packer",level:2},{value:"\u6253\u5305\u7b56\u7565",id:"\u6253\u5305\u7b56\u7565",level:2},{value:"\u81ea\u5b9a\u4e49 Sprite Packer",id:"\u81ea\u5b9a\u4e49-sprite-packer",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"DefaultPackerPolicy",id:"defaultpackerpolicy",level:2},{value:"TightPackerPolicy",id:"tightpackerpolicy",level:2},{value:"TightRotateEnabledSpritePackerPolicy",id:"tightrotateenabledspritepackerpolicy",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sprite-packer"},"Sprite Packer"),(0,a.kt)("h2",{id:"sprite-packer-\u5df2\u5f03\u7528"},"Sprite Packer \u5df2\u5f03\u7528"),(0,a.kt)("p",null,"Please note that  ",(0,a.kt)("strong",{parentName:"p"},"Sprite Packer"),"  is deprecated for Unity 2020.1 and newer, and will no longer be available as an option from ",(0,a.kt)("a",{parentName:"p",href:"/docs/class-sprite-atlas/sprite-packer-modes"},"Sprite Packer Modes"),". Existing Projects already using  ",(0,a.kt)("strong",{parentName:"p"},"Sprite Packer"),"  will still be able to continue using it, however any new Project created in 2020.1 onwards will default to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/class-sprite-atlas"},"Sprite Atlas")," system when packing Textures."),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"When designing Sprite graphics, it is convenient to work with a separate Texture file for each character. However, a significant portion of a Sprite Texture will often be taken up by the empty space between the graphic elements and this space will result in wasted video memory at runtime. For optimal performance, it is best to pack graphics from several Sprite textures tightly together within a single Texture known as an atlas. Unity provides a  ",(0,a.kt)("strong",{parentName:"p"},"Sprite Packer"),"  utility to automate the process of generating atlases from the individual Sprite textures."),(0,a.kt)("p",null,"Unity \u5728\u540e\u53f0\u5904\u7406\u7cbe\u7075\u56fe\u96c6\u7eb9\u7406\u7684\u751f\u6210\u548c\u4f7f\u7528\uff0c\u8fd9\u6837\u7528\u6237\u5c31\u4e0d\u9700\u8981\u8fdb\u884c\u624b\u52a8\u5206\u914d\u3002\u53ef\u9009\u62e9\u5728\u8fdb\u5165\u8fd0\u884c\u6a21\u5f0f\u65f6\u6216\u5728\u6784\u5efa\u671f\u95f4\u6253\u5305\u56fe\u96c6\uff0c\u800c\u56fe\u96c6\u4e00\u65e6\u751f\u6210\uff0c\u4fbf\u4f1a\u4ece\u56fe\u96c6\u83b7\u53d6\u7cbe\u7075\u5bf9\u8c61\u7684\u56fe\u5f62\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u9700\u8981\u5728\u7eb9\u7406\u5bfc\u5165\u5668 (Texture Importer) \u4e2d\u6307\u5b9a\u4e00\u4e2a\u6253\u5305\u6807\u7b7e (Packing Tag)\uff0c\u4ece\u800c\u4e3a\u8be5\u7eb9\u7406\u7684\u7cbe\u7075\u542f\u7528\u6253\u5305\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-sprite-packer"},"\u4f7f\u7528 Sprite Packer"),(0,a.kt)("p",null,"The Sprite Packer is disabled by default but you can configure it from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/comp-manager-group/class-editor-manager"},"Editor")," window (menu:  ",(0,a.kt)("strong",{parentName:"p"},"Edit"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Project Settings")," , then select the  ",(0,a.kt)("strong",{parentName:"p"},"Editor"),"  category). The Sprite packing mode can be changed from  ",(0,a.kt)("strong",{parentName:"p"},"Disabled"),"  to  ",(0,a.kt)("strong",{parentName:"p"},"Enabled for Builds"),"  (packing is used for builds but not Play mode) or  ",(0,a.kt)("strong",{parentName:"p"},"Always Enabled"),"  (packing is enabled for both Play mode and builds)."),(0,a.kt)("p",null,"If you open the Sprite Packer window (menu:  ",(0,a.kt)("strong",{parentName:"p"},"Window"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"2D"),"  ",">","  ",(0,a.kt)("strong",{parentName:"p"},"Sprite Packer")," ) and click the  ",(0,a.kt)("strong",{parentName:"p"},"Pack"),"  button in the top-left corner, you will see the arrangement of the textures packed within the atlas."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/SpritePackerMain.jpg",alt:"SpritePackerMain.jpg"})),(0,a.kt)("p",null,"\u5982\u679c\u5728 Project \u9762\u677f\u4e2d\u9009\u62e9\u4e00\u4e2a\u7cbe\u7075\uff0c\u8be5\u7cbe\u7075\u4e5f\u4f1a\u7a81\u51fa\u663e\u793a\u4ee5\u663e\u793a\u5176\u5728\u56fe\u96c6\u5185\u7684\u4f4d\u7f6e\u3002\u8f6e\u5ed3\u5b9e\u9645\u4e0a\u662f\u6e32\u67d3\u7f51\u683c\u8f6e\u5ed3\uff0c\u8fd8\u5b9a\u4e49\u4e86\u7528\u4e8e\u7d27\u5bc6\u6253\u5305\u7684\u533a\u57df\u3002"),(0,a.kt)("p",null,"The toolbar at the top of the Sprite Packer window has a number of controls that affect packing and viewing. The  ",(0,a.kt)("strong",{parentName:"p"},"Pack"),"  buttons initiates the packing operation but will not force any update if the atlas hasn\u2019t changed since it was last packed. (A related  ",(0,a.kt)("strong",{parentName:"p"},"Repack"),"  button will appear when you implement a custom packing policy as explained in  ",(0,a.kt)("strong",{parentName:"p"},"Customizing the Sprite Packer"),"  below). The  ",(0,a.kt)("strong",{parentName:"p"},"View Atlas"),"  and  ",(0,a.kt)("strong",{parentName:"p"},"Page #"),"  menus allow you to choose which page of which atlas is shown in the window (a single atlas may be split into more than one \u201cpage\u201d if there is not enough space for all Sprites in the maximum Texture size). The menu next to the page number selects which \u201cpacking policy\u201d is used for the atlas (see below). At the right of the toolbar are two controls to zoom the view and to switch between color and alpha display for the atlas."),(0,a.kt)("h2",{id:"\u6253\u5305\u7b56\u7565"},"\u6253\u5305\u7b56\u7565"),(0,a.kt)("p",null,"The Sprite Packer uses a  ",(0,a.kt)("strong",{parentName:"p"},"packing policy"),"  to decide how to assign Sprites into atlases. It is possible to create your own packing policies (see below) but the  ",(0,a.kt)("strong",{parentName:"p"},"Default Packer Policy")," ,  ",(0,a.kt)("strong",{parentName:"p"},"Tight Packer Policy"),"  and  ",(0,a.kt)("strong",{parentName:"p"},"Tight Rotate Enabled Sprite Packer Policy"),"  options are always available. With these policies, the  ",(0,a.kt)("strong",{parentName:"p"},"Packing Tag"),"  property in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/class-texture-importer"},"Texture Importer")," directly selects the name of the atlas where the Sprite will be packed and so all Sprites with the same packing tag will be packed in the same atlas. Atlases are then further sorted by the Texture import settings so that they match whatever the user sets for the source textures. Sprites with the same Texture compression settings will be grouped into the same atlas where possible."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DefaultPackerPolicy will use rectangle packing by default unless \u201c","[","TIGHT","]","\u201d is specified in the  ",(0,a.kt)("strong",{parentName:"li"},"Packing Tag"),"  (i.e. setting your packing tag to \u201c","[","TIGHT","]","Character\u201d will allow tight packing)."),(0,a.kt)("li",{parentName:"ul"},"TightPackerPolicy will use tight packing by default if Sprite have tight meshes. If \u201c","[","RECT","]","\u201d is specified in the  ",(0,a.kt)("strong",{parentName:"li"},"Packing Tag")," , rectangle packing will be done (i.e. setting your packing tag to \u201c","[","RECT","]","UI","_","Elements\u201d will force rect packing)."),(0,a.kt)("li",{parentName:"ul"},"TightRotateEnabledSpritePackerPolicy will use tight packing by default if Sprite have tight meshes and will enable rotation of Sprites. If \u201c","[","RECT","]","\u201d is specified in the  ",(0,a.kt)("strong",{parentName:"li"},"Packing Tag")," , rectangle packing will be done (i.e. setting your packing tag to \u201c","[","RECT","]","UI","_","Elements\u201d will force rect packing).")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49-sprite-packer"},"\u81ea\u5b9a\u4e49 Sprite Packer"),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"DefaultPackerPolicy"),"  option is sufficient for most purposes but you can also implement your own custom packing policy if you need to. To do this, you need to implement the UnityEditor.Sprites.IPackerPolicy interface for a class in an editor script. This interface requires the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GetVersion - \u8fd4\u56de\u6253\u5305\u7b56\u7565\u7684\u7248\u672c\u503c\u3002\u5982\u679c\u5bf9\u7b56\u7565\u811a\u672c\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u5219\u5e94\u8be5\u66f4\u6362\u7248\u672c\uff0c\u5e76\u4e14\u6b64\u7b56\u7565\u5c06\u4fdd\u5b58\u5230\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u3002"),(0,a.kt)("li",{parentName:"ul"},"OnGroupAtlases - \u5728\u6b64\u5904\u5b9e\u73b0\u6253\u5305\u903b\u8f91\u3002\u5728 PackerJob \u4e0a\u5b9a\u4e49\u56fe\u96c6\uff0c\u5e76\u4ece\u7ed9\u5b9a\u7684 TextureImporter \u5206\u914d\u7cbe\u7075\u3002")),(0,a.kt)("p",null,"DefaultPackerPolicy \u9ed8\u8ba4\u4f7f\u7528\u77e9\u5f62\u6253\u5305\uff08\u8bf7\u53c2\u9605 SpritePackingMode\uff09\u3002\u5982\u679c\u6b63\u5728\u521b\u5efa\u7eb9\u7406\u7a7a\u95f4\u6548\u679c\u6216\u60f3\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u7f51\u683c\u6765\u6e32\u67d3\u7cbe\u7075\uff0c\u6b64\u8bbe\u7f6e\u5c06\u975e\u5e38\u6709\u7528\u3002\u81ea\u5b9a\u4e49\u7b56\u7565\u53ef\u8986\u76d6\u6b64\u8bbe\u7f6e\uff0c\u5e76\u6539\u7528\u7d27\u5bc6\u6253\u5305\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u5728\u9009\u62e9\u81ea\u5b9a\u4e49\u7b56\u7565\u65f6\u624d\u4f1a\u542f\u7528 Repack \u6309\u94ae\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9664\u975e TextureImporter \u5143\u6570\u636e\u6216\u6240\u9009\u7684 PackerPolicy \u7248\u672c\u503c\u53d1\u751f\u53d8\u5316\uff0c\u5426\u5219\u4e0d\u4f1a\u8c03\u7528 OnGroupAtlases\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u5728\u5b9e\u65bd\u81ea\u5b9a\u4e49\u7b56\u7565\u65f6\u624d\u5e94\u4f7f\u7528 Repack \u6309\u94ae\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 TightRotateEnabledSpritePackerPolicy \u81ea\u52a8\u5bf9\u7cbe\u7075\u6253\u5305\u5e76\u65cb\u8f6c\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SpritePackingRotation \u662f\u4fdd\u7559\u4f9b\u672a\u6765 Unity \u7248\u672c\u4f7f\u7528\u7684\u7c7b\u578b\u3002")))),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56fe\u96c6\u7f13\u5b58\u5728 Project","\\","Library","\\","AtlasCache \u4e2d\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u6b64\u6587\u4ef6\u5939\u518d\u542f\u52a8 Unity \u5c06\u5f3a\u5236\u5bf9\u56fe\u96c6\u91cd\u65b0\u6253\u5305\u3002\u8fd9\u6837\u505a\u65f6\u5fc5\u987b\u5173\u95ed Unity\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u4e0d\u52a0\u8f7d\u56fe\u96c6\u7f13\u5b58\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u542f\u52a8 Unity \u540e\u9996\u6b21\u6253\u5305\u65f6\u5fc5\u987b\u9009\u4e2d\u6240\u6709\u7eb9\u7406\u3002\u6b64\u64cd\u4f5c\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u9879\u76ee\u4e2d\u7684\u7eb9\u7406\u603b\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u52a0\u8f7d\u5fc5\u9700\u7684\u56fe\u96c6\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6700\u5927\u56fe\u96c6\u5927\u5c0f\u4e3a 2048x2048\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86 PackingTag\uff0c\u5219\u4e0d\u4f1a\u538b\u7f29\u7eb9\u7406\uff0c\u8fd9\u6837 SpritePacker \u5c31\u53ef\u4ee5\u83b7\u53d6\u539f\u59cb\u50cf\u7d20\u503c\uff0c\u7136\u540e\u5bf9\u56fe\u96c6\u8fdb\u884c\u538b\u7f29\u3002")),(0,a.kt)("h2",{id:"defaultpackerpolicy"},"DefaultPackerPolicy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using System;\nusing System.Linq;\nusing UnityEngine;\nusing UnityEditor;\nusing System.Collections.Generic;\n\n\npublic class DefaultPackerPolicySample : UnityEditor.Sprites.IPackerPolicy\n{\n        protected class Entry\n        {\n            public Sprite            Sprite;\n        public UnityEditor.Sprites.AtlasSettings settings;\n            public string            atlasName;\n            public SpritePackingMode packingMode;\n            public int               anisoLevel;\n        }\n\n        private const uint kDefaultPaddingPower = 3; // \u9002\u7528\u4e8e\u57fa\u7840\u548c\u4e24\u4e2a Mip \u7ea7\u522b\u3002\n\n        public virtual int GetVersion() { return 1; }\n        protected virtual string TagPrefix { get { return "[TIGHT]"; } }\n        protected virtual bool AllowTightWhenTagged { get { return true; } }\n        protected virtual bool AllowRotationFlipping { get { return false; } }\n\n    public static bool IsCompressedFormat(TextureFormat fmt)\n    {\n        if (fmt &gt;= TextureFormat.DXT1 && fmt &lt;= TextureFormat.DXT5)\n            return true;\n        if (fmt &gt;= TextureFormat.DXT1Crunched && fmt &lt;= TextureFormat.DXT5Crunched)\n            return true;\n        if (fmt &gt;= TextureFormat.PVRTC_RGB2 && fmt &lt;= TextureFormat.PVRTC_RGBA4)\n            return true;\n        if (fmt == TextureFormat.ETC_RGB4)\n            return true;\n        if (fmt &gt;= TextureFormat.ATC_RGB4 && fmt &lt;= TextureFormat.ATC_RGBA8)\n            return true;\n        if (fmt &gt;= TextureFormat.EAC_R && fmt &lt;= TextureFormat.EAC_RG_SIGNED)\n            return true;\n        if (fmt &gt;= TextureFormat.ETC2_RGB && fmt &lt;= TextureFormat.ETC2_RGBA8)\n            return true;\n        if (fmt &gt;= TextureFormat.ASTC_RGB_4x4 && fmt &lt;= TextureFormat.ASTC_RGBA_12x12)\n            return true;\n        if (fmt &gt;= TextureFormat.DXT1Crunched && fmt &lt;= TextureFormat.DXT5Crunched)\n            return true;\n        return false;\n    }\n\n    public void OnGroupAtlases(BuildTarget target, UnityEditor.Sprites.PackerJob job, int[] textureImporterInstanceIDs)\n        {\n            List&lt;Entry&gt; entries = new List&lt;Entry&gt;();\n\n            foreach (int instanceID in textureImporterInstanceIDs)\n            {\n                TextureImporter ti = EditorUtility.InstanceIDToObject(instanceID) as TextureImporter;\n\n                TextureFormat desiredFormat;\n                ColorSpace colorSpace;\n                int compressionQuality;\n                ti.ReadTextureImportInstructions(target, out desiredFormat, out colorSpace, out compressionQuality);\n\n                TextureImporterSettings tis = new TextureImporterSettings();\n                ti.ReadTextureSettings(tis);\n\n            Sprite[] Sprites =\n                AssetDatabase.LoadAllAssetRepresentationsAtPath(ti.assetPath)\n                    .Select(x =&gt; x as Sprite)\n                    .Where(x =&gt; x != null)\n                    .ToArray();\n                foreach (Sprite Sprite in Sprites)\n                {\n                    Entry entry = new Entry();\n                    entry.Sprite = Sprite;\n                    entry.settings.format = desiredFormat;\n                    entry.settings.colorSpace = colorSpace;\n                    // \u4e4b\u540e\u4ec5\u9488\u5bf9\u538b\u7f29\u683c\u5f0f\u4f7f\u7528\u538b\u7f29\u8d28\u91cf\u8fdb\u884c\u5206\u7ec4\u3002\u5426\u5219\u5c06\u5176\u7559\u7a7a\u3002\n                entry.settings.compressionQuality = IsCompressedFormat(desiredFormat) ? compressionQuality : 0;\n                entry.settings.filterMode = Enum.IsDefined(typeof(FilterMode), ti.filterMode)\n                    ? ti.filterMode\n                    : FilterMode.Bilinear;\n                    entry.settings.maxWidth = 2048;\n                    entry.settings.maxHeight = 2048;\n                    entry.settings.generateMipMaps = ti.mipmapEnabled;\n                    entry.settings.enableRotation = AllowRotationFlipping;\n                    if (ti.mipmapEnabled)\n                        entry.settings.paddingPower = kDefaultPaddingPower;\n                    else\n                        entry.settings.paddingPower = (uint)EditorSettings.SpritePackerPaddingPower;\n                    #if ENABLE_ANDROID_ATLAS_ETC1_COMPRESSION\n                        entry.settings.allowsAlphaSplitting = ti.GetAllowsAlphaSplitting ();\n                    #endif //ENABLE_ANDROID_ATLAS_ETC1_COMPRESSION\n\n                    entry.atlasName = ParseAtlasName(ti.SpritePackingTag);\n                    entry.packingMode = GetPackingMode(ti.SpritePackingTag, tis.SpriteMeshType);\n                    entry.anisoLevel = ti.anisoLevel;\n\n                    entries.Add(entry);\n                }\n\n                Resources.UnloadAsset(ti);\n            }\n\n            // \u9996\u5148\u6839\u636e\u56fe\u96c6\u540d\u79f0\u5c06\u7cbe\u7075\u5206\u6210\u51e0\u7ec4\n            var atlasGroups =\n                from e in entries\n                group e by e.atlasName;\n            foreach (var atlasGroup in atlasGroups)\n            {\n                int page = 0;\n                // \u7136\u540e\u6839\u636e\u7eb9\u7406\u8bbe\u7f6e\u5c06\u8fd9\u4e9b\u7ec4\u5206\u6210\u66f4\u5c0f\u7684\u7ec4\n                var settingsGroups =\n                    from t in atlasGroup\n                    group t by t.settings;\n                foreach (var settingsGroup in settingsGroups)\n                {\n                    string atlasName = atlasGroup.Key;\n                    if (settingsGroups.Count() &gt; 1)\n                        atlasName += string.Format(" (Group {0})", page);\n\n                UnityEditor.Sprites.AtlasSettings settings = settingsGroup.Key;\n                    settings.anisoLevel = 1;\n                    // \u4f7f\u7528\u6b64\u56fe\u96c6\u4e2d\u6240\u6709\u6761\u76ee\u7684\u6700\u9ad8 aniso \u7ea7\u522b\n                    if (settings.generateMipMaps)\n                        foreach (Entry entry in settingsGroup)\n                            if (entry.anisoLevel &gt; settings.anisoLevel)\n                                settings.anisoLevel = entry.anisoLevel;\n\n                    job.AddAtlas(atlasName, settings);\n                    foreach (Entry entry in settingsGroup)\n                    {\n                        job.AssignToAtlas(atlasName, entry.Sprite, entry.packingMode, SpritePackingRotation.None);\n                    }\n\n                    ++page;\n                }\n            }\n        }\n\n        protected bool IsTagPrefixed(string packingTag)\n        {\n            packingTag = packingTag.Trim();\n            if (packingTag.Length &lt; TagPrefix.Length)\n                return false;\n            return (packingTag.Substring(0, TagPrefix.Length) == TagPrefix);\n        }\n\n        private string ParseAtlasName(string packingTag)\n        {\n            string name = packingTag.Trim();\n            if (IsTagPrefixed(name))\n                name = name.Substring(TagPrefix.Length).Trim();\n            return (name.Length == 0) ?"(unnamed)" : name;\n        }\n\n        private SpritePackingMode GetPackingMode(string packingTag, SpriteMeshType meshType)\n        {\n            if (meshType == SpriteMeshType.Tight)\n                if (IsTagPrefixed(packingTag) == AllowTightWhenTagged)\n                    return SpritePackingMode.Tight;\n            return SpritePackingMode.Rectangle;\n        }\n}\n')),(0,a.kt)("h2",{id:"tightpackerpolicy"},"TightPackerPolicy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'using System;\nusing System.Linq;\nusing UnityEngine;\nusing UnityEditor;\nusing UnityEditor.Sprites;\nusing System.Collections.Generic;\n\n// \u9664\u975e\u6253\u5305\u6807\u7b7e\u5305\u542b "[RECT]"\uff0c\u5426\u5219 TightPackerPolicy \u5c06\u5bf9\u975e\u77e9\u5f62\u7cbe\u7075\u8fdb\u884c\u7d27\u5bc6\u6253\u5305\u3002\nclass TightPackerPolicySample : DefaultPackerPolicySample\n{\n        protected override string TagPrefix { get { return "[RECT]"; } }\n        protected override bool AllowTightWhenTagged { get { return false; } }\n        protected override bool AllowRotationFlipping { get { return false; } }\n}\n')),(0,a.kt)("h2",{id:"tightrotateenabledspritepackerpolicy"},"TightRotateEnabledSpritePackerPolicy"),(0,a.kt)("p",null,"`","`","`","`"," using System; using System.Linq; using UnityEngine; using UnityEditor; using UnityEditor.Sprites; using System.Collections.Generic;"),(0,a.kt)("p",null,"// TightPackerPolicy will tightly pack non-rectangle Sprites unless their packing tag contains \u201c","[","RECT","]","\u201d. class TightRotateEnabledSpritePackerPolicySample : DefaultPackerPolicySample { protected override string TagPrefix { get { return \u201c","[","RECT","]","\u201d; } } protected override bool AllowTightWhenTagged { get { return false; } } protected override bool AllowRotationFlipping { get { return true; } } }"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sprite Packer deprecated in ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/2020.1/Documentation/Manual/30_search.html?q=newin20201"},"2020.1")," NewIn20191")))}m.isMDXComponent=!0}}]);