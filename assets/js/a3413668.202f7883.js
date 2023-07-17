"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5400],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||g[d]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),s=["components"],o={},p="Using the Casper Signer in dApp Development",c={unversionedId:"developers/dapps/signer-integration",id:"developers/dapps/signer-integration",title:"Using the Casper Signer in dApp Development",description:"The Casper Signer has been deprecated and replaced with the Casper Wallet. We are in the process of updating this page. Meanwhile, visit the guide on Building with the Casper Wallet.",source:"@site/source/docs/casper/developers/dapps/signer-integration.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/signer-integration",permalink:"/developers/dapps/signer-integration",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/signer-integration.md",tags:[],version:"current",lastUpdatedAt:1689586749,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{}},l={},u=[{value:"Integrating with the Casper Signer",id:"integrating-with-the-casper-signer",level:2},{value:"Creating Vaults &amp; Accounts",id:"creating-vaults--accounts",level:2},{value:"Getting an Account&#39;s Public Key",id:"getting-an-accounts-public-key",level:2},{value:"Signing Messages and Transactions",id:"signing-messages-and-transactions",level:2},{value:"Signing a message",id:"signing-a-message",level:3},{value:"Signing a transaction",id:"signing-a-transaction",level:3},{value:"Responding to Signer Events",id:"responding-to-signer-events",level:2},{value:"Disconnecting",id:"disconnecting",level:2}],g={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)(d,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-casper-signer-in-dapp-development"},"Using the Casper Signer in dApp Development"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Casper Signer has been deprecated and replaced with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.casperwallet.io"},"Casper Wallet"),". We are in the process of updating this page. Meanwhile, visit the guide on ",(0,r.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/develop"},"Building with the Casper Wallet"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/signer"},"Casper Signer")," is a browser plugin for interfacing with Casper accounts. You can interact with the Casper Signer using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," class in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"Casper JavaScript SDK"),"."),(0,r.kt)("h2",{id:"integrating-with-the-casper-signer"},"Integrating with the Casper Signer"),(0,r.kt)("p",null,"To connect to the Casper Signer from a dApp's front-end is simple. Start by importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," class from the Casper JS SDK."),(0,r.kt)("p",null,"Using ES5 syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Signer } = require("casper-js-sdk");\n')),(0,r.kt)("p",null,"Using ES6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Signer } from "casper-js-sdk";\n')),(0,r.kt)("p",null,"You can then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," class to send a connection request to the Casper Signer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Signer.sendConnectionRequest();\n")),(0,r.kt)("p",null,"Check if the Casper Signer is connected using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Signer.isConnected();\n")),(0,r.kt)("h2",{id:"creating-vaults--accounts"},"Creating Vaults & Accounts"),(0,r.kt)("p",null,"You can use the available JavaScript methods to create new vaults and accounts within the Signer. A vault is designed to hold many accounts, whereas an account is an entity with a single public and private key that can interact with a Casper network."),(0,r.kt)("p",null,"To check if the user has created a vault, read the boolean result of the promissory function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Signer.hasCreatedVault();\n")),(0,r.kt)("p",null,"To create a new vault, call the following function, providing a password for the vault:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Signer.createNewVault("password");\n')),(0,r.kt)("p",null,"You may also create a test account that will remain persistent in the Signer using the following code, where ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey")," is the Base16 private key of the account as a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Signer.createTestAccount("Account Name", privateKey);\n')),(0,r.kt)("h2",{id:"getting-an-accounts-public-key"},"Getting an Account's Public Key"),(0,r.kt)("p",null,"Two methods exist for getting the active account's public key in different formats. There are many reasons you may want to read the public key of the active account, the main being the use of it in a smart contract call or query."),(0,r.kt)("p",null,"To get the account's public key in hexadecimal format, execute the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Signer.getActivePublicKey();\n")),(0,r.kt)("p",null,"This function resolves to a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", or rejects with an error."),(0,r.kt)("h2",{id:"signing-messages-and-transactions"},"Signing Messages and Transactions"),(0,r.kt)("h3",{id:"signing-a-message"},"Signing a message"),(0,r.kt)("p",null,"When a message is signed with a Casper account, it serves as proof that the account owner sent the message and that the message has not been tampered with since it was signed. The signature is generated using the account's private key, which only the account owner can access. The signature can then be verified by anyone with access to the message, the signature, and the public key associated with the Casper account."),(0,r.kt)("p",null,"To sign a given message using the Casper JS SDK, initiate a signature request using this function, where ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," is the Base16 ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"-typed public key of the active account within the Casper Signer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Signer.signMessage("Message to be signed", publicKey);\n')),(0,r.kt)("h3",{id:"signing-a-transaction"},"Signing a transaction"),(0,r.kt)("p",null,"Transactions can be forwarded to the Casper Signer to be signed by a user without revealing their private key to the application. To accomplish this, convert a valid, unsigned ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," object to JSON and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const publicKeyHex = await Signer.getActivePublicKey();\n\nconst unsignedDeploy = contract.callEntrypoint(\n    "test_entrypoint",\n    runtimeArguments,\n    CLPublicKey.fromHex(publicKeyHex),\n    "casper", // Or "casper-test" for Testnet\n    "1000000000", // Gas payment, 10^9 motes or 1 CSPR\n    [], // Empty signing-keys array\n);\n\nconst unsignedDeployJSON = DeployUtil.deployToJSON(unsignedDeploy);\n\nconst signedDeployJSON = await Signer.sign(unsignedDeployJSON, publicKeyHex);\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," function throws an error if the Casper Signer is not connected (see ",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected"),") or if the signing public key (",(0,r.kt)("inlineCode",{parentName:"p"},"publicKeyHex")," above) does not match the active public key in the Signer."),(0,r.kt)("p",null,"Once you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"signedDeployJSON"),", you can craft a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST"},"POST request")," to your dApp's backend, passing along the signed JSON deploy in the body. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," header to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,r.kt)("h2",{id:"responding-to-signer-events"},"Responding to Signer Events"),(0,r.kt)("p",null,"The Casper Signer will emit events when it changes state. Your application can update and change state as well by listening to these events."),(0,r.kt)("p",null,"For example, the Casper Signer will lock itself automatically after a set interval of disuse (2-10 minutes). When this occurs, the Casper Signer emits the ",(0,r.kt)("inlineCode",{parentName:"p"},"signer:locked")," event. We can listen for this event using ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener("signer:locked", (msg) => {\n    // Disable buttons, forget the active public key, etc\n});\n')),(0,r.kt)("p",null,"The variable ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," shown above contains event information specific to the event, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"isConnected"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isUnlocked"),", and the active public key."),(0,r.kt)("p",null,"There are a few different events you may listen to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer:connected")," - Emitted when the Casper Signer connects to the dApp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer:disconnected")," - Emitted when the Casper Signer disconnects from the dApp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer:tabUpdated")," - Emitted when a tab is updated within the Signer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer:activeKeyChanged")," - Emitted when the active account changes within the Signer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer:locked")," - Emitted when the Casper Signer is locked. Can be performed by the user or occur due to timeout.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer:unlocked")," - Emitted when the Casper Signer is unlocked."))),(0,r.kt)("h2",{id:"disconnecting"},"Disconnecting"),(0,r.kt)("p",null,"After connecting the Casper Signer to your dApp, you may, at some point, want to disconnect. There is a method available for this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"Signer.disconnectFromSite();\n")))}h.isMDXComponent=!0}}]);