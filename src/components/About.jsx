import React from 'react'
import PROFILEPIC from "../assets/PROFILEPIC.png"

const About = ({AboutReference}) => {
  return (
    <div 
    ref={AboutReference}
    className='flex items-center justify-center gap-13 [@media(max-width:768px)]:flex-col mt-10 w-full px-30 pt-20'>
      <div>
        <img src={PROFILEPIC} alt="Profile Pic" className='rounded-[13%] h-[50vh] w-300 min-w-[250px] [@media(max-width:360px)]:h-[30vh]'/>
      </div>
      <div className='min-w-[300px]'>
        <div>
          <p className='font-bold text-white text-2xl [@media(max-width:768px)]:text-md'>Hi, I'm <span className='text-green-500 text-3xl font-bold'>Syed Zulkifal Ali Shah Bokhary </span>
          currently pursuing a Bachelor's degree in <span   className='text-green-500 text-3xl font-bold [@media(max-width:768px)]:text-md'>Computer Science</span> from <span className='text-green-500 text-3xl font-bold'>UET Taxila</span>. Passionate about technology, development, and problem-solving, I enjoy building creative and efficient solutions through code.</p>
        </div>
      </div>
    </div>
  )
}

export default About