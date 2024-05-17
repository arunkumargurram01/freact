import React from "react";
import { useState,useEffect } from "react";
import UserListItem from "../Components/UserListItem";


function UserList(){

    //const [userlist,setuserlist] = useState([{}]);
    const [items,setItems] = useState([]);

    const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
    //On Page load this "useeffect" will execute
    useEffect(() => {
        //we are fetching this data from post 4000 which is set by our backend. we are acessing the data
        //which is at server 4000/tweets route like "jsonplaceholdersite", 
        //we must set the PORT number should be different for frontend & backend
/*     fetch('http://localhost:4000/tweets')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setItems(json)

        }) */
        fetchMethod();
    },[]);


/*     const  fetchMethod = async () =>{
          const res = await fetch('http://localhost:4000/server/users');
          const data = await res.json(); //take the Json responce and parse it, convert into JS Object.
          setItems(data)
          console.log(items)
    } */

// Async Fetch function with try & catch blocks
    const fetchMethod = async () => {
        try {
            //acessing stored token from localStorage
            const storedToken = localStorage.getItem('jwtToken');
           // console.log(`Token stored in Local Storage From  = `+ storedToken)
            const res = await fetch(`${API_BASE_URL}/users`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${storedToken}`, // Replace with your JWT token
                    'userCredentials': JSON.stringify({"username": localStorage.getItem('username')}),//user defined loine of code
                    'Content-Type': 'application/json', // You can set other headers as needed
                },
            });
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            else{
                const data = await res.json();
                console.log(`data = ${data.data}`)
                setItems(data);
                console.log(items[0]);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    
    

    //Specifing Component based on data loading or not
    if(items===''){
        return(
            <>
                <center>
                    <h3>Loading...</h3>
                </center>
            </>
        )
    }
    else{

        return(
            <>
                <center>
                    <h3>UserList</h3>
                    
                   
{/*                   { items.map( (ele,idx) => (
                        <UserListItem name={ele.name} role={ele.role} key={idx}/>
                   ))} */}
                     <ul>
                {
                    items.map(user => (
                        <li key={user.name}>
                            <label><p> Name : {user.name}</p></label>
                            <label><p> Data : {user.data}</p></label>
                        </li>
                    ))
                }
            </ul>
                </center>
            </>
        )
    }

}

export default UserList;
