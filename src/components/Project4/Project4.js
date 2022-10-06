import monitorIcon from '../.././assets/monitorIcon.png'
import tabletIcon from '../.././assets/tabletIcon.png'
import smartphoneIcon from '../.././assets/smartphoneIcon.png'
import monitorBlackIcon from '../.././assets/monitorBlackIcon.png'
import tabletBlackIcon from '../.././assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../.././assets/smartphoneBlackIcon.png'
import linkIcon from '../.././assets/linkIcon.png'
import githubRepoLink from '../.././assets/githubRepoLink.png'
import iSpyGifComputer from './assets/ispy_gif_computer.gif'
import iSpyGifTablet from './assets/ispy_gif_tablet.gif'
import iSpyGifSmartphone  from './assets/ispy_gif_smartphone.gif'
import htmlIcon from '../.././assets/stackImages/htmlIcon.svg'
import cssIcon from '../.././assets/stackImages/cssIcon.svg'
import javascriptIcon from '../.././assets/stackImages/javascriptIcon.svg'
import reactIcon from '../.././assets/stackImages/reactIcon.svg'
import firebaseIcon from '../.././assets/stackImages/firebaseIcon.svg'
import expandIcon from '../.././assets/expandIcon.png'
import collapseIcon from '../.././assets/collapseIcon.png'
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
            <div style={{marginRight: '-30px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: window.screen.width <= 760 && !props.expandedProject.project4 && '35px' }} className='projectTitle'>
                iSpy
                {window.screen.width <= 760 && (!props.expandedProject.project4 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon} alt='collapse' />)}
              </div>
              {((window.screen.width <= 760 && props.expandedProject.project4) || window.screen.width > 760) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://where-s-waldo-590ec.web.app/'> <img style={{width: '16px'}} src={linkIcon} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://where-s-waldo-590ec.web.app/'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/iSpy'> <img style={{width: '16px'}} src={githubRepoLink} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/iSpy'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>The objective is to find the hidden objects in three different maps in as little amount of time as possible. Hidden object locations are safely stored in a database with X {'&'} Y coordinates.  </p>
                  <p>User’s clicks are tracked to determine if clicked location matches the object’s location. Each map has a leaderboard ranking every player based on completion time. </p>
                </div>
                {window.screen.width <= 760 && 
                <div className='projectGif'>
                  <div className='selectProjectView'>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'computer')}>
                      <img src={props.viewMode.project4.computer ? monitorBlackIcon : monitorIcon} alt='Monitor Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'tablet')}>
                      <img src={props.viewMode.project4.tablet ? tabletBlackIcon : tabletIcon} alt='Tablet Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'smartphone')}>
                      <img src={props.viewMode.project4.smartphone ? smartphoneBlackIcon : smartphoneIcon} alt='Smartphone Icon'/>
                    </div>
                  </div>
                  <div className='projectMedia'>
                    <img src={mediaShown} alt='gif of project' />
                  </div>
                </div>}
                <div className='technologyUsed'>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={htmlIcon} alt='html'/>
                        <div className='techText'>HTML</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={cssIcon} alt='css'/>
                        <div className='techText'>CSS</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={javascriptIcon} alt='javascript'/>
                        <div className='techText'>Javascript</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={reactIcon} alt='react'/>
                        <div className='techText'>React</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={firebaseIcon} alt='firebase'/>
                        <div className='techText'>Firebase</div>
                    </div>
                </div>
              </div>}
            </div>
            {window.screen.width > 760 && 
              <div className='projectGif'>
                <div className='selectProjectView'>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'computer')}>
                    <img src={props.viewMode.project4.computer ? monitorBlackIcon : monitorIcon} alt='Monitor Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'tablet')}>
                    <img src={props.viewMode.project4.tablet ? tabletBlackIcon : tabletIcon} alt='Tablet Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project4.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project4', 'smartphone')}>
                    <img src={props.viewMode.project4.smartphone ? smartphoneBlackIcon : smartphoneIcon} alt='Smartphone Icon'/>
                  </div>
                </div>
                <div className='projectMedia'>
                  <img src={mediaShown} alt='gif of project' />
                </div>
              </div>}
          </div>
        </div>
    )
}

export default Project4;