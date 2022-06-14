项目初始化步骤：
1、通过 npx create-react-app full-mint-website 构建基础的项目结构
2、npm i -D hardhat
3、通过 npx hardhat 构建默认的hardhat项目；
4、npm i -D @openzeppelin/contracts 用于在编写solidity时使用openzeppelin封装好的合约
5、
6、
7、
8、


UI 引用的资源为：
Chakra UI
https://chakra-ui.com/guides/first-steps


领取rinkeby测试网络ETH水龙头地址：
https://fauceth.komputing.org/
https://faucet.rinkeby.io/

在infura上创建应用，并Endpoints类型设置为rinkeby
https://infura.io/dashboard

hardhat部署的相关命令：
1、npx hardhat clean  --清理
2、npx hardhat compile --编译
编译后的合约存储在：artifacts/contracts/RoboPunksNFT.sol/RoboPunksNFT.json
3、npx hardhat run scripts/deploy_RoboPunksNFT.js --network rinkeby
在部署的时候需要自己的账户中有ETH
部署运行的基本思路：
scripts/deploy_RoboPunksNFT.js 会调用本地配置hardhat.config.js中的配置进行部署
4、npx hardhat verify --network rinkeby 合约地址
上面的命令的目的是为了再次验证我们的合约，然后再etherscan.io上找到合约时，能够看到contract中的代码和对应的方法。


本项目存在的问题：
1、目前手工编译，手工部署；
2、针对前端使用的RoboPunksNFT.json文件，是手工从编译后的文件夹artifacts/contracts/RoboPunksNFT.sol/中拷贝的src中，后续需要做成自动化的模式。

本项目视频地址：
https://www.youtube.com/watch?v=ynFNLBP2TPs
资源下载: https://onedrive.live.com/?authkey=%21AI94eFqjl4fjeFI&cid=3C186B3EC0DA655D&id=3C186B3EC0DA655D%2130070&parId=3C186B3EC0DA655D%2130067&action=locate
create-react-app: https://create-react-app.dev/
hardhat: https://hardhat.org/
infura: https://infura.io/
etherscan: https://etherscan.io/
node: https://nodejs.org/en/download/
chakra ui: https://chakra-ui.com/guides/first-steps