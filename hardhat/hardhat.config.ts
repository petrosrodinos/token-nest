import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
const { vars } = require("hardhat/config");

// const INFURA_API_KEY = vars.get("INFURA_API_KEY");
// const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  paths: {
    artifacts: "../client/src/artifacts",
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [SEPOLIA_PRIVATE_KEY],
    // },
  },
};

export default config;
