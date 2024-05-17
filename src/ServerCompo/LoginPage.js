import React from "react";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
import Cookies from "js-cookie";

const LoginPage = () => {

    const navigate = useNavigate()
    const[userCredentials, setUserCredentials] = useState({
        username : '',
        password : '',
    })

    const [token, setToken] = useState('');

    const changeValues = (e) => {
        const {name, value} = e.target;
        setUserCredentials( (prev) => ({
            ...prev,
            [name] : value
        }))
    }

    //useEffect method for cookies checking 
    const localcookie = async () => {
        console.log(userCredentials)
        try {
            const response = await fetch('/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userCredentials), // Replace with actual user credentials
              credentials: 'include', // Include cookies in the request
            });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result);
          if(response.ok && result.acess == true){
            navigate('/dashboard'); //here "dashboard" is route name not a react component name, the compo name is "UserPage"
          }
          else{
            console.log('Access denied.')
          }
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      


/* const Submit = async () => {
    if (userCredentials.username === '' || userCredentials.password === '') {
        alert("Enter all the details");
    } else {
        try {
            const response = await fetch('http://localhost:3002/login', {
                method: 'POST',
                credentials : 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCredentials) // for sending JSON
            });

            if (!response.ok) {
               // navigate('/login')
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            
            //Storing JWT token which sent by server in the local storage by giving names to it
            if(data.acess==true) {
                const token = data.token;
                //locally storing the token
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('username',data.username)
                console.log('Login Successful..')

                const tk = Cookies.get('token');
                if(tk){
                    console.log(`Cookie = ${tk}`)
                }
                else{
                    console.log(`No Cokkie got`)
                }
                
                //console.log(`User Name in local storage : ${localStorage.getItem('username')}`)

                //acessing stored token from localStorage
                //const storedToken = localStorage.getItem('jwtToken');
               // console.log(`Token stored in Local Storage = `+ storedToken)


        } catch (error) {
            console.error("An error occurred:", error);
            // You can add code here to handle the error, e.g., displaying an error message to the user.
        }
             //console.log(user)
        }

    } */

/*     const  fetchMethod = async () =>{
        const res = await fetch('http://localhost:4000/login');
        const data = await res.text(); //take the Json responce and parse it, convert into JS Object.
        console.log(data)
    } */
    return(
        <>
            <center>
             <h2> Login Page</h2>
                <input type="text" placeholder="username" name="username" value={userCredentials.username} onChange={changeValues}/><br></br>
                <input type="password" placeholder="password" name="password" value={userCredentials.password} onChange={changeValues}/><br></br>
             <br></br>
                <button type="submit" onClick={localcookie}>LogIn</button>
            </center>
        </>
    )
}

export default LoginPage;