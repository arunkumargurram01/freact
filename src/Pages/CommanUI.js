
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Routes,Route,Link,NavLink} from 'react-router-dom'

/* CSS STYLES Of LOGO*/
import styles1 from '../App.module.css'

/* CSS STYLES OF NAV BAR (MENU) */
import styles2 from './menu.module.css'
import settings from '../Images/gear-solid.svg'
import DownNavbar from '../Components/DownNavbar'


/* CSS STYLES OF DOWN NAV BAR && Single Product */
import styles3 from '../Components/Components.module.css'

//Images
import home from '../Images/home.png'
import homeIcon2 from '../Images/home2.png'
import cartIcon from '../Images/cart.png'
import profile from '../Images/profile.png'
import about from '../Images/about.png'
import privacypolocy from '../Images/privacypolocy.png'
import profilewhite from '../Images/profilewhite.png'
import help from '../Images/help.png'
import server from '../Images/server.png'

/* Importing Differen Pages To Routing */
import Home from '../NavPages/Home'
import About from '../NavPages/About'
import Profile from '../NavPages/Profile'
import PrivacyPolacy from '../NavPages/PrivacyPolacy'
import SingleProduct from '../Components/SingleProduct'
import Cart from '../Components/CartCompo'
import SingleProduct2 from '../Components/CommonSingleProduct'
import SignupCompo from '../Components/SignupCompo'



import CommonSingleProduct from '../Components/CommonSingleProduct'
import ControledCompo from '../Components/ContolrdCompo'
import Updatedata from '../Components/UpdateData'
import Help from '../NavPages/Help'
import Vegitables from '../Components/Vegitables'
import Fruits from '../Components/Fruits'

//user Authentication && Authorization
import LogInCompo from './LogInCompo'
import AdminPage from '../Components/AdminPage'


//Importing server components
import ServerHome from '../ServerCompo/ServerHome'
import UserList from '../ServerCompo/UserList'
import PostUser from '../ServerCompo/PostUser'
import UpdateUser from '../ServerCompo/UpdateUser'
import DbOperations from '../ServerCompo/DbOperations'
import LoginPage from '../ServerCompo/LoginPage'
import UserPage from '../ServerCompo/UserPage'

//Inporting Product Data
import Data from '../Components/ProductData'

const ProductData = Data.homepageData;
const vegdata = Data.VegitablesData;
const Frtdata = Data.Fruits;

function CommanUI(){
    const [isToggled, setIsToggled] = useState(false);
    const [cart,setCart] = useState([]);
    const [IndicatorVal,setIndicatorVal] = useState(false);
    const [ItemNum,setItemNum] = useState(0)
    const [total, setTotal] = useState([])

    const Totalprice = 0;
    
    //Setting the NavBar Open And class
    const handleClick = () => {
       // alert(isToggled)
        setIsToggled((prev) => !isToggled)
    }

    //Storing the product data in Array from singleCompo methods later change with database connection
    const cartItems= async(data)  => {

        /* Here we are using "unshift" Arr method to insert new data item at begining of the array to display last inseted 
           item render first  */
        
        cart.unshift(data)

        //here "data" param holds the particular any Item full data like [p1:{Id:1,name='Apple',qty:1kg,price:120}]
        //we need to send that every item data to database which is add to cart
        try {
            const response = await fetch('/islogIn', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), // Replace with actual data cart Item
              credentials: 'include', // Include cookies in the request
            });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          //console.log(result);
          if(response.ok){
            console.log(`Item Added To the cart`)
          }
          else{
            console.log('Access denied.')
          }
        } 
        catch (err) {
            console.log(`ERR From Adding Databse Method CommomUI compo : ${err}`)
        }
        
    }


    //useEffect method for cookies checking 
/*     useEffect(() => {
        const localcookie = async () => {
            try {
              const response = await fetch('http://localhost:3002', {
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
          
      },[]); */



/* Code To Display and add styles for cart Items Indicator*/
    var Indicator = styles3.none
    const changeIndicator = () => {
        setIndicatorVal(true)
        setItemNum((prev) => prev+1)
    }
    if(IndicatorVal == true){
        Indicator = styles3.Indicator
    }

    //To remove the CartIndecator when we click on the Cart
    const resetIndicator = () =>{
        setIndicatorVal(false)
        setItemNum(0)
    }

    var dynamicId = styles2.navdiv;
    var top = ''
    var middle = ''
    var bottom = ''
    var LinksDiv = styles2.MainDivBefore
    let nav = styles2.navClose


