const { ethers, BigNumber } = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
const Token = require("../src/contracts/Token.json");
const contractAddress = require("../src/contracts/contract-address.json");
const rpc = process.env.REACT_APP_PINKEBY_RPC_URL;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

console.log("privateKey", privateKey);

const provider = new ethers.providers.JsonRpcProvider(rpc);
const account6 = "0x5CBB80682E6B57D2c2234B0a48Bb16950CF134De";

// 通过私钥连接钱包
const wallet = new ethers.Wallet(privateKey);
// 获取钱包账户对应的地址
const signer = wallet.connect(provider);

const contract = new ethers.Contract(
  contractAddress.Token, // 合约地址
  Token.abi,
  signer
);

// const getContract = async (address, ABI, library, account) => {
//   // if (!isAddress(address) || address === AddressZero) {
//   //   throw Error(`Invalid 'address' parameter '${address}'.`)
//   // }

//   return new ethers.Contract(
//     address,
//     ABI,
//     getProviderOrSigner(library, account)
//   );
// };

// // account is optional
// const getProviderOrSigner = async (library, account) => {
//   return getSigner(library, account);
// };

const getBlockNumber = async () => {
  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number: " + blockNumber);
};

const getGasPrice = async () => {
  const gasPrice = await provider.getGasPrice();
  let gasPriceString = gasPrice.toString();
  console.log("Current gas price: " + gasPriceString);
};

/*
转账
 */
const transfer = async (from, to, value) => {
  console.log("from address=", from.address);
  const tx = await from.sendTransaction({
    to: account6,
    value: ethers.utils.parseEther(value),
  });
  // 打印的hash可以在区块链浏览器上查看到
  //看: https://ropsten.etherscan.io/tx/0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364
  console.log(tx.hash);
  // 操作还没完成，需要等待挖矿
  const r = await tx.wait();
  console.log("r", r);

  let balance_from = await from.getBalance();
  let balance_to = await provider.getBalance(account6);
  console.log(
    ethers.utils.formatEther(balance_from),
    ethers.utils.formatEther(balance_to)
  );
};

//mint
const mint = async (contract, mintAmount) => {
  try {
    const response = await contract.mint(BigNumber.from(mintAmount), {
      value: ethers.utils.parseEther((0.02 * 1).toString()),
    });
    console.log("response", response);
  } catch (err) {
    console.log("error", err);
  }
};

// 开启mint
const publish = async (value) => {
  // 使用签名器创建一个新的合约实例，它允许使用可更新状态的方法
  // let contractWithSigner = contract.connect(wallet);
  const tx = await contract.setIsPublicMintEnabled(value);
  // 打印的hash可以在区块链浏览器上查看到
  //看: https://ropsten.etherscan.io/tx/0xaf0068dcf728afa5accd02172867627da4e6f946dfb8174a7be31f01b11d5364
  console.log(tx.hash);
  // 操作还没完成，需要等待挖矿
  const r = await tx.wait();
  console.log("r", r);
};

const main = async () => {
  let balance_to = await provider.getBalance(account6);
  console.log(ethers.utils.formatEther(balance_to));
  // await getBlockNumber();
  // await transfer(signer, account6, "0.1");
  // await mint(contract, "1");
  // await publish(true);
};

main();
