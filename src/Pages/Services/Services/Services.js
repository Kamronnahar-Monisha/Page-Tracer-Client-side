import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Shared/Service/Service';
import './Services.css';

const Services = () => {
    const services  = useLoaderData();
    console.log(services);
    return (
        <div className='container mb-5 py-5'>
            <h3 className='theme-color-gray text-center'>Choose Your Desirable Bookmarks</h3>
            <hr className='custom-hr mt-2' />
            <div className="row my-5 g-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;