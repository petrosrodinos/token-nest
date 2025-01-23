import { abi } from "../artifacts/contracts/TokenFactory.sol/TokenFactory.json";
import { TokenFactoryContractAddresses } from "../interfaces/contract";
import {
  TOKEN_FACTORY_CONTRACT_ADDRESS_LOCALHOST,
  TOKEN_FACTORY_CONTRACT_ADDRESS_SEPOLIA,
} from "./constants";

export const tokenFactoryAbi = abi;

export const TOKEN_FACTORY_CONTRACT_ADDRESSES: TokenFactoryContractAddresses = {
  Sepolia: TOKEN_FACTORY_CONTRACT_ADDRESS_SEPOLIA,
  localhost: TOKEN_FACTORY_CONTRACT_ADDRESS_LOCALHOST,
};

export type SupportedChains = keyof typeof TOKEN_FACTORY_CONTRACT_ADDRESSES;
