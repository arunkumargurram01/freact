import React from "react";
import { useState,useEffect } from "react";
import UserListItem from "./UserListItem";


function UserList(){

    //const [userlist,setuserlist] = useState([{}]);
    const [items,setItems] = useState([]);


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

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const  fetchMethod = async () =>{
          const res = await fetch(`${API_BASE_URL}/tweets`);
          const data = await res.json(); //take the Json responce and parse it, convert into JS Object.
          setItems(data)
          console.log(data)

    }

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
                   
                  { items.map( (ele,idx) => (
                        <UserListItem name={ele.name} role={ele.role} key={idx}/>
                   ))}
                   
                </center>
            </>
        )
    }

}

export default UserList;
