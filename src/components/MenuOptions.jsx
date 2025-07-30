import React, { useEffect, useState } from 'react'

const MenuOptions = ({setMenu,showMenu,about,skills,projects,contact}) => {
  let [translate,setTranslate] = useState(false);

  useEffect(() => {
    setTranslate(showMenu);
  },[showMenu])

  function HandleCrossClick() {
    setMenu(false);
  }

  function ScrollToAbout() {
    setMenu(false);
    about.current?.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToSkills() {
    setMenu(false);
    skills.current?.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToProjects() {
    setMenu(false);
    projects.current?.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToContact() {
    setMenu(false);
    contact.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`fixed z-10 bg-green-500 h-[100vh] w-[80%] top-0 right-0 flex flex-col ransform transition-transform duration-300 ease-in-out ${translate ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex items-center justify-end grow-1 pr-5'>
          <div className='flex items-center justify-center h-10 w-10 cursor-pointer' onClick={HandleCrossClick}>
            <div className='h-1 w-7 bg-black rotate-45 absolute'></div>
            <div className='h-1 w-7 bg-black -rotate-45 absolute'></div>
          </div>
        </div>
        <div className='flex flex-col justify-evenly items-center grow-9'>
          <button className='font-bold text-black text-xl cursor-pointer' onClick={ScrollToAbout}>About Me</button>
          <button className='font-bold text-black text-xl cursor-pointer' onClick={ScrollToSkills}>Skills</button>
          <button className='font-bold text-black text-xl cursor-pointer' onClick={ScrollToProjects}>Projects</button>
          <button className='font-bold text-black text-xl cursor-pointer' onClick={ScrollToContact}>Contact Me</button>
        </div>
    </div>
  )
}

export default MenuOptions