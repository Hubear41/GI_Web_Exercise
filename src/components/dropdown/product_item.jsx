import React from 'react';
import LearnMoreBtn from '../buttons/learn_more_btn';
import ProductLink from './product_link';
import imageIndex from '../../util/image_index';

const ProductItem = ({ product, number }) => {
    const { 
        label, 
        href, 
        description,
        links,
    } = product;

    return (
        <div className={`dropdown-section-${number} product-item`}>
            <img src={imageIndex[href.replace("/", "")]} className="product-image"></img>
            <h1>{label}</h1>
            <p>{description}</p>
            
            <ul>
                {links ? <ProductLink links={links} /> : null}
            </ul>

            <LearnMoreBtn href={href} />
        </div>
    )
}

export default ProductItem