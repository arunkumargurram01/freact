import React from "react";
import styles from './CartItem.module.css'

function CardItem(props){

    const {name,price,img,idx,method,qty} = props

    const removeItem = async() => {
        
    }

    return(
        <>
            <div id={styles.mdiv}>
                <div id={styles.imgDiv}>
                    <img src={img} className={styles.ciimg}/>
                </div>
                <div id={styles.detailsDiv}>
                    <h3 className={styles.cih3}>Name     : {name}</h3>
                    <h3 className={styles.cih3}>Price    : {price}</h3>
                    <h3 className={styles.cih3}>Quantity : {qty}</h3>
                </div>
                <button id={styles.Rbtn} onClick={() => method(idx)}>Remove</button>
            {/* in "OnClick" event we must write it in this way or crate a new method and call it, But don't
                directly call the method(method(idx)) bcs if we write dirctly that means we directly calling it
                before cliking the button.
            */}
            </div>
        </>
    )
}

export default CardItem;