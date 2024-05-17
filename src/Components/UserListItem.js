import React from "react";
import styles from './SingleProduct.module.css'

function UserListItem(props){

    const {name,role} = props;

    return(
        <>
            <div id={styles.ulimdiv}>
                <div id={styles.ulipicdiv}>
                    <div id={styles.ulipic}></div>
                </div>
                <div id={styles.ulidetails}>
                    <h3>{name}</h3>
                    <h4>{role}</h4>
                </div>
            </div>
        </>
    )
}

export default UserListItem;