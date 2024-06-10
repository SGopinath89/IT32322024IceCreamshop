import React from 'react'
import Navigation from './Navigation';
import ContactImg from '../Images/ContactImg.jpg';
import '../CSS/ContactStyle.css';
import HomeIcon from '@mui/icons-material/Home';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';

function ContactPage(){
    return(
        <>
        <Navigation></Navigation>
        <div className='headerImg'>
            <img className='ContactImg' src={ContactImg} alt='ContactImg'></img>
        </div>

        <div className='containerContact'>
            <div className='leftsideDiv'>
                <h3>Have a question?</h3>
                <p>If you have any question, share it with Us, Enjoy your life and Taste Ice Iceam...</p>
                <label>FirstName</label><br/>
                <input type='text' placeholder='Enter your FirstName' className='inputItems' /><br/><br />
                <label>LastName</label><br />
                <input type='text' placeholder='Enter your LastName' className='inputItems'/><br/><br />
                <label>Email</label><br/>
                <input type='email' placeholder='Enter your Email' className='inputItems' /><br/><br />
                <label>Message</label><br/>
                <textarea rows='5' cols='20' placeholder='Write your message or question here' className='inputItemsArea'></textarea><br />
                <br/>
                <button className='ButtonMsg'>SEND MESSAGE</button>
            </div>

            <div className='rightsideDiv'>
                <h3>Get in Touch</h3>
                <p>We love to hear from you. Our friendly team is always here to chat.</p>
                
                <HomeIcon></HomeIcon>&nbsp;
                <b>Address</b><br />123, Mannar rd, Vavuniya
                <br /><br />
                <PermPhoneMsgIcon></PermPhoneMsgIcon>&nbsp;
                <b>Phone</b><br />+9123456789
                <br /><br />
                <EmailIcon></EmailIcon>&nbsp;
                <b>Email</b><br />yarlicecream@vaugamil.com

            </div>
        </div>
        </>
        
    )
}

export default ContactPage;