import React from 'react';
import HomeImage from '../Images/HomeImg.png';
import '../CSS/HomeStyle.css';
import Navigation from './Navigation';
import Footer from './Footer';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
        <Navigation></Navigation>
        <div className='containerHome'>
            <div className='leftContainer'>
                <img src={HomeImage} alt='HomeImage' className='HomeImage'></img>
                <br /><br />
                <div className='iconSocial'>
                    <FacebookSharpIcon className='IconsHome'></FacebookSharpIcon>
                    <TwitterIcon className='IconsHome'></TwitterIcon>
                    <InstagramIcon className='IconsHome'></InstagramIcon>
                    <LinkedInIcon className='IconsHome'></LinkedInIcon>
                </div>
            </div>

            <div className='rightContainer'>
                <h2 className='heading'>Real Ice Cream <br/> for <br/> Real Ice Cream Lovers</h2>
                <br/>
                <p className='tagline'>All you need is Love & Ice Cream</p>
                <br/>
                <Link to='/login'><button className='ButtonTry'><b>Try Now</b></button></Link>
            </div>
            
        </div>
        <Footer></Footer>
        </>

    )
}

export default Home;