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
import TypeScriptIcon from '../../../public/assets/stackImages/typescriptIcon.svg'
import NextJSIcon from '../../../public/assets/stackImages/nextjsIcon.svg'
import ReduxIcon from '../../../public/assets/stackImages/reduxIcon.svg'
import FirebaseIcon from '../../../public/assets/stackImages/firebaseIcon.svg'
import expandIcon from '../../../public/assets/expandIcon.png'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import { useState, useEffect } from 'react'

function Project0(props){
  const [mediaShown, setMediaShown] = useState(cvProjectGifSmartphone)

  const projectIntermission = () => {
    props.handleExpandCollapse('project0')
  }

  useEffect(() => {
    if (props.viewMode.project0.computer){
      setMediaShown(cvProjectGifComputer)
    }
    if (props.viewMode.project0.tablet){
      setMediaShown(cvProjectGifTablet)
    }
    if (props.viewMode.project0.smartphone){
      setMediaShown(cvProjectGifSmartphone)
    }
  }, [props.viewMode.project0])

    return(
        <div  className='projectContainer'>
          <div className='project'>
          <div style={{marginRight: '-20px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 760 && !props.expandedProject.project0 && '35px' }} className='projectTitle'>
                First Pick Fit
                {props.windowSize.width && props.windowSize.width <= 760 && (!props.expandedProject.project0 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 760 && props.expandedProject.project0) || (props.windowSize.width && props.windowSize.width > 760)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://first-pick-fit.vercel.app/'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://first-pick-fit.vercel.app/'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/first-pick-fit'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/first-pick-fit'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>
                  A fitness tracker app using NextJs, Firebase, and Redux Tool Kit. 
                  The app features drag-and-drop functionality for easy workout creation, and
                   includes a database implemented with Firebase for user authentication and 
                   data storage. 
                  </p>
                  <p>Users can create custom workouts, add exercises, and select 
                   pre-made programs, which can be scheduled on a calendar. One notable aspect of the app is its intuitive user
                    interface, which makes it easy for users to quickly create and schedule workouts and programs. </p>
                </div>
                {props.windowSize.width && props.windowSize.width <= 760 && 
                <div className='projectGif'>
                  <div className='selectProjectView'>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project0.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project5', 'computer')}>
                      <img src={props.viewMode.project0.computer ? monitorBlackIcon.src : monitorIcon.src} alt='Monitor Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project0.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project5', 'tablet')}>
                      <img src={props.viewMode.project0.tablet ? tabletBlackIcon.src : tabletIcon.src} alt='Tablet Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project0.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project5', 'smartphone')}>
                      <img src={props.viewMode.project0.smartphone ? smartphoneBlackIcon.src : smartphoneIcon.src} alt='Smartphone Icon'/>
                    </div>
                  </div>
                  <div className='projectMedia'>
                    <img src={mediaShown.src} alt='gif of project' />
                  </div>
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
          {props.windowSize.width && props.windowSize.width > 760 && 
              <div className='projectGif'>
                <div className='selectProjectView'>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project0.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project0', 'computer')}>
                    <img src={props.viewMode.project0.computer ? monitorBlackIcon.src : monitorIcon.src} alt='Monitor Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project0.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project0', 'tablet')}>
                    <img src={props.viewMode.project0.tablet ? tabletBlackIcon.src : tabletIcon.src} alt='Tablet Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project0.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project0', 'smartphone')}>
                    <img src={props.viewMode.project0.smartphone ? smartphoneBlackIcon.src : smartphoneIcon.src} alt='Smartphone Icon'/>
                  </div>
                </div>
                <div className='projectMedia'>
                  <img src={mediaShown.src} alt='gif of project' />
                </div>
              </div>}
            
          </div>
        </div>
    )
}

export default Project0;