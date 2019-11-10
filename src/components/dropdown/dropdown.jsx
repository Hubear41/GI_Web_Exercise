import React from 'react';
import ProductItem from './product_item';

const DropdownMenu = ({ type, subnavlist }) => {
    let contentItems = [];

    if (type === "Products") {
        contentItems = subnavlist.forEach((product, idx) => {
            return  <ProductItem
                        key={product.label}
                        number={idx+1}
                        product={product}
                    />
        });
    }

    return (
        <div id="dropdown-menu-wrapper">

        </div>
    );
}

export default DropdownMenu;