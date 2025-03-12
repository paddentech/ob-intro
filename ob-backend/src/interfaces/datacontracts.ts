
export interface QuoteRequest {
  fromChain: string;
  toChain: string;
  amount: string;
  fromToken: string;
  toToken: string;
}

export interface QuoteResponse {
  fromAmount: string;
  toAmount: string;
  fee: string;
  estimatedTime: number;
  route: string[];
}

export interface SwapRequest extends QuoteRequest {
  walletAddress: string;
}

export interface SwapResponse {
  txHash: string;
  status: 'pending' | 'completed' | 'failed';
  estimatedTime: number;
}

export interface SupportedChainResponse {
  chainId: number;
  name: string;
  nativeCurrency: {
    symbol: string;
    decimals: number;
  };
}

export interface AggregatedEntity {
  assetType: string;
  decimals: number;
  name: string;
  symbol: string;
}

export interface Asset {
  aggregatedAssetId: string;
  symbol: string;
  name: string;
  decimals: number;
  aggregatedEntities: AggregatedEntity[];
}

export interface AssetListResponse {
  assets: Asset[];
}

export interface AccountDetails {
  sessionAddress: string;
  adminAddress: string;
  accountAddress: string;
}

export interface SwapQuoteRequest {
  account: AccountDetails;
  fromTokenAmount: string;  // Amount in wei/smallest unit
  fromAggregatedAssetId: string;  // Format: "ds:symbol"
  toAggregatedAssetId: string;    // Format: "ds:symbol"
}


export interface UserOperation {
  sender: string;
  nonce: string;
  factory: string;
  factoryData: string;
  callData: string;
  callGasLimit: string;
  verificationGasLimit: string;
  preVerificationGas: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  paymaster: string;
  paymasterVerificationGasLimit: string;
  paymasterPostOpGasLimit: string;
  paymasterData: string;
  signature: string;
}

export interface TypedDataDomain {
  name: string;
  version: string;
  chainId: number;
  verifyingContract: string;
}

export interface TypedDataType {
  name: string;
  type: string;
}

export interface TypedDataToSign {
  domain: TypedDataDomain;
  types: {
    Approve: TypedDataType[];
  };
  primaryType: string;
  message: {
    callDataAndNonceHash: string;
  };
}

interface ChainOperation {
  userOp: UserOperation;
  typedDataToSign: TypedDataToSign;
  assetType: string;
  amount: string;
}

interface FiatValueEntry {
  assetType: string;
  amount: string;
  fiatValue: string;
}
export interface TokenInfo {
  aggregatedAssetId: string;
  amount: string;
  assetType: string | string[];  // Can be single string or array of strings
  fiatValue: string | FiatValueEntry[];  // Can be string or array of objects
  minimumAmount?: string;  // Optional for destinationToken
  minimumFiatValue?: string;  // Optional for destinationToken
}

export interface SwapQuoteResponse {
  id: string;
  account: AccountDetails;  // Reusing AccountDetails from previous interface
  originChainsOperations: ChainOperation[];
  destinationChainOperation?: ChainOperation;
  originToken: TokenInfo;
  destinationToken: TokenInfo;
  expirationTimestamp: string;
  tamperProofSignature: string;
}

export interface PredictedAddressResponse {
  predictedAddress: string;
}

export interface PredictedAddressRequest {
  sessionAddress: string;
  adminAddress: string;
}

// Types for individual asset balances
interface IndividualAssetBalance {
  assetType: string;
  balance: string;
  fiatValue?: number;
}

// Types for aggregated assets
interface AggregatedAsset {
  aggregatedAssetId: string;
  balance: string;
  individualAssetBalances: IndividualAssetBalance[];
  fiatValue?: number;
}

// Type for total balance
interface TotalBalance {
  fiatValue: number;
}

// Main DTO structure
export interface GetAggregatedBalanceResponse {
  balanceByAsset: AggregatedAsset[];
  totalBalance: TotalBalance;
}

// Type for individual transaction
interface Transaction {
  quoteId: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED'; // Assuming these are the possible statuses
  user: string;
  recipientAccountId: string;
  originChainOperations: string[];
  destinationChainOperations: string[];
  type: 'SWAP' | 'TRANSFER' | 'DEPOSIT' | 'WITHDRAWAL'; // Assuming these are the possible types
  originToken: TokenInfo;
  destinationToken: TokenInfo;
  timestamp: string; // ISO date string
}

// Main DTO structure for transaction history
export interface TransactionHistoryResponse {
  transactions: Transaction[];
  continuation?: string; // Optional continuation token for pagination
}