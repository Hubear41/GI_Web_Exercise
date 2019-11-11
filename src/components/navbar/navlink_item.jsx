import React from 'react';
import { Link } from 'react-router-dom';

const NavLinkItems = ({ label, href, hasSubnav, updateDropdown }) => {
    const isButton = label === "Sign up" || label == "Login";

    const handleMouseEnter = e => {
        if (hasSubnav) {
            updateDropdown({ type: label.toLowerCase(), hidden: false });
        } else {
            updateDropdown({ type: null, hidden: true });
        }
    }

    return (
        <Link 
            to={href} 
            id={label.split(' ').join('').toLowerCase()} 
            className={isButton ? "button" : "navlink-item"}
            onMouseOver={handleMouseEnter}
        >
            {label}
        </Link>
    );
}

export default NavLinkItems;