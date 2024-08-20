import { useEffect, useState } from 'react'
import blackLogo from '../../../public/assets/enzo-cs-logo-black.png'
import menuIcon from '../../../public/assets/menuIcon.png'

function PortfolioHeader(props){
  const [menuDisplay, setMenuDisplay] = useState(false);

  useEffect(() => {
    if (menuDisplay){
      document.body.setAttribute('style', 'pointer-events: none')
      document.body.setAttribute('style', 'touch-action: none')
      document.querySelector('.header').setAttribute('style', 'pointer-events: auto')
      document.querySelector('.mobileDirectory').classList.add('mobileDirectoryTransition')
    } else {
      document.body.setAttribute('style', 'pointer-events: auto')
    }
  }, [menuDisplay])

  const mobileDirectoryStyle = {
    position: 'absolute',
    width: '100%',
    left: 0,
    height: 'calc(100vh - 65px)',
    top: 0,
    margin: '65px 0px',
    paddingTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(26, 26, 26)',
    color: 'white',
    gap: '50px',
    animation: 'expandList 0.5s',
  }

  const mobileDirectoryChildStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: 25,
    textDecoration: 'underline',
    textDecorationColor: 'white',
    textUnderlineOffset: '5px',
    textDecorationThickness: '2px',
  }

  const toggleMenuDisplay = () => {
    const location = document.querySelector('.aboutSection').getBoundingClientRect().top + window.scrollY - 65;
    window.pageYOffset < location && window.scrollTo({top: location, behavior: 'smooth'})
    menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true)
  }

  const handleMobileMenuClick = (target) => {
    props.scrollIntoDiv(target)
    toggleMenuDisplay()
  }

  const handleLogoClick = () => {
    props.scrollIntoDiv('home')
    if (menuDisplay){
      setMenuDisplay(false)
    }
  }

  return(
      <div className='header hide'>
        <div className='logo' onClick={handleLogoClick}>
          <img src={blackLogo.src} alt='Enzo Logo' />
        </div>
        {props.windowSize.width && props.windowSize.width > 800 ? 
          <div className='directory'>
            <div onClick={() => props.scrollIntoDiv('about')}>
              ABOUT
            </div>
            <div onClick={() => props.scrollIntoDiv('projects')}>
              PROJECTS
            </div>
            <div onClick={() => props.scrollIntoDiv('contact')}>
              CONTACT
            </div>
          </div> :
          <img onClick={toggleMenuDisplay} src={menuIcon.src} alt='Menu icon'/>
        }
        {menuDisplay && <div className='mobileDirectory' style={mobileDirectoryStyle}>
          <div style={mobileDirectoryChildStyle} onClick={() => handleMobileMenuClick('about')}>
            ABOUT
          </div>
          <div style={mobileDirectoryChildStyle} onClick={() => handleMobileMenuClick('projects')}>
            PROJECTS
          </div>
          <div style={mobileDirectoryChildStyle} onClick={() => handleMobileMenuClick('contact')}>
            CONTACT
          </div>
          <div style={mobileDirectoryChildStyle}>
            <a style={{color: 'white', textDecorationColor: 'white'}} href='https://github.com/enzorod10'>
              GITHUB
            </a>
          </div>
        </div>}
      </div>
  )
}

export default PortfolioHeader;