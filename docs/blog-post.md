## Implementing a Cross-Chain Swap on the OneBalance platform

I decided to build a Cross-Chain Swap on the OneBalance platform, both for my own edification and to road-test this brand new platform. 

This post starts off with a high-level discussion of Cross Asset Swaps and the OneBalance platform. If you want to skip this and get to the implementation details, [click here](#Implementation)

### What is OneBalance? 
[One Balance](https://www.onebalance.io/)  is a new platform claiming to revolutionise Web3 UX by bringing together the best features of Externally Owned Accounts (EOA) and Smart Contracts. The basic idea is to abstract away the nitty-fritty details of cross-chain integration, so that a crypto user can seamlessly and effortlessly convert asserts from one to another, pay for assets on one chain with token from another, and so on, without having to bridge or even know that such a thing exists. 

### What is a Cross-chain Swap and why is it important? 

> Definition:   
A Cross-Chain Swap (or Atomic Swap) is any operation which exchanges an asset on chain A for an asset on chain B without going through a third party.

The reason Atomic Swap is an important technology is that users often want to trade assets on one chain while their token assets have been held on another. For example, user A (Antoinette) holds 10 ETH on the Ethereum chain, and wants to purchase an NFT from user B (Bastien) which is on the Solana chain. 

Historically, this activity required the use of a number of solutions which involved at least one third party such as an exchange, multi-chain wallet or interoperability protocol. This incurs at least some cost overhead and associated loss of efficiency. 

Some options include:
- Buy SOL with your ETH at an exchange, and use the SOL to buy the NFT
    - Slow
    - Incurs exchange fees and gas fees
- Bridge your ETH onto the SOL chain and buy the asset with the bridged SOL
    - Still requires two steps, locking and minting
    - Incurs security risks associated with bridging

In summary; without Atomic Swaps, if an entity owned assets of one chain and wanted to exchange them for assets on another chain, they had to use external suppliers ike exchanges. The owning entity would either sell the existing asset and buy the desired asset, or bridge some of their existing token onto the target chain. While this process works, it is prone to a number of problems:
- Wait times; due to the fact that two separate transactions must be fulfilled, and in any exchange scenario the speed of the transaction is not deterministic, the time taken to carry out a Cross Chain Swap could be as high as a couple of minutes.
- Gas Fees; due to the complexity of the operation, gas fees can be quite high.
- Exchange Fees; Most exchanges charge a fee to use their services.

A Cross-Chain Swap avoids incurring these overheads by using a Smart Contract to achieve the same result, i.e. swapping an asset on one chain for an asset on another. 

### Implementation
One Balance is integrated with the Privy platform [https://docs.privy.io/](https://docs.privy.io/) which allows for smoother user onboarding and provides smart wallet infrastructure. 

To implement an Atomic Swap, we first need to get set up in the One Balance environment, using Privy for key storage and authentication. 

- Creating an App 
- Integrating the Privy login features 

Once we are set up with the Privy features integrated into our app, we can log into the app using our chosen method (email, social, or using an existing wallet). Once we have done this, we need to supply some funds to this OneBalance account in order to pay for the gas we will need to execute our operations.

Once we have signed in to our application, generated a OneBalance account key, and funded this account, we can perform a Cross Asset Swap. This means:
- Calling the OneBalance API to generate a swap quote
- Signing the quote using Privy
- Executing the signed quote with the OneBalance API 

### The OneBalance API
The One Balance API  is a series of endpoints to help you integrate your dApp seamlessly with the OneBalance platform. 

- API definitions may be found here-[https://be.onebalance.io/swagger/#/](https://be.onebalance.io/swagger/#/).
- One Balance documentation may be found here- [https://docs.onebalance.io/chain-abstraction-toolkit/getting-started-with-onebalance-and-privy](https://docs.onebalance.io/chain-abstraction-toolkit/getting-started-with-onebalance-and-privy)


