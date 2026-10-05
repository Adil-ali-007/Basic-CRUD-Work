import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full  justify-between h-20 flex items-center bg-gray-200 shadow px-5'>
        <div className='w-[10%] h-full flex items-center'>
            <h1 className='font-bold text-zinc-800'>Logo</h1>
        </div>
        <div className='font-bold h-full'>
            <ul className='w-full h-full flex gap-6 list-none items-center text-zinc-800 font-medium'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
