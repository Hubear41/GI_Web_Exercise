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

// create a custom mergedSetState method
const useMergedState = initialState => {
    const [state, setState] = useState(initialState);
    const setMergedState = newState => {
        setState(prevState => {
            return Object.assign({}, prevState, newState)
        });
    };
    return [state, setMergedState];
}

const Navbar = () => {
    const [dropdown, updateDropdown] = useMergedState({ type: null, hidden: true });
    const content = dropdownContent();

    // useEffect(() => {
    //     document.addEventListener("mouseover", e => {
    //         console.log(`is over dropdown: ${dropdown.overDropdown}`);

    //         // console.log(e.target)
    //         if (!dropdown.overDropdown && 
    //             e.target !== document.getElementById("products") && 
    //             e.target !== document.getElementById("industries") &&
    //             ) {
    //                 console.log(e.target)
    //                 updateDropdown({type: null, hidden: true});
    //             }
    //     });
    // }, []);

    let dropdownComponent = null;
    if (!dropdown.hidden) {
        if (dropdown.type === "products") {
            dropdownComponent = <Dropdown 
                                    type="PRODUCTS" 
                                    subnavList={content.getValue("products")} 
                                    updateDropdown={updateDropdown}
                                />;
        } else if (dropdown.type === "industries") {
            dropdownComponent = <Dropdown 
                                    type="INDUSTRIES" 
                                    subnavList={content.getValue("industries")} 
                                    updateDropdown={updateDropdown}
                                />;
        }
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