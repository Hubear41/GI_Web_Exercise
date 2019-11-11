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

    const imageSrc = imageIndex[`products/${label.replace(new RegExp(" ", 'g'), "-").toLowerCase()}`];
    
    return (
        <section className={`dropdown-section-${number} product-item`}>
            <img 
                className="product-image"
                src={imageSrc} 
                alt={label}
            ></img>
            <h1 className="navbar-title-big">{label}</h1>
            <p className="product-description navbar-subtitle">{description}</p>
            
            {links ? <ProductLink links={links} /> : null}

            <LearnMoreBtn href={href} />
        </section>
    )
}

export default ProductItem