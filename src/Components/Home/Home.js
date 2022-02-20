import React from 'react';
import Banner from '../Banner/Banner';
import Certifications from '../Certifications/Certifications';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
// import HeadBanner from '../HeadBanner/HeadBanner';




const Home = () => {
    return (
        <div>
            <Banner />
            {/* <HeadBanner /> */}
            <Services />
            <Certifications />
            <Testimonials />

        </div>
    );
};

export default Home;