# Hemi Viem

![NPM Version](https://img.shields.io/npm/v/hemi-viem)

[Viem](https://viem.sh/) extension for the [Hemi Network](https://hemi.xyz/).
It includes:

- Chain definitions!
- [Bitcoin finality](https://docs.hemi.xyz/foundational-topics/pop-consensus-and-bitcoin-finality) helper!
- [Bitcoin Kit](https://github.com/hemilabs/research/blob/main/research/Bitcoin-kit.md) wrappers!

## Installation

```sh
npm install viem hemi-viem
```

### Example

```js
// example.js

import { createPublicClient, http } from "viem";

import {
  hemiPublicBitcoinKitActions,
  hemiPublicOpNodeActions,
  hemiSepolia,
} from "hemi-viem";

const parameters = { chain: hemiSepolia, transport: http() };
const client = createPublicClient(parameters)
  .extend(hemiPublicOpNodeActions())
  .extend(hemiPublicBitcoinKitActions());

const blockNumber = await client.getBlockNumber();
const block = await client.getBlock({ blockNumber: blockNumber - 100n });

const btcFinality = await client.getBtcFinalityByBlockHash(block);
console.log(btcFinality);

const btcHeader = await client.getLastHeader();
console.log(btcHeader);
```

Output:

```console
$ node example.js
{
  l2_keystone: {
    version: 1,
    l1_block_number: 5868140,
    l2_block_number: 596350,
    parent_ep_hash: '3fe407f9eec38ce9fa0f6d159adca4ac8739013d380e1d7215b721c7e345ae88',
    prev_ep_keystone_hash: '6b65018eb33048494f2e21ffdd081ae376b125f12e62ab88e77b1461503540fb',
    state_root: 'b3b9f5b810038466290a7c4bff08a260a472d67fed230a27d89de1322490fb51',
    ep_hash: 'd186c2da80f2c79490f644e4af714ee1f5790a4e806028cac0e64a2010a41974'
  },
  btc_pub_height: 2814228,
  btc_pub_header_hash: '1a262fa78618f4b7fa8d5d37eed32f3a0bb67ab09d808e035500000000000000',
  btc_finality: 8
}
{
  height: 2814236,
  blockHash: '0x00000000f71ba71af42fb2a356affa1439bc2adea0bf67880fc30f28237622e7',
  version: 536870912,
  previousBlockHash: '0x000000000000002f3cc7a5f9ed589b734808fff6d67c0f8a9385f6146c80297b',
  merkleRoot: '0x1799d4002cd58d15a764cee0919edf358bf36ace4fa4c6e78250336eafe12184',
  timestamp: 1715273381,
  bits: 486604799,
  nonce: 4137790000
}
```
