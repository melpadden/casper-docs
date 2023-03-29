"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2691],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return h}});var d=t(7294);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,d)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function f(e,a){if(null==e)return{};var t,d,c=function(e,a){if(null==e)return{};var t,d,c={},n=Object.keys(e);for(d=0;d<n.length;d++)t=n[d],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)t=n[d],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=d.createContext({}),b=function(e){var a=d.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=b(e.components);return d.createElement(s.Provider,{value:a},e.children)},o="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return d.createElement(d.Fragment,{},a)}},p=d.forwardRef((function(e,a){var t=e.components,c=e.mdxType,n=e.originalType,s=e.parentName,l=f(e,["components","mdxType","originalType","parentName"]),o=b(t),p=c,h=o["".concat(s,".").concat(p)]||o[p]||i[p]||n;return t?d.createElement(h,r(r({ref:a},l),{},{components:t})):d.createElement(h,r({ref:a},l))}));function h(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var n=t.length,r=new Array(n);r[0]=p;var f={};for(var s in a)hasOwnProperty.call(a,s)&&(f[s]=a[s]);f.originalType=e,f[o]="string"==typeof e?e:c,r[1]=f;for(var b=2;b<n;b++)r[b]=t[b];return d.createElement.apply(null,r)}return d.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9827:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return b},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i}});var d=t(3117),c=t(102),n=(t(7294),t(3905)),r=t(4996),f=["components"],s={},b="Monitoring and Consuming Events",l={unversionedId:"developers/dapps/monitor-and-consume-events",id:"developers/dapps/monitor-and-consume-events",title:"Monitoring and Consuming Events",description:"The Casper Event Sidecar is an application running alongside the node process, allowing subscribers to monitor the event stream without querying the node, thus receiving faster responses and reducing the load on the node. Users needing access to the JSON-RPC will still need to query the node directly.",source:"@site/source/docs/casper/developers/dapps/monitor-and-consume-events.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/monitor-and-consume-events",permalink:"/developers/dapps/monitor-and-consume-events",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/monitor-and-consume-events.md",tags:[],version:"current",lastUpdatedAt:1680093531,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Using the Casper Signer in dApp Development",permalink:"/developers/dapps/signer-integration"},next:{title:"Overview",permalink:"/developers/cli/"}},o={},i=[{value:"The Event Stream",id:"the-event-stream",level:2},{value:"The REST Server",id:"the-rest-server",level:2},{value:"Latest Block",id:"latest-block",level:3},{value:"Block by Hash",id:"block-by-hash",level:3},{value:"Block by Height",id:"block-by-height",level:3},{value:"Deploy by Hash",id:"deploy-by-hash",level:3},{value:"Accepted Deploy by Hash",id:"accepted-deploy-by-hash",level:3},{value:"Expired Deploy by Hash",id:"expired-deploy-by-hash",level:3},{value:"Processed Deploy by Hash",id:"processed-deploy-by-hash",level:3},{value:"Faults by Public Key",id:"faults-by-public-key",level:3},{value:"Faults by Era",id:"faults-by-era",level:3},{value:"Finality Signatures by Block",id:"finality-signatures-by-block",level:3},{value:"Step by Era",id:"step-by-era",level:3},{value:"Missing Filter",id:"missing-filter",level:3},{value:"Invalid Filter",id:"invalid-filter",level:3}],p={toc:i},h="wrapper";function u(e){var a=e.components,t=(0,c.Z)(e,f);return(0,n.kt)(h,(0,d.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitoring-and-consuming-events"},"Monitoring and Consuming Events"),(0,n.kt)("p",null,"The Casper Event Sidecar is an application running alongside the node process, allowing subscribers to monitor the event stream without querying the node, thus receiving faster responses and reducing the load on the node. Users needing access to the JSON-RPC will still need to query the node directly."),(0,n.kt)("p",null,"An alternate name for this application is the SSE Sidecar because it uses the node's Event Stream API returning Server-Sent Events (SSEs) in JSON format. The SSE Sidecar uses the node's Event Stream API to achieve the following goals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build a middleware service that connects to the ",(0,n.kt)("a",{parentName:"li",href:"/operators/node-events"},"Node Event Stream"),", replicating the SSE interface and its filters (i.e., /main, /deploys, and /sigs with support for the use of the ?start_from= query to allow clients to get previously sent events from the Sidecar's buffer.)"),(0,n.kt)("li",{parentName:"ul"},"Provide a new ",(0,n.kt)("a",{parentName:"li",href:"#the-rest-server"},"RESTful endpoint")," that is discoverable on the network.")),(0,n.kt)("img",{class:"align-center",src:(0,r.Z)("/image/dApp/sidecar-diagram.png"),alt:"Sidecar components and architecture diagram",width:"800"}),(0,n.kt)("p",null,"Visit GitHub for the latest source code and information on system architecture."),(0,n.kt)("h2",{id:"the-event-stream"},"The Event Stream"),(0,n.kt)("p",null,"The Sidecar's event stream endpoint is a passthrough for all the events emitted by the node to which the Sidecar connects. The ",(0,n.kt)("a",{parentName:"p",href:"/operators/node-events"},"Node's Event Stream")," page explains the various event types emitted by the node and available through the Sidecar service. Also, the section on ",(0,n.kt)("a",{parentName:"p",href:"/operators/event-sidecar/#monitoring-the-event-stream"},"Monitoring the Event Stream")," gives a brief example on how to monitor Sidecar events."),(0,n.kt)("h2",{id:"the-rest-server"},"The REST Server"),(0,n.kt)("h3",{id:"latest-block"},"Latest Block"),(0,n.kt)("p",null,"Retrieve information about the last block added to the linear chain. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/block"),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/block\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Sample output")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"block_hash":"95b0d7b7e94eb79a7d2c79f66e2324474fc8f54536b9e6b447413fa6d00c2581","block":{"hash":"95b0d7b7e94eb79a7d2c79f66e2324474fc8f54536b9e6b447413fa6d00c2581","header":{"parent_hash":"48a99605ed4d1b27f9ddf8a1a0819c576bec57dd7a1b105247e48a5165b4194b","state_root_hash":"8d439b84b62e0a30f8e115047ce31c5ddeb30bd46eba3de9715412c2979be26e","body_hash":"b34c6c6ea69669597578a1912548ef823f627fe667ddcdb6bcd000acd27c7a2f","random_bit":true,"accumulated_seed":"058b14c76832b32e8cd00750e767c60f407fb13b3b0c1e63aea2d6526202924d","era_end":null,"timestamp":"2022-11-20T12:44:22.912Z","era_id":7173,"height":1277846,"protocol_version":"1.4.8"},"body":{"proposer":"0169e1552a97843ff2ef4318e8a028a9f4ed0c16b3d96f6a6eee21e6ca0d4022bc","deploy_hashes":[],"transfer_hashes":["d2193e27d6f269a6f4e0ede0cca805baa861d553df8c9f438cc7af56acf40c2b"]},"proofs":[]}}\n'))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"block-by-hash"},"Block by Hash"),(0,n.kt)("p",null,"Retrieve information about a block given its block hash. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/block/<block-hash>"),". Enter a valid block hash."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/block/96a989a7f4514909b442faba3acbf643378fb7f57f9c9e32013fdfad64e3c8a5\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Sample output")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"block_hash":"96a989a7f4514909b442faba3acbf643378fb7f57f9c9e32013fdfad64e3c8a5","block":{"hash":"96a989a7f4514909b442faba3acbf643378fb7f57f9c9e32013fdfad64e3c8a5","header":{"parent_hash":"8f29120995ae6942d1a48cc4ac8dc3be5de5886f1fb53140356c907f1a70d7ef","state_root_hash":"c8964dddfe3660f481f750c5acd776fe7e08c1e168a4184707d07da6bac5397c","body_hash":"31984faf50cfb2b96774e388a16407cbf362b66d22e1d55201cc0709fa3e1803","random_bit":false,"accumulated_seed":"5ce60583fc1a8b3da07900b7223636eadd97ea8eef6abec28cdbe4b3326c1d6c","era_end":null,"timestamp":"2022-11-20T18:36:05.504Z","era_id":7175,"height":1278485,"protocol_version":"1.4.8"},"body":{"proposer":"017de9688caedd0718baed968179ddbe0b0532a8ef0a9a1cb9dfabe9b0f6016fa8","deploy_hashes":[],"transfer_hashes":[]},"proofs":[]}}\n'))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"block-by-height"},"Block by Height"),(0,n.kt)("p",null,"Retrieve information about a block, given a specific block height. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/block/<block-height>"),". Enter a valid number representing the block height."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/block/1278485\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Sample output")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"block_hash":"96a989a7f4514909b442faba3acbf643378fb7f57f9c9e32013fdfad64e3c8a5","block":{"hash":"96a989a7f4514909b442faba3acbf643378fb7f57f9c9e32013fdfad64e3c8a5","header":{"parent_hash":"8f29120995ae6942d1a48cc4ac8dc3be5de5886f1fb53140356c907f1a70d7ef","state_root_hash":"c8964dddfe3660f481f750c5acd776fe7e08c1e168a4184707d07da6bac5397c","body_hash":"31984faf50cfb2b96774e388a16407cbf362b66d22e1d55201cc0709fa3e1803","random_bit":false,"accumulated_seed":"5ce60583fc1a8b3da07900b7223636eadd97ea8eef6abec28cdbe4b3326c1d6c","era_end":null,"timestamp":"2022-11-20T18:36:05.504Z","era_id":7175,"height":1278485,"protocol_version":"1.4.8"},"body":{"proposer":"017de9688caedd0718baed968179ddbe0b0532a8ef0a9a1cb9dfabe9b0f6016fa8","deploy_hashes":[],"transfer_hashes":[]},"proofs":[]}}\n'))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"deploy-by-hash"},"Deploy by Hash"),(0,n.kt)("p",null,"Retrieve information about a deploy sent to the network, given its deploy hash. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/deploy/<deploy-hash>"),". Enter a valid deploy hash."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/deploy/8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Sample output")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","deploy_accepted":{"hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","header":{"account":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","timestamp":"2022-11-20T22:33:59.786Z","ttl":"1h","gas_price":1,"body_hash":"c0c3dedaaac4c962a966376c124cf2225df9c8efce4c2af05c4181be661f41aa","dependencies":[],"chain_name":"casper"},"payment":{"ModuleBytes":{"module_bytes":"","args":[["amount",{"cl_type":"U512","bytes":"0410200395","parsed":"2500010000"}]]}},"session":{"StoredContractByHash":{"hash":"ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea","entry_point":"add_bid","args":[["public_key",{"cl_type":"PublicKey","bytes":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","parsed":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a"}],["amount",{"cl_type":"U512","bytes":"05008aa69516","parsed":"97000000000"}],["delegation_rate",{"cl_type":"U8","bytes":"00","parsed":0}]]}},"approvals":[{"signer":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","signature":"01a7ff7affdc13fac7436acf1b6d7c2282fff0f9185ebe1ce97f2e510b20d0375ad07eaca46f8d72f342e7b9e50a39c2eaf75da0c63365abfd526bbaffa4d33f02"}]},"deploy_processed":{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","account":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","timestamp":"2022-11-20T22:33:59.786Z","ttl":"1h","dependencies":[],"block_hash":"2caea6929fe4bd615f5c7451ecddc607a99d7512c85add4fe816bd4ee88fce63","execution_result":{"Success":{"effect":{"operations":[],"transforms":[{"key":"hash-d2469afeb99130f0be7c9ce230a84149e6d756e306ef8cf5b8a49d5182e41676","transform":"Identity"},{"key":"hash-d63c44078a1931b5dc4b80a7a0ec586164fd0470ce9f8b23f6d93b9e86c5944d","transform":"Identity"},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"05f0c773b316","parsed":"97499990000"}}},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":{"AddUInt512":"2500010000"}},{"key":"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea","transform":"Identity"},{"key":"hash-86f2d45f024d7bb7fb5266b2390d7c253b588a0a16ebd946a60cb4314600af74","transform":"Identity"},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"uref-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915-000","transform":{"WriteCLValue":{"cl_type":"Unit","bytes":"","parsed":null}}},{"key":"balance-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"00","parsed":"0"}}},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":"Identity"},{"key":"balance-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"04f03dcd1d","parsed":"499990000"}}},{"key":"balance-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915","transform":{"AddUInt512":"97000000000"}},{"key":"transfer-1e75292a29d210326d8845082b302037300eac92c7d2612790ca3ab1a62e570d","transform":{"WriteTransfer":{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","from":"account-hash-eb1dd0668899cf6b35cf99f5d4a7d3ea05acf352f75d14075982e0aebc099776","to":"account-hash-6174cf2e6f8fed1715c9a3bace9c50bfe572eecb763b0ed3f644532616452008","source":"uref-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd-007","target":"uref-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915-007","amount":"97000000000","gas":"0","id":null}}},{"key":"bid-eb1dd0668899cf6b35cf99f5d4a7d3ea05acf352f75d14075982e0aebc099776","transform":{"WriteBid":{"validator_public_key":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","bonding_purse":"uref-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915-007","staked_amount":"97000000000","delegation_rate":0,"vesting_schedule":null,"delegators":{},"inactive":false}}},{"key":"deploy-8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","transform":{"WriteDeployInfo":{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","transfers":["transfer-1e75292a29d210326d8845082b302037300eac92c7d2612790ca3ab1a62e570d"],"from":"account-hash-eb1dd0668899cf6b35cf99f5d4a7d3ea05acf352f75d14075982e0aebc099776","source":"uref-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd-007","gas":"2500000000"}}},{"key":"hash-d2469afeb99130f0be7c9ce230a84149e6d756e306ef8cf5b8a49d5182e41676","transform":"Identity"},{"key":"hash-d63c44078a1931b5dc4b80a7a0ec586164fd0470ce9f8b23f6d93b9e86c5944d","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":"Identity"},{"key":"hash-d2469afeb99130f0be7c9ce230a84149e6d756e306ef8cf5b8a49d5182e41676","transform":"Identity"},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":"Identity"},{"key":"balance-8c2ffb7e82c5a323a4e50f6eea9a080feb89c71bb2db001bde7449e13328c0dc","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"00","parsed":"0"}}},{"key":"balance-8c2ffb7e82c5a323a4e50f6eea9a080feb89c71bb2db001bde7449e13328c0dc","transform":{"AddUInt512":"2500010000"}}]},"transfers":["transfer-1e75292a29d210326d8845082b302037300eac92c7d2612790ca3ab1a62e570d"],"cost":"2500000000"}}},"deploy_expired":false}\n'))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"accepted-deploy-by-hash"},"Accepted Deploy by Hash"),(0,n.kt)("p",null,"Retrieve information about an accepted deploy, given its deploy hash. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/deploy/accepted/<deploy-hash>"),". Enter a valid deploy hash."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/deploy/accepted/8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Sample output")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","header":{"account":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","timestamp":"2022-11-20T22:33:59.786Z","ttl":"1h","gas_price":1,"body_hash":"c0c3dedaaac4c962a966376c124cf2225df9c8efce4c2af05c4181be661f41aa","dependencies":[],"chain_name":"casper"},"payment":{"ModuleBytes":{"module_bytes":"","args":[["amount",{"cl_type":"U512","bytes":"0410200395","parsed":"2500010000"}]]}},"session":{"StoredContractByHash":{"hash":"ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea","entry_point":"add_bid","args":[["public_key",{"cl_type":"PublicKey","bytes":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","parsed":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a"}],["amount",{"cl_type":"U512","bytes":"05008aa69516","parsed":"97000000000"}],["delegation_rate",{"cl_type":"U8","bytes":"00","parsed":0}]]}},"approvals":[{"signer":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","signature":"01a7ff7affdc13fac7436acf1b6d7c2282fff0f9185ebe1ce97f2e510b20d0375ad07eaca46f8d72f342e7b9e50a39c2eaf75da0c63365abfd526bbaffa4d33f02"}]}\n'))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"expired-deploy-by-hash"},"Expired Deploy by Hash"),(0,n.kt)("p",null,"Retrieve information about a deploy that expired, given its deploy hash. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/deploy/expired/<deploy-hash>"),". Enter a valid deploy hash."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/deploy/expired/e03544d37354c5f9b2c4956826d32f8e44198f94fb6752e87f422fe3071ab58a\n")),(0,n.kt)("h3",{id:"processed-deploy-by-hash"},"Processed Deploy by Hash"),(0,n.kt)("p",null,"Retrieve information about a deploy that was processed, given its deploy hash. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/deploy/processed/<deploy-hash>"),". Enter a valid deploy hash."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/deploy/processed/8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Sample output")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","account":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","timestamp":"2022-11-20T22:33:59.786Z","ttl":"1h","dependencies":[],"block_hash":"2caea6929fe4bd615f5c7451ecddc607a99d7512c85add4fe816bd4ee88fce63","execution_result":{"Success":{"effect":{"operations":[],"transforms":[{"key":"hash-d2469afeb99130f0be7c9ce230a84149e6d756e306ef8cf5b8a49d5182e41676","transform":"Identity"},{"key":"hash-d63c44078a1931b5dc4b80a7a0ec586164fd0470ce9f8b23f6d93b9e86c5944d","transform":"Identity"},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"05f0c773b316","parsed":"97499990000"}}},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":{"AddUInt512":"2500010000"}},{"key":"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea","transform":"Identity"},{"key":"hash-86f2d45f024d7bb7fb5266b2390d7c253b588a0a16ebd946a60cb4314600af74","transform":"Identity"},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"uref-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915-000","transform":{"WriteCLValue":{"cl_type":"Unit","bytes":"","parsed":null}}},{"key":"balance-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"00","parsed":"0"}}},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":"Identity"},{"key":"balance-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915","transform":"Identity"},{"key":"balance-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"04f03dcd1d","parsed":"499990000"}}},{"key":"balance-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915","transform":{"AddUInt512":"97000000000"}},{"key":"transfer-1e75292a29d210326d8845082b302037300eac92c7d2612790ca3ab1a62e570d","transform":{"WriteTransfer":{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","from":"account-hash-eb1dd0668899cf6b35cf99f5d4a7d3ea05acf352f75d14075982e0aebc099776","to":"account-hash-6174cf2e6f8fed1715c9a3bace9c50bfe572eecb763b0ed3f644532616452008","source":"uref-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd-007","target":"uref-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915-007","amount":"97000000000","gas":"0","id":null}}},{"key":"bid-eb1dd0668899cf6b35cf99f5d4a7d3ea05acf352f75d14075982e0aebc099776","transform":{"WriteBid":{"validator_public_key":"01786c83c59eba29e1f4ae4ee601040970665a816ac5bf856108222b72723f782a","bonding_purse":"uref-3d52e976454512999aee042c3c298474a9d3fa98db80879052465c8a4c57c915-007","staked_amount":"97000000000","delegation_rate":0,"vesting_schedule":null,"delegators":{},"inactive":false}}},{"key":"deploy-8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","transform":{"WriteDeployInfo":{"deploy_hash":"8204af872d7d19ef8da947bce67c7a55449bc4e2aa12d2756e9ec7472b4854f7","transfers":["transfer-1e75292a29d210326d8845082b302037300eac92c7d2612790ca3ab1a62e570d"],"from":"account-hash-eb1dd0668899cf6b35cf99f5d4a7d3ea05acf352f75d14075982e0aebc099776","source":"uref-c182f2fafc6eb59306f971a3d3ad06e4ffa09364ca9de2fc48d123e40da243cd-007","gas":"2500000000"}}},{"key":"hash-d2469afeb99130f0be7c9ce230a84149e6d756e306ef8cf5b8a49d5182e41676","transform":"Identity"},{"key":"hash-d63c44078a1931b5dc4b80a7a0ec586164fd0470ce9f8b23f6d93b9e86c5944d","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":"Identity"},{"key":"hash-d2469afeb99130f0be7c9ce230a84149e6d756e306ef8cf5b8a49d5182e41676","transform":"Identity"},{"key":"hash-7cc1b1db4e08bbfe7bacf8e1ad828a5d9bcccbb33e55d322808c3a88da53213a","transform":"Identity"},{"key":"hash-4475016098705466254edd18d267a9dad43e341d4dafadb507d0fe3cf2d4a74b","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":"Identity"},{"key":"balance-8c2ffb7e82c5a323a4e50f6eea9a080feb89c71bb2db001bde7449e13328c0dc","transform":"Identity"},{"key":"balance-fe327f9815a1d016e1143db85e25a86341883949fd75ac1c1e7408a26c5b62ef","transform":{"WriteCLValue":{"cl_type":"U512","bytes":"00","parsed":"0"}}},{"key":"balance-8c2ffb7e82c5a323a4e50f6eea9a080feb89c71bb2db001bde7449e13328c0dc","transform":{"AddUInt512":"2500010000"}}]},"transfers":["transfer-1e75292a29d210326d8845082b302037300eac92c7d2612790ca3ab1a62e570d"],"cost":"2500000000"}}}\n'))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"faults-by-public-key"},"Faults by Public Key"),(0,n.kt)("p",null,"Retrieve the faults associated with a validator's public key. The path URL is ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/faults/<public-key>"),". Enter a valid hexadecimal representation of a validator's public key."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/faults/01a601840126a0363a6048bfcbb0492ab5a313a1a19dc4c695650d8f3b51302703\n")),(0,n.kt)("h3",{id:"faults-by-era"},"Faults by Era"),(0,n.kt)("p",null,"Return the faults associated with an era, given a valid era identifier. The path URL is: ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/faults/<era-ID>"),". Enter an era identifier."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/faults/2304\n")),(0,n.kt)("h3",{id:"finality-signatures-by-block"},"Finality Signatures by Block"),(0,n.kt)("p",null,"Retrieve the finality signatures in a block, given its block hash. The path URL is: ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/signatures/<block-hash>"),". Enter a valid block hash."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:18888/signatures/85aa2a939bc3a4afc6d953c965bab333bb5e53185b96bb07b52c295164046da2\n")),(0,n.kt)("h3",{id:"step-by-era"},"Step by Era"),(0,n.kt)("p",null,"Retrieve the step event emitted at the end of an era, given a valid era identifier. The path URL is: ",(0,n.kt)("inlineCode",{parentName:"p"},"<HOST:PORT>/step/<era-ID>"),". Enter a valid era identifier."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s\xa0http://127.0.0.1:18888/step/7268\n")),(0,n.kt)("h3",{id:"missing-filter"},"Missing Filter"),(0,n.kt)("p",null,"If no filter URL was specified after the root address (HOST:PORT), an error message will be returned."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:18888\n{"code":400,"message":"Invalid request path provided"}\n')),(0,n.kt)("h3",{id:"invalid-filter"},"Invalid Filter"),(0,n.kt)("p",null,"If an invalid filter was specified, an error message will be returned."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:18888/other\n{"code":400,"message":"Invalid request path provided"}\n')))}u.isMDXComponent=!0}}]);