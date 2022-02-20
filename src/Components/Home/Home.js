import React from 'react';
import Banner from '../Banner/Banner';
import Certifications from '../Certifications/Certifications';
import Services from '../Services/Services';
// import HeadBanner from '../HeadBanner/HeadBanner';




const Home = () => {
    return (
        <div>
            <Banner />
            {/* <HeadBanner /> */}
            <Services />
            <Certifications />

        </div>
    );
};

export default Home;