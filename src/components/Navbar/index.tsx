import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TitleStyle = styled.p`
  font-size: 16px;
`;

const Navbar: React.FC = () => {
    return (
        <nav className='navbar container' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link className='navbar-item' to='/'>
                    <TitleStyle>하늘빛</TitleStyle>
                </Link>
            </div>

            <div className='navbar-end'>
                <a className='navbar-item' href='https://github.com/SkyLightQP'>
                    <p>
                        <FontAwesomeIcon icon={faGithub}/>
                        &nbsp;Github
                    </p>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
