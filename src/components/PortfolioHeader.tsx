import blackLogo from '../../public/assets/enzo-cs-logo-black.png'
import { ModeToggle } from './ui/theme-button';

function PortfolioHeader(props){
  return(
      <div className='header hide'>
        <div className='logo' >
          <img src={blackLogo.src} alt='Enzo Logo' />
        </div>
        <div className='directory text-lg hidden sm:flex'>
          <div onClick={() => props.scrollIntoDiv('about')}>
            ABOUT
          </div>
          <div onClick={() => props.scrollIntoDiv('projects')}>
            PROJECTS
          </div>
          <div onClick={() => props.scrollIntoDiv('contact')}>
            CONTACT
          </div>
        </div>
        {/* <ModeToggle /> */}
      </div>
  )
}

export default PortfolioHeader;