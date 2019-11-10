import React from 'react';
import NavLinks from './navlinks';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <header id="navbar">
            <img id="navbar-logo" src={logo}></img>
            <NavLinks />
        </header>
    );
}

export default Navbar;