//Navbar 3 Lines Animation assigning 
    if(isToggled==true){
         dynamicId = styles2.navdiv;
          top = styles2.topAfter
          middle =  styles2.middleAfter
          bottom = styles2.bottomAfter
          LinksDiv = styles2.MainDivAfter
          nav = styles2.Nav
    }
    

    return(
        <>
            {/* LOGO and MenuBar Code & Components */}
            <div className={styles1.Logo}>
                <div className={styles1.Ldiv}>
                    Fastoo
                </div>
                <div className={styles1.menu}>
                    <div className={styles2.profile}>
                        <img src={settings} alt="Pro"/>
                    </div> 
                    {/* NAV BAR */}

                        <div  onClick={handleClick} id={styles2.navlist}>
                            <Link to='/' className={styles2.Linkcompo}><div className={styles2.link}>Home</div></Link>
                            <Link to='about' className={styles2.Linkcompo}><div className={styles2.link}>About</div></Link>
                            <Link to='privacyPolocy' className={styles2.Linkcompo}><div className={styles2.link}>Privacy Polocy</div></Link>
                            <Link to='profile' className={styles2.Linkcompo}><div className={styles2.link}>Profile</div></Link>
                            <Link to='help' className={styles2.Linkcompo}><div className={styles2.link}>Help</div></Link>
                            <Link to='server' className={styles2.Linkcompo}><div className={styles2.link}>server</div></Link>
                            <div className={styles3.cartdiv}>
                                <Link to='cart'><img src={cartIcon} onClick={resetIndicator}/></Link>
                                <div id={Indicator}>
                                    {ItemNum}
                                </div> 
                            </div>
                        </div>

                    
                    <div id={dynamicId} onClick={handleClick}>
                        <div className={styles2.line} id={top}></div>
                        <div className={styles2.line} id={middle}></div>
                        <div className={styles2.line} id={bottom}></div>
                    </div>{/* `${isToggled ? "nav-open" : "nav-close" }` 
                            `${isToggled? styles2.navOpen:styles2.navClose}`
                    */}

                    <div className={nav}>
                        <div className={styles2.innerNavDiv} onClick={handleClick}>
                            <Link to='/' className={styles2.Linkcompo}><div className={styles2.link}><div className={styles2.imgDiv}><img src={home}/></div>Home</div></Link>
                            <Link to='about' className={styles2.Linkcompo}><div className={styles2.link}><div className={styles2.imgDiv}><img src={about}/></div>About</div></Link>
                            <Link to='privacyPolocy' className={styles2.Linkcompo}><div className={styles2.link}><div className={styles2.imgDiv}><img src={privacypolocy}/></div>Privacy Polocy</div></Link>
                            <Link to='profile' className={styles2.Linkcompo}><div className={styles2.link}><div className={styles2.imgDiv}><img src={profilewhite}/></div>Profile</div></Link>
                            <Link to='help' className={styles2.Linkcompo}><div className={styles2.link}><div className={styles2.imgDiv}><img src={help}/></div>Help</div></Link>
                            <Link to='server' className={styles2.Linkcompo}><div className={styles2.link}><div className={styles2.imgDiv}><img src={server}/></div>Server</div></Link>
                        </div>
                    </div>
                    {/* Menu Class Div close */}
                </div>
                {/* Nav Bar && Menu Bar Close */}
            </div>
            {/* Total HeadLogo Close */}
            
        

            {/* Here we need to write the Routes and Homepageelements */}

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='about' element={<About/>}/>
                <Route path='profile' element={<Profile/>} />
                <Route path='privacyPolocy' element={<PrivacyPolacy/>} />
                <Route path='controledcompo' element={<ControledCompo/>} />
                <Route path='help' element={<Help/>} />
                <Route path='server' element={<ServerHome/>} >
                    <Route path='users' element={<UserList/>} />
                    <Route path='postuser' element={<PostUser/>} />
                    <Route path='updateuser' element={<UpdateUser/>} />
                    <Route path='db' element={<DbOperations/>} />
                    <Route path='login' element={<LoginPage/>} />
                </Route>
                <Route path='dashboard' element={<UserPage />} />
                <Route path='signup' element={<SignupCompo/>} />
                <Route path='login' element={<LogInCompo/>} />
                <Route path='admin/login' element={<AdminPage/>} />


                {/* To Main Page Routs [Vegitables, Fruits] */}
                <Route path='vegetables' element={<Vegitables/>} />
                <Route path='fruits' element={<Fruits/>} />


                {/* Single Items Page,In all paths we are using same Compo but we are changing the data that passed to that Route */}
                
                <Route path='vegetables'>
                    <Route path="tomato" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p1} Imethod={changeIndicator} />} />
                    <Route path="potato" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p2} Imethod={changeIndicator}/>} />
                    <Route path="cabbage" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p3} Imethod={changeIndicator}/>} />
                    <Route path="carot" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p4} Imethod={changeIndicator}/>} />
                    <Route path="onion" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p5} Imethod={changeIndicator}/>} />
                    <Route path="mushroom" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p6} Imethod={changeIndicator}/>} />
                    <Route path="pumpkin" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p7} Imethod={changeIndicator}/>} />
                    <Route path="brinjal" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p8} Imethod={changeIndicator}/>} />
                    <Route path="capsicum" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p9} Imethod={changeIndicator}/>} />
                    <Route path="cauliflower" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p10} Imethod={changeIndicator}/>} />
                    <Route path="garlic" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p11} Imethod={changeIndicator}/>} />
                    <Route path="bittergourd" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p12} Imethod={changeIndicator}/>} />
                    <Route path="corn" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p13} Imethod={changeIndicator}/>} />
                    <Route path="pointedgourd" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p14} Imethod={changeIndicator}/>} />
                    <Route path="ridgedgourd" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p15} Imethod={changeIndicator}/>} />
                    <Route path="radish" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p16} Imethod={changeIndicator}/>} />
                    <Route path="bottlegourd" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p17} Imethod={changeIndicator}/>} />
                    <Route path="cucumber" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p18} Imethod={changeIndicator}/>} />
                    <Route path="drumstick" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p19} Imethod={changeIndicator}/>} />
                    <Route path="ladysfinger" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p20} Imethod={changeIndicator}/>} />
                    <Route path="chili" element={<CommonSingleProduct parentMethod={cartItems} data={vegdata.p21} Imethod={changeIndicator}/>} />
                </Route>

                <Route path='fruits'>
                    <Route path="apple" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p22} Imethod={changeIndicator}/>} />
                    <Route path="mango" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p23} Imethod={changeIndicator}/>} />
                    <Route path="orange" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p24} Imethod={changeIndicator}/>} />
                    <Route path="banana" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p25} Imethod={changeIndicator}/>} />
                    <Route path="kiwi" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p26} Imethod={changeIndicator}/>} />
                    <Route path="grapes" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p27} Imethod={changeIndicator}/>} />
                    <Route path="cherry" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p28} Imethod={changeIndicator}/>} />
                    <Route path="pineapple" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p29} Imethod={changeIndicator}/>} />
                    <Route path="watermelon" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p30} Imethod={changeIndicator}/>} />
                    <Route path="apricot" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p31} Imethod={changeIndicator}/>} />
                    <Route path="papaya" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p32} Imethod={changeIndicator}/>} />
                    <Route path="straberry" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p33} Imethod={changeIndicator}/>} />
                    <Route path="pomegranate" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p34} Imethod={changeIndicator}/>} />
                    <Route path="blueberry" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p35} Imethod={changeIndicator}/>} />
                    <Route path="guava" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p36} Imethod={changeIndicator}/>} />
                    <Route path="peach" element={<CommonSingleProduct parentMethod={cartItems} data={Frtdata.p37} Imethod={changeIndicator}/>} />
                </Route>

                {/* DOWN Bar Routes */}
                <Route path='/' element={<Home/>}/>
                <Route path='cart' element={<Cart cartData={cart}  total={total}/>} />
                <Route path='profile' element={<UserList/>} />

            </Routes>
            {/* Here Routing Page Paths Ends */}


            {/* Div for Gap upside of DownBar */}
            <div id={styles2.downgapDiv}></div>


            {/* Down Bar Jsx */}
            <div className={styles3.DN_div}>
                <div className={styles3.opt_div}>
                    <Link to='/'><img src={homeIcon2}/></Link>
                </div>
                <div className={styles3.opt_div}>
                    <Link to='/profile'><img src={profile}/></Link>
                </div>
                <div className={styles3.opt_div}>
                    <Link to='cart'><img src={cartIcon} onClick={resetIndicator}/></Link>
                    <div id={Indicator}>
                        {ItemNum}
                    </div> 
                </div>
            </div>
            {/* Cart Items Indecator Div */}
{/*             <div id={Indicator}>
                    {ItemNum}
            </div>  */}
            {/* DOWN BAR Close */}
        </>
    )
}

export default CommanUI;