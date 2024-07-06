import React from 'react';
import { useState } from "react";
import '../CSS/LoginPageStyle.css';
import Navigation from './Navigation';
import Footer from './Footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginImg from '../Images/LoginImg.png';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import axios from "axios";
import MenuPage from './MenuPage';

function LoginPage(){
    const [data, setData] = useState([]);
  const [ttmail, setTmail] = useState('');
  const [tpwd, setTpwd] = useState('');
  const [check, setCheck] = useState(false);

  const [encryptedPassword, setEncryptedPassword] = useState('');

  const show = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5000/registrations");
      if (res.data === "fail") {
        alert("Failed");
      } else {
        setData(res.data);
        const user = res.data.find((e) => e.email === ttmail);
        if (user) {
          setEncryptedPassword(user.encryptedPassword);
          const passwordMatch = bcrypt.compareSync(tpwd, user.encryptedPassword);
          setCheck(passwordMatch);
          if (!passwordMatch) {
            alert('Invalid Password!!!');
          }
        } else {
          alert('Invalid Email!!!');
        }
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while fetching data.');
    }
  };
    return(
        <>
        {check ? (
      < MenuPage/>
    ) : (
    <>

        <Navigation></Navigation>
        <div className='ContainerLogin'>
            <div className='main1'>
                <h2 className='headingLogin'>Best Prices We Offer for<br/> Ice Cream <br /> Lovers</h2>
                <br />
                <div className='inputs'>
                    <AccountCircleIcon className='inputsIcon' fontSize="large"></AccountCircleIcon>&nbsp;
                    <input type='text' placeholder='E-mail' className='inputsType' required onChange={(e) => { setTmail(e.target.value) }}/>
                    <br /><br/>
                    <LockIcon className='inputsIcon' fontSize="large"></LockIcon>&nbsp;
                    <input type='password' placeholder='Password' className='inputsType' required onChange={(e) => { setTpwd(e.target.value) }}/>
                </div>
                <a href='#' className='forgotPW'>Forgot Password?</a>
                <br /><br />
                <button className='loginButton' onClick={show}><b>LOGIN</b></button>
                <br/>
                <Link to='/LoginAdministrator' style={{textDecoration:'none'}}>Login as an Administrator</Link>
                <br/><br/>
                <p>Create an account? <Link to="/SignIn" className='SignInLink' style={{textDecoration:'none'}}>Sign In</Link></p>
            </div>

            <div className='main2'>
                <img src={LoginImg} className='loginImg'></img>
            </div>

        </div>


        <Footer></Footer>
        
        </>
        )}
     </>
    );

}


export default LoginPage;