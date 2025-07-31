import React from 'react'

const Skills = ({SkillsReference}) => {
  return (
    <div 
    ref={SkillsReference}
    className='w-full h-[50vh] mt-13 flex items-center justify-center'>
      <div className='w-[30%] h-[97%] rounded-2xl p-5 min-w-[300px] border-2 border-green-500'>
        <h1 className='text-center font-bold text-green-500 text-3xl'>Skills</h1>
        <div className='flex flex-col justify-evenly mt-5'>
          <p className='font-bold text-white text-2xl mt-1'>HTML</p>
          <p className='font-bold text-white text-2xl mt-1'>CSS</p>
          <p className='font-bold text-white text-2xl mt-1'>Tailwind</p>
          <p className='font-bold text-white text-2xl mt-1'>Javascript</p>
          <p className='font-bold text-white text-2xl mt-1'>React JS</p>
          <p className='font-bold text-white text-2xl mt-1'>C++</p>
        </div>
      </div>
    </div> 
  )
}

export default Skills