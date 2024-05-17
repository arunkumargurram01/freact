import React from "react";
import styles from '../App.module.css'
import { NavLink,Link } from "react-router-dom";


import MainCard from '../Components/MainCard';
import ProductCard from '../Components/ProductCard';
import LabelCard from '../Components/LabelCard';
import HomeProductCard from "../Components/HomePCard";

//Images
import Vegitables from '../Images/vegetables.png'
import fruits from '../Images/fruits.png'

import ImageSlider from '../Components/ImageSliders';

//Data importing from datapage
import data from '../Components/ProductData'

import Footer from '../Components/Footer'


function Home(){
  return(
        <>      
    {/* Main Card Components */}
    <div className={styles.maindiv}>
     <Link to='vegetables' className={styles.linkcompo}><MainCard title="Vegitables" link={Vegitables}/></Link>
     <Link to='fruits' className={styles.linkcompo}><MainCard title="Fruits" link={fruits}/></Link>
    </div>


    {/* Image Slider */}
    <div className={styles.imgSLider}>
      <ImageSlider/>
    </div>


    {/* Product Card Components */}
    <div className={styles.Productsdiv}>
    <NavLink to='vegetables/carot' className={styles.border}><HomeProductCard  title={data.homepageData.p1.name} img={data.homepageData.p1.img} data={data.homepageData.p1}/></NavLink>
    <NavLink to='vegetables/cabbage' className={styles.border}><HomeProductCard title={data.homepageData.p2.name} img={data.homepageData.p2.img} data={data.homepageData.p2}/></NavLink>
    <NavLink to='vegetables/tomato' className={styles.border}><HomeProductCard  title={data.homepageData.p3.name}  img={data.homepageData.p3.img} data={data.homepageData.p3}/></NavLink>
    <NavLink to='vegetables/potato' className={styles.border}><HomeProductCard  title={data.homepageData.p4.name} img={data.homepageData.p4.img} data={data.homepageData.p4}/></NavLink>
    <NavLink to='fruits/grapes' className={styles.border}><HomeProductCard   title={data.homepageData.p5.name}  img={data.homepageData.p5.img} data={data.homepageData.p5}/></NavLink>
    <NavLink to='vegetables/chili' className={styles.border}><HomeProductCard  title={data.homepageData.p6.name}  img={data.homepageData.p6.img} data={data.homepageData.p6}/></NavLink>
    <NavLink to='vegetables/cauliflower' className={styles.border}><HomeProductCard title={data.homepageData.p7.name}img={data.homepageData.p7.img} data={data.homepageData.p7}/></NavLink>
    <NavLink to='fruits/straberry' className={styles.border}><HomeProductCard title={data.homepageData.p8.name}img={data.homepageData.p8.img} data={data.homepageData.p8}/></NavLink>
    <NavLink to='vegetables/onion' className={styles.border}><HomeProductCard title={data.homepageData.p9.name}img={data.homepageData.p9.img} data={data.homepageData.p9}/></NavLink>
    <NavLink to='vegetables/bottlegourd' className={styles.border}><HomeProductCard title={data.homepageData.p10.name}img={data.homepageData.p10.img} data={data.homepageData.p10}/></NavLink>
    <NavLink to='fruits/apple' className={styles.border}><HomeProductCard title={data.homepageData.p11.name}img={data.homepageData.p11.img} data={data.homepageData.p11}/></NavLink>
    <NavLink to='fruits/orange' className={styles.border}><HomeProductCard title={data.homepageData.p12.name}img={data.homepageData.p12.img} data={data.homepageData.p12}/></NavLink>
 </div>
      

    {/* Label Card Component */}
    <div id={styles.LabelContainer}>
      {/* <LabelCard /> */}
    </div>

    <Footer/>
        </>
    )
}
export default Home