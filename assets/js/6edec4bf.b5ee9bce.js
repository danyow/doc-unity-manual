"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50935],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return p}});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),u=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=u(n.components);return o.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),m=u(t),p=r,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return t?o.createElement(g,a(a({ref:e},l),{},{components:t})):o.createElement(g,a({ref:e},l))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61030:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"UnityMultiplayerIntegratingLowLevel",title:"\u4f7f\u7528 NetworkTransport \u8fdb\u884c\u96c6\u6210",slug:"/unity-multiplayer-setting-up/unity-multiplayer-integrating-low-level"},s="\u4f7f\u7528 NetworkTransport \u8fdb\u884c\u96c6\u6210",u={unversionedId:"unet/unet-using-hlapi/unity-multiplayer-setting-up/UnityMultiplayerIntegratingLowLevel",id:"unet/unet-using-hlapi/unity-multiplayer-setting-up/UnityMultiplayerIntegratingLowLevel",title:"\u4f7f\u7528 NetworkTransport \u8fdb\u884c\u96c6\u6210",description:"\u5982\u679c\u5728\u96c6\u6210 Unity Multiplayer \u670d\u52a1\u65f6\u9700\u8981\u6700\u5927\u7a0b\u5ea6\u7684\u7075\u6d3b\u6027\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528 NetworkTransport \u7c7b\u3002\u6b64\u65b9\u6cd5\u9700\u8981\u66f4\u591a\u4ee3\u7801\uff0c\u4f46\u53ef\u7528\u4e8e\u63a7\u5236\u6e38\u620f\u4e0e Multiplayer \u670d\u52a1\u96c6\u6210\u7684\u6240\u6709\u7ec6\u8282\u3002",source:"@site/docs/unet/unet-using-hlapi/unity-multiplayer-setting-up/unity-multiplayer-integrating-low-level.md",sourceDirName:"unet/unet-using-hlapi/unity-multiplayer-setting-up",slug:"/unity-multiplayer-setting-up/unity-multiplayer-integrating-low-level",permalink:"/docs/unity-multiplayer-setting-up/unity-multiplayer-integrating-low-level",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unet/unet-using-hlapi/unity-multiplayer-setting-up/unity-multiplayer-integrating-low-level.md",tags:[],version:"current",frontMatter:{id:"UnityMultiplayerIntegratingLowLevel",title:"\u4f7f\u7528 NetworkTransport \u8fdb\u884c\u96c6\u6210",slug:"/unity-multiplayer-setting-up/unity-multiplayer-integrating-low-level"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 HUD \u8fdb\u884c\u96c6\u6210",permalink:"/docs/unity-multiplayer-setting-up/unity-multiplayer-integrating-hud"},next:{title:"\u96c6\u6210 Multiplayer \u670d\u52a1",permalink:"/docs/unity-multiplayer-setting-up/unity-multiplayer-integrating-overview"}},l={},d=[],m={toc:d};function p(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f7f\u7528-networktransport-\u8fdb\u884c\u96c6\u6210"},"\u4f7f\u7528 NetworkTransport \u8fdb\u884c\u96c6\u6210"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u96c6\u6210 Unity Multiplayer \u670d\u52a1\u65f6\u9700\u8981\u6700\u5927\u7a0b\u5ea6\u7684\u7075\u6d3b\u6027\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkTransport")," \u7c7b\u3002\u6b64\u65b9\u6cd5\u9700\u8981\u66f4\u591a\u4ee3\u7801\uff0c\u4f46\u53ef\u7528\u4e8e\u63a7\u5236\u6e38\u620f\u4e0e Multiplayer \u670d\u52a1\u96c6\u6210\u7684\u6240\u6709\u7ec6\u8282\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkTransport")," \u7c7b\u8fdb\u884c\u8fde\u63a5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'using UnityEngine;\nusing UnityEngine.Networking;\nusing UnityEngine.Networking.Types;\nusing UnityEngine.Networking.Match;\nusing System.Collections.Generic;\n\npublic class DirectSetup : MonoBehaviour\n{\n    // \u4e0e Matchmaker \u76f8\u5173\n    List&lt;MatchInfoSnapshot&gt; m_MatchList = new List&lt;MatchInfoSnapshot&gt;();\n    bool m_MatchCreated;\n    bool m_MatchJoined;\n    MatchInfo m_MatchInfo;\n    string m_MatchName = "NewRoom";\n    NetworkMatch m_NetworkMatch;\n\n    // \u4e0e\u8fde\u63a5/\u901a\u4fe1\u76f8\u5173\n    int m_HostId = -1;\n    // \u5728\u670d\u52a1\u5668\u4e0a\u5c06\u6709\u591a\u4e2a\u8fde\u63a5\uff0c\u5728\u5ba2\u6237\u7aef\u4e0a\u5c06\u53ea\u5305\u542b\u4e00\u4e2a ID\n    List&lt;int&gt; m_ConnectionIds = new List&lt;int&gt;();\n    byte[] m_ReceiveBuffer;\n    string m_NetworkMessage = "Hello world";\n    string m_LastReceivedMessage = "";\n    NetworkWriter m_Writer;\n    NetworkReader m_Reader;\n    bool m_ConnectionEstablished;\n\n    const int k_ServerPort = 25000;\n    const int k_MaxMessageSize = 65535;\n\n    void Awake()\n    {\n        m_NetworkMatch = gameObject.AddComponent&lt;NetworkMatch&gt;();\n    }\n\n    void Start()\n    {\n        m_ReceiveBuffer = new byte[k_MaxMessageSize];\n        m_Writer = new NetworkWriter();\n        // \u5728\u4e00\u53f0\u673a\u5668\u4e0a\u4f7f\u7528\u591a\u4e2a\u72ec\u7acb\u73a9\u5bb6\u8fdb\u884c\u6d4b\u8bd5\u65f6\uff0c\u9700\u8981\u542f\u7528\u6b64\u529f\u80fd\n        Application.runInBackground = true;\n    }\n\n    void OnApplicationQuit()\n    {\n        NetworkTransport.Shutdown();\n    }\n\n    void OnGUI()\n    {\n        if (string.IsNullOrEmpty(Application.cloudProjectId))\n            GUILayout.Label("You must set up the project first.See the Multiplayer tab in the Service Window");\n        else\n            GUILayout.Label("Cloud Project ID: " + Application.cloudProjectId);\n\n        if (m_MatchJoined)\n            GUILayout.Label("Match joined \'" + m_MatchName + "\' on Matchmaker server");\n        else if (m_MatchCreated)\n            GUILayout.Label("Match \'" + m_MatchName + "\' created on Matchmaker server");\n\n        GUILayout.Label("Connection Established: " + m_ConnectionEstablished);\n\n        if (m_MatchCreated || m_MatchJoined)\n        {\n            GUILayout.Label("Relay Server: " + m_MatchInfo.address + ":" + m_MatchInfo.port);\n            GUILayout.Label("NetworkID: " + m_MatchInfo.networkId + " NodeID: " + m_MatchInfo.nodeId);\n            GUILayout.BeginHorizontal();\n            GUILayout.Label("Outgoing message:");\n            m_NetworkMessage = GUILayout.TextField(m_NetworkMessage);\n            GUILayout.EndHorizontal();\n            GUILayout.Label("Last incoming message: " + m_LastReceivedMessage);\n\n            if (m_ConnectionEstablished && GUILayout.Button("Send message"))\n            {\n                m_Writer.SeekZero();\n                m_Writer.Write(m_NetworkMessage);\n                byte error;\n                for (int i = 0; i &lt; m_ConnectionIds.Count; ++i)\n                {\n                    NetworkTransport.Send(m_HostId,\n                        m_ConnectionIds[i], 0, m_Writer.AsArray(), m_Writer.Position, out error);\n                    if ((NetworkError)error != NetworkError.Ok)\n                        Debug.LogError("Failed to send message: " + (NetworkError)error);\n                }\n            }\n\n            if (GUILayout.Button("Shutdown"))\n            {\n                m_NetworkMatch.DropConnection(m_MatchInfo.networkId,\n                    m_MatchInfo.nodeId, 0, OnConnectionDropped);\n            }\n        }\n        else\n        {\n            if (GUILayout.Button("Create Room"))\n            {\n                m_NetworkMatch.CreateMatch(m_MatchName, 4, true, "", "", "", 0, 0, OnMatchCreate);\n            }\n\n            if (GUILayout.Button("Join first found match"))\n            {\n                m_NetworkMatch.ListMatches(0, 1, "", true, 0, 0, (success, info, matches) =&gt;\n                {\n                    if (success && matches.Count &gt; 0)\n                        m_NetworkMatch.JoinMatch(matches[0].networkId, "", "", "", 0, 0, OnMatchJoined);\n                });\n            }\n\n            if (GUILayout.Button("List rooms"))\n            {\n                m_NetworkMatch.ListMatches(0, 20, "", true, 0, 0, OnMatchList);\n            }\n\n            if (m_MatchList.Count &gt; 0)\n            {\n                GUILayout.Label("Current rooms:");\n            }\n            foreach (var match in m_MatchList)\n            {\n                if (GUILayout.Button(match.name))\n                {\n                    m_NetworkMatch.JoinMatch(match.networkId, "", "", "", 0, 0, OnMatchJoined);\n                }\n            }\n        }\n    }\n\n    public void OnConnectionDropped(bool success, string extendedInfo)\n    {\n        Debug.Log("Connection has been dropped on matchmaker server");\n        NetworkTransport.Shutdown();\n        m_HostId = -1;\n        m_ConnectionIds.Clear();\n        m_MatchInfo = null;\n        m_MatchCreated = false;\n        m_MatchJoined = false;\n        m_ConnectionEstablished = false;\n    }\n\n    public virtual void OnMatchCreate(bool success, string extendedInfo, MatchInfo matchInfo)\n    {\n        if (success)\n        {\n            Debug.Log("Create match succeeded");\n            Utility.SetAccessTokenForNetwork(matchInfo.networkId, matchInfo.accessToken);\n           \n            m_MatchCreated = true;\n            m_MatchInfo = matchInfo;\n\n            StartServer(matchInfo.address, matchInfo.port, matchInfo.networkId,\n                matchInfo.nodeId);\n        }\n        else\n        {\n            Debug.LogError("Create match failed: " + extendedInfo);\n        }\n    }\n\n    public void OnMatchList(bool success, string extendedInfo, List&lt;MatchInfoSnapshot&gt; matches)\n    {\n        if (success && matches != null)\n        {\n            m_MatchList = matches;\n        }\n    else if(!success)\n    {\n        Debug.LogError("List match failed: " + extendedInfo);\n    }\n    }\n\n    // \u5f53\u6211\u4eec\u914d\u5bf9\u540e\uff0c\u6211\u4eec\u8fde\u63a5\u5230\u670d\u52a1\u5668/\u4e3b\u673a\n    public virtual void OnMatchJoined(bool success, string extendedInfo, MatchInfo matchInfo)\n    {\n        if (success)\n        {\n            Debug.Log("Join match succeeded");\n            Utility.SetAccessTokenForNetwork(matchInfo.networkId, matchInfo.accessToken);\n\n            m_MatchJoined = true;\n            m_MatchInfo = matchInfo;\n\n            Debug.Log("Connecting to Address:" + matchInfo.address +\n                " Port:" + matchInfo.port +\n                " NetworKID: " + matchInfo.networkId +\n                " NodeID: " + matchInfo.nodeId);\n            ConnectThroughRelay(matchInfo.address, matchInfo.port, matchInfo.networkId,\n                matchInfo.nodeId);\n        }\n        else\n        {\n            Debug.LogError("Join match failed: " + extendedInfo);\n        }\n    }\n\n    void SetupHost(bool isServer)\n    {\n        Debug.Log("Initializing network transport");\n        NetworkTransport.Init();\n        var config = new ConnectionConfig();\n        config.AddChannel(QosType.Reliable);\n        config.AddChannel(QosType.Unreliable);\n        var topology = new HostTopology(config, 4);\n        if (isServer)\n            m_HostId = NetworkTransport.AddHost(topology, k_ServerPort);\n        else\n            m_HostId = NetworkTransport.AddHost(topology);\n    }\n\n    void StartServer(string relayIp, int relayPort, NetworkID networkId, NodeID nodeId)\n    {\n        SetupHost(true);\n\n        byte error;\n        NetworkTransport.ConnectAsNetworkHost(\n            m_HostId, relayIp, relayPort, networkId, Utility.GetSourceID(), nodeId, out error);\n    }\n\n    void ConnectThroughRelay(string relayIp, int relayPort, NetworkID networkId, NodeID nodeId)\n    {\n        SetupHost(false);\n\n        byte error;\n        NetworkTransport.ConnectToNetworkPeer(\n            m_HostId, relayIp, relayPort, 0, 0, networkId, Utility.GetSourceID(), nodeId, out error);\n    }\n\n    void Update()\n    {\n        if (m_HostId == -1)\n            return;\n\n        var networkEvent = NetworkEventType.Nothing;\n        int connectionId;\n        int channelId;\n        int receivedSize;\n        byte error;\n\n        // \u4ece\u4e2d\u7ee7\u8fde\u63a5\u4e2d\u83b7\u53d6\u4e8b\u4ef6\n        networkEvent = NetworkTransport.ReceiveRelayEventFromHost(m_HostId, out error);\n        if (networkEvent == NetworkEventType.ConnectEvent)\n            Debug.Log("Relay server connected");\n        if (networkEvent == NetworkEventType.DisconnectEvent)\n            Debug.Log("Relay server disconnected");\n\n        do\n        {\n            // \u4ece\u670d\u52a1\u5668/\u5ba2\u6237\u7aef\u6e38\u620f\u8fde\u63a5\u4e2d\u83b7\u53d6\u4e8b\u4ef6\n            networkEvent = NetworkTransport.ReceiveFromHost(m_HostId, out connectionId, out channelId,\n                m_ReceiveBuffer, (int)m_ReceiveBuffer.Length, out receivedSize, out error);\n            if ((NetworkError)error != NetworkError.Ok)\n            {\n                Debug.LogError("Error while receiveing network message: " + (NetworkError)error);\n            }\n\n            switch (networkEvent)\n            {\n                case NetworkEventType.ConnectEvent:\n                    {\n                        Debug.Log("Connected through relay, ConnectionID:" + connectionId +\n                            " ChannelID:" + channelId);\n                        m_ConnectionEstablished = true;\n                        m_ConnectionIds.Add(connectionId);\n                        break;\n                    }\n                case NetworkEventType.DataEvent:\n                    {\n                        Debug.Log("Data event, ConnectionID:" + connectionId +\n                            " ChannelID: " + channelId +\n                            " Received Size: " + receivedSize);\n                        m_Reader = new NetworkReader(m_ReceiveBuffer);\n                        m_LastReceivedMessage = m_Reader.ReadString();\n                        break;\n                    }\n                case NetworkEventType.DisconnectEvent:\n                    {\n                        Debug.Log("Connection disconnected, ConnectionID:" + connectionId);\n                        break;\n                    }\n                case NetworkEventType.Nothing:\n                    break;\n            }\n        } while (networkEvent != NetworkEventType.Nothing);\n    }\n}\n')))}p.isMDXComponent=!0}}]);