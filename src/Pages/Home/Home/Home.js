import React from 'react';
import Header from '../../Shared/Header/Header';
import './Home.css';
import showcaseBg from '../../../images/home-showcase-bg.svg';
import Footer from '../../Shared/Footer/Footer';
import Showcase from '../Showcase/Showcase';
import LimitedService from '../LimitedService/LimitedService';
import Contact from '../Contact/Contact';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {

    const homeBg = {
        backgroundImage: `url(${showcaseBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom:'50px'
    }

    return (
        <div>
            <div style={homeBg} className='mb-5'>
                <div className="container">
                    <Header></Header>
                    <Showcase></Showcase>
                </div>
            </div>
            <LimitedService></LimitedService>
            <Contact></Contact>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;