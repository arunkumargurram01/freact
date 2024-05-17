import React from "react";
import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
import styles from '../Pages/LoginSignin.module.css';


function SignupCompo(){
  //for navigation when succussfully logged in by giving correct credentials
    const navigate = useNavigate()

    const[userCredentials, setUserCredentials] = useState({
        username : '',
        mail : '',
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

    const [reason, setReason] = useState('');


  //navigating to the login page on cliking a button
    const GotoRoute = () => {
        navigate('/login')
    }

  //storing styles in variabls to change styles to show according to wrong credentials to the user
  let mailinp = styles.loginInp;
  let mailname = styles.name; 
  let mailErrtext = "Mail Already used";

  const Serr= {
    display:' block',
    color:' red',
    fontWeight:'bold',
  }

  const stext = {
    display:'none',
  }
  
  let spanStyle = stext;
  let userspanStyle = stext;


//Mail given order check with using "Regex"
  const mailCheck = (mail) => {
    let endswithStr = /@gmail.com$/;
    if(mail){
      mailErrtext = "Don't use special characters!";
    }
    if(endswithStr.test(mail)){
      return true
    }
    else{
      mailinp = styles.loginInpErr;
      mailname = styles.namePwd;
      return false
    }
  }

//Name and Email inputs checks to prevent SQL Injuction
function checkString(inputString) {
  // Escape special characters for regex
  const specialCharacters = "%!@$%^&*()_+~,./|_-'<>;:?[]{}=";
  const escapedSpecialCharacters = specialCharacters.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const wordsToCheck = ["UNION", "AND", "OR", "NOT", "UNIONALL"];

  // Combine the special character and word patterns
  const regexPattern = new RegExp(`[${escapedSpecialCharacters}]|${wordsToCheck.join('|')}`, 'i');
  const outcome = regexPattern.test(inputString);
  if(outcome==false){
    //mailname = styles.name;
    return true;
  }
  else{
    return false;
  } 
}

function checkMail(inputString) {
  // Escape special characters for regex
  const specialCharacters = "%!$%^&*()_+~,/|_-'<>;:?[]{}=";
  const escapedSpecialCharacters = specialCharacters.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const wordsToCheck = ["UNION", "AND", "OR", "NOT", "UNIONALL"];

  // Combine the special character and word patterns
  const regexPattern = new RegExp(`[${escapedSpecialCharacters}]|${wordsToCheck.join('|')}`, 'i');
  const outcome = regexPattern.test(inputString);
  if(outcome==false){
    //no special charcters
    return false;
  }
  else{
    //string has special charcters
    mailErrtext = "Don't use Special charaters";
    return true;
  } 
}
checkMail(userCredentials.mail)


//For setting styles of username
if(checkString(userCredentials.username)){
  userspanStyle = stext;
}
else{
  userspanStyle = Serr;
} 


//For setting styles of mail if responce from ser is "dup mail"
  if(reason==='dup mail'){
    mailinp = styles.loginInpErr;
    spanStyle = Serr;
  }
  else{
    mailname = styles.name;
    mailinp = styles.loginInp;
  }

//For setting style of mail for special char check
if(checkMail(userCredentials.mail)){
  mailErrtext = `Don't use Special charaters`;
  mailinp = styles.loginInpErr;
  spanStyle = Serr;
}
else{
  mailname = styles.name;
  mailinp = styles.loginInp;
}

  //console.log(`mailcheck : ${mailCheck()}`)
  //useEffect method for cookies checking 
    const localcookie = async () => {
        console.log(userCredentials.mail)
      if(userCredentials.name != '' && userCredentials.mail != '' && userCredentials.password != ''){
        if(mailCheck(userCredentials.mail)){
        if(checkString(userCredentials.username)){

        try {
            const response = await fetch('/signup', {
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
       }else{ //for username
          alert(`Dont Use any special charaters!`)
          userspanStyle = Serr;
       }
       }else{ //for mail
          alert(`Enter the Email correctly!`)
       }
      }
      else{ //for not empty
        alert(`Please Enter All Details!`)
      }
    };

    return(
        <>
         <div id={styles.mdiv}>
            <div id={styles.signidiv}>
              <div id={styles.adiv}>
              <div className={styles.name}>Username</div><span style={userspanStyle}>Dont use any specialCharacters</span>
                <input className={styles.loginInp} type="name" placeholder="" name="username" value={userCredentials.username} onChange={changeValues}/><br></br><br></br>
                
                <div className={mailname}>Email</div><span style={spanStyle}>{mailErrtext}</span>
                <input className={mailinp} type="mail" placeholder="" name="mail" value={userCredentials.mail} onChange={changeValues}/><br></br><br></br>
                
                <div className={styles.name}>Password</div>
                <input className={styles.loginInp} type="password" placeholder="" name="password" value={userCredentials.password} onChange={changeValues}/><br></br>
                <br></br>
                <button className={styles.loginbtn} type="submit" onClick={localcookie}>SignUp</button><br></br><br></br>
                <span className={styles.ask}>Already have an account?</span><br></br>
                <button className={styles.signupbtn} type="submit" onClick={GotoRoute}>LogIn Account</button><br></br><br></br>

              </div>
            </div>
         </div>
        </>
    )
}

export default SignupCompo;