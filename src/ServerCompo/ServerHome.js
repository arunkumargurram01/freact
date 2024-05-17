import React, { useState } from "react";
import {Link, Outlet} from 'react-router-dom';
import styles from './server.module.css'

const tablestyle = {
    border:'2px solid black',
    borderCollaps:''
}

function ServerHome(){

    const [data, setData] = useState(null);


    const userList = async() => {
        //alert(`working...`)
        try{
            const response = await fetch('/allusers', {
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
            //console.log(`Data from server In React : ${result}`);      
          }
          else{
            console.log('Please LogIn ');
          }
        }
        catch(err){
            console.log(`Err : ${err}`)
        }
    }

    useState(() => {
        userList();
    },[])

    console.log(data?.length);

  if (data === null) {
    return <center><h2>Login Please!</h2></center>;
  }

  if(!Array.isArray(data) || data.length === 0){
      return(
        <>
          <center><h2>Only Admin Can Access!</h2></center>
        </>
      )
  }
  else{
    return(
        <>
{/*           <h2>Server Home</h2>
            <Link to='users' >User List</Link><br></br>
            <Link to='postuser' >Post User </Link><br></br>
            <Link to='updateuser' >Update User </Link><br></br>
            <Link to='db' >Data Base Operations </Link><br></br>
            <Link to='login' >Login Page </Link><br></br>
            <Outlet /> */}
            <center><h1>Users List</h1></center><br></br>
            <table class={styles.table}>
                <th id={styles.th1} class={styles.table} >S.no</th>
                <th styles={tablestyle}>Name</th>
                {
                    data.map((item,id) => {
                      return(
                        <tr idx={id} className={styles.tr}>
                          <td className={styles.tr}>{item.user_id}</td>
                          <td className={styles.tr}>{item.user_name}</td>
                        </tr>
                      )
                    })
                }
            </table>
        </>
    )
  }
}
  

export default ServerHome;