import React from "react";
import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
import styles from '../Pages/LoginSignin.module.css';


function AdminPage(){

    const navigate = useNavigate()
    const[userCredentials, setUserCredentials] = useState({
        mail : '',
        password : '',
    })

    const [reason, setReason] = useState('');

    const changeValues = (e) => {
        const {name, value} = e.target;
        setUserCredentials( (prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const GotoRoute = () => {
        navigate('/signup')
    }

    //useEffect method for cookies checking 
    const localcookie = async () => {
        //console.log(userCredentials)
        if(userCredentials.mail != '' && userCredentials.password != ''){
        try {
            const response = await fetch('/adminlogin', {
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
          setReason(result.reason);
          console.log(result);

          if(response.ok && result.access == true){
            navigate('/'); // if the user credentials are correct then navigate to the home page and server will send token in cookie
          }
          else{
            console.log('Access denied.')
          }
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      }else{
          alert(`Please Enter All Credentials!`)
      }
    };


//storing styles in variabls to change styles to show according to wrong credentials to the user
  let mailinp = styles.loginInp;
  let mailname = styles.name; 

  let pwdinp = styles.loginInp;
  let pwdname = styles.name;
 // console.log(reason)
  if(reason==='pwd'){
    pwdinp = styles.loginInpErr;
    pwdname = styles.namePwd;
  }

  if(reason==='mail'){
    mailinp = styles.loginInpErr;
    mailname = styles.namePwd;
  }
  else{
    mailname = styles.name;
    mailinp = styles.loginInp;
  }
    return(
        <>
         <div id={styles.mdiv_admin}>
            <center><h1 id={styles.adminh1}>Admin</h1></center>
            <div id={styles.adminidiv}>
              <div id={styles.adiv}>
                <div className={mailname}>Email</div>
                <input className={mailinp} type="mail" placeholder="" name="mail" value={userCredentials.mail} onChange={changeValues} required/><br></br><br></br>
                <div className={pwdname}>Password</div>
                <input className={pwdinp} type="password" placeholder="" name="password" value={userCredentials.password} onChange={changeValues} required/><br></br>
                <br></br>
                <button className={styles.loginbtn} type="submit" onClick={localcookie}>LogIn</button><br></br><br></br>
              </div>
            </div>
         </div>

        </>
    )
}

export default AdminPage;