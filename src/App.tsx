import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Project from './components/Project';

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <TechStack/>
            <Project/>
        </>
    );
};

export default App;
