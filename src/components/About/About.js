import styles from './About.module.css';
import sampleImage from '../../../public/assets/sampleImage.png';
import nodejsIcon from '../../../public/assets/stackImages/nodejsIcon.svg';
import mongodbIcon from '../../../public/assets/stackImages/mongodbIcon.svg';
import gitIcon from '../../../public/assets/stackImages/gitIcon.svg';
import jestIcon from '../../../public/assets/stackImages/jestIcon.svg';
import tailwindIcon from '../../../public/assets/stackImages/tailwindIcon.svg';
import nextjsIcon from '../../../public/assets/stackImages/nextjsIcon.svg';
import reduxIcon from '../../../public/assets/stackImages/reduxIcon.svg';
import blenderIcon from '../../../public/assets/stackImages/blenderIcon.svg';
import typescriptIcon from '../../../public/assets/stackImages/typescriptIcon.svg';
import psqlIcon from '../../../public/assets/stackImages/psqlIcon.svg';
// import loadingIcon from '../../../public/assets/loadingIcon.gif';
// import { uid } from "uid";
// import { DateTime } from 'luxon'; 
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

function About({ posts }){
    // const [ modifiedPosts, setModifiedPosts ] = useState(null);
    // const [ loadingPosts, setLoadingPosts ] = useState(true);
    // const router = useRouter();

    // useEffect(() => {
    //     if (posts.length > 0){
    //         // Modifying date
    //         let tempPosts = posts.map(post => {
    //             const modifiedPost = { ...post}
    //             let tempDate = new Date(post.timestamp)
    //             modifiedPost.modifiedDate = DateTime.fromJSDate(tempDate).toLocaleString(DateTime.DATE_FULL)
    //             return modifiedPost
    //         })
    //         setLoadingPosts(false)
    //         setModifiedPosts(tempPosts)
    //     }
        
    // }, [ posts ])

    return(
        <div className={styles.fullPage}>
            <div className={styles.top}>
                <div className={styles.leftSide}>
                    <img className={styles.image} src={sampleImage.src} alt='sample' />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.infoHeader}>
                        Hello there
                    </div>
                    <div className={styles.infoBody}>
                        I'm Enzo Rodriguez, a New Jersey-based developer with experience
                        in the frontend and backend. I enjoy bringing ideas to life in the browser 
                        through code.
                    </div>
                    {/* <div className={styles.infoCloser}>
                        Full bio <span style={{textDecoration: 'underline', cursor: 'pointer', textDecorationColor: '#007989'}} onClick={() => router.push('/blog/post/634fb4cddcbe82f7bf2fa860')}>here</span>
                    </div> */}
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.iconsContainer}>
                    <div className={styles.iconsContainerTitle}>
                        Languages & Tools
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={typescriptIcon.src} alt='typescript'/>
                        <div className={styles.techText}>TypeScript</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={nextjsIcon.src} alt='nextjs'/>
                        <div className={styles.techText}>NextJs</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={psqlIcon.src} alt='postgreSQL'/>
                        <div className={styles.techText}>PostgreSQL</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={reduxIcon.src} alt='redux'/>
                        <div className={styles.techText}>Redux</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={tailwindIcon.src} alt='tailwind'/>
                        <div className={styles.techText}>Tailwind</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={nodejsIcon.src} alt='nodejs'/>
                        <div className={styles.techText}>NodeJS</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={blenderIcon.src} alt='nextjs'/>
                        <div className={styles.techText}>Blender</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={mongodbIcon.src} alt='mongodb'/>
                        <div className={styles.techText}>MongoDB</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={jestIcon.src} alt='jest'/>
                        <div className={styles.techText}>Jest</div>
                    </div>
                    <div className={styles.techIconContainer}>
                        <img className={styles.techIcon} src={gitIcon.src} alt='git'/>
                        <div className={styles.techText}>Git</div>
                    </div>
                    
                </div>
            </div>
            {/* <div className={styles.bottom}>
                <div className={styles.recentBlogPostsContainer}>
                    <div className={styles.blogSectionTitle}>
                        Recent Blog Posts
                    </div>
                    {loadingPosts ? <div className={styles.blog}>
                        <img style={{height: '20px', width: '20px'}}src={loadingIcon.src} alt={'loadingIcon'}/>
                        <div className={styles.blogInfo}>
                            <div>
                                Loading Posts...
                            </div>
                        </div>
                    </div> :
                    modifiedPosts && modifiedPosts.map(post => {
                        return(
                            <div onClick={() => router.push(`blog/post/${post._id}`)}key={uid()}className={styles.blog}>
                                <img className={styles.blogImage} src={`assets/blogImages/${post.imageUrl}`} alt={post.title}/>
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
            </div> */}
        </div>
    )
}

export default About;