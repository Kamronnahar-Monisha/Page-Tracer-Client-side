import React from 'react';
import './AboutUs.css';
import { PhotoView } from 'react-photo-view';
import aboutUsImg from '../../images/aboutUs.jpg'

const AboutUs = () => {
    return (
        <div className='container about'>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-4">
                    <PhotoView src={aboutUsImg}>
                        <img src={aboutUsImg} alt="" className='w-100 about-img' />
                    </PhotoView>
                    <div className='mt-3 pt-2'>
                        <h4 className='theme-color-gray text-center'>Let's Talk About Our Beautiful Bookmarks</h4>
                        <hr className='custom-hr mt-2 mb-4' />
                    </div>
                </div>
            </div>
            <div className='w-75 mx-auto'>
                <p className='m-0 p-0 about-text text-muted text-lg-center text-justify'>
                    If you read, you probably found out that your need for a bookmark. We never get the chance to finish a book in one sitting without getting interrupted at least once. Everyone reads. Some people read a lot while others just read occasionally, so most people find a way to use a bookmark. So for you we are providing various kind of bookmarks like Custom Printed Bookmarks, Custom Metal Bookmarks, Custom Ribbon Bookmarks etc which will help you for to keep trace your reading.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;