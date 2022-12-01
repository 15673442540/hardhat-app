// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")

async function main() {
  // const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")
  const provider = new ethers.getDefaultProvider("goerli")
  //getDefaultProvider的provider是没有下面方法的
  // const accounts = await provider.listAccounts()
  // const [account1, account2] = accounts

  const SimpleToken = await ethers.getContractFactory("SimpleToken")
  const erc20 = await SimpleToken.deploy("DAPPLEARNING", "DAPP", 0, 10000000)

  // 获取签名
  const [deployer] = await ethers.getSigners()
  console.log("Deploying the contracts with the account:", await deployer.getAddress()) //账户地址
  console.log("branle", await deployer.getBalance()) //账户余额
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
