"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9415],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],l={title:"Installation"},i="Installing a Node",u={unversionedId:"operators/setup/install-node",id:"operators/setup/install-node",title:"Installation",description:"Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet.",source:"@site/source/docs/casper/operators/setup/install-node.md",sourceDirName:"operators/setup",slug:"/operators/setup/install-node",permalink:"/operators/setup/install-node",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup/install-node.md",tags:[],version:"current",lastUpdatedAt:1695732510,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{title:"Installation"},sidebar:"operators",previous:{title:"Endpoints",permalink:"/operators/setup/node-endpoints"},next:{title:"Fast Sync",permalink:"/operators/setup/fast-sync"}},p={},c=[{value:"Network Requirements",id:"network-requirements",level:2},{value:"Operating System Requirements",id:"operating-system-requirements",level:2},{value:"Using Ubuntu 22.04",id:"using-ubuntu-2204",level:3},{value:"Required Number of Open Files",id:"required-number-of-open-files",level:2},{value:"Required Clean Up",id:"required-clean-up",level:2},{value:"Required Packages",id:"required-packages",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Enable Bash Auto-Completion for <code>casper-client</code> (Optional)",id:"enable-bash-auto-completion-for-casper-client-optional",level:2},{value:"Installing All Protocols",id:"installing-all-protocols",level:2},{value:"Validator Keys",id:"validator-keys",level:2},{value:"Getting a Trusted Hash",id:"getting-a-trusted-hash",level:2},{value:"Node Address",id:"node-address",level:3},{value:"Protocol Version",id:"protocol-version",level:3},{value:"Load <code>trusted_hash</code> in Config.toml of the Protocol Version",id:"load-trusted_hash-in-configtoml-of-the-protocol-version",level:3},{value:"Syncing to Genesis",id:"syncing-to-genesis",level:2},{value:"Starting the Node",id:"starting-the-node",level:2},{value:"Monitoring the Synchronization Process",id:"monitoring-the-synchronization-process",level:3},{value:"Monitoring the Running Node",id:"monitoring-the-running-node",level:3},{value:"A Note on Speculative Execution",id:"a-note-on-speculative-execution",level:2}],d={toc:c},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-a-node"},"Installing a Node"),(0,r.kt)("p",null,"Ensure the requirements listed in the following sections are met before you start setting up the node on the network, either on Mainnet or Testnet."),(0,r.kt)("h2",{id:"network-requirements"},"Network Requirements"),(0,r.kt)("p",null,"The following ports are used by the node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"35000 (required to be externally visible)"),(0,r.kt)("li",{parentName:"ul"},"7777 RPC endpoint for interaction with JSON-RPC API"),(0,r.kt)("li",{parentName:"ul"},"8888 REST endpoint for status and metrics (having this accessible allows your node to be part of network status)"),(0,r.kt)("li",{parentName:"ul"},"9999 SSE endpoint for event stream")),(0,r.kt)("p",null,"Of these ",(0,r.kt)("inlineCode",{parentName:"p"},"35000")," is the only port required to be open for your node to function, however, opening ",(0,r.kt)("inlineCode",{parentName:"p"},"8888")," will allow others to know general network health. For more details, see the additional information on ",(0,r.kt)("a",{parentName:"p",href:"/operators/setup/node-endpoints"},"Node Endpoints"),"."),(0,r.kt)("h2",{id:"operating-system-requirements"},"Operating System Requirements"),(0,r.kt)("p",null,"The recommended OS version is Ubuntu 20.04."),(0,r.kt)("h3",{id:"using-ubuntu-2204"},"Using Ubuntu 22.04"),(0,r.kt)("p",null,"Installing using Ubuntu 22.04 follows the same instructions as 20.04 with one exception:"),(0,r.kt)("p",null,"If you try to install packages, you will receive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"casper-client : Depends: libssl1.1 (>= 1.1.0) but it is not installable\n")),(0,r.kt)("p",null,"This is due to the default openssl moving to 3.x with Ubuntu 22.04. We need to install OpenSSL 1.x for prior versions of Ubuntu to use our binaries. We can use 20.04 libraries for this by downloading and install them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -JLO http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.19_amd64.deb\nsudo apt install ./libssl1.1_1.1.1f-1ubuntu2.19_amd64.deb\n")),(0,r.kt)("h2",{id:"required-number-of-open-files"},"Required Number of Open Files"),(0,r.kt)("p",null,"Before beginning, ",(0,r.kt)("a",{parentName:"p",href:"/operators/setup/open-files"},"update the maximum open files limit")," for your system. Specifically, update the node's ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/security/limits.conf")," file as described ",(0,r.kt)("a",{parentName:"p",href:"/operators/setup/open-files#updating-limits-conf"},"here"),", to ensure proper node operation."),(0,r.kt)("h2",{id:"required-clean-up"},"Required Clean Up"),(0,r.kt)("p",null,"If you were running a previous node on this box, this will clean up state. If packages are not installed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"apt remove")," may give errors, but this is not a problem."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop casper-node-launcher.service\nsudo apt remove -y casper-client\nsudo apt remove -y casper-node\nsudo apt remove -y casper-node-launcher\nsudo rm /etc/casper/casper-node-launcher-state.toml\nsudo rm -rf /etc/casper/1_*\nsudo rm -rf /var/lib/casper/*\n")),(0,r.kt)("h2",{id:"required-packages"},"Required Packages"),(0,r.kt)("p",null,"The following commands will set up the Casper Labs repository for packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [arch=amd64] https://repo.casperlabs.io/releases focal main" | sudo tee -a /etc/apt/sources.list.d/casper.list\ncurl -O https://repo.casperlabs.io/casper-repo-pubkey.asc\nsudo apt-key add casper-repo-pubkey.asc\nsudo apt update\n')),(0,r.kt)("h2",{id:"required-tools"},"Required Tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y casper-client casper-node-launcher jq\n")),(0,r.kt)("h2",{id:"enable-bash-auto-completion-for-casper-client-optional"},"Enable Bash Auto-Completion for ",(0,r.kt)("inlineCode",{parentName:"h2"},"casper-client")," (Optional)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo casper-client generate-completion\n")),(0,r.kt)("p",null,"It defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," but can be changed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--shell")," argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--shell <STRING>    The type of shell to generate the completion script for [default: bash]  [possible values:\n                            zsh, bash, fish, powershell, elvish]\n\nsudo casper-client generate-completion --shell powershell\n")),(0,r.kt)("p",null,"You need to source the new auto completion script or log out and log in again to activate it for the current shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source /usr/share/bash-completion/completions/casper-client\n")),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," and press the ",(0,r.kt)("inlineCode",{parentName:"p"},"tab")," key to get auto completion for your commands."),(0,r.kt)("h2",{id:"installing-all-protocols"},"Installing All Protocols"),(0,r.kt)("p",null,"On ",(0,r.kt)("strong",{parentName:"p"},"Mainnet"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf\n")),(0,r.kt)("p",null,"On ",(0,r.kt)("strong",{parentName:"p"},"Testnet"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper-test.conf\n")),(0,r.kt)("h2",{id:"validator-keys"},"Validator Keys"),(0,r.kt)("p",null,"If you do not have keys yet, you can create them using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client keygen /etc/casper/validator_keys\n")),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#create-fund-keys"},"Node Setup")," page."),(0,r.kt)("h2",{id:"getting-a-trusted-hash"},"Getting a Trusted Hash"),(0,r.kt)("p",null,"In the past, we have used a lower ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted_hash"),". Connecting at the tip, we now use as high of a ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted_hash")," as possible. Find out more about ",(0,r.kt)("a",{parentName:"p",href:"/operators/setup/fast-sync"},"Fast Sync"),"."),(0,r.kt)("h3",{id:"node-address"},"Node Address"),(0,r.kt)("p",null,"NODE_ADDR can be set to an IP of a trusted node, or to Casper Labs' public nodes"),(0,r.kt)("p",null,"You can find active peers at ",(0,r.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"https://cspr.live/tools/peers")," or use the following Casper Labs public nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Testnet - NODE_ADDR=",(0,r.kt)("a",{parentName:"p",href:"https://rpc.testnet.casperlabs.io"},"https://rpc.testnet.casperlabs.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mainnet - NODE_ADDR=",(0,r.kt)("a",{parentName:"p",href:"https://rpc.mainnet.casperlabs.io"},"https://rpc.mainnet.casperlabs.io")))),(0,r.kt)("h3",{id:"protocol-version"},"Protocol Version"),(0,r.kt)("p",null,"Protocol version should be set to the largest available protocol version you see in ",(0,r.kt)("inlineCode",{parentName:"p"},"ls /etc/casper"),". As of writing this, it was 1_5_2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PROTOCOL=1_5_2\n")),(0,r.kt)("h3",{id:"load-trusted_hash-in-configtoml-of-the-protocol-version"},"Load ",(0,r.kt)("inlineCode",{parentName:"h3"},"trusted_hash")," in Config.toml of the Protocol Version"),(0,r.kt)("p",null,"The following command uses the previously established NODE_ADDR and PROTOCOL to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"trusted_hash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ADDR=https://rpc.mainnet.casperlabs.io\nPROTOCOL=1_5_2\nsudo sed -i \"/trusted_hash =/c\\trusted_hash = '$(casper-client get-block --node-address $NODE_ADDR | jq -r .result.block.hash | tr -d '\\n')'\" /etc/casper/$PROTOCOL/config.toml\n")),(0,r.kt)("h2",{id:"syncing-to-genesis"},"Syncing to Genesis"),(0,r.kt)("p",null,"In the latest protocol version's ",(0,r.kt)("em",{parentName:"p"},"Config.toml"),", you will find the option ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_to_genesis"),". By default, this value will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"If you are planning to run a validator node, it is better to not sync your node to genesis. This will increase node performance. In this case, the option should be changed to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sync_to_genesis = false\n")),(0,r.kt)("p",null,"If you are using the node for historical data and want to query back to genesis, you can leave the default value in place."),(0,r.kt)("h2",{id:"starting-the-node"},"Starting the Node"),(0,r.kt)("p",null,"Start the node using the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/casper/node_util.py rotate_logs\nsudo /etc/casper/node_util.py start\n")),(0,r.kt)("h3",{id:"monitoring-the-synchronization-process"},"Monitoring the Synchronization Process"),(0,r.kt)("p",null,"The following command will display the node synchronization details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/casper/node_util.py watch\n")),(0,r.kt)("p",null,"When you first run the watch command, you may see the message ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC: Not Ready"),". Once the node is synchronized, the status will change to ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC: Ready")," and a similar output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Last Block: 630151 (Era: 4153)\nPeer Count: 297\nUptime: 4days 6h 40m 18s 553ms\nBuild: 1.4.5-a7f6a648d-casper-mainnet\nKey: 0147b4cae09d64ab6acd02dd0868722be9a9bcc355c2fdff7c2c244cbfcd30f158\nNext Upgrade: None\n\nRPC: Ready\n\n\u25cf casper-node-launcher.service - Casper Node Launcher\n   Loaded: loaded (/lib/systemd/system/casper-node-launcher.service; enabled; vendor preset: enabled)\n   Active: active (running) since Wed 2022-03-16 21:08:50 UTC; 4 days ago\n     Docs: https://docs.casper.network\n Main PID: 2934 (casper-node-lau)\n    Tasks: 12 (limit: 4915)\n   CGroup: /system.slice/casper-node-launcher.service\n           \u251c\u2500 2934 /usr/bin/casper-node-launcher\n           \u2514\u250016842 /var/lib/casper/bin/1_4_5/casper-node validator /etc/casper/1_4_5/config.toml\n")),(0,r.kt)("p",null,"The reactor state will be in CatchUp mode until it acquires the full tip state, at which point it will shift to KeepUp mode. If you left ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_to_genesis")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it will begin syncing back history at this time."),(0,r.kt)("p",null,"Seeing available block range - Low: 0 High: 0 is normal until the fill tip is downloaded. You can see download progress with a look at metrics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -s 127.0.0.1:8888/metrics | grep trie_or_chunk\n# HELP trie_or_chunk_fetch_total number of trie_or_chunk all fetch requests made\n# TYPE trie_or_chunk_fetch_total counter\ntrie_or_chunk_fetch_total 102647\n# HELP trie_or_chunk_found_in_storage number of fetch requests that found trie_or_chunk in local storage\n# TYPE trie_or_chunk_found_in_storage counter\ntrie_or_chunk_found_in_storage 0\n# HELP trie_or_chunk_found_on_peer number of fetch requests that fetched trie_or_chunk from peer\n# TYPE trie_or_chunk_found_on_peer counter\ntrie_or_chunk_found_on_peer 102263\n# HELP trie_or_chunk_timeouts number of trie_or_chunk fetch requests that timed out\n# TYPE trie_or_chunk_timeouts counter\ntrie_or_chunk_timeouts 0\n")),(0,r.kt)("p",null,"If the node is not showing active (running) status, it is either stopped or in the process of restarting."),(0,r.kt)("h3",{id:"monitoring-the-running-node"},"Monitoring the Running Node"),(0,r.kt)("p",null,"The community has created a few tools to monitor your node once it is running, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status.py: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/RapidMark/casper-tools"},"https://github.com/RapidMark/casper-tools")),(0,r.kt)("li",{parentName:"ul"},"Grafana: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/matsuro-hadouken/casper-tools"},"https://github.com/matsuro-hadouken/casper-tools"))),(0,r.kt)("h2",{id:"a-note-on-speculative-execution"},"A Note on Speculative Execution"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"speculative_exec_server")," defaults to off and can be enabled in your ",(0,r.kt)("em",{parentName:"p"},"Config.toml")," file."),(0,r.kt)("p",null,"While this is a useful tool, understand that it is also an attack vector for a node. The intent is for someone to run on their node as a tool. You ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"should not"))," use this if you are an active validator, as requests into this port can block execution_engine processing for legitimate network traffic."))}m.isMDXComponent=!0}}]);