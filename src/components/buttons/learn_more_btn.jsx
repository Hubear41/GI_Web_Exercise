import React from 'react';
import { Link } from 'react-router-dom';

const LearnMoreBtn = ({ href }) => {
    return <Link 
                to={href} 
                className="learn-more-btn"
            >
                Learn more
                <i className="icon-chevron-right1"></i>
            </Link>;
}

export default LearnMoreBtn;