import React from 'react';
import ProductItem from './product_item';

const DropdownMenu = ({ type, subnavlist }) => {
    let contentItems = null;

    if (type === "Products") {
        contentItems = subnavlist.map((product, idx) => {
            return  <ProductItem
                        key={product.label}
                        number={idx+1}
                        product={product}
                    />
        });
    } else if (type === "Industries") {
        contentItems = subnavlist.map((industry, idx) => {
            return <IndustryItem 
                        key={industry.label}
                        number={idx+1}
                        industry={industry}
                    />
        });
    }

    return (
        <div id="dropdown-menu-wrapper">
            {contentItems}
        </div>
    );
}

export default DropdownMenu;