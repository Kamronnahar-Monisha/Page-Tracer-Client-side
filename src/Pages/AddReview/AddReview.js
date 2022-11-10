import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './AddReview.css';
import reviewImg from '../../images/reviewImg.gif';
import { Helmet } from 'react-helmet-async';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const navigate = useNavigate();

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.review.value;
        if(!reviewText){
            alert('Please Enter a valid Review');
            return;
        }
        form.reset();
        const review = {
            reviewText,
            name: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            serviceId: service._id
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Review added Sucessfully');
                navigate(`/services/${service._id}`);
            }
        });
    };

    return (
        <div className='container my-5'>
            <Helmet>
                <title>Add A Review</title>
            </Helmet>
            <div className="row justify-content-around align-items-center">
                <div className="col-lg-5">
                    <img src={reviewImg} alt="" className='w-100' />
                </div>
                <div className="col-lg-5">
                    <div>
                        <h3 className='theme-color-gray text-center'>Write Your Thought About This BookMark</h3>
                        <hr className='custom-hr mt-2 mb-5' />
                    </div>
                    <form onSubmit={handleAddReview}>
                        <div className="row">
                            <div className="col-lg-10">
                                <textarea className="form-control" placeholder="Enter Your Review" id="floatingTextarea" name="review"></textarea>
                            </div>
                            <div className="col-lg-2">
                                <button type='submit' className='register-logout-button rounded my-2'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;