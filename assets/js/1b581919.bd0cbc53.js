"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7832],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,v=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=(n(4996),["components"]),c={},l="Recovering from Validator Eviction",s={unversionedId:"operators/becoming-a-validator/recovering",id:"operators/becoming-a-validator/recovering",title:"Recovering from Validator Eviction",description:"This topic discusses the steps a validator needs to take if it is evicted from the validator set:",source:"@site/source/docs/casper/operators/becoming-a-validator/recovering.md",sourceDirName:"operators/becoming-a-validator",slug:"/operators/becoming-a-validator/recovering",permalink:"/operators/becoming-a-validator/recovering",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/becoming-a-validator/recovering.md",tags:[],version:"current",lastUpdatedAt:1678996335,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Bonding as a Validator",permalink:"/operators/becoming-a-validator/bonding"},next:{title:"Inactive vs. Faulty Validator Nodes",permalink:"/operators/becoming-a-validator/inactive-vs-faulty"}},u={},d=[{value:"Detecting the Eviction",id:"detecting-the-eviction",level:2},{value:"Detection using CSPR.live",id:"detection-using-csprlive",level:3},{value:"Detection using the Casper Client",id:"detection-using-the-casper-client",level:3},{value:"Correcting any Underlying Node Issues",id:"correcting-any-underlying-node-issues",level:2},{value:"Re-building the Contracts for Bonding",id:"re-building-the-contracts-for-bonding",level:2},{value:"Activating the Bid",id:"activating-the-bid",level:2},{value:"Checking the Bid Activation",id:"checking-the-bid-activation",level:2}],p={toc:d},h="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recovering-from-validator-eviction"},"Recovering from Validator Eviction"),(0,i.kt)("p",null,"This topic discusses the steps a validator needs to take if it is evicted from the validator set:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Detecting the eviction"),(0,i.kt)("li",{parentName:"ol"},"Correcting any underlying node issues"),(0,i.kt)("li",{parentName:"ol"},"Re-building the contracts for bonding"),(0,i.kt)("li",{parentName:"ol"},"Activating the bid"),(0,i.kt)("li",{parentName:"ol"},"Checking the bid")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/inactive-vs-faulty"},"Inactive vs. Faulty Validator Nodes")," topic explains why a node would be evicted."),(0,i.kt)("h2",{id:"detecting-the-eviction"},"Detecting the Eviction"),(0,i.kt)("p",null,"The validator selection occurs at the end of an Era. Due to the bonding delay, this determines the Validators for the Era after the Era is about to start. When a validating node does not participate in consensus for some time, it will be marked invalid and evicted at the end of the next Era."),(0,i.kt)("p",null,"For example, if we are in Era 100 and your node is invalid, your node will be marked for eviction to be removed at the start of Era 102. This is due to the bonding delay of 1 Era."),(0,i.kt)("h3",{id:"detection-using-csprlive"},"Detection using CSPR.live"),(0,i.kt)("p",null,"If you were a previous validator and still exist on the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/validators-auction"},"Validators Auction")," tab but not in ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/validators"},"Validators"),", you may have been evicted or outbid."),(0,i.kt)("h3",{id:"detection-using-the-casper-client"},"Detection using the Casper Client"),(0,i.kt)("p",null,"All auction information is returned with the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-client get-auction-info")," command. It would help if you filtered this down to your public key."),(0,i.kt)("p",null,"You can replace the <public_key> with your public key manually and run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info | jq '.result.auction_state.bids[] | select( .public_key == \"<public_key>\")'\n")),(0,i.kt)("p",null,"Or, if you set up the node as described in this documentation, you can run another command that will automatically put in your public key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info | jq --arg pk \"$(cat /etc/casper/validator_keys/public_key_hex)\" '.result.auction_state.bids[] | select( (.public_key | ascii_downcase) == ($pk | ascii_downcase) )'\n")),(0,i.kt)("p",null,"You know you were evicted if the ",(0,i.kt)("inlineCode",{parentName:"p"},"get-auction-info")," command returned your bid showing an ",(0,i.kt)("strong",{parentName:"p"},"inactive")," field. See the ",(0,i.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/inactive-vs-faulty"},"Inactive vs. Faulty Validator Nodes")," page for more information."),(0,i.kt)("p",null,"If you receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"parse error: Invalid numeric literal at"),", this usually means that your RPC port is not up yet. Get your node in sync, and the RPC will come up. This should be working before you try to recover. Try running the following command to check the status of your RPC port:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info\n")),(0,i.kt)("h2",{id:"correcting-any-underlying-node-issues"},"Correcting any Underlying Node Issues"),(0,i.kt)("p",null,"Before fixing the eviction, you need to correct the problem that caused your node to be evicted. Stage missed upgrades, correct any node issues, and get your node in sync."),(0,i.kt)("p",null,"To check if your node is in sync, compare the current block height at ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/")," with the height from your node with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:8888/status | jq .last_added_block_info\n")),(0,i.kt)("p",null,"If you cannot figure out the issue, ask for help in the node-tech-support channel on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/Q38s3Vh"},"Discord"),"."),(0,i.kt)("h2",{id:"re-building-the-contracts-for-bonding"},"Re-building the Contracts for Bonding"),(0,i.kt)("p",null,"Next, you need to re-build the smart contracts required for ",(0,i.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/bonding"},"bonding")," by following these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"casper-node")," directory"),(0,i.kt)("li",{parentName:"ol"},"Check out the current default release branch"),(0,i.kt)("li",{parentName:"ol"},"Re-build the contracts required for bonding")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd casper-node\ngit checkout <replace with current default branch>\nmake setup-rs\nmake build-client-contracts\n")),(0,i.kt)("h2",{id:"activating-the-bid"},"Activating the Bid"),(0,i.kt)("p",null,"Once your node is in sync and ready to validate again, you must activate your invalid bid with the ",(0,i.kt)("inlineCode",{parentName:"p"},"activate_bid.wasm")," contract. This should be part of the compiled contracts required to join the network in ",(0,i.kt)("a",{parentName:"p",href:"/operators/setup/joining#step-3-build-the-required-contracts-step-3-build-contracts"},"Step 3: Build the Required Contracts"),"."),(0,i.kt)("p",null,"Run the following transaction to re-activate your bid and rejoin the network. You will require a balance of at least 5 CSPR for this contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--chain-name casper \\\n--session-path "$HOME/casper-node/target/wasm32-unknown-unknown/release/activate_bid.wasm" \\\n--payment-amount 5000000000 \\\n--session-arg "validator_public_key:public_key=\'$(cat /etc/casper/validator_keys/public_key_hex)\'"\n')),(0,i.kt)("p",null,"Check that the deploy was successful with the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-client get-deploy <deploy_hash>")," or by searching for the deploy hash on ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/"),"."),(0,i.kt)("h2",{id:"checking-the-bid-activation"},"Checking the Bid Activation"),(0,i.kt)("p",null,"Once your deploy processes, you can ",(0,i.kt)("a",{parentName:"p",href:"/operators/becoming-a-validator/recovering#detecting-the-eviction-using-the-casper-client"},"check your bid")," again. You should now see ",(0,i.kt)("inlineCode",{parentName:"p"},'"inactive": false')," in the output."),(0,i.kt)("p",null,"If you wait until the next Era starts, you should also see your public key as a future validator on the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/validators"},"Validators")," tab."))}v.isMDXComponent=!0}}]);