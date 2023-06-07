import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
                <title>SportsZone Academy/Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;