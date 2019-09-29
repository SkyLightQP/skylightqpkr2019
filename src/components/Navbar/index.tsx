import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;


const Navbar: React.FC = () => {
    return (
        <nav className='navbar container' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='navbar-item' href='https://bulma.io'>
                    <TitleStyle>하늘빛</TitleStyle>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
