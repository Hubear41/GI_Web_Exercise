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
    const content = dropdownContent();

    useEffect(() => {
        document.addEventListener("mousemove", e => {
            // console.log(e.target)
            // if (e.target !== document.getElementById("products") || 
            //     e.target !== document.getElementById("industries") ||
            //     )
        });
    }, []);

    let dropdownComponent = null;
    if (dropdownType === "products") {
        dropdownComponent = <Dropdown type="PRODUCTS" subnavList={content.getValue("products")} />;
    } else if ( dropdownType === "industries") {
        dropdownComponent = <Dropdown type="INDUSTRIES" subnavList={content.getValue("industries")} />
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