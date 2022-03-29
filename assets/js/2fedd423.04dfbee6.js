"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3876],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=l(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8313:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],p={title:"Introduction",slug:"/sdk"},s="SDK Client Libraries",l={unversionedId:"dapp-dev-guide/sdk/index",id:"dapp-dev-guide/sdk/index",title:"Introduction",description:"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions.",source:"@site/source/docs/casper/dapp-dev-guide/sdk/index.md",sourceDirName:"dapp-dev-guide/sdk",slug:"/sdk",permalink:"/docs/sdk",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/sdk/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/sdk"},sidebar:"dapp-dev-guide",previous:{title:"Understanding Hash Types",permalink:"/docs/dapp-dev-guide/understanding-hash-types"},next:{title:"TypeScript/JavaScript SDK",permalink:"/docs/dapp-dev-guide/sdk/script-sdk"}},d={},c=[],u={toc:c};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-client-libraries"},"SDK Client Libraries"),(0,o.kt)("p",null,"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions."),(0,o.kt)("p",null,"The following table provides links to the SDK documentation, in addition to the corresponding GitHub repositories and pertinent contact information."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SDK Documentation"),(0,o.kt)("th",{parentName:"tr",align:null},"GitHub Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Maintainer"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/script-sdk"},"TypeScript")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"Casper-js-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:jan@hfmn.pl"},"Jan Hoffman"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Java SDK"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-java-sdk/"},"Casper-java-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:carl.norburn@gmail.com"},"Carl Norburn"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/csharp-sdk"},"C# SDK")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-net-sdk"},"Casper-net-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},"David Hernando, Ihor Burlachenko, Muhammet Kara, Michael Steuer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/go-sdk"},"Golang SDK")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-golang-sdk/"},"Casper-golang-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:yar.panasenko@gmail.com"},"Yaroslav Panasenko"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/dapp-dev-guide/sdk/python-sdk"},"Python SDK")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-python-sdk/"},"Casper-python-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:mark@casper.network"},"Mark A. Greenslade"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Java SDK by SyntiFi"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/syntifi/casper-sdk"},"Casper-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:remo@syntifi.com"},"Remo Stieger"),"/",(0,o.kt)("a",{parentName:"td",href:"mailto:andre@syntifi.com"},"Andre Bertolace"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PHP SDK"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-php-sdk"},"Casper-php-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},"Roman Bylbas, Ihor Burlachenko, Michael Steuer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Erlang SDK"),(0,o.kt)("td",{parentName:"tr",align:null},"In Development"),(0,o.kt)("td",{parentName:"tr",align:null},"Robert Carbone (Telegram: ",(0,o.kt)("a",{parentName:"td",href:"https://t.me/ophiucan"},"@ophiucan"),")")))))}m.isMDXComponent=!0}}]);