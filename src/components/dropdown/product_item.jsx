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
        <section className={`dropdown-section-${number} product-item`}>
            <img 
                className="product-image"
                src={imageIndex[href.replace("/", "")]} 
                alt={label}
            ></img>
            <h1>{label}</h1>
            <p>{description}</p>
            
            <ul>
                {links ? <ProductLink links={links} /> : null}
            </ul>

            <LearnMoreBtn href={href} />
        </section>
    )
}

export default ProductItem