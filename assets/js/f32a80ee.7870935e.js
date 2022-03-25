"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57884],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||l[p]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"batch-renderer-group-creating-batches",title:"Creating batches",slug:"/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches"},c="Creating batches",d={unversionedId:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches",id:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches",title:"Creating batches",description:"BatchRendererGroup (BRG) doesn\u2019t automatically provide any instance data. This includes many properties which are normally built-in for GameObjects, such as transform matrices, light probe coefficients, and lightmap texture coordinates. This means features like ambient lighting only work if you provide instance data yourself. To do this, you add and configure batches. A batch is a collection of instances, where each instance corresponds to a single thing to render. What the instance actually represents depends on what you want to render. For example, in a prop object renderer, an instance could represent a single prop, and in a terrain renderer, it could represent a single terrain patch.",source:"@site/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches.md",sourceDirName:"graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer",slug:"/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches",permalink:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graphics/graphics-performance-profiling/batch-renderer-group/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches.md",tags:[],version:"current",frontMatter:{id:"batch-renderer-group-creating-batches",title:"Creating batches",slug:"/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-batches"},sidebar:"tutorialSidebar",previous:{title:"Creating a renderer with BatchRendererGroup",permalink:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer"},next:{title:"Creating draw commands",permalink:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-draw-commands"}},u={},l=[],h={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-batches"},"Creating batches"),(0,o.kt)("p",null,"BatchRendererGroup (BRG) doesn\u2019t automatically provide any instance data. This includes many properties which are normally built-in for GameObjects, such as transform matrices, light probe coefficients, and lightmap texture coordinates. This means features like ambient lighting only work if you provide instance data yourself. To do this, you add and configure batches. A batch is a collection of instances, where each instance corresponds to a single thing to render. What the instance actually represents depends on what you want to render. For example, in a prop object renderer, an instance could represent a single prop, and in a terrain renderer, it could represent a single terrain patch."),(0,o.kt)("p",null,"Each batch has a set of metadata values and a single ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/GraphicsBuffer.html"},"GraphicsBuffer"),", which every instance in the batch shares. To load data for an instance, the typical process is to use the metadata values to load from the correct location in the GraphicsBuffer. The ",(0,o.kt)("inlineCode",{parentName:"p"},"UNITY_ACCESS_DOTS_INSTANCED_PROP")," family of shader macros work with this scheme (see ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/batch-renderer-group/dots-instancing-shaders#accessing-dots-instanced-properties"},"Accessing DOTS Instanced properties"),"). However, you don\u2019t need to use this per-instance data loading scheme, and you are free to implement your own scheme if you want."),(0,o.kt)("p",null,"To create a batch, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.AddBatch.html"},"BatchRendererGroup.AddBatch"),". The method accepts an array of metadata values and a handle to a GraphicsBuffer. Unity passes the metadata values to the shader when it renders instances from the batch, and binds the GraphicsBuffer as ",(0,o.kt)("inlineCode",{parentName:"p"},"unity_DOTSInstanceData"),". For metadata values that the shader uses but you don\u2019t pass in when you create a batch, Unity sets them to zero."),(0,o.kt)("p",null,"You can\u2019t modify batch metadata values after you create them, so any metadata values you pass to the batch are final. If you need to change any metadata values, create a new batch and remove the old one. You can modify the batch\u2019s GraphicsBuffer at any time. To do this, use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/2022.1/ScriptReference/Rendering.BatchRendererGroup.SetBatchBuffer.html"},"SetBatchBuffer"),". This can be useful to resize buffers and allocate a larger buffer if the existing one runs out of space."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note")," : You don\u2019t need to specify the size of a batch when you create one. Instead, you have to make sure that instances that the OnPerformCulling callback outputs are valid and able to load per-instance data when Unity renders them. This means you can allocate space for more per-instance data than you initially need so you can render more instances using the batch later."),(0,o.kt)("p",null,"See the following code sample for an example of how to create a batch with metadata values and a GraphicsBuffer of instance data. This code sample builds on the one in ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-registering-meshes-and-materials"},"Registering meshes and materials"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using System;\nusing Unity.Collections;\nusing Unity.Collections.LowLevel.Unsafe;\nusing Unity.Jobs;\nusing UnityEngine;\nusing UnityEngine.Rendering;\n\npublic class SimpleBRGExample : MonoBehaviour\n{\n    public Mesh mesh;\n    public Material material;\n\n    private BatchRendererGroup m_BRG;\n\n    private GraphicsBuffer m_InstanceData;\n    private BatchID m_BatchID;\n    private BatchMeshID m_MeshID;\n    private BatchMaterialID m_MaterialID;\n\n    // Some helper constants to make calculations more convenient.\n    private const int kSizeOfMatrix = sizeof(float) * 4 * 4;\n    private const int kSizeOfPackedMatrix = sizeof(float) * 4 * 3;\n    private const int kSizeOfFloat4 = sizeof(float) * 4;\n    private const int kBytesPerInstance = (kSizeOfPackedMatrix * 2) + kSizeOfFloat4;\n    private const int kExtraBytes = kSizeOfMatrix * 2;\n    private const int kNumInstances = 3;\n\n    // The PackedMatrix is a convenience type that converts matrices into\n    // the format that Unity-provided shaders expect.\n    struct PackedMatrix\n    {\n        public float c0x;\n        public float c0y;\n        public float c0z;\n        public float c1x;\n        public float c1y;\n        public float c1z;\n        public float c2x;\n        public float c2y;\n        public float c2z;\n        public float c3x;\n        public float c3y;\n        public float c3z;\n\n        public PackedMatrix(Matrix4x4 m)\n        {\n            c0x = m.m00;\n            c0y = m.m10;\n            c0z = m.m20;\n            c1x = m.m01;\n            c1y = m.m11;\n            c1z = m.m21;\n            c2x = m.m02;\n            c2y = m.m12;\n            c2z = m.m22;\n            c3x = m.m03;\n            c3y = m.m13;\n            c3z = m.m23;\n        }\n    }\n\n    private void Start()\n    {\n        m_BRG = new BatchRendererGroup(this.OnPerformCulling, IntPtr.Zero);\n        m_MeshID = m_BRG.RegisterMesh(mesh);\n        m_MaterialID = m_BRG.RegisterMaterial(material);\n\n        AllocateInstanceDateBuffer();\n        PopulateInstanceDataBuffer();\n    }\n\n    private void AllocateInstanceDateBuffer()\n    {\n        m_InstanceData = new GraphicsBuffer(GraphicsBuffer.Target.Raw,\n            BufferCountForInstances(kBytesPerInstance, kNumInstances, kExtraBytes),\n            sizeof(int));\n    }\n\n    private void PopulateInstanceDataBuffer()\n    {\n        // Place a zero matrix at the start of the instance data buffer, so loads from address 0 return zero.\n        var zero = new Matrix4x4[1] { Matrix4x4.zero };\n\n        // Create transform matrices for three example instances.\n        var matrices = new Matrix4x4[kNumInstances]\n        {\n            Matrix4x4.Translate(new Vector3(-2, 0, 0)),\n            Matrix4x4.Translate(new Vector3(0, 0, 0)),\n            Matrix4x4.Translate(new Vector3(2, 0, 0)),\n        };\n\n        // Convert the transform matrices into the packed format that the shader expects.\n        var objectToWorld = new PackedMatrix[kNumInstances]\n        {\n            new PackedMatrix(matrices[0]),\n            new PackedMatrix(matrices[1]),\n            new PackedMatrix(matrices[2]),\n        };\n\n        // Also create packed inverse matrices.\n        var worldToObject = new PackedMatrix[kNumInstances]\n        {\n            new PackedMatrix(matrices[0].inverse),\n            new PackedMatrix(matrices[1].inverse),\n            new PackedMatrix(matrices[2].inverse),\n        };\n\n        // Make all instances have unique colors.\n        var colors = new Vector4[kNumInstances]\n        {\n            new Vector4(1, 0, 0, 1),\n            new Vector4(0, 1, 0, 1),\n            new Vector4(0, 0, 1, 1),\n        };\n\n        // In this simple example, the instance data is placed into the buffer like this:\n        // Offset | Description\n        //      0 | 64 bytes of zeroes, so loads from address 0 return zeroes\n        //     64 | 32 uninitialized bytes to make working with SetData easier, otherwise unnecessary\n        //     96 | unity_ObjectToWorld, three packed float3x4 matrices\n        //    240 | unity_WorldToObject, three packed float3x4 matrices\n        //    384 | _BaseColor, three float4s\n\n        // Calculates start addresses for the different instanced properties. unity_ObjectToWorld starts\n        // at address 96 instead of 64, because the computeBufferStartIndex parameter of SetData\n        // is expressed as source array elements, so it is easier to work in multiples of sizeof(PackedMatrix).\n        uint byteAddressObjectToWorld = kSizeOfPackedMatrix * 2;\n        uint byteAddressWorldToObject = byteAddressObjectToWorld + kSizeOfPackedMatrix * kNumInstances;\n        uint byteAddressColor = byteAddressWorldToObject + kSizeOfPackedMatrix * kNumInstances;\n\n        // Upload the instance data to the GraphicsBuffer so the shader can load them.\n        m_InstanceData.SetData(zero, 0, 0, 1);\n        m_InstanceData.SetData(objectToWorld, 0, (int)(byteAddressObjectToWorld / kSizeOfPackedMatrix), objectToWorld.Length);\n        m_InstanceData.SetData(worldToObject, 0, (int)(byteAddressWorldToObject / kSizeOfPackedMatrix), worldToObject.Length);\n        m_InstanceData.SetData(colors, 0, (int)(byteAddressColor / kSizeOfFloat4), colors.Length);\n\n        // Set up metadata values to point to the instance data. Set the most significant bit 0x80000000 in each\n        // which instructs the shader that the data is an array with one value per instance, indexed by the instance index.\n        // Any metadata values that the shader uses and not set here will be zero. When such a value is used with\n        // UNITY_ACCESS_DOTS_INSTANCED_PROP (i.e. without a default), the shader interprets the\n        // 0x00000000 metadata value and loads from the start of the buffer. The start of the buffer which is\n        // is a zero matrix so this sort of load is guaranteed to return zero, which is a reasonable default value.\n        var metadata = new NativeArray&lt;MetadataValue&gt;(3, Allocator.Temp);\n        metadata[0] = new MetadataValue { NameID = Shader.PropertyToID("unity_ObjectToWorld"), Value = 0x80000000 | byteAddressObjectToWorld, };\n        metadata[1] = new MetadataValue { NameID = Shader.PropertyToID("unity_WorldToObject"), Value = 0x80000000 | byteAddressWorldToObject, };\n        metadata[2] = new MetadataValue { NameID = Shader.PropertyToID("_BaseColor"), Value = 0x80000000 | byteAddressColor, };\n\n        // Finally, create a batch for the instances, and make the batch use the GraphicsBuffer with the\n        // instance data, and the metadata values that specify where the properties are. Note that\n        // you don\'t need to pass any batch size here.\n        m_BatchID = m_BRG.AddBatch(metadata, m_InstanceData.bufferHandle);\n    }\n\n    // Raw buffers are allocated in ints. This is a utility method that calculates\n    // the required number of ints for the data.\n    int BufferCountForInstances(int bytesPerInstance, int numInstances, int extraBytes = 0)\n    {\n        // Round byte counts to int multiples\n        bytesPerInstance = (bytesPerInstance + sizeof(int) - 1) / sizeof(int) * sizeof(int);\n        extraBytes = (extraBytes + sizeof(int) - 1) / sizeof(int) * sizeof(int);\n        int totalBytes = bytesPerInstance * numInstances + extraBytes;\n        return totalBytes / sizeof(int);\n    }\n\n\n    private void OnDisable()\n    {\n        m_BRG.Dispose();\n    }\n\n    public unsafe JobHandle OnPerformCulling(\n        BatchRendererGroup rendererGroup,\n        BatchCullingContext cullingContext,\n        BatchCullingOutput cullingOutput,\n        IntPtr userContext)\n    {\n        // This simple example doesn\'t use jobs, so it can just return an empty JobHandle.\n        // Performance sensitive applications should use Burst jobs to implement\n        // culling and draw command output. In this case, this function would return a\n        // handle here that completes when those jobs have finished.\n        return new JobHandle();\n\n    }\n}\n')),(0,o.kt)("p",null,"Now that you have registered all the required resources with a BatchRendererGroup object, you can create draw commands. For more information, see the next topic, ",(0,o.kt)("a",{parentName:"p",href:"/doc-unity-manual/docs/batch-renderer-group-creating-a-renderer/batch-renderer-group-creating-draw-commands"},"Creating draw commands"),"."))}p.isMDXComponent=!0}}]);