import React from 'react';
import HomeImage from '../Images/HomeImg.png';
import '../CSS/HomeStyle.css';

function Home(){
    return(
        <>
        <div className='containerHome'>
            <div className='leftContainer'>
            <img src={HomeImage} alt='HomeImage' className='HomeImage'></img>
            </div>

            <div className='rightContainer'>
                <h1 className='heading'>Real Ice Cream <br/> for <br/> Real Ice Cream Lovers</h1>
                <br/>
                <p className='tagline'>All you need is Love & Ice Cream</p>
                <br/>
                <button className='ButtonTry'><b>Try Now</b></button>
            </div>
            
        </div>
        </>

    )
}

export default Home;