import { useEffect, useState } from "react";
import styles from './PostsNav.module.css'
import { uid } from "uid";

export default function PostsNav(props){
    const handleTabClick = (targetedTab) => {
        let newTabs = props.tabs.map(item => {
            return item._id === targetedTab._id ? { ...item, focused: true } : { ...item, focused: false }  
        })
        props.loadNewTab(newTabs)
    }
    
    return(
        <div className={styles.navContainer}>
            {props.tabs.map(item => {
                return <span onClick={() => handleTabClick(item)} style={item.focused ? { color: 'rgba(255, 255, 255, 0.863)', backgroundColor: 'rgb(19, 19, 19, 0.5)' } : { backgroundColor: 'rgba(250, 250, 250, 0.0)',  color: 'rgba(14, 11, 11)'  }} key={uid()}> {item.category} ( {item.category === 'All' ? props.totalPostsNumber : item.posts && item.posts.length} )</span>
            })}
        </div>
    )
}