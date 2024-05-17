import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from './Profile.module.css';

function Profile() {
  const [data, setData] = useState(null);
  const [btnText, setBtnText] = useState('Login');
  const [loginBtn, setLoginBtn] = useState({ backgroundColor: 'rgb(6, 188, 9)' });
  const [logoutBtn, setLogoutBtn] = useState({ display: 'none' });

  const navigate = useNavigate();
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    // This useEffect runs whenever 'data' changes
    if (data === null) {
      setBtnText('Login');
      setLoginBtn({ backgroundColor: 'rgb(6, 188, 9)' });
      setLogoutBtn({ display: 'none' });
    } else {
      setBtnText('Logout');
      setLoginBtn({ display: 'none' });
      setLogoutBtn({ backgroundColor: 'red' });
    }
  }, [data]);

  const getUserDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/userprofile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        console.log('Please LogIn ');
      }
    } catch (err) {
      console.log(`ERR FROM Profile Compo : ${err}`);
    }
  };

  const login = () => {
    navigate('/login');
  };

  const logout = () => {
    var now = new Date();
    now.setTime(now.getTime() - 1 * 1000);
    var expires = now.toUTCString();
    document.cookie = 'JWTcookie' + '=; expires=' + expires + '; path=/;';
    navigate('/');
  };

  return (
    <>
      <div id={styles.Pdiv}>
        <div id={styles.userdiv}>
          <div id={styles.imgdiv1}><img src=" " alt=" " /></div>
          <div id={styles.name}><span id={styles.namespan}>Hello...</span><br></br>{data && data.length > 0 ? data[0].user_name : "Guest"}</div><br />
        </div><hr id={styles.hr}></hr>
        <div id={styles.ldiv}>
          <center>
            <button style={loginBtn} className={styles.Btns} onClick={login}>{btnText}</button>
            <button style={logoutBtn} className={styles.Btns} onClick={logout}>{btnText}</button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Profile;
