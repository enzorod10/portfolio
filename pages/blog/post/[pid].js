import { useEffect, useState, useRef } from "react";
import Header from "../../../src/components/Blog/Header/Header.js";
import styles from '../../../src/components/Blog/Post/Post.module.css'
import { uid } from "uid";
import { DateTime } from 'luxon'; 
import Code from '../../../src/components/Blog/Code/code.js'
import trashIcon from '../../../src/components/Blog/Post/assets/trashIcon.png'
import { useRouter } from "next/router.js";
import Head from "next/head.js";

export async function getStaticProps({ params }){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/post/${params.pid}`, {mode: 'cors'})
    const post = await res.json()

    const commentsRes = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/post/${params.pid}/comments`, {mode: 'cors'})
    const comments = await commentsRes.json();
    console.log(comments)
    comments.forEach(comment => {
        let tempCommentDate = new Date(comment.timestamp)
        comment.timestamp = DateTime.fromJSDate(tempCommentDate).toLocaleString(DateTime.DATE_FULL)
    })
    
    return{
        props: {
            post, 
            comments
        }
    }
}

export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
      return {
        paths: [],
        fallback: 'blocking',
      }
    }
  
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/posts`, { mode: 'cors' })
    const posts =  await res.json()
  
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = posts.map((post) => ({
      params: { pid: post._id },
    }))
  
    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
  }

function Post({ windowSize, post, comments }){
    const [ newComment, setNewComment ] = useState({author: '', content: ''});
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const router = useRouter();
    const { pid } = router.query;
    const [updatedComments, setUpdatedComments] = useState(comments);

    const newCommentNameInput = useRef(null)
    const newCommentContentInput = useRef(null)

    useEffect(() => {
        localStorage.getItem('token') && setIsLoggedIn(true)
    }, [])

    useEffect(() => {
        newCommentNameInput.current.style.borderBottom = '1px black solid'
        newCommentContentInput.current.style.borderBottom = '1px black solid'
    }, [ newComment ])

    const handleSubmitComment = e => {
        e.preventDefault()
        if (newComment.author.trim() === ''){
            newCommentNameInput.current.style.borderBottom = '1px red solid'
        }else if (newComment.content.trim() === ''){
            newCommentContentInput.current.style.borderBottom = '1px red solid'
        } else {
            fetch(`${process.env.NEXT_PUBLIC_API_LINK}/post/${pid}/new-comment`, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/JSON'}, body: JSON.stringify(newComment)})
            setUpdatedComments(prevState => [newComment, ...prevState])
            setNewComment({author: '', content: ''})
        }
    }

    const deleteComment = commentId => {
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}/post/${post._id}/comments/${commentId}`, { method: 'DELETE', mode: 'cors' })
        setUpdatedComments(item => updatedComments.filter(com => com.id !== commentId))
    }

    return(
        <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <div className={styles.fullPage}>
            <Header windowSize={windowSize} />
            <div className={styles.postPage}>
                <div>
                    <h2 className={styles.postTitle}> {post.title} </h2>
                    <div className={styles.postIntroInfo}> Enzo Rodriguez | {DateTime.fromJSDate(new Date(post.timestamp)).toLocaleString(DateTime.DATE_FULL)}</div>
                </div>
                    {post.content && post.content.map(content => {
                        return <div  key={content._id} className={styles.postContent}> 
                        <h3 style={{ paddingTop: content.sectionTitle !== '' ? '20px' : null, borderTop: content.sectionTitle !== '' ? '1px rgba(7, 7, 7, 0.245) solid' : null } } className={styles.postSectionTitle}>  {content.sectionTitle && content.sectionTitle} </h3>
                        {content.body.map(paragraph => {
                            return paragraph.type ? <Code key={uid()} code={paragraph.text} language={paragraph.type}/> : <div className={styles.postParagraph} key={uid()}> {paragraph.text} </div>
                        })}
                        </div>
                    })}
                <div className={styles.commentSection}>
                    <h2 style={{display: 'flex', justifyContent:'center', alignItems: 'center', gap: '5px'}}className={styles.commentSectionTitle}>
                        Comments <span style={{fontSize: '16px'}}> ( {comments.length} )</span>
                    </h2>

                    <form className={styles.newCommentForm}>
                        <input ref={newCommentNameInput} value={newComment && newComment.author} maxLength={25} required onChange={e => setNewComment({...newComment, author: e.target.value})} placeholder='Name' id="name" />
                        <textarea className={styles.textArea} ref={newCommentContentInput} value={newComment && newComment.content} maxLength={1000} required onChange={e => setNewComment({...newComment, content: e.target.value})} placeholder='Write a comment..'/>
                        <button onClick={e => handleSubmitComment(e)} style={{cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', border: 'none', color: 'black'}}>Submit</button>
                    </form>

                    <div className='comments' style={{display: 'flex', flexDirection: 'column', gap: '10px', zIndex: '1', position: 'relative' }}>
                        {updatedComments.map(comment => {
                            return (
                                <div key={uid()} className={styles.comment}>
                                    <div className={styles.commentInfo}> 
                                        <span style={{fontWeight: 'bold', fontSize: '14px'}}>{comment.author}</span> - <span style={{fontStyle: 'italic', fontSize: '12px'}}>{comment.timestamp}</span>
                                    </div>
                                    <div style={{fontSize: '13px'}} className={styles.commentContent}>
                                        {comment.content}
                                    </div>
                                    {isLoggedIn && 
                                    <img onClick={() => deleteComment(comment._id)} src={trashIcon.src} alt='delete comment' style={{position: 'absolute', right: 10, bottom: 10, width: 20, cursor: 'pointer'}}/>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Post;