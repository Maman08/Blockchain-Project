import React from 'react'

function SignUp() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-violet-500 to-purple-300">
    <div className="text-white  flex gap-6 ml-[550px] "><ul className="mt-[230px]">
      <li className="mt-[20px]">profile</li>
      <li>
        <div>
          <h2 className="mt-[20px]">Username</h2>
          <input type="text" className="rounded-xl h-[30px]" />
        </div>
      </li>
      <li>
        <div>
          <h2 className="mt-[20px]">Password</h2>
          <input type="text" name="" id="" className="rounded-xl h-[30px]"/>
        </div>
      </li>
      
      </ul>
      <ul className="flex mt-[470px] -ml-[230px] gap-x-4"><li><button className="bg-white text-black p-3 rounded-2xl">SignUp</button></li>
      <li><button className="bg-black text-white p-3 rounded-2xl ml-4">SignIn</button></li></ul>
      </div>
      </div>
  )
}

export default SignUp