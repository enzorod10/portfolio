import monitorIcon from '../../../public/assets/monitorIcon.png'
import tabletIcon from '../../../public/assets/tabletIcon.png'
import smartphoneIcon from '../../../public/assets/smartphoneIcon.png'
import monitorBlackIcon from '../../../public/assets/monitorBlackIcon.png'
import tabletBlackIcon from '../../../public/assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../../../public/assets/smartphoneBlackIcon.png'
import linkIcon from '../../../public/assets/linkIcon.png'
import githubRepoLink from '../../../public/assets/githubRepoLink.png'
import battleshipGifComputer from './assets/battleship_gif_computer.gif'
import battleshipGifTablet from './assets/battleship_gif_tablet.gif'
import battleshipGifSmartphone  from './assets/battleship_gif_smartphone.gif'
import htmlIcon from '../../../public/assets/stackImages/htmlIcon.svg'
import cssIcon from '../../../public/assets/stackImages/cssIcon.svg'
import javascriptIcon from '../../../public/assets/stackImages/javascriptIcon.svg'
import webpackIcon from '../../../public/assets/stackImages/webpackIcon.svg'
import jestIcon from '../../../public/assets/stackImages/jestIcon.svg'
import expandIcon from '../../../public/assets/expandIcon.png'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import { useState, useEffect } from 'react'

function Project2(props){
  const [mediaShown, setMediaShown] = useState(battleshipGifSmartphone)

  const projectIntermission = () => {
    props.handleExpandCollapse('project2')
  }

  useEffect(() => {
    if (props.viewMode.project2.computer){
      setMediaShown(battleshipGifComputer)
    }
    if (props.viewMode.project2.tablet){
      setMediaShown(battleshipGifTablet)
    }
    if (props.viewMode.project2.smartphone){
      setMediaShown(battleshipGifSmartphone)
    }
  }, [props.viewMode.project2])

    return(
        <div  className='projectContainer'>
          <div className='project'>
            <div style={{marginRight: '-30px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 760 && !props.expandedProject.project2 && '35px' }} className='projectTitle'>
                Battleship: The Game
                {props.windowSize.width && props.windowSize.width <= 760 && (!props.expandedProject.project2 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 760 && props.expandedProject.project2) || (props.windowSize.width && props.windowSize.width > 760)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://enzorod10.github.io/battleship/dist/index.html'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://enzorod10.github.io/battleship/dist/index.html'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/battleship'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/battleship'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>Test-driven battleship game with the ability to play against a bot (with multiple difficulties) or pass-and-play with a friend. </p>
                  <p>Novice bot will fire at random, while expert bot will strategically fire based on the location of the last ship hit. Ships hit/destroyed are tracked accordingly. </p>
                </div>
                {props.windowSize.width && props.windowSize.width <= 760 && 
                <div className='projectGif'>
                  <div className='selectProjectView'>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project2.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project2', 'computer')}>
                      <img src={props.viewMode.project2.computer ? monitorBlackIcon.src : monitorIcon.src} alt='Monitor Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project2.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project2', 'tablet')}>
                      <img src={props.viewMode.project2.tablet ? tabletBlackIcon.src : tabletIcon.src} alt='Tablet Icon'/>
                    </div>
                    <div className='viewIcon' style={{backgroundColor: props.viewMode.project2.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project2', 'smartphone')}>
                      <img src={props.viewMode.project2.smartphone ? smartphoneBlackIcon.src : smartphoneIcon.src} alt='Smartphone Icon'/>
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
                        <img className='techIcon' src={webpackIcon.src} alt='webpack'/>
                        <div className='techText'>Webpack</div>
                    </div>
                    <div className='techIconContainer'>
                        <img className='techIcon' src={jestIcon.src} alt='jest'/>
                        <div className='techText'>Jest</div>
                    </div>
                </div>
              </div>}
            </div>
            {props.windowSize.width && props.windowSize.width > 760 && 
              <div className='projectGif'>
                <div className='selectProjectView'>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project2.computer ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project2', 'computer')}>
                    <img src={props.viewMode.project2.computer ? monitorBlackIcon.src : monitorIcon.src} alt='Monitor Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project2.tablet ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project2', 'tablet')}>
                    <img src={props.viewMode.project2.tablet ? tabletBlackIcon.src : tabletIcon.src} alt='Tablet Icon'/>
                  </div>
                  <div className='viewIcon' style={{backgroundColor: props.viewMode.project2.smartphone ? 'white' : 'transparent'}} onClick={() => props.selectDifferentView('project2', 'smartphone')}>
                    <img src={props.viewMode.project2.smartphone ? smartphoneBlackIcon.src : smartphoneIcon.src} alt='Smartphone Icon'/>
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

export default Project2;