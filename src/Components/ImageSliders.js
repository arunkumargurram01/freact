import React from 'react'
import styles from './Components.module.css'

//Importing Images
import img1 from '../Images/sp1.png'
import img2 from '../Images/sp2.png'
import img3 from '../Images/sp3.png'
import img4 from '../Images/sp4.png'


function ImageSlider(){
    return(
        <>
        <div id={styles.slideContainer}>
            <div className={styles.slides} id={styles.firstImg}><img className="sliderImg" src={img1}/></div>
            <div className={styles.slides}><img className="sliderImg" src={img2}/></div>
            <div className={styles.slides}><img className="sliderImg" src={img3}/></div>
            <div className={styles.slides}><img className="sliderImg" src={img4}/></div>
        </div>
        </>
    )
}

export default ImageSlider;
