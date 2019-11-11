import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import NavLinks from './navlinks';
import Dropdown from '../dropdown/dropdown';
import data from '../../assets/data/content.json';
import imageIndex from '../../util/image_index';

const products = data.filter(el => el.label === "Products")[0].subnavList;
const industries = data.filter(el => el.label === "Industries")[0].subnavList;

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

    let dropdownComponent = null;
    if (!dropdown.hidden) {
        if (dropdown.type === "products") {
            dropdownComponent = <Dropdown 
                                    type="PRODUCTS" 
                                    subnavList={products} 
                                    updateDropdown={updateDropdown}
                                />;
        } else if (dropdown.type === "industries") {
            dropdownComponent = <Dropdown 
                                    type="INDUSTRIES" 
                                    subnavList={industries} 
                                    updateDropdown={updateDropdown}
                                />;
        }
    }

    // removes dropdown user navigates away from navlinks
    const handleMouseOver = e => {
        e.stopPropagation();
        if (e.target === document.getElementById("navbar")) {
            updateDropdown({ hidden: true, type: null });
        }
    }

    const handleClick = e => {
        props.history.push('/');
    }

    return (
        <header id="navbar" onMouseOver={handleMouseOver}>
            <img 
                id="navbar-logo" 
                src={imageIndex.logo}
                onClick={handleClick}
            ></img>

            <NavLinks 
                content={data} 
                updateDropdown={updateDropdown} 
                currentDropdown={dropdown.type} 
            />

            {dropdownComponent}
        </header>
        
    );
}

export default withRouter(Navbar);