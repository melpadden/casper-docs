"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2092],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4111:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Introduction",slug:"/writing-contracts"},s="Writing On-Chain Code",c={unversionedId:"developers/writing-onchain-code/index",id:"developers/writing-onchain-code/index",title:"Introduction",description:"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The Video Series for Writing On-Chain Code accompanies the topics below.",source:"@site/source/docs/casper/developers/writing-onchain-code/index.md",sourceDirName:"developers/writing-onchain-code",slug:"/writing-contracts",permalink:"/writing-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/writing-onchain-code/index.md",tags:[],version:"current",lastUpdatedAt:1704813884,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"Introduction",slug:"/writing-contracts"},sidebar:"developers",previous:{title:"Essential Rust Crates",permalink:"/developers/essential-crates"},next:{title:"Getting Started with Rust",permalink:"/developers/writing-onchain-code/getting-started"}},d={},p=[{value:"Interacting with Contracts on the Blockchain",id:"interacting-with-contracts-on-the-blockchain",level:2},{value:"Tutorials",id:"tutorials",level:2}],u={toc:p},m="wrapper";function g(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-on-chain-code"},"Writing On-Chain Code"),(0,i.kt)("p",null,"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj"},"Video Series for Writing On-Chain Code")," accompanies the topics below."),(0,i.kt)("p",{align:"center"},(0,i.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed/JoOjhSOnQzk",position:"middle",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/getting-started"},"Getting Started with Rust")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to using Rust with the Casper Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/assembly-script"},"Getting Started with AssemblyScript")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to using AssemblyScript with the Casper Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/simple-contract"},"Writing a Basic Smart Contract in Rust")),(0,i.kt)("td",{parentName:"tr",align:null},"An example of a smart contract built in Rust")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/testing-contracts"},"Unit Testing Smart Contracts")),(0,i.kt)("td",{parentName:"tr",align:null},"Steps to test contract code using the unit testing framework")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/upgrading-contracts"},"Upgrading and Maintaining Smart Contracts")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to versioning smart contracts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/calling-contracts"},"Calling Contracts")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/contract-vs-session"},"Smart Contracts and Session Code")),(0,i.kt)("td",{parentName:"tr",align:null},"Understand what session code is and when you would use it over contract code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/writing-session-code"},"Writing Session Code")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to writing session code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/testing-session-code"},"Unit Testing Session Code")),(0,i.kt)("td",{parentName:"tr",align:null},"Steps to test session code using the unit testing framework")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/contract-hash-vs-package-hash"},"Using Contract Hash vs. Package Hash")),(0,i.kt)("td",{parentName:"tr",align:null},"Advantages and disadvantages of using ",(0,i.kt)("inlineCode",{parentName:"td"},"contract_hash")," vs. ",(0,i.kt)("inlineCode",{parentName:"td"},"contract_package_hash")," when calling a contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/writing-onchain-code/best-practices"},"Best Practices for Casper Smart Contract Authors")),(0,i.kt)("td",{parentName:"tr",align:null},"An outline of best practices when developing smart contracts on a Casper network")))),(0,i.kt)("h2",{id:"interacting-with-contracts-on-the-blockchain"},"Interacting with Contracts on the Blockchain"),(0,i.kt)("p",null,"Additionally, the section on ",(0,i.kt)("a",{parentName:"p",href:"/developers/cli/"},"Interacting with the Blockchain")," covers installing and calling contracts using the Casper command-line client written in Rust."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts and Querying Global State")),(0,i.kt)("td",{parentName:"tr",align:null},"A guide on installing smart contracts and querying global state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts with the Rust Client")),(0,i.kt)("td",{parentName:"tr",align:null},"Steps to call a smart contract with the Rust command-line client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/concepts/dictionaries"},"Reading and Writing to Dictionaries")),(0,i.kt)("td",{parentName:"tr",align:null},"Information on Dictionaries and how to read and write to them on the Casper Platform.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/developers/cli/execution-error-codes"},"Execution Error Codes")),(0,i.kt)("td",{parentName:"tr",align:null},"Possible error codes when writing smart contracts.")))),(0,i.kt)("h2",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"The following tutorials outline some aspects of writing smart contracts on a Casper network."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/resources/tutorials/beginner/getting-started-tutorial"},"Getting Started Video")),(0,i.kt)("td",{parentName:"tr",align:null},"Step-by-step video tutorial for setting up the Casper development environment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/counter-testnet"},"A Counter on the Testnet")),(0,i.kt)("td",{parentName:"tr",align:null},"An example contract that maintains a counter variable on the Casper Testnet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/resources/tutorials/beginner/upgrade-contract"},"Smart Contract Upgrades")),(0,i.kt)("td",{parentName:"tr",align:null},"Learn how to upgrade smart contracts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/README.md"},"NFTs on Casper with the CEP-78 NFT Standard")),(0,i.kt)("td",{parentName:"tr",align:null},"Implementing the Casper CEP-78 NFT standard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/cep18/blob/master/docs/full-tutorial.md"},"Fungible Tokens on Casper")),(0,i.kt)("td",{parentName:"tr",align:null},"Implement the Casper Fungible Token standard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/resources/tutorials/advanced/return-values-tutorial"},"Interacting with Runtime Return Values")),(0,i.kt)("td",{parentName:"tr",align:null},"Learning how to return a value using contract code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/resources/advanced/list-auth-keys-tutorial"},"Working with Authorization Keys")),(0,i.kt)("td",{parentName:"tr",align:null},"Retrieving and using the authorization keys associated with a deploy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/resources/tutorials/advanced/transfer-token-to-contract"},"Safely Transfer Tokens to a Contract")),(0,i.kt)("td",{parentName:"tr",align:null},"How to handle tokens via a contract")))))}g.isMDXComponent=!0}}]);