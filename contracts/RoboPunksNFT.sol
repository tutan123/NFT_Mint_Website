//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract RoboPunksNFT is ERC721, Ownable {
    uint256 public mintPrice; //价格
    uint256 public totalSupply; //总数量
    uint256 public maxSupply;
    uint256 public maxPerWallet; //每个钱包的最大值
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints; //记录每个地址对应的mint

    constructor() payable ERC721("RoboPunks", "RP") {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }

    // onlyOwner 只有合约部署着才能有权利调用此方法
    function setIsPublicMintEnabled(bool isPublicMintEnabled_)
        external
        onlyOwner
    {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI(uint256 tokenId_)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId_), "Token dose not exist!");
        return
            string(
                abi.encodePacked(
                    baseTokenUri,
                    Strings.toString(tokenId_),
                    ".json"
                )
            );
    }

    function withdraw() external onlyOwner {
        console.log(address(this).balance);
        (bool success, ) = withdrawWallet.call{value: address(this).balance}(
            ""
        );
        require(success, "whitdra failed!");
    }

    // // 据说部署到主链上需要此方法，针对方法的使用需要进一步研究
    // function setWithdrawAddress(address _addr) public onlyOwner {
    //     withdrawWallet = _addr;
    // }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnabled, "minting not enabled");
        require(msg.value == quantity_ * mintPrice, "wrong mint value");
        require(totalSupply + quantity_ < maxSupply, "sold out");
        require(
            walletMints[msg.sender] + quantity_ < maxPerWallet,
            "exceed max wallet"
        );
        for (uint256 i = 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}
