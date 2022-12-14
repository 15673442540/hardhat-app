const hre = require("hardhat")

async function main() {
    const SimpleToken = await ethers.getContractFactory("SimpleToken")
    const erc20 = await SimpleToken.deploy("DAPPLEARNING", "DAPP", 0, 10000000)
    await erc20.deployed()
    console.log(`address ${erc20.address}`)
}

// We recommend this pattern to be able to use async/npm ruawait everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
