import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AboutUsImg from '../Images/AboutUs.jpg';
import AboutImg2 from '../Images/AboutImg2.jpg';
import AboutImg3 from '../Images/AboutImg3.jpg';
import '../CSS/AboutUsStyle.css';


function AboutUsPage(){
    return(
        <>
        <Navigation></Navigation>
        <div>
            <img src={AboutUsImg} className='aboutusImg' alt='aboutUsImg'></img>
        </div>

        <div className='AboutContainer'>
            <div className='aboutLeft'>
                <h3 className='headingAbout1'>The Best Ice Cream in Town</h3>
                <p>The Yarl Ice Cream story began with our love for creating sweet frozen desserts that delight every palate and satisfy any sweet tooth.  
                    Ice cream makes everyone happy. I realized there were no ice cream shops in the area and we love ice cream, so we thought it would be 
                    perfect to offer something that would please us as well as many others. </p>
                <p>There is always something for everyone when it comes to ice cream, with so many flavors and toppings.  That's why we're committed to using the highest quality ingredients for all of our ice cream. 
                    So whether you're looking for a delicious classic flavor or want to try something unique, our ice cream shop always aims to please you.</p>
                <p>So make us your go-to place for amazing ice cream. We'll be happy to welcome you with a smile and the tastiest frozen treats!</p>

            </div>

            <div className='aboutRight'>
                <img src={AboutImg2} className='AboutImg2' alt='aboutImg2'/>
            </div>
        </div>

        <div className='AboutContainer2'>
            <div className='aboutusLeft'>
                <img src={AboutImg3} className='aboutusImg3' alt='aboutImg3' />
            </div>
            <div className='aboutusRight'>
                <h2 className='headingAbout2'>Classics</h2>
                <p>A range for your regular refreshment, these flavours are budget friendly and mental for 
                    your daily delight!
                </p>
                <br />
                <h2 className='headingAbout2'>Premium</h2>
                <p>Flavour that's not too dark and not too light. It's the perfect amount of 
                    chocolate to brightenup your day!
                </p>
                <br />
                <h2 className='headingAbout2'>Black</h2>
                <p>We promise you that the delicious scoops on our menu will be anything but plain and simple.</p>

                <br/><br/>
                <button className='btnAboutUs'>See Menu</button>
            </div>
        </div>
        <br /><br />
        <Footer></Footer>
        
        </>
    )
}

export default AboutUsPage;