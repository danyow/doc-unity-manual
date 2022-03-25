"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),y=c(n),f=i,d=y["".concat(u,".").concat(f)]||y[f]||l[f]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},61110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],a={id:"UnityIAPStoreExtensions",title:"\u5e94\u7528\u5546\u5e97\u6269\u5c55",slug:"/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapstore-extensions"},u="\u5e94\u7528\u5546\u5e97\u6269\u5c55",c={unversionedId:"unity-services/unity-iap/\u8de8\u5e73\u53f0\u6307\u5357/UnityIAPStoreExtensions",id:"unity-services/unity-iap/\u8de8\u5e73\u53f0\u6307\u5357/UnityIAPStoreExtensions",title:"\u5e94\u7528\u5546\u5e97\u6269\u5c55",description:"\u5e94\u7528\u5546\u5e97\u63d0\u4f9b\u7684\u72ec\u7279\u529f\u80fd\u53ef\u80fd\u4e0d\u7b26\u5408\u6b63\u5e38\u7684\u8de8\u5e73\u53f0\u8d2d\u4e70\u6d41\u7a0b\u3002\u901a\u8fc7 Unity IAP \u6210\u529f\u521d\u59cb\u5316\u65f6\u5411\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u7684 IExtensionProvider \u53ef\u4ee5\u8bbf\u95ee\u6b64\u6269\u5c55\u529f\u80fd\u3002",source:"@site/docs/unity-services/unity-iap/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapstore-extensions.md",sourceDirName:"unity-services/unity-iap/\u8de8\u5e73\u53f0\u6307\u5357",slug:"/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapstore-extensions",permalink:"/doc-unity-manual/docs/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapstore-extensions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/unity-services/unity-iap/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapstore-extensions.md",tags:[],version:"current",frontMatter:{id:"UnityIAPStoreExtensions",title:"\u5e94\u7528\u5546\u5e97\u6269\u5c55",slug:"/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapstore-extensions"},sidebar:"tutorialSidebar",previous:{title:"\u6062\u590d\u4ea4\u6613",permalink:"/doc-unity-manual/docs/\u8de8\u5e73\u53f0\u6307\u5357/unity-iaprestoring-transactions"},next:{title:"\u8ba2\u9605\u5546\u54c1\u652f\u6301",permalink:"/doc-unity-manual/docs/\u8de8\u5e73\u53f0\u6307\u5357/unity-iapsubscription-products"}},p={},l=[],y={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e94\u7528\u5546\u5e97\u6269\u5c55"},"\u5e94\u7528\u5546\u5e97\u6269\u5c55"),(0,o.kt)("p",null,"\u5e94\u7528\u5546\u5e97\u63d0\u4f9b\u7684\u72ec\u7279\u529f\u80fd\u53ef\u80fd\u4e0d\u7b26\u5408\u6b63\u5e38\u7684\u8de8\u5e73\u53f0\u8d2d\u4e70\u6d41\u7a0b\u3002\u901a\u8fc7 Unity IAP \u6210\u529f\u521d\u59cb\u5316\u65f6\u5411\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"IExtensionProvider")," \u53ef\u4ee5\u8bbf\u95ee\u6b64\u6269\u5c55\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u6269\u5c55\u65f6\uff0c\u65e0\u9700\u4f7f\u7528\u4f9d\u8d56\u4e8e\u5e73\u53f0\u7684\u7f16\u8bd1\uff1b\u6bcf\u4e2a\u6269\u5c55\u90fd\u5e26\u6709\u4e00\u4e2a\u5047\u7684\u65e0\u64cd\u4f5c\u5b9e\u73b0\uff08\u5728\u4e0d\u63d0\u4f9b\u6269\u5c55\u529f\u80fd\u7684\u5e73\u53f0\u4e0a\u8fd0\u884c\u65f6\u4f1a\u4f7f\u7528\u8be5\u5b9e\u73b0\uff09\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4ee3\u7801\u6bb5\u663e\u793a\u4e86 Apple \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"RefreshReceipt")," \u673a\u5236\uff08\u7528\u4e8e\u4ece Apple \u670d\u52a1\u5668\u83b7\u53d6\u5237\u65b0\u540e\u7684\u5e94\u7528\u7a0b\u5e8f\u6536\u636e\uff09\u3002\u60a8\u53ef\u4ee5\u5728\u4efb\u4f55 Unity IAP \u5e73\u53f0\u4e0a\u7f16\u8bd1\u5b83\uff1b\u5982\u679c\u8981\u5728\u975e Apple \u5e73\u53f0\uff08\u4f8b\u5982 Android\uff09\u4e0a\u8fd0\u884c\uff0c\u5b83\u5c06\u4e0d\u8d77\u4f5c\u7528\uff0c\u56e0\u4e3a\u7edd\u5bf9\u4e0d\u4f1a\u8c03\u7528\u63d0\u4f9b\u7684 lambda\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/// &lt;summary&gt;\n/// Unity IAP \u51c6\u5907\u597d\u53ef\u4ee5\u8d2d\u4e70\u65f6\u88ab\u8c03\u7528\u3002\n/// &lt;/summary&gt;\npublic void OnInitialized (IStoreController controller, IExtensionProvider extensions)\n{\n    extensions.GetExtension&lt;IAppleExtensions&gt; ().RefreshAppReceipt (result =&gt; {\n        if (result) {\n            // \u6210\u529f\u5b8c\u6210\u5237\u65b0\u3002\n        } else {\n            //\u5237\u65b0\u5931\u8d25\u3002\n        }\n    });\n}\n")))}f.isMDXComponent=!0}}]);