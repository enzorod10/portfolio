import { useEffect, useState } from 'react';
import Intro from '../src/components/Intro';
import About from '../src/components/About';
import PortfolioHeader from '../src/components/PortfolioHeader';
import Contact from '../src/components/Contact';
import Head from 'next/head';
import { projects } from '../src/data';
import { ProjectLargeView, ProjectSmallView, OpenedProject } from '../src/components/Project';

function App({ windowSize }) {
    // Depending on scroll location, header will hide or show
    useEffect(() => {
      const location = document.querySelector('.aboutSection').getBoundingClientRect().top
      if (location < 0){
        document.querySelector('.header').classList.remove('hide')
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    const handleScroll = () => {
      if (document.querySelector('.aboutSection')){
        const location = document.querySelector('.aboutSection').getBoundingClientRect().top
        if (location){
          if (location > 285 && !document.querySelector('.header').classList.contains('hide')){
            document.querySelector('.header').classList.add('hide')
          } 
          else if (location < 220 && document.querySelector('.header').classList.contains('hide')){
            document.querySelector('.header').classList.remove('hide')
          }
        }
      } 
    }

    const scrollIntoDiv = destination => {
      if (destination === 'home'){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      }
      if (destination === 'about'){
        const location = document.querySelector('.header').classList.contains('hide') ? document.querySelector('.aboutSection').getBoundingClientRect().top + window.scrollY - 0.6 : document.querySelector('.aboutSection').getBoundingClientRect().top + window.scrollY - 65;
        window.scrollTo({top: location, behavior: 'smooth'})
      }
      if (destination === 'projects'){
        const location = document.querySelector('.header').classList.contains('hide') ? document.querySelector('.mainSection').getBoundingClientRect().top + window.scrollY - 30 : document.querySelector('.mainSection').getBoundingClientRect().top + window.scrollY - 65;
        window.scrollTo({top: location, behavior: 'smooth'})
      }
      if (destination === 'contact'){
        const location = document.querySelector('.header').classList.contains('hide') ? document.querySelector('.contactSection').getBoundingClientRect().top + window.scrollY - 30 : document.querySelector('.contactSection').getBoundingClientRect().top + window.scrollY - 65;
        window.scrollTo({top: location, behavior: 'smooth'})
      }
    }

  const [openProject, setOpenProject] = useState(undefined)

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <div className="App">
          <Intro scrollIntoDiv={scrollIntoDiv}/>
          <PortfolioHeader windowSize={windowSize} scrollIntoDiv={scrollIntoDiv} />
          <div className='aboutSection'>
            <About/>
          </div>
          <div className='mainSection flex flex-col p-4 gap-4 pb-0 sm:gap-0 sm:p-0'>
              {openProject && <OpenedProject project={openProject} setOpenProject={setOpenProject}/>}
              {projects.map((project, index) => {
                return (
                  windowSize.width < 640 ? <ProjectSmallView key={project.name} project={project} setOpenProject={setOpenProject}/> : 
                  <ProjectLargeView key={project.name} project={project} isEven={index % 2 === 0}/>
                )
              })}
            <div className='projectOverlay'>
            </div>
          </div>
          <div className='contactSection'>
            <Contact />
          </div>
        </div>
    </>
  );
}

export default App;