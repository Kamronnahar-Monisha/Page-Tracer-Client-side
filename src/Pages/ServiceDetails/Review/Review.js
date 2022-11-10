import React from 'react';
import './Review.css';

const Review = ({review}) => {
    return (
        <div className='my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-2">
                    <img src={review.userImg} width="50" height="50" className='rounded-circle' alt="" />
                </div>
                <div className="col-lg-10 shadow rounded">
                    <p className='user-name mb-1 theme-color-turquoise'>{review.name}</p>
                    <p className='theme-color-gray'>{review.reviewText}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;