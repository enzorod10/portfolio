import { useEffect, useState } from "react";
import styles from './Header.module.css'
import blackLogo from '../../../../public/assets/enzo-cs-logo-black.png'
import menuIcon from '../../../../public/assets/menuIcon.png'
import { useRouter } from "next/router";

function Header({ windowSize }){
    const [menuDisplay, setMenuDisplay] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (menuDisplay){
          document.body.setAttribute('style', 'pointer-events: none')
          document.body.setAttribute('style', 'touch-action: none')
          document.querySelector('header').setAttribute('style', 'pointer-events: auto')
          document.querySelector('.mobileDirectory').classList.add('mobileDirectoryTransition')
        } else {
          document.body.setAttribute('style', 'pointer-events: auto')
        }

        let postsNavBar = document.querySelector('.PostsNav_navContainer__Rg8OH')
        if (menuDisplay){
            if (postsNavBar) { 
                postsNavBar.style.visibility = 'hidden'
                postsNavBar.style.opacity = '0%'
            }
        } else {
            if (postsNavBar) { 
                postsNavBar.style.visibility = 'visible'
                postsNavBar.style.opacity = '100%'
                
            }
        }
    }, [menuDisplay])

      const signOut = () => {
        fetch(`${process.env.REACT_APP_API_LINK}/sign-out`, { mode: 'cors', method: 'post', headers: { "Authorization": `Bearer ${localStorage.getItem('token')}`, "Content-Type": "application/json", } })
            .then(response => {
                return response.json()
            })
            .then(response => {
                localStorage.removeItem('token')
            })
            .catch(err => {
                console.log(err)
            })
    }

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
        background: 'rgba(270, 270, 270, 1)',
        gap: '50px',
        animation: 'expandList 0.5s',
        zIndex: '2'
    }
    
      const mobileDirectoryChildStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 800,
        fontSize: 25,
        textDecoration: 'underline',
        textDecorationColor: 'black',
        textUnderlineOffset: '5px',
        textDecorationThickness: '2px',
      }

      const toggleMenuDisplay = () => {
        menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true)
      }

      const handleMobileMenuClick = (location) => {
        router.push(location)
        toggleMenuDisplay()
      }

    return(
        <header className={styles.header}>
            <div style={{cursor: 'pointer'}} onClick={() => router.push('/blog')} className={styles.logo}>
                <img src={blackLogo.src} alt='Enzo Logo' />
            </div>
            {windowSize.width && windowSize.width > 800 ?
            <div className={styles.rightSide}>
                <div onClick={() => router.push('/blog')} style={{cursor: 'pointer'}}>
                    POSTS
                </div>
                <div onClick={() => router.push('/')} style={{cursor: 'pointer'}}>
                    PORTFOLIO
                </div>
                {localStorage.getItem('token') ? <div style={{cursor: 'pointer'}} onClick={signOut}>SIGN OUT</div> : <div style={{cursor: 'pointer'}} onClick={() => router.push('/blog/log-in')}>LOG IN</div>} 
            </div> :
            <img onClick={toggleMenuDisplay} src={menuIcon.src} alt='Menu icon'/>}
            {menuDisplay && 
            <div className='mobileDirectory' style={mobileDirectoryStyle}>
                <div style={mobileDirectoryChildStyle} onClick={() => handleMobileMenuClick('/blog')}>
                    POSTS
                </div>
                <div style={mobileDirectoryChildStyle} onClick={() => handleMobileMenuClick('/')}>
                    PORTFOLIO
                </div>
                {localStorage.getItem('token') ? <div style={mobileDirectoryChildStyle} onClick={signOut}>SIGN OUT</div> : <div style={mobileDirectoryChildStyle} onClick={() => router.push('/blog/log-in')}>LOG IN</div>}
            </div>}
        </header>
    )
}

export default Header;