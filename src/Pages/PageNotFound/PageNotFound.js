import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import pageNotFoundImg from '../../images/page-not-found.gif';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div className='row justify-content-center align-items-center'>
                <div className="col-lg-5 text-center">
                    <img src={pageNotFoundImg} alt="page not found" />
                    <Link className='btn-custom rounded' to='/'>
                        <FaArrowLeft className='me-2' />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;