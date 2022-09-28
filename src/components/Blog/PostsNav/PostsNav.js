import { useEffect, useState } from "react";
import styles from './PostsNav.module.css'
import { uid } from "uid";

export default function PostsNav(props){
    const [ tabs, setTabs ] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_LINK}/categories`, { mode: 'cors' })
            .then(result => {
                return result.json()
            })
            .then(result => {
                let newTabs = result.map(item => {
                    item.focused = false 
                    return item;
                })
                newTabs.unshift({category: 'All'})
                newTabs[0].focused = true
                setTabs(newTabs)
            })
    }, [])

    useEffect(() => {
        props.loadNewTab(tabs)
    }, [props, tabs])

    const handleTabClick = (targetedTab) => {
        let newTabs = tabs.map(item => {
            return item._id === targetedTab._id ? { ...item, focused: true } : { ...item, focused: false }  
        })
        setTabs(newTabs)
        props.loadNewTab(newTabs)
    }
    
    return(
        <div  className={styles.navContainer}>
            {tabs.map(item => {
                return <span onClick={() => handleTabClick(item)} style={item.focused ? { color: 'rgba(255, 255, 255, 0.863)', backgroundColor: 'rgb(19, 19, 19, 0.5)' } : { backgroundColor: 'rgba(250, 250, 250, 0.0)',  color: 'rgba(14, 11, 11)'  }} key={uid()}> {item.category} ( {item.category === 'All' ? props.totalPostsNumber : item.posts && item.posts.length} )</span>
            })}
        </div>
    )
}