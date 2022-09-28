import { useEffect, useState } from "react";
import Header from "../Header/Header.js";
import { uid } from "uid";
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";
import PostsNav from "../PostsNav/PostsNav.js";
import { DateTime } from "luxon";

function Home(){
    const [ posts, setPosts ] = useState([]);
    const [ displayedPosts, setDisplayedPosts ] = useState([]);
    const [ tabs, setTabs ] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_LINK}/posts`, { mode: 'cors' })
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                response.reverse()
                setPosts(response)
            })
    }, [])

    useEffect(() => {
        tabs.forEach(item => {
            if (item.focused === true){
                if (item.category === 'All'){
                    modifyPosts(posts)
                    return
                }
                fetch(`${process.env.REACT_APP_API_LINK}/categories/${item._id}`, { mode: 'cors' })
                    .then(response => {
                        return response.json();
                    })
                    .then(response => {
                        modifyPosts(response.posts)
                    })
            }
        })
    }, [posts, tabs])

    const modifyPosts = (postsToBeModified) => {
        // Modify date
        const tempDisplayedPosts = [ ...postsToBeModified ]
        tempDisplayedPosts.forEach(post => {
            let tempDate = new Date(post.timestamp)
            post.modifiedDate = DateTime.fromJSDate(tempDate).toLocaleString(DateTime.DATE_FULL)
            fetch(post.imageUrl)
                .then(response => {
                    return response.blob()    
                })
                .then(response => {
                    const image = URL.createObjectURL(response)
                    post.media = image
                })
        })
        setTimeout(() => setDisplayedPosts(tempDisplayedPosts), 400)
    }

    const loadNewTab = (newTabs) => {
        setTabs(newTabs)
    }

    return(
        <div className={styles.homePageContainer}>
            <Header/>
            <PostsNav loadNewTab={loadNewTab} totalPostsNumber={posts.length}/>
            <ul className={styles.postContainer}>
                {displayedPosts.map(post => {
                    return displayedPosts.indexOf(post) === 0 ?
                        <li onClick={() => navigate(`/blog/post/${post._id}`)} key={uid()} className={styles.mainPost}>
                            <div className={styles.mainPostImage}>
                                <img src={post.media} alt='Blog figure'/>
                            </div>
                            <div className={styles.mainPostContent}>
                                <div className={styles.mainPostTitle}>
                                    {post.title}
                                </div>
                                <div className={styles.mainPostSummary}>
                                    {post.summary}
                                </div>
                                <div className={styles.mainPostDate}>
                                    {post.modifiedDate}
                                </div>
                            </div>
                        </li>
                    :
                    <li onClick={() => navigate(`/blog/post/${post._id}`)} key={uid()} className={styles.otherPost}>
                        <div className={styles.otherPostImage}>
                            <img src={post.media} alt='Blog figure'/> 
                        </div>
                            <div className={styles.otherPostContent}>
                                <div className={styles.otherPostTitle}>
                                    {post.title}
                                </div>
                                <div className={styles.otherPostSummary}>
                                    {post.summary}
                                </div>
                                <div className={styles.otherPostDate}>
                                    {post.modifiedDate}
                                </div>
                            </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Home;