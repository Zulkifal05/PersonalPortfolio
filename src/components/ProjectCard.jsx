import React from 'react'

const ProjectCard = ({projectDescription}) => {
  return (
    <div className='border-2 border-green-500 w-[30%] min-w-[300px] rounded-xl p-3 flex flex-col justify-evenly items-center min-h-[250px]'>
      <h1 className='text-green-700 font-bold text-center text-4xl mt-3'>{projectDescription.title}</h1>
      <p className='text-white text-center font-bold text-lg'>{projectDescription.Description}</p>
      <a href={projectDescription.GithubLink} className='text-green-500 hover:underline' target="_blank" rel="noopener noreferrer">Github Link</a>
    </div>
  )
}

export default ProjectCard