import React, { useContext, useEffect, useState } from "react";
import styles from './Cart.module.css'
import CarItem from "./CartItem";
import { passCart } from "./ProductCard";

import carrot from '../Images/carrot.png'
import CardItem from "./CartItem";

//importing Items data directly into the cart compo for display by using Ids sent by the server
import Data from './ProductData';


function Cart({cartData}){

    const [data, setData] = useState([]);

    const revArr = data.reverse(); //reversing array to display last added item show at top
    
    let total= [];
    const vegdata = Data.VegitablesData;
    const Frtdata = Data.Fruits;


    const isEmpty = data.length === 0;
    //console.log(isEmpty)
    const h3Style = {
        margin : '5%',
    }

    //Removing Items from the Arry List
    const remove = async (idx) => {
      const data = {
        s_no : idx
      }
        try{
            const response = await fetch('/delitem',{
              method : 'POST',
              headers : {
                'Content-Type': 'application/json',
              },
              body : JSON.stringify(data), //Converting js object into JSON and sending to server
              credentials : "include"
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              else{ 
                  const result = await response.json();
                  if(result.execution === true){
                    cartItems();
                  }
                  else{
                    console.log(`Server Not sent {execution : true}`);
                  }
               }
        }
        catch(err){
            console.log(`ERR removing cart Item : ${err}`)
        } 
    };
    
    //calculating total price on product added to the cart
    let sum = 0
    const Total = (arr) => {
      arr.forEach( item => {
        sum = sum + item;
      })
      return sum;
    }


    //Using useEffect for calling cartdata route to display added cart Items from the DB
    useEffect( () => {
      //console.log(`cartdata route called`)
      cartItems() //it is a async function so both consoles 
      //console.log(`cartdata route executed`)
    },[])


    //On Pay button click user check for further stages
    const cartItems = async() => {
        //alert(`working...`)
        try{
            const response = await fetch('/cartdata', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              //body: JSON.stringify(userCredentials), // Replace with actual payment details
              credentials: 'include', // Include cookies in the request
            });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          //console.log(`result = ${result}`);
          if(response.ok){
            setData(result);
            console.log(`Data from server In React : ${result}`);      
          }
          else{
            console.log('Please LogIn ');
          }

        }
        catch(err){
            console.log(`Err : ${err}`)
        }
    }


//Rendering the JSX based on the Array of cart Items is empty or not
 if(isEmpty){
    return(
        <>
            <div id={styles.body}>
                <h3 style={h3Style}>No Items In The Cart</h3>
                {
                    data.forEach((item, index) => {
                        console.log(`Item ${index + 1}:`, item);
                    })
                }
            </div>
        </>
    )
 }else{
//We are reversing the array bcs the recently item we add to the cart should display at top
    //const revArr = cartData.slice().reverse();
    return(
        <>
          <div id={styles.body}>
          {
            data.reverse().map((item, idx) => { 
    //First we traverse every item in the arr "data" and then select data from "vegdata or frtdata" 
    //by matching the "item_id" in the veg and frt data objects, and then rendering the "CardItem" compo as many times as many items available in array
              const selectedData = vegdata[`p${item.item_id}`] || Frtdata[`p${item.item_id}`];
              total.push(selectedData.price);
              if (selectedData) {
                return (
                  <CardItem key={idx} name={selectedData.name} price={selectedData.price} img={selectedData.img} method={remove} idx={item.s_no}  qty={selectedData.qty}  />
                );
              }
              return null;
            }) //map fun end
          }

        <div id={styles.paymentDiv}>
            <div className={styles.paymentTextDiv}>
              <h3 className={styles.paymentText}>Total Items  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {total.length}</h3>
              <h3 className={styles.paymentText}>Total Amount &nbsp;: {Total(total)}</h3>
            </div>
            <br></br>
            {/* <h3>Discount   : </h3> */}
            <button className={styles.paybtn}>PAY</button>
          </div>
          </div>
          {/* <div id={styles.paymentDiv}>
            <div className={styles.paymentTextDiv}>
              <h3 className={styles.paymentText}>Total Items  : {total.length}</h3>
              <h3 className={styles.paymentText}>Total Amount : {Total(total)}</h3>
            </div>
            <br></br>
            
            <button className={styles.paybtn}>PAY</button>
          </div> */}
        </>
    )
  }
}


 
export default Cart;