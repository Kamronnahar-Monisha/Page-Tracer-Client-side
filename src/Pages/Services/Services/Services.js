import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Shared/Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    console.log(services);
    return (
        <div className='container mb-5 py-5'>
            <h3 className='theme-color-gray text-center'>Choose Your Desirable Bookmarks</h3>
            <hr className='custom-hr mt-2' />
            <div className="row my-5 g-5">
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