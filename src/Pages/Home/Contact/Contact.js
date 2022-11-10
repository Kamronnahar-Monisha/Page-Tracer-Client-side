import React, { useContext } from 'react';
import './Contact.css';
import discountImg from '../../../images/discount.svg';
import { AuthContext } from '../../../Context/AuthProvider';

const Contact = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="container">
            <div className='row justify-content-center align-items-center my-5'>
                <div className="col-lg-4">
                    <img src={discountImg} className="w-100" alt="" />
                </div>
                <div className="col-lg-4 text-center">
                    <h2 className='theme-color-turquoise'>Get Discount Information</h2>
                    <input className='form-control text-muted contact-email' type="text" defaultValue={user ? user.email : ""} />
                    <br />
                    <button className='contact-btn rounded fs-6'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;