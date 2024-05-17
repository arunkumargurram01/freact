import React,{useEffect, useRef, useState} from "react";
import styles from '../App.module.css'
import { NavLink } from "react-router-dom";
import HomeProductCard from "./HomePCard";


//Importing Vegitables Data
import Data from './ProductData'

function Vegitables() {

    const [inpVal, setInpVal] = useState('');
    const inputRef = useRef(null);


    //useEffect method for cookies checking 
    useEffect(() => {
      const localcookie = async () => {
        try {
          const response = await fetch('/vegetables', {
            credentials: 'include' // Include cookies in the request
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        console.log(`getcookie method called`);
        const cookies = document.cookie;
      };

      localcookie()

      },[]);

    const data = Data.VegitablesData;

    const filteredVegetables = Object.values(data).filter(vegetable =>
      vegetable.name.toLowerCase().includes(inpVal.toLowerCase())
    );

    //Auto focusing the Input element
    useEffect(() => {
      inputRef.current.focus();
    },[])

    const text = (e) => {
      setInpVal(e.target.value)
    }


   // console.log(data.p1.name)

    return(
        <>
            <center>
              <input type='text' placeholder="search..." ref={inputRef} value={inpVal} onChange={text} ></input>
            </center>
            
             { inpVal=='' ? (

                  <div className={styles.Productsdiv}>
                                    
                    <NavLink to='tomato' className={styles.border}><HomeProductCard  title={data.p1.name} img={data.p1.img} data={data.p1}/></NavLink>
                    <NavLink to='potato' className={styles.border}><HomeProductCard title={data.p2.name} img={data.p2.img} data={data.p2}/></NavLink>
                    <NavLink to='cabbage' className={styles.border}><HomeProductCard  title={data.p3.name}  img={data.p3.img} data={data.p3}/></NavLink>
                    <NavLink to='carot' className={styles.border}><HomeProductCard  title={data.p4.name} img={data.p4.img} data={data.p4}/></NavLink>
                    <NavLink to='onion' className={styles.border}><HomeProductCard   title={data.p5.name}  img={data.p5.img} data={data.p5}/></NavLink>
                    <NavLink to='mushroom' className={styles.border}><HomeProductCard  title={data.p6.name}  img={data.p6.img} data={data.p6}/></NavLink>
                    <NavLink to='pumpkin' className={styles.border}><HomeProductCard  title={data.p7.name}  img={data.p7.img} data={data.p7}/></NavLink>
                    <NavLink to='brinjal' className={styles.border}><HomeProductCard  title={data.p8.name}  img={data.p8.img} data={data.p8}/></NavLink>
                    <NavLink to='chili' className={styles.border}><HomeProductCard  title={data.p21.name}  img={data.p21.img} data={data.p21}/></NavLink>
                    <NavLink to='capsicum' className={styles.border}><HomeProductCard  title={data.p9.name}  img={data.p9.img} data={data.p9}/></NavLink>
                    <NavLink to='cauliflower' className={styles.border}><HomeProductCard  title={data.p10.name}  img={data.p10.img} data={data.p10}/></NavLink>
                    <NavLink to='garlic' className={styles.border}><HomeProductCard  title={data.p11.name}  img={data.p11.img} data={data.p11}/></NavLink>
                    <NavLink to='bittergourd' className={styles.border}><HomeProductCard  title={data.p12.name}  img={data.p12.img} data={data.p12}/></NavLink>
                    <NavLink to='corn' className={styles.border}><HomeProductCard  title={data.p13.name}  img={data.p13.img} data={data.p13}/></NavLink>
                    <NavLink to='pointedgourd' className={styles.border}><HomeProductCard  title={data.p14.name}  img={data.p14.img} data={data.p14}/></NavLink>
                    <NavLink to='ridgedgourd' className={styles.border}><HomeProductCard  title={data.p15.name}  img={data.p15.img} data={data.p15}/></NavLink>
                    <NavLink to='radish' className={styles.border}><HomeProductCard  title={data.p16.name}  img={data.p16.img} data={data.p16}/></NavLink>
                    <NavLink to='bottlegourd' className={styles.border}><HomeProductCard  title={data.p17.name}  img={data.p17.img} data={data.p17}/></NavLink>
                    <NavLink to='cucumber' className={styles.border}><HomeProductCard  title={data.p18.name}  img={data.p18.img} data={data.p18}/></NavLink>
                    <NavLink to='drumstick' className={styles.border}><HomeProductCard  title={data.p19.name}  img={data.p19.img} data={data.p19}/></NavLink>
                    <NavLink to='ladysfinger' className={styles.border}><HomeProductCard  title={data.p20.name}  img={data.p20.img} data={data.p20}/></NavLink>

                  </div>

             )  : (

                <div className={styles.Productsdiv}>
                  {
                    filteredVegetables.map(vegetable => (
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

export default Vegitables;