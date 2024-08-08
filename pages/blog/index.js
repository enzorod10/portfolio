import { useEffect, useState } from "react";
import Header from "../../src/components/Blog/Header/Header";
import { uid } from "uid";
import styles from '../../src/components/Blog/Home/Home.module.css';
import PostsNav from "../../src/components/Blog/PostsNav/PostsNav.js";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticProps(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`, { mode: 'cors' })
    const posts =  await res.json()
    posts.forEach(post => post.modifiedDate = DateTime.fromJSDate(new Date(post.timestamp)).toLocaleString(DateTime.DATE_FULL))
    posts.reverse()

    const tabsRes = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories`, { mode: 'cors' })
    const formerTabs = await tabsRes.json()
    let tabs = formerTabs.map(item => {
        item.focused = false
        return item;
    })
    tabs.unshift({category: 'All'})
    tabs[0].focused = true
    
    return{
        props: {
            posts,
            tabs
        }
    }
}

function Home({windowSize, posts, tabs}){
    const [ displayedPosts, setDisplayedPosts ] = useState(posts);
    const [modifiedTabs, setModifiedTabs] = useState(tabs)
    const router = useRouter();

    useEffect(() => {
        modifiedTabs.forEach(item => {
            if (item.focused === true){
                if (item.category === 'All'){
                    setDisplayedPosts(posts)
                } else {
                    setDisplayedPosts(item.posts.reduce((acc, init) => acc.concat(posts.find(post => post._id === init)), []))
                }
            }
        })
    }, [posts, modifiedTabs])

    const loadNewTab = (newTabs) => {
        setModifiedTabs(newTabs)
    }

    return(
        <>
        <Head>
            <title>Blog</title>
        </Head>
        <div className={styles.homePageContainer}>
            <Header windowSize={windowSize}/>
            <PostsNav loadNewTab={loadNewTab} totalPostsNumber={posts.length} tabs={modifiedTabs}/>
            <ul className={styles.postContainer}>
                {displayedPosts.map(post => {
                    return displayedPosts.indexOf(post) === 0 ?
                        <li onClick={() => router.push(`/blog/post/${post._id}`)} key={uid()} className={styles.mainPost}>
                            <img className={styles.mainPostImage} src={`assets/blogImages/${post.imageUrl}`} alt='Blog post'/>
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
                    <li onClick={() => router.push(`/blog/post/${post._id}`)} key={uid()} className={styles.otherPost}>
                        <img className={styles.otherPostImage} src={`assets/blogImages/${post.imageUrl}`} alt='Blog post'/> 
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
        </>
    )
}

export default Home;