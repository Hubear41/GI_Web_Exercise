import React from 'react';
import navlinkContent from '../../assets/data/content.json';

const NavLinks = props => {
    
    const navlinkItems = navlinkContent.map( (e, idx) => e);
    debugger
    return (
        <ul>
            {navlinkItems}
        </ul>
    )
}

export default NavLinks;