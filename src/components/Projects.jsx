import React, { useEffect, useState } from 'react'
import { ProjectsArray } from '../../public/Projects'
import ProjectCard from './ProjectCard'

const Projects = ({ProjectsReference}) => {
  let [btnsValue,setBtnsValue] = useState("All");
  let [projects,setProjects] = useState(ProjectsArray);
  let [projectsToShow,setProjectsToShow] = useState(ProjectsArray);

  useEffect(() => {
    if(btnsValue === "All") {
      setProjectsToShow(ProjectsArray);
    }
    else {
      setProjectsToShow(projects.filter((project) => project.Type === btnsValue))
    }
  },[btnsValue])

  function AllBtnClick() {
    setBtnsValue("All");
  }

  function JavascriptBtnClick() {
    setBtnsValue("Javascript");
  }

  function ReacttBtnClick() {
    setBtnsValue("React");
  }

  function CppBtnClick() {
    setBtnsValue("C++");
  }

  function MERNBtnClick() {
    setBtnsValue("MERN");
  }

  return (
    <div ref={ProjectsReference}  className='mt-13 pt-20'>
      <h1 className='text-green-500 font-bold text-center text-4xl'>Projects</h1>
      <div className='flex items-center justify-center mt-5'>
        <div className='flex items-center justify-center gap-5 flex-wrap'>
          <button className={`text-green-500 border-none outline-2 outline-green-500 py-1 px-5 rounded-lg font-bold text-lg cursor-pointer ${ btnsValue === "All" ? "bg-green-500 text-white" : "" }`} onClick={AllBtnClick}>All</button>
          <button className={`text-green-500 border-none outline-2 outline-green-500 py-1 px-5 rounded-lg font-bold text-lg cursor-pointer ${ btnsValue === "Javascript" ? "bg-green-500 text-white" : "" }`} onClick={JavascriptBtnClick}>Javascript</button>
          <button className={`text-green-500 border-none outline-2 outline-green-500 py-1 px-5 rounded-lg font-bold text-lg cursor-pointer ${ btnsValue === "React" ? "bg-green-500 text-white" : "" }`} onClick={ReacttBtnClick}>React</button>
          <button className={`text-green-500 border-none outline-2 outline-green-500 py-1 px-5 rounded-lg font-bold text-lg cursor-pointer ${ btnsValue === "C++" ? "bg-green-500 text-white" : "" }`} onClick={CppBtnClick}>C++</button>
          <button className={`text-green-500 border-none outline-2 outline-green-500 py-1 px-5 rounded-lg font-bold text-lg cursor-pointer ${ btnsValue === "MERN" ? "bg-green-500 text-white" : "" }`} onClick={MERNBtnClick}>MERN</button>
        </div>
      </div>
      <div className='flex gap-5 mt-5 flex-wrap justify-center items-center'>
        {projectsToShow && projectsToShow.map((project) => <ProjectCard key={project.title} projectDescription={project}/>)}
      </div>
    </div>
  )
}

export default Projects