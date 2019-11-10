import React from 'react';
import ProductItem from './product_item';
import IndustryItem from './industry_item';

const DropdownMenu = ({ type, subnavList, updateOverDropdown }) => {
    let contentItems = null;

    if (type === "PRODUCTS") {
        contentItems = subnavList.map((product, idx) => {
            return  <ProductItem
                        key={product.label}
                        number={idx+1}
                        product={product}
                    />
        });
    } else if (type === "INDUSTRIES") {
        contentItems = subnavList.map((industry, idx) => {
            return <IndustryItem 
                        key={industry.label}
                        number={idx+1}
                        industry={industry}
                    />
        });
    }

    return (
        <div id="dropdown-menu">
            <div id="dropdown-menu-wrapper"
                onMouseOver={e => updateOverDropdown(true)}
                onMouseLeave={e => updateOverDropdown(false)}
            >
                {contentItems}
            </div>
        </div>
    );
}

export default DropdownMenu;