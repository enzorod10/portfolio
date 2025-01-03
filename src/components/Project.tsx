import React from 'react'
import { Tech } from '../types'
import { Project as ProjectType } from '../types'

function Project({ project, handleExpandCollapse, windowSize, expandedProject }){
  const projectIntermission = () => {
      handleExpandCollapse(project.name)
  }

  return(
      <div>
        <div className='flex justify-center items-center sm:p-4 md:p-16'>
          <div className='w-full max-w-lg sm:-mr-5'>
            <div onClick={projectIntermission} 
              style={{height: windowSize.width && windowSize.width <= 640 && expandedProject?.name !== project.name && '35px' }}
              className='projectTitle flex justify-center items-center text-slate-100 sm:text-slate-900 bg-[#0079897c] sm:bg-slate-200 w-fit p-0.5 text-lg rounded sm:rounded-none sm:rounded-t mx-auto w-full sm:w-3/4'>
                {project.name}
                {windowSize.width && windowSize.width <= 640 && (expandedProject?.name !== project.name ? <img style={{position: 'absolute', right: '10%'}} src={'/assets/expandIcon.png'} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={'/assets/collapseIcon.png'} alt='collapse' />)}
                
            </div>
            {((windowSize.width && windowSize.width <= 640 && expandedProject?.name === project.name) || (windowSize.width && windowSize.width > 640)) &&
            <div className='relative flex flex-col h-full bg-slate-100 gap-2 px-4 rounded shadow-lg'>
              <div className='flex justify-around border-b border-slate-900 py-2'>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href={project.liveLink}> <img style={{width: '16px'}} src={'/assets/linkIcon.png'} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.liveLink}>Live</a></div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href={project.codeLink}> <img style={{width: '16px'}} src={'/assets/githubRepoLink.png'} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.codeLink}>Repo</a></div>
              </div>
              <div className=''>
                  {project.info}
              </div>
              {windowSize.width && windowSize.width <= 640 && 
              <div className=''>
                  <img src={project.image} alt={project.name} />
              </div>}
              <div className='p-2 flex items-center justify-evenly border-t border-slate-900'>
                {project.techUsed.map((tech: Tech) => {
                    return (
                      <div key={tech.name} className='flex flex-col items-center gap-0.5 italic text-xs'>
                        <img className='w-8' src={tech.image} alt={tech.name}/>
                        <div>{tech.name}</div>
                      </div>
                )})}
              </div>    
            </div>}
          </div>
        {windowSize.width && windowSize.width > 640 && 
          <div className='w-96'>
            <img className='rounded-md' src={project.image} alt={project.name} />
          </div>}
        </div>
      </div>
  )
}

export const MobileViewProject = ({ project }: { project: ProjectType}) => {
  
  return(
    <div className='border flex justify-center items-center fixed top-0 left-0 h-[100dvh] w-full z-40 '>
      <div className='text-red-500 rounded-md w-full h-4/5 mx-8 bg-slate-100 z-50 blur-none'>
      <div className='border flex justify-between items-center p-2'>
        {project.name}
      </div>
      <div className='border flex justify-between items-center p-2'>
        {project.info}
      </div>  
      </div>

    </div>
  )
}

export default Project;