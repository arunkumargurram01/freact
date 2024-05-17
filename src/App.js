
import React from 'react';
import styles from './App.module.css'
import { NavLink,Routes,Route} from 'react-router-dom';

import HeadLogo from './Components/HeadLogo'
import MainCard from './Components/MainCard';
import ProductCard from './Components/ProductCard';
import LabelCard from './Components/LabelCard';
import DownNavbar from './Components/DownNavbar';

//Images
import Vegitables from './Images/vegetables.png'
import fruits from './Images/fruits.png'
import carrot from './Images/carrot.png'
import potato from './Images/potato.png'
import tamato from './Images/tomato.png'
import cabbage from './Images/cabbage.png'
import strawberry from './Images/straberry.png'
import lettuce from './Images/cauliflower.png'
import chilli from './Images/chili-pepper.png'
import grapes from './Images/grapes.png'
import ImageSlider from './Components/ImageSliders';
import NavBar from './Components/NavBar';
import About from './NavPages/About';


function App() {
  return (
    <>

{/*       <Routes>
        <Route path='about' element={<About/>} />
      </Routes> */}



    {/* LOGO and MenuBar Code & Components */}
        <HeadLogo />


    {/* NavBar Links Component */}

        


    {/* Main Card Components */}
    <div className={styles.maindiv}>
      <MainCard title="Vegitables" link={Vegitables}/>
      <MainCard title="Fruits" link={fruits}/>
    </div>


    {/* Image Slider */}
    <div className={styles.imgSLider}>
      <ImageSlider/>
    </div>
    


    {/* Product Card Components */}
    <div className={styles.maindiv}>
    <ProductCard title="Vegitables" img={carrot}/>
    <ProductCard title="Vegitables" img={cabbage}/>
    <ProductCard title="Vegitables" img={tamato}/>
    <ProductCard title="Vegitables" img={potato}/>
    <ProductCard title="Vegitables" img={grapes}/>
    <ProductCard title="Vegitables" img={chilli}/>
    <ProductCard title="Vegitables" img={lettuce}/>
    <ProductCard title="Vegitables" img={strawberry}/>
    <ProductCard title="Vegitables" img={carrot}/>
    <ProductCard title="Vegitables" img={cabbage}/>
    <ProductCard title="Vegitables" img={grapes}/>
    </div>
      

    {/* Label Card Component */}
    <div id={styles.LabelContainer}>
      <LabelCard />
    </div>

    {/* Down Navbar Card component */}
      <DownNavbar />
 



{/* 
      <div className={styles.sticky}>
            Position : sticky
      </div>

      Erangle is the only map great for every thing( close range fights, sniping, vechile chase fights). It is an 8×8km area map with small outcroping of buildings.In Erangle some places coverd with grassand and tress,some open places by ridges.

The favourite places for landing to many players in erangle are Georgopol, Novo reponoye, Pochinki, Military Base, school, Rajak.

The number of players in this map is 100 and this map take 20-30 minutes to complete a match.

MAJOR GUNS IN ERANGLE
M416
M762
AKM
VSS
MAJOR VEHICLES IN ERANGLE
DACIA 1300
UAZ(OPEN & CLOSED)
BUGGY
Erangle is the only map great for every thing( close range fights, sniping, vechile chase fights). It is an 8×8km area map with small outcroping of buildings.In Erangle some places coverd with grassand and tress,some open places by ridges.

The favourite places for landing to many players in erangle are Georgopol, Novo reponoye, Pochinki, Military Base, school, Rajak.

The number of players in this map is 100 and this map take 20-30 minutes to complete a match.

MAJOR GUNS IN ERANGLE
M416
M762
AKM
VSS
MAJOR VEHICLES IN ERANGLE
DACIA 1300
UAZ(OPEN & CLOSED)
BUGGY
Erangle is the only map great for every thing( close range fights, sniping, vechile chase fights). It is an 8×8km area map with small outcroping of buildings.In Erangle some places coverd with grassand and tress,some open places by ridges.

The favourite places for landing to many players in erangle are Georgopol, Novo reponoye, Pochinki, Military Base, school, Rajak.

The number of players in this map is 100 and this map take 20-30 minutes to complete a match.

MAJOR GUNS IN ERANGLE
M416
M762
AKM
VSS
MAJOR VEHICLES IN ERANGLE
DACIA 1300
UAZ(OPEN & CLOSED)
BUGGY
Erangle is the only map great for every thing( close range fights, sniping, vechile chase fights). It is an 8×8km area map with small outcroping of buildings.In Erangle some places coverd with grassand and tress,some open places by ridges.

The favourite places for landing to many players in erangle are Georgopol, Novo reponoye, Pochinki, Military Base, school, Rajak.

The number of players in this map is 100 and this map take 20-30 minutes to complete a match.

MAJOR GUNS IN ERANGLE
M416
M762
AKM
VSS
MAJOR VEHICLES IN ERANGLE
DACIA 1300
UAZ(OPEN & CLOSED)
BUGGY */}
    </>
  );
}

export default App;
