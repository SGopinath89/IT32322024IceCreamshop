import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import LoginImg from "../Images/LoginImg.png";
import "../CSS/SignInStyle.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import axios from "axios";
import { useState } from 'react';
import bcrypt from 'bcryptjs';


function AdminHomePage(){
  const [name, setName] = useState(' ')
  const [pwd, setPwd] = useState(' ')
  const [repwd, setrePwd] = useState(' ')
  const [email, setMail] = useState(' ')
  const [contact, setContact] = useState()
  const [data, setData] = useState([])
  const [encryptedPassword, setEncryptedPassword] = useState('');
  


  const handleEncrypt = () => {
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pwd, salt, (err, hash) => {
            if (err) {
                console.error(err);
                return;
            }
            setEncryptedPassword(hash);
        });
    });
}
let submit = async (e) => {
    e.preventDefault()
    if (name == ' ' || pwd == ' ' || email == ' ') {
        alert('Please fill the details !!')
    }
    else if(pwd!=repwd)
        {
            alert('Password and Re-Password does not match !!')
        }
    else {
        try {
            handleEncrypt()
            await axios.post("http://localhost:5000/registrations", {
                name,
                email,
                contact,
                encryptedPassword,
            })
            alert("Sign in completed!!!")
        }
        catch {
            console.log(e);
        }
    }

}
let show = async (e) => {
    e.preventDefault()
    try {
        await axios.get("http://localhost:5000/registrations").then(res => {
            if (res.data === "fail") {
                alert("Failed")
            }
            else {
                setData(res.data)
            }
        })
            .catch(e => {

            })
    }
    catch {
        console.log(e);
    }
}
function reset() {
    setName(' ');
    setPwd(' ');
    setContact(' ');
    setMail(' ');
    setrePwd(' ');
}

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
                    <input type='text' placeholder='Username' className='inputsType' required onChange={(e) => { setName(e.target.value) }} />
                    <br/><br/>
                    <EmailIcon className='inputsIcon' fontSize="large"></EmailIcon>&nbsp;
                    <input type='email' placeholder='E Mail' className='inputsType' onChange={(e) => { setMail(e.target.value) }}/>
                    <br /><br/>
                    <LockIcon className='inputsIcon' fontSize="large"></LockIcon>&nbsp;
                    <input type='password' placeholder='Password' className='inputsType' onChange={(e) => { setPwd(e.target.value) }}/>
                    <br /><br/>
                    <LockIcon className='inputsIcon' fontSize="large"></LockIcon>&nbsp;
                    <input type='password' placeholder='ReEnter Password' className='inputsType' onChange={(e) => { setrePwd(e.target.value) }}/>
                    <br /><br/>
                    <EmailIcon className='inputsIcon' fontSize="large"></EmailIcon>&nbsp;
                    <input type='text' placeholder='Phone Number' className='inputsType' onChange={(e) => { setContact(e.target.value) }}/>
                    <br /><br />
                <button className='loginButton' onClick={submit}><b>SignIn</b></button>
                <br/>
                <br/>
                <button className='loginButton' onClick={reset}><b>Reset</b></button>
                <br/>
                </div>
            </div>

        </div>
        <Footer></Footer>
        </>
    )
}

export default AdminHomePage;