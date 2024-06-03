import React from 'react';
import logo from '../Images/logo.png';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../CSS/NavStyle.css';

function Navigation(){
    return(
        <>
        <header>
            <div className='container container-flex'>
                <div className='Container'>
                    <img src={logo} alt="logo" className='logo' />
                    {/* <h1>YARL <br/> ICE CREAM</h1> */}
                </div>
                <nav>
                    <div className='list'>
                        <NavLink to="/" className="listItem" activeClassName="activeItem"><b>HOME</b></NavLink>
                        <NavLink to="/menu" className="listItem" activeClassName="activeItem"><b>MENU</b></NavLink>
                        <NavLink to="/about" className="listItem" activeClassName="activeItem"><b>ABOUT US</b></NavLink>
                        <NavLink to="/contact" className="listItem" activeClassName="activeItem"><b>CONTACT</b></NavLink>
                    </div>
                </nav>
                <div className='container-icons'>
                    <PersonIcon className='icons'/>
                    <ShoppingCartIcon className='icons'/>
                </div>
            </div>

        </header>
        </>
    )
}

export default Navigation;