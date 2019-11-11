import React from 'react';
import { Link } from 'react-router-dom';

const NavLinkItems = ({ label, href, hasSubnav, updateDropdown, currentDropdown }) => {
    const isButton = label === "Sign up" || label == "Login";

    const handleMouseEnter = e => {
        if (hasSubnav) {
            updateDropdown({ type: label.toLowerCase(), hidden: false });
        } else {
            updateDropdown({ type: null, hidden: true });
        }
    }

    let className = isButton ? "button" : "navlink-item";
    className += hasSubnav ? " selectable" : ""; 
    className += currentDropdown === label.toLowerCase() ? " selected" : "";

    return (
        <Link 
            to={href} 
            id={label.split(' ').join('').toLowerCase()} 
            className={className}
            onMouseOver={handleMouseEnter}
        >
            {label}
        </Link>
    );
}

export default NavLinkItems;