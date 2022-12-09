require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("hardhat-abi-exporter")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    // hardhat 内置测试网络（选填）
    hardhat: {
      // 可以设置一个固定的gasPrice，在测试gas消耗的时候会很有用
      gasPrice: 1000000000,
    },
    // 你可以在这里配置任意网络
    //goerli 测试网络
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  // solidity: {
  //   version: "0.8.0", // 合约编译的版本，必填
  //   settings: {
  //     // 编译设置，选填
  //     optimizer: {
  //       // 优化设置
  //       enabled: true,
  //       runs: 200,
  //     },
  //   },
  // },
  // 项目路径配置，可指定任意路径，但下列是常用的一种结构
  // sources, tests, scripts 下的目录文件会被自动逐一执行
  paths: {
    sources: "./contracts", // 合约目录
    tests: "./test", // 测试文件目录
    cache: "./cache", // 缓存目录，由hardhat自动生成
    artifacts: "./artifacts", // 编译结果目录，由hardhat自动生成
  },
  // 测试框架设置
  mocha: {
    timeout: 20000, // 运行单元测试的最大等待时间
  },
  abiExporter: {
    path: "./react-matemask/src/abi",
  },
}
