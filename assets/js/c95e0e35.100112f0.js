"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3287],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,g=d["".concat(i,".").concat(k)]||d[k]||l[k]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3593:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],p={},i=".NET SDK",c={unversionedId:"dapp-dev-guide/building-dapps/sdk/csharp-sdk",id:"dapp-dev-guide/building-dapps/sdk/csharp-sdk",title:".NET SDK",description:"The C# .NET SDK allows developers to interact with a Casper network using C#.",source:"@site/source/docs/casper/dapp-dev-guide/building-dapps/sdk/csharp-sdk.md",sourceDirName:"dapp-dev-guide/building-dapps/sdk",slug:"/dapp-dev-guide/building-dapps/sdk/csharp-sdk",permalink:"/dapp-dev-guide/building-dapps/sdk/csharp-sdk",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/building-dapps/sdk/csharp-sdk.md",tags:[],version:"current",lastUpdatedAt:1676019817,formattedLastUpdatedAt:"2/10/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"JavaScript/TypeScript SDK",permalink:"/dapp-dev-guide/building-dapps/sdk/script-sdk"},next:{title:"Golang SDK",permalink:"/dapp-dev-guide/building-dapps/sdk/go-sdk"}},u={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Get started",id:"get-started",level:2}],d={toc:l};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net-sdk"},".NET SDK"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/make-software/casper-net-sdk"},"C# .NET SDK")," allows developers to interact with a Casper network using C#."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://make-software.github.io/casper-net-sdk/"},"https://make-software.github.io/casper-net-sdk/")," to find the SDK documentation, examples, and tutorials."),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"This example shows how to retrieve an account's main purse balance from a testnet node. Make sure you have .NET 5 or higher before continuing."),(0,o.kt)("p",null,"Open a terminal window and create a new console app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console -o GetAccountBalance\ncd GetAccountBalance\n")),(0,o.kt)("p",null,"The Casper.Network.SDK for .NET is published on ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Casper.Network.SDK"},"nuget.org")," as a NuGet package."),(0,o.kt)("p",null,"To add a reference to the SDK in your project, use the Package Manager in Visual Studio or the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet")," CLI tool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Package Manager (Windows)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Install-Package Casper.Network.SDK\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dotnet CLI Tool (Windows, Mac, and Linux)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Casper.Network.SDK\n")),(0,o.kt)("p",null,"Now, replace the default code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," with this main program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using System;\nusing System.Threading.Tasks;\nusing Casper.Network.SDK;\nusing Casper.Network.SDK.JsonRpc;\nusing Casper.Network.SDK.Types;\n\nnamespace Casper.NET.SDK.Examples\n{\n    public class GetAccountBalance\n    {\n        public static async Task Main(string[] args)\n        {\n            string nodeAddress = "http://testnet-node.make.services:7777";\n\n            var hex = "0203914289b334f57366541099a52156b149436fdb0422b3c48fe4115d0578abf690";\n            var publicKey = PublicKey.FromHexString(hex);\n\n            try\n            {\n                var casperSdk = new NetCasperClient(nodeAddress);\n\n                // Get the balance using the account public key\n                //\n                var rpcResponse = await casperSdk.GetAccountBalance(publicKey);\n                Console.WriteLine("Public Key Balance: " + rpcResponse.Parse().BalanceValue);\n            }\n            catch (RpcClientException e)\n            {\n                Console.WriteLine("ERROR:\\n" + e.RpcError.Message);\n            }\n            catch (Exception e)\n            {\n                Console.WriteLine(e);\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Finally, run the example with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run\n")),(0,o.kt)("p",null,"The program will print the account's main purse balance retrieved from the testnet."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://make-software.github.io/casper-net-sdk/"},"https://make-software.github.io/casper-net-sdk/")," to find other examples, tutorials, and complete documentation for this SDK."))}k.isMDXComponent=!0}}]);