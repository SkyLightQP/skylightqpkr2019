import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechStack from './components/TechStack';

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <TechStack/>
        </>
    );
};

export default App;
