import React from 'react'
import MenuBtn from './MenuBtn'

const Header = () => {
  return (
    <div className='flex items-center py-3 px-10 h-20'>
      <div className='grow-1'>
        <h1 className='text-[#2A222B] font-bold text-3xl cursor-pointer'>Syed Zulkifal Ali</h1>
      </div>
      <div className='grow-2 flex items-center justify-evenly [@media(max-width:768px)]:hidden'>
        <button className='text-[#9454AB] hover:text-[#457D4E] font-bold cursor-pointer text-xl'>About Me</button>
        <button className='text-[#9454AB] hover:text-[#457D4E] font-bold cursor-pointer text-xl'>Skills</button>
        <button className='text-[#9454AB] hover:text-[#457D4E] font-bold cursor-pointer text-xl'>Projects</button>
        <button className='text-[#9454AB] hover:text-[#457D4E] font-bold cursor-pointer text-xl'>Contact Me</button>
      </div>
      <MenuBtn />
    </div>
  )
}

export default Header