import React from 'react'
import Navbar from '../components/Navbar'

function Sell() {
  return (
    <>
    <Navbar />
    <div className='flex gap-[320px] mt-[60px]'>
      <div>
        <ul><li><img  className="w-[400px] mt-[30px] ml-[40px]"src="https://helios-i.mashable.com/imagery/articles/04GOYxrDJBC0zU9D3VRheoi/hero-image.fill.size_1200x1200.v1615360559.jpg" alt="" /></li>
        <li><div className='ml-[180px] mt-[20px]'><ul className='flex gap-6'><li ><button className='bg-black rounded-xl p-3 text-white'>Buy</button></li>
        <li><button className='bg-black rounded-xl p-3 text-white'>Sell</button></li></ul></div></li></ul>
      </div>
      <div className='bg-black text-white w-[500px]'>
        <h2>Name</h2><br>
        </br>
        <p>Description</p>
      </div>
    </div>
    </>
  )
}

export default Sell