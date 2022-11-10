import React, { useEffect, useState } from 'react';
import Service from '../../Shared/Service/Service';
import './Services.css';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://page-tracer-server-site.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='container mb-5 py-5'>
             <Helmet>
                <title>Bookmarks</title>
            </Helmet>
            <h3 className='theme-color-gray text-center'>Choose Your Desirable Bookmarks</h3>
            <hr className='custom-hr mt-2' />
            <div className="row my-lg-5 mt-3 g-5">
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
        </div>
    );
};

export default Services;