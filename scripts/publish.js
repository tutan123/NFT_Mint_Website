const { ethers } = require("ethers");
const dotenv = require("dotenv");
dotenv.config();
const Token = require("../src/contracts/Token.json");
const contractAddress = require("../src/contracts/contract-address.json");

const rpc = process.env.REACT_APP_PINKEBY_RPC_URL;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(rpc);
// 通过私钥连接钱包
const wallet = new ethers.Wallet(privateKey);
// 获取钱包账户对应的地址
const signer = wallet.connect(provider);

const contract = new ethers.Contract(
  contractAddress.Token, // 合约地址
  Token.abi,
  signer
);
// 开启mint
const publish = async (value = true) => {
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
  await publish(false);
};

main();
