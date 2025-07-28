import React from 'react'

const MenuOptions = ({setMenu}) => {

  function HandleCrossClick() {
    setMenu(false);
  }

  return (
    <div className='absolute z-10 bg-[#457D4E] h-[100%] w-[80%] top-0 right-0 flex flex-col'>
      <div className='flex items-center justify-end grow-1 pr-5'>
        <div className='flex items-center justify-center h-10 w-10 cursor-pointer' onClick={HandleCrossClick}>
          <div className='h-1 w-7 bg-[#2A222B] rotate-45 absolute'></div>
          <div className='h-1 w-7 bg-[#2A222B] -rotate-45 absolute'></div>
        </div>
      </div>
      <div className='flex flex-col justify-evenly items-center grow-9'>
        <button className='font-bold text-white text-xl cursor-pointer hover:text-[#2A222B]'>About Me</button>
        <button className='font-bold text-white text-xl cursor-pointer hover:text-[#2A222B]'>Skills</button>
        <button className='font-bold text-white text-xl cursor-pointer hover:text-[#2A222B]'>Projects</button>
        <button className='font-bold text-white text-xl cursor-pointer hover:text-[#2A222B]'>Contact Me</button>
      </div>
    </div>
  )
}

export default MenuOptions