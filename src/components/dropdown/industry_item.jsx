import React from 'react';
import imageIndex from '../../util/image_index';

const IndustryItem = ({ industry, number }) => {
    const { label } = industry;

    const imageSrc = imageIndex[`industries/${label.replace(new RegExp(" ", 'g'), "-").toLowerCase()}`];
    
    return (
        <figure className={`dropdown-section-${number} industry-item`}>
            <img 
                src={imageSrc} 
                alt={label}
                className="industry-image"
            />
            <figcaption className='industry-label'>{label}</figcaption>
        </figure>
    );
};

export default IndustryItem;