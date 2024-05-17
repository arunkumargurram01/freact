import React from "react";
import styles from './Cart.module.css'

import instagram from '../Images/insta.png'
import meta from '../Images/meta.png'
import twitter from '../Images/twitter.png'

function Footer(){
    return(
        <>
            <center>
            <div id={styles.fmdiv}>
                <h3 id={styles.h3}>Fastoo</h3>
                <p>Make a good choice</p>
                <div id={styles.fsmicons}>
                    <div className={styles.fsmicon} >
                        <img src={instagram} />
                    </div>
                    <div className={styles.fsmicon} >
                        <img src={meta} />
                    </div>
                    <div className={styles.fsmicon} >
                        <img src={twitter} />
                    </div>
                </div>
                <p>@2024 reserved all copy rights</p>
            </div>
            </center>
        </>
    )
}

export default Footer;