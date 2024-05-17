import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Components.module.css'
import homeIcon from '../Images/home.png'


function DownNavbar(){

    return(
        <>
            <div className={styles.DN_div}>
                <div className={styles.opt_div}>
                    <img src={homeIcon}></img>
                </div>
                <div className={styles.opt_div}>
                    <img src={homeIcon}></img>
                </div>
                <div className={styles.opt_div}>
                    <img src={homeIcon}></img>
                </div>

            </div>
        </>
    )
}

export default DownNavbar