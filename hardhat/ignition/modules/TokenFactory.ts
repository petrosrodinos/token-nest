import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenFactoryModule = buildModule("TokenFactory", (m) => {
  const tokenFactory = m.contract("TokenFactory", []);

  return { tokenFactory };
});

export default TokenFactoryModule;
