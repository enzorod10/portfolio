import { useEffect, useState } from 'react';
import Intro from '../src/components/Intro';
import About from '../src/components/About';
import PortfolioHeader from '../src/components/PortfolioHeader';
import Contact from '../src/components/Contact';
import Head from 'next/head';
import { projects } from '../src/data';
import Project, { MobileViewProject } from '../src/components/Project';

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

  const [expandedProject, setExpandedProject] = useState(undefined)

  const handleExpandCollapse = (projectName) => {
    if (projectName === expandedProject) {
      setExpandedProject(undefined) 
      return
    }
    
    setExpandedProject(projects.find(proj => proj.name === projectName))
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="App">
        <Intro scrollIntoDiv={scrollIntoDiv}/>
        <PortfolioHeader windowSize={windowSize} scrollIntoDiv={scrollIntoDiv} />
        <div className='aboutSection'>
          <About/>
        </div>
        <div className='mainSection'>
          <div style={{display: windowSize.width && windowSize.width > 640 ? 'none' : 'block'}} className={'projectSectionHeader'}>Projects</div>
          {
            expandedProject ? <MobileViewProject project={expandedProject}/> :
            projects.map(project => {
              return <Project key={project.name} windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} project={project}/>
            })
          }
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