import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Shared/Service/Service';
import './LimitedService.css';

const LimitedService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://page-tracer-server-site.vercel.app/services?size=3')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container mb-5 py-5'>
            <h3 className='theme-color-gray text-center'>Most Popular Bookmarks</h3>
            <hr className='custom-hr mt-2' />
            <div className="row justify-content-between my-lg-5 my-2 gy-5">
                {
                    services.length ?
                        services.map(service => <Service key={service._id} service={service}></Service>)
                        :
                        <div className='d-flex justify-content-center'>
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            </div>
            <div className='text-center mb-3 mt-5 mt-lg-0'>
                <Link to='/services'>
                    <button className='btn btn-warning text-white fs-5'>Explore More BookMarks</button>
                </Link>
            </div>
        </div>
    );
};

export default LimitedService;