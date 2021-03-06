import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import News from '../News/News';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <News></News>
            <Contact></Contact>
        </div>
    );
};

export default Home;