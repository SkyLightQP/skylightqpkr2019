import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechStack from './components/TechStack';
import Project from './components/Project';
import Contact from './components/Link';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <TechStack/>
            <Project/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;
