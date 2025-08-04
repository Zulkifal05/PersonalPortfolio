import React from 'react'
import CppPic from "../assets/CppPic.png"
import CSSPic from "../assets/CSSPic.png"
import JavascriptPic from "../assets/JavascriptPic.png"
import ReactPic from "../assets/ReactPic.png"
import TailwindPIC from "../assets/TailwindPic.png"
import HTMLPic from "../assets/HTMLPic.png"

const Skills = ({SkillsReference}) => {
  return (
    <div 
    ref={SkillsReference}
    className='w-full h-[63vh] mt-13 flex items-center justify-center flex-col [@media(max-width:768px)]:pt-45 pt-20'>
    <h1 className='text-center font-bold text-green-500 text-4xl'>Skills</h1>
    <div className='flex items-center justify-center flex-wrap mt-9 gap-9'>
          <div className='flex flex-col items-center justify-center gap-3 outline-3 outline-green-500 min-w-[50px] w-30 p-3 rounded-lg'>
            <img src={HTMLPic} alt="HTML Pic" className='h-13 rounded-lg'/>
            <p className='font-bold text-center text-white'>HTML</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 outline-3 outline-green-500 min-w-[50px] w-30 p-3 rounded-lg'>
            <img src={CSSPic} alt="CSS Pic" className='h-13 rounded-lg'/>
            <p className='font-bold text-center text-white'>CSS</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 outline-3 outline-green-500 min-w-[50px] w-30 p-3 rounded-lg'>
            <img src={TailwindPIC} alt="Tailwind Pic" className='h-13 rounded-lg'/>
            <p className='font-bold text-center text-white'>Tailwind</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 outline-3 outline-green-500 min-w-[50px] w-30 p-3 rounded-lg'>
            <img src={JavascriptPic} alt="Javascript Pic" className='h-13 rounded-lg'/>
            <p className='font-bold text-center text-white'>Javascript</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 outline-3 outline-green-500 min-w-[50px] w-30 p-3 rounded-lg'>
            <img src={ReactPic} alt="React Pic" className='h-13 rounded-lg'/>
            <p className='font-bold text-center text-white'>React</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 outline-3 outline-green-500 min-w-[50px] w-30 p-3 rounded-lg'>
            <img src={CppPic} alt="C++ Pic" className='h-13 rounded-lg'/>
            <p className='font-bold text-center text-white'>C++</p>
          </div>
        </div>
    </div> 
  )
}

export default Skills