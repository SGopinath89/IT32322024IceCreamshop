import React from "react";
import '../CSS/FooterStyle.css';
import logoFooter from '../Images/logo.png';

function Footer(){
    return(
        <>
        <div className="container">
            <div className="logoFooter">
                <img src={logoFooter} alt='logoFooter' className="logo"></img>
            </div>
            <div className="container-Footer">
                <div className="container1">
                    <h3>Get in Touch</h3>
                    <br></br>
                    <p>123, Mannar rd, Vavuniya</p>
                    <p>+94 70 123 1234</p>
                </div>

                <div className="container2">
                    <h3>Opening Hours</h3>
                    
                    <p>Mon - Sat : 8 AM to 5 PM</p>
                    <p>Sunday Closed</p>
                    <p>Holidays Opened</p>
                </div>
            </div>
            <br></br>
            
        </div>
        </>
    )
}

export default Footer;