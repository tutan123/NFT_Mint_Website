const { ethers, artifacts } = require("hardhat");
const fs = require("fs");

const CONTRACT_NAME = "RoboPunksNFT";

async function main() {
  const signers = await ethers.getSigners();
  for (const signer of signers) {
    let adr = await signer.getAddress();
    console.log(`signer=${adr}`);
  }
  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  let balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));
  // We get the contract to deploy
  const RoboPunksNFT = await ethers.getContractFactory(CONTRACT_NAME);
  const token = await RoboPunksNFT.deploy();

  await token.deployed();

  console.log("RoboPunksNFT deployed to:", token.address);
  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token);
}

function saveFrontendFiles(token) {
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync(CONTRACT_NAME);

  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
