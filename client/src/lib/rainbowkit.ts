import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, sepolia } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "wagmi-tokennest",
  projectId: "f7612d250386741b02488257e54a563c",
  chains: [mainnet, polygon, sepolia],
});
