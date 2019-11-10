import React from 'react';
import imageIndex from '../../util/image_index';

const IndustryItem = ({ industry, idx }) => {
    const { label } = industry;

    const imageSrc = imageIndex[`industries/${label.replace(new RegExp(" ", 'g'), "-").toLowerCase()}`];

    return (
        <figure className={`dropdown-section-${idx} industry-item`}>
            <img 
                src={imageSrc} 
                alt={label}
                className="industry-image"
            />
            <figcaption>{label}</figcaption>
        </figure>
    );
};

export default IndustryItem;