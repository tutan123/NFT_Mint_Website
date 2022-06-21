require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_PINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
    // 本地测试环境
    ganache: {
      url: "http://127.0.0.1:8545",
    },
    // // hecotest测试环境
    // hecotest: {
    //   url: "http://http-testnet.hecochain.com",
    //   accounts: [""],
    // },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};
