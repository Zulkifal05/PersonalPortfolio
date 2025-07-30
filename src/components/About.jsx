import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center gap-13 [@media(max-width:768px)]:flex-col mx-50 mt-10'>
      <div>
        <img src="/public/PROFILE PIC.png" alt="Profile Pic" className='rounded-[13%] h-[50vh] w-300 min-w-[250px]'/>
      </div>
      <div className='min-w-[350px]'>
        <div>
          <p className='font-bold text-white text-2xl [@media(max-width:768px)]:text-md'>Hi, I'm <span className='text-green-500 text-3xl font-bold'>Syed Zulkifal Ali Shah Bokhary </span>
          currently pursuing a Bachelor's degree in <span   className='text-green-500 text-3xl font-bold [@media(max-width:768px)]:text-md'>Computer Science</span> from <span className='text-green-500 text-3xl font-bold'>UET Taxila</span>. Passionate about technology, development, and problem-solving, I enjoy building creative and efficient solutions through code.</p>
        </div>

        <div className='flex items-center justify-start gap-5 mt-5'>
          <img src="/public/HTML Pic.png" alt="HTML" className='h-10 rounded-lg'/>
          <img src="/public/CSS Pic.png" alt="CSS" className='h-10 rounded-lg'/>
          <img src="/public/Tailwind Pic.png" alt="Tailwind" className='h-10 rounded-lg'/>
          <img src="/public/Javascript Pic.png" alt="JAVASCRIPT" className='h-10 rounded-lg'/>
          <img src="/public/React Pic.png" alt="REACT" className='h-10 rounded-lg'/>
          <img src="/public/C++ Pic.png" alt="C++" className='h-10 rounded-lg'/>
        </div>
      </div>
    </div>
  )
}

export default About