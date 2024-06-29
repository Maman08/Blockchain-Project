import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='bg-black text-white h-[50px]'><ul className="flex gap-4 ml-6">
     <Link href="/Home"> <li className='mt-4'>Home</li></Link>
      <Link href="/Browse"><li className='mt-4'>Browse</li></Link></ul></div>
  )
}

export default Navbar