---
title: Introduction
slug: /design
---

# Design

-   [Network Communication](./p2p.md)
    -   [Identity](./p2p.md#identity)
    -   [Inter-node connections](./p2p.md#inter-node-connections)
    -   [Network](./p2p.md#network)
    -   [Gossiping](./p2p.md#communications-gossiping)
    -   [Requesting missing data](./p2p.md#requesting-missing-data)
    -   [Node Discovery](./p2p.md#node-discovery)
-   [Global State](./global-state.md)
    -   [Introduction](./global-state.md#global-state-intro)
    -   [Merkle trie structure](./global-state.md#global-state-trie)
-   [Execution Semantics](./execution-semantics.md)
    -   [Introduction](./execution-semantics.md#execution-semantics-intro)
    -   [Measuring computational work](./execution-semantics.md#execution-semantics-gas)
    -   [Deploys](./execution-semantics.md#execution-semantics-deploys)
    -   [Deploys as functions on the global state](./execution-semantics.md#execution-semantics-deploys-as-functions)
    -   [The Casper Network runtime](./execution-semantics.md#execution-semantics-runtime)
-   [Accounts](./accounts.md)
    -   [Introduction](./accounts.md#accounts-intro)
    -   [The Account data structure](./accounts.md#accounts-data-structure)
    -   [Permissions model](./accounts.md#accounts-permissions)
    -   [Creating an account](./accounts.md#accounts-creating)
    -   [The account context](./accounts.md#accounts-context)
    -   [Functions for interacting with an account](./accounts.md#accounts-api-functions)
-   [Block Structure](./block-structure.md)
    -   [Introduction](./block-structure.md#block-structure-intro)
    -   [Data fields](./block-structure.md#block-structure-data)
-   [Unforgeable Reference (URef)](./uref.md)
    -   [Permissions for URefs](./uref.md#uref-permissions)
-   [Serialization Standard](./serialization-standard.md)
    -   [Block](./serialization-standard.md#serialization-standard-block)
    -   [Deploy](./serialization-standard.md#serialization-standard-deploy)
    -   [Values](./serialization-standard.md#serialization-standard-values)
    -   [Keys](./serialization-standard.md#serialization-standard-state-keys)
    -   [Permissions](./serialization-standard.md#serialization-standard-permissions)
-   [Tokens](./tokens.md)
    -   [Introduction](./tokens.md#tokens-intro)
    -   [Token Generation and Distribution](./tokens.md#token-generation-and-distribution)
    -   [Divisibility of Tokens](./tokens.md#tokens-divisibility)
    -   [Mints and Purses](./tokens.md#tokens-mints-and-purses)
    -   [The mint Contract Interface](./tokens.md#tokens-mint-interface)
    -   [Using purse URefs](./tokens.md#tokens-using-purses)
    -   [Purses and Accounts](./tokens.md#tokens-purses-and-accounts)
-   [Appendix](./appendix.md)
    -   [A - Casper Rust Library](./appendix.md#appendix-a)
    -   [B - Serialization Format](./appendix.md#appendix-b)