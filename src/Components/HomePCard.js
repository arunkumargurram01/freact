import React from 'react'
import styles from './HomePCard.module.css'
import Cart from './CartCompo'

/* This compo is used to Display the Product Card in The Home page, only with {Name,Image} */

function HomeProductCard(props){
    const {title,img} = props
    return(
        <>
            <div id={styles.cspborder}>
                <div id={styles.img}>
                    <img src={img} alt='Product' class={styles.imgClass}/>
                </div>
                <div className={styles.titlediv}>
                    {title}
                </div>
            </div>
        </>
    )
}

export default HomeProductCard;