import { getDefaultConfig, darkTheme } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "wagmi-tokennest",
  projectId: "f7612d250386741b02488257e54a563c",
  chains: [sepolia],
});

export const wagmiTheme = darkTheme({
  accentColor: "violet",
  accentColorForeground: "white",
  fontStack: "rounded",
});
