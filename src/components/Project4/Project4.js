import monitorIcon from '../.././assets/monitorIcon.png'
import tabletIcon from '../.././assets/tabletIcon.png'
import smartphoneIcon from '../.././assets/smartphoneIcon.png'
import monitorBlackIcon from '../.././assets/monitorBlackIcon.png'
import tabletBlackIcon from '../.././assets/tabletBlackIcon.png'
import smartphoneBlackIcon from '../.././assets/smartphoneBlackIcon.png'
import linkIcon from '../.././assets/linkIcon.png'
import githubRepoLink from '../.././assets/githubRepoLink.png'
import solteractVideo from '../.././assets/SOLTERACT_VIDEO.gif'
import expandIcon from '../.././assets/expandIcon.png'
import collapseIcon from '../.././assets/collapseIcon.png'

function Project4(props){
  const projectIntermission = () => {
    props.handleExpandCollapse('project4')
  }

    return(
        <div  className='projectContainer'>
          <div className='project'>
            <div style={{marginRight: '-30px'}} className='projectInfo'>
              <div onClick={projectIntermission} style={{height: window.screen.width <= 760 && !props.expandedProject.project4 && '35px' }} className='projectTitle'>
                Solteract
                {window.screen.width <= 760 && (!props.expandedProject.project4 ? <img style={{position: 'absolute', right: '10%'}} src={expandIcon} alt='expand' /> : <img style={{position: 'absolute', right: '10%'}} src={collapseIcon} alt='collapse' />)}
              </div>
              {((window.screen.width <= 760 && props.expandedProject.project4) || window.screen.width > 760) &&
              <div className='aboutProject'>
                <div className='projectLinks'>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://www.youtube.com'> <img style={{width: '16px'}} src={linkIcon} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='https://soterak-1f634.web.app'>Live</a></div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}> <a href='https://www.youtube.com'> <img style={{width: '16px'}} src={githubRepoLink} alt='Link to live website'/> </a> <a style={{textUnderlineOffset: '2px', color: '#0c0032'}} href='www.youtube.com'>Repo</a></div>
                </div>
                <div className='projectDescription'>
                  <p>I built a social media platform that gives users the ability to express themselves in their own personal space. Inspired by twitter. </p>
                  <p>Users have their own timelines {'&'} feeds, are able to communicate with each other through transmissions (tweets) which can be text and/or media. Users can customize their profile name, username, header, {'&'} picture. </p>
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
                    <img src={solteractVideo} alt='gif of project' />
                  </div>
                </div>}
                <div className='technologyUsed'>
                    <svg width='50px' viewBox="0 0 128 128">
                      <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
                    </svg>
                    <svg width='50px' viewBox="0 0 128 128">
                      <path fill="#131313" d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path><path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
                    </svg>
                    <svg width='50px' viewBox="0 0 128 128">
                      <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
                    </svg>
                    <svg width='50px' viewBox="0 0 128 128">
                      <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                    </svg>
                    <svg width='50px' viewBox="0 0 128 128">
                      <g fill="#f58220"><path d="M11.4 115.62H8.25v-24.4H22.5v3.01H11.4v8.02h10.04v2.93H11.42v10.44h-.02zM27.92 94.74c-.43.43-.96.64-1.57.64-.61 0-1.15-.21-1.57-.64-.43-.43-.64-.96-.64-1.57s.21-1.15.64-1.57c.43-.43.96-.64 1.57-.64.61 0 1.15.21 1.57.64s.64.96.64 1.57-.22 1.11-.64 1.57zm0 20.88h-3.14v-16.7h3.14v16.7zM34.47 115.62h-3.14v-16.7h3.01v2.72h.13c.32-.91.96-1.65 1.97-2.24.99-.59 1.95-.88 2.88-.88s1.71.13 2.34.4l-1.2 2.93c-.4-.16-.96-.24-1.68-.24-1.15 0-2.13.45-3.01 1.36-.88.91-1.31 2.08-1.31 3.52v9.13zM49.23 116.18c-2.53 0-4.58-.85-6.15-2.53s-2.37-3.81-2.37-6.37c0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H43.85c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.25.89-2.8 1.34-4.61 1.34zm4.51-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM68.1 116.18c-1.28 0-2.42-.27-3.44-.83-1.01-.53-1.76-1.23-2.26-2.05h-.13v2.32h-3.01v-24.4h3.14v7.7l-.13 2.32h.13c.51-.83 1.25-1.49 2.26-2.05 1.01-.53 2.16-.83 3.44-.83 2.16 0 4.02.85 5.6 2.56 1.57 1.71 2.34 3.81 2.34 6.34s-.77 4.64-2.34 6.34c-1.58 1.73-3.44 2.58-5.6 2.58zm-.54-2.87c1.47 0 2.72-.56 3.76-1.65 1.04-1.09 1.57-2.56 1.57-4.37s-.53-3.28-1.57-4.37c-1.04-1.09-2.29-1.65-3.76-1.65s-2.74.53-3.76 1.63c-1.01 1.09-1.55 2.56-1.55 4.4 0 1.84.51 3.3 1.55 4.4 1.05 1.07 2.3 1.61 3.76 1.61zM83.84 116.18c-1.79 0-3.25-.51-4.45-1.55-1.2-1.01-1.79-2.37-1.79-4.05 0-1.81.69-3.25 2.1-4.29 1.41-1.04 3.14-1.55 5.22-1.55 1.84 0 3.36.35 4.53 1.01v-.48c0-1.23-.43-2.21-1.25-2.96-.85-.75-1.87-1.12-3.09-1.12-.91 0-1.73.21-2.48.64-.75.43-1.25 1.01-1.52 1.79l-2.88-1.23c.4-1.01 1.15-1.92 2.29-2.77 1.15-.85 2.64-1.28 4.5-1.28 2.13 0 3.92.61 5.33 1.87 1.41 1.25 2.1 3.01 2.1 5.28v10.12h-3.01v-2.32h-.13c-1.23 1.93-3.07 2.89-5.47 2.89zm.51-2.87c1.31 0 2.48-.48 3.52-1.44 1.07-.96 1.6-2.1 1.6-3.44-.88-.72-2.21-1.09-4-1.09-1.52 0-2.66.32-3.44.99-.77.67-1.17 1.44-1.17 2.32 0 .83.35 1.47 1.07 1.95.71.47 1.51.71 2.42.71zM101.19 116.18c-1.87 0-3.41-.45-4.61-1.36a7.894 7.894 0 01-2.66-3.41l2.8-1.17c.88 2.1 2.4 3.14 4.53 3.14.99 0 1.79-.21 2.4-.64.61-.43.93-1.01.93-1.71 0-1.09-.77-1.84-2.29-2.21L98.9 108c-1.07-.27-2.08-.8-3.04-1.55-.96-.77-1.44-1.79-1.44-3.09 0-1.47.67-2.66 1.97-3.6 1.31-.93 2.85-1.39 4.66-1.39 1.47 0 2.8.35 3.94 1.01 1.17.67 2 1.63 2.48 2.88l-2.72 1.12c-.61-1.47-1.89-2.21-3.81-2.21-.93 0-1.71.19-2.34.59-.64.4-.96.91-.96 1.57 0 .96.75 1.6 2.21 1.95l3.3.77c1.57.37 2.72.99 3.49 1.87.75.88 1.12 1.89 1.12 3.01 0 1.49-.61 2.74-1.84 3.76-1.21 1.01-2.79 1.49-4.73 1.49zM117.58 116.18c-2.53 0-4.58-.85-6.15-2.53-1.57-1.68-2.37-3.81-2.37-6.37 0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H112.2c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.26.89-2.8 1.34-4.61 1.34zm4.5-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM39.25 59.42l7.69-49.28c.27-1.68 2.52-2.08 3.31-.57l8.26 15.47-19.26 34.38zm54.67 11.97L86.58 26c-.22-1.41-1.99-1.99-3.01-.97L37.35 71.39l25.59 14.36c1.59.88 3.58.88 5.17 0l25.81-14.36zM73.14 31.8l-5.92-11.27c-.66-1.28-2.47-1.28-3.14 0l-26.03 46.4L73.14 31.8z"></path></g>
                    </svg>
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
                  <img src={solteractVideo} alt='gif of project' />
                </div>
              </div>}
          </div>
        </div>
    )
}

export default Project4;