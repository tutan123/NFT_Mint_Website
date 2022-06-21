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

<!-- 构建虚拟地址工具 -->
https://address-1253718919.cos.ap-guangzhou.myqcloud.com/index.html

<!-- 视频及github -->
https://www.youtube.com/watch?v=mrAA6UGWX1g
https://github.com/hyd628/OneBlockCourseScripts


==================
(0) 0x26675bB53afa23EE7f78d8048A56f6D110e3893D (100 ETH)
(1) 0xcFa5309806D4B0dD3dEBd0FdF2343cFb1Eb6Cac2 (100 ETH)
(2) 0xFca475eBA4d09859B1DdDd1079e4F41564a922AF (100 ETH)
(3) 0x5e2b53042a78dA0afd6885eFaBBe279679aEBB5C (100 ETH)
(4) 0xFBB8A23D5a7A2B990259F96FBC2ad1f26a5ef2b4 (100 ETH)
(5) 0x479D40D371a597eb7E0Ead7ADb5FdDb94F97DD0F (100 ETH)
(6) 0xa69dC62912B470eB4321a7EC269C1e5C756052C2 (100 ETH)
(7) 0x86faF746354E845b6f904B7D1fA9B1A79A230B69 (100 ETH)
(8) 0x111533911520C51Bc7F646E9E66B797EeF3Fd9dc (100 ETH)
(9) 0x59559502DDe414eB46FAC4A4Fe8b84797215AE85 (100 ETH)

Private Keys
==================
(0) 0xd24be5223004a7524b876eff612b304ecb8348a4890ad5b7ee80ccab1b688558
(1) 0xe5983896c1712c9be4688bc3b83d4273c4a7c1d0121f0a2d7f5af1636ba1d793
(2) 0xdc6402dce44baab5f286fbdf3d7493fc623703f6fe5175aea299b9ff23de95e2
(3) 0x22256e91e2d74028bf150993e14b5f6463780f7e81b8d8769c58b2d79493ed51
(4) 0xa8075100473e6d2b168c459161a682e776ebdca371e06c0ed7d1da12183d711f
(5) 0xab884deb776012db2e2475fa38a923fcbc5439a1b818cf41bb8ebcdb16b2c88c
(6) 0xad15d179eeed37e58886eee4306ed413317839eb1eebce7494c7e4c05bb396d4
(7) 0xe616812a934047a8e157b50c0edd8d54046e48da31ff657bce9be78e364a20d7
(8) 0xe11e7526ed4f703e0df69695a200f173fb2fa66941bf8b9766b56b941bd443ed
(9) 0x6062602209ba09bce53ee8a171a1fe073fe73d166389bde8f11d5157a0e631a9