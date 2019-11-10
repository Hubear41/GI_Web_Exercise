import React from 'react';

const ProductLink = ({ links }) => {
    const { title, subtitle } = links;

    const linkItems = links.map(link => {
        return (
            <li className="product-link" key={title} >
                <strong>{title}</strong>
                <span>{subtitle}</span>
                <i className="icon-chevron-right1" ></i>
            </li>
        );
    });

    return (
        <ul className='dropdown-link-list'>
            {linkItems}
        </ul>
    );
}

export default ProductLink;