const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");


  describe("GEt",  ()=>{
 

    const deployFn = async ()=>{
        const Get = await ethers.getContractFactory("Get");
        const deploy =await Get.deploy(99);
        
        return {deploy};
    }

    it("function",async ()=>{
        const { deploy } = await loadFixture(deployFn);


        console.log(await deploy.get());


    })


  })