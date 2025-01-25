import { useAccount } from "wagmi";
import { TOKEN_FACTORY_CONTRACT_ADDRESSES, SupportedChains } from "../lib/contract";

export const useContractAddress = (): `0x${string}` => {
  const { chain } = useAccount();

  const contractAddress = TOKEN_FACTORY_CONTRACT_ADDRESSES[
    chain?.name as SupportedChains
  ] as `0x${string}`;

  // if (!contractAddress) {
  //   throw new Error(`Contract address not found for chain:`);
  // }

  return contractAddress;
};
