---
title: Using the KEVM devnet
description: KEVM getting started
parent: 2020-05-04_11-00-00_getting-started
order: 1
last_updated: "2020-12-17T09:00:00+01:00"
redirects:
  - from: /en/kevm/get-started/
    type: "301"
  - from: /en/kevm/get-started/using-the-kevm-testnet/
    type: "301"
---
## Using the KEVM devnet

The KEVM is a high quality, formally-verified smart contract virtual machine. The KEVM devnet is implemented on Mantis, the standards-compliant Ethereum Classic client designed within the specification of the K framework. The K specification defines the formal semantics for elements such as the configuration and transition rules of EVM. The K framework provides the platform within which to work and also provides an executable.

The KEVM is a stack-based machine, as opposed to a register-based machine. The primary difference between these two architectures is in the way in which operands and their results are stored and retrieved.

To get up and running you need to install Mallet  and start compiling your smart contracts. Then you can start experimenting and identify any weak spots in your smart contracts.

### Known issues

There currently are four known issues:

- Only supports up to EVM version `Byzantium`. Therefore, Solidity compiler 0.5.1 is recommended.
- RPC `eth_logs` does not return any logs.
- RPC `eth_estimateGas` is inaccurate, it always returns 21000.
- `eth_getWork` is not returning expected values.
