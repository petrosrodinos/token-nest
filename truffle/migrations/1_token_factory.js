var TokenFactory = artifacts.require("TokenFactory");

module.exports = async function (deployer) {
  await deployer.deploy(TokenFactory, { gas: 6000000 });
};
