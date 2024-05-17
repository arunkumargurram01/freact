import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserPage(){

    const navigate = useNavigate()
    const [userdata, setUserData] = useState([]);    

    useEffect(() => {
        fetchMethod()
    },[]);

 
    const fetchMethod = async () => {
        try {
          const response = await fetch('/dashboard', {
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

    return(
        <>
            <center>
                <h3> Welecome </h3>
                <h4>user : </h4>
                <h4>data : </h4>
            </center>
        </>
    )
}

export default UserPage;