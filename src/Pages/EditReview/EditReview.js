import React from 'react';
import './EditReview.css';
import reviewEditImg from '../../images/edit-review.gif';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditReview = () => {
    const review = useLoaderData();
    const navigate =useNavigate();

    const handleEditReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const editedReview = form.editedReview.value;

        fetch(`http://localhost:5000/orders/${review._id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({editedReview})
        })
        .then(res => res.json())
        .then((data => {
            if(data.acknowledged){
                form.reset();
                alert('successfully updated');
                navigate('/my-review');
            }
        }))
        .catch(error=>alert(error.massage));
    };

    return (
        <div className='container my-5'>
            <div className="row justify-content-around align-items-center">
                <div className="col-lg-5">
                    <img src={reviewEditImg} alt="" className='w-100' />
                </div>
                <div className="col-lg-5">
                    <div>
                        <h3 className='theme-color-gray text-center'>Edit Your Previous Review</h3>
                        <hr className='custom-hr mt-2 mb-5' />
                    </div>
                    <form onSubmit={handleEditReview}>
                        <div className="row">
                            <div className="col-lg-10">
                                <textarea className="form-control" id="floatingTextarea2" name="editedReview" defaultValue={review.reviewText}></textarea>
                            </div>
                            <div className="col-lg-2">
                                <button type='submit' className='register-logout-button rounded my-2'>Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditReview;