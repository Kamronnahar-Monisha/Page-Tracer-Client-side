import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
import Review from '../Review/Review';
import './ServiceDetails.css';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://page-tracer-server-site.vercel.app/orders?serviceId=${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [service._id]);

    return (
        <div>
            <Helmet>
                <title>{service.name}</title>
            </Helmet>
            <div className="container my-5">
                <div className="row justify-content-around">
                    <div className='col-lg-5'>
                        <div className='rounded shadow-lg mx-2'>
                            <PhotoView src={service.img}>
                                <img src={service.img} alt="bookmark" className='w-100 rounded-top service-details-img' />
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
                                    {service.description}
                                </p>
                                <div className='text-center mb-3'>
                                    <Link to=''>
                                        <button className='register-logout-button rounded'>Add To Cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <Link to={`/review/${service._id}`}>
                            <button type='submit' className='review-button rounded my-2 w-100 py-2 text-center fs-5'>
                                Share Your Thought with us
                                <HiChatBubbleLeftEllipsis className='fs-2 ms-2'></HiChatBubbleLeftEllipsis>
                            </button>
                        </Link>
                        <div>
                            {
                                reviews.map(review => <Review key={review._id} review={review}></Review>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;