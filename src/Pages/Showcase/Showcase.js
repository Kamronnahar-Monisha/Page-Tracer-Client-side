import React from 'react';
import './Showcase.css';
import showcaseImg from '../../images/showcase-image.svg';
import { Link } from 'react-router-dom';

const Showcase = () => {
    return (
        <div className='container'>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 text-white">
                    <p className="fs-4 m-0 p-0">Personalize Your Reading Experience...</p>
                    <h1 className="fw-bolder"><span className='theme-color-gray heading-highlight'>BookMark</span> The</h1>
                    <h1 className="fw-bolder">Journey Of <span className='theme-color-gray heading-highlight'>Your Reading</span></h1>
                    <p className='py-2 pe-3 showcase-paragraph theme-color-gray'>
                        we have brought you some fantastic bookmark templates which contains some inspirational quotes that will make for a memorable reading experience . 
                    </p>
                    <Link to="/services" className='btn-custom rounded'>Get Started</Link>
                </div>
                <div className="col-lg-6">
                    <img src={showcaseImg} alt="girl marking page" className='w-100' />
                </div>
            </div>
        </div>
    );
};

export default Showcase;