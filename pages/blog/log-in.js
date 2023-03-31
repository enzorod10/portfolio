import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import Header from '../../src/components/Blog/Header/Header.js'

function LogIn({ windowSize }){
    const [ user, setUser ] = useState({
        username: '',
        password: ''
    })
    const [ errorMessage, setErrorMessage ] = useState('')
    const router = useRouter();

    useEffect(() => {
        setErrorMessage('')
    }, [ user ])


    const handleAuthentication = ev => {
        ev.preventDefault()
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/log-in`, { mode: 'cors', method: 'post', headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) })
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response.token){
                    localStorage.setItem('token', response.token)
                    router.push('/blog')
                } else {
                    setErrorMessage('Username or password is incorrect')
                }
            })
    }
    
    return(
        <div>
            <Header windowSize={windowSize}/>
            <div style={{padding: '20px'}}>
                <p style={{fontStyle: 'italic'}}>
                    For admin use only
                </p>
                <form style={{display: 'flex', flexDirection: 'column', width: 'fit-content' }}>
                    <input style={{padding: '2px 5px', marginTop: '5px', border: 'none', borderBottom: '1px black solid'}} placeholder='Username' type='text' id='username' onChange={ev => setUser({username: ev.target.value, password: user.password, isLoggedIn: false})}/>
                    <input style={{padding: '2px 5px', marginTop: '5px', border: 'none', borderBottom: '1px black solid'}} placeholder='Password' type='password' id='password' onChange={ev => setUser({username: user.username, password: ev.target.value, isLoggedIn: false})}/>
                    <button style={{width: 'fit-content', margin: '5px auto', padding: '2px 5px'}}type='submit' onClick = {ev => handleAuthentication(ev)}> Log in </button>    
                    <div style={{color: 'red', fontSize: 'smaller', maxWidth: 'fit-content' }} className="authErrorMessage">{errorMessage}</div>
                </form>
            </div>
            
        </div>
    )
}

export default LogIn;