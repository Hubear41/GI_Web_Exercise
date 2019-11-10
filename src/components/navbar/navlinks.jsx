import React from 'react';
import NavLinkItem from './navlink_item';

const NavLinks = ({ content, updateDropdown }) => {
    const navlinkItems = content.map(({ href, label, subnavList}) => {
        return <NavLinkItem 
                    key={label}
                    href={href} 
                    label={label} 
                    hasSubnav={Boolean(subnavList)} 
                    updateDropdown={updateDropdown}
                />;
    });
    
    return (
        <ul id="navlinks-list">
            {navlinkItems}
        </ul>
    )
}

export default NavLinks;