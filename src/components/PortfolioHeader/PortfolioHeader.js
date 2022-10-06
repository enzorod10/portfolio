import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blackLogo from '../.././assets/enzo-cs-logo-black.png'
import menuIcon from '../.././assets/menuIcon.png'

function PortfolioHeader(props){
  const [menuDisplay, setMenuDisplay] = useState(false)
  const navigate = useNavigate()

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'rgba(270, 270, 270, 1)',
    gap: '100px',
    animation: 'expandList 0.5s'
  }

  const mobileDirectoryChildStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 25,
    textDecoration: 'underline',
    textDecorationColor: 'black',
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
          <img src={blackLogo} alt='Enzo Logo' />
        </div>
        {window.screen.width > 800 ? 
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
            <div onClick={() => navigate('./blog')}>
              BLOG
            </div>
          </div> :
          <img onClick={toggleMenuDisplay} src={menuIcon} alt='Menu icon'/>
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
          <div style={mobileDirectoryChildStyle} onClick={() => navigate('./blog')}>
            BLOG
          </div>
          <div style={mobileDirectoryChildStyle} onClick={() => navigate('./blog')}>
            GITHUB
          </div>
        </div>}
      </div>
  )
}

export default PortfolioHeader;