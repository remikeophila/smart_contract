var SimpleTransaction = artifacts.require("./SimpleTransaction.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleTransaction);
};
