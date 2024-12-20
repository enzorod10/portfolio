import { useState } from 'react'
import collapseIcon from '../../../public/assets/collapseIcon.png'
import expandIcon from '../../../public/assets/expandIcon.png'
import githubRepoLink from '../../../public/assets/githubRepoLink.png'
import linkIcon from '../../../public/assets/linkIcon.png'
import cssIcon from '../../../public/stackImages/cssIcon.svg'
import firebaseIcon from '../../../public/stackImages/firebaseIcon.svg'
import htmlIcon from '../../../public/stackImages/htmlIcon.svg'
import javascriptIcon from '../../../public/stackImages/javascriptIcon.svg'
import reactIcon from '../../../public/stackImages/reactIcon.svg'
import solteractGifTablet from './assets/solteract_gif_tablet.gif'

function Project1(props){
  const [mediaShown, setMediaShown] = useState(solteractGifTablet)

  const projectIntermission = () => {
    props.handleExpandCollapse('project1')
  }

    return(
        <div className=''>
          <div className='flex justify-center items-center sm:p-4 md:p-16'>
          {props.windowSize.width && props.windowSize.width > 640 && 
            <div className='w-96'>
              <img className='rounded-md' src={mediaShown.src} alt='gif of project' />
            </div>}
            <div className='sm:w-[500px] w-full h-full m-0 sm:-ml-8'>
              <div onClick={projectIntermission} style={{height: props.windowSize.width && props.windowSize.width <= 640 && !props.expandedProject.project1 && '35px' }} className='projectTitle'>
                Solteract
                {props.windowSize.width && props.windowSize.width <= 640 && (!props.expandedProject.project1 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon.src} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon.src} alt='collapse' />)}
              </div>
              {((props.windowSize.width && props.windowSize.width <= 640 && props.expandedProject.project1) || (props.windowSize.width && props.windowSize.width > 640)) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://soterak-1f634.web.app'> <img style={{width: '16px'}} src={linkIcon.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://soterak-1f634.web.app'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://www.github.com/enzorod10/solteract'> <img style={{width: '16px'}} src={githubRepoLink.src} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://www.github.com/enzorod10/solteract'>Repo</a></div>
                </div>
                <div className=''>
                  <p>A social media platform that gives users the ability to express themselves in their own personal space. Inspired by twitter. </p>
                  <p>Users have their own timelines {'&'} feeds, are able to communicate with each other through transmissions (tweets) which can be text and/or media. Users can customize their profile name, username, header, {'&'} profile picture. </p>
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
                    <div className='techIconContainer'>
                        <img className='techIcon' src={firebaseIcon.src} alt='firebase'/>
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