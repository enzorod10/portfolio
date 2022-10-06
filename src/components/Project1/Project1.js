import monitorIcon from '../.././assets/monitorIcon.png'
import tabletIcon from '../.././assets/tabletIcon.png'
import smartphoneIcon from '../.././assets/smartphoneIcon.png'
import monitorBlackIcon from '../.././assets/monitorBlackIcon.png'
import tabletBlackIcon from '../.././assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../.././assets/smartphoneBlackIcon.png'
import linkIcon from '../.././assets/linkIcon.png'
import githubRepoLink from '../.././assets/githubRepoLink.png'
import solteractGifComputer from './assets/solteract_gif_computer.gif'
import solteractGifTablet from './assets/solteract_gif_tablet.gif'
import solteractGifSmartphone from './assets/solteract_gif_smartphone.gif'
import htmlIcon from '../.././assets/stackImages/htmlIcon.svg'
import cssIcon from '../.././assets/stackImages/cssIcon.svg'
import javascriptIcon from '../.././assets/stackImages/javascriptIcon.svg'
import reactIcon from '../.././assets/stackImages/reactIcon.svg'
import firebaseIcon from '../.././assets/stackImages/firebaseIcon.svg'
import expandIcon from '../.././assets/expandIcon.png'
import collapseIcon from '../.././assets/collapseIcon.png'
import { useState, useEffect } from 'react'

function Project1(props){
  const [mediaShown, setMediaShown] = useState(solteractGifTablet)

  const projectIntermission = () => {
    props.handleExpandCollapse('project1')
  }

  useEffect(() => {
    if (props.viewMode.project1.computer){
      setMediaShown(solteractGifComputer)
    }
    if (props.viewMode.project1.tablet){
      setMediaShown(solteractGifTablet)
    }
    if (props.viewMode.project1.smartphone){
      setMediaShown(solteractGifSmartphone)
    }
  }, [props.viewMode.project1])

    return(
        <div className='projectContainer'>
          <div className='project'>
          {window.screen.width > 760 && 
              <div className='projectGif'>
                <div className='selectProjectView'>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project1.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project1', 'computer')}>
                    <img src={props.viewMode.project1.computer ? monitorBlackIcon : monitorIcon} alt='Monitor Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project1.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project1', 'tablet')}>
                    <img src={props.viewMode.project1.tablet ? tabletBlackIcon : tabletIcon} alt='Tablet Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project1.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project1', 'smartphone')}>
                    <img src={props.viewMode.project1.smartphone ? smartphoneBlackIcon : smartphoneIcon} alt='Smartphone Icon'/>
                  </div>
                </div>
                <div className='projectMedia'>
                  <img src={mediaShown} alt='gif of project' />
                </div>
              </div>}
            <div style={{marginLeft: '-30px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: window.screen.width <= 760 && !props.expandedProject.project1 && '35px' }} className='projectTitle'>
                Solteract
                {window.screen.width <= 760 && (!props.expandedProject.project1 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon} alt='collapse' />)}
              </div>
              {((window.screen.width <= 760 && props.expandedProject.project1) || window.screen.width > 760) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://soterak-1f634.web.app'> <img style={{width: '16px'}} src={linkIcon} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://soterak-1f634.web.app'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://www.github.com/enzorod10/solteract'> <img style={{width: '16px'}} src={githubRepoLink} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://www.github.com/enzorod10/solteract'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>A social media platform that gives users the ability to express themselves in their own personal space. Inspired by twitter. </p>
                  <p>Users have their own timelines {'&'} feeds, are able to communicate with each other through transmissions (tweets) which can be text and/or media. Users can customize their profile name, username, header, {'&'} profile picture. </p>
                </div>
                {window.screen.width <= 760 && 
                <div className='projectGif'>
                  <div className='selectProjectView'>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project1.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project1', 'computer')}>
                      <img src={props.viewMode.project1.computer ? monitorBlackIcon : monitorIcon} alt='Monitor Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project1.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project1', 'tablet')}>
                      <img src={props.viewMode.project1.tablet ? tabletBlackIcon : tabletIcon} alt='Tablet Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project1.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project1', 'smartphone')}>
                      <img src={props.viewMode.project1.smartphone ? smartphoneBlackIcon : smartphoneIcon} alt='Smartphone Icon'/>
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
          </div>
        </div>
    )
}

export default Project1;