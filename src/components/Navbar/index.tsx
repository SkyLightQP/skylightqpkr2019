import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar' role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img
                      src="https://bulma.io/images/bulma-logo.png"
                      alt="Bulma: Free, open source, & modern CSS framework based on Flexbox"
                      width="112"
                      height="28"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
