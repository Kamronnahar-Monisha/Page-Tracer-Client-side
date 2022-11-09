import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebookSquare,FaWhatsappSquare,FaInstagramSquare} from 'react-icons/fa';
import './Footer.css';
import logo from '../../../images/logo1.svg'

const Footer = () => {
    return (
        <div className='bg-theme-color'>
            <div className="container">
                <div className="row justify-content-between align-items-center py-4">
                    <div className="col-lg-6">
                        <Link className="navbar-brand" to="/home">
                            <img width="40" src={logo} alt="logo of this website" />
                            <span className='text-white fs-4 fw-semibold'>PAGE TRACER</span>
                        </Link>
                        <p className='text-white'>Copyright © 2022. Kamronnahar Monisha.</p>
                    </div>
                    <div className="col-lg-6 fs-3 text-end">
                        <a href="https://www.facebook.com/kamronnahar.monisha/" target="_blank" rel="noreferrer">
                            <FaFacebookSquare className='text-white'/>
                        </a>
                        <a href="https://www.instagram.com/kamronnahar_monisha/" target="_blank" rel="noreferrer">
                            <FaWhatsappSquare className='text-white ms-5'/>
                        </a>
                        <a href="https://www.instagram.com/kamronnahar_monisha/" target="_blank" rel="noreferrer">
                            <FaInstagramSquare className='text-white ms-5'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;