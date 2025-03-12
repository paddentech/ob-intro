Implementing a Cross-Chain Swap on the OneBalance platform

### What is a Cross-chain Swap and why is it important? 

> Definition:   
A Cross-Chain Swap (or Atomic Swap) is any operation which exchanges an asset on chain A for an asset on chain B without going through a third party.

The reason it is an important technology is that since the explosion of blockchain technology in the 2010s and the proliferation of different blockchains and their tokens, users have wanted to trade assets on one chain while their token assets have been held on another. Up until fairly recently, this was enabled by one of a number of somewhat cumbersome solutions which involved at least one third party such as an exchange, multi-chain wallet or interoperability protocol, thereby incurring at least some cost overhead and associated loss of efficiency. 

For example, user A (Antoinette) holds 10 ETH on the Ethereum chain, and wants to purchase an NFT from user B (Bastien) which is on the Solana chain. 


Historically, if an entity owned assets of one chain and wanted to exchange them for assets on another chain, they had to use external suppliers ike exchanges. The owning entity would essentially sell the existing asset and buy the desired asset almost simultaneously. While this process works, it is prone to a number of problems:
- Wait times; due to the fact that two separate transactions must be fulfilled, and in any exchange scenario the speed of the transaction is not deterministic, the time taken to carry out a Cross Chain Swap could be as high as a couple of minutes.
- Gas Fees; due to the complexity of the operation, gas fees can be quite high.
- Exchange Fees; Most exchanges charge a fee to use their services.

A Cross-Chain Swap avoids incurring these overheads by using a Smart Contract to achieve the same result, i.e. swapping an asset on one chain for an asset on another. 

#### What it's not: Alternatives to Atomic Swaps

Cross-Chain Bridge
Cross-Chain Bridges have been around for a while now. The need for them arose to allow an entity which holds an amount X in some token (ETH) to spend that amount on another chain (not the originating chain, in this instance Ethereum). To enable this, Cross-Chain Cridges (or just "Bridges") were developed. However, don't confuse the two. A Bridge works by locking the asset on the source chain so that it cannot be spent twice, and minting a wrapped version of that token on the destination chain. 

A Cross-chain swap, on the other hand, allows users to exchange completely different assets on different chains without the use of wrapping or other technologies.

### How does it work? 

Implementations of Atomic Swap vary, however the most common type of implementation involves the use of a Smart Contract Escrow system.





1. Choose a cross-chain bridge or DEX aggregator that supports both blockchains
2. Connect your wallet(s) to the platform
3. Select the source and destination chains and assets
4. Review the quoted rate, fees, and estimated time
5. Approve the transaction on your source chain
6. Wait for confirmation and bridging to complete

The specific workflow depends on which platform you're using. Popular options include:

- Thorchain: Supports native asset swaps across multiple chains
- Stargate: Specialized in stablecoin transfers across chains
- Synapse Protocol: Offers cross-chain swapping for various assets
- Li.Fi or 1inch: DEX aggregators that can find optimal cross-chain routes

For most platforms, the technical process involves:
- Smart contracts on the source chain lock or burn your tokens
- The bridge protocol verifies this transaction 
- Equivalent tokens are minted or released on the destination chain

Would you like me to walk through a specific example using a particular platform or chain pair?

