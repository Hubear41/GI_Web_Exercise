import React from 'react';
import navlinkContent from '../../assets/data/content.json';
import NavLinkItem from './navlink_item';

const NavLinks = props => {
    const navlinkItems = navlinkContent.map(({ href, label, subnavlist}) => {
        return <NavLinkItem 
                    key={label}
                    href={href} 
                    label={label} 
                    subnavlist={subnavlist || null} 
                />;
    });
    
    return (
        <ul id="navlinks-list">
            {navlinkItems}
        </ul>
    )
}

export default NavLinks;