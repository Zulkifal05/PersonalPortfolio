import React from 'react'
import MenuBtn from './MenuBtn'

const Header = ({
  AboutReference,
  SkillsReference,
  ContactReference,
  ProjectsReference}) => {

  function ScrollToAbout() {
    AboutReference.current?.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToSkills() {
    SkillsReference.current?.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToProjects() {
    ProjectsReference.current?.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollToContact() {
    ContactReference.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='flex items-center py-3 px-10 h-20'>
      <div className='grow-1'>
        <h1 className='text-green-500 font-bold text-3xl cursor-pointer'>Syed Zulkifal Ali</h1>
      </div>
      <div className='grow-2 flex items-center justify-evenly [@media(max-width:768px)]:hidden'>
        <button className='text-white hover:text-green-700 font-bold cursor-pointer text-xl' onClick={ScrollToAbout}>About Me</button>
        <button className='text-white hover:text-green-700 font-bold cursor-pointer text-xl' onClick={ScrollToSkills}>Skills</button>
        <button className='text-white hover:text-green-700 font-bold cursor-pointer text-xl'
        onClick={ScrollToProjects}>Projects</button>
        <button className='text-white hover:text-green-700 font-bold cursor-pointer text-xl' onClick={ScrollToContact}>Contact Me</button>
      </div>
      <MenuBtn about={AboutReference} skills={SkillsReference} projects={ProjectsReference} contact={ContactReference}/>
    </div>
  )
}

export default Header