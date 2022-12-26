import { useNavigate } from 'react-router-dom';
import styles from './About.module.css'
import sampleImage from '../.././assets/sampleImage.png'
import htmlIcon from '../.././assets/stackImages/htmlIcon.svg'
import cssIcon from '../.././assets/stackImages/cssIcon.svg'
import javascriptIcon from '../.././assets/stackImages/javascriptIcon.svg'
import reactIcon from '../.././assets/stackImages/reactIcon.svg'
import nodejsIcon from '../.././assets/stackImages/nodejsIcon.svg'
import mongodbIcon from '../.././assets/stackImages/mongodbIcon.svg'
import gitIcon from '../.././assets/stackImages/gitIcon.svg'
import webpackIcon from '../.././assets/stackImages/webpackIcon.svg'
import jestIcon from '../.././assets/stackImages/jestIcon.svg'
import firebaseIcon from '../.././assets/stackImages/firebaseIcon.svg'
import tailwindIcon from '../.././assets/stackImages/tailwindIcon.svg'
import loadingIcon from '../.././assets/loadingIcon.gif'
import { uid } from "uid";
import { DateTime } from 'luxon'; 
import { useEffect, useState } from 'react';

function About(){
    const [ posts, setPosts ] = useState([]);
    const [ modifiedPosts, setModifiedPosts ] = useState(null);
    const [ loadingPosts, setLoadingPosts ] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {
        // fetch all posts
        grabPosts()
    }, [])

    const grabPosts = () => {
        fetch(`${process.env.REACT_APP_API_LINK}/posts`, { mode: 'cors' })
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                response.reverse()
                setPosts(response.slice(0, window.screen.height > 810 ? 3 : 2))
            })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        if (posts.length > 0){
            // Modifying date
            let tempPosts = posts.map(post => {
                const modifiedPost = { ...post}
                let tempDate = new Date(post.timestamp)
                modifiedPost.modifiedDate = DateTime.fromJSDate(tempDate).toLocaleString(DateTime.DATE_FULL)
                return modifiedPost
            })
            setLoadingPosts(false)
            setModifiedPosts(tempPosts)
        }
        
    }, [ posts ])


    return(
        <div className={styles.fullPage}>
            <div className={styles.top}>
                <div className={styles.leftSide}>
                    <img className={styles.image} src={sampleImage} alt='sample' />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.infoHeader}>
                        Hello there
                    </div>
                    <div className={styles.infoBody}>
                        I'm Enzo Rodriguez, a New Jersey-based frontend developer with experience
                        in the backend. I enjoy bringing ideas to life in the browser 
                        through code. 
                    </div>
                    <div className={styles.infoCloser}>
                        Full bio <span style={{textDecoration: 'underline', cursor: 'pointer', textDecorationColor: '#007989'}} onClick={() => navigate('/blog/post/634fb4cddcbe82f7bf2fa860')}>here</span>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.iconsContainer}>
                    <div className={styles.iconsContainerTitle}>
                        Languages & Tools
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={htmlIcon} alt='html'/>
                        <div className={styles.techText}>HTML</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={cssIcon} alt='css'/>
                        <div className={styles.techText}>CSS</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={javascriptIcon} alt='javascript'/>
                        <div className={styles.techText}>JS</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={reactIcon} alt='react'/>
                        <div className={styles.techText}>React</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={nodejsIcon} alt='nodejs'/>
                        <div className={styles.techText}>NodeJS</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={jestIcon} alt='jest'/>
                        <div className={styles.techText}>Jest</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={webpackIcon} alt='webpack'/>
                        <div className={styles.techText}>Webpack</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={gitIcon} alt='git'/>
                        <div className={styles.techText}>Git</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={mongodbIcon} alt='mongodb'/>
                        <div className={styles.techText}>MongoDB</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={tailwindIcon} alt='tailwind'/>
                        <div className={styles.techText}>Tailwind</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={firebaseIcon} alt='firebase'/>
                        <div className={styles.techText}>Firebase</div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.recentBlogPostsContainer}>
                    <div className={styles.blogSectionTitle}>
                        Recent Blog Posts
                    </div>
                    {loadingPosts ? <div className={styles.blog}>
                        <img style={{height: '20px', width: '20px'}}src={loadingIcon} alt={'loadingIcon'}/>
                        <div className={styles.blogInfo}>
                            <div>
                                Loading Posts...
                            </div>
                        </div>
                    </div> :
                    modifiedPosts && modifiedPosts.map(post => {
                        return(
                            <div onClick={() => navigate(`blog/post/${post._id}`)}key={uid()}className={styles.blog}>
                                <img className={styles.blogImage} src={post.imageUrl} alt={post.title}/>
                                <div className={styles.blogInfo}>
                                    <div className={styles.blogName}>
                                        {post.title}
                                    </div>
                                    <div className={styles.blogDate}>
                                        {post.modifiedDate}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default About;