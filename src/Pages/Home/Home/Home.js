import React from 'react';
import Header from '../../Shared/Header/Header';
import './Home.css';
import showcaseBg from '../../../images/home-showcase-bg.svg';
import Showcase from '../../Showcase/Showcase';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {

    const homeBg = {
        backgroundImage: `url(${showcaseBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom:'50px'
    }

    return (
        <div>
            <div style={homeBg}>
                <div className="container">
                    <Header></Header>
                    <Showcase></Showcase>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;