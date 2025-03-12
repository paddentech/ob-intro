import { useWallets } from "@privy-io/react-auth";
import { skipToken, useQuery } from "@tanstack/react-query";
//import { Address } from "viem"; // VIEM keeps causing compatibility issues
import { fetchPredictAddress } from "./fetch-predict-address";
// import { getRuntimeConfig } from "../../get-config";
// const config = getRuntimeConfig();
//console.log(config);
//export const ADMIN_ADDRESS = config.VITE_ADMIN_ADDRESS; // "0xc162a3cE45ad151eeCd0a5532D6E489D034aB3B8"
export const ADMIN_ADDRESS = "0xc162a3cE45ad151eeCd0a5532D6E489D034aB3B8";

export const useEmbeddedWallet = () => {
  const { wallets } = useWallets();
  return wallets.find((wallet) => wallet.walletClientType === "privy");
};

export const useOneBalanceAccountAddress = () => {
  const embeddedWallet = useEmbeddedWallet();

  return usePredictAddress({
    sessionKeyAddress: embeddedWallet?.address,
    adminKeyAddress: ADMIN_ADDRESS,
  });
};

const usePredictAddress = ({
  sessionKeyAddress,
  adminKeyAddress,
}: {
  sessionKeyAddress: any;
  adminKeyAddress: any;
}) => {
  return useQuery({
    queryKey: [
      "onebalance-account-address",
      sessionKeyAddress,
      adminKeyAddress,
    ],
    queryFn: sessionKeyAddress
      ? () => {
        return fetchPredictAddress({
          sessionAddress: sessionKeyAddress,
          adminAddress: adminKeyAddress,
        });
      }
      : skipToken,
  });
};
