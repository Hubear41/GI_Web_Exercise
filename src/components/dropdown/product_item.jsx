import React from 'react';
import LearnMoreBtn from '../buttons/learn_more_btn';

const ProductItem = ({ product, number }) => {
    const { 
        label, 
        href, 
        description,
        links,
    } = product;

    return (
        <div className={`dropdown-section-${number} product-item`}>
            <img></img>
            <h1>{label}</h1>
            <p>{description}</p>
            <LearnMoreBtn href={href} />
        </div>
    )
}

export default ProductItem