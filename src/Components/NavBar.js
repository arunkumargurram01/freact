import React,{useState} from 'react'
import styles from '../Pages/menu.module.css'
import { NavLink } from 'react-router-dom'


/*  CSS For Total */

function NavBar(){

    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
       // alert(isToggled)
        setIsToggled((prev) => !isToggled)
  
    }


/*  CSS For Total Nav Bar */
const Nav = {
    width: '120px',
    position: 'fixed',
    zIndex: '-1',
    top: '0',
    left: '0',
    backgroundColor: 'bisque',
    height: '200px',
    overflowX:'hidden',
    transition: '1s',
    padding:'15%',
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'column',
}



    var dynamicId = styles.navdiv;
    var top = ''
    var middle = ''
    var bottom = ''
    var LinksDiv = styles.MainDivBefore
    let nav = styles.navClose



    if(isToggled==true){
         dynamicId = styles.navdiv;
          top = styles.topAfter
          middle =  styles.middleAfter
          bottom = styles.bottomAfter
          LinksDiv = styles.MainDivAfter
          nav = styles.Nav
    }
    
    return(
        <>
        
        <div id={dynamicId} onClick={handleClick}>
            <div className={styles.line} id={top}></div>
            <div className={styles.line} id={middle}></div>
            <div className={styles.line} id={bottom}></div>
        </div>{/* `${isToggled ? "nav-open" : "nav-close" }` 
                `${isToggled? styles.navOpen:styles.navClose}`
        */}

        <div className={nav}>
            <div className={styles.innerNavDiv}>
                <div className={styles.link}><div className={styles.imgDiv}><image src=""/></div><NavLink to="home">Home</NavLink></div>
                <div className={styles.link}><div className={styles.imgDiv}><image src=""/></div><NavLink to="about">About</NavLink></div>
                <div className={styles.link}><div className={styles.imgDiv}><image src=""/></div><NavLink to="privacypolocy">Privacy Polocy</NavLink></div>
                <div className={styles.link}><div className={styles.imgDiv}><image src=""/></div><NavLink to="profile">Profile</NavLink></div>
            </div>
        </div>

        </>
    )
}

export default NavBar;