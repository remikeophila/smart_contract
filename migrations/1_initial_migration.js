var Migrations = artifacts.require("./Migrations.sol");
var SimpleTransaction = artifacts.require("./SimpleTransaction.sol")

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleTransaction);
};
