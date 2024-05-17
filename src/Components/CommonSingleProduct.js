import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import Menu from '../Pages/Menu'
import DownNavbar from './DownNavbar'
import HeadLogo from './HeadLogo'
import ProductCard from './ProductCard'
import styles from './CommonSingpleProduct.module.css'
import styles2 from './HomePCard.module.css';
import HomeProductCard from './HomePCard'


//import data from './ProductData'
import Data from './ProductData'
//Images
import cabbage from '../Images/cabbage.png'



//console.log(data);

function CommonSingleProduct(props){
    const {data,parentMethod,Imethod} = props

    const Fdata = Data.Fruits;
    const add = () => {
        //calling parent method from child by passing data to it to store in an array for cart perpose
        parentMethod(data) 
    }
    return(
        <>
        {/* LOGO and MenuBar Code & Components */}
        <div className={styles.cspborderdiv} >
           <ProductCard title={data.name} img={data.img} method={add} Imethod={Imethod} qty={data.qty} price={data.price} pid={data.id}/>
        </div>     
        {/* Realted data JSX */}
        <div id={styles.realtedProductsDiv}>
            <div id={styles.productSliderDiv}>
                {/* Here "/path" (forward slash) will act as a absolute path not a relative path */}
                <div className={styles.cdiv}><NavLink to='/vegetables/carot' className={styles.NavLink}><HomeProductCard  title={Data.homepageData.p1.name} img={Data.homepageData.p1.img} data={Data.homepageData.p1}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/vegetables/cabbage' className={styles.NavLink}><HomeProductCard title={Data.homepageData.p2.name} img={Data.homepageData.p2.img} data={Data.homepageData.p2}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/vegetables/tomato' className={styles.NavLink}><HomeProductCard title={Data.homepageData.p3.name} img={Data.homepageData.p3.img} data={Data.homepageData.p3}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/vegetables/potato' className={styles.NavLink}><HomeProductCard title={Data.homepageData.p4.name} img={Data.homepageData.p4.img} data={Data.homepageData.p4}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/vegetables/cauliflower' className={styles.NavLink}><HomeProductCard title={Data.homepageData.p7.name} img={Data.homepageData.p7.img} data={Data.homepageData.p7}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/vegetables/chili' className={styles.NavLink}><HomeProductCard title={Data.homepageData.p6.name} img={Data.homepageData.p6.img} data={Data.homepageData.p6}/></NavLink></div>
            </div>
            <div id={styles.productSliderDiv}>
                <div className={styles.cdiv}><NavLink to='/fruits/mango' className={styles.NavLink}><HomeProductCard  title={Fdata.p23.name} img={Fdata.p23.img} data={Fdata.p23}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/fruits/kiwi' className={styles.NavLink}><HomeProductCard title={Fdata.p26.name} img={Fdata.p26.img} data={Fdata.p26}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/fruits/grapes' className={styles.NavLink}><HomeProductCard title={Fdata.p27.name} img={Fdata.p27.img} data={Fdata.p27}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/fruits/orange' className={styles.NavLink}><HomeProductCard title={Fdata.p24.name} img={Fdata.p24.img} data={Fdata.p24}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/fruits/pineapple' className={styles.NavLink}><HomeProductCard title={Fdata.p29.name} img={Fdata.p29.img} data={Fdata.p29}/></NavLink></div>
                <div className={styles.cdiv}><NavLink to='/fruits/apricot' className={styles.NavLink}><HomeProductCard title={Fdata.p31.name} img={Fdata.p31.img} data={Fdata.p31}/></NavLink></div>
            </div>
        </div> 
        </>
    )
}
export default CommonSingleProduct;