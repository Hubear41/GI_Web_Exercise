import React from 'react';
import { Link } from 'react-router-dom';

const NavLinkItems = ({ label, href, subnavlist }) => {
    const isButton = label === "Sign up" || label == "Login";

    return (
        <Link 
            to={href} 
            id={label.split(' ').join('').toLowerCase()} 
            className={isButton ? "button" : "navlink-item"}
        >
            {label}
        </Link>
    );
}

export default NavLinkItems;