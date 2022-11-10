import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
import './Service.css';

const Service = ({ service }) => {
    return (
        <div className='col-lg-4'>
            <div className='rounded shadow-lg mx-2'>
                <PhotoView src={service.img}>
                    <img src={service.img} alt="bookmark" className='w-100 rounded-top' />
                </PhotoView>
                <div className='p-4'>
                    <p className='theme-color-turquoise fs-5 mb-0'>{service.name}</p>
                    <div className="row justify-content-between">
                        <p className='col-lg-6'>
                            <FaStar className='text-warning me-2'></FaStar>
                            {service.rating}
                        </p>
                        <p className='col-lg-6 text-end'>${service.price}</p>
                    </div>
                    <p>
                        {service.description.substr(0, 100) + "... "}
                        <Link to={`/services/${service._id}`} className='text-warning text-decoration-none'>Read more</Link>
                    </p>
                    <div className='text-center mb-3'>
                        <Link to={`/services/${service._id}`}>
                            <button className='register-logout-button rounded'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;