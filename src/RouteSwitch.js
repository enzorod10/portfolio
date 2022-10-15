import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Blog/Home/Home.js'
import Post from './components/Blog/Post/Post.js'
import LogIn from './components/Blog/LogIn.js'
import App from './App.js'

function RouteSwitch(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/blog' element={<Home />}/>
                <Route path='/blog/post/:id' element={<Post />}/>
                <Route path='/blog/log-in' element={<LogIn />}/>
            </Routes>
        </BrowserRouter>
    )
}

let windowWidth = 0

window.onload = function(){
    windowWidth = window.innerWidth
}

window.onresize = function(){ 
    if (window.innerWidth <= 760 && windowWidth > 760){
        window.location.reload();
    }
    if (window.innerWidth > 760 && windowWidth <= 760){
        window.location.reload();
    }
}

window.onorientationchange = (event) => {
    window.location.reload();
};

export default RouteSwitch;