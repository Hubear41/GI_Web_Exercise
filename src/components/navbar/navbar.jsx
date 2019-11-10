import React from 'react';
import NavLinks from './navlinks';
import imageIndex from '../../util/image_index';

const Navbar = () => {
    return (
        <header id="navbar">
            <img id="navbar-logo" src={imageIndex.logo}></img>
            <NavLinks />
        </header>
    );
}

export default Navbar;