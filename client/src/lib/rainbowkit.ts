import { getDefaultConfig, darkTheme } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";
import { Chain } from "@rainbow-me/rainbowkit";
import { RAINBOW_PROJECT_ID } from "./constants";

const hardhatLocal = {
  id: 31337,
  name: "localhost",
  iconUrl: "https://hardhat.org/favicon.ico",
  iconBackground: "#fff",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
  blockExplorers: {
    default: { name: "Hardhat", url: "http://localhost:8545" },
  },
  contracts: {
    multicall3: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      blockCreated: 0,
    },
  },
} as const satisfies Chain;

export const wagmiConfig = getDefaultConfig({
  appName: "wagmi-tokennest",
  projectId: RAINBOW_PROJECT_ID,
  chains: [sepolia, hardhatLocal],
});

export const wagmiTheme = darkTheme({
  accentColor: "violet",
  accentColorForeground: "white",
  fontStack: "rounded",
});
