import React, { useEffect, useState } from 'react'
import { ProjectsArray } from '../../public/Projects'
import ProjectCard from './ProjectCard'

const Projects = ({ProjectsReference}) => {
  let [selectValue,setSelectValue] = useState("All");
  let [projects,setProjects] = useState(ProjectsArray);
  let [projectsToShow,setProjectsToShow] = useState(ProjectsArray);

  useEffect(() => {
    if(selectValue === "All") {
      setProjectsToShow(ProjectsArray);
    }
    else {
      setProjectsToShow(projects.filter((project) => project.Type === selectValue))
    }
  },[selectValue])

  function OnSelectChange(e) {
    setSelectValue(e.target.value);
  }

  return (
    <div ref={ProjectsReference}  className='mt-5'>
      <h1 className='text-green-500 font-bold text-center text-4xl'>Projects</h1>
      <div className='flex items-center justify-center mt-5'>
        <select 
        onChange={(e) => OnSelectChange(e)}
        value={selectValue}
        className='border-none outline-2 outline-green-700 text-green-700 px-5 py-1 text-2xl rounded-md font-bold'>
          <option value="All">All</option>
          <option value="Javascript">Javascript</option>
          <option value="React">React</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <div className='flex gap-5 mt-5 flex-wrap justify-center items-center'>
        {projectsToShow && projectsToShow.map((project) => <ProjectCard key={project.title} projectDescription={project}/>)}
      </div>
    </div>
  )
}

export default Projects