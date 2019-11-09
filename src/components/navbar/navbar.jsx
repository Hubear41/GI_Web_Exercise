import React from 'react';
import NavLinks from './navlinks';

const Navbar = props => {
    return (
        <header id="navbar">
            <i className="icon"></i>
            <NavLinks />
        </header>
    );
}

export default Navbar;