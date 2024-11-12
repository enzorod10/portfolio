import { useState } from 'react';
import About from '../src/components/About/About';
import PortfolioHeader from '../src/components/PortfolioHeader/PortfolioHeader';
import Contact from '../src/components/Contact/Contact';
import Project0 from '../src/components/Project0/Project0';
import Project1 from '../src/components/Project1/Project1';
import Project2 from '../src/components/Project2/Project2';
import Project3 from '../src/components/Project3/Project3';
import Head from 'next/head';
import Project from '../src/components/Project';

function App() {
  const [expandedProject, setExpandedProject] = useState({
    project0: false,
    project1: false,
    project2: false,
    project3: false,
  })

  return (
    <>
    <Head>
      <title>Portfolio</title>
    </Head>
    <div className="App p-4 border-8 h-[100dvh] relative">
      <PortfolioHeader />
      <About/>
      
      {/* <div className='flex flex-col gap-4 p-4 bg-[#1a1a1a]'>
        <Project3 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} />
        <Project0 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} />
        <Project1 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} />
        <Project2 windowSize={windowSize} handleExpandCollapse={handleExpandCollapse} expandedProject={expandedProject} />
        <div className='projectOverlay'>
        </div>
      </div> */}
      <div className='border w-full h-full p-4 mt-4 max-w-6xl justify-evenly'>
        <div >
          Projects
        </div>
        <div className='flex border w-full p-4 mt-4 gap-4 max-w-6xl mx-auto flex-wrap justify-evenly'>
          {[0, 1, 2, 3].map(proj => {
            return(
                <div key={proj} className='border w-32 h-32 p-2 rounded-md'>
                  Project {proj}
                </div>
            )
          })}
        </div>
      </div>
      {/* <div className='contactSection'>
        <Contact />
      </div> */}
    </div>
    </>
  );
}

export default App;