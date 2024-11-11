import { useState } from 'react';
import About from '../src/components/About/About';
import PortfolioHeader from '../src/components/PortfolioHeader/PortfolioHeader';
import Contact from '../src/components/Contact/Contact';
import Project0 from '../src/components/Project0/Project0';
import Project1 from '../src/components/Project1/Project1';
import Project2 from '../src/components/Project2/Project2';
import Project3 from '../src/components/Project3/Project3';
import Head from 'next/head';
import Scene from '../src/components/Scene';

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
    <div className="App p-4">
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
      <div className='border absolute h-full'>
        proj
        <Scene />
      </div>
      {/* <div className='contactSection'>
        <Contact />
      </div> */}
    </div>
    </>
  );
}

export default App;