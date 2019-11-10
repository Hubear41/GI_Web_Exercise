import React from 'react';

const ProductLink = ({ links }) => {
    const linkItems = links.map(link => {
        return (
            <li className="product-link" key={link.title} >
                <strong>{link.title}</strong>
                <span>{link.subtitle}</span>
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