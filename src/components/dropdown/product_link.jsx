import React from 'react';

const ProductLinks = ({ links }) => {
    const { title, subtitle } = links;

    const linkItems = links.map(link => {
        return (
            <li className="product-link">
                <strong>{title}</strong>
                <span>{subtitle}</span>
                <i className="icon-chevron-right1"></i>
            </li>
        );
    });
}

export default ProductLinks;