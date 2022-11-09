import React from 'react';
import './Blog.css';
import blogImg from '../../images/blog.gif';

const Blog = () => {
    return (
        <div className='blog '>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="rounded theme-color-shadow p-5 w-75 mx-auto text-center my-5">
                            <h4 className='theme-color-turquoise mb-4'>Difference between SQL and NoSQL</h4>
                            <p className='text-muted text-justify'>
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                            </p>
                        </div>
                        <div className="rounded theme-color-shadow p-5 w-75 mx-auto text-center my-5">
                            <h4 className='theme-color-turquoise mb-4'>What is JWT, and how does it work?</h4>
                            <p className='text-muted text-justify'>
                                JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued..
                            </p>
                        </div>
                        <div className="rounded theme-color-shadow p-5 w-75 mx-auto text-center my-5">
                            <h4 className='theme-color-turquoise  mb-4'>What is the difference between javascript and NodeJS?</h4>
                            <p className='text-muted text-justify'>
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            </p>
                        </div>
                        <div className="rounded theme-color-shadow p-5 w-75 mx-auto text-center my-5">
                            <h4 className='theme-color-turquoise mb-4'>How does NodeJS handle multiple requests at the same time?</h4>
                            <p className='text-muted text-justify'>
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <img src={blogImg} alt="girl is writing blog" className='position-fixed' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;