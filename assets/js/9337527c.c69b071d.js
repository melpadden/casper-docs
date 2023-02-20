"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3540],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9100:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),s=["components"],i={},l="Introduction",u={unversionedId:"workflow/developers/transfers",id:"workflow/developers/transfers",title:"Introduction",description:"The following topics describe how to use the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the type of accounts, you can choose a direct transfer or a multiple-signature (multi-sig) deploy transfer.",source:"@site/source/docs/casper/workflow/developers/transfers.md",sourceDirName:"workflow/developers",slug:"/workflow/developers/transfers",permalink:"/workflow/developers/transfers",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/developers/transfers.md",tags:[],version:"current",lastUpdatedAt:1676913128,formattedLastUpdatedAt:"2/20/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Two-Party Multi-Signature Deploys",permalink:"/workflow/developers/two-party-multi-sig"},next:{title:"Direct Token Transfer",permalink:"/workflow/developers/transfer-workflow"}},c={},p=[],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The following topics describe how to use the Casper command-line client to transfer tokens between purses on a Casper network. Depending on the type of accounts, you can choose a direct transfer or a multiple-signature (multi-sig) deploy transfer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transferring Tokens using Direct Transfer")),(0,a.kt)("p",null,"You can use the direct method to transfer tokens when you have an account with a single primary key, and it is capable of signing a transaction. To use a direct transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/workflow/developers/transfer-workflow"},"Transferring Tokens using Direct Transfer"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transferring Tokens using Multi-sig Deploy")),(0,a.kt)("p",null,"When the account used to initiate the transfer has multiple associated keys that need to sign the deploy, you can use a multi-sig deploy transfer. To set up the account's associated keys, see the ",(0,a.kt)("a",{parentName:"p",href:"/workflow/developers/two-party-multi-sig"},"Two-Party Multi-Signature Deploys")," workflow. To use a multi-sig deploy transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/workflow/developers/deploy-transfer"},"Transferring Tokens using a Multi-sig Account"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifying a Transfer using the Command-line Client")),(0,a.kt)("p",null,"To verify the status of a transfer, see ",(0,a.kt)("a",{parentName:"p",href:"/workflow/developers/verify-transfer"},"Verifying a Transfer"),"."))}d.isMDXComponent=!0}}]);