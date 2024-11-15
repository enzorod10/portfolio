import { useEffect, useState } from 'react';
// import Intro from '../src/components/Intro/Intro';
import About from '../src/components/About/About';
import PortfolioHeader from '../src/components/PortfolioHeader/PortfolioHeader';
import Contact from '../src/components/Contact/Contact';
import Project0 from '../src/components/Project0/Project0';
import Project1 from '../src/components/Project1/Project1';
import Project2 from '../src/components/Project2/Project2';
import Project3 from '../src/components/Project3/Project3';
import Head from 'next/head';
import Project from '../src/components/Project';
import { projects } from '../src/components/data';
import Scene from '../src/components/Scene';

export async function getStaticProps(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`, { mode: 'cors' })
  const posts =  await res.json()
  posts.reverse()
  return{
      props: {
          posts
      }
  }
}
// export async function getStaticProps(){
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`, { mode: 'cors' })
//   const posts =  await res.json()
//   posts.reverse()
//   return{
//       props: {
//           posts
//       }
//   }
// }
// removed posts props from app, since blog isn't a feature at the moment

export default function App({ windowSize }) {

  const [viewMode, setViewMode] = useState({
    project0: {
      computer: false,
      tablet: false,
      smartphone: true
    },
    project1: {
      computer: false,
      tablet: true,
      smartphone: false
    },
    project2: {
      computer: false,
      tablet: false,
      smartphone: true
    },
    project3: {
      computer: false,
      tablet: false,
      smartphone: true
    },
    project4: {
      computer: true,
      tablet: false,
      smartphone: false
    }
  })

    // Depending on scroll location, header will hide or show
    useEffect(() => {
      const location = document.querySelector('.aboutSection')?.getBoundingClientRect().top
      if (location < 0){
        document.querySelector('.header')?.classList.remove('hide')
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
      if (document.querySelector('.aboutSection')){
        const location = document.querySelector('.aboutSection')?.getBoundingClientRect().top
        if (location){
          if (location > 285 && !document.querySelector('.header')?.classList.contains('hide')){
            document.querySelector('.header')?.classList.add('hide')
          } 
          else if (location < 220 && document.querySelector('.header')?.classList.contains('hide')){
            document.querySelector('.header')?.classList.remove('hide')
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

  // For smaller screen widths, expand/collapse system on projects

  const [expandedProject, setExpandedProject] = useState({
    project0: false,
    project1: false,
    project2: false,
    project3: false,
  })

  const handleExpandCollapse = (projectName) => {
    let tempExpandedProject = {...expandedProject}

    for (let x in expandedProject){
      if (x === projectName){
        !tempExpandedProject[x] ? tempExpandedProject[x] = true : tempExpandedProject[x] = false
      } else {
        tempExpandedProject[x] = false
      }
    }

    setExpandedProject(tempExpandedProject)
  }

  const selectDifferentView = (project, selectedDevice) => {
      let tempViewMode = JSON.parse(JSON.stringify(viewMode));
      let count = 0;
      for (let i in tempViewMode[project]){
        i === selectedDevice ? tempViewMode[project][i] = true : tempViewMode[project][i] = false;
        count++;
        if (count === 2){
          setViewMode({...tempViewMode})
        }
      }
  }

  return (
    <>
    <Head>
      <title>Portfolio</title>
    </Head>
    <div className="relative border-8 border-red-500 h-[100dvh] max-h-[100dvh]">
      <Scene />
      {/* <Intro scrollIntoDiv={scrollIntoDiv}/> */}
      {/* <PortfolioHeader windowSize={windowSize} scrollIntoDiv={scrollIntoDiv} /> */}
      <div className=''>
        {/* <About posts={posts.slice(0, windowSize.width && windowSize.width > 810 ? 3 : 2)}/> */}
        {/* about section with blog posts removed */}
        {/* <About posts={posts.slice(0, windowSize.width && windowSize.width > 810 ? 3 : 2)}/> */}
        <About/>
      </div>
      <div className='mainSection'>
        <div style={{display: windowSize.width && windowSize.width > 640 ? 'none' : 'block'}} className={'projectSectionHeader'}>Projects</div>
        {projects.map(proj => {
          return(
            <div key={proj}>
              <Project project={proj} windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} selectDifferentView={selectDifferentView} viewMode={viewMode} />
            </div>
          )
        })}
        {/* <Project0 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} selectDifferentView={selectDifferentView} viewMode={viewMode}/>
        <Project1 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} selectDifferentView={selectDifferentView} viewMode={viewMode}/>
        <Project2 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} selectDifferentView={selectDifferentView} viewMode={viewMode}/>
        <Project3 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} selectDifferentView={selectDifferentView} viewMode={viewMode}/> */}
        <div className='projectOverlay'>
        </div>
      </div>
      {/* <div className='contactSection'>
        <Contact />
      </div> */}
    </div>
    </>
  );
}
