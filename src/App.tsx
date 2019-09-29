import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Project from './components/Project';
import Contact from './components/Link';

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <TechStack/>
            <Project/>
            <Contact/>
        </>
    );
};

export default App;
