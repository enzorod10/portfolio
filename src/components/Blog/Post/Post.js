import { useEffect, useState, useRef } from "react";
import Header from "../Header/Header.js";
import { useLocation } from 'react-router-dom'
import styles from './Post.module.css'
import { uid } from "uid";
import { DateTime } from 'luxon'; 
import Code from '../Code/code.js'
import trashIcon from './assets/trashIcon.png'

function RouteSwitch(){
    const [ post, setPost ] = useState({});
    const [ modifiedDate, setModifiedDate ] = useState('');
    const [ newComment, setNewComment ] = useState({author: '', content: ''});
    const [ comments, setComments ] = useState([]);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const location = useLocation() 
    
    const newCommentNameInput = useRef(null)
    const newCommentContentInput = useRef(null)

    useEffect(() => {
        localStorage.getItem('token') && setIsLoggedIn(true)
    }, [])

    useEffect(() => {
        let param = location.pathname.slice(11)
        fetch(`${process.env.REACT_APP_API_LINK}/post/${param}`, {mode: 'cors'})
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPost(response)
            })
    }, [location.pathname])

    useEffect(() => {
        let param = location.pathname.slice(11)
        fetch(`${process.env.REACT_APP_API_LINK}/post/${param}/comments`, {mode: 'cors'})
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    let tempComments = response.map(comment => {
                        let tempCommentDate = new Date(comment.timestamp)
                        comment.timestamp = DateTime.fromJSDate(tempCommentDate).toLocaleString(DateTime.DATE_FULL)
                        return comment
                    })
                    setComments(tempComments)
                })

        let tempDate = new Date(post.timestamp)
        setModifiedDate(DateTime.fromJSDate(tempDate).toLocaleString(DateTime.DATE_FULL))
    }, [location.pathname, post])

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
            let param = location.pathname.slice(11)
            fetch(`${process.env.REACT_APP_API_LINK}/post/${param}/new-comment`, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/JSON'}, body: JSON.stringify(newComment)})
                .then(response => {
                    fetch(`${process.env.REACT_APP_API_LINK}/post/${param}`, {mode: 'cors'})
                        .then(response => {
                            return response.json()
                        })
                        .then(response => {
                            setPost(response)
                        })
                })
                .catch(err => {
                    console.log(err)
                })
            setNewComment({author: '', content: ''})
        }
    }

    const deleteComment = commentId => {
        fetch(`${process.env.REACT_APP_API_LINK}/post/${post._id}/comments/${commentId}`, { method: 'DELETE', mode: 'cors' })
            .then(response => {
                fetch(`${process.env.REACT_APP_API_LINK}/post/${post._id}`, {mode: 'cors'})
                    .then(response => {
                        return response.json()
                    })
                    .then(response => {
                        setPost(response)
                    })
            })
    }

    return(
        <div className={styles.fullPage}>
            <Header />
            <div className={styles.postPage}>
                <div>
                    <h2 className={styles.postTitle}> {post.title} </h2>
                    <div className={styles.postIntroInfo}> Enzo Rodriguez | {modifiedDate}</div>
                </div>
                    {post.content && post.content.map(content => {
                        return <div  key={uid()} className={styles.postContent}> 
                        <h3 style={{ paddingTop: content.sectionTitle !== '' && '20px', borderTop: content.sectionTitle !== '' && '1px rgba(7, 7, 7, 0.245) solid' } }className={styles.postSectionTitle}>  {content.sectionTitle && content.sectionTitle} </h3>
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
                        <textarea ref={newCommentContentInput} value={newComment && newComment.content} maxLength={1000} required onChange={e => setNewComment({...newComment, content: e.target.value})} placeholder='Write a comment..'/>
                        <button onClick={e => handleSubmitComment(e)} style={{cursor: 'pointer', padding: '5px 10px', borderRadius: '5px', border: 'none'}}>Submit</button>
                    </form>

                    <div className='comments' style={{display: 'flex', flexDirection: 'column', gap: '10px', zIndex: '1', position: 'relative' }}>
                        {comments.map(comment => {
                            return (
                                <div key={uid()} className={styles.comment}>
                                    <div className={styles.commentInfo}> 
                                        <span style={{fontWeight: 'bold', fontSize: '14px'}}>{comment.author}</span> - <span style={{fontStyle: 'italic', fontSize: '12px'}}>{comment.timestamp}</span>
                                    </div>
                                    <div style={{fontSize: '13px'}} className={styles.commentContent}>
                                        {comment.content}
                                    </div>
                                    {isLoggedIn && 
                                    <img onClick={() => deleteComment(comment._id)} src={trashIcon} alt='delete comment' style={{position: 'absolute', right: 10, bottom: 10, width: 20, cursor: 'pointer'}}/>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteSwitch;