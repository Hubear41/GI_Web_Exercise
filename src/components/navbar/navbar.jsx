import React, { useState, useEffect } from 'react';
import NavLinks from './navlinks';
import Dropdown from '../dropdown/dropdown';
import data from '../../assets/data/content.json';
import imageIndex from '../../util/image_index';

const dropdownContent = () => {
    const labels = {
        products: data.filter(el => el.label === "Products")[0].subnavList,
        industries: data.filter( el => el.label === "Industries")[0].subnavList,
    }

    return { getValue: string => labels[string] };
}

const Navbar = () => {
    const [dropdownType, updateDropdown] = useState(null);
    const [isOverDropdown, updateOverDropdown] = useState(false);
    const content = dropdownContent();

    // reset isOverDropdown to false to hide dropdown if mouse leaves navbar or dropdown
    useEffect(() => {
        document.addEventListener("mousemove", e => {
            // if (e.target === document.getElementById("products")) console.log("Over Products Nav")
            // if (e.target === document.getElementById("industries")) console.log("Over Industries Nav")
            console.log(`is over dropdown: ${isOverDropdown}`)
            // console.log(e.target)
            setTimeout(() => {

            })
            if (!(e.target === document.getElementById("products") || 
                    e.target === document.getElementById("industries")) &&
                !isOverDropdown
                ) {
                    // debugger
                    updateDropdown(null);
                }
        });
    }, []);

    let dropdownComponent = null;
    if (dropdownType === "products") {
        dropdownComponent = <Dropdown 
                                type="PRODUCTS" 
                                subnavList={content.getValue("products")} 
                                updateOverDropdown={updateOverDropdown}
                            />;
    } else if ( dropdownType === "industries") {
        dropdownComponent = <Dropdown 
                                type="INDUSTRIES" 
                                subnavList={content.getValue("industries")} 
                                updateOverDropdown={updateOverDropdown}
                            />;
    }

    return (
        <header id="navbar">
            <img id="navbar-logo" src={imageIndex.logo}></img>
            <NavLinks content={data} updateDropdown={updateDropdown} />
            {dropdownComponent}
        </header>
        
    );
}

export default Navbar;