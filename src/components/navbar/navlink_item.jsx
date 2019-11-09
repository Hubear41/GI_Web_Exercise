import React from 'react';

const NavLinkItems = ({ label, href, subnavlist }) => {
    return (
        <a id={label.toLowerCase()} className="navlink-item" href={href}>{label}</a>
    );
}

export default NavLinkItems;