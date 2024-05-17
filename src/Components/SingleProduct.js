import React, { useEffect, useState } from 'react'

import Menu from '../Pages/Menu'
import DownNavbar from './DownNavbar'
import HeadLogo from './HeadLogo'
import ProductCard from './ProductCard'


import styles from './SingleProduct.module.css'

//Images
import carrot from '../Images/carrot.png'


function SingleProduct(props){
    const product ={
        id:1,
        name : 'carrot',
        price: 30,
        img:carrot
    }

//Method To pass Product Details to ParentCompo Method(cartItems) when btn clicked
    const add = () => {
        //here parentMethod is a var that contain "cartItems" Parent Method.
        props.parentMethod(product);
    }
    return(
        <>
        {/* LOGO and MenuBar Code & Components */}
        <div className={styles.borderdiv} >

           <ProductCard title={product.name}img={carrot} method={add}/>
          {/*  <button onClick={add}>Pass To Parent</button>
             */}
        </div>      
        </>
    )
}
export default SingleProduct;