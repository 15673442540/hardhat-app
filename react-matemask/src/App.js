import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"
import { ethers } from "ethers"
import SimpleTokenabi from "./abi/contracts/SimpleToken.sol/SimpleToken.json"
import Lockabi from "./abi/contracts/Lock.sol/Lock.json"
import Getabi from "./abi/contracts/Get.sol/Get.json"


function App() {
  const [contract, setcontract] = useState(null);
  const [ownerData,setOwnerData] = useState({})
  const [message,setMessage] = useState("")
  const [amount,setAmount] = useState("")
  const [address,setAddress] = useState("")

  
  
  //连接了erc20 合约，使用的是erc20的余额
  const erc20Contract = async ()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract("0xe17967Aca37845E44d3B404664570EE2C8b1aAF8", SimpleTokenabi, signer)
    ownerData.name = await contract.name();
    ownerData.address = await contract.address;
    ownerData.balance = ethers.utils.formatUnits( await contract.balanceOf(contract.address));
    ownerData.symbol = await contract.symbol();




    
    console.log(contract)
    console.log(ownerData)

    setOwnerData(ownerData)
    setcontract(contract)
  }

  const goerliContract = ()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)

  }
  React.useEffect(() => {
    erc20Contract();
  }, [])

  const showContract = async () => {
    const balance  = await  contract.balanceOf("0x72D563F7F7a4E4373141E5E9CF801986497A52A7")
    const name = await contract.name();
    const to = "0x350f4EB708aC92C0DD910d3c440595afD9f83766"
    console.log("🚀 ~ file: App.js:22 ~ showContract ~ name", name)
    
    console.log("🚀 ~ file: App.js:21 ~ showContract ~ balance", ethers.utils.formatUnits(balance,18))
    // 
    //交易
    // await contract.transfer(to,99)
  }

  const AomuntInput = (e)=>{
    setAmount(e.target.value.trim())
  }
  const AddressInput = (e)=>{
    setAddress(e.target.value.trim())
  }

  const submit = async ()=>{
    if(amount&&address){
     const res = await contract.transfer(address,amount);
     setMessage(res.hash)
     console.log(res);
    }
  }

  return (
    <div className="App">
      {/* <button onClick={showContract}>showContract</button> */}
      <div>ownerAddress:{ownerData.address} you have {ownerData.balance}  {ownerData.symbol}</div>
      
      <h5>Transfer</h5>
      <div>
        <span>Aomunt of DAPP</span>
        <input  onBlur={AomuntInput}/>
      </div>

      <div>
        <span>Recipient address</span>
        <input onBlur={AddressInput} />
      </div>
      <button onClick={submit}>Transfer</button>


      {message&&<div>hash:{message}</div>}
  


    </div>
  )
}

export default App
