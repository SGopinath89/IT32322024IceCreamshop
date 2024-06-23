import React from 'react';
import '../CSS/LoginPageStyle.css';
import Navigation from './Navigation';
import Footer from './Footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginImg from '../Images/LoginImg.png';
import { Link } from 'react-router-dom';

function LoginPage(){
    return(
        <>
        <Navigation></Navigation>
        <div className='ContainerLogin'>
            <div className='main1'>
                <h2 className='headingLogin'>Administrator Login</h2>
                <br /><br />
                <div className='inputs'>
                    <AccountCircleIcon className='inputsIcon' fontSize="large"></AccountCircleIcon>&nbsp;
                    <input type='text' placeholder='Username' className='inputsType' />
                    <br /><br/>
                    <LockIcon className='inputsIcon' fontSize="large"></LockIcon>&nbsp;
                    <input type='password' placeholder='Password' className='inputsType'/>
                </div>
                <a href='#' className='forgotPW'>Forgot Password?</a>
                <br /><br />
                <button className='loginButton'><b>LOGIN</b></button>
                <br/>
            
            </div>

            <div className='main2'>
                <img src={LoginImg} className='loginImg'></img>
            </div>

        </div>


        <Footer></Footer>
        
        </>
    )
}

export default LoginPage;