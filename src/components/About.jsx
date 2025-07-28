import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center px-20 py-10 gap-10'>
      <div>
        <img src="/public/PROFILE PIC.png" alt="Profile Pic" className='h-80 w-300 rounded-2xl'/>
      </div>
      <p className='font-bold text-[#457D4E] text-2xl'>Hi, I'm <span className='text-[#2A222B] text-3xl font-bold'>Syed Zulkifal Ali Shah Bokhary </span>
      currently pursuing a Bachelor's degree in Computer Science from <span className='text-[#2A222B] text-3xl font-bold'>UET Taxila</span>. Passionate about technology, development, and problem-solving, I enjoy building creative and efficient solutions through code. This portfolio showcases my journey, projects, and skills as I grow and learn in the field of computer science.</p>
    </div>
  )
}

export default About