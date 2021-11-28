import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import FeaturedServices from './FeaturedServices/FeaturedServices';
import Feature from './Features/Feature';
import Slider from './HomeSlider/Slider';
import Testimonial from './Testimonials/Testimonial';

const Home = () => {
    return (
        <section className="pageWrapper">
            <div className="pageBody">
                <Header />
                <Slider />
                <FeaturedServices />
                <Feature />
                <Testimonial />
                <Footer />
                
            </div>
        </section>
    );
};

export default Home;