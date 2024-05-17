import React from "react";
import styles from './MainPage.module.css'

//Images
/* import vegitables from '../Images/vegetable.png'
import fruits from './Images/fruits.png' */


function MainCard(props){
    //props destructrings
    const {title, link} = props;
    return(
        <>
            <div className={styles.cdiv}>
                <div className={styles.imgdiv}>
                    <img className={styles.mainImg} src={link} />
                </div>
                <div className={styles.titlediv}>
                    <h5 className={styles.mainh5}>{title}</h5>
                </div>
            </div>
        </>
    )
}

export default MainCard