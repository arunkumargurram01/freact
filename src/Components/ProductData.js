/* 
    Storing All Product data here 
    We need to have two separate Objects to store "vegitables" and "Fruits"
    
*/

//Importing Images 

//Fruits
import apple from '../Images/apple.png'
import apricot from '../Images/apricot.png'
import blueberry from '../Images/blueberry.png'
import banana from '../Images/banana.png'
import carrot from '../Images/carrot.png'
import corn from '../Images/corn.png'
import cherry from '../Images/cherry.png'
import grapes from '../Images/grapes.png'
import guava from '../Images/guava.png'
import kiwi from '../Images/kiwi.png'
import mango from '../Images/mango.png'
import orange from '../Images/orange.png'
import papaya from '../Images/papaya.png'
import pineapple from '../Images/pineapple.png'
import peach from '../Images/peach.png'
import pomegranate from '../Images/pomegranate.png'
import strawberry from '../Images/straberry.png'
import watermelon from '../Images/watermelon.png'


//Vegitables

import bittergourd from '../Images/bittergourd.png'
import bottlegourd from '../Images/bottlegourd.png'
import brinjal from '../Images/brinjal.png'
import cabbage from '../Images/cabbage.png'
import chili from '../Images/chili-pepper.png'
import capsicum from '../Images/capsicum.png'
import califlower from '../Images/cauliflower.png'
import cucumber from '../Images/cucumber.png'
import drumstick from '../Images/drumstick.png'
import garlic from '../Images/garlic.png'
import ladysfinger from '../Images/ladysfinger.png'
import mushroom from '../Images/mushroom.png'
import onion from '../Images/onion.png'
import pointedgourd from '../Images/pointedgourd.png'
import potato from '../Images/potato.png'
import radish from '../Images/radish.png'
import ridgedgourd from '../Images/ridgedgourd.png'
import tamoto from '../Images/tomato.png'

/* 
const Data = {
    homepageData : { },
    VegitablesData : { },
    Fruits : { }
} 

export default Data;
*/


const Data = {
    homepageData :{
    p1:{
        id:1,
        name : 'Carrot',
        price: 30,
        img:carrot,
        qty : '500gm'
    },
    p2:{
        id:2,
        name : 'Cabbage',
        price:50,
        img:cabbage,
        qty : '500gm'
    },
    p3:{
        id:3,
        name : 'Tamoto',
        price:150,
        img:tamoto,
        qty : '500gm'
    },
    p4:{
        id:4,
        name : 'Potato',
        price:60,
        img:potato,
        qty : '500gm'
    },
    p5:{

        id:5,
        name : 'Graps',
        price:70,
        img:grapes,
        qty : '500gm'
    },
    p6:{

        id:6,
        name : 'Chilli',
        price:70,
        img:chili,
        qty : '500gm'
    },
    p7:{
        id:7,
        name : 'Cauliflower',
        price:70,
        img:califlower,
        qty : '500gm'
    },
    p8:{
        id:8,
        name : 'Straberry',
        price:70,
        img:strawberry,
        qty : '500gm'
    },
    p9:{
        id:9,
        name : 'Onion',
        price:30,
        img:onion,
        qty : '500gm'
    },
    
    p10:{
        id:10,
        name : 'Bottle gourd',
        price:35,
        img:bottlegourd,
        qty : '500gm'
    },
    p11:{
        id:11,
        name : 'Apple',
        price:70,
        img:apple,
        qty : '500gm'
    },
    p12:{
        id:12,
        name : 'Orange',
        price:80,
        img:orange,
        qty : '500gm'
    },

 },

 
 VegitablesData : {
    p1:{
        id:1,
        name : 'Tomato',
        price: 50,
        img:tamoto, 
        qty : '500gm'
    },
    p2:{
        id:2,
        name : 'Potato',
        price:30,
        img:potato,
        qty : '500gm'
    },
    p3:{
        id:3,
        name : 'Cabbage',
        price: 40,
        img:cabbage,
        qty : '500gm'
    },
    p4:{
        id:4,
        name : 'Carrot',
        price:60,
        img:carrot,
        qty : '500gm'
    },
    p5:{
        id:5,
        name : 'Onion',
        price: 20,
        img:onion,
        qty : '500gm'
    },
    p6:{
        id:6,
        name : 'Mushroom',
        price:80,
        img:mushroom,
        qty : '500gm'
    },
    p7:{
        id:7,
        name : 'Pumpkin',
        price: 70,
        img: mushroom,
        qty : '500gm'
    },
    p8:{
        id:8,
        name : 'Brinjal',
        price:40,
        img:brinjal,
        qty : '500gm'
    },
    p9:{
        id:9,
        name : 'Capsicum',
        price: 70,
        img:capsicum,
        qty : '1Kg'
    },
    p10:{
        id:10,
        name : 'Cauliflower',
        price:25,
        img:califlower,
        qty : '500gm'
    },
    p11:{
        id:11,
        name : 'Garlic',
        price:40,
        img:garlic,
        qty : '100gm'
    },
    p12:{
        id:12,
        name : 'Bitter gourd',
        price: 35,
        img:bittergourd,
        qty : '500gm'
    },
    p13:{
        id:13,
        name : 'Corn',
        price:60,
        img:corn,
        qty : '4 Pieces'
    },
    p14:{
        id:14,
        name : 'Pointed gourd',
        price:60,
        img:pointedgourd,
        qty : '500gm'
    },
    p15:{
        id:15,
        name : 'Ridged gourd',
        price: 50,
        img:ridgedgourd,
        qty : '1Kg'
    },
    p16:{
        id:16,
        name : 'Radish',
        price:70,
        img:radish,
        qty : '500gm'
    },
    p17:{
        id:17,
        name : 'Bottle gourd',
        price:120,
        img:bottlegourd,
        qty : '1Kg'
    },
    p18:{
        id:18,
        name : 'Cucumber',
        price: 50,
        img:cucumber,
        qty : '1Kg'
    },
    p19:{
        id:19,
        name : 'Drumstick',
        price:40,
        img:drumstick,
        qty : '200gm'
    },
    p20:{
        id:20,
        name : 'Ladysfinger',
        price:40,
        img:ladysfinger,
        qty : '500gm'
    },    
    p21:{
        id:21,
        name : 'Chili',
        price:20,
        img:chili,
        qty : '100gm'
    },    
 },

 
//Fruits
 Fruits : {
    p22:{
        id:22,
        name : 'Apple',
        price: 130,
        img:apple,
        qty : '1Kg'
    },
    p23:{
        id:23,
        name : 'Mango',
        price:100,
        img:mango,
        qty : '1Kg'
    },
    p24:{
        id:24,
        name : 'Orange',
        price: 80,
        img:orange,
        qty : '1Kg'
    },
    p25:{
        id:25,
        name : 'Banana',
        price:60,
        img:banana,
        qty : '12 Pieces'
    },
    p26:{
        id:26,
        name : 'kiwi',
        price: 180,
        img:kiwi,
        qty : '1Kg'
    },
    p27:{
        id:27,
        name : 'Grapes',
        price:100,
        img:grapes,
        qty : '500gm'
    },
    p28:{
        id:28,
        name : 'cherry',
        price: 140,
        img:cherry,
        qty : '500gm'
    },
    p29:{
        id:29,
        name : 'pineapple',
        price:120,
        img:pineapple,
        qty : '1 Piece'
    },
    p30:{
        id:30,
        name : 'Watermelon',
        price: 70,
        img:watermelon,
        qty : '1Kg'
    },
    p31:{
        id:31,
        name : 'Apricot',
        price:200,
        img:apricot,
        qty : '500gm'
    },
    p32:{
        id:32,
        name : 'Papaya',
        price:120,
        img:papaya,
        qty : '500gm'
    },
    p33:{
        id:33,
        name : 'Straberry',
        price: 170,
        img:strawberry,
        qty : '100gm'
    },
    p34:{
        id:34,
        name : 'Pomegranate',
        price:140,
        img:pomegranate,
        qty : '500gm'
    },
    p35:{
        id:35,
        name : 'Blueberry',
        price:120,
        img:blueberry,
        qty : '500gm'
    },
    p36:{
        id:36,
        name : 'Guava',
        price: 50,
        img:guava,
        qty : '300gm'
    },
    p37:{
        id:37,
        name : 'Peach',
        price:140,
        img:peach,
        qty : '500gm'
    },

}


}


