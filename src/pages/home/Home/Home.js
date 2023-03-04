import React from 'react';
import About from '../about/About';
import Banner from '../Banner';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;