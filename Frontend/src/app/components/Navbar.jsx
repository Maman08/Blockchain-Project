// import React from 'react'
// import Link from 'next/link'
// function Navbar() {
//   return (
//     <div className='bg-black text-white h-[50px]'><ul className="flex gap-4 ml-6">
//      <Link href="/Home"> <li className='mt-4'>Home</li></Link>
//       <Link href="/Browse"><li className='mt-4'>Browse</li></Link></ul></div>
//   )
// }
"use client"
import { WalletContext } from "@/context/wallet"
import { useContext } from "react"

// export default Navbar


export default function Navbar(){
  const {
            isConnected,
            setIsConnected,
            userAddress,
            setUserAddress,
            signer,
            setSigner
}=useContext(WalletContext);
const connectWallet=async()=>{
  if(!window.ethereum){
    throw new Error("Metamask is not installed");
  }
  try{
   const provider=new BrowserProvider(window.ethereum);
   const signer =await provider.getSigner();
   setSigner(signer);
   const accounts =await provider.send("eth_requestAccounts",[]);
   setIsConnected(true);
   setUserAddress(accounts[0]);
   const network=await provider.getNetwork();
   
  }catch(error){
console.error("connection error",error)
  }
}
}