import React from 'react';
import imageIndex from '../../util/image_index';

const IndustryItem = ({ industry, idx }) => {
    const { label } = industry;

    return (
        <figure className={`dropdown-section-${idx} industry-item`}>
            <img src={label.replaceAll(" ", "-").toLowerCase()} alt={label}/>
            <figcaption>{label}</figcaption>
        </figure>
    );
};

export default IndustryItem;