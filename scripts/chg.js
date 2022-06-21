const { ethers } = require("ethers");

var a = "0x014d8ad346d34236";

var b = ethers.BigNumber.from(a);
console.log("b", b, typeof b);

var c = ethers.utils.formatEther(b);

console.log(c);
