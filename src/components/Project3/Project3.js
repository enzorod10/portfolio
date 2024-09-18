import monitorIcon from '../../../public/assets/monitorIcon.png'
import tabletIcon from '../../../public/assets/tabletIcon.png'
import smartphoneIcon from '../../../public/assets/smartphoneIcon.png'
import monitorBlackIcon from '../../../public/assets/monitorBlackIcon.png'
import tabletBlackIcon from '../../../public/assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../../../public/assets/smartphoneBlackIcon.png'
import linkIcon from '../../../public/assets/linkIcon.png'
import githubRepoLink from '../../../public/assets/githubRepoLink.png'
import cvProjectGifComputer from './assets/cv_project_gif_computer.gif'
import cvProjectGifTablet from './assets/cv_project_gif_tablet.gif'
import cvProjectGifSmartphone  from './assets/cv_project_gif_smartphone.gif'
import htmlIcon from '../../../public/assets/stackImages/htmlIcon.svg'
import cssIcon from '../../../public/assets/stackImages/cssIcon.svg'
import javascriptIcon from '../../../public/assets/stackImages/javascriptIcon.svg'
import reactIcon from '../../../public/assets/stackImages/reactIcon.svg'
import expandIcon from '../../../public/assets/expandIcon.png'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import { useState, useEffect } from 'react'

function Project3(props){
  const [mediaShown, setMediaShown] = useState(cvProjectGifSmartphone)

  const projectIntermission = () => {
    props.handleExpandCollapse('project3')
  }

    return(
      <div className=''>
        <div className='flex justify-center items-center sm:p-4 md:p-16'>
          {props.windowSize.width && props.windowSize.width > 640 && 
            <div className='w-96'>
              <img className='rounded-md' src={mediaShown.src} alt='gif of project' />
            </div>}
            <div className='sm:w-[500px] w-full h-full m-0 sm:-ml-8'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 640 && !props.expandedProject.project3 && '35px' }} className='projectTitle'>
                Kick Realm
                {props.windowSize.width && props.windowSize.width <= 640 && (!props.expandedProject.project3 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 640 && props.expandedProject.project3) || (props.windowSize.width && props.windowSize.width > 640)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://kickrealm.com'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://kickrealm.com/'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/kickrealm'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/kickrealm'>Repo</a></div>
                </div>
                <div className=''>
                  <p>A platform for Kick streamers and viewers, where users can invest in streamers using virtual currency, track real-time analytics, and view upcoming stream schedules. Streamers can apply for affiliation, and users can apply for admin or mod roles, fostering a vibrant and interactive community.</p>
                </div>
                {props.windowSize.width && props.windowSize.width <= 640 && 
                  <div className=''>
                    <img src={mediaShown.src} alt='gif of project' />
                  </div>}
                <div className='technologyUsed'>
                  <div className='techIconContainer'>
                        <img className='techIcon' src={htmlIcon.src} alt='html'/>
                        <div className='techText'>HTML</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={cssIcon.src} alt='css'/>
                        <div className='techText'>CSS</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={javascriptIcon.src} alt='javascript'/>
                        <div className='techText'>Javascript</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={reactIcon.src} alt='react'/>
                        <div className='techText'>React</div>
                    </div>
                </div>
              </div>}
            </div>
          </div>
        </div>
    )
}

export default Project3;