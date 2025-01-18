import blackLogo from '../../public/assets/enzo-cs-logo-black.png'

function PortfolioHeader(props){
  return(
      <div className='header select-none justify-between items-center flex flex-row z-50 h-16 px-2 sm:px-4 sticky top-0 '>
        <div className='logo' >
          <img src={blackLogo.src} alt='Enzo Logo' />
        </div>
        <div className='directory text-lg hidden sm:flex items-center'>
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
      </div>
  )
}

export default PortfolioHeader;