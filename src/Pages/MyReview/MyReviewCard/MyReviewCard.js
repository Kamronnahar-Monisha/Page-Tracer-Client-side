import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChatBubbleLeftEllipsis} from "react-icons/hi2";
import './MyReviewCard.css';

const MyReviewCard = ({ review,handleDeleteButton }) => {
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${review.serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [review.serviceId])
    return (
        <div className='shadow p-3 rounded w-50 mx-auto my-5'>
            <div className="row">
                <div className="col-lg-3">
                    <img src={service?.img} className="w-100 rounded" alt="" />
                </div>
                <div className="col-lg-8">
                    <h4 className='theme-color-turquoise'>{service?.name}</h4>
                    <p className='theme-color-gray'>
                        {service?.description?.substr(0, 300) + "..."}
                        <Link to={`/services/${service._id}`} className='text-warning text-decoration-none'>Read more</Link>
                    </p>
                    <div className='review p-3'>
                        <p className='review-heading mb-0'>
                            Your Review
                            <HiChatBubbleLeftEllipsis className='fs-2 ms-2'></HiChatBubbleLeftEllipsis>
                        </p>
                        <p className='theme-color-gray'>{review.reviewText}</p>
                        <div className='text-end'>
                            <Link to={`/edit-review/${review._id}`}>
                                <button className='review-edit-btn rounded'>Edit</button>
                            </Link>
                            <button onClick={()=>handleDeleteButton(review._id)} className='review-delete-btn rounded ms-2'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;

