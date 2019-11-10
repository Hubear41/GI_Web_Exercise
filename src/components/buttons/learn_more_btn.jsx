import React from 'react';
import { Link } from 'react-router-dom';

const LearnMoreBtn = ({ href }) => {
    return <Link 
                to={href} 
                className="learn-more-btn"
            />;
}

export default LearnMoreBtn;