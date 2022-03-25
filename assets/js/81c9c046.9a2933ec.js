"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8740],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var h=a.createContext({}),l=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,h=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=s,m=d["".concat(h,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var h in t)hasOwnProperty.call(t,h)&&(o[h]=t[h]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],o={id:"AnatomyofaMesh",title:"Mesh data",slug:"/mesh/anatomyofa-mesh"},h="Mesh data",l={unversionedId:"graphics/mesh/AnatomyofaMesh",id:"graphics/mesh/AnatomyofaMesh",title:"Mesh data",description:"This page contains information on the data that a mesh contains, and how Unity stores that data in the Mesh class.",source:"@site/docs/graphics/mesh/anatomyofa-mesh.md",sourceDirName:"graphics/mesh",slug:"/mesh/anatomyofa-mesh",permalink:"/doc-unity-manual/docs/mesh/anatomyofa-mesh",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/mesh/anatomyofa-mesh.md",tags:[],version:"current",frontMatter:{id:"AnatomyofaMesh",title:"Mesh data",slug:"/mesh/anatomyofa-mesh"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u683c",permalink:"/doc-unity-manual/docs/mesh"},next:{title:"\u7f51\u683c\u8d44\u6e90",permalink:"/doc-unity-manual/docs/mesh/class-mesh"}},c={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Vertex data",id:"vertex-data",level:2},{value:"\u4f4d\u7f6e",id:"\u4f4d\u7f6e",level:3},{value:"Normal",id:"normal",level:3},{value:"Tangent",id:"tangent",level:3},{value:"Texture coordinates (UVs)",id:"texture-coordinates-uvs",level:3},{value:"\u989c\u8272",id:"\u989c\u8272",level:3},{value:"Blend indices and bone weights",id:"blend-indices-and-bone-weights",level:3},{value:"Topology",id:"topology",level:2},{value:"Index data",id:"index-data",level:2},{value:"Winding order",id:"winding-order",level:3},{value:"\u6df7\u5408\u5f62\u72b6",id:"\u6df7\u5408\u5f62\u72b6",level:2},{value:"Bind poses",id:"bind-poses",level:2}],d={toc:p};function u(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mesh-data"},"Mesh data"),(0,r.kt)("p",null,"This page contains information on the data that a mesh contains, and how Unity stores that data in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.html"},"Mesh")," class."),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"A mesh is defined by these properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vertex-data"},"Vertices"),": A collection of positions in 3D space, with optional additional attributes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#topology"},"Topology"),": The type of structure that defines each face of the surface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#index-data"},"Indices"),": A collection of integers that describe how the vertices combine to create the surface, based on the topology.")),(0,r.kt)("p",null,"In addition to this, deformable meshes contain either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%B7%B7%E5%90%88%E5%BD%A2%E7%8A%B6"},"Blend shapes"),": Data that describes different deformed versions of the mesh, for use with animation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bind-poses"},"Bind poses"),": Data that describes the \u201cbase\u201d pose of the skeleton in a skinned mesh.")),(0,r.kt)("h2",{id:"vertex-data"},"Vertex data"),(0,r.kt)("p",null,"The elements of vertex data are called  ",(0,r.kt)("strong",{parentName:"p"},"vertex attributes")," ."),(0,r.kt)("p",null,"Every vertex can have the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BD%8D%E7%BD%AE"},"Position")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#normal"},"Normal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tangent"},"Tangent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%A2%9C%E8%89%B2"},"Color")),(0,r.kt)("li",{parentName:"ul"},"Up to 8 ",(0,r.kt)("a",{parentName:"li",href:"#texture-coordinates-uvs"},"texture coordinates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#blend-indices-and-bone-weights"},"Bone weights and blend indices")," (skinned meshes only)")),(0,r.kt)("p",null,"Internally, all vertex data is stored in separate arrays of the same size. If your mesh contains an array with 10 vertex positions, it also has arrays with 10 elements for each other vertex attribute that it uses."),(0,r.kt)("p",null,"In C#, Unity describes the available vertex attributes with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.VertexAttribute.html"},"VertexAttribute")," enum. You can check whether an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class has a given vertex attribute with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.HasVertexAttribute.html"},"Mesh.HasVertexAttribute")," function."),(0,r.kt)("h3",{id:"\u4f4d\u7f6e"},"\u4f4d\u7f6e"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"vertex position"),"  represents the position of the vertex in  ",(0,r.kt)("strong",{parentName:"p"},"object space")," ."),(0,r.kt)("p",null,"Unity uses this value to determine the surface of the mesh."),(0,r.kt)("p",null,"This vertex attribute is required for all meshes."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, the simplest way to access this data is with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetVertices.html"},"Mesh.GetVertices")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetVertices.html"},"Mesh.SetVertices"),". Unity also stores this data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-vertices.html"},"Mesh.vertices"),", but this older property is less efficient and user-friendly."),(0,r.kt)("h3",{id:"normal"},"Normal"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"vertex normal"),"  represents the direction that points directly \u201cout\u201d from the surface at the position of the vertex."),(0,r.kt)("p",null,"Unity uses this value to calculate the way that light reflects off the surface of a mesh."),(0,r.kt)("p",null,"This vertex attribute is optional."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, the simplest way to access this data is with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetNormals.html"},"Mesh.GetNormals")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetNormals.html"},"Mesh.SetNormals"),". Unity also stores this data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-normals.html"},"Mesh.normals"),", but this older property is less efficient and user-friendly."),(0,r.kt)("h3",{id:"tangent"},"Tangent"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"vertex tangent"),"  represents the direction that points along the \u201cu\u201d (horizontal texture) axis of the surface at the position of the vertex."),(0,r.kt)("p",null,"Unity stores the vertex tangent with an additional piece of data, in a four-component vector. The x,y,z components of the vector describe the tangent, and the w component of the vector describes its ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Orientation_(vector_space)"},"orientation"),". Unity uses the w value to compute the  ",(0,r.kt)("strong",{parentName:"p"},"binormal")," , which is the cross product of the tangent and normal."),(0,r.kt)("p",null,"Unity uses the tangent and binormal values in normal mapping."),(0,r.kt)("p",null,"This vertex attribute is optional."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, the simplest way to access this data is with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetTangents.html"},"Mesh.GetTangents")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetTangents.html"},"Mesh.SetTangents"),". Unity also stores this data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-tangents.html"},"Mesh.tangents"),", but this older property is less efficient and user-friendly."),(0,r.kt)("h3",{id:"texture-coordinates-uvs"},"Texture coordinates (UVs)"),(0,r.kt)("p",null,"A mesh can contain up to eight sets of  ",(0,r.kt)("strong",{parentName:"p"},"texture coordinates")," . Texture coordinates are commonly called  ",(0,r.kt)("strong",{parentName:"p"},"UVs")," , and the sets are called  ",(0,r.kt)("strong",{parentName:"p"},"channels")," ."),(0,r.kt)("p",null,"Unity uses texture coordinates when it \u201cwraps\u201d a texture around the mesh. The UVs indicate which part of the texture aligns with the mesh surface at the vertex position."),(0,r.kt)("p",null,"UV channels are commonly called \u201cUV0\u201d for the first channel, \u201cUV1\u201d for the second channel, and so on up to \u201cUV7\u201d. The channels respectively map to the shader semantics ",(0,r.kt)("inlineCode",{parentName:"p"},"TEXCOORD0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TEXCOORD1"),", and so on up to ",(0,r.kt)("inlineCode",{parentName:"p"},"TEXCOORD7"),"."),(0,r.kt)("p",null,"By default, Unity uses the first channel (UV0) to store UVs for regular textures such as diffuse maps and specular maps. Unity can use the second channel (UV1) to store baked lightmap UVs, and the third channel (UV2) to store input data for real-time lightmap UVs. For more information on lightmap UVs and how Unity uses these channels, ","[","[","wiki:LightingGiUvs|Lightmap UVs","]","]",". For more information on lightmap UVs, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/lighting-gi-uvs/lighting-gi-uvs"},"Lightmap UVs"),"."),(0,r.kt)("p",null,"All eight texture coordinate attributes are optional."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, the simplest way to access this data is with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetUVs.html"},"Mesh.GetUVs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetUVs.html"},"Mesh.SetUVs"),". Unity also stores this data in the following properties: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv.html"},"Mesh.uv"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv2.html"},"Mesh.uv2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv3.html"},"Mesh.uv3")," and so on, up to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/Mesh-uv8.html"},"Mesh.uv8"),". Note that these older properties are less efficient and user-friendly."),(0,r.kt)("h3",{id:"\u989c\u8272"},"\u989c\u8272"),(0,r.kt)("p",null,"The  ",(0,r.kt)("strong",{parentName:"p"},"vertex color"),"  represents the base color of a vertex, if any."),(0,r.kt)("p",null,"This color exists independently of any textures that the mesh may use."),(0,r.kt)("p",null,"This vertex attribute is optional."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, the simplest way to access this data is with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetColors.html"},"Mesh.GetColors")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetColors.html"},"Mesh.SetColors"),". Unity also stores this data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.colors.html"},"Mesh.colors"),", but this older property is less efficient and user-friendly."),(0,r.kt)("h3",{id:"blend-indices-and-bone-weights"},"Blend indices and bone weights"),(0,r.kt)("p",null,"In a skinned mesh,  ",(0,r.kt)("strong",{parentName:"p"},"blend indices"),"  indicate which bones affects a vertex, and  ",(0,r.kt)("strong",{parentName:"p"},"bone weights"),"  describe how much influence those bones have on the vertex."),(0,r.kt)("p",null,"In Unity, these vertex attributes are stored together."),(0,r.kt)("p",null,"Unity uses blend indices and bone weights to deform a skinned mesh based on the movement of its skeleton. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/comp-mesh-group/class-skinned-mesh-renderer"},"Skinned Mesh Renderer"),"."),(0,r.kt)("p",null,"These vertex attributes are required for skinned meshes."),(0,r.kt)("p",null,"In the past, Unity only allowed up to 4 bones to influence a vertex. It stored this data in a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/Manual/BoneWeight.html"},"BoneWeight")," struct, in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.boneWeights.html"},"Mesh.boneWeights")," array. Now, Unity allows up to 256 bones to influence a vertex. It stores this data in a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/BoneWeight1.html"},"BoneWeight1")," struct, and you can access it with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetAllBoneWeights.html"},"Mesh.GetAllBoneWeights")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetBoneWeights.html"},"Mesh.SetBoneWeights"),". For more information, read the linked API documentation."),(0,r.kt)("h2",{id:"topology"},"Topology"),(0,r.kt)("p",null,"Topology describes the type of face that a mesh has."),(0,r.kt)("p",null,"A mesh\u2019s topology defines the structure of the index buffer, which in turn describes how the vertex positions combine into faces. Each type of topology uses a different number of elements in the index array to define a single face."),(0,r.kt)("p",null,"Unity supports the following mesh topologies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Triangle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ebf\u6761")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LineStrip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Points"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:"),"  The Points topology doesn\u2019t create faces; instead, Unity renders a single point at each position. All other mesh topologies use more than one index to create either faces or edges."))),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, you can get the topology with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetTopology.html"},"Mesh.GetTopology"),", and set it as a parameter of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetIndices.html"},"Mesh.SetIndices"),"."),(0,r.kt)("p",null,"For more information on supported mesh topologies, see the documentation for the MeshTopology enum."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  You must convert any meshes that use other modelling techniques (such as NURBS or NURMS/Subdivision Surfaces modelling) into supported formats in your modelling software before you can use them in Unity."),(0,r.kt)("h2",{id:"index-data"},"Index data"),(0,r.kt)("p",null,"The index array contains integers that refer to elements in the vertex positions array. These integers are called indices."),(0,r.kt)("p",null,"Unity uses the indices to connect the vertex positions into faces. The number of indices that make up each face depends on the topology of the mesh."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, you can get this data with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetIndices.html"},"Mesh.GetIndices"),", and set it with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetIndices.html"},"Mesh.SetIndices"),". Unity also stores this data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.triangles.html"},"Mesh.triangles"),", but this older property is less efficient and user-friendly."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note:"),"  The Points topology doesn\u2019t create faces; instead, Unity renders a single point at each position. All other mesh topologies use more than one index to create either faces or edges."),(0,r.kt)("p",null,"For example, for a mesh that has an index array that contains the following values:"),(0,r.kt)("p",null,"0,1,2,3,4,5"),(0,r.kt)("p",null,"If the mesh has a triangular topology, then the first three elements (0,1,2) identify one triangle, and the following three elements (3, 4, 5) identify another triangle. There is no limit to the number of faces that a vertex can contribute to. This means that the same vertex can appear in the index array multiple times. For example, an index array could contain these values:"),(0,r.kt)("p",null,"0,1,2,1,2,3"),(0,r.kt)("p",null,"If the mesh has a triangular topology, then the first three elements (0,1,2) identify one triangle, and the following three elements (1,2,3) identify another triangle that shares vertices with the first."),(0,r.kt)("h3",{id:"winding-order"},"Winding order"),(0,r.kt)("p",null,"The order of the vertices in each group in the index array is called the  ",(0,r.kt)("strong",{parentName:"p"},"winding order")," . Unity uses winding order to determine whether a face is front-facing or back-facing, and in turn whether it should render a face or cull it (exclude it from rendering). By default, Unity renders front-facing polygons and culls back-facing polygons. Unity uses a clockwise winding order, which means that Unity considers any face where the indices connect in a clockwise direction is front facing."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/mesh-winding-order.png",alt:"Unity\u2019s winding order visualized on a prism"})),(0,r.kt)("p",null,"Unity\u2019s winding order visualized on a prism"),(0,r.kt)("p",null,"The above diagram demonstrates how Unity uses winding order. The order of the vertices in each face determines the direction of the normal for that face and Unity compares this to the forward direction of the current camera perspective. If the normal points away from the current camera\u2019s forward direction, it is back-facing. The closer triangle is ordered (1, 2, 3), which is a clockwise direction in relation to the current perspective, so the triangle is front-facing. The further triangle is ordered (4, 5, 6), which from this perspective is an anti-clockwise direction, so the triangle is back-facing."),(0,r.kt)("h2",{id:"\u6df7\u5408\u5f62\u72b6"},"\u6df7\u5408\u5f62\u72b6"),(0,r.kt)("p",null,"Blend shapes describe versions of the mesh that are deformed into different shapes. Unity interpolates between these shapes. You use blend shapes for ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Morph_target_animation"},"morph target animation"),", which is a common technique for facial animation."),(0,r.kt)("p",null,"For more information on blend shapes, see ",(0,r.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/animator-controllers/blend-shapes"},"Working with blend shapes"),"."),(0,r.kt)("p",null,"This data is optional."),(0,r.kt)("h2",{id:"bind-poses"},"Bind poses"),(0,r.kt)("p",null,"In a skinned mesh, the  ",(0,r.kt)("strong",{parentName:"p"},"bind pose"),"  of a bone describes its position when the skeleton is in its default position (also called its bind pose or rest pose)."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," class, you can get this data with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.GetBindposes.html"},"Mesh.GetBindposes")," and set it with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.SetBindposes.html"},"Mesh.SetBindposes"),". Unity also stores this data in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Mesh.bindPoses.html"},"Mesh.bindPoses"),", but this older property is less efficient and user-friendly. Each element contains data for the bone with the same index."),(0,r.kt)("p",null,"This data is required for skinned meshes."))}u.isMDXComponent=!0}}]);