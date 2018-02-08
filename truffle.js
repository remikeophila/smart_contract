module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration
  networks: {
    development: {
      host: "10.11.102.7",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
