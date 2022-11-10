import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import './MyReview.css';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    const handleDeleteButton = (id) => {
        const proceed = window.confirm("Are you sure you want to delete this review?");
        if (!proceed) {
            return;
        }
        fetch(`https://page-tracer-server-site.vercel.app/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newReviewList = myReviews.filter(review => review._id !== id);
                    setMyReviews(newReviewList);
                    toast.info('Deleted Successfully', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            });
    }

    useEffect(() => {
        fetch(`https://page-tracer-server-site.vercel.app/orders?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user.email])

    return (
        <>
            <Helmet>
                <title>My Review</title>
            </Helmet>
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
            <ToastContainer />
        </>
    );
};

export default MyReview;