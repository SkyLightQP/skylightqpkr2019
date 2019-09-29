import React from 'react';

const Card: React.FC = ({ children }) => {
    return (
        <div className='card card-content'>
            {children}
        </div>
    );
};

export default Card;
