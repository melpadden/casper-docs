"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3876],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(k,i(i({ref:e},d),{},{components:r})):n.createElement(k,i({ref:e},d))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8313:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"Introduction",slug:"/sdk"},s="SDK Client Libraries",l={unversionedId:"dapp-dev-guide/sdk/index",id:"dapp-dev-guide/sdk/index",title:"Introduction",description:"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions.",source:"@site/source/docs/casper/dapp-dev-guide/sdk/index.md",sourceDirName:"dapp-dev-guide/sdk",slug:"/sdk",permalink:"/docs/sdk",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/sdk/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/sdk"},sidebar:"dapp-dev-guide",previous:{title:"Understanding Hash Types",permalink:"/docs/dapp-dev-guide/understanding-hash-types"},next:{title:"TypeScript/JavaScript SDK",permalink:"/docs/dapp-dev-guide/sdk/script-sdk"}},d=[],c={toc:d};function u(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-client-libraries"},"SDK Client Libraries"),(0,o.kt)("p",null,"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions."),(0,o.kt)("p",null,"The following table provides links to the SDK documentation, in addition to the corresponding GitHub repositories and pertinent contact information."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SDK Documentation"),(0,o.kt)("th",{parentName:"tr",align:null},"GitHub Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Maintainer"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/script-sdk"},"TypeScript")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"Casper-js-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:jan@hfmn.pl"},"Jan Hoffman"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Java SDK (work in progress)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-java-sdk/"},"Casper-java-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:carl.norburn@gmail.com"},"Carl Norburn"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/csharp-sdk"},"C# SDK")," (work in progress)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-net-sdk"},"Casper-net-sdk")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/go-sdk"},"Golang SDK")," (work in progress)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-golang-sdk/"},"Casper-golang-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:yar.panasenko@gmail.com"},"Yaroslav Panasenko"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/python-sdk"},"Python SDK")," (work in progress)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-python-sdk/"},"Casper-python-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:mark@casperlabs.io"},"Mark A. Greenslade"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Java SDK by SyntiFi"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/syntifi/casper-sdk"},"Casper-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:remo@syntifi.com"},"Remo Stieger"),"/",(0,o.kt)("a",{parentName:"td",href:"mailto:andre@syntifi.com"},"Andre Bertolace"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PHP SDK"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-php-sdk"},"Casper-php-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},"Roman Bylbas, Ihor Burlachenko, Michael Steuer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Erlang SDK"),(0,o.kt)("td",{parentName:"tr",align:null},"In Development"),(0,o.kt)("td",{parentName:"tr",align:null},"Robert Carbone (Telegram: ",(0,o.kt)("a",{parentName:"td",href:"https://t.me/ophiucan"},"@ophiucan"),")")))))}u.isMDXComponent=!0}}]);