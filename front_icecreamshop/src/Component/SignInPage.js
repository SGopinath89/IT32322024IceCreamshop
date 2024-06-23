import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import LoginImg from "../Images/LoginImg.png";
import "../CSS/SignInStyle.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';


function AdminHomePage(){
    return(
        <>
        <Navigation></Navigation>
        <div className='ContainerSignIn'>
            <div className='main1SignIn'>
                <img src={LoginImg} alt="LoginImg" className="LoginImgSignIn"></img>
            </div>

            <div className='main2SignIn'>
                <h2 className="HeadingSignIn"><b>Sign In</b></h2>
                <br />
                <div className='inputs'>
                    <AccountCircleIcon className='inputsIcon' fontSize="large"></AccountCircleIcon>&nbsp;
                    <input type='text' placeholder='Username' className='inputsType' />
                    <br/><br/>
                    <EmailIcon className='inputsIcon' fontSize="large"></EmailIcon>&nbsp;
                    <input type='email' placeholder='Username' className='inputsType' />
                    <br /><br/>
                    <LockIcon className='inputsIcon' fontSize="large"></LockIcon>&nbsp;
                    <input type='password' placeholder='Password' className='inputsType'/>
                    <br /><br/>
                    <LockIcon className='inputsIcon' fontSize="large"></LockIcon>&nbsp;
                    <input type='password' placeholder='Password' className='inputsType'/>
                </div>
            </div>

        </div>
        <Footer></Footer>
        </>
    )
}

export default AdminHomePage;