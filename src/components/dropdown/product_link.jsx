import React from 'react';

const ProductLink = ({ links }) => {
    const linkItems = links.map(link => {
        return (
            <li className="product-link" key={link.title} >
                <span>
                    <strong>{link.title}</strong>
                    {link.subtitle}
                    <i className="icon-chevron-right1" ></i>
                </span>
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