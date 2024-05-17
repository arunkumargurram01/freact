import React from "react";
import styles from './menu.module.css'

import bar from '../Images/bars-solid.svg'
import settings from '../Images/gear-solid.svg'
import NavBar from "../Components/NavBar";

function Menu(){
    return(
        <>
            
                <div className={styles.profile}>
                    <img src={settings} alt="Pro"/>
                </div>
                <NavBar />

            
        </>
    )
}

export default Menu;