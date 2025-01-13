import React from 'react'
import { Tech } from '../types'
import { Project as ProjectType } from '../types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from './ui/button';

function ProjectLargeView({ project, isEven }: { project: ProjectType, isEven: boolean  }) {
    return(
        <div>
          <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} justify-center items-center sm:p-4 md:p-16`}>
            <div className={`w-full max-w-lg ${ isEven ? '-mr-5' : '-ml-5'}`}>
              <div className='projectTitle flex justify-center items-center text-slate-100 sm:text-slate-900 bg-[#0079897c] sm:bg-slate-200 w-fit p-0.5 text-lg rounded sm:rounded-none sm:rounded-t mx-auto w-full sm:w-3/4'>
                {project.name}
              </div>
              <div className='relative flex flex-col h-full bg-slate-100 gap-2 px-4 rounded shadow-lg'>
                <div className='flex justify-around border-b border-slate-900 py-2'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href={project.liveLink}> <img style={{width: '16px'}} src={'/assets/linkIcon.png'} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.liveLink}>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href={project.codeLink}> <img style={{width: '16px'}} src={'/assets/githubRepoLink.png'} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.codeLink}>Repo</a></div>
                </div>
                <div>
                    {project.info}
                </div>
                <div className='p-2 flex items-center justify-evenly border-t border-slate-900'>
                  {project.techUsed.map((tech: Tech) => {
                      return (
                        <div key={tech.name} className='flex flex-col items-center gap-0.5 italic text-xs'>
                          <img className='w-8' src={tech.image} alt={tech.name}/>
                          <div>{tech.name}</div>
                        </div>
                  )})}
                </div>    
              </div>
            </div>
            <div className='w-96'>
              <img className='rounded-md' src={project.pc_image} alt={project.name} />
            </div>
          </div>
        </div>
    )
}

const ProjectSmallView = ({ project, setOpenProject}: { project: ProjectType, setOpenProject }) => {
  return(
    <div className='flex justify-center items-center sm:p-4 md:p-16'>
      <div onClick={() => setOpenProject(project)} className='w-full max-w-lg sm:-mr-5'>
        <div className='projectTitle flex justify-center items-center text-slate-100 sm:text-slate-900 bg-[#0079897c] sm:bg-slate-200 w-fit p-0.5 text-lg rounded sm:rounded-none sm:rounded-t mx-auto w-full sm:w-3/4'>
          {project.name}
        </div>
      </div>
    </div>
  )
}

const OpenedProject = ({ project, setOpenProject }: { project: ProjectType, setOpenProject: React.Dispatch<React.SetStateAction<string | undefined>>}) => {
  const [open, onSetOpen] = React.useState(project ? true : false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  return (
      <Dialog open={open} onOpenChange={onSetOpen}>
        <DialogContent onInteractOutside={e => e.preventDefault()}>
          <DialogHeader>
            <div className='flex justify-between items-center'>
              <DialogTitle>{project.name}</DialogTitle>
              <div className='flex justify-around gap-4'>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href={project.liveLink}> <img style={{width: '16px'}} src={'/assets/linkIcon.png'} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.liveLink}>Live</a></div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href={project.codeLink}> <img style={{width: '16px'}} src={'/assets/githubRepoLink.png'} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href={project.codeLink}>Repo</a></div>
              </div>
            </div>
            <DialogDescription className='text-left'>
              {project.info}
            </DialogDescription>
            <div className='overflow-hidden border border-slate-300 rounded-md p-2 flex flex-col gap-2'>
              <div className='h-48 overflow-auto'>
                <img className='object-fit w-full rounded-md rounded-md' src={project.mobile_images[highlightedIndex]} alt={project.name} />
              </div>
              <div className='flex justify-center gap-2'>
                {project.mobile_images.map((image, index) => {
                  return (
                    <img onClick={() => setHighlightedIndex(index)} key={index} src={image} className={`h-12 ${highlightedIndex === index ? 'border border-slate-900 p-0.5' : ''} w-12 rounded-md`} />
                  )
                })}
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center justify-evenly w-full '>
                {project.techUsed.map((tech: Tech) => {
                    return (
                      <div key={tech.name} className='flex flex-col items-center gap-0.5 italic text-xs'>
                        <img className='w-6' src={tech.image} alt={tech.name}/>
                        <div>{tech.name}</div>
                      </div>
                )})}
              </div>
            </div>
          </DialogHeader>
          
          <Button onClick={() => setOpenProject(undefined)} className='bg-red-500' variant="destructive">Close</Button>

        </DialogContent>
      </Dialog>
  )
}

export { ProjectLargeView, ProjectSmallView, OpenedProject };