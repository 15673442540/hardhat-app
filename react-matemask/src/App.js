import logo from "./logo.svg"
import "./App.css"
import React, { useState } from "react"
import { ethers } from "ethers"
import SimpleTokenabi from "./abi/contracts/SimpleToken.sol/SimpleToken.json"
import Lockabi from "./abi/contracts/Lock.sol/Lock.json"

function App() {
  const [contract, setcontract] = useState(null)
  React.useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    // const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", SimpleTokenabi, signer)

    const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", Lockabi, signer)

    //0x5FbDB2315678afecb367f032d93F642f64180aa3
    setcontract(contract)
  }, [])

  const showContract = async () => {
    console.log(await contract.get())
  }

  return (
    <div className="App">
      <button onClick={showContract}>showContract</button>
    </div>
  )
}

export default App
