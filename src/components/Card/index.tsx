import React from 'react';
import styled from 'styled-components';

const WrapperStyle = styled.div`
  margin-bottom: 16px;
`;

const Card: React.FC = ({ children }) => {
    return (
        <WrapperStyle>
            <div className='card card-content'>
                {children}
            </div>
        </WrapperStyle>
    );
};

export default Card;
