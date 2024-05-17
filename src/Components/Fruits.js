import React, {useEffect, useRef, useState} from "react";
import { NavLink} from "react-router-dom";
import styles from '../App.module.css'
import HomeProductCard from "./HomePCard";

//importing data
import Data from './ProductData'

function Fruits() {

    const [inpVal, setInpVal] = useState('');

    //using "useRef" to autofocus input element
    const inputRef = useRef(null);


    const data = Data.Fruits;

    //filtering data by given text in input to serach the item by name
    const filteredFruits = Object.values(data).filter(fruit =>
        fruit.name.toLowerCase().includes(inpVal.toLowerCase())
    );

    //Auto focusing the Input element
    useEffect(() => {
        inputRef.current.focus();
    },[])

    const text = (e) => {
        setInpVal(e.target.value)
    }

    
    return(
        <>
         <center>
            <input type='text' placeholder="search..." ref={inputRef} value={inpVal} onChange={text} ></input>
         </center>
        { inpVal=='' ? (
            <div className={styles.Productsdiv}>
                
                <NavLink to='apple' className={styles.border}><HomeProductCard  title={data.p22.name} img={data.p22.img} data={data.p22}/></NavLink>
                <NavLink to='mango' className={styles.border}><HomeProductCard title={data.p23.name} img={data.p23.img} data={data.p23}/></NavLink>
                <NavLink to='orange' className={styles.border}><HomeProductCard  title={data.p24.name}  img={data.p24.img} data={data.p24}/></NavLink>
                <NavLink to='banana' className={styles.border}><HomeProductCard  title={data.p25.name} img={data.p25.img} data={data.p25}/></NavLink>
                <NavLink to='kiwi' className={styles.border}><HomeProductCard   title={data.p26.name}  img={data.p26.img} data={data.p26}/></NavLink>
                <NavLink to='grapes' className={styles.border}><HomeProductCard  title={data.p27.name}  img={data.p27.img} data={data.p27}/></NavLink>
                <NavLink to='cherry' className={styles.border}><HomeProductCard  title={data.p28.name}  img={data.p28.img} data={data.p28}/></NavLink>
                <NavLink to='pineapple' className={styles.border}><HomeProductCard  title={data.p29.name}  img={data.p29.img} data={data.p29}/></NavLink>
                <NavLink to='watermelon' className={styles.border}><HomeProductCard  title={data.p30.name}  img={data.p30.img} data={data.p30}/></NavLink>
                <NavLink to='apricot' className={styles.border}><HomeProductCard  title={data.p31.name}  img={data.p31.img} data={data.p31}/></NavLink>
                <NavLink to='papaya' className={styles.border}><HomeProductCard  title={data.p32.name}  img={data.p32.img} data={data.p32}/></NavLink>
                <NavLink to='straberry' className={styles.border}><HomeProductCard  title={data.p33.name}  img={data.p33.img} data={data.p33}/></NavLink>
                <NavLink to='pomegranate' className={styles.border}><HomeProductCard  title={data.p34.name}  img={data.p34.img} data={data.p34}/></NavLink>
                <NavLink to='blueberry' className={styles.border}><HomeProductCard  title={data.p35.name}  img={data.p35.img} data={data.p35}/></NavLink>
                <NavLink to='guava' className={styles.border}><HomeProductCard  title={data.p36.name}  img={data.p36.img} data={data.p36}/></NavLink>
                <NavLink to='peach' className={styles.border}><HomeProductCard  title={data.p37.name}  img={data.p37.img} data={data.p37}/></NavLink>

            </div>
            ) : (
                <div className={styles.Productsdiv}>
                  {
                    filteredFruits.map(vegetable => (
                      <NavLink key={vegetable.id} to={vegetable.name} className={styles.border}>
                        <HomeProductCard title={vegetable.name} img={vegetable.img} data={vegetable} />
                      </NavLink>
                    ))
                  
                  }
                </div>
            )}
        </>
    )
}

export default Fruits;