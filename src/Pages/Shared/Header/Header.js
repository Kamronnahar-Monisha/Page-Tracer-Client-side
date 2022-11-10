import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo1.svg'
import { AuthContext } from '../../../Context/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = ({ children }) => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error.massage);
            })
    }

    return (
        <div className={children}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img width="40" src={logo} alt="logo of this website" />
                        <span className='text-white fs-4 fw-semibold'>PAGE TRACER</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link className="nav-link  text-white" to="/home">Home</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link  text-white" to="/services">Services</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link  text-white" to="/blog">Blog</Link>
                            </li>
                            {
                                user &&
                                <>
                                    <li className="nav-item ms-3">
                                        <Link className="nav-link  text-white" to="/my-review">My Review</Link>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <Link className="nav-link  text-white" to="/add-service">Add Service</Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item ms-3">
                                {
                                    user ?
                                        <>
                                            {
                                                (user?.photoURL) ?
                                                    <img width="40" height="40" src={user.photoURL} alt="user" className='rounded-circle me-3'
                                                        title={user.displayName} />
                                                    :
                                                    <FaUserAlt className='me-3'></FaUserAlt>
                                            }
                                            <button className='register-logout-button rounded' onClick={handleLogOut}>Log Out</button>
                                        </>
                                        :
                                        <>
                                            <Link to="/login" className='me-3'>
                                                <button className='login-button'>LogIn</button>
                                            </Link>
                                            <Link to="/register" className=''>
                                                <button className='register-logout-button'>Register</button>
                                            </Link>
                                        </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;