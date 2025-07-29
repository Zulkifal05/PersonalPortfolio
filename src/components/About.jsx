import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center gap-13 [@media(max-width:830px)]:flex-col mx-50 mt-10'>
      <div>
        <img src="/public/PROFILE PIC.png" alt="Profile Pic" className='rounded-[13%] h-[50vh] w-300 min-w-[250px]'/>
      </div>
      <p className='font-bold text-[#2A222B] text-2xl'>Hi, I'm <span className='text-green-700 text-3xl font-bold'>Syed Zulkifal Ali Shah Bokhary </span>
      currently pursuing a Bachelor's degree in <span className='text-green-700 text-3xl font-bold'>Computer Science</span> from <span className='text-green-700 text-3xl font-bold'>UET Taxila</span>. Passionate about technology, development, and problem-solving, I enjoy building creative and efficient solutions through code. This portfolio showcases my journey, projects, and skills as I grow and learn in the field of computer science.</p>
    </div>
  )
}

export default About