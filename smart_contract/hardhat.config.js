require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks : {
    rinkeby : {
      url : 'https://eth-rinkeby.alchemyapi.io/v2/XD7ewX5gbQuu6RJjHqaYx8kljBxggwr5',
      accounts : [
        '9584ecac1a38eb3dc04db2c6e6a0a98602d4a8790635f2a871383224ca6b0246'
      ]
    }
  }
};
