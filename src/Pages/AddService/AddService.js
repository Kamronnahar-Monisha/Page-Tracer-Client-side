import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddService.css';

const AddService = () => {
    const navigate = useNavigate();

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePhotoUrl = form.servicePhotoUrl.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = 4.5;
        const newService = {
            name: serviceName,
            img: servicePhotoUrl,
            description,
            rating,
            price
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service added Successfully');
                    navigate(`/services/${data.insertedId}`);
                }
            });
    }

    return (
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className='theme-color-shadow rounded p-5'>
                        <h3 className='theme-color-turquoise fw-bolder'>Let's Add A New Service !!</h3>
                        <form onSubmit={handleAddService}>
                            <div className="mb-3">
                                <label htmlFor="serviceName" className="form-label text-muted fw-bold">BookMark Name</label>
                                <input type="text" name='serviceName' className="form-control" id="serviceName" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="servicePhotoUrl" className="form-label text-muted fw-bold">BookMark Photo URL</label>
                                <input type="text" name='servicePhotoUrl' className="form-control" id="servicePhotoUrl" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label text-muted fw-bold">BookMark Price</label>
                                <input type="text" name='price' className="form-control" id="price" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label text-muted fw-bold">BookMark Description</label>
                                <textarea className="form-control" id="description" name="description" required></textarea>
                            </div>
                            <button type="submit" className="btn-custom rounded form-control">Add Service</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;