//Fruits 

 /* 
 export const Vegitables = {
    p1:{
        id:1,
        name : 'Tomato',
        price: 130,
        img:tamoto,
        qty : '1Kg'
    },
    p2:{
        id:2,
        name : 'Potato',
        price:100,
        img:potato,
    },
    p3:{
        id:3,
        name : 'Cabbage',
        price: 80,
        img:cabbage
    },
    p4:{
        id:4,
        name : 'Carot',
        price:60,
        img:carrot,
    },
    p5:{
        id:5,
        name : 'Onion',
        price: 180,
        img:onion
    },
    p6:{
        id:6,
        name : 'Mushroom',
        price:100,
        img:mushroom,
    },
    p7:{
        id:7,
        name : 'Pumpkin',
        price: 140,
        img: mushroom
    },
    p8:{
        id:8,
        name : 'Brinjal',
        price:120,
        img:brinjal,
    },
    p9:{
        id:9,
        name : 'Capsicum',
        price: 70,
        img:capsicum
    },
    p10:{
        id:10,
        name : 'Cauliflower',
        price:200,
        img:califlower,
    },
    p11:{
        id:11,
        name : 'Garlic',
        price:120,
        img:garlic,
    },
    p12:{
        id:12,
        name : 'Bitter gourd',
        price: 170,
        img:bittergourd
    },
    p13:{
        id:13,
        name : 'Corn',
        price:140,
        img:corn,
    },
    p14:{
        id:14,
        name : 'Pointed gourd',
        price:120,
        img:pointedgourd,
    },
    p15:{
        id:15,
        name : 'Ridged gourd',
        price: 50,
        img:guava
    },
    p16:{
        id:16,
        name : 'Radish',
        price:140,
        img:radish,
    },
    p17:{
        id:17,
        name : 'Bottle gourd',
        price:120,
        img:bottlegourd,
    },
    p18:{
        id:18,
        name : 'Cucumber',
        price: 50,
        img:cucumber
    },
    p19:{
        id:19,
        name : 'Drumstick',
        price:140,
        img:drumstick,
    },
    p20:{
        id:20,
        name : 'Ladysfinger',
        price:140,
        img:ladysfinger,
    },

}
 */

export default Data;
