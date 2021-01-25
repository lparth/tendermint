(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{759:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("This section will focus on how to operate full nodes, validators and light clients.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#node-types"}},[e._v("Node Types")])]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/configuration.html"}},[e._v("Configuration")]),e._v("\n- "),o("RouterLink",{attrs:{to:"/nodes/state_sync.html"}},[e._v("Configure State sync")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/validators.html"}},[e._v("Validator Guides")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/validators.html#validator_keys"}},[e._v("How to secure your keys")])],1)])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/light-client.html"}},[e._v("Light Client guides")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/light-client.html#"}},[e._v("How to sync a light client")])],1)])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/metrics.html"}},[e._v("Metrics")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/logging.html"}},[e._v("Logging")])],1)]),e._v(" "),o("h2",{attrs:{id:"node-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-types"}},[e._v("#")]),e._v(" Node Types")]),e._v(" "),o("p",[e._v("We will cover the various types of node types within Tendermint.")]),e._v(" "),o("h3",{attrs:{id:"full-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#full-node"}},[e._v("#")]),e._v(" Full Node")]),e._v(" "),o("p",[e._v("A full node is a node that participates in the network but will not help secure it. Full nodes can be used to store the entire state of a blockchain. For Tendermint there are two forms of state. First, blockchain state, this represents the blocks of a blockchain.  Secondly, there is Application state, this represents the state that transactions modify. The knowledge of how a transaction can modify state is not held by Tendermint but rather the application on the other side of the ABCI boundary.")]),e._v(" "),o("blockquote",[o("p",[e._v("Note: If you have not read about the seperation of consensus and application please take a few minutes to read up on it as it will provide a better understanding to many of the terms we use throughout the documentation. You can find more information on the ABCI "),o("RouterLink",{attrs:{to:"/app-dev/app-architecture.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("As a full node operator you are providing services to the network that helps it come to consensus and others catch up to the current block. Even though a full node only helps the network come to consensus it is important to secure your node from adversarial actors. We recommend using a firewall and a proxy if possible. Running a full node can be easy, but it varies from network to network. Verify your applications documentation prior running a node.")]),e._v(" "),o("h3",{attrs:{id:"seed-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#seed-nodes"}},[e._v("#")]),e._v(" Seed Nodes")]),e._v(" "),o("p",[e._v("A seed node provides a node with a list of peers which a node can connect to. When starting a node you must provide at least one type of node to be able to connect to the desired network. By providing a seed node you will be able to populate your address quickly. A seed node will not be kept as a peer but will disconnect from your node after it has provided a list of peers.")]),e._v(" "),o("h3",{attrs:{id:"sentry-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sentry-node"}},[e._v("#")]),e._v(" Sentry Node")]),e._v(" "),o("p",[e._v("A sentry node is similar to a full node in almost every way. The difference is a sentry node will have one or more private peers. These peers may be validators or other full nodes in the network. A sentry node is meant to provide a layer of security for your validator, similar to how a firewall works with a computer.")]),e._v(" "),o("h3",{attrs:{id:"validators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),o("p",[e._v("Validators are nodes that participate in the security of a network. Validators have an associated power in Tendermint, this power can represent stake in a "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Proof_of_stake",target:"_blank",rel:"noopener noreferrer"}},[e._v("proof of stake"),o("OutboundLink")],1),e._v(" system, reputation in "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Proof_of_authority",target:"_blank",rel:"noopener noreferrer"}},[e._v("proof of authority"),o("OutboundLink")],1),e._v(" or any sort of measurable unit. Running a secure and consistently online validator is crucial to a networks health. A validator must be secure and fault tolerant, it is recommended to run your validator with 2 or more sentry nodes.")]),e._v(" "),o("p",[e._v("As a validator there is the potential to have your weight reduced, this is defined by the application. Tendermint is notified by the application if a validator should have there weight increased or reduced. Application have different types of malicious behavior which lead to slashing of the validators power. Please check the documentation of the application you will be running in order to find more information.")])])}),[],!1,null,null,null);t.default=r.exports}}]);