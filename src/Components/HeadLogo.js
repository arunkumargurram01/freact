import React from "react";

import Menu from "../Pages/Menu";

import styles from '../App.module.css'

function HeadLogo(){
    return(
        <>
            {/* LOGO and MenuBar Code & Components */}
            <div className={styles.Logo}>
                <div className={styles.Ldiv}>
                <h1>Fastoo</h1>
                </div>
                <div className={styles.menu}>
                     <Menu />
                </div>
            </div>
        </>
    )
}
export default HeadLogo;