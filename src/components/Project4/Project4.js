import monitorIcon from '../../../public/assets/monitorIcon.png'
import tabletIcon from '../../../public/assets/tabletIcon.png'
import smartphoneIcon from '../../../public/assets/smartphoneIcon.png'
import monitorBlackIcon from '../../../public/assets/monitorBlackIcon.png'
import tabletBlackIcon from '../../../public/assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../../../public/assets/smartphoneBlackIcon.png'
import linkIcon from '../../../public/assets/linkIcon.png'
import githubRepoLink from '../../../public/assets/githubRepoLink.png'
import iSpyGifComputer from './assets/ispy_gif_computer.gif'
import iSpyGifTablet from './assets/ispy_gif_tablet.gif'
import iSpyGifSmartphone  from './assets/ispy_gif_smartphone.gif'
import htmlIcon from '../../../public/assets/stackImages/htmlIcon.svg'
import cssIcon from '../../../public/assets/stackImages/cssIcon.svg'
import javascriptIcon from '../../../public/assets/stackImages/javascriptIcon.svg'
import reactIcon from '../../../public/assets/stackImages/reactIcon.svg'
import firebaseIcon from '../../../public/assets/stackImages/firebaseIcon.svg'
import expandIcon from '../../../public/assets/expandIcon.png'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import { useState, useEffect } from 'react'

function Project4(props){
  const [mediaShown, setMediaShown] = useState(iSpyGifComputer)

  const projectIntermission = () => {
    props.handleExpandCollapse('project4')
  }

  useEffect(() => {
    if (props.viewMode.project4.computer){
      setMediaShown(iSpyGifComputer)
    }
    if (props.viewMode.project4.tablet){
      setMediaShown(iSpyGifTablet)
    }
    if (props.viewMode.project4.smartphone){
      setMediaShown(iSpyGifSmartphone)
    }
  }, [props.viewMode.project4])

    return(
        <div  className='projectContainer'>
          <div className='project'>
            <div style={{marginRight: '-20px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 760 && !props.expandedProject.project4 && '35px' }} className='projectTitle'>
                iSpy
                {props.windowSize.width && props.windowSize.width <= 760 && (!props.expandedProject.project4 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 760 && props.expandedProject.project4) || (props.windowSize.width && props.windowSize.width > 760)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://where-s-waldo-590ec.web.app/'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://where-s-waldo-590ec.web.app/'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/iSpy'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/iSpy'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>The objective is to find the hidden objects in three different maps in as little amount of time as possible. Hidden object locations are safely stored in a database with X {'&'} Y coordinates.  </p>
                  <p>User’s clicks are tracked to determine if clicked location matches the object’s location. Each map has a leaderboard ranking every player based on completion time. </p>
                </div>
                {props.windowSize.width && props.windowSize.width <= 760 && 
                <div className='projectGif'>
                  <div className='selectProjectView'>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'computer')}>
                      <img src={props.viewMode.project4.computer ? monitorBlackIcon.src : monitorIcon.src} alt='Monitor Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'tablet')}>
                      <img src={props.viewMode.project4.tablet ? tabletBlackIcon.src : tabletIcon.src} alt='Tablet Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'smartphone')}>
                      <img src={props.viewMode.project4.smartphone ? smartphoneBlackIcon.src : smartphoneIcon.src} alt='Smartphone Icon'/>
                    </div>
                  </div>
                  <div className='projectMedia'>
                    <img src={mediaShown.src} alt='gif of project' />
                  </div>
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
                    <div className='techIconContainer'>
                        <img className='techIcon' src={firebaseIcon.src} alt='firebase'/>
                        <div className='techText'>Firebase</div>
                    </div>
                </div>
              </div>}
            </div>
            {props.windowSize.width && props.windowSize.width > 760 && 
              <div className='projectGif'>
                <div className='selectProjectView'>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'computer')}>
                    <img src={props.viewMode.project4.computer ? monitorBlackIcon.src : monitorIcon.src} alt='Monitor Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'tablet')}>
                    <img src={props.viewMode.project4.tablet ? tabletBlackIcon.src : tabletIcon.src} alt='Tablet Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'smartphone')}>
                    <img src={props.viewMode.project4.smartphone ? smartphoneBlackIcon.src : smartphoneIcon.src} alt='Smartphone Icon'/>
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

export default Project4;