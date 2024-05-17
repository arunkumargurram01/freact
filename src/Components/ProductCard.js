import React,{useState} from 'react'
import styles from './ProductCard.module.css'
import Cart from './CartCompo'
import { useNavigate } from 'react-router-dom';
import loginPage from '../ServerCompo/LoginPage'
//Creating Context obj
export const passCart = React.createContext();

function ProductCard(props){
    const {title,img,method,data,Imethod,price,qty, pid} = props;

    const navigate = useNavigate(); //To Navigate from one page to other based on some conditions like login or Not

  //props destructring
  //console.log(data)
    const [display,setDisplay] = useState('none')
    const animation = () => {
        setDisplay('block')
        setTimeout(()=>{
            setDisplay('none')
        },500)
    }

    //Method for User Login Check
    const CheckLogIn = async() => {
        //alert(`working..`)
        try {
            const response = await fetch('/islogin', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include' // Include cookies in the request
            });
            if (!response.ok) {
            //If The server gives error then Navigate to login page 
              navigate('/login')
              throw new Error('Network response was not ok');
            }
            else{ //If user Logged In Then Add The product Into Cart By calling addtocart method["method"]
                const result = await response.json();
                //console.log(`From Productcard : ${result}`);
                animation();
                Imethod();
//This method (method) is used to add items into the cart into the db, this method is written inside the commonUI compo
//But why don't we directly send the data here in this method insted of sending and executing function may will 
//take more time than executing here in this compo, but we need to pass a extra attribute to the "productCard" compo
//which is Item Id which is uniqe for fruits and vegies to store in database.
                method(); 
                sendProductToDB(pid)
             }
        } 
        catch (err) {
              console.log(`Err From UserLogInCheck Method in ProductCard Compo : ${err}`)
        }
    }

    //Method for aending items to server to store in addcart table
    const sendProductToDB = async(id) => {
        //alert(`${id}`)
        const product = {pid : id}
        try {
            const response = await fetch('/addcart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body : JSON.stringify(product), //passing product id to thye server to store in database.
                credentials: 'include' // Include cookies in the request
            });
            if (!response.ok) {
            //If The server gives error then Navigate to login page 
              navigate('/login')
              throw new Error('Network response was not ok');
            }
            else{ //If user Logged In Then Add The product Into Cart By calling addtocart method["method"]
                const result = await response.json();
                //console.log(`From Productcard After sending Data: ${result}`);
             }
        } 
        catch (err) {
              console.log(`Err From ProductData sent To server Method in ProductCard Compo : ${err}`)
        }
    }

    return(
        <>
            <div id={styles.border}>
                <div id={styles.imgdiv}>
                    <img src={img} alt='Product' className={styles.spimg}/>
                </div>
                <div className={styles.titlediv}>
                    <p className={styles.Producth5}>{title}</p>
                    <div className={styles.priceDiv}> <span id={styles.qty}>{qty}</span><div id={styles.price}>₹{price}</div></div>
                </div>
            </div>

    {/* This JSX is for adding cart animation HTML part */}
            <div id={styles.mduplidiv}>
            <div id={styles.duplicateborder} style={{display:display}}>
                <div id={styles.duplicateimg}>
                    <img src={img} alt='Product' className={styles.duplicatespimg}/>
                </div>
                <div className={styles.duplicatetitlediv}>
                    {/* <div className={styles.Producth5} id={styles.p1}>{title}</div> */}
                </div>
            </div>
            </div>
            <div className={styles.btndiv}>
                    <button className={styles.cartbtn} onClick={() => {CheckLogIn()}}>Add to cart</button>
            </div>
        </>
    )
}

export default ProductCard;