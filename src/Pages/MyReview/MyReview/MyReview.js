import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import './MyReview.css';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    const handleDeleteButton = (id) => {
        const proceed = window.confirm("Are you sure you want to delete this review?");
        if (!proceed) {
            return;
        }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newReviewList = myReviews.filter(review => review._id !== id);
                    setMyReviews(newReviewList);
                    alert("Deleted Successfully");
                }
            });
    }

    useEffect(() => {
        fetch(`http://localhost:5000/orders?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user.email])

    return (
        <>
            {
                myReviews.length ?
                    <div className='my-5'>
                        <div>
                            <h4 className='theme-color-gray text-center'>Give A Look To Your Reviews</h4>
                            <hr className='custom-hr mt-2 mb-5' />
                        </div>
                        {
                            myReviews.map(review => <MyReviewCard key={review._id} review={review} handleDeleteButton={handleDeleteButton}></MyReviewCard>)
                        }
                    </div>
                    :
                    <div className='row justify-content-center align-items-center vh-100'>
                        <div className="col-lg-6 text-center fs-3 theme-color-turquoise">
                            You didn't add any reviews yet....
                        </div>
                    </div>
            }
        </>
    );
};

export default MyReview;