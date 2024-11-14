import linkIcon from '../../public/assets/linkIcon.png'
import githubRepoLink from '../../public/assets/githubRepoLink.png'
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
              <div onClick={projectIntermission} style={{height: windowSize.width && windowSize.width <= 640 && !expandedProject.project1 && '35px' }} className='projectTitle'>
                {project.name}
                {windowSize.width && windowSize.width <= 640 && (!expandedProject.project1 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((windowSize.width && windowSize.width <= 640 && expandedProject.project1) || (windowSize.width && windowSize.width > 640)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://soterak-1f634.web.app'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://soterak-1f634.web.app'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://www.github.com/enzorod10/solteract'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://www.github.com/enzorod10/solteract'>Repo</a></div>
                </div>
                <div className=''>
                  {project.info}
                </div>
                {windowSize.width && windowSize.width <= 640 && 
                  <div className=''>
                    <img src={`/projects/${project.image}`} alt='gif of project' />
                  </div>}
                <div className='technologyUsed'>
                  {project.techUsed.map(tech => {
                      return (
                        <div key={tech.name} className='flex flex-col items-center justify-center gap-1'>
                          <img className='w-8' src={`/assets/stackImages/${tech.image}`} alt={tech.name}/>
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