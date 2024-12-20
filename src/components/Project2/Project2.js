import { useState } from 'react'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import expandIcon from '../../../public/assets/expandIcon.png'
import githubRepoLink from '../../../public/assets/githubRepoLink.png'
import linkIcon from '../../../public/assets/linkIcon.png'
import cssIcon from '../../../public/stackImages/cssIcon.svg'
import htmlIcon from '../../../public/stackImages/htmlIcon.svg'
import javascriptIcon from '../../../public/stackImages/javascriptIcon.svg'
import jestIcon from '../../../public/stackImages/jestIcon.svg'
import webpackIcon from '../../../public/stackImages/webpackIcon.svg'
import battleshipGifSmartphone from './assets/battleship_gif_smartphone.gif'

function Project2(props){
  const [mediaShown, setMediaShown] = useState(battleshipGifSmartphone)

  const projectIntermission = () => {
    props.handleExpandCollapse('project2')
  }
    return(
        <div  className=''>
          <div className='flex justify-center items-center sm:p-4 md:p-16'>
            <div style={{marginRight: '-20px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 640 && !props.expandedProject.project2 && '35px' }} className='projectTitle'>
                Battleship: The Game
                {props.windowSize.width && props.windowSize.width <= 640 && (!props.expandedProject.project2 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 640 && props.expandedProject.project2) || (props.windowSize.width && props.windowSize.width > 640)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://enzorod10.github.io/battleship/dist/index.html'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://enzorod10.github.io/battleship/dist/index.html'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://github.com/enzorod10/battleship'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://github.com/enzorod10/battleship'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>Test-driven battleship game with the ability to play against a bot (with multiple difficulties) or pass-and-play with a friend. </p>
                  <p>Novice bot will fire at random, while expert bot will strategically fire based on the location of the last ship hit. Ships hit/destroyed are tracked accordingly. </p>
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
            {props.windowSize.width && props.windowSize.width > 640 && 
            <div className='w-96'>
              <img className='rounded-md' src={mediaShown.src} alt='gif of project' />
            </div>}
          </div>
        </div>
    )
}

export default Project2;