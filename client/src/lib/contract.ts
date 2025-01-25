import { abi } from "../artifacts/contracts/TokenFactory.sol/TokenFactory.json";
import { abi as TokenAbi } from "../artifacts/contracts/Token.sol/Token.json";
import { TokenFactoryContractAddresses } from "../interfaces/contract";
import {
  TOKEN_FACTORY_CONTRACT_ADDRESS_LOCALHOST,
  TOKEN_FACTORY_CONTRACT_ADDRESS_SEPOLIA,
} from "./constants";

export const tokenFactoryAbi = abi;

export const tokenAbi = TokenAbi;

export const TOKEN_FACTORY_CONTRACT_ADDRESSES: TokenFactoryContractAddresses = {
  Sepolia: TOKEN_FACTORY_CONTRACT_ADDRESS_SEPOLIA,
  localhost: TOKEN_FACTORY_CONTRACT_ADDRESS_LOCALHOST,
};

export type SupportedChains = keyof typeof TOKEN_FACTORY_CONTRACT_ADDRESSES;
