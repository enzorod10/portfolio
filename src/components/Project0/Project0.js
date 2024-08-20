import monitorIcon from '../../../public/assets/monitorIcon.png'
import tabletIcon from '../../../public/assets/tabletIcon.png'
import smartphoneIcon from '../../../public/assets/smartphoneIcon.png'
import monitorBlackIcon from '../../../public/assets/monitorBlackIcon.png'
import tabletBlackIcon from '../../../public/assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../../../public/assets/smartphoneBlackIcon.png'
import linkIcon from '../../../public/assets/linkIcon.png'
import githubRepoLink from '../../../public/assets/githubRepoLink.png'
import firstPickFitGifComputer from './assets/first_pick_fit_gif_computer.gif'
import firstPickFitGifTablet from './assets/first_pick_fit_gif_tablet.gif'
import firstPickFitGifSmartphone  from './assets/first_pick_fit_gif_smartphone.gif'
import TypeScriptIcon from '../../../public/assets/stackImages/typescriptIcon.svg'
import NextJSIcon from '../../../public/assets/stackImages/nextjsIcon.svg'
import ReduxIcon from '../../../public/assets/stackImages/reduxIcon.svg'
import FirebaseIcon from '../../../public/assets/stackImages/firebaseIcon.svg'
import expandIcon from '../../../public/assets/expandIcon.png'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import { useState, useEffect } from 'react'

function Project0(props){
  const [mediaShown, setMediaShown] = useState(firstPickFitGifSmartphone)

  const projectIntermission = () => {
    props.handleExpandCollapse('project0')
  }

    return(
        <div className=''>
          <div className='flex justify-center items-center sm:p-4 md:p-16'>
            <div style={{marginRight: '-20px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 640 && !props.expandedProject.project0 && '35px' }} className='projectTitle'>
                First Pick Fit
                {props.windowSize.width && props.windowSize.width <= 640 && (!props.expandedProject.project0 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 640 && props.expandedProject.project0) || (props.windowSize.width && props.windowSize.width > 640)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://first-pick-fit.vercel.app/'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://first-pick-fit.vercel.app/'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/first-pick-fit'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/first-pick-fit'>Repo</a></div>
                </div>
                <div className=''>
                  <p>
                  A fitness tracker with drag-and-drop functionality for easy workout creation & tracking.
                  </p>
                  <p>Features an intuitive user interface to quickly create and schedule workouts, programs and exercises. </p>
                </div>
                {props.windowSize.width && props.windowSize.width <= 640 && 
                <div className=''>
                    <img src={mediaShown.src} alt='gif of project' />
                </div>}
                <div className='technologyUsed'>
                <div className='techIconContainer'>
                        <img className='techIcon' src={NextJSIcon.src} alt='html'/>
                        <div className='techText'>NextJS</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={TypeScriptIcon.src} alt='css'/>
                        <div className='techText'>TypeScript</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={ReduxIcon.src} alt='javascript'/>
                        <div className='techText'>Redux</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={FirebaseIcon.src} alt='react'/>
                        <div className='techText'>Firebase</div>
                    </div>
                </div>
              </div>}
            </div>
          {props.windowSize.width && props.windowSize.width > 640 && 
            <div className='w-96'>
              <img src={mediaShown.src} alt='gif of project' />
            </div>}
          </div>
        </div>
    )
}

export default Project0;