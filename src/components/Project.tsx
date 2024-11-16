import expandIcon from '../../public/assets/expandIcon.png'
import collapseIcon from '../../public/assets/collapseIcon.png'
import React from 'react'

function Project({windowSize, handleExpandCollapse, expandedProject, project}){

  const projectIntermission = () => {
    handleExpandCollapse('project1')
  }

    return(
        <div className=''>
          <div className='flex justify-center items-center sm:p-4 md:p-16'>
          {windowSize.width && windowSize.width > 640 && 
            <div className='w-96'>
              <img className='rounded-md' src={`/projects/${project.image}`} alt='gif of project' />
            </div>}
            <div className='sm:w-[500px] w-full h-full m-0 sm:-ml-8'>
              <div onClick={projectIntermission} className='bg-white w-fit px-6 py-0.5 rounded-t-md mx-auto bg-[#07989c] text-white'>
                {project.name}
                {windowSize.width && windowSize.width <= 640 && (!expandedProject.project1 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((windowSize.width && windowSize.width <= 640 && expandedProject.project1) || (windowSize.width && windowSize.width > 640)) &&
              <div className='bg-white rounded-md px-2'>
                <div className='border-b flex w-full p-1 justify-evenly'>
                  <div className='flex items-center gap-1 cursor-pointer'> <a href={project.liveUrl}> <img style={{width: '16px'}} src='/assets/linkIcon.png' alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.liveUrl}>Live</a></div>
                  <div className='flex items-center gap-1 cursor-pointer'> <a href={project.repoUrl}> <img style={{width: '16px'}} src='/assets/githubRepoLink.png' alt='Link to repo'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.repoUrl}>Repo</a></div>
                </div>
                <div className='p-2 text-sm'>
                  {project.info}
                </div>
                {windowSize.width && windowSize.width <= 640 && 
                  <div className=''>
                    <img src={`/projects/${project.image}`} alt='gif of project' />
                  </div>}
                <div className='flex items-center justify-evenly border-t'>
                  {project.techUsed.map(tech => {
                      return (
                        <div key={tech.name} className='flex flex-col items-center justify-center py-1 gap-0.5'>
                          <img className='w-6' src={`/assets/stackImages/${tech.image}`} alt={tech.name}/>
                          <div className='text-xs italic'>{tech.name}</div>
                        </div>
                      )
                  })}
                </div>
              </div>}
            </div>
          </div>
        </div>
    )
}

export default Project;